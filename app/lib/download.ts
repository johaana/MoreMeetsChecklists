'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";

/**
 * ============================================================================
 * MOREMEETS™ OPERATIONAL INSTRUMENT - DEPLOYMENT LOCK v13.0
 * ============================================================================
 * REVISION: Operational Authenticity Pass
 * ----------------------------------------------------------------------------
 * 1. DUAL-CHECK: Done By (Operator) + Verified By (Supervisor).
 * 2. GREY-CELLS: Non-critical verification slots are greyed out.
 * 3. TEAM_HUB: Added Phone & Email for coordination. Live-linked to Setup.
 * 4. SWITCHBOARD: Removed "Unit" redundancy. Added Facility Toggles.
 * 5. HANDBOOK: Fixed blank SOP mapping + bracketed consequences.
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
        INACTIVE_GREY: "F1F5F9"   // The "Grey Cell" for non-verification tasks
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

    // --- HELPER: SYSTEM RIBBON ---
    const addRibbon = (ws: WorkSheet, title: string, endCol: string = 'K') => {
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

    // --- 01. START_HERE (ONBOARDING) ---
    const startData: any[][] = [
        [], [],
        [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3-STEP OPERATIONAL SETUP", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: DEFINE BRANCHES", s: { font: { bold: true } } }, { v: "Go to SITE_CONFIGURATION and list your outlets.", l: { Target: "#'SITE_CONFIGURATION'!A1" } }],
        [{ v: "STEP 2: ASSIGN TEAM", s: { font: { bold: true } } }, { v: "Go to TEAM_HUB and enter staff names & contact details.", l: { Target: "#'TEAM_HUB'!A1" } }],
        [{ v: "STEP 3: RUN OPERATIONS", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin tracking execution.", l: { Target: "#'DAILY_TASKS'!A1" } }],
        [],
        [{ v: "NOTE: YELLOW CELLS ARE USER INPUT. GREY/DARK CELLS ARE AUTOMATED.", s: { font: { italic: true, color: { rgb: COLORS.METADATA_GREY } } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER (KPIs) ---
    const opsData: any[][] = [
        [], [],
        [{ v: "DAILY OPERATIONAL STATUS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!G5:G5000, "PENDING")` }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!E5:E500, "OPEN")` }],
        [{ v: "COMPLIANCE %:", s: { font: { bold: true } } }, { t: 'f', f: `TEXT(1 - (COUNTIF('DAILY_TASKS'!G5:G5000,"PENDING") / MAX(1, COUNTA('DAILY_TASKS'!C5:C5000))), "0%")` }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    utils.book_append_sheet(wb, opsWs, "OPERATIONS_CENTER");

    // --- 03. SITE_CONFIGURATION (SWITCHBOARD) ---
    const facilityHeaders: Record<string, string[]> = {
        'hotels_and_resorts': ["Swimming Pool", "Spa & Gym", "Valet Parking", "Airport Shuttle", "Banquet Halls", "Rooftop Bar"],
        'restaurants': ["Bar & Liquor", "Delivery / Takeaway", "Bakery Section", "Drive-Thru", "Outdoor Seating"],
        'healthcare_and_hospital_operations': ["ICU Unit", "Pharmacy", "Laboratory", "Emergency (ER)", "Ambulance Fleet"],
        'default': ["Facility A", "Facility B", "Facility C", "Facility D"]
    };
    const activeFacilities = facilityHeaders[item.id] || facilityHeaders['default'];
    
    const setupHeaders = [
        { v: "BRANCH NAME", s: headerStyle },
        { v: "LOCATION / CITY", s: headerStyle },
        ...activeFacilities.map(f => ({ v: `${f.toUpperCase()} (YES/NO)`, s: headerStyle }))
    ];

    const setupData: any[][] = [[], [], [], setupHeaders];
    ["Mumbai Main", "Pune Branch", "Branch 3", "Branch 4", "Branch 5"].forEach(b => {
        setupData.push([
            { v: b, s: inputStyle }, 
            { v: "City", s: inputStyle }, 
            ...activeFacilities.map(() => ({ v: "YES", s: inputStyle }))
        ]);
    });
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, ...activeFacilities.map(() => ({ wch: 20 }))];
    addRibbon(setupWs, "Site Switchboard", utils.encode_col(1 + activeFacilities.length));
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB (DIRECTORY) ---
    const roleTemplates: Record<string, {d: string, r: string}[]> = {
        'restaurants': [
            { d: "Management", r: "General Manager" }, { d: "Management", r: "Shift Manager" },
            { d: "Kitchen", r: "Kitchen Lead" }, { d: "Kitchen", r: "Chef de Partie" }, { d: "Kitchen", r: "Commi Chef" },
            { d: "Service", r: "Steward/Server" }, { d: "Service", r: "Cashier" }, { d: "Service", r: "Bar Lead" },
            { d: "Housekeeping", r: "Housekeeping" }, { d: "Security", r: "Security Chief" }
        ],
        'hotels_and_resorts': [
            { d: "Management", r: "General Manager" }, { d: "Front Office", r: "Front Office Manager" }, { d: "Front Office", r: "Receptionist" },
            { d: "Housekeeping", r: "Executive Housekeeper" }, { d: "Housekeeping", r: "Room Attendant" },
            { d: "Engineering", r: "Chief Engineer" }, { d: "Engineering", r: "Maintenance Tech" },
            { d: "F&B", r: "F&B Manager" }, { d: "Security", r: "Security Chief" }, { d: "Logistics", r: "Valet Lead" }
        ],
        'healthcare_and_hospital_operations': [
            { d: "Management", r: "Medical Director" }, { d: "Nursing", r: "Nursing Superintendent" }, { d: "Nursing", r: "Ward Nurse" },
            { d: "Admin", r: "OPD Manager" }, { d: "Pharmacy", r: "Pharmacist" }, { d: "Laboratory", r: "Lab Technician" },
            { d: "Finance", r: "Billing Lead" }, { d: "Engineering", r: "Facility Manager" }, { d: "Security", r: "Security Head" },
            { d: "Housekeeping", r: "Housekeeping Lead" }
        ]
    };

    const activeTemplate = roleTemplates[item.id] || roleTemplates['restaurants'];
    const tHeaders = [
        { v: "Key (Hidden)", s: headerStyle },
        { v: "Branch (Linked)", s: headerStyle },
        { v: "Role", s: headerStyle },
        { v: "Assigned To (Input Name)", s: headerStyle },
        { v: "Phone Number", s: headerStyle },
        { v: "Institutional Email", s: headerStyle }
    ];
    const pData: any[][] = [[], [], [], tHeaders];

    for (let i = 0; i < 5; i++) {
        const siteRowIdx = 5 + i;
        activeTemplate.forEach(t => {
            const rIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `IF(LEN(B${rIdx})>0, B${rIdx} & "|" & C${rIdx}, "")`, s: dataStyleCenter },
                { t: 'f', f: `'SITE_CONFIGURATION'!A${siteRowIdx}`, s: dataStyleCenter },
                { v: t.r, s: dataStyleLeft },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle }
            ]);
        });
    }

    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 30, 35, 20, 30].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addRibbon(pWs, "Personnel Directory", 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS (LEDGER) ---
    const lHeaders = [
        { v: "Branch", s: headerStyle },
        { v: "Responsible Role", s: headerStyle },
        { v: "Operational Task", s: headerStyle },
        { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Done By (Initials)", s: headerStyle },
        { v: "Verified By (Sup)", s: headerStyle },
        { v: "Status", s: headerStyle },
        { v: "If Missed", s: headerStyle },
        { v: "Instructions", s: headerStyle },
        { v: "Priority (Hidden)", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    let packChecklists: Checklist[] = [];
    if ('checklists' in item) { packChecklists = item.checklists; }

    packChecklists.forEach(c => {
        c.tasks.forEach((t) => {
            const rIdx = mData.length + 1;
            const assignmentFormula = `=IFERROR(IF(LEN(TRIM(INDEX('TEAM_HUB'!$D$5:$D$500, MATCH(A${rIdx} & "|" & B${rIdx}, 'TEAM_HUB'!$A$5:$A$500, 0))))=0, "[UNASSIGNED]", INDEX('TEAM_HUB'!$D$5:$D$500, MATCH(A${rIdx} & "|" & B${rIdx}, 'TEAM_HUB'!$A$5:$A$500, 0))), "[UNASSIGNED]")`;
            
            // Logic: Only High/Medium priority tasks require supervisor verification.
            const needsVerification = t.priority !== 'Low';
            const statusFormula = needsVerification 
                ? `=IF(AND(LEN(TRIM(E${rIdx}))>0, LEN(TRIM(F${rIdx}))>0), "COMPLETED", "PENDING")`
                : `=IF(LEN(TRIM(E${rIdx}))>0, "COMPLETED", "PENDING")`;

            mData.push([
                { t: 'f', f: `'SITE_CONFIGURATION'!A5`, s: dataStyleCenter }, 
                { v: c.role, s: dataStyleCenter },                       
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { ...baseFont, bold: true } } }, 
                { t: 'f', f: assignmentFormula, s: dataStyleLeft },                     
                { v: "", s: inputStyle },                                    
                { v: "", s: needsVerification ? inputStyle : greyStyle }, // THE GREY CELL                                    
                { t: 'f', f: statusFormula, s: dataStyleCenter },            
                { v: `[Risk: ${t.consequence || "Operational Gaps"}]`, s: riskStyle },   
                { v: t.floorAction || t.trainerNotes || t.description || "", s: instructionStyle }, 
                { v: t.priority, s: dataStyleCenter }                      
            ]);
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 55, 20, 15, 15, 15, 40, 45, 0].map((w, i) => ({ wch: w, hidden: i === 9 }));
    addRibbon(mWs, "Daily Task Board", 'I');
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY (HANDBOOK) ---
    const sHeaders = [
        { v: "Role Responsible", s: headerStyle },
        { v: "Operational Step", s: headerStyle },
        { v: "Instructional Guide (How-to)", s: headerStyle },
        { v: "Verification Standard (Audit)", s: headerStyle },
        { v: "Risk if Missed", s: headerStyle }
    ];
    const sData: any[][] = [[], [], [], sHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sData.push([
                { v: c.role, s: dataStyleCenter },
                { v: t.technicalProtocol, s: { ...dataStyleLeft, font: { bold: true } } },
                { v: t.description || t.floorAction || "Action required per protocol.", s: dataStyleLeft },
                { v: t.proof || "Verify execution initials.", s: instructionStyle },
                { v: `[Risk: ${t.consequence}]`, s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [25, 40, 50, 45, 45].map(w => ({ wch: w }));
    addRibbon(sWs, "Training Handbook", 'E');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. INCIDENT_LOG ---
    const iHeaders = [{ v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Issue Description", s: headerStyle }, { v: "Severity", s: headerStyle }, { v: "Status", s: headerStyle }];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<15; i++) { iData.push([null, null, null, null, "OPEN"]); }
    const iWs = utils.aoa_to_sheet(iData);
    addRibbon(iWs, "Incident Registry", 'E');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    const orderedNames = ["START_HERE", "OPERATIONS_CENTER", "SITE_CONFIGURATION", "TEAM_HUB", "DAILY_TASKS", "SOP_LIBRARY", "INCIDENT_LOG"];
    wb.SheetNames = orderedNames.filter(name => wb.SheetNames.includes(name));

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master.xlsx`);
}
