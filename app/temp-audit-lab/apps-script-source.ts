/**
 * MOREMEETS™ SOVEREIGN FORENSIC BYPASS — V1.0
 * -----------------------------------------------------------
 * PURPOSE: ISOLATE PHYSICAL WRITE ACCESS TO COLUMN J.
 * TRIGGER: FIRES ON ANY EDIT IN COLUMN E OR F.
 * ACTION: IMMEDIATELY WRITES "TEST_OK" TO COLUMN J.
 * -----------------------------------------------------------
 * NO STATUS CHECKS. NO VAULT. NO COMPLEXITY.
 */

export const APPS_SCRIPT_SOURCE = `
function onEdit(e) {
  Logger.log("--- TRIGGER_START ---");
  
  const ss = e.source;
  const sheet = ss.getActiveSheet();
  const range = e.range;
  
  if (sheet.getName() !== "DAILY_TASKS") {
    Logger.log("EXIT: Wrong Sheet - " + sheet.getName());
    return;
  }
  
  const startRow = range.getRow();
  const startCol = range.getColumn();
  
  Logger.log("COLS_CHECK: StartCol=" + startCol + " | Row=" + startRow);

  // Watch zone: E (5) and F (6)
  if (startCol < 5 || startCol > 6 || startRow <= 3) {
    Logger.log("EXIT: Outside Watch Zone");
    return;
  }

  try {
    Logger.log("BEFORE_STAMP_WRITE");
    
    // Attempt direct write to Column J (10)
    sheet.getRange(startRow, 10).setValue("TEST_OK");
    
    Logger.log("AFTER_STAMP_WRITE");
    ss.toast("FORENSIC SIGNAL SENT", "SYSTEM");
    
  } catch (err) {
    Logger.log("CRITICAL_FAILURE: " + err.toString());
  }
}
`;