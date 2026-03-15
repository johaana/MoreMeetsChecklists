
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.0 - The Operational Operating System
 * Normalized Architecture: TASK_LIBRARY -> MASTER_LEDGER -> USER_INTERFACE
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
            { v: "00 INSTRUCTIONS", target: "00_INSTRUCTIONS" },
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

    // --- 00. INSTRUCTIONS ---
    const insData = [
        [], [],
        [{ v: "WELCOME TO YOUR COMMAND SYSTEM (ROCS v4.0)", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "This is not just a spreadsheet. It is your business's operational infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "STEP 1: ACTIVATE THE SYSTEM", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Go to the '07_SETUP' sheet. Enter your locations and the Start Date. The system will generate your full year.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 2: TODAY'S MISSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Open '03_TODAY_MISSION'. It automatically filters for the current date. Enter 'Date Done' and 'Initials'.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 3: SHIFT CONTINUITY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Use '04_SHIFT_HANDOVER' to pass notes between teams. Open issues alert you on the Control Panel.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 4: COMMAND REVIEW", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Review the Dashboard daily. If a high-risk task is missed, the indicator turns RED.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "GLOBAL EDITS: To change a task description for the entire year, use Ctrl+H (Find & Replace) across the workbook.", s: { font: { sz: 10, italic: true } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 25 }, { wch: 85 }];
    utils.book_append_sheet(wb, insWs, "00_INSTRUCTIONS");

    // --- TASK_LIBRARY (Hidden Engine) ---
    const libData: any[][] = [
        [{ v: "TASK_ID", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Risk", s: headerBlockStyle }, { v: "Verify?", s: headerBlockStyle }, { v: "Trainer Notes", s: headerBlockStyle }, { v: "Consequence", s: headerBlockStyle }]
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
                { v: t.trainerNotes || "Maintain standards.", s: leftCellStyle },
                { v: t.consequence || "Operational drift.", s: leftCellStyle }
            ]);
        });
    });
    const libWs = utils.aoa_to_sheet(libData);
    libWs['!cols'] = [10, 25, 50, 10, 15, 10, 40, 40].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, libWs, "TASK_LIBRARY");

    // --- 07. SETUP & DATABASE (Hidden Engine) ---
    const setupData = [
        [], [{ v: "SYSTEM CONFIGURATION", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "System Parameter", s: headerBlockStyle }, { v: "Current Value (Input)", s: headerBlockStyle }, { v: "Notes", s: headerBlockStyle }],
        [{ v: "SYSTEM_DATE", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Override this to view other dates." }],
        [{ v: "START_DATE", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "The day your fiscal year begins." }],
        [{ v: "LOCATION_NAME", s: leftCellStyle }, { v: "Bandra Main", s: inputStyle }, { v: "Your branch name." }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 45 }];
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 01. CONTROL PANEL ---
    const cpData = [
        [], [],
        [{ v: "RESTAURANT OPERATIONS COMMAND PANEL", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "v4.0 Certified Operational Framework | MoreMeets", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ START TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ VIEW COMPLIANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG INCIDENT / LOSS", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "TODAY'S OPERATIONAL SNAPSHOT", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "System Target Date:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!B5", s: { font: { bold: true }, numFmt: 'dd-mm-yyyy' } }],
        [{ v: "Open Shift Issues:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIF('04_SHIFT_HANDOVER'!F:F,\"Open\")", s: { font: { bold: true } } }],
        [{ v: "Critical Tasks Pending:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIFS('03_TODAY_MISSION'!E:E,\"High\",'03_TODAY_MISSION'!G:G,\"\")", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    addNavBar(cpWs);
    cpWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 10 }, { wch: 30 }];
    cpWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } }];
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 03. TODAY'S MISSION ---
    const missionHeaders = [
        { v: "Task_Key", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, { v: "Task Description", s: headerBlockStyle }, 
        { v: "Freq", s: headerBlockStyle }, { v: "Risk", s: headerBlockStyle }, { v: "Date Done (DD-MM-YYYY)", s: headerBlockStyle }, 
        { v: "Initials", s: headerBlockStyle }, { v: "Verified By", s: headerBlockStyle }, { v: "Notes / Deviations", s: headerBlockStyle }
    ];
    const missionData = [[], [{ v: "TODAY'S MISSION: SHIFT EXECUTION", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    // Generator for Today's dynamic list
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            missionData.push([
                { v: t.id, s: centerCellStyle },
                { v: c.title, s: leftCellStyle },
                { v: t.description, s: leftCellStyle },
                { v: t.frequency || c.frequency, s: centerCellStyle },
                { v: t.riskLevel || "Operational", s: { ...centerCellStyle, font: { bold: t.riskLevel === 'High', color: { rgb: t.riskLevel === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: "", s: inputStyle }, // Date Done
                { v: "", s: inputStyle }, // Initials
                { v: "", s: inputStyle }, // Verified By
                { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
            ]);
        });
    });
    const mWs = utils.aoa_to_sheet(missionData);
    addNavBar(mWs);
    mWs['!cols'] = [15, 20, 50, 10, 15, 25, 10, 15, 45].map(w => ({ wch: w }));
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
        [{ v: "Date", s: headerBlockStyle }, { v: "Incident Type", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Action Taken", s: headerBlockStyle }, { v: "Est. Loss (INR)", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Maintenance", s: inputStyle }, { v: "Fridge 1 failure.", s: inputStyle }, { v: "Stock moved to freezer 2.", s: inputStyle }, { v: 1200, s: inputStyle }, { v: "Resolved", s: inputStyle }]
    ];
    const incWs = utils.aoa_to_sheet(incData);
    addNavBar(incWs);
    incWs['!cols'] = [15, 20, 40, 40, 20, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 06. ROI CALCULATOR ---
    const roiData = [
        [], [{ v: "ROI CALCULATOR: THE VALUE OF GOVERNANCE", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Variable", s: headerBlockStyle }, { v: "Your Value (Input)", s: headerBlockStyle }, { v: "Industry Benchmark", s: headerBlockStyle }],
        [{ v: "Average Monthly Revenue (INR)", s: leftCellStyle }, { v: 1500000, s: inputStyle }, { v: "Target: 100%" }],
        [{ v: "Estimated Operational Leakage %", s: leftCellStyle }, { v: 0.03, t: 'n', s: { ...inputStyle, numFmt: '0%' } }, { v: "Industry Avg: 3-5%" }],
        [],
        [{ v: "ANNUAL LOSS WITHOUT ROCS:", s: { font: { bold: true } } }, { t: 'f', f: "B5*B6*12", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } }, numFmt: '₹#,##0' } }],
        [{ v: "ANNUAL SAVINGS WITH ROCS (50% reduction):", s: { font: { bold: true } } }, { t: 'f', f: "B8*0.5", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, numFmt: '₹#,##0' } }]
    ];
    const roiWs = utils.aoa_to_sheet(roiData);
    addNavBar(roiWs);
    roiWs['!cols'] = [{ wch: 45 }, { wch: 25 }, { wch: 30 }];
    utils.book_append_sheet(wb, roiWs, "06_ROI_CALC");

    // --- 02. DASHBOARD ---
    const dashData = [
        [],
        [{ v: "EXECUTIVE COMMAND DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM STATUS", s: headerBlockStyle }, { v: "LIVE KPI", s: headerBlockStyle }, { v: "HEALTH BEACON", s: headerBlockStyle }],
        [
            { v: "Overall Compliance", s: leftCellStyle }, 
            { t: 'f', f: "IFERROR(COUNTIF('03_TODAY_MISSION'!F:F,\"<>\")/MAX(1,COUNTA('03_TODAY_MISSION'!C:C)-1),0)", s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }
        ],
        [{ v: "System Health", s: leftCellStyle }, { t: 'f', f: "IF(COUNTIFS('03_TODAY_MISSION'!E:E,\"High\",'03_TODAY_MISSION'!F:F,\"\")>0,\"🔴 CRITICAL RISK\",\"🟢 OPERATIONAL\")", s: centerCellStyle }, { v: "Risk Warning" }],
        [],
        [{ v: "FINANCIAL INTELLIGENCE", s: headerBlockStyle }, { v: "MONTHLY VALUE", s: headerBlockStyle }, { v: "NOTES", s: headerBlockStyle }],
        [{ v: "Operational Loss (Logged)", s: leftCellStyle }, { t: 'f', f: "SUM('05_INCIDENT_LOG'!E:E)", s: { ...centerCellStyle, numFmt: '₹#,##0' } }, { v: "From Incident Log" }],
        [{ v: "Potential Savings Realized", s: leftCellStyle }, { t: 'f', f: "'06_ROI_CALC'!B9/12", s: { ...centerCellStyle, numFmt: '₹#,##0' } }, { v: "System Efficiency" }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addNavBar(dWs);
    dWs['!cols'] = [35, 25, 30].map(w => ({ wch: w }));
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `ROCS_v4.0_Market_Ready.xlsx`);
}
