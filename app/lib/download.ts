
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v17.2 PRODUCTION FREEZE
 * ----------------------------------------------------------------------------
 * 1. DYNAMIC ROLES: All roles from the pack are included (no slice).
 * 2. EXPANDED HUB: Personnel, Phone, and Email columns restored.
 * 3. ALIGNMENT: Left-aligned content for technical scannability.
 * 4. HYGIENE: Orphan-task exclusion through role-matched filtering.
 * ----------------------------------------------------------------------------
 */

const SAFE_SHEET_NAME = /^[A-Z][A-Z0-9_]*$/;

const TABS = {
    START: "START",
    CONSOLE: "CONSOLE",
    BRANCHES: "BRANCHES",
    TEAM: "TEAM",
    TASKS: "TASKS",
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
            LOCKED_GREY: "F1F5F9"   
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

        const dataStyleLeft = { 
            font: baseFont,
            alignment: { horizontal: 'left', wrapText: true, ...vCenter },
            border: borderStyle
        };

        const dataStyleCenter = {
            font: baseFont,
            alignment: { horizontal: 'center', ...vCenter },
            border: borderStyle
        };

        const inputStyle = {
            ...dataStyleCenter,
            font: { ...baseFont, color: "000000", bold: true },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }
        };

        const lockedStyle = {
            ...dataStyleCenter,
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } },
            font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED } }
        };

        const addSheetHeader = (ws: WorkSheet, title: string, instruction: string, endCol: string = 'I') => {
            const headerData = [
                [{ v: `📋 ${title.toUpperCase()} — ${instruction}`, s: bannerStyle }],
                [] 
            ];
            utils.sheet_add_aoa(ws, headerData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
            ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 2, xSplit: 0 }];
        };

        // --- 01. START ---
        const startData: any[][] = [
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM IN 3 STEPS", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCHES] tab and name your locations in the yellow cells." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM] tab to assign personnel names, phone numbers, and emails." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [TASKS] tab. Staff enter their initials when work is complete." }],
            [],
            [{ v: "⚠️ SAMPLE DATA NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "Replace all YELLOW cells with your own local details to begin." }],
            [],
            [{ v: "NAVIGATION NOTICE:", s: { font: { bold: true } } }],
            [{ v: "Use the tab bar at the bottom of your screen to move between divisions." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        startWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 1, r: 14 } });
        validateSheetName(TABS.START);
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 02. CONSOLE ---
        const dashData: any[][] = [
            [{ v: "📊 OPS CONSOLE — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: { font: { bold: true } } }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [],
            [{ v: "OPEN TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `IFERROR(COUNTIFS(${TABS.TASKS}!$G$4:$G$5000, "OPEN"), 0)` }],
            [{ v: "IN PROGRESS:", s: { font: { bold: true } } }, { t: 'f', f: `IFERROR(COUNTIFS(${TABS.TASKS}!$G$4:$G$5000, "IN PROGRESS"), 0)` }],
            [{ v: "COMPLETION %:", s: { font: { bold: true } } }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.TASKS}!$G$4:$G$5000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.TASKS}!$G$4:$G$5000, "<>N/A", ${TABS.TASKS}!$C$4:$C$5000, "<>")), "0%"), "0%")` }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 20 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        dashWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 1, r: 10 } });
        validateSheetName(TABS.CONSOLE);
        utils.book_append_sheet(wb, dashWs, TABS.CONSOLE);

        // --- 03. BRANCHES ---
        const branchHeaders = [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY", s: headerStyle }, { v: "STATUS", s: headerStyle }];
        const branchData: any[][] = [[], [], branchHeaders];
        for (let i = 1; i <= 2; i++) {
            branchData.push([
                { v: `Branch ${i} [REPLACE ME]`, s: inputStyle },
                { v: "Location", s: inputStyle },
                { v: "ACTIVE", s: inputStyle }
            ]);
        }
        const branchWs = utils.aoa_to_sheet(branchData);
        branchWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 15 }];
        addSheetHeader(branchWs, TABS.BRANCHES, "Define your locations. ⚠️ Replace yellow cells.", 'C');
        branchWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 2, r: branchData.length - 1 } });
        validateSheetName(TABS.BRANCHES);
        utils.book_append_sheet(wb, branchWs, TABS.BRANCHES);

        // --- 04. TEAM ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const teamHeaders = [
            { v: "BRANCH", s: headerStyle }, 
            { v: "ROLE", s: headerStyle }, 
            { v: "PERSONNEL NAME", s: headerStyle },
            { v: "PHONE", s: headerStyle },
            { v: "EMAIL", s: headerStyle }
        ];
        const teamData: any[][] = [[], [], teamHeaders];
        for (let i = 0; i < 2; i++) {
            const bRef = `${TABS.BRANCHES}!$A$${4 + i}`;
            activeRoles.forEach(role => {
                teamData.push([
                    { t: 'f', f: `IFERROR(${bRef}, "")`, s: lockedStyle },
                    { v: role, s: dataStyleLeft },
                    { v: "[ENTER NAME]", s: inputStyle },
                    { v: "[PHONE]", s: inputStyle },
                    { v: "[EMAIL]", s: inputStyle }
                ]);
            });
        }
        const teamWs = utils.aoa_to_sheet(teamData);
        teamWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 40 }];
        addSheetHeader(teamWs, TABS.TEAM, "Assign personnel to specific roles.", 'E');
        teamWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 4, r: teamData.length - 1 } });
        validateSheetName(TABS.TEAM);
        utils.book_append_sheet(wb, teamWs, TABS.TEAM);

        // --- 05. TASKS ---
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle }, { v: "ROLE", s: headerStyle }, { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle }, { v: "DONE BY", s: headerStyle }, { v: "VERIFIED BY", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }, { v: "CONSEQUENCE / RISK", s: headerStyle }, { v: "FLOOR INSTRUCTIONS", s: headerStyle }
        ];
        const taskData: any[][] = [[], [], taskHeaders];
        
        for (let b = 0; b < 2; b++) {
            const bRef = `${TABS.BRANCHES}!$A$${4 + b}`;
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const rIdx = taskData.length + 1;
                    const bVal = `$A${rIdx}`;
                    const rVal = `$B${rIdx}`;
                    const dBy = `$E${rIdx}`;
                    const vBy = `$F${rIdx}`;

                    const assignedFormula = `IFERROR(INDEX(${TABS.SYS_ENGINE}!$D$1:$D$500, MATCH(${bVal} & "|" & ${rVal}, ${TABS.SYS_ENGINE}!$C$1:$C$500, 0)), "[UNASSIGNED]")`;
                    
                    const isV = t.verificationRequired === true;
                    const statusFormula = isV 
                        ? `IF(AND(LEN(TRIM(${dBy}))>0, LEN(TRIM(${vBy}))>0), "COMPLETE", IF(LEN(TRIM(${dBy}))>0, "IN PROGRESS", "OPEN"))`
                        : `IF(LEN(TRIM(${dBy}))>0, "COMPLETE", "OPEN")`;

                    taskData.push([
                        { t: 'f', f: `IFERROR(${bRef}, "")`, s: dataStyleLeft },
                        { v: c.role, s: dataStyleLeft },
                        { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                        { t: 'f', f: assignedFormula, s: dataStyleLeft },
                        { v: "", s: inputStyle },
                        { v: "", s: isV ? inputStyle : lockedStyle }, 
                        { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true } } },
                        { v: sanitizeRisk(t.consequence || "Compliance Gap"), s: { ...dataStyleLeft, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                        { v: t.floorAction || t.description || "", s: { ...dataStyleLeft, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                    ]);
                });
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 55].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.TASKS, "Update 'Done By' to complete daily work.", 'I');
        taskWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 8, r: taskData.length - 1 } });
        validateSheetName(TABS.TASKS);
        utils.book_append_sheet(wb, taskWs, TABS.TASKS);

        // --- 06. SOP_LIB ---
        const libHeaders = [{ v: "ROLE", s: headerStyle }, { v: "TECHNICAL SOP", s: headerStyle }, { v: "OPERATIONAL PURPOSE", s: headerStyle }, { v: "STEP-BY-STEP ACTION", s: headerStyle }];
        const libData: any[][] = [[], [], libHeaders];
        const libRows: any[] = [{ hpt: 30 }, { hpt: 20 }, { hpt: 30 }];

        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const txt = (t.technicalProtocol || "") + (t.floorAction || t.description || "");
                const lines = Math.ceil(txt.length / 60);
                libRows.push({ hpt: Math.max(35, lines * 18), customHeight: 1 });

                libData.push([
                    { v: c.role, s: dataStyleLeft },
                    { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                    { v: sanitizeRisk(t.consequence || "Risk Mitigation"), s: dataStyleLeft },
                    { v: t.floorAction || t.description || "", s: { ...dataStyleLeft, font: { color: { rgb: COLORS.TEXT_ACTION } } } }
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 65 }];
        libWs['!rows'] = libRows;
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'D');
        libWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 3, r: libData.length - 1 } });
        validateSheetName(TABS.SOP_LIB);
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // --- 07. SYS_ENGINE (HIDDEN) ---
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const tRow = 4 + (i * activeRoles.length) + rIdx;
                const sIdx = sysData.length + 1;
                sysData.push([
                    { t: 'f', f: `IFERROR(${TABS.BRANCHES}!$A$${4 + i}, "")` }, 
                    { v: role },                                   
                    { t: 'f', f: `A${sIdx}&"|"&B${sIdx}` },    
                    { t: 'f', f: `${TABS.TEAM}!$C$${tRow}` }        
                ]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        sysWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 3, r: sysData.length - 1 } });
        validateSheetName(TABS.SYS_ENGINE);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);
        
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        if (!wb.Workbook) wb.Workbook = { Sheets: [] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_v17.xlsx`);
    } catch (error: any) {
        console.error("Sovereign Infrastructure Failure:", error);
        alert(`Engine Error: ${error.message}`);
    }
}
