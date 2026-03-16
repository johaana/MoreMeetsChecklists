
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Commercial Grade)
 * Relational Architecture: Master Protocol source pulling, Per-Branch Switchboard, Software Header UI.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
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
        // Merged A1:C1 for Software Command Bar
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }]], { origin: "A1" });
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }); 
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. HOME CONSOLE ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.2", s: { font: { italic: true, sz: 12, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "INITIALIZATION & IDENTITY", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ SETUP BRANCHES & FACILITIES", l: { Target: "#'SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ PERSONNEL DIRECTORY", l: { Target: "#'PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "DAILY EXECUTION HUB", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ACCESS MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ SHIFT HANDOVER BRIDGE", l: { Target: "#'HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "EXECUTIVE OVERSIGHT", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ EXECUTIVE DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ INCIDENT REGISTRY", l: { Target: "#'INCIDENT_LOG'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "PROFIT PROTECTION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ROI ENGINE CALCULATOR", l: { Target: "#'ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ MASTER PROTOCOL (EDIT)", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [], [], [],
        [{ v: "MOREMEETS™ | THE PROFESSIONAL STANDARD FOR OPERATIONAL EXCELLENCE", s: { font: { italic: true, sz: 10, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Forensic Integrity Architecture | V4.2 Commercial Build 2025", s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
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

    // --- 02. SETUP (Per-Branch Matrix) ---
    const facilityHeaders = [
        { v: "Branch Code", s: headerStyle }, { v: "Branch Name (Identity)", s: headerStyle },
        { v: "Kitchen", s: headerStyle }, { v: "Bar", s: headerStyle }, { v: "Dining", s: headerStyle },
        { v: "EHS", s: headerStyle }, { v: "Statutory", s: headerStyle }, { v: "Delivery", s: headerStyle },
        { v: "Takeaway", s: headerStyle }, { v: "Valet", s: headerStyle }, { v: "Garden", s: headerStyle },
        { v: "Staff Qtr", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Toggle YES/NO per branch. Ledger will dynamically adjust all 365 records.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs);
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- 03. MISSION LEDGER (Relational Engine) ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "ID", s: headerStyle },
        { v: "Section", s: headerStyle }, { v: "Requirement Description", s: headerStyle },
        { v: "Actioned By", s: headerStyle }, { v: "Time Done", s: headerStyle },
        { v: "Sign-Off Req?", s: headerStyle }, { v: "Manager Sign-Off", s: headerStyle },
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const missionData: any[][] = [[], [{ v: "OPERATIONAL MISSION LEDGER: CHRONOLOGICAL AUDIT TRAIL", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    // Generate 7 days for 2 branches
    const startDate = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(startDate); d.setDate(startDate.getDate() + i);
        [1, 2].forEach(bCode => {
            const bRow = bCode === 1 ? 6 : 7;
            item.checklists.forEach((c, cIdx) => {
                const switchCol = ["C","D","E","F","G","H","I","J","K","L"][cIdx] || "C";
                const activeFormula = `'SETUP'!$${switchCol}$${bRow}`;
                
                c.tasks.forEach(t => {
                    const isHighRisk = t.riskLevel === 'High';
                    const ledgerRow = [
                        { v: d, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: `'SETUP'!$B$${bRow}`, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { v: c.title, s: dataStyleCenter },
                        { t: 'f', f: `IF(${activeFormula}="NO", "N/A - MODULE DISABLED", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 3, FALSE))`, s: dataStyleLeft },
                        { v: "", s: inputStyle }, { v: "", s: inputStyle },
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } },
                        { v: "", s: inputStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 4, FALSE))`, s: intelStyle },
                        { t: 'f', f: `IF(${activeFormula}="NO", "-", VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 5, FALSE))`, s: intelStyle }
                    ];
                    missionData.push(ledgerRow);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [15, 25, 10, 20, 60, 25, 12, 15, 20, 40, 45].map(w => ({ wch: w }));
    addSoftwareHeader(mWs);
    mWs['!autofilter'] = { ref: `A4:K${missionData.length}` };
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- 04. DASHBOARD ---
    const dashData = [
        [], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Metric Scorecard", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Risk Threshold", s: headerStyle }],
        [{ v: "Group Compliance Score %", s: dataStyleLeft }, { t:'f', f:`TEXT(COUNTIF('MISSION_LEDGER'!F:F,"<>")/COUNTA('MISSION_LEDGER'!E:E), "0%")`, s: { ...dataStyleCenter, font: { bold: true } } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Critical Risks Unsigned", s: dataStyleLeft }, { v: 0, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }],
        [{ v: "Incident Frequency (Monthly)", s: dataStyleLeft }, { t:'f', f:`COUNTA('INCIDENT_LOG'!D:D)-1`, s: dataStyleCenter }, { v: "< 2 Events", s: dataStyleCenter }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(dWs);
    utils.book_append_sheet(wb, dWs, "DASHBOARD");

    // --- 05. HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Critical Handover Notes", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}, {v:"Verify Proof", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE: AM TO PM ACCOUNTABILITY", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 50, 50, 20].map(w => ({ wch: w }));
    addSoftwareHeader(hWs);
    utils.book_append_sheet(wb, hWs, "HANDOVER");

    // --- 06. INCIDENT LOG ---
    const iHeaders = [
        {v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, 
        {v:"Type", s:headerStyle}, {v:"Forensic Description", s:headerStyle}, 
        {v:"Est. Loss (₹)", s:headerStyle}, {v:"Action Taken", s:headerStyle}, {v:"Resolution", s:headerStyle}
    ];
    const iData = [[], [{v:"INCIDENT & LIABILITY REGISTRY", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 20, 60, 20, 30, 25].map(w => ({ wch: w }));
    addSoftwareHeader(iWs);
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. PERSONNEL ---
    const pHeaders = [
        {v:"Staff ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, 
        {v:"Assigned Branch", s:headerStyle}, {v:"Phone", s:headerStyle}, {v:"Email", s:headerStyle}, 
        {v:"Status", s:headerStyle}
    ];
    const pData = [[], [{v:"PERSONNEL DIRECTORY & ROLE ASSIGNMENT", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 35, 30, 25, 20, 35, 15].map(w => ({ wch: w }));
    addSoftwareHeader(pWs);
    utils.book_append_sheet(wb, pWs, "PERSONNEL");

    // --- 08. ROI ENGINE ---
    const rHeaders = [
        {v:"Risk Category", s:headerStyle}, {v:"Probability", s:headerStyle}, {v:"Impact per Event (₹)", s:headerStyle}, 
        {v:"Projected Annual Risk (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}
    ];
    const rData = [
        [], [{v:"PROFIT PROTECTION & ROI ENGINE CALCULATOR", s:{font:{sz:18, bold:true}}}], [],
        rHeaders,
        [{v:"Food Poisoning Scandal", s:dataStyleLeft}, {v:"Low (HACCP)", s:dataStyleCenter}, {v:500000, s:dataStyleCenter}, {t:'f', f:`C6*0.1`, s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } }}],
        [{v:"Spirit Leakage / Bar Theft", s:dataStyleLeft}, {v:"Medium", s:dataStyleCenter}, {v:120000, s:dataStyleCenter}, {t:'f', f:`C7*0.5`, s:dataStyleCenter}, {v:"MONITORED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.ACCENT_GOLD }, bold: true } }}],
        [{v:"Fire / Infrastructure Loss", s:dataStyleLeft}, {v:"Low (EHS)", s:dataStyleCenter}, {v:2500000, s:dataStyleCenter}, {t:'f', f:`C8*0.02`, s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN }, bold: true } }}],
        [],
        [{v:"TOTAL PROTECTED ANNUAL VALUE", s: { ...dataStyleLeft, font: { bold: true } }}, null, null, {t:'f', f:`SUM(D6:D10)`, s: { ...dataStyleCenter, font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } }}]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 20, 25, 30, 20].map(w => ({ wch: w }));
    addSoftwareHeader(rWs);
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 09. MASTER PROTOCOL (The 175 SOP Database) ---
    const mpHeaders = [{v:"Task ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement Description", s:headerStyle}, {v:"Consequence of Failure", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}];
    const mpData: any[][] = [[], [{ v: "MASTER PROTOCOL DATABASE: 175+ TECHNICAL SOPs (EDIT ONCE)", s: { font: { sz: 16, bold: true } } }], [], mpHeaders];
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            mpData.push([
                { v: t.id, s: dataStyleCenter }, { v: c.title, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft }, { v: t.consequence, s: dataStyleLeft },
                { v: t.trainerNotes || "-", s: dataStyleLeft }, { v: c.frequency, s: dataStyleCenter },
                { v: t.priority, s: dataStyleCenter }
            ]);
        });
    });
    const mpWs = utils.aoa_to_sheet(mpData);
    mpWs['!cols'] = [12, 25, 65, 45, 50, 12, 10].map(w => ({ wch: w }));
    addSoftwareHeader(mpWs);
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

    // APPLY BORDERS ONLY TO ACTIVE DATA RANGES
    wb.SheetNames.forEach(name => {
        const ws = wb.Sheets[name];
        const range = utils.decode_range(ws['!ref'] || 'A1');
        for (let R = range.s.r; R <= range.e.r; ++R) {
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = ws[utils.encode_cell({ r: R, c: C })];
                if (cell && R > 0) { // Don't border the header bar yet
                    cell.s = { ...cell.s, border: borderStyle };
                }
            }
        }
    });

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
