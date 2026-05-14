'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";

/**
 * ============================================================================
 * MOREMEETS™ OPERATIONAL INSTRUMENT - PHASE 3: ACTIVE GOVERNANCE (AGA)
 * ============================================================================
 * ARCHITECTURE: Multi-Sheet (Console, Setup, Hub, Register, Incidents, etc.)
 * RUNTIME: Google Sheets Optimized
 * INTEGRITY: Pre-flight Validator and Explicit Safety Lock.
 * MODULARITY: Formula-based "YES/NO" Switchboard.
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack, type: 'pack' | 'individual', DEMO_MODE = true) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();
    const ORDER_ID = "MM-PRO-v4.4-STABLE";

    // --- INSTITUTIONAL COLOR PALETTE ---
    const COLORS = {
        NAVY_HUD: "020617",       
        PRIMARY_GREEN: "22C55E",  
        STATUS_AMBER: "F5A623",   
        STATUS_RED: "E11D48",     
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

    // --- HELPER: SYSTEM RIBBON ---
    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'K') => {
        const ribbonData = [
            [{ v: "◀ BACK TO COMMAND HUD", l: { Target: "#'COMMAND_HUD'!A1" }, s: navStyle }],
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

    const addLiabilityFooter = (ws: WorkSheet, lastRow: number, endCol: string = 'K') => {
        const rowIdx = lastRow + 2;
        const footerText = "For support, contact more@moremeets.com | MoreMeets assumes no liability for post-download alterations. © 2025 MoreMeets.";
        const endC = utils.decode_col(endCol);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: rowIdx, c: 0 }, e: { r: rowIdx, c: endC } });
        utils.sheet_add_aoa(ws, [[{ v: footerText, s: footerStyle }]], { origin: { r: rowIdx, c: 0 } });
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
        ["TRAINING", "OVERDUE", "P4 - LOW", null],
        [null, "NOT APPLICABLE", null, null]
    ];
    const configWs = utils.aoa_to_sheet(configData);
    utils.book_append_sheet(wb, configWs, "SYSTEM_CONFIG");

    // --- 01. COMMAND_HUD (Interactive Dashboard) ---
    const hudData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} COMMAND`, s: { alignment: { horizontal: 'center' }, font: { sz: 22, bold: true } } }],
        [{ v: "DO NOT RENAME WORKBOOK TABS. DOING SO WILL BREAK OPERATIONAL LOGIC.", s: { alignment: { horizontal: 'center' }, font: { color: { rgb: COLORS.STATUS_RED }, bold: true, sz: 10 } } }],
        [],
        [{ v: "OPERATIONAL VITALS HUD", s: { font: { bold: true, sz: 12 } } }],
        [{ v: "OVERDUE MISSIONS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('TASK_REGISTER'!J5:J5000, "OVERDUE", 'TASK_REGISTER'!M5:M5000, TRUE)`, s: { font: { color: { rgb: COLORS.STATUS_RED }, bold: true, sz: 14 } } }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!G5:G500, "OPEN")`, s: { font: { color: { rgb: COLORS.STATUS_AMBER }, bold: true, sz: 14 } } }],
        [{ v: "PERSONNEL ON DUTY:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIF('TEAM_HUB'!E5:E500, "ACTIVE")`, s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true, sz: 14 } } }],
        [{ v: "PENDING MANAGER SIGN-OFF:", s: { font: { bold: true } } }, { t: 'f', f: `COUNTIFS('TASK_REGISTER'!J5:J5000, "AWAITING MGR", 'TASK_REGISTER'!M5:M5000, TRUE)`, s: { font: { color: { rgb: COLORS.STATUS_AMBER }, bold: true, sz: 14 } } }],
        [],
        [{ v: "MANAGER'S 5-MINUTE MORNING ROUTINE", s: { font: { bold: true, sz: 12 } } }],
        [{ v: "1. Review and resolve all OVERDUE tasks above." }],
        [{ v: "2. Triage any OPEN INCIDENTS in the Incident Log." }],
        [{ v: "3. Verify Shift Handover completeness." }],
        [{ v: "4. Initialize and assign tasks to new staff in Team Hub." }]
    ];
    const hudWs = utils.aoa_to_sheet(hudData);
    hudWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    hudWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, hudWs, "COMMAND_HUD");

    // --- 02. BRANCH_SETUP (The Configuration Switchboard) ---
    const optionalModules = Array.from(new Set(packChecklists.filter(c => c.moduleType === 'OPTIONAL').map(c => c.moduleId))).filter(Boolean);
    const setupHeaders = [
        { v: "BRANCH NAME", s: headerStyle },
        ...optionalModules.map(m => ({ v: m!, s: headerStyle }))
    ];
    const setupData: any[][] = [
        [{ v: "SITE CONFIGURATION MATRIX", s: { font: { sz: 18, bold: true } } }],
        [{ v: "Define your site names and activate optional operational modules (YES/NO) below.", s: { font: { italic: true } } }],
        [],
        [{ v: "COMPANY NAME:", s: { font: { bold: true } } }, { v: "", s: inputStyle }],
        [{ v: "ORDER ID:", s: { font: { bold: true } } }, { v: ORDER_ID, s: { font: { sz: 8, color: { rgb: COLORS.METADATA_GREY } } } }],
        [], [], [],
        setupHeaders
    ];
    ["Branch 1", "Branch 2", "Branch 3", "Branch 4", "Branch 5"].forEach(b => {
        const row = [ { v: b, s: inputStyle } ];
        for(let i=0; i < optionalModules.length; i++) row.push({ v: "YES", s: inputStyle });
        setupData.push(row);
    });
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 25 }, ...Array(optionalModules.length).fill({ wch: 18 })];
    (setupWs as any)['!dataValidation'] = [
        { sqref: `B10:Z100`, type: "list", formula1: "SYSTEM_CONFIG!$D$2:$D$3" }
    ];
    utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");

    // --- 03. TEAM_HUB ---
    const rolesList = Array.from(new Set(packChecklists.map(c => c.role)));
    const tHeaders = [
        { v: "Lookup Key (Auto)", s: headerStyle }, { v: "Branch Name (Input)", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Staff Assigned (Input)", s: headerStyle },
        { v: "Duty Status", s: headerStyle }
    ];
    const pData: any[][] = [[], [], [], tHeaders];
    pData[0] = [{ v: "BRANCH REGISTER (INPUT):", s: { font: { bold: true } } }, { v: "Branch 1", s: inputStyle }, { v: "Branch 2", s: inputStyle }, { v: "Branch 3", s: inputStyle }, { v: "Branch 4", s: inputStyle }];
    
    [1, 2].forEach(bId => {
        rolesList.forEach(role => {
            const rowIdx = pData.length + 1;
            const branchRef = `IFERROR(IF(LEN(TRIM(INDEX($B$1:$F$1, ${bId})))=0, "", INDEX($B$1:$F$1, ${bId})), "")`;
            pData.push([
                { t: 'f', f: `IF(LEN(${branchRef})>0, ${branchRef} & "|" & C${rowIdx}, "")`, s: dataStyleCenter },
                { t: 'f', f: branchRef, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: DEMO_MODE ? "Sample User" : "", s: inputStyle },
                { v: "ACTIVE", s: inputStyle }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 25, 35, 15].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Team & Personnel Mapping", 'E');
    (pWs as any)['!dataValidation'] = [{ sqref: "E5:E500", type: "list", formula1: "SYSTEM_CONFIG!$A$2:$A$5" }];
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 04. TASK_REGISTER (The Blind Execution Surface) ---
    const lHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, 
        { v: "Technical Protocol (Audit)", s: headerStyle }, 
        { v: "Action (Floor)", s: headerStyle }, 
        { v: "Done By (Staff)", s: headerStyle }, { v: "Verified By (Mgr)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Module ID (Hidden)", s: headerStyle }, { v: "Module Type (Hidden)", s: headerStyle }, { v: "Module Active (Hidden)", s: headerStyle },
        { v: "Consequence of Failure", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    [1].forEach(bId => {
        packChecklists.forEach(c => {
            c.tasks.forEach((t, tIdx) => {
                const rIdx = mData.length + 1;
                const branchRef = `IFERROR(IF(LEN(TRIM(INDEX('TEAM_HUB'!$B$1:$F$1, ${bId})))=0, "", INDEX('TEAM_HUB'!$B$1:$F$1, ${bId})), "")`;
                const keyRef = `B${rIdx} & "|" & C${rIdx}`;
                const staffVlookup = `VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$D$500, 4, FALSE)`;
                const staffFormula = `IFERROR(IF(LEN(TRIM(${staffVlookup}))=0, "UNASSIGNED", ${staffVlookup}), "UNASSIGNED")`;
                
                // AGA Logic Formula (Column M: Module Active?)
                const activeFormula = `=IF(OR(K${rIdx}="", L${rIdx}="CORE"), TRUE, IFERROR(INDEX('BRANCH_SETUP'!$B$10:$Z$100, MATCH(B${rIdx}, 'BRANCH_SETUP'!$A$10:$A$100, 0), MATCH(K${rIdx}, 'BRANCH_SETUP'!$B$9:$Z$9, 0))<>"NO", TRUE))`;
                
                // Status Override Formula (Column J)
                const statusFormula = `IF(M${rIdx}=FALSE, "NOT APPLICABLE", IF(LEN(TRIM(I${rIdx}))>0, "VERIFIED", IF(LEN(TRIM(H${rIdx}))>0, "AWAITING MGR", "PENDING")))`;

                mData.push([
                    { v: new Date(), t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: branchRef, s: dataStyleCenter },
                    { v: c.role, s: dataStyleLeft },
                    { t: 'f', f: staffFormula, s: dataStyleLeft },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: dataStyleLeft },
                    { v: t.floorAction || t.trainerNotes || "", s: instructionStyle },
                    { v: (DEMO_MODE && tIdx < 2) ? "JD" : "", s: inputStyle },
                    { v: (DEMO_MODE && tIdx === 0) ? "MM" : "", s: inputStyle },
                    { t: 'f', f: statusFormula, s: dataStyleCenter },
                    { v: c.moduleId || "GENERAL", s: dataStyleCenter },
                    { v: c.moduleType || "CORE", s: dataStyleCenter },
                    { t: 'f', f: activeFormula, s: dataStyleCenter },
                    { v: t.consequence || "Operational Risk Applied.", s: riskStyle }
                ]);
            });
        });
    });

    // --- MANDATORY INTEGRITY VALIDATOR ---
    const renderedCount = mData.length - 4; 
    if (expectedCount !== renderedCount) {
        alert(`CRITICAL_DATA_LOSS_PREVENTED: Expected ${expectedCount}, Rendered ${renderedCount}.`);
        throw new Error("Integrity Failure - Mismatch between Source and Render");
    }

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [12, 20, 20, 22, 10, 75, 65, 20, 20, 15, 0, 0, 0, 45].map((w, i) => ({ wch: w, hidden: i >= 10 && i <= 12 }));
    addSovereignRibbon(mWs, "Daily Operational Register", 'N');
    (mWs as any)['!conditionalFormatting'] = [
        { type: "expression", formula: `SEARCH("VERIFIED", J5)`, style: { fill: { fgColor: { rgb: "C6EFCE" } }, font: { color: { rgb: "006100" } } }, sqref: "J5:J5000" },
        { type: "expression", formula: `SEARCH("NOT APPLICABLE", J5)`, style: { fill: { fgColor: { rgb: COLORS.INACTIVE_GREY } }, font: { color: { rgb: COLORS.METADATA_GREY } } }, sqref: "J5:J5000" }
    ];
    utils.book_append_sheet(wb, mWs, "TASK_REGISTER");

    // --- 05. INCIDENT_LOG ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Incident Description", s: headerStyle }, { v: "Severity", s: headerStyle }, 
        { v: "Reported By", s: headerStyle }, { v: "Action Taken", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<10; i++) { iData.push([null, null, null, null, null, null, "OPEN"]); }
    const iWs = utils.aoa_to_sheet(iData);
    addSovereignRibbon(iWs, "Incident & Liability Ledger", 'G');
    (iWs as any)['!dataValidation'] = [{ sqref: "D5:D500", type: "list", formula1: "SYSTEM_CONFIG!$C$2:$C$5" }];
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 06. SOP_LIBRARY ---
    const sHeaders = [
        { v: "Division", s: headerStyle }, { v: "ID", s: headerStyle }, 
        { v: "Technical Protocol", s: headerStyle }, { v: "Action Instruction", s: headerStyle }, 
        { v: "Risk Narrative", s: headerStyle }
    ];
    const sData: any[][] = [[], [], [], sHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sData.push([
                { v: c.title, s: dataStyleLeft }, { v: t.id, s: dataStyleCenter },
                { v: t.technicalProtocol || t.description, s: dataStyleLeft },
                { v: t.floorAction || t.trainerNotes || "", s: instructionStyle },
                { v: t.consequence, s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [25, 10, 75, 65, 55].map(w => ({ wch: w }));
    addSovereignRibbon(sWs, "Master SOP Database", 'E');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. EXPORT_AUDIT (HIDDEN SAFETY LOG) ---
    const auditData = [
        ["TIMESTAMP", "PACK_NAME", "EXPECTED_TASKS", "RENDERED_TASKS", "STATUS"],
        [new Date().toISOString(), item.title, expectedCount, renderedCount, "VERIFIED"]
    ];
    const auditWs = utils.aoa_to_sheet(auditData);
    utils.book_append_sheet(wb, auditWs, "EXPORT_AUDIT");

    // Hide background sheets
    if (!wb.Workbook) wb.Workbook = { Sheets: [] };
    wb.Workbook.Sheets[wb.SheetNames.indexOf("SYSTEM_CONFIG")] = { Hidden: 1 };
    wb.Workbook.Sheets[wb.SheetNames.indexOf("EXPORT_AUDIT")] = { Hidden: 1 };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Command_Master.xlsx`);
}
