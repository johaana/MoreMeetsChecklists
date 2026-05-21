'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

/**
 * SOVEREIGN V2.2 HARDENED AUDIT ENGINE
 * ----------------------------------------------------------------------------
 * 1. TIERED VERIFICATION: OPEN -> IN PROGRESS -> COMPLETE logic restored.
 * 2. FREEZE PANES: A1:C3 locked at generation for mobile consistency.
 * 3. AUTO-FILTERS: Applied to header row by default.
 * 4. RECORDS VAULT: Set to 'hidden' status with forensic meta-tags.
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
            SUCCESS_BG: "F0FDF4"
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
            left: { font: baseFont, alignment: { horizontal: 'left', wrapText: true, ...vCenter }, border: borderStyle },
            center: { font: baseFont, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
            input: { font: { ...baseFont, bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
            locked: { font: { ...baseFont, color: { rgb: "94A3B8" } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
            status: { font: { ...baseFont, bold: true }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle }
        };

        // --- MOCK PRODUCTION DATA ---
        const testTasks = [
            { id: "H-VLT-01", t: "Open High-Value Vault", c: "Daily", risk: "Loss of primary property assets", instr: "Execute dual-key sequence with manager present.", vReq: true },
            { id: "H-ENG-02", t: "Log Chiller Temperatures", c: "Daily", risk: "HVAC failure and guest heat complaints", instr: "Record discharge temp from BMS panel 1.", vReq: false },
            { id: "H-SEC-03", t: "Perimeter Safety Sweep", c: "Daily", risk: "Unauthorized intruder access", instr: "Walk boundary fence; check 3 gates.", vReq: false },
            { id: "H-FIN-04", t: "Cash Reconciliation", c: "Daily", risk: "Revenue theft masking as error", instr: "Match POS X-reading to physical notes.", vReq: true }
        ];

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V2.2 COMMAND CONSOLE — HARDENED", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "DEPLOYMENT STATUS: AUDIT-READY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "1. INSTALL AUTOMATION", s: { font: { bold: true } } }, { v: "Copy the script from the [CUSTOMIZATION_GUIDE] to enable auto-timestamps." }],
            [{ v: "2. ONE WORKBOOK PER BRANCH", s: { font: { bold: true } } }, { v: "This file is engineered for single-branch high-fidelity governance." }],
            [{ v: "3. TIERED SIGN-OFF", s: { font: { bold: true } } }, { v: "High-risk tasks require both 'Done By' and 'Verified By' to reach COMPLETE." }],
            [],
            [{ v: "⚠️ FORENSIC VAULT NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "The [RECORDS] sheet is hidden and append-only. Do not edit it manually." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 90 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },
            { v: "BRANCH", s: headerStyle },
            { v: "TECHNICAL TASK", s: headerStyle },
            { v: "ROLE", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle },
            { v: "DONE BY (INIT)", s: headerStyle },
            { v: "VERIFIED BY", s: headerStyle },
            { v: "STATUS", s: headerStyle },
            { v: "COMPLETED ON (STAMP)", s: headerStyle },
            { v: "CONSEQUENCE / RISK", s: headerStyle },
            { v: "FLOOR INSTRUCTIONS", s: headerStyle },
            { v: "TASK_ID", s: headerStyle },
            { v: "CADENCE", s: headerStyle }
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const today = new Date();

        for (let d = 0; d < 3; d++) {
            const rowDate = new Date(today);
            rowDate.setDate(today.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];

            testTasks.forEach((task) => {
                const rIdx = taskData.length + 1;
                
                // STATUS FORMULA (RESTORED P0)
                // If verification required: IF(AND(DONE, VERIFIED), "COMPLETE", IF(DONE, "IN PROGRESS", "OPEN"))
                // If not required: IF(DONE, "COMPLETE", "OPEN")
                const formula = task.vReq 
                    ? `IF(AND(LEN(TRIM(F${rIdx}))>0, LEN(TRIM(G${rIdx}))>0), "COMPLETE", IF(LEN(TRIM(F${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                    : `IF(LEN(TRIM(F${rIdx}))>0, "COMPLETE", "OPEN")`;

                taskData.push([
                    { v: dateStr, s: cellStyles.center },
                    { v: "Main Branch", s: cellStyles.center },
                    { v: task.t, s: { ...cellStyles.left, font: { bold: true } } },
                    { v: "Operations", s: cellStyles.center },
                    { v: "Assigned Staff", s: cellStyles.center },
                    { v: "", s: cellStyles.input },
                    { v: "", s: task.vReq ? cellStyles.input : cellStyles.locked },
                    { t: 'f', f: formula, s: cellStyles.status },
                    { v: "", s: cellStyles.center },
                    { v: task.risk, s: { ...cellStyles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                    { v: task.instr, s: cellStyles.left },
                    { v: task.id, s: cellStyles.center },
                    { v: task.c, s: cellStyles.center }
                ]);
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [12, 15, 40, 15, 15, 12, 12, 15, 25, 35, 45, 10, 10].map(w => ({ wch: w }));
        
        // FREEZE PANES (P0) - Freeze top 3 rows and A:C columns
        taskWs['!views'] = [{ state: 'frozen', xSplit: 3, ySplit: 3 }];
        
        // AUTO-FILTER (P0)
        taskWs['!autofilter'] = { ref: "A3:M1000" };
        
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (P0: HIDDEN VAULT) ---
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — AUTO-GENERATED HISTORY — DO NOT EDIT MANUALLY", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.VAULT_HEADER } }, alignment: { horizontal: 'center' } } }],
            [],
            taskHeaders
        ];
        const recordWs = utils.aoa_to_sheet(recordData);
        recordWs['!cols'] = taskWs['!cols'];
        recordWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 12 } }];
        
        // Append to workbook and SET HIDDEN
        utils.book_append_sheet(wb, recordWs, "RECORDS");
        const rIdx = wb.SheetNames.indexOf("RECORDS");
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [] };
        wb.Workbook.Sheets[rIdx] = { Hidden: 1 };

        // --- 04. CUSTOMIZATION_GUIDE (P1: SCRIPT INCLUSION) ---
        const guideData = [
            [{ v: "🛠️ COMMAND MANUAL — SOVEREIGN AUDIT LAYER", s: { font: { bold: true, sz: 12, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } }],
            [],
            [{ v: "1. INSTALLING THE AUTOMATION (GOOGLE SHEETS)", s: { font: { bold: true } } }],
            [{ v: "Step 1: Open your Google Sheet." }],
            [{ v: "Step 2: Go to Extensions -> Apps Script." }],
            [{ v: "Step 3: Delete any existing code and paste the block below exactly." }],
            [{ v: "Step 4: Click 'Save' and authorize permissions when prompted." }],
            [],
            [{ v: "--- SCRIPT START ---", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: APPS_SCRIPT_SOURCE, s: { font: { name: "Courier New", sz: 8 }, alignment: { wrapText: true } } }],
            [{ v: "--- SCRIPT END ---", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [],
            [{ v: "2. EXCEL-ONLY FALLBACK (OFFLINE)", s: { font: { bold: true } } }],
            [{ v: "Use [CTRL + ;] to manually insert a static date in the 'COMPLETED ON' column." }],
            [{ v: "Use the filter icon on Column A to see today's tasks." }],
            [],
            [{ v: "3. UNHIDING RECORDS", s: { font: { bold: true } } }],
            [{ v: "Go to View -> Hidden Sheets -> select RECORDS to audit history." }]
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
