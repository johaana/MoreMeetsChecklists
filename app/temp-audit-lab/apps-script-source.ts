/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V3.8 (BULK-AWARE)
 * -----------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: Appends immutable evidence to hidden _RECORDS_VAULT.
 * Features: Multi-cell range support, duplicate shielding, and toast feedback.
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
  LOCK_TIMEOUT: 15000  // 15 seconds
};

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  
  // 1. Trigger Filter: Only run if DAILY_TASKS is edited
  if (sheet.getName() !== CONFIG.SHEET_NAME) return;
  
  const startRow = range.getRow();
  const numRows = range.getNumRows();
  const startCol = range.getColumn();
  const numCols = range.getNumCols();
  
  // Only process if the edit overlaps with DONE_BY (5) or VERIFIED_BY (6)
  const isRelevantEdit = (startCol <= CONFIG.VERIFIED_BY_COL && (startCol + numCols - 1) >= CONFIG.DONE_BY_COL);
  if (!isRelevantEdit || startRow <= 3) return;

  // 2. Formula Latency Protection (Single pass)
  SpreadsheetApp.flush();
  Utilities.sleep(500); 
  
  const lock = LockService.getScriptLock();
  let vaultCount = 0;

  try {
    lock.waitLock(CONFIG.LOCK_TIMEOUT); 

    const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
    if (!vault) return;

    // 3. Batch Read for Performance
    // We read the entire edited range + the necessary metadata columns
    const totalDataRange = sheet.getRange(startRow, 1, numRows, CONFIG.STATUS_COL);
    const dataValues = totalDataRange.getValues();
    const today = new Date().setHours(0,0,0,0);
    const lastRowVault = vault.getLastRow();
    
    // Read existing vault keys for duplicate checking
    let existingKeys = [];
    if (lastRowVault > 1) {
      const startScan = Math.max(2, lastRowVault - 500); // Scan last 500 entries
      const vaultData = vault.getRange(startScan, 1, (lastRowVault - startScan) + 1, 4).getValues();
      existingKeys = vaultData.map(r => {
        return new Date(r[0]).setHours(0,0,0,0) + "|" + r[1] + "|" + r[2] + "|" + r[3];
      });
    }

    // 4. Batch Process Every Row in edited range
    for (let i = 0; i < numRows; i++) {
      const rowData = dataValues[i];
      const branch = rowData[0];
      const role = rowData[1];
      const taskName = rowData[2];
      const doneBy = rowData[4];
      const verifiedBy = rowData[5];
      const statusValue = rowData[6];

      // Logic Gate: Only log if mission is COMPLETE
      if (statusValue === "COMPLETE") {
        const currentKey = today + "|" + branch + "|" + role + "|" + taskName;
        
        if (existingKeys.indexOf(currentKey) === -1) {
          const timestamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
          vault.appendRow([
            new Date(), 
            branch,
            role,
            taskName,
            doneBy,
            verifiedBy,
            statusValue,
            timestamp
          ]);
          vaultCount++;
          // Add to current session keys to prevent duplicates within same batch
          existingKeys.push(currentKey);
        }
      }
    }

    // 5. User Feedback
    if (vaultCount > 0) {
      ss.toast(vaultCount + " audit records secured in vault.", "SOVEREIGN SYSTEM");
    }

  } catch (err) {
    Logger.log("Sovereign Engine Error: " + err.toString());
    ss.toast("Audit logging failed. Contact administrator.", "CRITICAL ERROR", 10);
  } finally {
    lock.releaseLock();
  }
}
`;
