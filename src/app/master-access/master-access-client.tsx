
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
import { writeFile, utils, type WorkSheet } from 'xlsx-js-style';
import { SiteHeader } from '@/components/layout/header';


const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data. Please contact support.");
        return;
    }

    const wb = utils.book_new();

    // --- Styles ---
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12 },
        fill: { fgColor: { rgb: "0A2540" } },
        alignment: { vertical: 'center' }
    };
    const titleStyle = { font: { sz: 24, bold: true, color: { rgb: "0A2540" } } };
    const subtitleStyle = { font: { sz: 14, bold: true, color: { rgb: "0A2540" } } };
    const instructionStyle = { font: { sz: 12 }, alignment: { wrapText: true, vertical: 'top' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const footerStyle = { font: { italic: true, sz: 10, color: { rgb: "808080" } } };
    const statusHeaderStyle = { ...headerStyle, fill: { fgColor: { rgb: "FFA500" } } };

    // --- Helper Functions ---
    const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
        ws['!cols'] = widths.map(wch => ({ wch }));
    };

    const addFooter = (ws: WorkSheet, lastRow: number) => {
        const footerText = "© MoreMeets | www.moremeets.com - The Professional Standard for Operational Checklists.";
        utils.sheet_add_aoa(ws, [[footerText]], { origin: `A${lastRow + 2}` });
        ws[`A${lastRow + 2}`].s = footerStyle;
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
            frequency: 'N/A',
            role: 'N/A',
            summary: checklist.longDescription,
            icon: checklist.icon
        }];
    }

    // --- Instructions Sheet ---
    const instructionsWs = utils.aoa_to_sheet([
        ["How to Use Your Checklist Pack"],
        [],
        ["Welcome!"],
        ["This Excel file is designed to be a powerful tool for your operations. Here’s how to get the most out of it:"],
        [],
        ["1. Navigation"],
        ["The 'Cover Page' sheet contains a full list of all checklists included in this pack. Click on any checklist title to jump directly to that sheet."],
        [],
        ["2. Using the Checklists"],
        ["Each checklist sheet is ready for daily use. The 'Status' column is interactive:"],
        ["- Click on a cell in the 'Status' column to choose from a dropdown: Pending, In Progress, or Completed."],
        ["- Use the 'Assigned To' and 'Notes' columns to manage tasks within your team."],
        [],
        ["3. Customization"],
        ["This is your file. Feel free to customize it to fit your exact needs. You can add your company logo, change tasks, or add new columns."],
        [],
        ["Questions?"],
        ["If you need any assistance, please contact us at more@moremeets.com."]
    ]);
    instructionsWs["A1"].s = titleStyle;
    instructionsWs["A3"].s = subtitleStyle;
    instructionsWs["A6"].s = subtitleStyle;
    instructionsWs["A9"].s = subtitleStyle;
    instructionsWs["A15"].s = subtitleStyle;
    instructionsWs["A18"].s = subtitleStyle;

    for (let i = 1; i <= 20; i++) {
        const cell = `A${i}`;
        if (instructionsWs[cell]) {
            instructionsWs[cell].s = { ...instructionsWs[cell].s, ...instructionStyle };
        }
         const cellB = `B${i}`;
         if (instructionsWs[cellB]) {
             instructionsWs[cellB].s = { ...instructionsWs[cellB].s, ...instructionStyle };
         }
    }
    setColumnWidths(instructionsWs, [100]);
    utils.book_append_sheet(wb, instructionsWs, "Instructions");

    // --- Cover Page ---
    const coverPageName = "Cover Page";
    const coverPageHeader = [packTitle];
    const coverPageData = [
        [" "],
        ["Click any checklist title below to navigate directly to its sheet."],
        [],
        ["Checklist Title", "Department", "Frequency", "Primary Role"],
         ...checklists.map((checklist) => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            return [ { v: checklist.title, f: formula }, checklist.department, checklist.frequency, checklist.role ];
        }),
    ];

    const coverWs = utils.aoa_to_sheet([coverPageHeader, ...coverPageData]);
    setColumnWidths(coverWs, [60, 25, 20, 25]);
    coverWs['A1'].s = titleStyle;
    coverWs['A2'].s = { font: { italic: true, sz: 11 } };
    
    ['A4', 'B4', 'C4', 'D4'].forEach(cell => { if (coverWs[cell]) coverWs[cell].s = headerStyle; });

    const rangeLinks = utils.decode_range(coverWs['!ref']!);
    for (let R = 4; R <= rangeLinks.e.r; ++R) { 
        const address = utils.encode_cell({ r: R, c: 0 });
        if (coverWs[address] && coverWs[address].f) {
             coverWs[address].s = linkStyle;
        }
    }
    addFooter(coverWs, rangeLinks.e.r);
    utils.book_append_sheet(wb, coverWs, coverPageName);

    // --- Master View (For Packs only) ---
    if (type === 'pack') {
        const masterSheetName = "Master View";
        const masterSheetData = [
            ["Checklist Title", "Task ID", "Task Description", "Priority", "Risk Level"],
            ...(item as PremiumPack).checklists.flatMap((checklist) => 
                checklist.tasks.map(task => [ checklist.title, task.id, task.description, task.priority, task.riskLevel ])
            )
        ];
        
        const masterWs = utils.aoa_to_sheet(masterSheetData);
        setColumnWidths(masterWs, [40, 15, 60, 15, 15]);
        const rangeMaster = utils.decode_range(masterWs['!ref']!);
        for (let C = rangeMaster.s.c; C <= rangeMaster.e.c; ++C) {
            const address = utils.encode_cell({ r: 0, c: C });
            if (masterWs[address]) masterWs[address].s = headerStyle;
        }
        masterWs['!views'] = [{state: 'frozen', ySplit: 1}];
        addFooter(masterWs, rangeMaster.e.r);
        utils.book_append_sheet(wb, masterWs, masterSheetName);
    }

    // --- Individual Checklist Sheets ---
    checklists.forEach(checklist => {
        const wsData = [
            [checklist.title],
            [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Proof / Evidence', 'Status', 'Assigned To', 'Notes']
        ];
        const tasksForSheet = checklist.tasks.map(task => [
            task.id, task.description, task.priority, task.riskLevel, task.proof, 'Pending', '', ''
        ]);
        wsData.push(...tasksForSheet);

        const ws = utils.aoa_to_sheet(wsData);
        
        // Apply styles and widths
        ws['A1'].s = titleStyle;
        setColumnWidths(ws, [15, 60, 15, 15, 25, 15, 20, 30]);
        ['A3', 'B3', 'C3', 'D3', 'E3', 'G3', 'H3'].forEach(cell => { if (ws[cell]) ws[cell].s = headerStyle; });
        ws['F3'].s = statusHeaderStyle;

        // Add dropdown validation for 'Status' column
        const statusRange = { s: { r: 3, c: 5 }, e: { r: 3 + tasksForSheet.length, c: 5 } };
        ws['!dataValidation'] = [
            ...(ws['!dataValidation'] || []),
            {
                sqref: utils.encode_range(statusRange),
                opts: {
                    type: 'list',
                    formula1: '"Pending,In Progress,Completed"',
                    showDropDown: true,
                    error: 'Please select from the dropdown',
                    errorTitle: 'Invalid Status'
                }
            }
        ];
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length);
        
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(wb, ws, sheetName);
    });

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_') + '_MoreMeets.xlsx';
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
