
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Version 2.3 - Executive Command (Surgical Standard)
 * Institutional Standard for Operational Governance
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
    
    // --- CORPORATE CLINICAL PALETTE ---
    const COLORS = {
        PRIME_NAVY: "1F2937",
        SLATE_HEADER: "374151",
        ACCENT_BLUE: "2563EB",
        DANGER_RED: "DC2626",
        SUCCESS_GREEN: "16A34A",
        WHITE: "FFFFFF",
        SOFT_GREY: "F3F4F6",
        BORDER_LIGHT: "D1D5DB",
        INPUT_YELLOW: "FFFFE0",
        INPUT_GREY: "F2F2F2"
    };

    // --- REFINED CLINICAL STYLES ---
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

    const inputCellStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } }
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

    // --- 01. OVERVIEW (CENTERED) ---
    const coverData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL GOVERNANCE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.3 Executive Build: ${item.title}`, s: { font: { italic: true, sz: 12, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STATUS: DEPLOYED / ACTIVE", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }, null, null, { v: "SYSTEM ID: STANDALONE", s: { alignment: { horizontal: 'center' }, font: { bold: true } } }],
        [],
        [{ v: "BRANCH / LOCATION REGISTRY", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Code 1:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 1 Name", s: inputCellStyle }, null, { v: "Code 2:", s: { alignment: { horizontal: 'right' } } }, { v: "Type Branch 2 Name", s: inputCellStyle }],
        [],
        [{ v: "PROTOCOL: HIGH LIABILITY COMPLIANCE", s: { font: { bold: true, sz: 14, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "INSTRUCTIONS:", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Update personnel names and status in '02_SETUP' using Numerical Codes.", s: { font: { sz: 10 }, alignment: { horizontal: 'center' } } }],
        [{ v: "2. Staff choose their name using the filter arrow [v] in '05_EXECUTION' to hide other noise.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 20 }];
    coverWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 5 } }, { s: { r: 10, c: 0 }, e: { r: 10, c: 5 } }, { s: { r: 12, c: 0 }, e: { r: 12, c: 5 } }, { s: { r: 13, c: 0 }, e: { r: 13, c: 5 } }, { s: { r: 14, c: 0 }, e: { r: 14, c: 5 } }];
    utils.book_append_sheet(wb, coverWs, "01_SYSTEM_OVERVIEW");

    // --- 02. PERSONNEL SETUP ---
    const setupData: any[][] = [
        [],
        [{ v: "A: PERSONNEL REGISTER", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [],
        [null, null, null, { v: "1=ACTIVE, 2=LEAVE, 3=RESIGNED, 4=TRAINING, 5=WEEKLY OFF, 6=HOLIDAY", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }, { v: "1-2 = BRANCH CODE (FROM 01_OVERVIEW)", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "ID", s: headerBlockStyle }, { v: "Staff Name", s: headerBlockStyle }, { v: "Operational Role", s: headerBlockStyle }, { v: "Status Code (1-6)", s: headerBlockStyle }, { v: "Branch Code (1-2)", s: headerBlockStyle }, { v: "Live Status", s: headerBlockStyle }, { v: "Location", s: headerBlockStyle }],
        [{ v: "1", s: centerCellStyle }, { v: "Personnel Name 1", s: leftCellStyle }, { v: "Head Chef", s: leftCellStyle }, { v: "1", s: greyInputStyle }, { v: "1", s: greyInputStyle }, { t: 'f', f: `IF(D6=1,"ACTIVE",IF(D6=2,"LEAVE",IF(D6=3,"RESIGNED",IF(D6=4,"TRAINING",IF(D6=5,"WEEKLY OFF","HOLIDAY")))))`, s: centerCellStyle }, { t: 'f', f: `IFERROR(VLOOKUP(E6,{1,'01_SYSTEM_OVERVIEW'!$B$9;2,'01_SYSTEM_OVERVIEW'!$E$9},2,FALSE),"N/A")`, s: centerCellStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 10 }, { wch: 30 }, { wch: 30 }, { wch: 25 }, { wch: 25 }, { wch: 20 }, { wch: 30 }];
    utils.book_append_sheet(wb, setupWs, "02_PERSONNEL_SETUP");

    // ... (Remaining Dashboard and Execution sheets would follow same clinical alignment logic)
    
    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.3_EXECUTIVE.xlsx`);
}
