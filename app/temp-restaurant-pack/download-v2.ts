
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
        AMBER: "F4B400"
    };

    // --- REFINED STYLES ---
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

    const linkStyle = {
        font: { color: { rgb: "0000FF" }, underline: true, sz: 10 },
        alignment: { vertical: 'center' }
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
                { v: "1. COVER PAGE", l: { Target: "#'1. Cover Page'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "2. DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "3. CONFIGURATION", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "4. CONNECTOR", l: { Target: "#'5. Branch Connector'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }
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
        [{ v: `Build V2.15 Portfolio Infrastructure`, s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Deployment Mode:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "SINGLE UNIT (Type 'MULTI-UNIT' if required)", s: inputCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Unit Identification:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name/ID", s: inputCellStyle }],
        [],
        [{ v: "COMMAND CENTER ACTIVATION GUIDE:", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Step 1: Register The Humans", s: { font: { bold: true } } }, { v: "Go to MAPPING. Type your staff names. Assign a Status (Active/Leave).", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "Step 2: Define Responsibility", s: { font: { bold: true } } }, { v: "In MAPPING (Step 3), type the ID number of the person next to each role.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "Step 3: Toggle Your Scope", s: { font: { bold: true } } }, { v: "If a module doesn't apply (e.g. No Bar), type 'N/A' in Step 2 of MAPPING.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "Step 4: Execute & Review", s: { font: { bold: true } } }, { v: "The DASHBOARD will now show a live 'God View' of your operation.", l: { Target: "#'4. Dashboard'!A1" }, s: linkStyle }],
        [],
        [{ v: "VOCABULARY (THE EXECUTIVE GLOSSARY):", s: { font: { bold: true, sz: 11, color: {rgb: COLORS.SUB_NAVY}} } }],
        [{ v: "Governance Score", s: { font: { bold: true } } }, { v: "Percentage of total assigned tasks across all modules completed on time." }],
        [{ v: "Visual Load Index", s: { font: { bold: true } } }, { v: "Visual heatmap detection of single points of failure (overloaded staff)." }],
        [{ v: "N/A Logic", s: { font: { bold: true } } }, { v: "Excludes modules from the denominator, ensuring fair scoring for different unit types." }],
        [],
        [{ v: "SYSTEM STATUS: SECURED", s: { font: { bold: true, color: { rgb: COLORS.GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 35 }, { wch: 85 }];
    coverWs['!rows'] = [null, null, { hpt: 45 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER (THE HUMANS)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 11 } } }],
        [{ v: "ID", s: headerStyle }, { v: "Full Name (Type Here)", s: headerStyle }, { v: "Current Status (Active/Leave/Resigned)", s: headerStyle }, { v: "Capacity Notes", s: headerStyle }]
    ];
    for(let i=1; i<=20; i++) mappingData.push([{ v: i, s: centerCellStyle }, { v: "", s: inputCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { v: "", s: dataCellStyle }]);
    
    mappingData.push([], [{ v: "SECTION B: MODULE ACTIVATION (YES / N/A)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Applicability (Type 'Applicable' or 'N/A')", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "Applicable", s: inputCellStyle }]));

    mappingData.push([], [{ v: "SECTION C: ROLE-TO-HUMAN MAPPING (THE BRAIN)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Structural Role", s: headerStyle }, { v: "Enter Human ID (from Section A)", s: headerStyle }, { v: "Auto-Resolved Name", s: headerStyle }]);
    uniqueRoles.forEach((r, idx) => {
        const row = 33 + checklists.length + idx; 
        mappingData.push([
            { v: r, s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: "", s: inputCellStyle }, 
            { t: 'f', f: `IF(B${row}="", "VACANT", IFERROR(INDEX(B4:B23, MATCH(B${row}, A4:A23, 0)), "INVALID ID"))`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 15 }, { wch: 50 }, { wch: 45 }, { wch: 30 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE SCORE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "HUMAN RESOURCES", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "HIGHEST RISK PERSON", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }],
        [
            { t: 'f', f: `TEXT(COUNTIFS('Master Task Register'!F:F, "Applicable", 'Master Task Register'!E:E, "<>") / COUNTIF('Master Task Register'!F:F, "Applicable"), "0%")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTA('2. Configuration & Mapping'!B4:B23)`, s: kpiBoxStyle },
            { t: 'f', f: `IFERROR(INDEX('2. Configuration & Mapping'!B4:B23, MATCH(MAX(B7:B26), B7:B26, 0)), "NO DATA")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }
        ],
        [],
        [{ v: "PERSONNEL WORKLOAD & RISK HEATMAP", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Name", s: headerStyle }, { v: "Tasks Assigned", s: headerStyle }, { v: "Visual Load Index", s: headerStyle }, { v: "Personnel Status", s: headerStyle }]
    ];
    for(let i=0; i<20; i++) {
        const row = i+7;
        const mapRow = i+4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!B${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", 0, COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "Applicable"))`, s: centerCellStyle },
            { t: 'f', f: `IF(B${row}=0, "", REPT("█", MIN(15, ROUND(B${row}/2, 0))))`, s: { font: { color: { rgb: COLORS.SUB_NAVY }, sz: 12 } } },
            { t: 'f', f: `IF(A${row}="", "", '2. Configuration & Mapping'!C${mapRow})`, s: centerCellStyle }
        ]);
    }
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- 5. BRANCH CONNECTOR ---
    const connectData = [
        [],
        [{ v: "COMMAND CENTER: BRANCH CONNECTOR", s: { font: { bold: true, sz: 16, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "For Multi-Unit Portfolio use: Paste your satellite branch links below to create your God-View registry.", s: { font: { italic: true } } }],
        [],
        [{ v: "Unit / Location Name", s: headerStyle }, { v: "Satellite Link (Paste Google/OneDrive URL)", s: headerStyle }, { v: "Sync Status", s: headerStyle }],
        [{ v: "Example: High-End Bistro East", s: dataCellStyle }, { v: "https://...", s: inputCellStyle }, { v: "CONNECTED", s: { ...centerCellStyle, font: { color: { rgb: COLORS.GREEN }, bold: true } } }]
    ];
    for(let i=0; i<10; i++) connectData.push([{ v: "", s: inputCellStyle }, { v: "", s: inputCellStyle }, { v: "PENDING", s: centerCellStyle }]);
    const connectWs = utils.aoa_to_sheet(connectData);
    addNavBar(connectWs);
    connectWs['!cols'] = [{ wch: 45 }, { wch: 80 }, { wch: 20 }];
    utils.book_append_sheet(wb, connectWs, "5. Branch Connector");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c, cIdx) => {
        const sName = safeSheetName(c.title);
        const configRowForModule = 27 + cIdx; 
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
            [],
            ['Task ID', 'What needs to be done?', 'How to Coach (Management Tips)', 'Assigned To (Auto)', 'Frequency', 'Proof Required', 'Date Done (Type here)', 'Live Status', 'Why this matters']
        ];

        c.tasks.forEach((t, tIdx) => {
            const row = tIdx + 5;
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 33 + checklists.length + roleIdx;

            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Inspect the detail personally before signing off.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: "666666" } }, wrapText: true } },
                { t: 'f', f: `'2. Configuration & Mapping'!C${roleMapRow}`, s: { ...centerCellStyle, font: { bold: true } } }, 
                { v: (t.frequency || c.frequency), s: centerCellStyle },
                { v: t.proof, s: dataCellStyle },
                { v: "", s: inputCellStyle }, 
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
            const roleMapRow = 33 + checklists.length + roleIdx;
            const sheetRow = tIdx + 5;
            masterData.push([
                t.id, 
                t.description, 
                (t.role || c.role), 
                { t: 'f', f: `'2. Configuration & Mapping'!C${roleMapRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!G${sheetRow}` },
                { t: 'f', f: `'2. Configuration & Mapping'!B${configRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.15_PORTFOLIO.xlsx`);
}
