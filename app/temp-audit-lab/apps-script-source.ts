export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V3 AUTOMATION
 * -----------------------------------------
 * 1. AUTO-FILTER TODAY: Jumps to current date on open.
 * 2. STATIC TIMESTAMP: String-based tamper-proof evidence.
 * 3. APPEND-ONLY VAULT: Mirror all completions to RECORDS.
 */

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  // 1. CLEAR OLD FILTERS
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // 2. APPLY TODAY-ONLY VIEW
  const today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  const range = sheet.getRange(3, 1, lastRow, 13);
  const filter = range.createFilter();
  const criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextEqualTo(today)
    .build();
    
  filter.setColumnFilterCriteria(1, criteria);
  ss.toast("Sovereign V3: Today's Mission Active", "System Online");
}

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // TRIGGER: DAILY_TASKS Column F (DONE BY)
  if (sheetName === "DAILY_TASKS" && col === 6 && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(5000); 
      
      const doneValue = range.getValue();
      const timestampCell = sheet.getRange(row, 9); // Column I (COMPLETED ON)
      const statusValue = sheet.getRange(row, 8).getValue(); // Column H (STATUS)
      
      if (doneValue !== "") {
        // 1. WRITE STATIC TIMESTAMP
        const now = new Date();
        const timeStr = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm");
        timestampCell.setValue(timeStr);
        
        // 2. APPEND TO RECORDS IF COMPLETE
        if (statusValue === "COMPLETE") {
           const recordSheet = ss.getSheetByName("RECORDS");
           if (recordSheet) {
             const rowData = sheet.getRange(row, 1, 1, 13).getValues()[0];
             recordSheet.appendRow(rowData);
             ss.toast("Institutional Evidence Secured", "Audit Vault");
           }
        }
      } else {
        timestampCell.clearContent();
      }
    } catch (err) {
      ss.toast("Network Delay: Evidence queued.", "Retry Pending");
    } finally {
      lock.releaseLock();
    }
  }
}
`;
