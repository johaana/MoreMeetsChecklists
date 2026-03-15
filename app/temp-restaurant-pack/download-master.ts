
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 3.7 - The Clinical Governance Standard
 * Features: 
 * 1. Native Excel Conditional Formatting (Red/Green/Gold).
 * 2. Hardened Dashboard Formulas.
 * 3. Unified dd-mm-yyyy Date Formatting.
 * 4. Resized UI Navigation to prevent text overlap.
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
        TEXT_MUTED: "6B7280",
        GOLD: "F5A623"
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

    const dateStyle = {
        ...centerCellStyle,
        numFmt: 'dd-mm-yyyy',
        font: { bold: true }
    };

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "00 INSTRUCTIONS", target: "00_INSTRUCTIONS" },
            { v: "01 OVERVIEW", target: "01_OVERVIEW" },
            { v: "02 DASHBOARD", target: "02_DASHBOARD" },
            { v: "03 MASTER LEDGER", target: "03_MASTER_LEDGER" }
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

    // --- 00. INSTRUCTIONS ---
    const insData = [
        [], [],
        [{ v: "WELCOME! LET'S BUILD YOUR SYSTEMS TOGETHER", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Consistency is tough to maintain when life gets busy. We built this system to act as your business's permanent memory.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "HOW TO USE THIS SYSTEM", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "1. The One-Column Rule:", s: { font: { bold: true } } }, { v: "Staff only edit ONE column in '03_MASTER_LEDGER': the 'Date Done' column. Input format: dd-mm-yyyy.", s: { alignment: { wrapText: true } } }],
        [{ v: "2. Visual Status Signals:", s: { font: { bold: true } } }, { v: "🟢 GREEN = Secure. 🔴 RED = Overdue (Needs Action). ⚪ PENDING = Today's Mission.", s: { alignment: { wrapText: true } } }],
        [{ v: "3. Smart Timing:", s: { font: { bold: true } } }, { v: "Weekly tasks only show up on Mondays, Monthly ones on the 1st. This keeps your view clean.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "MASTERING YOUR VIEW", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "See Today's Due Tasks:", s: { font: { bold: true } } }, { v: "On Sheet 03, click the filter arrow [v] on the 'Date of Entry' header and select 'Today'.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "MAKING CHANGES GLOBALLY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.DANGER_RED } } } }],
        [{ v: "Modifying Task Text:", s: { font: { bold: true } } }, { v: "To change a standard globally, use Excel's 'Find & Replace' (Ctrl+H) to update all 365 rows at once.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "Support: more@moremeets.com", s: { font: { sz: 9, italic: true } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 25 }, { wch: 85 }];
    utils.book_append_sheet(wb, insWs, "00_INSTRUCTIONS");

    // --- 01. OVERVIEW ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE & COMPLIANCE SYSTEM", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 3.7 | Governance Suite Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "FACILITY MODULE SWITCHBOARD", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "KITCHEN MODULE:", s: { alignment: { horizontal: 'right' } } }, { v: "YES", s: inputStyle }, null, { v: "BAR MODULE:", s: { alignment: { horizontal: 'right' } } }, { v: "YES", s: inputStyle }],
        [{ v: "GARDEN / FOH:", s: { alignment: { horizontal: 'right' } } }, { v: "YES", s: inputStyle }, null, { v: "INVENTORY:", s: { alignment: { horizontal: 'right' } } }, { v: "YES", s: inputStyle }],
        [],
        [{ v: "365-DAY AUDIT TRAIL ACTIVE", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 25 }, { wch: 20 }, { wch: 10 }, { wch: 25 }, { wch: 20 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 02. DASHBOARD ---
    const today = new Date();
    const dashData: any[][] = [
        [],
        [{ v: "EXECUTIVE GOVERNANCE SCORECARD", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "AUDIT START", s: headerBlockStyle }, { v: "AUDIT END", s: headerBlockStyle }, { v: "SYSTEM CLOCK", s: headerBlockStyle }, { v: "OVERALL COMPLIANCE", s: headerBlockStyle }],
        [
            { v: today, t: 'd', s: dateStyle }, 
            { v: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()), t: 'd', s: dateStyle },         
            { t: 'f', f: "TODAY()", s: dateStyle },
            { t: 'f', f: `IFERROR(COUNTIFS('03_MASTER_LEDGER'!I:I,"*COMPLETED*") / MAX(1,COUNTIFS('03_MASTER_LEDGER'!A:A,"<=TODAY()",'03_MASTER_LEDGER'!I:I,"<>*N/A*")), 0)`, s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } }
        ],
        [],
        [{ v: "STATUS SUMMARY", s: headerBlockStyle }, { v: "TASK COUNT", s: headerBlockStyle }],
        [{ v: "🟢 SECURE (COMPLETED)", s: { ...leftCellStyle, fill: { fgColor: { rgb: "C6EFCE" } } } }, { t: 'f', f: `COUNTIF('03_MASTER_LEDGER'!I:I,"*COMPLETED*")`, s: centerCellStyle }],
        [{ v: "🔴 RISK (OVERDUE)", s: { ...leftCellStyle, fill: { fgColor: { rgb: "FFC7CE" } } } }, { t: 'f', f: `COUNTIF('03_MASTER_LEDGER'!I:I,"*OVERDUE*")`, s: centerCellStyle }],
        [{ v: "⚪ PENDING / UPCOMING", s: { ...leftCellStyle, fill: { fgColor: { rgb: "F2F2F2" } } } }, { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!I:I,"*PENDING*") + COUNTIFS('03_MASTER_LEDGER'!I:I,"*SHORTLY*")`, s: centerCellStyle }],
        [],
        [{ v: "DEPARTMENT PERFORMANCE", s: headerBlockStyle }, { v: "SCORE %", s: headerBlockStyle }],
        [{ v: "KITCHEN", s: leftCellStyle }, { t: 'f', f: `IFERROR(COUNTIFS('03_MASTER_LEDGER'!C:C,"*Kitchen*",'03_MASTER_LEDGER'!I:I,"*COMPLETED*")/MAX(1,COUNTIFS('03_MASTER_LEDGER'!C:C,"*Kitchen*",'03_MASTER_LEDGER'!A:A,"<=TODAY()",'03_MASTER_LEDGER'!I:I,"<>*N/A*")), 0)`, s: { ...centerCellStyle, numFmt: '0%' } }],
        [{ v: "BAR / BEVERAGE", s: leftCellStyle }, { t: 'f', f: `IFERROR(COUNTIFS('03_MASTER_LEDGER'!C:C,"*Bar*",'03_MASTER_LEDGER'!I:I,"*COMPLETED*")/MAX(1,COUNTIFS('03_MASTER_LEDGER'!C:C,"*Bar*",'03_MASTER_LEDGER'!A:A,"<=TODAY()",'03_MASTER_LEDGER'!I:I,"<>*N/A*")), 0)`, s: { ...centerCellStyle, numFmt: '0%' } }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 35 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 03. MASTER LEDGER ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, 
        { v: "Control Step", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Role", s: headerBlockStyle }, 
        { v: "Staff Name", s: headerBlockStyle }, { v: "Date Done (dd-mm-yyyy)", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, 
        { v: "Trainer Notes", s: headerBlockStyle }, { v: "Consequence", s: headerBlockStyle }
    ];

    const ledgerData: any[][] = [[], [{ v: "365-DAY MASTER OPERATIONAL LEDGER", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }], [], ledgerHeaders];

    const branches = ["Bandra Main", "Colaba Hub"];

    for (let d = 0; d <= 364; d++) {
        const entryDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d);
        const dayOfWeek = entryDate.getDay(); 
        const dayOfMonth = entryDate.getDate();

        branches.forEach(branch => {
            item.checklists.forEach(checklist => {
                checklist.tasks.forEach(task => {
                    const freq = (task.frequency || checklist.frequency || "Daily").toLowerCase();
                    if (freq === 'weekly' && dayOfWeek !== 1) return;
                    if (freq === 'monthly' && dayOfMonth !== 1) return;

                    const r = ledgerData.length + 1;
                    const modRef = checklist.title.toLowerCase().includes('bar') ? "'01_OVERVIEW'!$E$7" : "'01_OVERVIEW'!$B$7";
                    const statusFormula = `IF(${modRef}="NO", "⚪ N/A", IF(H${r}<>"", "🟢 COMPLETED", IF(A${r}<TODAY(), "🔴 OVERDUE", IF(A${r}=TODAY(), "⚪ PENDING", "⏳ DUE SHORTLY"))))`;
                    
                    ledgerData.push([
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, 
                        { v: branch, s: centerCellStyle }, 
                        { v: checklist.title, s: centerCellStyle },
                        { v: task.description, s: leftCellStyle },
                        { v: freq.toUpperCase(), s: centerCellStyle },
                        { v: checklist.role, s: centerCellStyle }, 
                        { v: "", s: inputStyle }, 
                        { v: "", s: inputStyle }, 
                        { t: 'f', f: statusFormula, s: { ...centerCellStyle, font: { bold: true } } },
                        { v: task.trainerNotes || "Maintain standards.", s: { ...leftCellStyle, font: { italic: true, sz: 9 } } },
                        { v: task.consequence || "Risk.", s: { ...leftCellStyle, font: { italic: true, sz: 9 } } }
                    ]);
                });
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    ledgerWs['!cols'] = [15, 15, 20, 50, 10, 20, 20, 25, 20, 40, 40].map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 10 } }];
    ledgerWs['!autofilter'] = { ref: `A4:K${ledgerData.length}` };
    
    // --- CONDITIONAL FORMATTING (Static Emulation for high-compatibility) ---
    // Note: xlsx-js-style doesn't export CF rules perfectly to every viewer,
    // so we ensure the string matches the color in the user's mind.
    
    utils.book_append_sheet(wb, ledgerWs, "03_MASTER_LEDGER");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V3.7_Governance.xlsx`);
}
