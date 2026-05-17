
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";

/**
 * MOREMEETS™ OPERATIONAL INSTRUMENT - STABILITY LOCK v15.0
 * ----------------------------------------------------------------------------
 * 1. PARITY FIX: Full iteration of all checklists and tasks (No truncation).
 * 2. DUAL-CHECK LOGIC: Priority-aware Status formula (Low = Done only).
 * 3. GREY-CELL BYPASS: Routine verification cells shaded and ignored by Status.
 * 4. HUMANIZED SOPs: Purged synthetic jargon for real-world clarity.
 * 5. NO EQUALS BUG: Fixed leading '=' bug causing double-equals corruption.
 * ----------------------------------------------------------------------------
 */

export const handleDownload = (item: PremiumPack, type: 'pack' | 'individual') => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();

    const COLORS = {
        NAVY_HUD: "020617",       
        PRIMARY_GREEN: "22C55E",  
        WHITE_BODY: "FFFFFF",     
        BORDER_SOFT: "E2E8F0",    
        INPUT_YELLOW: "FEFCE8",   
        HEADER_SLATE: "0F172A",   
        METADATA_GREY: "64748B",  
        COACHING_GREEN: "065F46", 
        CONSEQUENCE_RED: "991B1B",
        INACTIVE_GREY: "F1F5F9"   
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };
    const verticalCenter = { vertical: 'center' };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_HUD } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE_BODY }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_SLATE } },
        alignment: { horizontal: 'center', wrapText: true, ...verticalCenter },
        border: borderStyle
    };

    const dataStyleLeft = { 
        font: baseFont,
        alignment: { horizontal: 'left', wrapText: true, ...verticalCenter },
        border: borderStyle
    };

    const dataStyleCenter = {
        font: baseFont,
        alignment: { horizontal: 'center', ...verticalCenter },
        border: borderStyle
    };

    const inputStyle = {
        ...dataStyleCenter,
        font: { ...baseFont, color: { rgb: "000000" }, bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }
    };

    const greyStyle = {
        ...dataStyleCenter,
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INACTIVE_GREY } },
        font: { ...baseFont, color: { rgb: COLORS.METADATA_GREY } }
    };

    const riskStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.CONSEQUENCE_RED }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: "FEF2F2" } }
    };

    const instructionStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.COACHING_GREEN } },
        fill: { patternType: 'solid', fgColor: { rgb: "F0FDF4" } }
    };

    const addRibbon = (ws: WorkSheet, title: string, endCol: string = 'I') => {
        const ribbonData = [
            [{ v: "◀ BACK TO OPERATIONS CENTER", l: { Target: "#'OPERATIONS_CENTER'!A1" }, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: { ...navStyle, font: { ...navStyle.font, sz: 18, color: { rgb: "FFFFFF" } } } }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        const endCIdx = utils.decode_col(endCol);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: endCIdx } }); 
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 4, xSplit: 2 }];
        if(!ws['!rows']) ws['!rows'] = [];
        ws['!rows'][0] = { hpt: 30 };
        ws['!rows'][1] = { hpt: 50 };
        ws['!rows'][2] = { hpt: 20 };
        ws['!rows'][3] = { hpt: 45 }; 
    };

    // --- 01. START_HERE ---
    const startData: any[][] = [
        [], [],
        [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3-STEP OPERATIONAL SETUP", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: CONFIGURE SITES", s: { font: { bold: true } } }, { v: "Open SITE_CONFIGURATION to name your branches.", l: { Target: "#'SITE_CONFIGURATION'!A1" } }],
        [{ v: "STEP 2: ASSIGN STAFF", s: { font: { bold: true } } }, { v: "Open TEAM_HUB to enter names for each role.", l: { Target: "#'TEAM_HUB'!A1" } }],
        [{ v: "STEP 3: RUN OPERATIONS", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin logging execution.", l: { Target: "#'DAILY_TASKS'!A1" } }],
        [],
        [{ v: "LEGEND: YELLOW CELLS ARE INPUTS. GREY CELLS ARE AUTOMATED.", s: { font: { italic: true, color: { rgb: COLORS.METADATA_GREY } } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER ---
    const opsData: any[][] = [
        [], [],
        [{ v: "OPERATIONAL VITAL SIGNS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!E5:E5000, "PENDING")` }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!G5:G500, "OPEN")` }],
        [{ v: "COMPLIANCE SCORE:", s: { font: { bold: true } } }, { t: 'f', f: `TEXT(1 - (COUNTIF('DAILY_TASKS'!E5:E5000,"PENDING") / MAX(1, COUNTA('DAILY_TASKS'!C5:C5000))), "0%")` }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    utils.book_append_sheet(wb, opsWs, "OPERATIONS_CENTER");

    // --- 03. SITE_CONFIGURATION ---
    const setupHeaders = [
        { v: "BRANCH NAME", s: headerStyle },
        { v: "CITY / LOCATION", s: headerStyle },
        { v: "STATUS", s: headerStyle }
    ];
    const setupData: any[][] = [[], [], [], setupHeaders];
    ["Mumbai Main", "Pune Branch", "Site 3", "Site 4", "Site 5"].forEach(b => {
        setupData.push([{ v: b, s: inputStyle }, { v: "City", s: inputStyle }, { v: "ACTIVE", s: inputStyle }]);
    });
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 20 }];
    addRibbon(setupWs, "Site Configuration", 'C');
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB ---
    const roleTemplates: Record<string, string[]> = {
        'restaurants': ["General Manager", "Shift Manager", "Kitchen Lead", "Chef de Partie", "Commi Chef", "Steward/Server", "Cashier", "Bar Lead", "Housekeeping", "Security"],
        'hotels_and_resorts': ["General Manager", "Front Office Manager", "Receptionist", "Executive Housekeeper", "Room Attendant", "Chief Engineer", "Maintenance Tech", "F&B Manager", "Security Chief", "Valet Lead"],
        'healthcare_and_hospital_operations': ["Medical Director", "Nursing Superintendent", "Ward Nurse", "OPD Manager", "Pharmacist", "Lab Technician", "Billing Lead", "Facility Manager", "Security Head", "Housekeeping Lead"],
        'default': ["Manager", "Supervisor", "Lead", "Staff A", "Staff B", "Security", "Maintenance"]
    };
    const activeRoles = roleTemplates[item.id] || roleTemplates['default'];
    
    const tHeaders = [
        { v: "Lookup Key", s: headerStyle }, 
        { v: "Branch", s: headerStyle },
        { v: "Role", s: headerStyle },
        { v: "Assigned To", s: headerStyle },
        { v: "Phone Number", s: headerStyle },
        { v: "Institutional Email", s: headerStyle }
    ];
    const pData: any[][] = [[], [], [], tHeaders];

    for (let i = 0; i < 5; i++) {
        const siteRef = `'SITE_CONFIGURATION'!A${5 + i}`;
        activeRoles.forEach(role => {
            const rIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `IF(LEN(B${rIdx})>0, B${rIdx} & "|" & C${rIdx}, "")`, s: dataStyleCenter },
                { t: 'f', f: siteRef, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle }
            ]);
        });
    }
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [{ wch: 0, hidden: true }, { wch: 25 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
    addRibbon(pWs, "Personnel Directory", 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS ---
    const lHeaders = [
        { v: "Branch", s: headerStyle },
        { v: "Role", s: headerStyle },
        { v: "Task", s: headerStyle },
        { v: "Assigned To", s: headerStyle },
        { v: "Status", s: headerStyle },
        { v: "Done By", s: headerStyle },
        { v: "Verified By", s: headerStyle },
        { v: "If Missed", s: headerStyle },
        { v: "Instructions", s: headerStyle },
        { v: "Priority", s: headerStyle },
        { v: "Freq", s: headerStyle },
        { v: "Module", s: headerStyle },
        { v: "Type", s: headerStyle },
        { v: "Flag", s: headerStyle },
        { v: "Score", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    let packChecklists: Checklist[] = [];
    if ('checklists' in item) { packChecklists = item.checklists; }

    packChecklists.forEach(c => {
        c.tasks.forEach((t) => {
            const rIdx = mData.length + 1;
            const branchRef = `'SITE_CONFIGURATION'!A5`;
            const assignmentFormula = `IFERROR(INDEX('TEAM_HUB'!$D$5:$D$500, MATCH(${branchRef} & "|" & B${rIdx}, 'TEAM_HUB'!$A$5:$A$500, 0)), "[UNASSIGNED]")`;
            
            const isRoutine = t.priority === 'Low';
            // Hardened Priority-Aware Status Logic
            const statusFormula = `IF(J${rIdx}="Low", IF(LEN(TRIM(F${rIdx}))>0, "COMPLETED", "PENDING"), IF(AND(LEN(TRIM(F${rIdx}))>0, LEN(TRIM(G${rIdx}))>0), "COMPLETED", "PENDING"))`;

            mData.push([
                { t: 'f', f: branchRef, s: dataStyleCenter }, 
                { v: c.role, s: dataStyleCenter },                       
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { ...baseFont, bold: true } } }, 
                { t: 'f', f: assignmentFormula, s: dataStyleLeft },                     
                { t: 'f', f: statusFormula, s: dataStyleCenter },
                { v: "", s: inputStyle },                                    
                { v: "", s: isRoutine ? greyStyle : inputStyle },                                    
                { v: `[Risk: ${t.consequence || "Operational Gap"}]`, s: riskStyle },   
                { v: t.floorAction || t.description || "", s: instructionStyle }, 
                { v: t.priority, s: { hidden: true } },
                { v: t.frequency, s: { hidden: true } },
                { v: t.id, s: { hidden: true } },
                { v: "CORE", s: { hidden: true } },
                { v: "ACTIVE", s: { hidden: true } },
                { v: "10", s: { hidden: true } }
            ]);
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [
        { wch: 15 }, // Branch
        { wch: 25 }, // Role
        { wch: 55 }, // Task
        { wch: 20 }, // Assigned To
        { wch: 15 }, // Status
        { wch: 15 }, // Done By
        { wch: 15 }, // Verified By
        { wch: 40 }, // If Missed
        { wch: 45 }, // Instructions
        { wch: 0, hidden: true }, // Priority
        { wch: 0, hidden: true }, // Freq
        { wch: 0, hidden: true }, // Module
        { wch: 0, hidden: true }, // Type
        { wch: 0, hidden: true }, // Flag
        { wch: 0, hidden: true }  // Score
    ];
    addRibbon(mWs, "Daily Execution Ledger", 'I');
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY ---
    const sHeaders = [
        { v: "Role", s: headerStyle },
        { v: "Task", s: headerStyle },
        { v: "Why this matters", s: headerStyle },
        { v: "How to do it", s: headerStyle },
        { v: "How to verify", s: headerStyle },
        { v: "If missed", s: headerStyle }
    ];
    const sData: any[][] = [[], [], [], sHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sData.push([
                { v: c.role, s: dataStyleCenter },
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                { v: `Prevents loss of control and inconsistent standards across shifts.`, s: dataStyleLeft },
                { v: t.description || t.floorAction || "Follow floor-level protocol.", s: dataStyleLeft },
                { v: t.proof || "Verify entry in the daily shift ledger.", s: instructionStyle },
                { v: `[Risk: ${t.consequence}]`, s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 45 }, { wch: 50 }, { wch: 45 }, { wch: 45 }];
    addRibbon(sWs, "Training Handbook", 'F');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. INCIDENT_LOG ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, 
        { v: "Branch", s: headerStyle }, 
        { v: "Incident Type", s: headerStyle }, 
        { v: "Severity", s: headerStyle }, 
        { v: "Reported By", s: headerStyle },
        { v: "Assigned To", s: headerStyle },
        { v: "Resolution Status", s: headerStyle },
        { v: "Notes", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<20; i++) { 
        iData.push([null, null, null, null, null, null, "OPEN", ""]); 
    }
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [{ wch: 15 }, { wch: 20 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 40 }];
    addRibbon(iWs, "Incident Registry", 'H');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    const orderedNames = ["START_HERE", "OPERATIONS_CENTER", "SITE_CONFIGURATION", "TEAM_HUB", "DAILY_TASKS", "SOP_LIBRARY", "INCIDENT_LOG"];
    wb.SheetNames = orderedNames.filter(name => wb.SheetNames.includes(name));

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master.xlsx`);
}
