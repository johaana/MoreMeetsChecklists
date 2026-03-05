
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
    
    // --- EXECUTIVE COLOR PALETTE ---
    const COLORS = {
        PRIMARY_BG: "0A2540", // Executive Blue
        HEADER_TEXT: "FFFFFF",
        ACCENT_BG: "F5A623",  // Muted Gold
        LOCKED_BG: "F3F4F6",  // Subtle Gray
        ALERT_BG: "FFC7CE",
        ALERT_TEXT: "9C0006",
        STABLE_BG: "C6EFCE",
        STABLE_TEXT: "006100",
        BORDER: "D1D5DB"      // Clean Border
    };

    // --- REFINED STYLES ---
    const borderFull = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const titleStyle = { 
        font: { sz: 16, bold: true, color: { rgb: COLORS.HEADER_TEXT } }, 
        fill: { fgColor: { rgb: COLORS.PRIMARY_BG } }, 
        alignment: { vertical: 'center', horizontal: 'center' } 
    };

    const headerStyle = { 
        font: { bold: true, color: { rgb: COLORS.HEADER_TEXT }, sz: 10 }, 
        fill: { fgColor: { rgb: COLORS.PRIMARY_BG } }, 
        alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
        border: borderFull
    };

    const subHeaderStyle = { 
        font: { bold: true, sz: 12 }, 
        fill: { fgColor: { rgb: "E5E7EB" } }, 
        alignment: { vertical: 'center', horizontal: 'left' },
        border: borderFull
    };

    const instructionTitleStyle = { 
        font: { bold: true, sz: 11, color: { rgb: COLORS.PRIMARY_BG } }, 
        alignment: { vertical: 'top' } 
    };

    const instructionBodyStyle = { 
        font: { sz: 10, color: { rgb: "4B5563" } }, 
        alignment: { wrapText: true, vertical: 'top' } 
    };

    const dataCellStyle = { 
        alignment: { vertical: 'center' },
        border: borderFull
    };

    const dataCellCenterStyle = { 
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderFull
    };

    const lockedColStyle = { 
        fill: { fgColor: { rgb: COLORS.LOCKED_BG } }, 
        font: { color: { rgb: "374151" }, italic: true }, 
        alignment: { vertical: 'center' },
        border: borderFull
    };

    const footerStyle = { 
        font: { italic: true, sz: 8, color: { rgb: "9CA3AF" } }, 
        alignment: { horizontal: 'center', vertical: 'center' } 
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
        [{ v: `OPERATIONAL GOVERNANCE SYSTEM: ${packTitle}`, s: titleStyle }],
        [],
        [{ v: "System Objective: To convert individual brilliance into permanent organizational infrastructure.", s: { font: { sz: 11, italic: true }, alignment: { horizontal: 'center' } } }],
        [{ v: `Industry Sector: ${item.category}`, s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Governance Structure", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [{ v: "1. Role Mapping | 2. Risk Dashboard | 3. Master Register | 4. Execution Checklists", s: { alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "Professional Customization & Support: more@moremeets.com", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_BG } }, alignment: { horizontal: 'center' } } }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    coverWs['!cols'] = [{ wch: 90 }];
    coverWs['!rows'] = [{ hpt: 40 }, null, { hpt: 20 }];
    coverWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        { s: { r: 2, c: 0 }, e: { r: 2, c: 0 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 0 } },
        { s: { r: 5, c: 0 }, e: { r: 5, c: 0 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 0 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 0 } }
    ];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. INSTRUCTIONS & LEGEND ---
    const instructionsData = [
        [{ v: "SYSTEM ONBOARDING GUIDE (15 MINUTE SETUP)", s: titleStyle }, null],
        [],
        [{ v: "Step 1", s: instructionTitleStyle }, { v: "Go to '3. Role Mapping'. Enter the names of staff members for each structural responsibility.", s: instructionBodyStyle }],
        [{ v: "Step 2", s: instructionTitleStyle }, { v: "Enter the 'Total Personnel Count' at the top of the Mapping sheet to calibrate risk math.", s: instructionBodyStyle }],
        [{ v: "Step 3", s: instructionTitleStyle }, { v: "Check '4. Load Dashboard' to identify Single Point of Failure (SPOF) risks.", s: instructionBodyStyle }],
        [{ v: "Step 4", s: instructionTitleStyle }, { v: "Use the filter arrows on checklist headers to generate personal daily to-do lists.", s: instructionBodyStyle }],
        [],
        [{ v: "RISK WEIGHTING LOGIC", s: subHeaderStyle }, null],
        [{ v: "Safety Critical", s: { font: { bold: true, color: { rgb: COLORS.ALERT_TEXT } } } }, { v: "3 Points (Life Safety / Immediate Regulatory Shutdown Risk)" }],
        [{ v: "Regulatory", s: { font: { bold: true, color: { rgb: "1D4ED8" } } } }, { v: "2 Points (Compliance / Audit Locked Requirement)" }],
        [{ v: "Operational", s: { font: { bold: true, color: { rgb: "059669" } } } }, { v: "1 Point (Standard Quality / Efficiency Metric)" }],
    ];
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!cols'] = [{ wch: 20 }, { wch: 70 }];
    instructionsWs['!rows'] = [{ hpt: 35 }, null, { hpt: 30 }, { hpt: 30 }, { hpt: 30 }, { hpt: 30 }];
    instructionsWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 1 } }];
    utils.book_append_sheet(wb, instructionsWs, "2. Instructions");

    // --- 3. ROLE MAPPING MATRIX ---
    const mappingData = [
        [{ v: "CENTRAL ROLE MAPPING (GOVERNANCE CONTROL)", s: titleStyle }, null, null, null, null],
        [{ v: "Total Personnel Count at Location:", s: { font: { bold: true } } }, { v: 10, s: { font: { bold: true, sz: 12 }, alignment: { horizontal: 'center' } } }, null, null, null],
        [],
        [{ v: "Structural Role", s: headerStyle }, { v: "Local Designation", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Backup Assigned?", s: headerStyle }, { v: "Escalation Authority", s: headerStyle }]
    ];
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim(), s: lockedColStyle }, 
        { v: role.trim(), s: dataCellStyle }, 
        { v: "", s: { ...dataCellStyle, fill: { fgColor: { rgb: "FFFFE0" } } } }, // Light yellow for edit hint
        { v: "N", s: dataCellCenterStyle },
        { v: "General Manager", s: dataCellStyle }
    ]));
    const mappingWs = utils.aoa_to_sheet(mappingData);
    mappingWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
    mappingWs['!rows'] = [{ hpt: 35 }, { hpt: 25 }, { hpt: 10 }, { hpt: 25 }];
    mappingWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }];
    utils.book_append_sheet(wb, mappingWs, "3. Role Mapping");

    // --- 4. GOVERNANCE LOAD DASHBOARD ---
    const dashboardData = [
        [{ v: "OPERATIONAL RISK & GOVERNANCE DASHBOARD", s: titleStyle }, null, null, null, null],
        [],
        [{ v: "A. GOVERNANCE LOAD (BY ROLE)", s: subHeaderStyle }, null, null, null, null],
        [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Total Tasks", s: headerStyle }, { v: "Risk Score", s: headerStyle }, { v: "Status", s: headerStyle }]
    ];
    
    uniqueStructuralRoles.forEach((role, idx) => {
        const rowInMapping = 5 + idx;
        const rowInDashboard = 5 + idx;
        const personRef = `'3. Role Mapping'!C${rowInMapping}`;
        const totalTasksFormula = `COUNTIF('Master Task Register'!D:D, A${rowInDashboard})`;
        const riskScoreFormula = `SUMIF('Master Task Register'!D:D, A${rowInDashboard}, 'Master Task Register'!F:F)`;
        const statusFormula = `IF(C${rowInDashboard}=0, "VACANT", "ACTIVE")`;

        dashboardData.push([
            { v: role, s: lockedColStyle }, 
            { f: personRef, s: dataCellStyle },
            { f: totalTasksFormula, s: dataCellCenterStyle }, 
            { f: riskScoreFormula, s: dataCellCenterStyle }, 
            { f: statusFormula, s: dataCellCenterStyle }
        ]);
    });

    dashboardData.push([]);
    dashboardData.push([{ v: "B. HUMAN RISK (BY INDIVIDUAL PERSONNEL)", s: subHeaderStyle }, null, null, null, null]);
    const personnelHeaderRow = dashboardData.length + 1;
    dashboardData.push([{ v: "Staff Member Name", s: headerStyle }, { v: "Total Tasks Held", s: headerStyle }, { v: "Risk Load", s: headerStyle }, { v: "Critical Controls %", s: headerStyle }, { v: "Structural Status", s: headerStyle }]);

    uniqueStructuralRoles.forEach((_, idx) => {
        const rowInMapping = 5 + idx;
        const personNameRef = `'3. Role Mapping'!C${rowInMapping}`;
        const rowInDashboard = personnelHeaderRow + 1 + idx;

        const totalTasksByPerson = `COUNTIF('Master Task Register'!E:E, A${rowInDashboard})`;
        const riskScoreByPerson = `SUMIF('Master Task Register'!E:E, A${rowInDashboard}, 'Master Task Register'!F:F)`;
        const criticalCountByPerson = `COUNTIFS('Master Task Register'!E:E, A${rowInDashboard}, 'Master Task Register'!C:C, "Safety Critical")`;
        const totalCriticalGlobal = `COUNTIF('Master Task Register'!C:C, "Safety Critical")`;
        const criticalRatioByPerson = `IF(${totalCriticalGlobal}=0, 0, ${criticalCountByPerson}/${totalCriticalGlobal})`;
        
        // SPOF Alert Logic
        const spofLogic = `IF(A${rowInDashboard}="", "N/A", IF(${criticalRatioByPerson} > 0.5, "HIGH CONCENTRATION", "STABLE"))`;

        dashboardData.push([
            { f: personNameRef, s: dataCellStyle },
            { f: totalTasksByPerson, s: dataCellCenterStyle },
            { f: riskScoreByPerson, s: dataCellCenterStyle },
            { f: criticalRatioByPerson, s: { ...dataCellCenterStyle, numFmt: '0%' } },
            { f: spofLogic, s: dataCellCenterStyle }
        ]);
    });
    
    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    dashboardWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 20 }, { wch: 35 }];
    dashboardWs['!rows'] = [{ hpt: 35 }, null, { hpt: 25 }, { hpt: 25 }];
    dashboardWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } },
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } },
        { s: { r: personnelHeaderRow - 2, c: 0 }, e: { r: personnelHeaderRow - 2, c: 4 } }
    ];
    utils.book_append_sheet(wb, dashboardWs, "4. Load Dashboard");

    // --- 5. MASTER TASK REGISTER (ENGINE) ---
    const masterData: any[][] = [
        [{ v: "MASTER TASK CONSOLIDATION (SYSTEM ENGINE)", s: titleStyle }, null, null, null, null, null],
        [{ v: "Task ID", s: headerStyle }, { v: "Operational Task", s: headerStyle }, { v: "Control Type", s: headerStyle }, { v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Risk Points", s: headerStyle }]
    ];

    checklists.forEach(checklist => {
        checklist.tasks.forEach(task => {
            const role = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            const points = controlType === 'Safety Critical' ? 3 : (controlType === 'Regulatory' ? 2 : 1);
            
            masterData.push([
                { v: task.id, s: dataCellCenterStyle },
                { v: task.description, s: dataCellStyle },
                { v: controlType, s: dataCellCenterStyle },
                { v: role, s: dataCellStyle },
                { f: `VLOOKUP(D${masterData.length + 1}, '3. Role Mapping'!A:C, 3, FALSE)`, s: dataCellStyle },
                { v: points, s: dataCellCenterStyle }
            ]);
        });
    });

    const masterWs = utils.aoa_to_sheet(masterData);
    masterWs['!cols'] = [{ wch: 15 }, { wch: 60 }, { wch: 20 }, { wch: 25 }, { wch: 30 }, { wch: 12 }];
    masterWs['!rows'] = [{ hpt: 35 }, { hpt: 25 }];
    masterWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }];
    masterWs['!SheetViews'] = [{ hidden: true }]; 
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    // --- 6. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [{ v: `${checklist.title.toUpperCase()}`, s: titleStyle }, null, null, null, null, null],
            [],
            [{ v: 'Operational Task', s: headerStyle }, { v: 'Control Type', s: headerStyle }, { v: 'Structural Role', s: headerStyle }, { v: 'Assigned Person', s: headerStyle }, { v: 'Escalation', s: headerStyle }, { v: 'Frequency', s: headerStyle }],
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = 4 + tIdx;
            const structuralRole = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            
            const lookupFormula = `IF(VLOOKUP(C${rowNum},'3. Role Mapping'!A:C,3,FALSE)=0, "Unassigned Responsibility", VLOOKUP(C${rowNum},'3. Role Mapping'!A:C,3,FALSE))`;

            wsData.push([
                { v: task.description, s: { ...dataCellStyle, wrapText: true } }, 
                { v: controlType, s: dataCellCenterStyle },
                { v: structuralRole, s: lockedColStyle },
                { f: lookupFormula, s: dataCellStyle }, 
                { v: task.role || "Management", s: dataCellStyle },
                { v: task.frequency || checklist.frequency, s: dataCellCenterStyle }
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!cols'] = [{ wch: 65 }, { wch: 20 }, { wch: 25 }, { wch: 35 }, { wch: 25 }, { wch: 15 }];
        ws['!rows'] = [{ hpt: 35 }, { hpt: 10 }, { hpt: 25 }];
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }];
        ws['!autofilter'] = { ref: `A3:F${wsData.length}` }; 
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_') + '_v2.5_Stable.xlsx';
    writeFile(wb, fileName);
}
