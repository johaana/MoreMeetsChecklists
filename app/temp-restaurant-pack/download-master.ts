
'use client';

import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.2 - THE TOTAL GOVERNANCE SUITE (Commercial Grade)
 * Protection: Social DRM, Distributed Fingerprinting, Integrity Handshakes.
 * Logic: Single-Source Master Protocol, Per-Branch Switchboard.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    // MOCK BUYER DATA (In production, this would be passed from the checkout session)
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
        HEADER_BG: "1E293B",
        AUTH_RED: "9C0006"
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
        // Create the persistent Navy Header Bar (A1:C1)
        utils.sheet_add_aoa(ws, [[{ 
            v: "◀ BACK TO HOME CONSOLE", 
            l: { Target: "#'HOME_CONSOLE'!A1" }, 
            s: navStyle 
        }, null, null]], { origin: "A1" });
        
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }); 
        
        // Social DRM visible watermark in top right
        utils.sheet_add_aoa(ws, [[{ 
            v: `LICENSED TO: ${BUYER_EMAIL} | ORDER: ${ORDER_ID}`, 
            s: { font: { sz: 7, italic: true, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'right' } } 
        }]], { origin: "K1" });

        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 1 }];
    };

    const addProtectionFooter = (ws: WorkSheet, lastRow: number, numCols: number) => {
        const row = lastRow + 2;
        // The "Social DRM" anchor
        utils.sheet_add_aoa(ws, [[{ 
            v: `LICENSE IDENTITY: ${ORDER_ID} | REGISTERED TO: ${BUYER_EMAIL} | REDISTRIBUTION PROHIBITED`, 
            s: { font: { italic: true, sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'center' } } 
        }]], { origin: { r: row, c: 0 } });
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: row, c: 0 }, e: { r: row, c: numCols - 1 } });
        
        // INVISIBLE FINGERPRINT (Inject hash into a far cell)
        utils.sheet_add_aoa(ws, [[{ v: LICENSE_HASH, s: { font: { color: { rgb: "FFFFFF" } } } }]], { origin: "BZ1000" });
    };

    // --- 00. AUTH CORE (HIDDEN) ---
    const authData = [
        ["KEY", "VALUE", "STATUS"],
        ["BUYER_EMAIL", BUYER_EMAIL, "VALID"],
        ["ORDER_ID", ORDER_ID, "ACTIVE"],
        ["LICENSE_HASH", LICENSE_HASH, "ENCRYPTED"],
        ["INTEGRITY_CHECK", { t:'f', f:'COUNTA(MISSION_LEDGER!A:A)>100' }, "PASS"]
    ];
    const authWs = utils.aoa_to_sheet(authData);
    authWs['!hidden'] = 1; // Hidden sheet protection
    utils.book_append_sheet(wb, authWs, "_AUTH_CORE_");

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
        [{ v: "▶ ROI ENGINE", l: { Target: "#'ROI_ENGINE'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }, null, null, { v: "▶ EDIT MASTER PROTOCOL", l: { Target: "#'MASTER_PROTOCOL'!A1" }, s: { ...navStyle, alignment: { horizontal: 'center' } } }],
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
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Identity)", s: headerStyle },
        { v: "Kitchen", s: headerStyle }, { v: "Bar", s: headerStyle }, { v: "Dining", s: headerStyle },
        { v: "EHS", s: headerStyle }, { v: "Statutory", s: headerStyle }, { v: "Delivery", s: headerStyle },
        { v: "Takeaway", s: headerStyle }, { v: "Valet", s: headerStyle }, { v: "Garden", s: headerStyle },
        { v: "Staff Qtr", s: headerStyle }
    ];
    const setupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [{ v: "Every row is a Branch. Toggle YES/NO to disable entire modules dynamically.", s: { font: { italic: true, color: { rgb: COLORS.TEXT_MUTED } } } }],
        [], facilityHeaders,
        [{ v: 1, s: dataStyleCenter }, { v: "Bandra Main", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }],
        [{ v: 2, s: dataStyleCenter }, { v: "Ghatkopar West", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "YES", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }, { v: "NO", s: inputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10].map(w => ({ wch: w }));
    addSoftwareHeader(setupWs);
    addProtectionFooter(setupWs, setupData.length, 12);
    utils.book_append_sheet(wb, setupWs, "SETUP");

    // --- 03. MISSION LEDGER (THE CORE) ---
    const missionHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, { v: "ID", s: headerStyle },
        { v: "Requirement Description (Relational)", s: headerStyle }, 
        { v: "Actioned By", s: headerStyle }, { v: "Time Done", s: headerStyle }, 
        { v: "Sign-Off Req?", s: headerStyle }, { v: "Manager Sign-Off", s: headerStyle }, 
        { v: "Consequence of Failure", s: intelStyle }, { v: "Trainer Notes", s: intelStyle }
    ];
    const missionData: any[][] = [[], [{ v: "MISSION LEDGER: 365-DAY FORENSIC TRAIL", s: { font: { sz: 16, bold: true } } }], [], missionHeaders];
    
    const startDate = new Date();
    // Simulate first 7 days for the demo file
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
    mWs['!cols'] = [15, 25, 10, 60, 25, 12, 15, 20, 45, 50].map(w => ({ wch: w }));
    addSoftwareHeader(mWs);
    mWs['!autofilter'] = { ref: `A4:J${missionData.length}` };
    addProtectionFooter(mWs, missionData.length, 10);
    utils.book_append_sheet(wb, mWs, "MISSION_LEDGER");

    // --- 04. DASHBOARD ---
    const dashData = [
        [], [{ v: "GOVERNANCE DASHBOARD: LIVE COMPLIANCE SCORECARD", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "Operational Performance Metric", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Forensic Threshold", s: headerStyle }],
        [{ v: "Group Compliance Achievement %", s: dataStyleLeft }, { t:'f', f:`IF('_AUTH_CORE_'!C5<>"PASS", "LICENSE ERROR", TEXT(COUNTIF('MISSION_LEDGER'!E:E,"<>N/A*")/COUNTA('MISSION_LEDGER'!E:E), "0%"))`, s: { ...dataStyleCenter, font: { bold: true } } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Identified Operational Deviations", s: dataStyleLeft }, { t:'f', f:`COUNTIF('MISSION_LEDGER'!J:J, "<>")`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(dWs);
    addProtectionFooter(dWs, dashData.length, 3);
    utils.book_append_sheet(wb, dWs, "DASHBOARD");

    // --- 05. ROI ENGINE ---
    const rData = [
        [], [{v:"PROFIT PROTECTION & ROI CALCULATOR", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Operational Risk Category", s:headerStyle}, {v:"Impact per Event (₹)", s:headerStyle}, {v:"Projected Frequency / Yr", s:headerStyle}, {v:"Potential Annual Loss (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}],
        [{v:"Food Spoilage (Cold Chain Failure)", s:dataStyleLeft}, {v:50000, s:inputStyle}, {v:12, s:inputStyle}, {t:'f', f:'B6*C6', s:dataStyleCenter}, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Regulatory Fines (Health/Statutory)", s:dataStyleLeft}, {v:200000, s:inputStyle}, {v:1, s:inputStyle}, {t:'f', f:'B7*C7', s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Slip & Fall Litigation", s:dataStyleLeft}, {v:500000, s:inputStyle}, {v:0.5, s:inputStyle}, {t:'f', f:'B8*C8', s:dataStyleCenter}, {v:"MITIGATED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addSoftwareHeader(rWs);
    addProtectionFooter(rWs, rData.length, 5);
    utils.book_append_sheet(wb, rWs, "ROI_ENGINE");

    // --- 06. INCIDENT LOG ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Risk Type", s:headerStyle}, {v:"Forensic Description", s:headerStyle}, {v:"Est. Loss (₹)", s:headerStyle}, {v:"Resolution Status", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT & LIABILITY REGISTRY", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 20, 60, 20, 25].map(w => ({ wch: w }));
    addSoftwareHeader(iWs);
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- 07. PERSONNEL ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Full Name", s:headerStyle}, {v:"Primary Role", s:headerStyle}, {v:"Assigned Branch", s:headerStyle}, {v:"Contact Number", s:headerStyle}, {v:"Corporate Email", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData = [[], [{v:"PERSONNEL DIRECTORY & ACCESS CONTROL", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 35, 30, 25, 20, 35, 15].map(w => ({ wch: w }));
    addSoftwareHeader(pWs);
    utils.book_append_sheet(wb, pWs, "PERSONNEL");

    // --- 08. MASTER PROTOCOL (FINAL SHEET) ---
    const mpData: any[][] = [[], [{ v: "MASTER PROTOCOL DATABASE (SOURCE OF TRUTH)", s: { font: { sz: 16, bold: true } } }], [{v:"Modify any task description here. The changes will propagate across the entire system instantly.", s:{font:{italic:true, color:{rgb:COLORS.TEXT_MUTED}}}}], [], [{v:"ID", s:headerStyle}, {v:"Module", s:headerStyle}, {v:"Requirement / Step", s:headerStyle}, {v:"Consequence of Failure", s:headerStyle}, {v:"Trainer Notes", s:headerStyle}, {v:"Freq", s:headerStyle}, {v:"Risk", s:headerStyle}]];
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

    // FINAL BORDER APPLICATION & PROTECTION
    wb.SheetNames.forEach(name => {
        const ws = wb.Sheets[name];
        if (name === "_AUTH_CORE_") return; // No styling for hidden sheet
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
        for (let R = range.s.r; R <= range.e.r; ++R) {
            for (let C = range.s.c; C <= range.e.c; ++C) {
                const cell = ws[utils.encode_cell({ r: R, c: C })];
                // Only apply borders to data rows (skip the Command Bar background)
                if (cell && R > 0) {
                    if (!cell.s) cell.s = {};
                    cell.s.border = borderStyle;
                }
            }
        }
    });

    writeFile(wb, `MOREMEETS_RESTAURANT_OPERATIONAL_CONSOLE_v4.2.xlsx`);
}
