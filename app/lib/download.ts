'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v17.4 PRODUCTION FREEZE
 * ----------------------------------------------------------------------------
 * 1. PURE TABULAR LEDGER: Minimalist, filterable high-density structure.
 * 2. ALTERNATING BLOCKS: Visual grouping via role-based background tints.
 * 3. TIERED VERIFICATION: yellow cells + status logic for high-risk points.
 * 4. HYGIENE: Normalized roles and zero-clipping dynamic heights.
 * ----------------------------------------------------------------------------
 */

const SAFE_SHEET_NAME = /^[A-Z][A-Z0-9_]*$/;

const TABS = {
    START: "START",
    CONSOLE: "CONSOLE",
    SITE_CONFIG: "SITE_CONFIG",
    TEAM_HUB: "TEAM_HUB",
    DAILY_TASKS: "DAILY_TASKS",
    SOP_LIB: "SOP_LIB",
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

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [SITE_CONFIG] tab and name your locations in the yellow cells." }],
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

        // --- 02. CONSOLE ---
        const dashData: any[][] = [
            [{ v: "📊 OPS CONSOLE — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: { font: { bold: true } } }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [],
            [{ v: "COMPLETION %:", s: { font: { bold: true } } }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$5000, "<>")), "0%"), "0%")` }],
            [{ v: "OPEN TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `IFERROR(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$5000, "OPEN"), 0)` }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 20 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        validateSheetName(TABS.CONSOLE);
        utils.book_append_sheet(wb, dashWs, TABS.CONSOLE);

        // --- 03. SITE_CONFIG ---
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
        addSheetHeader(branchWs, TABS.SITE_CONFIG, "Define your locations. ⚠️ Replace yellow cells.", 'C');
        validateSheetName(TABS.SITE_CONFIG);
        utils.book_append_sheet(wb, branchWs, TABS.SITE_CONFIG);

        // --- 04. TEAM_HUB ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const teamHeaders = [{ v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "PERSONNEL NAME", s: headerStyle }, { v: "PHONE", s: headerStyle }, { v: "EMAIL", s: headerStyle }];
        const teamData: any[][] = [[], [], teamHeaders];
        for (let i = 0; i < 2; i++) {
            const bRef = `${TABS.SITE_CONFIG}!$A$${4 + i}`;
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

        // --- 05. DAILY_TASKS ---
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle }
        ];
        const taskData: any[][] = [[], [], taskHeaders];
        
        for (let b = 0; b < 2; b++) {
            const bRef = `${TABS.SITE_CONFIG}!$A$${4 + b}`;
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

        // --- 06. SOP_LIB ---
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

        // --- 07. SYS_ENGINE ---
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const tRow = 4 + (i * activeRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([
                    { t: 'f', f: `IFERROR(${TABS.SITE_CONFIG}!$A$${4 + i}, "")` }, 
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
        [startWs, dashWs, branchWs, teamWs, taskWs, libWs, sysWs].forEach(ws => {
            const range = utils.decode_range(ws['!ref'] || "A1:A1");
            const dataRows = (ws as any)['!data'] ? (ws as any)['!data'].length : 100;
            range.e.r = Math.max(range.e.r, dataRows + 10);
            ws['!ref'] = utils.encode_range(range);
        });

        // Hide SYS_ENGINE
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        if (!wb.Workbook) wb.Workbook = { Sheets: [] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_v17.xlsx`);
    } catch (error: any) {
        console.error("Sovereign Infrastructure Failure:", error);
        alert(`Engine Error: ${error.message}`);
    }
}
