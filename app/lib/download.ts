
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * ============================================================================
 * GOOGLE SHEETS COMPATIBILITY CHECKLIST (MAINTENANCE MANDATE)
 * ============================================================================
 * 1. NAVIGATION: Use HYPERLINK formulas only. Native link objects break in Sheets.
 * 2. FORMULAS: Wrap VLOOKUP/INDEX in IFERROR and use absolute references ($A$1).
 * 3. ZERO-GHOSTING: Use IF(LEN(TRIM(X))=0, "", X) to prevent "0" in empty lookups.
 * 4. FILTERS: Row 4 must be unmerged to allow native mobile filtering identification.
 * 5. RENDERING: No massive dark fills. White body = 100% visibility & low lag.
 * 6. ROW HEIGHTS: 35pt for data, 55pt for headers. Ensures tap-accuracy on mobile.
 * 7. COLUMN WIDTHS: 75 units for Protocol, 65 for Action. No clipping allowed.
 * ============================================================================
 */

export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    const ORDER_ID = "MM-SOVEREIGN-15.4-STABLE";

    // --- INSTITUTIONAL COLOR PALETTE ---
    const COLORS = {
        NAVY_HUD: "020617",       // Deep Command Blue
        PRIMARY_GREEN: "22C55E",  // Standard Status Green
        STATUS_AMBER: "F5A623",   // Warning Level
        STATUS_RED: "E11D48",     // Risk Level
        WHITE_BODY: "FFFFFF",     // High-Contrast Surface
        BORDER_SOFT: "E2E8F0",    // Standard Grid Border
        INPUT_YELLOW: "FEFCE8",   // Pale Yellow Affordance
        HEADER_SLATE: "0F172A",   // Standard Data Header
        TILE_BG: "111827",        // Console Card Background
        METADATA_GREY: "64748B",  // Secondary Info
        COACHING_GREEN: "065F46", // Instructional Text
        CONSEQUENCE_RED: "991B1B"  // Risk Narrative Text
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
        font: { ...baseFont, sz: 8, italic: false, color: { rgb: COLORS.METADATA_GREY } },
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    // --- HELPER: SYSTEM RIBBON (HUD) ---
    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'M') => {
        const ribbonData = [
            [{ t: 'f', f: `HYPERLINK("#'HOME_CONSOLE'!A1", "◀ BACK TO CONSOLE")`, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: { ...navStyle, font: { ...navStyle.font, sz: 18, color: { rgb: "FFFFFF" } } } }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        const titleRange = utils.decode_range(`A2:${endCol}2`);
        
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: titleRange.e.c } }); 

        // STABILITY: Row 4 is explicitly unmerged for native filtering identification
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 4, xSplit: 5 }];
        
        if(!ws['!rows']) ws['!rows'] = [];
        ws['!rows'][0] = { hpt: 30 };
        ws['!rows'][1] = { hpt: 50 };
        ws['!rows'][2] = { hpt: 20 };
        ws['!rows'][3] = { hpt: 45 }; // Data Header Row
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

    // --- 01. HOME CONSOLE (COMMAND CENTER) ---
    const homeWsData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { alignment: { horizontal: 'center' }, font: { sz: 20, bold: true } } }],
        [{ v: `OPERATIONAL DATA ENGINE v15.4 | SOVEREIGN STABLE BUILD`, s: { alignment: { horizontal: 'center' }, font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }],
        [{ v: `SECURITY AUTH: ${ORDER_ID}`, s: { alignment: { horizontal: 'center' }, font: { sz: 8, color: { rgb: COLORS.METADATA_GREY } } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }, null,
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }, null,
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.HEADER_SLATE } } } }
        ],
        [
            { t: 'f', f: `HYPERLINK("#'BRANCH_MASTER'!A1", "▶ BRANCH SETUP")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'DAILY_LOG'!A1", "▶ TODAY'S TASKS")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'BUSINESS_HEALTH'!A1", "▶ BUSINESS HEALTH")`, s: tileStyle }
        ],
        [
            { t: 'f', f: `HYPERLINK("#'TEAM_HUB'!A1", "▶ TEAM HUB")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'SHIFT_HANDOVER'!A1", "▶ SHIFT HANDOVER")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'FINANCIAL_SHIELD'!A1", "▶ FINANCIAL SHIELD")`, s: tileStyle }
        ],
        [
            { t: 'f', f: `HYPERLINK("#'SOP_LIBRARY'!A1", "▶ MASTER SOPs")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'SYSTEM_GUIDE'!A1", "▶ SYSTEM GUIDE")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'INCIDENT_LOG'!A1", "▶ INCIDENT LOG")`, s: tileStyle }
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
    const roles = Array.from(new Set(packChecklists.map(c => c.role)));
    const pData: any[][] = [[], [], [], tHeaders];
    [1, 2].forEach(bId => {
        roles.forEach(role => {
            const rowIdx = pData.length + 1;
            const branchRef = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`;
            pData.push([
                { t: 'f', f: `IF(LEN(${branchRef})>0, ${branchRef} & "|" & B${rowIdx}, "")`, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { t: 'f', f: branchRef, s: dataStyleCenter },
                { v: "", s: inputStyle },
                { v: "ACTIVE", s: inputStyle }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 25, 35, 15].map((w, i) => ({ wch: w, hidden: i === 0 }));
    addSovereignRibbon(pWs, "Responsibility & Team Hub", 'E');
    addLiabilityFooter(pWs, pData.length, 'E');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 04. DAILY LOG (TODAYS_TASKS) ---
    const lHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, 
        { v: "Technical Protocol (Audit Standard)", s: headerStyle }, 
        { v: "Action (Floor Instruction)", s: headerStyle }, 
        { v: "Done By (Staff Initials)", s: headerStyle }, { v: "Verified By (Mgr)", s: headerStyle },
        { v: "Status", s: headerStyle }, { v: "Consequence of Failure", s: { ...headerStyle, fill: { patternType: 'solid', fgColor: { rgb: "450a0a" } } } }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    [1, 2].forEach(bId => {
        packChecklists.forEach(c => {
            c.tasks.forEach(t => {
                const rIdx = mData.length + 1;
                const branchRef = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`;
                const keyRef = `B${rIdx} & "|" & C${rIdx}`;
                
                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: branchRef, s: dataStyleCenter },
                    { v: c.role, s: dataStyleLeft },
                    { t: 'f', f: `IFERROR(VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$D$500, 4, FALSE), "UNASSIGNED")`, s: dataStyleLeft },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, border: t.priority === 'High' ? { ...borderStyle, left: { style: 'thick', color: { rgb: COLORS.STATUS_RED } } } : borderStyle } },
                    { v: t.floorAction || t.trainerNotes || "", s: instructionStyle },
                    { v: "", s: inputStyle },
                    { v: t.priority === 'High' ? "" : "N/A", s: inputStyle },
                    { t: 'f', f: `IF(LEN(TRIM(H${rIdx}))>0, "VERIFIED", "PENDING")`, s: { ...dataStyleCenter, font: { bold: true } } },
                    { v: t.consequence || "Operational Risk Applied.", s: riskStyle }
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    // ZERO-CLIPPING MANDATE: Wide columns for complex text
    mWs['!cols'] = [12, 20, 20, 22, 10, 75, 65, 18, 18, 15, 45].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Operational Logbook", 'K');
    mWs['!autofilter'] = { ref: `A4:K${mData.length}` };
    addLiabilityFooter(mWs, mData.length, 'K');
    utils.book_append_sheet(wb, mWs, "DAILY_LOG");

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
    // Hard-set row height to 45pt to ensure text wrapping is visible on mobile
    sWs['!rows'] = sData.map((_, i) => ({ hpt: i < 4 ? 50 : 45 }));
    addSovereignRibbon(sWs, "Master SOP Database", 'E');
    addLiabilityFooter(sWs, sData.length, 'E');
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 06. INCIDENT TRACKER ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Severity", s: headerStyle }, { v: "Description", s: headerStyle },
        { v: "Root Cause", s: headerStyle }, { v: "Corrective Action", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<10; i++) {
        iData.push([
            { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "P1 - HIGH", s: inputStyle },
            { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "", s: inputStyle }
        ]);
    }
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 25, 15, 55, 40, 55].map(w => ({ wch: w }));
    addSovereignRibbon(iWs, "Liability & Incident Ledger", 'F');
    addLiabilityFooter(iWs, iData.length, 'F');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07-10. SECONDARY INFRASTRUCTURE (Stubs) ---
    const bridgeSheets = [
        { n: "SHIFT_HANDOVER", t: "Shift Handover Protocol", c: 'F' },
        { n: "BUSINESS_HEALTH", t: "Executive Vitals & Analytics", c: 'E' },
        { n: "FINANCIAL_SHIELD", t: "Revenue & Margin Integrity", c: 'G' },
        { n: "SYSTEM_GUIDE", t: "System Command Manual", c: 'D' }
    ];
    bridgeSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[],[]]);
        addSovereignRibbon(ws, s.t, s.c);
        addLiabilityFooter(ws, 10, s.c);
        utils.book_append_sheet(wb, ws, s.n);
    });

    // FINAL SHIP
    writeFile(wb, `${item.title.replace(/ /g, '_')}_MoreMeets_Sovereign.xlsx`);
}
