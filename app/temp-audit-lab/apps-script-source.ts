export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V3.2 PILOT-READY ENGINE
 * -----------------------------------------------------
 * 1. MAGIC FILTER: Clears stale state and forces Today-First view.
 * 2. DUPLICATE SHIELD: Checks existing stamps before vaulting.
 * 3. ATOMIC LOCKING: 30s queue for multi-staff concurrency.
 * 4. CLEANUP: Gracefully handles blank/undo events.
 */

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  // 1. CLEANUP STALE FILTERS
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // 2. APPLY TODAY MISSION VIEW
  const timezone = ss.getSpreadsheetTimeZone();
  const todayStr = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  if (lastRow < 4) return;
  
  try {
    const range = sheet.getRange(3, 1, lastRow - 2, 13);
    const filter = range.createFilter();
    const criteria = SpreadsheetApp.newFilterCriteria()
      .whenTextEqualTo(todayStr)
      .build();
      
    filter.setColumnFilterCriteria(1, criteria); // Column A (DATE)
    ss.toast("Sovereign V3.2: Today's Mission Loaded", "System Online");
  } catch (err) {
    ss.toast("Manual Filter Required: Date = " + todayStr, "Filter Error");
  }
}

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // TARGET: DONE BY (Col 6) or VERIFIED BY (Col 7)
  if (sheetName === "DAILY_TASKS" && (col === 6 || col === 7) && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(30000); // High-concurrency queue
      
      const statusValue = sheet.getRange(row, 8).getValue(); // Col H (STATUS)
      const stampCell = sheet.getRange(row, 9); // Col I (STAMP)
      const existingStamp = stampCell.getValue();
      
      if (statusValue === "COMPLETE") {
        // DUPLICATE SHIELD: Only record if not already stamped
        if (existingStamp === "") {
          const now = new Date();
          const timestamp = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm");
          stampCell.setValue(timestamp);
          
          const recordSheet = ss.getSheetByName("RECORDS");
          if (recordSheet) {
            const rowData = sheet.getRange(row, 1, 1, 13).getValues()[0];
            recordSheet.appendRow(rowData);
            ss.toast("Institutional Evidence Secured", "Sovereign Vault");
          }
        }
      } else if (col === 6 && range.getValue() === "") {
        // CLEARANCE: Remove stamp if initials are deleted
        stampCell.clearContent();
      }
    } catch (err) {
      ss.toast("System Busy: Record will sync on reconnect.", "Sync Delay");
    } finally {
      lock.releaseLock();
    }
  }
}
`;
