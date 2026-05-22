'use client';

import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';
import { hotels_and_resorts } from '@/lib/packs/hotels_and_resorts';
import type { PremiumPack } from '@/lib/premium-packs';

/**
 * SOVEREIGN V3.2.1 PILOT-READY ENGINE - PHASE 1: SAFE PARITY
 * ----------------------------------------------------------------------------
 * 1. IDENTITY LOCK (P0): Frozen Top 3 Rows (Columns freeze pending Phase 2).
 * 2. CONTENT PRESERVATION: Consumes item.checklists exactly like production.
 * 3. NO RE-MAPPING: Strictly follows production column geometry (A-I).
 * 4. ISOLATED LAB: Operating only within temp-audit-lab for audit purposes.
 * ----------------------------------------------------------------------------
 */

export const handleDownloadAuditPrototype = (item: PremiumPack = hotels_and_resorts) => {
    try {
        const wb = utils.book_new();

        const COLORS = {
            PRIMARY_GREEN: "22C55E",
            NAVY_DEEP: "0F172A",
            WHITE: "FFFFFF",
            BORDER: "E2E8F0",
            INPUT_YELLOW: "FEFCE8",
            TEXT_RISK: "991B1B",
            LOCKED_GREY: "F1F5F9",
            BLOCK_ALT: "F8FAFC"
        };

        const baseFont = { name: 'Segoe UI', sz: 10 };
        const vCenter = { vertical: 'center' };
        const borderStyle = {
            top: { style: 'thin', color: { rgb: COLORS.BORDER } },
            bottom: { style: 'thin', color: { rgb: COLORS.BORDER } },
            left: { style: 'thin', color: { rgb: COLORS.BORDER } },
            right: { style: 'thin', color: { rgb: COLORS.BORDER } }
        };

        const headerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 9 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.NAVY_DEEP } },
            alignment: { horizontal: 'center', wrapText: true, ...vCenter },
            border: borderStyle
        };

        const bannerStyle = {
            font: { ...baseFont, bold: true, color: { rgb: COLORS.WHITE }, sz: 11 },
            fill: { patternType: 'solid', fgColor: { rgb: COLORS.PRIMARY_GREEN } },
            alignment: { horizontal: 'center', ...vCenter },
            border: borderStyle
        };

        const getStyles = (isAlt: boolean) => {
            const fill = isAlt ? { patternType: 'solid', fgColor: { rgb: COLORS.BLOCK_ALT } } : undefined;
            return {
                left: { font: baseFont, fill, alignment: { horizontal: 'left', wrapText: true, ...vCenter }, border: borderStyle },
                center: { font: baseFont, fill, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
                input: { font: { ...baseFont, color: "000000", bold: true }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.INPUT_YELLOW } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle },
                locked: { font: { ...baseFont, color: { rgb: "94A3B8" } }, fill: { patternType: 'solid', fgColor: { rgb: COLORS.LOCKED_GREY } }, alignment: { horizontal: 'center', ...vCenter }, border: borderStyle }
            };
        };

        const TABS = {
            START: "START",
            DASHBOARD: "DASHBOARD",
            DAILY_TASKS: "DAILY_TASKS",
            SOP_LIB: "SOP_LIB",
            BRANCH_SETUP: "BRANCH_SETUP",
            TEAM_HUB: "TEAM_HUB",
            CUSTOMIZATION_GUIDE: "CUSTOMIZATION_GUIDE",
            SYS_ENGINE: "SYS_ENGINE"
        };

        // --- 01. START ---
        const startData = [
            [{ v: "🚀 SOVEREIGN START GUIDE — TEMP HOTEL SAMPLE", s: bannerStyle }],
            [],
            [{ v: "PARITY AUDIT VERSION", s: { font: { sz: 14, bold: true, color: { rgb: COLORS.PRIMARY_GREEN } } } }],
            [{ v: "This workbook uses real benchmark data to verify structural parity.", s: { font: { italic: true } } }]
        ];
        const startWs = utils.aoa_to_sheet(startData);
        startWs['!cols'] = [{ wch: 35 }, { wch: 80 }];
        startWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
        utils.book_append_sheet(wb, startWs, TABS.START);

        // --- 03. DAILY_TASKS (THE PARITY GRID) ---
        const taskHeaders = [
            { v: "BRANCH", s: headerStyle },             // A
            { v: "ROLE", s: headerStyle },               // B
            { v: "TECHNICAL TASK", s: headerStyle },     // C
            { v: "ASSIGNED TO", s: headerStyle },        // D
            { v: "DONE BY", s: headerStyle },            // E
            { v: "VERIFIED BY", s: headerStyle },        // F
            { v: "STATUS", s: headerStyle },             // G
            { v: "CONSEQUENCE / RISK", s: headerStyle }, // H
            { v: "FLOOR INSTRUCTIONS", s: headerStyle }  // I
        ];

        const taskData: any[][] = [[], [], taskHeaders];
        const activeRoles = Array.from(new Set(item.checklists.map(c => c.role)));
        
        // Emulating 2 branches for parity
        for (let b = 0; b < 2; b++) {
            const bRef = `'${TABS.BRANCH_SETUP}'!$A$${4 + b}`;
            activeRoles.forEach((role, roleIdx) => {
                const roleChecklist = item.checklists.find(c => c.role === role);
                if (roleChecklist) {
                    roleChecklist.tasks.forEach(t => {
                        const rIdx = taskData.length + 1;
                        const styles = getStyles(roleIdx % 2 === 1);
                        const isV = t.verificationRequired === true;

                        const assignedFormula = `IFERROR(INDEX('${TABS.SYS_ENGINE}'!$D$1:$D$500, MATCH(IFERROR(${bRef}, "") & "|" & "${role}", '${TABS.SYS_ENGINE}'!$C$1:$C$500, 0)), "[UNASSIGNED]")`;
                        const statusFormula = isV 
                            ? `IF(AND(LEN(TRIM($E${rIdx}))>0, LEN(TRIM($F${rIdx}))>0), "COMPLETE", IF(LEN(TRIM($E${rIdx}))>0, "IN PROGRESS", "OPEN"))`
                            : `IF(LEN(TRIM($E${rIdx}))>0, "COMPLETE", "OPEN")`;

                        taskData.push([
                            { t: 'f', f: `IFERROR(${bRef}, "")`, s: styles.left },
                            { v: role, s: { ...styles.left, font: { ...baseFont, bold: true } } },
                            { v: t.technicalProtocol || t.description, s: { ...styles.left, font: { bold: true } } },
                            { t: 'f', f: assignedFormula, s: styles.left },
                            { v: "", s: styles.input },
                            { v: "", s: isV ? styles.input : styles.locked }, 
                            { t: 'f', f: statusFormula, s: { ...styles.center, font: { bold: true } } },
                            { v: t.consequence || "Compliance Gap", s: { ...styles.left, font: { italic: true, color: { rgb: COLORS.TEXT_RISK } } } },
                            { v: t.floorAction || t.trainerNotes || "", s: { ...styles.left, font: { color: { rgb: "065F46" } } } }
                        ]);
                    });
                }
            });
        }

        const taskWs = utils.aoa_to_sheet(taskData);
        taskWs['!cols'] = [20, 25, 45, 25, 15, 15, 15, 45, 65].map(w => ({ wch: w }));
        
        // Step 2 will add freeze panes. Step 1 is pure parity.
        taskWs['!views'] = [{ state: 'frozen', ySplit: 3 }];
        
        utils.book_append_sheet(wb, taskWs, TABS.DAILY_TASKS);

        // --- OTHER SHEETS (Ghost Parity) ---
        const emptyWs = () => utils.aoa_to_sheet([[{ v: "PARITY_PLACEHOLDER", s: baseFont }]]);
        utils.book_append_sheet(wb, emptyWs(), TABS.DASHBOARD);
        utils.book_append_sheet(wb, emptyWs(), TABS.SOP_LIB);
        utils.book_append_sheet(wb, emptyWs(), TABS.BRANCH_SETUP);
        utils.book_append_sheet(wb, emptyWs(), TABS.TEAM_HUB);
        utils.book_append_sheet(wb, emptyWs(), TABS.CUSTOMIZATION_GUIDE);
        
        const sysWs = emptyWs();
        utils.book_append_sheet(wb, sysWs, TABS.SYS_ENGINE);
        const sIdx = wb.SheetNames.indexOf(TABS.SYS_ENGINE);
        if (!wb.Workbook) wb.Workbook = { Sheets: [], Views: [] };
        wb.Workbook.Sheets[sIdx] = { Hidden: 1 };

        writeFile(wb, `TEMP_HOTEL_PARITY_AUDIT.xlsx`);
    } catch (e: any) {
        alert("Parity Generation Failure: " + e.message);
    }
}
