
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
    
    // --- EXECUTIVE PALETTE (SWISS PRIVATE BANK / AVIATION CONTROL) ---
    const COLORS = {
        CHARCOAL_BG: "1A1A1B",
        DEEP_SLATE: "2D2E2E",
        GOLD_ACCENT: "D4AF37",
        WHITE: "FFFFFF",
        GRAY_TEXT: "808080",
        INPUT_YELLOW: "FFFFE0",
        SUCCESS_GREEN: "2ECC71",
        WARNING_AMBER: "F39C12",
        CRITICAL_RED: "E74C3C",
        BORDER: "333333"
    };

    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const navStyle = {
        font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 9, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.DEEP_SLATE } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderThin
    };

    const titleStyle = {
        font: { sz: 24, bold: true, color: { rgb: COLORS.GOLD_ACCENT }, name: 'Segoe UI' },
        alignment: { horizontal: 'center' }
    };

    const headerStyle = { 
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 10, name: 'Segoe UI' }, 
        fill: { fgColor: { rgb: COLORS.DEEP_SLATE } }, 
        alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
        border: borderThin
    };

    const inputCellStyle = {
        fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } },
        border: borderThin,
        alignment: { vertical: 'center' },
        font: { sz: 10, name: 'Segoe UI' }
    };

    const dataCellStyle = { 
        font: { sz: 10, color: { rgb: COLORS.WHITE }, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.CHARCOAL_BG } },
        alignment: { vertical: 'center' },
        border: borderThin
    };

    const kpiBoxStyle = {
        font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 14, name: 'Segoe UI' },
        fill: { fgColor: { rgb: COLORS.DEEP_SLATE } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: {
            top: { style: 'medium', color: { rgb: COLORS.GOLD_ACCENT } },
            bottom: { style: 'medium', color: { rgb: COLORS.GOLD_ACCENT } },
            left: { style: 'medium', color: { rgb: COLORS.GOLD_ACCENT } },
            right: { style: 'medium', color: { rgb: COLORS.GOLD_ACCENT } }
        }
    };

    const applyApplicationUX = (ws: WorkSheet) => {
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "01 COVER", l: { Target: "#'01_Cover'!A1" }, s: navStyle },
                { v: "02 SETUP", l: { Target: "#'02_Setup_Mapping'!A1" }, s: navStyle },
                { v: "03 DASHBOARD", l: { Target: "#'03_Dashboard'!A1" }, s: navStyle },
                { v: "04 MY TASKS", l: { Target: "#'04_My_Tasks_Today'!A1" }, s: navStyle },
                { v: "05 INCIDENT LOG", l: { Target: "#'05_Incident_Log'!A1" }, s: navStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        applyApplicationUX(ws);
    };

    const checklists = item.checklists;
    const uniqueRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 01. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: titleStyle }],
        [{ v: `Industry Build: ${item.title} | Version 2.2 Surgical`, s: { font: { italic: true, sz: 11, color: { rgb: COLORS.GRAY_TEXT }, name: 'Segoe UI' }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Operational Integrity Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE }, name: 'Segoe UI' } } }, { v: "BRANCH ISOLATION ACTIVE", s: inputCellStyle }],
        [{ v: "Licensed Organization:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE }, name: 'Segoe UI' } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Unit Identification:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE }, name: 'Segoe UI' } } }, { v: "Type Branch Name/ID", s: inputCellStyle }],
        [],
        [{ v: "SYSTEM OVERVIEW:", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.GOLD_ACCENT }, name: 'Segoe UI' } } }],
        [{ v: `Total Active Control Points: ${checklists.reduce((acc, c) => acc + c.tasks.length, 0)}`, s: { font: { color: { rgb: COLORS.WHITE }, name: 'Segoe UI' } } }],
        [{ v: "Governance Protocol: HIGH LIABILITY STANDARDS", s: { font: { color: { rgb: COLORS.WHITE }, name: 'Segoe UI' } } }],
        [],
        [{ v: "SYSTEM STATUS: SECURED", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN }, name: 'Segoe UI' }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 90 }];
    utils.book_append_sheet(wb, coverWs, "01_Cover");

    // --- 02. SETUP & MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 11, name: 'Segoe UI' } } }],
        [{ v: "Staff Name (Type Once)", s: headerStyle }, { v: "Primary Position", s: headerStyle }, { v: "Status (ACTIVE/LEAVE/RESIGNED)", s: headerStyle }, { v: "System Health", s: headerStyle }]
    ];
    for(let i=0; i<25; i++) {
        const row = i + 4;
        mappingData.push([
            { v: "", s: inputCellStyle }, 
            { v: "", s: dataCellStyle }, 
            { v: "ACTIVE", s: inputCellStyle }, 
            { t: 'f', f: `IF(A${row}="", "", IF(C${row}="RESIGNED", "⚠️ RE-ASSIGN ROLES", "OK"))`, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } }
        ]);
    }
    
    mappingData.push([], [{ v: "SECTION B: ROLE-TO-NAME MAPPING", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT }, name: 'Segoe UI' } } }], [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Staff Availability", s: headerStyle }]);
    uniqueRoles.forEach((r, idx) => {
        const row = 33 + checklists.length + idx; 
        mappingData.push([
            { v: r, s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: "", s: inputCellStyle }, 
            { t: 'f', f: `IF(B${row}="", "VACANT", IFERROR(INDEX(C4:C28, MATCH(B${row}, A4:A28, 0)), "NOT IN REGISTER"))`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 35 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "02_Setup_Mapping");

    // --- 03. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [
            { v: "GOVERNANCE HEALTH", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }, 
            { v: "CRITICAL INCIDENTS", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }, 
            { v: "OVERDUE CONTROLS", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } },
            { v: "VACANT ROLES", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }
        ],
        [
            { t: 'f', f: `TEXT(COUNTIFS('06_Master_Register'!E:E, "<>") / MAX(1, COUNT('06_Master_Register'!A:A)), "0%")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTIFS('06_Master_Register'!F:F, "CRITICAL", '06_Master_Register'!E:E, "FAILED")`, s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.CRITICAL_RED }, sz: 14, bold: true } } },
            { t: 'f', f: `COUNTIFS('06_Master_Register'!E:E, "")`, s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.WARNING_AMBER }, sz: 14, bold: true } } },
            { t: 'f', f: `COUNTIF('02_Setup_Mapping'!C33:C60, "VACANT")`, s: kpiBoxStyle }
        ],
        [],
        [{ v: "HUMAN RISK CONCENTRATION (CRITICAL LOAD)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT }, name: 'Segoe UI' } } }],
        [{ v: "Staff Member", s: headerStyle }, { v: "Critical Task Load", s: headerStyle }, { v: "Vulnerability Status", s: headerStyle }]
    ];
    for(let i=0; i<5; i++) {
        const row = i + 7;
        dashData.push([
            { t: 'f', f: `'02_Setup_Mapping'!A${i+4}`, s: dataCellStyle },
            { t: 'f', f: `COUNTIFS('06_Master_Register'!D:D, A${row}, '06_Master_Register'!F:F, "CRITICAL")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
            { t: 'f', f: `IF(B${row}>5, "⚠ HIGH CONCENTRATION", "STABLE")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }
        ]);
    }

    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 35 }, { wch: 25 }];
    utils.book_append_sheet(wb, dashWs, "03_Dashboard");

    // --- 04. MY TASKS TODAY ---
    const todayData: any[][] = [
        [],
        [{ v: "INDIVIDUAL OPERATIONAL DISPATCH", s: titleStyle }],
        [{ v: "Select Name:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }, { v: "Staff Name Here", s: inputCellStyle }],
        [],
        [{ v: "Task ID", s: headerStyle }, { v: "Required Task", s: headerStyle }, { v: "Due Time", s: headerStyle }, { v: "Status", s: headerStyle }]
    ];
    for(let i=0; i<10; i++) {
        todayData.push([{ v: "ID-001", s: dataCellStyle }, { v: "Example Task Description", s: dataCellStyle }, { v: "09:00", s: { ...dataCellStyle, alignment: { horizontal: 'center' } } }, { v: "PENDING", s: { ...dataCellStyle, font: { bold: true } } }]);
    }
    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 15 }, { wch: 65 }, { wch: 15 }, { wch: 25 }];
    utils.book_append_sheet(wb, todayWs, "04_My_Tasks_Today");

    // --- 05. INCIDENT LOG ---
    const logData: any[][] = [
        [],
        [{ v: "CRITICAL INCIDENT AUDIT TRAIL", s: titleStyle }],
        [],
        [{ v: "Date", s: headerStyle }, { v: "Failed Critical Task", s: headerStyle }, { v: "Responsible Role", s: headerStyle }, { v: "Manager Sign-off", s: headerStyle }]
    ];
    const logWs = utils.aoa_to_sheet(logData);
    addNavBar(logWs);
    logWs['!cols'] = [{ wch: 20 }, { wch: 65 }, { wch: 35 }, { wch: 45 }];
    utils.book_append_sheet(wb, logWs, "05_Incident_Log");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c) => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: titleStyle }],
            [],
            ['ID', 'Task Description', 'How to Coach (Management Tips)', 'Assigned To', 'Freq', 'Type', 'Date Done', 'Status', 'Consequence']
        ];

        c.tasks.forEach((t, tIdx) => {
            const rowNum = tIdx + 5;
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 33 + checklists.length + roleIdx;

            wsData.push([
                { v: t.id, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Inspect personally. Ensure zero debris.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.GRAY_TEXT } }, wrapText: true } },
                { t: 'f', f: `'02_Setup_Mapping'!B${roleMapRow}`, s: { ...dataCellStyle, font: { bold: true } } }, 
                { v: (t.frequency || c.frequency), s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
                { v: t.priority === 'High' ? "CRITICAL" : "NORMAL", s: { ...dataCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.GOLD_ACCENT : COLORS.WHITE } } } },
                { v: "", s: inputCellStyle }, 
                { t: 'f', f: `IF(G${rowNum}="", "PENDING", "COMPLETED")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } },
                { v: t.consequence, s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.GRAY_TEXT } }, wrapText: true } }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }];
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 110 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, { wch: 65 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- 06. MASTER REGISTER (HIDDEN ENGINE) ---
    const masterData = [["Task ID", "Task", "Checklist", "AssignedPerson", "DateDone", "Type"]];
    checklists.forEach((c) => {
        c.tasks.forEach((t, tIdx) => {
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 33 + checklists.length + roleIdx;
            masterData.push([
                t.id, t.description, c.title, 
                { t: 'f', f: `'02_Setup_Mapping'!B${roleMapRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!G${tIdx + 5}` },
                t.priority === 'High' ? "CRITICAL" : "NORMAL"
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "06_Master_Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.2_SURGICAL.xlsx`);
}
