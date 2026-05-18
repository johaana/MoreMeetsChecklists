'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v16.3 HARDENED
 * ----------------------------------------------------------------------------
 * 1. HYPERLINK STANDARDIZATION: Direct Sheet Anchors (#'SHEET'!A1)
 *    Reason: Google Sheets Mobile fails to resolve Named Range Relationships.
 * 2. ROW-HEIGHT METADATA: Explicit !rows for SOP_LIBRARY (hpt: 90) to prevent clipping.
 * 3. VERIFICATION MASTER OVERRIDE: verificationRequired master toggle logic.
 * 4. METADATA CLEANUP: Removed wb.Workbook.Names to prevent platform conflicts.
 * ----------------------------------------------------------------------------
 */

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text
        .replace(/\[?Risk:\s?\[?/gi, "") // Strip brackets and prefixes
        .replace(/\]/g, "")             // Remove trailing brackets
        .trim();
};

export const handleDownload = (item: PremiumPack) => {
    if (!item) {
        alert("System error: operational data not found.");
        return;
    }

    const wb = utils.book_new();

    // Registry Cleaned: Using direct anchors instead of Named Ranges for Mobile Reliability
    wb.Workbook = {
        Names: [],
        Sheets: []
    };

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
        border: { bottom: { style: 'thin', color: { rgb: COLORS.BORDER_SOFT } } },
        protection: { locked: true }
    };

    const headerStyle = {
        font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE_BODY }, sz: 10 },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.HEADER_SLATE } },
        alignment: { horizontal: 'center', wrapText: true, ...verticalCenter },
        border: borderStyle,
        protection: { locked: true }
    };

    const dataStyleLeft = { 
        font: baseFont,
        alignment: { horizontal: 'left', wrapText: true, ...verticalCenter },
        border: borderStyle,
        protection: { locked: true }
    };

    const dataStyleCenter = {
        font: baseFont,
        alignment: { horizontal: 'center', ...verticalCenter },
        border: borderStyle,
        protection: { locked: true }
    };

    const inputStyle = {
        ...dataStyleCenter,
        font: { ...baseFont, color: "000000", bold: true },
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } },
        protection: { locked: false }
    };

    const greyStyle = {
        ...dataStyleCenter,
        fill: { patternType: 'solid', fgColor: { rgb: COLORS.INACTIVE_GREY } },
        font: { ...baseFont, color: { rgb: COLORS.METADATA_GREY } },
        protection: { locked: true }
    };

    const riskStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.CONSEQUENCE_RED }, italic: true },
        fill: { patternType: 'solid', fgColor: { rgb: "FEF2F2" } },
        protection: { locked: true }
    };

    const instructionStyle = {
        ...dataStyleLeft,
        font: { ...baseFont, color: { rgb: COLORS.COACHING_GREEN } },
        fill: { patternType: 'solid', fgColor: { rgb: "F0FDF4" } },
        protection: { locked: true }
    };

    const addRibbon = (ws: WorkSheet, title: string, endCol: string = 'I') => {
        const ribbonData = [
            [{ v: "◀ BACK TO OPERATIONS CENTER", l: { Target: "#'OPERATIONS_CENTER'!A1" }, s: navStyle }],
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
        [{ v: "STEP 1: CONFIGURE BRANCHES", s: { font: { bold: true } } }, { v: "Open SITE_CONFIGURATION to name branches and set active facilities.", l: { Target: "#'SITE_CONFIGURATION'!A1" } }],
        [{ v: "STEP 2: ASSIGN PERSONNEL", s: { font: { bold: true } } }, { v: "Open TEAM_HUB to enter names for each role.", l: { Target: "#'TEAM_HUB'!A1" } }],
        [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open DAILY_TASKS to begin tracking execution.", l: { Target: "#'DAILY_TASKS'!A1" } }],
        [],
        [{ v: "CRITICAL PILOT INSTRUCTIONS", s: { font: { bold: true, color: { rgb: COLORS.CONSEQUENCE_RED } } } }],
        [{ v: "• DATE STANDARD: Use 'dd-mm-yyyy' for all completion logs.", s: { font: { italic: true } } }],
        [{ v: "• NO RENAMING: Do not rename tabs. This breaks internal formula logic.", s: { font: { italic: true } } }],
        [{ v: "• RELIABLE LINKS: Navigation uses direct sheet anchors for cross-platform stability.", s: { font: { italic: true } } }],
        [{ v: "• LEGEND: YELLOW CELLS ARE USER INPUTS. GREY CELLS ARE AUTOMATED.", s: { font: { italic: true, color: { rgb: COLORS.METADATA_GREY } } } }]
    ];
    const startWs = utils.aoa_to_sheet(startData);
    startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
    startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
    utils.book_append_sheet(wb, startWs, "START_HERE");

    // --- 02. OPERATIONS_CENTER ---
    const opsData: any[][] = [
        [], [],
        [{ v: "OPERATIONAL VITAL SIGNS", s: { font: { sz: 20, bold: true } } }],
        [],
        [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: "COUNTIFS('DAILY_TASKS'!$E$5:$E$5000, \"PENDING\")" }],
        [{ v: "OPEN INCIDENTS:", s: { font: { bold: true } } }, { t: 'f', f: "COUNTIF('INCIDENT_LOG'!$G$5:$G$500, \"OPEN\")" }],
        [{ v: "COMPLIANCE SCORE:", s: { font: { bold: true } } }, { t: 'f', f: "TEXT(1 - (COUNTIFS('DAILY_TASKS'!$E$5:$E$5000, \"PENDING\", 'DAILY_TASKS'!$C$5:$C$5000, \"<>\") / MAX(1, COUNTIFS('DAILY_TASKS'!$E$5:$E$5000, \"<>N/A\", 'DAILY_TASKS'!$C$5:$C$5000, \"<>\"))), \"0%\")" }]
    ];
    const opsWs = utils.aoa_to_sheet(opsData);
    opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
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
    utils.book_append_sheet(wb, setupWs, "SITE_CONFIGURATION");

    // --- 04. TEAM_HUB ---
    const roleTemplates: Record<string, string[]> = {
        'restaurants': ["General Manager", "Shift Manager", "Kitchen Lead", "Bar Lead", "Security Chief"],
        'hotels_and_resorts': ["General Manager", "Front Office Manager", "Receptionist", "Executive Housekeeper", "Room Attendant", "Chief Engineer", "Maintenance Tech", "F&B Manager", "Security Chief"],
        'healthcare_and_hospital_operations': ["Medical Director", "Nursing Superintendent", "Ward Nurse", "OT In-charge", "Pharmacy Lead", "EHS Officer", "Quality Head", "OPD Manager", "Chief Engineer", "Security Chief", "Billing Manager", "HR Manager"],
        'retail_operations_system': ["Store Manager", "Floor Supervisor", "Cashier", "Inventory Lead", "Visual Merchandiser", "Loss Prevention Lead", "Maintenance Lead"],
        'school_operations_pack': ["Principal", "Head of Pre-Primary", "School Counselor", "Examination In-charge", "Transport Manager", "Security Chief", "Canteen Manager", "Grounds Lead", "Lab Assistant", "Facility Manager", "School Nurse", "Registrar"],
        'facility_management_blueprint': ["COO / Portfolio Head", "Facility Manager", "Chief Engineer", "BMS Operator", "Soft FM Manager", "Safety Officer", "Energy Auditor", "Security Chief", "Utility Analyst", "Vendor Manager", "IT Specialist"],
        'cinema_operations_pack': ["Managing Director", "General Manager", "Projectionist", "Concession Lead", "Floor Supervisor", "Lobby Host", "Safety Officer", "Finance Lead", "Housekeeping", "Maintenance Lead", "Security Chief", "HR Assistant"],
        'franchise_operations_pack': ["CEO", "Operations Director", "Regional Manager", "Expansion Lead", "Audit Controller", "Franchise Partner Manager", "Store Manager", "Kitchen Lead", "CX Lead", "Digital Lead", "IT Support", "Sourcing Lead", "Finance Controller", "Safety Officer", "HR Coordinator"]
    };
    
    const activeRoles = roleTemplates[item.id] || ["Manager", "Supervisor", "Lead", "Staff A", "Staff B"];
    const tHeaders = [{ v: "Helper Key", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Assigned Personnel", s: headerStyle }, { v: "Phone Number", s: headerStyle }, { v: "Institutional Email", s: headerStyle }];
    const pData: any[][] = [[], [], [], tHeaders];

    for (let i = 0; i < 5; i++) {
        const siteRef = `SITE_CONFIGURATION!$A$${5 + i}`;
        activeRoles.forEach(role => {
            const rIdx = pData.length + 1;
            pData.push([
                { t: 'f', f: `IF(LEN(B${rIdx})>0, B${rIdx} & "|" & C${rIdx}, "")`, s: dataStyleCenter },
                { t: 'f', f: siteRef, s: dataStyleCenter },
                { v: role, s: dataStyleLeft },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle },
                { v: "", s: inputStyle }
            ]);
        });
    }
    const pWs = utils.aoa_to_sheet(pData);
    pWs['!cols'] = [{ wch: 0, hidden: true }, { wch: 25 }, { wch: 30 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
    addRibbon(pWs, "Personnel Directory", 'F');
    utils.book_append_sheet(wb, pWs, "TEAM_HUB");

    // --- 05. DAILY_TASKS ---
    const lHeaders = [
        { v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Task / Technical SOP", s: headerStyle },
        { v: "Assigned To", s: headerStyle }, { v: "Status", s: headerStyle }, { v: "Done By (Initial)", s: headerStyle },
        { v: "Verified By (Initial)", s: headerStyle }, { v: "Consequence / Risk", s: headerStyle }, { v: "Daily Instructions", s: headerStyle }
    ];
    const mData: any[][] = [[], [], [], lHeaders];
    
    for (let b = 0; b < 5; b++) {
        const branchCell = `SITE_CONFIGURATION!$A$${5 + b}`;
        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const rIdx = mData.length + 1;
                const branchRef = `$A${rIdx}`;
                const roleRef = `$B${rIdx}`;
                const lastDateRef = `$F${rIdx}`;
                const verifyRef = `$G${rIdx}`;

                const assignmentFormula = `IFERROR(INDEX('TEAM_HUB'!$D$5:$D$500, MATCH(${branchRef} & "|" & ${roleRef}, 'TEAM_HUB'!$A$5:$A$500, 0)), "[UNASSIGNED]")`;
                
                const modTag = (t.id || "").split('-')[1] || "CORE";
                const modColMap: Record<string, number> = {
                    'POOL': 4, 'GYM': 5, 'VALET': 6, 'SHUT': 7, 'LOUNGE': 8, 'BANQ': 9, 'BAR': 10, 'PET': 11,
                    'OT': 4, 'ICU': 5, 'PHM': 6, 'LAB': 7, 'WST': 8, 'GAS': 9, 'AMB': 10,
                    'ROOM': 4, 'WHSE': 5, 'SVC': 7, 'ALT': 8, 'FITTING': 4,
                    'LABS': 4, 'BUS': 5, 'CAN': 6, 'HST': 7, 'SPORT': 8,
                    'DEL': 5, 'BAKE': 6, 'DT': 7, 'OUT': 8,
                    'PRO': 4, 'CON': 5, 'VIP': 6, 'AUD': 7, 'ARC': 8, 'PARK': 9,
                    'LOG': 4, 'MKT': 5, 'QA': 6, 'IT': 7, 'DLV': 8, 'CK': 9
                };
                const colIdx = modColMap[modTag] || -1;
                const matchBranch = `MATCH(${branchRef}, 'SITE_CONFIGURATION'!$A$5:$A$500, 0)`;
                const toggleFormula = colIdx > 0 ? `IFERROR(INDEX('SITE_CONFIGURATION'!$A$5:$M$500, ${matchBranch}, ${colIdx}), "YES")` : "\"YES\"";

                // Verification logic override check
                const needsVerification = t.verificationRequired !== undefined 
                    ? t.verificationRequired 
                    : (t.priority === 'High' || t.riskLevel === 'High');

                const statusFormula = needsVerification 
                    ? `IF(${toggleFormula}="NO", "N/A", IF(AND(LEN(TRIM(${lastDateRef}))>0, LEN(TRIM(${verifyRef}))>0), "COMPLETED", "PENDING"))`
                    : `IF(${toggleFormula}="NO", "N/A", IF(LEN(TRIM(${lastDateRef}))>0, "COMPLETED", "PENDING"))`;

                mData.push([
                    { t: 'f', f: branchCell, s: dataStyleCenter },
                    { v: c.role, s: dataStyleCenter },
                    { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                    { t: 'f', f: assignmentFormula, s: dataStyleLeft },
                    { t: 'f', f: statusFormula, s: dataStyleCenter },
                    { v: "", s: inputStyle },
                    { v: "", s: needsVerification ? inputStyle : greyStyle }, 
                    { v: sanitizeRisk(t.consequence || "Operational Gap"), s: riskStyle },
                    { v: t.floorAction || t.description || "", s: instructionStyle }
                ]);
            });
        });
    }

    const mWs = utils.aoa_to_sheet(mData);
    mWs['!cols'] = [{ wch: 15 }, { wch: 25 }, { wch: 55 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 40 }, { wch: 45 }];
    addRibbon(mWs, "Daily Task Logbook", 'I');
    utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

    // --- 06. SOP_LIBRARY ---
    const sHeaders = [{ v: "Role", s: headerStyle }, { v: "Technical SOP", s: headerStyle }, { v: "Why this matters", s: headerStyle }, { v: "Action Steps", s: headerStyle }, { v: "Proof Required", s: headerStyle }, { v: "Risk", s: headerStyle }];
    const sData: any[][] = [[], [], [], sHeaders];
    let sTaskCount = 0;
    item.checklists.forEach(c => {
        c.tasks.forEach(t => {
            sTaskCount++;
            sData.push([
                { v: c.role, s: dataStyleCenter },
                { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                { v: `Prevents unmonitored ${sanitizeRisk(t.consequence || "gaps")}.`, s: dataStyleLeft },
                { v: t.description || t.floorAction || "", s: dataStyleLeft },
                { v: t.proof || "Verify in log.", s: instructionStyle },
                { v: sanitizeRisk(t.consequence || t.riskLevel), s: riskStyle }
            ]);
        });
    });
    const sWs = utils.aoa_to_sheet(sData);
    sWs['!cols'] = [{ wch: 25 }, { wch: 40 }, { wch: 45 }, { wch: 50 }, { wch: 45 }, { wch: 45 }];
    addRibbon(sWs, "Operational Handbook", 'F');
    
    // Explicit Row Heights for SOP_LIBRARY (v16.3 Hardened)
    const sRows = [{ hpt: 30 }, { hpt: 50 }, { hpt: 20 }, { hpt: 45 }];
    for(let i=0; i < sTaskCount; i++) {
        sRows.push({ hpt: 90 }); // High density for wrapping
    }
    sWs['!rows'] = sRows;
    
    utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

    // --- 07. INCIDENT_LOG ---
    const iHeaders = [{ v: "Date", s: headerStyle }, { v: "Branch", s: headerStyle }, { v: "Type", s: headerStyle }, { v: "Severity", s: headerStyle }, { v: "Reported By", s: headerStyle }, { v: "Assigned To", s: headerStyle }, { v: "Status", s: headerStyle }, { v: "Notes", s: headerStyle }];
    const iData: any[][] = [[], [], [], iHeaders];
    for(let i=0; i<30; i++) { iData.push([null, null, null, null, null, null, "OPEN", ""]); }
    const iWs = utils.aoa_to_sheet(iData);
    iWs['!cols'] = [{ wch: 15 }, { wch: 20 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 40 }];
    addRibbon(iWs, "Incident Registry", 'H');
    utils.book_append_sheet(wb, iWs, "INCIDENT_LOG");

    // --- INTERNAL INFRASTRUCTURE (_SYS_ENGINE_) ---
    const sysData: any[][] = [[{ v: "SOVEREIGN SYSTEM ENGINE - DO NOT MODIFY", s: headerStyle }]];
    const sysWs = utils.aoa_to_sheet(sysData);
    utils.book_append_sheet(wb, sysWs, "_SYS_ENGINE_");
    const sysIdx = wb.SheetNames.indexOf("_SYS_ENGINE_");
    if (!wb.Workbook.Sheets) wb.Workbook.Sheets = [];
    wb.Workbook.Sheets[sysIdx] = { Hidden: 1 };

    writeFile(wb, `${item.title.replace(/ /g, '_')}_Master_v16.3.xlsx`);
}
