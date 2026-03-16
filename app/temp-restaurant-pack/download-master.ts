
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - The Universal Operational OS (Clinical Command Edition)
 * Features: Multi-Branch Identity Linkage, Left-Aligned Hub Navigation, and High-Contrast Executive UI.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    // --- EXECUTIVE COMMAND PALETTE ---
    const COLORS = {
        DEEP_BG: "0A0F19",      // Deepest Navy
        NAVY_HEADER: "1A2333",  // Header Slate
        PRIMARY_GREEN: "2EB86B", // MoreMeets Brand Green
        ACCENT_GOLD: "F5A623",   // Executive Gold
        RISK_RED: "E11D48",      // High Risk Red
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INPUT_ZONE: "FEFCE8",    // Clean Ivory Input
        BORDER: "1E293B"         // Subtle UI Border
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
        fill: { fgColor: { rgb: COLORS.DEEP_BG } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: borderStyle
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.NAVY_HEADER } },
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

    const inputStyle = {
        ...dataStyleCenter,
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const watermarkStyle = {
        font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } },
        alignment: { horizontal: 'center' }
    };

    const addWatermark = (ws: WorkSheet, row: number = 20) => {
        const brandData = [
            [{ v: "MoreMeets™ | Operational Intelligence Standard v4.2", s: watermarkStyle }],
            [{ v: "Authorized System for Institutional Governance", s: watermarkStyle }]
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
            s: navStyle 
        }]], { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 00. HOME CONSOLE ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.2", s: { font: { italic: true, sz: 12, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "1. INITIALIZATION (Setup Once)", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ CONFIGURE BRANCHES", l: { Target: "#'02_SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ ASSIGN PERSONNEL", l: { Target: "#'03_PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "2. DAILY EXECUTION (Shift Workflow)", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ OPEN TODAY'S MISSION", l: { Target: "#'01_MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: COLORS.NAVY_HEADER } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ SHIFT HANDOVER BRIDGE", l: { Target: "#'04_HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "3. GOVERNANCE & ROI (Owner View)", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ EXECUTIVE DASHBOARD", l: { Target: "#'05_DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ ROI & LOSS ENGINE", l: { Target: "#'00_HOME_CONSOLE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM IDENTITY STATUS", s: { font: { bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Master Account:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'02_SETUP'!$B$6", s: { font: { bold: true } } }, { v: "Status:", s: { alignment: { horizontal: 'right' } } }, { v: "LICENSED / ACTIVE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 3 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 3 } }
    ];
    addWatermark(homeWs, 20);
    utils.book_append_sheet(wb, homeWs, "00_HOME_CONSOLE");

    // --- 01. MISSION_LEDGER ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, 
        { v: "Branch Name (Dynamic)", s: headerStyle }, 
        { v: "Task ID", s: headerStyle }, 
        { v: "Section", s: headerStyle }, 
        { v: "Requirement", s: headerStyle }, 
        { v: "Actioned By (Name)", s: headerStyle }, 
        { v: "Time Done", s: headerStyle }, 
        { v: "Verification", s: headerStyle }, 
        { v: "Manager Sign-Off", s: headerStyle }, 
        { v: "Critical Notes", s: headerStyle }
    ];
    const missionData: any[][] = [[], [{ v: "DAILY OPERATIONAL MISSION LEDGER", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    for (let b = 1; b <= 2; b++) {
        for (let i = 0; i < 31; i++) {
            const entryDate = new Date(startDate);
            entryDate.setDate(startDate.getDate() + i);
            
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const isHighRisk = t.riskLevel === 'High';
                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'02_SETUP'!$B$${5 + b}`, s: dataStyleCenter }, // DYNAMIC BRANCH PULL
                        { v: t.id, s: dataStyleCenter },
                        { v: c.title, s: dataStyleLeft },
                        { v: t.description, s: dataStyleLeft },
                        { v: "", s: inputStyle }, 
                        { v: "", s: inputStyle }, 
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } }, 
                        { v: "", s: inputStyle }, 
                        { v: t.trainerNotes || "", s: { ...dataStyleLeft, font: { italic: true, sz: 9 } } }
                    ]);
                });
            });
        }
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [30, 20, 10, 20, 50, 25, 12, 15, 20, 40].map(w => ({ wch: w }));
    addBackButton(mWs);
    addWatermark(mWs, 20);
    mWs['!autofilter'] = { ref: "A4:J10000" };
    utils.book_append_sheet(wb, mWs, "01_MISSION_LEDGER");

    // --- 02. SETUP (THE SOURCE OF TRUTH) ---
    const setupData = [
        [], [{ v: "BRANCH MASTER REGISTRY", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }], 
        [{ v: "The 'Branch Nickname' defined here will auto-populate the entire system.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [
            { v: "ID", s: headerStyle }, 
            { v: "BRANCH NICKNAME (INPUT)", s: { ...headerStyle, fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } } } }, 
            { v: "FACILITY: BAR?", s: headerStyle }, 
            { v: "FACILITY: VALET?", s: headerStyle }, 
            { v: "OPENING DATE", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }
        ],
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "ACTIVE", s: dataStyleCenter }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "ACTIVE", s: dataStyleCenter }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [30, 30, 15, 15, 20, 15].map(w => ({ wch: w }));
    addBackButton(setupWs);
    utils.book_append_sheet(wb, setupWs, "02_SETUP");

    // --- 03. PERSONNEL ---
    const personnelData = [
        [], [{ v: "PERSONNEL DIRECTORY", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Name", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Access Level", s: headerStyle }],
        [{ v: "John Doe", s: inputStyle }, { v: "Head Chef", s: inputStyle }, { t: 'f', f: "'02_SETUP'!$B$6" }, { v: "ADMIN", s: dataStyleCenter }]
    ];
    const pWs = utils.aoa_to_sheet(personnelData);
    pWs['!cols'] = [30, 30, 25, 20].map(w => ({ wch: w }));
    addBackButton(pWs);
    utils.book_append_sheet(wb, pWs, "03_PERSONNEL");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
