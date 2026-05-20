
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';

/**
 * SOVEREIGN V2.0 AUDIT ENGINE - PROTOTYPE BUILD
 * ----------------------------------------------------------------------------
 * 1. DATED LEDGER: Tasks pre-mapped to dates.
 * 2. HIDDEN RECORDS: The permanent vault.
 * 3. AUTO-LOGGING READY: Columns mapped for Apps Script integration.
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
            RECORD_GREY: "F8FAFC",
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
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
            alignment: { horizontal: 'center', wrapText: true, ...vCenter },
            border: borderStyle
        };

        const cellStyles = {
            left: { font: baseFont, alignment: { horizontal: 'left', wrapText: true, ...vCenter }, border: borderStyle },
            center: { font: baseFont, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
            input: { font: { ...baseFont, bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
            record: { font: { ...baseFont, color: { rgb: "475569" } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.RECORD_GREY } }, alignment: { horizontal: 'left', ...vCenter }, border: borderStyle }
        };

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V2 START GUIDE", s: bannerStyle }],
            [],
            [{ v: "AUDIT-READY ARCHITECTURE ENABLED", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "This system handles permanent history via the hidden [RECORDS] sheet." }],
            [],
            [{ v: "1. DAILY OPS:", s: { font: { bold: true } } }, { v: "Staff use [DAILY_TASKS]. Only fill the YELLOW cells." }],
            [{ v: "2. FILTERS:", s: { font: { bold: true } } }, { v: "In Google Sheets, use the Filter Icon on Column A to select 'TODAY'." }],
            [{ v: "3. RECORDS:", s: { font: { bold: true } } }, { v: "Completed tasks are archived in the [RECORDS] tab for inspections." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS (THE LEDGER) ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },
            { v: "BRANCH", s: headerStyle },
            { v: "TASK DESCRIPTION", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle },
            { v: "DONE BY", s: headerStyle },
            { v: "VERIFIED BY", s: headerStyle },
            { v: "STATUS", s: headerStyle },
            { v: "COMPLETED ON (TIME)", s: headerStyle }
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const today = new Date();
        const testTasks = ["Open Vault", "Check Fridge Temp", "Sanitize Counter", "Cash Reconciliation"];

        // Generate 3 days of tasks for the prototype
        for (let d = 0; d < 3; d++) {
            const rowDate = new Date(today);
            rowDate.setDate(today.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];

            testTasks.forEach((t, i) => {
                const rIdx = taskData.length + 1;
                taskData.push([
                    { v: dateStr, s: cellStyles.center },
                    { v: "Main Branch", s: cellStyles.center },
                    { v: t, s: cellStyles.left },
                    { v: "Assigned Staff", s: cellStyles.center },
                    { v: "", s: cellStyles.input },
                    { v: "", s: cellStyles.input },
                    { t: 'f', f: `IF(LEN(E${rIdx})>0, "COMPLETE", "PENDING")`, s: cellStyles.center },
                    { v: "", s: cellStyles.center } // Placeholder for script-stamped time
                ]);
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [15, 20, 45, 20, 15, 15, 15, 25].map(w => ({ wch: w }));
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (THE VAULT) ---
        const recordData: any[][] = [[{ v: "📋 PERMANENT AUDIT RECORDS — DO NOT DELETE", s: bannerStyle }], [], taskHeaders];
        const recordWs = utils.aoa_to_sheet(recordData);
        recordWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }];
        utils.book_append_sheet(wb, recordWs, "RECORDS");

        // --- OTHER TABS ---
        utils.book_append_sheet(wb, utils.aoa_to_sheet([["SOP LIBRARY"]]), "SOP_LIB");
        utils.book_append_sheet(wb, utils.aoa_to_sheet([["TEAM CONFIG"]]), "TEAM_HUB");
        
        writeFile(wb, `MoreMeets_V2_AuditPrototype.xlsx`);
    } catch (e: any) {
        alert("Prototype Error: " + e.message);
    }
}
