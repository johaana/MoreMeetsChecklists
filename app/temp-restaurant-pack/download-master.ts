
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - The Universal Operational OS (Home Console Edition)
 * Features: Single Hub-and-Spoke Navigation, Phased Branch Rollout, and Risk-Based Sign-off.
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
        BRAND_LIGHT: "F9FAFB"
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
        alignment: { horizontal: 'left', vertical: 'center' },
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
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'00_HOME_CONSOLE'!A1" }, 
            s: backButtonStyle 
        }]], { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 00. HOME CONSOLE (THE UNIFIED HUB) ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE v4.2", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Institutional Standard for Multi-Unit Governance", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "INITIALIZATION & SETUP", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ STEP 1: CONFIGURE BRANCHES", l: { Target: "#'02_SETUP'!A1" }, s: navStyle }, null, null, { v: "▶ STEP 2: ASSIGN PERSONNEL", l: { Target: "#'03_PERSONNEL'!A1" }, s: navStyle }],
        [],
        [{ v: "DAILY OPERATIONAL FLOW", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ START TODAY'S MISSION", l: { Target: "#'01_MISSION_LEDGER'!A1" }, s: { ...navStyle, font: { ...navStyle.font, sz: 11, color: { rgb: COLORS.GOLD } } } }, null, null, { v: "▶ SHIFT HANDOVER BRIDGE", l: { Target: "#'04_HANDOVER'!A1" }, s: navStyle }],
        [],
        [{ v: "MONITORING & GOVERNANCE", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ EXECUTIVE DASHBOARD", l: { Target: "#'05_DASHBOARD'!A1" }, s: navStyle }, null, null, { v: "▶ INCIDENT & LIABILITY LOG", l: { Target: "#'06_INCIDENT_LOG'!A1" }, s: navStyle }],
        [],
        [{ v: "FINANCIAL INTELLIGENCE", s: { font: { bold: true, sz: 10, color: { rgb: COLORS.SLATE_HEADER } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ ROI & LEAKAGE CALCULATOR", l: { Target: "#'07_ROI_ENGINE'!A1" }, s: navStyle }, null, null, { v: "▶ SYSTEM DOCUMENTATION", l: { Target: "#'00_HOME_CONSOLE'!A1" }, s: navStyle }],
        [],
        [{ v: "LIVE FLEET STATUS", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [{ v: "Main Branch:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'02_SETUP'!$B$6", s: { font: { bold: true } } }, { v: "Status:", s: { alignment: { horizontal: 'right' } } }, { v: "ACTIVE", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN }, bold: true } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [30, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
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
    addWatermark(homeWs, 20);
    utils.book_append_sheet(wb, homeWs, "00_HOME_CONSOLE");

    // --- 01. MISSION_LEDGER ---
    const missionHeaders = [
        { v: "Date", s: headerBlockStyle }, 
        { v: "Branch Name", s: headerBlockStyle }, 
        { v: "Task ID", s: headerBlockStyle }, 
        { v: "Section", s: headerBlockStyle }, 
        { v: "Technical Requirement", s: headerBlockStyle }, 
        { v: "Risk", s: headerBlockStyle }, 
        { v: "Actioned By (Full Name)", s: headerBlockStyle }, 
        { v: "Date Done", s: headerBlockStyle }, 
        { v: "Sign-Off Required?", s: headerBlockStyle }, 
        { v: "Manager Sign-Off", s: headerBlockStyle }, 
        { v: "Trainer Notes", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "OPERATIONAL MISSION LEDGER", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    // Generate 31 days of tasks for 2 demo branches
    const startDate = new Date();
    for (let b = 1; b <= 2; b++) {
        for (let i = 0; i < 31; i++) {
            const entryDate = new Date(startDate);
            entryDate.setDate(startDate.getDate() + i);
            
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'02_SETUP'!$B$${5 + b}`, s: centerCellStyle },
                        { v: t.id, s: centerCellStyle },
                        { v: c.title, s: leftCellStyle },
                        { v: t.description, s: leftCellStyle },
                        { v: t.riskLevel || "Operational", s: centerCellStyle },
                        { v: "", s: inputStyle }, // Actioned By
                        { v: "", s: inputStyle }, // Date Done
                        { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: { ...centerCellStyle, font: { bold: true, color: { rgb: t.riskLevel === 'High' ? COLORS.DANGER_RED : COLORS.TEXT_MUTED } } } }, 
                        { v: "", s: inputStyle }, // Manager Sign-off
                        { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
                    ]);
                });
            });
        }
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [30, 18, 10, 20, 50, 12, 25, 15, 18, 20, 45].map(w => ({ wch: w }));
    addBackButton(mWs);
    addWatermark(mWs, 20);
    mWs['!autofilter'] = { ref: "A4:K10000" };
    utils.book_append_sheet(wb, mWs, "01_MISSION_LEDGER");

    // --- 02. SETUP (BRANCH MATRIX) ---
    const setupData = [
        [], [{ v: "BRANCH MASTER REGISTRY & FACILITY MATRIX", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }], 
        [{ v: "Add new branches as rows. Set Facility toggles to NO to hide specific modules.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [
            { v: "ID", s: headerBlockStyle }, 
            { v: "BRANCH NICKNAME", s: headerBlockStyle }, 
            { v: "START DATE", s: headerBlockStyle }, 
            { v: "BAR?", s: headerBlockStyle }, 
            { v: "GARDEN?", s: headerBlockStyle }, 
            { v: "VALET?", s: headerBlockStyle }, 
            { v: "POOL?", s: headerBlockStyle }, 
            { v: "STATUS", s: headerBlockStyle }
        ],
        [{ v: 1, s: centerCellStyle }, { v: "Bandra Main", s: inputStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "ACTIVE", s: leftCellStyle }],
        [{ v: 2, s: centerCellStyle }, { v: "Ghatkopar West", s: inputStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "ACTIVE", s: leftCellStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [30, 25, 15, 10, 10, 10, 10, 15].map(w => ({ wch: w }));
    addBackButton(setupWs);
    utils.book_append_sheet(wb, setupWs, "02_SETUP");

    // --- 03. PERSONNEL ---
    const personnelData = [
        [], [{ v: "PERSONNEL REGISTER & ROLE ASSIGNMENT", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Full Name", s: headerBlockStyle }, { v: "Primary Role", s: headerBlockStyle }, { v: "Branch Code", s: headerBlockStyle }, { v: "Emp ID", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: "Staff Member 1", s: inputStyle }, { v: "Head Chef", s: inputStyle }, { v: "1", s: inputStyle }, { v: "E001", s: inputStyle }, { v: "ACTIVE", s: centerCellStyle }]
    ];
    const pWs = utils.aoa_to_sheet(personnelData);
    pWs['!cols'] = [30, 30, 20, 15, 15, 15].map(w => ({ wch: w }));
    addBackButton(pWs);
    utils.book_append_sheet(wb, pWs, "03_PERSONNEL");

    // --- 04. HANDOVER ---
    const handoverData = [
        [], [{ v: "SHIFT HANDOVER BRIDGE", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "AM Manager", s: headerBlockStyle }, { v: "PM Manager", s: headerBlockStyle }, { v: "Critical Handover Notes", s: headerBlockStyle }, { v: "Verification", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { t: 'f', f: "'02_SETUP'!$B$6" }, { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "", s: { ...inputStyle, alignment: { horizontal: 'left' } } }, { v: "PENDING", s: centerCellStyle }]
    ];
    const hWs = utils.aoa_to_sheet(handoverData);
    hWs['!cols'] = [30, 20, 20, 20, 60, 15].map(w => ({ wch: w }));
    addBackButton(hWs);
    utils.book_append_sheet(wb, hWs, "04_HANDOVER");

    // --- 05. DASHBOARD ---
    const dashData = [
        [], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Branch Identity", s: headerBlockStyle }, { v: "Compliance Score", s: headerBlockStyle }, { v: "Pulse Meter", s: headerBlockStyle }, { v: "Last Incident", s: headerBlockStyle }],
        [{ t: 'f', f: "'02_SETUP'!$B$6" }, { v: 0.94, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } }, { v: "██████████████████░░", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } } } }, { v: "None", s: centerCellStyle }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [30, 25, 30, 25].map(w => ({ wch: w }));
    addBackButton(dWs);
    utils.book_append_sheet(wb, dWs, "05_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
