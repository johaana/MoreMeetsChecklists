'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V3.1 STABILIZED ENGINE
 * ----------------------------------------------------------------------------
 * 1. 365-DAY DATED LEDGER: Full yearly cycle in one file.
 * 2. MOBILE-FIRST WIDTHS: Signature zone reachable without scrolling.
 * 3. STRICT PROTECTION: Only Yellow cells unlocked. Formulas/Headers hard-locked.
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
            locked: { font: { ...baseFont, color: { rgb: "CBD5E1" } }, fill: { patternType: 'solid', fgColor: COLORS.LOCKED_GREY }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } },
            status: { font: { ...baseFont, bold: true }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } }
        };

        // --- STABILIZED TASK SET (20 TASKS FOR YEARLY STRESS TEST) ---
        const testTasks = [
            { id: "V3-D-01", t: "Daily Security Sweep", c: "Daily", risk: "Unauthorized intruder access", instr: "Walk perimeter and check locks.", vReq: false },
            { id: "V3-D-02", t: "Chiller Temperature Log", c: "Daily", risk: "Food spoilage/outbreak", instr: "Log temp for all 4 main units.", vReq: true },
            { id: "V3-D-03", t: "Cash Drawer Reconciliation", c: "Daily", risk: "Internal revenue theft", instr: "Match physical cash to POS X-Report.", vReq: true },
            { id: "V3-W-04", t: "Weekly Deep Clean (Mon)", c: "Weekly", risk: "Hygiene breakdown", instr: "Steam clean lobby carpets.", vReq: true, day: 1 },
            { id: "V3-W-05", t: "Weekly Fire System Pulse (Fri)", c: "Weekly", risk: "Alarm failure in crisis", instr: "Test smoke detector sample.", vReq: true, day: 5 },
            { id: "V3-M-06", t: "Monthly Pest Audit (1st)", c: "Monthly", risk: "Regulatory shutdown", instr: "Inspect all bait stations.", vReq: true, dom: 1 },
            { id: "V3-Q-07", t: "Quarterly Safety Drill (1st)", c: "Quarterly", risk: "Evacuation chaos", instr: "Execute tabletop simulation.", vReq: true, qMonths: [0, 3, 6, 9] }
        ];

        const PACK_V = "V3.1-STABLE";
        const ENGINE_V = "SOVEREIGN-V3.1";

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V3.1 COMMAND CONSOLE — STABILIZED", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "YEARLY PERPETUAL ENGINE: ONLINE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. ONE-YEAR LEDGER", s: { font: { bold: true } } }, { v: "One file operates for 365 days. No monthly regeneration required." }],
            [{ v: "2. MAGIC FILTER", s: { font: { bold: true } } }, { v: "On opening in Google Sheets, the system automatically focuses on TODAY's mission." }],
            [{ v: "3. ATOMIC VAULT", s: { font: { bold: true } } }, { v: "Completions are logged to a hidden append-only sheet instantly for audits." }],
            [],
            [{ v: "⚠️ OPERATIONAL LOCK", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "This workbook is PROTECTED. Only Yellow input cells are editable. To customize, see the GUIDE tab." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 35 }, { wch: 95 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },               // A
            { v: "DAY", s: headerStyle },                // B
            { v: "BRANCH", s: headerStyle },             // C
            { v: "TECHNICAL TASK", s: headerStyle },     // D
            { v: "CADENCE", s: headerStyle },            // E
            { v: "DONE BY", s: headerStyle },            // F
            { v: "VERIFIED BY", s: headerStyle },        // G
            { v: "STATUS", s: headerStyle },             // H
            { v: "STAMP", s: headerStyle },              // I
            { v: "RISK IF MISSED", s: headerStyle },     // J
            { v: "INSTRUCTIONS", s: headerStyle },       // K
            { v: "TASK_ID", s: headerStyle },            // L
            { v: "PACK_VERSION", s: headerStyle }        // M
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const startDate = new Date();

        // 365-DAY GENERATION
        for (let d = 0; d < 365; d++) {
            const rowDate = new Date(startDate);
            rowDate.setDate(startDate.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];
            const dayOfWeek = rowDate.getDay();
            const dayOfMonth = rowDate.getDate();
            const month = rowDate.getMonth();
            const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];

            testTasks.forEach((task) => {
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
                        { v: "Main Branch", s: cellStyles.center },
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
        // Mobile-Optimized Widths (Column F must be visible)
        taskWs['!cols'] = [12, 6, 12, 35, 10, 15, 15, 15, 18, 30, 40, 10, 15].map(w => ({ wch: w }));
        taskWs['!views'] = [{ state: 'frozen', xSplit: 4, ySplit: 3 }];
        taskWs['!autofilter'] = { ref: `A3:M${taskData.length}` };
        
        // Locked by Default
        taskWs['!protect'] = { password: "sovereign_v3" };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (Hidden & Protected Vault) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — DO NOT EDIT MANUALLY", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
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
            [{ v: "🛠️ STABILIZATION GUIDE — SOVEREIGN V3.1", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "1. HOW TO ACCESS RECORDS", s: { font: { bold: true } } }, { v: "View → Hidden Sheets → RECORDS. Use this for audits only." }],
            [{ v: "2. MOBILE USAGE", s: { font: { bold: true } } }, { v: "Swipe bottom tabs to move. Use filters on Column A to see history." }],
            [{ v: "3. EXCEL FALLBACK", s: { font: { bold: true } } }, { v: "No script? Use CTRL + ; in the STAMP column for manual evidence." }],
            [],
            [{ v: "V3 SCRIPT SOURCE (STABILIZED CONCURRENCY LAYER)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 40 }, { wch: 80 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        writeFile(wb, `MoreMeets_Sovereign_V3_Stabilized.xlsx`);
    } catch (e: any) {
        alert("Generation Failure: " + e.message);
    }
}
