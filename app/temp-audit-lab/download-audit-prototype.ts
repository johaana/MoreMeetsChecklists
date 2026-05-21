'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V2.2 HARDENED AUDIT ENGINE - PILOT READY
 * ----------------------------------------------------------------------------
 * 1. TIERED VERIFICATION: OPEN -> IN PROGRESS -> COMPLETE logic.
 * 2. FREEZE PANES: Top 3 rows and Columns A:C locked.
 * 3. SELECTIVE PROTECTION: Only yellow input cells (F, G) are unlocked.
 * 4. 30-DAY LEDGER: Full month operational cycle generation.
 * 5. VERSIONING: Immutable PACK_VERSION and ENGINE_VERSION per row.
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

        // --- MOCK PRODUCTION DATA ---
        const testTasks = [
            { id: "H-VLT-01", t: "Open High-Value Vault", c: "Daily", risk: "Loss of primary property assets", instr: "Execute dual-key sequence with manager present.", vReq: true },
            { id: "H-ENG-02", t: "Log Chiller Temperatures", c: "Daily", risk: "HVAC failure and guest heat complaints", instr: "Record discharge temp from BMS panel 1.", vReq: false },
            { id: "H-SEC-03", t: "Perimeter Safety Sweep", c: "Daily", risk: "Unauthorized intruder access", instr: "Walk boundary fence; check 3 gates.", vReq: false },
            { id: "H-FIN-04", t: "Cash Reconciliation", c: "Daily", risk: "Revenue theft masking as error", instr: "Match POS X-reading to physical notes.", vReq: true }
        ];

        const PACK_V = "LAB-V2.2";
        const ENGINE_V = "SOVEREIGN-PRO-V2.2";

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V2.2 COMMAND CONSOLE — HARDENED", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "DEPLOYMENT STATUS: PILOT-READY (V2.2)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. INSTALL AUTOMATION", s: { font: { bold: true } } }, { v: "Copy the script from the [CUSTOMIZATION_GUIDE] to enable auto-timestamps." }],
            [{ v: "2. PROTECTION ENABLED", s: { font: { bold: true } } }, { v: "Only yellow cells are editable. Formulas and headers are locked by default." }],
            [{ v: "3. TIERED SIGN-OFF", s: { font: { bold: true } } }, { v: "High-risk tasks require both 'Done By' and 'Verified By' to reach COMPLETE." }],
            [],
            [{ v: "⚠️ FORENSIC VAULT NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "The [RECORDS] sheet is hidden and append-only. Access via View -> Hidden Sheets." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 90 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },               // A
            { v: "BRANCH", s: headerStyle },             // B
            { v: "TECHNICAL TASK", s: headerStyle },     // C
            { v: "ROLE", s: headerStyle },               // D
            { v: "ASSIGNED TO", s: headerStyle },         // E
            { v: "DONE BY (INIT)", s: headerStyle },     // F - UNLOCKED
            { v: "VERIFIED BY", s: headerStyle },        // G - UNLOCKED
            { v: "STATUS", s: headerStyle },             // H
            { v: "COMPLETED ON (STAMP)", s: headerStyle }, // I
            { v: "CONSEQUENCE / RISK", s: headerStyle }, // J
            { v: "FLOOR INSTRUCTIONS", s: headerStyle }, // K
            { v: "TASK_ID", s: headerStyle },            // L
            { v: "CADENCE", s: headerStyle },            // M
            { v: "PACK_VERSION", s: headerStyle },       // N
            { v: "ENGINE_VERSION", s: headerStyle }      // O
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const today = new Date();

        // GENERATE 30 DAYS (FULL OPERATIONAL CYCLE)
        for (let d = 0; d < 30; d++) {
            const rowDate = new Date(today);
            rowDate.setDate(today.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];

            testTasks.forEach((task) => {
                const rIdx = taskData.length + 1;
                
                // STATUS FORMULA: OPEN -> IN PROGRESS -> COMPLETE
                // F = DONE BY, G = VERIFIED BY
                const formula = task.vReq 
                    ? `IF(AND(LEN(TRIM(F${rIdx}))>0, LEN(TRIM(G${rIdx}))>0), "COMPLETE", IF(LEN(TRIM(F${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                    : `IF(LEN(TRIM(F${rIdx}))>0, "COMPLETE", "OPEN")`;

                taskData.push([
                    { v: dateStr, s: cellStyles.center },
                    { v: "Main Branch", s: cellStyles.center },
                    { v: task.t, s: { ...cellStyles.left, font: { bold: true } } },
                    { v: "Operations", s: cellStyles.center },
                    { v: "Assigned Staff", s: cellStyles.center },
                    { v: "", s: cellStyles.input }, // F: UNLOCKED
                    { v: "", s: task.vReq ? cellStyles.input : cellStyles.locked }, // G: UNLOCKED IF REQ
                    { t: 'f', f: formula, s: cellStyles.status },
                    { v: "", s: cellStyles.center },
                    { v: task.risk, s: { ...cellStyles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                    { v: task.instr, s: cellStyles.left },
                    { v: task.id, s: cellStyles.center },
                    { v: task.c, s: cellStyles.center },
                    { v: PACK_V, s: cellStyles.center },
                    { v: ENGINE_V, s: cellStyles.center }
                ]);
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [12, 15, 35, 15, 15, 12, 12, 15, 20, 30, 40, 10, 10, 12, 18].map(w => ({ wch: w }));
        
        // HARDENED: FREEZE TOP 3 ROWS AND COLUMNS A:C
        taskWs['!views'] = [{ state: 'frozen', xSplit: 3, ySplit: 3 }];
        
        taskWs['!autofilter'] = { ref: `A3:O${taskData.length}` };
        
        // ACTIVE SHEET PROTECTION
        taskWs['!protect'] = {
            password: "sovereign_guard",
            selectLockedCells: true,
            selectUnlockedCells: true
        };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (Hidden Vault) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — AUTO-GENERATED HISTORY — DO NOT EDIT MANUALLY", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
            [],
            taskHeaders
        ];
        const recordWs = utils.aoa_to_sheet(recordData);
        recordWs['!cols'] = taskWs['!cols'];
        recordWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 14 } }];
        recordWs['!protect'] = { password: "sovereign_vault" };
        
        utils.book_append_sheet(wb, recordWs, "RECORDS");
        const rIdx = wb.SheetNames.indexOf("RECORDS");
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [] };
        wb.Workbook.Sheets[rIdx] = { Hidden: 1 };

        // --- 04. CUSTOMIZATION_GUIDE ---
        const guideData = [
            [{ v: "🛠️ COMMAND MANUAL — SOVEREIGN AUDIT LAYER", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "SECTION 1: INSTALLING AUTOMATION (GOOGLE SHEETS)", s: { font: { bold: true } } }],
            [{ v: "Step 1: Extensions -> Apps Script. Paste the source below. Save & Authorize." }],
            [],
            [{ v: "SECTION 2: HOW TO UNHIDE AND DOWNLOAD AUDIT RECORDS", s: { font: { bold: true } } }],
            [{ v: "Google Sheets:", s: { font: { bold: true } } }, { v: "1. View -> Hidden Sheets -> select RECORDS." }],
            [null, { v: "2. File -> Download -> Microsoft Excel (.xlsx) to export evidence." }],
            [{ v: "Excel (Offline):", s: { font: { bold: true } } }, { v: "1. Right-click any tab at bottom -> Unhide -> select RECORDS." }],
            [],
            [{ v: "--- SCRIPT START ---", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }],
            [{ v: "--- SCRIPT END ---", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 120 }];
        guideWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        writeFile(wb, `MoreMeets_Sovereign_V2_2_Hardened.xlsx`);
    } catch (e: any) {
        alert("Hardening Generation Failure: " + e.message);
    }
}
