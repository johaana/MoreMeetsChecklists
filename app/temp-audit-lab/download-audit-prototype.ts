'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V3.2 PILOT-READY ENGINE
 * ----------------------------------------------------------------------------
 * 1. SYMMETRIC FREEZE: A:D (Date/Day/Branch/Task) + Top 3 Rows.
 * 2. HARDENED PROTECTION: ONLY Yellow cells (F:G) are editable. 
 * 3. MOBILE DENSITY: 35pt row height for touch-accuracy.
 * 4. INSTITUTIONAL METADATA: Immutable watermarking per row.
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
            LOCKED_GREY: "F8FAFC",
            VAULT_HEADER: "1E293B",
            INACTIVE_TEXT: "CBD5E1"
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
            locked: { font: { ...baseFont, color: { rgb: COLORS.INACTIVE_TEXT } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } },
            status: { font: { ...baseFont, bold: true }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle, protect: { locked: true } }
        };

        const testTasks = [
            { id: "V3-D-01", t: "Vault Opening (Dual-Auth)", c: "Daily", risk: "Inventory theft window", instr: "Witness 2-key entry sequence.", vReq: true },
            { id: "V3-D-02", t: "Chiller Temperature Log", c: "Daily", risk: "Mass food spoilage", instr: "Record digital reading from 12 walk-ins.", vReq: false },
            { id: "V3-W-03", t: "Weekly Fire Drill (Fri)", c: "Weekly", risk: "Evacuation chaos liability", instr: "Execute tabletop simulation with evening shift.", vReq: true, day: 5 },
            { id: "V3-M-04", t: "Monthly Pest Audit (1st)", c: "Monthly", risk: "Regulatory shutdown", instr: "Check 100% of bait stations.", vReq: true, dom: 1 }
        ];

        const PACK_V = "V3.2-PILOT-READY";
        const ENGINE_V = "SOVEREIGN-V3.2";

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V3.2 PILOT — OPERATIONAL HARDENING", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "INSTITUTIONAL PERPETUAL ENGINE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. OPERATION MODE (DEFAULT)", s: { font: { bold: true } } }, { v: "Descriptions and formulas are LOCKED. Only Yellow cells (Done By / Verified By) are editable." }],
            [{ v: "2. MOBILE FREEZE ARCHITECTURE", s: { font: { bold: true } } }, { v: "Rows 1-3 and Columns A-D are FROZEN. You will never lose task identity during scrolling." }],
            [{ v: "3. AUTOMATED EVIDENCE", s: { font: { bold: true } } }, { v: "Every completion is silently mirrored to the hidden RECORDS vault with a static timestamp." }],
            [],
            [{ v: "🛠️ DESIGN MODE (FOR MANAGERS)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "To modify SOPs or Add Tasks: Review the [CUSTOMIZATION_GUIDE]. Password: 'sovereign_v3'." }]
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
        const rowConfigs: any[] = [{ hpt: 35 }, { hpt: 20 }, { hpt: 35 }];
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
                    rowConfigs.push({ hpt: 35 }); // Taller rows for mobile tap-accuracy
                }
            });
        }

        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [12, 6, 15, 40, 10, 18, 18, 15, 20, 35, 45, 10, 15].map(w => ({ wch: w }));
        taskWs['!rows'] = rowConfigs;
        taskWs['!views'] = [{ state: 'frozen', xSplit: 4, ySplit: 3 }]; // Freeze Identity (Date/Day/Branch/Task)
        taskWs['!autofilter'] = { ref: `A3:M${taskData.length}` };
        taskWs['!protect'] = { password: "sovereign_v3" };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (Hidden Vault) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — AUTO-GENERATED EVIDENCE | DO NOT EDIT MANUALLY", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
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
            [{ v: "🛠️ SYSTEM STABILIZATION GUIDE — SOVEREIGN V3.2", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "SECTION 1: STAFF USAGE", s: { font: { bold: true } } }],
            [{ v: "• Open the file daily. The script automatically filters for TODAY'S tasks." }],
            [{ v: "• Only Yellow cells are editable. Enter your initials when a task is done." }],
            [],
            [{ v: "SECTION 2: MANAGER CUSTOMIZATION", s: { font: { bold: true } } }],
            [{ v: "• To modify SOPs: Right-click DAILY_TASKS -> Unprotect Sheet. Password: 'sovereign_v3'." }],
            [{ v: "• To view history: Go to View -> Hidden Sheets -> RECORDS." }],
            [],
            [{ v: "SECTION 3: OFFLINE FALLBACK", s: { font: { bold: true } } }],
            [{ v: "• If the script is offline: Enter initials, then use CTRL + ; to stamp the time in column I." }],
            [],
            [{ v: "V3.2 SCRIPT SOURCE (STABILIZED CONCURRENCY LAYER)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 45 }, { wch: 85 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        writeFile(wb, `MoreMeets_Sovereign_V3_2_Pilot.xlsx`);
    } catch (e: any) {
        alert("Generation Failure: " + e.message);
    }
}
