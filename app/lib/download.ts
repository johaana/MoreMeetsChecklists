
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
        BORDER: "D1D5DB"
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

    // --- HELPER: ADD NAV BAR ---
    const addNavBar = (ws: WorkSheet) => {
        const navData = [
            [
                { v: "HOME", l: { Target: "#'1. Cover Page'!A1" }, s: linkStyle },
                { v: "INDEX", l: { Target: "#'3. Module Index'!A1" }, s: linkStyle },
                { v: "DASHBOARD", l: { Target: "#'4. Dashboard'!A1" }, s: linkStyle },
                { v: "CONFIG & MAPPING", l: { Target: "#'2. Configuration & Mapping'!A1" }, s: linkStyle },
                { v: "MASTER DATA", l: { Target: "#'Master Task Register'!A1" }, s: linkStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        for(let i=0; i<5; i++) {
            const cell = ws[utils.encode_cell({r:0, c:i})];
            if(cell) cell.s = linkStyle;
        }
        ws['!views'] = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
    };

    // --- 1. COVER PAGE (Institutional Identification) ---
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
        [{ v: `Location ID / Unit ID: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Deployment Date: ${new Date().toLocaleDateString()}`, s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "CONFIDENTIAL GOVERNANCE ASSET", s: { font: { bold: true, color: { rgb: COLORS.RED } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 100 }];
    coverWs['!rows'] = [{ hpt: 30 }, null, { hpt: 45 }, null, null, { hpt: 100 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- SUCCESS PARTNER INSTRUCTIONS ---
    const introData = [
        [], // Nav
        [{ v: "Hey there! Let's get your operations mission-ready.", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Follow these 3 steps to transform tribal knowledge into permanent infrastructure.", s: { font: { italic: true } } }],
        [],
        [{ v: "STEP 1: Register Your Personnel (The 'Who')", s: { font: { bold: true } } }],
        [{ v: "Head to the '2. Configuration & Mapping' tab. List your team members (e.g., Chef Rahul, Sarah). Add their Location/Unit if you manage multiple sites.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 2: Set Your Scope (The 'What')", s: { font: { bold: true } } }],
        [{ v: "Don't have a pool or a bar? No problem. In Section B of the mapping sheet, set non-applicable modules to 'N/A'. The Dashboard will instantly adjust your stats.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 3: Assign Heroes & Backups (The 'How')", s: { font: { bold: true } } }],
        [{ v: "Map your humans to the structural roles. If a role is empty, the system will flag a 'VACANT' alert in the checklists and dashboard.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "Need Setup Assistance?", s: { font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "Your purchase includes a 30-minute 'Command Console' strategy session. We'll help you map your roles and set up your portfolio dashboard.", s: { alignment: { wrapText: true } } }],
        [{ v: "BOOK YOUR SESSION: [ CALENDLY LINK PLACEHOLDER ]", l: { Target: "https://calendly.com" }, s: { font: { bold: true, color: { rgb: COLORS.GREEN }, underline: true } } }],
        [],
        [{ v: "Privacy Tip: Use 'Review > Protect Sheet' to lock the Dashboard and Mapping tabs so staff can only edit their specific checklists.", s: { font: { italic: true, color: { rgb: "808080" } } } }],
    ];
    const introWs = utils.aoa_to_sheet(introData);
    addNavBar(introWs);
    introWs['!cols'] = [{ wch: 110 }];
    utils.book_append_sheet(wb, introWs, "Quick Start Guide");

    // --- 2. CONFIGURATION & MAPPING ---
    const mappingData = [
        [], // Nav
        [{ v: "SECTION A: PERSONNEL REGISTER (DEFINE UNIQUE STAFF)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Internal Designation", s: headerStyle }, { v: "Primary Unit/Location", s: headerStyle }, { v: "Management Scope", s: headerStyle }, { v: "Status", s: headerStyle }],
    ];
    for(let i=0; i<15; i++) mappingData.push([ {v:"", s: { ...dataCellStyle, fill: {fgColor:{rgb:"FFFFE0"}}}}, {v:"", s:dataCellStyle}, {v:"", s:dataCellStyle}, {v:"Single Unit", s:dataCellStyle}, {v:"Active", s:centerCellStyle} ]);
    
    mappingData.push([]);
    mappingData.push([{ v: "SECTION B: MODULE SCOPE CONTROL (ON/OFF)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Operational Module", s: headerStyle }, { v: "Applicability Status", s: headerStyle }, { v: "Note", s: headerStyle }]);
    checklists.forEach(c => mappingData.push([{ v: c.title, s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } } } }, { v: "Applicable", s: { ...centerCellStyle, fill: { fgColor: { rgb: "E0F2F1" } } } }, { v: "Required for standard ops", s: dataCellStyle }]));

    mappingData.push([]);
    mappingData.push([{ v: "SECTION C: ROLE ALLOCATION (ASSIGNMENT)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Structural Role", s: headerStyle }, { v: "Primary Human Assigned", s: headerStyle }, { v: "Backup Personnel", s: headerStyle }, { v: "Assignment Alert", s: headerStyle }]);
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim(), s: { ...dataCellStyle, font: { bold: true } } }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "E0F2F1" } } } },
        { f: `IF(OR(B${mappingData.length+1}="", B${mappingData.length+1}="VACANT"), "RE-ASSIGN REQUIRED", "LOCKED")`, s: centerCellStyle }
    ]));

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    setColumnWidths(mappingWs, [30, 25, 25, 20, 15]);
    utils.book_append_sheet(wb, mappingWs, "2. Configuration & Mapping");

    // --- 3. MODULE INDEX ---
    const indexData = [
        [], // Nav
        [{ v: "OPERATIONAL MODULE DIRECTORY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [],
        [{ v: "MODULE TITLE", s: headerStyle }, { v: "DEPARTMENT", s: headerStyle }, { v: "FREQUENCY", s: headerStyle }, { v: "SCOPE STATUS", s: headerStyle }]
    ];
    checklists.forEach((c, idx) => {
        const sName = safeSheetName(c.title);
        const scopeRef = `'2. Configuration & Mapping'!B${21+idx}`;
        indexData.push([
            { v: c.title, l: { Target: `#'${sName}'!A1` }, s: { ...dataCellStyle, font: { color: { rgb: "0000FF" }, underline: true, bold: true } } },
            { v: c.department, s: centerCellStyle },
            { v: c.frequency, s: centerCellStyle },
            { f: scopeRef, s: centerCellStyle }
        ]);
    });
    const indexWs = utils.aoa_to_sheet(indexData);
    addNavBar(indexWs);
    setColumnWidths(indexWs, [50, 25, 20, 15]);
    utils.book_append_sheet(wb, indexWs, "3. Module Index");

    // --- 4. DASHBOARD (The Intelligence Console) ---
    const dashboardData = [
        [], // Nav
        [{ v: "TOTAL CONTROL POINTS", s: kpiTitleStyle }, { v: "ACTIVE PERSONNEL", s: kpiTitleStyle }, { v: "HIGHEST LOAD PERSON", s: kpiTitleStyle }, { v: "UNIT GOVERNANCE STATUS", s: kpiTitleStyle }],
        [{ f: `COUNTA('Master Task Register'!B:B)-1`, s: kpiBoxStyle }, { f: `COUNTIF('2. Configuration & Mapping'!A3:A17, "*?")`, s: kpiBoxStyle }, { f: `IFERROR(INDEX('2. Configuration & Mapping'!A3:A17, MATCH(MAX(C7:C21), C7:C21, 0)), "N/A")`, s: { ...kpiBoxStyle, font: { sz: 10 } } }, { v: "STABLE", s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.GREEN }, sz: 10 } } }],
        [],
        [{ v: "SECTION A: HUMAN RESOURCE RISK & BURNOUT ALERT", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Assigned Unit", s: headerStyle }, { v: "Total Task Load", s: headerStyle }, { v: "Portfolio Reach", s: headerStyle }, { v: "Load Intensity", s: headerStyle }],
    ];

    for(let i=0; i<10; i++) {
        const rowInMapping = 3 + i;
        const nameRef = `'2. Configuration & Mapping'!A${rowInMapping}`;
        const locRef = `'2. Configuration & Mapping'!C${rowInMapping}`;
        dashboardData.push([
            { f: nameRef, s: dataCellStyle },
            { f: locRef, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, COUNTIF('Master Task Register'!E:E, ${nameRef}))`, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, 1)`, s: centerCellStyle },
            { f: `IF(C${7+i}>40, "CRITICAL", IF(C${7+i}>20, "HIGH", "STABLE"))`, s: centerCellStyle }
        ]);
    }

    dashboardData.push([], [{ v: "SECTION B: PORTFOLIO BENCHMARKING (MULTI-UNIT VIEW)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    dashboardData.push([{ v: "Comparison Entity", s: headerStyle }, { v: "Compliance Score", s: headerStyle }, { v: "Visual Benchmark", s: headerStyle }, { v: "Gap vs. Best", s: headerStyle }]);
    dashboardData.push([ {v: "Current Unit", s: dataCellStyle}, {v: "88%", s: centerCellStyle}, {v: "||||||||||||||||||", s: { font: { color: {rgb: COLORS.BAR_BLUE}, name: 'Consolas' } }}, {v: "-4%", s: centerCellStyle} ]);
    dashboardData.push([ {v: "Regional Average", s: dataCellStyle}, {v: "82%", s: centerCellStyle}, {v: "|||||||||||||||", s: { font: { color: {rgb: COLORS.GRAY_TEXT}, name: 'Consolas' } }}, {v: "-10%", s: centerCellStyle} ]);
    dashboardData.push([ {v: "Top Performing Unit", s: dataCellStyle}, {v: "92%", s: centerCellStyle}, {v: "||||||||||||||||||||", s: { font: { color: {rgb: COLORS.GREEN}, name: 'Consolas' } }}, {v: "0%", s: centerCellStyle} ]);

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs);
    setColumnWidths(dashboardWs, [30, 25, 15, 15, 20]);
    utils.book_append_sheet(wb, dashboardWs, "4. Dashboard");

    // --- MASTER TASK REGISTER & CHECKLISTS ---
    const masterData: any[][] = [["Task ID", "Operational Task", "Control Type", "Structural Role", "Assigned Person", "Scope Status"]];
    checklists.forEach((checklist, cIdx) => {
        const sName = safeSheetName(checklist.title);
        const scopeRef = `'2. Configuration & Mapping'!B${21+cIdx}`;
        
        const wsData: any[][] = [[], [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }], [], ["Task Description", "Primary Assigned", "Backup Personnel", "Frequency", "Proof Required", "Date Completed", "Status"]];

        checklist.tasks.forEach((task, tIdx) => {
            const roleKey = (task.role || checklist.role).trim();
            const rowInMap = 21 + uniqueStructuralRoles.indexOf(roleKey); // Placeholder logic for finding role row
            
            masterData.push([task.id, task.description, "Safety", roleKey, { f: `IFERROR(VLOOKUP("${roleKey}", '2. Configuration & Mapping'!G:I, 2, FALSE), "VACANT")` }, { f: scopeRef }]);
            
            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { f: `IFERROR(VLOOKUP("${roleKey}", '2. Configuration & Mapping'!G:I, 2, FALSE), "VACANT")`, s: centerCellStyle },
                { f: `IFERROR(VLOOKUP("${roleKey}", '2. Configuration & Mapping'!G:I, 3, FALSE), "NONE")`, s: centerCellStyle },
                { v: task.frequency || checklist.frequency, s: centerCellStyle },
                { v: task.proof || "Not Specified", s: dataCellStyle },
                { v: null, s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } },
                { f: `IF(ISBLANK(F${5+tIdx}), "Pending", "Completed")`, s: centerCellStyle }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        setColumnWidths(ws, [60, 25, 25, 15, 25, 15, 15]);
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        utils.book_append_sheet(wb, ws, sName);
    });

    const masterWs = utils.aoa_to_sheet(masterData);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_Portfolio_v2.12.xlsx';
    writeFile(wb, fileName);
}
