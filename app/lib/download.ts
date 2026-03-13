
'use client';

import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import type { PremiumPack, Checklist as PackChecklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data. Please contact support.");
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
        SUB_NAVY: "1F4E79",
        GRAY_TEXT: "4D4D4D",
        WHITE: "FFFFFF",
        BG_LIGHT: "F2F2F2",
        GREEN: "2E7D32",
        AMBER: "F4B400",
        RED: "C62828",
        BAR_BLUE: "2F75B5",
        BORDER: "D1D5DB",
        INPUT_YELLOW: "FFFFE0" // Clinical "Type Here" color
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

    const dataCellStyle = { 
        font: { sz: 10, color: { rgb: COLORS.GRAY_TEXT } },
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

    // --- APPLICATION MODE: HIDE GRIDLINES ---
    const applyApplicationMode = (ws: WorkSheet) => {
        ws['!views'] = [{ 
            showGridLines: false, // Hides gridlines for professional software feel
            state: 'frozen', 
            ySplit: 1 
        }];
    };

    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "1. QUICK START", l: { Target: "#'Quick Start Guide'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "2. DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "3. SETTINGS", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } },
                { v: "4. COVER", l: { Target: "#'1. Cover Page'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        applyApplicationMode(ws);
    };

    let checklists: PackChecklist[] = [];
    const packTitle = item.title;

    if (type === 'pack') {
        checklists = (item as PremiumPack).checklists;
    } else if (type === 'individual') {
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

    const uniqueRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 1. COVER PAGE ---
    const coverData = [
        [], [],
        [{ v: "OPERATIONAL GOVERNANCE ENGINE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.17 Build: Executive Command Portfolio`, s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Deployment Mode:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "SINGLE UNIT (Type 'MULTI-UNIT' if required)", s: inputCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name", s: inputCellStyle }],
        [{ v: "Unit Identification:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name/ID", s: inputCellStyle }],
        [],
        [{ v: "RED ALERT CONTINUITY PROTOCOL (IF TASKS ARE RED):", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.RED } } } }],
        [{ v: "1. Identify the assigned person on the Dashboard." }],
        [{ v: "2. If person is 'Resigned' or 'On Leave', YOU MUST RE-ASSIGN their role in SETTINGS (Section C) to an active name.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "3. If person is active, use the 'How to Coach' notes in the module to rectify the physical standard." }],
        [{ v: "4. Re-enter the completion date in the module. Status will turn GREEN instantly." }],
        [],
        [{ v: "SYSTEM STATUS: SECURED", s: { font: { bold: true, color: { rgb: COLORS.GREEN } }, alignment: { horizontal: 'center' } } }]
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 45 }, { wch: 90 }];
    coverWs['!rows'] = [null, null, { hpt: 45 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- QUICK START GUIDE ---
    const guideData = [
        [],
        [{ v: "EXECUTIVE OPERATIONAL HANDBOOK", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Follow this 3-step setup for a zero-ambiguity operational system.", s: { font: { italic: true } } }],
        [],
        [{ v: "STEP 1: REGISTER THE HUMANS", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "Go to SETTINGS (Section A). Type staff names and set their current status.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "STEP 2: ACTIVATE MODULES", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "In SETTINGS (Section B), type 'N/A' for any department you don't have.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "STEP 3: ASSIGN ROLES", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "In SETTINGS (Section C), type the NAME of the person next to each role.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [],
        [{ v: "DASHBOARD VOCABULARY:", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Governance Score", s: { font: { bold: true } } }, { v: "Execution % based on the 'Command Timeframe' selected on the Dashboard." }],
        [{ v: "Execution Index", s: { font: { bold: true } } }, { v: "Green '█' blocks representing successfully completed tasks." }],
        [{ v: "Risk Index", s: { font: { bold: true } } }, { v: "Red '█' blocks representing overdue or pending critical items." }],
        [],
        [{ v: "GO TO DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { ...linkStyle, font: { ...linkStyle.font, sz: 14, bold: true } } }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    addNavBar(guideWs);
    guideWs['!cols'] = [{ wch: 40 }, { wch: 100 }];
    utils.book_append_sheet(wb, guideWs, "Quick Start Guide");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER (THE HUMANS)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 11 } } }],
        [{ v: "Full Name (Type Here)", s: headerStyle }, { v: "Position", s: headerStyle }, { v: "Current Status (Active/Leave/Resigned)", s: headerStyle }, { v: "System Health", s: headerStyle }]
    ];
    for(let i=0; i<20; i++) {
        const row = i + 4;
        mappingData.push([
            { v: "", s: inputCellStyle }, 
            { v: "", s: dataCellStyle }, 
            { v: "ACTIVE", s: inputCellStyle }, 
            { t: 'f', f: `IF(A${row}="", "", IF(C${row}="RESIGNED", "⚠️ RE-ASSIGN ROLES", "OK"))`, s: centerCellStyle }
        ]);
    }
    
    mappingData.push([], [{ v: "SECTION B: MODULE SCOPE (YES / N/A)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Applicability (Type 'Applicable' or 'N/A')", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "Applicable", s: inputCellStyle }]));

    mappingData.push([], [{ v: "SECTION C: ROLE-TO-NAME MAPPING (THE BRAIN)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Personnel Name (Type Here)", s: headerStyle }, { v: "Staff Health Status", s: headerStyle }]);
    uniqueRoles.forEach((r, idx) => {
        const row = 33 + checklists.length + idx; 
        mappingData.push([
            { v: r, s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: "", s: inputCellStyle }, 
            { t: 'f', f: `IF(B${row}="", "VACANT", IFERROR(INDEX(C4:C23, MATCH(B${row}, A4:A23, 0)), "NOT IN REGISTER"))`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 45 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [{ v: "GOVERNANCE SCORE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "FILTER START DATE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, { v: "FILTER END DATE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }],
        [
            { t: 'f', f: `TEXT(COUNTIFS('Master Task Register'!F:F, "Applicable", 'Master Task Register'!E:E, "<>") / COUNTIF('Master Task Register'!F:F, "Applicable"), "0%")`, s: kpiBoxStyle },
            { v: "", s: inputCellStyle }, // Start Date
            { v: "", s: inputCellStyle }  // End Date
        ],
        [],
        [{ v: "SECTION B: BIPOLAR EXECUTION & RISK HEATMAP", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Status", s: headerStyle }, { v: "Execution Index (Completed)", s: headerStyle }, { v: "Risk Index (Overdue/Pending)", s: headerStyle }]
    ];
    for(let i=0; i<20; i++) {
        const row = i+7;
        const mapRow = i+4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", "", '2. Configuration & Mapping'!C${mapRow})`, s: centerCellStyle },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "Applicable", 'Master Task Register'!E:E, "<>")/2, 0))))`, s: { font: { color: { rgb: COLORS.GREEN }, sz: 12 } } },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "Applicable", 'Master Task Register'!E:E, "")/2, 0))))`, s: { font: { color: { rgb: COLORS.RED }, sz: 12 } } }
        ]);
    }
    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 45 }, { wch: 45 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c, cIdx) => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
            [],
            ['ID', 'What needs to be done?', 'How to Coach (Management Tips)', 'Assigned To (Auto-Sync)', 'Frequency', 'Proof Required', 'Date Done (Yellow Cell)', 'Live Status', 'Why this matters']
        ];

        c.tasks.forEach((t, tIdx) => {
            const row = tIdx + 5;
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 33 + checklists.length + roleIdx;

            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Inspect personally before sign-off. Ensure zero debris.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: "666666" } }, wrapText: true } },
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleMapRow}`, s: { ...centerCellStyle, font: { bold: true } } }, 
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
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 70 }, { wch: 25 }, { wch: 18 }, { wch: 25 }, { wch: 25 }, { wch: 30 }, { wch: 65 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- MASTER REGISTER (Hidden Logic) ---
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
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleMapRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!G${sheetRow}` },
                { t: 'f', f: `'2. Configuration & Mapping'!B${configRow}` }
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.17_EXECUTIVE.xlsx`);
}
