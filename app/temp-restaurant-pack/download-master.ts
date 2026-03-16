
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - The Operational Operating System (Enterprise Continuity Edition)
 * Version: Software Lobby (Option A)
 * Features: Central Hub Navigation, Identity Pillars (Date First), Interval-Aware Scheduling
 * Branding: Subtle Above-the-Fold Watermarking (Row 20)
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
        alignment: { horizontal: 'center', vertical: 'center' },
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
        alignment: { horizontal: 'right' }
    };

    const addWatermark = (ws: WorkSheet, row: number = 20) => {
        const brandData = [
            [{ v: "ROCS v4.2 | Restaurant Operations Control System", s: watermarkStyle }],
            [{ v: "Built by MoreMeets | Operational Intelligence Tools", s: watermarkStyle }]
        ];
        utils.sheet_add_aoa(ws, brandData, { origin: `G${row}` });
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
        [{ v: "Your daily home page for operational governance.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "GOVERNANCE INITIALIZATION", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "1. CONFIGURE YOUR FLEET", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK HERE TO SET NICKNAMES & START DATES", l: { Target: "#'07_SETUP'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "2. ACCESS YOUR COMMAND CENTER", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK HERE TO OPEN CONTROL PANEL (APP LOBBY)", l: { Target: "#'01_CONTROL_PANEL'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "3. EXECUTE DAILY MISSIONS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK HERE TO VIEW TODAY'S TECHNICAL TASKS", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "4. MEASURE SAVINGS & VALUE", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "▶ CLICK HERE TO CALCULATE OPERATIONAL VALUE SAVED", l: { Target: "#'06_ROI_CALC'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "--------------------------------------------------------------------------------------------------", s: { font: { color: { rgb: COLORS.BORDER_LIGHT } } } }],
        [{ v: "SUPPORT: more@moremeets.com | © 2025 MoreMeets", s: { font: { sz: 9, italic: true }, alignment: { horizontal: 'center' } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    insWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } },
        { s: { r: 5, c: 0 }, e: { r: 5, c: 5 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 5 } },
        { s: { r: 20, c: 0 }, e: { r: 20, c: 5 } }
    ];
    addWatermark(insWs, 25);
    utils.book_append_sheet(wb, insWs, "00_START_HERE");

    // --- 01. CONTROL PANEL (HUB) ---
    const cpData = [
        [], [],
        [{ v: "RESTAURANT COMMAND CENTER v4.2", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Certified Multi-Branch Governance Framework", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "OPERATIONAL MISSION CONTROL", s: { font: { bold: true, sz: 12 }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ START TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { ...navStyle, font: { ...navStyle.font, sz: 12 } } }, null, null, { v: "▶ VIEW COMPLIANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { ...navStyle, font: { ...navStyle.font, sz: 12 } } }],
        [],
        [{ v: "COMMUNICATION & LIABILITY", s: { font: { bold: true, sz: 12 }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG SHIFT HANDOVER", l: { Target: "#'04_SHIFT_HANDOVER'!A1" }, s: navStyle }, null, null, { v: "▶ LOG INCIDENT OR LOSS", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: navStyle }],
        [],
        [{ v: "ADMINISTRATION & PERFORMANCE", s: { font: { bold: true, sz: 12 }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ SYSTEM SETUP MATRIX", l: { Target: "#'07_SETUP'!A1" }, s: navStyle }, null, null, { v: "▶ ROI & VALUE CALCULATOR", l: { Target: "#'06_ROI_CALC'!A1" }, s: navStyle }],
        [],
        [{ v: "REAL-TIME BRANCH SNAPSHOTS", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!$B$6", s: { font: { bold: true } } }, { v: "Status:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!I:I, \"<>\", '03_TODAY_MISSION'!B:B, '07_SETUP'!$B$6)/MAX(1,COUNTIF('03_TODAY_MISSION'!B:B, '07_SETUP'!$B$6)), 0)", s: { font: { bold: true }, numFmt: '0%' } }],
        [{ v: "Branch 2:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!$B$7", s: { font: { bold: true } } }, { v: "Status:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!I:I, \"<>\", '03_TODAY_MISSION'!B:B, '07_SETUP'!$B$7)/MAX(1,COUNTIF('03_TODAY_MISSION'!B:B, '07_SETUP'!$B$7)), 0)", s: { font: { bold: true }, numFmt: '0%' } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    cpWs['!cols'] = [25, 30, 10, 30].map(w => ({ wch: w }));
    cpWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, 
        { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 4 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 4 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 4 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 3 } }
    ];
    addWatermark(cpWs, 20);
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 07_SETUP ---
    const setupData = [
        [], [{ v: "BRANCH MASTER REGISTRY & FACILITY MATRIX", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }], 
        [{ v: "Add a new row for each branch. Toggle Facility columns to NO to hide related tasks.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [
            { v: "ID", s: headerBlockStyle }, 
            { v: "BRANCH NICKNAME", s: headerBlockStyle }, 
            { v: "YEAR START", s: headerBlockStyle }, 
            { v: "VIEW MISSION FOR", s: headerBlockStyle }, 
            { v: "BAR?", s: headerBlockStyle }, 
            { v: "GARDEN?", s: headerBlockStyle }, 
            { v: "VALET?", s: headerBlockStyle }, 
            { v: "POOL?", s: headerBlockStyle }, 
            { v: "HELPFUL NOTES", s: headerBlockStyle }
        ],
        [
            { v: 1, s: centerCellStyle },
            { v: "Bandra Main", s: inputStyle },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "Primary high-volume flagship.", s: leftCellStyle }
        ],
        [
            { v: 2, s: centerCellStyle },
            { v: "Ghatkopar West", s: inputStyle },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } },
            { v: "NO", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "YES", s: inputStyle },
            { v: "NO", s: inputStyle },
            { v: "Boutique garden seating focus.", s: leftCellStyle }
        ]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addBackButton(setupWs);
    addWatermark(setupWs, 15);
    setupWs['!cols'] = [{ wch: 5 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 40 }];
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 03_TODAY_MISSION ---
    const missionHeaders = [
        { v: "Date", s: headerBlockStyle }, 
        { v: "Branch Name", s: headerBlockStyle }, 
        { v: "Task ID", s: headerBlockStyle }, 
        { v: "Module", s: headerBlockStyle }, 
        { v: "Task Description", s: headerBlockStyle }, 
        { v: "Risk", s: headerBlockStyle }, 
        { v: "Freq", s: headerBlockStyle },
        { v: "Verify?", s: headerBlockStyle }, 
        { v: "Date Done", s: headerBlockStyle }, 
        { v: "Actioned By (Name)", s: headerBlockStyle }, 
        { v: "Verified By (Manager)", s: headerBlockStyle }, 
        { v: "Trainer Notes", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "DAILY MISSION LEDGER: ZERO-AMBIGUITY EXECUTION", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
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
                            { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: centerCellStyle },
                            { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "", s: inputStyle },
                            { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
                        ]);
                    }
                });
            });
        }
    }
    const mWs = utils.aoa_to_sheet(missionData);
    addBackButton(mWs);
    addWatermark(mWs, 20);
    mWs['!cols'] = [12, 18, 10, 20, 50, 12, 10, 12, 15, 30, 20, 45].map(w => ({ wch: w }));
    mWs['!autofilter'] = { ref: "A4:L10000" };
    utils.book_append_sheet(wb, mWs, "03_TODAY_MISSION");

    // --- 02_DASHBOARD ---
    const dashData = [
        [], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH IDENTITY", s: headerBlockStyle }, { v: "COMPLIANCE SCORE", s: headerBlockStyle }, { v: "PULSE METER", s: headerBlockStyle }, { v: "HEALTH STATUS", s: headerBlockStyle }],
        [
            { t: 'f', f: "'07_SETUP'!B6", s: leftCellStyle }, 
            { v: 0.92, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } },
            { v: "OPERATIONAL", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN }, bold: true } } }
        ],
        [
            { t: 'f', f: "'07_SETUP'!B7", s: leftCellStyle }, 
            { v: 0.65, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } },
            { t: 'f', f: "REPT(\"█\",ROUND(B6*20,0))", s: { font: { color: { rgb: COLORS.DANGER_RED } }, alignment: { horizontal: 'center' } } },
            { v: "ATTENTION NEEDED", s: { font: { color: { rgb: COLORS.DANGER_RED }, bold: true } } }
        ]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addBackButton(dWs);
    addWatermark(dWs, 20);
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    // --- 04_SHIFT_HANDOVER ---
    const hoHeaders = [{ v: "Date", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Shift", s: headerBlockStyle }, { v: "Manager", s: headerBlockStyle }, { v: "Critical Issue", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }];
    const hoData = [[], [{ v: "SHIFT HANDOVER COMMUNICATION BRIDGE", s: { font: { sz: 18, bold: true } } }], [], hoHeaders];
    hoData.push([{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { t: 'f', f: "'07_SETUP'!B6", s: inputStyle }, { v: "NIGHT", s: inputStyle }, { v: "Rahul K", s: inputStyle }, { v: "Freezer #2 temp fluctuating.", s: inputStyle }, { v: "Open", s: inputStyle }]);
    const hoWs = utils.aoa_to_sheet(hoData);
    addBackButton(hoWs);
    addWatermark(hoWs, 20);
    utils.book_append_sheet(wb, hoWs, "04_SHIFT_HANDOVER");

    // --- 05_INCIDENT_LOG ---
    const incHeaders = [{ v: "Date", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Details", s: headerBlockStyle }, { v: "Estimated Loss", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }];
    const incData = [[], [{ v: "INCIDENT & LIABILITY LOG", s: { font: { sz: 18, bold: true } } }], [], incHeaders];
    incData.push([{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { t: 'f', f: "'07_SETUP'!B6", s: inputStyle }, { v: "Maintenance", s: inputStyle }, { v: "Fridge failure - stock lost.", s: inputStyle }, { v: 15000, s: inputStyle }, { v: "Logged", s: inputStyle }]);
    const incWs = utils.aoa_to_sheet(incData);
    addBackButton(incWs);
    addWatermark(incWs, 20);
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 06_ROI_CALC ---
    const roiData = [
        [], [{ v: "VALUE SAVED: ROI CALCULATOR", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Metric", s: headerBlockStyle }, { v: "Your Amount", s: headerBlockStyle }, { v: "Industry Benchmarks", s: headerBlockStyle }],
        [{ v: "Average Monthly Revenue", s: leftCellStyle }, { v: 2500000, s: inputStyle }, { v: "Global F&B Median" }],
        [{ v: "Operational Leakage %", s: leftCellStyle }, { v: 0.04, t: 'n', s: { ...inputStyle, numFmt: '0%' } }, { v: "3-5% is standard without governance." }],
        [],
        [{ v: "Potential Annual Loss Without ROCS:", s: { font: { bold: true } } }, { t: 'f', f: "B5*B6*12", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } }, numFmt: '₹#,##0' } }],
        [{ v: "Value Saved With This System (50% reduction):", s: { font: { bold: true } } }, { t: 'f', f: "B8*0.5", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, numFmt: '₹#,##0' } }]
    ];
    const roiWs = utils.aoa_to_sheet(roiData);
    addBackButton(roiWs);
    addWatermark(roiWs, 20);
    utils.book_append_sheet(wb, roiWs, "06_ROI_CALC");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
