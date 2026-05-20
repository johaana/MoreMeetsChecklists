
export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V2 AUTOMATION ENGINE
 * -----------------------------------------
 * PURPOSE: Static Timestamping & Record Archiving
 * INSTALL: Extensions > Apps Script > Paste > Save
 */

function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // CONFIG: DAILY_TASKS is our active trigger zone
  // Column E (5) is "DONE BY"
  // Column H (8) is "COMPLETED ON"
  
  if (sheetName === "DAILY_TASKS" && col === 5 && row > 3) {
    const doneValue = range.getValue();
    const timestampCell = sheet.getRange(row, 8);
    
    if (doneValue !== "") {
      // 1. GENERATE STATIC TIMESTAMP
      const now = new Date();
      const timeStr = Utilities.formatDate(now, e.source.getSpreadsheetTimeZone(), "HH:mm:ss (dd-MMM)");
      timestampCell.setValue(timeStr);
      
      // 2. APPEND TO PERMANENT RECORDS
      const recordSheet = e.source.getSheetByName("RECORDS");
      if (recordSheet) {
        const rowData = sheet.getRange(row, 1, 1, 8).getValues()[0];
        recordSheet.appendRow(rowData);
        
        // 3. OPTIONAL: Lock the row in Records to prevent tampering
        // (Requires advanced permissions)
      }
      
      // 4. UI FEEDBACK
      e.source.toast("Audit Record Saved to Vault.", "Sovereign Engine", 3);
    } else {
      // Clear timestamp if Done By is deleted
      timestampCell.clearContent();
    }
  }
}

/**
 * DAILY MAINTENANCE: Auto-Filter Today
 * Runs every time the sheet is opened
 */
function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  const today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd");
  
  // Clear existing filters
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // Apply fresh filter for TODAY's date in Column A
  const range = sheet.getRange(4, 1, sheet.getLastRow(), 8);
  const filter = range.createFilter();
  const criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextContains(today)
    .build();
  filter.setColumnFilterCriteria(1, criteria);
  
  ss.toast("Filtered for: " + today, "Mission Ledger Active");
}
`;
