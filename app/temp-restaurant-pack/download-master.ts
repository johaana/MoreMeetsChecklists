
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - The Operational Operating System (Enterprise Continuity Edition)
 * Normalized Architecture: TASK_LIBRARY -> MASTER_LEDGER (Interface)
 * Features: Facility Switchboard, Multi-Branch Identity, Full-Name Accountability, Phased Start Dates
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
        ALERT_RED: "FFC7CE"
    };

    const borderThin = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_LIGHT } }
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 8 },
        fill: { fgColor: { rgb: COLORS.PRIME_NAVY } },
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

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "00 START HERE", target: "00_START_HERE" },
            { v: "01 CONTROL PANEL", target: "01_CONTROL_PANEL" },
            { v: "02 DASHBOARD", target: "02_DASHBOARD" },
            { v: "03 TODAY'S MISSION", target: "03_TODAY_MISSION" },
            { v: "04 SHIFT HANDOVER", target: "04_SHIFT_HANDOVER" },
            { v: "05 INCIDENT LOG", target: "05_INCIDENT_LOG" },
            { v: "06 ROI CALCULATOR", target: "06_ROI_CALC" },
            { v: "07 SETUP MATRIX", target: "07_SETUP" }
        ];
        const navData = [
            navItems.map(item => ({ 
                v: item.v, 
                l: { Target: `#'${item.target}'!A1` }, 
                s: navStyle 
            }))
        ];
        utils.sheet_add_aoa(ws, navData, { origin: "A1" });
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
        ws['!cols'] = Array(8).fill({ wch: 25 }); // Expanded for readability

        // Add Subtle Watermark at bottom
        utils.sheet_add_aoa(ws, [[{ v: "MoreMeets™ | Operational Intelligence Standard v4.2", s: watermarkStyle }]], { origin: "H100" });
    };

    // --- 00. START HERE ---
    const insData = [
        [], [],
        [{ v: "WELCOME TO THE ROCS v4.2 ENTERPRISE SUITE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Follow these 4 steps to activate your operational infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "STEP 1: TELL US ABOUT YOUR BRANCH", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Click here to name your branches and toggle facilities (Bar, Garden, etc.)", l: { Target: "#'07_SETUP'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 2: ACTIVATE TODAY'S MISSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Staff opens TODAY'S MISSION to see tasks sorted by Risk and Branch.", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 3: SHIFT CONTINUITY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Ensure morning/night teams are talking via the SHIFT HANDOVER log.", l: { Target: "#'04_SHIFT_HANDOVER'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }],
        [],
        [{ v: "STEP 4: COMMAND REVIEW", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Review the DASHBOARD and ROI CALCULATOR to see money saved.", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    utils.book_append_sheet(wb, insWs, "00_START_HERE");

    // --- 07. SETUP (FACILITY MATRIX) ---
    const setupData = [
        [], [{ v: "FACILITY MATRIX & BRANCH SETUP", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }], 
        [{ v: "Define branch identity and start dates. Set Module to NO to hide related tasks.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "CONFIG PROPERTY", s: headerBlockStyle }, { v: "BRANCH 1", s: headerBlockStyle }, { v: "BRANCH 2", s: headerBlockStyle }, { v: "HELPFUL NOTES", s: headerBlockStyle }],
        [{ v: "Branch Nickname", s: leftCellStyle }, { v: "Bandra Main", s: inputStyle }, { v: "Ghatkopar West", s: inputStyle }, { v: "Enter the name of your outlets." }],
        [{ v: "Operational Year Start", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Phased rollout support." }],
        [{ v: "View Tasks For Date", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Manual date override." }],
        [],
        [{ v: "MODULE TOGGLES (YES/NO)", s: { font: { bold: true } } }],
        [{ v: "Bar / Spirits Module", s: leftCellStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "Spirit counts, line cleaning." }],
        [{ v: "Outdoor / Garden Module", s: leftCellStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "Landscaping, path safety." }],
        [{ v: "Valet / Parking Module", s: leftCellStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "Key security, driver audits." }],
        [{ v: "Pool / Water Module", s: leftCellStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "Chemical logs, rescue gear." }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 40 }];
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 01. CONTROL PANEL ---
    const cpData = [
        [], [],
        [{ v: "RESTAURANT COMMAND CENTER v4.2", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Certified Operational Governance Framework", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ OPEN TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ VIEW COMPLIANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG INCIDENT OR LOSS", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH SNAPSHOTS", s: { font: { bold: true }, alignment: { horizontal: 'center' } } }],
        [{ v: "Branch 1 (Today):", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!A:A, '07_SETUP'!$B$6, '03_TODAY_MISSION'!I:I, \"<>\") / COUNTIF('03_TODAY_MISSION'!A:A, '07_SETUP'!$B$6), 0)", s: { font: { bold: true }, numFmt: '0%' } }],
        [{ v: "Branch 2 (Today):", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!A:A, '07_SETUP'!$C$6, '03_TODAY_MISSION'!I:I, \"<>\") / COUNTIF('03_TODAY_MISSION'!A:A, '07_SETUP'!$C$6), 0)", s: { font: { bold: true }, numFmt: '0%' } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    addNavBar(cpWs);
    cpWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } }];
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 03. TODAY'S MISSION ---
    const missionHeaders = [
        { v: "Branch Name", s: headerBlockStyle }, { v: "Date", s: headerBlockStyle }, { v: "Task ID", s: headerBlockStyle }, 
        { v: "Module", s: headerBlockStyle }, { v: "Task Description", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle },
        { v: "Risk", s: headerBlockStyle }, { v: "Verify?", s: headerBlockStyle }, 
        { v: "Date Done", s: headerBlockStyle }, { v: "Actioned By (Full Name)", s: headerBlockStyle }, 
        { v: "Verified By (Manager)", s: headerBlockStyle }, { v: "Trainer Notes", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "TODAY'S MISSION: OPERATIONAL EXECUTION LEDGER", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    for (let b = 1; b <= 2; b++) {
        for (let i = 0; i < 30; i++) {
            const entryDate = new Date(startDate);
            entryDate.setDate(startDate.getDate() + i);
            
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    missionData.push([
                        { t: 'f', f: b === 1 ? "'07_SETUP'!$B$6" : "'07_SETUP'!$C$6", s: centerCellStyle },
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } },
                        { v: t.id, s: centerCellStyle },
                        { v: c.title, s: leftCellStyle },
                        { v: t.description, s: leftCellStyle },
                        { v: (t.frequency || c.frequency || "Daily").toUpperCase(), s: centerCellStyle },
                        { v: t.riskLevel || "Operational", s: centerCellStyle },
                        { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: centerCellStyle },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
                    ]);
                });
            });
        }
    }
    const mWs = utils.aoa_to_sheet(missionData);
    addNavBar(mWs);
    mWs['!cols'] = [18, 12, 10, 20, 50, 10, 12, 12, 15, 30, 20, 45].map(w => ({ wch: w }));
    mWs['!autofilter'] = { ref: "A4:L5000" };
    utils.book_append_sheet(wb, mWs, "03_TODAY_MISSION");

    // --- 04. SHIFT HANDOVER ---
    const hoHeaders = [{ v: "Date", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Shift", s: headerBlockStyle }, { v: "Manager", s: headerBlockStyle }, { v: "Critical Issue", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }];
    const hoData = [[], [{ v: "SHIFT HANDOVER COMMUNICATION BRIDGE", s: { font: { sz: 18, bold: true } } }], [], hoHeaders];
    hoData.push([{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Bandra Main", s: inputStyle }, { v: "NIGHT", s: inputStyle }, { v: "Rahul K", s: inputStyle }, { v: "Freezer #2 temp fluctuating.", s: inputStyle }, { v: "Open", s: inputStyle }]);
    const hoWs = utils.aoa_to_sheet(hoData);
    addNavBar(hoWs);
    utils.book_append_sheet(wb, hoWs, "04_SHIFT_HANDOVER");

    // --- 05. INCIDENT LOG ---
    const incHeaders = [{ v: "Date", s: headerBlockStyle }, { v: "Branch", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Details", s: headerBlockStyle }, { v: "Estimated Loss", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }];
    const incData = [[], [{ v: "INCIDENT & LIABILITY LOG", s: { font: { sz: 18, bold: true } } }], [], incHeaders];
    incData.push([{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Bandra Main", s: inputStyle }, { v: "Maintenance", s: inputStyle }, { v: "Fridge failure - stock lost.", s: inputStyle }, { v: 15000, s: inputStyle }, { v: "Logged", s: inputStyle }]);
    const incWs = utils.aoa_to_sheet(incData);
    addNavBar(incWs);
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 06. ROI CALCULATOR ---
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
    addNavBar(roiWs);
    utils.book_append_sheet(wb, roiWs, "06_ROI_CALC");

    // --- 02. DASHBOARD ---
    const dashData = [
        [],
        [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "BRANCH", s: headerBlockStyle }, { v: "COMPLIANCE SCORE", s: headerBlockStyle }, { v: "PULSE METER", s: headerBlockStyle }, { v: "HEALTH STATUS", s: headerBlockStyle }],
        [
            { t: 'f', f: "'07_SETUP'!B6", s: leftCellStyle }, 
            { v: 0.92, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } },
            { v: "OPERATIONAL", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN }, bold: true } } }
        ],
        [
            { t: 'f', f: "'07_SETUP'!C6", s: leftCellStyle }, 
            { v: 0.65, t: 'n', s: { ...centerCellStyle, numFmt: '0%' } },
            { t: 'f', f: "REPT(\"█\",ROUND(B6*20,0))", s: { font: { color: { rgb: COLORS.DANGER_RED } }, alignment: { horizontal: 'center' } } },
            { v: "ATTENTION NEEDED", s: { font: { color: { rgb: COLORS.DANGER_RED }, bold: true } } }
        ]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addNavBar(dWs);
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 3 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
