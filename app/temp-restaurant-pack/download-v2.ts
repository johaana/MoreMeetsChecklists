
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.3 - Executive Command (Click-to-Detail Build)
 * Institutional Standard for Operational Governance
 * 
 * UX UPDATES:
 * - Clickable "Critical Gaps" link on Dashboard jumps to Control Board.
 * - Logical Pair Architecture: Code sits directly next to Result Label.
 * - Default status strictly set to ACTIVE.
 * - Alignment: Descriptions (Left), Metrics/Labels (Center).
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
    
    // --- CORPORATE CLINICAL PALETTE ---
    const COLORS = {
        PRIME_NAVY: "1F2937",
        SLATE_HEADER: "374151",
        ACCENT_BLUE: "2563EB",
        DANGER_RED: "DC2626",
        SUCCESS_GREEN: "16A34A",
        WARNING_AMBER: "D97706",
        WHITE: "FFFFFF",
        SOFT_GREY: "F3F4F6",
        BORDER_LIGHT: "D1D5DB",
        INPUT_GREY: "F2F2F2",
        TEXT_MUTED: "6B7280"
    };

    // --- CLINICAL STYLES ---
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

    const linkStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true },
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

    // --- 01. SYSTEM OVERVIEW (CENTERED) ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.3 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STATUS: DEPLOYED / ACTIVE", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, null, null, { v: "SYSTEM ID: [INTERNAL]", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }],
        [],
        [{ v: "LOCATION MASTER REGISTRY", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Code 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Main Branch Name", s: greyInputStyle }, null, { v: "Code 4:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 4 Name", s: greyInputStyle }],
        [{ v: "Code 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 2 Name", s: greyInputStyle }, null, { v: "Code 5:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 5 Name", s: greyInputStyle }],
        [{ v: "Code 3:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 3 Name", s: greyInputStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Define branch names in the Registry above.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Assign personnel, branch, and status codes in '02_SETUP'.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "3. Codes update labels instantly. Empty status code defaults to ACTIVE.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 20 }];
    coverWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, 
        { s: { r: 7, c: 0 }, e: { r: 7, c: 5 } }, 
        { s: { r: 12, c: 0 }, e: { r: 12, c: 5 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 5 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 5 } },
        { s: { r: 16, c: 0 }, e: { r: 16, c: 5 } },
        { s: { r: 17, c: 0 }, e: { r: 17, c: 5 } }
    ];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. PERSONNEL SETUP (LOGICAL PAIRS) ---
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL REGISTER & LOGICAL MAPPING", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [null, null, null, 
            { v: "1=ACTIVE, 2=LEAVE, 3=RESIGNED, 4=TRAINING, 5=WEEKLY OFF, 6=HOLIDAY", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }, 
            null,
            { v: "BRANCH CODE (1-5 FROM OVERVIEW)", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }
        ],
        [
            { v: "ID", s: headerBlockStyle }, 
            { v: "Staff Name", s: headerBlockStyle }, 
            { v: "Operational Role", s: headerBlockStyle }, 
            { v: "Status Code", s: headerBlockStyle }, 
            { v: "Live Status", s: headerBlockStyle }, 
            { v: "Branch Code", s: headerBlockStyle }, 
            { v: "Assigned Location", s: headerBlockStyle }
        ],
        [
            { v: "1", s: centerCellStyle }, { v: "Imran Khan", s: centerCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(D6, "ACTIVE", "LEAVE", "RESIGNED", "TRAINING", "WEEKLY OFF", "HOLIDAY"), "ACTIVE")`, s: centerCellStyle }, 
            { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(F6, '01_SYSTEM_OVERVIEW'!$B$9, '01_SYSTEM_OVERVIEW'!$B$10, '01_SYSTEM_OVERVIEW'!$B$11, '01_SYSTEM_OVERVIEW'!$E$9, '01_SYSTEM_OVERVIEW'!$E$10), "N/A")`, s: centerCellStyle }
        ],
        [
            { v: "2", s: centerCellStyle }, { v: "Aditi Sharma", s: centerCellStyle }, { v: "General Manager", s: centerCellStyle }, { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(D7, "ACTIVE", "LEAVE", "RESIGNED", "TRAINING", "WEEKLY OFF", "HOLIDAY"), "ACTIVE")`, s: centerCellStyle }, 
            { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(F7, '01_SYSTEM_OVERVIEW'!$B$9, '01_SYSTEM_OVERVIEW'!$B$10, '01_SYSTEM_OVERVIEW'!$B$11, '01_SYSTEM_OVERVIEW'!$E$9, '01_SYSTEM_OVERVIEW'!$E$10), "N/A")`, s: centerCellStyle }
        ],
        [
            { v: "3", s: centerCellStyle }, { v: "Rahul V.", s: centerCellStyle }, { v: "Supervisor", s: centerCellStyle }, { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(D8, "ACTIVE", "LEAVE", "RESIGNED", "TRAINING", "WEEKLY OFF", "HOLIDAY"), "ACTIVE")`, s: centerCellStyle }, 
            { v: "2", s: greyInputStyle }, 
            { t: 'f', f: `IFERROR(CHOOSE(F8, '01_SYSTEM_OVERVIEW'!$B$9, '01_SYSTEM_OVERVIEW'!$B$10, '01_SYSTEM_OVERVIEW'!$B$11, '01_SYSTEM_OVERVIEW'!$E$9, '01_SYSTEM_OVERVIEW'!$E$10), "N/A")`, s: centerCellStyle }
        ]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 10 }, { wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 30 }];
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // --- 03. DASHBOARD (CLICKABLE DRILL-DOWN) ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL GAPS", s: centerCellStyle }, { v: "HUMAN RISK", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('99_MASTER_REGISTER'!I:I, "COMPLETED") / MAX(1, (COUNTA('99_MASTER_REGISTER'!B:B)-1)), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIFS('99_MASTER_REGISTER'!G:G, "CRITICAL", '99_MASTER_REGISTER'!I:I, "PENDING")`, l: { Target: "#'04_MANAGER_CONTROL_BOARD'!A1" }, s: linkStyle },
            { v: "STABLE", s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, sz: 14 } } },
            { t: 'f', f: `COUNTIF('02_PERSONNEL_SETUP'!E6:E25, "RESIGNED")`, s: kpiCardStyle }
        ],
        [null, { v: "↑ Click to View Details", s: { font: { sz: 8, italic: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    // --- 04. MANAGER CONTROL (TACTICAL ALIGNMENT) ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD (PENDING TASKS)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "INSTRUCTION: Click the filter arrow [v] on 'Current Status' to view 'PENDING' only.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Responsible Personnel", s: headerBlockStyle }, { v: "Current Status", s: headerBlockStyle }]
    ];
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 25 }, { wch: 25 }];
    mgrWs['!autofilter'] = { ref: "A5:D500" };
    utils.book_append_sheet(wb, mgrWs, "04_MANAGER_CONTROL_BOARD");

    // --- 05. EXECUTION (SEARCH & CHOOSE) ---
    const execData: any[][] = [
        [],
        [{ v: "DAILY TASK EXECUTION (SEARCH & CHOOSE)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "CHOOSE MODE: Click the filter arrow [v] on the Personnel header to select your name.", s: { font: { italic: true, sz: 11, bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Personnel (Filter Here)", s: headerBlockStyle }, { v: "Date Done", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }]
    ];
    const execWs = utils.aoa_to_sheet(execData);
    addNavBar(execWs);
    execWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 30 }, { wch: 20 }, { wch: 20 }];
    execWs['!autofilter'] = { ref: "A5:E500" };
    utils.book_append_sheet(wb, execWs, "05_DAILY_TASK_EXECUTION");

    // --- 06. AUDIT LOG (BLACK BOX) ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL (BLACK BOX)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Failed Requirement", s: headerBlockStyle }, { v: "Immediate Action", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 60 }, { wch: 40 }, { wch: 30 }];
    utils.book_append_sheet(wb, logWs, "06_INCIDENT_AUDIT_LOG");

    // --- PROTOCOL SHEETS ---
    item.checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
            [{ v: "INSTRUCTION: Enter completion date in Grey cell. Status updates automatically.", s: { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } } }],
            [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Assigned To", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Date Done", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
        ];
        c.tasks.forEach((t, i) => {
            const rowNum = i + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: leftCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_PERSONNEL_SETUP'!$C$6:$E$50, 3, FALSE), "VACANT")`, s: centerCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_PERSONNEL_SETUP'!$C$6:$G$50, 5, FALSE), "N/A")`, s: centerCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...centerCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: greyInputStyle },
                { t: 'f', f: `IF(G${rowNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle }
            ]);
        });
        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 20 }];
        ws['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 7 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 7 } }];
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 99. MASTER REGISTER ---
    const masterData: any[][] = [["LocationID", "Task ID", "Task", "Checklist", "AssignedPerson", "BranchName", "Type", "DateDone", "Status"]];
    item.checklists.forEach(c => {
        const sheetName = safeSheetName(c.title);
        c.tasks.forEach((t, i) => {
            const sheetRow = i + 5;
            masterData.push([
                { v: "STANDALONE", s: centerCellStyle }, 
                t.id, t.description, c.title, { t: 'f', f: `'${sheetName}'!C${sheetRow}` }, 
                { t: 'f', f: `'${sheetName}'!D${sheetRow}` }, 
                t.priority === 'High' ? 'CRITICAL' : 'STANDARD',
                { t: 'f', f: `'${sheetName}'!G${sheetRow}` },
                { t: 'f', f: `'${sheetName}'!H${sheetRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_MASTER_REGISTER");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
