/**
 * MOREMEETS™ TRIGGER EXISTENCE AUDIT — V4.0 (ISOLATED)
 * -----------------------------------------------------------
 * PURPOSE: PROVE THE SCRIPT FIRES AND CAN WRITE TO AN ISOLATED SACRIFICIAL CELL.
 * ACTION: WRITES TO Z1000/Z1001 ON ANY EDIT.
 * -----------------------------------------------------------
 * NO LOOPS. NO CONDITIONS. NO VAULT. NO GEOMETRY INTERFERENCE.
 */

export const APPS_SCRIPT_SOURCE = `
function onEdit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  
  // 1. TRIGGER SOURCE VALIDATION
  if (sheet.getName() !== "DAILY_TASKS") return;

  // 2. IMMEDIATE VISUAL TOAST
  ss.toast("TRIGGER_OK", "DIAGNOSTIC");

  Logger.log("--- SCRIPT_STARTED ---");
  Logger.log("SPREADSHEET_ID: " + ss.getId());
  Logger.log("USER_EMAIL: " + Session.getActiveUser().getEmail());

  try {
    // 3. TARGET ISOLATED SACRIFICIAL CELLS (Z1000, Z1001)
    const liveCell = sheet.getRange(1000, 26); // Z1000
    const timeCell = sheet.getRange(1001, 26); // Z1001
    
    Logger.log("BEFORE_Z1000_WRITE");
    
    liveCell.setValue("LIVE");
    timeCell.setValue(new Date().toString());
    
    Logger.log("AFTER_Z1000_WRITE");
    
  } catch (err) {
    Logger.log("CRITICAL_WRITE_FAILURE: " + err.toString());
    ss.toast("WRITE_CRASHED: " + err.toString(), "ERROR");
  }
}
`;
