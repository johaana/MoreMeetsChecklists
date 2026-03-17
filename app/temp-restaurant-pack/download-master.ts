
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE ENTERPRISE GOVERNANCE SUITE
 * Optimized for Restaurant Groups: High-Speed Adoption + Gamification.
 * Maker-Checker Workflow: Completed By (Staff) | Verified By (Manager).
 * Motivation Matrix: Empire Mood, Today's Star, Top Streak, Empire Status.
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
        SUCCESS_TEAL: "14B8A6", 
        CONSOLE_BG: "F1F5F9",
        STATUS_SECTION_BG: "FFFBEB" // Champagne Gold
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER } }
    };

    const boxBorder = { style: 'medium', color: { rgb: COLORS.NAVY_BAR } };

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
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
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
    
    const statusHeaderStyle = {
        font: { ...baseFont, bold: true, sz: 14, color: { rgb: COLORS.NAVY_BAR } },
        fill: { fgColor: { rgb: COLORS.STATUS_SECTION_BG } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { left: boxBorder, top: boxBorder, right: boxBorder }
    };

    const statusLabelStyle = {
        font: { ...baseFont, bold: true, sz: 10, color: { rgb: COLORS.INTEL_GREY } },
        fill: { fgColor: { rgb: COLORS.STATUS_SECTION_BG } },
        alignment: { horizontal: 'right', vertical: 'center' },
        border: { left: boxBorder }
    };

    const statusValueStyle = {
        font: { ...baseFont, bold: true, sz: 11, color: { rgb: COLORS.NAVY_BAR } },
        fill: { fgColor: { rgb: COLORS.STATUS_SECTION_BG } },
        alignment: { horizontal: 'left', vertical: 'center' }
    };

    const statusEmptyRight = {
        fill: { fgColor: { rgb: COLORS.STATUS_SECTION_BG } },
        border: { right: boxBorder }
    };

    const addSoftwareHeader = (ws: WorkSheet, endCol: string = 'K') => {
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
            v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", 
            s: { 
                font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, 
                fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } },
                alignment: { horizontal: 'center', vertical: 'center' } 
            } 
        }],
        [{ v: "Enterprise Continuity & Governance Suite v4.2", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
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
        // --- MOTIVATION MATRIX (HIGH DENSITY) ---
        [{ t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(COUNTIF('TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>", 'TODAYS_TASKS'!D:D, "<>Task"))>=0.9, "🔥 SIZZLING!", IF(COUNTIF('TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>", 'TODAYS_TASKS'!D:D, "<>Task"))>=0.6, "🥘 SIMMERING...", "🧊 COLD - TURN UP THE HEAT!")), "MOOD: 🧊 LOADING...")`, s: statusHeaderStyle }, null, null, null, null],
        [
            { v: "Shift Progress:", s: statusLabelStyle },
            { t: 'f', f: `IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>", 'TODAYS_TASKS'!D:D, "<>Task")), "0%"), "0%")`, s: { ...statusValueStyle, font: { ...statusValueStyle.font, color: { rgb: COLORS.PRIMARY_GREEN } } } },
            { v: "Open Incidents:", s: { ...statusLabelStyle, border: {} } },
            { t: 'f', f: `IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, s: { ...statusValueStyle, font: { ...statusValueStyle.font, color: { rgb: COLORS.RISK_RED } } } },
            { v: "", s: statusEmptyRight }
        ],
        [
            { v: "Today's Star:", s: statusLabelStyle },
            { v: "🎖️ Rahul (Bandra)", s: statusValueStyle },
            { v: "Top Streak:", s: { ...statusLabelStyle, border: {} } },
            { v: "🏆 Bandra (14 Days)", s: statusValueStyle },
            { v: "", s: statusEmptyRight }
        ],
        [
            { v: "Empire Status:", s: { ...statusLabelStyle, border: { left: boxBorder, bottom: boxBorder } } },
            { v: "👑 LEVEL 3 - EXECUTIVE GRADE", s: { ...statusValueStyle, font: { ...statusValueStyle.font, color: { rgb: COLORS.ACCENT_GOLD } }, border: { bottom: boxBorder } } },
            { v: "Active Units:", s: { ...statusLabelStyle, border: { bottom: boxBorder } } },
            { t: 'f', f: `COUNTIF('BRANCH_SETUP'!B6:B15, "<>")`, s: { ...statusValueStyle, border: { bottom: boxBorder } } },
            { v: "", s: { fill: { fgColor: { rgb: COLORS.STATUS_SECTION_BG } }, border: { right: boxBorder, bottom: boxBorder } } }
        ],
        [
            { v: "Branch Intelligence:", s: { font: { italic: true, sz: 9, bold: true, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'right' } } },
            { v: "▶ [View Branch Performance & Leading Units]", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { italic: true, sz: 9, color: { rgb: COLORS.PRIMARY_GREEN }, bold: true }, alignment: { horizontal: 'left' } } }
        ],
        [],
        [{ v: "SYSTEM STATUS: ✅ INSTITUTIONAL GRADE VERIFIED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'left' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | LICENSE: ENTERPRISE`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'left' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 25, 25, 25, 25].map(w => ({ wch: w })); // Increased Col B from 15 to 25
    homeWs['!rows'] = Array(35).fill({ hpt: 16 });
    homeWs['!rows'][2] = { hpt: 40 }; 
    homeWs['!rows'][18] = { hpt: 22 }; // Slightly tighter header
    homeWs['!rows'][19] = { hpt: 18 }; // Tighter stats rows
    homeWs['!rows'][20] = { hpt: 18 }; 
    homeWs['!rows'][21] = { hpt: 18 }; 
    homeWs['!rows'][22] = { hpt: 18 }; 
    
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 18, c: 0 }, e: { r: 18, c: 4 } },
        { s: { r: 22, c: 1 }, e: { r: 22, c: 4 } },
        { s: { r: 24, c: 0 }, e: { r: 24, c: 4 } }, { s: { r: 25, c: 0 }, e: { r: 25, c: 4 } },
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
    const branchSetupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs, 'L');
    utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");

    // --- 03. TODAYS_TASKS ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "ID", s: headerStyle },
        { v: "Task", s: headerStyle }, 
        { v: "Completed By (Staff Initials)", s: headerStyle }, 
        { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Frequency", s: intelStyle }, { v: "Risk Level", s: intelStyle },
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const mData: any[][] = [[], [{ v: "TODAY'S TASKS: EXECUTION LOG", s: { font: { sz: 16, bold: true } } }], [], mHeaders];
    
    const moduleMap: Record<number, string> = {
        0: "C", 1: "C", 2: "D", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L"
    };

    const startDate = new Date(); 
    [1, 2].forEach(bCode => {
        const bRow = 5 + bCode;
        item.checklists.forEach((c, cIdx) => {
            const switchCol = moduleMap[cIdx] || "C";
            const activeFormula = `'BRANCH_SETUP'!$${switchCol}$${bRow}`;
            const moduleName = c.title.split(' ')[0].toUpperCase();

            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const completedByCell = `E${rowIdx}`;
                const verifiedByCell = `F${rowIdx}`;
                
                const statusFormula = `IF(ISBLANK(${completedByCell}), "PENDING", IF(${verifiedByCell}="", "AWAITING MGR", "COMPLETED"))`;
                const verifiedByValue = t.priority === 'High' || t.riskLevel === 'High' ? "" : "N/A";

                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `'BRANCH_SETUP'!$B$${bRow}`, s: dataStyleCenter },
                    { v: t.id, s: dataStyleCenter },
                    { t: 'f', f: `IF(${activeFormula}="NO", "N/A - [${moduleName}] NOT AT THIS LOCATION", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 3, FALSE))`, s: dataStyleLeft },
                    { v: "", s: inputStyle },
                    { v: verifiedByValue, s: verifiedByValue === "N/A" ? dataStyleCenter : inputStyle },
                    { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true } } },
                    { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 6, FALSE))`, s: intelStyle },
                    { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 7, FALSE))`, s: intelStyle },
                    { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 4, FALSE))`, s: intelStyle },
                    { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'SOP_LIBRARY'!A:G, 5, FALSE))`, s: intelStyle }
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 10, 65, 25, 25, 20, 15, 15, 45, 50].map(w => ({ wch: w }));
    addSoftwareHeader(mWs, 'K');
    mWs['!autofilter'] = { ref: `A4:K${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 04. BUSINESS_HEALTH ---
    const dashData = [
        [], [{ v: "BUSINESS HEALTH: PERFORMANCE HUB", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "GROUP KPIs", s: groupHeaderStyle }, null, null],
        [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }],
        [{ v: "Group Shift Progress", s: dataStyleLeft }, { t:'f', f:`IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>", 'TODAYS_TASKS'!D:D, "<>Task")), "0%"), "0%")`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }],
        [],
        [{ v: "BRANCH INTELLIGENCE", s: groupHeaderStyle }, null, null, null],
        [{ v: "Branch Name", s: headerStyle }, { v: "Progress", s: headerStyle }, { v: "Open Incidents", s: headerStyle }, { v: "Risk Profile", s: headerStyle }],
        [{ t: 'f', f: `'BRANCH_SETUP'!B6`, s: dataStyleLeft }, { t: 'f', f: `IFERROR(TEXT(COUNTIFS('TODAYS_TASKS'!B:B, 'BRANCH_SETUP'!B6, 'TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!B:B, 'BRANCH_SETUP'!B6, 'TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>")), "0%"), "0%")`, s: dataStyleCenter }, { t: 'f', f: `COUNTIFS('INCIDENT_TRACKER'!C:C, 'BRANCH_SETUP'!B6, 'INCIDENT_TRACKER'!G:G, "OPEN")`, s: dataStyleCenter }, { t: 'f', f: `IF(AND(COUNTIFS('INCIDENT_TRACKER'!C:C, 'BRANCH_SETUP'!B6, 'INCIDENT_TRACKER'!G:G, "OPEN")=0), "SECURED", "ALERT")`, s: dataStyleCenter }],
        [{ t: 'f', f: `'BRANCH_SETUP'!B7`, s: dataStyleLeft }, { t: 'f', f: `IFERROR(TEXT(COUNTIFS('TODAYS_TASKS'!B:B, 'BRANCH_SETUP'!B7, 'TODAYS_TASKS'!G:G, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!B:B, 'BRANCH_SETUP'!B7, 'TODAYS_TASKS'!D:D, "<>N/A*", 'TODAYS_TASKS'!D:D, "<>")), "0%"), "0%")`, s: dataStyleCenter }, { t: 'f', f: `COUNTIFS('INCIDENT_TRACKER'!C:C, 'BRANCH_SETUP'!B7, 'INCIDENT_TRACKER'!G:G, "OPEN")`, s: dataStyleCenter }, { t: 'f', f: `IF(AND(COUNTIFS('INCIDENT_TRACKER'!C:C, 'BRANCH_SETUP'!B7, 'INCIDENT_TRACKER'!G:G, "OPEN")=0), "SECURED", "ALERT")`, s: dataStyleCenter }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20, 20].map(w => ({ wch: w }));
    dWs['!merges'] = [{ s: { r: 3, c: 0 }, e: { r: 3, c: 2 } }, { s: { r: 8, c: 0 }, e: { r: 8, c: 3 } }];
    addSoftwareHeader(dWs, 'D');
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

    writeFile(wb, `MOREMEETS_RESTAURANT_OPERATIONAL_CONSOLE_v4.2.xlsx`);
}
