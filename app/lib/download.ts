
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

    const insightBoxStyle = {
        fill: { fgColor: { rgb: COLORS.BG_LIGHT } },
        font: { italic: true, sz: 10, color: { rgb: COLORS.PRIMARY_NAVY } },
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderThin
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
                { v: "MAPPING", l: { Target: "#'2. Role Mapping'!A1" }, s: linkStyle },
                { v: "MASTER DATA", l: { Target: "#'Master Task Register'!A1" }, s: linkStyle }
            ]
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        for(let i=0; i<5; i++) {
            const cell = ws[utils.encode_cell({r:0, c:i})];
            if(cell) cell.s = linkStyle;
        }
        ws['!merges'] = ws['!merges'] || [];
        ws['!views'] = [{ state: 'frozen', ySplit: 1, showGridLines: false }];
    };

    // --- 1. COVER PAGE (Deployment Certificate) ---
    const coverData = [
        [], // Nav Space
        [],
        [{ v: "OPERATIONAL GOVERNANCE ARCHITECTURE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `System Version 2.11 Enterprise Build`, s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [],
        [{ v: `Industry Sector: ${item.category}`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Organization Entity: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Location Name / Unit ID: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Deployment Date: ${new Date().toLocaleDateString()}`, s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Protocol Classification: High-Liability Environment", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "This document constitutes proprietary governance infrastructure. Unauthorized redistribution is prohibited.", s: { font: { sz: 8, italic: true, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs);
    coverWs['!cols'] = [{ wch: 100 }];
    coverWs['!rows'] = [{ hpt: 30 }, null, { hpt: 45 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- SUCCESS PARTNER INSTRUCTIONS ---
    const introData = [
        [], // Nav
        [{ v: "Hey there! Let's get your operations audit-ready.", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Follow these steps to turn tribal knowledge into permanent infrastructure.", s: { font: { italic: true } } }],
        [],
        [{ v: "STEP 1: Setup Your Team (Chef Rahul, Sarah, etc.)", s: { font: { bold: true } } }],
        [{ v: "Head to the '2. Role Mapping' tab. In Section A, list your staff members once. This prevents typos and ensures your dashboard math is accurate.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 2: Assigned Heroes & Backups", s: { font: { bold: true } } }],
        [{ v: "In Section B, map your staff to the structural roles. Pick a 'Primary' person and a 'Backup'. Our system will instantly push these names into every module.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "STEP 3: Delegation & Privacy", s: { font: { bold: true } } }],
        [{ v: "Share this file via OneDrive or Google Drive. Your team only edits the 'Date Completed' column in their respective checklists. You manage the high-level Dashboard.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "Automated Alerts & Notifications", s: { font: { bold: true, color: { rgb: COLORS.SUB_NAVY } } } }],
        [{ v: "• THE MICROSOFT PATH: Host on OneDrive. Use 'Power Automate' to watch for 'Pending' tasks and send you email alerts.", s: { alignment: { wrapText: true } } }],
        [{ v: "• THE GOOGLE PATH: Import to Google Sheets. Use 'Tools > Notification Rules' for instant alerts upon any update.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "On the go? Double-tap the date cell in the Excel Mobile App to trigger the native calendar picker for fast updates.", s: { font: { italic: true, color: { rgb: COLORS.GREEN } }, alignment: { wrapText: true } } }],
    ];
    const introWs = utils.aoa_to_sheet(introData);
    addNavBar(introWs);
    introWs['!cols'] = [{ wch: 110 }];
    utils.book_append_sheet(wb, introWs, "Quick Start Guide");

    // --- 2. ROLE MAPPING & STAFF REGISTER ---
    const mappingData = [
        [], // Nav
        [{ v: "SECTION A: PERSONNEL REGISTER (DEFINE UNIQUE STAFF)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "ID / Employee Code", s: headerStyle }, { v: "Department", s: headerStyle }, { v: "Assigned Unit / Management Scope", s: headerStyle }, { v: "Current Status", s: headerStyle }],
    ];
    for(let i=0; i<15; i++) mappingData.push([ 
        {v:"", s: { ...dataCellStyle, fill: {fgColor:{rgb:"FFFFE0"}}}}, 
        {v:"", s:dataCellStyle}, 
        {v:"", s:dataCellStyle}, 
        {v:"", s: { ...dataCellStyle, fill: {fgColor:{rgb:"E0F2F1"}}}},
        {v:"Active", s:centerCellStyle} 
    ]);
    
    mappingData.push([]);
    mappingData.push([{ v: "SECTION B: STRUCTURAL ROLE ALLOCATION", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    mappingData.push([{ v: "Structural Role", s: headerStyle }, { v: "Assigned Primary Person", s: headerStyle }, { v: "Backup Personnel", s: headerStyle }, { v: "Resilience Level", s: headerStyle }]);
    
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim(), s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } }, font: { bold: true } } }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "E0F2F1" } } } },
        { v: "Locked", s: centerCellStyle }
    ]));

    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs);
    setColumnWidths(mappingWs, [30, 20, 20, 35, 15]);
    mappingWs['!rows'] = [{ hpt: 30 }, { hpt: 25 }, { hpt: 30 }];
    utils.book_append_sheet(wb, mappingWs, "2. Role Mapping");

    // --- 3. MODULE INDEX ---
    const indexData = [
        [], // Nav
        [{ v: "OPERATIONAL MODULE DIRECTORY", s: { font: { sz: 16, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [],
        [{ v: "MODULE TITLE", s: headerStyle }, { v: "DEPARTMENT", s: headerStyle }, { v: "FREQUENCY", s: headerStyle }, { v: "STATUS", s: headerStyle }]
    ];
    checklists.forEach(c => {
        const sName = safeSheetName(c.title);
        indexData.push([
            { v: c.title, l: { Target: `#'${sName}'!A1` }, s: { ...dataCellStyle, font: { color: { rgb: "0000FF" }, underline: true, bold: true } } },
            { v: c.department, s: centerCellStyle },
            { v: c.frequency, s: centerCellStyle },
            { v: "READY", s: { ...centerCellStyle, font: { color: { rgb: COLORS.GREEN } } } }
        ]);
    });
    const indexWs = utils.aoa_to_sheet(indexData);
    addNavBar(indexWs);
    setColumnWidths(indexWs, [50, 25, 20, 15]);
    utils.book_append_sheet(wb, indexWs, "3. Module Index");

    // --- 4. DASHBOARD (The Intelligence Console) ---
    const totalTasksFormula = `COUNTA('Master Task Register'!B:B)-1`;
    const activeStaffFormula = `COUNTIF('2. Role Mapping'!A3:A17, "*?")`;
    const highestLoadFormula = `IFERROR(INDEX('2. Role Mapping'!A3:A17, MATCH(MAX(C7:C21), C7:C21, 0)), "N/A")`;
    
    const dashboardData = [
        [], // Nav
        [{ v: "TOTAL CONTROL POINTS", s: kpiTitleStyle }, { v: "ACTIVE PERSONNEL", s: kpiTitleStyle }, { v: "HIGHEST LOAD PERSON", s: kpiTitleStyle }, { v: "GOVERNANCE STATUS", s: kpiTitleStyle }],
        [{ f: totalTasksFormula, s: kpiBoxStyle }, { f: activeStaffFormula, s: kpiBoxStyle }, { f: highestLoadFormula, s: { ...kpiBoxStyle, font: { sz: 10 } } }, { v: "STABLE", s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.GREEN }, sz: 10 } } }],
        [],
        [{ v: "PERSPECTIVE: HUMAN RESOURCE RISK & BURNOUT ALERT", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Unit / Scope", s: headerStyle }, { v: "Total Tasks Across Roles", s: headerStyle }, { v: "Portfolio Reach", s: headerStyle }, { v: "Burnout Alert", s: headerStyle }],
    ];

    for(let i=0; i<15; i++) {
        const rowInMapping = 3 + i;
        const rowInDash = 7 + i;
        const nameRef = `'2. Role Mapping'!A${rowInMapping}`;
        const locRef = `'2. Role Mapping'!D${rowInMapping}`;
        
        dashboardData.push([
            { f: nameRef, s: { ...dataCellStyle, font: { bold: true } } },
            { f: locRef, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, COUNTIF('Master Task Register'!E:E, ${nameRef}))`, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, 1)`, s: centerCellStyle },
            { f: `IF(C${rowInDash}>40, "CRITICAL LOAD", IF(C${rowInDash}>20, "HIGH LOAD", "STABLE"))`, s: centerCellStyle }
        ]);
    }

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs);
    setColumnWidths(dashboardWs, [30, 35, 20, 15, 20]);
    dashboardWs['!rows'] = [{ hpt: 30 }, { hpt: 20 }, { hpt: 45 }, { hpt: 15 }];
    
    // Conditional Formatting for Burnout Alerts
    dashboardWs['!conditional_formatting'] = [
        {
            ref: "A7:A21", // Names
            rules: [
                { type: "expression", formula: "C7>40", style: { font: { color: { rgb: COLORS.RED }, bold: true } } },
                { type: "expression", formula: "C7>20", style: { font: { color: { rgb: COLORS.AMBER }, bold: true } } }
            ]
        },
        {
            ref: "E7:E21", // Alert Text
            rules: [
                { type: "expression", formula: "C7>40", style: { fill: { fgColor: { rgb: "FFC7CE" } }, font: { color: { rgb: COLORS.RED }, bold: true } } },
                { type: "expression", formula: "C7>20", style: { fill: { fgColor: { rgb: "FFEB9C" } }, font: { color: { rgb: COLORS.AMBER }, bold: true } } }
            ]
        }
    ];
    utils.book_append_sheet(wb, dashboardWs, "4. Dashboard");

    // --- 5. MASTER TASK REGISTER (The Database) ---
    const masterData: any[][] = [
        ["Task ID", "Operational Task", "Control Type", "Structural Role", "Assigned Person", "Risk Points"],
    ];
    checklists.forEach(checklist => {
        checklist.tasks.forEach(task => {
            const role = (task.role || checklist.role).trim();
            const points = task.riskLevel === 'High' ? 3 : (task.priority === 'High' ? 2 : 1);
            masterData.push([
                task.id, task.description, task.riskLevel === 'High' ? 'Safety Critical' : 'Operational',
                role, { f: `IFERROR(VLOOKUP(D${masterData.length + 1}, '2. Role Mapping'!G:H, 2, FALSE), "Unassigned")` }, points
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    setColumnWidths(masterWs, [12, 60, 20, 25, 25, 12]);
    ["A1", "B1", "C1", "D1", "E1", "F1"].forEach(cell => { if(masterWs[cell]) masterWs[cell].s = headerStyle; });
    masterWs['!autofit'] = true;
    masterWs['!autofilter'] = { ref: `A1:F${masterData.length}` };
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    // --- 6. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [], // Nav
            [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
            [],
            ["Task Description", "Control Type", "Primary Assigned", "Backup Personnel", "Frequency", "Evidence / Proof", "Date Completed", "Status"]
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const roleKey = (task.role || checklist.role).trim();
            const rowIdx = 5 + tIdx;
            const dateCell = `G${rowIdx}`;
            const statusFormula = `IF(ISBLANK(${dateCell}), "Pending", "Completed")`;

            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { v: task.riskLevel === 'High' ? 'Safety Critical' : 'Operational', s: centerCellStyle },
                { f: `IFERROR(VLOOKUP("${roleKey}", '2. Role Mapping'!G:I, 2, FALSE), "Unassigned")`, s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } } } },
                { f: `IFERROR(VLOOKUP("${roleKey}", '2. Role Mapping'!G:I, 3, FALSE), "None")`, s: dataCellStyle },
                { v: task.frequency || checklist.frequency, s: centerCellStyle },
                { v: task.proof || "Not Specified", s: dataCellStyle },
                { v: null, s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } },
                { f: statusFormula, s: centerCellStyle }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        setColumnWidths(ws, [65, 20, 25, 25, 15, 30, 15, 15]);
        ws['!rows'] = [{ hpt: 30 }, { hpt: 35 }, { hpt: 10 }, { hpt: 30 }];
        ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        ws['!autofilter'] = { ref: `A4:H${wsData.length}` };
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
        for (let R = 4; R <= range.e.r; ++R) {
            const cell = ws[utils.encode_cell({r:R, c:6})];
            if(cell) cell.z = 'dd-mm-yyyy';
        }

        utils.book_append_sheet(wb, ws, sName);
    });

    const finalSheetNames = ["1. Cover Page", "Quick Start Guide", "2. Role Mapping", "3. Module Index", "4. Dashboard"];
    checklists.forEach(c => finalSheetNames.push(safeSheetName(c.title)));
    finalSheetNames.push("Master Task Register");
    wb.SheetNames = finalSheetNames;

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_Governance_v2.11.xlsx';
    writeFile(wb, fileName);
}

const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
    ws['!cols'] = widths.map(wch => ({ wch }));
};
