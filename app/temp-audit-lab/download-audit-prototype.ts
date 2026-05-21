'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';

/**
 * SOVEREIGN V2.1 AUDIT ENGINE - REFINED PROTOTYPE
 * ----------------------------------------------------------------------------
 * 1. DATED LEDGER: 30-day task window for mobile performance.
 * 2. APPEND-ONLY VAULT: The high-gravity [RECORDS] sheet.
 * 3. FUTURE-READY: TASK_ID, PACK_VERSION, and CADENCE columns included.
 * 4. NON-DESTRUCTIVE: Visibility via filters, not row hiding.
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

        const bannerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } },
            alignment: { horizontal: 'center', ...vCenter },
            border: borderStyle
        };

        const vaultBannerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 12 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.VAULT_HEADER } },
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
            hidden: { font: { ...baseFont, color: { rgb: "CBD5E1" } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle }
        };

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN V2.1 START GUIDE — AUDIT-READY", s: bannerStyle }],
            [],
            [{ v: "EVIDENCE INFRASTRUCTURE ENABLED", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "This system handles permanent history via a hidden append-only [RECORDS] vault.", s: { font: { italic: true } } }],
            [],
            [{ v: "MODE A: GOOGLE SHEETS (RECOMMENDED)", s: { font: { bold: true } } }],
            [{ v: "• Install the provided Apps Script for auto-timestamping and auto-archiving." }],
            [{ v: "• On opening, the sheet will automatically filter for TODAY's tasks." }],
            [{ v: "• Every completion is invisibly saved to the [RECORDS] vault." }],
            [],
            [{ v: "MODE B: EXCEL-ONLY / OFFLINE", s: { font: { bold: true } } }],
            [{ v: "• Use CTRL + ; to manually enter a static date in the 'COMPLETED ON' column." }],
            [{ v: "• Use the filter icon on Column A (DATE) to see only today's work." }],
            [],
            [{ v: "⚠️ ACCESSING RECORDS", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "Managers can unhide the [RECORDS] sheet (View -> Hidden Sheets) to export evidence." }],
            [],
            [{ v: "⚠️ MAINTENANCE NOTICE", s: { font: { bold: true, color: { rgb: COLORS.TEXT_RISK } } } }],
            [{ v: "At the end of every 30 days, duplicate this file as an archive and reset the master." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 40 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, "START");

        // --- 02. DAILY_TASKS ---
        const taskHeaders = [
            { v: "DATE", s: headerStyle },
            { v: "BRANCH", s: headerStyle },
            { v: "TASK DESCRIPTION", s: headerStyle },
            { v: "ASSIGNED TO", s: headerStyle },
            { v: "DONE BY", s: headerStyle },
            { v: "VERIFIED BY", s: headerStyle },
            { v: "STATUS", s: headerStyle },
            { v: "COMPLETED ON (STAMP)", s: headerStyle },
            { v: "TASK_ID", s: headerStyle },
            { v: "CADENCE", s: headerStyle }
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const today = new Date();
        const testTasks = [
            { id: "T-01", t: "Open High-Value Vault", c: "Daily" },
            { id: "T-02", t: "Record Chiller Temps", c: "Daily" },
            { id: "T-03", t: "Security Perimeter Sweep", c: "Daily" },
            { id: "T-04", t: "Cash Reconciliation", c: "Daily" }
        ];

        // Generate 3 days of tasks for the prototype
        for (let d = 0; d < 3; d++) {
            const rowDate = new Date(today);
            rowDate.setDate(today.getDate() + d);
            const dateStr = rowDate.toISOString().split('T')[0];

            testTasks.forEach((task) => {
                const rIdx = taskData.length + 1;
                taskData.push([
                    { v: dateStr, s: cellStyles.center },
                    { v: "Main Branch", s: cellStyles.center },
                    { v: task.t, s: cellStyles.left },
                    { v: "Assigned Staff", s: cellStyles.center },
                    { v: "", s: cellStyles.input },
                    { v: "", s: cellStyles.input },
                    { t: 'f', f: `IF(LEN(E${rIdx})>0, "COMPLETE", "PENDING")`, s: cellStyles.center },
                    { v: "", s: cellStyles.center },
                    { v: task.id, s: cellStyles.hidden },
                    { v: task.c, s: cellStyles.hidden }
                ]);
            });
        }
        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [15, 20, 45, 20, 15, 15, 15, 25, 10, 10].map(w => ({ wch: w }));
        utils.book_append_sheet(wb, taskWs, "DAILY_TASKS");

        // --- 03. RECORDS (THE VAULT) ---
        const vaultHeaders = [
            ...taskHeaders,
            { v: "PACK_VERSION", s: headerStyle },
            { v: "INCIDENT_FLAG", s: headerStyle }
        ];
        const recordData: any[][] = [
            [{ v: "🛡️ FORENSIC AUDIT RECORD — AUTO-GENERATED HISTORY — DO NOT EDIT MANUALLY", s: vaultBannerStyle }],
            [],
            vaultHeaders
        ];
        const recordWs = utils.aoa_to_sheet(recordData);
        recordWs['!cols'] = [15, 20, 45, 20, 15, 15, 15, 25, 10, 10, 15, 15].map(w => ({ wch: w }));
        recordWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 11 } }];
        utils.book_append_sheet(wb, recordWs, "RECORDS");

        // --- 04. CUSTOMIZATION_GUIDE ---
        const guideData = [
            [{ v: "🛠️ V2.1 COMMAND MANUAL — GOVERNANCE MODE", s: bannerStyle }],
            [],
            [{ v: "1. HOW AUDIT LOGGING WORKS", s: { font: { bold: true } } }],
            [{ v: "The system uses a 'Dual Ledger' approach. The [DAILY_TASKS] sheet is for your team's eyes. The [RECORDS] sheet is for your business's permanent memory." }],
            [],
            [{ v: "2. GOOGLE SHEETS AUTOMATION", s: { font: { bold: true } } }],
            [{ v: "When you install the Sovereign Script, completions are timestamped automatically. This creates a high-fidelity audit trail that cannot be faked or backdated easily." }],
            [],
            [{ v: "3. EXCEL-ONLY / OFFLINE FALLBACK", s: { font: { bold: true } } }],
            [{ v: "If operating without scripts, staff must manually enter the date. Shortcut: Select the cell and press CTRL + ; (Semicolon) to insert the current static date." }],
            [],
            [{ v: "4. ARCHIVING RECORDS", s: { font: { bold: true } } }],
            [{ v: "At the end of the year, unhide the [RECORDS] sheet. Copy the entire contents to a new file named 'Archive_2025_Evidence.xlsx'. This keeps your primary working file lean and fast." }],
            [],
            [{ v: "5. EXPORTING FOR INSPECTION", s: { font: { bold: true } } }],
            [{ v: "Download the file as .xlsx or .pdf. Since timestamps are saved as static text, they will be perfectly preserved for auditors." }]
        ];
        const guideWs = utils.aoa_to_sheet(guideData);
        guideWs['!cols'] = [{ wch: 120 }];
        utils.book_append_sheet(wb, guideWs, "CUSTOMIZATION_GUIDE");

        // --- OTHER TABS ---
        utils.book_append_sheet(wb, utils.aoa_to_sheet([["SOP LIBRARY"]]), "SOP_LIB");
        utils.book_append_sheet(wb, utils.aoa_to_sheet([["TEAM CONFIG"]]), "TEAM_HUB");
        
        writeFile(wb, `MoreMeets_Sovereign_V2.1_Laboratory.xlsx`);
    } catch (e: any) {
        alert("Prototype Generation Failure: " + e.message);
    }
}
