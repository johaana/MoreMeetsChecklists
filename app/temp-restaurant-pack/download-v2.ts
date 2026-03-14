
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

type BuildMode = 'EXECUTIVE' | 'SURGICAL' | 'SHIFT' | 'ROLE' | 'DASHBOARD';

/**
 * Version 2.3 - The Multi-Build Engine
 * Institutional Standard for Operational Governance
 */
export const handleDownloadV2 = (item: PremiumPack, mode: BuildMode = 'EXECUTIVE') => {
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

    // --- 01. OVERVIEW (Centered Application Cover) ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Build Mode: ${mode} | Version 2.3 Executive`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: `System ID: ${item.title}`, s: { font: { sz: 10, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH / LOCATION REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Code 1:", s: { alignment: { horizontal: 'right' } } }, { v: "[Type Primary Location Name]", s: greyInputStyle }, null, { v: "Code 2:", s: { alignment: { horizontal: 'right' } } }, { v: "[Type Secondary Location Name]", s: greyInputStyle }],
        [],
        [{ v: "OPERATIONAL INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Update personnel names and branch codes in '02_SETUP'.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Staff click the filter arrow [v] on 'Personnel' in '05_EXECUTION' to select their name.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 20 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 5 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 5 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 5 } }, { s: { r: 11, c: 0 }, e: { r: 11, c: 5 } }];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. SETUP (Dynamic Operational Roles) ---
    const allUniqueRoles = Array.from(new Set(item.checklists.map(c => c.role)));
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL & ROLE ASSIGNMENT", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [null, null, null, { v: "1=ACTIVE, 2=LEAVE, 3=RESIGNED, 4=TRAINING, 5=WEEKLY OFF, 6=HOLIDAY", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }, null, { v: "1-2 = BRANCH CODE", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Operational Role Profile", s: headerBlockStyle }, { v: "Assigned Staff Name", s: headerBlockStyle }, { v: "Status Code", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Branch Code", s: headerBlockStyle }, { v: "Assigned Location", s: headerBlockStyle }]
    ];

    allUniqueRoles.forEach((role, idx) => {
        const rNum = idx + 6;
        setupData.push([
            { v: (idx + 1).toString(), s: centerCellStyle },
            { v: role, s: centerCellStyle },
            { v: "", s: greyInputStyle }, 
            { v: "1", s: greyInputStyle }, 
            { t: 'f', f: `IF(D${rNum}="", "ACTIVE", IFERROR(CHOOSE(D${rNum}, "ACTIVE", "LEAVE", "RESIGNED", "TRAINING", "WEEKLY OFF", "HOLIDAY"), "ACTIVE"))`, s: centerCellStyle },
            { v: "1", s: greyInputStyle },
            { t: 'f', f: `IFERROR(CHOOSE(F${rNum}, '01_SYSTEM_OVERVIEW'!$B$8, '01_SYSTEM_OVERVIEW'!$E$8), "N/A")`, s: centerCellStyle }
        ]);
    });

    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 10 }, { wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 30 }];
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // --- 05. DAILY TASK EXECUTION (Populated with Mirrors) ---
    const execData: any[][] = [
        [],
        [{ v: `${mode} TASK EXECUTION COCKPIT`, s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "CHOOSE MODE: Click the filter arrow [v] on the Personnel header to select your name.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [],
        [{ v: "ID", s: headerBlockStyle }, { v: "Requirement / Execution Step", s: headerBlockStyle }, { v: "Personnel", s: headerBlockStyle }, { v: "Date Done (DD-MM)", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Dept", s: headerBlockStyle }]
    ];

    const allTasks: any[] = [];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => allTasks.push({ ...t, role: c.role, dept: c.department }));
    });

    allTasks.forEach((t, i) => {
        const rNum = i + 6;
        execData.push([
            { v: t.id, s: centerCellStyle },
            { v: t.description, s: leftCellStyle },
            { t: 'f', f: `IFERROR(VLOOKUP("${t.role}", '02_PERSONNEL_SETUP'!$B$6:$C$100, 2, FALSE), "VACANT")`, s: centerCellStyle },
            { v: "", s: greyInputStyle },
            { t: 'f', f: `IF(D${rNum}="", "PENDING", "COMPLETED")`, s: centerCellStyle },
            { v: t.dept, s: centerCellStyle }
        ]);
    });

    const execWs = utils.aoa_to_sheet(execData);
    addNavBar(execWs);
    execWs['!cols'] = [{ wch: 12 }, { wch: 80 }, { wch: 30 }, { wch: 20 }, { wch: 20 }, { wch: 25 }];
    execWs['!autofilter'] = { ref: `A5:F${allTasks.length + 5}` };
    utils.book_append_sheet(wb, execWs, "05_DAILY_TASK_EXECUTION");

    // --- 03. DASHBOARD (Governance Health) ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE HEALTH", s: centerCellStyle }, { v: "CRITICAL GAPS", s: centerCellStyle }, { v: "VACANT PROFILES", s: centerCellStyle }],
        [
            { t: 'f', f: `TEXT(COUNTIF('05_DAILY_TASK_EXECUTION'!E:E, "COMPLETED") / MAX(1, COUNTA('05_DAILY_TASK_EXECUTION'!B:B)-1), "0%")`, s: { ...centerCellStyle, font: { sz: 24, bold: true } } },
            { t: 'f', f: `COUNTIF('05_DAILY_TASK_EXECUTION'!E:E, "PENDING")`, s: { ...centerCellStyle, font: { sz: 24, bold: true, color: { rgb: COLORS.DANGER_RED } } }, l: { Target: "#'04_MANAGER_CONTROL_BOARD'!A1" } },
            { t: 'f', f: `COUNTIF('02_PERSONNEL_SETUP'!C6:C100, "")`, s: { ...centerCellStyle, font: { sz: 24, bold: true } } }
        ]
    ];
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }];
    utils.book_append_sheet(wb, dashWs, "03_OPERATIONS_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_${mode}_V2.3.xlsx`);
}
