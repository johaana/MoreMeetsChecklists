export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V2.2 AUTOMATION ENGINE
 * -----------------------------------------
 * PURPOSE: Concurrency-Safe Evidence Recording
 * VERSION: HARDENED-V2.2
 */

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // TRIGGER: DAILY_TASKS Column F (6) - DONE BY
  if (sheetName === "DAILY_TASKS" && col === 6 && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(5000); // Concurrency protection for simultaneous edits
      
      const doneValue = range.getValue();
      const timestampCell = sheet.getRange(row, 9); // Column I
      
      if (doneValue !== "") {
        // 1. GENERATE STATIC TIMESTAMP (STRING VALUE)
        const now = new Date();
        const timeStr = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
        timestampCell.setValue(timeStr);
        
        // 2. APPEND TO PERMANENT VAULT (RECORDS)
        const recordSheet = ss.getSheetByName("RECORDS");
        if (recordSheet) {
          const rowData = sheet.getRange(row, 1, 1, 13).getValues()[0];
          recordSheet.appendRow(rowData);
        }
        
        ss.toast("Institutional Evidence Secured.", "Sovereign Engine", 3);
      } else {
        timestampCell.clearContent();
      }
    } catch (err) {
      ss.toast("Lock timeout: Evidence retry pending.", "System Busy", 3);
    } finally {
      lock.releaseLock();
    }
  }
}

/**
 * MISSION VISIBILITY: Auto-Filter for Today
 */
function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  const today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd");
  
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  const lastRow = sheet.getLastRow();
  if (lastRow > 3) {
    const range = sheet.getRange(3, 1, lastRow, 13);
    const filter = range.createFilter();
    const criteria = SpreadsheetApp.newFilterCriteria()
      .whenTextContains(today)
      .build();
    filter.setColumnFilterCriteria(1, criteria);
    
    ss.toast("Mission Ledger: Filtering for " + today, "Sovereign Active");
  }
}
`;
