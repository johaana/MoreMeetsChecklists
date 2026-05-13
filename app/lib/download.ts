'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * ============================================================================
 * GOOGLE SHEETS COMPATIBILITY CHECKLIST (STABILIZATION MANDATE v15.6)
 * ============================================================================
 * 1. NAVIGATION: Use Native Link Objects ({ l: { Target: "Sheet!A1" } }). Formulas are unstable.
 * 2. FORMULAS: Wrap VLOOKUP/INDEX in IFERROR and use absolute references ($A$1).
 * 3. ZERO-GHOSTING: Use IF(LEN(TRIM(X))=0, "", X) to prevent "0" in empty lookups.
 * 4. FILTERS: Row 4 must be unmerged to allow native mobile filter detection.
 * 5. SELECTION: !dataValidation rules reference hidden SYSTEM_CONFIG list.
 * 6. FORMATTING: !conditionalFormatting rules for status-color transitions.
 * 7. ERGONOMICS: Freeze Top 4 rows and First 2 columns for mobile context.
 * 8. DATA: Preserve Audit/Simple Language, Trainer Notes, and Risks exactly.
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();
    const ORDER_ID = "MM-SOVEREIGN-STABILIZED-V15.6";

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
        CONSEQUENCE_RED: "991B1B",
        STATUS_BLUE: "2563EB",
        STATUS_MUTED: "94A3B8"
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

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE_BODY }, sz: 11 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } },
        alignment: { horizontal: 'center', ...verticalCenter },
        border: { 
            left: { style: 'thick', color: { rgb: COLORS.PRIMARY_GREEN } },
            top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
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

    // --- HELPER: SYSTEM RIBBON (HUD) ---
    // Uses Alternative 4: Native Link Objects for single-click navigation after XLSX import.
    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'M') => {
        const ribbonData = [
            [{ v: "◀ BACK TO CONSOLE", l: { Target: "HOME_CONSOLE!A1" }, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: { ...navStyle, font: { ...navStyle.font, sz: 18, color: { rgb: "FFFFFF" } } } }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        
        const endCIdx = utils.decode_col(endCol);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: endCIdx } }); 

        // STABILIZATION: Freeze Top HUD (4 rows) + First 2 Columns (Task Metadata)
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 4, xSplit: 2 }];
        
        if(!ws['!rows']) ws['!rows'] = [];
        ws['!rows'][0] = { hpt: 30 };
        ws['!rows'][1] = { hpt: 50 };
        ws['!rows'][2] = { hpt: 20 };
        ws['!rows'][3] = { hpt: 45 }; 
    };

    const addLiabilityFooter = (ws: WorkSheet, lastRow: number, endCol: string = 'M') => {
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

    // --- 00. SYSTEM CONFIG (HIDDEN SOURCE OF TRUTH) ---
    const configData = [
        ["DUTY_STATUS", "TASK_STATUS", "SEVERITY_LEVELS", "INCIDENT_STATUS"],
        ["ACTIVE", "PENDING", "P1 - CRITICAL", "OPEN"],
        ["LEAVE", "VERIFIED", "P2 - HIGH", "RESOLVED"],
        ["OFF", "AWAITING MGR", "P3 - MEDIUM", "ESCALATED"],
        ["TRAINING", "OVERDUE", "P4 - LOW", null],
        [null, "OFF CYCLE", null, null]
    ];
    const configWs = utils.aoa_to_sheet(configData);
    utils.book_append_sheet(wb, configWs, "SYSTEM_CONFIG");

    // --- 01. HOME CONSOLE ---
    const homeWsData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { alignment: { horizontal: 'center' }, font: { sz: 20, bold: true } } }],
        [{ v: `OPERATIONAL DATA ENGINE v15.6 | SOVEREIGN STABLE`, s: { alignment: { horizontal: 'center' }, font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
        [{ v: `SECURITY AUTH: ${ORDER_ID}`, s: { alignment: { horizontal: 'center' }, font: { sz: 8, color: { rgb: COLORS.METADATA_GREY } } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }, null,
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }, null,
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "BRANCH_MASTER!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "TASK_REGISTER!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "BUSINESS_HEALTH!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ TEAM HUB", l: { Target: "TEAM_HUB!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "SHIFT_HANDOVER!A1" }, s: tileStyle }, null, 
            { v: "▶ FINANCIAL SHIELD", l: { Target: "FINANCIAL_SHIELD!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ MASTER SOPs", l: { Target: "SOP_LIBRARY!A1" }, s: tileStyle }, null, 
            { v: "▶ SYSTEM GUIDE", l: { Target: "SYSTEM_GUIDE!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "INCIDENT_LOG!A1" }, s: tileStyle }
        ]
    ];

    const homeWs = utils.aoa_to_sheet(homeWsData);
    homeWs['!cols'] = [22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }, { s: { r: 6, c: 4 }, e: { r: 6, c: 5 } },
        { s: { r: 7, c: 0 }, e: { r: 7, c: 1 } }, { s: { r: 7, c: 2 }, e: { r: 7, c: 3 } }, { s: { r: 7, c: 4 }, e: { r: 7, c: 5 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 1 } }, { s: { r: 8, c: 2 }, e: { r: 8, c: 3 } }, { s: { r: 8, c: 4 }, e: { r: 8, c: 5 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 2 }, e: { r: 9, c: 3 } }, { s: { r: 9, c: 4 }, e: { r: 9, c: 5 } }
    ];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. BRANCH MASTER ---
    const bHeaders = [
        { v: "ID", s: headerStyle }, { v: "Branch Name (Input)", s: headerStyle }, 
        { v: "SLA Level", s: headerStyle }, { v: "Operational Status", s: headerStyle }
    ];
    const bData: any[][] = [[], [], [], bHeaders];
    ["Unit 1 (HQ)", "Unit 2 (Secondary)", "Unit 3", "Unit 4", "Unit 5"].forEach((name, i) => {
        bData.push([
            { v: (i+1).toString(), s: dataStyleCenter }, { v: name, s: inputStyle },
            { v: "PREMIUM", s: dataStyleCenter }, { v: "ACTIVE", s: dataStyleCenter }
        ]);
    });
    const bWs = utils.aoa_to_sheet(bData);
    bWs['!cols'] = [10, 40, 20, 20].map(w => ({ wch: w }));
    addSovereignRibbon(bWs, "Branch Master Registry", 'D');
    addLiabilityFooter(bWs, bData.length, 'D');
    utils.book_append_sheet(wb, bWs, "BRANCH_MASTER");

    // --- 03. TEAM HUB ---
    const tHeaders = [
        { v: "Lookup Key (Auto)", s: headerStyle }, { v: "Role", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, { v: "Staff Assigned (Input)", s: headerStyle },
        { v: "Duty Status", s: headerStyle }
    ];
    const rolesList = Array.from(new Set(packChecklists.map(c => c.role)));
    const pData: any[][] = [[], [], [], tHeaders];
    [1, 2, 3, 4, 5].forEach(bId => {
        rolesList.forEach(role => {
            const rowIdx = pData.length + 1;
            const branchRef = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`;
            const ghostGuard = `IF(LEN(TRIM(${branchRef}))=0, "", ${branchRef})`;
            pData.push([
                { t: 'f', f: `IF(LEN(${ghostGuard})>0, ${ghostGuard} & "|" & B${rowIdx}, "")`, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { t: 'f', f: ghostGuard, s: dataStyleCenter },
                { v: "", s: inputStyle },
                { v: "ACTIVE", s: inputStyle }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 25, 35, 15].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Responsibility & Team Hub", 'E');
    addLiabilityFooter(pWs, pData.length, 'E');
    // Dropdown for Duty Status (Col E)
    (pWs as any)['!dataValidation'] = [{ sqref: "E5:E500", type: "list", formula1: "SYSTEM_CONFIG!$A$2:$A$5" }];
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 04. TASK REGISTER ---
    const lHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, 
        { v: "Technical Protocol (Audit)", s: headerStyle }, 
        { v: "Action (Trainer Notes)", s: headerStyle }, 
        { v: "Done By (Initials)", s: headerStyle }, { v: "Verified By (Mgr)", s: headerStyle },
        { v: "Status", s: headerStyle }, { v: "Consequence of Failure", s: riskStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    [1, 2].forEach(bId => {
        packChecklists.forEach(c => {
            c.tasks.forEach((t) => {
                const rIdx = mData.length + 1;
                const branchRef = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`;
                const branchGhostGuard = `IF(LEN(TRIM(${branchRef}))=0, "", ${branchRef})`;
                const keyRef = `B${rIdx} & "|" & C${rIdx}`;
                const assignedVlookup = `VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$D$500, 4, FALSE)`;
                const staffFormula = `IFERROR(IF(LEN(TRIM(${assignedVlookup}))=0, "UNASSIGNED", ${assignedVlookup}), "UNASSIGNED")`;
                // Status Logic: IF(Verified) -> VERIFIED, IF(Done) -> AWAITING MGR, ELSE PENDING
                const statusFormula = `IF(LEN(TRIM(I${rIdx}))>0, "VERIFIED", IF(LEN(TRIM(H${rIdx}))>0, "AWAITING MGR", "PENDING"))`;

                mData.push([
                    { v: new Date(), t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: branchGhostGuard, s: dataStyleCenter },
                    { v: c.role, s: dataStyleLeft },
                    { t: 'f', f: staffFormula, s: dataStyleLeft },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: dataStyleLeft },
                    { v: t.floorAction || t.trainerNotes || "", s: instructionStyle },
                    { v: "", s: inputStyle },
                    { v: "", s: inputStyle },
                    { t: 'f', f: statusFormula, s: dataStyleCenter },
                    { v: t.consequence || "Operational Risk Applied.", s: riskStyle },
                    { v: new Date(), t: 'd', s: { hidden: true } }, // L: Created At
                    { v: null, s: { hidden: true } }, // M: Updated At
                    { v: null, s: { hidden: true } }, // N: Verified At
                    { v: null, s: { hidden: true } }  // O: Closed At
                ]);
            });
        });
    });
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [12, 20, 20, 22, 10, 75, 65, 18, 18, 15, 45, 1, 1, 1, 1].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Operational Register", 'K');
    addLiabilityFooter(mWs, mData.length, 'K');

    // MOBILE ERGONOMICS: Set task row heights to 35pt
    if(!mWs['!rows']) mWs['!rows'] = [];
    for(let i=4; i<mData.length; i++) {
        mWs['!rows'][i] = { hpt: 35 };
    }

    // Dropdown for Status (Col J)
    (mWs as any)['!dataValidation'] = [{ sqref: "J5:J1000", type: "list", formula1: "SYSTEM_CONFIG!$B$2:$B$6" }];
    // Conditional Formatting for Status
    (mWs as any)['!conditionalFormatting'] = [
        { type: "expression", formula: `SEARCH("VERIFIED", J5)`, style: { fill: { fgColor: { rgb: "C6EFCE" } }, font: { color: { rgb: "006100" } } }, sqref: "J5:J1000" },
        { type: "expression", formula: `SEARCH("OVERDUE", J5)`, style: { fill: { fgColor: { rgb: "FFC7CE" } }, font: { color: { rgb: "9C0006" } } }, sqref: "J5:J1000" },
        { type: "expression", formula: `SEARCH("AWAITING MGR", J5)`, style: { fill: { fgColor: { rgb: "FFEB9C" } }, font: { color: { rgb: "9C6500" } } }, sqref: "J5:J1000" }
    ];
    utils.book_append_sheet(wb, mWs, "TASK_REGISTER");

    // --- 05. SOP LIBRARY ---
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

    // MOBILE ERGONOMICS: Set SOP row heights to 45pt for deep reading
    if(!sWs['!rows']) sWs['!rows'] = [];
    for(let i=4; i<sData.length; i++) {
        sWs['!rows'][i] = { hpt: 45 };
    }

    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 06. INCIDENT LOG ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Incident Description", s: headerStyle }, { v: "Severity", s: headerStyle }, 
        { v: "Reported By", s: headerStyle }, { v: "Action Taken", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<15; i++) {
        iData.push([null, null, null, null, null, null, "OPEN"]);
    }
    const iWs = utils.aoa_to_sheet(iData);
    addSovereignRibbon(iWs, "Liability & Incident Ledger", 'G');
    addLiabilityFooter(iWs, iData.length, 'G');
    (iWs as any)['!dataValidation'] = [
        { sqref: "D5:D500", type: "list", formula1: "SYSTEM_CONFIG!$C$2:$C$5" },
        { sqref: "G5:G500", type: "list", formula1: "SYSTEM_CONFIG!$D$2:$D$4" }
    ];
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- SECONDARY INFRASTRUCTURE ---
    const bridgeSheets = [
        { n: "SHIFT_HANDOVER", t: "Shift Handover Protocol", c: 'F' },
        { n: "BUSINESS_HEALTH", t: "Executive Vitals & Analytics", c: 'E' },
        { n: "FINANCIAL_SHIELD", t: "Revenue & Margin Integrity", c: 'G' },
        { n: "SYSTEM_GUIDE", t: "Deployment & Command Manual", c: 'B' }
    ];
    bridgeSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[],[]]);
        addSovereignRibbon(ws, s.t, s.c);
        addLiabilityFooter(ws, 10, s.c);
        utils.book_append_sheet(wb, ws, s.n);
    });

    // Hide SYSTEM_CONFIG Sheet
    if (!wb.Workbook) wb.Workbook = { Sheets: [] };
    const configIdx = wb.SheetNames.indexOf("SYSTEM_CONFIG");
    wb.Workbook.Sheets[configIdx] = { Hidden: 1 };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_MoreMeets_Sovereign.xlsx`);
}
