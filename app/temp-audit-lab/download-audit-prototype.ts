'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V3.1 STABILIZED YEARLY ENGINE
 * ----------------------------------------------------------------------------
 * 1. 365-DAY TRIGGER LEDGER: Intelligence built into the generation.
 * 2. TIERED VERIFICATION: OPEN -> IN PROGRESS -> COMPLETE logic.
 * 3. SYMMETRIC FREEZE: Headers (1-3) and Identity (A-C) frozen for mobile.
 * 4. HARDENED PROTECTION: Only operational input cells (Yellow) are unlocked.
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
            VAULT_HEADER: "1E293B",
            IN_PROGRESS_AMBER: "D97706"
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
            locked: { font: { ...baseFont, color: { rgb: "CBD5E1" } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } },
            status: { font: { ...baseFont, bold: true }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } }
        };

        // --- STABILIZED TASK SET (Mixed Risk Tiers) ---
        const testTasks = [
            { id: "V3-D-01", t: "Daily Security Sweep", c: "Daily", risk: "Unauthorized intruder access", instr: "Walk perimeter and check locks.", vReq: false },
            { id: "V3-D-02", t: "Vault Opening (Dual-Auth)", c: "Daily", risk: "Inventory theft window", instr: "Witness 2-key entry sequence.", vReq: true },
            { id: "V3-W-03", t: "Weekly Deep Clean (Mon)", c: "Weekly", risk: "Hygiene breakdown", instr: "Steam clean lobby carpets.", vReq: true, day: 1 },
            { id: "V3-M-04", t: "Monthly Pest Audit (1st)", c: "Monthly", risk: "Regulatory shutdown", instr: "Inspect all bait stations.", vReq: true, dom: 1 }
        ];

        const PACK_V = "V3.1-STABLE";
        const ENGINE_V = "SOVEREIGN-V3.1";

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V3.1 YEARLY ENGINE — INSTITUTIONAL GRADE", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "ONE-YEAR PERPETUAL LEDGER: OPERATIONAL", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. TODAY-FIRST UX", s: { font: { bold: true } } }, { v: "The workbook automatically filters for TODAY's tasks on file open. No manual scrolling." }],
            [{ v: "2. ATOMIC LOCKS", s: { font: { bold: true } } }, { v: "Concurrency protection handles up to 10 simultaneous staff edits without data loss." }],
            [{ v: "3. TIERED VERIFICATION", s: { font: { bold: true } } }, { v: "High-risk tasks require both 'Done' and 'Verified' signatures to reach COMPLETE status." }],
            [],
            [{ v: "⚠️ INSTITUTIONAL LOCK", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "Descriptions and formulas are PROTECTED. Only Yellow cells are editable. Pass: 'sovereign_v3'." }]
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
            { v: "CONSEQUENCE / RISK", s: headerStyle }, // J
            { v: "FLOOR INSTRUCTIONS", s: headerStyle }, // K
            { v: "TASK_ID", s: headerStyle },            // L
            { v: "PACK_VERSION", s: headerStyle }        // M
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const startDate = new Date();

        for (let d = 0; d < 365; d++) {
            const rowDate = new Date(startDate);
            rowDate.setDate(startDate.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];
            const dayOfWeek = rowDate.getDay();
            const dayOfMonth = rowDate.getDate();
            const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];

            testTasks.forEach((task) => {
                let shouldAdd = false;
                if (task.c === "Daily") shouldAdd = true;
                if (task.c === "Weekly" && dayOfWeek === (task as any).day) shouldAdd = true;
                if (task.c === "Monthly" && dayOfMonth === (task as any).dom) shouldAdd = true;

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
        // Mobile-Optimized Grid
        taskWs['!cols'] = [12, 6, 12, 35, 10, 15, 15, 15, 18, 30, 40, 10, 15].map(w => ({ wch: w }));
        taskWs['!views'] = [{ state: 'frozen', xSplit: 3, ySplit: 3 }]; // Freeze Identity (Date/Branch/Task)
        taskWs['!autofilter'] = { ref: `A3:M${taskData.length}` };
        taskWs['!protect'] = { password: "sovereign_v3" };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (Hidden Vault) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — AUTO-GENERATED EVIDENCE", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
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
            [{ v: "🛠️ SYSTEM STABILIZATION GUIDE — SOVEREIGN V3.1", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "1. INSTALLATION", s: { font: { bold: true } } }, { v: "Copy the script below, go to Extensions -> Apps Script, and paste. Authorize all scopes." }],
            [{ v: "2. RECORDS ACCESS", s: { font: { bold: true } } }, { v: "View -> Hidden Sheets -> RECORDS. Contains immutable audit history." }],
            [{ v: "3. OFFLINE FALLBACK", s: { font: { bold: true } } }, { v: "Use CTRL + ; in the STAMP column for manual static dates if script is inactive." }],
            [],
            [{ v: "V3 SCRIPT SOURCE (STABILIZED CONCURRENCY LAYER)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 40 }, { wch: 80 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        writeFile(wb, `MoreMeets_Sovereign_V3_Yearly_Engine.xlsx`);
    } catch (e: any) {
        alert("Generation Failure: " + e.message);
    }
}
