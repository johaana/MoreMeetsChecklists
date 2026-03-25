'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v4.4 - THE INSTITUTIONAL BEAST
 * Features: Multi-Branch Staff Mapping, Dynamic Star/Branch Tracking, 
 * Forensic ROI Linkage, Symmetric Zero-Clipping UI.
 * 
 * Logic: Hardened Formulas for live dashboard hero metrics.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-MASTER-SOVEREIGN-4.4";

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
        CONSOLE_BG: "F1F5F9",
        CHAMBER_BG: "F8FAFC",
        MGR_YELLOW: "FEF9C3",
        INACTIVE_GREY: "F1F5F9",
        BADGE_MINT: "E8F5E9",
        BADGE_GOLD: "FFF8E1",
        BADGE_BLUE: "E3F2FD",
        TEXT_DARK_GREEN: "1B5E20",
        TEXT_DARK_GOLD: "B26A00",
        TEXT_DARK_BLUE: "0D47A1"
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const boxBorder = { style: 'medium', color: { rgb: COLORS.NAVY_DEEP } };
    const baseFont = { name: 'Segoe UI', sz: 10 };

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

    const groupHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: "000000" }, sz: 12 },
        fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderStyle
    };

    const moodBannerStyle = {
        font: { ...baseFont, bold: true, sz: 16, color: { rgb: "000000" } },
        fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { left: boxBorder, top: boxBorder, right: boxBorder }
    };

    const chamberHeaderStyle = {
        font: { ...baseFont, bold: true, sz: 10, color: { rgb: COLORS.WHITE } },
        fill: { fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderStyle
    };

    const ghostLabelStyle = {
        font: { ...baseFont, bold: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } },
        fill: { fgColor: { rgb: COLORS.CHAMBER_BG } },
        alignment: { horizontal: 'right', vertical: 'center' },
        border: { left: borderStyle.left }
    };

    const badgeValueStyle = (bg: string, text: string) => ({
        font: { ...baseFont, bold: true, sz: 12, color: { rgb: text } },
        fill: { fgColor: { rgb: bg } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { right: borderStyle.right }
    });

    const bigActionButtonStyle = {
        font: { ...baseFont, bold: true, sz: 14, color: { rgb: COLORS.PRIMARY_GREEN }, underline: true },
        fill: { fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { left: boxBorder, bottom: boxBorder, right: boxBorder }
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

    const intelStyle = {
        font: { ...baseFont, color: { rgb: COLORS.INTEL_GREY }, italic: true, sz: 9 },
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderStyle
    };

    const inputStyle = {
        ...dataStyleCenter,
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const ghostInputStyle = {
        ...inputStyle,
        font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED }, italic: true }
    };

    const managerYellowStyle = {
        ...inputStyle,
        fill: { fgColor: { rgb: COLORS.MGR_YELLOW } }
    };

    const naGreyStyle = {
        ...dataStyleCenter,
        fill: { fgColor: { rgb: COLORS.INACTIVE_GREY } },
        font: { ...baseFont, color: { rgb: COLORS.TEXT_MUTED }, italic: true }
    };

    const addAppHeader = (ws: WorkSheet, endCol: string = 'K') => {
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }]], { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 

        for(let c = 0; c <= range.e.c; c++) {
            const cell = utils.encode_cell({r: 0, c});
            if(!ws[cell]) ws[cell] = { v: "", s: navStyle };
            else ws[cell].s = navStyle;
        }
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
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

    // --- 01. HOME CONSOLE ---
    const starFormula = `IFERROR(INDEX('TODAYS_TASKS'!G:G, MATCH(MAX(COUNTIF('TODAYS_TASKS'!G:G, 'TODAYS_TASKS'!G:G)), COUNTIF('TODAYS_TASKS'!G:G, 'TODAYS_TASKS'!G:G), 0)), "[WAITING]")`;
    const branchFormula = `IFERROR(INDEX('TODAYS_TASKS'!B:B, MATCH(MAX(COUNTIF('TODAYS_TASKS'!B:B, 'TODAYS_TASKS'!B:B)), COUNTIF('TODAYS_TASKS'!B:B, 'TODAYS_TASKS'!B:B), 0)), "[CALCULATING]")`;

    const homeData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `Institutional Operating System v4.4 | Sovereign Master`, s: { font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `Authenticated Deployment: ${BUYER_EMAIL}`, s: { font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "#'BRANCH_MASTER'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ TEAM HUB", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ MASTER SOPs", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ HOW THIS WORKS", l: { Target: "#'HOW_THIS_WORKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }, null
        ],
        [],
        [{ t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*"))>=0.9, "🟢 HOT - PERFECT EXECUTION!", IF(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*"))>=0.6, "🟡 STABLE - PUSH HARDER", "🔴 COLD - TURN UP THE HEAT!")), "EMPIRE MOOD: 🧊 LOADING...")`, s: moodBannerStyle }, null, null, null, null, null],
        [
            { v: "🏅 TEAM GLORY", s: chamberHeaderStyle }, null, 
            { v: "⚡ MOMENTUM", s: chamberHeaderStyle }, null,
            { v: "🛡️ COMMAND VITALS", s: chamberHeaderStyle }, null
        ],
        [
            { v: "TODAY'S STAR:", s: ghostLabelStyle },
            { t: 'f', f: starFormula, s: badgeValueStyle(COLORS.BADGE_MINT, COLORS.TEXT_DARK_GREEN) },
            { v: "TOP BRANCH:", s: ghostLabelStyle },
            { t: 'f', f: branchFormula, s: badgeValueStyle(COLORS.BADGE_GOLD, COLORS.TEXT_DARK_GOLD) },
            { v: "OPEN INCIDENTS:", s: ghostLabelStyle },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_LOG'!G:G, "OPEN")=0, "✅ NONE", COUNTIF('INCIDENT_LOG'!G:G, "OPEN"))`, s: badgeValueStyle(COLORS.BADGE_BLUE, COLORS.TEXT_DARK_BLUE) }
        ],
        [
            { v: "EMPIRE STATUS:", s: ghostLabelStyle },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: badgeValueStyle(COLORS.CHAMBER_BG, COLORS.TEXT_DARK_BLUE) },
            { v: "ACTIVE UNITS:", s: ghostLabelStyle },
            { t: 'f', f: `COUNTIF('BRANCH_MASTER'!B6:B15, "<>")`, s: badgeValueStyle(COLORS.CHAMBER_BG, COLORS.NAVY_DEEP) },
            { v: "SHIFT PROGRESS:", s: ghostLabelStyle },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*")), "0%"), "0%")`, s: badgeValueStyle(COLORS.BADGE_BLUE, COLORS.TEXT_DARK_BLUE) }
        ],
        [{ v: "▶ VIEW REAL-TIME BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: bigActionButtonStyle }, null, null, null, null, null],
        [],
        [{ v: "USER GUIDE: Use filters in 'Today's Tasks' to see YOUR branch, YOUR role, and YOUR name.", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'left' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }, { s: { r: 6, c: 4 }, e: { r: 6, c: 5 } },
        { s: { r: 7, c: 0 }, e: { r: 7, c: 1 } }, { s: { r: 7, c: 2 }, e: { r: 7, c: 3 } }, { s: { r: 7, c: 4 }, e: { r: 7, c: 5 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 1 } }, { s: { r: 8, c: 2 }, e: { r: 8, c: 3 } }, { s: { r: 8, c: 4 }, e: { r: 8, c: 5 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 2 }, e: { r: 9, c: 3 } }, { s: { r: 9, c: 4 }, e: { r: 9, c: 5 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 5 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 2 }, e: { r: 12, c: 3 } }, { s: { r: 12, c: 4 }, e: { r: 12, c: 5 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 5 } }
    ];
    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. BRANCH_MASTER ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle }))
    ];
    const branchSetupData = [
        [], [{ v: "BRANCH MASTER SETUP & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [],
        [], facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Bandra West", s: ghostInputStyle }, ...packChecklists.map(() => ({ v: "YES", s: ghostInputStyle }))],
        [{ v: "2", s: dataStyleCenter }, { v: "Colaba Main", s: ghostInputStyle }, ...packChecklists.map(() => ({ v: "YES", s: ghostInputStyle }))]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 15)].map(w => ({ wch: w }));
    addAppHeader(setupWs, utils.encode_col(facilityHeaders.length - 1));
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

    // --- 03. TODAYS_TASKS ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Responsible Role", s: headerStyle }, { v: "Assigned Person (Auto)", s: headerStyle },
        { v: "ID", s: headerStyle }, { v: "Requirement / Control Step", s: headerStyle }, 
        { v: "Done By (Initials)", s: headerStyle }, { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Freq", s: intelStyle }, { v: "Risk", s: intelStyle },
        { v: "Consequence", s: intelStyle }, { v: "Notes", s: intelStyle }
    ];
    const mData: any[][] = [[], [{ v: "MISSION LEDGER: DAILY EXECUTION LOG", s: { font: { sz: 16, bold: true } } }], [], mHeaders];
    
    [1, 2].forEach(bCode => {
        packChecklists.forEach((c) => {
            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const statusFormula = `IF(LEN(TRIM(G${rowIdx}))=0, "PENDING", IF(AND(LEN(TRIM(H${rowIdx}))=0, H${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                const personFormula = `IFERROR(VLOOKUP(B${rowIdx}&C${rowIdx}, 'TEAM_HUB'!A:D, 3, FALSE), "[UNASSIGNED]")`;

                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}+1), "Branch ${bCode}")`, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { t: 'f', f: personFormula, s: dataStyleCenter },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.description, s: dataStyleLeft },
                    { v: "", s: inputStyle },
                    { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? managerYellowStyle : naGreyStyle },
                    { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true } } },
                    { v: c.frequency, s: intelStyle },
                    { v: t.priority, s: intelStyle },
                    { v: t.consequence, s: intelStyle },
                    { v: t.trainerNotes || "-", s: intelStyle }
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 25, 30, 10, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addAppHeader(mWs, 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 04. BUSINESS_HEALTH ---
    const dashData = [
        [], [{ v: "BUSINESS HEALTH: PERFORMANCE HUB", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "GROUP KPIs", s: groupHeaderStyle }, null, null],
        [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }],
        [{ v: "Group Shift Progress", s: dataStyleLeft }, { t:'f', f:`IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*")), "0%"), "0%")`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_LOG'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_LOG'!G:G, "OPEN"))`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addAppHeader(dWs, 'C');
    utils.book_append_sheet(wb, dWs, "BUSINESS_HEALTH");

    // --- 05. TEAM_HUB ---
    const pHeaders = [{v:"Staff Lookup Key", s:headerStyle}, {v:"Branch Name", s:headerStyle}, {v:"Staff Full Name", s:headerStyle}, {v:"Role Assigned", s:headerStyle}, {v:"Contact", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData: any[][] = [[], [{v:"TEAM HUB: PER-BRANCH ROLE ASSIGNMENT", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const allRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    
    [1, 2].forEach(bId => {
        allRoles.forEach((role) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx}&D${rowIdx}`, s: intelStyle },
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}+1), "Branch ${bId}")`, s: dataStyleCenter },
                { v: "Type Person Name", s: ghostInputStyle }, 
                { v: role, s: dataStyleLeft },
                { v: "Contact Details", s: ghostInputStyle },
                { v: "ACTIVE", s: dataStyleCenter }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [25, 25, 35, 30, 20, 25].map(w => ({ wch: w }));
    addAppHeader(pWs, 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 06. INCIDENT_LOG ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category", s:headerStyle}, {v:"Description", s:headerStyle}, {v:"Financial Impact (Potential)", s:headerStyle}, {v:"Status", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT TRACKER: LIABILITY & LOSS LOG", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 20].map(w => ({ wch: w }));
    addAppHeader(iWs, 'G');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. SHIFT_HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Critical Handover Details", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 60, 60].map(w => ({ wch: w }));
    addAppHeader(hWs, 'E');
    utils.book_append_sheet(wb, hWs, "SHIFT_HANDOVER");

    // --- 08. SOP_LIBRARY ---
    const mpData: any[][] = [[], [{ v: "SOP LIBRARY: MASTER DATABASE", s: { font: { sz: 16, bold: true } } }], [], [], [{v:"ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement", s:headerStyle}, {v:"Consequence", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}]];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            mpData.push([
                { v: t.id, s: dataStyleCenter }, 
                { v: c.title, s: dataStyleCenter }, 
                { v: t.description, s: dataStyleLeft }, 
                { v: t.consequence, s: dataStyleLeft }, 
                { v: t.trainerNotes || "-", s: dataStyleLeft }, 
                { v: c.frequency, s: dataStyleCenter }
            ]);
        });
    });
    const mpWs = utils.aoa_to_sheet(mpData);
    mpWs['!cols'] = [12, 25, 65, 45, 50, 12].map(w => ({ wch: w }));
    addAppHeader(mpWs, 'F');
    utils.book_append_sheet(wb, mpWs, "SOP_LIBRARY");

    // --- 09. ROI ENGINE ---
    const rData = [
        [], [{v:"ROI ENGINE: COST & SAVINGS TRACKER", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Operational Risk Category", s:headerStyle}, {v:"Cost per Failure", s:headerStyle}, {v:"Incident Count (Linked)", s:headerStyle}, {v:"Projected Loss Avoided", s:headerStyle}, {v:"Governance Status", s:headerStyle}],
        [{v:"Major Food Poisoning Incident", s:dataStyleLeft}, {v: "500000", s: ghostInputStyle }, { t:'f', f: `COUNTIFS('INCIDENT_LOG'!D:D, "*Food*")`, s: dataStyleCenter }, { t:'f', f:'B6*(10-C6)', s:dataStyleCenter }, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Employee Fraud / Theft", s:dataStyleLeft}, {v: "150000", s: ghostInputStyle }, { t:'f', f: `COUNTIFS('INCIDENT_LOG'!D:D, "*Theft*")`, s: dataStyleCenter }, { t:'f', f:'B7*(10-C7)', s:dataStyleCenter }, {v:"ACTIVE AUDIT", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.ACCENT_GOLD } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addAppHeader(rWs, 'E');
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 10. HOW THIS WORKS ---
    const guideData = [
        [], 
        [{ v: "🚀 SYSTEM COMMAND MANUAL", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{ v: `The Definitive Protocol for Standardized ${item.title} Operations`, s: { font: { italic: true, sz: 10, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [{ v: "SECTION", s: headerStyle }, { v: "ACTION STEPS & SYSTEM PROTOCOLS", s: headerStyle }],
        [{ v: "1. ENGINE SETUP", s: { font: { bold: true, sz: 12, color: COLORS.PRIMARY_GREEN } } }, { v: "Go to 'BRANCH_MASTER'. Name your branches. Toggle modules ON/OFF per branch.", s: { font: { sz: 10 }, alignment: { wrapText: true } } }],
        [{ v: "2. ASSIGNING HEROES", s: { font: { bold: true, sz: 12, color: COLORS.PRIMARY_GREEN } } }, { v: "Go to 'TEAM_HUB'. List real staff names for EVERY role in EVERY branch. This ensures personal accountability.", s: { font: { sz: 10 }, alignment: { wrapText: true } } }],
        [{ v: "3. THE DAILY PULSE", s: { font: { bold: true, sz: 12, color: COLORS.PRIMARY_GREEN } } }, { v: "Staff: Type initials in 'Done By' when finished. Status and dashboards update instantly.", s: { font: { sz: 10 }, alignment: { wrapText: true } } }],
        [{ v: "4. MANAGER VERIFY", s: { font: { bold: true, sz: 12, color: COLORS.PRIMARY_GREEN } } }, { v: "Leadership: Sign off on YELLOW cells in 'Verified By'. These are your high-risk control points.", s: { font: { sz: 10 }, alignment: { wrapText: true } } }],
        [{ v: "5. AUDIT EVIDENCE", s: { font: { bold: true, sz: 12, color: COLORS.PRIMARY_GREEN } } }, { v: "In case of inspection, show 'TODAYS_TASKS' filtered by branch. It acts as your legal evidence of compliance.", s: { font: { sz: 10 }, alignment: { wrapText: true } } }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    guideWs['!cols'] = [{ wch: 35 }, { wch: 100 }];
    addAppHeader(guideWs, 'B');
    utils.book_append_sheet(wb, guideWs, "HOW_THIS_WORKS");

    // --- 11. AUTH CORE (HIDDEN) ---
    const aData = [["KEY", "VALUE"], ["EMAIL", BUYER_EMAIL], ["ORDER", ORDER_ID], ["ENGINE", "SOVEREIGN_4.4"]];
    const aWs = utils.aoa_to_sheet(aData);
    utils.book_append_sheet(wb, aWs, "_AUTH_CORE_");
    
    wb.Workbook = {
        Sheets: [
            { name: "HOME_CONSOLE", Hidden: 0 },
            { name: "BRANCH_MASTER", Hidden: 0 },
            { name: "TODAYS_TASKS", Hidden: 0 },
            { name: "BUSINESS_HEALTH", Hidden: 0 },
            { name: "TEAM_HUB", Hidden: 0 },
            { name: "SHIFT_HANDOVER", Hidden: 0 },
            { name: "INCIDENT_LOG", Hidden: 0 },
            { name: "SOP_LIBRARY", Hidden: 0 },
            { name: "ROI_ENGINE", Hidden: 0 },
            { name: "HOW_THIS_WORKS", Hidden: 0 },
            { name: "_AUTH_CORE_", Hidden: 1 }
        ]
    };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_4.4.xlsx`);
}
