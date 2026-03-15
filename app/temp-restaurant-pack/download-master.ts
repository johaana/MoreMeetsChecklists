
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.5 - The Master Control System (Vertical Ledger Build)
 * Optimized for Audit Trails, History, and Zero-Friction Staff Entry.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const COLORS = {
        PRIME_NAVY: "1F2937",
        SLATE_HEADER: "374151",
        ACCENT_BLUE: "2563EB",
        DANGER_RED: "DC2626",
        SUCCESS_GREEN: "16A34A",
        WHITE: "FFFFFF",
        SOFT_GREY: "F3F4F6",
        BORDER_LIGHT: "D1D5DB",
        INPUT_YELLOW: "FFFFE0", // For Interaction Zones
        COMPLIANCE_GREEN: "E6FFFA", // Subtle motivation for critical tasks
        TEXT_MUTED: "6B7280"
    };

    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } }
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.PRIME_NAVY } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderThin
    };

    const headerBlockStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE } },
        fill: { fgColor: { rgb: COLORS.SLATE_HEADER } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const leftCellStyle = { 
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderThin
    };

    const centerCellStyle = {
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const inputStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } }
    };

    const complianceStyle = {
        ...leftCellStyle,
        fill: { fgColor: { rgb: COLORS.COMPLIANCE_GREEN } }
    };

    const titleStyle = { 
        font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, 
        alignment: { horizontal: 'center' } 
    };

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "01 OVERVIEW", target: "01_OVERVIEW" },
            { v: "02 DASHBOARD", target: "02_DASHBOARD" },
            { v: "03 MASTER LEDGER", target: "03_OPERATIONAL_LEDGER" },
            { v: "04 CADENCE", target: "04_CADENCE" },
            { v: "05 RISK MAP", target: "05_RISK_MAP" }
        ];
        
        const navData = [
            navItems.map(item => ({ 
                v: item.v, 
                l: { Target: `#'${item.target}'!A1` }, 
                s: navStyle 
            }))
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. OVERVIEW & REGISTRY ---
    const coverData = [
        [], [],
        [{ v: "RESTAURANT OPERATIONS CONTROL SYSTEM", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.5 Master Build | The Professional Standard`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "OPERATIONAL PROTOCOL:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Open the '03_OPERATIONAL_LEDGER' sheet daily.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Fill your 'Date Done'. Status flips to COMPLETED automatically.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. Green-highlighted tasks are CRITICAL COMPLIANCE steps. Do not miss.", s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 4 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 4 } }, { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 03. THE MASTER LEDGER ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch", s: headerBlockStyle }, // B
        { v: "Category", s: headerBlockStyle }, // C
        { v: "Control Task", s: headerBlockStyle }, // D
        { v: "Responsible Role", s: headerBlockStyle }, // E
        { v: "Responsible Person", s: headerBlockStyle }, // F
        { v: "Date Done", s: headerBlockStyle }, // G
        { v: "Live Status (Auto)", s: headerBlockStyle }, // H
        { v: "Issue / Action", s: headerBlockStyle } // I
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER OPERATIONAL LEDGER (THE AUDIT TRAIL)", s: titleStyle }], [], ledgerHeaders];

    // Pre-populate 2 Days of entries to show the ledger flow
    const daysToPreFill = 2; 
    const today = new Date();

    for (let d = 0; d < daysToPreFill; d++) {
        const entryDate = new Date(today);
        entryDate.setDate(today.getDate() + d);
        const dateStr = entryDate.toLocaleDateString('en-GB');

        item.checklists.forEach(checklist => {
            checklist.tasks.forEach(task => {
                const dateDoneCell = `G${ledgerData.length + 1}`;
                const statusFormula = `IF(ISBLANK(${dateDoneCell}), "PENDING", "COMPLETED")`;
                
                // Motivation logic: High Priority = Green Background
                const rowStyle = task.priority === 'High' ? complianceStyle : leftCellStyle;

                ledgerData.push([
                    { v: dateStr, s: centerCellStyle }, // A: Date of Entry
                    { v: "Bandra Main", s: inputStyle }, // B: Branch
                    { v: checklist.title, s: centerCellStyle }, // C: Category
                    { v: task.description, s: rowStyle }, // D: Task
                    { v: checklist.role, s: centerCellStyle }, // E: Role
                    { v: "", s: inputStyle }, // F: Person
                    { v: "", s: inputStyle }, // G: Date Done
                    { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // H: Status
                    { v: "", s: inputStyle } // I: Issue
                ]);
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [15, 20, 25, 60, 25, 25, 20, 20, 40];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    ledgerWs['!autofilter'] = { ref: `A4:I${ledgerData.length}` };
    utils.book_append_sheet(wb, ledgerWs, "03_OPERATIONAL_LEDGER");

    // --- 02. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE & COMPLIANCE SCORECARD", s: titleStyle }],
        [],
        [{ v: "Metric", s: headerBlockStyle }, { v: "Target", s: headerBlockStyle }, { v: "Live Health", s: headerBlockStyle }, { v: "Audit Note", s: headerBlockStyle }],
        [{ v: "Task Completion %", s: centerCellStyle }, { v: "100%", s: centerCellStyle }, { t: 'f', f: `TEXT(COUNTIF('03_OPERATIONAL_LEDGER'!H:H,"COMPLETED")/MAX(1,COUNTA('03_OPERATIONAL_LEDGER'!D:D)-1),"0%")`, s: { ...centerCellStyle, font: { bold: true } } }, { v: "Refreshes on every entry" }],
        [{ v: "Reported Gaps", s: centerCellStyle }, { v: "Zero", s: centerCellStyle }, { t: 'f', f: `COUNTIF('03_OPERATIONAL_LEDGER'!I:I,"<>")`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }, { v: "Check 'Issue' column in Ledger" }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 35 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 04. CADENCE ---
    const cadenceData = [
        [],
        [{ v: "OPERATIONAL CADENCE: THE MANAGER'S MAP", s: titleStyle }],
        [],
        [{ v: "Module", s: headerBlockStyle }, { v: "Frequency", s: headerBlockStyle }, { v: "Owner", s: headerBlockStyle }, { v: "Output", s: headerBlockStyle }],
        [{ v: "Kitchen Startup", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Chef", s: centerCellStyle }, { v: "Audit-ready kitchen" }],
        [{ v: "Food Safety HACCP", s: centerCellStyle }, { v: "Per Shift", s: centerCellStyle }, { v: "Supervisor", s: centerCellStyle }, { v: "Legal compliance" }],
        [{ v: "Inventory Check", s: centerCellStyle }, { v: "Weekly", s: centerCellStyle }, { v: "Manager", s: centerCellStyle }, { v: "Margin protection" }]
    ];
    const cadenceWs = utils.aoa_to_sheet(cadenceData);
    addNavBar(cadenceWs);
    cadenceWs['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 25 }, { wch: 35 }];
    cadenceWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, cadenceWs, "04_CADENCE");

    // --- 05. RISK MAP ---
    const riskData = [
        [],
        [{ v: "RISK CONTROL MAP: THE BUSINESS SAVE", s: titleStyle }],
        [],
        [{ v: "High-Gravity Risk", s: headerBlockStyle }, { v: "Financial/Legal Exposure", s: headerBlockStyle }, { v: "Primary Control Module", s: headerBlockStyle }, { v: "Prevention Action", s: headerBlockStyle }],
        [{ v: "Food Poisoning", s: centerCellStyle }, { v: "Recalls, Lawsuits, Closure", s: leftCellStyle }, { v: "Food Safety Log", s: centerCellStyle }, { v: "Fridge Temp & Cross-Contamination" }],
        [{ v: "Fire Incident", s: centerCellStyle }, { v: "Loss of Life & Assets", s: leftCellStyle }, { v: "Kitchen Closing", s: centerCellStyle }, { v: "Verified Gas & Electrical Shutdown" }],
        [{ v: "Inventory Theft", s: centerCellStyle }, { v: "Direct Margin Erosion", s: leftCellStyle }, { v: "Inventory Control", s: centerCellStyle }, { v: "Weekly Blind Stock Verification" }]
    ];
    const riskWs = utils.aoa_to_sheet(riskData);
    addNavBar(riskWs);
    riskWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 30 }, { wch: 45 }];
    riskWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, riskWs, "05_RISK_MAP");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_Control_System_V2.5.xlsx`);
}
