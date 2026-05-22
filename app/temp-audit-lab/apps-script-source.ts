/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V4.0 (ATOMIC RESILIENCE)
 * -----------------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: Appends immutable evidence to hidden _RECORDS_VAULT.
 * Features: Atomic row isolation, Session tracking, and Precise feedback.
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  VAULT_NAME: "_RECORDS_VAULT",
  // Layout Constants (Sovereign v17.5.1 Parity)
  BRANCH_COL: 1,       // A
  ROLE_COL: 2,         // B
  TASK_COL: 3,         // C
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  LOCK_TIMEOUT: 20000  // 20 seconds
};

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  
  if (sheet.getName() !== CONFIG.SHEET_NAME) return;
  
  const startRow = range.getRow();
  const numRows = range.getNumRows();
  const startCol = range.getColumn();
  const numCols = range.getNumCols();
  
  const isRelevantEdit = (startCol <= CONFIG.VERIFIED_BY_COL && (startCol + numCols - 1) >= CONFIG.DONE_BY_COL);
  if (!isRelevantEdit || startRow <= 3) return;

  // Generate Session Metadata
  const sessionId = Utilities.getUuid();
  const userEmail = Session.getActiveUser().getEmail() || "Anonymous/SimpleTrigger";

  SpreadsheetApp.flush();
  Utilities.sleep(500); 
  
  const lock = LockService.getScriptLock();
  let successCount = 0;
  let failureCount = 0;
  let attemptCount = 0;

  try {
    lock.waitLock(CONFIG.LOCK_TIMEOUT); 

    const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
    if (!vault) return;

    const totalDataRange = sheet.getRange(startRow, 1, numRows, CONFIG.STATUS_COL);
    const dataValues = totalDataRange.getValues();
    const today = new Date().setHours(0,0,0,0);
    
    // Uniqueness Cache (Optimized Scan)
    const lastRowVault = vault.getLastRow();
    let existingKeys = [];
    if (lastRowVault > 1) {
      const startScan = Math.max(2, lastRowVault - 500); 
      const vaultData = vault.getRange(startScan, 1, (lastRowVault - startScan) + 1, 4).getValues();
      existingKeys = vaultData.map(r => {
        return new Date(r[0]).setHours(0,0,0,0) + "|" + r[1] + "|" + r[2] + "|" + r[3];
      });
    }

    // Atomic Iteration
    for (let i = 0; i < numRows; i++) {
      const rowData = dataValues[i];
      const statusValue = rowData[6];

      if (statusValue === "COMPLETE") {
        attemptCount++;
        try {
          const branch = rowData[0];
          const role = rowData[1];
          const taskName = rowData[2];
          const doneBy = rowData[4];
          const verifiedBy = rowData[5];
          const currentKey = today + "|" + branch + "|" + role + "|" + taskName;
          
          if (existingKeys.indexOf(currentKey) === -1) {
            const stamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
            vault.appendRow([
              new Date(), 
              branch,
              role,
              taskName,
              doneBy,
              verifiedBy,
              statusValue,
              stamp,
              userEmail,
              sessionId
            ]);
            successCount++;
            existingKeys.push(currentKey);
          }
        } catch (rowErr) {
          failureCount++;
          Logger.log("Atomic Row Failure at Row " + (startRow + i) + ": " + rowErr.toString());
        }
      }
    }

    // Precise Feedback
    if (attemptCount > 0) {
      let message = successCount + "/" + attemptCount + " audit records secured.";
      if (failureCount > 0) message += " (" + failureCount + " FAILED)";
      ss.toast(message, "SOVEREIGN SYSTEM");
    }

  } catch (err) {
    Logger.log("Sovereign Critical Error: " + err.toString());
    ss.toast("Audit logging failed. Contact administrator.", "CRITICAL ERROR", 10);
  } finally {
    lock.releaseLock();
  }
}
`;