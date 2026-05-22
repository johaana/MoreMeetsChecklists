'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { hotels_and_resorts as item } from '@/lib/packs/hotels_and_resorts';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

export const handleDownloadAuditPrototype = () => {
    try {
        const wb = utils.book_new();

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
            BLOCK_ALT: "F8FAFC" 
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
                input: { font: { ...baseFont, color: "000000", bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
                locked: { font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle }
            };
        };

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'I') => {
            const headerData = [[{ v: `📋 ${title.replace('_', ' ')} — ${instruction}`, s: bannerStyle }]];
            utils.sheet_add_aoa(ws, headerData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
        };

        const TABS = {
            START: "START",
            DASHBOARD: "DASHBOARD",
            DAILY_TASKS: "DAILY_TASKS",
            SOP_LIB: "SOP_LIB",
            BRANCH_SETUP: "BRANCH_SETUP",
            TEAM_HUB: "TEAM_HUB",
            GUIDE: "SETUP_GUIDE",
            SYS_ENGINE: "SYS_ENGINE"
        };

        // 01. START
        const startWs = utils.aoa_to_sheet([
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Read the [SETUP_GUIDE] tab immediately to activate your audit engine.", s: { font: { italic: true, bold: true } } }]
        ]);
        startWs['!cols'] = [{ wch: 40 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // 02. DASHBOARD
        const dashWs = utils.aoa_to_sheet([
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")`, s: { font: { bold: true } } }]
        ]);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // 03. DAILY_TASKS (A:J)
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle },
            { v: "STAMP", s: headerStyle }
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
                        { t: 'f', f: assignedFormula, s: styles.center },
                        { v: "", s: styles.input },
                        { v: "", s: isV ? styles.input : styles.locked }, 
                        { t: 'f', f: statusFormula, s: { ...styles.center, font: { bold: true } } },
                        { v: t.consequence || "Compliance Gap", s: styles.left },
                        { v: t.floorAction || t.description || "", s: styles.left },
                        { v: "", s: styles.locked } // Column J: STAMP
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 25].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'J');
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // 04. SOP_LIB
        const libWs = utils.aoa_to_sheet([[], [], [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }]]);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library.", 'D');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // 05. BRANCH_SETUP
        const branchWs = utils.aoa_to_sheet([
            [], [], [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }],
            [{ v: "Branch 1 [REPLACE ME]", s: getStyles(false).input }, { v: "Location", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }]
        ]);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Setup your locations.", 'C');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // 06. TEAM_HUB
        const teamWs = utils.aoa_to_sheet([[], [], [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "PERSONNEL NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }]]);
        teamWs['!cols'] = [20, 30, 35, 20, 40].map(w => ({ wch: w }));
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel.", 'E');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // 07. SETUP_GUIDE (COMPREHENSIVE)
        const guideData: any[][] = [
            [{ v: "🛠️ SYSTEM SETUP & DEPLOYMENT GUIDE", s: bannerStyle }],
            [],
            [{ v: "SECTION A — VERY IMPORTANT (MUST READ)", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.RISK_RED } } } }],
            [{ v: "This file is currently an Excel (.XLSX) file. Apps Script DOES NOT WORK in this mode." }],
            [{ v: "STEP 0: Go to [File] -> [Save as Google Sheets].", s: { font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }],
            [{ v: "Only continue setup in the NEW file that opens. Discard this Excel version." }],
            [],
            [{ v: "SECTION B — STEP-BY-STEP INSTALLATION", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "1. Download this file and upload it to your Google Drive." }],
            [{ v: "2. Open it and perform the 'Save as Google Sheets' step from Section A." }],
            [{ v: "3. In the new file, go to [Extensions] -> [Apps Script]." }],
            [{ v: "4. Delete any existing text and PASTE the code provided at the bottom of this sheet." }],
            [{ v: "5. Click the [Save] icon (floppy disk)." }],
            [{ v: "6. Click the [Clock] icon (Triggers) on the left sidebar." }],
            [{ v: "7. Click [+ Add Trigger]. Select: Function: 'onEdit', Source: 'From spreadsheet', Event: 'On edit'." }],
            [{ v: "8. Authorize permissions. (Click 'Advanced' -> 'Go to Project (unsafe)' -> 'Allow')." }],
            [],
            [{ v: "SECTION C — VERIFY SYSTEM IS WORKING", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "1. Go to the [DAILY_TASKS] sheet. Enter your initials in any [DONE BY] cell." }],
            [{ v: "2. Wait 2-4 seconds. A timestamp MUST appear in Column J (STAMP)." }],
            [{ v: "3. A popup should appear: '1 audit records secured'." }],
            [],
            [{ v: "SECTION D — SAFE EDITING RULES", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "✓ SAFE: Edit task text, add new rows, or change roles." }],
            [{ v: "✗ DO NOT: Delete formulas in Column G, delete hidden sheets, or rename the DAILY_TASKS tab." }],
            [],
            [{ v: "SUPPORT:", s: { font: { bold: true } } }, { v: "If you need assistance with deployment, please contact more@moremeets.com" }],
            [],
            [{ v: "APPS SCRIPT SOURCE (COPY EVERYTHING BELOW THIS LINE):", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
        utils.book_append_sheet(wb, guideWs, TABS.GUIDE);

        // 08. SYS_ENGINE
        const sysWs = utils.aoa_to_sheet([[]]);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        writeFile(wb, `SOVEREIGN_AUDIT_STABLE_V4.7.xlsx`);
    } catch (error: any) {
        console.error("Audit Generation Failure:", error);
    }
}
