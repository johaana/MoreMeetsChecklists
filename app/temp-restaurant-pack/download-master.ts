
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 3.4 - Interval-Aware Matrix
 * Features: 
 * 1. 00_INSTRUCTIONS Sheet (Friendly authoritative tone).
 * 2. Frequency Filtering (Weekly on Mondays, Monthly on 1st).
 * 3. Clinical dd-mm-yyyy logic.
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
        [{ v: "WELCOME TO YOUR OPERATIONAL COMMAND SYSTEM", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Consistency is not an accident. It is engineered. This system turns your collective experience into a permanent, audit-ready infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "HOW TO USE THIS SYSTEM", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "1. The One-Column Rule:", s: { font: { bold: true } } }, { v: "Staff only edit ONE column in the '03_MASTER_LEDGER': the 'Date Done' column. Everything else is automatic.", s: { alignment: { wrapText: true } } }],
        [{ v: "2. Frequency Intelligence:", s: { font: { bold: true } } }, { v: "The Ledger is smart. Daily tasks appear every day. Weekly tasks only appear on Mondays. Monthly tasks appear on the 1st.", s: { alignment: { wrapText: true } } }],
        [{ v: "3. Visual Status:", s: { font: { bold: true } } }, { v: "🟢 GREEN = Secure. 🔴 RED = Overdue (Immediate Risk). ⏳ GREY = Upcoming mission.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "A Note on Integrity:", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }, { v: "To maintain your Audit Trail, do not insert rows manually. If you need to add or change a task, use our Yearly Refresh Service to keep your dashboard accurate.", s: { font: { italic: true } } }],
        [],
        [{ v: "For technical support, contact: more@moremeets.com", s: { font: { sz: 9, italic: true } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 25 }, { wch: 80 }];
    utils.book_append_sheet(wb, insWs, "00_INSTRUCTIONS");

    // --- 01. OVERVIEW ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE & COMPLIANCE SYSTEM", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 3.4 | Interval-Aware Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Bandra Main", s: inputStyle }, null, { v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Colaba Hub", s: inputStyle }],
        [],
        [{ v: "FACILITY MODULE SWITCHBOARD", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enable Module:", s: { alignment: { horizontal: 'right' } } }, { v: "KITCHEN", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, { v: "YES", s: inputStyle }, { v: "BAR / BEVERAGE", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, { v: "YES", s: inputStyle }],
        [{ v: "", s: { alignment: { horizontal: 'right' } } }, { v: "GARDEN / FOH", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, { v: "YES", s: inputStyle }, { v: "INVENTORY", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, { v: "YES", s: inputStyle }],
        [],
        [{ v: "SYSTEM MAINTENANCE SERVICE:", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.DANGER_RED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "This file is an engineered matrix. Tasks are pre-populated based on their required frequency.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Contact MoreMeets™ for a 'Yearly Refresh' to update your task list and receive a clean ledger.", s: { font: { sz: 10, bold: true }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 4 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 4 } }, { s: { r: 12, c: 0 }, e: { r: 12, c: 4 } }, { s: { r: 13, c: 0 }, e: { r: 13, c: 4 } }, { s: { r: 14, c: 0 }, e: { r: 14, c: 4 } }];
    utils.book_append_sheet(wb, coverWs, "01_OVERVIEW");

    // --- 02. DASHBOARD ---
    const today = new Date();
    const endOfYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    
    const dashData: any[][] = [
        [],
        [{ v: "EXECUTIVE GOVERNANCE SCORECARD", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "NETWORK COMPLIANCE RATE (LIVE)", s: headerBlockStyle }, { v: "WINDOW START", s: headerBlockStyle }, { v: "WINDOW END", s: headerBlockStyle }, { v: "SYSTEM CLOCK", s: headerBlockStyle }],
        [
            { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!I:I,"*COMPLETED*",'03_MASTER_LEDGER'!A:A,">="&B4,'03_MASTER_LEDGER'!A:A,"<="&C4)/MAX(1,COUNTIFS('03_MASTER_LEDGER'!A:A,">="&B4,'03_MASTER_LEDGER'!A:A,"<=TODAY()",'03_MASTER_LEDGER'!I:I,"<>*N/A*"))`, s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } },
            { v: today, t: 'd', s: dateStyle }, 
            { v: endOfYear, t: 'd', s: dateStyle },         
            { t: 'f', f: "TODAY()", s: dateStyle }                            
        ],
        [],
        [{ v: "STATUS DISTRIBUTION", s: headerBlockStyle }, { v: "TASK COUNT", s: headerBlockStyle }],
        [{ v: "🟢 COMPLETED", s: { ...leftCellStyle, fill: { fgColor: { rgb: "C6EFCE" } } } }, { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!I:I,"*COMPLETED*",'03_MASTER_LEDGER'!A:A,">="&B4,'03_MASTER_LEDGER'!A:A,"<="&C4)`, s: centerCellStyle }],
        [{ v: "🔴 OVERDUE (ACTION REQD)", s: { ...leftCellStyle, fill: { fgColor: { rgb: "FFC7CE" } } } }, { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!I:I,"*OVERDUE*",'03_MASTER_LEDGER'!A:A,">="&B4,'03_MASTER_LEDGER'!A:A,"<="&C4)`, s: centerCellStyle }],
        [{ v: "⚪ PENDING / UPCOMING", s: { ...leftCellStyle, fill: { fgColor: { rgb: "F2F2F2" } } } }, { t: 'f', f: `COUNTIFS('03_MASTER_LEDGER'!I:I,"*PENDING*", '03_MASTER_LEDGER'!A:A,">="&B4) + COUNTIFS('03_MASTER_LEDGER'!I:I,"*SHORTLY*", '03_MASTER_LEDGER'!A:A,">="&B4)`, s: centerCellStyle }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 35 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
    dashWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "02_DASHBOARD");

    // --- 03. MASTER LEDGER ---
    const ledgerHeaders = [
        { v: "Date of Entry", s: headerBlockStyle }, // A
        { v: "Branch Name", s: headerBlockStyle }, // B
        { v: "Module (Checklist)", s: headerBlockStyle }, // C
        { v: "Requirement / Control Step", s: headerBlockStyle }, // D
        { v: "Frequency", s: headerBlockStyle }, // E
        { v: "Responsible Role", s: headerBlockStyle }, // F
        { v: "Staff Name (Input)", s: headerBlockStyle }, // G
        { v: "Date Done (DD-MM-YYYY)", s: headerBlockStyle }, // H
        { v: "Live Status (Auto)", s: headerBlockStyle }, // I
        { v: "Issue / Action Taken", s: headerBlockStyle }, // J
        { v: "Trainer Notes (How-to)", s: headerBlockStyle }, // K
        { v: "Consequence of Failure", s: headerBlockStyle } // L
    ];

    const ledgerData: any[][] = [[], [{ v: "MASTER OPERATIONAL LEDGER (365-DAY AUDIT TRAIL)", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }], [], ledgerHeaders];

    const branches = ["Bandra Main", "Colaba Hub"];

    for (let d = 0; d <= 364; d++) {
        const entryDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + d);
        const dayOfWeek = entryDate.getDay(); // 1 = Monday
        const dayOfMonth = entryDate.getDate();

        branches.forEach(branch => {
            item.checklists.forEach(checklist => {
                checklist.tasks.forEach(task => {
                    const freq = (task.frequency || checklist.frequency || "Daily").toLowerCase();
                    
                    // --- INTERVAL LOGIC ---
                    let shouldInclude = false;
                    if (freq === 'daily') shouldInclude = true;
                    if (freq === 'weekly' && dayOfWeek === 1) shouldInclude = true; // Every Monday
                    if (freq === 'monthly' && dayOfMonth === 1) shouldInclude = true; // 1st of Month
                    
                    if (!shouldInclude) return;

                    const rowNum = ledgerData.length + 1;
                    let moduleRef = "'01_OVERVIEW'!$C$10"; // Default Kitchen
                    if (checklist.title.toLowerCase().includes('bar')) moduleRef = "'01_OVERVIEW'!$E$10";
                    if (checklist.title.toLowerCase().includes('foh') || checklist.title.toLowerCase().includes('dining')) moduleRef = "'01_OVERVIEW'!$C$11";
                    if (checklist.title.toLowerCase().includes('inventory')) moduleRef = "'01_OVERVIEW'!$E$11";

                    const statusFormula = `IF(${moduleRef}="NO", "⚪ N/A - INACTIVE", IF(H${rowNum}<>"", "🟢 COMPLETED", IF(A${rowNum}<TODAY(), "🔴 OVERDUE", IF(A${rowNum}=TODAY(), "⚪ PENDING", "⏳ DUE SHORTLY"))))`;
                    
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
                        { v: "", s: inputStyle },
                        { v: task.trainerNotes || "No notes.", s: { ...leftCellStyle, font: { italic: true, color: COLORS.TEXT_MUTED, sz: 9 } } },
                        { v: task.consequence || "Compliance risk.", s: { ...leftCellStyle, font: { italic: true, color: COLORS.TEXT_MUTED, sz: 9 } } }
                    ]);
                });
            });
        });
    }

    const ledgerWs = utils.aoa_to_sheet(ledgerData);
    addNavBar(ledgerWs);
    const wchs = [15, 20, 25, 50, 15, 20, 25, 25, 25, 35, 45, 45];
    ledgerWs['!cols'] = wchs.map(w => ({ wch: w }));
    ledgerWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: wchs.length - 1 } }];
    ledgerWs['!autofilter'] = { ref: `A4:L${ledgerData.length}` };
    utils.book_append_sheet(wb, ledgerWs, "03_MASTER_LEDGER");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V3.4_Command_Suite.xlsx`);
}
