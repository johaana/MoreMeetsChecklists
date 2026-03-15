
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.6 - The Governance Suite (On-Demand Reporting Build)
 * Philosophy: Total Historical Accountability + Time-Window Reporting.
 * Every entry is a permanent row. The Dashboard filters history on-demand.
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
        [{ v: `Version 2.6 Governance Build | Professional Multi-Unit Ledger`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "ON-DEMAND REPORTING PROTOCOL:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Go to '02_DASHBOARD' to set your report date range (e.g., 01-02-2025 to 28-02-2025).", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. The Dashboard will automatically recalculate compliance for that specific month.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. To fill data, use the filter [v] in '03_OPERATIONAL_LEDGER' to select 'Today'.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, 
        { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, 
        { s: { r: 8, c: 0 }, e: { r: 8, c: 4 } }, 
        { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }, 
        { s: { r: 10, c: 0 }, e: { r: 10, c: 4 } }, 
        { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } }
    ];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 03. THE MASTER LEDGER ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch Name", s: headerBlockStyle }, // B
        { v: "Category", s: headerBlockStyle }, // C
        { v: "Control Task", s: headerBlockStyle }, // D
        { v: "Responsible Role", s: headerBlockStyle }, // E
        { v: "Personnel Name (Input)", s: headerBlockStyle }, // F
        { v: "Date Done (Input)", s: headerBlockStyle }, // G
        { v: "Live Status (Auto)", s: headerBlockStyle }, // H
        { v: "Issue / Action Taken", s: headerBlockStyle } // I
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER OPERATIONAL LEDGER (AUDIT TRAIL)", s: titleStyle }], [], ledgerHeaders];

    const today = new Date();
    // Pre-populate a 14-day window (7 history, 7 future) to show logic
    for (let d = -7; d <= 7; d++) {
        const entryDate = new Date(today);
        entryDate.setDate(today.getDate() + d);
        const dateStr = entryDate.toLocaleDateString('en-GB');

        item.checklists.forEach(checklist => {
            checklist.tasks.forEach(task => {
                const rowNum = ledgerData.length + 1;
                const dateDoneCell = `G${rowNum}`;
                const entryDateCell = `A${rowNum}`;
                
                // V2.6 LOGIC:
                // 1. If Date Done is NOT blank -> COMPLETED
                // 2. If Date Done IS blank AND Entry Date < TODAY -> OVERDUE
                // 3. Otherwise -> PENDING
                const statusFormula = `IF(ISBLANK(${dateDoneCell}), IF(${entryDateCell}<TODAY(), "OVERDUE - ACTION REQUIRED", "PENDING"), "COMPLETED")`;
                
                const rowStyle = task.priority === 'High' ? complianceStyle : leftCellStyle;

                ledgerData.push([
                    { v: entryDate, t: 'd', s: centerCellStyle }, // A: Date of Entry (Formal Date Type for Month Filtering)
                    { v: "Bandra Main", s: inputStyle }, // B: Branch
                    { v: checklist.title, s: centerCellStyle }, // C: Category
                    { v: task.description, s: rowStyle }, // D: Task
                    { v: checklist.role, s: centerCellStyle }, // E: Role
                    { v: "", s: inputStyle }, // F: Person (Name)
                    { v: "", s: inputStyle }, // G: Date Done
                    { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // H: Status
                    { v: "", s: inputStyle } // I: Issue
                ]);
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [15, 25, 25, 60, 25, 30, 20, 25, 45];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    
    // ACTIVATE FILTERS - LOCKED TO RANGE
    ledgerWs['!autofilter'] = { ref: `A4:I${ledgerData.length}` };
    
    utils.book_append_sheet(wb, ledgerWs, "03_OPERATIONAL_LEDGER");

    // --- 02. DASHBOARD (TIME-WINDOW REPORTING) ---
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    const dashData: any[][] = [
        [],
        [{ v: "ON-DEMAND COMPLIANCE REPORTING", s: titleStyle }],
        [],
        [{ v: "REPORTING WINDOW", s: { font: { bold: true }, fill: { fgColor: { rgb: COLORS.SOFT_GREY } } } }, { v: "START DATE", s: headerBlockStyle }, { v: "END DATE", s: headerBlockStyle }, { v: "CURRENT TIME", s: centerCellStyle }],
        [
            { v: "Select Dates:", s: { alignment: { horizontal: 'right' } } }, 
            { v: yesterday, t: 'd', s: inputStyle }, // B5: Start Date
            { v: today, t: 'd', s: inputStyle },     // C5: End Date
            { t: 'f', f: "NOW()", s: centerCellStyle }
        ],
        [],
        [{ v: "GOVERNANCE METRIC", s: headerBlockStyle }, { v: "TARGET", s: headerBlockStyle }, { v: "PERIOD PERFORMANCE", s: headerBlockStyle }, { v: "SYSTEM COMMENTARY", s: headerBlockStyle }],
        [
            { v: "Compliance Score (Period)", s: leftCellStyle },
            { v: "100%", s: centerCellStyle },
            { t: 'f', f: `TEXT(COUNTIFS('03_OPERATIONAL_LEDGER'!H:H,"COMPLETED",'03_OPERATIONAL_LEDGER'!A:A,">="&B5,'03_OPERATIONAL_LEDGER'!A:A,"<="&C5)/MAX(1,COUNTIFS('03_OPERATIONAL_LEDGER'!A:A,">="&B5,'03_OPERATIONAL_LEDGER'!A:A,"<="&C5)),"0%")`, s: { ...centerCellStyle, font: { bold: true, sz: 14 } } },
            { v: "Based strictly on selected dates." }
        ],
        [
            { v: "Outstanding Overdue (Total)", s: leftCellStyle },
            { v: "0", s: centerCellStyle },
            { t: 'f', f: `COUNTIF('03_OPERATIONAL_LEDGER'!H:H,"OVERDUE*")`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } },
            { v: "Critical gaps across entire history." }
        ],
        [
            { v: "Logged Issues", s: leftCellStyle },
            { v: "Zero", s: centerCellStyle },
            { t: 'f', f: `COUNTIFS('03_OPERATIONAL_LEDGER'!I:I,"<>",'03_OPERATIONAL_LEDGER'!A:A,">="&B5,'03_OPERATIONAL_LEDGER'!A:A,"<="&C5)`, s: centerCellStyle },
            { v: "Problems identified in this period." }
        ]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 20 }, { wch: 25 }, { wch: 40 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 04. CADENCE ---
    const cadenceData = [
        [],
        [{ v: "OPERATIONAL CADENCE: THE FREQUENCY MAP", s: titleStyle }],
        [],
        [{ v: "Control Module", s: headerBlockStyle }, { v: "Frequency", s: headerBlockStyle }, { v: "Owner", s: headerBlockStyle }, { v: "Outcome", s: headerBlockStyle }],
        [{ v: "Kitchen Startup", s: centerCellStyle }, { v: "Daily", s: centerCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "Food Safety & Bio-security" }],
        [{ v: "Inventory Audit", s: centerCellStyle }, { v: "Weekly", s: centerCellStyle }, { v: "Store Manager", s: centerCellStyle }, { v: "Margin & Cost Control" }],
        [{ v: "Safety Drill", s: centerCellStyle }, { v: "Monthly", s: centerCellStyle }, { v: "Ops Manager", s: centerCellStyle }, { v: "Risk Mitigation & Compliance" }]
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
        [{ v: "Operational Risk", s: headerBlockStyle }, { v: "Failure Impact", s: headerBlockStyle }, { v: "Primary Shield", s: headerBlockStyle }, { v: "Control Action", s: headerBlockStyle }],
        [{ v: "Health Closure", s: centerCellStyle }, { v: "Revenue Zero / Legal Fine", s: leftCellStyle }, { v: "Daily HACCP Log", s: centerCellStyle }, { v: "Temp Logs & Cleaning Sign-offs" }],
        [{ v: "Customer Injury", s: centerCellStyle }, { v: "Litigation / Brand Damage", s: leftCellStyle }, { v: "Spill & Hygiene Log", s: centerCellStyle }, { v: "Hourly Restroom & Floor Checks" }],
        [{ v: "Internal Theft", s: centerCellStyle }, { v: "EBITDA Erosion", s: leftCellStyle }, { v: "Inventory SOP", s: centerCellStyle }, { v: "Serialized Weekly Counts" }]
    ];
    const riskWs = utils.aoa_to_sheet(riskData);
    addNavBar(riskWs);
    riskWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 30 }, { wch: 45 }];
    riskWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, riskWs, "05_RISK_MAP");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.6_Governance_Ledger.xlsx`);
}
