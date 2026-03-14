
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Version 2.3 - Executive Command & Control
 * Clinical Standard for Operational Governance
 * Optimized for Restaurant Owners and Staff Engagement
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();

    const safeSheetName = (title: string) => {
        const sanitized = title.replace(/[\s&/\\?*:[\]]/g, '_');
        return sanitized.substring(0, 30);
    }
    
    // --- CORPORATE CLINICAL PALETTE (V2.3 STANDARD) ---
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
                { v: "01 COVER", l: { Target: "#'01_Cover'!A1" }, s: navStyle },
                { v: "02 SETUP", l: { Target: "#'02_Setup'!A1" }, s: navStyle },
                { v: "03 DASHBOARD", l: { Target: "#'03_Dashboard'!A1" }, s: navStyle },
                { v: "04 MANAGER CONTROL", l: { Target: "#'04_Manager_Control'!A1" }, s: navStyle },
                { v: "05 MY TASKS", l: { Target: "#'05_My_Tasks_Today'!A1" }, s: navStyle },
                { v: "06 INCIDENT LOG", l: { Target: "#'06_Incident_Log'!A1" }, s: navStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    let checklists = [];
    if (type === 'pack') {
        checklists = (item as PremiumPack).checklists;
    } else {
        const checklist = item as IndividualChecklist;
        checklists = [{
            title: checklist.title,
            tasks: checklist.tasks,
            department: checklist.category,
            frequency: 'As Required',
            role: 'User',
            summary: checklist.longDescription,
            icon: checklist.icon
        }];
    }

    // --- 01. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.3 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 11, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "System Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "DEPLOYED / ACTIVE", s: centerCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Location Identifier:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name", s: inputCellStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "OPERATIONAL INSTRUCTIONS:", s: { font: { bold: true, sz: 10 } } }],
        [{ v: "1. Update staff names in '02_Setup' to map roles automatically.", s: { font: { sz: 10 } } }],
        [{ v: "2. To choose a Name, click the small Filter Arrow [v] in 'My Tasks' header.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "3. Status flips to COMPLETED automatically when you enter a date in the yellow column.", s: { font: { sz: 10 } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }];
    utils.book_append_sheet(wb, coverWs, "01_Cover");

    // --- 02. SETUP & ROLE MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Staff Name", s: headerBlockStyle }, { v: "Designation", s: headerBlockStyle }, { v: "Current Status", s: headerBlockStyle }],
        [{ v: "Imran Khan", s: inputCellStyle }, { v: "Head Chef", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Rahul", s: inputCellStyle }, { v: "Supervisor", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [{ v: "Karan", s: inputCellStyle }, { v: "Storekeeper", s: centerCellStyle }, { v: "ACTIVE", s: inputCellStyle }],
        [],
        [{ v: "SECTION B: ROLE MAPPING (DYNAMIC LINKS)", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Structural Role", s: headerBlockStyle }, { v: "Assigned Name (From Register)", s: headerBlockStyle }, { v: "Integrity Check", s: headerBlockStyle }]
    ];

    const structuralRoles = ["Head Chef", "Kitchen Manager", "Supervisor", "Storekeeper", "Safety Officer"];
    structuralRoles.forEach((role, i) => {
        const row = i + 10;
        mappingData.push([
            { v: role, s: centerCellStyle },
            { v: i === 0 ? "Imran Khan" : i === 2 ? "Rahul" : i === 3 ? "Karan" : "", s: inputCellStyle },
            { t: 'f', f: `IF(B${row}="", "VACANT", "MAPPED")`, s: centerCellStyle }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 25 }, { wch: 35 }, { wch: 25 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, mappingWs, "02_Setup");

    // --- 03. DASHBOARD (OWNER VIEW) ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL INCIDENTS", s: centerCellStyle }, { v: "OVERDUE CONTROLS", s: centerCellStyle }, { v: "VACANT ROLES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('99_Master_Register'!G:G, "COMPLETED") / COUNTA('99_Master_Register'!B:B), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIF('06_Incident_Log'!B:B, "<>") - 1`, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.DANGER_RED } } } },
            { v: 0, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { t: 'f', f: `COUNTIF('02_Setup'!C10:C25, "VACANT")`, s: kpiCardStyle }
        ],
        [],
        [{ v: "⚠ ALERT: SYSTEM RUNNING WITHIN NORMAL PARAMETERS", s: alertBarStyle }],
        [],
        [{ v: "HUMAN RISK CONCENTRATION (CRITICAL TASK LOAD)", s: { font: { bold: true } } }],
        [{ v: "Personnel", s: headerBlockStyle }, { v: "Assigned Task Volume", s: headerBlockStyle }, { v: "Risk Rating", s: headerBlockStyle }]
    ];
    dashData.push([ { v: "Imran Khan", s: centerCellStyle }, { t: 'f', f: `COUNTIF('99_Master_Register'!D:D, "Imran Khan")`, s: centerCellStyle }, { v: "STABLE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } } } } ]);
    
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, dashWs, "03_Dashboard");

    // --- 04. MANAGER CONTROL (GM VIEW) ---
    const mgrData: any[][] = [
        [],
        [{ v: "TACTICAL CONTROL BOARD (GM VIEW)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "PENDING CRITICAL TASKS (ACTION REQUIRED)", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Requirement", s: headerBlockStyle }, { v: "Responsible Personnel", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, mgrWs, "04_Manager_Control");

    // --- 05. MY TASKS TODAY (STAFF VIEW) ---
    const todayData: any[][] = [
        [],
        [{ v: "MY TASKS TODAY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "INSTRUCTION: Click the arrow [v] on the 'Personnel' header to choose your name.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "Priority", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Due", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }]
    ];
    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 20 }, { wch: 70 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, todayWs, "05_My_Tasks_Today");

    // --- 06. INCIDENT LOG ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL (BLACK BOX)", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.DANGER_RED } } } }],
        [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Failed Requirement", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Manager Sign-off", s: headerBlockStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 65 }, { wch: 35 }, { wch: 45 }, { wch: 20 }, { wch: 20 }];
    utils.book_append_sheet(wb, logWs, "06_Incident_Log");

    // --- CHECKLIST SHEETS ---
    checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
            [{ v: "INSTRUCTION: Enter completion date in DD-MM-YYYY format. Status updates automatically.", s: { font: { italic: true, sz: 9, color: { rgb: "808080" } } } }],
            ['ID', 'Operational Requirement', 'Assigned To', 'Freq', 'Type', 'Date Done', 'Status']
        ];
        c.tasks.forEach((t, i) => {
            const rowNum = i + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: leftCellStyle },
                { t: 'f', f: `IFERROR(VLOOKUP("${c.role}", '02_Setup'!$A$10:$B$25, 2, FALSE), "VACANT")`, s: centerCellStyle },
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
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 99. MASTER REGISTER (HIDDEN) ---
    const masterData: any[][] = [["Task ID", "Task", "Checklist", "AssignedPerson", "Type", "DateDone", "Status"]];
    checklists.forEach(c => {
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
                { t: 'f', f: `'${sheetName}'!G${sheetRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_Master_Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
