
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * ROCS v4.3 Master - SOVEREIGN SALEABLE EDITION
 * Features: Hardened Status Logic, Inactive Module Grey-out, Symmetric Zero-Clipping.
 * Content: "Ready-to-Fill" Ghost Data for commercial sale.
 * 
 * HARDENED: Numeric cell values stringified for TypeScript.
 */
export const handleDownloadMaster = (item: PremiumPack) => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    
    const BUYER_EMAIL = "[BUYER EMAIL]";
    const ORDER_ID = "MM-ORD-[ID]";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_GOLD: "FACC15",   
        RISK_RED: "E11D48",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER_SOFT: "334155",
        INPUT_ZONE: "FEFCE8",
        CONSOLE_BG: "F1F5F9",
        CHAMBER_BG: "F8FAFC",
        MGR_YELLOW: "FEF9C3",
        INACTIVE_GREY: "F1F5F9"
    };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const boxBorder = { style: 'medium', color: { rgb: COLORS.NAVY_DEEP } };
    const baseFont = { name: 'Segoe UI', sz: 10 };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', vertical: 'center' },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { fgColor: { rgb: COLORS.TILE_BG } },
        alignment: { horizontal: 'center', vertical: 'center' },
        border: { 
            left: { style: 'thick', color: { rgb: COLORS.PRIMARY_GREEN } },
            top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
    };

    const addAppHeader = (ws: WorkSheet, endCol: string = 'K') => {
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
        [{ v: "MOREMEETS™ OPERATIONAL CONSOLE", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } }, fill: { fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Run Your Entire Operations From One Screen", s: { font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', vertical: 'center' } } }],
        [{ v: "Enterprise Continuity & Governance Suite v4.3 PRO | Sovereign Tier", s: { font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } }, alignment: { horizontal: 'center' } } }],
        [],
        [
            { v: "ADMIN & SETUP", s: { font: { bold: true }, border: borderStyle } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true }, border: borderStyle } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true }, border: borderStyle } }
        ],
        [
            { v: "▶ BRANCH SETUP", l: { Target: "#'BRANCH_SETUP'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ TEAM HUB", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ COST & SAVINGS", l: { Target: "#'COST_SAVINGS_TRACKER'!A1" }, s: tileStyle }
        ],
        [
            { v: "▶ MASTER SOPs", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ HOW THIS WORKS", l: { Target: "#'HOW_THIS_WORKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: tileStyle }, null
        ],
        [],
        [{ v: `REGISTERED TO: ${BUYER_EMAIL} | ORDER ID: ${ORDER_ID}`, s: { font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } }, alignment: { horizontal: 'left' } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!merges'] = [
<<<<<<< HEAD
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } },
        { s: { r: 6, c: 0 }, e: { r: 6, c: 1 } }, { s: { r: 6, c: 2 }, e: { r: 6, c: 3 } }, { s: { r: 6, c: 4 }, e: { r: 6, c: 5 } },
        { s: { r: 7, c: 0 }, e: { r: 7, c: 1 } }, { s: { r: 7, c: 2 }, e: { r: 7, c: 3 } }, { s: { r: 7, c: 4 }, e: { r: 7, c: 5 } },
        { s: { r: 8, c: 0 }, e: { r: 8, c: 1 } }, { s: { r: 8, c: 2 }, e: { r: 8, c: 3 } }, { s: { r: 8, c: 4 }, e: { r: 8, c: 5 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 1 } }, { s: { r: 9, c: 2 }, e: { r: 9, c: 3 } }, { s: { r: 9, c: 4 }, e: { r: 9, c: 5 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 5 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 1 } }, { s: { r: 12, c: 2 }, e: { r: 12, c: 3 } }, { s: { r: 12, c: 4 }, e: { r: 12, c: 5 } },
        { s: { r: 15, c: 0 }, e: { r: 15, c: 5 } }
=======
        { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } }, { s: { r: 4, c: 0 }, e: { r: 4, c: 5 } }
>>>>>>> 1f28b33d09c43b713e161328064bc97a3f7d40a5
    ];
    homeWs['!views'] = [{ showGridLines: false }];
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    const subSheets = [
        { name: "BRANCH_SETUP", title: "BRANCH MASTER SETUP" },
        { name: "TODAYS_TASKS", title: "DAILY TASK EXECUTION LOG" },
        { name: "BUSINESS_HEALTH", title: "EXECUTIVE ANALYTICS" },
        { name: "TEAM_HUB", title: "TEAM HUB & DIRECTORY" },
        { name: "SHIFT_HANDOVER", title: "SHIFT HANDOVER BRIDGE" },
        { name: "INCIDENT_TRACKER", title: "LIABILITY & INCIDENT LOG" },
        { name: "SOP_LIBRARY", title: "SOP LIBRARY DATABASE" },
        { name: "COST_SAVINGS_TRACKER", title: "COST & SAVINGS TRACKER" },
        { name: "HOW_THIS_WORKS", title: "SYSTEM COMMAND MANUAL" }
    ];
