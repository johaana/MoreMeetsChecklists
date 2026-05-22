/**
 * MOREMEETS™ TRIGGER EXISTENCE AUDIT — V5.0 (VISIBLE)
 * -----------------------------------------------------------
 * PURPOSE: PROVE THE SCRIPT FIRES AND CAN WRITE TO THE SHEET.
 * TARGET: L7 (Status), L8 (Time), L9 (Row)
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

  try {
    // 3. TARGET VISIBLE DIAGNOSTIC CELLS (L7, L8, L9)
    // Column L is index 12.
    
    sheet.getRange("L7").setValue("LIVE");
    sheet.getRange("L8").setValue(new Date().toString());
    
    if (e && e.range) {
      sheet.getRange("L9").setValue(e.range.getRow());
    }
    
    Logger.log("DIAGNOSTIC_WRITE_COMPLETE");
    
  } catch (err) {
    Logger.log("CRITICAL_WRITE_FAILURE: " + err.toString());
    ss.toast("WRITE_CRASHED: " + err.toString(), "ERROR");
  }
}
`;
