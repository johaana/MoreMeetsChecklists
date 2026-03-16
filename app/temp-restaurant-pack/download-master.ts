
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - The Operational Operating System (Enterprise Continuity Edition)
 * Final Build: Phased Rollout, Hazardous Sign-Off, and Software Lobby UI.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const COLORS = {
        PRIME_NAVY: "1F2937",
        SLATE_HEADER: "374151",
        ACCENT_BLUE: "2563EB",
        DANGER_RED: "DC2626",
        SUCCESS_GREEN: "16A34A",
        WHITE: "FFFFFF",
        SOFT_GREY: "F3F4F6",
        BORDER_LIGHT: "D1D5DB",
        INPUT_ZONE: "FFFFE0", 
        TEXT_MUTED: "9CA3AF",
        GOLD: "F5A623",
        ALERT_RED: "FFC7CE",
        BRAND_LIGHT: "E5E7EB"
    };

    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } }
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.PRIME_NAVY } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: borderThin
    };

    const backButtonStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.BRAND_LIGHT } },
        alignment: { horizontal: 'left', vertical: 'center', indent: 1 },
        border: borderThin
    };

    const headerBlockStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE } },
        fill: { fgColor: { rgb: COLORS.SLATE_HEADER } },
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const leftCellStyle = { 
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderThin
    };

    const centerCellStyle = {
        font: baseFont,
        alignment: { vertical: 'center', horizontal: 'center' },
        border: borderThin
    };

    const inputStyle = {
        ...centerCellStyle,
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const watermarkStyle = {
        font: { italic: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } },
        alignment: { horizontal: 'center' }
    };

    const addWatermark = (ws: WorkSheet, row: number = 20) => {
        const brandData = [
            [{ v: "ROCS v4.2 | Restaurant Operations Control System", s: watermarkStyle }],
            [{ v: "Built by MoreMeets | Operational Intelligence Tools", s: watermarkStyle }]
        ];
        utils.sheet_add_aoa(ws, brandData, { origin: `A${row}` });
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(
            { s: { r: row - 1, c: 0 }, e: { r: row - 1, c: 5 } },
            { s: { r: row, c: 0 }, e: { r: row, c: 5 } }
        );
    };

    const addBackButton = (ws: WorkSheet) => {
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO CONTROL PANEL", 
            l: { Target: "#'01_CONTROL_PANEL'!A1" }, 
            s: backButtonStyle 
        }]], { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 00. START HERE (HOME PAGE) ---
    const insData = [
        [], [],
        [{ v: "WELCOME TO THE ROCS v4.2 ENTERPRISE SUITE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Follow these 4 steps to activate your operational infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "GOVERNANCE INITIALIZATION", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: CONFIGURE YOUR FLEET", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK TO GO TO SETUP MATRIX", l: { Target: "#'07_SETUP'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 2: ACCESS THE OPERATIONAL CONSOLE (THE APP LOBBY)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK TO OPEN CONTROL PANEL", l: { Target: "#'01_CONTROL_PANEL'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 3: EXECUTE DAILY MISSIONS & LOG INCIDENTS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK TO START TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 4: REVIEW YOUR VALUE (ROI CALCULATOR)", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK TO CALCULATE SAVED VALUE", l: { Target: "#'06_ROI_CALC'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "--------------------------------------------------------------------------------------------------", s: { font: { color: { rgb: COLORS.BORDER_LIGHT } } } }],
        [{ v: "SUPPORT: more@moremeets.com | © 2025 MoreMeets", s: { font: { sz: 9, italic: true }, alignment: { horizontal: 'center' } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    insWs['!cols'] = [{ wch: 30 }, { wch: 45 }, { wch: 10 }, { wch: 20 }, { wch: 30 }];
    insWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } },
        { s: { r: 5, c: 0 }, e: { r: 5, c: 5 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 5 } },
        { s: { r: 20, c: 0 }, e: { r: 20, c: 5 } }
    ];
    addWatermark(insWs, 22);
    utils.book_append_sheet(wb, insWs, "00_START_HERE");

    // --- 01. CONTROL PANEL (UNIVERSAL HUB) ---
    const cpData = [
        [], [],
        [{ v: "OPERATIONAL COMMAND HUB v4.2", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Centralized Multi-Branch Governance Console", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "OPERATIONAL EXECUTION", s: { font: { bold: true, sz: 12, color: COLORS.PRIME_NAVY }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ TODAY'S MISSION LEDGER", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: navStyle }, null, null, { v: "▶ SHIFT HANDOVER BRIDGE", l: { Target: "#'04_SHIFT_HANDOVER'!A1" }, s: navStyle }],
        [],
        [{ v: "GOVERNANCE & RISK COMMAND", s: { font: { bold: true, sz: 12, color: COLORS.PRIME_NAVY }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ INCIDENT & LIABILITY LOG", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: navStyle }, null, null, { v: "▶ EXECUTIVE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: navStyle }],
        [],
        [{ v: "STRATEGIC ADMIN & VALUE", s: { font: { bold: true, sz: 12, color: COLORS.PRIME_NAVY }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ FLEET SETUP MATRIX", l: { Target: "#'07_SETUP'!A1" }, s: navStyle }, null, null, { v: "▶ ROI & LEAKAGE ENGINE", l: { Target: "#'06_ROI_CALC'!A1" }, s: navStyle }],
        [],
        [{ v: "SUPPORT & SYSTEM DOCS", s: { font: { bold: true, sz: 12, color: COLORS.PRIME_NAVY }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ INSTRUCTIONS & LEGEND", l: { Target: "#'00_START_HERE'!A1" }, s: navStyle }, null, null, { v: "▶ MASTER RESET / RE-CONFIGURE", l: { Target: "#'07_SETUP'!A1" }, s: navStyle }],
        [],
        [{ v: "LIVE COMPLIANCE SNAPSHOTS", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1 Identity:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!$B$6", s: { font: { bold: true } } }, { v: "Live Compliance:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!I:I, \"<>\", '03_TODAY_MISSION'!B:B, '07_SETUP'!$B$6)/MAX(1,COUNTIF('03_TODAY_MISSION'!B:B, '07_SETUP'!$B$6)), 0)", s: { font: { bold: true }, numFmt: '0%' } }],
        [{ v: "Branch 2 Identity:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!$B$7", s: { font: { bold: true } } }, { v: "Live Compliance:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!I:I, \"<>\", '03_TODAY_MISSION'!B:B, '07_SETUP'!$B$7)/MAX(1,COUNTIF('03_TODAY_MISSION'!B:B, '07_SETUP'!$B$7)), 0)", s: { font: { bold: true }, numFmt: '0%' } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    cpWs['!cols'] = [30, 30, 10, 30].map(w => ({ wch: w }));
    cpWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 2 }, e: { r: 9, c: 3 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 2 }, e: { r: 12, c: 3 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 3 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 1 } }, { s: { r: 15, c: 2 }, e: { r: 15, c: 3 } },
        { s: { r: 17, c: 0 }, e: { r: 17, c: 3 } }
    ];
    addWatermark(cpWs, 22);
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 07_SETUP ---
    const setupData = [
        [], [{ v: "BRANCH MASTER REGISTRY & FACILITY MATRIX", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }], 
        [{ v: "Define branch nicknames and start dates. Set Facility toggles to NO to hide specific modules.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [
            { v: "ID", s: headerBlockStyle }, 
            { v: "BRANCH NICKNAME", s: headerBlockStyle }, 
            { v: "START DATE", s: headerBlockStyle }, 
            { v: "BAR?", s: headerBlockStyle }, 
            { v: "GARDEN?", s: headerBlockStyle }, 
            { v: "VALET?", s: headerBlockStyle }, 
            { v: "POOL?", s: headerBlockStyle }, 
            { v: "NOTES", s: headerBlockStyle }
        ],
        [
            { v: 1, s: centerCellStyle },
            { v: "Main Branch", s: inputStyle },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "Flagship location.", s: leftCellStyle }
        ],
        [
            { v: 2, s: centerCellStyle },
            { v: "Boutique Outlet", s: inputStyle },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: "NO", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "Limited seating area.", s: leftCellStyle }
        ]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 30 }, { wch: 25 }, { wch: 15 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 40 }];
    addBackButton(setupWs);
    addWatermark(setupWs, 20);
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 03_TODAY_MISSION ---
    const missionHeaders = [
        { v: "Date", s: headerBlockStyle }, 
        { v: "Branch Name", s: headerBlockStyle }, 
        { v: "Task ID", s: headerBlockStyle }, 
        { v: "Sector", s: headerBlockStyle }, 
        { v: "Technical Requirement", s: headerBlockStyle }, 
        { v: "Risk", s: headerBlockStyle }, 
        { v: "Freq", s: headerBlockStyle }, 
        { v: "Actioned By (Full Name)", s: headerBlockStyle }, 
        { v: "Date Done", s: headerBlockStyle }, 
        { v: "Sign-Off Required?", s: headerBlockStyle }, 
        { v: "Manager Sign-Off", s: headerBlockStyle }, 
        { v: "Trainer Notes", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "DAILY MISSION LEDGER: PHASED GOVERNANCE FLOW", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    for (let b = 1; b <= 2; b++) {
        for (let i = 0; i < 31; i++) {
            const entryDate = new Date(startDate);
            entryDate.setDate(startDate.getDate() + i);
            
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const freq = (t.frequency || c.frequency || "Daily").toLowerCase();
                    let shouldInclude = false;
                    
                    if (freq === "daily") shouldInclude = true;
                    else if (freq === "weekly" && entryDate.getDay() === 1) shouldInclude = true;
                    else if (freq === "monthly" && entryDate.getDate() === 1) shouldInclude = true;
                    
                    if (shouldInclude) {
                        missionData.push([
                            { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } },
                            { t: 'f', f: `'07_SETUP'!$B$${5 + b}`, s: centerCellStyle },
                            { v: t.id, s: centerCellStyle },
                            { v: c.title, s: leftCellStyle },
                            { v: t.description, s: leftCellStyle },
                            { v: t.riskLevel || "Operational", s: centerCellStyle },
                            { v: freq.toUpperCase(), s: centerCellStyle },
                            { v: "", s: inputStyle }, 
                            { v: "", s: inputStyle }, 
                            { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: t.riskLevel === 'High' ? COLORS.DANGER_RED : COLORS.TEXT_MUTED } } } }, 
                            { v: "", s: inputStyle }, 
                            { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
                        ]);
                    }
                });
            });
        }
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [30, 18, 10, 20, 50, 12, 10, 25, 15, 18, 20, 45].map(w => ({ wch: w }));
    addBackButton(mWs);
    addWatermark(mWs, 20);
    mWs['!autofilter'] = { ref: "A4:L10000" };
    utils.book_append_sheet(wb, mWs, "03_TODAY_MISSION");

    // --- Remaining Dashboard, Handover, ROI sheets ---
    const dashHeaders = [{ v: "BRANCH IDENTITY", s: headerBlockStyle }, { v: "COMPLIANCE SCORE", s: headerBlockStyle }, { v: "PULSE METER", s: headerBlockStyle }, { v: "HEALTH STATUS", s: headerBlockStyle }];
    const dashData = [[], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }], [], dashHeaders];
    [1, 2].forEach(b => {
        dashData.push([
            { t: 'f', f: `'07_SETUP'!B${5+b}`, s: leftCellStyle }, 
            { v: 0.85, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } },
            { v: "OPERATIONAL", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN }, bold: true } } }
        ]);
    });
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [30, 20, 20, 25].map(w => ({ wch: w }));
    addBackButton(dWs);
    addWatermark(dWs, 20);
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
