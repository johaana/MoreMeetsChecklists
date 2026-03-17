
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 PRO - THE COMMAND CENTER EDITION (High-Res UI)
 * Experimental Build: Dual-Section Dashboard + High-Density Motivation Matrix
 */
export const handleDownloadPro = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "CLIENT@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-PRO-9921-REST";

    const COLORS = {
        NAVY_BAR: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER: "334155",
        INPUT_ZONE: "FEFCE8",
        CONSOLE_BG: "F1F5F9",
        BANNER_AMBER: "FACC15"
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const boxBorder = { style: 'medium', color: { rgb: COLORS.NAVY_BAR } };

    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER } } }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            top: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } },
            left: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
    };

    const groupHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: "000000" }, sz: 12 },
        fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } },
        alignment: { horizontal: 'center', vertical: 'center' }
    };

    const moodBannerStyle = {
        font: { ...baseFont, bold: true, sz: 14, color: { rgb: "000000" } },
        fill: { fgColor: { rgb: COLORS.BANNER_AMBER } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { left: boxBorder, top: boxBorder, right: boxBorder }
    };

    const subHeaderStyle = {
        font: { ...baseFont, bold: true, sz: 10, color: { rgb: COLORS.WHITE } },
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderStyle
    };

    const valueLabelStyle = {
        font: { ...baseFont, bold: true, sz: 10, color: { rgb: COLORS.INTEL_GREY } },
        alignment: { horizontal: 'right', vertical: 'center' },
        border: { left: borderStyle.left }
    };

    const valueDataStyle = {
        font: { ...baseFont, bold: true, sz: 11, color: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'left', vertical: 'center' },
    };

    const bigLinkActionStyle = {
        font: { ...baseFont, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN }, underline: true },
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { left: boxBorder, bottom: boxBorder, right: boxBorder }
    };

    const addAppHeader = (ws: WorkSheet, endCol: string = 'M') => {
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
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.3 PRO", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "#'SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'MISSION_LEDGER'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'DASHBOARD'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null], 
        [null, null, null, null, null], 
        [],
        [
            { v: "▶ TEAM HUB", l: { Target: "#'PERSONNEL'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS TRACKER", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        [
            { v: "▶ SOP LIBRARY", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: tileStyle }, null, 
            { v: "▶ ARCHIVE", l: { Target: "#'ARCHIVE'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        // --- HIGH-OCTANE DASHBOARD START ---
        [{ t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))>=0.9, "🔥 SIZZLING!", IF(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))>=0.6, "🥘 SIMMERING...", "🧊 COLD - TURN UP THE HEAT!")), "EMPIRE MOOD: 🧊 LOADING...")`, s: moodBannerStyle }, null, null, null, null],
        [
            { v: "🎖️ TEAM PERFORMANCE", s: subHeaderStyle }, null, null,
            { v: "🛡️ COMMAND VITALS", s: { ...subHeaderStyle, border: { ...borderStyle, left: { style: 'medium', color: { rgb: COLORS.WHITE } } } } }, null
        ],
        [
            { v: "Today's Star:", s: valueLabelStyle },
            { v: "🎖️ Rahul (Bandra)", s: valueDataStyle }, null,
            { v: "Open Incidents:", s: { ...valueLabelStyle, border: { left: { style: 'medium', color: { rgb: COLORS.NAVY_BAR } } } } },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_LOG'!E:E, "<>")=0, "✅ NONE", COUNTIF('INCIDENT_LOG'!E:E, "<>"))`, s: { ...valueDataStyle, font: { ...valueDataStyle.font, color: { rgb: COLORS.RISK_RED } } } }
        ],
        [
            { v: "Top Streak:", s: valueLabelStyle },
            { v: "🏆 Bandra (14 Days)", s: valueDataStyle }, null,
            { v: "Active Units:", s: { ...valueLabelStyle, border: { left: { style: 'medium', color: { rgb: COLORS.NAVY_BAR } } } } },
            { v: 2, s: valueDataStyle }
        ],
        [
            { v: "Empire Status:", s: valueLabelStyle },
            { v: "👑 LEVEL 3 - EXECUTIVE", s: { ...valueDataStyle, font: { ...valueDataStyle.font, color: { rgb: COLORS.ACCENT_GOLD } } } }, null,
            { v: "Shift Progress:", s: { ...valueLabelStyle, border: { left: { style: 'medium', color: { rgb: COLORS.NAVY_BAR } } } } },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('MISSION_LEDGER'!E:E, "<>") / MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>")), "0%"), "0%")`, s: { ...valueDataStyle, font: { ...valueDataStyle.font, color: { rgb: COLORS.PRIMARY_GREEN } } } }
        ],
        [{ v: "▶ VIEW BRANCH INTELLIGENCE & PERFORMANCE ANALYTICS", l: { Target: "#'DASHBOARD'!A1" }, s: bigLinkActionStyle }, null, null, null, null],
        [],
        [{ v: "SYSTEM STATUS: ✅ INSTITUTIONAL GRADE ENCRYPTED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'left' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'left' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [25, 35, 5, 25, 25].map(w => ({ wch: w }));
    
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 18, c: 0 }, e: { r: 18, c: 4 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 2 } }, { s: { r: 19, c: 3 }, e: { r: 19, c: 4 } },
        { s: { r: 23, c: 0 }, e: { r: 23, c: 4 } },
        { s: { r: 25, c: 0 }, e: { r: 25, c: 4 } }, { s: { r: 26, c: 0 }, e: { r: 26, c: 4 } },
        { s: { r: 6, c: 0 }, e: { r: 8, c: 0 } }, { s: { r: 6, c: 2 }, e: { r: 8, c: 2 } }, { s: { r: 6, c: 4 }, e: { r: 8, c: 4 } },
        { s: { r: 10, c: 0 }, e: { r: 12, c: 0 } }, { s: { r: 10, c: 2 }, e: { r: 12, c: 2 } }, { s: { r: 10, c: 4 }, e: { r: 12, c: 4 } },
        { s: { r: 14, c: 0 }, e: { r: 16, c: 0 } }, { s: { r: 14, c: 2 }, e: { r: 16, c: 2 } }, { s: { r: 14, c: 4 }, e: { r: 16, c: 4 } }
    ];

    homeWs['!rows'] = Array(35).fill({ hpt: 18 });
    homeWs['!rows'][2] = { hpt: 45 }; 
    homeWs['!rows'][18] = { hpt: 28 }; // Mood Banner
    homeWs['!rows'][19] = { hpt: 22 }; // Section Headers
    homeWs['!rows'][23] = { hpt: 28 }; // Action Link

    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- SUB-SHEETS --- (Stubs for the Pro build)
    const setupWs = utils.aoa_to_sheet([[],[{v:"BRANCH SETUP", s:{font:{bold:true, sz:16}}}]]); addAppHeader(setupWs, 'E'); utils.book_append_sheet(wb, setupWs, "SETUP");
    const mWs = utils.aoa_to_sheet([[],[{v:"MISSION LEDGER", s:{font:{bold:true, sz:16}}}]]); addAppHeader(mWs, 'M'); utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");
    const dWs = utils.aoa_to_sheet([[],[{v:"DASHBOARD", s:{font:{bold:true, sz:16}}}]]); addAppHeader(dWs, 'E'); utils.book_append_sheet(wb, dWs, "DASHBOARD");
    const rWs = utils.aoa_to_sheet([[],[{v:"ROI ENGINE", s:{font:{bold:true, sz:16}}}]]); addAppHeader(rWs, 'E'); utils.book_append_sheet(wb, rWs, "ROI_ENGINE");
    const iWs = utils.aoa_to_sheet([[],[{v:"INCIDENT LOG", s:{font:{bold:true, sz:16}}}]]); addAppHeader(iWs, 'G'); utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");
    const hWs = utils.aoa_to_sheet([[],[{v:"HANDOVER", s:{font:{bold:true, sz:16}}}]]); addAppHeader(hWs, 'F'); utils.book_append_sheet(wb, hWs, "HANDOVER");
    const pWs = utils.aoa_to_sheet([[],[{v:"PERSONNEL", s:{font:{bold:true, sz:16}}}]]); addAppHeader(pWs, 'G'); utils.book_append_sheet(wb, pWs, "PERSONNEL");
    const mpWs = utils.aoa_to_sheet([[],[{v:"MASTER PROTOCOL", s:{font:{bold:true, sz:16}}}]]); addAppHeader(mpWs, 'G'); utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");
    const archWs = utils.aoa_to_sheet([[],[{v:"ARCHIVE", s:{font:{bold:true, sz:16}}}]]); addAppHeader(archWs, 'E'); utils.book_append_sheet(wb, archWs, "ARCHIVE");

    writeFile(wb, `MOREMEETS_ROCS_v4.3_COMMAND_CENTER_PRO.xlsx`);
}
