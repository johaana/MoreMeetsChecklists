
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 Master - SOVEREIGN SALEABLE EDITION
 * Features: Hardened Status Logic, Inactive Module Grey-out, Symmetric Zero-Clipping.
 * Content: "Ready-to-Fill" Ghost Data for commercial sale.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "[BUYER EMAIL]";
    const ORDER_ID = "MM-ORD-[ID]";

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

    // --- 01. HOME CONSOLE ---
    const homeData: any[][] = [
        [], [],
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Run Your Entire Restaurant Operations From One Screen", s: { font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite PRO | Sovereign Tier", s: { font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
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
            { v: "Empire Status:", s: { ...chamberLabelStyle, border: { ...chamberLabelStyle.border, bottom: boxBorder } } },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } }, border: { bottom: boxBorder } } },
            { v: "Active Units:", s: { ...chamberLabelStyle, border: { bottom: boxBorder } } },
            { t: 'f', f: `COUNTIF('BRANCH_SETUP'!B6:B15, "<>")`, s: { ...chamberValueStyle, border: { bottom: boxBorder } } },
            { v: "Shift Progress:", s: { ...chamberLabelStyle, border: { bottom: boxBorder } } },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*")), "0%"), "0%")`, s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 12 }, border: { bottom: boxBorder, right: boxBorder } } }
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

    // --- SUB-SHEETS (Software Chasses) ---
    const subSheets = [
        { name: "BRANCH_SETUP", title: "BRANCH MASTER SETUP" },
        { name: "TODAYS_TASKS", title: "DAILY TASK EXECUTION LOG" },
        { name: "BUSINESS_HEALTH", title: "EXECUTIVE ANALYTICS" },
        { name: "TEAM_HUB", title: "TEAM HUB & DIRECTORY" },
        { name: "SHIFT_HANDOVER", title: "SHIFT HANDOVER BRIDGE" },
        { name: "INCIDENT_TRACKER", title: "LIABILITY & INCIDENT LOG" },
        { name: "SOP_LIBRARY", title: "SOP LIBRARY DATABASE" },
        { name: "COST_SAVINGS_TRACKER", title: "COST & SAVINGS TRACKER" },
        { name: "HOW_THIS_WORKS", title: "SYSTEM COMMAND MANUAL" }
    ];

    subSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[{v: s.title, s: { font: { bold: true, sz: 18, color: { rgb: COLORS.NAVY_DEEP } } }}]]);
        addAppHeader(ws, 'K');
        utils.book_append_sheet(wb, ws, s.name);
    });

    writeFile(wb, `ROCS_Sovereign_Build.xlsx`);
}
