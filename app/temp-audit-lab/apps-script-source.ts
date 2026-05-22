
/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V3.0 (LAYOUT-AWARE)
 * -----------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: Appends immutable evidence to hidden _RECORDS_VAULT.
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  VAULT_NAME: "_RECORDS_VAULT",
  // Benchmark Layout Constants (v17.5.1)
  TASK_COL: 3,         // C
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  LOCK_TIMEOUT: 30000
};

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // Trigger on signature cells (DONE BY or VERIFIED BY)
  if (sheet.getName() === CONFIG.SHEET_NAME && (col === CONFIG.DONE_BY_COL || col === CONFIG.VERIFIED_BY_COL) && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(CONFIG.LOCK_TIMEOUT); 
      
      const statusValue = sheet.getRange(row, CONFIG.STATUS_COL).getValue();
      
      // Only log to vault if the mission is status-verified as COMPLETE
      if (statusValue === "COMPLETE") {
        const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
        if (vault) {
          const timestamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
          const taskName = sheet.getRange(row, CONFIG.TASK_COL).getValue();
          const doneBy = sheet.getRange(row, CONFIG.DONE_BY_COL).getValue();
          const verifiedBy = sheet.getRange(row, CONFIG.VERIFIED_BY_COL).getValue();
          
          // Vault Headers: DATE | TASK | DONE_BY | VERIFIED_BY | STATUS | STAMP
          vault.appendRow([
            new Date(), // Excel-friendly date object
            taskName,
            doneBy,
            verifiedBy,
            statusValue,
            timestamp  // Static string stamp
          ]);
          
          ss.toast("Audit Evidence Secured in Vault", "SOVEREIGN SYSTEM");
        }
      }
    } catch (err) {
      console.error("Vault Logging Failed: " + err.toString());
    } finally {
      lock.releaseLock();
    }
  }
}
`;
