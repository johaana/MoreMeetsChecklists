/**
 * MOREMEETS™ AUDIT ENGINE — FINAL STABLE
 * --------------------------------------
 * DAILY_TASKS
 * E = DONE BY
 * F = VERIFIED BY
 * G = STATUS
 * J = STAMP
 */

export const APPS_SCRIPT_SOURCE = `
function onEdit(e) {
  try {
    const sheet = e.range.getSheet();
    if (sheet.getName() !== "DAILY_TASKS") return;

    const startRow = e.range.getRow();
    const numRows = e.range.getNumRows();
    const startCol = e.range.getColumn();
    const endCol = startCol + e.range.getNumColumns() - 1;

    // Only react to DONE BY (E) or VERIFIED BY (F) edits
    if (endCol < 5 || startCol > 6) return;

    SpreadsheetApp.flush();
    let stamped = 0;

    // Process every edited row in the range
    for (let i = 0; i < numRows; i++) {
      const row = startRow + i;
      let status = "";

      // Retry loop for formula latency (gives Sheets time to calculate COMPLETE)
      for (let retry = 0; retry < 6; retry++) {
        Utilities.sleep(500);
        SpreadsheetApp.flush();
        status = sheet.getRange(row, 7).getDisplayValue().trim();
        if (status === "COMPLETE") break;
      }

      const stampCell = sheet.getRange(row, 10);
      const existingStamp = stampCell.getValue();

      // Stamp only if row is COMPLETE and no stamp exists yet
      if (status === "COMPLETE" && !existingStamp) {
        const timestamp = Utilities.formatDate(
          new Date(),
          Session.getScriptTimeZone(),
          "yyyy-MM-dd HH:mm:ss"
        );
        stampCell.setValue(timestamp);
        stamped++;
      }
    }

    if (stamped > 0) {
      SpreadsheetApp.getActiveSpreadsheet().toast(
        stamped + " audit records secured",
        "SUCCESS",
        3
      );
    }
  } catch (err) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      "ERROR: " + err.toString(),
      "AUDIT ENGINE",
      5
    );
  }
}

/**
 * REPAIR TOOL: BACKFILL OLD COMPLETE ROWS
 */
function backfillStamps() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DAILY_TASKS");
  const lastRow = sheet.getLastRow();
  let fixed = 0;

  for (let row = 4; row <= lastRow; row++) {
    const status = sheet.getRange(row, 7).getDisplayValue().trim();
    const stamp = sheet.getRange(row, 10).getValue();

    if (status === "COMPLETE" && !stamp) {
      const timestamp = Utilities.formatDate(
        new Date(),
        Session.getScriptTimeZone(),
        "yyyy-MM-dd HH:mm:ss"
      );
      sheet.getRange(row, 10).setValue(timestamp);
      fixed++;
      Utilities.sleep(25);
    }
  }
  SpreadsheetApp.getActiveSpreadsheet().toast(
    fixed + " rows repaired",
    "BACKFILL COMPLETE",
    5
  );
}
`;
