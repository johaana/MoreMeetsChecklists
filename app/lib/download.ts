
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

    // --- HELPER: ADD NAV BAR ---
    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "HOME", l: { Target: "#'1. Cover Page'!A1" }, s: linkStyle },
                { v: "INDEX", l: { Target: "#'3. Module Index'!A1" }, s: linkStyle },
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
        // Set standard view: hide gridlines and freeze top row
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
        [{ v: `Version 2.12 Enterprise Portfolio Build`, s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [],
        [{ v: "[ RIGHT-CLICK TO ADD YOUR COMPANY LOGO HERE ]", s: { font: { sz: 8, color: { rgb: "808080" } }, fill: { fgColor: { rgb: COLORS.BG_LIGHT } }, alignment: { horizontal: 'center', vertical: 'center' }, border: { top: { style: 'dashed' }, bottom: { style: 'dashed' }, left: { style: 'dashed' }, right: { style: 'dashed' } } } }],
        [],
        [{ v: `Organization Entity: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Unit Name / Location: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Portfolio Size (# of Units): __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Unit ID (e.g. #NY-101): __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Deployment Date: ${new Date().toLocaleDateString()}`, s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "CONFIDENTIAL GOVERNANCE ASSET", s: { font: { bold: true, color: { rgb: COLORS.RED } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 100 }];
    coverWs['!rows'] = [{ hpt: 30 }, null, { hpt: 45 }, null, null, { hpt: 100 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- QUICK START GUIDE ---
    const introData = [
        [], // Nav
        [{ v: "COMMAND CENTER ACTIVATION GUIDE", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Think of this system as a Remote Control for your business. Follow these 3 steps to plug in your branches.", s: { font: { italic: true } } }],
        [],
        [{ v: "STEP 1: The Master Copy (One File Per Branch)", s: { font: { bold: true } } }],
        [{ v: "If you have 5 branches, save 5 copies of this file (e.g. 'Mumbai_Branch.xlsx'). Share the 'Mumbai' link with your Mumbai GM. This is their 'Remote Control'.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 2: Identify Your Heroes (Role Mapping)", s: { font: { bold: true } } }],
        [{ v: "Head to the '2. Configuration & Mapping' tab. Type the names of your people (e.g. Chef Rahul). Map them to the Roles. If a name is missing, the system will flag a 'VACANT' alert automatically.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 3: Plug Them In (The God View)", s: { font: { bold: true } } }],
        [{ v: "Paste your branch links into the '5. Branch Connector' sheet. Your Master Dashboard will now 'vacuum' the data from all branches into one screen.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "Need Setup Assistance?", s: { font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Your purchase includes a 30-minute 'Command Suite' setup call. We will link your branches for you and teach you how to read the Risk Dashboard.", s: { alignment: { wrapText: true } } }],
        [{ v: "BOOK YOUR LAUNCH SESSION: [ CALENDLY LINK PLACEHOLDER ]", l: { Target: "https://calendly.com" }, s: { font: { bold: true, color: { rgb: COLORS.GREEN }, underline: true } } }],
        [],
        [{ v: "Tip: Use the 'Scope Toggle' in Sheet 2 to turn off modules like 'Pool' or 'Valet' if you don't have them. This keeps your score fair.", s: { font: { italic: true, color: { rgb: "808080" }, sz: 9 } } }],
    ];
    const introWs = utils.aoa_to_sheet(introData);
    addNavBar(introWs);
    introWs['!cols'] = [{ wch: 110 }];
    utils.book_append_sheet(wb, introWs, "Quick Start Guide");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData: any[][] = [
        [], // Nav
        [{ v: "SECTION A: PERSONNEL REGISTER (THE HUMANS)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Internal Designation", s: headerStyle }, { v: "Primary Unit/Location", s: headerStyle }, { v: "Management Scope", s: headerStyle }, { v: "Status", s: headerStyle }],
    ];
    for(let i=0; i<15; i++) mappingData.push([ {v:"", s: { ...dataCellStyle, fill: {fgColor:{rgb:COLORS.INPUT_YELLOW}}}}, {v:"", s:dataCellStyle}, {v:"", s:dataCellStyle}, {v:"Single Unit", s:dataCellStyle}, {v:"Active", s:centerCellStyle} ]);
    
    mappingData.push([]);
    mappingData.push([{ v: "SECTION B: MODULE SCOPE CONTROL (TOGGLE ON/OFF)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Operational Module", s: headerStyle }, { v: "Applicability Status", s: headerStyle }, { v: "Impact on Dashboard", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } } } }, { v: "Applicable", s: { ...centerCellStyle, fill: { fgColor: { rgb: "E0F2F1" } } } }, { v: "Include in scores", s: dataCellStyle }]));

    mappingData.push([]);
    mappingData.push([{ v: "SECTION C: ROLE ALLOCATION (THE ANCHORS)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Structural Role", s: headerStyle }, { v: "Primary Human Assigned", s: headerStyle }, { v: "Backup Personnel", s: headerStyle }, { v: "Assignment Alert", s: headerStyle }]);
    
    uniqueStructuralRoles.forEach((role, idx) => {
        const rowIdx = mappingData.length + 1;
        mappingData.push([
            { v: role.trim(), s: { ...dataCellStyle, font: { bold: true } } }, 
            { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } } } }, 
            { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "E0F2F1" } } } },
            { f: `IF(OR(B${rowIdx}="", B${rowIdx}="VACANT"), "RE-ASSIGN REQUIRED", "LOCKED")`, s: { ...centerCellStyle, font: { bold: true, color: {rgb: COLORS.RED} } } }
        ]);
    });

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    mappingWs['!cols'] = [{ wch: 35 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 15 }];
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 3. MODULE INDEX ---
    const indexData: any[][] = [
        [], // Nav
        [{ v: "OPERATIONAL MODULE DIRECTORY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [],
        [{ v: "MODULE TITLE", s: headerStyle }, { v: "DEPARTMENT", s: headerStyle }, { v: "FREQUENCY", s: headerStyle }, { v: "SCOPE STATUS", s: headerStyle }]
    ];
    checklists.forEach((c, idx) => {
        const sName = safeSheetName(c.title);
        const scopeRow = 22 + idx; 
        indexData.push([
            { v: c.title, l: { Target: `#'${sName}'!A1` }, s: { ...dataCellStyle, font: { color: { rgb: "0000FF" }, underline: true, bold: true } } },
            { v: c.department, s: centerCellStyle },
            { v: c.frequency, s: centerCellStyle },
            { f: `'2. Configuration & Mapping'!B${scopeRow}`, s: centerCellStyle }
        ]);
    });
    const indexWs = utils.aoa_to_sheet(indexData);
    addNavBar(indexWs);
    indexWs['!cols'] = [{ wch: 50 }, { wch: 25 }, { wch: 20 }, { wch: 15 }];
    utils.book_append_sheet(wb, indexWs, "3. Module Index");

    // --- 4. DASHBOARD ---
    const dashboardData: any[][] = [
        [], // Nav
        [{ v: "TOTAL ACTIVE TASKS", s: kpiTitleStyle }, { v: "RESOURCES ON-GROUND", s: kpiTitleStyle }, { v: "HIGHEST RISK PERSON", s: kpiTitleStyle }, { v: "UNIT GOVERNANCE", s: kpiTitleStyle }],
        [
            { f: `COUNTIF('Master Task Register'!F:F, "Applicable")`, s: kpiBoxStyle }, 
            { f: `COUNTIF('2. Configuration & Mapping'!A4:A18, "*?")`, s: kpiBoxStyle }, 
            { f: `IFERROR(INDEX('2. Configuration & Mapping'!A4:A18, MATCH(MAX(C7:C21), C7:C21, 0)), "VACANT")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }, 
            { v: "STABLE", s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.GREEN }, sz: 10 } } }
        ],
        [],
        [{ v: "SECTION A: PERSONNEL LOAD & RESOURCE RISK", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Assigned Scope", s: headerStyle }, { v: "Active Task Load", s: headerStyle }, { v: "Visual Load Index", s: headerStyle }, { v: "Action Required", s: headerStyle }],
    ];

    for(let i=0; i<15; i++) {
        const mappingRow = 4 + i;
        const nameRef = `'2. Configuration & Mapping'!A${mappingRow}`;
        const loadRow = 7 + i;
        dashboardData.push([
            { f: nameRef, s: dataCellStyle },
            { f: `'2. Configuration & Mapping'!D${mappingRow}`, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, COUNTIFS('Master Task Register'!E:E, ${nameRef}, 'Master Task Register'!F:F, "Applicable"))`, s: centerCellStyle },
            { f: `IF(C${loadRow}=0, "", REPT("█", MIN(10, ROUND(C${loadRow}/5, 0))))`, s: { font: { color: {rgb: COLORS.BAR_BLUE}, sz: 12 } }},
            { f: `IF(C${loadRow}>40, "RE-ALLOCATE", "STABLE")`, s: centerCellStyle }
        ]);
    }

    dashboardData.push([], [{ v: "SECTION B: REGIONAL PORTFOLIO LEADERBOARD", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    dashboardData.push([{ v: "Comparison Entity", s: headerStyle }, { v: "Governance Score", s: headerStyle }, { v: "Benchmark Progress", s: headerStyle }, { v: "Gap vs. Target", s: headerStyle }]);
    dashboardData.push([ {v: "THIS UNIT", s: { ...dataCellStyle, font: {bold: true}}}, {v: "88%", s: centerCellStyle}, {v: "████████████", s: { font: { color: {rgb: COLORS.GREEN}, sz: 12 } }}, {v: "-2%", s: centerCellStyle} ]);
    dashboardData.push([ {v: "Regional Average", s: dataCellStyle}, {v: "82%", s: centerCellStyle}, {v: "██████████", s: { font: { color: {rgb: COLORS.BAR_BLUE}, sz: 12 } }}, {v: "-8%", s: centerCellStyle} ]);
    dashboardData.push([ {v: "Top Performing Unit", s: dataCellStyle}, {v: "92%", s: centerCellStyle}, {v: "█████████████", s: { font: { color: {rgb: COLORS.AMBER}, sz: 12 } }}, {v: "0%", s: centerCellStyle} ]);

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs);
    dashboardWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 15 }];
    utils.book_append_sheet(wb, dashboardWs, "4. Dashboard");

    // --- 5. BRANCH CONNECTOR ---
    const connectorData = [
        [], // Nav
        [{ v: "COMMAND CENTER: BRANCH CONNECTOR", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Paste your branch Google Sheet or OneDrive links here to create your God-View Dashboard.", s: { font: { italic: true } } }],
        [],
        [{ v: "UNIT / BRANCH NAME", s: headerStyle }, { v: "LIVE DATA LINK (PASTE URL)", s: headerStyle }, { v: "LAST REFRESHED", s: headerStyle }, { v: "STATUS", s: headerStyle }],
        [{ v: "Example: Mumbai East", s: dataCellStyle }, { v: "https://docs.google.com/spreadsheets/d/...", s: { ...dataCellStyle, font: { italic: true, color: {rgb: "808080"}} } }, { v: "Just Now", s: centerCellStyle }, { v: "CONNECTED", s: { ...centerCellStyle, font: {color: {rgb: COLORS.GREEN}} } }],
        [{ v: "", s: dataCellStyle }, { v: "", s: dataCellStyle }, { v: "", s: centerCellStyle }, { v: "PENDING", s: centerCellStyle }],
        [{ v: "", s: dataCellStyle }, { v: "", s: dataCellStyle }, { v: "", s: centerCellStyle }, { v: "PENDING", s: centerCellStyle }],
        [{ v: "", s: dataCellStyle }, { v: "", s: dataCellStyle }, { v: "", s: centerCellStyle }, { v: "PENDING", s: centerCellStyle }],
        [{ v: "", s: dataCellStyle }, { v: "", s: dataCellStyle }, { v: "", s: centerCellStyle }, { v: "PENDING", s: centerCellStyle }],
    ];
    const connectorWs = utils.aoa_to_sheet(connectorData);
    addNavBar(connectorWs);
    connectorWs['!cols'] = [{ wch: 30 }, { wch: 60 }, { wch: 20 }, { wch: 15 }];
    utils.book_append_sheet(wb, connectorWs, "5. Branch Connector");

    // --- MASTER TASK REGISTER & CHECKLISTS ---
    const masterData: any[][] = [["Task ID", "Operational Task", "Control Type", "Structural Role", "Assigned Person", "Scope Status"]];
    checklists.forEach((checklist, cIdx) => {
        const sName = safeSheetName(checklist.title);
        const scopeRow = 22 + cIdx;
        const scopeRef = `'2. Configuration & Mapping'!B${scopeRow}`;
        
        const wsData: any[][] = [[], [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }], [], ["Task Description", "Primary Assigned", "Backup Personnel", "Frequency", "Proof Required", "Date Completed", "Status"]];

        checklist.tasks.forEach((task, tIdx) => {
            const roleKey = (task.role || checklist.role).trim();
            const sectionCStart = 25 + checklists.length + 3; // Refined index
            const roleIdx = uniqueStructuralRoles.indexOf(roleKey);
            const lookupRow = sectionCStart + roleIdx;
            
            masterData.push([
                task.id, 
                task.description, 
                "Standard", 
                roleKey, 
                { f: `'2. Configuration & Mapping'!B${lookupRow}` }, 
                { f: scopeRef }
            ]);
            
            const rowInSheet = 5 + tIdx;
            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { f: `'2. Configuration & Mapping'!B${lookupRow}`, s: { ...centerCellStyle, font: { bold: true } } },
                { f: `'2. Configuration & Mapping'!C${lookupRow}`, s: centerCellStyle },
                { v: task.frequency || checklist.frequency, s: centerCellStyle },
                { v: task.proof || "Observation", s: dataCellStyle },
                { v: null, s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.INPUT_YELLOW } } } },
                { f: `IF(ISBLANK(F${rowInSheet}), "Pending", "Completed")`, s: centerCellStyle }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        ws['!cols'] = [{ wch: 60 }, { wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 25 }, { wch: 15 }, { wch: 15 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_Portfolio_v2.12.xlsx';
    writeFile(wb, fileName);
}
