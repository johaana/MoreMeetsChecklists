
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v4.5 - FINAL HARDENED BUILD
 * UI: Symmetric Zero-Clipping Midnight Navy Console.
 * FORMULA: Robust INDEX/MATCH/COUNTIF frequency logic for Top Performer/Branch.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-MASTER-SOVEREIGN-4.5";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "FACC15",   
        RISK_RED: "E11D48",      
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
        INACTIVE_GREY: "F1F5F9",
        GHOST_GREY: "F9FAFB",
        BADGE_GREEN: "065F46",
        BADGE_AMBER: "D97706",
        BADGE_BLUE: "1E40AF",
        INK_DARK: "1E293B",
        SOFT_RED: "FEF2F2",
        SOFT_GREEN: "ECFDF5"
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };
    const monoFont = { name: 'Consolas', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.TILE_BG } },
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
        fill: { fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } } }
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

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
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
        font: { ...baseFont, color: { rgb: COLORS.INK_DARK }, bold: true },
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const warningStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "991B1B" }, italic: true },
        fill: { fgColor: { rgb: COLORS.SOFT_RED } }
    };

    const coachingStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "065F46" }, italic: true },
        fill: { fgColor: { rgb: COLORS.SOFT_GREEN } }
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

    // --- HARDENED SOVEREIGN FORMULAS v4.5 ---
    const starFormula = `IFERROR(INDEX('TODAYS_TASKS'!$G$5:$G$2000,MATCH(MAX(INDEX(COUNTIF('TODAYS_TASKS'!$G$5:$G$2000,'TODAYS_TASKS'!$G$5:$G$2000),0)),INDEX(COUNTIF('TODAYS_TASKS'!$G$5:$G$2000,'TODAYS_TASKS'!$G$5:$G$2000),0),0)),"---")`;
    const branchFormula = `IFERROR(INDEX('TODAYS_TASKS'!$B$5:$B$2000,MATCH(MAX(INDEX(COUNTIF('TODAYS_TASKS'!$B$5:$B$2000,'TODAYS_TASKS'!$B$5:$B$2000),0)),INDEX(COUNTIF('TODAYS_TASKS'!$B$5:$B$2000,'TODAYS_TASKS'!$B$5:$B$2000),0),0)),"---")`;
    const progressFormula = `IFERROR(COUNTIF('TODAYS_TASKS'!$I$5:$I$2000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$F$5:$F$2000, "<>N/A*", 'TODAYS_TASKS'!$F$5:$F$2000, "<>", 'TODAYS_TASKS'!$F$5:$F$2000, "<>Mission Requirement*")), 0)`;
    const taskVolumeFormula = `COUNTIFS('TODAYS_TASKS'!$G$5:$G$2000, "?*")`;

    const headerBaseStyle = { fill: { fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', vertical: 'center' } };

    const homeData: any[][] = [
        [], [],
        [null, { v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { ...headerBaseStyle, font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } } } }],
        [null, { v: `Institutional Operating System v4.5 | Sovereign Master`, s: { ...headerBaseStyle, font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `Authenticated Deployment: ${BUYER_EMAIL}`, s: { ...headerBaseStyle, font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [
            null,
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { fgColor: { rgb: COLORS.NAVY_DEEP } }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }
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
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }, null
        ],
        [],
        [null, { t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(G15>=0.9, "HOT - PERFECT EXECUTION!", IF(G15>=0.6, "STABLE - PUSH HARDER", IF(G15>0, "COLD - TURN UP THE HEAT!", "SYSTEM INITIALIZED"))), "EMPIRE MOOD: LOADING...")`, s: { font: { sz: 16, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center' } } }, null, null, null, null, null],
        [
            null,
            { v: "🏅 TEAM GLORY", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null, 
            { v: "⚡ MOMENTUM", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null,
            { v: "🛡️ COMMAND VITALS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null
        ],
        [
            null,
            { v: "TODAY'S STAR:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: starFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.BADGE_GREEN } } } },
            { v: "TOP BRANCH:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: branchFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.BADGE_AMBER } } } },
            { v: "TASKS LOGGED:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: taskVolumeFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.BADGE_BLUE } } } }
        ],
        [
            null,
            { v: "EMPIRE STATUS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.CHAMBER_BG } } } },
            { v: "ACTIVE UNITS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: `COUNTIF('BRANCH_MASTER'!$B$6:$B$15, "<>")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.CHAMBER_BG } } } },
            { v: "SHIFT PROGRESS:", s: { font: { bold: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } },
            { t: 'f', f: progressFormula, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.BADGE_BLUE } }, numFmt: '0%' } }
        ],
        [null, { v: "▶ VIEW REAL-TIME BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN }, underline: true }, fill: { fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center', vertical: 'center' }, border: borderStyle } }, null, null, null, null, null],
        [],
        [null, { v: "USER GUIDE: Use filters in 'Today's Tasks' to see YOUR branch, YOUR role, and YOUR name. Sign off in the yellow cells.", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
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
                homeWs[cell] = { v: "", s: { fill: { fgColor: { rgb: COLORS.NAVY_DEEP } } } };
            } else {
                if (!homeWs[cell].s) homeWs[cell].s = {};
                if (!homeWs[cell].s.fill) homeWs[cell].s.fill = { fgColor: { rgb: COLORS.NAVY_DEEP } };
            }
        }
    }
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Edit Here)", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle }))
    ];
    const branchSetupData = [
        [], [], [],
        facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Bandra Main (Sample)", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle }))],
        [{ v: "2", s: dataStyleCenter }, { v: "Colaba West (Sample)", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle }))],
        [{ v: "3", s: dataStyleCenter }, { v: "Andheri East (Sample)", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle }))],
        [{ v: "4", s: dataStyleCenter }, { v: "", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle }))],
        [{ v: "5", s: dataStyleCenter }, { v: "", s: inputStyle }, ...packChecklists.map(() => ({ v: "YES", s: inputStyle }))]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 15)].map(w => ({ wch: w }));
    addSovereignRibbon(setupWs, "Branch Master Setup", utils.encode_col(facilityHeaders.length - 1));
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

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
    
    let logicalIdx = 0;
    [1, 2, 3, 4, 5].forEach(bCode => {
        packChecklists.forEach((c) => {
            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const statusFormula = `IF(LEN(TRIM(G${rowIdx}))=0, "PENDING", IF(AND(LEN(TRIM(H${rowIdx}))=0, H${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                const personFormula = `IFERROR(VLOOKUP(B${rowIdx} & "|" & C${rowIdx}, 'TEAM_HUB'!A:D, 3, FALSE), "[UNASSIGNED]")`;
                
                const baseStyle = logicalIdx % 2 === 0 ? dataStyleCenter : { ...dataStyleCenter, fill: { fgColor: { rgb: COLORS.GHOST_GREY } } };
                const baseStyleLeft = logicalIdx % 2 === 0 ? dataStyleLeft : { ...dataStyleLeft, fill: { fgColor: { rgb: COLORS.GHOST_GREY } } };
                const zebraInput = logicalIdx % 2 === 0 ? inputStyle : { ...inputStyle, fill: { fgColor: { rgb: "F0F9FF" } } };

                mData.push([
                    { v: startDate, t: 'd', s: { ...baseStyle, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}), "Branch ${bCode}")`, s: baseStyle },
                    { v: c.role, s: baseStyle },
                    { t: 'f', f: personFormula, s: baseStyle },
                    { v: t.id, s: baseStyle },
                    { v: t.description, s: baseStyleLeft },
                    { v: logicalIdx < 2 ? "IK" : "", s: zebraInput }, 
                    { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? { ...zebraInput, fill: { fgColor: COLORS.MGR_TARGET }, font: { ...baseFont, bold: true, color: { rgb: COLORS.INK_DARK } } } : baseStyle },
                    { t: 'f', f: statusFormula, s: { ...baseStyle, font: { bold: true, color: { rgb: COLORS.BADGE_GREEN } } } },
                    { v: c.frequency, s: baseStyle },
                    { v: t.priority, s: baseStyle },
                    { v: t.consequence, s: warningStyle },
                    { v: t.trainerNotes || "-", s: coachingStyle }
                ]);
                logicalIdx++;
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 25, 30, 10, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Mission Execution Ledger", 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    const dashData = [
        [], [], [],
        [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }],
        [{ v: "Group Shift Progress", s: dataStyleLeft }, { t:'f', f: progressFormula, s: { ...dataStyleCenter, font: { ...monoFont, bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_LOG'!$G$5:$G$1000, "OPEN")=0, "NONE", COUNTIF('INCIDENT_LOG'!$G$5:$G$1000, "OPEN"))`, s: { ...dataStyleCenter, font: monoFont } }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addSovereignRibbon(dWs, "Group Performance Hub", 'C');
    utils.book_append_sheet(wb, dWs, "BUSINESS_HEALTH");

    const pHeaders = [{v:"Staff Lookup Key", s:headerStyle}, {v:"Branch Name", s:headerStyle}, {v:"Staff Full Name", s:headerStyle}, {v:"Role Assigned", s:headerStyle}, {v:"Contact", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData: any[][] = [[], [], [], pHeaders];
    const allRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    
    [1, 2, 3, 4, 5].forEach(bId => {
        allRoles.forEach((role, rIdx) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx} & "|" & D${rowIdx}`, s: dataStyleCenter },
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: (bId === 1 && rIdx === 0) ? "Imran Khan (Sample)" : "[Type Staff Name]", s: inputStyle }, 
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyle }, 
                { v: "ACTIVE", s: dataStyleCenter }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [25, 25, 35, 30, 20, 25].map(w => ({ wch: w }));
    addSovereignRibbon(pWs, "Team & Role Assignments", 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    const simpleSheets = [
        { n: "ROI_ENGINE", n_full: "ROI & Risk Mitigation Engine" },
        { n: "INCIDENT_LOG", n_full: "Liability & Incident Log" },
        { n: "SHIFT_HANDOVER", n_full: "Shift Handover Bridge" },
        { n: "SOP_LIBRARY", n_full: "Institutional SOP Database" },
        { n: "HOW_THIS_WORKS", n_full: "System Command Manual" }
    ];

    simpleSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[],[]]);
        addSovereignRibbon(ws, s.n_full, 'K');
        utils.book_append_sheet(wb, ws, s.n);
    });

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_4.5.xlsx`);
}
