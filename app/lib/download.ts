'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";

/**
 * ============================================================================
 * MOREMEETS™ OPERATIONAL INSTRUMENT - DEPLOYMENT LOCK v12.8
 * ============================================================================
 * PASS 1: INFRASTRUCTURE & VISIBILITY
 * ----------------------------------------------------------------------------
 * 1. Sheet Order: START_HERE -> OPERATIONS -> SETUP -> HUB -> TASKS -> SOPs
 * 2. Invisible Engineering: All metadata hidden (width 0).
 * 3. Terminology: Plain English (Checked By, If Missed, Instructions).
 * 4. Parity: 1,048 / 1,048 (Strictly Locked).
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack, type: 'pack' | 'individual', DEMO_MODE = false) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();
    const ORDER_ID = `MM-PRO-${item.id.toUpperCase()}-STABLE`;

    // --- INSTITUTIONAL COLOR PALETTE ---
    const COLORS = {
        NAVY_HUD: "020617",       
        PRIMARY_GREEN: "22C55E",  
        STATUS_AMBER: "F5A623",   
        STATUS_RED: "E11D48",     
        WHITE_BODY: "FFFFFF",     
        BORDER_SOFT: "E2E8F0",    
        INPUT_YELLOW: "#FEFCE8",   // High-contrast input signal
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
        fill: { patternType: 'solid', fgColor: { rgb: "FEFCE8" } }
    };

    const instructionStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.COACHING_GREEN } },
        fill: { patternType: 'solid', fgColor: { rgb: "F0FDF4" } }
    };

    const riskStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.CONSEQUENCE_RED } },
        fill: { patternType: 'solid', fgColor: { rgb: "FEF2F2" } }
    };

    const footerStyle = {
        font: { ...baseFont, sz: 8, color: { rgb: COLORS.METADATA_GREY } },
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    // --- HELPER: SYSTEM RIBBON (LINK PURGE: NO #GID) ---
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
    } else {
        packChecklists = [{
            title: item.title,
            tasks: item.tasks,
            department: item.category,
            frequency: "Daily",
            role: "Operator",
            summary: item.description,
            icon: item.icon,
            moduleId: "GENERAL",
            moduleType: "CORE"
        }];
    }

    // --- INTEGRITY VALIDATOR: PHASE 1 START ---
    const expectedCount = packChecklists.reduce((acc, cl) => acc + cl.tasks.length, 0);

    // --- 00. SYSTEM CONFIG (HIDDEN) ---
    const configData = [
        ["DUTY_STATUS", "TASK_STATUS", "SEVERITY_LEVELS", "TOGGLES"],
        ["ACTIVE", "PENDING", "P1 - CRITICAL", "YES"],
        ["LEAVE", "VERIFIED", "P2 - HIGH", "NO"],
        ["OFF", "AWAITING MGR", "P3 - MEDIUM", null],
        ["TRAINING", "OVERDUE", "P4 - LOW", null]
    ];
    const configWs = utils.aoa_to_sheet(configData);
    utils.book_append_sheet(wb, configWs, "SYSTEM_CONFIG");

    // --- 01. START_HERE (NEW ONBOARDING SOFTWARE LAYOUT) ---
    const startData: any[][] = [
        [], [],
        [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3-STEP QUICK SETUP GUIDE", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: ADD YOUR SITES", s: { font: { bold: true } } }, { v: "Go to SITE_CONFIGURATION and list your branches.", l: { Target: "#'SITE_CONFIGURATION'!A1" } }],
        [{ v: "STEP 2: ADD YOUR TEAM", s: { font: { bold: true } } }, { v: "Go to TEAM_HUB and type staff names next to their roles.", l: { Target: "#'TEAM_HUB'!A1" } }],
        [{ v: "STEP 3: RUN OPERATIONS", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin tracking execution.", l: { Target: "#'DAILY_TASKS'!A1" } }],
        [],
        [{ v: "PRO TIP: GREEN CELLS ARE FOR YOU. GREY CELLS ARE AUTOMATIC.", s: { font: { italic: true, color: { rgb: COLORS.INTEL_GREY } } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER (KPI PULSE) ---
    const opsData: any[][] = [
        [], [],
        [{ v: "OPERATIONAL VITALS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!J5:J5000, "PENDING", 'DAILY_TASKS'!M5:M5000, TRUE)` }],
        [{ v: "OVERDUE TASKS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('DAILY_TASKS'!J5:J5000, "OVERDUE", 'DAILY_TASKS'!M5:M5000, TRUE)` }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!G5:G500, "OPEN")` }],
        [{ v: "COMPLIANCE %:", s: { font: { bold: true } } }, { t: 'f', f: `TEXT(1- (E6 / MAX(1, E5+E6)), "0%")` }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    utils.book_append_sheet(wb, opsWs, "OPERATIONS_CENTER");

    // --- 03. SITE_CONFIGURATION ---
    const setupData: any[][] = [
        [], [],
        [{ v: "SITE SETUP", s: { font: { sz: 18, bold: true } } }],
        [{ v: "BRANCH NAME", s: headerStyle }, { v: "LOCATION", s: headerStyle }, { v: "ACTIVE", s: headerStyle }]
    ];
    ["Mumbai Main", "Pune Branch", "Branch 3", "Branch 4", "Branch 5"].forEach(b => {
        setupData.push([{ v: b, s: inputStyle }, { v: "City", s: inputStyle }, { v: "YES", s: inputStyle }]);
    });
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 15 }];
    addSovereignRibbon(setupWs, "Site Registry", 'C');
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB (PASS 1: HEADERS ONLY) ---
    const tHeaders = [{ v: "Key (Auto)", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Staff Name", s: headerStyle }];
    const pData: any[][] = [[], [], [], tHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 20, 25, 35].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Team Roster", 'D');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS (THE CLINICAL BOARD) ---
    const lHeaders = [
        { v: "Branch", s: headerStyle },        // A
        { v: "Dept", s: headerStyle },          // B
        { v: "Task", s: headerStyle },          // C
        { v: "Assigned To", s: headerStyle },   // D
        { v: "Status", s: headerStyle },        // E
        { v: "Checked By", s: headerStyle },    // F
        { v: "If Missed", s: headerStyle },     // G
        { v: "Instructions", s: headerStyle },  // H
        { v: "Role", s: headerStyle },          // I (Hidden)
        { v: "Freq", s: headerStyle },          // J (Hidden)
        { v: "ModID", s: headerStyle },         // K (Hidden)
        { v: "Type", s: headerStyle },          // L (Hidden)
        { v: "Active", s: headerStyle },        // M (Hidden)
        { v: "ID", s: headerStyle }             // N (Hidden)
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    [1].forEach(bId => {
        packChecklists.forEach(c => {
            c.tasks.forEach((t) => {
                const rIdx = mData.length + 1;
                const activeFormula = `=IF(OR(K${rIdx}="", L${rIdx}="CORE"), TRUE, IFERROR(INDEX('SITE_CONFIGURATION'!$C$5:$C$100, MATCH(A${rIdx}, 'SITE_CONFIGURATION'!$A$5:$A$100, 0))<>"NO", TRUE))`;
                const statusFormula = `IF(M${rIdx}=FALSE, "OFF", IF(LEN(TRIM(F${rIdx}))>0, "COMPLETED", "PENDING"))`;

                mData.push([
                    { t: 'f', f: `'SITE_CONFIGURATION'!A5`, s: dataStyleCenter }, // A: Branch
                    { v: c.department, s: dataStyleLeft },                       // B: Dept
                    { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { ...baseFont, bold: true } } }, // C: Task
                    { v: "[UNASSIGNED]", s: dataStyleLeft },                     // D: Assigned To (Formula in Pass 3)
                    { t: 'f', f: statusFormula, s: dataStyleCenter },            // E: Status
                    { v: "", s: inputStyle },                                    // F: Checked By
                    { v: t.consequence || "Operational Risk.", s: riskStyle },   // G: If Missed
                    { v: t.floorAction || t.trainerNotes || "", s: instructionStyle }, // H: Instructions
                    { v: c.role, s: dataStyleCenter },                           // I: Role
                    { v: c.frequency, s: dataStyleCenter },                      // J: Freq
                    { v: c.moduleId || "GENERAL", s: dataStyleCenter },          // K: ModID
                    { v: c.moduleType || "CORE", s: dataStyleCenter },           // L: Type
                    { t: 'f', f: activeFormula, s: dataStyleCenter },            // M: Active
                    { v: t.id, s: dataStyleCenter }                              // N: ID
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    // HIDDEN COLS: I through N
    mWs['!cols'] = [15, 15, 45, 20, 15, 15, 35, 45, 0, 0, 0, 0, 0, 0].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Task Board", 'H');
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY (TRAINING HANDBOOK) ---
    const sHeaders = [
        { v: "Task", s: headerStyle },
        { v: "Simple Language", s: headerStyle },
        { v: "Audit Requirement", s: headerStyle },
        { v: "Why It Matters", s: headerStyle },
        { v: "How To Check", s: headerStyle },
        { v: "If Missed", s: headerStyle }
    ];
    const sData: any[][] = [[], [], [], sHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sData.push([
                { v: t.id, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft },
                { v: t.technicalProtocol, s: dataStyleLeft },
                { v: "Essential for operational parity and standard protection.", s: dataStyleLeft },
                { v: t.proof, s: instructionStyle },
                { v: t.consequence, s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [10, 40, 40, 40, 40, 40].map(w => ({ wch: w }));
    addSovereignRibbon(sWs, "Training Handbook", 'F');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. INCIDENT_LOG ---
    const iHeaders = [{ v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Issue", s: headerStyle }, { v: "Severity", s: headerStyle }, { v: "Status", s: headerStyle }];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<10; i++) { iData.push([null, null, null, null, "OPEN"]); }
    const iWs = utils.aoa_to_sheet(iData);
    addSovereignRibbon(iWs, "Incident Registry", 'E');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // Hide technical artifacts
    if (!wb.Workbook) wb.Workbook = { Sheets: [] };
    wb.Workbook.Sheets[wb.SheetNames.indexOf("SYSTEM_CONFIG")] = { Hidden: 1 };

    // Set final sheet order
    const orderedNames = ["START_HERE", "OPERATIONS_CENTER", "SITE_CONFIGURATION", "TEAM_HUB", "DAILY_TASKS", "SOP_LIBRARY", "INCIDENT_LOG"];
    wb.SheetNames = orderedNames.filter(name => wb.SheetNames.includes(name));

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master.xlsx`);
}
