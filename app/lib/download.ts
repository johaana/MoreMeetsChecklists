
'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

/**
 * MOREMEETS™ SOVEREIGN ENGINE - v17.0 DIRECTIVE EDITION
 * ----------------------------------------------------------------------------
 * 1. ZERO-ARTIFACT UX: Removed all clickable navigation to prevent #gid leakage.
 * 2. PLAIN-TEXT GUIDANCE: Navigation replaced by explicit tab directives.
 * 3. BRANCH REDUCTION: 2 Sample branches (v17 efficiency standard).
 * 4. WORKFLOW ORDER: Inputs (E,F) -> Output Status (G).
 * 5. HARD VALIDATION: Regex-enforced sheet naming.
 * ----------------------------------------------------------------------------
 */

const SAFE_SHEET_NAME = /^[A-Z][A-Z0-9_]*$/;

const sanitizeRisk = (text: string) => {
    if (!text) return "";
    return text
        .replace(/\[?Risk:\s?\[?/gi, "") 
        .replace(/\]/g, "")             
        .trim();
};

const validateSheetName = (name: string) => {
    if (!SAFE_SHEET_NAME.test(name)) {
        throw new Error(`Sovereign Security Violation: Invalid sheet name detected: "${name}".`);
    }
};

export const handleDownload = (item: PremiumPack) => {
    try {
        if (!item) {
            throw new Error("Operational data not found.");
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
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }
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
                [{ v: `DIRECTIVE: ${title.toUpperCase()}`, s: { ...navStyle, font: { ...navStyle.font, color: { rgb: "FFFFFF" } } } }],
                [{ v: `  Institutional Infrastructure Standard v17.0`, s: { ...navStyle, font: { ...navStyle.font, sz: 8, color: { rgb: COLORS.PRIMARY_GREEN } } } }]
            ];
            utils.sheet_add_aoa(ws, ribbonData, { origin: "A1" });
            const endCIdx = utils.decode_col(endCol);
            if (!ws['!merges']) ws['!merges'] = [];
            ws['!merges'].push({ s: { r: 0, c: 0 }, e: { r: 0, c: endCIdx } }); 
            ws['!merges'].push({ s: { r: 1, c: 0 }, e: { r: 1, c: endCIdx } }); 
            ws['!views'] = [{ showGridLines: false, state: 'frozen', ySplit: 4, xSplit: 2 }];
        };

        // --- 01. START_HERE ---
        const startData: any[][] = [
            [], [],
            [{ v: "WELCOME TO MOREMEETS™", s: { font: { sz: 24, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } }, alignment: { horizontal: 'center' } } }],
            [{ v: "3-STEP OPERATIONAL SETUP GUIDE", s: { font: { sz: 12, bold: true }, alignment: { horizontal: 'center' } } }],
            [],
            [{ v: "STEP 1: CONFIGURE BRANCHES", s: { font: { bold: true } } }, { v: "Open the [BRANCH_SETUP] tab below and name your locations." }],
            [{ v: "STEP 2: ASSIGN PERSONNEL", s: { font: { bold: true } } }, { v: "Open the [TEAM_HUB] tab to assign staff names to roles." }],
            [{ v: "STEP 3: LOG DAILY WORK", s: { font: { bold: true } } }, { v: "Open the [DAILY_TASKS] tab to track active execution." }],
            [],
            [{ v: "OPERATIONAL INTEGRITY NOTICE", s: { font: { bold: true, color: { rgb: COLORS.CONSEQUENCE_RED } } } }],
            [{ v: "• TAB-BASED WORKFLOW: Navigation is driven by the tabs at the base of your screen." }],
            [{ v: "• LOGGING: Enter initials in yellow cells. Status updates to COMPLETED automatically." }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 30 }, { wch: 60 }];
        startWs['!merges'] = [{ s: { r: 2, c: 0 }, e: { r: 2, c: 1 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 1 } }];
        startWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 1, r: 12 } });
        validateSheetName("START_HERE");
        utils.book_append_sheet(wb, startWs, "START_HERE");

        // --- 02. CONSOLE (Dashboard) ---
        const opsData: any[][] = [
            [], [],
            [{ v: "OPERATIONAL VITAL SIGNS", s: { font: { sz: 20, bold: true } } }],
            [],
            [{ v: "PENDING TASKS:", s: { font: { bold: true } } }, { t: 'f', f: "IFERROR(COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"PENDING\"), 0)" }],
            [{ v: "COMPLIANCE SCORE:", s: { font: { bold: true } } }, { t: 'f', f: "IFERROR(TEXT(1 - (COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"PENDING\", DAILY_TASKS!$C$5:$C$5000, \"<>\") / MAX(1, COUNTIFS(DAILY_TASKS!$G$5:$G$5000, \"<>N/A\", DAILY_TASKS!$C$5:$C$5000, \"<>\"))), \"0%\"), \"0%\")" }]
        ];
        const opsWs = utils.aoa_to_sheet(opsData);
        opsWs['!cols'] = [{ wch: 35 }, { wch: 20 }];
        opsWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 1, r: 10 } });
        validateSheetName("CONSOLE");
        utils.book_append_sheet(wb, opsWs, "CONSOLE");

        // --- 03. BRANCH_SETUP ---
        const verticalModules: Record<string, string[]> = {
            'hotels_and_resorts': ["Pool", "Gym", "Valet", "Banquet"],
            'healthcare_and_hospital_operations': ["OT", "ICU", "Pharmacy", "Waste"],
            'restaurants': ["Bar", "Delivery", "Bakery"],
            'school_operations_pack': ["Labs", "Transport", "Canteen"],
            'facility_management_blueprint': ["MEP", "Safety", "Vendor"]
        };

        const modules = verticalModules[item.id] || ["Module 1", "Module 2", "Module 3"];
        const setupHeaders = [{ v: "BRANCH NAME", s: headerStyle }, { v: "CITY / LOCATION", s: headerStyle }, { v: "STATUS", s: headerStyle }, ...modules.map(m => ({ v: m.toUpperCase(), s: headerStyle }))];
        const setupData: any[][] = [[], [], [], setupHeaders];
        for (let i = 1; i <= 2; i++) {
            const row = [{ v: `Branch ${i}`, s: inputStyle }, { v: "City", s: inputStyle }, { v: "ACTIVE", s: inputStyle }];
            modules.forEach(() => row.push({ v: "YES", s: inputStyle }));
            setupData.push(row);
        }
        const setupWs = utils.aoa_to_sheet(setupData);
        setupWs['!cols'] = [{ wch: 30 }, { wch: 30 }, { wch: 15 }, ...modules.map(() => ({ wch: 15 }))];
        addRibbon(setupWs, "Branch Configuration", utils.encode_col(setupHeaders.length - 1));
        setupWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: setupHeaders.length - 1, r: setupData.length - 1 } });
        validateSheetName("BRANCH_SETUP");
        utils.book_append_sheet(wb, setupWs, "BRANCH_SETUP");

        // --- 04. TEAM_HUB ---
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        const tHeaders = [{ v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Assigned Personnel", s: headerStyle }, { v: "Contact Info", s: headerStyle }];
        const pData: any[][] = [[], [], [], tHeaders];

        for (let i = 0; i < 2; i++) {
            const siteRef = `BRANCH_SETUP!$A$${5 + i}`;
            activeRoles.forEach(role => {
                pData.push([
                    { t: 'f', f: `IFERROR(${siteRef}, "")`, s: dataStyleCenter },
                    { v: role, s: dataStyleLeft },
                    { v: "", s: inputStyle },
                    { v: "", s: inputStyle }
                ]);
            });
        }
        const pWs = utils.aoa_to_sheet(pData);
        pWs['!cols'] = [{ wch: 25 }, { wch: 30 }, { wch: 35 }, { wch: 30 }];
        addRibbon(pWs, "Team Roster", 'D');
        pWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 3, r: pData.length - 1 } });
        validateSheetName("TEAM_HUB");
        utils.book_append_sheet(wb, pWs, "TEAM_HUB");

        // --- 05. DAILY_TASKS ---
        const lHeaders = [
            { v: "Branch", s: headerStyle }, { v: "Role", s: headerStyle }, { v: "Task / Technical SOP", s: headerStyle },
            { v: "Assigned To", s: headerStyle }, { v: "Done By", s: headerStyle }, { v: "Verified By", s: headerStyle }, 
            { v: "Status", s: headerStyle }, { v: "Risk", s: headerStyle }, { v: "Instructions", s: headerStyle }
        ];
        const mData: any[][] = [[], [], [], lHeaders];
        
        for (let b = 0; b < 2; b++) {
            const branchCell = `BRANCH_SETUP!$A$${5 + b}`;
            item.checklists.forEach(c => {
                c.tasks.forEach(t => {
                    const rIdx = mData.length + 1;
                    const branchRef = `$A${rIdx}`;
                    const roleRef = `$B${rIdx}`;
                    const doneByRef = `$E${rIdx}`;
                    const verifyRef = `$F${rIdx}`;

                    const assignmentFormula = `IFERROR(INDEX(SYS_ENGINE!$D$1:$D$5000, MATCH(${branchRef} & "|" & ${roleRef}, SYS_ENGINE!$C$1:$C$5000, 0)), "[UNASSIGNED]")`;
                    
                    const modTag = (t.id || "").split('-')[1] || "CORE";
                    const matchBranch = `MATCH(${branchRef}, BRANCH_SETUP!$A$5:$A$500, 0)`;
                    const toggleFormula = `IFERROR(INDEX(BRANCH_SETUP!$A$5:$M$500, ${matchBranch}, 4), "YES")`;

                    const needsVerification = t.verificationRequired === true;
                    const statusFormula = needsVerification 
                        ? `IF(${toggleFormula}="NO", "N/A", IF(AND(LEN(TRIM(${doneByRef}))>0, LEN(TRIM(${verifyRef}))>0), "COMPLETED", "PENDING"))`
                        : `IF(${toggleFormula}="NO", "N/A", IF(LEN(TRIM(${doneByRef}))>0, "COMPLETED", "PENDING"))`;

                    mData.push([
                        { t: 'f', f: `IFERROR(${branchCell}, "")`, s: dataStyleCenter },
                        { v: c.role, s: dataStyleCenter },
                        { v: t.technicalProtocol || t.description, s: { ...dataStyleLeft, font: { bold: true } } },
                        { t: 'f', f: assignmentFormula, s: dataStyleLeft },
                        { v: "", s: inputStyle },
                        { v: "", s: needsVerification ? inputStyle : greyStyle }, 
                        { t: 'f', f: statusFormula, s: dataStyleCenter },
                        { v: sanitizeRisk(t.consequence || "Operational Gap"), s: riskStyle },
                        { v: t.floorAction || t.description || "", s: instructionStyle }
                    ]);
                });
            });
        }
        const mWs = utils.aoa_to_sheet(mData);
        mWs['!cols'] = [{ wch: 15 }, { wch: 25 }, { wch: 45 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 40 }, { wch: 45 }];
        addRibbon(mWs, "Daily Ledger", 'I');
        mWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 8, r: mData.length - 1 } });
        validateSheetName("DAILY_TASKS");
        utils.book_append_sheet(wb, mWs, "DAILY_TASKS");

        // --- 06. SOP_LIBRARY ---
        const sHeaders = [{ v: "Role", s: headerStyle }, { v: "Technical SOP", s: headerStyle }, { v: "Why this matters", s: headerStyle }, { v: "Action Steps", s: headerStyle }, { v: "Proof Required", s: headerStyle }, { v: "Risk", s: headerStyle }];
        const sData: any[][] = [[], [], [], sHeaders];
        const sRows: any[] = [{ hpt: 30 }, { hpt: 30 }, { hpt: 20 }, { hpt: 45 }];

        item.checklists.forEach(c => {
            c.tasks.forEach(t => {
                const text = (t.technicalProtocol || "") + (t.floorAction || t.description || "");
                const lines = Math.ceil(text.length / 60);
                sRows.push({ hpt: Math.max(30, lines * 18), customHeight: 1 });

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
        addRibbon(sWs, "Instructional Library", 'F');
        sWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 5, r: sData.length - 1 } });
        validateSheetName("SOP_LIBRARY");
        utils.book_append_sheet(wb, sWs, "SOP_LIBRARY");

        // --- 07. SYS_ENGINE (HIDDEN) ---
        const sysData: any[][] = [];
        for (let i = 0; i < 2; i++) {
            activeRoles.forEach((role, rIdx) => {
                const teamRow = 5 + (i * activeRoles.length) + rIdx;
                const sysRowIdx = sysData.length + 1;
                sysData.push([
                    { t: 'f', f: `IFERROR(BRANCH_SETUP!$A$${5 + i}, "")` }, 
                    { v: role },                                   
                    { t: 'f', f: `A${sysRowIdx}&"|"&B${sysRowIdx}` },    
                    { t: 'f', f: `TEAM_HUB!$C$${teamRow}` }        
                ]);
            });
        }
        const sysWs = utils.aoa_to_sheet(sysData);
        sysWs['!ref'] = utils.encode_range({ s: { c: 0, r: 0 }, e: { c: 3, r: sysData.length - 1 } });
        validateSheetName("SYS_ENGINE");
        utils.book_append_sheet(wb, sysWs, "SYS_ENGINE");
        
        const sysIdx = wb.SheetNames.indexOf("SYS_ENGINE");
        if (!wb.Workbook) wb.Workbook = { Sheets: [] };
        wb.Workbook.Sheets[sysIdx] = { Hidden: 1 };

        writeFile(wb, `${item.title.replace(/ /g, '_')}_Sovereign_v17.0.xlsx`);
    } catch (error: any) {
        console.error("Sovereign Generation Failure:", error);
        alert(`System Error: ${error.message}`);
    }
}
