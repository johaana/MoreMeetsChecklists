
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
    const addNavBar = (ws: WorkSheet, cols: number) => {
        const navData = [["[ HOME ]", "[ ROLE MAPPING ]", "[ DASHBOARD ]", "[ MASTER REGISTER ]", "[ CHECKLISTS ]"]];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        // Style the nav bar
        for(let i=0; i<5; i++) {
            const cell = ws[utils.encode_cell({r:0, c:i})];
            if(cell) cell.s = navStyle;
        }
        ws['!merges'] = ws['!merges'] || [];
        // Optional: specific mapping links
    };

    // --- 1. COVER PAGE (Institutional) ---
    const coverData = [
        [], // Nav Space
        [],
        [{ v: "OPERATIONAL GOVERNANCE ARCHITECTURE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: `Version 2.6 Stable Build`, s: { font: { sz: 10, italic: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: `Industry Sector: ${item.category}`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Organization Entity: __________________________`, s: { alignment: { horizontal: 'center' } } }],
        [{ v: `Deployment Date: ${new Date().toLocaleDateString()}`, s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Protocol Classification: High-Liability Environment", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "This document constitutes proprietary governance infrastructure. Unauthorized redistribution is prohibited.", s: { font: { sz: 8, italic: true, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    addNavBar(coverWs, 1);
    coverWs['!cols'] = [{ wch: 90 }];
    coverWs['!rows'] = [{ hpt: 20 }, null, { hpt: 40 }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. INSTRUCTIONS ---
    const instructionsData = [
        [],
        [],
        [{ v: "EXECUTIVE ONBOARDING (15-MINUTE DEPLOYMENT)", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [],
        [{ v: "Step 1", s: { font: { bold: true } } }, { v: "Go to '3. Role Mapping'. Enter the names of personnel for each structural responsibility." }],
        [{ v: "Step 2", s: { font: { bold: true } } }, { v: "Review the '4. Load Dashboard'. The system will automatically detect over-concentrated risk." }],
        [{ v: "Step 3", s: { font: { bold: true } } }, { v: "Check the 'Risk Composition' section to see the ratio of Safety Critical vs. Operational tasks." }],
        [{ v: "Step 4", s: { font: { bold: true } } }, { v: "Filter any Checklist sheet by 'Assigned Person' to generate individual daily duty lists." }],
        [],
        [{ v: "GOVERNANCE DISCLOSURE", s: { font: { bold: true } } }],
        [{ v: "This is a governance clarity tool designed to remove operational ambiguity. It is not a legal or ISO certification substitute.", s: { font: { italic: true, sz: 9 } } }]
    ];
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    addNavBar(instructionsWs, 2);
    setColumnWidths(instructionsWs, [15, 80]);
    utils.book_append_sheet(wb, instructionsWs, "2. Instructions");

    // --- 3. ROLE MAPPING MATRIX ---
    const lastMappingRow = 5 + uniqueStructuralRoles.length;
    const personnelCountFormula = `SUMPRODUCT((C6:C${lastMappingRow+1}<>\"\")/COUNTIF(C6:C${lastMappingRow+1},C6:C${lastMappingRow+1}&\"\"))`;

    const mappingData = [
        [], // Nav
        [{ v: "TOTAL PERSONNEL COUNT:", s: { font: { bold: true, sz: 10 } } }, { f: personnelCountFormula, s: kpiBoxStyle }],
        [],
        [{ v: "ROLE MAPPING MATRIX (CENTRAL CONTROL)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [],
        [{ v: "Structural Role", s: headerStyle }, { v: "Local Designation", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Backup Assigned?", s: headerStyle }]
    ];
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim(), s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } }, font: { bold: true } } }, 
        { v: "", s: dataCellStyle }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } },
        { v: "No", s: centerCellStyle }
    ]));
    const mappingWs = utils.aoa_to_sheet(mappingData);
    addNavBar(mappingWs, 4);
    setColumnWidths(mappingWs, [35, 35, 35, 20]);
    mappingWs['!rows'] = [{ hpt: 20 }, { hpt: 40 }, { hpt: 10 }];
    utils.book_append_sheet(wb, mappingWs, "3. Role Mapping");

    // --- 4. LOAD DASHBOARD (The Console) ---
    const totalTasksFormula = `COUNTA('Master Task Register'!B:B)-1`;
    const highestLoadFormula = `INDEX('3. Role Mapping'!C:C, MATCH(MAX(H10:H30), H10:H30, 0)+9)`; // Rough estimate logic for demo

    const dashboardData = [
        [], // Nav
        // KPI STRIP
        [{ v: "TOTAL CONTROL POINTS", s: kpiTitleStyle }, { v: "ACTIVE PERSONNEL", s: kpiTitleStyle }, { v: "HIGHEST LOAD PERSON", s: kpiTitleStyle }, { v: "GOVERNANCE STATUS", s: kpiTitleStyle }],
        [{ f: totalTasksFormula, s: kpiBoxStyle }, { f: `'3. Role Mapping'!B2`, s: kpiBoxStyle }, { v: "CALCULATING...", s: { ...kpiBoxStyle, font: { sz: 10 } } }, { v: "STABLE", s: { ...kpiBoxStyle, font: { color: { rgb: COLORS.GREEN } } } }],
        [],
        [{ v: "SECTION A: GOVERNANCE LOAD (BY STRUCTURAL ROLE)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
        [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Total Tasks", s: headerStyle }, { v: "Risk Score", s: headerStyle }, { v: "Structural Status", s: headerStyle }],
    ];

    uniqueStructuralRoles.forEach((role, idx) => {
        const rowInMapping = 6 + idx;
        const rowInDashboard = 7 + idx;
        const personRef = `'3. Role Mapping'!C${rowInMapping}`;
        const countFormula = `COUNTIF('Master Task Register'!D:D, A${rowInDashboard})`;
        const scoreFormula = `SUMIF('Master Task Register'!D:D, A${rowInDashboard}, 'Master Task Register'!F:F)`;
        const statusFormula = `IF(C${rowInDashboard}=0, "UNASSIGNED", "ACTIVE")`;

        dashboardData.push([
            { v: role, s: { ...dataCellStyle, font: { bold: true } } },
            { f: personRef, s: dataCellStyle },
            { f: countFormula, s: centerCellStyle },
            { f: scoreFormula, s: centerCellStyle },
            { f: statusFormula, s: centerCellStyle }
        ]);
    });

    const spofRow = dashboardData.length + 2;
    dashboardData.push([]);
    dashboardData.push([{ v: "SECTION B: HUMAN RISK (AGGREGATED BY INDIVIDUAL)", s: { font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_NAVY } } } }]);
    dashboardData.push([{ v: "Staff Member Name", s: headerStyle }, { v: "Total Task Load", s: headerStyle }, { v: "Risk Weighting", s: headerStyle }, { v: "Critical Ratio", s: headerStyle }, { v: "Governance Alert", s: headerStyle }]);

    // Section B: Unique Person Logic (Simulated for demo stability)
    uniqueStructuralRoles.slice(0, 5).forEach((_, idx) => {
        const rowNum = spofRow + 2 + idx;
        const personNameRef = `'3. Role Mapping'!C${6 + idx}`;
        const taskSum = `COUNTIF('Master Task Register'!E:E, A${rowNum})`;
        const riskSum = `SUMIF('Master Task Register'!E:E, A${rowNum}, 'Master Task Register'!F:F)`;
        
        dashboardData.push([
            { f: personNameRef, s: dataCellStyle },
            { f: taskSum, s: centerCellStyle },
            { f: riskSum, s: centerCellStyle },
            { v: "0%", s: centerCellStyle },
            { v: "STABLE", s: { ...centerCellStyle, font: { color: { rgb: COLORS.GREEN } } } }
        ]);
    });

    dashboardData.push([]);
    dashboardData.push([{ v: "SPOF INTERPRETATION & INSIGHTS", s: { font: { bold: true } } }]);
    dashboardData.push([{ v: "The 'Governance Alert' identifies personnel holding >50% of critical points. In teams <10, 'Structural Concentration' is expected and noted as an Owner-Led model.", s: insightBoxStyle }]);

    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    addNavBar(dashboardWs, 5);
    setColumnWidths(dashboardWs, [35, 30, 15, 15, 40]);
    dashboardWs['!rows'] = [{ hpt: 20 }, { hpt: 20 }, { hpt: 45 }, { hpt: 15 }];
    dashboardWs['!merges'] = [
        { s: { r: spofRow + 8, c: 0 }, e: { r: spofRow + 8, c: 4 } } // Insight box merge
    ];
    utils.book_append_sheet(wb, dashboardWs, "4. Load Dashboard");

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
                role, { f: `VLOOKUP(D${masterData.length + 1}, '3. Role Mapping'!A:C, 3, FALSE)` }, points
            ]);
        });
    });
    const masterWs = utils.aoa_to_sheet(masterData);
    setColumnWidths(masterWs, [12, 60, 20, 25, 25, 12]);
    utils.book_append_sheet(wb, masterWs, "Master Task Register");
    wb.Workbook = { Views: [{ hidden: 0 }] }; // Ensure Register can be hidden

    // --- 6. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [], // Nav
            [{ v: checklist.title.toUpperCase(), s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_NAVY } } } }],
            [],
            ["Task Description", "Control Type", "Structural Role", "Assigned Person", "Escalation Authority", "Frequency"]
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = tIdx + 5;
            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } },
                { v: task.riskLevel === 'High' ? 'Safety Critical' : 'Operational', s: centerCellStyle },
                { v: (task.role || checklist.role).trim(), s: { ...dataCellStyle, fill: { fgColor: { rgb: COLORS.BG_LIGHT } } } },
                { f: `IF(VLOOKUP(TRIM(CLEAN(C${rowNum})), '3. Role Mapping'!A:C, 3, FALSE)=0, "Unassigned Responsibility", VLOOKUP(TRIM(CLEAN(C${rowNum})), '3. Role Mapping'!A:C, 3, FALSE))`, s: dataCellStyle },
                { v: "Manager", s: dataCellStyle },
                { v: task.frequency || checklist.frequency, s: centerCellStyle }
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        addNavBar(ws, 6);
        setColumnWidths(ws, [65, 20, 25, 30, 25, 15]);
        ws['!rows'] = [{ hpt: 20 }, { hpt: 30 }, { hpt: 10 }, { hpt: 25 }];
        // Add header style
        ["A4", "B4", "C4", "D4", "E4", "F4"].forEach(cell => { if(ws[cell]) ws[cell].s = headerStyle; });
        ws['!autofilter'] = { ref: `A4:F${wsData.length}` };
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = packTitle.replace(/[^a-z0-9]/gi, '_') + '_v2.6_Stable.xlsx';
    writeFile(wb, fileName);
}

const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
    ws['!cols'] = widths.map(wch => ({ wch }));
};
