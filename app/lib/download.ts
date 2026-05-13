'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * ============================================================================
 * GOOGLE SHEETS COMPATIBILITY CHECKLIST (STABILIZATION MANDATE v1.0)
 * ============================================================================
 * 1. NAVIGATION: Native bottom tabs. HOME_CONSOLE is instructional, not a link-hub.
 * 2. FORMULAS: Wrapped in IFERROR and use absolute references ($A$1).
 * 3. ZERO-GHOSTING: Use IF(LEN(TRIM(X))=0, "", X) to prevent "0" in empty lookups.
 * 4. FILTERS: Row 4 remains unmerged for native mobile filter detection.
 * 5. SELECTION: !dataValidation rules reference hidden SYSTEM_CONFIG list.
 * 6. FORMATTING: !conditionalFormatting rules for status-color transitions.
 * 7. ERGONOMICS: Technical Protocol width = 75 | Action width = 65.
 * 8. DATA: Preservation of Audit/Simple Language, Trainer Notes, and Risks.
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual', DEMO_MODE = false) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();
    const ORDER_ID = "MM-SOVEREIGN-STABLE-V1.0";

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
        TILE_BG: "111827",        
        METADATA_GREY: "64748B",  
        COACHING_GREEN: "065F46", 
        CONSEQUENCE_RED: "991B1B"
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
            [{ v: "◀ MOREMEETS™ SOVEREIGN ENGINE V1.0", s: navStyle }],
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
        const footerText = "For support, contact more@moremeets.com | MoreMeets assumes no liability for post-download structural alterations. © 2025 MoreMeets.";
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
            icon: item.icon
        }];
    }

    // --- 00. SYSTEM CONFIG (HIDDEN) ---
    const configData = [
        ["DUTY_STATUS", "TASK_STATUS", "SEVERITY_LEVELS"],
        ["ACTIVE", "PENDING", "P1 - CRITICAL"],
        ["LEAVE", "VERIFIED", "P2 - HIGH"],
        ["OFF", "AWAITING MGR", "P3 - MEDIUM"],
        ["TRAINING", "OVERDUE", "P4 - LOW"],
        [null, "OFF CYCLE", null]
    ];
    const configWs = utils.aoa_to_sheet(configData);
    utils.book_append_sheet(wb, configWs, "SYSTEM_CONFIG");

    // --- 01. HOME CONSOLE (Instructional & Identity) ---
    const homeWsData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} COMMAND`, s: { alignment: { horizontal: 'center' }, font: { sz: 20, bold: true } } }],
        [{ v: `OPERATIONAL INFRASTRUCTURE STABLE V1.0`, s: { alignment: { horizontal: 'center' }, font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
        [{ v: `AUTH: ${ORDER_ID}`, s: { alignment: { horizontal: 'center' }, font: { sz: 8, color: { rgb: COLORS.METADATA_GREY } } } }],
        [],
        [{ v: "ONBOARDING & DEPLOYMENT FLOW", s: { font: { bold: true, sz: 12 } } }],
        [{ v: "1. TEAM HUB:", s: { font: { bold: true } } }, { v: "Define your branches (A8-E8) and assign Staff to Roles in the TEAM_HUB tab." }],
        [{ v: "2. EXECUTION:", s: { font: { bold: true } } }, { v: "Staff open TASK_REGISTER on mobile, filter by 'Role', and initials when done." }],
        [{ v: "3. OVERSIGHT:", s: { font: { bold: true } } }, { v: "Managers check AWAITING MGR tasks daily and initials to verify completion (turns green)." }],
        [],
        [{ v: "INSTITUTIONAL METRICS (GLOBAL)", s: { font: { bold: true, sz: 12 } } }],
        [{ v: "Global Task Completion:", s: { font: { italic: true } } }, { t: 'f', f: `IFERROR(COUNTIF('TASK_REGISTER'!J:J, "VERIFIED") / MAX(1, COUNTA('TASK_REGISTER'!F:F)-1), "READY")`, s: { font: { bold: true } } }],
        [{ v: "Active Deviations:", s: { font: { italic: true } } }, { t: 'f', f: `COUNTIF('INCIDENT_LOG'!G:G, "OPEN")`, s: { font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeWsData);
    homeWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 1 } }
    ];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. SYSTEM GUIDE ---
    const guideData = [
        [], [],
        [{ v: "SOVEREIGN SYSTEM RUNTIME MANUAL", s: { font: { sz: 16, bold: true } } }],
        [],
        [{ v: "FOR MANAGERS:", s: { font: { bold: true } } }, { v: "Filter 'TASK_REGISTER' by 'Branch Name' to audit specific units. High-Priority tasks must be verified daily." }],
        [{ v: "FOR STAFF:", s: { font: { bold: true } } }, { v: "Use the 'Role' filter on your phone. Only initials Column H when the work is physically finished." }],
        [{ v: "LIABILITY:", s: { font: { bold: true } } }, { v: "Any task missed or failed must be recorded immediately in the 'INCIDENT_LOG' for forensic trail." }]
    ];
    const gWs = utils.aoa_to_sheet(guideData);
    addSovereignRibbon(gWs, "Instructional Protocol", 'B');
    gWs['!cols'] = [{ wch: 30 }, { wch: 80 }];
    utils.book_append_sheet(wb, gWs, "SYSTEM_GUIDE");

    // --- 03. TEAM HUB (Setup) ---
    const rolesList = Array.from(new Set(packChecklists.map(c => c.role)));
    const tHeaders = [
        { v: "Lookup Key (Auto)", s: headerStyle }, { v: "Branch Name (Input)", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Staff Assigned (Input)", s: headerStyle },
        { v: "Duty Status", s: headerStyle }
    ];
    const pData: any[][] = [[], [], [], tHeaders];
    // Branch Names row
    pData[0] = [{ v: "BRANCH REGISTER (INPUT):", s: { font: { bold: true } } }, { v: "Unit 1", s: inputStyle }, { v: "Unit 2", s: inputStyle }, { v: "Unit 3", s: inputStyle }, { v: "Unit 4", s: inputStyle }];
    
    [1, 2].forEach(bId => {
        rolesList.forEach(role => {
            const rowIdx = pData.length + 1;
            const branchRef = `IFERROR(IF(LEN(TRIM(INDEX($B$1:$F$1, ${bId})))=0, "", INDEX($B$1:$F$1, ${bId})), "")`;
            pData.push([
                { t: 'f', f: `IF(LEN(${branchRef})>0, ${branchRef} & "|" & C${rowIdx}, "")`, s: dataStyleCenter },
                { t: 'f', f: branchRef, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: DEMO_MODE ? "John Doe" : "", s: inputStyle },
                { v: "ACTIVE", s: inputStyle }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 25, 35, 15].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Team & Branch Mapping", 'E');
    addLiabilityFooter(pWs, pData.length, 'E');
    (pWs as any)['!dataValidation'] = [{ sqref: "E5:E500", type: "list", formula1: "SYSTEM_CONFIG!$A$2:$A$5" }];
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 04. TASK REGISTER (Execution - Primary) ---
    const lHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, 
        { v: "Technical Protocol (Audit)", s: headerStyle }, 
        { v: "Action (Trainer Notes)", s: headerStyle }, 
        { v: "Done By (Staff Initials)", s: headerStyle }, { v: "Verified By (Mgr Initials)", s: headerStyle },
        { v: "Status", s: headerStyle }, { v: "Consequence of Failure", s: riskStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    [1, 2].forEach(bId => {
        packChecklists.forEach(c => {
            c.tasks.forEach((t, tIdx) => {
                const rIdx = mData.length + 1;
                const branchRef = `IFERROR(IF(LEN(TRIM(INDEX('TEAM_HUB'!$B$1:$F$1, ${bId})))=0, "", INDEX('TEAM_HUB'!$B$1:$F$1, ${bId})), "")`;
                const keyRef = `B${rIdx} & "|" & C${rIdx}`;
                const staffVlookup = `VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$D$500, 4, FALSE)`;
                const staffFormula = `IFERROR(IF(LEN(TRIM(${staffVlookup}))=0, "UNASSIGNED", ${staffVlookup}), "UNASSIGNED")`;
                const statusFormula = `IF(LEN(TRIM(I${rIdx}))>0, "VERIFIED", IF(LEN(TRIM(H${rIdx}))>0, "AWAITING MGR", "PENDING"))`;

                const doneBy = (DEMO_MODE && tIdx < 2) ? "JD" : "";
                const verifiedBy = (DEMO_MODE && tIdx === 0) ? "MM" : "";

                mData.push([
                    { v: new Date(), t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: branchRef, s: dataStyleCenter },
                    { v: c.role, s: dataStyleLeft },
                    { t: 'f', f: staffFormula, s: dataStyleLeft },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: dataStyleLeft },
                    { v: t.floorAction || t.trainerNotes || "", s: instructionStyle },
                    { v: doneBy, s: inputStyle },
                    { v: verifiedBy, s: inputStyle },
                    { t: 'f', f: statusFormula, s: dataStyleCenter },
                    { v: t.consequence || "Operational Risk Applied.", s: riskStyle }
                ]);
            });
        });
    });
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [12, 20, 20, 22, 10, 75, 65, 20, 20, 15, 45].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Operational Register", 'K');
    addLiabilityFooter(mWs, mData.length, 'K');
    (mWs as any)['!dataValidation'] = [{ sqref: "J5:J1000", type: "list", formula1: "SYSTEM_CONFIG!$B$2:$B$6" }];
    (mWs as any)['!conditionalFormatting'] = [
        { type: "expression", formula: `SEARCH("VERIFIED", J5)`, style: { fill: { fgColor: { rgb: "C6EFCE" } }, font: { color: { rgb: "006100" } } }, sqref: "J5:J1000" },
        { type: "expression", formula: `SEARCH("OVERDUE", J5)`, style: { fill: { fgColor: { rgb: "FFC7CE" } }, font: { color: { rgb: "9C0006" } } }, sqref: "J5:J1000" },
        { type: "expression", formula: `SEARCH("AWAITING MGR", J5)`, style: { fill: { fgColor: { rgb: "FFEB9C" } }, font: { color: { rgb: "9C6500" } } }, sqref: "J5:J1000" }
    ];
    utils.book_append_sheet(wb, mWs, "TASK_REGISTER");

    // --- 05. INCIDENT LOG ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Incident Description", s: headerStyle }, { v: "Severity", s: headerStyle }, 
        { v: "Reported By", s: headerStyle }, { v: "Action Taken", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    if (DEMO_MODE) {
        iData.push([{ v: new Date(), t: 'd', s: dataStyleCenter }, { v: "Unit 1", s: dataStyleCenter }, { v: "Minor leakage in cold storage shelf B.", s: dataStyleLeft }, { v: "P3 - MEDIUM", s: dataStyleCenter }, { v: "John Doe", s: dataStyleCenter }, { v: "Cleaned spill and flagged for repair.", s: dataStyleLeft }, { v: "RESOLVED", s: dataStyleCenter }]);
    }
    for(let i=0; i<10; i++) { iData.push([null, null, null, null, null, null, "OPEN"]); }
    const iWs = utils.aoa_to_sheet(iData);
    addSovereignRibbon(iWs, "Incident & Liability Ledger", 'G');
    addLiabilityFooter(iWs, iData.length, 'G');
    (iWs as any)['!dataValidation'] = [
        { sqref: "D5:D500", type: "list", formula1: "SYSTEM_CONFIG!$C$2:$C$5" },
        { sqref: "G5:G500", type: "list", formula1: "SYSTEM_CONFIG!$D$2:$D$4" }
    ];
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 06. SHIFT HANDOVER ---
    const hHeaders = [
        { v: "Date", s: headerStyle }, { v: "Incoming Manager", s: headerStyle }, { v: "Outgoing Manager", s: headerStyle }, { v: "Critical Notes", s: headerStyle }, { v: "Handoff Status", s: headerStyle }
    ];
    const hData: any[][] = [[], [], [], hHeaders];
    for(let i=0; i<10; i++) { hData.push([null, null, null, null, "COMPLETED"]); }
    const hWs = utils.aoa_to_sheet(hData);
    addSovereignRibbon(hWs, "Shift Handover Protocol", 'E');
    addLiabilityFooter(hWs, 10, 'E');
    utils.book_append_sheet(wb, hWs, "SHIFT_HANDOVER");

    // --- 07. SOP LIBRARY (Reference) ---
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
    addLiabilityFooter(sWs, sData.length, 'E');
    if(!sWs['!rows']) sWs['!rows'] = [];
    for(let i=4; i<sData.length; i++) { sWs['!rows'][i] = { hpt: 45 }; }
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    if (!wb.Workbook) wb.Workbook = { Sheets: [] };
    const configIdx = wb.SheetNames.indexOf("SYSTEM_CONFIG");
    wb.Workbook.Sheets[configIdx] = { Hidden: 1 };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_MoreMeets_Sovereign.xlsx`);
}
