
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 PRO - THE SOVEREIGN EDITION
 * Proper UI/UX Redesign: Symmetric Grid + Zero-Clipping Architecture
 * Optimized for One-Glance Visibility (No Scrolling)
 * 
 * HARDENED: Numeric cell values stringified for TypeScript.
 */
export const handleDownloadPro = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "CLIENT@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-PRO-SOVEREIGN-9921";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER_SOFT: "334155",
        INPUT_ZONE: "FEFCE8",
        CONSOLE_BG: "F1F5F9",
        BANNER_AMBER: "FACC15",
        SUCCESS_BLUE: "3B82F6",
        CHAMBER_BG: "F8FAFC"
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
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Run Your Entire Operations From One Screen", s: { font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.3 PRO | Sovereign Tier", s: { font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: { font: { bold: true }, border: borderStyle } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true }, border: borderStyle } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true }, border: borderStyle } }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "#'SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'MISSION_LEDGER'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'DASHBOARD'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ TEAM HUB", l: { Target: "#'PERSONNEL'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ MASTER SOPs", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: tileStyle }, null, 
            { v: "▶ ARCHIVE", l: { Target: "#'ARCHIVE'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }
        ],
        [],
<<<<<<< HEAD
        // --- PRO DASHBOARD: SYMMETRIC TRIPLE CHAMBER ---
        [{ t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))>=0.9, "🔥 SIZZLING - PERFECT EXECUTION!", IF(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))>=0.6, "🥘 SIMMERING - BUILDING MOMENTUM", "🧊 COLD - TURN UP THE HEAT!")), "EMPIRE MOOD: 🧊 LOADING...")`, s: moodBannerStyle }, null, null, null, null, null],
        [
            { v: "🎖️ TEAM GLORY", s: chamberHeaderStyle }, null, 
            { v: "⚡ MOMENTUM", s: chamberHeaderStyle }, null,
            { v: "🛡️ COMMAND VITALS", s: chamberHeaderStyle }, null
        ],
        [
            { v: "Today's Star:", s: chamberLabelStyle },
            { v: "🎖️ Rahul (Bandra)", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN } } } },
            { v: "Top Streak:", s: chamberLabelStyle },
            { v: "🏆 Bandra (14 Days)", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } } } },
            { v: "Open Incidents:", s: chamberLabelStyle },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_LOG'!E:E, "<>")=0, "✅ NONE", COUNTIF('INCIDENT_LOG'!E:E, "<>"))`, s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.RISK_RED } } } }
        ],
        [
            { v: "Empire Status:", s: { ...chamberLabelStyle, border: { ...chamberLabelStyle.border, bottom: boxBorder } } },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } }, border: { bottom: boxBorder } } },
            { v: "Active Units:", s: { ...chamberLabelStyle, border: { bottom: boxBorder } } },
            { v: "2", s: { ...chamberValueStyle, border: { bottom: boxBorder } } },
            { v: "Shift Progress:", s: { ...chamberLabelStyle, border: { bottom: boxBorder } } },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>")), "0%"), "0%")`, s: { ...chamberValueStyle, font: { ...chamberValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 12 }, border: { bottom: boxBorder, right: boxBorder } } }
        ],
        [{ v: "▶ VIEW BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'DASHBOARD'!A1" }, s: bigActionButtonStyle }, null, null, null, null, null],
        [],
=======
>>>>>>> 1f28b33d09c43b713e161328064bc97a3f7d40a5
        [{ v: "SYSTEM STATUS: ✅ INSTITUTIONAL GRADE ENCRYPTED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'left' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'left' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } }];
    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    const subSheets = [
        { name: "SETUP", title: "BRANCH MASTER SETUP" },
        { name: "MISSION_LEDGER", title: "DAILY TASK EXECUTION LOG" },
        { name: "DASHBOARD", title: "EXECUTIVE ANALYTICS" },
        { name: "ROI_ENGINE", title: "COST & SAVINGS TRACKER" },
        { name: "INCIDENT_LOG", title: "LIABILITY & INCIDENT LOG" },
        { name: "HANDOVER", title: "SHIFT HANDOVER BRIDGE" },
        { name: "PERSONNEL", title: "TEAM HUB & DIRECTORY" },
        { name: "MASTER_PROTOCOL", title: "SOP LIBRARY DATABASE" },
        { name: "ARCHIVE", title: "HISTORICAL PERFORMANCE ARCHIVE" }
    ];

    subSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[{v: s.title, s: { font: { bold: true, sz: 18, color: { rgb: COLORS.NAVY_DEEP } } }}]]);
        addAppHeader(ws, 'K');
        utils.book_append_sheet(wb, ws, s.name);
    });

    writeFile(wb, `ROCS_v4.3_Sovereign_Build.xlsx`);
}
