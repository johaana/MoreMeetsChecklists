
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.8 - The Yearly Governance Suite
 * Philosophy: 365-Day Operational Database (60 Days History / 305 Days Future).
 * Logic:
 * 🔴 OVERDUE: Date passed & empty 'Date Done'.
 * ⚪ PENDING: Today & empty 'Date Done'.
 * ⏳ DUE SHORTLY: Future date.
 * 🟢 COMPLETED: 'Date Done' is entered.
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

    // --- 01. OVERVIEW ---
    const coverData = [
        [], [],
        [{ v: "RESTAURANT OPERATIONS CONTROL SYSTEM", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.8 | Full-Year Governance Build (365-Day Database)`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "SYSTEM GOVERNANCE & YEARLY REFRESH:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. The '03_MASTER_LEDGER' contains 365 days of rows. Use the Filter [v] on 'Date' to select specific months.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. To see only today's tasks, filter 'Date of Entry' for TODAY only.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. 'Trainer Notes' provide the 'How-to' guidance. 'Action Taken' is where you record issues.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "4. For next year's ledger or system updates, contact MoreMeets™ for a V3.0 Refresh pack.", s: { font: { sz: 10, italic: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
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

    // --- 03. MASTER LEDGER (FULL YEAR) ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch Name", s: headerBlockStyle }, // B
        { v: "Trainer Notes (How-to)", s: headerBlockStyle }, // C
        { v: "Requirement / Control Step", s: headerBlockStyle }, // D
        { v: "Responsible Role", s: headerBlockStyle }, // E
        { v: "Staff Member (Name)", s: headerBlockStyle }, // F
        { v: "Date Completed (Input)", s: headerBlockStyle }, // G
        { v: "Live Status (Auto)", s: headerBlockStyle }, // H
        { v: "Action Taken / Issue / Notes", s: headerBlockStyle } // I
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER OPERATIONAL LEDGER (ANNUAL AUDIT TRAIL)", s: titleStyle }], [], ledgerHeaders];

    const today = new Date();
    const branches = ["Bandra Main", "Colaba Hub"];

    // 365-DAY SCALE LOOP
    for (let d = -60; d <= 305; d++) {
        const entryDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d);

        branches.forEach(branch => {
            item.checklists.forEach(checklist => {
                checklist.tasks.forEach(task => {
                    const rowNum = ledgerData.length + 1;
                    const dateDoneCell = `G${rowNum}`;
                    const entryDateCell = `A${rowNum}`;
                    
                    // STATUS LOGIC V2.8:
                    // 1. If Date Done exists -> COMPLETED
                    // 2. Else if Entry Date < Today -> OVERDUE
                    // 3. Else if Entry Date = Today -> PENDING
                    // 4. Else -> DUE SHORTLY
                    const statusFormula = `IF(NOT(ISBLANK(${dateDoneCell})), "🟢 COMPLETED", IF(${entryDateCell}<TODAY(), "🔴 OVERDUE - ACTION REQUIRED", IF(${entryDateCell}=TODAY(), "⚪ PENDING", "⏳ DUE SHORTLY")))`;
                    
                    const rowStyle = task.priority === 'High' ? complianceStyle : leftCellStyle;

                    ledgerData.push([
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mmm-yyyy' } }, 
                        { v: branch, s: centerCellStyle }, 
                        { v: task.trainerNotes || "Follow standard protocol.", s: { ...leftCellStyle, font: { italic: true, color: { rgb: COLORS.TEXT_MUTED }, sz: 9 } } },
                        { v: task.description, s: rowStyle }, 
                        { v: checklist.role, s: centerCellStyle }, 
                        { v: "", s: inputStyle }, 
                        { v: "", s: inputStyle }, 
                        { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } }, 
                        { v: "", s: inputStyle } 
                    ]);
                });
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [18, 25, 35, 60, 25, 30, 25, 30, 45];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    
    // ACTIVATE FILTERS
    ledgerWs['!autofilter'] = { ref: `A4:I${ledgerData.length}` };
    
    utils.book_append_sheet(wb, ledgerWs, "03_MASTER_LEDGER");

    // --- 02. DASHBOARD ---
    const startOfPeriod = new Date(today.getFullYear(), today.getMonth(), 1);
    const dashData: any[][] = [
        [],
        [{ v: "ANNUAL COMPLIANCE DASHBOARD", s: titleStyle }],
        [],
        [{ v: "REPORTING WINDOW SETTINGS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIME_NAVY } } } }, { v: "START DATE", s: headerBlockStyle }, { v: "END DATE", s: headerBlockStyle }, { v: "CURRENT SYSTEM DATE", s: centerCellStyle }],
        [
            { v: "Audit Period:", s: { alignment: { horizontal: 'right' } } }, 
            { v: startOfPeriod, t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, 
            { v: today, t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },         
            { t: 'f', f: "TODAY()", s: centerCellStyle }                            
        ],
        [],
        [{ v: "GOVERNANCE METRIC", s: headerBlockStyle }, { v: "BENCHMARK", s: headerBlockStyle }, { v: "WINDOW PERFORMANCE", s: headerBlockStyle }, { v: "AUDIT COMMENTARY", s: headerBlockStyle }],
        [
            { v: "Compliance Execution Rate", s: leftCellStyle },
            { v: "100%", s: centerCellStyle },
            { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!H:H,"*COMPLETED*",'03_MASTER_LEDGER'!A:A,">="&B5,'03_MASTER_LEDGER'!A:A,"<="&C5)/MAX(1,COUNTIFS('03_MASTER_LEDGER'!A:A,">="&B5,'03_MASTER_LEDGER'!A:A,"<="&C5,'03_MASTER_LEDGER'!A:A,"<="&D5))`, s: { ...centerCellStyle, font: { bold: true, sz: 14 } } },
            { v: "Ignores future tasks to ensure honest reporting." }
        ],
        [
            { v: "Critical Overdue Gaps", s: leftCellStyle },
            { v: "0", s: centerCellStyle },
            { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!H:H,"*OVERDUE*",'03_MASTER_LEDGER'!A:A,">="&B5,'03_MASTER_LEDGER'!A:A,"<="&C5)`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } },
            { v: "Failed compliance points in selected window." }
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

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.8_Yearly_Governance.xlsx`);
}
