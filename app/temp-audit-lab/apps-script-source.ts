/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V4.6 (CACHE BYPASS)
 * -----------------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: 1. Writes visual forensic timestamp to Column J (Heartbeat).
 *         2. Appends immutable evidence to hidden _RECORDS_VAULT.
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  VAULT_NAME: "_RECORDS_VAULT",
  // Layout Constants (Sovereign v17.5.1 Parity)
  STATUS_COL: 7,       // G
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
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
  
  // Logic: Only watch edits in E (5) or F (6)
  if (startCol < 5 || startCol > 6 || startRow <= 3) return;

  Logger.log("--- MISSION DETECTED: Row " + startRow + " ---");

  // Force sheet to calculate and wait for formula stability
  SpreadsheetApp.flush();
  Utilities.sleep(1000); 
  
  const sessionId = Utilities.getUuid();
  const lock = LockService.getScriptLock();
  
  let successCount = 0;
  let failCount = 0;

  try {
    lock.waitLock(CONFIG.LOCK_TIMEOUT); 

    const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
    const tz = ss.getSpreadsheetTimeZone();
    const todayStr = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd");

    for (let i = 0; i < numRows; i++) {
      const currentRow = startRow + i;
      
      // CRITICAL: Read STATUS directly from cell to bypass onEdit cache
      const statusCell = sheet.getRange(currentRow, CONFIG.STATUS_COL);
      const statusValue = statusCell.getDisplayValue(); 
      
      Logger.log("Row " + currentRow + " | STATUS: " + statusValue);

      if (statusValue === "COMPLETE") {
        const branch = sheet.getRange(currentRow, 1).getValue();
        const role = sheet.getRange(currentRow, 2).getValue();
        const taskName = sheet.getRange(currentRow, 3).getValue();
        const doneBy = sheet.getRange(currentRow, 5).getValue();
        const verifiedBy = sheet.getRange(currentRow, 6).getValue();
        const stampCell = sheet.getRange(currentRow, CONFIG.STAMP_COL);
        const currentStamp = stampCell.getValue();

        const timestamp = Utilities.formatDate(new Date(), tz, "yyyy-MM-dd HH:mm:ss");

        // 1. HEARTBEAT WRITE (Visible Checkpoint)
        if (!currentStamp || currentStamp === "") {
          stampCell.setValue(timestamp);
          Logger.log("STAMP WRITTEN to row " + currentRow);
        }

        // 2. VAULT WRITE (Isolated try/catch)
        try {
          if (vault) {
            // Uniqueness check
            const lastRowVault = vault.getLastRow();
            let isDuplicate = false;
            if (lastRowVault > 1) {
              const startScan = Math.max(2, lastRowVault - 100);
              const vaultData = vault.getRange(startScan, 1, (lastRowVault - startScan) + 1, 4).getValues();
              const currentKey = todayStr + "|" + branch + "|" + role + "|" + taskName;
              isDuplicate = vaultData.some(r => {
                 const d = Utilities.formatDate(new Date(r[0]), tz, "yyyy-MM-dd");
                 return (d + "|" + r[1] + "|" + r[2] + "|" + r[3]) === currentKey;
              });
            }

            if (!isDuplicate) {
              vault.appendRow([new Date(), branch, role, taskName, doneBy, verifiedBy, statusValue, timestamp, Session.getActiveUser().getEmail() || "Anonymous", sessionId]);
              successCount++;
            }
          }
        } catch (vErr) {
          Logger.log("Vault Append Failed: " + vErr.toString());
          failCount++;
        }
      }
    }

    if (successCount > 0 || failCount > 0) {
      const msg = successCount + "/" + numRows + " records secured" + (failCount > 0 ? " (" + failCount + " FAILED)" : "");
      ss.toast(msg, "SOVEREIGN SYSTEM");
    }

  } catch (err) {
    Logger.log("Sovereign Critical: " + err.toString());
    ss.toast("Connection latent. Re-try if STAMP missing.", "SYNC DELAY");
  } finally {
    lock.releaseLock();
  }
}
`;