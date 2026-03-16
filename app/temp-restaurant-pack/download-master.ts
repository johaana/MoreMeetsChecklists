
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Enterprise Edition)
 * Final UI Overhaul: Merged Headers, Per-Branch Switchboard, Clinical Borders.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    // --- COMMAND CENTER PALETTE ---
    const COLORS = {
        NAVY_BAR: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "F5A623",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        INPUT_ZONE: "FEFCE8",    
        BORDER: "CBD5E1"         
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
        fill: { fgColor: { rgb: "1E293B" } },
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
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }]], { origin: "A1" });
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }); // Merge A1:C1
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    // --- 01. HOME CONSOLE ---
    const homeData = [
        [], [],
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.2", s: { font: { italic: true, sz: 12, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "OPERATIONAL INITIALIZATION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ SETUP BRANCHES & FACILITIES", l: { Target: "#'SETUP'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ ASSIGN PERSONNEL", l: { Target: "#'PERSONNEL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "DAILY EXECUTION HUB", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ACCESS MISSION LEDGER", l: { Target: "#'MISSION_LEDGER'!A1" }, s: { ...navStyle, fill: { fgColor: { rgb: "1E293B" } }, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ LOG SHIFT HANDOVER", l: { Target: "#'HANDOVER'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "EXECUTIVE OVERSIGHT", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ GLOBAL DASHBOARD", l: { Target: "#'DASHBOARD'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ INCIDENT REGISTRY", l: { Target: "#'INCIDENT_LOG'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "PROFIT PROTECTION", s: { font: { bold: true, color: { rgb: COLORS.ACCENT_GOLD } } } }],
        [{ v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ MASTER PROTOCOL (EDIT)", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "MoreMeets™ | Operational Intelligence Standard v4.2", s: { font: { italic: true, sz: 10, bold: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }],
        [{ v: "Institutional Governance Layer | Centered Pedigree Row 20", s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } }]
    ];
    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [35, 30, 10, 30].map(w => ({ wch: w }));
    homeWs['!merges'] = [
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 3 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 3 }, e: { r: 9, c: 3 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 3 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 1 } }, { s: { r: 15, c: 3 }, e: { r: 15, c: 3 } },
        { s: { r: 18, c: 0 }, e: { r: 18, c: 3 } }, { s: { r: 19, c: 0 }, e: { r: 19, c: 3 } }
    ];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. SETUP (Per-Branch Matrix) ---
    const facilityHeaders = [
        { v: "Branch Code", s: headerStyle },
        { v: "Branch Name", s: headerStyle },
        { v: "Kitchen", s: headerStyle }, { v: "Bar", s: headerStyle }, { v: "Dining", s: headerStyle },
        { v: "EHS", s: headerStyle }, { v: "Statutory", s: headerStyle }, { v: "Delivery", s: headerStyle },
        { v: "Pickup", s: headerStyle }, { v: "Valet", s: headerStyle }, { v: "Garden", s: headerStyle },
        { v: "Staff Qtr", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Toggle YES/NO per branch to dynamically activate modules in the Ledger.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs);
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- 03. MISSION LEDGER (Relational Engine) ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "Task ID", s: headerStyle },
        { v: "Section", s: headerStyle }, { v: "Requirement Description (Live Link)", s: headerStyle },
        { v: "Actioned By", s: headerStyle }, { v: "Time Done", s: headerStyle },
        { v: "Sign-Off Req?", s: headerStyle }, { v: "Manager Sign-Off", s: headerStyle },
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const missionData: any[][] = [[], [{ v: "OPERATIONAL MISSION LEDGER: 365-DAY AUDIT TRAIL", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    for (let i = 0; i < 14; i++) {
        const d = new Date(startDate); d.setDate(startDate.getDate() + i);
        [1, 2].forEach(bCode => {
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const bRow = bCode === 1 ? 6 : 7;
                    const bNameFormula = `'SETUP'!$B$${bRow}`;
                    const isHighRisk = t.riskLevel === 'High';
                    
                    missionData.push([
                        { v: d, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                        { t: 'f', f: bNameFormula, s: dataStyleCenter },
                        { v: t.id, s: dataStyleCenter },
                        { v: c.title, s: dataStyleCenter },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 3, FALSE)`, s: dataStyleLeft },
                        { v: "", s: inputStyle }, { v: "", s: inputStyle },
                        { v: isHighRisk ? "MGR SIGN" : "NONE", s: { ...dataStyleCenter, font: { bold: isHighRisk, color: { rgb: isHighRisk ? COLORS.RISK_RED : COLORS.TEXT_MUTED } } } },
                        { v: "", s: inputStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 4, FALSE)`, s: intelStyle },
                        { t: 'f', f: `VLOOKUP("${t.id}", 'MASTER_PROTOCOL'!A:G, 5, FALSE)`, s: intelStyle }
                    ]);
                });
            });
        });
    }
    const mWs = utils.aoa_to_sheet(missionData);
    mWs['!cols'] = [15, 25, 10, 20, 60, 25, 12, 15, 20, 40, 45].map(w => ({ wch: w }));
    addSoftwareHeader(mWs);
    mWs['!autofilter'] = { ref: "A4:K10000" };
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- 04. DASHBOARD (Executive Scorecards) ---
    const dashData = [
        [], [{ v: "EXECUTIVE GOVERNANCE DASHBOARD", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Metric", s: headerStyle }, { v: "Group Status", s: headerStyle }, { v: "Risk Level", s: headerStyle }],
        [{ v: "Total Group Compliance %", s: dataStyleLeft }, { t:'f', f:`TEXT(COUNTIF('MISSION_LEDGER'!F:F,"<>")/COUNTA('MISSION_LEDGER'!E:E), "0%")`, s: dataStyleCenter }, { v: "STABLE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{ v: "Open High-Risk Deviations", s: dataStyleLeft }, { v: 0, s: dataStyleCenter }, { v: "CRITICAL", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }],
        [{ v: "Identified Incident Events", s: dataStyleLeft }, { t:'f', f:`COUNTA('INCIDENT_LOG'!D:D)-1`, s: dataStyleCenter }, { v: "MONITOR", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.ACCENT_GOLD } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [35, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(dWs);
    utils.book_append_sheet(wb, dWs, "DASHBOARD");

    // --- 05. HANDOVER (The Bridge) ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Mgr", s:headerStyle}, {v:"PM Mgr", s:headerStyle}, {v:"Issues Logged", s:headerStyle}, {v:"Pending Tasks", s:headerStyle}, {v:"Proof", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 50, 50, 20].map(w => ({ wch: w }));
    addSoftwareHeader(hWs);
    utils.book_append_sheet(wb, hWs, "HANDOVER");

    // --- 06. INCIDENT LOG (Liability) ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Type", s:headerStyle}, {v:"Forensic Description", s:headerStyle}, {v:"Financial Loss", s:headerStyle}, {v:"Resolution", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT & LIABILITY REGISTRY", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 25, 20, 60, 20, 25].map(w => ({ wch: w }));
    addSoftwareHeader(iWs);
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. ROI ENGINE ---
    const rHeaders = [{v:"Risk Category", s:headerStyle}, {v:"Potential Loss (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}, {v:"ROI Impact", s:headerStyle}];
    const rData = [
        [], [{v:"PROFIT PROTECTION & ROI ENGINE", s:{font:{sz:18, bold:true}}}], [], rHeaders,
        [{v:"Health Dept Closure", s:dataStyleLeft}, {v:500000, s:dataStyleCenter}, {v:"PROTECTED", s:dataStyleCenter}, {v:"100x Cost"}],
        [{v:"Guest Injury (Slip/Fall)", s:dataStyleLeft}, {v:1200000, s:dataStyleCenter}, {v:"PROTECTED", s:dataStyleCenter}, {v:"240x Cost"}]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [35, 25, 20, 20].map(w => ({ wch: w }));
    addSoftwareHeader(rWs);
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 08. PERSONNEL ---
    const pHeaders = [{v:"ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, {v:"Phone", s:headerStyle}, {v:"Email", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData = [[], [{v:"PERSONNEL & ROLE ASSIGNMENT", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [10, 30, 30, 20, 35, 15].map(w => ({ wch: w }));
    addSoftwareHeader(pWs);
    utils.book_append_sheet(wb, pWs, "PERSONNEL");

    // --- 09. MASTER PROTOCOL (Absolute Last) ---
    const mpHeaders = [{v:"Task ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement Description (EDIT ONCE)", s:headerStyle}, {v:"Consequence of Failure", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}];
    const mpData: any[][] = [[], [{ v: "MASTER PROTOCOL DATABASE: SINGLE SOURCE OF TRUTH", s: { font: { sz: 16, bold: true } } }], [], mpHeaders];
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
    mpWs['!cols'] = [12, 25, 60, 40, 45, 12, 10].map(w => ({ wch: w }));
    addSoftwareHeader(mpWs);
    utils.book_append_sheet(wb, mpWs, "MASTER_PROTOCOL");

    // Apply Borders only to active data range
    wb.SheetNames.forEach(name => {
        const ws = wb.Sheets[name];
        const range = utils.decode_range(ws['!ref'] || 'A1');
        for (let R = range.s.r; R <= range.e.r; ++R) {
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = ws[utils.encode_cell({ r: R, c: C })];
                if (cell && R > 0) cell.s = { ...cell.s, border: borderStyle };
            }
        }
    });

    writeFile(wb, `${item.title.replace(/ /g, '_')}_V4.2_ENTERPRISE.xlsx`);
}
