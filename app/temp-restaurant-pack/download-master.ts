
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.7 - The Total Governance Suite
 * Philosophy: Full-Year Scalability + Smart Status Logic.
 * 🔴 OVERDUE: Date passed & empty.
 * ⚪ PENDING: Today & empty.
 * ⏳ DUE SHORTLY: Future date.
 * 🟢 COMPLETED: Date entered in 'Date Done'.
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
            { v: "03 MASTER LEDGER", target: "03_MASTER_LEDGER" },
            { v: "04 RISK MAP", target: "04_RISK_MAP" }
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
        [{ v: `Version 2.7 | Unified Governance Ledger (Audit-Ready build)`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "SYSTEM GOVERNANCE INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. The '03_MASTER_LEDGER' stores a continuous record. Use the Filter [v] on Column A to select 'Today'.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Entering a 'Date Done' automatically flips the status to COMPLETED.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. Empty rows from the past turn 🔴 OVERDUE. Future tasks are marked ⏳ DUE SHORTLY.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "4. The Dashboard allows you to set a custom window (e.g. Current Month) for compliance scoring.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
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
        { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 4 } }
    ];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 03. MASTER LEDGER (THE LOGBOOK) ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch Name", s: headerBlockStyle }, // B
        { v: "Category", s: headerBlockStyle }, // C
        { v: "Control Task", s: headerBlockStyle }, // D
        { v: "Responsible Role", s: headerBlockStyle }, // E
        { v: "Responsible Person (Input)", s: headerBlockStyle }, // F
        { v: "Date Done (Input)", s: headerBlockStyle }, // G
        { v: "Live Status (Auto)", s: headerBlockStyle }, // H
        { v: "Issue / Action Taken", s: headerBlockStyle } // I
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER GOVERNANCE LEDGER (HISTORICAL AUDIT TRAIL)", s: titleStyle }], [], ledgerHeaders];

    const today = new Date();
    // Pre-populate a 14-day cycle (-7 days history, Today, +7 days future)
    for (let d = -7; d <= 7; d++) {
        const entryDate = new Date(today);
        entryDate.setDate(today.getDate() + d);

        item.checklists.forEach(checklist => {
            checklist.tasks.forEach(task => {
                const rowNum = ledgerData.length + 1;
                const dateDoneCell = `G${rowNum}`;
                const entryDateCell = `A${rowNum}`;
                
                // V2.7 MASTER STATUS FORMULA
                // 1. If Date Done is not blank -> COMPLETED
                // 2. If Date Done is blank:
                //    a. If Entry Date < Today -> OVERDUE
                //    b. If Entry Date > Today -> DUE SHORTLY
                //    c. If Entry Date = Today -> PENDING
                const statusFormula = `IF(NOT(ISBLANK(${dateDoneCell})), "COMPLETED", IF(${entryDateCell}<TODAY(), "OVERDUE - ACTION REQUIRED", IF(${entryDateCell}>TODAY(), "DUE SHORTLY", "PENDING")))`;
                
                const rowStyle = task.priority === 'High' ? complianceStyle : leftCellStyle;

                ledgerData.push([
                    { v: entryDate, t: 'd', s: centerCellStyle }, // A: Scheduled Date
                    { v: "Bandra Main", s: inputStyle }, // B: Branch
                    { v: checklist.title, s: centerCellStyle }, // C: Category
                    { v: task.description, s: rowStyle }, // D: Task
                    { v: checklist.role, s: centerCellStyle }, // E: Role
                    { v: "", s: inputStyle }, // F: Human Name
                    { v: "", s: inputStyle }, // G: Actual Date Done
                    { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, // H: Status
                    { v: "", s: inputStyle } // I: Issue/Note
                ]);
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [15, 20, 25, 60, 25, 30, 20, 25, 45];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    
    // ACTIVATE FILTERS - LOCKED TO DATA RANGE
    ledgerWs['!autofilter'] = { ref: `A4:I${ledgerData.length}` };
    
    utils.book_append_sheet(wb, ledgerWs, "03_MASTER_LEDGER");

    // --- 02. DASHBOARD (TIME-WINDOW REPORTING) ---
    const startOfPeriod = new Date(today);
    startOfPeriod.setDate(today.getDate() - 7);
    
    const dashData: any[][] = [
        [],
        [{ v: "ON-DEMAND COMPLIANCE REPORTING", s: titleStyle }],
        [],
        [{ v: "STEP 1: SELECT REPORTING WINDOW", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIME_NAVY } } } }, { v: "START DATE", s: headerBlockStyle }, { v: "END DATE", s: headerBlockStyle }, { v: "CURRENT TIME", s: centerCellStyle }],
        [
            { v: "Define Period:", s: { alignment: { horizontal: 'right' } } }, 
            { v: startOfPeriod, t: 'd', s: inputStyle }, // B5: Start
            { v: today, t: 'd', s: inputStyle },         // C5: End
            { t: 'f', f: "NOW()", s: centerCellStyle }
        ],
        [],
        [{ v: "GOVERNANCE METRIC", s: headerBlockStyle }, { v: "BENCHMARK", s: headerBlockStyle }, { v: "WINDOW PERFORMANCE", s: headerBlockStyle }, { v: "AUDIT COMMENTARY", s: headerBlockStyle }],
        [
            { v: "Window Compliance Rate", s: leftCellStyle },
            { v: "100%", s: centerCellStyle },
            // Denominator ignores future tasks. Only counts tasks that SHOULD be done within the user's window.
            { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!H:H,"COMPLETED",'03_MASTER_LEDGER'!A:A,">="&B5,'03_MASTER_LEDGER'!A:A,"<="&C5)/MAX(1,COUNTIFS('03_MASTER_LEDGER'!A:A,">="&B5,'03_MASTER_LEDGER'!A:A,"<="&C5,'03_MASTER_LEDGER'!A:A,"<=TODAY()"))`, s: { ...centerCellStyle, font: { bold: true, sz: 14 } } },
            { v: "Only accounts for tasks scheduled up to today." }
        ],
        [
            { v: "Critical Overdue Gaps (Full Year)", s: leftCellStyle },
            { v: "0", s: centerCellStyle },
            { t: 'f', f: `COUNTIF('03_MASTER_LEDGER'!H:H,"OVERDUE*")`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } },
            { v: "Outstanding safety risks in the ledger." }
        ]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 35 }, { wch: 20 }, { wch: 25 }, { wch: 45 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 04. RISK MAP ---
    const riskData = [
        [],
        [{ v: "RISK CONTROL MAP: THE 'WHY' BEHIND THE SYSTEM", s: titleStyle }],
        [],
        [{ v: "Operational Risk", s: headerBlockStyle }, { v: "Failure Impact", s: headerBlockStyle }, { v: "Primary Shield", s: headerBlockStyle }, { v: "Control Action", s: headerBlockStyle }],
        [{ v: "Health Closure", s: centerCellStyle }, { v: "Revenue Zero / Legal Fine", s: leftCellStyle }, { v: "HACCP Module", s: centerCellStyle }, { v: "Temp Logs & Cross-Contamination Sign-offs" }],
        [{ v: "Customer Injury", s: centerCellStyle }, { v: "Litigation / Brand Damage", s: leftCellStyle }, { v: "Hygiene Module", s: centerCellStyle }, { v: "Hourly Restroom & Floor Hazard Checks" }],
        [{ v: "Internal Theft", s: centerCellStyle }, { v: "EBITDA Erosion", s: leftCellStyle }, { v: "Inventory Module", s: centerCellStyle }, { v: "Weekly Blind Stock & Spirit Reconciliation" }]
    ];
    const riskWs = utils.aoa_to_sheet(riskData);
    addNavBar(riskWs);
    riskWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 30 }, { wch: 45 }];
    riskWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, riskWs, "04_RISK_MAP");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.7_Total_Governance.xlsx`);
}
