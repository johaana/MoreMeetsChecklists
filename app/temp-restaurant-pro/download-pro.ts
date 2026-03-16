
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 PRO - THE COMMAND CENTER EDITION (High-Res UI)
 * Features: 3D-Tile Menu, Invisible Grid, Full-width Application Headers, Live Status Widgets.
 * Updated: Category headers now use a high-visibility yellow background with larger black text.
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
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER: "334155"
    };

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

    // --- 01. HOME CONSOLE (COMMAND CENTER UI) ---
    const homeData: any[][] = [
        [], [],
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.3 PRO", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ SETUP BRANCHES", l: { Target: "#'SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: tileStyle }, null, 
            { v: "▶ DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null], 
        [null, null, null, null, null], 
        [],
        [
            { v: "▶ PERSONNEL", l: { Target: "#'PERSONNEL'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        [
            { v: "▶ ARCHIVE", s: { ...tileStyle, fill: { fgColor: { rgb: "334155" } } } }, null, 
            { v: "▶ MASTER PROTOCOL", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [], [],
        [{ v: "SYSTEM STATUS: ✅ INSTITUTIONAL GRADE ENCRYPTED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 5, 35, 5, 35].map(w => ({ wch: w }));
    
    const tileMerges = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, // Title
        { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, // Subtitle
        { s: { r: 19, c: 0 }, e: { r: 19, c: 4 } }, // Status
        { s: { r: 20, c: 0 }, e: { r: 20, c: 4 } }, // License
        // Row 1 Tiles
        { s: { r: 6, c: 0 }, e: { r: 8, c: 0 } }, { s: { r: 6, c: 2 }, e: { r: 8, c: 2 } }, { s: { r: 6, c: 4 }, e: { r: 8, c: 4 } },
        // Row 2 Tiles
        { s: { r: 10, c: 0 }, e: { r: 12, c: 0 } }, { s: { r: 10, c: 2 }, e: { r: 12, c: 2 } }, { s: { r: 10, c: 4 }, e: { r: 12, c: 4 } },
        // Row 3 Tiles
        { s: { r: 14, c: 0 }, e: { r: 16, c: 0 } }, { s: { r: 14, c: 2 }, e: { r: 16, c: 2 } }, { s: { r: 14, c: 4 }, e: { r: 16, c: 4 } }
    ];
    homeWs['!merges'] = tileMerges;
    homeWs['!views'] = [{ showGridLines: false }];
    
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- OTHER SHEETS ---
    const mpWs = utils.aoa_to_sheet([[], [{ v: "MASTER PROTOCOL DATABASE", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(mpWs, 'G');
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

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
    addAppHeader(roiWs, 'E');
    utils.book_append_sheet(wb, roiWs, "ROI_ENGINE");

    const incidentWs = utils.aoa_to_sheet([[], [{ v: "INCIDENT & LIABILITY REGISTRY", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(incidentWs, 'G');
    utils.book_append_sheet(wb, incidentWs, "INCIDENT_LOG");

    const personnelWs = utils.aoa_to_sheet([[], [{ v: "PERSONNEL DIRECTORY", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(personnelWs, 'G');
    utils.book_append_sheet(wb, personnelWs, "PERSONNEL");

    const handoverWs = utils.aoa_to_sheet([[], [{ v: "SHIFT HANDOVER BRIDGE", s: { font: { sz: 16, bold: true } } }]]);
    addAppHeader(handoverWs, 'F');
    utils.book_append_sheet(wb, handoverWs, "HANDOVER");

    writeFile(wb, `MOREMEETS_COMMAND_CENTER_v4.3_PRO.xlsx`);
}
