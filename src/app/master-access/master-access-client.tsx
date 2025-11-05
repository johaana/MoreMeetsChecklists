
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

    // --- Enhanced Styles ---
    const titleStyle = { font: { sz: 16, bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center' } };
    const instructionHeaderStyle = { font: { sz: 14, bold: true, color: { rgb: "000000" } }, fill: { fgColor: { rgb: "F5A623" } }, alignment: { vertical: 'center', horizontal: 'center'} };
    const instructionBodyStyle = { font: { sz: 11, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const sectionTitleStyle = { font: { sz: 12, bold: true, color: { rgb: "0A2540" } } };
    const footerStyle = { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const checklistHeaderStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center' } };
    
    const overdueFill = { fgColor: { rgb: "FFC7CE" } };
    const overdueFont = { color: { rgb: "9C0006" } };
    const overdueConditionalFmt = {
        type: "expression",
        formula: 'INDIRECT("H"&ROW())="ACTION REQUIRED - OVERDUE"',
        style: { fill: overdueFill, font: overdueFont },
    };

    const completedFill = { fgColor: { rgb: "E6FFEC" } };
    const completedConditionalFmt = {
        type: "expression",
        formula: 'INDIRECT("H"&ROW())="Completed"',
        style: { fill: completedFill },
    };


    // --- Helper Functions ---
    const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
        ws['!cols'] = widths.map(wch => ({ wch }));
    };
    
    const addFooter = (ws: WorkSheet, lastRow: number, numCols: number) => {
        ws['!merges'] = ws['!merges'] || [];
        ws['!merges'].push({ s: { r: lastRow + 2, c: 0 }, e: { r: lastRow + 2, c: numCols - 1 } });
        const footerCell: CellObject = { v: "© 2024 MoreMeets | www.moremeets.com - The Professional Standard for Operational Checklists.", t: 's', s: footerStyle };
        utils.sheet_add_aoa(ws, [[footerCell]], { origin: `A${lastRow + 3}` });
    };
    
    // --- Data Preparation ---
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

    // --- Professional Instructions Sheet ---
    const instructionsData = [
        [{ v: `MoreMeets Operations Pack: ${packTitle}`, t: 's', s: titleStyle }, null, null, null, null],
        [],
        [{ v: 'How To Use This "Smart" Checklist', t: 's', s: instructionHeaderStyle }, null, null, null, null],
        [
            { v: "This isn't a static list; it's a dynamic operational tool. Here's how it works:" , t: 's', s: { ...instructionBodyStyle, alignment: { wrapText: true, vertical: 'center', horizontal: 'center' } } },
            null, null, null, null
        ],
        [],
        [{ v: '1. Complete a Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "Simply enter the date in the 'Date Last Completed' column. The sheet does the rest.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '2. Automatic Updates', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "The 'Status' will change to 'Completed' and the 'Next Due Date' will calculate automatically based on the task's frequency (Daily, Weekly, etc.).", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '3. Stay Alert', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "When a task's due date arrives, the 'Status' will automatically change to 'ACTION REQUIRED - OVERDUE' and the row will highlight, telling you exactly what needs attention.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '4. Reset a Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "To 'reset' a recurring task for its next cycle, just clear the date from the 'Date Last Completed' cell. The row will reset to 'Pending'.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '5. Handle Exceptions', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "If a task is delayed (e.g., 'Awaiting Parts') or not applicable, use the 'Notes' column to add details. This keeps the primary system clean while providing context.", t: 's', s: instructionBodyStyle }, null, null, null],
        [],
        [{ v: 'Need Help?', t: 's', s: sectionTitleStyle }, null, null, null, null],
        [{ v: 'For any questions or support, please email us at more@moremeets.com.', t: 's', s: instructionBodyStyle }, null, null, null, null],
    ];
    
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } },
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 5, c: 1 }, e: { r: 5, c: 4 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 4 } },
        { s: { r: 7, c: 1 }, e: { r: 7, c: 4 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 4 } },
        { s: { r: 9, c: 1 }, e: { r: 9, c: 4 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 4 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 4 } },
    ];
    setColumnWidths(instructionsWs, [20, 25, 25, 25, 25]);
    instructionsWs['!rows'] = [
        { hpt: 30 }, { hpt: 15 }, { hpt: 25 }, { hpt: 40 }, { hpt: 15 }, 
        { hpt: 40 }, { hpt: 40 }, { hpt: 40 }, { hpt: 40 }, { hpt: 40 }, 
        { hpt: 15 }, { hpt: 20 }, { hpt: 30 }
    ];
    addFooter(instructionsWs, 15, 5);
    utils.book_append_sheet(wb, instructionsWs, "Instructions");


    // --- Cover Page ---
    if (type === 'pack' && checklists.length > 1) {
        const coverPageName = "Cover Page";
        const coverPageData: any[][] = [
            [{ v: packTitle, s: titleStyle }, null, null, null],
            [],
            [{v:"Click any checklist title below to navigate directly to its sheet.", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } }}, null, null, null],
            [],
            ["Checklist Title", "Department", "Frequency", "Primary Role"],
        ];

        checklists.forEach(checklist => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            coverPageData.push([{ t: 's', v: checklist.title, f: formula, s: linkStyle }, checklist.department, checklist.frequency, checklist.role ]);
        });

        const coverWs = utils.aoa_to_sheet(coverPageData);
        setColumnWidths(coverWs, [60, 25, 20, 25]);
        coverWs['!rows'] = [{ hpt: 30 }];
        coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }];
        
        ['A5', 'B5', 'C5', 'D5'].forEach(cell => { if (coverWs[cell]) coverWs[cell].s = checklistHeaderStyle; });

        addFooter(coverWs, coverPageData.length, 4);
        utils.book_append_sheet(wb, coverWs, coverPageName);
    }

    // --- Individual Checklist Sheets ---
    checklists.forEach(checklist => {
        const wsData = [
            [checklist.title],
            [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Proof / Evidence', 'Date Last Completed', 'Next Due Date', 'Status', 'Assigned To', 'Notes'],
        ];
        
        const tasksForSheet = checklist.tasks.map((task, index) => {
            const rowNum = 4 + index; 
            const dateCell = `F${rowNum}`;
            const nextDueDateCell = `G${rowNum}`;
            
            let freq = checklist.frequency.toLowerCase();
            let nextDueDateFormula = `IF(${dateCell}="", "", `;
            if (freq.includes('daily')) {
                nextDueDateFormula += `${dateCell}+1)`;
            } else if (freq.includes('weekly')) {
                nextDueDateFormula += `${dateCell}+7)`;
            } else if (freq.includes('monthly')) {
                nextDueDateFormula += `EDATE(${dateCell}, 1))`;
            } else if (freq.includes('quarterly')) {
                 nextDueDateFormula += `EDATE(${dateCell}, 3))`;
            } else if (freq.includes('annually')) {
                nextDueDateFormula += `EDATE(${dateCell}, 12))`;
            }
             else {
                nextDueDateFormula = 'IF(F4="","","N/A")';
            }


            const statusFormula = `IF(${dateCell}="", "Pending", IF(${nextDueDateCell}="N/A", "Completed", IF(AND(${nextDueDateCell}<>"", ${nextDueDateCell}<=TODAY()), "ACTION REQUIRED - OVERDUE", "Completed")))`;

            return [
                task.id, task.description, task.priority, task.riskLevel, task.proof, 
                null,
                { t: 'f', f: nextDueDateFormula },
                { t: 'f', f: statusFormula },
                '', 
                '' 
            ];
        });

        wsData.push(...tasksForSheet);
        const ws = utils.aoa_to_sheet(wsData);
        
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 9 } }];
        if (ws['A1']) ws['A1'].s = titleStyle;
        ws['!rows'] = [{ hpt: 30 }];
        
        setColumnWidths(ws, [15, 60, 15, 15, 25, 20, 20, 30, 20, 30]);

        ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'].forEach(cell => { if (ws[cell]) ws[cell].s = checklistHeaderStyle; });
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
         ws['!conditional_formatting'] = ws['!conditional_formatting'] || [];
         ws['!conditional_formatting'].push(
            { ref: `A4:J${range.e.r + 1}`, rules: [overdueConditionalFmt] },
            { ref: `A4:J${range.e.r + 1}`, rules: [completedConditionalFmt] }
        );


        for (let R = 3; R <= range.e.r; ++R) {
            // F column for Date Last Completed
            const dateCellF = ws[utils.encode_cell({c: 5, r: R})]; 
            if (dateCellF) {
                dateCellF.t = 'd';
                dateCellF.s = { numFmt: 'dd-mmm-yyyy' };
            }
             // G column for Next Due Date
            const dateCellG = ws[utils.encode_cell({c: 6, r: R})];
            if(dateCellG) {
                 dateCellG.s = { numFmt: 'dd-mmm-yyyy' };
            }
        }
        
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length, 10);
        
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(wb, ws, sheetName);
    });
    
    if (wb.SheetNames.indexOf('Sheet1') > -1) {
        const sheetIndex = wb.SheetNames.indexOf('Sheet1');
        if (sheetIndex !== -1) {
          wb.SheetNames.splice(sheetIndex, 1);
        }
    }
    
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
