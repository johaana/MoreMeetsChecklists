
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v17.5.1 PRODUCTION LOCK
 * ----------------------------------------------------------------------------
 * 1. PURE TABULAR LEDGER: Minimalist, filterable high-density structure.
 * 2. ALTERNATING BLOCKS: Visual grouping via role-based background tints.
 * 3. TIERED VERIFICATION: yellow cells + status logic for high-risk points.
 * 4. CUSTOMIZATION GUIDE: Anti-breakage layer and onboarding logic.
 * 5. UX FLOW: START -> DASHBOARD -> DAILY_TASKS -> SOP_LIB -> SETUP -> HUB -> GUIDE
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
    CUSTOMIZATION_GUIDE: "CUSTOMIZATION_GUIDE",
    SYS_ENGINE: "SYS_ENGINE"
};

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text.replace(/\[?Risk:\s?\[?/gi, "").replace(/\]/g, "").trim();
};

const validateSheetName = (name: string) => {
    if (!SAFE_SHEET_NAME.test(name)) {
        throw new Error(`Sovereign Security Violation: Invalid sheet name detected: "${name}".`);
    }
};

export const handleDownload = (item: PremiumPack) => {
    try {
        if (!item) {
            throw new Error("Operational data not found.");
        }

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
            BLOCK_ALT: "F8FAFC" // Soft grey for alternating role blocks
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

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'I') => {
            const headerData = [
                [{ v: `📋 ${title.replace('_', ' ')} — ${instruction}`, s: bannerStyle }],
                [] 
            ];
            utils.sheet_add_aoa(ws, headerData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
            ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 3 }];
        };

        /**
         * APPEND WORKBOOK SHEETS IN STRATEGIC UX ORDER
         */

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab and name your locations in the yellow cells." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign personnel names, phone numbers, and emails." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [DAILY_TASKS] tab. Staff enter their initials when work is complete." }],
            [],
            [{ v: "⚠️ SAMPLE DATA NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
            [{ v: "Replace all YELLOW cells with your own local details to begin." }],
            [],
            [{ v: "NAVIGATION NOTICE:", s: { font: { bold: true } } }],
            [{ v: "Use the tab bar at the bottom of your screen to move between divisions." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        validateSheetName(TABS.START);
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 02. DASHBOARD ---
        const dashData: any[][] = [
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true }, alignment: { horizontal: 'right' } } }],
            [],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")`, s: { ...baseFont, bold: true, alignment: { horizontal: 'right' } } }],
            [{ v: "OPEN TASKS:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "OPEN"), 0)`, s: { ...baseFont, bold: true, alignment: { horizontal: 'right' } } }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }, { wch: 20 }, { wch: 20 }];
        dashWs['!rows'] = [{ hpt: 30 }]; // Increased header height for vertical balance
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }]; // Expanded merge for horizontal clearance
        validateSheetName(TABS.DASHBOARD);
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // --- 03. DAILY_TASKS ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle }
        ];
        const taskData: any[][] = [[], [], taskHeaders];
        
        for (let b = 0; b < 2; b++) {
            const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + b}`;
            activeRoles.forEach((role, roleIdx) => {
                const roleChecklist = item.checklists.find(c => c.role === role);
                if (roleChecklist) {
                    roleChecklist.tasks.forEach(t => {
                        const rIdx = taskData.length + 1;
                        const styles = getStyles(roleIdx % 2 === 1);
                        const isV = t.verificationRequired === true;

                        const assignedFormula = `IFERROR(INDEX(${TABS.SYS_ENGINE}!$D$1:$D$500, MATCH(IFERROR(${bRef}, "") & "|" & "${role}", ${TABS.SYS_ENGINE}!$C$1:$C$500, 0)), "[UNASSIGNED]")`;
                        const statusFormula = isV 
                            ? `IF(AND(LEN(TRIM($E${rIdx}))>0, LEN(TRIM($F${rIdx}))>0), "COMPLETE", IF(LEN(TRIM($E${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                            : `IF(LEN(TRIM($E${rIdx}))>0, "COMPLETE", "OPEN")`;

                        taskData.push([
                            { t: 'f', f: `IFERROR(${bRef}, "")`, s: styles.left },
                            { v: role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                            { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                            { t: 'f', f: assignedFormula, s: styles.left },
                            { v: "", s: styles.input },
                            { v: "", s: isV ? styles.input : styles.locked }, 
                            { t: 'f', f: statusFormula, s: { ...styles.center, font: { bold: true } } },
                            { v: sanitizeRisk(t.consequence || "Compliance Gap"), s: { ...styles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                            { v: t.floorAction || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                        ]);
                    });
                }
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'I');
        validateSheetName(TABS.DAILY_TASKS);
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // --- 04. SOP_LIB ---
        const libHeaders = [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }];
        const libData: any[][] = [[], [], libHeaders];
        const libRows: any[] = [{ hpt: 30 }, { hpt: 20 }, { hpt: 30 }];

        item.checklists.forEach((c, cIdx) => {
            c.tasks.forEach(t => {
                const styles = getStyles(cIdx % 2 === 1);
                const txt = (t.technicalProtocol || "") + (t.floorAction || t.description || "");
                const lines = Math.ceil(txt.length / 60);
                libRows.push({ hpt: Math.max(35, lines * 18), customHeight: 1 });

                libData.push([
                    { v: c.role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                    { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                    { v: sanitizeRisk(t.consequence || "Risk Mitigation"), s: styles.left },
                    { v: t.floorAction || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        libWs['!rows'] = libRows;
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'D');
        validateSheetName(TABS.SOP_LIB);
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // --- 05. BRANCH_SETUP ---
        const branchHeaders = [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }];
        const branchData: any[][] = [[], [], branchHeaders];
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
        validateSheetName(TABS.BRANCH_SETUP);
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
        validateSheetName(TABS.TEAM_HUB);
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // --- 07. CUSTOMIZATION_GUIDE ---
        const guideData: any[][] = [
            [{ v: "🛠️ CUSTOMIZATION GUIDE — HOW TO TAILOR YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "SECTION A: WHAT YOU CAN SAFELY EDIT", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "✅ Branch names & locations" }],
            [{ v: "✅ Team member names, phone numbers & emails" }],
            [{ v: "✅ SOP wording & technical descriptions" }],
            [{ v: "✅ Adding or removing tasks within role blocks" }],
            [{ v: "✅ Adding new roles to the TEAM_HUB and DAILY_TASKS" }],
            [],
            [{ v: "SECTION B: WHAT YOU SHOULD NOT EDIT", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "❌ Do not rename the core tab names (e.g. DAILY_TASKS, DASHBOARD)" }],
            [{ v: "❌ Do not delete hidden sheets or modified formula logic" }],
            [{ v: "❌ Do not insert columns inside the middle of the DAILY_TASKS ledger" }],
            [{ v: "❌ Do not unhide or modify the [SYS_ENGINE] metadata tab" }],
            [],
            [{ v: "SECTION C: HOW TO ADD NEW TASKS", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "To add a task, simply insert a row under the relevant ROLE block in [DAILY_TASKS]." }],
            [{ v: "Note: High-risk tasks should have the 'Verified By' cell enabled in the formula logic." }],
            [],
            [{ v: "SECTION D: TASK FREQUENCY MODEL", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "The system is built to handle: DAILY | WEEKLY | MONTHLY | INCIDENT-BASED." }],
            [],
            [{ v: "SECTION E: MOBILE USAGE (GOOGLE SHEETS APP)", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "• Swipe the bottom tab bar to move between divisions." }],
            [{ v: "• Use Filters in column headers to see only your own role's tasks." }],
            [{ v: "• Zoom the sheet to 80-90% for maximum visibility." }],
            [],
            [{ v: "SYSTEM FLOW:", s: { font: { bold: true } } }],
            [{ v: "BRANCH_SETUP → TEAM_HUB → SOP_LIB → DAILY_TASKS → DASHBOARD" }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
        validateSheetName(TABS.CUSTOMIZATION_GUIDE);
        utils.book_append_sheet(wb, guideWs, TABS.CUSTOMIZATION_GUIDE);

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
        validateSheetName(TABS.SYS_ENGINE);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);
        
        // Final Range Lock to prevent Row-60 truncation
        [startWs, dashWs, taskWs, libWs, branchWs, teamWs, guideWs, sysWs].forEach(ws => {
            const range = utils.decode_range(ws['!ref'] || "A1:A1");
            const dataRows = (ws as any)['!data'] ? (ws as any)['!data'].length : 100;
            range.e.r = Math.max(range.e.r, dataRows + 10);
            ws['!ref'] = utils.encode_range(range);
        });

        // Hide SYS_ENGINE
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [{ activeTab: 0 }] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };
        wb.Workbook.Views[0].activeTab = 0; // Force open on START

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_v17.xlsx`);
    } catch (error: any) {
        console.error("Sovereign Infrastructure Failure:", error);
        alert(`Engine Error: ${error.message}`);
    }
}
