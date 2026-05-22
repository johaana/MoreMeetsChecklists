
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { temp_hotel_sample } from '@/lib/packs/temp_hotel_sample';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';
import type { PremiumPack } from '@/lib/premium-packs';

/**
 * SOVEREIGN V4.0.2 — ZERO-LOSS FULL FIDELITY ENGINE
 * ----------------------------------------------------------------------------
 * 1. INHERITANCE: Uses exact production logic for all benchmark sheets.
 * 2. GEOMETRY: strictly preserves A:I operational zone in DAILY_TASKS.
 * 3. OVERLAY: Projects Yearly Dates/Days to Column Z+ and Stamp to Column J.
 * 4. HARDENING: Applies binary Freeze (A:D) and Protection (Unlock E,F only).
 * ----------------------------------------------------------------------------
 */

export const handleDownloadAuditPrototype = (item: PremiumPack = temp_hotel_sample) => {
    try {
        const wb = utils.book_new();

        // --- PRODUCTION STYLING (v17.5.1 PARITY) ---
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
                input: { font: { ...baseFont, color: "000000", bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: false } },
                locked: { font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } }
            };
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
            RECORDS: "_RECORDS_VAULT"
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

        // --- 01. START (Full Parity) ---
        const startWs = utils.aoa_to_sheet([
            [{ v: "🚀 SOVEREIGN START GUIDE — SETUP YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "Follow the steps below to activate your operational infrastructure.", s: { font: { italic: true } } }],
            [],
            [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab and name your locations in the yellow cells." }],
            [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign personnel names and contact info." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [DAILY_TASKS] tab. Staff enter their initials when work is complete." }]
        ]);
        startWs['!cols'] = [{ wch: 40 }, { wch: 80 }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 02. DASHBOARD (Full Parity) ---
        const dashData: any[][] = [
            [{ v: "📊 OPS DASHBOARD — REAL-TIME OPERATIONAL VITAL SIGNS", s: bannerStyle }],
            [],
            [{ v: "SYSTEM STATUS:", s: { font: baseFont } }, { v: "ONLINE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
            [],
            [{ v: "COMPLETION %:", s: { font: baseFont } }, { t: 'f', f: `IFERROR(TEXT(COUNTIF(${TABS.DAILY_TASKS}!$G$4:$G$50000, "COMPLETE") / MAX(1, COUNTIFS(${TABS.DAILY_TASKS}!$G$4:$G$50000, "<>")), "0%"), "0%")`, s: { font: { bold: true } } }]
        ];
        const dashWs = utils.aoa_to_sheet(dashData);
        dashWs['!cols'] = [{ wch: 30 }, { wch: 25 }];
        dashWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];
        utils.book_append_sheet(wb, dashWs, TABS.DASHBOARD);

        // --- 03. DAILY_TASKS (Surgical Governance Overlay) ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle },         // A
            { v: "ROLE", s: headerStyle },           // B
            { v: "TECHNICAL TASK", s: headerStyle }, // C
            { v: "ASSIGNED TO", s: headerStyle },    // D
            { v: "DONE BY", s: headerStyle },        // E
            { v: "VERIFIED BY", s: headerStyle },    // F
            { v: "STATUS", s: headerStyle },         // G
            { v: "CONSEQUENCE / RISK", s: headerStyle }, // H
            { v: "FLOOR INSTRUCTIONS", s: headerStyle }, // I
            { v: "STAMP", s: headerStyle }           // J (Far-right operation end)
        ];
        const taskData: any[][] = [[], [], taskHeaders];
        
        // 365-DAY YEARLY PROJECTION
        const today = new Date();
        for (let d = 0; d < 365; d++) {
            const curDate = new Date(today);
            curDate.setDate(today.getDate() + d);
            const dateStr = curDate.toISOString().split('T')[0];
            const dayName = curDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();

            activeRoles.forEach((role, roleIdx) => {
                const roleChecklist = item.checklists.find(c => c.role === role);
                if (roleChecklist) {
                    roleChecklist.tasks.forEach(t => {
                        const rIdx = taskData.length + 1;
                        const styles = getStyles(roleIdx % 2 === 1);
                        const isV = t.verificationRequired === true;

                        // SOVEREIGN GRID (A:I)
                        const row: any[] = [
                            { t: 'f', f: `IFERROR(${TABS.BRANCH_SETUP}!$A$4, "")`, s: styles.center }, // A: BRANCH
                            { v: role, s: { ...styles.left, font: { ...baseFont, bold: true } } },     // B: ROLE
                            { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } }, // C: TASK
                            { t: 'f', f: `IFERROR(INDEX(${TABS.SYS_ENGINE}!$D$1:$D$500, MATCH(A${rIdx}&"|"&B${rIdx}, ${TABS.SYS_ENGINE}!$C$1:$C$500, 0)), "[UNASSIGNED]")`, s: styles.left }, // D: ASSIGNED
                            { v: "", s: styles.input }, // E: DONE BY
                            { v: "", s: isV ? styles.input : styles.locked }, // F: VERIFIED BY
                            { t: 'f', f: `IF(AND(LEN(TRIM(E${rIdx}))>0, ${isV ? `LEN(TRIM(F${rIdx}))>0` : 'TRUE'}), "COMPLETE", "OPEN")`, s: { ...styles.center, font: { bold: true } } }, // G: STATUS
                            { v: t.consequence || "Risk Mitigation", s: { ...styles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } }, // H: CONSEQUENCE
                            { v: t.floorAction || t.trainerNotes || t.description || "", s: { ...styles.left, font: { color: { rgb: COLORS.TEXT_ACTION } } } }, // I: FLOOR INSTR
                            { v: "", s: styles.locked } // J: STAMP
                        ];

                        // OVERLAY LAYER (Z+)
                        while (row.length < 25) row.push({ v: "" });
                        row.push({ v: dateStr, s: styles.locked }); // Z: OVL_DATE
                        row.push({ v: dayName, s: styles.locked }); // AA: OVL_DAY

                        taskData.push(row);
                    });
                }
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65, 20].map(w => ({ wch: w }));
        addSheetHeader(taskWs, TABS.DAILY_TASKS, "Update 'Done By' to complete daily mission.");
        
        // NATIVE BINARY FREEZE (Context Persistence)
        taskWs['!views'] = [{
            state: 'frozen',
            xSplit: 4,      // Columns A-D Locked
            ySplit: 3,      // Rows 1-3 Locked
            topLeftCell: 'E4',
            activePane: 'bottomRight'
        }];

        // NATIVE BINARY PROTECTION
        taskWs['!protect'] = { password: "sovereign_v4" };
        
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // --- 04. SOP_LIB (Full Parity) ---
        const libData: any[][] = [[], [], [{v:"ROLE", s:headerStyle}, {v:"TECHNICAL SOP", s:headerStyle}, {v:"FLOOR ACTION", s:headerStyle}]];
        item.checklists.forEach(cl => {
            cl.tasks.forEach(t => {
                libData.push([
                    {v: cl.role, s: { font: baseFont, border: borderStyle }},
                    {v: t.technicalProtocol || t.description, s: { font: { ...baseFont, bold: true }, border: borderStyle }},
                    {v: t.floorAction || t.trainerNotes || t.description, s: { font: baseFont, border: borderStyle }}
                ]);
            });
        });
        const libWs = utils.aoa_to_sheet(libData);
        libWs['!cols'] = [{ wch: 30 }, { wch: 50 }, { wch: 70 }];
        addSheetHeader(libWs, TABS.SOP_LIB, "Reference library for training and audits.", 'C');
        utils.book_append_sheet(wb, libWs, TABS.SOP_LIB);

        // --- 05. BRANCH_SETUP & 06. TEAM_HUB (Full Parity) ---
        const branchWs = utils.aoa_to_sheet([[],[],[{v:"BRANCH NAME", s:headerStyle}, {v:"STATUS", s:headerStyle}], [{v:"Branch 1", s:getStyles(false).input}, {v:"ACTIVE", s:getStyles(false).input}]]);
        addSheetHeader(branchWs, TABS.BRANCH_SETUP, "Define locations.", 'B');
        utils.book_append_sheet(wb, branchWs, TABS.BRANCH_SETUP);

        const teamWs = utils.aoa_to_sheet([[],[],[{v:"ROLE", s:headerStyle}, {v:"PERSONNEL NAME", s:headerStyle}]]);
        activeRoles.forEach(r => utils.sheet_add_aoa(teamWs, [[r, "[ENTER NAME]"]], { origin: -1 }));
        addSheetHeader(teamWs, TABS.TEAM_HUB, "Assign staff.", 'B');
        utils.book_append_sheet(wb, teamWs, TABS.TEAM_HUB);

        // --- 07. CUSTOMIZATION_GUIDE (Full Parity + Script) ---
        const guideData = [
            [{ v: "🛠️ CUSTOMIZATION GUIDE — HOW TO TAILOR YOUR SYSTEM", s: bannerStyle }],
            [],
            [{ v: "STEP 1: ACTIVATE AUTOMATION (GOOGLE SHEETS)", s: { font: { bold: true } } }],
            [{ v: "Copy the script below to Extensions > Apps Script to enable today-first filters and auto-stamps." }],
            [],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { family: 'Courier New', sz: 8 }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 100 }];
        utils.book_append_sheet(wb, guideWs, TABS.CUSTOMIZATION_GUIDE);

        // --- 08. SYS_ENGINE (Full Parity) ---
        const sysWs = utils.aoa_to_sheet([['ID','ROLE','KEY','PERSON']]);
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);

        // HIDE GOVERNANCE NAMESPACE
        [TABS.SYS_ENGINE, TABS.RECORDS].forEach(name => {
            const idx = wb.SheetNames.indexOf(name);
            if (idx > -1) {
                if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [] };
                wb.Workbook.Sheets[idx] = { Hidden: 1 };
            }
        });

        writeFile(wb, `TEMP_HOTEL_OVERLAY_V4.xlsx`);
    } catch (e: any) {
        alert("Sovereign Engine Error: " + e.message);
    }
}
