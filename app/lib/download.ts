
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v18.8.0 PRODUCTION ROLLOUT
 * ----------------------------------------------------------------------------
 * 1. APPEND-ONLY GEOMETRY: Columns K (PROOF) and L (REFERENCE) appended.
 * 2. STABLE HEARTBEAT: Columns E:F (Triggers), G (Status), and J (Stamp) remain locked.
 * 3. NON-TECHNICAL GUIDE: Simple explain-to-child instructions for field teams.
 * 4. OPTIONAL ADMIN CONTROLS: Section G added for manual hardening.
 * 5. NO STRUCTURAL CONTROLS: Freeze panes and protections removed for zero-friction.
 * ----------------------------------------------------------------------------
 */

const SAFE_SHEET_NAME = /^[A-Z][A-Z0-9_]*$/;

const TABS = {
    START: "START",
    DASHBOARD: "DASHBOARD",
    DAILY_TASKS: "DAILY_TASKS",
    SOP_LIB: "SOP_LIB",
    BRANCH_SETUP: "BRANCH_SETUP",
    TEAM_HUB: "TEAM_HUB",
    SETUP_GUIDE: "SETUP_GUIDE", 
    SYS_ENGINE: "SYS_ENGINE"
};

// Stabilized Apps Script Source for Institutional Deployment
const APPS_SCRIPT_SOURCE = `
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
`;

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text.replace(/\[?Risk:\s?\[?/gi, "").replace(/\]/g, "").trim();
};

export const handleDownload = (item: PremiumPack) => {
    try {
        if (!item) {
            throw new Error("Operational data not found.");
        }

        const wb = utils.book_new();
        
        // ALL PREMIUM PACKS ENABLED FOR AUDIT UPGRADE
        const isAuditEnabled = item.priceINR > 0 || (item.priceUSD && item.priceUSD > 0);

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

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'L') => {
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

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            ...(isAuditEnabled ? [[{ v: "⚠️ MANDATORY STEP 0: SAVE AS GOOGLE SHEETS", s: { font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }, { v: "Go to File -> Save as Google Sheets. Only continue in the new file." }]] : []),
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab and name your locations in the yellow cells." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign personnel names, phone numbers, and emails." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [DAILY_TASKS] tab. Staff enter their initials when work is complete." }],
            [],
            ...(isAuditEnabled ? [[{ v: "STEP 4: ACTIVATE AUDIT HEARTBEAT", s: { font: { bold: true } } }, { v: "Go to the [SETUP_GUIDE] tab for instructions on securing timestamps." }]] : []),
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
            [{ v: "OPEN TASKS:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "OPEN"), 0)`, s: { font: { bold: true }, alignment: { horizontal: 'right' } } }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // --- 03. DAILY_TASKS (APPEND-ONLY UPGRADE) ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle },
            { v: "STAMP", s: headerStyle },
            { v: "PROOF / EVIDENCE", s: headerStyle },
            { v: "REFERENCE IMAGE", s: headerStyle }
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        
        for (let b = 0; b < 2; b++) {
            const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + b}`;
            item.checklists.forEach((checklist, cIdx) => {
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
                        { v: t.floorAction || t.description || t.trainerNotes || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } },
                        { v: "", s: styles.locked }, // J: STAMP
                        { v: "", s: styles.input },  // K: PROOF / EVIDENCE
                        { v: "", s: styles.input }   // L: REFERENCE IMAGE
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 25, 30, 30].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'L');
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // --- 04. SOP_LIB ---
        const libHeaders = [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }];
        const libData: any[][] = [[], [], libHeaders];
        item.checklists.forEach((c, cIdx) => {
            c.tasks.forEach(t => {
                const styles = getStyles(cIdx % 2 === 1);
                libData.push([
                    { v: c.role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                    { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                    { v: sanitizeRisk(t.consequence || "Risk Mitigation"), s: styles.left },
                    { v: t.floorAction || t.description || t.trainerNotes || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'D');
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

        // --- 07. SETUP_GUIDE (EXPANDED INSTRUCTIONS) ---
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
                [{ v: "4. Click the [Save] icon and name it 'AuditEngine'." }],
                [{ v: "5. Click the [Clock] icon (Triggers) and add a trigger for 'onEdit' (On edit)." }],
                [],
                [{ v: "SECTION C — HOW TO ADD PHOTO PROOF", s: { font: { bold: true, sz: 12 } } }],
                [{ v: "Desktop: Click PROOF cell -> Insert -> Image -> Image in cell." }],
                [{ v: "Mobile (Google Sheets App): Tap cell -> Tap [+] -> Image -> From camera/gallery." }],
                [],
                [{ v: "SECTION D — MAINTENANCE & BACKUPS", s: { font: { bold: true, sz: 12 } } }],
                [{ v: "1. Weekly Backup: Go to [File] -> [Make a copy] to save your audit history." }],
                [{ v: "2. Safe Editing: You can edit Task Text (Col C) but never move STATUS (Col G) or STAMP (Col J)." }],
                [],
                [{ v: "SECTION G — OPTIONAL ADMIN CONTROLS", s: { font: { bold: true, sz: 12 } } }],
                [{ v: "1. How to Freeze: View -> Freeze -> 3 rows (Header) / Up to Column C (Task identity)." }],
                [{ v: "2. How to Protect: Data -> Protect sheets and ranges. Lock A, D, G, J." }],
                [{ v: "3. ⚠️ IMPORTANT: Never protect E, F, or K. These must stay open for staff and mobile uploads." }],
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
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [{ activeTab: 0 }] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };
        wb.Workbook.Views[0].activeTab = 0;

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_v18.xlsx`);
    } catch (error: any) {
        console.error("Institutional Engine Failure:", error);
    }
}
