
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.0 - The Operational Operating System (Market Ready Edition)
 * Normalized Architecture: TASK_LIBRARY -> MASTER_LEDGER (Interface)
 * Version 4.1 - Friendly UX Update (No Tech-Speak)
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

    const linkStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.ACCENT_BLUE }, underline: true }
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
            { v: "07 SYSTEM SETTINGS", target: "07_SETUP" }
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
        
        // Standardize column widths for navigation across all sheets
        ws['!cols'] = [
            { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }, { wch: 22 }
        ];
    };

    // --- 00. START HERE (FRIENDLY ONBOARDING) ---
    const insData = [
        [], [],
        [{ v: "WELCOME TO YOUR RESTAURANT CONTROL SYSTEM", s: { font: { sz: 20, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }],
        [{ v: "We're here to help you run a smoother, more profitable restaurant. Follow these simple steps:", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "1. ACTIVATE YOUR SYSTEM", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Tell us about your branch and when your year starts.", l: { Target: "#'07_SETUP'!A1" }, s: linkStyle }, { v: "← Click to set up." }],
        [],
        [{ v: "2. START YOUR DAILY MISSION", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Check what needs to be done today.", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: linkStyle }, { v: "← Click to view tasks." }],
        [],
        [{ v: "3. TALK TO THE NEXT SHIFT", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "Leave notes for the next manager so nothing is forgotten.", l: { Target: "#'04_SHIFT_HANDOVER'!A1" }, s: linkStyle }, { v: "← Click to log notes." }],
        [],
        [{ v: "4. TRACK YOUR SUCCESS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.SUCCESS_GREEN } } } }],
        [null, { v: "See your compliance score and money saved.", l: { Target: "#'02_DASHBOARD'!A1" }, s: linkStyle }, { v: "← Click for results." }],
        [],
        [{ v: "PRO TIP: Only type in the YELLOW cells. The system handles the rest!", s: { font: { sz: 10, bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const insWs = utils.aoa_to_sheet(insData);
    addNavBar(insWs);
    insWs['!cols'] = [{ wch: 30 }, { wch: 60 }, { wch: 20 }];
    utils.book_append_sheet(wb, insWs, "00_START_HERE");

    // --- 07. SETUP (CONFIG) ---
    const setupData = [
        [], [{ v: "SYSTEM SETTINGS", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIME_NAVY } } } }], 
        [{ v: "Please fill in the yellow boxes below to personalize your system.", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        [{ v: "What to Set", s: headerBlockStyle }, { v: "Type Here (Input)", s: headerBlockStyle }, { v: "Helpful Notes", s: headerBlockStyle }],
        [{ v: "View Tasks for Which Day?", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Change this date to see past or future tasks." }],
        [{ v: "When Does Your Year Start?", s: leftCellStyle }, { v: new Date(), t: 'd', s: { ...inputStyle, numFmt: 'dd-mm-yyyy' } }, { v: "The first day of your 365-day tracking cycle." }],
        [{ v: "Restaurant / Branch Name", s: leftCellStyle }, { v: "Your Branch Name", s: inputStyle }, { v: "How you want this location to appear on reports." }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    addNavBar(setupWs);
    setupWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 50 }];
    utils.book_append_sheet(wb, setupWs, "07_SETUP");

    // --- 01. CONTROL PANEL (APP INTERFACE) ---
    const cpData = [
        [], [],
        [{ v: "RESTAURANT COMMAND CENTER", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIME_NAVY } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Powered by MoreMeets™ Intelligence", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "▶ OPEN TODAY'S MISSION", l: { Target: "#'03_TODAY_MISSION'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ VIEW COMPLIANCE DASHBOARD", l: { Target: "#'02_DASHBOARD'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [{ v: "▶ LOG AN INCIDENT OR LOSS", l: { Target: "#'05_INCIDENT_LOG'!A1" }, s: { font: { sz: 14, bold: true, color: { rgb: COLORS.ACCENT_BLUE } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "LIVE SNAPSHOT", s: { font: { bold: true, sz: 11 }, alignment: { horizontal: 'center' } } }],
        [{ v: "Looking at Date:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "'07_SETUP'!B6", s: { font: { bold: true }, numFmt: 'dd-mm-yyyy' } }],
        [{ v: "Pending Shift Issues:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIF('04_SHIFT_HANDOVER'!F:F,\"Open\")", s: { font: { bold: true } } }],
        [{ v: "High Risk Tasks Missed:", s: { alignment: { horizontal: 'right' } } }, { t: 'f', f: "COUNTIFS('03_TODAY_MISSION'!G:G,\"High\",'03_TODAY_MISSION'!I:I,\"\")", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } } } }]
    ];
    const cpWs = utils.aoa_to_sheet(cpData);
    addNavBar(cpWs);
    cpWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } }, { s: { r: 6, c: 0 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } }];
    utils.book_append_sheet(wb, cpWs, "01_CONTROL_PANEL");

    // --- TASK_LIBRARY (HIDDEN) ---
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

    // --- 03. TODAY'S MISSION ---
    const missionHeaders = [
        { v: "Date", s: headerBlockStyle }, { v: "Key", s: headerBlockStyle }, { v: "Module", s: headerBlockStyle }, 
        { v: "Task Description", s: headerBlockStyle }, { v: "Freq", s: headerBlockStyle }, { v: "Responsibility", s: headerBlockStyle },
        { v: "Risk Level", s: headerBlockStyle }, { v: "Verification", s: headerBlockStyle }, 
        { v: "Date Done (DD-MM-YYYY)", s: headerBlockStyle }, { v: "Initials", s: headerBlockStyle }, 
        { v: "Verified By (Manager)", s: headerBlockStyle }, { v: "Pro Guidance", s: headerBlockStyle }
    ];
    const missionData: any[][] = [[], [{ v: "TODAY'S MISSION: TASK LOGBOOK", s: { font: { sz: 18, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    for (let i = 0; i < 365; i++) {
        const entryDate = new Date(startDate);
        entryDate.setDate(startDate.getDate() + i);
        
        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const freq = (t.frequency || c.frequency || "Daily").toUpperCase();
                let shouldAdd = false;
                if (freq === "DAILY") shouldAdd = true;
                if (freq === "WEEKLY" && entryDate.getDay() === 1) shouldAdd = true;
                if (freq === "MONTHLY" && entryDate.getDate() === 1) shouldAdd = true;
                
                if (shouldAdd) {
                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } },
                        { v: `${entryDate.getTime()}_${t.id}`, s: centerCellStyle },
                        { v: c.title, s: leftCellStyle },
                        { v: t.description, s: leftCellStyle },
                        { v: freq, s: centerCellStyle },
                        { v: c.role, s: centerCellStyle },
                        { v: t.riskLevel || "Operational", s: { ...centerCellStyle, font: { bold: t.riskLevel === 'High', color: { rgb: t.riskLevel === 'High' ? COLORS.DANGER_RED : "000000" } } } },
                        { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: centerCellStyle },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
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
        [], [{ v: "SHIFT HANDOVER: COMMUNICATION LOG", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "Which Shift?", s: headerBlockStyle }, { v: "Manager Name", s: headerBlockStyle }, { v: "What Happened?", s: headerBlockStyle }, { v: "What to do?", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "NIGHT", s: inputStyle }, { v: "Rahul", s: inputStyle }, { v: "Freezer 2 temp fluctuating.", s: inputStyle }, { v: "Monitor every hour.", s: inputStyle }, { v: "Open", s: inputStyle }]
    ];
    const hoWs = utils.aoa_to_sheet(hoData);
    addNavBar(hoWs);
    utils.book_append_sheet(wb, hoWs, "04_SHIFT_HANDOVER");

    // --- 05. INCIDENT LOG ---
    const incData = [
        [], [{ v: "INCIDENT & LOSS LOG", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Date", s: headerBlockStyle }, { v: "What happened?", s: headerBlockStyle }, { v: "Details", s: headerBlockStyle }, { v: "Action Taken", s: headerBlockStyle }, { v: "Estimated Loss", s: headerBlockStyle }, { v: "Status", s: headerBlockStyle }],
        [{ v: new Date(), t: 'd', s: { ...centerCellStyle, numFmt: 'dd-mm-yyyy' } }, { v: "Equipment", s: inputStyle }, { v: "Fridge 1 failure.", s: inputStyle }, { v: "Moved stock.", s: inputStyle }, { v: 1200, s: inputStyle }, { v: "Resolved", s: inputStyle }]
    ];
    const incWs = utils.aoa_to_sheet(incData);
    addNavBar(incWs);
    utils.book_append_sheet(wb, incWs, "05_INCIDENT_LOG");

    // --- 06. ROI CALCULATOR ---
    const roiData = [
        [], [{ v: "SAVINGS CALCULATOR", s: { font: { sz: 18, bold: true } } }], [],
        [{ v: "Item", s: headerBlockStyle }, { v: "Your Amount", s: headerBlockStyle }, { v: "Notes", s: headerBlockStyle }],
        [{ v: "Monthly Revenue", s: leftCellStyle }, { v: 1500000, s: inputStyle }, { v: "Your average total sales per month." }],
        [{ v: "Waste/Error Leakage %", s: leftCellStyle }, { v: 0.03, t: 'n', s: { ...inputStyle, numFmt: '0%' } }, { v: "Industry average is 3-5%." }],
        [],
        [{ v: "Potential Yearly Loss Without Control:", s: { font: { bold: true } } }, { t: 'f', f: "B5*B6*12", s: { font: { bold: true, color: { rgb: COLORS.DANGER_RED } }, numFmt: '₹#,##0' } }],
        [{ v: "Money Saved With This System (Estimated):", s: { font: { bold: true } } }, { t: 'f', f: "B8*0.5", s: { font: { bold: true, color: { rgb: COLORS.SUCCESS_GREEN } }, numFmt: '₹#,##0' } }]
    ];
    const roiWs = utils.aoa_to_sheet(roiData);
    addNavBar(roiWs);
    utils.book_append_sheet(wb, roiWs, "06_ROI_CALC");

    // --- 02. DASHBOARD ---
    const dashData = [
        [],
        [{ v: "MANAGEMENT DASHBOARD", s: { font: { sz: 20, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "HOW ARE WE DOING?", s: headerBlockStyle }, { v: "SCORE", s: headerBlockStyle }, { v: "HEALTH BAR", s: headerBlockStyle }],
        [
            { v: "Total Compliance", s: leftCellStyle }, 
            { t: 'f', f: "IFERROR(COUNTIFS('03_TODAY_MISSION'!A:A, TODAY(), '03_TODAY_MISSION'!I:I, \"<>\") / COUNTIF('03_TODAY_MISSION'!A:A, TODAY()), 0)", s: { ...centerCellStyle, numFmt: '0%', font: { bold: true, sz: 14 } } },
            { t: 'f', f: "REPT(\"█\",ROUND(B5*20,0))", s: { font: { color: { rgb: COLORS.SUCCESS_GREEN } }, alignment: { horizontal: 'center' } } }
        ]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    addNavBar(dWs);
    dWs['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }];
    utils.book_append_sheet(wb, dWs, "02_DASHBOARD");

    writeFile(wb, `ROCS_v4.1_Hospitality_Edition.xlsx`);
}
