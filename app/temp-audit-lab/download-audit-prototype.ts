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

        // 01. START
        const startWs = utils.aoa_to_sheet([
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab and name your locations in the yellow cells." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign personnel names, phone numbers, and emails." }]
        ]);
        startWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // 02. DASHBOARD
        const dashWs = utils.aoa_to_sheet([
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [],
            [{ v: "COMPLETION %:", s: getStyles(false).left }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")` }]
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
                        { v: "", s: styles.locked } 
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 25].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily work.", 'J');
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // 04. SOP_LIB
        const libData: any[][] = [[], [], [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }]];
        item.checklists.forEach((c) => {
            c.tasks.forEach(t => {
                libData.push([{ v: c.role }, { v: t.technicalProtocol || t.description }, { v: t.consequence }, { v: t.floorAction || t.description }]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 25 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'D');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // 05. BRANCH_SETUP
        const branchData: any[][] = [[], [], [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }]];
        for (let i = 1; i <= 2; i++) {
            branchData.push([{ v: `Branch ${i}`, s: getStyles(false).input }, { v: "Location", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }]);
        }
        const branchWs = utils.aoa_to_sheet(branchData);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Define your locations.", 'C');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // 06. TEAM_HUB
        const teamData: any[][] = [[], [], [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "PERSONNEL NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }]];
        const uniqueRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        for (let i = 0; i < 2; i++) {
            uniqueRoles.forEach((role) => {
                const bRef = `${TABS.BRANCH_SETUP}!$A$${4 + i}`;
                teamData.push([{ t: 'f', f: `IFERROR(${bRef}, "")` }, { v: role }, { v: "", s: getStyles(false).input }, { v: "", s: getStyles(false).input }, { v: "", s: getStyles(false).input }]);
            });
        }
        const teamWs = utils.aoa_to_sheet(teamData);
        teamWs['!cols'] = [20, 30, 35, 20, 40].map(w => ({ wch: w }));
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel to specific roles.", 'E');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // 07. CUSTOMIZATION_GUIDE
        const guideData: any[][] = [
            [{ v: "🛠️ FORENSIC BYPASS TEST — V2.0", s: bannerStyle }],
            [],
            [{ v: "PHASE B: HARD FORENSIC TRACE", s: { font: { bold: true } } }],
            [{ v: "Goal: Prove Apps Script can physically write to Cell J2." }],
            [],
            [{ v: "INSTRUCTIONS:", s: { font: { bold: true } } }],
            [{ v: "1. Open Extensions -> Apps Script." }],
            [{ v: "2. Paste the source code provided below." }],
            [{ v: "3. IMPORTANT: Set an Installable Trigger (Run as OWNER)." }],
            [{ v: "4. Edit ANY cell in 'DAILY_TASKS'." }],
            [{ v: "5. If 'LIVE' appears in Cell J2, the system is functional." }],
            [],
            [{ v: "SOURCE CODE:", s: { font: { bold: true } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        addSheetHeader(guideWs, TABS.CUSTOMIZATION_GUIDE, "Diagnostic Manual", 'A');
        utils.book_append_sheet(wb, guideWs, TABS.CUSTOMIZATION_GUIDE);

        // 08. SYS_ENGINE
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            uniqueRoles.forEach((role, rIdx) => {
                const tRow = 4 + (i * uniqueRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([{ t: 'f', f: `IFERROR(${TABS.BRANCH_SETUP}!$A$${4 + i}, "")` }, { v: role }, { t: 'f', f: `A${sIdx}&"|"&B${sIdx}` }, { t: 'f', f: `${TABS.TEAM_HUB}!$C$${tRow}` }]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        // 09. _RECORDS_VAULT
        const vaultHeaders = [[{ v: "DATE", s: headerStyle }, { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TASK", s: headerStyle }, { v: "DONE_BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, { v: "STATUS", s: headerStyle }, { v: "STAMP", s: headerStyle }, { v: "USER_EMAIL", s: headerStyle }, { v: "SESSION_ID", s: headerStyle }]];
        const vaultWs = utils.aoa_to_sheet(vaultHeaders);
        utils.book_append_sheet(wb, vaultWs, TABS.RECORDS_VAULT);
        
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        const vIdx = wb.SheetNames.indexOf(TABS.RECORDS_VAULT);
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [{ activeTab: 0 }] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };
        wb.Workbook.Sheets[vIdx] = { Hidden: 1 };

        writeFile(wb, `SOVEREIGN_PHASE_B_TRACE.xlsx`);
    } catch (error: any) {
        console.error("Diagnostic failure:", error);
    }
}
