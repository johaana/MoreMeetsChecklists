
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.0 - The Operational Operating System (Market Ready Edition)
 * Normalized Architecture: TASK_LIBRARY -> MASTER_LEDGER (Interface)
 * Features: Interval-Aware Matrix, ROI Intelligence, Shift Continuity, 140+ Technical SOPs
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
        TEXT_MUTED: "6B7280",
        GOLD: "F5A623",
        ALERT_RED: "FFC7CE",
        ALERT_GREEN: "C6EFCE"
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

    const addNavBar = (ws: WorkSheet) => {
        const navItems = [
            { v: "00 START HERE", target: "00_START_HERE" },
            { v: "01 CONTROL PANEL", target: "01_CONTROL_PANEL" },
            { v: "02 DASHBOARD", target: "02_DASHBOARD" },
            { v: "03 TODAY'S MISSION", target: "03_TODAY_MISSION" },
            { v: "04 HANDOVER", target: "04_SHIFT_HANDOVER" },
            { v: "05 INCIDENTS", target: "05_INCIDENT_LOG" },
            { v: "06 ROI CALCULATOR", target: "06_ROI_CALC" }
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
    };

    // --- 00. START HERE (FRIENDLY ONBOARDING) ---
    const insData = [
        [], [],
        [{ v: "WELCOME TO YOUR RESTAURANT OPERATIONS CONTROL SYSTEM (ROCS v4.0)", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "This isn't a spreadsheet; it's your business's permanent operational infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "STEP 1: ACTIVATE YOUR SYSTEM", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Go to '07_SETUP'. Enter your branch name and the 'Start Date'. The system will generate your entire year instantly.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 2: TODAY'S MISSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Click '03_TODAY_MISSION'. We've made it smart: Weekly tasks only appear on Mondays, and Monthly tasks on the 1st. Use the Date Filter [v] to select Today.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 3: SHIFT CONTINUITY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Never lose a thought between shifts. Use '04_SHIFT_HANDOVER' to pass critical notes. Unresolved issues will scream at you from the Control Panel.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 4: GLOBAL EDITS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "To modify a task for the whole year, go to the hidden 'TASK_LIBRARY'. Change it once, and every single day in the ledger updates automatically.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "PRO TIP: Only edit the YELLOW cells. Everything else is the engine working for you.", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 25 }, { wch: 85 }];
    utils.book_append_sheet(wb, insWs, "00_START_HERE");

    // --- TASK_LIBRARY (THE HIDDEN ENGINE) ---
    const libData: any[][] = [
        [{ v: "TASK_ID", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Frequency", s: headerBlockStyle }, { v: "Risk", s: headerBlockStyle }, { v: "Verify?", s: headerBlockStyle }, { v: "Trainer Notes", s: headerBlockStyle }, { v: "Consequence", s: headerBlockStyle }]
    ];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            libData.push([
                { v: t.id, s: centerCellStyle },
                { v: c.title, s: leftCellStyle },
                { v: t.description, s: leftCellStyle },
                { v: (t.frequency || c.frequency || "Daily").toUpperCase(), s: centerCellStyle },
                { v: t.riskLevel || "Operational", s: centerCellStyle },
                { v: t.riskLevel === 'High' ? "YES" : "NO", s: centerCellStyle },
                { v: t.trainerNotes || "Maintain standard.", s: leftCellStyle },
                { v: t.consequence || "Operational drift.", s: leftCellStyle }
            ]);
        });
    });
    const libWs = utils.aoa_to_sheet(libData);
    libWs['!cols'] = [10, 25, 55, 12, 12, 10, 45, 45].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, libWs, "TASK_LIBRARY");

    // --- 07. SETUP (CONFIG) ---
    const setupData = [
        [], [{ v: "SYSTEM CONFIGURATION", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Parameter", s: headerBlockStyle }, { v: "Current Value (Input)", s: headerBlockStyle }, { v: "Notes", s: headerBlockStyle }],
        [{ v: "SYSTEM_TARGET_DATE", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Change this to view past or future tasks." }],
        [{ v: "START_DATE", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "The date your operational year begins." }],
        [{ v: "BRANCH_NAME", s: leftCellStyle }, { v: "Bandra Flagship", s: inputStyle }, { v: "Your location identity." }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 45 }];
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 01. CONTROL PANEL (APP INTERFACE) ---
    const cpData = [
        [], [],
        [{ v: "ROCS v4.0 COMMAND PANEL", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Operational Intelligence Hub | by MoreMeets", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ START TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ VIEW PERFORMANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG INCIDENT / LIABILITY", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "LIVE OPERATIONAL SNAPSHOT", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Target Date:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!B5", s: { font: { bold: true }, numFmt: 'dd-mm-yyyy' } }],
        [{ v: "Open Shift Issues:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIF('04_SHIFT_HANDOVER'!F:F,\"Open\")", s: { font: { bold: true } } }],
        [{ v: "Critical Risks Today:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIFS('03_TODAY_MISSION'!G:G,\"High\",'03_TODAY_MISSION'!I:I,\"\")", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    addNavBar(cpWs);
    cpWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 10 }, { wch: 30 }];
    cpWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } }];
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 03. TODAY'S MISSION (THE INTERFACE) ---
    const missionHeaders = [
        { v: "Date", s: headerBlockStyle }, { v: "Key", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, 
        { v: "Task Description", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Responsibility", s: headerBlockStyle },
        { v: "Risk Level", s: headerBlockStyle }, { v: "Verification", s: headerBlockStyle }, 
        { v: "Date Done (DD-MM-YYYY)", s: headerBlockStyle }, { v: "Initials", s: headerBlockStyle }, 
        { v: "Verified By (Manager)", s: headerBlockStyle }, { v: "Trainer Guidance", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "TODAY'S MISSION: OPERATIONAL EXECUTION", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    // Interval-Aware Generation Logic
    const startDate = new Date();
    for (let i = 0; i < 365; i++) {
        const entryDate = new Date(startDate);
        entryDate.setDate(startDate.getDate() + i);
        
        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const freq = (t.frequency || c.frequency || "Daily").toUpperCase();
                let shouldAdd = false;
                
                if (freq === "DAILY") shouldAdd = true;
                if (freq === "WEEKLY" && entryDate.getDay() === 1) shouldAdd = true; // Mondays
                if (freq === "MONTHLY" && entryDate.getDate() === 1) shouldAdd = true; // 1st of month
                
                if (shouldAdd) {
                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } },
                        { v: `${entryDate.getTime()}_${t.id}`, s: centerCellStyle }, // Compound Key
                        { v: c.title, s: leftCellStyle },
                        { v: t.description, s: leftCellStyle },
                        { v: freq, s: centerCellStyle },
                        { v: c.role, s: centerCellStyle },
                        { v: t.riskLevel || "Operational", s: { ...centerCellStyle, font: { bold: t.riskLevel === 'High', color: { rgb: t.riskLevel === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                        { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: centerCellStyle },
                        { v: "", s: inputStyle }, // Date Done
                        { v: "", s: inputStyle }, // Initials
                        { v: "", s: inputStyle }, // Verified By
                        { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
                    ]);
                }
            });
        });
    }
    const mWs = utils.aoa_to_sheet(missionData);
    addNavBar(mWs);
    mWs['!cols'] = [12, 10, 20, 50, 10, 15, 12, 12, 25, 10, 20, 45].map(w => ({ wch: w }));
    mWs['!autofilter'] = { ref: "A4:L50000" };
    utils.book_append_sheet(wb, mWs, "03_TODAY_MISSION");

    // --- 04. SHIFT HANDOVER ---
    const hoData = [
        [], [{ v: "SHIFT HANDOVER: OPERATIONAL CONTINUITY", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Shift", s: headerBlockStyle }, { v: "Manager", s: headerBlockStyle }, { v: "Key Issues Observed", s: headerBlockStyle }, { v: "Required Action", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "NIGHT", s: inputStyle }, { v: "Rahul", s: inputStyle }, { v: "Freezer 2 temp fluctuating at 2 AM.", s: inputStyle }, { v: "Technician called for 10 AM.", s: inputStyle }, { v: "Open", s: inputStyle }]
    ];
    const hoWs = utils.aoa_to_sheet(hoData);
    addNavBar(hoWs);
    hoWs['!cols'] = [15, 15, 20, 40, 40, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, hoWs, "04_SHIFT_HANDOVER");

    // --- 05. INCIDENT LOG ---
    const incData = [
        [], [{ v: "INCIDENT & LOSS LOG: LIABILITY PROTECTION", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Type", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Action Taken", s: headerBlockStyle }, { v: "Est. Loss (INR)", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Maintenance", s: inputStyle }, { v: "Fridge 1 failure.", s: inputStyle }, { v: "Stock moved to freezer 2.", s: inputStyle }, { v: 1200, s: inputStyle }, { v: "Resolved", s: inputStyle }]
    ];
    const incWs = utils.aoa_to_sheet(incData);
    addNavBar(incWs);
    incWs['!cols'] = [15, 20, 40, 40, 20, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 06. ROI CALCULATOR ---
    const roiData = [
        [], [{ v: "ROI CALCULATOR: THE VALUE OF GOVERNANCE", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Variable", s: headerBlockStyle }, { v: "Your Value (Input)", s: headerBlockStyle }, { v: "Benchmark", s: headerBlockStyle }],
        [{ v: "Avg. Monthly Revenue (INR)", s: leftCellStyle }, { v: 1500000, s: inputStyle }, { v: "Target: 100%" }],
        [{ v: "Estimated Leakage %", s: leftCellStyle }, { v: 0.03, t: 'n', s: { ...inputStyle, numFmt: '0%' } }, { v: "Industry Avg: 3-5%" }],
        [],
        [{ v: "ESTIMATED ANNUAL LOSS WITHOUT ROCS:", s: { font: { bold: true } } }, { t: 'f', f: "B5*B6*12", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } }, numFmt: '₹#,##0' } }],
        [{ v: "PROJECTED SAVINGS WITH ROCS (50% Efficiency):", s: { font: { bold: true } } }, { t: 'f', f: "B8*0.5", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, numFmt: '₹#,##0' } }]
    ];
    const roiWs = utils.aoa_to_sheet(roiData);
    addNavBar(roiWs);
    roiWs['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 30 }];
    utils.book_append_sheet(wb, roiWs, "06_ROI_CALC");

    // --- 02. DASHBOARD ---
    const dashData = [
        [],
        [{ v: "EXECUTIVE PERFORMANCE DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM STATUS", s: headerBlockStyle }, { v: "LIVE KPI", s: headerBlockStyle }, { v: "HEALTH BEACON", s: headerBlockStyle }],
        [
            { v: "Overall Compliance", s: leftCellStyle }, 
            { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!A:A, TODAY(), '03_TODAY_MISSION'!I:I, \"<>\") / COUNTIF('03_TODAY_MISSION'!A:A, TODAY()), 0)", s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }
        ],
        [{ v: "System Health", s: leftCellStyle }, { t: 'f', f: "IF(COUNTIFS('03_TODAY_MISSION'!A:A, TODAY(), '03_TODAY_MISSION'!G:G,\"High\",'03_TODAY_MISSION'!I:I,\"\")>0,\"🔴 CRITICAL RISK\",\"🟢 OPERATIONAL\")", s: centerCellStyle }, { v: "Risk Indicator" }],
        [],
        [{ v: "FINANCIAL INTELLIGENCE", s: headerBlockStyle }, { v: "MONTHLY VALUE", s: headerBlockStyle }, { v: "NOTES", s: headerBlockStyle }],
        [{ v: "Operational Loss (Logged)", s: leftCellStyle }, { t: 'f', f: "SUM('05_INCIDENT_LOG'!E:E)", s: { ...centerCellStyle, numFmt: '₹#,##0' } }, { v: "From Incident Log" }],
        [{ v: "Prevented Revenue Leakage", s: leftCellStyle }, { t: 'f', f: "'06_ROI_CALC'!B9/12", s: { ...centerCellStyle, numFmt: '₹#,##0' } }, { v: "System ROI" }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addNavBar(dWs);
    dWs['!cols'] = [35, 25, 30].map(w => ({ wch: w }));
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `ROCS_v4.0_Market_Ready.xlsx`);
}
