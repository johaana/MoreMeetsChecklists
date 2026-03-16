
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Enterprise Edition)
 * Architecture:
 * HOME_CONSOLE - The Lobby
 * MISSION_LEDGER - 365 Day Relational Ledger
 * SETUP - Branch Identity & Facility Switchboard (YES/NO per Branch)
 * DASHBOARD - Analytics
 * HANDOVER - Comms
 * INCIDENT_LOG - Risk
 * ROI_ENGINE - Financials
 * PERSONNEL - Roles
 * MASTER_PROTOCOL - Edit-Once Database (At the End)
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
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
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
        [{ v: "1. INITIALIZATION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ CONFIGURE BRANCHES & FACILITIES", l: { Target: "#'SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ ASSIGN PERSONNEL", l: { Target: "#'PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "2. DAILY EXECUTION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ACCESS MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: COLORS.NAVY_HEADER } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ LOG SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "3. GOVERNANCE & RISK", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ EXECUTIVE DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ INCIDENT REGISTRY", l: { Target: "#'INCIDENT_LOG'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "4. STRATEGY", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ROI & VALUE ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ MASTER PROTOCOL (EDIT TASKS)", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "SYSTEM IDENTITY STATUS", s: { font: { bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Primary Owner:", s: { alignment: { horizontal: 'right' }, border: borderStyle } }, { t: 'f', f: "'SETUP'!$B$6", s: { font: { bold: true }, border: borderStyle } }, { v: "Status:", s: { alignment: { horizontal: 'right' }, border: borderStyle } }, { v: "LICENSED / ACTIVE", s: { font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true }, border: borderStyle } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 3 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 1 } }, { s: { r: 15, c: 3 }, e: { r: 15, c: 3 } },
        { s: { r: 18, c: 0 }, e: { r: 18, c: 3 } }
    ];
    addWatermark(homeWs, 22);
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- MASTER PROTOCOL (Single Source of Truth) ---
    const masterHeaders = [
        { v: "Task ID", s: headerStyle },
        { v: "Module Section", s: headerStyle },
        { v: "Requirement Description (EDITABLE)", s: headerStyle },
        { v: "Consequence of Failure", s: headerStyle },
        { v: "Trainer Notes", s: headerStyle },
        { v: "Frequency", s: headerStyle },
        { v: "Risk Level", s: headerStyle }
    ];
    const masterData: any[][] = [[], [{ v: "MASTER OPERATIONAL PROTOCOLS: SINGLE SOURCE OF TRUTH", s: { font: { sz: 16, bold: true } } }], [], masterHeaders];
    
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            masterData.push([
                { v: t.id, s: dataStyleCenter },
                { v: c.title, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft },
                { v: t.consequence || "Operational Risk", s: dataStyleLeft },
                { v: t.trainerNotes || "Follow standard SOP.", s: dataStyleLeft },
                { v: t.frequency || c.frequency || "Daily", s: dataStyleCenter },
                { v: t.riskLevel || "Medium", s: dataStyleCenter }
            ]);
        });
    });
    const mpWs = utils.aoa_to_sheet(masterData);
    mpWs['!cols'] = [12, 25, 60, 40, 45, 15, 12].map(w => ({ wch: w }));
    addBackButton(mpWs);

    // --- SETUP (BRANCH IDENTITY & FACILITY SWITCHBOARD) ---
    const facilityHeaders = [
        { v: "Branch Code", s: headerStyle },
        { v: "Official Branch Name", s: headerStyle },
        { v: "Kitchen?", s: headerStyle },
        { v: "Bar?", s: headerStyle },
        { v: "Dining?", s: headerStyle },
        { v: "EHS?", s: headerStyle },
        { v: "Statutory?", s: headerStyle },
        { v: "Delivery?", s: headerStyle },
        { v: "Pickup?", s: headerStyle },
        { v: "Valet?", s: headerStyle },
        { v: "Garden?", s: headerStyle },
        { v: "Quarters?", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }], 
        [{ v: "Define branch names and toggle facilities (YES/NO) per branch to auto-configure the Ledger.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [],
        facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 30, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12].map(w => ({ wch: w }));
    addBackButton(setupWs);
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- MISSION LEDGER (Relational Database) ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, // A
        { v: "Branch Name", s: headerStyle }, // B
        { v: "Task ID", s: headerStyle }, // C
        { v: "Module Section", s: headerStyle }, // D
        { v: "Requirement (Live Link)", s: headerStyle }, // E
        { v: "Actioned By", s: headerStyle }, // F
        { v: "Time", s: headerStyle }, // G
        { v: "Sign-Off Req?", s: headerStyle }, // H
        { v: "Manager Sign-Off", s: headerStyle }, // I
        { v: "Consequence", s: intelStyle }, // J
        { v: "Trainer Notes", s: intelStyle } // K
    ];
    const missionData: any[][] = [[], [{ v: "OPERATIONAL MISSION LEDGER: PER-BRANCH GOVERNANCE", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    // Generate sample for 14 days
    for (let i = 0; i < 14; i++) {
        const entryDate = new Date(startDate);
        entryDate.setDate(startDate.getDate() + i);
        
        [1, 2].forEach(branchCode => {
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const branchRow = branchCode === 1 ? 6 : 7;
                    const branchNameCell = `'SETUP'!$B$${branchRow}`;
                    
                    // Requirement Formula: Checks Setup Toggle then pulls from Master Protocol
                    let toggleCol = "C";
                    if (c.title.includes("Bar")) toggleCol = "D";
                    if (c.title.includes("Dining")) toggleCol = "E";
                    if (c.title.includes("EHS") || c.title.includes("Safety")) toggleCol = "F";
                    if (c.title.includes("Statutory") || c.title.includes("Admin")) toggleCol = "G";
                    if (c.title.includes("Delivery")) toggleCol = "H";
                    if (c.title.includes("Takeaway") || c.title.includes("Pickup")) toggleCol = "I";
                    if (c.title.includes("Valet")) toggleCol = "J";
                    if (c.title.includes("Garden")) toggleCol = "K";
                    if (c.title.includes("Quarters")) toggleCol = "L";

                    const toggleCell = `'SETUP'!$${toggleCol}$${branchRow}`;
                    const descFormula = `IF(${toggleCell}="YES", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 3, FALSE), "N/A - MODULE DISABLED")`;
                    const consFormula = `IF(${toggleCell}="YES", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 4, FALSE), "-")`;
                    const noteFormula = `IF(${toggleCell}="YES", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 5, FALSE), "-")`;

                    const isHighRisk = t.riskLevel === 'High';

                    missionData.push([
                        { v: entryDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: branchNameCell, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { v: c.title, s: dataStyleCenter },
                        { t: 'f', f: descFormula, s: dataStyleLeft },
                        { v: "", s: inputStyle }, 
                        { v: "", s: inputStyle }, 
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } }, 
                        { v: "", s: inputStyle },
                        { t: 'f', f: consFormula, s: intelStyle }, 
                        { t: 'f', f: noteFormula, s: intelStyle }
                    ]);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [15, 25, 10, 20, 50, 25, 12, 15, 20, 35, 40].map(w => ({ wch: w }));
    addBackButton(mWs);
    mWs['!autofilter'] = { ref: "A4:K10000" };
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- OTHER CORE MODULES ---
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL"); // Append last

    // DASHBOARD, HANDOVER, etc.
    const addStandardSheet = (name: string, title: string, headers: any[], sampleRow: any[]) => {
        const data = [[], [{ v: title, s: { font: { sz: 18, bold: true } } }], [], headers, sampleRow];
        const ws = utils.aoa_to_sheet(data);
        addBackButton(ws);
        utils.book_append_sheet(wb, ws, name);
    };

    addStandardSheet("DASHBOARD", "EXECUTIVE ANALYTICS", [{v:"Metric", s:headerStyle}, {v:"Live Status", s:headerStyle}], [{v:"Total Compliance", s:dataStyleLeft}, {t:'f', f:`TEXT(COUNTIF('MISSION_LEDGER'!F:F,"<>")/COUNTA('MISSION_LEDGER'!E:E), "0%")`, s:dataStyleCenter}]);
    addStandardSheet("HANDOVER", "SHIFT HANDOVER BRIDGE", [{v:"Date", s:headerStyle}, {v:"AM Mgr", s:headerStyle}, {v:"PM Mgr", s:headerStyle}, {v:"Notes", s:headerStyle}], [{v:new Date(), t:'d', s:dataStyleCenter}, {v:"", s:inputStyle}, {v:"", s:inputStyle}, {v:"", s:inputStyle}]);
    addStandardSheet("INCIDENT_LOG", "INCIDENT & LOSS REGISTRY", [{v:"Date", s:headerStyle}, {v:"Category", s:headerStyle}, {v:"Details", s:headerStyle}, {v:"Status", s:headerStyle}], [{v:new Date(), t:'d', s:dataStyleCenter}, {v:"SAFETY", s:inputStyle}, {v:"", s:inputStyle}, {v:"OPEN", s:inputStyle}]);
    addStandardSheet("ROI_ENGINE", "PROFIT PROTECTION", [{v:"Risk", s:headerStyle}, {v:"Value at Risk", s:headerStyle}, {v:"Protected", s:headerStyle}], [{v:"Health Closure", s:dataStyleLeft}, {v:500000, s:inputStyle}, {v:"95%", s:dataStyleCenter}]);
    addStandardSheet("PERSONNEL", "STAFF ASSIGNMENT", [{v:"Role", s:headerStyle}, {v:"Staff Name", s:headerStyle}], [{v:"Head Chef", s:dataStyleLeft}, {v:"", s:inputStyle}]);

    // Apply borders to all
    wb.SheetNames.forEach(name => {
        const ws = wb.Sheets[name];
        const range = utils.decode_range(ws['!ref'] || 'A1');
        for (let R = range.s.r; R <= range.e.r; ++R) {
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = ws[utils.encode_cell({ r: R, c: C })];
                if (cell) cell.s = { ...cell.s, border: borderStyle };
            }
        }
    });

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
