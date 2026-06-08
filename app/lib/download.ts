
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import type { IndividualChecklist } from "@/lib/individual-checklists";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v23.4.0 CLEANUP EDITION
 * ----------------------------------------------------------------------------
 * 1. CENTRALIZED SOP: Move Reference Image to SOP_LIB as single source of truth.
 * 2. LEAN DAILY: DAILY_TASKS focused on execution; A-K columns frozen for script parity.
 * 3. COMPATIBILITY: Zero changes to audit/reset logic or formula chains.
 * ----------------------------------------------------------------------------
 */

const TABS = {
    START: "START",
    DASHBOARD: "DASHBOARD",
    DAILY_TASKS: "DAILY_TASKS",
    SOP_LIB: "SOP_LIB",
    BRANCH_SETUP: "BRANCH_SETUP",
    TEAM_HUB: "TEAM_HUB",
    SETUP_GUIDE: "SETUP_GUIDE", 
    SYS_ENGINE: "SYS_ENGINE",
    AUDIT: "AUDIT_2025",
    SNAPSHOT: "SNAPSHOT_YESTERDAY"
};

const APPS_SCRIPT_SOURCE = `
/**
 * SOVEREIGN CYCLE ENGINE v23.3
 * (C) 2025 MoreMeets™ Institutional Standards
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('MoreMeets™')
    .addItem('⚡ Run Archive & Reset Cycle', 'archiveAndResetCycle')
    .addSeparator()
    .addItem('📋 View Current Audit Log', 'selectAuditSheet')
    .addToUi();
}

/**
 * REAL-TIME SHADOW WRITE
 * Fires when a task reaches COMPLETE status via formulas.
 */
function onEdit(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const sheet = e.range.getSheet();
    if (sheet.getName() !== "DAILY_TASKS") return;

    const row = e.range.getRow();
    const col = e.range.getColumn();
    if (col < 5 || col > 6) return; // Watch 'Done By' (5) or 'Verified By' (6)

    SpreadsheetApp.flush();
    const status = sheet.getRange(row, 7).getDisplayValue().trim();
    
    if (status === "COMPLETE") {
      secureAuditEntry(sheet, row);
    }
  } catch (err) {
    console.error("Audit Write Failure: " + err.toString());
  } finally {
    lock.releaseLock();
  }
}

/**
 * CORE LOGGING LOGIC
 * Clones execution data into the Yearly Audit Ledger.
 */
function secureAuditEntry(sheet, row, forcedStatus) {
  const year = new Date().getFullYear();
  const auditSheetName = "AUDIT_" + year;
  let auditSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(auditSheetName);
  
  if (!auditSheet) {
    auditSheet = createAuditSheet(auditSheetName);
  }

  const lastRow = auditSheet.getLastRow();
  const destRow = lastRow + 1;
  
  const rowData = sheet.getRange(row, 1, 1, 11).getValues()[0];
  let timestamp = rowData[9]; // Column J
  
  // Apply stamp if missing
  if (!timestamp) {
    timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
    sheet.getRange(row, 10).setValue(timestamp);
  }

  const finalStatus = forcedStatus || rowData[6];
  const fingerprint = rowData[0] + "|" + rowData[2] + "|" + timestamp; // Branch|Task|Stamp

  // Duplicate Prevention
  if (!forcedStatus && isDuplicate(auditSheet, fingerprint)) return;

  // 1. Write metadata & execution data
  auditSheet.getRange(destRow, 1, 1, 8).setValues([[
    new Date(),   // Archive Date
    rowData[0],   // Branch (Col A)
    rowData[1],   // Role (Col B)
    rowData[2],   // Task (Col C)
    rowData[4],   // Done By (Col E)
    rowData[5],   // Verified By (Col F)
    finalStatus,  // Status
    timestamp     // Original Stamp (Col J)
  ]]);

  // 2. REQUIREMENT 2: Proof Preservation (Column K in DAILY_TASKS -> Column 9 in AUDIT)
  // Preserves images (Insert-in-cell) and hyperlinks.
  sheet.getRange(row, 11).copyTo(auditSheet.getRange(destRow, 9));

  // 3. REQUIREMENT 3: Source Reference (Column 10 in AUDIT)
  auditSheet.getRange(destRow, 10).setValue(sheet.getName());
}

function isDuplicate(sheet, fingerprint) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  // Branch is Col 2, Task is Col 4, Stamp is Col 8
  const data = sheet.getRange(Math.max(2, lastRow - 100), 2, Math.min(lastRow, 101), 7).getValues();
  for (let i = 0; i < data.length; i++) {
    const existing = data[i][0] + "|" + data[i][2] + "|" + data[i][6];
    if (existing === fingerprint) return true;
  }
  return false;
}

/**
 * NIGHTLY JANITOR & SWEEP
 */
function archiveAndResetCycle() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const taskSheet = ss.getSheetByName("DAILY_TASKS");
  const libSheet = ss.getSheetByName("SOP_LIB");
  const dashSheet = ss.getSheetByName("DASHBOARD");
  
  const lastRow = taskSheet.getLastRow();
  if (lastRow < 4) return;
  
  // 1. RECONCILIATION SWEEP
  for (let r = 4; r <= lastRow; r++) {
    const status = taskSheet.getRange(r, 7).getDisplayValue().trim();
    if (status === "COMPLETE") {
      secureAuditEntry(taskSheet, r);
    }
  }

  // 2. FAIL-SAFE SNAPSHOT
  let snapSheet = ss.getSheetByName("SNAPSHOT_YESTERDAY");
  if (snapSheet) ss.deleteSheet(snapSheet);
  snapSheet = taskSheet.copyTo(ss).setName("SNAPSHOT_YESTERDAY");
  snapSheet.setTabColor("#64748B");

  // 3. TARGETED FREQUENCY RESET
  const freqMap = getFrequencyMap(libSheet);
  const now = new Date();
  const isSunday = now.getDay() === 0;
  const isLastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() === now.getDate();

  for (let r = 4; r <= lastRow; r++) {
    const taskName = taskSheet.getRange(r, 3).getValue();
    const freq = freqMap[taskName] || "Daily";
    const status = taskSheet.getRange(r, 7).getDisplayValue().trim();

    let shouldReset = (freq === "Daily");
    if (freq === "Weekly" && isSunday) shouldReset = true;
    if (freq === "Monthly" && isLastDay) shouldReset = true;

    if (shouldReset) {
      if (status !== "COMPLETE") {
        secureAuditEntry(taskSheet, r, "MISSED");
      }
      taskSheet.getRange(r, 5, 1, 2).clearContent(); // E, F
      taskSheet.getRange(r, 10, 1, 2).clearContent(); // J, K
    }
  }

  // 4. SYSTEM HEARTBEAT
  dashSheet.getRange("B7").setValue(new Date());
  ss.toast("Sovereign Cycle Complete.", "SUCCESS");
}

function getFrequencyMap(libSheet) {
  const data = libSheet.getDataRange().getValues();
  const map = {};
  for (let i = 3; i < data.length; i++) {
    map[data[i][1]] = data[i][3]; 
  }
  return map;
}

/**
 * REQUIREMENT 1 & 3: Audit Creation & Positioning
 */
function createAuditSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // Insert at the far right
  const sheet = ss.insertSheet(name, ss.getSheets().length); 
  const headers = ["ARCHIVE DATE", "BRANCH", "ROLE", "TASK", "DONE BY", "VERIFIED BY", "STATUS", "AUDIT STAMP", "PROOF", "SOURCE"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
       .setFontWeight("bold")
       .setBackground("#0F172A")
       .setFontColor("#FFFFFF");
  sheet.setFrozenRows(1);
  return sheet;
}

function selectAuditSheet() {
  const year = new Date().getFullYear();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("AUDIT_" + year);
  if (sheet) sheet.activate();
}
`;

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text.replace(/\[?Risk:\s?\[?/gi, "").replace(/\]/g, "").trim();
};

