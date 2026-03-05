
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
    
    // --- STYLES ---
    const titleStyle = { font: { sz: 14, bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center' } };
    const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 10 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center', wrapText: true } };
    const instructionTitleStyle = { font: { bold: true, sz: 11 }, alignment: { vertical: 'top' } };
    const instructionBodyStyle = { font: { sz: 10, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const alertStyle = { font: { bold: true, color: { rgb: "9C0006" } }, fill: { fgColor: { rgb: "FFC7CE" } }, alignment: { horizontal: 'center' } };
    const stableStyle = { font: { bold: true, color: { rgb: "006100" } }, fill: { fgColor: { rgb: "C6EFCE" } }, alignment: { horizontal: 'center' } };
    const dataCellStyle = { alignment: { vertical: 'center' } };
    const lockedColStyle = { fill: { fgColor: { rgb: "F9FAFB" } }, font: { color: { rgb: "6B7280" } }, alignment: { vertical: 'center' } };

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
    const sheetNames = checklists.map(c => safeSheetName(c.title));

    // --- 1. COVER PAGE ---
    const coverData = [
        [{ v: `OPERATIONAL GOVERNANCE SYSTEM: ${packTitle}`, s: titleStyle }],
        [],
        [{ v: "Objective: To convert individual brilliance into permanent organizational infrastructure.", s: dataCellStyle }],
        [{ v: `Industry Sector: ${item.category}`, s: dataCellStyle }],
        [],
        [{ v: "Structure: 1. Mapping | 2. Dashboard | 3. Master Register | 4. Checklists", s: dataCellStyle }],
        [],
        [{ v: "Support & Professional Customization: more@moremeets.com", s: dataCellStyle }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    coverWs['!cols'] = [{ wch: 80 }];
    coverWs['!rows'] = [{ hpt: 30 }];
    coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. INSTRUCTIONS & LEGEND ---
    const instructionsData = [
        [{ v: "QUICK START GUIDE (15 MINUTE SETUP)", s: titleStyle }],
        [],
        [{ v: "Step 1", s: instructionTitleStyle }, { v: "Go to '3. Role Mapping'. Enter the names of staff members for each structural role.", s: instructionBodyStyle }],
        [{ v: "Step 2", s: instructionTitleStyle }, { v: "Enter the 'Total Personnel Count' at the top of the Mapping sheet to calibrate risk math.", s: instructionBodyStyle }],
        [{ v: "Step 3", s: instructionTitleStyle }, { v: "Check '4. Load Dashboard' to see if one person is holding too much responsibility.", s: instructionBodyStyle }],
        [{ v: "Step 4", s: instructionTitleStyle }, { v: "Use the filter arrows on checklist headers to see tasks for specific people or priorities.", s: instructionBodyStyle }],
        [],
        [{ v: "RISK WEIGHTING LEGEND", s: instructionTitleStyle }],
        [{ v: "Safety Critical", s: { font: { bold: true } } }, { v: "3 Points (Life Safety / Immediate Shutdown Risk)" }],
        [{ v: "Regulatory", s: { font: { bold: true } } }, { v: "2 Points (Compliance / Audit Locked)" }],
        [{ v: "Operational", s: { font: { bold: true } } }, { v: "1 Point (Standard Quality / Efficiency)" }],
    ];
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!cols'] = [{ wch: 20 }, { wch: 60 }];
    instructionsWs['!rows'] = [{ hpt: 25 }];
    instructionsWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
    utils.book_append_sheet(wb, instructionsWs, "2. Instructions");

    // --- 3. ROLE MAPPING MATRIX ---
    const mappingData = [
        [{ v: "ROLE MAPPING MATRIX (CENTRAL CONTROL)", s: titleStyle }],
        [{ v: "Total Personnel Count at Location:", s: { font: { bold: true } } }, { v: 10 }],
        [],
        [{ v: "Structural Role (Fixed)", s: headerStyle }, { v: "Local Designation (Editable)", s: headerStyle }, { v: "Assigned Person Name", s: headerStyle }, { v: "Is Backup Assigned? (Y/N)", s: headerStyle }, { v: "Escalation Authority", s: headerStyle }]
    ];
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim(), s: dataCellStyle }, 
        { v: role.trim(), s: dataCellStyle }, 
        { v: "", s: dataCellStyle }, 
        { v: "N", s: dataCellStyle },
        { v: "General Manager", s: dataCellStyle }
    ]));
    const mappingWs = utils.aoa_to_sheet(mappingData);
    mappingWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 25 }, { wch: 30 }];
    mappingWs['!rows'] = [{ hpt: 25 }, { hpt: 20 }, null, { hpt: 20 }];
    mappingWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }];
    utils.book_append_sheet(wb, mappingWs, "3. Role Mapping");

    // --- 4. GOVERNANCE LOAD DASHBOARD ---
    const dashboardData = [
        [{ v: "GOVERNANCE & OPERATIONAL LOAD DASHBOARD", s: titleStyle }],
        [],
        [{ v: "A. STRUCTURAL GOVERNANCE (By Role)", s: { font: { bold: true, sz: 12 } } }],
        [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Total Tasks", s: headerStyle }, { v: "Risk Score", s: headerStyle }, { v: "Governance Status", s: headerStyle }]
    ];
    
    uniqueStructuralRoles.forEach((role, idx) => {
        const rowInMapping = 5 + idx;
        const rowInDashboard = 5 + idx;
        const personRef = `'3. Role Mapping'!C${rowInMapping}`;
        
        // Sum from Hidden Master Register
        const totalTasksFormula = `COUNTIF('Master Task Register'!D:D, A${rowInDashboard})`;
        const riskScoreFormula = `SUMIF('Master Task Register'!D:D, A${rowInDashboard}, 'Master Task Register'!F:F)`;
        
        // Status Logic (Role-based)
        const statusFormula = `IF(C${rowInDashboard}=0, "VACANT", "ACTIVE")`;

        dashboardData.push([
            { v: role, s: dataCellStyle }, 
            { f: personRef, s: dataCellStyle },
            { f: totalTasksFormula, s: dataCellStyle }, 
            { f: riskScoreFormula, s: dataCellStyle }, 
            { f: statusFormula, s: dataCellStyle }
        ]);
    });

    dashboardData.push([]);
    dashboardData.push([{ v: "B. OPERATIONAL LOAD (By Individual Personnel)", s: { font: { bold: true, sz: 12 } } }]);
    const personnelHeaderRow = dashboardData.length + 1;
    dashboardData.push([{ v: "Staff Member Name", s: headerStyle }, { v: "Total Tasks Held", s: headerStyle }, { v: "Combined Risk Score", s: headerStyle }, { v: "Critical Controls %", s: headerStyle }, { v: "Operational Health", s: headerStyle }]);

    // Map unique names for person-based load
    uniqueStructuralRoles.forEach((_, idx) => {
        const rowInMapping = 5 + idx;
        const personNameRef = `'3. Role Mapping'!C${rowInMapping}`;
        const rowInDashboard = personnelHeaderRow + 1 + idx;

        // Sum across ALL roles held by this unique name
        const totalTasksByPerson = `COUNTIF('Master Task Register'!E:E, A${rowInDashboard})`;
        const riskScoreByPerson = `SUMIF('Master Task Register'!E:E, A${rowInDashboard}, 'Master Task Register'!F:F)`;
        const criticalCountByPerson = `COUNTIFS('Master Task Register'!E:E, A${rowInDashboard}, 'Master Task Register'!C:C, "Safety Critical")`;
        const totalCriticalGlobal = `COUNTIF('Master Task Register'!C:C, "Safety Critical")`;
        const criticalRatioByPerson = `IF(${totalCriticalGlobal}=0, 0, ${criticalCountByPerson}/${totalCriticalGlobal})`;

        // SPOF Detection
        const spofLogic = `IF(A${rowInDashboard}="", "N/A", IF(${criticalRatioByPerson} > 0.5, "SPOF RISK: CRITICAL CONCENTRATION", IF('3. Role Mapping'!$B$2 < 10, "STABLE (OWNER-LED)", "STABLE")))`;

        dashboardData.push([
            { f: personNameRef, s: dataCellStyle },
            { f: totalTasksByPerson, s: dataCellStyle },
            { f: riskScoreByPerson, s: dataCellStyle },
            { f: criticalRatioByPerson, s: { ...dataCellStyle, numFmt: '0%' } },
            { f: spofLogic, s: dataCellStyle }
        ]);
    });
    
    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    dashboardWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 45 }];
    dashboardWs['!rows'] = [{ hpt: 25 }, null, { hpt: 20 }, { hpt: 20 }];
    dashboardWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }];
    utils.book_append_sheet(wb, dashboardWs, "4. Load Dashboard");

    // --- 5. MASTER TASK REGISTER (HIDDEN ENGINE) ---
    const masterData: any[][] = [
        [{ v: "MASTER TASK CONSOLIDATION (SYSTEM ENGINE)", s: titleStyle }],
        [{ v: "Task ID", s: headerStyle }, { v: "Operational Task", s: headerStyle }, { v: "Control Type", s: headerStyle }, { v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Risk Points", s: headerStyle }]
    ];

    checklists.forEach(checklist => {
        checklist.tasks.forEach(task => {
            const role = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            const points = controlType === 'Safety Critical' ? 3 : (controlType === 'Regulatory' ? 2 : 1);
            
            masterData.push([
                task.id,
                task.description,
                controlType,
                role,
                { f: `VLOOKUP(D${masterData.length + 1}, '3. Role Mapping'!A:C, 3, FALSE)` },
                points
            ]);
        });
    });

    const masterWs = utils.aoa_to_sheet(masterData);
    masterWs['!cols'] = [{ wch: 15 }, { wch: 60 }, { wch: 20 }, { wch: 25 }, { wch: 30 }, { wch: 10 }];
    masterWs['!SheetViews'] = [{ hidden: true }]; // Make it hidden
    utils.book_append_sheet(wb, masterWs, "Master Task Register");

    // --- 6. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [{ v: checklist.title, s: titleStyle }],
            [],
            [{ v: 'Operational Task', s: headerStyle }, { v: 'Control Type', s: headerStyle }, { v: 'Structural Role (Fixed)', s: headerStyle }, { v: 'Assigned Person (Mapped)', s: headerStyle }, { v: 'Escalation Role', s: headerStyle }, { v: 'Frequency', s: headerStyle }, { v: 'Status', s: headerStyle }],
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = 4 + tIdx;
            const structuralRole = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            
            const lookupFormula = (colIndex: number) => 
                `IF(ISERROR(VLOOKUP(C${rowNum},'3. Role Mapping'!A:E,${colIndex},FALSE)), "Unassigned", IF(VLOOKUP(C${rowNum},'3. Role Mapping'!A:E,${colIndex},FALSE)=0, "Unassigned Responsibility", VLOOKUP(C${rowNum},'3. Role Mapping'!A:E,${colIndex},FALSE)))`;

            wsData.push([
                { v: task.description, s: dataCellStyle }, 
                { v: controlType, s: dataCellStyle },
                { v: structuralRole, s: lockedColStyle },
                { f: lookupFormula(3), s: dataCellStyle }, 
                { f: lookupFormula(5), s: dataCellStyle },
                { v: task.frequency || checklist.frequency, s: dataCellStyle },
                { v: "Pending", s: dataCellStyle }
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!cols'] = [{ wch: 60 }, { wch: 20 }, { wch: 25 }, { wch: 30 }, { wch: 25 }, { wch: 15 }, { wch: 15 }];
        ws['!rows'] = [{ hpt: 25 }, { hpt: 10 }, { hpt: 20 }];
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }];
        ws['!autofilter'] = { ref: `A3:G${wsData.length}` }; // Enable header filters
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_') + '_v2.4_Stable.xlsx';
    writeFile(wb, fileName);
}
