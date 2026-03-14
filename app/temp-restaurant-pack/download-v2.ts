
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

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
    
    // --- EXECUTIVE COMMAND PALETTE (CORPORATE CLINICAL) ---
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
        INPUT_YELLOW: "FFFFE0",
        ALERT_RED_BG: "FEF2F2"
    };

    // --- REFINED STYLES ---
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
        alignment: { vertical: 'center', horizontal: 'left' },
        border: borderThin
    };

    const dataCellStyle = { 
        font: { sz: 10, color: { rgb: "000000" }, name: 'Segoe UI' },
        alignment: { vertical: 'center' },
        border: borderThin
    };

    const centerCellStyle = {
        ...dataCellStyle,
        alignment: { vertical: 'center', horizontal: 'center' }
    };

    const inputCellStyle = {
        ...dataCellStyle,
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

    const applyApplicationUX = (ws: WorkSheet) => {
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "01 COVER", l: { Target: "#'01_Cover'!A1" }, s: navStyle },
                { v: "02 SETUP", l: { Target: "#'02_Setup'!A1" }, s: navStyle },
                { v: "03 DASHBOARD", l: { Target: "#'03_Dashboard'!A1" }, s: navStyle },
                { v: "04 MANAGER CONTROL", l: { Target: "#'04_Manager_Control'!A1" }, s: navStyle },
                { v: "05 MY TASKS", l: { Target: "#'05_My_Tasks_Today'!A1" }, s: navStyle },
                { v: "06 INCIDENT LOG", l: { Target: "#'06_Incident_Log'!A1" }, s: navStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        applyApplicationUX(ws);
    };

    // --- 01. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.18 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 11, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "System Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "DEPLOYED / ACTIVE", s: dataCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Enter Company Name", s: inputCellStyle }],
        [{ v: "Location Identifier:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Enter Branch Name", s: inputCellStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 90 }];
    utils.book_append_sheet(wb, coverWs, "01_Cover");

    // --- 02. SETUP & ROLE MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Staff Name", s: headerBlockStyle }, { v: "Designation", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: "Imran Khan", s: inputCellStyle }, { v: "Head Chef", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Rahul Sharma", s: inputCellStyle }, { v: "Supervisor", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Karan Singh", s: inputCellStyle }, { v: "Storekeeper", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Amit Roy", s: inputCellStyle }, { v: "Server", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Sita Devi", s: inputCellStyle }, { v: "Housekeeping", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [],
        [{ v: "SECTION B: ROLE MAPPING (WHO DOES WHAT?)", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Structural Role", s: headerBlockStyle }, { v: "Assigned Personnel (Type Name)", s: headerBlockStyle }, { v: "Verification", s: headerBlockStyle }]
    ];

    const roles = ["Head Chef", "Kitchen Manager", "F&B Supervisor", "Storekeeper", "Safety Officer", "Hygiene Officer"];
    roles.forEach((role, i) => {
        const row = i + 12;
        mappingData.push([
            { v: role, s: dataCellStyle },
            { v: i === 0 ? "Imran Khan" : i === 2 ? "Rahul Sharma" : "", s: inputCellStyle },
            { t: 'f', f: `IF(B${row}="", "VACANT", "VERIFIED")`, s: centerCellStyle }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 35 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "02_Setup");

    // --- 03. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL INCIDENTS", s: centerCellStyle }, { v: "OVERDUE CONTROLS", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(92/100, "0%")`, s: kpiCardStyle },
            { v: 0, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.SUCCESS_GREEN } } } },
            { v: 2, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { t: 'f', f: `COUNTIF('02_Setup'!C12:C30, "VACANT")`, s: kpiCardStyle }
        ],
        [],
        [{ v: "✔ SYSTEM ADVISORY: OPERATIONS RUNNING WITHIN STABLE PARAMETERS", s: { ...alertBarStyle, font: { ...alertBarStyle.font, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [],
        [{ v: "HUMAN RISK CONCENTRATION (CRITICAL LOAD)", s: { font: { bold: true } } }],
        [{ v: "Personnel", s: headerBlockStyle }, { v: "Critical Task Load %", s: headerBlockStyle }, { v: "Integrity Status", s: headerBlockStyle }]
    ];
    dashData.push([ { v: "Imran Khan", s: dataCellStyle }, { v: "38%", s: centerCellStyle }, { v: "STABLE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } } } } ]);
    
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }];
    utils.book_append_sheet(wb, dashWs, "03_Dashboard");

    // --- 04. MANAGER CONTROL (GM COCKPIT) ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "PENDING CRITICAL TASKS (ACTION REQUIRED)", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Responsible Name", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    mgrData.push([{ v: "KO-01", s: centerCellStyle }, { v: "Log refrigeration temps (CCP)", s: dataCellStyle }, { v: "Imran Khan", s: centerCellStyle }, { v: "PENDING", s: inputCellStyle }]);
    
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 20 }];
    utils.book_append_sheet(wb, mgrWs, "04_Manager_Control");

    // --- 05. MY TASKS TODAY (STAFF INTERFACE) ---
    const todayData: any[][] = [
        [],
        [{ v: "MY TASKS TODAY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Select Name:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Imran Khan", s: inputCellStyle }],
        [{ v: "Select Shift:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "OPENING", s: inputCellStyle }],
        [],
        [{ v: "Priority", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Due", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    
    // Formula logic for My Tasks Today starts here
    // In a real Excel environment, these would be FILTER() or INDEX/MATCH array formulas pointing to the Master Register
    todayData.push([
        { v: "🔴 CRITICAL", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } },
        { v: "Log refrigeration temps (CCP)", s: dataCellStyle },
        { v: "09:00", s: centerCellStyle },
        { v: "PENDING", s: inputCellStyle }
    ]);
    todayData.push([
        { v: "🔴 CRITICAL", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } },
        { v: "Check dry storage for pest signs", s: dataCellStyle },
        { v: "09:15", s: centerCellStyle },
        { v: "PENDING", s: inputCellStyle }
    ]);

    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 20 }, { wch: 70 }, { wch: 15 }, { wch: 20 }];
    utils.book_append_sheet(wb, todayWs, "05_My_Tasks_Today");

    // --- 06. INCIDENT LOG ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Failed Task", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 65 }, { wch: 35 }, { wch: 45 }];
    utils.book_append_sheet(wb, logWs, "06_Incident_Log");

    // --- INDIVIDUAL CHECKLISTS ---
    item.checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
            [{ v: "INSTRUCTION: Enter completion date in DD-MM-YYYY format to update status.", s: { font: { italic: true, sz: 9, color: { rgb: "808080" } } } }],
            ['ID', 'Operational Requirement', 'Assigned To (Name)', 'Freq', 'Type', 'Date Completed', 'Status']
        ];
        
        c.tasks.forEach((t, i) => {
            const rowNum = i + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: dataCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_Setup'!A12:B30, 2, FALSE), "UNASSIGNED")`, s: centerCellStyle }, // Dynamic lookup of person name
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...centerCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: inputCellStyle }, // Date Input
                { t: 'f', f: `IF(F${rowNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle } // Dynamic Status
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerBlockStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 99. MASTER REGISTER (HIDDEN ENGINE) ---
    const masterData = [["Task ID", "Task", "Assigned Name", "Shift", "Status"]];
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_Master_Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.18_DYNAMIC.xlsx`);
}
