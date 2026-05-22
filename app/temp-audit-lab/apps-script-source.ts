
/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V3.5 (VAULT-ONLY)
 * -----------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: Appends immutable evidence to hidden _RECORDS_VAULT.
 * Safety: Uses vault-lookup for duplicate prevention. No extra columns needed.
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
  
  // 1. Trigger Filter: Only Column E (5) or F (6) in DAILY_TASKS
  if (sheet.getName() === CONFIG.SHEET_NAME && (col === CONFIG.DONE_BY_COL || col === CONFIG.VERIFIED_BY_COL) && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(CONFIG.LOCK_TIMEOUT); 
      
      const statusValue = sheet.getRange(row, CONFIG.STATUS_COL).getValue();
      
      // 2. Logic Gate: Only log if mission is COMPLETE
      if (statusValue === "COMPLETE") {
        const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
        if (!vault) return;

        const taskName = sheet.getRange(row, CONFIG.TASK_COL).getValue();
        const doneBy = sheet.getRange(row, CONFIG.DONE_BY_COL).getValue();
        const verifiedBy = sheet.getRange(row, CONFIG.VERIFIED_BY_COL).getValue();
        const today = new Date().setHours(0,0,0,0);
        
        // 3. Duplicate Prevention: Check vault for [Today's Date] + [Task Name]
        const lastRow = vault.getLastRow();
        let isDuplicate = false;
        if (lastRow > 3) {
          const existingData = vault.getRange(4, 1, lastRow - 3, 2).getValues();
          isDuplicate = existingData.some(r => {
            const entryDate = new Date(r[0]).setHours(0,0,0,0);
            return entryDate === today && r[1] === taskName;
          });
        }

        // 4. Commit Evidence
        if (!isDuplicate) {
          const timestamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
          vault.appendRow([
            new Date(), 
            taskName,
            doneBy,
            verifiedBy,
            statusValue,
            timestamp
          ]);
          ss.toast("Audit Evidence Secured", "SOVEREIGN SYSTEM");
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
