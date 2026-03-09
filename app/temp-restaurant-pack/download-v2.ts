
'use client';

import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import type { PremiumPack, Checklist as PackChecklist } from "@/lib/premium-packs";

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
    
    // --- EXECUTIVE PALETTE ---
    const COLORS = {
        PRIMARY_NAVY: "0F2B46",
        GREEN: "2E7D32",
        RED: "C62828",
        BORDER: "D1D5DB",
        INPUT_YELLOW: "FFFFE0",
        WHITE: "FFFFFF",
        GRAY_TEXT: "4D4D4D",
        SUB_NAVY: "1F4E79"
    };

    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const headerStyle = { 
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 10 }, 
        fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, 
        alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
        border: borderThin
    };

    const inputCellStyle = {
        fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } },
        border: borderThin,
        alignment: { vertical: 'center' },
        font: { sz: 10 }
    };

    const dataCellStyle = { 
        font: { sz: 10, color: { rgb: COLORS.GRAY_TEXT } },
        alignment: { vertical: 'center' },
        border: borderThin
    };

    const centerCellStyle = {
        ...dataCellStyle,
        alignment: { vertical: 'center', horizontal: 'center' }
    };

    const kpiBoxStyle = {
        font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 14 },
        fill: { fgColor: { rgb: COLORS.WHITE } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: {
            top: { style: 'medium', color: { rgb: COLORS.PRIMARY_NAVY } },
            bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_NAVY } },
            left: { style: 'medium', color: { rgb: COLORS.PRIMARY_NAVY } },
            right: { style: 'medium', color: { rgb: COLORS.PRIMARY_NAVY } }
        }
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "HOME", l: { Target: "#'1. Cover Page'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "MAPPING", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        ws['!views'] = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
    };

    const checklists = item.checklists;
    const uniqueRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 1. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE ENGINE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Build Version 2.12 (Executive)`, s: { font: { italic: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Organization Entity", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "", s: inputCellStyle }],
        [{ v: "Unit Name / ID", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "", s: inputCellStyle }],
        [{ v: "Portfolio Mode", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Single Unit", s: { ...inputCellStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "GOVERNANCE STATUS: ACTIVE", s: { font: { bold: true, color: { rgb: COLORS.GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 30 }, { wch: 50 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 11 } } }],
        [{ v: "Name", s: headerStyle }, { v: "Designation", s: headerStyle }, { v: "Current Status", s: headerStyle }]
    ];
    for(let i=0; i<15; i++) mappingData.push([{ v: "", s: inputCellStyle }, { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "F9FAFB" } } } }, { v: "Active", s: centerCellStyle }]);
    
    mappingData.push([], [{ v: "SECTION B: MODULE CONFIGURATION (SCOPE TOGGLE)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Applicability Status", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "Applicable", s: { ...inputCellStyle, alignment: { horizontal: 'center' } } }]));

    mappingData.push([], [{ v: "SECTION C: ROLE ALLOCATION", s: { font: { bold: true, sz: 11 } } }], [{ v: "Role", s: headerStyle }, { v: "Assigned Human", s: headerStyle }]);
    uniqueRoles.forEach(r => mappingData.push([{ v: r, s: { ...dataCellStyle, font: { bold: true } } }, { v: "", s: inputCellStyle }]));

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 35 }, { wch: 35 }, { wch: 15 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "TOTAL ACTIVE TASKS", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "RESOURCES ON-GROUND", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "HIGHEST RISK PERSON", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }],
        [
            { t: 'f', f: `COUNTIF('Master Task Register'!F:F, "Applicable")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTIF('2. Configuration & Mapping'!A4:A18, "*?")`, s: kpiBoxStyle },
            { t: 'f', f: `IFERROR(INDEX('2. Configuration & Mapping'!A4:A18, MATCH(MAX(B7:B21), B7:B21, 0)), "VACANT")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }
        ],
        [],
        [{ v: "PERSONNEL LOAD INDEX (RISK HEATMAP)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Active Task Load", s: headerStyle }, { v: "Visual Stress Indicator", s: headerStyle }]
    ];
    for(let i=0; i<15; i++) {
        const row = i+7;
        const mapRow = i+4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", 0, COUNTIFS('Master Task Register'!E:E, A${row}, 'Master Task Register'!F:F, "Applicable"))`, s: centerCellStyle },
            { t: 'f', f: `IF(B${row}=0, "", REPT("█", MIN(10, ROUND(B${row}/5, 0))))`, s: { font: { color: { rgb: COLORS.PRIMARY_NAVY }, sz: 12 }, alignment: { vertical: 'center' } } }
        ]);
    }
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 30 }, { wch: 20 }, { wch: 30 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c, cIdx) => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
            [],
            ['Task ID', 'Task Description', 'Assigned To', 'Frequency', 'Consequence of Failure', 'Proof Required', 'Date Completed (dd-mm-yyyy)', 'Status', 'Trainer Notes']
        ];

        c.tasks.forEach((t, tIdx) => {
            const row = tIdx + 5;
            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.role || c.role, s: centerCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.consequence, s: { ...dataCellStyle, font: { italic: true, sz: 9 }, wrapText: true } },
                { v: t.proof, s: dataCellStyle },
                { v: "", s: inputCellStyle },
                { t: 'f', f: `IF(G${row}="", "Pending", "Completed")`, s: { ...centerCellStyle, font: { bold: true } } },
                { v: t.trainerNotes || "", s: { ...dataCellStyle, font: { color: { rgb: "666666" }, sz: 9 }, wrapText: true } }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }];
        ws['!cols'] = [{ wch: 10 }, { wch: 50 }, { wch: 20 }, { wch: 15 }, { wch: 35 }, { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 45 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- MASTER REGISTER (Internal Logic) ---
    const masterData = [["Task ID", "Desc", "Role", "Person", "Assigned", "Scope"]];
    checklists.forEach((c, cIdx) => {
        const configRow = 22 + cIdx;
        c.tasks.forEach(t => {
            masterData.push([t.id, t.description, (t.role || c.role), "", "", { t: 'f', f: `'2. Configuration & Mapping'!B${configRow}` }]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_v2.12_Hardened.xlsx`);
}
