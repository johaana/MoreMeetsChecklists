
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 PRO - THE COMMAND CENTER EDITION
 * Features: Tile-based Home Console, Full-width Application Headers, Micro-branding accents.
 */
export const handleDownloadPro = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "RAHUL@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-PRO-9921-REST";

    const COLORS = {
        NAVY_BAR: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        REVENUE_BLUE: "2563EB",
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        INPUT_ZONE: "FEFCE8",    
        BORDER: "CBD5E1",
        HEADER_BG: "1E293B"
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: borderStyle
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
        border: borderStyle
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            top: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } },
            bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } },
            left: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } },
            right: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } }
        }
    };

    const addAppHeader = (ws: WorkSheet, endCol: string = 'M', accentColor: string = COLORS.PRIMARY_GREEN) => {
        // Full Width App Bar
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: { ...navStyle, fill: { fgColor: { rgb: COLORS.NAVY_BAR } } } 
        }]], { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 

        // Apply Navy Fill to entire merged header
        for(let c = 0; c <= range.e.c; c++) {
            const cell = utils.encode_cell({r: 0, c});
            if(!ws[cell]) ws[cell] = { v: "", s: navStyle };
            else ws[cell].s = navStyle;
        }

        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. HOME CONSOLE (TILE BASED) ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Industrial Governance & Continuity Suite v4.2 PRO", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [],
        [{ v: "INITIALIZATION", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }, null, { v: "DAILY EXECUTION", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }],
        [{ v: "▶ SETUP BRANCHES", l: { Target: "#'SETUP'!A1" }, s: tileStyle }, null, { v: "▶ MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: tileStyle }],
        [],
        [{ v: "MANAGEMENT", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }, null, { v: "PROFIT PROTECTION", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }],
        [{ v: "▶ DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: tileStyle }, null, { v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }],
        [],
        [{ v: "LIABILITY", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }, null, { v: "INFRASTRUCTURE", s: { font: { bold: true, color: COLORS.ACCENT_GOLD } } }],
        [{ v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }, null, { v: "▶ MASTER PROTOCOL", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: tileStyle }],
        [], [], [], [],
        [{ v: "MOREMEETS™ | INSTITUTIONAL STANDARD FOR OPERATIONAL EXCELLENCE", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: `LICENSED TO: ${BUYER_EMAIL}`, s: { font: { sz: 7, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [30, 5, 30, 5].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 2 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 2 } },
        { s: { r: 7, c: 0 }, e: { r: 7, c: 0 } }, 
        { s: { r: 7, c: 2 }, e: { r: 7, c: 2 } },
        { s: { r: 10, c: 0 }, e: { r: 10, c: 0 } }, 
        { s: { r: 10, c: 2 }, e: { r: 10, c: 2 } },
        { s: { r: 13, c: 0 }, e: { r: 13, c: 0 } }, 
        { s: { r: 13, c: 2 }, e: { r: 13, c: 2 } },
        { s: { r: 18, c: 0 }, e: { r: 18, c: 2 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 2 } }
    ];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- OTHER SHEETS (Simplified for Preview) ---
    // In a full build, we would add the 240 tasks and switchboard logic here.
    // This Pro version establishes the UI Chasis requested.

    const setupWs = utils.aoa_to_sheet([[], [{ v: "BRANCH SETUP & SWITCHBOARD", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(setupWs, 'L');
    utils.book_append_sheet(wb, setupWs, "SETUP");

    const ledgerWs = utils.aoa_to_sheet([[], [{ v: "MISSION LEDGER (365 DAYS)", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(ledgerWs, 'M');
    utils.book_append_sheet(wb, ledgerWs, "MISSION_LEDGER");

    const dashWs = utils.aoa_to_sheet([[], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(dashWs, 'D');
    utils.book_append_sheet(wb, dashWs, "DASHBOARD");

    const roiWs = utils.aoa_to_sheet([[], [{ v: "ROI PROFIT PROTECTION ENGINE", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(roiWs, 'E', COLORS.ACCENT_GOLD);
    utils.book_append_sheet(wb, roiWs, "ROI_ENGINE");

    const incidentWs = utils.aoa_to_sheet([[], [{ v: "INCIDENT & LIABILITY REGISTRY", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(incidentWs, 'G', COLORS.RISK_RED);
    utils.book_append_sheet(wb, incidentWs, "INCIDENT_LOG");

    const mpWs = utils.aoa_to_sheet([[], [{ v: "MASTER PROTOCOL DATABASE", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(mpWs, 'G');
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

    writeFile(wb, `ROCS_v4.2_PRO_COMMAND_EDITION.xlsx`);
}
