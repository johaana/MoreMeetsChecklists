/**
 * MOREMEETS™ SOVEREIGN V4.0 — LAYOUT-AWARE GOVERNANCE
 * -----------------------------------------------------
 * CORE PRINCIPLE: The operational zone (A:I) is sovereign.
 * The script operates primarily on the Overlay Zone (Z+).
 */

const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  // Operational Zone (Benchmark Geometry)
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  
  // Overlay Zone (Governance Namespace)
  OVL_DATE_COL: 26,    // Z
  OVL_DAY_COL: 27,     // AA
  OVL_STAMP_COL: 28,   // AB
  OVL_TASK_ID_COL: 29, // AC
  
  RECORDS_SHEET: "_RECORDS_VAULT",
  LOCK_TIMEOUT: 30000
};

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) return;
  
  // 1. CLEANUP STALE FILTERS
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  // 2. APPLY TODAY MISSION VIEW (Via Overlay Column Z)
  const timezone = ss.getSpreadsheetTimeZone();
  const todayStr = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  if (lastRow < 4) return;
  
  try {
    const range = sheet.getRange(3, 1, lastRow - 2, 30); // Coverage through Overlay
    const filter = range.createFilter();
    const criteria = SpreadsheetApp.newFilterCriteria()
      .whenTextEqualTo(todayStr)
      .build();
      
    filter.setColumnFilterCriteria(CONFIG.OVL_DATE_COL, criteria); 
    ss.toast("Sovereign V4.0: Today's Mission Loaded", "System Online");
  } catch (err) {
    ss.toast("Manual Filter Required: Overlay Date = " + todayStr, "Filter Error");
  }
}

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const sheetName = sheet.getName();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // TRIGGER: DONE BY or VERIFIED BY in the Sovereign Operational Zone
  if (sheetName === CONFIG.SHEET_NAME && (col === CONFIG.DONE_BY_COL || col === CONFIG.VERIFIED_BY_COL) && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(CONFIG.LOCK_TIMEOUT); 
      
      const statusValue = sheet.getRange(row, CONFIG.STATUS_COL).getValue();
      const stampCell = sheet.getRange(row, CONFIG.OVL_STAMP_COL); 
      const existingStamp = stampCell.getValue();
      
      if (statusValue === "COMPLETE") {
        if (existingStamp === "") {
          const now = new Date();
          const timestamp = Utilities.formatDate(now, ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm");
          stampCell.setValue(timestamp);
          
          const vault = ss.getSheetByName(CONFIG.RECORDS_SHEET);
          if (vault) {
            const rowData = sheet.getRange(row, 1, 1, 30).getValues()[0];
            vault.appendRow(rowData);
            ss.toast("Forensic Evidence Secured", "RECORDS_VAULT");
          }
        }
      } else if (col === CONFIG.DONE_BY_COL && range.getValue() === "") {
        stampCell.clearContent();
      }
    } catch (err) {
      ss.toast("Sync Delay: Record will update on reconnect.", "System Busy");
    } finally {
      lock.releaseLock();
    }
  }
}
