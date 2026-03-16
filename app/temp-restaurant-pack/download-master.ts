
'use client';

import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Commercial Grade)
 * Final Build: 2025-03-16
 * Logic: Fixed Pickup module mapping, Interval-Aware Scheduling, Upgraded Forensic Nomenclature.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "RAHUL@RESTAURANTGROUP.COM";
    const ORDER_ID = "MM-ORD-7721-REST";
    const LICENSE_HASH = "8A6C9F2D-AUTH-2025";

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
        HEADER_BG: "1E293B"
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

    const addSoftwareHeader = (ws: WorkSheet) => {
        // Clinical App Bar: Merged A1:C1, Navy, Left-Aligned Green Text
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }, null, null]], { origin: "A1" });
        
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }); 
        
        utils.sheet_add_aoa(ws, [[{ 
            v: `LICENSED TO: ${BUYER_EMAIL} | ORDER: ${ORDER_ID}`, 
            s: { font: { sz: 7, italic: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } 
        }]], { origin: "M1" });

        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. HOME CONSOLE ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ RESTAURANT OPERATIONAL CONSOLE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.2", s: { font: { italic: true, sz: 12, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "INITIALIZATION ZONE", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ SETUP BRANCHES & FACILITIES", l: { Target: "#'SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ ASSIGN PERSONNEL", l: { Target: "#'PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "DAILY MISSION ZONE", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ MISSION LEDGER (365 DAYS)", l: { Target: "#'MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ SHIFT HANDOVER BRIDGE", l: { Target: "#'HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "EXECUTIVE SUITE", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ GOVERNANCE DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ INCIDENT REGISTRY", l: { Target: "#'INCIDENT_LOG'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "PROFIT PROTECTION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ MASTER PROTOCOL (240+ SOPs)", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [], [], [],
        [{ v: "MOREMEETS™ | THE PROFESSIONAL STANDARD FOR OPERATIONAL EXCELLENCE", s: { font: { italic: true, sz: 10, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: `ENCRYPTED COPY | REGISTERED TO: ${BUYER_EMAIL}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 3 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 1 } }, { s: { r: 15, c: 3 }, e: { r: 15, c: 3 } },
        { s: { r: 19, c: 0 }, e: { r: 19, c: 3 } }, { s: { r: 20, c: 0 }, e: { r: 20, c: 3 } }
    ];
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
        [{ v: "Toggle YES/NO per branch. Ledger handles compliance logic automatically.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs);
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- 03. MISSION LEDGER (Interval-Aware + Full Database) ---
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
    
    // MAPPING CHECKLISTS TO SETUP COLUMNS (C=Kitchen, D=Bar, E=Dining, F=EHS, G=Stat, H=Deliv, I=Pickup, J=Valet, K=Garden, L=StaffQ)
    const moduleMap: Record<number, string> = {
        0: "C", 1: "C", 2: "D", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L"
    };

    const startDate = new Date(2025, 2, 16); // Today: 16th March
    for (let i = 0; i < 7; i++) {
        const d = new Date(startDate); d.setDate(startDate.getDate() + i);
        const is1stOfMonth = d.getDate() === 1;
        const isMonday = d.getDay() === 1;

        [1, 2].forEach(bCode => {
            const bRow = bCode === 1 ? 6 : 7;
            item.checklists.forEach((c, cIdx) => {
                const switchCol = moduleMap[cIdx] || "C";
                const activeFormula = `'SETUP'!$${switchCol}$${bRow}`;
                
                // --- INTERVAL FILTERING ---
                const isMonthlyModule = c.frequency === 'Monthly';
                const isWeeklyModule = c.frequency === 'Weekly';
                
                if (isMonthlyModule && !is1stOfMonth) return;
                if (isWeeklyModule && !isMonday) return;

                c.tasks.forEach(t => {
                    const isHighRisk = t.riskLevel === 'High';
                    mData.push([
                        { v: d, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'SETUP'!$B$${bRow}`, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { t: 'f', f: `IF(${activeFormula}="NO", "N/A - MODULE DISABLED", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 3, FALSE))`, s: dataStyleLeft },
                        { v: "", s: inputStyle }, { v: "", s: inputStyle },
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } },
                        { v: "", s: inputStyle },
                        { v: "", s: inputStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 6, FALSE)`, s: intelStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 7, FALSE)`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 4, FALSE))`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 5, FALSE))`, s: intelStyle }
                    ]);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 10, 60, 25, 12, 15, 20, 30, 15, 15, 45, 50].map(w => ({ wch: w }));
    addSoftwareHeader(mWs);
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- 04. DASHBOARD (Fixed Nomenclature) ---
    const dashData = [
        [], [{ v: "EXECUTIVE SCORECARD: LIVE COMPLIANCE", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Governance Metric", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Forensic Threshold", s: headerStyle }],
        [{ v: "Group Compliance Achievement %", s: dataStyleLeft }, { t:'f', f:`COUNTIF('MISSION_LEDGER'!E:E,"<>")/MAX(1, COUNTIFS('MISSION_LEDGER'!D:D, "<>N/A*", 'MISSION_LEDGER'!D:D, "<>"))`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Active Operational Risks / Failures", s: dataStyleLeft }, { t:'f', f:`COUNTIF('MISSION_LEDGER'!I:I, "<>")`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(dWs);
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
    addSoftwareHeader(rWs);
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 06. INCIDENT LOG (Maintenance written in full) ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category (Theft / Maintenance / Safety)", s:headerStyle}, {v:"Forensic Description", s:headerStyle}, {v:"Estimated Financial Impact (₹)", s:headerStyle}, {v:"Resolution", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT & LIABILITY REGISTRY", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 25].map(w => ({ wch: w }));
    addSoftwareHeader(iWs);
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. HANDOVER (Fixed Proof) ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Handover Details", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}, {v:"Proof (Digital Acknowledgement & Manager ID)", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 60, 60, 45].map(w => ({ wch: w }));
    addSoftwareHeader(hWs);
    utils.book_append_sheet(wb, hWs, "HANDOVER");

    // --- 08. PERSONNEL (Restored Depth) ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, {v:"Assigned Branch", s:headerStyle}, {v:"Contact Number", s:headerStyle}, {v:"Institutional Email", s:headerStyle}, {v:"Status (Active/Inactive)", s:headerStyle}];
    const pData = [[], [{v:"PERSONNEL DIRECTORY", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 35, 30, 25, 20, 35, 25].map(w => ({ wch: w }));
    addSoftwareHeader(pWs);
    utils.book_append_sheet(wb, pWs, "PERSONNEL");

    // --- 09. MASTER PROTOCOL (Full 240+ Load) ---
    const mpData: any[][] = [[], [{ v: "MASTER PROTOCOL DATABASE", s: { font: { sz: 16, bold: true } } }], [{v:"Modify task strings here. Changes propagate instantly via VLOOKUP.", s:{font:{italic:true, color:{rgb:COLORS.TEXT_MUTED}}}}], [], [{v:"ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement / Step", s:headerStyle}, {v:"Consequence of Failure", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}]];
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
    addSoftwareHeader(mpWs);
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

    // --- 10. AUTH CORE (HIDDEN) ---
    const aData = [
        ["KEY", "VALUE", "STATUS"],
        ["BUYER_EMAIL", BUYER_EMAIL, "VALID"],
        ["ORDER_ID", ORDER_ID, "ACTIVE"],
        ["LICENSE_HASH", LICENSE_HASH, "ENCRYPTED"]
    ];
    const aWs = utils.aoa_to_sheet(aData);
    utils.book_append_sheet(wb, aWs, "_AUTH_CORE_");
    
    wb.Workbook = {
        Sheets: [
            { name: "HOME_CONSOLE", Hidden: 0 },
            { name: "SETUP", Hidden: 0 },
            { name: "MISSION_LEDGER", Hidden: 0 },
            { name: "DASHBOARD", Hidden: 0 },
            { name: "ROI_ENGINE", Hidden: 0 },
            { name: "INCIDENT_LOG", Hidden: 0 },
            { name: "HANDOVER", Hidden: 0 },
            { name: "PERSONNEL", Hidden: 0 },
            { name: "MASTER_PROTOCOL", Hidden: 0 },
            { name: "_AUTH_CORE_", Hidden: 1 }
        ]
    };

    writeFile(wb, `MOREMEETS_RESTAURANT_OPERATIONAL_CONSOLE_v4.2.xlsx`);
}
