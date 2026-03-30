
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v5.8 - MASTER ACCESS EDITION
 * Focus: Exact Visual Parity, Zero-Patch UI, Volume-based Leaderboard.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-MASTER-SOVEREIGN-5.8";

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
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT }, patternType: 'solid' },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT }, patternType: 'solid' },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT }, patternType: 'solid' },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT }, patternType: 'solid' }
    };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
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

    const managerInputStyle = {
        ...inputStyle,
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.MGR_TARGET } }
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

    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'K') => {
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

    // --- LEADERBOARD & ADOPTION LOGIC ---
    const rosterPulseFormula = `IFERROR(COUNTIFS('TEAM_HUB'!$G$5:$G$100, ">0") / MAX(1, COUNTIFS('TEAM_HUB'!$C$5:$C$100, "?*")), 0)`;
    const topUnitFormula = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$K$5:$K$15), 'BRANCH_MASTER'!$K$5:$K$15, 0)), "SYSTEM IDLE")`;
    const taskVolumeFormula = `COUNTIFS('TODAYS_TASKS'!$G$5:$G$2000, "?*")`;
    const progressFormula = `IFERROR(COUNTIF('TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$F$5:$F$2000, "?*")), 0)`;
    const criticalWatchFormula = `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$L$5:$L$15), 'BRANCH_MASTER'!$L$5:$L$15, 0)), "ALL SECURE")`;

    const headerBaseStyle = { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', vertical: 'center' } };

    // --- HOME CONSOLE ---
    const homeData: any[][] = [
        [], [],
        [null, { v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { ...headerBaseStyle, font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } } } }],
        [null, { v: `Institutional Operating System v5.8 | Sovereign Master`, s: { ...headerBaseStyle, font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `Authenticated Deployment: ${BUYER_EMAIL}`, s: { ...headerBaseStyle, font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } } } }],
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
            { v: "👥 ADOPTION", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null, 
            { v: "⚡ MOMENTUM", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null,
            { v: "🛡️ COMMAND VITALS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null
        ],
        [
            null,
            { v: "ROSTER PULSE:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: rosterPulseFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } }, numFmt: '0%', alignment: { horizontal: 'center' } } },
            { v: "TOP UNIT:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: topUnitFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.ACCENT_AMBER } }, alignment: { horizontal: 'center' } } },
            { v: "TASKS LOGGED:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: taskVolumeFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, alignment: { horizontal: 'center' } } }
        ],
        [
            null,
            { v: "EMPIRE STATUS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.CHAMBER_BG } }, alignment: { horizontal: 'center' } } },
            { v: "ACTIVE UNITS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: `COUNTIF('BRANCH_MASTER'!$B$6:$B$15, "?*")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.CHAMBER_BG } }, alignment: { horizontal: 'center' } } },
            { v: "SHIFT PROGRESS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: progressFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, numFmt: '0%', alignment: { horizontal: 'center' } } }
        ],
        [null, { v: "▶ VIEW REAL-TIME BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN }, underline: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center', vertical: 'center' }, border: borderStyle } }, null, null, null, null, null],
        [],
        [null, { v: "USER GUIDE: Use filters in 'Today's Tasks' to see YOUR branch, YOUR role, and YOUR name.", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [null, { v: `LICENSED TO: ${BUYER_EMAIL} | VALIDATED DEPLOYMENT: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [5, 22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 1 }, e: { r: 2, c: 6 } }, { s: { r: 3, c: 1 }, e: { r: 3, c: 6 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 6 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 2 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 4 } }, { s: { r: 6, c: 5 }, e: { r: 6, c: 6 } },
        { s: { r: 11, c: 1 }, e: { r: 11, c: 6 } },
        { s: { r: 12, c: 1 }, e: { r: 12, c: 2 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 4 } }, { s: { r: 12, c: 5 }, e: { r: 12, c: 6 } },
        { s: { r: 15, c: 1 }, e: { r: 15, c: 6 } },
        { s: { r: 17, c: 1 }, e: { r: 17, c: 6 } },
        { s: { r: 18, c: 1 }, e: { r: 18, c: 6 } }
    ];
    
    for (let R = 0; R < 50; R++) {
        for (let C = 0; C < 10; C++) {
            const cell = utils.encode_cell({ r: R, c: C });
            if (!homeWs[cell]) {
                homeWs[cell] = { v: "", s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } } } };
            }
        }
    }
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- BRANCH MASTER ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Edit Here)", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle })),
        { v: "Score", s: headerStyle }, { v: "Risk Load", s: headerStyle } 
    ];
    const branchSetupData = [
        [], [], [],
        facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIF('TODAYS_TASKS'!$B:$B, B5)`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B:$B, B5, 'TODAYS_TASKS'!$K:$K, "High", 'TODAYS_TASKS'!$I:$I, "<>COMPLETED")`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }],
        [{ v: "2", s: dataStyleCenter }, { v: "Colaba West", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIF('TODAYS_TASKS'!$B:$B, B6)`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B:$B, B6, 'TODAYS_TASKS'!$K:$K, "High", 'TODAYS_TASKS'!$I:$I, "<>COMPLETED")`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }],
        [{ v: "3", s: dataStyleCenter }, { v: "Andheri East", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIF('TODAYS_TASKS'!$B:$B, B7)`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B:$B, B7, 'TODAYS_TASKS'!$K:$K, "High", 'TODAYS_TASKS'!$I:$I, "<>COMPLETED")`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }],
        [{ v: "4", s: dataStyleCenter }, { v: "", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIF('TODAYS_TASKS'!$B:$B, B8)`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B:$B, B8, 'TODAYS_TASKS'!$K:$K, "High", 'TODAYS_TASKS'!$I:$I, "<>COMPLETED")`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }],
        [{ v: "5", s: dataStyleCenter }, { v: "", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle })), { t:'f', f: `COUNTIF('TODAYS_TASKS'!$B:$B, B9)`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }, { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$B:$B, B9, 'TODAYS_TASKS'!$K:$K, "High", 'TODAYS_TASKS'!$I:$I, "<>COMPLETED")`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 15), 10, 10].map(w => ({ wch: w }));
    addSovereignRibbon(setupWs, "Branch Master Setup", utils.encode_col(facilityHeaders.length - 1));
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

    // --- MISSION LEDGER ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Responsible Role", s: headerStyle }, { v: "Assigned Person (Auto)", s: headerStyle },
        { v: "ID", s: headerStyle }, { v: "Requirement / Control Step", s: headerStyle }, 
        { v: "Done By (Initials)", s: headerStyle }, { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Freq", s: headerStyle }, { v: "Risk", s: headerStyle },
        { v: "Consequence", s: headerStyle }, { v: "Notes", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], mHeaders];
    
    [1, 2, 3, 4, 5].forEach(bCode => {
        packChecklists.forEach((c) => {
            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const statusFormula = `IF(LEN(TRIM(G${rowIdx}))=0, "PENDING", IF(AND(LEN(TRIM(H${rowIdx}))=0, H${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                const personFormula = `IFERROR(VLOOKUP(B${rowIdx} & "|" & C${rowIdx}, 'TEAM_HUB'!A:D, 3, FALSE), "[UNASSIGNED]")`;
                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}), "")`, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { t: 'f', f: personFormula, s: dataStyleCenter },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.description, s: dataStyleLeft },
                    { v: "", s: inputStyle }, 
                    { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? managerInputStyle : dataStyleCenter },
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
    mWs['!cols'] = [15, 25, 25, 30, 10, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Mission Execution Ledger", 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- TEAM HUB ---
    const pHeaders = [
        { v: "Staff Lookup Key", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, 
        { v: "Staff Full Name", s: headerStyle }, 
        { v: "Role Assigned", s: headerStyle }, 
        { v: "Contact", s: headerStyle }, 
        { v: "Status", s: headerStyle },
        { v: "Score", s: headerStyle } 
    ];
    const pData: any[][] = [[], [], [], pHeaders];
    const allRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    
    [1, 2, 3, 4, 5].forEach(bId => {
        allRoles.forEach((role, rIdx) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx} & "|" & D${rowIdx}`, s: dataStyleLeft }, 
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: (bId === 1 && rIdx === 0) ? "Staff Member" : "[Type Name]", s: inputStyleLeft }, 
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyleLeft }, 
                { v: "ACTIVE", s: dataStyleCenter },
                { t:'f', f: `COUNTIF('TODAYS_TASKS'!$G:$G, C${rowIdx})`, s: { font: { color: { rgb: COLORS.NAVY_DEEP } } } }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [25, 25, 35, 30, 20, 25, 10].map(w => ({ wch: w }));
    addSovereignRibbon(pWs, "Team & Role Assignments", 'G');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- INCIDENT TRACKER ---
    const iHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Severity", s: headerStyle }, { v: "Incident / Deviation Detail", s: headerStyle },
        { v: "Mitigation / Action Taken", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<15; i++) {
        iData.push([
            { v: "", s: inputStyle }, { v: "", s: inputStyle },
            { v: "LOW", s: inputStyle }, { v: "", s: inputStyleLeft },
            { v: "", s: inputStyleLeft }, { v: "OPEN", s: inputStyle }
        ]);
    }
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 25, 15, 65, 65, 15].map(w => ({ wch: w }));
    addSovereignRibbon(iWs, "Liability & Incident Log", 'F');
    utils.book_append_sheet(wb, iWs, "INCIDENT_TRACKER");

    // --- ROI ENGINE ---
    const rHeaders = [
        { v: "Risk Category", s: headerStyle }, { v: "Event Prevented", s: headerStyle },
        { v: "Est. Potential Loss (₹)", s: headerStyle }, { v: "Days Since Last Event", s: headerStyle },
        { v: "Total Liability Shielded (₹)", s: headerStyle }
    ];
    const rData: any[][] = [
        [], [], [], rHeaders,
        [{v: "Food Safety", s: dataStyleLeft}, {v: "Avoided Mass Poisoning / Recall", s: dataStyleLeft}, {v: 500000, s: inputStyle}, {v: 120, s: inputStyle}, {t:'f', f: "C5*D5", s: dataStyleCenter}],
        [{v: "Asset Security", s: dataStyleLeft}, {v: "Prevented Internal Stock Theft", s: dataStyleLeft}, {v: 25000, s: inputStyle}, {v: 45, s: inputStyle}, {t:'f', f: "C6*D6", s: dataStyleCenter}]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [25, 45, 25, 25, 30].map(w => ({ wch: w }));
    addSovereignRibbon(rWs, "Risk Mitigation & ROI Engine", 'E');
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- SHIFT HANDOVER ---
    const hHeaders = [
        { v: "Date", s: headerStyle }, { v: "Outgoing Mgr", s: headerStyle }, 
        { v: "Incoming Mgr", s: headerStyle }, { v: "Critical Tasks / Pending Actions", s: headerStyle },
        { v: "Maintenance & Staffing Notes", s: headerStyle }, { v: "Status", s: headerStyle }
    ];
    const hData: any[][] = [[], [], [], hHeaders];
    for(let i=0; i<15; i++) {
        hData.push([
            { v: "", s: inputStyle }, { v: "", s: inputStyle },
            { v: "", s: inputStyle }, { v: "", s: inputStyleLeft },
            { v: "", s: inputStyleLeft }, { v: "PENDING", s: inputStyle }
        ]);
    }
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 20, 20, 65, 65, 15].map(w => ({ wch: w }));
    addSovereignRibbon(hWs, "Shift Handover Bridge", 'F');
    utils.book_append_sheet(wb, hWs, "SHIFT_HANDOVER");

    // --- SOP LIBRARY ---
    const sopHeaders = [
        { v: "Module Title", s: headerStyle },
        { v: "Dept", s: headerStyle },
        { v: "Frequency", s: headerStyle },
        { v: "Primary Role", s: headerStyle },
        { v: "Task ID", s: headerStyle },
        { v: "Requirement / Control Step", s: headerStyle },
        { v: "Consequence of Failure", s: headerStyle },
        { v: "Trainer Coaching Notes", s: headerStyle }
    ];
    const sopData: any[][] = [[], [], [], sopHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sopData.push([
                { v: c.title, s: dataStyleLeft },
                { v: c.department, s: dataStyleCenter },
                { v: c.frequency, s: dataStyleCenter },
                { v: c.role, s: dataStyleCenter },
                { v: t.id, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft },
                { v: t.consequence, s: warningStyle },
                { v: t.trainerNotes || "-", s: coachingStyle }
            ]);
        });
    });
    const sopWs = utils.aoa_to_sheet(sopData);
    sopWs['!cols'] = [30, 15, 15, 20, 10, 65, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(sopWs, "Institutional SOP Database", 'H');
    sopWs['!autofilter'] = { ref: `A4:H${sopData.length}` };
    utils.book_append_sheet(wb, sopWs, "SOP_LIBRARY");

    // --- BUSINESS HEALTH ---
    const bhHeaders = [
        { v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }
    ];
    const bhData = [
        [], [], [],
        bhHeaders,
        [{ v: "Group Shift Progress", s: dataStyleLeft }, { t:'f', f: progressFormula, s: { ...dataStyleCenter, font: { ...monoFont, bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "🚨 CRITICAL WATCH", s: { ...dataStyleLeft, font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }, { t:'f', f: criticalWatchFormula, s: { ...dataStyleCenter, font: { ...monoFont, bold: true, color: { rgb: COLORS.RISK_RED } } } }, { v: "ZERO TOLERANCE", s: dataStyleCenter }],
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_TRACKER'!$F$5:$F$100, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!$F$5:$F$100, "OPEN") & " ACTIVE")`, s: { ...dataStyleCenter, font: { ...monoFont, color: { rgb: COLORS.RISK_RED } } } }, { v: "ZERO TOLERANCE", s: dataStyleCenter }],
        [{ v: "Network Active Units", s: dataStyleLeft }, { t:'f', f: `COUNTIF('BRANCH_MASTER'!$B$6:$B$15, "?*")`, s: dataStyleCenter }, { v: "MAX CAPACITY", s: dataStyleCenter }]
    ];
    const bhWs = utils.aoa_to_sheet(bhData);
    addSovereignRibbon(bhWs, "Group Performance Hub", 'C');
    bhWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, bhWs, "BUSINESS_HEALTH");

    // --- HOW_THIS_WORKS ---
    const hwHeaders = [
        { v: "COMMAND PROTOCOL", s: headerStyle }, { v: "INSTRUCTIONS", s: headerStyle }
    ];
    const hwData = [
        [], [], [],
        hwHeaders,
        [{ v: "STEP 01: SETUP", s: dataStyleCenter }, { v: "Go to 'BRANCH_MASTER' and enter your branch names. Set modules to 'YES' for active areas.", s: dataStyleLeft }],
        [{ v: "STEP 02: TEAM", s: dataStyleCenter }, { v: "Go to 'TEAM_HUB' and enter staff names next to their assigned roles per branch.", s: dataStyleLeft }],
        [{ v: "STEP 03: PULSE", s: dataStyleCenter }, { v: "Staff use 'TODAYS_TASKS'. They filter by their Name/Role and enter initials in 'Done By'.", s: dataStyleLeft }],
        [{ v: "STEP 04: AUDIT", s: dataStyleCenter }, { v: "Managers check the 'TODAYS_TASKS' sheet for 'AWAITING MGR' status and sign off.", s: dataStyleLeft }],
        [{ v: "STEP 05: INTEL", s: dataStyleCenter }, { v: "Owners review 'HOME_CONSOLE' and 'BUSINESS_HEALTH' for real-time empire status.", s: dataStyleLeft }]
    ];
    const hwWs = utils.aoa_to_sheet(hwData);
    addSovereignRibbon(hwWs, "System Command Manual", 'B');
    hwWs['!cols'] = [25, 80].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, hwWs, "HOW_THIS_WORKS");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_5.8.xlsx`);
}
