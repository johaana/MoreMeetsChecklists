
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
    
    // --- EXECUTIVE COMMAND PALETTE ---
    const COLORS = {
        PRIMARY_NAVY: "0F2B46",
        GREEN: "2E7D32",
        RED: "C62828",
        BORDER: "D1D5DB",
        INPUT_YELLOW: "FFFFE0", 
        WHITE: "FFFFFF",
        GRAY_TEXT: "4D4D4D",
        SUB_NAVY: "1F4E79",
        MUTED_BG: "F8F9FA"
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

    const addSheetBeautification = (ws: WorkSheet) => {
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "HOME", l: { Target: "#'1. Cover Page'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "MAPPING", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "CONNECT", l: { Target: "#'5. Branch Connector'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        addSheetBeautification(ws);
    };

    const checklists = item.checklists;
    const uniqueRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 1. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE ENGINE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.13 Professional Build`, s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Organization Entity", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Unit Name / ID", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name", s: inputCellStyle }],
        [{ v: "Portfolio Mode", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "SINGLE UNIT", s: { ...inputCellStyle, alignment: { horizontal: 'center' }, font: { bold: true } } }],
        [],
        [{ v: "SYSTEM STATUS: STANDBY", s: { font: { bold: true, color: { rgb: COLORS.SUB_NAVY } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SETUP GUIDE (AS EASY AS 1-2-3):", s: { font: { bold: true, sz: 11, color: {rgb: COLORS.PRIMARY_NAVY}} } }],
        [{ v: "1. Go to 'MAPPING' sheet. Type your team members' names in Step 1.", s: { font: { sz: 10 } } }],
        [{ v: "2. Assign those people to specific Roles in Step 3.", s: { font: { sz: 10 } } }],
        [{ v: "3. Start ticking off tasks! Type the date in any YELLOW cell.", s: { font: { sz: 10 } } }],
        [],
        [{ v: "Tip: Only touch the YELLOW cells. Everything else is automatic.", s: { font: { italic: true, sz: 9, color: {rgb: "808080"} } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 65 }];
    coverWs['!rows'] = [null, null, { hpt: 45 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "STEP 1: REGISTER YOUR TEAM (THE HUMANS)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 11 } } }],
        [{ v: "Human Name (Type Here)", s: headerStyle }, { v: "Primary Responsibility", s: headerStyle }, { v: "Status", s: headerStyle }]
    ];
    for(let i=0; i<20; i++) mappingData.push([{ v: "", s: inputCellStyle }, { v: "", s: dataCellStyle }, { v: "Active", s: centerCellStyle }]);
    
    mappingData.push([], [{ v: "STEP 2: CHOOSE YOUR MODULES (SCOPE TOGGLE)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Status (Type 'Applicable' or 'N/A')", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "Applicable", s: inputCellStyle }]));

    mappingData.push([], [{ v: "STEP 3: ROLE ASSIGNMENT (THE SATELLITES)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Specific Role", s: headerStyle }, { v: "Assigned Human (Type Name Exactly as in Step 1)", s: headerStyle }]);
    uniqueRoles.forEach(r => mappingData.push([{ v: r, s: { ...dataCellStyle, font: { bold: true } } }, { v: "", s: inputCellStyle }]));

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 50 }, { wch: 50 }, { wch: 20 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "TOTAL TASKS", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "TEAM SIZE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "HIGHEST LOAD PERSON", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }],
        [
            { t: 'f', f: `COUNTIF('Master Task Register'!F:F, "Applicable")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTA('2. Configuration & Mapping'!A4:A23)`, s: kpiBoxStyle },
            { t: 'f', f: `IFERROR(INDEX('2. Configuration & Mapping'!A4:A23, MATCH(MAX(B7:B26), B7:B26, 0)), "VACANT")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }
        ],
        [],
        [{ v: "PERSONNEL WORKLOAD HEATMAP", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Person Name", s: headerStyle }, { v: "Tasks Assigned", s: headerStyle }, { v: "Visual Load Bar", s: headerStyle }]
    ];
    for(let i=0; i<20; i++) {
        const row = i+7;
        const mapRow = i+4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", 0, COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "Applicable"))`, s: centerCellStyle },
            { t: 'f', f: `IF(B${row}=0, "", REPT("█", MIN(15, ROUND(B${row}/2, 0))))`, s: { font: { color: { rgb: COLORS.SUB_NAVY }, sz: 12 }, alignment: { vertical: 'center' } } }
        ]);
    }
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 45 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- 5. BRANCH CONNECTOR ---
    const connectData = [
        [],
        [{ v: "COMMAND CENTER: BRANCH CONNECTOR", s: { font: { bold: true, sz: 16, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Paste your satellite branch Google/OneDrive links below to sync real-time data.", s: { font: { italic: true } } }],
        [],
        [{ v: "Unit / Location Name", s: headerStyle }, { v: "Satellite Link (Paste URL)", s: headerStyle }, { v: "Sync Status", s: headerStyle }],
        [{ v: "Example: Mumbai East", s: dataCellStyle }, { v: "https://...", s: inputCellStyle }, { v: "CONNECTED", s: { ...centerCellStyle, font: { color: { rgb: COLORS.GREEN }, bold: true } } }]
    ];
    for(let i=0; i<10; i++) connectData.push([{ v: "", s: inputCellStyle }, { v: "", s: inputCellStyle }, { v: "DISCONNECTED", s: centerCellStyle }]);
    const connectWs = utils.aoa_to_sheet(connectData);
    addNavBar(connectWs);
    connectWs['!cols'] = [{ wch: 40 }, { wch: 70 }, { wch: 20 }];
    utils.book_append_sheet(wb, connectWs, "5. Branch Connector");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c, cIdx) => {
        const sName = safeSheetName(c.title);
        const configRowForModule = 27 + cIdx; // Step 2 start row
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
            [],
            ['Task ID', 'What needs to be done?', 'How to Coach (Management Tips)', 'Assigned To (Name)', 'Frequency', 'Proof Required', 'Date Done (dd-mm-yyyy)', 'Live Status', 'Why this matters']
        ];

        c.tasks.forEach((t, tIdx) => {
            const row = tIdx + 5;
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleConfigRow = 27 + checklists.length + 3 + roleIdx; // Step 3 start row

            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Coaching Tip: Inspect the detail personally before signing off.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: "666666" } }, wrapText: true } },
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleConfigRow}`, s: { ...centerCellStyle, font: { bold: true } } }, // NAME LOOKUP
                { v: (t.frequency || c.frequency), s: centerCellStyle },
                { v: t.proof, s: dataCellStyle },
                { v: "", s: inputCellStyle }, // Date Done
                { t: 'f', f: `IF(G${row}="", "PENDING", "COMPLETED")`, s: { ...centerCellStyle, font: { bold: true } } },
                { v: t.consequence, s: { ...dataCellStyle, font: { italic: true, sz: 9 }, wrapText: true } }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }];
        ws['!cols'] = [{ wch: 12 }, { wch: 60 }, { wch: 60 }, { wch: 25 }, { wch: 18 }, { wch: 25 }, { wch: 25 }, { wch: 18 }, { wch: 60 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- MASTER REGISTER (Hidden) ---
    const masterData = [["Task ID", "Desc", "Role", "AssignedPerson", "DateDone", "ScopeStatus"]];
    checklists.forEach((c, cIdx) => {
        const configRow = 27 + cIdx;
        c.tasks.forEach((t, tIdx) => {
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleConfigRow = 27 + checklists.length + 3 + roleIdx;
            const sheetRow = tIdx + 5;
            masterData.push([
                t.id, 
                t.description, 
                (t.role || c.role), 
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleConfigRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!G${sheetRow}` },
                { t: 'f', f: `'2. Configuration & Mapping'!B${configRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_v2.13_EXECUTIVE.xlsx`);
}
