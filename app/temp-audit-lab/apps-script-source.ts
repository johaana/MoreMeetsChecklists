/**
 * MOREMEETS™ SOVEREIGN TRIGGER AUDIT — V1.0
 * -----------------------------------------------------------
 * PHASE C: TRIGGER EXISTENCE AUDIT
 * PURPOSE: PROVE THE SCRIPT FIRES AND CAN WRITE TO THE SHEET.
 * ACTION: OVERWRITES A1/A2 WITH STATUS ON ANY EDIT.
 * -----------------------------------------------------------
 * NO LOOPS. NO CONDITIONS. NO VAULT. NO COLUMN J.
 */

export const APPS_SCRIPT_SOURCE = `
function onEdit(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  
  // 1. IMMEDIATE VISUAL TOAST
  ss.toast("TRIGGER_OK", "AUDIT");

  Logger.log("--- AUDIT_START ---");
  Logger.log("SPREADSHEET_ID: " + ss.getId());
  Logger.log("SHEET_NAME: " + sheet.getName());
  
  try {
    Logger.log("USER_IDENTITY: " + Session.getActiveUser().getEmail());
  } catch (err) {
    Logger.log("USER_IDENTITY_BLOCKED: " + err.toString());
  }

  // 2. ONLY TARGET DAILY_TASKS FOR AUDIT
  if (sheet.getName() !== "DAILY_TASKS") {
    Logger.log("EXIT: NOT_DAILY_TASKS");
    return;
  }

  try {
    Logger.log("BEFORE_A1_WRITE");
    
    // 3. GIGANTIC VISIBLE INDICATORS
    sheet.getRange("A1").setValue("TRIGGER_WORKING");
    sheet.getRange("A2").setValue("LAST_FIRE: " + new Date().toString());
    
    Logger.log("AFTER_A1_WRITE");
    ss.toast("WRITE_SUCCESS", "AUDIT");
    
  } catch (err) {
    Logger.log("CRITICAL_WRITE_FAILURE: " + err.toString());
    ss.toast("WRITE_CRASHED: " + err.toString(), "ERROR");
  }
}
`;
