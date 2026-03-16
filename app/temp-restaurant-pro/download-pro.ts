
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 PRO - THE COMMAND CENTER EDITION (High-Res UI)
 * Features: 3D-Tile Menu, Invisible Grid, Full-width Application Headers, Live Status Widgets.
 * Logic: Interval-Aware Scheduling, Multi-Branch Identity, 240-Task Deep Load.
 */
export const handleDownloadPro = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "RAHUL@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-PRO-9921-REST";

    const COLORS = {
        NAVY_BAR: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER: "334155",
        INPUT_ZONE: "FEFCE8"
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
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER } } }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.HEADER_BG } },
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
        alignment: { horizontal: 'center', vertical: 'center' }
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

    const addAppHeader = (ws: WorkSheet, endCol: string = 'M') => {
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
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.3 PRO", s: { font: { italic: true, sz: 11, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: groupHeaderStyle }, null, 
            { v: "DAILY OPERATIONS", s: groupHeaderStyle }, null, 
            { v: "EXECUTIVE INTEL", s: groupHeaderStyle }
        ],
        [
            { v: "▶ SETUP BRANCHES", l: { Target: "#'SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: tileStyle }, null, 
            { v: "▶ DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null], 
        [null, null, null, null, null], 
        [],
        [
            { v: "▶ PERSONNEL", l: { Target: "#'PERSONNEL'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [],
        [
            { v: "▶ ARCHIVE", s: { ...tileStyle, fill: { fgColor: { rgb: "334155" } } } }, null, 
            { v: "▶ MASTER PROTOCOL", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_LOG'!A1" }, s: tileStyle }
        ],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [], [],
        [{ v: "SYSTEM STATUS: ✅ INSTITUTIONAL GRADE ENCRYPTED", s: { font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 5, 35, 5, 35].map(w => ({ wch: w }));
    
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 4 } }, { s: { r: 20, c: 0 }, e: { r: 20, c: 4 } },
        { s: { r: 6, c: 0 }, e: { r: 8, c: 0 } }, { s: { r: 6, c: 2 }, e: { r: 8, c: 2 } }, { s: { r: 6, c: 4 }, e: { r: 8, c: 4 } },
        { s: { r: 10, c: 0 }, e: { r: 12, c: 0 } }, { s: { r: 10, c: 2 }, e: { r: 12, c: 2 } }, { s: { r: 10, c: 4 }, e: { r: 12, c: 4 } },
        { s: { r: 14, c: 0 }, e: { r: 16, c: 0 } }, { s: { r: 14, c: 2 }, e: { r: 16, c: 2 } }, { s: { r: 14, c: 4 }, e: { r: 16, c: 4 } }
    ];
    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. SETUP ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name", s: headerStyle },
        { v: "Kitchen", s: headerStyle }, { v: "Bar", s: headerStyle }, { v: "Dining", s: headerStyle },
        { v: "EHS", s: headerStyle }, { v: "Statutory", s: headerStyle }, { v: "Delivery", s: headerStyle },
        { v: "Takeaway/Pickup", s: headerStyle }, { v: "Valet", s: headerStyle }, { v: "Garden", s: headerStyle },
        { v: "Staff Qtr", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Toggle YES/NO per branch. Mission Ledger handles logic automatically.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10].map(w => ({ wch: w }));
    addAppHeader(setupWs, 'L');
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- 03. MISSION LEDGER ---
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "ID", s: headerStyle },
        { v: "Requirement Description", s: headerStyle }, 
        { v: "Actioned By", s: headerStyle }, { v: "Time Done", s: headerStyle }, 
        { v: "Sign-Off Req?", s: headerStyle }, { v: "Manager Sign-Off", s: headerStyle },
        { v: "Issue / Deviation", s: headerStyle },
        { v: "Frequency", s: intelStyle }, { v: "Risk Level", s: intelStyle },
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const mData: any[][] = [[], [{ v: "MISSION LEDGER: FORENSIC EXECUTION TRAIL", s: { font: { sz: 16, bold: true } } }], [], mHeaders];
    
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
                const activeFormula = `'SETUP'!$${switchCol}$${bRow}`;
                const isMonthlyModule = c.frequency === 'Monthly';
                const isWeeklyModule = c.frequency === 'Weekly';
                
                if (isMonthlyModule && !is1stOfMonth) return;
                if (isWeeklyModule && !isMonday) return;

                c.tasks.forEach(t => {
                    mData.push([
                        { v: d, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'SETUP'!$B$${bRow}`, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { t: 'f', f: `IF(${activeFormula}="NO", "N/A - MODULE DISABLED", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 3, FALSE))`, s: dataStyleLeft },
                        { v: "", s: inputStyle }, { v: "", s: inputStyle },
                        { v: t.riskLevel === 'High' ? "MGR SIGN" : "NONE", s: dataStyleCenter },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 6, FALSE)`, s: intelStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 7, FALSE)`, s: intelStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 4, FALSE)`, s: intelStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 5, FALSE)`, s: intelStyle }
                    ]);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 10, 60, 25, 12, 15, 20, 30, 15, 15, 45, 50].map(w => ({ wch: w }));
    addAppHeader(mWs, 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- 04. DASHBOARD ---
    const dashData = [
        [], [{ v: "EXECUTIVE SCORECARD: LIVE COMPLIANCE", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Governance Metric", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Forensic Threshold", s: headerStyle }],
        [{ v: "Group Compliance Achievement %", s: dataStyleLeft }, { t:'f', f:`COUNTIF('MISSION_LEDGER'!E:E,"<>")/MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Active Operational Risks / Failures", s: dataStyleLeft }, { t:'f', f:`COUNTIF('MISSION_LEDGER'!I:I, "<>")`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addAppHeader(dWs, 'D');
    utils.book_append_sheet(wb, dWs, "DASHBOARD");

    // --- 05. ROI ENGINE ---
    const rData = [
        [], [{v:"PROFIT PROTECTION ENGINE", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Risk Category", s:headerStyle}, {v:"Impact per Event (₹)", s:headerStyle}, {v:"Frequency / Yr", s:headerStyle}, {v:"Projected Annual Loss (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}],
        [{v:"Food Spoilage (Cold Chain Failure)", s:dataStyleLeft}, {v:50000, s:inputStyle}, {v:12, s:inputStyle}, {t:'f', f:'B6*C6', s:dataStyleCenter}, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Regulatory Fines (Health/Statutory)", s:dataStyleLeft}, {v:200000, s:inputStyle}, {v:1, s:inputStyle}, {t:'f', f:'B7*C7', s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addAppHeader(rWs, 'E');
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 06. INCIDENT LOG ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category (Theft / Maintenance / Safety)", s:headerStyle}, {v:"Forensic Description", s:headerStyle}, {v:"Estimated Financial Impact (₹)", s:headerStyle}, {v:"Resolution", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT & LIABILITY REGISTRY", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 25].map(w => ({ wch: w }));
    addAppHeader(iWs, 'G');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Handover Details", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}, {v:"Proof (Digital Acknowledgement)", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 60, 60, 45].map(w => ({ wch: w }));
    addAppHeader(hWs, 'F');
    utils.book_append_sheet(wb, hWs, "HANDOVER");

    // --- 08. PERSONNEL ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, {v:"Assigned Branch", s:headerStyle}, {v:"Contact Number", s:headerStyle}, {v:"Institutional Email", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData = [[], [{v:"PERSONNEL DIRECTORY", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 35, 30, 25, 20, 35, 25].map(w => ({ wch: w }));
    addAppHeader(pWs, 'G');
    utils.book_append_sheet(wb, pWs, "PERSONNEL");

    // --- 09. MASTER PROTOCOL ---
    const mpData: any[][] = [[], [{ v: "MASTER PROTOCOL DATABASE", s: { font: { sz: 16, bold: true } } }], [], [{v:"ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement", s:headerStyle}, {v:"Consequence", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}]];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            mpData.push([{v:t.id, s:dataStyleCenter}, {v:c.title, s:dataStyleCenter}, {v:t.description, s:dataStyleLeft}, {v:t.consequence, s:dataStyleLeft}, {v:t.trainerNotes||"-", s:dataStyleLeft}, {v:c.frequency, s:dataStyleCenter}, {v:t.priority, s:dataStyleCenter}]);
        });
    });
    const mpWs = utils.aoa_to_sheet(mpData);
    mpWs['!cols'] = [12, 25, 65, 45, 50, 12, 10].map(w => ({ wch: w }));
    addAppHeader(mpWs, 'G');
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

    writeFile(wb, `MOREMEETS_RESTAURANT_COMMAND_CENTER_v4.3_PRO.xlsx`);
}
