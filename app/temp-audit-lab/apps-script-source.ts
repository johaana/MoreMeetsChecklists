
/**
 * MOREMEETS™ SOVEREIGN V4.0.1 — LAYOUT-AWARE GOVERNANCE
 * -----------------------------------------------------
 * CORE PRINCIPLE: The operational zone (A:I) is sovereign.
 * Automation operates on inputs (E:F) and targets overlay (J, Z+).
 */

export const APPS_SCRIPT_SOURCE = `
const CONFIG = {
  SHEET_NAME: "DAILY_TASKS",
  // Benchmark Layout Constants (v17.5.1 Alignment)
  DONE_BY_COL: 5,      // E
  VERIFIED_BY_COL: 6,  // F
  STATUS_COL: 7,       // G
  STAMP_COL: 10,       // J
  
  // Overlay Projection (Z+)
  OVL_DATE_COL: 26,    // Z
  
  RECORDS_SHEET: "_RECORDS_VAULT",
  LOCK_TIMEOUT: 30000
};

function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) return;
  
  if (sheet.getFilter()) {
    sheet.getFilter().remove();
  }
  
  const timezone = ss.getSpreadsheetTimeZone();
  const todayStr = Utilities.formatDate(new Date(), timezone, "yyyy-MM-dd");
  const lastRow = sheet.getLastRow();
  if (lastRow < 4) return;
  
  try {
    const range = sheet.getRange(3, 1, lastRow - 2, 30);
    const filter = range.createFilter();
    const criteria = SpreadsheetApp.newFilterCriteria()
      .whenTextEqualTo(todayStr)
      .build();
      
    filter.setColumnFilterCriteria(CONFIG.OVL_DATE_COL, criteria); 
    ss.toast("Sovereign V4.0: Today's Mission Loaded", "System Online");
  } catch (err) {
    ss.toast("Check Date Filter: " + todayStr, "Filter Error");
  }
}

function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  if (sheet.getName() === CONFIG.SHEET_NAME && (col === CONFIG.DONE_BY_COL || col === CONFIG.VERIFIED_BY_COL) && row > 3) {
    const lock = LockService.getScriptLock();
    try {
      lock.waitLock(CONFIG.LOCK_TIMEOUT); 
      
      const statusValue = sheet.getRange(row, CONFIG.STATUS_COL).getValue();
      const stampCell = sheet.getRange(row, CONFIG.STAMP_COL); 
      
      if (statusValue === "COMPLETE" && stampCell.getValue() === "") {
        const timestamp = Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "dd-MMM-yyyy HH:mm");
        stampCell.setValue(timestamp);
        
        const vault = ss.getSheetByName(CONFIG.RECORDS_SHEET);
        if (vault) {
          const rowData = sheet.getRange(row, 1, 1, 30).getValues()[0];
          vault.appendRow(rowData);
          ss.toast("Forensic Evidence Secured", "RECORDS_VAULT");
        }
      }
    } finally {
      lock.releaseLock();
    }
  }
}
`;
