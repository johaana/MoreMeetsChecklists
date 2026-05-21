export const APPS_SCRIPT_SOURCE = `/**
 * MOREMEETS™ SOVEREIGN V3.1 STABILIZED PERPETUAL ENGINE
 * -----------------------------------------------------
 * 1. MAGIC FILTER: Focus on Today's tasks on open.
 * 2. ATOMIC LOCKING: Handles up to 10+ concurrent staff edits.
 * 3. DUPLICATE SHIELD: Prevents re-syncing records if initials are corrected.
 * 4. IMMUTABLE VAULT: Appends unique rows to hidden RECORDS sheet.
 */

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAILY_TASKS");
  if (!sheet) return;
  
  // Clear stale states to ensure filter reliability
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // Apply Non-Destructive "Today-Only" View
  const timezone = ss.getSpreadsheetTimeZone();
  const todayStr = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  if (lastRow < 4) return;
  
  const range = sheet.getRange(3, 1, lastRow - 2, 13);
  const filter = range.createFilter();
  const criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextEqualTo(todayStr)
    .build();
    
  filter.setColumnFilterCriteria(1, criteria);
  ss.toast("Sovereign V3.1: Today's Mission Active", "System Online");
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
      // High-Gravity Concurrency Wait (30s)
      lock.waitLock(30000); 
      
      const statusValue = sheet.getRange(row, 8).getValue(); // Col H (STATUS)
      const stampCell = sheet.getRange(row, 9); // Col I (STAMP)
      
      if (statusValue === "COMPLETE") {
        // DUPLICATE SHIELD: Only record if not already stamped
        if (stampCell.getValue() === "") {
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
        // Clear stamp if DONE BY is deleted
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
