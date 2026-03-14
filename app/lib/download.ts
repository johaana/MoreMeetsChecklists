
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

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
        [{ v: "System Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "DEPLOYED / ACTIVE", s: dataCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Location Identifier:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name", s: inputCellStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 90 }];
    utils.book_append_sheet(wb, coverWs, "01_Cover");

    // --- 02. SETUP ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Staff Name", s: headerBlockStyle }, { v: "Position", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }, { v: "Verification", s: headerBlockStyle }]
    ];
    for(let i=0; i<20; i++) {
        const row = i + 4;
        mappingData.push([
            { v: "", s: inputCellStyle }, { v: "", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle },
            { t: 'f', f: `IF(A${row}="", "", "VERIFIED")`, s: centerCellStyle }
        ]);
    }
    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 25 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "02_Setup");

    // --- 03. DASHBOARD (OWNER VIEW) ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL INCIDENTS", s: centerCellStyle }, { v: "OVERDUE CONTROLS", s: centerCellStyle }, { v: "ACTIVE STAFF", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIFS('99_Master_Register'!G:G, "COMPLETED") / COUNTIF('99_Master_Register'!G:G, "<>"), "0%")`, s: kpiCardStyle },
            { t: 'f', f: `COUNTIFS('99_Master_Register'!G:G, "PENDING", '99_Master_Register'!E:E, "CRITICAL")`, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.DANGER_RED } } } },
            { v: 0, s: { ...kpiCardStyle, font: { ...kpiCardStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { v: 10, s: kpiCardStyle }
        ],
        [],
        [{ v: "⚠ ALERT: SYSTEM RUNNING WITHIN NORMAL PARAMETERS", s: alertBarStyle }],
        [],
        [{ v: "HUMAN RISK CONCENTRATION", s: { font: { bold: true } } }],
        [{ v: "Staff Member", s: headerBlockStyle }, { v: "Critical Load %", s: headerBlockStyle }, { v: "Risk Rating", s: headerBlockStyle }]
    ];
    dashData.push([ { v: "Assign Staff in Setup", s: dataCellStyle }, { v: "0%", s: centerCellStyle }, { v: "STABLE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } } } } ]);
    
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 35 }];
    utils.book_append_sheet(wb, dashWs, "03_Dashboard");

    // --- 04. MANAGER CONTROL (GM VIEW) ---
    const mgrData: any[][] = [
        [],
        [{ v: "OPERATIONAL CONTROL BOARD", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [{ v: "PENDING CRITICAL TASKS", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [{ v: "Task ID", s: headerBlockStyle }, { v: "Requirement", s: headerBlockStyle }, { v: "Responsible", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
    const mgrWs = utils.aoa_to_sheet(mgrData);
    addNavBar(mgrWs);
    mgrWs['!cols'] = [{ wch: 15 }, { wch: 65 }, { wch: 25 }, { wch: 15 }];
    utils.book_append_sheet(wb, mgrWs, "04_Manager_Control");

    // --- 05. MY TASKS TODAY (STAFF VIEW) ---
    const todayData: any[][] = [
        [],
        [{ v: "MY TASKS TODAY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Select Name:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Enter in Setup", s: inputCellStyle }],
        [{ v: "Select Shift:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "OPENING", s: inputCellStyle }],
        [],
        [{ v: "Priority", s: headerBlockStyle }, { v: "Execution Step", s: headerBlockStyle }, { v: "Due", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }]
    ];
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

    // --- CHECKLISTS ---
    checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
            [],
            ['ID', 'Operational Requirement', 'Assigned To', 'Freq', 'Type', 'Date Done', 'Status']
        ];
        c.tasks.forEach((t, i) => {
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: dataCellStyle },
                { v: t.role || c.role, s: centerCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...centerCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: inputCellStyle },
                { v: "PENDING", s: centerCellStyle }
            ]);
        });
        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerBlockStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // Hide Master Register
    const masterData = [["Task ID", "Task", "Checklist", "AssignedPerson", "Type", "DateDone", "Status"]];
    checklists.forEach(c => {
        c.tasks.forEach(t => {
            masterData.push([t.id, t.description, c.title, t.role || c.role, t.priority === 'High' ? 'CRITICAL' : 'STANDARD', "", "PENDING"]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "99_Master_Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
