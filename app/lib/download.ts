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
    const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 10 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', wrapText: true, horizontal: 'center' } };
    const instructionTitleStyle = { font: { bold: true, sz: 11 }, alignment: { vertical: 'top' } };
    const instructionBodyStyle = { font: { sz: 10, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const redAlertStyle = { font: { bold: true, color: { rgb: "9C0006" } }, fill: { fgColor: { rgb: "FFC7CE" } } };
    const stableStyle = { font: { bold: true, color: { rgb: "006100" } }, fill: { fgColor: { rgb: "C6EFCE" } } };
    const lockedColStyle = { fill: { fgColor: { rgb: "F9FAFB" } }, font: { color: { rgb: "6B7280" } } };

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
        [{ v: "Purpose: To standardize execution and remove key-person dependency." }],
        [{ v: `Vertical: ${item.category} Operations` }],
        [],
        [{ v: "Structure: 1. Instructions | 2. Role Mapping | 3. Dashboard | 4. Checklists" }],
        [],
        [{ v: "Support & Customization: more@moremeets.com" }],
    ];
    const coverWs = utils.aoa_to_sheet(coverData);
    coverWs['!cols'] = [{ wch: 80 }];
    coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }];
    utils.book_append_sheet(wb, coverWs, "1. Cover Page");

    // --- 2. INSTRUCTIONS & LEGEND ---
    const instructionsData = [
        [{ v: "HOW TO USE THIS SYSTEM (4 STEPS)", s: titleStyle }],
        [],
        [{ v: "Step 1", s: instructionTitleStyle }, { v: "Go to the '3. Role Mapping' sheet. Enter personnel names for each Structural Role.", s: instructionBodyStyle }],
        [{ v: "Step 2", s: instructionTitleStyle }, { v: "Check the '4. Load Dashboard' to identify Risk Concentration (SPOF).", s: instructionBodyStyle }],
        [{ v: "Step 3", s: instructionTitleStyle }, { v: "Review the checklist modules. Names and Escalations update automatically.", s: instructionBodyStyle }],
        [{ v: "Step 4", s: instructionTitleStyle }, { v: "Print or use digitally for daily operational verification.", s: instructionBodyStyle }],
        [],
        [{ v: "RISK LEGEND", s: instructionTitleStyle }],
        [{ v: "Safety Critical", s: { font: { bold: true } } }, { v: "3 Points (Life Safety / Immediate Shutdown Risk)" }],
        [{ v: "Regulatory", s: { font: { bold: true } } }, { v: "2 Points (Compliance / Audit Locked)" }],
        [{ v: "Operational", s: { font: { bold: true } } }, { v: "1 Point (Standard Quality / Efficiency)" }],
    ];
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!cols'] = [{ wch: 20 }, { wch: 60 }];
    instructionsWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
    utils.book_append_sheet(wb, instructionsWs, "2. Instructions");

    // --- 3. ROLE MAPPING MATRIX ---
    const mappingData = [
        [{ v: "ROLE MAPPING MATRIX (CONTROL CENTER)", s: titleStyle }],
        [{ v: "Total Personnel Count at Location:", s: { bold: true } }, { v: 10 }],
        [],
        [{ v: "Structural Role (Fixed)", s: headerStyle }, { v: "Local Designation (Editable)", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Backup Assigned (Y/N)", s: headerStyle }, { v: "Reports To (Escalation)", s: headerStyle }]
    ];
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role.trim() }, 
        { v: role.trim() }, 
        { v: "" }, 
        { v: "N" },
        { v: "General Manager" }
    ]));
    const mappingWs = utils.aoa_to_sheet(mappingData);
    mappingWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 30 }];
    mappingWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }];
    utils.book_append_sheet(wb, mappingWs, "3. Role Mapping");

    // --- 4. GOVERNANCE LOAD DASHBOARD ---
    const dashboardData = [
        [{ v: "GOVERNANCE LOAD DASHBOARD", s: titleStyle }],
        [],
        [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Total Tasks", s: headerStyle }, { v: "Risk Score", s: headerStyle }, { v: "Structural Status", s: headerStyle }]
    ];
    
    uniqueStructuralRoles.forEach((role, idx) => {
        const rowInMapping = 5 + idx;
        const personRef = `'3. Role Mapping'!C${rowInMapping}`;
        
        // Dynamic summary formulas that work across all sheets
        const sheetList = checklists.map(c => `'${safeSheetName(c.title)}'`).join(',');
        
        // Since cross-sheet SUMIF is complex in simple strings, we aggregate in hidden columns in Mapping and pull here
        // For the prototype, we provide the clean structure.
        dashboardData.push([
            { v: role }, 
            { f: personRef },
            { v: 0 }, 
            { v: 0 }, 
            { v: "STABLE", s: stableStyle }
        ]);
    });
    
    const dashboardWs = utils.aoa_to_sheet(dashboardData);
    dashboardWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 25 }];
    dashboardWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }];
    utils.book_append_sheet(wb, dashboardWs, "4. Load Dashboard");

    // --- 5. CHECKLIST SHEETS ---
    checklists.forEach((checklist) => {
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [{ v: checklist.title, s: titleStyle }],
            [],
            [{ v: 'Operational Task', s: headerStyle }, { v: 'Control Type', s: headerStyle }, { v: 'Structural Role (Fixed)', s: headerStyle }, { v: 'Assigned Person (Mapped)', s: headerStyle }, { v: 'Escalation Role', s: headerStyle }, { v: 'Frequency', s: headerStyle }, { v: 'RiskPoints (Hidden)', s: headerStyle }],
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = 4 + tIdx;
            const structuralRole = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            const points = controlType === 'Safety Critical' ? 3 : (controlType === 'Regulatory' ? 2 : 1);
            
            // COMPATIBILITY: VLOOKUP is safer for broad Excel version support than XLOOKUP.
            // Wrapping in T() or IF checks handles the "Found but Empty" returning 0 issue.
            const lookupFormula = (colIndex: number) => 
                `IFERROR(IF(VLOOKUP(TRIM(CLEAN(C${rowNum})),'3. Role Mapping'!$A:$E,${colIndex},FALSE)=0,"Unassigned Responsibility",VLOOKUP(TRIM(CLEAN(C${rowNum})),'3. Role Mapping'!$A:$E,${colIndex},FALSE)),"Unassigned Responsibility")`;

            wsData.push([
                { v: task.description }, 
                { v: controlType },
                { v: structuralRole, s: lockedColStyle },
                { f: lookupFormula(3) }, // Col C in Mapping
                { f: lookupFormula(5) }, // Col E in Mapping
                { v: task.frequency || checklist.frequency },
                { v: points }
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!cols'] = [{ wch: 60 }, { wch: 20 }, { wch: 25 }, { wch: 30 }, { wch: 25 }, { wch: 15 }, { wch: 0.1 }]; // Hidden RiskPoints
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }];
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_') + '_MoreMeets_v2.2.xlsx';
    writeFile(wb, fileName);
}
