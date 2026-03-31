
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v6.3 - FORENSIC INTELLIGENCE BUILD
 * Focus: Drill-down Clarity, ROI Header Hardening, Row-Height Precision.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-MASTER-SOVEREIGN-6.3";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_AMBER: "D97706",   
        VITAL_BLUE: "1E40AF",      
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
        RISK_RED: "E11D48"
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };
    const monoFont = { name: 'Consolas', sz: 10 };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const labelStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 8 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'right', vertical: 'center' }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            left: { style: 'thick', color: { rgb: COLORS.PRIMARY_GREEN } },
            top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
    };

    const ribbonHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 14 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } } }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
        border: borderStyle
    };

    const dataStyleLeft = { 
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderStyle
    };

    const dataStyleCenter = {
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'center' },
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

    const warningStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "991B1B" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_RED } }
    };

    const coachingStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "065F46" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_GREEN } }
    };

    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'K', customTitleHpt: number = 35) => {
        const ribbonData = [
            [{ v: "◀ BACK TO CONSOLE", l: { Target: "#'HOME_CONSOLE'!A1" }, s: navStyle }],
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
        ws['!rows'] = [{ hpt: 25 }, { hpt: customTitleHpt }];
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
            summary: item.shortDescription,
            icon: item.icon
        }];
    }

    // --- HARDENED LOGIC v6.3 ---
    const opPulseFormula = `IFERROR(TEXT(COUNTIFS('TEAM_HUB'!$G$5:$G$100, ">0") / MAX(1, COUNTIFS('TEAM_HUB'!$D$5:$D$100, "?*")), "0%") & " (" & COUNTIFS('TEAM_HUB'!$G$5:$G$100, ">0") & "/" & COUNTIFS('TEAM_HUB'!$D$5:$D$100, "?*") & ")", "0% (0/0)")`;
    const topStarFormula = `IF(MAX('TEAM_HUB'!$G$5:$G$100)>0, INDEX('TEAM_HUB'!$D$5:$D$100, MATCH(MAX('TEAM_HUB'!$G$5:$G$100), 'TEAM_HUB'!$G$5:$G$100, 0)), "NO SIGNAL")`;
    const topBranchFormula = `IF(MAX('BRANCH_MASTER'!$K$5:$K$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$K$5:$K$15), 'BRANCH_MASTER'!$K$5:$K$15, 0)), "SYSTEM IDLE")`;
    const criticalWatchFormula = `IF(MAX('BRANCH_MASTER'!$L$5:$L$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$L$5:$L$15), 'BRANCH_MASTER'!$L$5:$L$15, 0)), "ALL SECURE")`;
    const tasksLoggedFormula = `COUNTIFS('TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED")`;
    const progressFormula = `IFERROR(COUNTIF('TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$F$5:$F$2000, "?*")), 0)`;

    // --- HOME CONSOLE ---
    const homeData: any[][] = [
        [], [],
        [null, { v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', vertical: 'center' }, font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } } } }],
        [null, { v: `Institutional Operating System v6.3 | Sovereign Master Build`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', vertical: 'center' }, font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `Authenticated Deployment: ${BUYER_EMAIL}`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center' }, font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [
            null,
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }
        ],
        [
            null,
            { v: "▶ BRANCH SETUP", l: { Target: "#'BRANCH_MASTER'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [
            null,
            { v: "▶ TEAM HUB", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [
            null,
            { v: "▶ MASTER SOPs", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ HOW THIS WORKS", l: { Target: "#'HOW_THIS_WORKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: tileStyle }, null
        ],
        [],
        [null, { t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(G15>=0.9, "HOT - PERFECT EXECUTION!", IF(G15>=0.6, "STABLE - PUSH HARDER", IF(G15>0, "COLD - TURN UP THE HEAT!", "SYSTEM INITIALIZED"))), "EMPIRE MOOD: LOADING...")`, s: { font: { sz: 16, bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center' } } }, null, null, null, null, null],
        [
            null,
            { v: "🏆 TEAM GLORY", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null, 
            { v: "⚡ MOMENTUM", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null,
            { v: "🛡️ COMMAND VITALS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null
        ],
        [
            null,
            { v: "TODAY'S STAR:", s: labelStyle },
            { t: 'f', f: topStarFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } },
            { v: "TOP BRANCH:", s: labelStyle },
            { t: 'f', f: topBranchFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.ACCENT_AMBER } }, alignment: { horizontal: 'center' } } },
            { v: "TASKS LOGGED:", s: labelStyle },
            { t: 'f', f: tasksLoggedFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, alignment: { horizontal: 'center' } } }
        ],
        [
            null,
            { v: "OPERATIONAL PULSE:", s: labelStyle },
            { t: 'f', f: opPulseFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.CHAMBER_BG } }, alignment: { horizontal: 'center' } } },
            { v: "🚨 CRITICAL WATCH:", s: labelStyle },
            { t: 'f', f: criticalWatchFormula, l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9, underline: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.RISK_RED } }, alignment: { horizontal: 'center' } } },
            { v: "SHIFT PROGRESS:", s: labelStyle },
            { t: 'f', f: progressFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, numFmt: '0%', alignment: { horizontal: 'center' } } }
        ],
        [null, { v: "▶ VIEW REAL-TIME BRANCH INTELLIGENCE & RISK ANALYTICS", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN }, underline: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center', vertical: 'center' }, border: borderStyle } }, null, null, null, null, null],
        [],
        [null, { v: "USER GUIDE: Enter your FULL NAME in 'Done By' to trigger your contribution pulse.", s: { ...labelStyle, alignment: { horizontal: 'center' }, font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `LICENSED TO: ${BUYER_EMAIL} | SECURE AUTHENTICATION: ${ORDER_ID}`, s: { ...labelStyle, alignment: { horizontal: 'center' }, font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [5, 22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    
    // ZERO-PATCH CANVAS - Force Navy Fill Everywhere
    for (let R = 0; R < 35; R++) {
        for (let C = 0; C < 10; C++) {
            const cell = utils.encode_cell({ r: R, c: C });
            if (!homeWs[cell]) homeWs[cell] = { v: "", s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } } } };
            else if (!homeWs[cell].s.fill) homeWs[cell].s.fill = { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } };
        }
    }

    homeWs['!merges'] = [
        { s: { r: 2, c: 1 }, e: { r: 2, c: 6 } }, { s: { r: 3, c: 1 }, e: { r: 3, c: 6 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 6 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 2 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 4 } }, { s: { r: 6, c: 5 }, e: { r: 6, c: 6 } },
        { s: { r: 11, c: 1 }, e: { r: 11, c: 6 } },
        { s: { r: 12, c: 1 }, e: { r: 12, c: 2 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 4 } }, { s: { r: 12, c: 5 }, e: { r: 12, c: 6 } },
        { s: { r: 15, c: 1 }, e: { r: 15, c: 6 } },
        { s: { r: 17, c: 1 }, e: { r: 17, c: 6 } }, { s: { r: 18, c: 1 }, e: { r: 18, c: 6 } }
    ];
    homeWs['!rows'] = Array(35).fill({ hpt: 22 });
    homeWs['!rows'][2] = { hpt: 45 }; 
    homeWs['!rows'][3] = { hpt: 25 }; 
    
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- BRANCH MASTER ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Edit Here)", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle })),
        { v: "Score (Ghost)", s: headerStyle }, { v: "Risk Load (Ghost)", s: headerStyle } 
    ];
    const branchSetupData = [
        [], [], [],
        facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B5, 'TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED")` }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B5, 'TODAYS_TASKS'!$K$5:$K$2000, "High", 'TODAYS_TASKS'!$I$5:$I$2000, "<>COMPLETED")` }],
        [{ v: "2", s: dataStyleCenter }, { v: "Colaba West", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B6, 'TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED")` }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B6, 'TODAYS_TASKS'!$K$5:$K$2000, "High", 'TODAYS_TASKS'!$I$5:$I$2000, "<>COMPLETED")` }],
        [{ v: "3", s: dataStyleCenter }, { v: "Andheri East", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B7, 'TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED")` }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$2000, B7, 'TODAYS_TASKS'!$K$5:$K$2000, "High", 'TODAYS_TASKS'!$I$5:$I$2000, "<>COMPLETED")` }]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 20), 0, 0].map((w, i) => ({ wch: w, hidden: w === 0 }));
    addSovereignRibbon(setupWs, "Branch Master Setup", utils.encode_col(facilityHeaders.length - 1), 25);
    setupWs['!rows'][3] = { hpt: 45 }; // Specific height for Branch Master Headers
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

    // --- MISSION LEDGER ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Responsible Role", s: headerStyle }, { v: "Assigned Person (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, { v: "Requirement / Control Step", s: headerStyle }, 
        { v: "Done By (Full Name)", s: headerStyle }, { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Freq", s: headerStyle }, { v: "Risk", s: headerStyle },
        { v: "Consequence", s: headerStyle }, { v: "Notes", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], mHeaders];
    
    [1, 2, 3].forEach(bCode => {
        packChecklists.forEach((c) => {
            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const statusFormula = `IF(LEN(TRIM(G${rowIdx}))=0, "PENDING", IF(AND(LEN(TRIM(H${rowIdx}))=0, H${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                const personFormula = `IFERROR(VLOOKUP(B${rowIdx} & "|" & C${rowIdx}, 'TEAM_HUB'!A:D, 4, FALSE), "[UNASSIGNED]")`;
                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}), "")`, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { t: 'f', f: personFormula, s: dataStyleCenter },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.description, s: dataStyleLeft },
                    { v: "", s: inputStyle }, 
                    { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? inputStyle : dataStyleCenter },
                    { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } },
                    { v: c.frequency, s: dataStyleCenter },
                    { v: t.priority, s: dataStyleCenter },
                    { v: t.consequence, s: warningStyle },
                    { v: t.trainerNotes || "-", s: coachingStyle }
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 25, 30, 12, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Mission Execution Ledger", 'M');
    mWs['!rows'] = Array(mData.length).fill({ hpt: 22 });
    mWs['!rows'][3] = { hpt: 35 }; 
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- TEAM HUB ---
    const pHeaders = [
        { v: "Staff Lookup Key (Ghost)", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, 
        { v: "Role Assigned", s: headerStyle }, 
        { v: "Staff Full Name (Input)", s: headerStyle }, 
        { v: "Contact", s: headerStyle }, 
        { v: "Status", s: headerStyle },
        { v: "Score (Ghost)", s: headerStyle } 
    ];
    const pData: any[][] = [[], [], [], pHeaders];
    const allRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    
    [1, 2, 3].forEach(bId => {
        allRoles.forEach((role) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx} & "|" & C${rowIdx}`, s: dataStyleLeft }, 
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "[Type Name]", s: inputStyleLeft }, 
                { v: "", s: inputStyleLeft }, 
                { v: "ACTIVE", s: dataStyleCenter },
                { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$G$5:$G$2000, D${rowIdx}, 'TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED")` }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 30, 35, 20, 25, 0].map((w, i) => ({ wch: w, hidden: w === 0 }));
    addSovereignRibbon(pWs, "Team & Role Assignments", 'F');
    pWs['!rows'] = Array(pData.length).fill({ hpt: 22 });
    pWs['!rows'][3] = { hpt: 35 };
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- INCIDENT TRACKER ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Severity", s: headerStyle }, { v: "Incident Detail", s: headerStyle },
        { v: "Action Taken", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<15; i++) iData.push([{ v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "LOW", s: inputStyle }, { v: "", s: inputStyleLeft }, { v: "", s: inputStyleLeft }, { v: "OPEN", s: inputStyle }]);
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 25, 15, 65, 65, 15].map(w => ({ wch: w }));
    addSovereignRibbon(iWs, "Liability & Incident Log", 'F');
    iWs['!rows'] = Array(iData.length).fill({ hpt: 22 });
    utils.book_append_sheet(wb, iWs, "INCIDENT_TRACKER");

    // --- SOP LIBRARY ---
    const sopHeaders = [
        { v: "Module Title", s: headerStyle }, { v: "Dept", s: headerStyle },
        { v: "Frequency", s: headerStyle }, { v: "Primary Role", s: headerStyle },
        { v: "Task ID", s: headerStyle }, { v: "Requirement", s: headerStyle },
        { v: "Consequence", s: headerStyle }, { v: "Coaching Notes", s: headerStyle }
    ];
    const sopData: any[][] = [[], [], [], sopHeaders];
    packChecklists.forEach(c => c.tasks.forEach(t => sopData.push([{ v: c.title, s: dataStyleLeft }, { v: c.department, s: dataStyleCenter }, { v: c.frequency, s: dataStyleCenter }, { v: c.role, s: dataStyleCenter }, { v: t.id, s: dataStyleCenter }, { v: t.description, s: dataStyleLeft }, { v: t.consequence, s: warningStyle }, { v: t.trainerNotes || "-", s: coachingStyle }])));
    const sopWs = utils.aoa_to_sheet(sopData);
    sopWs['!cols'] = [30, 15, 15, 20, 12, 65, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(sopWs, "Institutional SOP Database", 'H');
    sopWs['!rows'] = Array(sopData.length).fill({ hpt: 22 });
    utils.book_append_sheet(wb, sopWs, "SOP_LIBRARY");

    // --- BUSINESS HEALTH ---
    const bhHeaders = [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Risk Alert", s: headerStyle }];
    const criticalDetailFormula = `IF(MAX('BRANCH_MASTER'!$L$5:$L$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$L$5:$L$15), 'BRANCH_MASTER'!$L$5:$L$15, 0)) & " • " & MAX('BRANCH_MASTER'!$L$5:$L$15) & " HIGH-RISK PENDING", "ALL SYSTEMS SECURE")`;
    const bhData = [
        [], [], [], 
        bhHeaders, 
        [{ v: "Group Progress", s: dataStyleLeft }, { t:'f', f: progressFormula, s: { ...dataStyleCenter, numFmt: '0%', font: { bold: true } } }, { v: "95% MIN" }], 
        [{ v: "🚨 CRITICAL WATCH", s: { ...dataStyleLeft, font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }, { t:'f', f: criticalDetailFormula, s: { ...dataStyleCenter, font: { bold: true }, color: { rgb: COLORS.RISK_RED } } }, { v: "ZERO TOLERANCE" }]
    ];
    const bhWs = utils.aoa_to_sheet(bhData);
    addSovereignRibbon(bhWs, "Performance Analytics", 'C');
    bhWs['!cols'] = [40, 45, 45].map(w => ({ wch: w }));
    bhWs['!rows'] = Array(15).fill({ hpt: 25 });
    utils.book_append_sheet(wb, bhWs, "BUSINESS_HEALTH");

    // --- ROI ENGINE ---
    const roiHeaders = [{ v: "Liability Category", s: headerStyle }, { v: "Shield Value", s: headerStyle }, { v: "Status", s: headerStyle }];
    const roiData = [
        [], [], [], 
        roiHeaders, 
        [{ v: "Safety & Compliance Shield", s: dataStyleLeft }, { v: "₹45,000", s: dataStyleCenter }, { v: "SHIELDED", s: coachingStyle }],
        [{ v: "Stock Loss Prevention", s: dataStyleLeft }, { v: "₹12,000", s: dataStyleCenter }, { v: "SECURE", s: coachingStyle }],
        [{ v: "Operational Efficiency Gain", s: dataStyleLeft }, { v: "₹8,500", s: dataStyleCenter }, { v: "ACTIVE", s: coachingStyle }]
    ];
    const roiWs = utils.aoa_to_sheet(roiData);
    addSovereignRibbon(roiWs, "ROI & Risk Shield Engine", 'C');
    roiWs['!cols'] = [40, 25, 45].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, roiWs, "ROI_ENGINE");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_6.3.xlsx`);
}
