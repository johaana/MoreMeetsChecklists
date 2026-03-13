
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
    
    const COLORS = {
        PRIMARY_NAVY: "0F2B46",
        SUB_NAVY: "1F4E79",
        GREEN: "2E7D32",
        RED: "C62828",
        BORDER: "D1D5DB",
        INPUT_YELLOW: "FFFFE0", 
        WHITE: "FFFFFF",
        GRAY_TEXT: "4D4D4D",
        AMBER: "F4B400",
        CRITICAL_RED: "9C0006"
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

    const criticalKpiStyle = {
        ...kpiBoxStyle,
        font: { bold: true, color: { rgb: COLORS.CRITICAL_RED }, sz: 14 }
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
                { v: "4. QUICK START", l: { Target: "#'Quick Start Guide'!A1" }, s: { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 9 }, fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }
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
        [{ v: `Version 2.18 Build: Isolated Command Portfolio`, s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Deployment Status:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "SECURED - BRANCH ISOLATION ACTIVE", s: inputCellStyle }],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "RestoGroup Global", s: inputCellStyle }],
        [{ v: "Active Unit ID:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "MAIN_STREET_01", s: inputCellStyle }],
        [],
        [{ v: "PERSONNEL CONTINUITY PROTOCOL (RED ALERTS):", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.RED } } } }],
        [{ v: "1. If a task turns RED, check the Dashboard Vacancy Tracker." }],
        [{ v: "2. If the person is 'Resigned' or 'Absent', YOU MUST RE-ASSIGN the role in CONFIGURATION (Section C)." }],
        [{ v: "3. Transparency: Branch staff can see internal roles, but external units are locked.", s: { font: { italic: true, sz: 9 } } }],
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
        [{ v: "Follow this protocol for isolated branch-wise governance.", s: { font: { italic: true } } }],
        [],
        [{ v: "STEP 1: UNIT LOCK", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "Type your Branch Name in the Dashboard 'FILTER BRANCH' cell.", l: { Target: "#'4. Dashboard'!A1" }, s: linkStyle }],
        [{ v: "STEP 2: STAFF REGISTER", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "Register only your unit's humans in CONFIGURATION (Section A).", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [{ v: "STEP 3: ROLE MAPPING", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.SUB_NAVY } } } }, { v: "Assign names to roles. Any 'Resigned' staff will flag a vacancy.", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }],
        [],
        [{ v: "ISOLATION PRIVACY NOTICE:", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Branch Isolation", s: { font: { bold: true } } }, { v: "Data for other branches is masked in the Master Register when a filter is active." }],
        [{ v: "Internal Transparency", s: { font: { bold: true } } }, { v: "Your team sees each other's names on tasks to ensure zero-ambiguity ownership." }],
        [],
        [{ v: "GO TO COMMAND DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: { ...linkStyle, font: { ...linkStyle.font, sz: 14, bold: true } } }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    addNavBar(guideWs);
    guideWs['!cols'] = [{ wch: 40 }, { wch: 100 }];
    utils.book_append_sheet(wb, guideWs, "Quick Start Guide");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [],
        [{ v: "SECTION A: PERSONNEL REGISTER (BRANCH ISOLATED)", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 11 } } }],
        [{ v: "Full Name", s: headerStyle }, { v: "Position", s: headerStyle }, { v: "Branch/Unit", s: headerStyle }, { v: "Status (ACTIVE/LEAVE/RESIGNED)", s: headerStyle }, { v: "System Health", s: headerStyle }],
        [{ v: "Chef Imran", s: inputCellStyle }, { v: "Head Chef", s: dataCellStyle }, { v: "Main Street", s: inputCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A4="", "", IF(D4="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: centerCellStyle }],
        [{ v: "Sam Wilson", s: inputCellStyle }, { v: "Night Manager", s: dataCellStyle }, { v: "Main Street", s: inputCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A5="", "", IF(D5="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: centerCellStyle }],
        [{ v: "Sarah Chen", s: inputCellStyle }, { v: "Floor Lead", s: dataCellStyle }, { v: "Main Street", s: inputCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A6="", "", IF(D6="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: centerCellStyle }]
    ];
    for(let i=0; i<25; i++) {
        const row = i + 7;
        mappingData.push([{ v: "", s: inputCellStyle }, { v: "", s: dataCellStyle }, { v: "Main Street", s: inputCellStyle }, { v: "ACTIVE", s: inputCellStyle }, { t: 'f', f: `IF(A${row}="", "", IF(D${row}="RESIGNED", "⚠️ RE-ASSIGN", "OK"))`, s: centerCellStyle }]);
    }
    
    mappingData.push([], [{ v: "SECTION B: MODULE SCOPE", s: { font: { bold: true, sz: 11 } } }], [{ v: "Operational Module", s: headerStyle }, { v: "Applicability (YES or N/A)", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "YES", s: inputCellStyle }]));

    mappingData.push([], [{ v: "SECTION C: ROLE-TO-NAME MAPPING (INTERNAL TRANSPARENCY)", s: { font: { bold: true, sz: 11 } } }], [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Personnel Name", s: headerStyle }, { v: "Staff Health Status", s: headerStyle }]);
    uniqueRoles.forEach((r, idx) => {
        const row = 40 + checklists.length + idx; 
        mappingData.push([
            { v: r, s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: idx === 0 ? "Chef Imran" : idx === 1 ? "Sam Wilson" : "", s: inputCellStyle }, 
            { t: 'f', f: `IF(B${row}="", "VACANT", IFERROR(INDEX(D4:D33, MATCH(B${row}, A4:A33, 0)), "NOT IN REGISTER"))`, s: { ...centerCellStyle, font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 35 }, { wch: 35 }, { wch: 35 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashData: any[][] = [
        [],
        [
            { v: "UNIT GOVERNANCE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, 
            { v: "CRITICAL RISK", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, 
            { v: "FILTER BRANCH (LOCK)", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } },
            { v: "START DATE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }, 
            { v: "END DATE", s: { font: { sz: 8, bold: true }, alignment: { horizontal: 'center' } } }
        ],
        [
            { t: 'f', f: `TEXT(COUNTIFS('Master Task Register'!F:F, "YES", 'Master Task Register'!G:G, IF(C3="", "*", C3), 'Master Task Register'!E:E, "<>") / MAX(1, COUNTIFS('Master Task Register'!F:F, "YES", 'Master Task Register'!G:G, IF(C3="", "*", C3))), "0%")`, s: kpiBoxStyle },
            { t: 'f', f: `COUNTIFS('Master Task Register'!F:F, "YES", 'Master Task Register'!G:G, IF(C3="", "*", C3), 'Master Task Register'!E:E, "", 'Master Task Register'!H:H, "High")`, s: criticalKpiStyle },
            { v: "Main Street", s: inputCellStyle },
            { v: "01-01-2025", s: inputCellStyle }, 
            { v: "31-12-2025", s: inputCellStyle }  
        ],
        [],
        [{ v: "UNIT PERFORMANCE HEATMAP (ISOLATED VIEW)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Status", s: headerStyle }, { v: "Execution Index (Branch Only)", s: headerStyle }, { v: "Risk Index (Branch Only)", s: headerStyle }]
    ];
    
    for(let i=0; i<15; i++) {
        const row = i + 7;
        const mapRow = i + 4;
        dashData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${row}="", "", '2. Configuration & Mapping'!D${mapRow})`, s: centerCellStyle },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "YES", 'Master Task Register'!G:G, IF($C$3="", "*", $C$3), 'Master Task Register'!E:E, "<>")/2, 0))))`, s: { font: { color: { rgb: COLORS.GREEN }, sz: 12 } } },
            { t: 'f', f: `IF(A${row}="", "", REPT("█", MIN(15, ROUND(COUNTIFS('Master Task Register'!D:D, A${row}, 'Master Task Register'!F:F, "YES", 'Master Task Register'!G:G, IF($C$3="", "*", $C$3), 'Master Task Register'!E:E, "")/2, 0))))`, s: { font: { color: { rgb: COLORS.RED }, sz: 12 } } }
        ]);
    }

    dashData.push([], [{ v: "VACANCY TRACKER (RE-ASSIGN IMMEDIATELY)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.RED } } } }]);
    dashData.push([{ v: "Role Title", s: headerStyle }, { v: "Currently Mapped To", s: headerStyle }, { v: "Personnel Health", s: headerStyle }, { v: "Action Required", s: headerStyle }]);
    
    uniqueRoles.slice(0, 8).forEach((r, idx) => {
        const mapRow = 40 + checklists.length + idx;
        dashData.push([
            { v: r, s: dataCellStyle },
            { t: 'f', f: `'2. Configuration & Mapping'!B${mapRow}`, s: dataCellStyle },
            { t: 'f', f: `'2. Configuration & Mapping'!C${mapRow}`, s: centerCellStyle },
            { t: 'f', f: `IF(OR(C${dashData.length + 1}="RESIGNED", C${dashData.length + 1}="VACANT", C${dashData.length + 1}="ON LEAVE"), "⚠️ RE-ASSIGN", "OK")`, s: { ...centerCellStyle, font: { bold: true } } }
        ]);
    });

    const dashWs = utils.aoa_to_sheet(dashData);
    addNavBar(dashWs);
    dashWs['!cols'] = [{ wch: 45 }, { wch: 30 }, { wch: 45 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, dashWs, "4. Dashboard");

    // --- CHECKLIST SHEETS ---
    checklists.forEach((c, cIdx) => {
        const sName = safeSheetName(c.title);
        const wsData: any[][] = [
            [],
            [{ v: c.title.toUpperCase(), s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
            [],
            ['ID', 'Task Description', 'How to Coach (Field Tips)', 'Assigned To (Internal Transparency)', 'Frequency', 'Proof Required', 'Date Done (Yellow)', 'Live Status', 'Why this matters']
        ];

        c.tasks.forEach((t, tIdx) => {
            const row = tIdx + 5;
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 40 + checklists.length + roleIdx;

            wsData.push([
                { v: t.id, s: centerCellStyle },
                { v: t.description, s: { ...dataCellStyle, wrapText: true } },
                { v: t.trainerNotes || "Inspect personally. Ensure zero debris.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: "666666" } }, wrapText: true } },
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
        ws['!cols'] = [{ wch: 12 }, { wch: 65 }, { wch: 115 }, { wch: 35 }, { wch: 18 }, { wch: 25 }, { wch: 25 }, { wch: 30 }, { wch: 65 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    // --- MASTER REGISTER ---
    const masterData = [["Task ID", "Desc", "Role", "AssignedPerson", "DateDone", "ScopeStatus", "BranchLocation", "Priority"]];
    checklists.forEach((c, cIdx) => {
        const configRow = 34 + cIdx;
        c.tasks.forEach((t, tIdx) => {
            const roleIdx = uniqueRoles.indexOf((t.role || c.role).trim());
            const roleMapRow = 40 + checklists.length + roleIdx;
            const sheetRow = tIdx + 5;
            masterData.push([
                t.id, 
                t.description, 
                (t.role || c.role), 
                { t: 'f', f: `'2. Configuration & Mapping'!B${roleMapRow}` }, 
                { t: 'f', f: `'${safeSheetName(c.title)}'!G${sheetRow}` },
                { t: 'f', f: `'2. Configuration & Mapping'!B${configRow}` },
                { t: 'f', f: `IFERROR(VLOOKUP('Master Task Register'!D${masterData.length + 1}, '2. Configuration & Mapping'!A:C, 3, 0), "Unknown")` },
                t.priority || "Medium"
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V2.18_ISOLATED.xlsx`);
}
