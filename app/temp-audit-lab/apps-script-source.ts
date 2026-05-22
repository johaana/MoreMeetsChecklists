/**
 * MOREMEETS™ SOVEREIGN FORENSIC BYPASS — V2.0
 * -----------------------------------------------------------
 * PHASE B: HARD FORENSIC TRACE
 * PURPOSE: PROVE PHYSICAL WRITE ACCESS TO CELL J2.
 * ACTION: WRITES "LIVE" TO J2 ON ANY EDIT IN DAILY_TASKS.
 * -----------------------------------------------------------
 * NO LOOPS. NO VAULT. NO STATUS CHECKS.
 */

export const APPS_SCRIPT_SOURCE = `
function onEdit(e) {
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  
  // 1. VISUAL TOAST - APPEARS INSTANTLY IF TRIGGER FIRES
  ss.toast("SCRIPT_FIRED", "DIAGNOSTIC");

  Logger.log("--- TRIGGER_START ---");
  Logger.log("SHEET_NAME: " + sheet.getName());
  Logger.log("USER_IDENTITY: " + Session.getActiveUser().getEmail());

  // 2. TARGET ONLY DAILY_TASKS
  if (sheet.getName() !== "DAILY_TASKS") {
    Logger.log("EXIT: NOT_DAILY_TASKS_SHEET");
    return;
  }

  try {
    Logger.log("BEFORE_WRITE_J2");
    
    // 3. NAKED WRITE TEST - ATTEMPT TO MODIFY CELL J2
    sheet.getRange("J2").setValue("LIVE");
    
    Logger.log("AFTER_WRITE_J2");
    ss.toast("WRITE_SUCCESS", "DIAGNOSTIC");
    
  } catch (err) {
    Logger.log("CRITICAL_WRITE_FAILURE: " + err.toString());
    ss.toast("WRITE_CRASHED: " + err.toString(), "ERROR");
  }
}
`;