export const handleDownload = (item: PremiumPack | IndividualChecklist, type?: string) => {
    try {
        if (!item) {
            throw new Error("Operational data not found.");
        }

        const wb = utils.book_new();
        const isAuditEnabled = item.priceINR > 0 || (item.priceUSD !== undefined && item.priceUSD > 0);

        const COLORS = {
            PRIMARY_GREEN: "22C55E",  
            HEADER_SLATE: "0F172A",   
            WHITE: "FFFFFF",     
            BORDER: "E2E8F0",    
            INPUT_YELLOW: "FEFCE8",   
            TEXT_MUTED: "64748B",  
            TEXT_ACTION: "065F46", 
            TEXT_RISK: "991B1B",
            LOCKED_GREY: "F1F5F9",
            BLOCK_ALT: "F8FAFC",
            RISK_RED: "DC2626"
        };

        const baseFont = { name: 'Segoe UI', sz: 10 };
        const vCenter = { vertical: 'center' };

        const borderStyle = {
            top: { style: 'thin', color: { rgb: COLORS.BORDER } },
            bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
            left: { style: 'thin', color: { rgb: COLORS.BORDER } },
            right: { style: 'thin', color: { rgb: COLORS.BORDER } }
        };

        const bannerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } },
            alignment: { horizontal: 'center', ...vCenter },
            border: borderStyle
        };

        const headerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_SLATE } },
            alignment: { horizontal: 'center', wrapText: true, ...vCenter },
            border: borderStyle
        };

        const getStyles = (isAlt: boolean) => {
            const fill = isAlt ? { patternType: 'solid', fgColor: { rgb: COLORS.BLOCK_ALT } } : undefined;
            return {
                left: { font: baseFont, fill, alignment: { horizontal: 'left', wrapText: true, ...vCenter }, border: borderStyle },
                center: { font: baseFont, fill, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
                right: { font: baseFont, fill, alignment: { horizontal: 'right', ...vCenter }, border: borderStyle },
                input: { font: { ...baseFont, color: "000000", bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
                locked: { font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle }
            };
        };

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'K') => {
            const headerData = [
                [{ v: `📋 ${title.replace('_', ' ')} — ${instruction}`, s: bannerStyle }],
                [] 
            ];
            utils.sheet_add_aoa(ws, headerData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
            ws['!views'] = [{ showGridLines: false }];
        };

        const normalizedChecklists: Checklist[] = 'checklists' in item 
            ? item.checklists 
            : [{
                title: item.title,
                department: item.category,
                frequency: "As Required",
                role: "Operator",
                summary: item.description,
                icon: item.icon,
                tasks: item.tasks
            }];

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            ...(isAuditEnabled ? [[{ v: "⚠️ MANDATORY STEP 0: SAVE AS GOOGLE SHEETS", s: { font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }, { v: "Go to File -> Save as Google Sheets. Only continue in the new file." }]] : []),
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab and name your locations." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign personnel." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [DAILY_TASKS] tab. Staff enter their initials." }],
            [],
            ...(isAuditEnabled ? [[{ v: "STEP 4: ACTIVATE AUDIT HEARTBEAT", s: { font: { bold: true } } }, { v: "Go to the [SETUP_GUIDE] tab for automation instructions." }]] : []),
            [],
            [{ v: "⚠️ SAMPLE DATA NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
            [{ v: "Replace all YELLOW cells with your own local details to begin." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 35 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 02. DASHBOARD ---
        const dashData: any[][] = [
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true }, alignment: { horizontal: 'right' } } }],
            [],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")`, s: { font: { bold: true }, alignment: { horizontal: 'right' } } }],
            [{ v: "OPEN TASKS:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "OPEN"), 0)`, s: { font: { bold: true }, alignment: { horizontal: 'right' } } }],
            [],
            [{ v: "LAST SYSTEM RESET:", s: getStyles(false).left }, { v: "N/A", s: { font: { color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // --- 03. DAILY_TASKS ---
        const activeRoles = Array.from(new Set(normalizedChecklists.map(c => c.role)));
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle },
            { v: "STAMP", s: headerStyle },
            { v: "PROOF / EVIDENCE", s: headerStyle }
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        
        for (let b = 0; b < 2; b++) {
            const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + b}`;
            normalizedChecklists.forEach((checklist, cIdx) => {
                const role = checklist.role;
                checklist.tasks.forEach(t => {
                    const rIdx = taskData.length + 1;
                    const styles = getStyles(cIdx % 2 === 1);
                    const isV = t.verificationRequired === true;

                    const assignedFormula = `IFERROR(INDEX(${TABS.SYS_ENGINE}!$D$1:$D$500, MATCH(IFERROR(${bRef}, "") & "|" & "${role}", ${TABS.SYS_ENGINE}!$C$1:$C$500, 0)), "[UNASSIGNED]")`;
                    const statusFormula = isV 
                        ? `IF(AND(LEN(TRIM($E${rIdx}))>0, LEN(TRIM($F${rIdx}))>0), "COMPLETE", IF(LEN(TRIM($E${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                        : `IF(LEN(TRIM($E${rIdx}))>0, "COMPLETE", "OPEN")`;

                    taskData.push([
                        { t: 'f', f: `IFERROR(${bRef}, "")`, s: styles.center },
                        { v: role, s: styles.left },
                        { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                        { t: 'f', f: assignedFormula, s: styles.left },
                        { v: "", s: styles.input },
                        { v: "", s: isV ? styles.input : styles.locked }, 
                        { t: 'f', f: statusFormula, s: { ...styles.center, font: { bold: true } } },
                        { v: sanitizeRisk(t.consequence || "Compliance Gap"), s: { ...styles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                        { v: t.floorAction || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } },
                        { v: "", s: styles.locked },
                        { v: "", s: styles.input }
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 25, 30].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'K');
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // --- 04. SOP_LIB ---
        const libHeaders = [
            { v: "ROLE", s: headerStyle }, 
            { v: "TECHNICAL TASK", s: headerStyle }, 
            { v: "FREQUENCY", s: headerStyle }, 
            { v: "CONSEQUENCE", s: headerStyle }, 
            { v: "FLOOR INSTRUCTIONS", s: headerStyle },
            { v: "TRAINER NOTES", s: headerStyle },
            { v: "REFERENCE IMAGE", s: headerStyle }
        ];
        const libData: any[][] = [[], [], libHeaders];
        normalizedChecklists.forEach((c, cIdx) => {
            c.tasks.forEach(t => {
                const styles = getStyles(cIdx % 2 === 1);
                libData.push([
                    { v: c.role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                    { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                    { v: c.frequency || "Daily", s: styles.center },
                    { v: sanitizeRisk(t.consequence || "Risk Mitigation"), s: styles.left },
                    { v: t.floorAction || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } },
                    { v: t.trainerNotes || "", s: styles.left },
                    { v: "", s: styles.input } 
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 25 }, { wch: 45 }, { wch: 15 }, { wch: 45 }, { wch: 65 }, { wch: 65 }, { wch: 30 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Permanent source of truth for institutional standards.", 'G');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // --- 05. BRANCH_SETUP ---
        const branchData: any[][] = [[], [], [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }]];
        for (let i = 1; i <= 2; i++) {
            branchData.push([
                { v: `Branch ${i} [REPLACE ME]`, s: getStyles(false).input },
                { v: "Location", s: getStyles(false).input },
                { v: "ACTIVE", s: getStyles(false).input }
            ]);
        }
        const branchWs = utils.aoa_to_sheet(branchData);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Define your locations. ⚠️ Replace yellow cells.", 'C');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // --- 06. TEAM_HUB ---
        const teamHeaders = [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "PERSONNEL NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }];
        const teamData: any[][] = [[], [], teamHeaders];
        for (let i = 0; i < 2; i++) {
            const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + i}`;
            activeRoles.forEach((role, idx) => {
                const styles = getStyles(idx % 2 === 1);
                teamData.push([
                    { t: 'f', f: `IFERROR(${bRef}, "")`, s: styles.center },
                    { v: role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                    { v: "[ENTER NAME]", s: styles.input },
                    { v: "[PHONE]", s: styles.input },
                    { v: "[EMAIL]", s: styles.input }
                ]);
            });
        }
        const teamWs = utils.aoa_to_sheet(teamData);
        teamWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 40 }];
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel to specific roles.", 'E');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // --- 07. SETUP_GUIDE ---
        if (isAuditEnabled) {
            const guideData: any[][] = [
                [{ v: "🛠️ SYSTEM SETUP & AUDIT ENGINE ACTIVATION", s: bannerStyle }],
                [],
                [{ v: "SECTION A — MANDATORY CONVERSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.RISK_RED } } } }],
                [{ v: "1. Click [File] -> [Save as Google Sheets]. This is required for automation." }],
                [{ v: "2. Close this tab. Only work in the NEW file." }],
                [],
                [{ v: "SECTION B — ACTIVATE THE AUDIT HEARTBEAT", s: { font: { bold: true, sz: 12 } } }],
                [{ v: "1. In your new Google Sheet, go to [Extensions] -> [Apps Script]." }],
                [{ v: "2. Delete all existing text in the editor." }],
                [{ v: "3. Copy and Paste the code provided at the bottom of this sheet." }],
                [{ v: "4. Click the [Save] icon and name it 'SovereignAuditEngine'." }],
                [{ v: "5. Return to the sheet and refresh. A 'MoreMeets™' menu will appear." }],
                [],
                [{ v: "APPS SCRIPT SOURCE (COPY ALL):", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
                [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
            ];
            const guideWs = utils.aoa_to_sheet(guideData);
            guideWs['!cols'] = [{ wch: 110 }];
            guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
            utils.book_append_sheet(wb, guideWs, TABS.SETUP_GUIDE);
        }

        // --- 08. SYS_ENGINE ---
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const tRow = 4 + (i * activeRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([
                    { t: 'f', f: `IFERROR(${TABS.BRANCH_SETUP}!$A$${4 + i}, "")` }, 
                    { v: role },                                   
                    { t: 'f', f: `A${sIdx}&"|"&B${sIdx}` },    
                    { t: 'f', f: `${TABS.TEAM_HUB}!$C$${tRow}` }        
                ]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);
        
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        if (sIdx > -1) {
            if (!wb.Workbook) wb.Workbook = { Sheets: [] };
            if (!wb.Workbook.Sheets) wb.Workbook.Sheets = [];
            wb.Workbook.Sheets[sIdx] = { Hidden: 1 };
        }

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_v23.xlsx`);
    } catch (error: any) {
        console.error("Institutional Engine Failure:", error);
    }
}
