
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
            { v: "05 INCIDENTS", target: "05_INCIDENT_LOG" }
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
        [{ v: "ROCS v4.0: QUICK START GUIDE", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "Follow these 4 steps to deploy your operational infrastructure.", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "STEP 1: SYSTEM SETUP", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Go to the '06_SETUP' sheet. Enter your locations and the current date. The system will automatically generate your 365-day audit trail.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 2: DAILY MISSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Every shift, the team opens '03_TODAY_MISSION'. They only enter 'Date Done' and 'Initials'. The system handles the rest.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 3: SHIFT CONTINUITY", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Use '04_SHIFT_HANDOVER' to pass critical notes between managers. Unresolved issues will alert you on the Control Panel.", s: { alignment: { wrapText: true } } }],
        [{ v: "STEP 4: COMMAND REVIEW", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.ACCENT_BLUE } } } }],
        [null, { v: "Owners review '02_DASHBOARD' daily to see compliance % and identify High-Risk failures before they cause loss.", s: { alignment: { wrapText: true } } }],
        [],
        [{ v: "Support: more@moremeets.com", s: { font: { sz: 9, italic: true } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 25 }, { wch: 85 }];
    utils.book_append_sheet(wb, insWs, "00_INSTRUCTIONS");

    // --- 06. SETUP & LIBRARY (Internal Engine) ---
    const libData: any[][] = [
        [{ v: "TASK_ID", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Risk", s: headerBlockStyle }, { v: "Verify?", s: headerBlockStyle }, { v: "Notes", s: headerBlockStyle }, { v: "Consequence", s: headerBlockStyle }]
    ];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            libData.push([
                { v: t.id, s: centerCellStyle },
                { v: c.title, s: leftCellStyle },
                { v: t.description, s: leftCellStyle },
                { v: (t.frequency || c.frequency || "Daily").toUpperCase(), s: centerCellStyle },
                { v: t.priority || "Operational", s: centerCellStyle },
                { v: t.riskLevel === 'High' ? "YES" : "NO", s: centerCellStyle },
                { v: t.trainerNotes || "Maintain standards.", s: leftCellStyle },
                { v: t.consequence || "Operational drift.", s: leftCellStyle }
            ]);
        });
    });
    const libWs = utils.aoa_to_sheet(libData);
    libWs['!cols'] = [10, 25, 50, 10, 15, 10, 40, 40].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, libWs, "TASK_LIBRARY");

    // --- 01. CONTROL PANEL ---
    const cpData = [
        [], [],
        [{ v: "RESTAURANT OPERATIONS CONTROL PANEL", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Version 4.0 | Operational Governance System", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ START TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ VIEW COMPLIANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG AN INCIDENT / LOSS", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "TODAY'S OPERATIONAL SNAPSHOT", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Open Shift Issues:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIF('04_SHIFT_HANDOVER'!F:F,\"Open\")", s: { font: { bold: true } } }],
        [{ v: "Critical Tasks Pending:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIFS('03_TODAY_MISSION'!E:E,\"High\",'03_TODAY_MISSION'!G:G,\"\")", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    addNavBar(cpWs);
    cpWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 10 }, { wch: 30 }];
    cpWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } }];
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- 03. TODAY'S MISSION ---
    const todayMissionHeaders = [
        { v: "ID", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, { v: "Objective / Task", s: headerBlockStyle }, 
        { v: "Risk", s: headerBlockStyle }, { v: "Verify?", s: headerBlockStyle }, { v: "Date Done", s: headerBlockStyle }, 
        { v: "Initials", s: headerBlockStyle }, { v: "Verified By", s: headerBlockStyle }, { v: "Trainer Notes", s: headerBlockStyle }
    ];
    const missionData = [[], [{ v: "TODAY'S MISSION: SHIFT EXECUTION", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    // In a real Excel output, we would use =FILTER(...) but for generic download we pre-populate Today's rows.
    // Generating rows for today's date only.
    const todayStr = new Date();
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            const freq = (t.frequency || c.frequency || "Daily").toLowerCase();
            const r = missionData.length + 1;
            missionData.push([
                { v: t.id, s: centerCellStyle },
                { v: c.title, s: leftCellStyle },
                { v: t.description, s: leftCellStyle },
                { v: t.priority || "Operational", s: { ...centerCellStyle, font: { bold: t.priority === 'High', color: { rgb: t.priority === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                { v: t.riskLevel === 'High' ? "MANAGER" : "NO", s: centerCellStyle },
                { v: "", s: inputStyle }, // Date Done
                { v: "", s: inputStyle }, // Initials
                { v: "", s: inputStyle }, // Verified
                { v: t.trainerNotes, s: { ...leftCellStyle, font: { italic: true, sz: 9, color: { rgb: COLORS.TEXT_MUTED } } } }
            ]);
        });
    });
    const mWs = utils.aoa_to_sheet(missionData);
    addNavBar(mWs);
    mWs['!cols'] = [10, 20, 50, 15, 10, 20, 10, 15, 45].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, mWs, "03_TODAY_MISSION");

    // --- 04. SHIFT HANDOVER ---
    const hoData = [
        [], [{ v: "SHIFT HANDOVER: OPERATIONAL CONTINUITY", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Shift", s: headerBlockStyle }, { v: "Manager", s: headerBlockStyle }, { v: "Issue / Observation", s: headerBlockStyle }, { v: "Required Action", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: todayStr, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "NIGHT", s: inputStyle }, { v: "Rahul", s: inputStyle }, { v: "Freezer 2 temp fluctuating at 2 AM.", s: inputStyle }, { v: "Technician called for 10 AM.", s: inputStyle }, { v: "Open", s: inputStyle }]
    ];
    const hoWs = utils.aoa_to_sheet(hoData);
    addNavBar(hoWs);
    hoWs['!cols'] = [15, 15, 20, 40, 40, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, hoWs, "04_SHIFT_HANDOVER");

    // --- 05. INCIDENT LOG ---
    const incData = [
        [], [{ v: "INCIDENT & LOSS LOG: LIABILITY PROTECTION", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Incident Type", s: headerBlockStyle }, { v: "Description", s: headerBlockStyle }, { v: "Action Taken", s: headerBlockStyle }, { v: "Estimated Loss (INR)", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: todayStr, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Maintenance", s: inputStyle }, { v: "Fridge 1 failure.", s: inputStyle }, { v: "Stock moved to freezer 2.", s: inputStyle }, { v: 1200, s: inputStyle }, { v: "Resolved", s: inputStyle }]
    ];
    const incWs = utils.aoa_to_sheet(incData);
    addNavBar(incWs);
    incWs['!cols'] = [15, 20, 40, 40, 20, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 02. DASHBOARD ---
    const dashData = [
        [],
        [{ v: "RESTAURANT COMMAND DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM STATUS", s: headerBlockStyle }, { v: "LIVE KPI", s: headerBlockStyle }, { v: "TREND", s: headerBlockStyle }],
        [
            { v: "Overall Compliance", s: leftCellStyle }, 
            { t: 'f', f: "IFERROR(COUNTIF('03_TODAY_MISSION'!F:F,\"<>\")/MAX(1,COUNTA('03_TODAY_MISSION'!C:C)-1),0)", s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } },
            { v: "████████░░", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }
        ],
        [{ v: "System Health", s: leftCellStyle }, { t: 'f', f: "IF(COUNTIFS('03_TODAY_MISSION'!D:D,\"High\",'03_TODAY_MISSION'!F:F,\"\")>0,\"🔴 RISK\",\"🟢 SAFE\")", s: centerCellStyle }, { v: "Critical Checks" }],
        [],
        [{ v: "FINANCIAL IMPACT", s: headerBlockStyle }, { v: "VALUE", s: headerBlockStyle }, { v: "NOTES", s: headerBlockStyle }],
        [{ v: "Monthly Operational Loss", s: leftCellStyle }, { t: 'f', f: "SUM('05_INCIDENT_LOG'!E:E)", s: { ...centerCellStyle, numFmt: '₹#,##0' } }, { v: "From Incident Log" }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addNavBar(dWs);
    dWs['!cols'] = [30, 20, 30].map(w => ({ wch: w }));
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_v4.0_ROCS.xlsx`);
}

const missionHeaders = [
    { v: "ID", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Module", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Objective / Task", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Risk", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Verify?", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Date Done", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Initials", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Verified By", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } },
    { v: "Trainer Notes", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "374151" } }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } }, alignment: { horizontal: 'center' } } }
];
