
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack, Checklist } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

/**
 * Sovereign Engine v9.6 - RESPONSIBILITY MAPPING UPDATE
 * UI: Header height reduced to 60pt for sheets 2+.
 * Logic: Responsibility Mapping (Role -> Assigned To) for 1-to-many staff flexibility.
 * Personnel: Preserved 22-32 role density for Elite 7.
 */
export const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data.");
        return;
    }

    const wb = utils.book_new();
    const startDate = new Date(); 
    
    const BUYER_EMAIL = "ADMIN@MOREMEETS.COM";
    const ORDER_ID = "MM-SOVEREIGN-9.6-MASTER";

    const COLORS = {
        NAVY_DEEP: "0A0F19",      
        PRIMARY_GREEN: "2EB86B", 
        ACCENT_AMBER: "D97706",   
        VITAL_BLUE: "1E40AF",      
        WHITE: "FFFFFF",
        TEXT_MUTED: "94A3B8",
        INTEL_GREY: "64748B",    
        HEADER_BG: "1E293B",
        TILE_BG: "111827",
        BORDER_SOFT: "334155",
        INPUT_ZONE: "FEFCE8",
        CONSOLE_BG: "0A0F19",
        CHAMBER_BG: "111827",
        MGR_TARGET: "FDE68A", 
        SOFT_RED: "FEF2F2",
        SOFT_GREEN: "ECFDF5",
        RISK_RED: "E11D48"
    };

    const baseFont = { name: 'Segoe UI', sz: 10 };
    const verticalCenter = { vertical: 'center' };

    const borderStyle = {
        top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        left: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
        right: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } }
    };

    const navStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.PRIMARY_GREEN }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const labelStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 8 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'right', ...verticalCenter }
    };

    const tileStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } },
        alignment: { horizontal: 'center', ...verticalCenter },
        border: { 
            left: { style: 'thick', color: { rgb: COLORS.PRIMARY_GREEN } },
            top: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } },
            bottom: { style: 'medium', color: { rgb: "000000" } },
            right: { style: 'medium', color: { rgb: "000000" } }
        }
    };

    const ribbonHeaderStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 14 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'medium', color: { rgb: COLORS.PRIMARY_GREEN } } }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } },
        alignment: { horizontal: 'center', wrapText: true, ...verticalCenter },
        border: borderStyle
    };

    const dataStyleLeft = { 
        font: baseFont,
        alignment: { horizontal: 'left', wrapText: true, ...verticalCenter },
        border: borderStyle
    };

    const dataStyleCenter = {
        font: baseFont,
        alignment: { horizontal: 'center', ...verticalCenter },
        border: borderStyle
    };

    const inputStyle = {
        ...dataStyleCenter,
        font: { ...baseFont, color: { rgb: "000000" }, bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const inputStyleLeft = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "000000" }, bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_ZONE } }
    };

    const warningStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "991B1B" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_RED } },
        alignment: { ...verticalCenter, wrapText: true }
    };

    const coachingStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: "065F46" }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.SOFT_GREEN } },
        alignment: { ...verticalCenter, wrapText: true }
    };

    const addSovereignRibbon = (ws: WorkSheet, title: string, endCol: string = 'K', customTitleHpt: number = 45, headerRowHpt: number = 60) => {
        const ribbonData = [
            [{ v: "◀ BACK TO CONSOLE", l: { Target: "#'HOME_CONSOLE'!A1" }, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: ribbonHeaderStyle }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        
        const range = utils.decode_range(`A1:${endCol}1`);
        const titleRange = utils.decode_range(`A2:${endCol}2`);
        
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: range.e.c } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: titleRange.e.c } }); 

        for(let c = 0; c <= range.e.c; c++) {
            const cell1 = utils.encode_cell({r: 0, c});
            const cell2 = utils.encode_cell({r: 1, c});
            if(!ws[cell1]) ws[cell1] = { v: "", s: navStyle };
            if(!ws[cell2]) ws[cell2] = { v: "", s: ribbonHeaderStyle };
        }
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 2 }];
        
        ws['!rows'] = [{ hpt: 25 }, { hpt: customTitleHpt }, { hpt: 15 }, { hpt: headerRowHpt }];
        for(let r = 4; r < 5000; r++) {
            ws['!rows'][r] = { hpt: 25 };
        }
    };

    let packChecklists: Checklist[] = [];
    if ('checklists' in item) {
        packChecklists = item.checklists;
    } else {
        packChecklists = [{
            title: item.title,
            tasks: item.tasks,
            department: item.category,
            frequency: "Daily",
            role: "Operator",
            summary: item.description,
            icon: item.icon
        }];
    }

    // --- 01. HOME CONSOLE ---
    const homeData: any[][] = [
        [], [],
        [null, { v: `MOREMEETS™ ${item.title.toUpperCase()} CONSOLE`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { sz: 22, bold: true, color: { rgb: COLORS.WHITE } } } }],
        [null, { v: `Institutional Operating System v9.6 | Sovereign Master Build`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { italic: true, bold: true, sz: 12, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `Authenticated Deployment: ${BUYER_EMAIL}`, s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { horizontal: 'center', ...verticalCenter }, font: { italic: true, sz: 8, color: { rgb: COLORS.INTEL_GREY } } } }],
        [],
        [
            null,
            { v: "ADMIN & SETUP", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "DAILY OPERATIONS", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }, null, 
            { v: "EXECUTIVE INTEL", s: { font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter }, border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } } } }
        ],
        [
            null,
            { v: "▶ BRANCH SETUP", l: { Target: "#'BRANCH_MASTER'!A1" }, s: tileStyle }, null, 
            { v: "▶ TODAY'S TASKS", l: { Target: "#'TODAYS_TASKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ BUSINESS HEALTH", l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: tileStyle }
        ],
        [
            null,
            { v: "▶ TEAM HUB", l: { Target: "#'TEAM_HUB'!A1" }, s: tileStyle }, null, 
            { v: "▶ SHIFT HANDOVER", l: { Target: "#'SHIFT_HANDOVER'!A1" }, s: tileStyle }, null, 
            { v: "▶ FINANCIAL SHIELD", l: { Target: "#'FINANCIAL_SHIELD'!A1" }, s: tileStyle }
        ],
        [
            null,
            { v: "▶ MASTER SOPs", l: { Target: "#'SOP_LIBRARY'!A1" }, s: tileStyle }, null, 
            { v: "▶ HOW THIS WORKS", l: { Target: "#'HOW_THIS_WORKS'!A1" }, s: tileStyle }, null, 
            { v: "▶ INCIDENT LOG", l: { Target: "#'INCIDENT_TRACKER'!A1" }, s: tileStyle }, null
        ],
        [],
        [null, { t: 'f', f: `IFERROR("EMPIRE MOOD: " & IF(G15>=0.9, "HOT - PERFECT EXECUTION!", IF(G15>=0.6, "STABLE - PUSH HARDER", IF(G15>0, "COLD - TURN UP THE HEAT!", "AWAITING DATA"))), "EMPIRE MOOD: LOADING...")`, s: { font: { sz: 16, bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.TILE_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null, null, null, null, null],
        [
            null,
            { v: "🏆 TEAM GLORY", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null, 
            { v: "⚡ MOMENTUM", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null,
            { v: "🛡️ COMMAND VITALS", s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } }, null
        ],
        [
            null,
            { v: "TODAY'S STAR:", s: labelStyle },
            { t: 'f', f: `IF(MAX('TEAM_HUB'!$G$5:$G$500)>0, INDEX('TEAM_HUB'!$D$5:$D$500, MATCH(MAX('TEAM_HUB'!$G$5:$G$500), 'TEAM_HUB'!$G$5:$G$500, 0)), "AWAITING DATA")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center', ...verticalCenter } } },
            { v: "TOP BRANCH:", s: labelStyle },
            { t: 'f', f: `IF(MAX('BRANCH_MASTER'!$K$5:$K$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$K$5:$K$15), 'BRANCH_MASTER'!$K$5:$K$15, 0)), "AWAITING DATA")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.ACCENT_AMBER } }, alignment: { horizontal: 'center', ...verticalCenter } } },
            { v: "TASKS LOGGED:", s: labelStyle },
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$I$5:$I$5000, "COMPLETED")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, alignment: { horizontal: 'center', ...verticalCenter } } }
        ],
        [
            null,
            { v: "OPERATIONAL PULSE:", s: labelStyle },
            { t: 'f', f: `IF(COUNTIFS('TEAM_HUB'!$D$5:$D$500, "?*")=0, "AWAITING DATA", TEXT(COUNTIFS('TEAM_HUB'!$G$5:$G$500, ">0") / MAX(1, COUNTIFS('TEAM_HUB'!$D$5:$D$500, "?*")), "0%") & " (" & COUNTIFS('TEAM_HUB'!$G$5:$G$500, ">0") & "/" & COUNTIFS('TEAM_HUB'!$D$5:$D$500, "?*") & ")")`, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.CHAMBER_BG } }, alignment: { horizontal: 'center', ...verticalCenter } } },
            { v: "🚨 CRITICAL WATCH:", s: labelStyle },
            { t: 'f', f: `IF(MAX('BRANCH_MASTER'!$L$5:$L$15)>0, INDEX('BRANCH_MASTER'!$B$5:$B$15, MATCH(MAX('BRANCH_MASTER'!$L$5:$L$15), 'BRANCH_MASTER'!$L$5:$L$15, 0)), "ALL CLEAR")`, l: { Target: "#'BUSINESS_HEALTH'!A1" }, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9, underline: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.RISK_RED } }, alignment: { horizontal: 'center', ...verticalCenter } } },
            { v: "SHIFT PROGRESS:", s: labelStyle },
            { t: 'f', f: `IFERROR(COUNTIF('TODAYS_TASKS'!$I$5:$I$5000, "COMPLETED") / MAX(1, COUNTIFS('TODAYS_TASKS'!$F$5:$F$5000, "?*")), 0)`, s: { font: { bold: true, color: { rgb: COLORS.WHITE }, sz: 9 }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.VITAL_BLUE } }, numFmt: '0%', alignment: { horizontal: 'center', ...verticalCenter } } }
        ],
        [],
        [null, { v: "USER GUIDE: Enter your FULL NAME in 'Assigned To' in TEAM HUB to trigger your contribution pulse.", s: { ...labelStyle, alignment: { horizontal: 'center', ...verticalCenter }, font: { sz: 9, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
        [null, { v: `LICENSED TO: ${BUYER_EMAIL} | SECURE AUTHENTICATION: ${ORDER_ID}`, s: { ...labelStyle, alignment: { horizontal: 'center', ...verticalCenter }, font: { sz: 8, color: { rgb: COLORS.TEXT_MUTED } } } }]
    ];

    const homeWs = utils.aoa_to_sheet(homeData);
    homeWs['!cols'] = [5, 22, 28, 22, 28, 22, 28].map(w => ({ wch: w }));
    homeWs['!rows'] = [];
    for(let r = 0; r < 35; r++) homeWs['!rows'][r] = { hpt: 25 };
    homeWs['!rows'][2] = { hpt: 45 };

    for (let R = 0; R < 35; R++) {
        for (let C = 0; C < 10; C++) {
            const cell = utils.encode_cell({ r: R, c: C });
            if (!homeWs[cell]) homeWs[cell] = { v: "", s: { fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } }, alignment: { ...verticalCenter } } };
            else if (homeWs[cell].s) {
                homeWs[cell].s.alignment = { ...homeWs[cell].s.alignment, ...verticalCenter };
            }
        }
    }

    homeWs['!merges'] = [
        { s: { r: 2, c: 1 }, e: { r: 2, c: 6 } }, { s: { r: 3, c: 1 }, e: { r: 3, c: 6 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 6 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 2 } }, { s: { r: 6, c: 3 }, e: { r: 6, c: 4 } }, { s: { r: 6, c: 5 }, e: { r: 6, c: 6 } },
        { s: { r: 11, c: 1 }, e: { r: 11, c: 6 } },
        { s: { r: 12, c: 1 }, e: { r: 12, c: 2 } }, { s: { r: 12, c: 3 }, e: { r: 12, c: 4 } }, { s: { r: 12, c: 5 }, e: { r: 12, c: 6 } },
        { s: { r: 15, c: 1 }, e: { r: 15, c: 6 } },
        { s: { r: 17, c: 1 }, e: { r: 17, c: 6 } }, { s: { r: 18, c: 1 }, e: { r: 18, c: 6 } }
    ];
    
    utils.book_append_sheet(wb, homeWs, "HOME_CONSOLE");

    // --- 02. BRANCH MASTER ---
    const facilityHeaders = [
        { v: "Branch ID", s: headerStyle }, { v: "Branch Name (Edit Here)", s: headerStyle },
        ...packChecklists.map(c => ({ v: c.title, s: headerStyle })),
        { v: "Score (Ghost)", s: headerStyle }, { v: "Risk Load (Ghost)", s: headerStyle } 
    ];
    const branchNames = ["Colaba (Sample)", "Bandra (Sample)", "Borivali (Sample)"];
    const branchSetupData = [
        [], [], [],
        facilityHeaders,
        ...branchNames.map((name, i) => [
            { v: (i + 1).toString(), s: dataStyleCenter },
            { v: name, s: inputStyle },
            ...packChecklists.map(() => ({ v: "YES", s: inputStyle })),
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$G$5:$G$5000, "?*", 'TODAYS_TASKS'!$B$5:$B$5000, B${5+i}, 'TODAYS_TASKS'!$I$5:$I$5000, "COMPLETED")`, s: dataStyleCenter },
            { t: 'f', f: `COUNTIFS('TODAYS_TASKS'!$B$5:$B$5000, B${5+i}, 'TODAYS_TASKS'!$K$5:$K$5000, "High", 'TODAYS_TASKS'!$I$5:$I$5000, "<>COMPLETED")`, s: dataStyleCenter }
        ])
    ];
    const setupWs = utils.aoa_to_sheet(branchSetupData);
    setupWs['!cols'] = [12, 35, ...packChecklists.map(() => 25), 15, 15].map((w, i) => ({ wch: w }));
    addSovereignRibbon(setupWs, "Branch Master Setup", utils.encode_col(facilityHeaders.length - 1));
    utils.book_append_sheet(wb, setupWs, "BRANCH_MASTER");

    // --- 03. MISSION LEDGER (TODAYS_TASKS) ---
    // Nomenclature Change: Role / Assigned To (Auto)
    const mHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, { v: "Assigned To (Auto)", s: headerStyle },
        { v: "Task ID", s: headerStyle }, { v: "Requirement / Control Step", s: headerStyle }, 
        { v: "Done By (Full Name)", s: headerStyle }, { v: "Verified By (Manager)", s: headerStyle },
        { v: "Status", s: headerStyle }, 
        { v: "Freq", s: headerStyle }, { v: "Risk", s: headerStyle },
        { v: "Consequence", s: warningStyle }, { v: "Trainer's Notes", s: coachingStyle }
    ];
    const mData: any[][] = [[], [], [], mHeaders];
    
    [1, 2, 3].forEach(bCode => {
        packChecklists.forEach((c) => {
            c.tasks.forEach(t => {
                const rowIdx = mData.length + 1;
                const statusFormula = `IF(LEN(TRIM(G${rowIdx}))=0, "PENDING", IF(AND(LEN(TRIM(H${rowIdx}))=0, H${rowIdx}<>"N/A"), "AWAITING MGR", "COMPLETED"))`;
                const personFormula = `IFERROR(VLOOKUP(B${rowIdx} & "|" & C${rowIdx}, 'TEAM_HUB'!A:D, 4, FALSE), "[UNASSIGNED]")`;
                mData.push([
                    { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                    { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bCode}), "")`, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { t: 'f', f: personFormula, s: dataStyleCenter },
                    { v: t.id, s: dataStyleCenter },
                    { v: t.description, s: dataStyleLeft },
                    { v: "", s: inputStyle }, 
                    { v: t.priority === 'High' ? "" : "N/A", s: t.priority === 'High' ? inputStyle : dataStyleCenter },
                    { t: 'f', f: statusFormula, s: { ...dataStyleCenter, font: { bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } },
                    { v: c.frequency, s: dataStyleCenter },
                    { v: t.priority, s: dataStyleCenter },
                    { v: t.consequence, s: warningStyle },
                    { v: t.trainerNotes || "-", s: coachingStyle }
                ]);
            });
        });
    });

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [15, 25, 25, 30, 12, 65, 20, 20, 20, 12, 12, 45, 50].map(w => ({ wch: w }));
    addSovereignRibbon(mWs, "Mission Execution Ledger", 'M');
    mWs['!autofilter'] = { ref: `A4:M${mData.length}` };
    utils.book_append_sheet(wb, mWs, "TODAYS_TASKS");

    // --- 04. TEAM HUB ---
    // Nomenclature Change: Role / Assigned To (Input)
    const getRolesForPack = (packId: string) => {
        if (packId === 'restaurants') {
            return ["Owner / Managing Director", "COO / Regional Manager", "Unit General Manager", "Assistant Restaurant Manager", "Floor Captain (Shift A)", "Floor Captain (Shift B)", "Hostess / Reception", "Head Waiter", "Junior Steward", "Executive Chef", "Sous Chef", "CDP (Main Kitchen)", "Commi Chef (Prep)", "Kitchen Steward / Utility", "Finance & Accounts Head", "Billing Cashier (Shift A)", "Billing Cashier (Shift B)", "Store & Purchase Manager", "EHS & Food Safety Officer", "HR & Training Manager", "Technical Maintenance Lead", "Delivery & Logistics Lead"];
        }
        if (packId === 'hotels_and_resorts') {
            return ["Owner / Managing Director", "COO / Owner", "General Manager", "Resident Manager", "Finance Controller", "Finance & Cashier", "Night Auditor", "Billing Desk (Shift A)", "Billing Desk (Shift B)", "Front Office Manager", "Duty Manager (Shift A)", "Duty Manager (Shift B)", "Customer Experience Lead", "Guest Relations Manager", "Concierge Lead", "Executive Housekeeper", "Head of Housekeeping", "Floor Supervisor (Shift A)", "Floor Supervisor (Shift B)", "Laundry Manager", "F&B Director", "Executive Chef", "Sous Chef", "Banquet Manager", "Events Manager", "Room Service Supervisor", "Chief Engineer", "Technical Lead", "IT & Digital Manager", "EHS Officer", "Security Chief", "HR Manager", "Training Manager", "Purchasing Manager", "Logistics Lead", "Fleet & Valet In-charge"];
        }
        if (packId === 'healthcare_and_hospital_operations') {
            return ["Managing Director", "Medical Director", "Hospital COO", "Admin Director", "Nursing Superintendent", "Deputy Nursing Superintendent", "Ward Sister (Shift A)", "Ward Sister (Shift B)", "ICU Nursing In-charge", "ER In-charge", "RMO (Resident Medical Officer)", "Finance Controller", "Billing Manager", "TPA Coordinator", "Insurance Desk Executive", "Pharmacy Lead", "Pharmacist (Shift A)", "Pharmacist (Shift B)", "Narcotics Custodian", "EHS Officer", "Bio-Medical Waste Lead", "Security Chief", "HR Manager", "Training Manager", "IT & HIS Manager", "Technical Maintenance Lead", "Biomedical Engineer", "Canteen Manager", "Receptionist (Shift A)", "Receptionist (Shift B)", "OPD Manager", "Logistics Lead"];
        }
        if (packId === 'school_operations_pack') {
            return ["Trustee / Board Member", "School Principal", "Vice Principal (Academic)", "Vice Principal (Admin)", "School Administrator", "Registrar / Fee Cashier", "Accountant", "Admissions & CX Head", "Receptionist (Shift A)", "Receptionist (Shift B)", "School Counsellor", "Infirmary Nurse", "Librarian", "HOD Primary Wing", "HOD Secondary Wing", "Lab Assistant (Science)", "Lab Assistant (IT)", "IT & Lab Technical Lead", "EHS & Safety Officer", "Security Chief", "Security Guard (Day)", "Security Guard (Night)", "Transport & Canteen Lead", "Bus Driver (Route A)", "Bus Driver (Route B)", "Bus Attendant / Conductor", "Canteen Supervisor", "Maintenance Supervisor", "HR & Child Protection Manager", "Clerk / Admin Assistant"];
        }
        if (packId === 'franchise_operations_pack') {
            return ["Franchisor CEO / MD", "Franchisor COO / Head of Ops", "VP Franchise Development", "Head of Brand & Marketing", "Legal & Compliance Director", "Regional Manager (North)", "Regional Manager (South)", "Area Operational Coach", "Field Quality Auditor", "Regional Training Lead", "Franchisee Owner / Partner", "Unit General Manager", "Assistant Manager (Shift A)", "Assistant Manager (Shift B)", "Floor Supervisor (Morning)", "Floor Supervisor (Evening)", "Senior Billing Cashier", "Junior Billing Cashier", "Kitchen/Production Manager", "Inventory & Store In-charge", "Customer Experience Lead", "Local Marketing Coordinator", "EHS & Safety Officer", "Technical Maintenance Tech", "Logistics & Delivery Lead", "Dispatch Coordinator", "Admin & HR Assistant", "Finance & Accounts Executive", "Procurement & Supply Specialist"];
        }
        if (packId === 'facility_management_blueprint') {
            return ["COO / Head of Real Estate", "Facility Director", "Property General Manager", "Assistant Property Manager", "Chief Engineer", "Technical Lead", "Electrical Supervisor", "HVAC Specialist", "Plumbing Supervisor", "Fire & Life Safety Tech", "BMS & IT Manager", "Soft FM Manager", "Housekeeping Supervisor (Shift A)", "Housekeeping Supervisor (Shift B)", "Janitorial Lead", "Pest Control Coordinator", "Waste Management Supervisor", "Finance & Accounts Executive", "HR & Admin Assistant", "Customer Experience Lead", "Vendor SLA Manager", "Procurement Specialist", "EHS & Safety Officer", "Security Chief", "Security Supervisor (Shift A)", "Security Supervisor (Shift B)", "Landscaping & Facade Lead", "Parking & Valet Coordinator"];
        }
        if (packId === 'cinema_operations_pack') {
            return ["Owner / Managing Director", "COO / Regional Manager", "Cinema General Manager", "Assistant Cinema Manager", "Technical Director", "Chief Projectionist", "Projectionist (Shift A & B)", "Box Office Manager", "Ticketing Cashier (Shift A & B)", "Guest Services Lead", "Marketing & Events Coordinator", "Security Chief", "Janitorial Lead / HK Supervisor", "Finance & Accounts Executive", "HR & Admin Assistant", "EHS & Safety Officer", "Technical Maintenance Tech"];
        }
        return ["COO / Owner", "General Manager", "Finance & Cashier", "EHS Officer", "HR Manager", "Technical Lead", "Customer Experience Lead", "Logistics Lead"];
    };

    const pHeaders = [
        { v: "Staff Lookup Key (Ghost)", s: headerStyle }, 
        { v: "Branch Name", s: headerStyle }, 
        { v: "Role", s: headerStyle }, 
        { v: "Assigned To (Staff Name)", s: headerStyle }, 
        { v: "Contact", s: headerStyle }, 
        { v: "Status", s: headerStyle },
        { v: "Score (Ghost)", s: headerStyle } 
    ];
    const pData: any[][] = [[], [], [], pHeaders];
    
    const activeRoles = getRolesForPack(item.id);
    
    [1, 2, 3].forEach(bId => {
        activeRoles.forEach((role) => {
            const rowIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `B${rowIdx} & "|" & C${rowIdx}`, s: dataStyleLeft }, 
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyleLeft }, 
                { v: "", s: inputStyleLeft }, 
                { v: "ACTIVE", s: dataStyleCenter },
                { t:'f', f: `COUNTIFS('TODAYS_TASKS'!$G$5:$G$5000, D${rowIdx}, 'TODAYS_TASKS'!$I$5:$I$5000, "COMPLETED")`, s: dataStyleCenter }
            ]);
        });
    });
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [0, 25, 30, 35, 20, 25, 0].map((w, i) => ({ wch: w, hidden: w === 0 }));
    addSovereignRibbon(pWs, "Responsibility & Resource Mapping", 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. FINANCIAL SHIELD ---
    const fsHeaders = [
        { v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, 
        { v: "Gross Sales", s: headerStyle }, { v: "Raw Material Cost (CoGS)", s: headerStyle },
        { v: "Labor Cost (%)", s: headerStyle }, { v: "Waste Cost (Logged)", s: headerStyle },
        { v: "Unit Contribution (GP)", s: headerStyle }, { v: "Margin %", s: headerStyle }
    ];
    const fsData: any[][] = [[], [], [], fsHeaders];
    [1, 2, 3].forEach(bId => {
        for(let i=0; i<5; i++) {
            const rowIdx = fsData.length + 1;
            const contribFormula = `C${rowIdx}-D${rowIdx}-(C${rowIdx}*E${rowIdx})-F${rowIdx}`;
            const marginFormula = `IFERROR(G${rowIdx}/C${rowIdx}, 0)`;
            fsData.push([
                { v: startDate, t: 'd', s: { ...dataStyleCenter, numFmt: 'dd-mm-yyyy' } },
                { t: 'f', f: `IFERROR(INDEX('BRANCH_MASTER'!$B$5:$B$15, ${bId}), "")`, s: dataStyleCenter },
                { v: 0, s: inputStyle }, { v: 0, s: inputStyle }, { v: 0.25, s: { ...inputStyle, numFmt: '0%' } }, { v: 0, s: inputStyle },
                { t: 'f', f: contribFormula, s: { ...dataStyleCenter, font: { bold: true } } },
                { t: 'f', f: marginFormula, s: { ...dataStyleCenter, numFmt: '0.0%' } }
            ]);
        }
    });
    const fsWs = utils.aoa_to_sheet(fsData);
    addSovereignRibbon(fsWs, "Unit Contribution & Financial Shield", 'H');
    fsWs['!cols'] = [15, 25, 20, 25, 15, 20, 25, 15].map(w => ({ wch: w }));
    utils.book_append_sheet(wb, fsWs, "FINANCIAL_SHIELD");

    // --- 06. SOP LIBRARY ---
    const sopHeaders = [
        { v: "Module", s: headerStyle }, 
        { v: "Protocol ID", s: headerStyle }, 
        { v: "Technical Standard / SOP", s: headerStyle }, 
        { v: "Consequence of Failure", s: { ...headerStyle, fill: { patternType: 'solid', fgColor: { rgb: "450a0a" } } } },
        { v: "Trainer's Notes", s: { ...headerStyle, fill: { patternType: 'solid', fgColor: { rgb: "064e3b" } } } },
        { v: "Reference Code", s: headerStyle }
    ];
    const sopData: any[][] = [[], [], [], sopHeaders];
    packChecklists.forEach(c => {
        c.tasks.forEach(t => {
            sopData.push([
                { v: c.title, s: dataStyleCenter },
                { v: t.id, s: dataStyleCenter },
                { v: t.description, s: dataStyleLeft },
                { v: t.consequence || "Operational Risk Applied.", s: warningStyle },
                { v: t.trainerNotes || "Institutional standard applies.", s: coachingStyle },
                { v: "ISO/HACCP v9.6", s: dataStyleCenter }
            ]);
        });
    });
    const sopWs = utils.aoa_to_sheet(sopData);
    sopWs['!cols'] = [25, 15, 60, 60, 60, 20].map(w => ({ wch: w }));
    addSovereignRibbon(sopWs, "Institutional SOP Database", 'F');
    utils.book_append_sheet(wb, sopWs, "SOP_LIBRARY");

    // --- 07. LOGS ---
    const handoverHeaders = [{ v: "Branch", s: headerStyle }, { v: "Departing Shift Manager", s: headerStyle }, { v: "Arriving Shift Manager", s: headerStyle }, { v: "Critical Issues Carried Over", s: headerStyle }, { v: "Safety/EHS Clear?", s: headerStyle }, { v: "Handover Timestamp", s: headerStyle }];
    const handoverWs = utils.aoa_to_sheet([[], [], [], handoverHeaders]);
    addSovereignRibbon(handoverWs, "Shift Handover Bridge", 'F');
    utils.book_append_sheet(wb, handoverWs, "SHIFT_HANDOVER");

    const incidentHeaders = [{ v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Type (Safety/Profit/PR)", s: headerStyle }, { v: "Incident Description", s: headerStyle }, { v: "Root Cause", s: headerStyle }, { v: "Corrective Action Taken", s: headerStyle }, { v: "Resolved?", s: headerStyle }];
    const incidentWs = utils.aoa_to_sheet([[], [], [], incidentHeaders]);
    addSovereignRibbon(incidentWs, "Liability & Incident Log", 'G');
    utils.book_append_sheet(wb, incidentWs, "INCIDENT_TRACKER");

    const healthHeaders = [{ v: "Metric", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Status", s: headerStyle }, { v: "Value", s: headerStyle }, { v: "Alert Level", s: headerStyle }];
    const healthWs = utils.aoa_to_sheet([[], [], [], healthHeaders]);
    addSovereignRibbon(healthWs, "Performance Analytics", 'E');
    utils.book_append_sheet(wb, healthWs, "BUSINESS_HEALTH");

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_9.6.xlsx`);
}
