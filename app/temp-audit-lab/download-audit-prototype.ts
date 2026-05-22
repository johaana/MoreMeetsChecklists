'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { hotels_and_resorts as item } from '@/lib/packs/hotels_and_resorts';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN RESTORATION BUILD — PHASE 3K
 * -----------------------------------------------------------
 * 1. RESTORED A1:I1 MERGED HEADER (Parity with app/lib/download.ts)
 * 2. RESTORED 9-COLUMN GEOMETRY (A:I)
 * 3. NO COLUMN J (Isolated diagnostic at Z1000)
 * 4. 100% PRODUCTION LOOP & STYLE MATCH
 * -----------------------------------------------------------
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

        // 01. START
        const startWs = utils.aoa_to_sheet([
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }]
        ]);
        startWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // 02. DASHBOARD
        const dashWs = utils.aoa_to_sheet([
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: getStyles(false).left }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }]
        ]);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // 03. DAILY_TASKS (A:I) - RESTORED 100% PARITY
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle }
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
                        { v: t.floorAction || t.description || "", s: styles.left }
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "TRIGGER VALIDATION MODE");
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // 04. SOP_LIB
        const libWs = utils.aoa_to_sheet([[], [], [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }]]);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library.");
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // 05. BRANCH_SETUP
        const branchWs = utils.aoa_to_sheet([
            [], [], [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }],
            [{ v: "Branch 1", s: getStyles(false).input }, { v: "Location", s: getStyles(false).input }, { v: "ACTIVE", s: getStyles(false).input }]
        ]);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Setup your branches.");
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        // 06. TEAM_HUB
        const teamWs = utils.aoa_to_sheet([[], [], [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "PERSONNEL NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }]]);
        teamWs['!cols'] = [20, 30, 35, 20, 40].map(w => ({ wch: w }));
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign personnel.");
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // 07. CUSTOMIZATION_GUIDE
        const guideWs = utils.aoa_to_sheet([
            [{ v: "🛠️ DIAGNOSTIC MANUAL — TRIGGER VALIDATION", s: bannerStyle }],
            [],
            [{ v: "GOAL: Prove the trigger can write to Z1000 without disrupting A:I.", s: { font: { bold: true } } }],
            [],
            [{ v: "APPS SCRIPT SOURCE:", s: { font: { bold: true } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { sz: 8, name: "Courier New" }, alignment: { wrapText: true } } }]
        ]);
        guideWs['!cols'] = [{ wch: 100 }];
        addSheetHeader(guideWs, TABS.CUSTOMIZATION_GUIDE, "System Manual", 'A');
        utils.book_append_sheet(wb, guideWs, TABS.CUSTOMIZATION_GUIDE);

        // 08. SYS_ENGINE
        const sysWs = utils.aoa_to_sheet([[]]);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        writeFile(wb, `SOVEREIGN_PHASE_3K_RESTORATION.xlsx`);
    } catch (error: any) {
        console.error("Restoration Failure:", error);
    }
}
