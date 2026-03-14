
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.3 - Executive Command (Surgical Standard Build)
 * Institutional Standard for Operational Governance
 * 
 * FINAL AUDIT REPAIRS:
 * - Localized Status Logic: 05_EXECUTION is now the input master. Live Status updates instantly.
 * - Logical Pair Architecture: Input Code and Output Label are side-by-side.
 * - Status 1 Fix: Strictly ACTIVE by default.
 * - Path B Alignment: Descriptions Left / Data Center.
 */
export const handleDownloadV2 = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();

    const safeSheetName = (title: string) => {
        const sanitized = title.replace(/[\s&/\\?*:[\]]/g, '_');
        return sanitized.substring(0, 30);
    }
    
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

    const greyInputStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_GREY } }
    };

    const kpiCardStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIME_NAVY }, sz: 22 },
        fill: { fgColor: { rgb: COLORS.SOFT_GREY } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "01 OVERVIEW", l: { Target: "#'01_SYSTEM_OVERVIEW'!A1" }, s: navStyle },
                { v: "02 SETUP", l: { Target: "#'02_PERSONNEL_SETUP'!A1" }, s: navStyle },
                { v: "03 DASHBOARD", l: { Target: "#'03_OPERATIONS_DASHBOARD'!A1" }, s: navStyle },
                { v: "04 CONTROL", l: { Target: "#'04_MANAGER_CONTROL_BOARD'!A1" }, s: navStyle },
                { v: "05 EXECUTION", l: { Target: "#'05_DAILY_TASK_EXECUTION'!A1" }, s: navStyle },
                { v: "06 AUDIT LOG", l: { Target: "#'06_INCIDENT_AUDIT_LOG'!A1" }, s: navStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. OVERVIEW (Prestige Centering) ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.3 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH MASTER REGISTRY (SET LOCATIONS HERE)", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Code 1:", s: { alignment: { horizontal: 'right' } } }, { v: "[Main Branch Name]", s: greyInputStyle }, null, { v: "Code 2:", s: { alignment: { horizontal: 'right' } } }, { v: "[Branch 2 Name]", s: greyInputStyle }],
        [],
        [{ v: "OPERATIONAL INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Update personnel names and branches in '02_SETUP' using Numerical Codes.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Staff simply click the filter arrow [v] on the Personnel header in '05_EXECUTION' to select their name.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 20 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 5 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 5 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 5 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 5 } }];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. SETUP (DYNAMIC ROLE LIST) ---
    const uniqueRoles = Array.from(new Set(item.checklists.map(c => c.role)));
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL & ROLE ASSIGNMENT", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [null, null, null, { v: "1=ACTIVE, 2=LEAVE, 3=RESIGNED, 4=TRAINING, 5=WEEKLY OFF, 6=HOLIDAY", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }, null, { v: "1-2 = BRANCH CODE", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Role", s: headerBlockStyle }, { v: "Staff Name", s: headerBlockStyle }, { v: "Status Code", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Branch Code", s: headerBlockStyle }, { v: "Assigned Location", s: headerBlockStyle }]
    ];

    uniqueRoles.forEach((role, idx) => {
        const rNum = idx + 6;
        setupData.push([
            { v: (idx + 1).toString(), s: centerCellStyle },
            { v: role, s: centerCellStyle },
            { v: "", s: greyInputStyle }, 
            { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IF(D${rNum}="", "ACTIVE", IFERROR(CHOOSE(D${rNum}, "ACTIVE", "LEAVE", "RESIGNED", "TRAINING", "WEEKLY OFF", "HOLIDAY"), "ACTIVE"))`, s: centerCellStyle },
            { v: "1", s: greyInputStyle },
            { t: 'f', f: `IFERROR(CHOOSE(F${rNum}, '01_SYSTEM_OVERVIEW'!$B$7, '01_SYSTEM_OVERVIEW'!$E$7), "N/A")`, s: centerCellStyle }
        ]);
    });

    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 10 }, { wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 30 }];
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // --- 05. DAILY TASK EXECUTION (SEARCH & CHOOSE - PRIMARY INPUT) ---
    const execData: any[][] = [
        [],
        [{ v: "DAILY TASK EXECUTION COCKPIT (INPUT HERE)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "CHOOSE MODE: Use filter [v] on 'Personnel' to select name. Type completion date in Grey column.", s: { font: { italic: true, sz: 11, bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Date Done (DD-MM)", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }]
    ];

    const allTasks: any[] = [];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            allTasks.push({ ...t, role: c.role });
        });
    });

    allTasks.forEach((t, i) => {
        const rNum = i + 6;
        execData.push([
            { v: t.id, s: centerCellStyle },
            { v: t.description, s: leftCellStyle },
            // Personnel Lookup
            { t: 'f', f: `IFERROR(IF(VLOOKUP("${t.role}", '02_PERSONNEL_SETUP'!$B$6:$C$100, 2, FALSE)="", "VACANT", VLOOKUP("${t.role}", '02_PERSONNEL_SETUP'!$B$6:$C$100, 2, FALSE)), "VACANT")`, s: centerCellStyle },
            { v: "", s: greyInputStyle }, // Date Done Input
            { t: 'f', f: `IF(D${rNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle },
            { t: 'f', f: `IFERROR(VLOOKUP("${t.role}", '02_PERSONNEL_SETUP'!$B$6:$G$100, 6, FALSE), "N/A")`, s: centerCellStyle }
        ]);
    });

    const execWs = utils.aoa_to_sheet(execData);
    addNavBar(execWs);
    execWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 30 }, { wch: 20 }, { wch: 20 }, { wch: 25 }];
    execWs['!autofilter'] = { ref: `A5:F${allTasks.length + 5}` };
    utils.book_append_sheet(wb, execWs, "05_DAILY_TASK_EXECUTION");

    // --- 03. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "PENDING TASKS", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('05_DAILY_TASK_EXECUTION'!E:E, "COMPLETED") / MAX(1, COUNTA('05_DAILY_TASK_EXECUTION'!B:B)-1), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIF('05_DAILY_TASK_EXECUTION'!E:E, "PENDING")`, s: { ...kpiCardStyle, font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true, sz: 22 } }, l: { Target: "#'05_DAILY_TASK_EXECUTION'!A1" } },
            { t: 'f', f: `COUNTIF('02_PERSONNEL_SETUP'!C6:C100, "")`, s: kpiCardStyle }
        ]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    // --- 04. MANAGER CONTROL (VIEW ONLY) ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD (PENDING)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Requirement", s: headerBlockStyle }, { v: "Assigned To", s: headerBlockStyle }, { v: "Current Status", s: headerBlockStyle }]
    ];
    allTasks.forEach((t, i) => {
        const rNum = i + 6;
        mgrData.push([
            { t: 'f', f: `'05_DAILY_TASK_EXECUTION'!A${rNum}` },
            { t: 'f', f: `'05_DAILY_TASK_EXECUTION'!B${rNum}` },
            { t: 'f', f: `'05_DAILY_TASK_EXECUTION'!C${rNum}` },
            { t: 'f', f: `'05_DAILY_TASK_EXECUTION'!E${rNum}` }
        ]);
    });
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 25 }, { wch: 25 }];
    mgrWs['!autofilter'] = { ref: `A4:D${allTasks.length + 4}` };
    utils.book_append_sheet(wb, mgrWs, "04_MANAGER_CONTROL_BOARD");

    // --- 06. AUDIT LOG ---
    const logData: any[][] = [
        [],
        [{ v: "INCIDENT AUDIT LOG (FAILED CONTROLS)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Failed Step", s: headerBlockStyle }, { v: "Action Taken", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 60 }, { wch: 40 }, { wch: 30 }];
    utils.book_append_sheet(wb, logWs, "06_INCIDENT_AUDIT_LOG");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
