
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Unified Identity)
 * Final Build: 2025-03-16
 * Synchronized Sheet Names + Corrected Formulas.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "CLIENT@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-ORD-7721-REST";

    const COLORS = {
        NAVY_BAR: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        INPUT_ZONE: "FEFCE8",    
        BORDER: "CBD5E1",
        HEADER_BG: "1E293B",
        CONSOLE_BG: "F1F5F9" 
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
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: borderStyle
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.NAVY_BAR } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            top: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } },
            left: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } },
            bottom: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } },
            right: { style: 'thin', color: { rgb: COLORS.PRIMARY_GREEN } }
        }
    };

    const groupHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: "000000" }, sz: 12 },
        fill: { fgColor: { rgb: COLORS.ACCENT_GOLD } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            top: { style: 'thin', color: { rgb: "000000" } },
            left: { style: 'thin', color: { rgb: "000000" } },
            bottom: { style: 'thin', color: { rgb: "000000" } },
            right: { style: 'thin', color: { rgb: "000000" } }
        }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
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

    const intelStyle = {
        font: { ...baseFont, color: { rgb: COLORS.INTEL_GREY }, italic: true, sz: 9 },
        alignment: { vertical: 'center', horizontal: 'left', wrapText: true },
        border: borderStyle
    };

    const inputStyle = {
        ...dataStyleCenter,
        fill: { fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const addSoftwareHeader = (ws: WorkSheet, endCol: string = 'M') => {
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }]], { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 

        for(let c = 0; c <= range.e.c; c++) {
            const cell = utils.encode_cell({r: 0, c});
            if(!ws[cell]) ws[cell] = { v: "", s: navStyle };
            else ws[cell].s = navStyle;
        }
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. HOME CONSOLE ---
    const homeData: any[][] = [
        [], [],
        [{ 
            v: "MOREMEETS™ RESTAURANT OPERATIONS CONSOLE", 
            s: { 
                font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, 
                fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } },
                alignment: { horizontal: 'center', vertical: 'center' } 
            } 
        }],
        [{ v: "Operations Control System", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ Branch Setup", l: { Target: "#'BRANCH_SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ Today's Tasks", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ Business Health", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null], 
        [null, null, null, null, null], 
        [],
        [
            { v: "▶ Team Hub", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ Shift Handover", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ Cost & Savings Tracker", l: { Target: "#'COST_SAVINGS_TRACKER'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        [
            { v: "▶ SOP Library", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ Archive", l: { Target: "#'ARCHIVE'!A1" }, s: tileStyle }, null, 
            { v: "▶ Incident Tracker", l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        [{ v: "TODAY'S STATUS", s: { font: { bold: true, sz: 12, color: { rgb: COLORS.NAVY_BAR } }, alignment: { horizontal: 'left' } } }],
        [
            { v: "Shift Progress:", s: { font: { sz: 9, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'left' } } },
            { t: 'f', f: `IFERROR(TEXT(COUNTIFS('TODAYS_TASKS'!E:E,"<>", 'TODAYS_TASKS'!D:D, "<>N/A*")/MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>", 'TODAYS_TASKS'!D:D, "<>Requirement Description")), "0%"), "0%")`, l: { Target: "#'TODAYS_TASKS'!A1" }, s: { font: { bold: true, sz: 10, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'left' } } }
        ],
        [
            { v: "Open Incidents:", s: { font: { sz: 9, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'left' } } },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: { font: { bold: true, sz: 10, color: { rgb: COLORS.RISK_RED } }, alignment: { horizontal: 'left' } } }
        ],
        [
            { v: "Active Branch:", s: { font: { sz: 9, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'left' } } },
            { t: 'f', f: `'BRANCH_SETUP'!B6`, l: { Target: "#'BRANCH_SETUP'!A1" }, s: { font: { bold: true, sz: 10, color: { rgb: COLORS.NAVY_BAR } }, alignment: { horizontal: 'left' } } }
        ],
        [], [],
        [{ v: "SYSTEM STATUS: ✅ VERIFIED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 15, 35, 15, 35].map(w => ({ wch: w }));
    
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 1 } },
        { s: { r: 25, c: 0 }, e: { r: 25, c: 4 } }, { s: { r: 26, c: 0 }, e: { r: 26, c: 4 } },
        { s: { r: 6, c: 0 }, e: { r: 8, c: 0 } }, { s: { r: 6, c: 2 }, e: { r: 8, c: 2 } }, { s: { r: 6, c: 4 }, e: { r: 8, c: 4 } },
        { s: { r: 10, c: 0 }, e: { r: 12, c: 0 } }, { s: { r: 10, c: 2 }, e: { r: 12, c: 2 } }, { s: { r: 10, c: 4 }, e: { r: 12, c: 4 } },
        { s: { r: 14, c: 0 }, e: { r: 16, c: 0 } }, { s: { r: 14, c: 2 }, e: { r: 16, c: 2 } }, { s: { r: 14, c: 4 }, e: { r: 16, c: 4 } }
    ];
    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. BRANCH_SETUP ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name", s: headerStyle },
        { v: "Kitchen", s: headerStyle }, { v: "Bar", s: headerStyle }, { v: "Dining", s: headerStyle },
        { v: "EHS", s: headerStyle }, { v: "Statutory", s: headerStyle }, { v: "Delivery", s: headerStyle },
        { v: "Takeaway/Pickup", s: headerStyle }, { v: "Valet", s: headerStyle }, { v: "Garden", s: headerStyle },
        { v: "Staff Qtr", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Toggle YES/NO per branch. Today's Tasks updates automatically.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs, 'L');
    utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");

    // --- 03. TODAYS_TASKS ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "ID", s: headerStyle },
        { v: "Requirement Description", s: headerStyle }, 
        { v: "Actioned By", s: headerStyle }, { v: "Time Done", s: headerStyle }, 
        { v: "Sign-Off Req?", s: headerStyle }, { v: "Manager Sign-Off", s: headerStyle },
        { v: "Issue / Deviation", s: headerStyle },
        { v: "Frequency", s: intelStyle }, { v: "Risk Level", s: intelStyle },
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const mData: any[][] = [[], [{ v: "TODAY'S TASKS: OPERATIONAL LOGBOOK", s: { font: { sz: 16, bold: true } } }], [], mHeaders];
    
    const moduleMap: Record<number, string> = {
        0: "C", 1: "C", 2: "D", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L"
    };

    const startDate = new Date(2025, 2, 16); 
    for (let i = 0; i < 7; i++) {
        const d = new Date(startDate); d.setDate(startDate.getDate() + i);
        const is1stOfMonth = d.getDate() === 1;
        const isMonday = d.getDay() === 1;

        [1, 2].forEach(bCode => {
            const bRow = bCode === 1 ? 6 : 7;
            item.checklists.forEach((c, cIdx) => {
                const switchCol = moduleMap[cIdx] || "C";
                const activeFormula = `'BRANCH_SETUP'!$${switchCol}$${bRow}`;
                const moduleName = c.title.split(' ')[0].toUpperCase();
                
                const isMonthlyModule = c.frequency === 'Monthly';
                const isWeeklyModule = c.frequency === 'Weekly';
                
                if (isMonthlyModule && !is1stOfMonth) return;
                if (isWeeklyModule && !isMonday) return;

                c.tasks.forEach(t => {
                    const isHighRisk = t.riskLevel === 'High';
                    mData.push([
                        { v: d, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'BRANCH_SETUP'!$B$${bRow}`, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { t: 'f', f: `IF(${activeFormula}="NO", "N/A - [${moduleName}] NOT CONFIGURED FOR THIS BRANCH", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 3, FALSE))`, s: dataStyleLeft },
                        { v: "", s: inputStyle }, { v: "", s: inputStyle },
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 6, FALSE))`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 7, FALSE))`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 4, FALSE))`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 5, FALSE))`, s: intelStyle }
                    ]);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 10, 65, 25, 12, 15, 20, 30, 15, 15, 45, 50].map(w => ({ wch: w }));
    addSoftwareHeader(mWs, 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 04. BUSINESS_HEALTH ---
    const dashData = [
        [], [{ v: "BUSINESS HEALTH: LIVE DASHBOARD", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }],
        [{ v: "Group Completion %", s: dataStyleLeft }, { t:'f', f:`COUNTIF('TODAYS_TASKS'!E:E,"<>")/MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>"))`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Active Operational Incidents", s: dataStyleLeft }, { t:'f', f:`COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(dWs, 'C');
    utils.book_append_sheet(wb, dWs, "BUSINESS_HEALTH");

    // --- 05. COST_SAVINGS_TRACKER ---
    const rData = [
        [], [{v:"COST & SAVINGS TRACKER", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Risk Category", s:headerStyle}, {v:"Impact per Event (₹)", s:headerStyle}, {v:"Frequency / Yr", s:headerStyle}, {v:"Projected Annual Loss (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}],
        [{v:"Food Spoilage (Cold Chain Failure)", s:dataStyleLeft}, {v:50000, s:inputStyle}, {v:12, s:inputStyle}, {t:'f', f:'B6*C6', s:dataStyleCenter}, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Regulatory Fines (Health/Statutory)", s:dataStyleLeft}, {v:200000, s:inputStyle}, {v:1, s:inputStyle}, {t:'f', f:'B7*C7', s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(rWs, 'E');
    utils.book_append_sheet(wb, rWs, "COST_SAVINGS_TRACKER");

    // --- 06. INCIDENT_TRACKER ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category", s:headerStyle}, {v:"Description", s:headerStyle}, {v:"Impact (₹)", s:headerStyle}, {v:"Status (OPEN/CLOSED)", s:headerStyle}, {v:"Resolution", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT TRACKER: LIABILITY LOG", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 20, 35].map(w => ({ wch: w }));
    addSoftwareHeader(iWs, 'H');
    utils.book_append_sheet(wb, iWs, "INCIDENT_TRACKER");

    // --- 07. SHIFT_HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Handover Details", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}, {v:"Proof (Digital Acknowledgement)", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 60, 60, 45].map(w => ({ wch: w }));
    addSoftwareHeader(hWs, 'F');
    utils.book_append_sheet(wb, hWs, "SHIFT_HANDOVER");

    // --- 08. TEAM_HUB ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, {v:"Assigned Branch", s:headerStyle}, {v:"Contact Number", s:headerStyle}, {v:"Status (Active/Inactive)", s:headerStyle}];
    const pData = [[], [{v:"TEAM HUB: STAFF DIRECTORY", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 35, 30, 25, 20, 25].map(w => ({ wch: w }));
    addSoftwareHeader(pWs, 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 09. SOP_LIBRARY ---
    const mpData: any[][] = [[], [{ v: "SOP LIBRARY: MASTER DATABASE", s: { font: { sz: 16, bold: true } } }], [], [], [{v:"ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement / Step", s:headerStyle}, {v:"Consequence of Failure", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}]];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            mpData.push([
                { v: t.id, s: dataStyleCenter }, 
                { v: c.title, s: dataStyleCenter }, 
                { v: t.description, s: dataStyleLeft }, 
                { v: t.consequence, s: dataStyleLeft }, 
                { v: t.trainerNotes || "-", s: dataStyleLeft }, 
                { v: c.frequency, s: dataStyleCenter }, 
                { v: t.priority, s: dataStyleCenter }
            ]);
        });
    });
    const mpWs = utils.aoa_to_sheet(mpData);
    mpWs['!cols'] = [12, 25, 65, 45, 50, 12, 10].map(w => ({ wch: w }));
    addSoftwareHeader(mpWs, 'G');
    utils.book_append_sheet(wb, mpWs, "SOP_LIBRARY");

    // --- 10. ARCHIVE ---
    const archWs = utils.aoa_to_sheet([[], [{v: "ARCHIVE: HISTORICAL RECORDS", s: { font: { sz: 18, bold: true } } }]]);
    addSoftwareHeader(archWs, 'E');
    utils.book_append_sheet(wb, archWs, "ARCHIVE");

    // --- 11. AUTH CORE (HIDDEN) ---
    const aData = [
        ["KEY", "VALUE", "STATUS"],
        ["BUYER_EMAIL", BUYER_EMAIL, "VALID"],
        ["ORDER_ID", ORDER_ID, "ACTIVE"]
    ];
    const aWs = utils.aoa_to_sheet(aData);
    utils.book_append_sheet(wb, aWs, "_AUTH_CORE_");
    
    wb.Workbook = {
        Sheets: [
            { name: "HOME_CONSOLE", Hidden: 0 },
            { name: "BRANCH_SETUP", Hidden: 0 },
            { name: "TODAYS_TASKS", Hidden: 0 },
            { name: "BUSINESS_HEALTH", Hidden: 0 },
            { name: "COST_SAVINGS_TRACKER", Hidden: 0 },
            { name: "INCIDENT_TRACKER", Hidden: 0 },
            { name: "SHIFT_HANDOVER", Hidden: 0 },
            { name: "TEAM_HUB", Hidden: 0 },
            { name: "SOP_LIBRARY", Hidden: 0 },
            { name: "ARCHIVE", Hidden: 0 },
            { name: "_AUTH_CORE_", Hidden: 1 }
        ]
    };

    writeFile(wb, `MOREMEETS_RESTAURANT_OPERATIONS_CONSOLE_v4.2.xlsx`);
}
