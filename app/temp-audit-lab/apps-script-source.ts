export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V2.1 AUTOMATION ENGINE
 * -----------------------------------------
 * PURPOSE: Append-Only Static Recording & Non-Destructive Visibility
 * VERSION: LABORATORY-V2.1 (PROTOTYPE)
 */

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // CONFIG: DAILY_TASKS TRIGGER
  // Column E (5) is "DONE BY"
  // Column H (8) is "COMPLETED ON (STAMP)"
  
  if (sheetName === "DAILY_TASKS" && col === 5 && row > 3) {
    const doneValue = range.getValue();
    const timestampCell = sheet.getRange(row, 8);
    
    if (doneValue !== "") {
      // 1. GENERATE STATIC TIMESTAMP (STRING ONLY)
      const now = new Date();
      const timeStr = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm:ss");
      timestampCell.setValue(timeStr);
      
      // 2. APPEND TO PERMANENT VAULT (RECORDS)
      const recordSheet = ss.getSheetByName("RECORDS");
      if (recordSheet) {
        // Read full row data from DAILY_TASKS [Date, Branch, Task, Assigned, Done, Verified, Status, Stamp, ID, Cadence]
        const rowData = sheet.getRange(row, 1, 1, 10).getValues()[0];
        
        // Push static values to Vault + Metadata [PACK_VERSION, INCIDENT_FLAG]
        // Final Record Format: 
        // [DATE, BRANCH, TASK, ASSIGNED, DONE_BY, VERIFIED, STATUS, TIMESTAMP, TASK_ID, CADENCE, PK_VER, INCIDENT]
        recordSheet.appendRow([...rowData, "V2.1", "NO"]);
      }
      
      // 3. UI FEEDBACK
      ss.toast("Institutional Evidence Secured in RECORDS vault.", "Sovereign Engine", 3);
    } else {
      // Clear timestamp if initials are removed
      timestampCell.clearContent();
    }
  }
}

/**
 * MISSION VISIBILITY: Filter Today
 * Runs on every sheet open to ensure "One Glance" efficiency.
 * Non-destructive: only applies a filter to Column A.
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
  const lastRow = sheet.getLastRow();
  if (lastRow > 3) {
    const range = sheet.getRange(3, 1, lastRow, 10);
    const filter = range.createFilter();
    const criteria = SpreadsheetApp.newFilterCriteria()
      .whenTextContains(today)
      .build();
    filter.setColumnFilterCriteria(1, criteria);
    
    ss.toast("Mission Ledger: Filtering for " + today, "Sovereign Active");
  }
}
`;
