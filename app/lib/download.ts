'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";

/**
 * ============================================================================
 * MOREMEETS™ OPERATIONAL INSTRUMENT - DEPLOYMENT LOCK v12.9
 * ============================================================================
 * PASS 2: STATIC TEAM_HUB GENERATION
 * ----------------------------------------------------------------------------
 * 1. Fixed Role Arrays: No dynamic scanning or inference.
 * 2. Deterministic Blocks: Configured branches only.
 * 3. Parity Lock: 1,048 / 1,048 (Strictly Preserved).
 * 4. Zero-Friction: Only staff names require input.
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack, type: 'pack' | 'individual', DEMO_MODE = false) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();

    // --- INSTITUTIONAL COLOR PALETTE ---
    const COLORS = {
        NAVY_HUD: "020617",       
        PRIMARY_GREEN: "22C55E",  
        STATUS_AMBER: "F5A623",   
        STATUS_RED: "E11D48",     
        WHITE_BODY: "FFFFFF",     
        BORDER_SOFT: "E2E8F0",    
        INPUT_YELLOW: "FEFCE8",   // High-contrast input signal
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

    const riskStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.CONSEQUENCE_RED } },
        fill: { patternType: 'solid', fgColor: { rgb: "FEF2F2" } }
    };

    const instructionStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.COACHING_GREEN } },
        fill: { patternType: 'solid', fgColor: { rgb: "F0FDF4" } }
    };

    // --- HELPER: SYSTEM RIBBON (EXCEL NATIVE HASH LINKS) ---
    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'K') => {
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

    let packChecklists: Checklist[] = [];
    if ('checklists' in item) {
        packChecklists = item.checklists;
    }

    // --- 01. START_HERE (SOFTWARE-STYLE ONBOARDING) ---
    const startData: any[][] = [
        [], [],
        [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3-STEP OPERATIONAL SETUP", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: ADD YOUR SITES", s: { font: { bold: true } } }, { v: "Go to SITE_CONFIGURATION and list your branches.", l: { Target: "#'SITE_CONFIGURATION'!A1" } }],
        [{ v: "STEP 2: ADD YOUR TEAM", s: { font: { bold: true } } }, { v: "Go to TEAM_HUB and type staff names in yellow cells.", l: { Target: "#'TEAM_HUB'!A1" } }],
        [{ v: "STEP 3: RUN OPERATIONS", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin tracking daily execution.", l: { Target: "#'DAILY_TASKS'!A1" } }],
        [],
        [{ v: "PRO TIP: YELLOW CELLS ARE FOR YOU. GREY CELLS ARE AUTOMATIC.", s: { font: { italic: true, color: { rgb: COLORS.METADATA_GREY } } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER (KPI PULSE) ---
    const opsData: any[][] = [
        [], [],
        [{ v: "DAILY OPERATIONAL STATUS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!E5:E5000, "PENDING")` }],
        [{ v: "OVERDUE TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!E5:E5000, "OVERDUE")` }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!G5:G500, "OPEN")` }],
        [{ v: "COMPLIANCE %:", s: { font: { bold: true } } }, { t: 'f', f: `TEXT(1 - (E6 / MAX(1, E5+E6)), "0%")` }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    utils.book_append_sheet(wb, opsWs, "OPERATIONS_CENTER");

    // --- 03. SITE_CONFIGURATION (BRANCH SETUP) ---
    const setupData: any[][] = [
        [], [],
        [{ v: "BRANCH MASTER REGISTRY", s: { font: { sz: 18, bold: true } } }],
        [{ v: "BRANCH NAME", s: headerStyle }, { v: "LOCATION", s: headerStyle }, { v: "TYPE", s: headerStyle }, { v: "ACTIVE", s: headerStyle }]
    ];
    ["Mumbai Main", "Pune Branch", "Branch 3", "Branch 4", "Branch 5"].forEach(b => {
        setupData.push([{ v: b, s: inputStyle }, { v: "City", s: inputStyle }, { v: "Unit", s: inputStyle }, { v: "YES", s: inputStyle }]);
    });
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 15 }];
    addSovereignRibbon(setupWs, "Site Registry", 'D');
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB (PASS 2: STATIC ROSTER GENERATION) ---
    const roleTemplates: Record<string, {d: string, r: string}[]> = {
        'restaurants': [
            { d: "Management", r: "General Manager" },
            { d: "Management", r: "Shift Manager" },
            { d: "Kitchen", r: "Kitchen Lead" },
            { d: "Kitchen", r: "Chef de Partie" },
            { d: "Kitchen", r: "Commi Chef" },
            { d: "Service", r: "Steward/Server" },
            { d: "Service", r: "Cashier" },
            { d: "Service", r: "Bar Lead" },
            { d: "Housekeeping", r: "Housekeeping" },
            { d: "Security", r: "Security" }
        ],
        'hotels_and_resorts': [
            { d: "Management", r: "General Manager" },
            { d: "Front Office", r: "Front Office Manager" },
            { d: "Front Office", r: "Receptionist" },
            { d: "Housekeeping", r: "Executive Housekeeper" },
            { d: "Housekeeping", r: "Room Attendant" },
            { d: "Engineering", r: "Chief Engineer" },
            { d: "Engineering", r: "Maintenance Tech" },
            { d: "F&B", r: "F&B Manager" },
            { d: "Security", r: "Security Chief" },
            { d: "Logistics", r: "Valet Lead" }
        ],
        'healthcare_and_hospital_operations': [
            { d: "Management", r: "Medical Director" },
            { d: "Nursing", r: "Nursing Superintendent" },
            { d: "Nursing", r: "Ward Nurse" },
            { d: "Admin", r: "OPD Manager" },
            { d: "Pharmacy", r: "Pharmacist" },
            { d: "Laboratory", r: "Lab Technician" },
            { d: "Finance", r: "Billing Lead" },
            { d: "Engineering", r: "Facility Manager" },
            { d: "Security", r: "Security Head" },
            { d: "Housekeeping", r: "Housekeeping Lead" }
        ],
        'school_operations_pack': [
            { d: "Leadership", r: "Principal" },
            { d: "Admin", r: "Admin Head" },
            { d: "Transport", r: "Transport Manager" },
            { d: "Transport", r: "Driver" },
            { d: "Transport", r: "Attendant" },
            { d: "Canteen", r: "Canteen Manager" },
            { d: "Security", r: "Security Chief" },
            { d: "Academic", r: "Lab Assistant" },
            { d: "Facilities", r: "Facility Lead" },
            { d: "Medical", r: "Nurse" }
        ],
        'franchise_operations_pack': [
            { d: "Corporate", r: "Franchisor CEO" },
            { d: "Corporate", r: "Regional Manager" },
            { d: "Unit", r: "Unit Manager" },
            { d: "Unit", r: "Store Lead" },
            { d: "Stores", r: "Inventory Lead" },
            { d: "Kitchen", r: "Kitchen Lead" },
            { d: "Service", r: "Service Staff" },
            { d: "Service", r: "Cashier" },
            { d: "Quality", r: "Quality Auditor" },
            { d: "Security", r: "Security" }
        ],
        'facility_management_blueprint': [
            { d: "Management", r: "Facility Director" },
            { d: "Engineering", r: "Chief Engineer" },
            { d: "Engineering", r: "MEP Technician" },
            { d: "Engineering", r: "BMS Operator" },
            { d: "Soft FM", r: "Soft FM Manager" },
            { d: "Soft FM", r: "Janitor" },
            { d: "Safety", r: "Safety Officer" },
            { d: "Security", r: "Security Chief" },
            { d: "Admin", r: "Vendor Manager" },
            { d: "Finance", r: "Utility Analyst" }
        ],
        'cinema_operations_pack': [
            { d: "Management", r: "Cinema GM" },
            { d: "Operations", r: "Floor Supervisor" },
            { d: "Technical", r: "Chief Projectionist" },
            { d: "Technical", r: "Technical Assistant" },
            { d: "F&B", r: "Concession Manager" },
            { d: "F&B", r: "Concession Staff" },
            { d: "Operations", r: "Lobby Manager" },
            { d: "Service", r: "Usher" },
            { d: "Security", r: "Security Head" },
            { d: "Finance", r: "Finance Lead" }
        ],
        'retail_operations_system': [
            { d: "Management", r: "Store Manager" },
            { d: "Operations", r: "Floor Supervisor" },
            { d: "Inventory", r: "Inventory Lead" },
            { d: "Visuals", r: "Visual Merchandiser" },
            { d: "Service", r: "Sales Associate" },
            { d: "Service", r: "Cashier" },
            { d: "Loss Prev", r: "Loss Prevention Lead" },
            { d: "Security", r: "Security" },
            { d: "Housekeeping", r: "Housekeeping" },
            { d: "Technical", r: "Tech Lead" }
        ]
    };

    const activeTemplate = roleTemplates[item.id] || roleTemplates['restaurants'];
    const tHeaders = [
        { v: "Key (Auto)", s: headerStyle },
        { v: "Branch", s: headerStyle },
        { v: "Department", s: headerStyle },
        { v: "Role", s: headerStyle },
        { v: "Staff Name (Input)", s: headerStyle }
    ];
    const pData: any[][] = [[], [], [], tHeaders];

    ["Mumbai Main", "Pune Branch", "Branch 3", "Branch 4", "Branch 5"].forEach(bName => {
        activeTemplate.forEach(t => {
            pData.push([
                { t: 'f', f: `IF(LEN(B${pData.length + 1})>0, B${pData.length + 1} & "|" & D${pData.length + 1}, "")`, s: dataStyleCenter },
                { v: bName, s: dataStyleCenter },
                { v: t.d, s: dataStyleLeft },
                { v: t.r, s: dataStyleLeft },
                { v: "", s: inputStyle }
            ]);
        });
    });

    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 20, 25, 35].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Team Roster", 'E');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS (THE EXECUTION BOARD) ---
    const lHeaders = [
        { v: "Branch", s: headerStyle },
        { v: "Dept", s: headerStyle },
        { v: "Task", s: headerStyle },
        { v: "Assigned To", s: headerStyle },
        { v: "Status", s: headerStyle },
        { v: "Checked By", s: headerStyle },
        { v: "If Missed", s: headerStyle },
        { v: "Instructions", s: headerStyle },
        { v: "Role", s: headerStyle },
        { v: "Freq", s: headerStyle },
        { v: "ModID", s: headerStyle },
        { v: "Type", s: headerStyle },
        { v: "Active", s: headerStyle },
        { v: "ID", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    packChecklists.forEach(c => {
        c.tasks.forEach((t) => {
            const rIdx = mData.length + 1;
            const statusFormula = `IF(M${rIdx}=FALSE, "OFF", IF(LEN(TRIM(F${rIdx}))>0, "COMPLETED", "PENDING"))`;

            mData.push([
                { t: 'f', f: `'SITE_CONFIGURATION'!A5`, s: dataStyleCenter }, 
                { v: c.department, s: dataStyleLeft },                       
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { ...baseFont, bold: true } } }, 
                { v: "[UNASSIGNED]", s: dataStyleLeft },                     
                { t: 'f', f: statusFormula, s: dataStyleCenter },            
                { v: "", s: inputStyle },                                    
                { v: t.consequence || "Operational Risk.", s: riskStyle },   
                { v: t.floorAction || t.trainerNotes || "", s: instructionStyle }, 
                { v: c.role, s: dataStyleCenter },                           
                { v: c.frequency, s: dataStyleCenter },                      
                { v: c.moduleId || "GENERAL", s: dataStyleCenter },          
                { v: c.moduleType || "CORE", s: dataStyleCenter },           
                { v: true, s: dataStyleCenter },            
                { v: t.id, s: dataStyleCenter }                              
            ]);
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 15, 55, 20, 15, 15, 35, 45, 0, 0, 0, 0, 0, 0].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Task Board", 'H');
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY (TRAINING HANDBOOK) ---
    const sHeaders = [
        { v: "Task", s: headerStyle },
        { v: "Simple Language", s: headerStyle },
        { v: "Audit Language", s: headerStyle },
        { v: "Trainer Notes", s: headerStyle },
        { v: "Why It Matters", s: headerStyle },
        { v: "If Missed", s: headerStyle }
    ];
    const sData: any[][] = [[], [], [], sHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sData.push([
                { v: t.id, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft },
                { v: t.technicalProtocol, s: dataStyleLeft },
                { v: t.floorAction || t.trainerNotes || "Action required per protocol.", s: instructionStyle },
                { v: "Essential for operational parity and standard protection.", s: dataStyleLeft },
                { v: t.consequence, s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [12, 40, 40, 45, 40, 40].map(w => ({ wch: w }));
    addSovereignRibbon(sWs, "Training Handbook", 'F');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. INCIDENT_LOG ---
    const iHeaders = [{ v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Issue", s: headerStyle }, { v: "Severity", s: headerStyle }, { v: "Status", s: headerStyle }];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<10; i++) { iData.push([null, null, null, null, "OPEN"]); }
    const iWs = utils.aoa_to_sheet(iData);
    addSovereignRibbon(iWs, "Incident Registry", 'E');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // Set final sheet order
    const orderedNames = ["START_HERE", "OPERATIONS_CENTER", "SITE_CONFIGURATION", "TEAM_HUB", "DAILY_TASKS", "SOP_LIBRARY", "INCIDENT_LOG"];
    wb.SheetNames = orderedNames.filter(name => wb.SheetNames.includes(name));

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master.xlsx`);
}
