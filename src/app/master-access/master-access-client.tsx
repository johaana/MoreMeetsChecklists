
'use client';

import * as React from 'react';
import { premiumPacks } from '@/lib/premium-packs';
import type { PremiumPack, Checklist as PackChecklist } from '@/lib/premium-packs';
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, KeyRound, ShieldCheck } from 'lucide-react';
import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import { SiteHeader } from '@/components/layout/header';

const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data. Please contact support.");
        return;
    }

    const wb = utils.book_new();

    // --- STYLES ---
    const titleStyle = { font: { sz: 16, bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center' } };
    const instructionHeaderStyle = { font: { sz: 14, bold: true, color: { rgb: "000000" } }, fill: { fgColor: { rgb: "F5A623" } }, alignment: { vertical: 'center', horizontal: 'center'} };
    const instructionBodyStyle = { font: { sz: 11, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const footerStyle = { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', wrapText: true } };
    
    // --- CONDITIONAL FORMATTING ---
    const overdueFill = { fgColor: { rgb: "FFC7CE" } };
    const overdueFont = { color: { rgb: "9C0006" } };
     const overdueConditionalFmt = {
        type: "expression",
        formula: `ISNUMBER(SEARCH("OVERDUE",INDIRECT("K"&ROW())))`,
        style: { fill: overdueFill, font: overdueFont },
    };

    const completedFill = { fgColor: { rgb: "C6EFCE" } };
    const completedFont = { color: { rgb: "006100" } };
     const completedConditionalFmt = {
        type: "expression",
        formula: `ISNUMBER(SEARCH("Completed",INDIRECT("K"&ROW())))`,
        style: { fill: completedFill, font: completedFont },
    };
    
    // --- HELPER FUNCTIONS ---
    const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
        ws['!cols'] = widths.map(wch => ({ wch }));
    };
    
    const addFooter = (ws: WorkSheet, lastRow: number, numCols: number) => {
        const merge = { s: { r: lastRow + 2, c: 0 }, e: { r: lastRow + 2, c: numCols - 1 } };
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(merge);
        const footerCell: CellObject = { v: "For support, contact more@moremeets.com | © 2024 MoreMeets - The Professional Standard for Operational Checklists.", t: 's', s: footerStyle };
        utils.sheet_add_aoa(ws, [[footerCell]], { origin: { r: lastRow + 2, c: 0 } });
    };

    let checklists: PackChecklist[] = [];
    const packTitle = item.title;

    if (type === 'pack') {
        checklists = (item as PremiumPack).checklists;
    } else {
        const checklist = item as IndividualChecklist;
        checklists = [{
            title: checklist.title,
            tasks: checklist.tasks,
            department: checklist.category,
            frequency: 'As Required',
            role: 'User',
            summary: checklist.longDescription,
            icon: checklist.icon
        }];
    }

    // --- INSTRUCTIONS SHEET ---
    const instructionsData = [
        [{ v: `MoreMeets Operations Pack: ${packTitle}`, t: 's', s: titleStyle }, null, null, null, null],
        [],
        [{ v: 'How To Use This "Smart" Checklist', t: 's', s: instructionHeaderStyle }, null, null, null, null],
        [{ v: "This isn't a static list; it's a dynamic operational tool designed for accountability and easy tracking. Here’s how to use its smart features:" , t: 's', s: { ...instructionBodyStyle, alignment: { wrapText: true, vertical: 'center', horizontal: 'center' } } }, null, null, null, null],
        [],
        [{ v: '1. Complete a Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "Simply enter the completion date in the 'Date Last Completed' column. The 'Status' and 'Next Due Date' columns will update automatically.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '2. See The Live Status', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "The 'Status' column is fully automated. If a task is overdue, the row will turn RED. If it is completed, it will turn GREEN.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '3. Handle Event-Driven Tasks', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "For tasks with a frequency of 'As Required' or 'Per Incident', the 'Next Due Date' will show 'N/A' and the task will never become overdue.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '4. Reset a Recurring Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "To start the next cycle for a recurring task (e.g., weekly, monthly), just clear the date from the 'Date Last Completed' cell. The row will revert to 'Pending'.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '5. Handle Exceptions', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "If a task is delayed (e.g., 'Awaiting Parts') or not applicable, use the 'Notes' column. This keeps the primary system clean while providing important context for managers and auditors.", t: 's', s: instructionBodyStyle }, null, null, null],
    ];
    
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } }, { s: { r: 5, c: 1 }, e: { r: 5, c: 4 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 4 } }, { s: { r: 7, c: 1 }, e: { r: 7, c: 4 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 4 } }, { s: { r: 9, c: 1 }, e: { r: 9, c: 4 } },
    ];
    setColumnWidths(instructionsWs, [25, 25, 25, 25, 25]);
    instructionsWs['!rows'] = [ { hpt: 30 }, { hpt: 15 }, { hpt: 25 }, { hpt: 60 }, { hpt: 15 }, { hpt: 50 }, { hpt: 60 }, { hpt: 60 }, { hpt: 50 }, { hpt: 60 }];
    addFooter(instructionsWs, 11, 5);
    utils.book_append_sheet(wb, instructionsWs, "Instructions");

    // --- COVER PAGE ---
    if (type === 'pack' && checklists.length > 1) {
        const coverPageData: any[][] = [
            [{ v: packTitle, s: titleStyle }, null, null, null],
            [],
            [{v:"Click any checklist title below to navigate directly to its sheet.", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } }}, null, null, null],
            [],
            ["Checklist Title", "Department", "Frequency", "Primary Role"],
        ];
        checklists.forEach(checklist => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            coverPageData.push([
                { t: 's', v: checklist.title, l: { Target: `'${safeSheetName}'!A1` }, s: linkStyle },
                checklist.department, checklist.frequency, checklist.role
            ]);
        });
        const coverWs = utils.aoa_to_sheet(coverPageData);
        setColumnWidths(coverWs, [60, 25, 20, 25]);
        coverWs['!rows'] = [{ hpt: 30 }];
        coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }];
        ['A5', 'B5', 'C5', 'D5'].forEach(cell => { if (coverWs[cell]) coverWs[cell].s = headerStyle; });
        addFooter(coverWs, coverPageData.length, 4);
        utils.book_append_sheet(wb, coverWs, "Cover Page");
    }

    // --- CHECKLIST SHEETS ---
    checklists.forEach(checklist => {
        const wsData: any[][] = [
            [checklist.title], [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Consequence of Failure', 'Proof / Evidence', 'Frequency', 'Department', 'Role', 'Date Last Completed', 'Status', 'Next Due Date', 'Notes'],
        ];
        
        const headerEndCol = 'M'; // Last visible column
        const helperColStart = 13; // Column N

        checklist.tasks.forEach((task, index) => {
            const rowNum = 4 + index;
            const dateCell = `J${rowNum}`;
            const freqCell = `G${rowNum}`;
            
            // Helper Column 1 (N): Is Event Driven?
            const isEventDrivenFormula = `OR(ISNUMBER(SEARCH("required",LOWER(${freqCell}))),ISNUMBER(SEARCH("incident",LOWER(${freqCell}))),ISNUMBER(SEARCH("ongoing",LOWER(${freqCell}))),ISNUMBER(SEARCH("hire",LOWER(${freqCell}))),ISNUMBER(SEARCH("delivery",LOWER(${freqCell}))),ISNUMBER(SEARCH("order",LOWER(${freqCell}))),ISNUMBER(SEARCH("transaction",LOWER(${freqCell}))),ISNUMBER(SEARCH("franchisee",LOWER(${freqCell}))),ISNUMBER(SEARCH("campaign",LOWER(${freqCell}))),ISNUMBER(SEARCH("case",LOWER(${freqCell}))),ISNUMBER(SEARCH("visit",LOWER(${freqCell}))),ISNUMBER(SEARCH("item",LOWER(${freqCell}))),ISNUMBER(SEARCH("audit",LOWER(${freqCell}))),ISNUMBER(SEARCH("deviation",LOWER(${freqCell}))))`;

            // Helper Column 2 (O): Days to Add
            const daysToAddFormula = `IF(ISNUMBER(SEARCH("daily",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("weekly",LOWER(${freqCell}))),7,IF(ISNUMBER(SEARCH("fortnightly",LOWER(${freqCell}))),14,0)))`;

            // Helper Column 3 (P): Months to Add
            const monthsToAddFormula = `IF(ISNUMBER(SEARCH("monthly",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("quarterly",LOWER(${freqCell}))),3,IF(ISNUMBER(SEARCH("annually",LOWER(${freqCell}))),12,0)))`;

            // Visible "Next Due Date" Column (L)
            const nextDueDateFormula = `IF(OR(N${rowNum}, ISBLANK(${dateCell})),"N/A",IF(P${rowNum}>0,EDATE(${dateCell},P${rowNum}),${dateCell}+O${rowNum}))`;

            // Visible "Status" Column (K)
            const statusFormula = `IF(ISBLANK(${dateCell}),"Pending",IF(L${rowNum}="N/A","Completed",IF(TODAY()>=L${rowNum},"ACTION REQUIRED - OVERDUE","Completed")))`;

            wsData.push([
                task.id, task.description, task.priority, task.riskLevel, task.consequence, task.proof, 
                task.frequency || checklist.frequency, task.department || checklist.department, task.role || checklist.role,
                null, 
                { t: 'f', f: statusFormula }, 
                { t: 'f', f: nextDueDateFormula, s: { numFmt: 'dd-mmm-yyyy' } }, 
                '',
                { t: 'f', f: isEventDrivenFormula },
                { t: 'f', f: daysToAddFormula },
                { t: 'f', f: monthsToAddFormula }
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 12 } }];
        if(ws['A1']) ws['A1'].s = titleStyle;
        ws['!rows'] = [{ hpt: 30 }];
        setColumnWidths(ws, [10, 50, 10, 10, 30, 25, 15, 20, 20, 20, 25, 20, 30, 0, 0, 0]); // Hide helper columns
        const headerCells = ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'L3', 'M3'];
        headerCells.forEach(cell => { if (ws[cell]) ws[cell].s = headerStyle; });
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
        ws['!conditional_formatting'] = ws['!conditional_formatting'] || [];
        ws['!conditional_formatting'].push(
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [overdueConditionalFmt] },
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [completedConditionalFmt] }
        );
        
        for (let R = 3; R <= range.e.r; ++R) {
            const dateCellJ = ws[utils.encode_cell({c: 9, r: R})]; 
             if(dateCellJ) {
                if (!dateCellJ.s) dateCellJ.s = {};
                dateCellJ.s.numFmt = 'dd-mmm-yyyy';
            }
        }
        
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length, 13);
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(wb, ws, sheetName);
    });
    
    if (wb.SheetNames.indexOf('Sheet1') > -1) delete wb.Sheets['Sheet1'];

    const sortedSheetNames = wb.SheetNames.sort((a, b) => {
        if (a === 'Instructions') return -1;
        if (b === 'Instructions') return 1;
        if (a === 'Cover Page') return -1;
        if (b === 'Cover Page') return 1;
        return a.localeCompare(b);
    });
    wb.SheetNames = sortedSheetNames;
    const fileName = item.title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_') + '_MoreMeets.xlsx';
    writeFile(wb, fileName);
}


