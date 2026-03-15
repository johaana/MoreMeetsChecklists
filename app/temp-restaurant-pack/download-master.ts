
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.5 - The Master Control System
 * The "Best-of-All" Build based on direct Operator Feedback.
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
        INPUT_GREY: "F2F2F2",
        TEXT_MUTED: "6B7280",
        WARNING_AMBER: "F5A623",
        INPUT_YELLOW: "FFFFE0"
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

    const titleStyle = { 
        font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, 
        alignment: { horizontal: 'center' } 
    };

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "01 OVERVIEW", target: "01_OVERVIEW" },
            { v: "02 DASHBOARD", target: "02_DASHBOARD" },
            { v: "03 CADENCE", target: "03_OPERATIONAL_CADENCE" },
            { v: "04 LOGBOOK", target: "04_KITCHEN_OPENING" },
            { v: "05 RISK MAP", target: "09_RISK_CONTROL_MAP" }
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
        [{ v: `The Professional Standard for Multi-Unit Governance`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH REGISTRY (Set your locations here)", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1 Name:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2 Name:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "QUICK START INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Fill the 'Date of Last Completed' column in any Task Log sheet.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. The 'Status' column will flip to COMPLETED automatically. No typing required.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. Use the Filter Arrows [v] on headers to view specific Branches or Staff.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 4 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 4 } }, { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- MODULAR TASK LOGS ---
    item.checklists.forEach(checklist => {
        const sheetName = (checklist.title.toUpperCase().replace(/ /g, '_')).substring(0, 30);
        const headers = [
            { v: "Date of Entry", s: headerBlockStyle }, // A
            { v: "Branch Name", s: headerBlockStyle }, // B
            { v: "Task / Requirement", s: headerBlockStyle }, // C
            { v: "Responsible Role", s: headerBlockStyle }, // D
            { v: "Responsible Person", s: headerBlockStyle }, // E
            { v: "Date of Last Completed", s: headerBlockStyle }, // F
            { v: "Live Status (Auto)", s: headerBlockStyle }, // G
            { v: "Issue / Action Taken", s: headerBlockStyle } // H
        ];

        const logData: any[][] = [[], [{ v: `${checklist.title.toUpperCase()} LOGBOOK`, s: titleStyle }], [], headers];

        checklist.tasks.forEach(task => {
            const dateDoneCell = `F${logData.length + 1}`;
            const statusFormula = `IF(ISBLANK(${dateDoneCell}), "PENDING", "COMPLETED")`;

            logData.push([
                { v: "", s: inputStyle }, // A: Entry Date
                { v: "Bandra Main", s: inputStyle }, // B: Branch
                { v: task.description, s: leftCellStyle }, // C: Task
                { v: checklist.role, s: centerCellStyle }, // D: Role
                { v: "", s: inputStyle }, // E: Person
                { v: "", s: inputStyle }, // F: Last Date Done
                { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // G: Status
                { v: "", s: inputStyle }, // H: Issue
            ]);
        });

        const ws = utils.aoa_to_sheet(logData);
        addNavBar(ws);
        const wchs = [20, 25, 60, 25, 25, 25, 20, 40];
        ws['!cols'] = wchs.map(w => ({ wch: w }));
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
        ws['!autofilter'] = { ref: `A4:H${logData.length}` };
        utils.book_append_sheet(wb, ws, sheetName);
    });

    // --- 02. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "OPERATIONAL HEALTH SCORECARD", s: titleStyle }],
        [],
        [{ v: "Performance Metric", s: headerBlockStyle }, { v: "Benchmark", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Operational Alert", s: headerBlockStyle }],
        [{ v: "System Compliance %", s: centerCellStyle }, { v: "100%", s: centerCellStyle }, { v: "CALCULATING...", s: { ...centerCellStyle, font: { bold: true } } }, { v: "Review Pending Logs" }],
        [{ v: "Unresolved Gaps", s: centerCellStyle }, { v: "Zero", s: centerCellStyle }, { v: "0", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }, { v: "Check Issue Columns" }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 35 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 03. CADENCE ---
    const cadenceData = [
        [],
        [{ v: "OPERATIONAL CADENCE: THE MANAGER'S MAP", s: titleStyle }],
        [],
        [{ v: "System Module", s: headerBlockStyle }, { v: "Frequency", s: headerBlockStyle }, { v: "Primary Owner", s: headerBlockStyle }, { v: "Accountability Check", s: headerBlockStyle }],
        [{ v: "Kitchen Opening", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Kitchen Supervisor", s: centerCellStyle }, { v: "Pre-service sign-off" }],
        [{ v: "Food Safety HACCP", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "Temp log review" }],
        [{ v: "Cleaning Audit", s: centerCellStyle }, { v: "Weekly", s: centerCellStyle }, { v: "Floor Manager", s: centerCellStyle }, { v: "Visual spot check" }],
        [{ v: "Inventory Cycle", s: centerCellStyle }, { v: "Weekly", s: centerCellStyle }, { v: "Store Manager", s: centerCellStyle }, { v: "Variance reconciliation" }]
    ];
    const cadenceWs = utils.aoa_to_sheet(cadenceData);
    addNavBar(cadenceWs);
    cadenceWs['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 25 }, { wch: 35 }];
    cadenceWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, cadenceWs, "03_OPERATIONAL_CADENCE");

    // --- 09. RISK MAP ---
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
    utils.book_append_sheet(wb, riskWs, "09_RISK_CONTROL_MAP");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_System_V2.5.xlsx`);
}
