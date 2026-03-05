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
    const footerStyle = { font: { italic: true, sz: 8, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const redAlertStyle = { font: { bold: true, color: { rgb: "9C0006" } }, fill: { fgColor: { rgb: "FFC7CE" } } };
    const stableStyle = { font: { bold: true, color: { rgb: "006100" } }, fill: { fgColor: { rgb: "C6EFCE" } } };

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

    // Identify unique structural roles from the pack and ensure they are trimmed
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
        [{ v: "HOW TO USE THIS SYSTEM (15 MINUTES)", s: titleStyle }],
        [],
        [{ v: "Step 1", s: instructionTitleStyle }, { v: "Go to the 'Role Mapping' sheet. Do not rename 'Structural Roles'.", s: instructionBodyStyle }],
        [{ v: "Step 2", s: instructionTitleStyle }, { v: "Enter your local Designation and the Assigned Person's name for each role.", s: instructionBodyStyle }],
        [{ v: "Step 3", s: instructionTitleStyle }, { v: "Review the 'Load Dashboard' to identify risk concentration.", s: instructionBodyStyle }],
        [{ v: "Step 4", s: instructionTitleStyle }, { v: "Use checklist modules for daily verification. Names will pull automatically.", s: instructionBodyStyle }],
        [],
        [{ v: "RISK LEGEND", s: instructionTitleStyle }],
        [{ v: "Safety Critical", s: { font: { bold: true } } }, { v: "3 Points (High Liability / Life Safety)" }],
        [{ v: "Regulatory", s: { font: { bold: true } } }, { v: "2 Points (Compliance / Legal)" }],
        [{ v: "Operational", s: { font: { bold: true } } }, { v: "1 Point (Efficiency / Quality)" }],
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
        [{ v: "Structural Role (Fixed)", s: headerStyle }, { v: "Local Designation (Editable)", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Backup Assigned", s: headerStyle }, { v: "Reports To", s: headerStyle }]
    ];
    uniqueStructuralRoles.forEach(role => mappingData.push([
        { v: role }, 
        { v: role }, // Default designation is the role itself
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
        [{ v: "Structural Role", s: headerStyle }, { v: "Assigned Person", s: headerStyle }, { v: "Total Tasks", s: headerStyle }, { v: "Risk Score", s: headerStyle }, { v: "Status", s: headerStyle }]
    ];
    
    uniqueStructuralRoles.forEach((role, idx) => {
        const row = 4 + idx;
        const mappingRef = `'3. Role Mapping'!A${row+1}`;
        const personRef = `'3. Role Mapping'!C${row+1}`;
        
        // Populate the names via reference to the mapping sheet
        dashboardData.push([
            { v: role }, 
            { f: personRef },
            { v: 0 }, // Placeholder for Total Tasks
            { v: 0 }, // Placeholder for Risk Score
            { v: "STABLE", s: stableStyle }
        ]);
    });
    
    dashboardData.push([]);
    dashboardData.push([{ v: "Note: If one role carries > 50% of total risk score, review task distribution for SPOF risk.", s: { italic: true, sz: 9 } }]);

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
            [{ v: 'Task ID', s: headerStyle }, { v: 'Operational Task', s: headerStyle }, { v: 'Control Type', s: headerStyle }, { v: 'Structural Role (Fixed)', s: headerStyle }, { v: 'Assigned Person (Mapped)', s: headerStyle }, { v: 'Escalation Role', s: headerStyle }, { v: 'Frequency', s: headerStyle }, { v: 'Status', s: headerStyle }],
        ];

        checklist.tasks.forEach((task, tIdx) => {
            const rowNum = 4 + tIdx;
            const structuralRole = (task.role || checklist.role).trim();
            const controlType = task.riskLevel === 'High' ? 'Safety Critical' : (task.priority === 'High' ? 'Regulatory' : 'Operational');
            
            // Bulletproof Formula: TRIM and CLEAN handle hidden spaces/chars. No '@' symbol used.
            const personLookupFormula = `IFERROR(XLOOKUP(TRIM(CLEAN(D${rowNum})),'3. Role Mapping'!A:A,'3. Role Mapping'!C:C,"Unassigned Responsibility",0),"Unassigned Responsibility")`;
            const escalationLookupFormula = `IFERROR(XLOOKUP(TRIM(CLEAN(D${rowNum})),'3. Role Mapping'!A:A,'3. Role Mapping'!E:E,"General Manager",0),"General Manager")`;

            wsData.push([
                { v: task.id }, 
                { v: task.description }, 
                { v: controlType },
                { v: structuralRole },
                { f: personLookupFormula },
                { f: escalationLookupFormula },
                { v: task.frequency || checklist.frequency },
                { v: "Pending" }
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!cols'] = [{ wch: 10 }, { wch: 60 }, { wch: 20 }, { wch: 25 }, { wch: 30 }, { wch: 25 }, { wch: 15 }, { wch: 15 }];
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }];
        utils.book_append_sheet(wb, ws, sName);
    });

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_') + '_MoreMeets_v2.1.xlsx';
    writeFile(wb, fileName);
}
