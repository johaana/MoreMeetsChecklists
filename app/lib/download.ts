
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

    const navStyle = {
        font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.PRIMARY_NAVY } },
        alignment: { vertical: 'center', horizontal: 'center' }
    };

    const linkStyle = {
        font: { color: { rgb: COLORS.WHITE }, underline: true, sz: 9, bold: true },
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
        // Style the nav bar
        for(let i=0; i<5; i++) {
            const cell = ws[utils.encode_cell({r:0, c:i})];
            if(cell) cell.s = linkStyle;
        }
        ws['!merges'] = ws['!merges'] || [];
        ws['!views'] = [{ state: 'frozen', ySplit: 1 }];
        ws['!showGridlines'] = false;
    };

    // --- 1. COVER PAGE (Institutional Multi-Location) ---
    const coverData = [
        [], // Nav Space
        [],
        [{ v: "OPERATIONAL GOVERNANCE ARCHITECTURE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `System Version 2.8 Stable Build`, s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center' } } }],
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
    coverWs['!cols'] = [{ wch: 90 }];
    coverWs['!rows'] = [{ hpt: 20 }, null, { hpt: 40 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. ROLE MAPPING & STAFF REGISTER ---
    const mappingData = [
        [], // Nav
        [{ v: "SECTION A: PERSONNEL REGISTER (LIST ALL UNIQUE STAFF ONCE)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "ID / Employee Code", s: headerStyle }, { v: "Department", s: headerStyle }, { v: "Current Status", s: headerStyle }],
    ];
    // Add 15 blank lines for user to fill out their staff
    for(let i=0; i<15; i++) mappingData.push([ {v:"", s: { ...dataCellStyle, fill: {fgColor:{rgb:"FFFFE0"}}}}, {v:"", s:dataCellStyle}, {v:"", s:dataCellStyle}, {v:"Active", s:centerCellStyle} ]);
    
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
    setColumnWidths(mappingWs, [35, 25, 25, 20]);
    mappingWs['!rows'] = [{ hpt: 20 }, { hpt: 25 }, { hpt: 25 }];
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
    const activeStaffFormula = `COUNTA('2. Role Mapping'!A3:A17)`;
    const spofFormula = `IF(${activeStaffFormula}<10, "OWNER-LED CONCENTRATION", "INSTITUTIONAL STABLE")`;

    const dashboardData = [
        [], // Nav
        // KPI STRIP
        [{ v: "TOTAL CONTROL POINTS", s: kpiTitleStyle }, { v: "ACTIVE PERSONNEL", s: kpiTitleStyle }, { v: "HIGHEST LOAD PERSON", s: kpiTitleStyle }, { v: "GOVERNANCE STATUS", s: kpiTitleStyle }],
        [{ f: totalTasksFormula, s: kpiBoxStyle }, { f: activeStaffFormula, s: kpiBoxStyle }, { v: "DETECTING...", s: { ...kpiBoxStyle, font: { sz: 10 } } }, { f: spofFormula, s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.GREEN }, sz: 10 } } }],
        [],
        [{ v: "PERSPECTIVE 1: HUMAN RISK AGGREGATION (BY UNIQUE PERSON)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Personnel Name", s: headerStyle }, { v: "Total Tasks Across All Roles", s: headerStyle }, { v: "Risk Load Score", s: headerStyle }, { v: "Safety Critical %", s: headerStyle }, { v: "Load Alert", s: headerStyle }],
    ];

    // Person aggregation rows
    for(let i=0; i<15; i++) {
        const rowInMapping = 3 + i;
        const rowInDash = 7 + i;
        const nameRef = `'2. Role Mapping'!A${rowInMapping}`;
        
        dashboardData.push([
            { f: nameRef, s: { ...dataCellStyle, font: { bold: true } } },
            { f: `IF(${nameRef}="", 0, COUNTIF('Master Task Register'!E:E, ${nameRef}))`, s: centerCellStyle },
            { f: `IF(${nameRef}="", 0, SUMIF('Master Task Register'!E:E, ${nameRef}, 'Master Task Register'!F:F))`, s: centerCellStyle },
            { v: "0%", s: centerCellStyle },
            { f: `IF(B${rowInDash}>20, "HIGH LOAD", "STABLE")`, s: centerCellStyle }
        ]);
    }

    dashboardData.push([]);
    dashboardData.push([{ v: "SPOF INTERPRETATION & INSIGHTS", s: { font: { bold: true } } }]);
    dashboardData.push([{ v: "The 'Load Alert' identifies individuals holding a disproportionate number of control points. In multi-unit setups, this identifies potential burnout or single points of failure (SPOF) that require immediate delegation or backup assignment.", s: insightBoxStyle }]);

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs);
    setColumnWidths(dashboardWs, [35, 25, 15, 15, 25]);
    dashboardWs['!rows'] = [{ hpt: 20 }, { hpt: 20 }, { hpt: 45 }, { hpt: 15 }];
    const insightRow = dashboardData.length - 1;
    dashboardWs['!merges'].push({ s: { r: insightRow, c: 0 }, e: { r: insightRow, c: 4 } });
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
                role, { f: `VLOOKUP(D${masterData.length + 1}, '2. Role Mapping'!A:B, 2, FALSE)` }, points
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    setColumnWidths(masterWs, [12, 60, 20, 25, 25, 12]);
    ["A1", "B1", "C1", "D1", "E1", "F1"].forEach(cell => { if(masterWs[cell]) masterWs[cell].s = headerStyle; });
    masterWs['!autofilter'] = { ref: `A1:F${masterData.length}` };
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    // --- 6. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [], // Nav
            [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
            [],
            ["Task Description", "Control Type", "Primary Assigned", "Backup Personnel", "Frequency", "Evidence / Proof"]
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = tIdx + 5;
            const roleKey = (task.role || checklist.role).trim();
            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { v: task.riskLevel === 'High' ? 'Safety Critical' : 'Operational', s: centerCellStyle },
                { f: `VLOOKUP("${roleKey}", '2. Role Mapping'!A:B, 2, FALSE)`, s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } } } },
                { f: `VLOOKUP("${roleKey}", '2. Role Mapping'!A:C, 3, FALSE)`, s: dataCellStyle },
                { v: task.frequency || checklist.frequency, s: centerCellStyle },
                { v: task.proof || "Not Specified", s: dataCellStyle }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws);
        setColumnWidths(ws, [65, 20, 25, 25, 15, 30]);
        ws['!rows'] = [{ hpt: 20 }, { hpt: 30 }, { hpt: 10 }, { hpt: 25 }];
        ["A4", "B4", "C4", "D4", "E4", "F4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        ws['!autofilter'] = { ref: `A4:F${wsData.length}` };
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_Architecture_v2.8.xlsx';
    writeFile(wb, fileName);
}

const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
    ws['!cols'] = widths.map(wch => ({ wch }));
};
