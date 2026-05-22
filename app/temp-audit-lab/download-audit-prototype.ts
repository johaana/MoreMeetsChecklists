'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { hotels_and_resorts as item } from '@/lib/packs/hotels_and_resorts';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V4.0.3 — HARDENED PILOT PROTOTYPE
 * -----------------------------------------
 * 1. 100% Logic Parity with Production v17.5.1
 * 2. Surgical Post-Processing: Hidden Records Vault + Apps Script Instructions
 * 3. NO GEOMETRY CHANGES: DAILY_TASKS A:I stays identical.
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

        const TABS = {
            START: "START",
            DASHBOARD: "DASHBOARD",
            DAILY_TASKS: "DAILY_TASKS",
            SOP_LIB: "SOP_LIB",
            BRANCH_SETUP: "BRANCH_SETUP",
            TEAM_HUB: "TEAM_HUB",
            CUSTOMIZATION_GUIDE: "CUSTOMIZATION_GUIDE",
            SYS_ENGINE: "SYS_ENGINE",
            RECORDS_VAULT: "_RECORDS_VAULT"
        };

        // --- PRODUCTION LOGIC: REPLICATED FOR PARITY ---
        
        // 01. START
        const startWs = utils.aoa_to_sheet([
            [{ v: "🚀 SOVEREIGN START GUIDE", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure." }],
            [],
            [{ v: "STEP 1: BRANCH SETUP", s: { font: { bold: true } } }, { v: "Name your locations in the yellow cells of [BRANCH_SETUP]." }],
            [{ v: "STEP 2: TEAM MAPPING", s: { font: { bold: true } } }, { v: "Assign staff names to roles in [TEAM_HUB]." }]
        ]);
        startWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // 02. DASHBOARD
        const dashWs = utils.aoa_to_sheet([
            [{ v: "📊 OPS DASHBOARD", s: bannerStyle }],
            [],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")` }]
        ]);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // 03. DAILY_TASKS (Sovereign Geometry A:I)
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
                        const assignedFormula = `IFERROR(INDEX(${TABS.SYS_ENGINE}!$D$1:$D$500, MATCH(IFERROR(${bRef}, "") & "|" & "${role}", ${TABS.SYS_ENGINE}!$C$1:$C$500, 0)), "[UNASSIGNED]")`;
                        const statusFormula = `IF(LEN(TRIM($E${rIdx}))>0, "COMPLETE", "OPEN")`;

                        taskData.push([
                            { t: 'f', f: `IFERROR(${bRef}, "")`, s: styles.center },
                            { v: role, s: styles.left },
                            { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                            { t: 'f', f: assignedFormula, s: styles.center },
                            { v: "", s: styles.input },
                            { v: "", s: styles.input }, 
                            { t: 'f', f: statusFormula, s: { ...styles.center, font: { bold: true } } },
                            { v: t.consequence || "Compliance Gap", s: styles.left },
                            { v: t.floorAction || t.description || "", s: styles.left }
                        ]);
                    });
                }
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Geometry A:I Strictly Preserved.", 'I');
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // 04. SOP_LIB
        const libData: any[][] = [[], [], [{ v: "ROLE", s: headerStyle }, { v: "SOP", s: headerStyle }, { v: "RISK", s: headerStyle }, { v: "ACTION", s: headerStyle }]];
        item.checklists.forEach((c) => {
            c.tasks.forEach(t => {
                libData.push([{ v: c.role }, { v: t.technicalProtocol || t.description }, { v: t.consequence }, { v: t.floorAction || t.description }]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 25 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library.", 'D');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // 05. BRANCH_SETUP
        const branchData: any[][] = [[], [], [{ v: "NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }]];
        for (let i = 1; i <= 2; i++) branchData.push([{ v: `Branch ${i}`, s: getStyles(false).input }, { v: "Loc", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }]);
        const branchWs = utils.aoa_to_sheet(branchData);
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Define locations.", 'C');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // 06. TEAM_HUB
        const teamData: any[][] = [[], [], [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }]];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role) => {
                const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + i}`;
                teamData.push([{ t: 'f', f: `IFERROR(${bRef}, "")` }, { v: role }, { v: "", s: getStyles(false).input }, { v: "", s: getStyles(false).input }, { v: "", s: getStyles(false).input }]);
            });
        }
        const teamWs = utils.aoa_to_sheet(teamData);
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel.", 'E');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // 07. CUSTOMIZATION_GUIDE (Instruction Patch)
        const guideData: any[][] = [
            [{ v: "🛠️ CUSTOMIZATION & AUTOMATION GUIDE", s: bannerStyle }],
            [],
            [{ v: "SECTION A: SCRIPT INSTALLATION (MANDATORY FOR AUDIT VAULT)", s: { font: { bold: true, sz: 12 } } }],
            [{ v: "1. Open this file in Google Sheets." }],
            [{ v: "2. Go to Extensions -> Apps Script." }],
            [{ v: "3. Delete all code and paste the 'Hardened Engine' script provided below." }],
            [{ v: "4. Click the 'Save' icon and then 'Deploy' -> 'New Deployment' (Select 'Web App')." }],
            [{ v: "5. IMPORTANT: Set 'Who has access' to 'Anyone' to ensure all staff edits are logged." }],
            [],
            [{ v: "SECTION B: VERIFYING THE VAULT", s: { font: { bold: true } } }],
            [{ v: "• The [_RECORDS_VAULT] sheet is hidden by default to prevent accidental edits." }],
            [{ v: "• To view: Right-click any tab at the bottom -> Unhide -> Select _RECORDS_VAULT." }],
            [],
            [{ v: "SECTION C: HARDENED SCRIPT SOURCE", s: { font: { bold: true } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        addSheetHeader(guideWs, TABS.CUSTOMIZATION_GUIDE, "System configuration manual.", 'A');
        utils.book_append_sheet(wb, guideWs, TABS.CUSTOMIZATION_GUIDE);

        // 08. SYS_ENGINE
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const tRow = 4 + (i * activeRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([{ t: 'f', f: `IFERROR(${TABS.BRANCH_SETUP}!$A$${4 + i}, "")` }, { v: role }, { t: 'f', f: `A${sIdx}&"|"&B${sIdx}` }, { t: 'f', f: `${TABS.TEAM_HUB}!$C$${tRow}` }]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        // 09. _RECORDS_VAULT (New Schema)
        const vaultHeaders = [[{ v: "DATE", s: headerStyle }, { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TASK", s: headerStyle }, { v: "DONE_BY", s: headerStyle }, { v: "VERIFIED_BY", s: headerStyle }, { v: "STATUS", s: headerStyle }, { v: "STAMP", s: headerStyle }]];
        const vaultWs = utils.aoa_to_sheet(vaultHeaders);
        vaultWs['!cols'] = [20, 25, 25, 45, 20, 20, 15, 25].map(w => ({ wch: w }));
        utils.book_append_sheet(wb, vaultWs, TABS.RECORDS_VAULT);
        
        // Hide infrastructure sheets
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        const vIdx = wb.SheetNames.indexOf(TABS.RECORDS_VAULT);
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [{ activeTab: 0 }] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };
        wb.Workbook.Sheets[vIdx] = { Hidden: 1 };

        writeFile(wb, `TEMP_HOTEL_VAULT_HARDENED.xlsx`);
    } catch (error: any) {
        console.error("Infrastructure Failure:", error);
    }
}
