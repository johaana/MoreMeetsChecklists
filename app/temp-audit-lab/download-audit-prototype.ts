'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { hotels_and_resorts as item } from '@/lib/packs/hotels_and_resorts';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN MASTER ENGINE V4.9 - SIMPLIFIED SETUP
 * --------------------------------------------------
 * 1. MANDATORY CONVERSION: Red alert on START tab.
 * 2. WEB BRIDGE: Link to the visual /deploy-guide page.
 * 3. NO-TRIGGER FLOW: Clean instructions for Run/Authorize only.
 */

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

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'J') => {
            const headerData = [
                [{ v: `📋 ${title.replace('_', ' ')} — ${instruction}`, s: bannerStyle }],
                [] 
            ];
            utils.sheet_add_aoa(ws, headerData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
            ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 2 }];
        };

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

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "SECTION A — VERY IMPORTANT (MUST READ)", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.RISK_RED } } } }],
            [{ v: "Apps Script logic DOES NOT WORK in Excel mode.", s: { font: { bold: true } } }],
            [{ v: "STEP 0: Go to [File] -> [Save as Google Sheets].", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Only continue setup in the NEW file that opens. Discard this version." }],
            [],
            [{ v: "STEP 1: VIEW THE VISUAL DEPLOYMENT GUIDE", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "For a step-by-step walkthrough with screenshots, visit:", s: { font: { italic: true } } }],
            [{ v: "https://www.moremeets.com/deploy-guide", l: { Target: "https://www.moremeets.com/deploy-guide" }, s: { font: { color: { rgb: "0000FF" }, underline: true } } }],
            [],
            [{ v: "GO TO SETUP_GUIDE TAB TO CONTINUE ->", s: { font: { bold: true } } }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 45 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 02. DASHBOARD ---
        const dashData: any[][] = [
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")`, s: { font: { bold: true } } }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // --- 03. DAILY_TASKS ---
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
                        { v: "", s: styles.locked } 
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 25].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'J');
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
                    { v: t.consequence || "Risk Mitigation", s: styles.left },
                    { v: t.floorAction || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'D');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // --- 05. BRANCH_SETUP ---
        const branchData: any[][] = [
            [], [],
            [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }],
            [{ v: "Branch 1 [REPLACE ME]", s: getStyles(false).input }, { v: "Location", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }],
            [{ v: "Branch 2 [REPLACE ME]", s: getStyles(false).input }, { v: "Location", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }]
        ];
        const branchWs = utils.aoa_to_sheet(branchData);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Define your locations. ⚠️ Replace yellow cells.", 'C');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // --- 06. TEAM_HUB ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
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
        teamWs['!cols'] = [20, 30, 35, 20, 40].map(w => ({ wch: w }));
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel to specific roles.", 'E');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // --- 07. SETUP_GUIDE ---
        const guideData: any[][] = [
            [{ v: "🛠️ SYSTEM SETUP & DEPLOYMENT GUIDE", s: bannerStyle }],
            [],
            [{ v: "SECTION B — STEP-BY-STEP INSTALLATION", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "1. Go to [File] -> [Save as Google Sheets]. (MANDATORY)" }],
            [{ v: "2. Close this tab. Open the NEW file that opened automatically." }],
            [{ v: "3. In the NEW file, go to [Extensions] -> [Apps Script]." }],
            [{ v: "4. Delete any existing text and PASTE the code provided at the bottom of this sheet." }],
            [{ v: "5. Click the [Save] icon (floppy disk)." }],
            [{ v: "6. Click [Run] (Play icon) and authorize permissions." }],
            [],
            [{ v: "SECTION C — HOW TO VERIFY SYSTEM IS WORKING", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "1. Go to the [DAILY_TASKS] sheet. Enter your initials in any [DONE BY] cell." }],
            [{ v: "2. Wait 2-4 seconds. A timestamp MUST appear in Column J (STAMP)." }],
            [],
            [{ v: "SUPPORT:", s: { font: { bold: true } } }, { v: "For visual help visit: www.moremeets.com/deploy-guide" }],
            [],
            [{ v: "APPS SCRIPT SOURCE (COPY EVERYTHING BELOW THIS LINE):", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
        utils.book_append_sheet(wb, guideWs, TABS.SETUP_GUIDE);

        // --- 08. SYS_ENGINE ---
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const tRow = 3 + (i * activeRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([
                    { t: 'f', f: `IFERROR(${TABS.BRANCH_SETUP}!$A$${4 + i}, "")` }, 
                    { v: role },                                   
                    { t: 'f', f: `A${sIdx}&"|"&B${sIdx}` },    
                    { t: 'f', f: `${TABS.TEAM_HUB}!$C$${4 + rIdx + (i * activeRoles.length)}` }        
                ]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        writeFile(wb, `SOVEREIGN_MASTER_V4.9.xlsx`);
    } catch (error: any) {
        console.error("Master Generation Failure:", error);
    }
}
