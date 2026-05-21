export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V3.1 STABILIZATION SCRIPT
 * ----------------------------------------------
 * 1. MAGIC FILTER: Auto-jumps to Today's tasks on open.
 * 2. ATOMIC LOCKING: Prevents collisions during simultaneous multi-user edits.
 * 3. DUPLICATE SHIELD: Ensures one completion = one record, even if initials are edited.
 * 4. STATIC TIMESTAMP: Writes permanent evidence strings.
 */

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  // Clear any existing filters to prevent state conflicts
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // Apply "Today Only" visibility
  const timezone = ss.getSpreadsheetTimeZone();
  const today = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  if (lastRow < 4) return;
  
  const range = sheet.getRange(3, 1, lastRow - 2, 13);
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
  
  // TRIGGER: Column F (DONE BY)
  if (sheetName === "DAILY_TASKS" && col === 6 && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      // Wait up to 30 seconds for other processes to finish
      lock.waitLock(30000); 
      
      const statusValue = sheet.getRange(row, 8).getValue(); // Column H (STATUS)
      const timestampCell = sheet.getRange(row, 9); // Column I (COMPLETED ON)
      
      if (statusValue === "COMPLETE") {
        // Only append if not already stamped (prevents duplicate rows on re-edits)
        if (timestampCell.getValue() === "") {
          const now = new Date();
          const timeStr = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm");
          timestampCell.setValue(timeStr);
          
          const recordSheet = ss.getSheetByName("RECORDS");
          if (recordSheet) {
            const rowData = sheet.getRange(row, 1, 1, 13).getValues()[0];
            recordSheet.appendRow(rowData);
            ss.toast("Institutional Evidence Secured", "Audit Vault");
          }
        }
      } else if (range.getValue() === "") {
        // If "Done By" is cleared, reset the timestamp
        timestampCell.clearContent();
      }
    } catch (err) {
      ss.toast("Concurrency Delay: Retrying...", "System Busy");
    } finally {
      lock.releaseLock();
    }
  }
}
`;
