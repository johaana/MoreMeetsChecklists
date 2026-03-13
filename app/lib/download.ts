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
    
    // --- EXECUTIVE INTELLIGENCE CONSOLE PALETTE ---
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
        INPUT_YELLOW: "FFFFE0"
    };

    // --- REFINED STYLES ---
    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const linkStyle = {
        font: { color: { rgb: COLORS.WHITE }, underline: true, sz: 10, bold: true },
        fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } },
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

    const kpiTitleStyle = {
        font: { bold: true, color: { rgb: COLORS.PRIMARY_NAVY }, sz: 8 },
        alignment: { vertical: 'center', horizontal: 'center' }
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

    // --- HELPER: ADD NAV BAR ---
    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "HOME", l: { Target: "#'1. Cover Page'!A1" }, s: linkStyle },
                { v: "GUIDE", l: { Target: "#'Quick Start Guide'!A1" }, s: linkStyle },
                { v: "DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: linkStyle },
                { v: "CONNECT", l: { Target: "#'5. Branch Connector'!A1" }, s: linkStyle },
                { v: "MAPPING", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        for(let i=0; i<5; i++) {
            const cell = ws[utils.encode_cell({r:0, c:i})];
            if(cell) cell.s = linkStyle;
        }
        ws['!views'] = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
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

    const uniqueStructuralRoles = Array.from(new Set(checklists.flatMap(c => c.tasks.map(t => (t.role || c.role).trim())))).sort();

    // --- 1. COVER PAGE ---
    const coverData = [
        [], // Nav Space
        [],
        [{ v: "OPERATIONAL GOVERNANCE ENGINE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `Version 2.14 Enterprise Portfolio Build`, s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [],
        [{ v: "Organization Entity:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Company Name Here", s: inputCellStyle }],
        [{ v: "Unit Name / ID:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "Type Branch Name Here", s: inputCellStyle }],
        [{ v: "Deployment Mode:", s: { alignment: { horizontal: 'right' }, font: { bold: true } } }, { v: "SINGLE UNIT (Change to PORTFOLIO if multi-unit)", s: { ...inputCellStyle, font: { italic: true } } }],
        [],
        [{ v: "SYSTEM STATUS: STANDBY", s: { font: { bold: true, color: { rgb: COLORS.SUB_NAVY } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "CONFIDENTIAL GOVERNANCE ASSET", s: { font: { bold: true, color: { rgb: COLORS.RED } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 40 }, { wch: 60 }];
    coverWs['!rows'] = [{ hpt: 30 }, null, { hpt: 45 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- QUICK START GUIDE ---
    const introData = [
        [], // Nav
        [{ v: "COMMAND CENTER ACTIVATION GUIDE", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Think of this file as a 'Remote Control' for your branch. Follow these steps to activate the logic.", s: { font: { italic: true } } }],
        [],
        [{ v: "THE 3-STEP SETUP", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Step 1: The Human Register", s: { font: { bold: true } } }, { v: "Go to '2. Configuration & Mapping'. Type the actual names of your team (e.g., 'Chef Imran') in the yellow cells." }],
        [{ v: "Step 2: Activation Toggle", s: { font: { bold: true } } }, { v: "In the same sheet, choose which modules apply. If you don't have a Bar or Pool, type 'N/A' next to them. This cleans up your Dashboard scores." }],
        [{ v: "Step 3: Assign Roles", s: { font: { bold: true } } }, { v: "Assign your team names to the Structural Roles (e.g., set 'Head Chef' to 'Chef Imran'). Now, his name will automatically appear in every kitchen checklist." }],
        [],
        [{ v: "DASHBOARD VOCABULARY (THE GOD VIEW)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Governance Score", s: { font: { bold: true } } }, { v: "The % of critical safety tasks completed on time. Target is 100%." }],
        [{ v: "Visual Load Index", s: { font: { bold: true } } }, { v: "A heatmap of how many tasks one person is carrying. If the bar is too long, that person is a 'Single Point of Failure'." }],
        [{ v: "Highest Risk Person", s: { font: { bold: true } } }, { v: "Automatically detects who is most overloaded. This is where your next operational lapse is likely to happen." }],
        [],
        [{ v: "MULTI-UNIT / PORTFOLIO USERS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "If you own 5 branches, save 5 copies of this file. Use '5. Branch Connector' to keep a central registry of all branch links for the CEO.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "NEED HELP? BOOK YOUR 30-MIN SETUP CALL:", s: { font: { bold: true, color: { rgb: COLORS.GREEN } } } }],
        [{ v: "Access your included expert customization session here: [ CALENDLY LINK ]", l: { Target: "https://calendly.com" }, s: { font: { underline: true, color: { rgb: "0000FF" } } } }]
    ];
    const introWs = utils.aoa_to_sheet(introData);
    addNavBar(introWs);
    introWs['!cols'] = [{ wch: 35 }, { wch: 100 }];
    utils.book_append_sheet(wb, introWs, "Quick Start Guide");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [], // Nav
        [{ v: "SECTION A: PERSONNEL REGISTER (THE HUMANS)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name (Type Here)", s: headerStyle }, { v: "Internal Designation", s: headerStyle }, { v: "Status", s: headerStyle }],
    ];
    for(let i=0; i<15; i++) mappingData.push([ {v:"", s: inputCellStyle}, {v:"", s:dataCellStyle}, {v:"Active", s:centerCellStyle} ]);
    
    mappingData.push([]);
    mappingData.push([{ v: "SECTION B: MODULE SCOPE CONTROL (APPLICABLE / N/A)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Operational Module", s: headerStyle }, { v: "Applicability (Type 'Applicable' or 'N/A')", s: headerStyle }, { v: "Impact", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: dataCellStyle }, { v: "Applicable", s: inputCellStyle }, { v: "Affects Dashboard Score", s: dataCellStyle }]));

    mappingData.push([]);
    mappingData.push([{ v: "SECTION C: ROLE ALLOCATION (THE SATELLITES)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Structural Role", s: headerStyle }, { v: "Primary Human Name (Type Exactly as in Section A)", s: headerStyle }, { v: "Backup Personnel", s: headerStyle }]);
    
    uniqueStructuralRoles.forEach((role) => {
        mappingData.push([
            { v: role.trim(), s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: "", s: inputCellStyle }, 
            { v: "", s: inputCellStyle }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 45 }, { wch: 45 }, { wch: 25 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 4. DASHBOARD ---
    const dashboardData: any[][] = [
        [], // Nav
        [{ v: "TOTAL ACTIVE TASKS", s: kpiTitleStyle }, { v: "RESOURCES ON-GROUND", s: kpiTitleStyle }, { v: "HIGHEST LOAD PERSON", s: kpiTitleStyle }],
        [
            { t: 'f', f: `COUNTIF('Master Task Register'!F:F, "Applicable")`, s: kpiBoxStyle }, 
            { t: 'f', f: `COUNTA('2. Configuration & Mapping'!A4:A18)`, s: kpiBoxStyle }, 
            { t: 'f', f: `IFERROR(INDEX('2. Configuration & Mapping'!A4:A18, MATCH(MAX(C7:C21), C7:C21, 0)), "VACANT")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }
        ],
        [],
        [{ v: "PERSONNEL WORKLOAD HEATMAP", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Tasks Assigned", s: headerStyle }, { v: "Visual Load Index", s: headerStyle }],
    ];

    for(let i=0; i<15; i++) {
        const mappingRow = 4 + i;
        const loadRow = 7 + i;
        dashboardData.push([
            { t: 'f', f: `'2. Configuration & Mapping'!A${mappingRow}`, s: dataCellStyle },
            { t: 'f', f: `IF(A${loadRow}="", 0, COUNTIFS('Master Task Register'!D:D, A${loadRow}, 'Master Task Register'!F:F, "Applicable"))`, s: centerCellStyle },
            { t: 'f', f: `IF(B${loadRow}=0, "", REPT("█", MIN(15, ROUND(B${loadRow}/2, 0))))`, s: { font: { color: {rgb: COLORS.BAR_BLUE}, sz: 12 } }}
        ]);
    }

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs);
    dashboardWs['!cols'] = [{ wch: 40 }, { wch: 20 }, { wch: 50 }];
    utils.book_append_sheet(wb, dashboardWs, "4. Dashboard");

    // --- 5. BRANCH CONNECTOR ---
    const connectorData = [
        [], // Nav
        [{ v: "COMMAND CENTER: BRANCH CONNECTOR", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Paste your branch satellite links here to create your God-View registry.", s: { font: { italic: true } } }],
        [],
        [{ v: "UNIT / BRANCH NAME", s: headerStyle }, { v: "LIVE DATA LINK (PASTE URL)", s: headerStyle }, { v: "STATUS", s: headerStyle }],
        [{ v: "Example: Mumbai East", s: dataCellStyle }, { v: "https://docs.google.com/spreadsheets/d/...", s: inputCellStyle }, { v: "CONNECTED", s: { ...centerCellStyle, font: {color: {rgb: COLORS.GREEN}} } }],
    ];
    for(let i=0; i<10; i++) connectorData.push([{ v: "", s: inputCellStyle }, { v: "", s: inputCellStyle }, { v: "PENDING", s: centerCellStyle }]);
    
    const connectorWs = utils.aoa_to_sheet(connectorData);
    addNavBar(connectorWs);
    connectorWs['!cols'] = [{ wch: 40 }, { wch: 80 }, { wch: 20 }];
    utils.book_append_sheet(wb, connectorWs, "5. Branch Connector");

    // --- MASTER TASK REGISTER & CHECKLISTS ---
    const masterData: any[][] = [["Task ID", "Operational Task", "Control Type", "Assigned Person", "Date Completed", "Scope Status"]];
    checklists.forEach((checklist, cIdx) => {
        const sName = safeSheetName(checklist.title);
        const configRowForModule = 22 + cIdx; // Step 2 Row
        const scopeRef = `'2. Configuration & Mapping'!B${configRowForModule}`;
        
        const wsData: any[][] = [[], [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }], [], ["Task ID", "What needs to be done?", "How to Coach (Management Tips)", "Assigned To", "How Often?", "Proof Required", "Date Done (Type Here)", "Live Status", "Why this matters"]];

        checklist.tasks.forEach((task, tIdx) => {
            const roleKey = (task.role || checklist.role).trim();
            const sectionCStart = 25 + checklists.length + 3; 
            const roleIdx = uniqueStructuralRoles.indexOf(roleKey);
            const lookupRow = sectionCStart + roleIdx;
            const assignedPersonRef = `'2. Configuration & Mapping'!B${lookupRow}`;
            
            const rowInSheet = 5 + tIdx;
            
            // To Master
            masterData.push([
                task.id, 
                task.description, 
                "Standard", 
                { t: 'f', f: assignedPersonRef }, 
                { t: 'f', f: `'${sName}'!G${rowInSheet}` },
                { t: 'f', f: scopeRef }
            ]);
            
            // To Sheet
            wsData.push([
                { v: task.id, s: centerCellStyle },
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { v: task.trainerNotes || "Coaching Tip: Inspect the detail personally before signing off.", s: { ...dataCellStyle, font: { italic: true, sz: 9, color: { rgb: "666666" } }, wrapText: true } },
                { t: 'f', f: assignedPersonRef, s: { ...centerCellStyle, font: { bold: true } } },
                { v: task.frequency || checklist.frequency, s: centerCellStyle },
                { v: task.proof || "Observation", s: dataCellStyle },
                { v: "", s: inputCellStyle },
                { t: 'f', f: `IF(G${rowInSheet}="", "PENDING", "COMPLETED")`, s: { ...centerCellStyle, font: { bold: true } } },
                { v: task.consequence, s: { ...dataCellStyle, font: { italic: true, sz: 9 }, wrapText: true } }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }];
        ws['!cols'] = [{ wch: 12 }, { wch: 60 }, { wch: 65 }, { wch: 25 }, { wch: 15 }, { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 60 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4", "I4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_Portfolio_v2.14.xlsx';
    writeFile(wb, fileName);
}
