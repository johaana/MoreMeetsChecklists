
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

type BuildMode = 'STANDARD_LOGBOOK' | 'AUDIT_SHIELD' | 'MULTI_UNIT' | 'RAPID_SHIFT' | 'GOVERNANCE';

/**
 * Version 2.4 - The Logbook Suite
 * Institutional Standard for Operational Governance
 */
export const handleDownloadV2 = (item: PremiumPack, mode: BuildMode = 'STANDARD_LOGBOOK') => {
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
        INPUT_GREY: "F2F2F2",
        TEXT_MUTED: "6B7280",
        WARNING_AMBER: "F5A623"
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

    const greyInputStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_GREY } }
    };

    const titleStyle = { 
        font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, 
        alignment: { horizontal: 'center' } 
    };

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "01 OVERVIEW", target: "01_SYSTEM_OVERVIEW" },
            { v: "02 LOGBOOK", target: "05_DAILY_TASK_EXECUTION" },
            { v: "03 DASHBOARD", target: "03_OPERATIONS_DASHBOARD" },
            { v: "04 CADENCE", target: "07_OPERATIONAL_CADENCE" },
            { v: "05 RISK MAP", target: "08_RISK_CONTROL_MAP" }
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

    // --- 01. OVERVIEW ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL LOGBOOK", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.4 | Variation: ${mode.replace('_', ' ')}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: `System ID: ${item.title}`, s: { font: { sz: 10, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Code 1:", s: { alignment: { horizontal: 'right' } } }, { v: "[Main Branch Name]", s: greyInputStyle }, null, { v: "Code 2:", s: { alignment: { horizontal: 'right' } } }, { v: "[Secondary Branch Name]", s: greyInputStyle }],
        [],
        [{ v: "SYSTEM INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Define your locations in the Registry above (Code 1, Code 2, etc.)", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Update the DAILY LOGBOOK (05). Enter the DATE and BRANCH CODE (1 or 2).", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. Status turns COMPLETED automatically when Date is filled.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 4 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 4 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 4 } }, { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } }, { s: { r: 12, c: 0 }, e: { r: 12, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 07. OPERATIONAL CADENCE ---
    const cadenceData = [
        [],
        [{ v: "OPERATIONAL CADENCE: THE MANAGER'S MAP", s: titleStyle }],
        [],
        [{ v: "Frequency", s: headerBlockStyle }, { v: "Activity / Meeting", s: headerBlockStyle }, { v: "Responsible Role", s: headerBlockStyle }, { v: "Key Outcome", s: headerBlockStyle }],
        [{ v: "Daily", s: centerCellStyle }, { v: "Pre-Shift Briefing", s: leftCellStyle }, { v: "Restaurant Manager", s: centerCellStyle }, { v: "Targets set & hygiene verified" }],
        [{ v: "Daily", s: centerCellStyle }, { v: "Closing Safety Walkthrough", s: leftCellStyle }, { v: "Floor Supervisor", s: centerCellStyle }, { v: "Fire/Gas safety secured" }],
        [{ v: "Weekly", s: centerCellStyle }, { v: "Inventory Reconciliation", s: leftCellStyle }, { v: "Store Manager", s: centerCellStyle }, { v: "Shrinkage detected & costs controlled" }],
        [{ v: "Weekly", s: centerCellStyle }, { v: "Food Safety Audit", s: leftCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "Compliance gaps fixed" }],
        [{ v: "Monthly", s: centerCellStyle }, { v: "Performance Review", s: leftCellStyle }, { v: "Owner / Director", s: centerCellStyle }, { v: "System health verified" }]
    ];
    const cadenceWs = utils.aoa_to_sheet(cadenceData);
    addNavBar(cadenceWs);
    cadenceWs['!cols'] = [{ wch: 15 }, { wch: 40 }, { wch: 30 }, { wch: 40 }];
    cadenceWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, cadenceWs, "07_OPERATIONAL_CADENCE");

    // --- 08. RISK CONTROL MAP ---
    const riskData = [
        [],
        [{ v: "RISK CONTROL MAP: THE 'WHY' BEHIND THE WORK", s: titleStyle }],
        [],
        [{ v: "Potential Risk", s: headerBlockStyle }, { v: "Financial/Legal Impact", s: headerBlockStyle }, { v: "Primary Control Module", s: headerBlockStyle }, { v: "Mitigation Action", s: headerBlockStyle }],
        [{ v: "Food Poisoning", s: centerCellStyle }, { v: "Recalls, Lawsuits, Closure", s: leftCellStyle }, { v: "Food Safety Checklist", s: centerCellStyle }, { v: "Log Fridge Temps & Cross-Contamination" }],
        [{ v: "Employee Theft", s: centerCellStyle }, { v: "Direct Profit Erosion", s: leftCellStyle }, { v: "Inventory Control", s: centerCellStyle }, { v: "Weekly Blind Stock Counts" }],
        [{ v: "Customer Injury", s: centerCellStyle }, { v: "Slip & Fall Litigation", s: leftCellStyle }, { v: "Cleaning & Hygiene", s: centerCellStyle }, { v: "Hourly Bathroom & Spill Logs" }],
        [{ v: "Fire Incident", s: centerCellStyle }, { v: "Loss of Life & Assets", s: leftCellStyle }, { v: "Kitchen Closing", s: centerCellStyle }, { v: "Mandatory Gas & Electrical Shutdown" }]
    ];
    const riskWs = utils.aoa_to_sheet(riskData);
    addNavBar(riskWs);
    riskWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 30 }, { wch: 45 }];
    riskWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, riskWs, "08_RISK_CONTROL_MAP");

    // --- 05. DAILY LOGBOOK (EXECUTION) ---
    const execHeaders = [
        { v: "ID", s: headerBlockStyle },
        { v: "Date", s: headerBlockStyle },
        { v: "Branch Code (1-2)", s: headerBlockStyle },
        { v: "Branch Name (Auto)", s: headerBlockStyle },
        { v: "Requirement / Control Step", s: headerBlockStyle },
        { v: "Responsible Role", s: headerBlockStyle },
        { v: "Responsible Person (Input)", s: headerBlockStyle },
        { v: "Live Status (Auto)", s: headerBlockStyle },
        { v: "Issue / Deviation", s: headerBlockStyle }
    ];

    if (mode === 'AUDIT_SHIELD') {
        execHeaders.push({ v: "Consequence of Failure", s: headerBlockStyle });
        execHeaders.push({ v: "Required Proof", s: headerBlockStyle });
    }

    const execData: any[][] = [[], [{ v: "RESTAURANT OPERATIONAL LOGBOOK", s: titleStyle }], [], [], execHeaders];

    let rowIndex = 6;
    item.checklists.forEach(checklist => {
        checklist.tasks.forEach(task => {
            const dateCell = `B${rowIndex}`;
            const branchCodeCell = `C${rowIndex}`;
            
            const branchFormula = `IFERROR(CHOOSE(${branchCodeCell}, '01_SYSTEM_OVERVIEW'!$B$8, '01_SYSTEM_OVERVIEW'!$E$8), "N/A")`;
            const statusFormula = `IF(${dateCell}="", "PENDING", "COMPLETED")`;

            const row = [
                { v: task.id, s: centerCellStyle },
                { v: "", s: greyInputStyle }, // Date
                { v: "", s: greyInputStyle }, // Branch Code
                { t: 'f', f: branchFormula, s: centerCellStyle }, // Branch Name
                { v: task.description, s: leftCellStyle },
                { v: checklist.role, s: centerCellStyle },
                { v: "", s: greyInputStyle }, // Responsible Person
                { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // Status
                { v: "", s: greyInputStyle }, // Issue
            ];

            if (mode === 'AUDIT_SHIELD') {
                row.push({ v: task.consequence, s: { ...leftCellStyle, font: { ...baseFont, italic: true, sz: 9 } } });
                row.push({ v: task.proof, s: { ...centerCellStyle, font: { ...baseFont, bold: true, sz: 9 } } });
            }

            execData.push(row);
            rowIndex++;
        });
    });

    const execWs = utils.aoa_to_sheet(execData);
    addNavBar(execWs);
    const wchs = [10, 15, 15, 25, 60, 25, 25, 20, 35];
    if (mode === 'AUDIT_SHIELD') wchs.push(40, 25);
    execWs['!cols'] = wchs.map(w => ({ wch: w }));
    execWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    
    // Enable Auto-Filters
    execWs['!autofilter'] = { ref: `A5:${String.fromCharCode(64 + wchs.length)}${rowIndex}` };
    
    utils.book_append_sheet(wb, execWs, "05_DAILY_TASK_EXECUTION");

    // --- 03. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "OPERATIONAL GOVERNANCE DASHBOARD", s: titleStyle }],
        [],
        [{ v: "Operational KPI", s: headerBlockStyle }, { v: "Target", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Action Required", s: headerBlockStyle }],
        [{ v: "Task Completion Rate", s: centerCellStyle }, { v: "100%", s: centerCellStyle }, { t: 'f', f: `TEXT(COUNTIF('05_DAILY_TASK_EXECUTION'!H:H, "COMPLETED") / MAX(1, COUNTA('05_DAILY_TASK_EXECUTION'!E:E)-1), "0%")`, s: { ...centerCellStyle, font: { bold: true } } }, { v: "Review Pending Logs" }],
        [{ v: "Identified Deviations", s: centerCellStyle }, { v: "Zero", s: centerCellStyle }, { t: 'f', f: `COUNTIF('05_DAILY_TASK_EXECUTION'!I:I, "<>")`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }, { v: "Log in Incident Registry" }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 35 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.4_${mode}.xlsx`);
}
