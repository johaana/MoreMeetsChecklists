'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V3 ARCHITECTURE — PERPETUAL LEDGER
 * ----------------------------------------------------------------------------
 * 1. 12-MONTH DATED LEDGER: Full yearly operational cycle.
 * 2. INTELLIGENT CADENCE: Conditional row generation (Daily/Weekly/Monthly/Quarterly).
 * 3. TODAY-ONLY VIEW: Optimized for Google Sheets 'onOpen' script filtering.
 * 4. INSTITUTIONAL METADATA: Immutable Task IDs and Versioning.
 * ----------------------------------------------------------------------------
 */

export const handleDownloadAuditPrototype = () => {
    try {
        const wb = utils.book_new();

        const COLORS = {
            PRIMARY_GREEN: "22C55E",
            NAVY_DEEP: "0F172A",
            WHITE: "FFFFFF",
            BORDER: "E2E8F0",
            INPUT_YELLOW: "FEFCE8",
            TEXT_RISK: "991B1B",
            LOCKED_GREY: "F1F5F9",
            VAULT_HEADER: "1E293B"
        };

        const baseFont = { name: 'Segoe UI', sz: 10 };
        const vCenter = { vertical: 'center' };
        const borderStyle = {
            top: { style: 'thin', color: { rgb: COLORS.BORDER } },
            bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
            left: { style: 'thin', color: { rgb: COLORS.BORDER } },
            right: { style: 'thin', color: { rgb: COLORS.BORDER } }
        };

        const headerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
            alignment: { horizontal: 'center', wrapText: true, ...vCenter },
            border: borderStyle
        };

        const cellStyles = {
            left: { font: baseFont, alignment: { horizontal: 'left', wrapText: true, ...vCenter }, border: borderStyle, protect: { locked: true } },
            center: { font: baseFont, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } },
            input: { font: { ...baseFont, bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: false } },
            locked: { font: { ...baseFont, color: { rgb: "94A3B8" } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } },
            status: { font: { ...baseFont, bold: true }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } }
        };

        // --- V3 TASK DATA (INTELLIGENT CADENCE) ---
        const testTasks = [
            { id: "V3-D-01", t: "Daily Security Sweep", c: "Daily", risk: "Unauthorized intruder access", instr: "Walk perimeter and check locks.", vReq: false },
            { id: "V3-W-02", t: "Weekly Deep Clean (Monday)", c: "Weekly", risk: "Hygiene breakdown", instr: "Steam clean carpets in lobby.", vReq: true, day: 1 }, // 1 = Monday
            { id: "V3-M-03", t: "Monthly Pest Audit", c: "Monthly", risk: "Regulatory shutdown", instr: "Inspect bait stations.", vReq: true, dom: 1 }, // 1st of month
            { id: "V3-Q-04", t: "Quarterly Fire Drill", c: "Quarterly", risk: "Evacuation chaos", instr: "Execute tabletop simulation.", vReq: true, qMonths: [0, 3, 6, 9] } // Jan, Apr, Jul, Oct
        ];

        const PACK_V = "V3-BLUEPRINT";
        const ENGINE_V = "SOVEREIGN-V3.0";

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V3 COMMAND CONSOLE — PERPETUAL", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "DEPLOYMENT STATUS: YEARLY PERPETUAL ENGINE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. ONE-YEAR LEDGER", s: { font: { bold: true } } }, { v: "This file is pre-populated for 12 months. No monthly regeneration needed." }],
            [{ v: "2. INTELLIGENT TASKS", s: { font: { bold: true } } }, { v: "Weekly and Monthly tasks appear only when due. Keep focus on the current mission." }],
            [{ v: "3. AUTO-FILTER TODAY", s: { font: { bold: true } } }, { v: "The script automatically hides everything except today's tasks on file open." }],
            [],
            [{ v: "⚠️ MANAGEMENT PROTOCOL", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "At year-end, simply 'Make a Copy' to archive and start fresh." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 90 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },               // A
            { v: "DAY", s: headerStyle },                // B
            { v: "MONTH", s: headerStyle },              // C
            { v: "TECHNICAL TASK", s: headerStyle },     // D
            { v: "CADENCE", s: headerStyle },            // E
            { v: "DONE BY", s: headerStyle },            // F
            { v: "VERIFIED BY", s: headerStyle },        // G
            { v: "STATUS", s: headerStyle },             // H
            { v: "COMPLETED ON", s: headerStyle },       // I
            { v: "RISK IF MISSED", s: headerStyle },     // J
            { v: "INSTRUCTIONS", s: headerStyle },       // K
            { v: "TASK_ID", s: headerStyle },            // L
            { v: "PACK_VERSION", s: headerStyle }        // M
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const today = new Date();

        // GENERATE 365 DAYS (FULL YEAR)
        for (let d = 0; d < 365; d++) {
            const rowDate = new Date(today);
            rowDate.setDate(today.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];
            const dayOfWeek = rowDate.getDay();
            const dayOfMonth = rowDate.getDate();
            const month = rowDate.getMonth();
            const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
            const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];

            testTasks.forEach((task) => {
                // INTELLIGENT CADENCE LOGIC
                let shouldAdd = false;
                if (task.c === "Daily") shouldAdd = true;
                if (task.c === "Weekly" && dayOfWeek === (task as any).day) shouldAdd = true;
                if (task.c === "Monthly" && dayOfMonth === (task as any).dom) shouldAdd = true;
                if (task.c === "Quarterly" && dayOfMonth === 1 && (task as any).qMonths.includes(month)) shouldAdd = true;

                if (shouldAdd) {
                    const rIdx = taskData.length + 1;
                    const formula = task.vReq 
                        ? `IF(AND(LEN(TRIM(F${rIdx}))>0, LEN(TRIM(G${rIdx}))>0), "COMPLETE", IF(LEN(TRIM(F${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                        : `IF(LEN(TRIM(F${rIdx}))>0, "COMPLETE", "OPEN")`;

                    taskData.push([
                        { v: dateStr, s: cellStyles.center },
                        { v: dayName, s: cellStyles.center },
                        { v: monthName, s: cellStyles.center },
                        { v: task.t, s: { ...cellStyles.left, font: { bold: true } } },
                        { v: task.c, s: cellStyles.center },
                        { v: "", s: cellStyles.input }, 
                        { v: "", s: task.vReq ? cellStyles.input : cellStyles.locked },
                        { t: 'f', f: formula, s: cellStyles.status },
                        { v: "", s: cellStyles.center },
                        { v: task.risk, s: { ...cellStyles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                        { v: task.instr, s: cellStyles.left },
                        { v: task.id, s: cellStyles.center },
                        { v: PACK_V, s: cellStyles.center }
                    ]);
                }
            });
        }

        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [12, 10, 12, 35, 12, 15, 15, 15, 20, 30, 40, 10, 15].map(w => ({ wch: w }));
        taskWs['!views'] = [{ state: 'frozen', xSplit: 4, ySplit: 3 }];
        taskWs['!autofilter'] = { ref: `A3:M${taskData.length}` };
        
        // ACTIVE SHEET PROTECTION
        taskWs['!protect'] = { password: "sovereign_v3" };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (Hidden Vault) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — PERPETUAL — DO NOT EDIT", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
            [],
            taskHeaders
        ];
        const recordWs = utils.aoa_to_sheet(recordData);
        recordWs['!cols'] = taskWs['!cols'];
        recordWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 12 } }];
        recordWs['!protect'] = { password: "sovereign_vault" };
        utils.book_append_sheet(wb, recordWs, "RECORDS");
        
        const rIdx = wb.SheetNames.indexOf("RECORDS");
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [] };
        wb.Workbook.Sheets[rIdx] = { Hidden: 1 };

        // --- 04. CUSTOMIZATION_GUIDE ---
        const guideData = [
            [{ v: "🛠️ COMMAND MANUAL — SOVEREIGN V3", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "V3 SCRIPT SOURCE (COPY EVERYTHING BELOW)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 120 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        writeFile(wb, `MoreMeets_Sovereign_V3_Prototype.xlsx`);
    } catch (e: any) {
        alert("Generation Failure: " + e.message);
    }
}
