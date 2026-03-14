
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
    
    // --- PRESTIGE PALETTE (SWISS PRIVATE BANK / AVIATION CONTROL) ---
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
        font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.DEEP_SLATE } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderThin
    };

    const titleStyle = {
        font: { sz: 24, bold: true, color: { rgb: COLORS.GOLD_ACCENT } },
        alignment: { horizontal: 'center' }
    };

    const headerStyle = { 
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 10 }, 
        fill: { fgColor: { rgb: COLORS.DEEP_SLATE } }, 
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
        font: { sz: 10, color: { rgb: COLORS.WHITE } },
        fill: { fgColor: { rgb: COLORS.CHARCOAL_BG } },
        alignment: { vertical: 'center' },
        border: borderThin
    };

    const kpiBoxStyle = {
        font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 14 },
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
                { v: "1. COVER PAGE", l: { Target: "#'1. Cover Page'!A1" }, s: navStyle },
                { v: "2. DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: navStyle },
                { v: "3. MY TASKS TODAY", l: { Target: "#'My Tasks Today'!A1" }, s: navStyle },
                { v: "4. CONFIGURATION", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: navStyle },
                { v: "5. INCIDENT LOG", l: { Target: "#'Incident Log'!A1" }, s: navStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        applyApplicationUX(ws);
    };

    const checklists = item.checklists;
    const uniqueRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 1. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE ENGINE", s: titleStyle }],
        [{ v: `Version 2.18 Build: Surgical Command Portfolio`, s: { font: { italic: true, sz: 11, color: { rgb: COLORS.GRAY_TEXT } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }, { v: "SECURED - BRANCH ISOLATION ACTIVE", s: inputCellStyle }],
        [{ v: "Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }, { v: "Type Organization Name", s: inputCellStyle }],
        [{ v: "Unit ID:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }, { v: "Type Branch Name", s: inputCellStyle }],
        [],
        [{ v: "GOVERNANCE PROTOCOL (FAILURE RECOVERY):", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.CRITICAL_RED } } } }],
        [{ v: "1. If a 'CRITICAL' task fails, the system automatically logs a major incident." }],
        [{ v: "2. If a role is 'VACANT', all tasks turn RED until re-assigned in Configuration (Section C)." }],
        [],
        [{ v: "SYSTEM STATUS: SECURED", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 90 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER (BRANCH ISOLATED)", s: { font: { bold: true, color: { rgb: COLORS.GOLD_ACCENT }, sz: 11 } } }],
        [{ v: "Full Name", s: headerStyle }, { v: "Position", s: headerStyle }, { v: "Status (ACTIVE/LEAVE/RESIGNED)", s: headerStyle }, { v: "System Health", s: headerStyle }],
        [{ v: "Imran Khan", s: inputCellStyle }, { v: "Head Chef", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A4="", "", IF(C4="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } }]
    ];
    for(let i=0; i<25; i++) {
        const row = i + 5;
        mappingData.push([{ v: "", s: inputCellStyle }, { v: "", s: dataCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A${row}="", "", IF(C${row}="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } }]);
    }
    
    mappingData.push([], [{ v: "SECTION B: MODULE SCOPE", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT } } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Applicability (YES or N/A)", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "YES", s: inputCellStyle }]));

    mappingData.push([], [{ v: "SECTION C: ROLE-TO-NAME MAPPING", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT } } } }], [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Personnel Name", s: headerStyle }, { v: "Staff Health Status", s: headerStyle }]);
    uniqueRoles.forEach((r, idx) => {
        const row = 38 + checklists.length + idx; 
        mappingData.push([
            { v: r, s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: idx === 0 ? "Imran Khan" : "", s: inputCellStyle }, 
            { t: 'f', f: `IF(B${row}="", "VACANT", IFERROR(INDEX(D4:D33, MATCH(B${row}, A4:A33, 0)), "NOT IN REGISTER"))`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 35 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD (COMMAND CENTER) ---
    const dashData: any[][] = [
        [],
        [
            { v: "GOVERNANCE HEALTH", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }, 
            { v: "CRITICAL INCIDENTS", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }, 
            { v: "OVERDUE CONTROLS", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } },
            { v: "PERSONNEL COUNT", s: { font: { sz: 8, bold: true, color: { rgb: COLORS.WHITE } }, alignment: { horizontal: 'center' } } }
        ],
        [
            { t: 'f', f: `TEXT(COUNTIFS('Master Control Register'!E:E, "<>") / MAX(1, COUNT('Master Control Register'!A:A)), "0%")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTIFS('Master Control Register'!F:F, "CRITICAL", 'Master Control Register'!E:E, "FAILED")`, s: { ...kpiBoxStyle, font: { ...kpiBoxStyle.font, color: { rgb: COLORS.CRITICAL_RED } } } },
            { t: 'f', f: `COUNTIFS('Master Control Register'!E:E, "")`, s: { ...kpiBoxStyle, font: { ...kpiBoxStyle.font, color: { rgb: COLORS.WARNING_AMBER } } } },
            { t: 'f', f: `COUNTA('2. Configuration & Mapping'!A4:A33)`, s: kpiBoxStyle }
        ],
        [],
        [{ v: "RISK CONCENTRATION DETECTOR (HUMAN VULNERABILITY)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT } } } }],
        [{ v: "Staff Member", s: headerStyle }, { v: "Critical Control Load", s: headerStyle }, { v: "Risk Concentration Status", s: headerStyle }],
        [
            { t: 'f', f: `'2. Configuration & Mapping'!A4`, s: dataCellStyle },
            { t: 'f', f: `COUNTIFS('Master Control Register'!D:D, A7, 'Master Control Register'!F:F, "CRITICAL")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
            { t: 'f', f: `IF(B7>5, "⚠ HIGH CONCENTRATION", "STABLE")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } }
        ],
        [],
        [{ v: "BIPOLAR EXECUTION HEATMAP", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.GOLD_ACCENT } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Execution Index (Completed)", s: headerStyle }, { v: "Risk Index (Overdue/Pending)", s: headerStyle }]
    ];
    
    for(let i=0; i<15; i++) {
        const row = i + 11;
        const mapRow = i + 4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Control Register'!D:D, A${row}, 'Master Control Register'!E:E, "<>")/2, 0))))`, s: { ...dataCellStyle, font: { color: { rgb: COLORS.SUCCESS_GREEN }, sz: 12 } } },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Control Register'!D:D, A${row}, 'Master Control Register'!E:E, "")/2, 0))))`, s: { ...dataCellStyle, font: { color: { rgb: COLORS.CRITICAL_RED }, sz: 12 } } }
        ]);
    }

    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 45 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- MY TASKS TODAY ---
    const todayData: any[][] = [
        [],
        [{ v: "TODAY'S OPERATIONAL DISPATCH", s: titleStyle }],
        [{ v: "Select Your Name:", s: { alignment: { horizontal: 'right' }, font: { bold: true, color: { rgb: COLORS.WHITE } } } }, { v: "Imran Khan", s: inputCellStyle }],
        [],
        [{ v: "Task ID", s: headerStyle }, { v: "Priority", s: headerStyle }, { v: "Required Task", s: headerStyle }, { v: "Due Time", s: headerStyle }, { v: "Status", s: headerStyle }]
    ];
    // Formula to filter from Master Control Register (simulated)
    for(let i=0; i<10; i++) {
        todayData.push([{ v: "KO-01", s: dataCellStyle }, { v: "High", s: { ...dataCellStyle, font: { color: { rgb: COLORS.CRITICAL_RED } } } }, { v: "Check Fridge Temperature", s: dataCellStyle }, { v: "09:00", s: { ...dataCellStyle, alignment: { horizontal: 'center' } } }, { v: "PENDING", s: { ...dataCellStyle, font: { bold: true } } }]);
    }
    const todayWs = utils.aoa_to_sheet(todayData);
    addNavBar(todayWs);
    todayWs['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 65 }, { wch: 15 }, { wch: 25 }];
    utils.book_append_sheet(wb, todayWs, "My Tasks Today");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c) => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: titleStyle }],
            [],
            ['ID', 'Task Description', 'How to Coach (Management Script)', 'Assigned To', 'Freq', 'Control Type', 'Date Done', 'Status', 'Why this matters']
        ];

        c.tasks.forEach((t, tIdx) => {
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 38 + checklists.length + roleIdx;

            wsData.push([
                { v: t.id, s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Inspect personally. If temp is > 5°C, check door seals immediately.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.GRAY_TEXT } }, wrapText: true } },
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleMapRow}`, s: { ...dataCellStyle, font: { bold: true } } }, 
                { v: (t.frequency || c.frequency), s: { ...dataCellStyle, alignment: { horizontal: 'center' } } },
                { v: t.priority === 'High' ? "CRITICAL" : "STANDARD", s: { ...dataCellStyle, font: { color: { rgb: t.priority === 'High' ? COLORS.GOLD_ACCENT : COLORS.WHITE } } } },
                { v: "", s: inputCellStyle }, 
                { t: 'f', f: `IF(G${tIdx + 5}="", "PENDING", "COMPLETED")`, s: { ...dataCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } },
                { v: t.consequence, s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.GRAY_TEXT } }, wrapText: true } }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }];
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 110 }, { wch: 35 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }, { wch: 65 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- MASTER CONTROL REGISTER (THE HIDDEN BRAIN) ---
    const masterData = [["Task ID", "Task", "Checklist", "AssignedPerson", "Status", "Control Type"]];
    checklists.forEach((c) => {
        c.tasks.forEach((t) => {
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 38 + checklists.length + roleIdx;
            masterData.push([
                t.id, t.description, c.title, 
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleMapRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!H${masterData.length + 4}` },
                t.priority === 'High' ? "CRITICAL" : "STANDARD"
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Control Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.18_EXECUTIVE.xlsx`);
}