export default function MasterAccessClientPage() {
    const [password, setPassword] = React.useState('');
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [error, setError] = React.useState('');

    const masterPassword = 'Johaana@2319';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === masterPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    if (!isAuthenticated) {
        return (
             <div className="flex flex-col min-h-screen bg-background">
                <SiteHeader />
                <main className="flex-1 flex items-center justify-center">
                    <Card className="w-full max-w-sm mx-auto">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <KeyRound className="w-6 h-6" />
                                Master Access Login
                            </CardTitle>
                            <CardDescription>
                                This page is for internal use only.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter master password"
                                        required
                                    />
                                </div>
                                {error && <p className="text-sm text-destructive">{error}</p>}
                                <Button type="submit" className="w-full">
                                    Unlock Access
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </main>
            </div>
        );
    }

    return (
         <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1 py-12">
                <div className="container px-4 md:px-6">
                     <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                            Internal Resource Portal
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                            Download any premium pack or individual checklist for demonstration or platform setup.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Premium Packs</h2>
                            <div className="space-y-4">
                                {premiumPacks.map((pack) => (
                                    <Card key={pack.id} className="flex flex-wrap items-center justify-between p-4 gap-4">
                                        <div className='flex items-center gap-4'>
                                            {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                                            <div>
                                                <h3 className="font-semibold">{pack.title}</h3>
                                                <p className="text-xs md:text-sm text-muted-foreground">{pack.category}</p>
                                            </div>
                                        </div>
                                        <Button onClick={() => handleDownload(pack, 'pack')} className="w-full sm:w-auto">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download Pack
                                        </Button>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Individual Checklists</h2>
                            <div className="space-y-4">
                                {individualChecklists.map((checklist) => (
                                    <Card key={checklist.id} className="flex flex-wrap items-center justify-between p-4 gap-4">
                                        <div className='flex items-center gap-4'>
                                             {React.cloneElement(checklist.icon, { className: "w-8 h-8 text-primary" })}
                                            <div>
                                                <h3 className="font-semibold">{checklist.title}</h3>
                                                <p className="text-xs md:text-sm text-muted-foreground">{checklist.category}</p>
                                            </div>
                                        </div>
                                        <Button onClick={() => handleDownload(checklist, 'individual')} className="w-full sm:w-auto">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download Checklist
                                        </Button>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
