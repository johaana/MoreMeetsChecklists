
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Enterprise Edition)
 * Features: Clinical Borders, Total Module Load, 365-Day dynamic trail.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    // --- EXECUTIVE COMMAND PALETTE ---
    const COLORS = {
        DEEP_BG: "0A0F19",      
        NAVY_HEADER: "1A2333",  
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        INPUT_ZONE: "FEFCE8",    
        BORDER: "1E293B"         
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

    const intelStyle = {
        font: { ...baseFont, color: { rgb: COLORS.INTEL_GREY }, italic: true, sz: 9 },
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

    const addWatermark = (ws: WorkSheet, row: number = 20) => {
        const brandData = [
            [{ v: "MoreMeets™ | Operational Intelligence Standard v4.2", s: { font: { italic: true, sz: 10, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
            [{ v: "Institutional Governance & Accountability Layer", s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
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
        [{ v: "SYSTEM CONFIGURATION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ 1. DEFINE BRANCHES", l: { Target: "#'02_SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ 2. ASSIGN STAFF", l: { Target: "#'07_PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "DAILY EXECUTION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ 3. MISSION LEDGER", l: { Target: "#'01_MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: COLORS.NAVY_HEADER } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ 4. SHIFT HANDOVER", l: { Target: "#'04_HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "EXECUTIVE OVERSIGHT", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ 5. COMPLIANCE DASHBOARD", l: { Target: "#'03_DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ 6. INCIDENT REGISTRY", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ 7. PROFIT PROTECTION (ROI)", l: { Target: "#'06_ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM IDENTITY STATUS", s: { font: { bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Master Account:", s: { alignment: { horizontal: 'right' }, border: borderStyle } }, { t: 'f', f: "'02_SETUP'!$B$6", s: { font: { bold: true }, border: borderStyle } }, { v: "Status:", s: { alignment: { horizontal: 'right' }, border: borderStyle } }, { v: "LICENSED / ACTIVE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true }, border: borderStyle } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 3 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 3 } },
        { s: { r: 16, c: 0 }, e: { r: 16, c: 3 } }
    ];
    addWatermark(homeWs, 20);
    utils.book_append_sheet(wb, homeWs, "00_HOME_CONSOLE");

    // --- 01. MISSION_LEDGER ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, 
        { v: "Task ID", s: headerStyle }, 
        { v: "Section", s: headerStyle }, 
        { v: "Requirement", s: headerStyle }, 
        { v: "Actioned By", s: headerStyle }, 
        { v: "Time Done", s: headerStyle }, 
        { v: "Consequence", s: { ...headerStyle, fill: { fgColor: { rgb: "334155" } } } }, 
        { v: "Trainer Notes", s: { ...headerStyle, fill: { fgColor: { rgb: "334155" } } } }, 
        { v: "Sign-Off Req?", s: headerStyle }, 
        { v: "Manager Sign-Off", s: headerStyle }
    ];
    const missionData: any[][] = [[], [{ v: "OPERATIONAL MISSION LEDGER: 365-DAY AUDIT TRAIL", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    // For temp page, we show 14 days of full task load to see the structure
    for (let i = 0; i < 14; i++) {
        const entryDate = new Date(startDate);
        entryDate.setDate(startDate.getDate() + i);
        const dayOfWeek = entryDate.getDay(); 
        const isFirstOfMonth = entryDate.getDate() === 1;

        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const freq = (t.frequency || c.frequency || "Daily").toLowerCase();
                let shouldShow = false;
                if (freq.includes("daily")) shouldShow = true;
                if (freq.includes("weekly") && dayOfWeek === 1) shouldShow = true;
                if (freq.includes("monthly") && isFirstOfMonth) shouldShow = true;

                if (shouldShow) {
                    const isHighRisk = t.riskLevel === 'High';
                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'02_SETUP'!$B$6`, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { v: c.title, s: dataStyleLeft },
                        { v: t.description, s: dataStyleLeft },
                        { v: "", s: inputStyle }, 
                        { v: "", s: inputStyle }, 
                        { v: t.consequence || "Operational Risk", s: intelStyle }, 
                        { v: t.trainerNotes || "Follow standard protocol.", s: intelStyle }, 
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } }, 
                        { v: "", s: inputStyle }
                    ]);
                }
            });
        });
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [15, 20, 10, 20, 50, 25, 12, 35, 40, 15, 20].map(w => ({ wch: w }));
    addBackButton(mWs);
    addWatermark(mWs, 20);
    mWs['!autofilter'] = { ref: "A4:K10000" };
    utils.book_append_sheet(wb, mWs, "01_MISSION_LEDGER");

    // --- 02. SETUP ---
    const setupData = [
        [], [{ v: "BRANCH IDENTITY MATRIX", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }], 
        [{ v: "Change the Branch Name in cell B6 to update the entire system.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [
            { v: "CODE", s: headerStyle }, 
            { v: "OFFICIAL BRANCH NAME", s: { ...headerStyle, fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } } } }, 
            { v: "MODULE: BAR", s: headerStyle }, 
            { v: "MODULE: POOL", s: headerStyle }, 
            { v: "STATUS", s: headerStyle }
        ],
        [{ v: "BRANCH-01", s: dataStyleCenter }, { v: "Bandra Main Outlet", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "ACTIVE", s: dataStyleCenter }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [15, 35, 15, 15, 15].map(w => ({ wch: w }));
    addBackButton(setupWs);
    utils.book_append_sheet(wb, setupWs, "02_SETUP");

    // --- 03. DASHBOARD ---
    const dashData = [
        [], [{ v: "EXECUTIVE COMPLIANCE DASHBOARD", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Metric", s: headerStyle }, { v: "Benchmark", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Audit Insight", s: headerStyle }],
        [{ v: "System Completion Rate", s: dataStyleLeft }, { v: "100%", s: dataStyleCenter }, { t: 'f', f: "COUNTIF('01_MISSION_LEDGER'!F:F,\"<>\")/MAX(1,COUNTA('01_MISSION_LEDGER'!E:E)-1)", s: { ...dataStyleCenter, numFmt: '0%', font: { bold: true } } }, { v: "Measures task execution discipline.", s: dataStyleLeft }],
        [{ v: "High-Risk Verifications", s: dataStyleLeft }, { v: "100%", s: dataStyleCenter }, { t: 'f', f: "COUNTIF('01_MISSION_LEDGER'!K:K,\"<>\")/MAX(1,COUNTIF('01_MISSION_LEDGER'!J:J,\"MGR SIGN\"))", s: { ...dataStyleCenter, numFmt: '0%', font: { bold: true, color: { rgb: COLORS.RISK_RED } } } }, { v: "Measures Managerial accountability.", s: dataStyleLeft }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [30, 15, 20, 40].map(w => ({ wch: w }));
    addBackButton(dWs);
    utils.book_append_sheet(wb, dWs, "03_DASHBOARD");

    // --- 04. HANDOVER ---
    const handoverData = [
        [], [{ v: "SHIFT HANDOVER BRIDGE (AM TO PM)", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerStyle }, { v: "Outgoing Mgr", s: headerStyle }, { v: "Incoming Mgr", s: headerStyle }, { v: "Critical Handover Notes", s: headerStyle }, { v: "Cash Check", s: headerStyle }],
        [{ v: new Date(), t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } }, { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "OK", s: inputStyle }]
    ];
    const hWs = utils.aoa_to_sheet(handoverData);
    hWs['!cols'] = [15, 25, 25, 60, 15].map(w => ({ wch: w }));
    addBackButton(hWs);
    utils.book_append_sheet(wb, hWs, "04_HANDOVER");

    // --- 05. INCIDENT LOG ---
    const incidentData = [
        [], [{ v: "INCIDENT & LOSS REGISTRY", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.RISK_RED } } } }], [],
        [{ v: "Date", s: headerStyle }, { v: "Category", s: headerStyle }, { v: "Incident Details", s: headerStyle }, { v: "Loss Value", s: headerStyle }, { v: "MGR Close-out", s: headerStyle }],
        [{ v: new Date(), t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } }, { v: "SAFETY", s: inputStyle }, { v: "", s: inputStyle }, { v: 0, s: inputStyle }, { v: "OPEN", s: inputStyle }]
    ];
    const iWs = utils.aoa_to_sheet(incidentData);
    iWs['!cols'] = [15, 20, 60, 15, 15].map(w => ({ wch: w }));
    addBackButton(iWs);
    utils.book_append_sheet(wb, iWs, "05_INCIDENT_LOG");

    // --- 06. ROI ENGINE ---
    const roiData = [
        [], [{ v: "GOVERNANCE VALUE & ROI CALCULATOR", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Quantifying the financial protection of your system.", s: { font: { italic: true } } }], [],
        [{ v: "Risk Variable", s: headerStyle }, { v: "Revenue at Risk", s: headerStyle }, { v: "Mitigation Multiplier", s: headerStyle }, { v: "Annual Profit Protection", s: headerStyle }],
        [{ v: "Total Monthly Inventory", s: dataStyleLeft }, { v: 100000, s: inputStyle }, { v: "2.0%", s: dataStyleCenter }, { t: 'f', f: "B6*0.02*12", s: { ...dataStyleCenter, font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(roiData);
    rWs['!cols'] = [35, 20, 20, 25].map(w => ({ wch: w }));
    addBackButton(rWs);
    utils.book_append_sheet(wb, rWs, "06_ROI_ENGINE");

    // --- 07. PERSONNEL ---
    const personnelData = [
        [], [{ v: "STAFF-TO-ROLE ASSIGNMENT", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Operational Role", s: headerStyle }, { v: "Staff Full Name", s: headerStyle }, { v: "Mobile / Contact", s: headerStyle }, { v: "Certification Status", s: headerStyle }],
        [{ v: "Head Chef", s: dataStyleLeft }, { v: "", s: inputStyle }, { v: "", s: inputStyle }, { v: "VALID", s: dataStyleCenter }]
    ];
    const pWs = utils.aoa_to_sheet(personnelData);
    pWs['!cols'] = [25, 35, 25, 20].map(w => ({ wch: w }));
    addBackButton(pWs);
    utils.book_append_sheet(wb, pWs, "07_PERSONNEL");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
