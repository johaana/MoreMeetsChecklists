
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.3 - Executive Command & Control (Final Production Build)
 * Clinical Standard for Operational Governance
 * Optimized for Restaurant Owners - X-Selection Matrix, Centered Alignments, Persona Tiers
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
    
    // --- CORPORATE CLINICAL PALETTE (V2.3) ---
    const COLORS = {
        PRIME_NAVY: "1F2937",
        SLATE_HEADER: "374151",
        ACCENT_BLUE: "2563EB",
        DANGER_RED: "DC2626",
        SUCCESS_GREEN: "16A34A",
        WARNING_AMBER: "F59E0B",
        WHITE: "FFFFFF",
        SOFT_GREY: "F3F4F6",
        BORDER_LIGHT: "D1D5DB",
        INPUT_YELLOW: "FFFFE0",
        ALERT_RED_BG: "FEF2F2",
        INTERACTION_GREY: "F1F5F9"
    };

    // --- CLINICAL STYLES ---
    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } }
    };

    const navStyle = {
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.PRIME_NAVY } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderThin
    };

    const headerBlockStyle = {
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 10, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.SLATE_HEADER } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const leftCellStyle = { 
        font: { sz: 10, color: { rgb: "000000" }, name: 'Segoe UI' },
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderThin
    };

    const centerCellStyle = {
        font: { sz: 10, color: { rgb: "000000" }, name: 'Segoe UI' },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const inputCellStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } }
    };

    const kpiCardStyle = {
        font: { bold: true, color: { rgb: COLORS.PRIME_NAVY }, sz: 22, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.SOFT_GREY } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const alertBarStyle = {
        font: { bold: true, color: { rgb: COLORS.DANGER_RED }, sz: 11, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.ALERT_RED_BG } },
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

    // --- 01. SYSTEM OVERVIEW (CENTERED COMMAND) ---
    const coverData = [
        [], [],
        [{ v: "", s: {} }, { v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "", s: {} }, { v: `Executive Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "", s: {} }, { v: "SYSTEM STATUS:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "DEPLOYED / ACTIVE", s: centerCellStyle }],
        [{ v: "", s: {} }, { v: "LOCATION ID:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "MUM-CENTRAL-01", s: inputCellStyle }],
        [{ v: "", s: {} }, { v: "ORGANIZATION:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "[Enter Company Name]", s: inputCellStyle }],
        [],
        [{ v: "", s: {} }, { v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "", s: {} }, { v: "EXECUTIVE INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "", s: {} }, { v: "1. Update personnel in '02_PERSONNEL_SETUP' using the X-Selection Grid.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "", s: {} }, { v: "2. Staff filter their own tasks in '05_DAILY_TASK_EXECUTION' by typing 'X' in the selector.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "", s: {} }, { v: "3. Enter completion date in Yellow cells. Status and Color update automatically.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 10 }, { wch: 60 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }];
    coverWs['!merges'] = [
        { s: { r: 2, c: 1 }, e: { r: 2, c: 4 } }, 
        { s: { r: 3, c: 1 }, e: { r: 3, c: 4 } }, 
        { s: { r: 9, c: 1 }, e: { r: 9, c: 4 } }, 
        { s: { r: 11, c: 1 }, e: { r: 11, c: 4 } },
        { s: { r: 12, c: 1 }, e: { r: 12, c: 4 } },
        { s: { r: 13, c: 1 }, e: { r: 13, c: 4 } },
        { s: { r: 14, c: 1 }, e: { r: 14, c: 4 } }
    ];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. PERSONNEL SETUP (X-SELECTION GRID) ---
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL REGISTER & STATUS SELECTION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "INSTRUCTION: TYPE 'X' IN THE GREY BOX TO CHOOSE THE STATUS FOR EACH EMPLOYEE.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "Staff Name", s: headerBlockStyle }, { v: "Role Designation", s: headerBlockStyle }, { v: "[X] ACTIVE", s: headerBlockStyle }, { v: "[X] ON LEAVE", s: headerBlockStyle }, { v: "[X] RESIGNED", s: headerBlockStyle }, { v: "System Status", s: headerBlockStyle }],
        [{ v: "Imran Khan", s: inputCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "X", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { t: 'f', f: `IF(C6="X","ACTIVE",IF(D6="X","ON LEAVE",IF(E6="X","RESIGNED","VACANT")))`, s: centerCellStyle }],
        [{ v: "Rahul Sharma", s: inputCellStyle }, { v: "Supervisor", s: centerCellStyle }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "X", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { t: 'f', f: `IF(C7="X","ACTIVE",IF(D7="X","ON LEAVE",IF(E7="X","RESIGNED","VACANT")))`, s: centerCellStyle }],
        [{ v: "Aditi", s: inputCellStyle }, { v: "Duty Manager", s: centerCellStyle }, { v: "X", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { v: "", s: { ...centerCellStyle, fill: { fgColor: { rgb: COLORS.INTERACTION_GREY } } } }, { t: 'f', f: `IF(C8="X","ACTIVE",IF(D8="X","ON LEAVE",IF(E8="X","RESIGNED","VACANT")))`, s: centerCellStyle }],
        [],
        [{ v: "B: ROLE MAPPING (AUTOMATED ENGINE)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Operational Role", s: headerBlockStyle }, { v: "Assigned Person", s: headerBlockStyle }, { v: "Integrity Status", s: headerBlockStyle }]
    ];

    const structuralRoles = ["Head Chef", "Supervisor", "Duty Manager", "Kitchen Porter", "Floor Manager"];
    structuralRoles.forEach((role, i) => {
        const row = i + 12;
        setupData.push([
            { v: role, s: centerCellStyle },
            { v: i === 0 ? "Imran Khan" : i === 1 ? "Rahul Sharma" : i === 2 ? "Aditi" : "", s: inputCellStyle },
            { t: 'f', f: `IF(B${row}="", "VACANT", "MAPPED")`, s: centerCellStyle }
        ]);
    });

    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 20 }];
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // --- 03. OPERATIONS DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL INCIDENTS", s: centerCellStyle }, { v: "OVERDUE CONTROLS", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('99_MASTER_REGISTER'!G:G, "COMPLETED") / (COUNTA('99_MASTER_REGISTER'!B:B)-1), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIF('06_INCIDENT_AUDIT_LOG'!B:B, "<>") - 1`, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.DANGER_RED } } } },
            { v: 0, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { t: 'f', f: `COUNTIF('02_PERSONNEL_SETUP'!C12:C25, "VACANT")`, s: kpiCardStyle }
        ],
        [],
        [{ v: "⚠ ALERT: SYSTEM RUNNING WITHIN NORMAL PARAMETERS", s: alertBarStyle }],
        [],
        [{ v: "HUMAN RISK CONCENTRATION (CRITICAL LOAD)", s: { font: { bold: true, sz: 11 } } }],
        [{ v: "Personnel", s: headerBlockStyle }, { v: "Assigned Tasks", s: headerBlockStyle }, { v: "Risk Rating", s: headerBlockStyle }]
    ];
    dashData.push([ { v: "Imran Khan", s: centerCellStyle }, { t: 'f', f: `COUNTIF('99_MASTER_REGISTER'!D:D, "Imran Khan")`, s: centerCellStyle }, { v: "STABLE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } } } } ]);
    
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 20 }];
    dashWs['!merges'] = [{ s: { r: 4, c: 0 }, e: { r: 4, c: 3 } }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    // --- 04. MANAGER CONTROL BOARD (TACTICAL COCKPIT) ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD (GM VIEW)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "INSTRUCTION: USE THE FILTER ARROW [v] ON THE STATUS HEADER TO SEE ONLY 'PENDING' TASKS.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Responsible Person", s: headerBlockStyle }, { v: "Status (Filter Today)", s: headerBlockStyle }]
    ];
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 75 }, { wch: 30 }, { wch: 30 }];
    mgrWs['!autofilter'] = { ref: "D5:D500" };
    utils.book_append_sheet(wb, mgrWs, "04_MANAGER_CONTROL_BOARD");

    // --- 05. DAILY TASK EXECUTION (STAFF SELECTOR) ---
    const todayData: any[][] = [
        [],
        [{ v: "MY TASKS TODAY (STAFF VIEW)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "CHOOSE YOUR NAME BY CLICKING THE FILTER ARROW [v] BELOW:", s: { font: { italic: true, sz: 11, bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Execution Step (Read Carefully)", s: headerBlockStyle }, { v: "Personnel (Filter Your Name)", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 40 }, { wch: 15 }, { wch: 20 }];
    todayWs['!autofilter'] = { ref: "C5:C500" };
    utils.book_append_sheet(wb, todayWs, "05_DAILY_TASK_EXECUTION");

    // --- 06. INCIDENT AUDIT LOG (BLACK BOX) ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL (BLACK BOX)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Requirement Failed", s: headerBlockStyle }, { v: "Responsible Person", s: headerBlockStyle }, { v: "Immediate Action Taken", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 75 }, { wch: 35 }, { wch: 45 }, { wch: 20 }];
    utils.book_append_sheet(wb, logWs, "06_INCIDENT_AUDIT_LOG");

    // --- CHECKLIST PROTOCOLS ---
    item.checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
            [{ v: "INSTRUCTION: Enter completion date in Yellow cell. Status calculates automatically.", s: { font: { italic: true, sz: 9, color: "808080" } } }],
            [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Assigned To", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Date Done", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
        ];
        c.tasks.forEach((t, i) => {
            const rowNum = i + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: leftCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_PERSONNEL_SETUP'!$A$12:$B$25, 2, FALSE), "VACANT")`, s: centerCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...centerCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: inputCellStyle },
                { t: 'f', f: `IF(F${rowNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle }
            ]);
        });
        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 12 }, { wch: 75 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }];
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 99. MASTER REGISTER (ENGINE) ---
    const masterData: any[][] = [["Task ID", "Task", "Checklist", "AssignedPerson", "Type", "DateDone", "Status"]];
    item.checklists.forEach(c => {
        const sheetName = safeSheetName(c.title);
        c.tasks.forEach((t, i) => {
            const sheetRow = i + 5;
            masterData.push([
                t.id, t.description, c.title, { t: 'f', f: `'${sheetName}'!C${sheetRow}` }, 
                t.priority === 'High' ? 'CRITICAL' : 'STANDARD',
                { t: 'f', f: `'${sheetName}'!F${sheetRow}` },
                { t: 'f', f: `'${sheetName}'!G${sheetRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_MASTER_REGISTER");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
