
export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V2.1 AUTOMATION ENGINE
 * -----------------------------------------
 * PURPOSE: Append-Only Static Recording & Smart Visibility
 * VERSION: PROTOTYPE-V2.1
 */

function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // CONFIG: DAILY_TASKS TRIGGER
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
      
      // 2. APPEND TO PERMANENT VAULT (RECORDS)
      const recordSheet = e.source.getSheetByName("RECORDS");
      if (recordSheet) {
        const rowData = sheet.getRange(row, 1, 1, 10).getValues()[0];
        
        // Push raw values to prevent formula migration
        // Format: [DATE, BRANCH, TASK, ASSIGNED, DONE_BY, VERIFIED, STATUS, TIME, ID, CADENCE]
        // Add placeholders for internal metadata: [PACK_VERSION, INCIDENT_FLAG]
        recordSheet.appendRow([...rowData, "V2.1", "NO"]);
      }
      
      // 3. UI FEEDBACK
      e.source.toast("Operational Evidence Secured in Vault.", "Sovereign Engine", 3);
    } else {
      // Clear timestamp if initials are removed
      timestampCell.clearContent();
    }
  }
}

/**
 * DAILY VISIBILITY: Filter Today
 * Runs on every sheet open to ensure "One Glance" efficiency
 */
function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  const today = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd");
  
  // Clear existing filters non-destructively
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // Apply fresh filter for TODAY's date in Column A
  const range = sheet.getRange(3, 1, sheet.getLastRow(), 10);
  const filter = range.createFilter();
  const criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextContains(today)
    .build();
  filter.setColumnFilterCriteria(1, criteria);
  
  ss.toast("Mission Ledger: Filtering for " + today, "Sovereign Active");
}
`;
