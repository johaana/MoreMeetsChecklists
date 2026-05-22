/**
 * MOREMEETS™ SOVEREIGN AUDIT ENGINE — V3.6 (HARDENED)
 * -----------------------------------------------------
 * Trigger: fires on manual edit of DONE_BY or VERIFIED_BY.
 * Action: Appends immutable evidence to hidden _RECORDS_VAULT.
 * Hardening: Includes LockService, Flush+Sleep, and Multi-Unit Uniqueness.
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  VAULT_NAME: "_RECORDS_VAULT",
  // Layout Constants (Sovereign v17.5.1)
  BRANCH_COL: 1,       // A
  ROLE_COL: 2,         // B
  TASK_COL: 3,         // C
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  LOCK_TIMEOUT: 10000  // 10 seconds
};

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // 1. Trigger Filter: Only Column E or F in DAILY_TASKS
  if (sheet.getName() === CONFIG.SHEET_NAME && (col === CONFIG.DONE_BY_COL || col === CONFIG.VERIFIED_BY_COL) && row > 3) {
    
    // 2. Formula Latency Protection
    // Force Google Sheets to finish calculations before we read the status
    SpreadsheetApp.flush();
    Utilities.sleep(500); 
    
    const statusValue = sheet.getRange(row, CONFIG.STATUS_COL).getValue();
    
    // 3. Logic Gate: Only log if mission is COMPLETE
    if (statusValue === "COMPLETE") {
      const lock = LockService.getScriptLock();
      try {
        // 4. Race Condition Hardening
        // Ensure only one write operation happens at a time
        lock.waitLock(CONFIG.LOCK_TIMEOUT); 

        const vault = ss.getSheetByName(CONFIG.VAULT_NAME);
        if (!vault) return;

        const branch = sheet.getRange(row, CONFIG.BRANCH_COL).getValue();
        const role = sheet.getRange(row, CONFIG.ROLE_COL).getValue();
        const taskName = sheet.getRange(row, CONFIG.TASK_COL).getValue();
        const doneBy = sheet.getRange(row, CONFIG.DONE_BY_COL).getValue();
        const verifiedBy = sheet.getRange(row, CONFIG.VERIFIED_BY_COL).getValue();
        const today = new Date().setHours(0,0,0,0);
        
        // 5. Multi-Unit Uniqueness Key: [Date | Branch | Role | Task]
        const lastRow = vault.getLastRow();
        let isDuplicate = false;
        if (lastRow > 1) {
          // Scan the last 100 entries for matches to optimize performance
          const startRow = Math.max(2, lastRow - 100);
          const existingData = vault.getRange(startRow, 1, (lastRow - startRow) + 1, 4).getValues();
          
          isDuplicate = existingData.some(r => {
            const entryDate = new Date(r[0]).setHours(0,0,0,0);
            return entryDate === today && r[1] === branch && r[2] === role && r[3] === taskName;
          });
        }

        // 6. Commit Evidence
        if (!isDuplicate) {
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
          ss.toast("Vault Evidence Secured", "SOVEREIGN SYSTEM");
        }
      } catch (err) {
        console.error("Vault Logging Failed: " + err.toString());
      } finally {
        lock.releaseLock();
      }
    }
  }
}
`;
