
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * Version 2.3 - Executive Command & Control
 * Clinical Standard for Operational Governance
 * Optimized for Restaurant Owners - Dynamic Roster, Shift Filtering & Multi-Location Scaling
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
        ALERT_RED_BG: "FEF2F2"
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

    // --- 01. SYSTEM OVERVIEW ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.3 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 11, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM STATUS:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "DEPLOYED / ACTIVE", s: centerCellStyle }],
        [{ v: "LOCATION ID:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "MUM-CENTRAL-01", s: inputCellStyle }],
        [{ v: "ORGANIZATION:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "[Enter Company Name]", s: inputCellStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "EXECUTIVE INSTRUCTIONS:", s: { font: { bold: true, sz: 10 } } }],
        [{ v: "1. Update names in '02_PERSONNEL_SETUP' to map staff to roles.", s: { font: { sz: 10 } } }],
        [{ v: "2. Staff use '05_DAILY_TASK_EXECUTION' to filter for their name and shift.", s: { font: { sz: 10 } } }],
        [{ v: "3. Completed tasks flip to GREEN automatically when a date is entered.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "4. Any missed Critical task automatically escalates to '06_INCIDENT_AUDIT_LOG'.", s: { font: { sz: 10 } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 30 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. PERSONNEL SETUP ---
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Staff Name", s: headerBlockStyle }, { v: "Role Designation", s: headerBlockStyle }, { v: "Current Status", s: headerBlockStyle }],
        [{ v: "Imran Khan", s: inputCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Rahul Sharma", s: inputCellStyle }, { v: "F&B Supervisor", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Karan Singh", s: inputCellStyle }, { v: "Storekeeper", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Aditi", s: inputCellStyle }, { v: "Duty Manager", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [],
        [{ v: "B: STRUCTURAL ROLE MAPPING", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Operational Role", s: headerBlockStyle }, { v: "Assigned Person", s: headerBlockStyle }, { v: "Integrity Status", s: headerBlockStyle }]
    ];

    const roles = ["Head Chef", "F&B Supervisor", "Storekeeper", "Duty Manager", "Kitchen Porter", "Floor Manager"];
    roles.forEach((role, i) => {
        const row = i + 11;
        setupData.push([
            { v: role, s: centerCellStyle },
            { v: i === 0 ? "Imran Khan" : i === 1 ? "Rahul Sharma" : i === 2 ? "Karan Singh" : i === 3 ? "Aditi" : "", s: inputCellStyle },
            { t: 'f', f: `IF(B${row}="", "VACANT", "MAPPED")`, s: centerCellStyle }
        ]);
    });

    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 35 }, { wch: 25 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
    setupWs['!autofit'] = true;
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // --- 03. OPERATIONS DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL INCIDENTS", s: centerCellStyle }, { v: "OVERDUE CONTROLS", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('99_MASTER_REGISTER'!G:G, "COMPLETED") / COUNTA('99_MASTER_REGISTER'!B:B), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIF('06_INCIDENT_AUDIT_LOG'!B:B, "<>") - 1`, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.DANGER_RED } } } },
            { v: 0, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { t: 'f', f: `COUNTIF('02_PERSONNEL_SETUP'!C11:C25, "VACANT")`, s: kpiCardStyle }
        ],
        [],
        [{ v: "⚠ ALERT: SYSTEM RUNNING WITHIN NORMAL PARAMETERS", s: alertBarStyle }],
        [],
        [{ v: "HUMAN RISK CONCENTRATION (CRITICAL LOAD)", s: { font: { bold: true } } }],
        [{ v: "Personnel", s: headerBlockStyle }, { v: "Assigned Tasks", s: headerBlockStyle }, { v: "Risk Rating", s: headerBlockStyle }]
    ];
    dashData.push([ { v: "Imran Khan", s: centerCellStyle }, { t: 'f', f: `COUNTIF('99_MASTER_REGISTER'!D:D, "Imran Khan")`, s: centerCellStyle }, { v: "STABLE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } } } } ]);
    
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    // --- 04. MANAGER CONTROL BOARD ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD (GM VIEW)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "INSTRUCTION: Filter 'Status' to see 'PENDING' tasks requiring intervention.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Responsible Personnel", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }];
    mgrWs['!autofilter'] = { ref: "A5:D100" };
    utils.book_append_sheet(wb, mgrWs, "04_MANAGER_CONTROL_BOARD");

    // --- 05. DAILY TASK EXECUTION ---
    const todayData: any[][] = [
        [],
        [{ v: "MY TASKS TODAY (ZERO-NOISE)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "INSTRUCTION: Click the filter arrow [v] on the 'Personnel' header to select your name.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "Priority", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Shift", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }]
    ];
    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 20 }, { wch: 70 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }];
    todayWs['!autofilter'] = { ref: "A5:E100" };
    utils.book_append_sheet(wb, todayWs, "05_DAILY_TASK_EXECUTION");

    // --- 06. INCIDENT AUDIT LOG ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL (BLACK BOX)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Requirement Failed", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 65 }, { wch: 35 }, { wch: 45 }, { wch: 20 }, { wch: 20 }];
    logWs['!autofilter'] = { ref: "A4:D500" };
    utils.book_append_sheet(wb, logWs, "06_INCIDENT_AUDIT_LOG");

    // --- 07. IMPLEMENTATION GUIDE ---
    const guideData: any[][] = [
        [],
        [{ v: "SYSTEM IMPLEMENTATION GUIDE", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "STEP 1: SETUP PERSONNEL", s: { font: { bold: true } } }, { v: "Go to 02_PERSONNEL_SETUP and enter your current staff list and status." }],
        [{ v: "STEP 2: MAP ROLES", s: { font: { bold: true } } }, { v: "Assign each Operational Role to a specific person from your list." }],
        [{ v: "STEP 3: DAILY DISPATCH", s: { font: { bold: true } } }, { v: "Staff select their name in 05_DAILY_TASK_EXECUTION to see their duties." }],
        [{ v: "STEP 4: MANAGER AUDIT", s: { font: { bold: true } } }, { v: "GM reviews the 03_DASHBOARD and 04_CONTROL daily to ensure compliance." }],
        [],
        [{ v: "BEST PRACTICE:", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }, { v: "Print the Incident Log weekly and file it physically for health inspectors." }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    addNavBar(guideWs);
    guideWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
    utils.book_append_sheet(wb, guideWs, "07_IMPLEMENTATION_GUIDE");

    // --- CHECKLIST PROTOCOLS ---
    item.checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
            [{ v: "INSTRUCTION: Enter completion date in DD-MM-YYYY format. Status flips automatically.", s: { font: { italic: true, sz: 9, color: "808080" } } }],
            ['ID', 'Operational Requirement', 'Assigned To', 'Freq', 'Type', 'Date Done', 'Status']
        ];
        c.tasks.forEach((t, i) => {
            const rowNum = i + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: leftCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_PERSONNEL_SETUP'!$A$11:$B$25, 2, FALSE), "VACANT")`, s: centerCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...centerCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: inputCellStyle },
                { t: 'f', f: `IF(F${rowNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle }
            ]);
        });
        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerBlockStyle; });
        ws['!autofilter'] = { ref: `A4:G${c.tasks.length + 4}` };
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 99. MASTER REGISTER (HIDDEN) ---
    const masterData: any[][] = [["Task ID", "Task", "Checklist", "AssignedPerson", "Type", "DateDone", "Status", "Location", "Shift"]];
    item.checklists.forEach(c => {
        const sheetName = safeSheetName(c.title);
        c.tasks.forEach((t, i) => {
            const sheetRow = i + 5;
            masterData.push([
                t.id, 
                t.description, 
                c.title, 
                { t: 'f', f: `'${sheetName}'!C${sheetRow}` }, 
                t.priority === 'High' ? 'CRITICAL' : 'STANDARD',
                { t: 'f', f: `'${sheetName}'!F${sheetRow}` },
                { t: 'f', f: `'${sheetName}'!G${sheetRow}` },
                "MUM-CENTRAL-01",
                "MORNING"
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_MASTER_REGISTER");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
