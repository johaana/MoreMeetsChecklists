
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * ROCS v4.3 Master Engine - THE SOVEREIGN STANDARD
 * Universal Generator for all Industry Operating Systems.
 * Features: Multi-Branch Switchboard, Symmetric Zero-Clipping UI, 
 * Manager Yellow Targets, ROI Loss Recovery Engine.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    // License Data
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-MASTER-SOVEREIGN-4.3";

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
        INACTIVE_GREY: "F1F5F9"
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

    const chamberLabelStyle = {
        font: { ...baseFont, bold: true, sz: 9, color: { rgb: COLORS.INTEL_GREY } },
        fill: { fgColor: { rgb: COLORS.CHAMBER_BG } },
        alignment: { horizontal: 'right', vertical: 'center' },
        border: { left: borderStyle.left }
    };

    const chamberValueStyle = {
        font: { ...baseFont, bold: true, sz: 11, color: { rgb: COLORS.NAVY_DEEP } },
        fill: { fgColor: { rgb: COLORS.CHAMBER_BG } },
        alignment: { horizontal: 'left', vertical: 'center' },
    };

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

    const instructionTitleStyle = {
        font: { ...baseFont, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } },
        alignment: { vertical: 'center' }
    };

    const instructionBodyStyle = {
        font: { ...baseFont, sz: 10 },
        alignment: { wrapText: true, vertical: 'top' }
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
    const homeData: any[][] = [
        [], [],
        [{ v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `Run Your Entire ${item.title} Operations From One Screen`, s: { font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: `Sovereign Series v4.3 PRO | Multi-Branch Engine`, s: { font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "#'BRANCH_SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ TEAM HUB", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS", l: { Target: "#'COST_SAVINGS_TRACKER'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ MASTER SOPs", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ HOW THIS WORKS", l: { Target: "#'HOW_THIS_WORKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: tileStyle }, null
        ],
        [],
        [{ t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*"))>=0.9, "🔥 SIZZLING - PERFECT EXECUTION!", IF(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*"))>=0.6, "🥘 SIMMERING - BUILDING MOMENTUM", "🧊 COLD - TURN UP THE HEAT!")), "EMPIRE MOOD: 🧊 LOADING...")`, s: moodBannerStyle }, null, null, null, null, null],
        [
            { v: "🎖️ TEAM GLORY", s: chamberHeaderStyle }, null, 
            { v: "⚡ MOMENTUM", s: chamberHeaderStyle }, null,
            { v: "🛡️ COMMAND VITALS", s: chamberHeaderStyle }, null
        ],
        [
            { v: "Today's Star:", s: chamberLabelStyle },
            { v: "🎖️ [Name]", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN } } } },
            { v: "Top Streak:", s: chamberLabelStyle },
            { v: "🏆 [Branch]", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } } } },
            { v: "Open Incidents:", s: chamberLabelStyle },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "✅ NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.RISK_RED } } } }
        ],
        [
            { v: "Empire Status:", s: { ...chamberLabelStyle } },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } } } },
            { v: "Active Units:", s: { ...chamberLabelStyle } },
            { t: 'f', f: `COUNTIF('BRANCH_SETUP'!B6:B15, "<>")`, s: { ...chamberValueStyle } },
            { v: "Shift Progress:", s: { ...chamberLabelStyle } },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*")), "0%"), "0%")`, s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 12 } } }
        ],
        [{ v: "▶ VIEW BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: bigActionButtonStyle }, null, null, null, null, null],
        [],
        [{ v: "USER GUIDE: Use the [Filter Arrows] in 'Today's Tasks' to see only YOUR role and YOUR name.", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
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

    // --- 02. BRANCH_SETUP ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle }))
    ];
    const branchSetupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [],
        [], facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Type Branch 1 Name", s: ghostInputStyle }, ...packChecklists.map(() => ({ v: "YES", s: ghostInputStyle }))],
        [{ v: "2", s: dataStyleCenter }, { v: "Type Branch 2 Name", s: ghostInputStyle }, ...packChecklists.map(() => ({ v: "YES", s: ghostInputStyle }))]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 15)].map(w => ({ wch: w }));
    addAppHeader(setupWs, utils.encode_col(facilityHeaders.length - 1));
    utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");

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
                const personFormula = `IFERROR(VLOOKUP(C${rowIdx}, 'TEAM_HUB'!B:C, 2, FALSE), "[UNASSIGNED]")`;

                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_SETUP'!$B$5:$B$15, ${bCode}), "Branch ${bCode}")`, s: dataStyleCenter },
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
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addAppHeader(dWs, 'C');
    utils.book_append_sheet(wb, dWs, "BUSINESS_HEALTH");

    // --- 05. TEAM_HUB ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Role Name", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Contact", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData = [[], [{v:"TEAM HUB & ROLE ASSIGNMENT", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const allRoles = Array.from(new Set(packChecklists.map(c => c.role)));
    allRoles.forEach((role, idx) => {
        pData.push([
            { v: String(idx + 1), s: dataStyleCenter },
            { v: role, s: dataStyleLeft },
            { v: "Type Person Name", s: ghostInputStyle }, 
            { v: "Contact Details", s: ghostInputStyle },
            { v: "ACTIVE", s: dataStyleCenter }
        ]);
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 30, 35, 20, 25].map(w => ({ wch: w }));
    addAppHeader(pWs, 'E');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 06. INCIDENT_TRACKER ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category", s:headerStyle}, {v:"Description", s:headerStyle}, {v:"Impact", s:headerStyle}, {v:"Status", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT TRACKER: LIABILITY LOG", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 20].map(w => ({ wch: w }));
    addAppHeader(iWs, 'G');
    utils.book_append_sheet(wb, iWs, "INCIDENT_TRACKER");

    // --- 07. SHIFT_HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Details", s:headerStyle}, {v:"Outstanding", s:headerStyle}];
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

    // --- 09. COST_SAVINGS ---
    const rData = [
        [], [{v:"COST & SAVINGS TRACKER", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Risk Category", s:headerStyle}, {v:"Impact per Event", s:headerStyle}, {v:"Freq / Yr", s:headerStyle}, {v:"Projected Loss", s:headerStyle}, {v:"Status", s:headerStyle}],
        [{v:"Major Operational Failure", s:dataStyleLeft}, {v:"50000", s:ghostInputStyle}, {v:"12", s:ghostInputStyle}, {t:'f', f:'B6*C6', s:dataStyleCenter}, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addAppHeader(rWs, 'E');
    utils.book_append_sheet(wb, rWs, "COST_SAVINGS_TRACKER");

    // --- 10. HOW THIS WORKS ---
    const guideData = [
        [], 
        [{ v: "🚀 SYSTEM COMMAND MANUAL", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{ v: `The Definitive Protocol for Standardized ${item.title} Operations`, s: { font: { italic: true, sz: 10, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [{ v: "SECTION", s: headerStyle }, { v: "ACTION STEPS & SYSTEM PROTOCOLS", s: headerStyle }],
        [{ v: "1. ENGINE SETUP", s: instructionTitleStyle }, { v: "Go to 'BRANCH_SETUP'. Use the Switchboard to toggle your modules to YES or NO. This automatically filters irrelevant tasks from your ledger.", s: instructionBodyStyle }],
        [],
        [{ v: "2. ASSIGNING HEROES", s: instructionTitleStyle }, { v: "Go to 'TEAM_HUB'. Type real staff names next to roles. This ensures every task in the Ledger is personally assigned.", s: instructionBodyStyle }],
        [],
        [{ v: "3. FINDING WORK", s: instructionTitleStyle }, { v: "Staff: Go to 'TODAYS_TASKS'. Use the filter arrow [v] on 'Responsible Role' to see only your job.", s: instructionBodyStyle }],
        [],
        [{ v: "4. THE DAILY PULSE", s: instructionTitleStyle }, { v: "Type your initials in 'Done By' when finished. Status updates automatically.", s: instructionBodyStyle }],
        [],
        [{ v: "5. MANAGER VERIFY", s: instructionTitleStyle }, { v: "Managers: Look for Yellow Cells in 'Verified By'. These are high-risk points requiring sign-off.", s: instructionBodyStyle }],
        [],
        [{ v: "6. SHIFT BRIDGE", s: instructionTitleStyle }, { v: "Use 'SHIFT_HANDOVER' to communicate between AM/PM teams. Prevents information loss.", s: instructionBodyStyle }],
        [],
        [{ v: "7. INCIDENT COMMAND", s: instructionTitleStyle }, { v: "Log safety or legal incidents in 'INCIDENT_TRACKER'. Creates the 'Black Box' data trail.", s: instructionBodyStyle }],
        [],
        [{ v: "8. VIEWING HISTORY", s: instructionTitleStyle }, { v: "To see old records, use the filter arrow [v] on the 'Date' column in 'TODAYS_TASKS'. Uncheck 'Today' and select past dates.", s: instructionBodyStyle }],
        [],
        [{ v: "9. EVOLVING THE BIBLE", s: instructionTitleStyle }, { v: "Add new tasks to 'SOP_LIBRARY'. They will flow into the daily ledger automatically.", s: instructionBodyStyle }],
        [],
        [{ v: "10. TRACKING ROI", s: instructionTitleStyle }, { v: "Use 'COST_SAVINGS_TRACKER' to visualize the financial value your discipline protects.", s: instructionBodyStyle }]
    ];
    const guideWs = utils.aoa_to_sheet(guideData);
    guideWs['!cols'] = [{ wch: 35 }, { wch: 100 }];
    guideWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 1 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }];
    addAppHeader(guideWs, 'B');
    utils.book_append_sheet(wb, guideWs, "HOW_THIS_WORKS");

    // --- 11. AUTH CORE (HIDDEN) ---
    const aData = [["KEY", "VALUE"], ["EMAIL", BUYER_EMAIL], ["ORDER", ORDER_ID]];
    const aWs = utils.aoa_to_sheet(aData);
    utils.book_append_sheet(wb, aWs, "_AUTH_CORE_");
    
    wb.Workbook = {
        Sheets: [
            { name: "HOME_CONSOLE", Hidden: 0 },
            { name: "BRANCH_SETUP", Hidden: 0 },
            { name: "TODAYS_TASKS", Hidden: 0 },
            { name: "BUSINESS_HEALTH", Hidden: 0 },
            { name: "TEAM_HUB", Hidden: 0 },
            { name: "SHIFT_HANDOVER", Hidden: 0 },
            { name: "INCIDENT_TRACKER", Hidden: 0 },
            { name: "SOP_LIBRARY", Hidden: 0 },
            { name: "COST_SAVINGS_TRACKER", Hidden: 0 },
            { name: "HOW_THIS_WORKS", Hidden: 0 },
            { name: "_AUTH_CORE_", Hidden: 1 }
        ]
    };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_v4.3_Master.xlsx`);
}
