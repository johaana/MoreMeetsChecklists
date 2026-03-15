
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.5 - The Master Control System (Vertical Ledger Build)
 * Philosophy: Total Accountability & Permanent Audit Trail.
 * No copy-pasting. No overwriting history.
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
        INPUT_ZONE: "FFFFE0", 
        COMPLIANCE_TINT: "E6FFFA", 
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
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const complianceStyle = {
        ...leftCellStyle,
        fill: { fgColor: { rgb: COLORS.COMPLIANCE_TINT } }
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
        [{ v: `Version 2.5 Master Ledger Build | The Audit-Ready Standard`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "SYSTEM PROTOCOL (ZERO-AMBIGUITY):", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Use the '03_OPERATIONAL_LEDGER' for all daily entries.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Type your name and 'Date Done'. Status flips to COMPLETED automatically.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. If a task was due yesterday and is blank, it will show 'OVERDUE'.", s: { font: { sz: 10, italic: true, color: { rgb: COLORS.DANGER_RED } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 4 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 4 } }, { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 03. THE MASTER LEDGER ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch Name", s: headerBlockStyle }, // B
        { v: "Category", s: headerBlockStyle }, // C
        { v: "Control Task", s: headerBlockStyle }, // D
        { v: "Responsible Role", s: headerBlockStyle }, // E
        { v: "Personnel Name (Input)", s: headerBlockStyle }, // F
        { v: "Date of Last Completed (Input)", s: headerBlockStyle }, // G
        { v: "Live Status (Auto)", s: headerBlockStyle }, // H
        { v: "Issue / Action Taken", s: headerBlockStyle } // I
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER OPERATIONAL LEDGER (THE PERMANENT AUDIT TRAIL)", s: titleStyle }], [], ledgerHeaders];

    const today = new Date();
    const historyRange = 3; 
    const futureRange = 3; 

    for (let d = -historyRange; d <= futureRange; d++) {
        const entryDate = new Date(today);
        entryDate.setDate(today.getDate() + d);
        const dateStr = entryDate.toLocaleDateString('en-GB');

        item.checklists.forEach(checklist => {
            checklist.tasks.forEach(task => {
                const dateDoneCell = `G${ledgerData.length + 1}`;
                const entryDateCell = `A${ledgerData.length + 1}`;
                
                // RE-ENGINEERED LOGIC: 
                // 1. If Date Done is NOT blank -> COMPLETED
                // 2. If Date Done IS blank AND Entry Date < TODAY -> OVERDUE
                // 3. Otherwise -> PENDING
                const statusFormula = `IF(ISBLANK(${dateDoneCell}), IF(DATEVALUE("${dateStr}")<TODAY(), "OVERDUE - ACTION REQUIRED", "PENDING"), "COMPLETED")`;
                
                const rowStyle = task.priority === 'High' ? complianceStyle : leftCellStyle;

                ledgerData.push([
                    { v: dateStr, s: centerCellStyle }, // A: Date of Entry
                    { v: "Bandra Main", s: inputStyle }, // B: Branch
                    { v: checklist.title, s: centerCellStyle }, // C: Category
                    { v: task.description, s: rowStyle }, // D: Task
                    { v: checklist.role, s: centerCellStyle }, // E: Role
                    { v: "", s: inputStyle }, // F: Person (Name)
                    { v: "", s: inputStyle }, // G: Date Done (The Trigger)
                    { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // H: Status
                    { v: "", s: inputStyle } // I: Issue
                ]);
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [15, 25, 25, 60, 25, 30, 25, 25, 45];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    
    // ACTIVATE FILTERS FOR THE ENTIRE RANGE
    ledgerWs['!autofilter'] = { ref: `A4:I${ledgerData.length}` };
    
    utils.book_append_sheet(wb, ledgerWs, "03_OPERATIONAL_LEDGER");

    // --- 02. DASHBOARD ---
    // The Dashboard now uses COUNTIFS to only look at tasks where Entry Date <= TODAY
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE & SYSTEM HEALTH SCORECARD", s: titleStyle }],
        [],
        [{ v: "Operational Metric", s: headerBlockStyle }, { v: "Target", s: headerBlockStyle }, { v: "Live Compliance", s: headerBlockStyle }, { v: "Audit Analysis", s: headerBlockStyle }],
        [
            { v: "Live Completion Rate", s: centerCellStyle }, 
            { v: "100%", s: centerCellStyle }, 
            { t: 'f', f: `TEXT(COUNTIFS('03_OPERATIONAL_LEDGER'!H:H,"COMPLETED",'03_OPERATIONAL_LEDGER'!A:A,"<="&TODAY())/MAX(1,COUNTIFS('03_OPERATIONAL_LEDGER'!A:A,"<="&TODAY())),"0%")`, s: { ...centerCellStyle, font: { bold: true } } }, 
            { v: "Ignores future-dated tasks" }
        ],
        [
            { v: "Unresolved Gaps", s: centerCellStyle }, 
            { v: "Zero", s: centerCellStyle }, 
            { t: 'f', f: `COUNTIFS('03_OPERATIONAL_LEDGER'!H:H,"OVERDUE*")`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }, 
            { v: "Tasks missed in the past" }
        ]
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
        [{ v: "Control Module", s: headerBlockStyle }, { v: "Frequency", s: headerBlockStyle }, { v: "Primary Owner", s: headerBlockStyle }, { v: "Business Outcome", s: headerBlockStyle }],
        [{ v: "Kitchen Startup", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "100% Safety Readiness" }],
        [{ v: "Service Quality", s: centerCellStyle }, { v: "Per Shift", s: centerCellStyle }, { v: "Floor Manager", s: centerCellStyle }, { v: "Brand Consistency" }],
        [{ v: "Inventory Audit", s: centerCellStyle }, { v: "Weekly", s: centerCellStyle }, { v: "Store Manager", s: centerCellStyle }, { v: "Margin Protection" }],
        [{ v: "Closure Audit", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Duty Manager", s: centerCellStyle }, { v: "Risk & Loss Mitigation" }]
    ];
    const cadenceWs = utils.aoa_to_sheet(cadenceData);
    addNavBar(cadenceWs);
    cadenceWs['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 25 }, { wch: 35 }];
    cadenceWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, cadenceWs, "04_CADENCE");

    // --- 05. RISK MAP ---
    const riskData = [
        [],
        [{ v: "RISK CONTROL MAP: THE VALUE OF DISCIPLINE", s: titleStyle }],
        [],
        [{ v: "High-Gravity Risk", s: headerBlockStyle }, { v: "Impact of Failure", s: headerBlockStyle }, { v: "Primary Control", s: headerBlockStyle }, { v: "Operational Shield", s: headerBlockStyle }],
        [{ v: "Food Poisoning", s: centerCellStyle }, { v: "Lawsuits, Closure, Death", s: leftCellStyle }, { v: "Food Safety Log", s: centerCellStyle }, { v: "Temp Logs & Cross-Contamination" }],
        [{ v: "Fire Incident", s: centerCellStyle }, { v: "Loss of Life & Assets", s: leftCellStyle }, { v: "Closing Check", s: centerCellStyle }, { v: "Verified Gas & Electrical Shutdown" }],
        [{ v: "Pilferage / Theft", s: centerCellStyle }, { v: "Net Profit Erosion", s: leftCellStyle }, { v: "Inventory SOP", s: centerCellStyle }, { v: "Blind Weekly Stock Counts" }]
    ];
    const riskWs = utils.aoa_to_sheet(riskData);
    addNavBar(riskWs);
    riskWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 30 }, { wch: 45 }];
    riskWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, riskWs, "05_RISK_MAP");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.5_Master_Control_Ledger.xlsx`);
}
