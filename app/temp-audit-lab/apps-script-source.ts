/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V4.4 (ATOMIC RESILIENCE)
 * -----------------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: 1. Writes visual forensic timestamp to Column J (Heartbeat).
 *         2. Appends immutable evidence to hidden _RECORDS_VAULT.
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  VAULT_NAME: "_RECORDS_VAULT",
  // Layout Constants (Sovereign v17.5.1 Parity + Heartbeat J)
  BRANCH_COL: 1,       // A
  ROLE_COL: 2,         // B
  TASK_COL: 3,         // C
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  STAMP_COL: 10,       // J (Heartbeat)
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
  
  // Detect if edit happened in DONE_BY (E) or VERIFIED_BY (F)
  const isRelevantEdit = (startCol <= CONFIG.VERIFIED_BY_COL && (startCol + numCols - 1) >= CONFIG.DONE_BY_COL);
  if (!isRelevantEdit || startRow <= 3) return;

  const sessionId = Utilities.getUuid();
  const userEmail = Session.getActiveUser().getEmail() || "Anonymous/SimpleTrigger";

  // Force calculation stability
  SpreadsheetApp.flush();
  Utilities.sleep(800); 
  
  const lock = LockService.getScriptLock();
  let vaultedCount = 0;
  let heartbeatCount = 0;
  let vaultFailureCount = 0;
  let totalCompleteInRange = 0;

  try {
    lock.waitLock(CONFIG.LOCK_TIMEOUT); 

    const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
    const dataRange = sheet.getRange(startRow, 1, numRows, CONFIG.STAMP_COL);
    const dataValues = dataRange.getValues();
    const tz = ss.getSpreadsheetTimeZone();
    const todayStr = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd");
    
    // Uniqueness Cache (Last 500 records)
    let existingKeys = [];
    if (vault) {
      const lastRowVault = vault.getLastRow();
      if (lastRowVault > 1) {
        const startScan = Math.max(2, lastRowVault - 500); 
        const vaultData = vault.getRange(startScan, 1, (lastRowVault - startScan) + 1, 4).getValues();
        existingKeys = vaultData.map(r => {
           const d = Utilities.formatDate(new Date(r[0]), tz, "yyyy-MM-dd");
           return d + "|" + r[1] + "|" + r[2] + "|" + r[3];
        });
      }
    }

    for (let i = 0; i < numRows; i++) {
      const rowData = dataValues[i];
      const statusValue = rowData[6]; // Column G
      const currentStamp = rowData[9]; // Column J

      if (statusValue === "COMPLETE") {
        totalCompleteInRange++;
        const branch = rowData[0];
        const role = rowData[1];
        const taskName = rowData[2];
        const doneBy = rowData[4];
        const verifiedBy = rowData[5];
        const currentKey = todayStr + "|" + branch + "|" + role + "|" + taskName;
        
        const timestamp = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd HH:mm:ss");

        // 1. HEARTBEAT WRITE (Visual Proof First)
        if (!currentStamp || currentStamp === "") {
          sheet.getRange(startRow + i, CONFIG.STAMP_COL).setValue(timestamp);
          heartbeatCount++;
        }

        // 2. VAULT WRITE (Atomic Isolation)
        if (existingKeys.indexOf(currentKey) === -1) {
          try {
            if (vault) {
              vault.appendRow([new Date(), branch, role, taskName, doneBy, verifiedBy, statusValue, timestamp, userEmail, sessionId]);
              vaultedCount++;
              existingKeys.push(currentKey);
            } else {
              throw new Error("Vault not found");
            }
          } catch (vaultErr) {
            Logger.log("Vault failed for row " + (startRow + i) + ": " + vaultErr.toString());
            vaultFailureCount++;
          }
        }
      }
    }

    // Comprehensive Feedback
    if (totalCompleteInRange > 0) {
      let msg = vaultedCount + "/" + totalCompleteInRange + " audit records secured.";
      if (vaultFailureCount > 0) msg += " (" + vaultFailureCount + " FAILED)";
      ss.toast(msg, "SOVEREIGN SYSTEM");
    }

  } catch (err) {
    Logger.log("Sovereign Critical Error: " + err.toString());
    ss.toast("Audit link interrupted. Try again.", "SYNC ERROR");
  } finally {
    lock.releaseLock();
  }
}
`;