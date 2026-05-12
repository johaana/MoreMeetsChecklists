
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v15.2 - INSTITUTIONAL DATA INTEGRITY
 * Stage 2 Patch: Formula Hardening & Blank-Sheet Prevention
 * Preserves 100% of operational data, language, and workflows.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    const ORDER_ID = "MM-SOVEREIGN-15.2-STABLE";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_AMBER: "F5A623",   
        VITAL_BLUE_DARK: "1E40AF", 
        PROGRESS_BLUE_LIGHT: "3B82F6", 
        MAROON_RISK: "450a0a",    
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER_SOFT: "334155",
        INPUT_ZONE: "FEFCE8",
        CONSOLE_BG: "0A0F19",
        CHAMBER_BG: "111827",
        MGR_TARGET: "FDE68A", 
        SOFT_RED: "FEF2F2",
        SOFT_GREEN: "ECFDF5",
        RISK_RED: "E11D48",
        LINK_BLUE: "0000FF"
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
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const labelStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 8 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'right', ...verticalCenter }
    };

    const pulseAmberStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.ACCENT_AMBER } }, 
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    const vitalsBlueDarkStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE_DARK } }, 
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    const progressBlueLightStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.PROGRESS_BLUE_LIGHT } }, 
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } },
        alignment: { horizontal: 'center', ...verticalCenter },
        border: { 
            left: { style: 'thick', color: { rgb: COLORS.PRIMARY_GREEN } },
            top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
    };

    const ribbonHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 24 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } } }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { horizontal: 'center', wrapText: true, ...verticalCenter },
        border: borderStyle
    };

    const consequenceHeaderStyle = {
        ...headerStyle,
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.MAROON_RISK } }
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
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const inputStyleLeft = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "000000" }, bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const coachingStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "065F46" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_GREEN } },
        alignment: { ...verticalCenter, wrapText: true }
    };

    const warningStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "991B1B" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_RED } },
        alignment: { ...verticalCenter, wrapText: true }
    };

    const footerStyle = {
        font: { ...baseFont, sz: 8, italic: true, color: { rgb: COLORS.INTEL_GREY } },
        alignment: { horizontal: 'center', ...verticalCenter }
    };

    /**
     * SOVEREIGN MIGRATION LAYER: HYPERLINK FORMULAS
     * Replaces Excel native links with Sheets-safe formulas.
     */
    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'M') => {
        const ribbonData = [
            [{ t: 'f', f: `HYPERLINK("#'HOME_CONSOLE'!A1", "◀ BACK TO CONSOLE")`, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: ribbonHeaderStyle }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        const titleRange = utils.decode_range(`A2:${endCol}2`);
        
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: titleRange.e.c } }); 

        for(let c = 0; c <= range.e.c; c++) {
            const cell1 = utils.encode_cell({r: 0, c});
            const cell2 = utils.encode_cell({r: 1, c});
            if(!ws[cell1]) ws[cell1] = { v: "", s: navStyle };
            if(!ws[cell2]) ws[cell2] = { v: "", s: ribbonHeaderStyle };
        }
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 2 }];
        
        if(!ws['!rows']) ws['!rows'] = [];
        ws['!rows'][0] = { hpt: 40 };
        ws['!rows'][1] = { hpt: 100 };
        ws['!rows'][2] = { hpt: 40 };
        ws['!rows'][3] = { hpt: 55 }; 
        
        for(let r = 4; r < 5000; r++) {
            if(!ws['!rows'][r]) ws['!rows'][r] = { hpt: 35 };
        }
    };

    const addLiabilityFooter = (ws: WorkSheet, lastRow: number, endCol: string = 'M') => {
        const rowIdx = lastRow + 2;
        const footerText = "For support, contact more@moremeets.com | MoreMeets assumes no liability for post-download structural alterations or misuse. © 2025 MoreMeets.";
        const cell = utils.encode_cell({r: rowIdx, c: 0});
        
        utils.sheet_add_aoa(ws, [[{ v: footerText, s: footerStyle }]], { origin: cell });
        
        if (!ws['!merges']) ws['!merges'] = [];
        const endC = utils.decode_col(endCol);
        ws['!merges'].push({ s: { r: rowIdx, c: 0 }, e: { r: rowIdx, c: endC } });
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

    const scoreColLetter = utils.encode_col(2 + packChecklists.length);

    // --- 01. HOME CONSOLE ---
    const homeWsData: any[][] = [
        [], [],
        [null, { v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } } } }],
        [null, { v: `Institutional Operating System v15.2 | Sovereign Master`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `SECURE AUTHENTICATION: ${ORDER_ID}`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { sz: 8, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [
            null,
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }
        ],
        [
            null,
            { t: 'f', f: `HYPERLINK("#'BRANCH_MASTER'!A1", "▶ BRANCH SETUP")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'TODAYS_TASKS'!A1", "▶ TODAY'S TASKS")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'BUSINESS_HEALTH'!A1", "▶ BUSINESS HEALTH")`, s: tileStyle }
        ],
        [
            null,
            { t: 'f', f: `HYPERLINK("#'TEAM_HUB'!A1", "▶ TEAM HUB")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'SHIFT_HANDOVER'!A1", "▶ SHIFT HANDOVER")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'FINANCIAL_SHIELD'!A1", "▶ FINANCIAL SHIELD")`, s: tileStyle }
        ],
        [
            null,
            { t: 'f', f: `HYPERLINK("#'SOP_LIBRARY'!A1", "▶ MASTER SOPs")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'SYSTEM_GUIDE'!A1", "▶ SYSTEM GUIDE")`, s: tileStyle }, null, 
            { t: 'f', f: `HYPERLINK("#'INCIDENT_TRACKER'!A1", "▶ INCIDENT LOG")`, s: tileStyle }
        ],
        [],
        [null, { t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(G15>=0.9, "HOT - PERFECT EXECUTION!", IF(G15>=0.75, "WARM - MINOR GAPS DETECTED", IF(G15>=0.6, "STABLE - PUSH HARDER", IF(G15>0, "COLD - TURN UP THE HEAT!", "AWAITING DATA")))), "EMPIRE MOOD: LOADING...")`, s: { font: { sz: 16, bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null, null, null, null, null],
        [
            null,
            { v: "MOMENTUM", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null, 
            { v: "COMMAND VITALS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null,
            { v: "RISK ALERT", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null
        ],
        [
            null,
            { v: "TOP BRANCH:", s: labelStyle },
            { t: 'f', f: `IF(MAX('BRANCH_MASTER'!$${scoreColLetter}$5:$${scoreColLetter}$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$${scoreColLetter}$5:$${scoreColLetter}$15), 'BRANCH_MASTER'!$${scoreColLetter}$5:$${scoreColLetter}$15, 0)), "AWAITING DATA")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', ...verticalCenter } } },
            { v: "TASKS LOGGED:", s: labelStyle },
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$J$5:$J$5000, "COMPLETED")`, s: vitalsBlueDarkStyle },
            { v: "RISK STATUS:", s: labelStyle },
            { t: 'f', f: `IF(COUNTIFS('INCIDENT_TRACKER'!$G$5:$G$500, "<>YES", 'INCIDENT_TRACKER'!$D$5:$D$500, "?*")>0, "RISK DETECTED", "ALL CLEAR")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.RISK_RED } }, alignment: { horizontal: 'center', ...verticalCenter } } }
        ],
        [
            null,
            { v: "OPERATIONAL PULSE:", s: labelStyle },
            { t: 'f', f: `IF(COUNTIFS('TEAM_HUB'!$D$5:$D$500, "?*")=0, "AWAITING DATA", TEXT(COUNTIFS('TEAM_HUB'!$G$5:$G$500, ">0") / MAX(1, COUNTIFS('TEAM_HUB'!$D$5:$D$500, "?*")), "0%") & " PULSE")`, s: pulseAmberStyle }, 
            { v: "SHIFT PROGRESS:", s: labelStyle },
            { t: 'f', f: `IFERROR(COUNTIF('TODAYS_TASKS'!$J$5:$J$5000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$F$5:$F$5000, "?*")), 0)`, s: { ...progressBlueLightStyle, numFmt: '0%' } },
            { v: "UNIT LOAD:", s: labelStyle },
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$L$5:$L$5000, "High", 'TODAYS_TASKS'!$J$5:$J$5000, "<>COMPLETED")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.CHAMBER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }
        ],
        []
    ];

    const homeWs = utils.aoa_to_sheet(homeWsData);
    homeWs['!cols'] = [5, 22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!rows'] = [];
    for(let r = 0; r < 35; r++) homeWs['!rows'][r] = { hpt: 30 };
    homeWs['!rows'][2] = { hpt: 60 };

    for (let R = 0; R < 35; R++) {
        for (let C = 0; C < 10; C++) {
            const cell = utils.encode_cell({ r: R, c: C });
            if (!homeWs[cell]) homeWs[cell] = { v: "", s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter } } };
        }
    }

    homeWs['!merges'] = [
        { s: { r: 2, c: 1 }, e: { r: 2, c: 6 } }, { s: { r: 3, c: 1 }, e: { r: 3, c: 6 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 6 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 2 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 4 } }, { s: { r: 6, c: 5 }, e: { r: 6, c: 6 } },
        { s: { r: 7, c: 1 }, e: { r: 7, c: 2 } }, { s: { r: 7, c: 3 }, e: { r: 7, c: 4 } }, { s: { r: 7, c: 5 }, e: { r: 7, c: 6 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 2 } }, { s: { r: 8, c: 3 }, e: { r: 8, c: 4 } }, { s: { r: 8, c: 5 }, e: { r: 8, c: 6 } },
        { s: { r: 9, c: 1 }, e: { r: 9, c: 2 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 4 } }, { s: { r: 9, c: 5 }, e: { r: 9, c: 6 } },
        { s: { r: 11, c: 1 }, e: { r: 11, c: 6 } },
        { s: { r: 12, c: 1 }, e: { r: 12, c: 2 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 4 } }, { s: { r: 12, c: 5 }, e: { r: 12, c: 6 } },
        { s: { r: 15, c: 1 }, e: { r: 15, c: 6 } }
    ];
    
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. BRANCH MASTER ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Edit Here)", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle })),
        { v: "Score (Ghost)", s: headerStyle }, { v: "Risk Load (Ghost)", s: headerStyle } 
    ];
    const branchNames = ["Unit 1 (Primary)", "Unit 2 (Growth)"];
    const branchSetupData = [
        [], [], [],
        facilityHeaders,
        ...branchNames.map((name, i) => [
            { v: (i + 1).toString(), s: dataStyleCenter },
            { v: name, s: inputStyleLeft },
            ...packChecklists.map(() => ({ v: "YES", s: inputStyle })),
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$J$5:$J$5000, "COMPLETED", 'TODAYS_TASKS'!$B$5:$B$5000, B${5+i})`, s: dataStyleCenter },
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$5000, B${5+i}, 'TODAYS_TASKS'!$L$5:$L$5000, "High", 'TODAYS_TASKS'!$J$5:$J$5000, "<>COMPLETED")`, s: dataStyleCenter }
        ])
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    const setupCols = [10, 30, ...packChecklists.map(() => 20), 0, 0];
    setupWs['!cols'] = setupCols.map(w => ({ wch: w, hidden: w === 0 }));
    addSovereignRibbon(setupWs, "Branch Master Setup");
    addLiabilityFooter(setupWs, branchSetupData.length);
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

    // --- 03. TEAM HUB ---
    const activeRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    const pHeaders = [
        { v: "Staff Lookup Key (Ghost)", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, 
        { v: "Assigned To (Staff Name)", s: headerStyle }, 
        { v: "Contact", s: headerStyle }, 
        { v: "Duty Status (ACTIVE / LEAVE / OFF)", s: headerStyle },
        { v: "Score (Ghost)", s: headerStyle } 
    ];
    const pData: any[][] = [[], [], [], pHeaders];
    
    [1, 2].forEach(bId => {
        activeRoles.forEach((role) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx} & "|" & C${rowIdx}`, s: dataStyleLeft }, 
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyleLeft }, 
                { v: "", s: inputStyleLeft }, 
                { v: "ACTIVE", s: inputStyleLeft }, 
                { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$H$5:$H$500, D${rowIdx}, 'TODAYS_TASKS'!$J$5:$J$500, "COMPLETED")`, s: dataStyleCenter }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 20, 25, 30, 18, 30, 0].map((w, i) => ({ wch: w, hidden: w === 0 }));
    addSovereignRibbon(pWs, "Responsibility & Resource Mapping");
    addLiabilityFooter(pWs, pData.length);
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 04. MISSION LEDGER (TODAYS_TASKS) ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, 
        { v: "Technical Protocol (Audit)", s: headerStyle }, 
        { v: "Action", s: headerStyle }, 
        { v: "Done By (Full Name)", s: headerStyle }, { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Freq", s: headerStyle }, { v: "Risk", s: headerStyle },
        { v: "Consequence of Failure", s: consequenceHeaderStyle } 
    ];
    const mData: any[][] = [[], [], [], mHeaders];
    
    const frequencies = ["Daily", "Weekly", "Monthly"];
    
    [1, 2].forEach(bCode => {
        frequencies.forEach(freq => {
            packChecklists.filter(c => c.frequency === freq).forEach((c) => {
                c.tasks.forEach(t => {
                    const rowIdx = mData.length + 1;
                    const temporalCheck = freq === "Weekly" 
                        ? `IF(WEEKDAY(TODAY(), 2)<>1, "OFF CYCLE", "PENDING")`
                        : freq === "Monthly"
                        ? `IF(DAY(TODAY())<>1, "OFF CYCLE", "PENDING")`
                        : `"PENDING"`;

                    const statusFormula = `IF(LEN(TRIM(H${rowIdx}))=0, ${temporalCheck}, IF(AND(LEN(TRIM(I${rowIdx}))=0, I${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                    
                    const keyRef = `B${rowIdx} & "|" & C${rowIdx}`;
                    // ABSOLUTE RANGE HARDENING FOR SHEETS
                    const personFormula = `IF(COUNTIFS('TEAM_HUB'!$A$5:$A$500, ${keyRef}, 'TEAM_HUB'!$D$5:$D$500, "?*")=0, HYPERLINK("#'TEAM_HUB'!A1", "ASSIGN IN TEAM HUB"), VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$D$500, 4, FALSE) & IF(VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$F$500, 6, FALSE)<>"ACTIVE", " [" & VLOOKUP(${keyRef}, 'TEAM_HUB'!$A$5:$F$500, 6, FALSE) & "]", ""))`;
                    
                    const technicalVal = t.technicalProtocol || t.description || "";
                    const actionVal = t.floorAction || "";

                    mData.push([
                        { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}), "")`, s: dataStyleCenter },
                        { v: c.role, s: dataStyleLeft },
                        { t: 'f', f: personFormula, s: dataStyleLeft },
                        { v: t.id, s: dataStyleCenter },
                        { v: technicalVal, s: dataStyleLeft },
                        { v: actionVal, s: coachingStyle },
                        { v: "", s: inputStyleLeft }, 
                        { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? inputStyleLeft : dataStyleLeft },
                        { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } },
                        { v: c.frequency, s: dataStyleCenter },
                        { v: t.priority, s: dataStyleCenter },
                        { v: t.consequence, s: warningStyle }
                    ]);
                });
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [12, 20, 20, 22, 10, 40, 50, 18, 18, 15, 10, 10, 40].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Daily Task Register");
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    addLiabilityFooter(mWs, mData.length);
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 05. SHIFT HANDOVER ---
    const handoverHeaders = [{ v: "Branch", s: headerStyle }, { v: "Departing Manager", s: headerStyle }, { v: "Arriving Manager", s: headerStyle }, { v: "Critical Issues Carried Over", s: headerStyle }, { v: "Safety/EHS Clear?", s: headerStyle }, { v: "Handover Timestamp", s: headerStyle }];
    const handoverRows = [];
    for(let i=0; i<5; i++) {
        handoverRows.push([
            { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, 1), "")`, s: inputStyleLeft },
            { v: "", s: inputStyleLeft }, { v: "", s: inputStyleLeft }, { v: "", s: inputStyleLeft }, { v: "YES", s: inputStyleLeft }, { v: "", s: inputStyleLeft }
        ]);
    }
    const handoverWs = utils.aoa_to_sheet([[], [], [], handoverHeaders, ...handoverRows]);
    handoverWs['!cols'] = [20, 25, 25, 55, 15, 22].map(w => ({ wch: w }));
    addSovereignRibbon(handoverWs, "Shift Handover Bridge");
    addLiabilityFooter(handoverWs, handoverRows.length + 4, 'F');
    utils.book_append_sheet(wb, handoverWs, "SHIFT_HANDOVER");

    // --- 06. INCIDENT TRACKER ---
    const incidentHeaders = [
        { v: "Date", s: headerStyle }, 
        { v: "Branch", s: headerStyle }, 
        { v: "Type (Safety/Profit/PR)", s: headerStyle }, 
        { v: "Incident Description", s: headerStyle }, 
        { v: "Root Cause", s: headerStyle }, 
        { v: "Corrective Action", s: headerStyle }, 
        { v: "Resolved? (YES/NO)", s: headerStyle }
    ];
    const incidentRows = [];
    for (let i = 0; i < 10; i++) {
        incidentRows.push([
            { v: "", s: inputStyleLeft },
            { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, 1), "")`, s: inputStyleLeft },
            { v: "", s: inputStyleLeft },
            { v: "", s: inputStyleLeft },
            { v: "", s: inputStyleLeft },
            { v: "", s: inputStyleLeft },
            { v: "NO", s: inputStyleLeft }
        ]);
    }
    const incidentWs = utils.aoa_to_sheet([[], [], [], incidentHeaders, ...incidentRows]);
    addSovereignRibbon(incidentWs, "Liability & Incident Log");
    incidentWs['!cols'] = [12, 20, 20, 55, 40, 55, 12].map(w => ({ wch: w }));
    addLiabilityFooter(incidentWs, incidentRows.length + 4, 'G');
    utils.book_append_sheet(wb, incidentWs, "INCIDENT_TRACKER");

    // --- 07. BUSINESS HEALTH ---
    const healthHeaders = [
        { v: "Health Metric", s: headerStyle }, 
        { v: "Branch", s: headerStyle }, 
        { v: "Live Status", s: headerStyle }, 
        { v: "Value", s: headerStyle }, 
        { v: "Alert Level", s: headerStyle }
    ];
    const healthData: any[][] = [[], [], [], healthHeaders];
    [1, 2].forEach(bId => {
        const branchRef = `INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId})`;
        healthData.push([
            { v: "Task Execution Velocity", s: dataStyleLeft }, { t: 'f', f: branchRef, s: dataStyleCenter }, { v: "MONITORING", s: dataStyleCenter }, { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$5000, ${branchRef}, 'TODAYS_TASKS'!$J$5:$J$5000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$B$5:$B$5000, ${branchRef}, 'TODAYS_TASKS'!$F$5:$F$5000, "?*"))`, s: { ...dataStyleCenter, numFmt: '0%' } }, { v: "NORMAL", s: dataStyleCenter }
        ]);
        healthData.push([
            { v: "Critical Risk Load", s: dataStyleLeft }, { t: 'f', f: branchRef, s: dataStyleCenter }, { v: "MONITORING", s: dataStyleCenter }, { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$5000, ${branchRef}, 'TODAYS_TASKS'!$L$5:$L$5000, "High", 'TODAYS_TASKS'!$J$5:$J$5000, "<>COMPLETED")`, s: dataStyleCenter }, { v: "CHECK PENDING", s: dataStyleCenter }
        ]);
        healthData.push([
            { v: "Workforce Availability", s: dataStyleLeft }, { t: 'f', f: branchRef, s: dataStyleCenter }, { v: "LIVE PULSE", s: dataStyleCenter }, { t: 'f', f: `COUNTIFS('TEAM_HUB'!$B$5:$B$500, ${branchRef}, 'TEAM_HUB'!$F$5:$F$500, "ACTIVE")`, s: dataStyleCenter }, { v: "STABLE", s: dataStyleCenter }
        ]);
        healthData.push([]); 
    });
    const healthWs = utils.aoa_to_sheet(healthData);
    addSovereignRibbon(healthWs, "Performance Analytics & Unit Health");
    healthWs['!cols'] = [30, 20, 18, 18, 22].map(w => ({ wch: w }));
    addLiabilityFooter(healthWs, healthData.length, 'E');
    utils.book_append_sheet(wb, healthWs, "BUSINESS_HEALTH");

    // --- 08. SOP LIBRARY (FULL DATABASE) ---
    const sopHeaders = [
        { v: "Module", s: headerStyle }, 
        { v: "Protocol ID", s: headerStyle }, 
        { v: "Technical Protocol", s: headerStyle }, 
        { v: "Action", s: headerStyle }, 
        { v: "Consequence of Failure", s: consequenceHeaderStyle } 
    ];
    const sopData: any[][] = [[], [], [], sopHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            const technicalVal = t.technicalProtocol || t.description || "";
            const actionVal = t.floorAction || "";
            sopData.push([
                { v: c.title, s: dataStyleLeft },
                { v: t.id, s: dataStyleCenter },
                { v: technicalVal, s: dataStyleLeft },
                { v: actionVal, s: coachingStyle },
                { v: t.consequence || "Operational Risk Applied.", s: warningStyle }
            ]);
        });
    });
    const sopWs = utils.aoa_to_sheet(sopData);
    sopWs['!cols'] = [20, 12, 45, 55, 55].map(w => ({ wch: w }));
    addSovereignRibbon(sopWs, "Master SOP Database");
    addLiabilityFooter(sopWs, sopData.length, 'E');
    utils.book_append_sheet(wb, sopWs, "SOP_LIBRARY");

    // --- 09. FINANCIAL SHIELD ---
    const fsHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Gross Sales", s: headerStyle }, { v: "Raw Material Cost (CoGS)", s: headerStyle },
        { v: "Labor Cost (%)", s: headerStyle }, { v: "Waste Cost (Logged)", s: headerStyle },
        { v: "Unit Contribution (GP)", s: headerStyle }, { v: "Margin %", s: headerStyle }
    ];
    const fsData: any[][] = [[], [], [], fsHeaders];
    [1, 2].forEach(bId => {
        for(let i=0; i<10; i++) {
            const rowIdx = fsData.length + 1;
            const contribFormula = `C${rowIdx}-D${rowIdx}-(C${rowIdx}*E${rowIdx})-F${rowIdx}`;
            const marginFormula = `IFERROR(G${rowIdx}/C${rowIdx}, 0)`;
            fsData.push([
                { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: 0, s: inputStyleLeft }, { v: 0, s: inputStyleLeft }, { v: 0.25, s: { ...inputStyleLeft, numFmt: '0%' } }, { v: 0, s: inputStyleLeft },
                { t: 'f', f: contribFormula, s: { ...dataStyleCenter, font: { bold: true } } },
                { t: 'f', f: marginFormula, s: { ...dataStyleCenter, numFmt: '0.0%' } }
            ]);
        }
    });
    const fsWs = utils.aoa_to_sheet(fsData);
    addSovereignRibbon(fsWs, "Financial Shield & Unit Contribution");
    fsWs['!cols'] = [12, 20, 18, 22, 12, 18, 22, 12].map(w => ({ wch: w }));
    addLiabilityFooter(fsWs, fsData.length, 'H');
    utils.book_append_sheet(wb, fsWs, "FINANCIAL_SHIELD");

    // --- 10. SYSTEM GUIDE ---
    const guideData: any[][] = [
        [], [], 
        [], 
        [null, { v: "SYSTEM MANUAL: HOW TO DEPLOY YOUR OPERATIONAL INFRASTRUCTURE", s: { font: { sz: 12, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [],
        [null, { v: "5-STEP DEPLOYMENT ROADMAP", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: "STEP 1: CLOUD SYNC", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Upload this .xlsx to Google Drive and 'Open with Google Sheets'. Share the live link with Managers.", s: dataStyleLeft }],
        [null, { v: "STEP 2: REGISTER BRANCHES", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Go to 'BRANCH_MASTER'. Enter names in 'Branch Name' column. Everything updates automatically.", s: dataStyleLeft }],
        [null, { v: "STEP 3: MAP THE TEAM", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Go to 'TEAM_HUB'. Assign real names to roles. The 'Assigned To' column in the Register will update instantly.", s: dataStyleLeft }],
        [null, { v: "STEP 4: COMMAND DAILY", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Staff members type their name in 'Done By' in 'TODAYS_TASKS'. Status turns GREEN instantly.", s: dataStyleLeft }],
        [null, { v: "STEP 5: SYSTEM LOCKDOWN", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "To prevent accidental edits: Highlight reporting columns (e.g. 'Done By'), right-click > Format Cells > Protection > Uncheck 'Locked'. Then go to Review > Protect Sheet.", s: dataStyleLeft }],
        [],
        [null, { v: "GLOSSARY OF TERMINOLOGY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: "EMPIRE MOOD", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "The overall health score of your group based on total mission completion.", s: dataStyleLeft }],
        [null, { v: "OPERATIONAL PULSE", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Shows if your team is 'awake' and reporting. Based on % of staff logging activity.", s: dataStyleLeft }],
        [null, { v: "UNIT LOAD", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "The number of pending 'High Priority' missions. A high load means dangerous unmitigated risk.", s: dataStyleLeft }],
        [null, { v: "RISK STATUS", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Displays 'RISK DETECTED' if there are unresolved entries in the Incident Tracker.", s: dataStyleLeft }],
        [null, { v: "TECHNICAL PROTOCOL", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "The formal audit-standard description of the task for inspectors.", s: dataStyleLeft }],
        [null, { v: "ACTION", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "Simplified, action-oriented instructions for the staff member on the floor.", s: dataStyleLeft }],
        [null, { v: "CONSEQUENCE", s: { font: { bold: true }, alignment: { horizontal: 'right' } } }, { v: "The specific risk the business faces (safety or profit) if this step is missed.", s: dataStyleLeft }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    addSovereignRibbon(guideWs, "System Command Manual", 'K');
    guideWs['!cols'] = [5, 35, 100].map(w => ({ wch: w }));
    
    for(let r = 6; r < guideData.length; r++) {
        const cellLabel = utils.encode_cell({r, c: 1});
        const cellText = utils.encode_cell({r, c: 2});
        if(guideWs[cellLabel]) guideWs[cellLabel].s = { ...dataStyleCenter, font: { bold: true }, alignment: { horizontal: 'right', ...verticalCenter } };
        if(guideWs[cellText]) guideWs[cellText].s = { ...dataStyleLeft, alignment: { horizontal: 'left', wrapText: true, ...verticalCenter } };
    }
    addLiabilityFooter(guideWs, guideData.length, 'K');

    utils.book_append_sheet(wb, guideWs, "SYSTEM_GUIDE");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_MoreMeets_Sovereign.xlsx`);
}