<<<<<<< HEAD
    const branchSetupData = [
        [], [{ v: "BRANCH IDENTITY & FACILITY SWITCHBOARD", s: { font: { sz: 18, bold: true } } }], 
        [],
        [], facilityHeaders,
        [{ v: "1", s: dataStyleCenter }, { v: "Type Branch 1 Name", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }],
        [{ v: "2", s: dataStyleCenter }, { v: "Type Branch 2 Name", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "NO", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "YES", s: ghostInputStyle }, { v: "NO", s: ghostInputStyle }, { v: "NO", s: ghostInputStyle }, { v: "NO", s: ghostInputStyle }]
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, 10, 10, 10, 10, 10, 10, 15, 10, 10, 10].map(w => ({ wch: w }));
    addAppHeader(setupWs, 'L');
    utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");
=======
>>>>>>> 1f28b33d09c43b713e161328064bc97a3f7d40a5

    subSheets.forEach(s => {
        const ws = utils.aoa_to_sheet([[],[{v: s.title, s: { font: { bold: true, sz: 18, color: { rgb: COLORS.NAVY_DEEP } } }}]]);
        addAppHeader(ws, 'K');
        utils.book_append_sheet(wb, ws, s.name);
    });

<<<<<<< HEAD
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 25, 30, 10, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addAppHeader(mWs, 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 04. BUSINESS_HEALTH ---
    const dashData = [
        [], [{ v: "BUSINESS HEALTH: PERFORMANCE HUB", s: { font: { sz: 20, bold: true } } }], [],
        [{ v: "GROUP KPIs", s: groupHeaderStyle }, null, null],
        [{ v: "Operational KPI", s: headerStyle }, { v: "Live Status", s: headerStyle }, { v: "Target Threshold", s: headerStyle }],
        [{ v: "Group Shift Progress", s: dataStyleLeft }, { t:'f', f:`IFERROR(TEXT(COUNTIF('TODAYS_TASKS'!I:I, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!F:F, "<>N/A*", 'TODAYS_TASKS'!F:F, "<>", 'TODAYS_TASKS'!F:F, "<>Mission Requirement*")), "0%"), "0%")`, s: { ...dataStyleCenter, font: { bold: true }, numFmt: '0%' } }, { v: "95% MIN", s: dataStyleCenter }],
        [{ v: "Group Active Incidents", s: dataStyleLeft }, { t:'f', f:`IF(COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN")=0, "NONE", COUNTIF('INCIDENT_TRACKER'!G:G, "OPEN"))`, s: dataStyleCenter }, { v: "ZERO TOLERANCE", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.RISK_RED } } } }]
    ];
    const dWs = utils.aoa_to_sheet(dashData);
    dWs['!cols'] = [40, 25, 20].map(w => ({ wch: w }));
    addAppHeader(dWs, 'C');
    utils.book_append_sheet(wb, dWs, "BUSINESS_HEALTH");

    // --- 05. TEAM_HUB ---
    const pHeaders = [{v:"Staff ID", s:headerStyle}, {v:"Role Name", s:headerStyle}, {v:"Full Name (Assigned)", s:headerStyle}, {v:"Assigned Branch", s:headerStyle}, {v:"Contact", s:headerStyle}, {v:"Status", s:headerStyle}];
    const pData = [[], [{v:"TEAM HUB & ROLE ASSIGNMENT", s:{font:{sz:18, bold:true}}}], [], pHeaders];
    const roles = ["Head Chef", "Sous Chef", "Bar Manager", "Head Bartender", "Floor Manager", "General Manager", "Owner/COO", "Dispatch Coordinator", "Hostess", "Security Manager", "Facility Manager", "HR Supervisor"];
    roles.forEach((role, idx) => {
        pData.push([
            { v: String(idx + 1), s: dataStyleCenter },
            { v: role, s: dataStyleLeft },
            { v: "Type Person Name", s: ghostInputStyle }, 
            { v: "Type Branch Name", s: ghostInputStyle },
            { v: "Contact Details", s: ghostInputStyle },
            { v: "ACTIVE", s: dataStyleCenter }
        ]);
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [12, 30, 35, 25, 20, 25].map(w => ({ wch: w }));
    addAppHeader(pWs, 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 06. INCIDENT_TRACKER ---
    const iHeaders = [{v:"Date", s:headerStyle}, {v:"Time", s:headerStyle}, {v:"Branch", s:headerStyle}, {v:"Category", s:headerStyle}, {v:"Description", s:headerStyle}, {v:"Impact (₹)", s:headerStyle}, {v:"Status (OPEN/CLOSED)", s:headerStyle}, {v:"Resolution", s:headerStyle}];
    const iData = [[], [{v:"INCIDENT TRACKER: LIABILITY LOG", s:{font:{sz:18, bold:true}}}], [], iHeaders];
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [15, 12, 25, 35, 60, 30, 20, 35].map(w => ({ wch: w }));
    addAppHeader(iWs, 'H');
    utils.book_append_sheet(wb, iWs, "INCIDENT_TRACKER");

    // --- 07. SHIFT_HANDOVER ---
    const hHeaders = [{v:"Date", s:headerStyle}, {v:"AM Manager", s:headerStyle}, {v:"PM Manager", s:headerStyle}, {v:"Handover Details", s:headerStyle}, {v:"Outstanding Tasks", s:headerStyle}, {v:"Proof (Digital Acknowledgement)", s:headerStyle}];
    const hData = [[], [{v:"SHIFT HANDOVER BRIDGE", s:{font:{sz:18, bold:true}}}], [], hHeaders];
    const hWs = utils.aoa_to_sheet(hData);
    hWs['!cols'] = [15, 25, 25, 60, 60, 45].map(w => ({ wch: w }));
    addAppHeader(hWs, 'F');
    utils.book_append_sheet(wb, hWs, "SHIFT_HANDOVER");

    // --- 08. SOP_LIBRARY ---
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
    addAppHeader(mpWs, 'G');
    utils.book_append_sheet(wb, mpWs, "SOP_LIBRARY");

    // --- 09. COST_SAVINGS ---
    const rData = [
        [], [{v:"COST & SAVINGS TRACKER", s:{font:{sz:18, bold:true}}}], [], 
        [{v:"Risk Category", s:headerStyle}, {v:"Impact per Event (₹)", s:headerStyle}, {v:"Frequency / Yr", s:headerStyle}, {v:"Projected Annual Loss (₹)", s:headerStyle}, {v:"Mitigation Status", s:headerStyle}],
        [{v:"Food Spoilage (Cold Chain Failure)", s:dataStyleLeft}, {v: "50000", s:ghostInputStyle}, {v: "12", s:ghostInputStyle}, {t:'f', f:'B6*C6', s:dataStyleCenter}, {v:"SECURED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{v:"Regulatory Fines (Health/Statutory)", s:dataStyleLeft}, {v: "200000", s:ghostInputStyle}, {v: "1", s:ghostInputStyle}, {t:'f', f:'B7*C7', s:dataStyleCenter}, {v:"PROTECTED", s: { ...dataStyleCenter, font: { color: { rgb: COLORS.PRIMARY_GREEN } } } }]
    ];
    const rWs = utils.aoa_to_sheet(rData);
    rWs['!cols'] = [40, 25, 25, 25, 20].map(w => ({ wch: w }));
    addAppHeader(rWs, 'E');
    utils.book_append_sheet(wb, rWs, "COST_SAVINGS_TRACKER");

    // --- 10. HOW THIS WORKS ---
    const guideData = [
        [], 
        [{ v: "👨‍🍳 THE SOVEREIGN SYSTEM MANUAL", s: { font: { sz: 22, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [{ v: "The Definitive Protocol for Standardized Restaurant Operations", s: { font: { italic: true, sz: 10, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [{ v: "SECTION", s: headerStyle }, { v: "ACTION STEPS & SYSTEM PROTOCOLS", s: headerStyle }],
        
        [{ v: "1. THE ENGINE SETUP", s: instructionTitleStyle }, { v: "Go to 'BRANCH_SETUP' first. Use the Switchboard to toggle your facilities (Kitchen, Bar, etc.) to YES or NO. This automatically flags irrelevant tasks as Inactive in your daily ledger, keeping your team focused only on what exists.", s: instructionBodyStyle }],
        [],
        
        [{ v: "2. ASSIGNING HEROES", s: instructionTitleStyle }, { v: "Go to 'TEAM_HUB'. Type the real names of your staff next to their roles. This ensures every task in the Ledger is personally assigned to an individual. If a role is empty, the task is an 'orphan'—give it a parent for accountability.", s: instructionBodyStyle }],
        [],
        
        [{ v: "3. FINDING YOUR WORK", s: instructionTitleStyle }, { v: "Staff: Go to 'TODAYS_TASKS'. Click the filter arrow [v] on the 'Responsible Role' column. Uncheck everything except YOUR role. This turns a 240-task list into your personal to-do list in one click.", s: instructionBodyStyle }],
        [],
        
        [{ v: "4. THE DAILY PULSE", s: instructionTitleStyle }, { v: "When a task is done, type your initials in 'Done By'. The system will move the status to 'AWAITING MGR' or 'COMPLETED' automatically. Don't skip the initials—it is your digital signature of professional excellence.", s: instructionBodyStyle }],
        [],
        
        [{ v: "5. MANAGER VERIFICATION", s: instructionTitleStyle }, { v: "Managers: Look for Yellow Cells in the 'Verified By' column. These are high-risk control points that require leadership sign-off. Once you type your initials, the mission status turns COMPLETED. This is your final quality gate.", s: instructionBodyStyle }],
        [],
        
        [{ v: "6. THE SHIFT BRIDGE", s: instructionTitleStyle }, { v: "Use 'SHIFT_HANDOVER' to communicate between Morning and Night teams. Log outstanding prep, maintenance issues, or VIP arrivals. This prevents information loss during shift changes.", s: instructionBodyStyle }],
        [],
        
        [{ v: "7. INCIDENT COMMAND", s: instructionTitleStyle }, { v: "If a safety, hygiene, or legal incident occurs, log it immediately in the 'INCIDENT_TRACKER'. Include the estimated financial impact. This creates the 'Black Box' data needed for insurance defense and group learning.", s: instructionBodyStyle }],
        [],
        
        [{ v: "8. VIEWING HISTORY", s: instructionTitleStyle }, { v: "To review old records, use the filter arrow [v] on the 'Date' column in 'TODAYS_TASKS'. Uncheck 'Today' and select any past date to audit previous shift performance or prove compliance during an inspection.", s: instructionBodyStyle }],
        [],
        
        [{ v: "9. EVOLVING THE BIBLE", s: instructionTitleStyle }, { v: "To add a permanent new task, edit the 'SOP_LIBRARY'. Any changes there will flow into the daily execution ledger for all future entries automatically. Your system should get smarter every month.", s: instructionBodyStyle }],
        [],
        
        [{ v: "10. TRACKING THE ROI", s: instructionTitleStyle }, { v: "Go to 'COST_SAVINGS_TRACKER'. Input the estimated cost of a single failure (e.g., a fridge breakdown). The system calculates your annual 'At-Risk' value, showing exactly how much money your discipline is protecting.", s: instructionBodyStyle }],
        [],
        
        [{ v: "PRO-TIP: Save a fresh copy of this file every month (e.g. ROCS_March_Bandra.xlsx) to keep your data organized and the file speed optimal. Historical data stays safe in previous files.", s: { font: { italic: true, bold: true, color: { rgb: COLORS.INTEL_GREY } } } }]
    ];

    const guideWs = utils.aoa_to_sheet(guideData);
    guideWs['!cols'] = [{ wch: 35 }, { wch: 100 }];
    guideWs['!merges'] = [
        { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } }, 
        { s: { r: 2, c: 0 }, e: { r: 2, c: 1 } },
        { s: { r: 24, c: 0 }, e: { r: 24, c: 1 } }
    ];
    addAppHeader(guideWs, 'B');
    utils.book_append_sheet(wb, guideWs, "HOW_THIS_WORKS");

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
            { name: "TEAM_HUB", Hidden: 0 },
            { name: "SHIFT_HANDOVER", Hidden: 0 },
            { name: "INCIDENT_TRACKER", Hidden: 0 },
            { name: "SOP_LIBRARY", Hidden: 0 },
            { name: "COST_SAVINGS_TRACKER", Hidden: 0 },
            { name: "HOW_THIS_WORKS", Hidden: 0 },
            { name: "_AUTH_CORE_", Hidden: 1 }
        ]
    };

    writeFile(wb, `ROCS_v4.3_Sovereign_Master.xlsx`);
=======
    writeFile(wb, `ROCS_Sovereign_Build.xlsx`);
>>>>>>> 1f28b33d09c43b713e161328064bc97a3f7d40a5
}
