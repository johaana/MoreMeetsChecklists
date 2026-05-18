'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v16.4 HARDENED
 * ----------------------------------------------------------------------------
 * 1. ZERO-GID NAVIGATION: Removed quotes from anchors (#SHEET!A1).
 * 2. DIMENSION RECALCULATION: Explicit !ref update for 1000+ row survival.
 * 3. DYNAMIC SOP HEIGHTS: Text-length based hpt estimation.
 * 4. WORKFLOW REORDER: inputs (E,F) -> output Status (G).
 * 5. METADATA SECURITY: Helper keys moved to SYS_ENGINE.
 * ----------------------------------------------------------------------------
 */

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text
        .replace(/\[?Risk:\s?\[?/gi, "") 
        .replace(/\]/g, "")             
        .trim();
};

export const handleDownload = (item: PremiumPack) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();

    const COLORS = {
        NAVY_HUD: "020617",       
        PRIMARY_GREEN: "22C55E",  
        WHITE_BODY: "FFFFFF",     
        BORDER_SOFT: "E2E8F0",    
        INPUT_YELLOW: "FEFCE8",   
        HEADER_SLATE: "0F172A",   
        METADATA_GREY: "64748B",  
        COACHING_GREEN: "065F46", 
        CONSEQUENCE_RED: "991B1B",
        INACTIVE_GREY: "F1F5F9"   
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
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_HUD } },
        alignment: { horizontal: 'left', ...verticalCenter },
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE_BODY }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_SLATE } },
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
        font: { ...baseFont, color: "000000", bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_ZONE || COLORS.INPUT_YELLOW } }
    };

    const greyStyle = {
        ...dataStyleCenter,
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INACTIVE_GREY } },
        font: { ...baseFont, color: { rgb: COLORS.METADATA_GREY } }
    };

    const riskStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.CONSEQUENCE_RED }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: "FEF2F2" } }
    };

    const instructionStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.COACHING_GREEN } },
        fill: { patternType: 'solid', fgColor: { rgb: "F0FDF4" } }
    };

    const addRibbon = (ws: WorkSheet, title: string, endCol: string = 'I') => {
        const ribbonData = [
            [{ v: "◀ BACK TO OPERATIONS CENTER", l: { Target: "#OPERATIONS_CENTER!A1" }, s: navStyle }],
            [{ v: `  ${title.toUpperCase()}`, s: { ...navStyle, font: { ...navStyle.font, sz: 18, color: { rgb: "FFFFFF" } } } }]
        ];
        utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
        const endCIdx = utils.decode_col(endCol);
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
        ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: endCIdx } }); 
        ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 4, xSplit: 2 }];
        ws['!rows'] = [{ hpt: 30 }, { hpt: 50 }, { hpt: 20 }, { hpt: 45 }];
    };

    // --- 01. START_HERE ---
    const startData: any[][] = [
        [], [],
        [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
        [{ v: "3-STEP OPERATIONAL SETUP", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
        [],
        [{ v: "STEP 1: CONFIGURE BRANCHES", s: { font: { bold: true } } }, { v: "Open SITE_CONFIGURATION to name branches.", l: { Target: "#SITE_CONFIGURATION!A1" } }],
        [{ v: "STEP 2: ASSIGN PERSONNEL", s: { font: { bold: true } } }, { v: "Open TEAM_HUB to enter names for each role.", l: { Target: "#TEAM_HUB!A1" } }],
        [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin tracking execution.", l: { Target: "#DAILY_TASKS!A1" } }],
        [],
        [{ v: "CRITICAL PILOT INSTRUCTIONS", s: { font: { bold: true, color: { rgb: COLORS.CONSEQUENCE_RED } } } }],
        [{ v: "• RELIABLE LINKS: Navigation uses direct sheet anchors (#SHEET!A1) for mobile resolution.", s: { font: { italic: true } } }],
        [{ v: "• DATA ORDER: Log 'Done By' then 'Verified By' (if required). Status updates automatically.", s: { font: { italic: true } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    startWs['!ref'] = "A1:B15";
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER ---
    const opsData: any[][] = [
        [], [],
        [{ v: "OPERATIONAL VITAL SIGNS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: "COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"PENDING\")" }],
        [{ v: "COMPLIANCE SCORE:", s: { font: { bold: true } } }, { t: 'f', f: "TEXT(1 - (COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"PENDING\", DAILY_TASKS!$C$5:$C$5000, \"<>\") / MAX(1, COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"<>N/A\", DAILY_TASKS!$C$5:$C$5000, \"<>\"))), \"0%\")" }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
    opsWs['!ref'] = "A1:B10";
    utils.book_append_sheet(wb, opsWs, "OPERATIONS_CENTER");

    // --- 03. SITE_CONFIGURATION ---
    const verticalModules: Record<string, string[]> = {
        'hotels_and_resorts': ["Swimming Pool", "Gym & Spa", "Valet Parking", "Airport Shuttle", "Executive Lounge", "Banquet Hall", "Rooftop Bar", "Pet Friendly"],
        'healthcare_and_hospital_operations': ["OT", "ICU", "Pharmacy", "Diagnostics", "Biomedical Waste", "Medical Gas", "Ambulance"],
        'retail_operations_system': ["Fitting Room", "Warehouse", "Valet", "Customer Service", "Alterations"],
        'restaurants': ["Bar", "Delivery", "Bakery", "DriveThru", "Outdoor Dining"],
        'school_operations_pack': ["Science Labs", "Student Transport", "Canteen", "Hostels", "Sports Facilities"],
        'facility_management_blueprint': ["MEP Systems", "Soft-FM", "Energy", "Safety", "Vendor Management"],
        'cinema_operations_pack': ["Projection", "Concession", "VIP Lounge", "Dolby/Audio", "Arcade", "Parking"],
        'franchise_operations_pack': ["Logistics", "Marketing", "QA", "IT", "Delivery", "Central Kitchen"]
    };

    const modules = verticalModules[item.id] || ["Module 1", "Module 2", "Module 3", "Module 4", "Module 5"];
    const setupHeaders = [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY / LOCATION", s: headerStyle }, { v: "STATUS", s: headerStyle }, ...modules.map(m => ({ v: m.toUpperCase(), s: headerStyle }))];
    const setupData: any[][] = [[], [], [], setupHeaders];
    for (let i = 1; i <= 10; i++) {
        const row = [{ v: `Branch ${i}`, s: inputStyle }, { v: "City", s: inputStyle }, { v: "ACTIVE", s: inputStyle }];
        modules.forEach(() => row.push({ v: "YES", s: inputStyle }));
        setupData.push(row);
    }
    const setupWs = utils.aoa_to_sheet(setupData);
    setupWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, ...modules.map(() => ({ wch: 15 }))];
    addRibbon(setupWs, "Site Configuration", utils.encode_col(setupHeaders.length - 1));
    setupWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: setupHeaders.length - 1, r: 15 } });
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB ---
    const roleTemplates: Record<string, string[]> = {
        'restaurants': ["General Manager", "Shift Manager", "Kitchen Lead", "Bar Lead", "Security Chief"],
        'hotels_and_resorts': ["General Manager", "Front Office Manager", "Receptionist", "Executive Housekeeper", "Room Attendant", "Chief Engineer", "Maintenance Tech", "F&B Manager", "Security Chief"],
        'healthcare_and_hospital_operations': ["Medical Director", "Nursing Superintendent", "Ward Nurse", "OT In-charge", "Pharmacy Lead", "EHS Officer", "Quality Head", "OPD Manager", "Chief Engineer", "Security Chief", "Billing Manager", "HR Manager"],
        'retail_operations_system': ["Store Manager", "Floor Supervisor", "Cashier", "Inventory Lead", "Visual Merchandiser", "Loss Prevention Lead", "Maintenance Lead"]
    };
    const activeRoles = roleTemplates[item.id] || ["Manager", "Supervisor", "Lead", "Staff A", "Staff B"];
    const tHeaders = [{ v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Assigned Personnel", s: headerStyle }, { v: "Phone Number", s: headerStyle }, { v: "Institutional Email", s: headerStyle }];
    const pData: any[][] = [[], [], [], tHeaders];

    for (let i = 0; i < 5; i++) {
        const siteRef = `SITE_CONFIGURATION!$A$${5 + i}`;
        activeRoles.forEach(role => {
            pData.push([
                { t: 'f', f: siteRef, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle }
            ]);
        });
    }
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [{ wch: 25 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
    addRibbon(pWs, "Personnel Directory", 'E');
    pWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 4, r: pData.length } });
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS ---
    const lHeaders = [
        { v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Task / Technical SOP", s: headerStyle },
        { v: "Assigned To", s: headerStyle }, { v: "Done By (Initial)", s: headerStyle }, { v: "Verified By (Initial)", s: headerStyle }, 
        { v: "Status", s: headerStyle }, { v: "Consequence / Risk", s: headerStyle }, { v: "Daily Instructions", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    let mRowIdx = 5;

    for (let b = 0; b < 5; b++) {
        const branchCell = `SITE_CONFIGURATION!$A$${5 + b}`;
        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const rIdx = mData.length + 1;
                const branchRef = `$A${rIdx}`;
                const roleRef = `$B${rIdx}`;
                const doneByRef = `$E${rIdx}`;
                const verifyRef = `$F${rIdx}`;

                const assignmentFormula = `IFERROR(INDEX(SYS_ENGINE!$D$1:$D$5000, MATCH(${branchRef} & "|" & ${roleRef}, SYS_ENGINE!$C$1:$C$5000, 0)), "[UNASSIGNED]")`;
                
                const modTag = (t.id || "").split('-')[1] || "CORE";
                const modColMap: Record<string, number> = { 'OT': 4, 'ICU': 5, 'PHM': 6, 'BAR': 10, 'DEL': 5, 'ROOM': 4 };
                const colIdx = modColMap[modTag] || -1;
                const matchBranch = `MATCH(${branchRef}, SITE_CONFIGURATION!$A$5:$A$500, 0)`;
                const toggleFormula = colIdx > 0 ? `IFERROR(INDEX(SITE_CONFIGURATION!$A$5:$M$500, ${matchBranch}, ${colIdx}), "YES")` : "\"YES\"";

                const needsVerification = t.verificationRequired === true;
                const statusFormula = needsVerification 
                    ? `IF(${toggleFormula}="NO", "N/A", IF(AND(LEN(TRIM(${doneByRef}))>0, LEN(TRIM(${verifyRef}))>0), "COMPLETED", "PENDING"))`
                    : `IF(${toggleFormula}="NO", "N/A", IF(LEN(TRIM(${doneByRef}))>0, "COMPLETED", "PENDING"))`;

                mData.push([
                    { t: 'f', f: branchCell, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                    { t: 'f', f: assignmentFormula, s: dataStyleLeft },
                    { v: "", s: inputStyle },
                    { v: "", s: needsVerification ? inputStyle : greyStyle }, 
                    { t: 'f', f: statusFormula, s: dataStyleCenter },
                    { v: sanitizeRisk(t.consequence || "Operational Gap"), s: riskStyle },
                    { v: t.floorAction || t.description || "", s: instructionStyle }
                ]);
                mRowIdx++;
            });
        });
    }
    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [{ wch: 15 }, { wch: 25 }, { wch: 45 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 40 }, { wch: 45 }];
    addRibbon(mWs, "Daily Task Logbook", 'I');
    mWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 8, r: mData.length } });
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY ---
    const sHeaders = [{ v: "Role", s: headerStyle }, { v: "Technical SOP", s: headerStyle }, { v: "Why this matters", s: headerStyle }, { v: "Action Steps", s: headerStyle }, { v: "Proof Required", s: headerStyle }, { v: "Risk", s: headerStyle }];
    const sData: any[][] = [[], [], [], sHeaders];
    const sRows: any[] = [{ hpt: 30 }, { hpt: 50 }, { hpt: 20 }, { hpt: 45 }];

    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            const text = (t.technicalProtocol || "") + (t.floorAction || t.description || "");
            const lines = Math.ceil(text.length / 60);
            sRows.push({ hpt: Math.max(30, lines * 18) });

            sData.push([
                { v: c.role, s: dataStyleCenter },
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                { v: `Prevents unmonitored ${sanitizeRisk(t.consequence || "gaps")}.`, s: dataStyleLeft },
                { v: t.floorAction || t.description || "", s: dataStyleLeft },
                { v: t.proof || "Verify in log.", s: instructionStyle },
                { v: sanitizeRisk(t.consequence || t.riskLevel), s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 45 }, { wch: 50 }, { wch: 45 }, { wch: 45 }];
    sWs['!rows'] = sRows;
    addRibbon(sWs, "Operational Handbook", 'F');
    sWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 5, r: sData.length } });
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. SYS_ENGINE (HIDDEN) ---
    const sysData: any[][] = [];
    let sysRow = 1;
    for (let i = 0; i < 5; i++) {
        activeRoles.forEach((role, rIdx) => {
            const teamRow = 5 + (i * activeRoles.length) + rIdx;
            sysData.push([
                { t: 'f', f: `SITE_CONFIGURATION!$A$${5 + i}` }, // A: Branch Name
                { v: role },                                   // B: Role
                { t: 'f', f: `A${sysRow}&"|"&B${sysRow}` },    // C: Key
                { t: 'f', f: `TEAM_HUB!$C$${teamRow}` }        // D: Staff Name
            ]);
            sysRow++;
        });
    }
    const sysWs = utils.aoa_to_sheet(sysData);
    sysWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 3, r: sysData.length } });
    utils.book_append_sheet(wb, sysWs, "SYS_ENGINE");
    const sysIdx = wb.SheetNames.indexOf("SYS_ENGINE");
    if (!wb.Workbook) wb.Workbook = { Sheets: [] };
    wb.Workbook.Sheets[sysIdx] = { Hidden: 1 };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_v16.4.xlsx`);
}
