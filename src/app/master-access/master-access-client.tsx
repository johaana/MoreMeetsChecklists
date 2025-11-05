

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
    const instructionTitleStyle = { font: { bold: true, sz: 12 }, alignment: { vertical: 'top' } };
    const footerStyle = { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', wrapText: true, horizontal: 'center' } };
    const dateStyle = { numFmt: 'dd-mmm-yy' };
    
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

    // --- INSTRUCTIONS & LEGEND SHEET ---
    const instructionsData = [
        [{ v: `MoreMeets Operations Pack: ${packTitle}`, t: 's', s: titleStyle }, null, null, null],
        [],
        [{ v: 'How To Use This "Smart" Checklist', t: 's', s: instructionHeaderStyle }, null, null, null],
        [{ v: "This isn't just a static list; it's a dynamic operational tool. The sheet is designed to be automated. You only need to edit ONE column.", t: 's', s: { ...instructionBodyStyle, alignment: { ...instructionBodyStyle.alignment, horizontal: 'center' } } }, null, null, null],
        [],
        [{ v: '1. Update the Date', t: 's', s: instructionTitleStyle }, { v: "When you complete a task, go to the 'Date Completed (Enter Date Here)' column and enter the date. Use the format DD-MMM-YY (e.g., 05-Nov-24). This is the only column you ever need to touch.", t: 's', s: instructionBodyStyle }],
        [{ v: '2. See The Live Status', t: 's', s: instructionTitleStyle }, { v: "The 'Status (Auto-updates)' and 'Next Due Date (Auto-calculated)' columns will update automatically. You do not need to edit them. If a task is overdue, the entire row will turn RED. If it's completed on time, it will turn GREEN.", t: 's', s: instructionBodyStyle }],
        [{ v: '3. Event-Driven vs. Scheduled Tasks', t: 's', s: instructionTitleStyle }, { v: "Tasks with a 'Frequency' like 'Daily', 'Weekly', or 'Monthly' are scheduled and will become overdue. Tasks with a frequency like 'As Required', 'Per Incident', or 'Per Hire' are event-driven and will never show as 'OVERDUE'.", t: 's', s: instructionBodyStyle }],
        [{ v: '4. Handle Exceptions', t: 's', s: instructionTitleStyle }, { v: "If a task is delayed (e.g., 'Awaiting Parts') or not applicable, use the 'Notes' column. This keeps the primary system clean while providing important context for managers and auditors.", t: 's', s: instructionBodyStyle }],
    ];
    
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } }, { s: { r: 5, c: 1 }, e: { r: 5, c: 3 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 3 } }, { s: { r: 7, c: 1 }, e: { r: 7, c: 3 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 3 } },
    ];
    setColumnWidths(instructionsWs, [25, 25, 25, 25]);
    instructionsWs['!rows'] = [ { hpt: 30 }, { hpt: 15 }, { hpt: 25 }, { hpt: 40 }, { hpt: 15 }, { hpt: 60 }, { hpt: 60 }, { hpt: 60 }, { hpt: 60 }];
    instructionsData.forEach((row, r) => {
        if (row[1] && typeof row[1].v === 'string') {
           instructionsWs[utils.encode_cell({r:r, c:1})].s = instructionBodyStyle;
        }
    });

    addFooter(instructionsWs, 10, 4);
    utils.book_append_sheet(wb, instructionsWs, "Instructions & Legend");


    // --- COVER PAGE ---
    if (type === 'pack' && checklists.length > 1) {
        const coverPageData: any[][] = [
            [{ v: packTitle, s: titleStyle }, null, null, null],
            [],
            [{v:"Click any checklist title below to navigate directly to its sheet.", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } }}, null, null, null],
            [],
            [{v:"Checklist Title", s: headerStyle}, {v:"Department", s: headerStyle}, {v:"Frequency", s: headerStyle}, {v:"Primary Role", s: headerStyle}],
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
        addFooter(coverWs, coverPageData.length, 4);
        utils.book_append_sheet(wb, coverWs, "Cover Page");
    }

    // --- CHECKLIST SHEETS ---
    checklists.forEach(checklist => {
        const headerEndCol = 'M';
        const wsData: any[][] = [
            [{v: checklist.title, s: titleStyle}], [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Consequence of Failure', 'Proof / Evidence', 'Frequency', 'Department', 'Role', 'Date Completed (Enter Date Here)', 'Status (Auto-updates)', 'Next Due Date (Auto-calculated)', 'Notes'],
        ];

        checklist.tasks.forEach((task, index) => {
            const rowNum = 4 + index;
            const dateCell = `J${rowNum}`;
            const freqCell = `G${rowNum}`;
            
            const daysToAddFormula = `IF(ISNUMBER(SEARCH("daily",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("weekly",LOWER(${freqCell}))),7,IF(ISNUMBER(SEARCH("fortnightly",LOWER(${freqCell}))),14,0)))`;
            const monthsToAddFormula = `IF(ISNUMBER(SEARCH("monthly",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("quarterly",LOWER(${freqCell}))),3,IF(ISNUMBER(SEARCH("annually",LOWER(${freqCell}))),12,0)))`;
            const isEventDrivenFormula = `OR(ISNUMBER(SEARCH("required",LOWER(${freqCell}))),ISNUMBER(SEARCH("incident",LOWER(${freqCell}))),ISNUMBER(SEARCH("ongoing",LOWER(${freqCell}))),ISNUMBER(SEARCH("hire",LOWER(${freqCell}))),ISNUMBER(SEARCH("delivery",LOWER(${freqCell}))),ISNUMBER(SEARCH("order",LOWER(${freqCell}))),ISNUMBER(SEARCH("transaction",LOWER(${freqCell}))),ISNUMBER(SEARCH("franchisee",LOWER(${freqCell}))),ISNUMBER(SEARCH("campaign",LOWER(${freqCell}))),ISNUMBER(SEARCH("case",LOWER(${freqCell}))),ISNUMBER(SEARCH("visit",LOWER(${freqCell}))),ISNUMBER(SEARCH("item",LOWER(${freqCell}))),ISNUMBER(SEARCH("audit",LOWER(${freqCell}))),ISNUMBER(SEARCH("deviation",LOWER(${freqCell}))))`;

            const nextDueDateFormula = `IF(OR(${isEventDrivenFormula}, ISBLANK(${dateCell})),"N/A",IF(${monthsToAddFormula}>0,EDATE(${dateCell},${monthsToAddFormula}),${dateCell}+${daysToAddFormula}))`;
            const statusFormula = `IF(ISBLANK(${dateCell}),"Pending",IF(L${rowNum}="N/A","Completed",IF(TODAY()>L${rowNum},"ACTION REQUIRED - OVERDUE","Completed")))`;


            wsData.push([
                task.id, task.description, task.priority, task.riskLevel, task.consequence, task.proof, 
                task.frequency || checklist.frequency, task.department || checklist.department, task.role || checklist.role,
                null, 
                { t: 'f', f: statusFormula }, 
                { t: 'f', f: nextDueDateFormula, s: dateStyle }, 
                null,
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 12 } }];
        ws['!rows'] = [{ hpt: 30 }];
        setColumnWidths(ws, [10, 50, 10, 10, 30, 25, 15, 20, 20, 20, 25, 20, 30]);
        const headerCells = ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'L3', 'M3'];
        headerCells.forEach(cell => { if (ws[cell]) ws[cell].s = headerStyle; });
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
        ws['!conditional_formatting'] = ws['!conditional_formatting'] || [];
        ws['!conditional_formatting'].push(
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [overdueConditionalFmt] },
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [completedConditionalFmt] }
        );
        
        for (let R = 3; R <= range.e.r; ++R) {
            const dateCellJ = utils.encode_cell({c: 9, r: R});
            if(!ws[dateCellJ]) ws[dateCellJ] = {t:'n', z: 'dd-mmm-yy'};
            else ws[dateCellJ].z = 'dd-mmm-yy';
        }
        
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length, 13);
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(wb, ws, sheetName);
    });
    
    if (wb.SheetNames.indexOf('Sheet1') > -1) {
        const sheet1Index = wb.SheetNames.indexOf('Sheet1');
        wb.SheetNames.splice(sheet1Index, 1);
        delete wb.Sheets['Sheet1'];
    }


    const sortedSheetNames = wb.SheetNames.sort((a, b) => {
        if (a === 'Instructions & Legend') return -1;
        if (b === 'Instructions & Legend') return 1;
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
