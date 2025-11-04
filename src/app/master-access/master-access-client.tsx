
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
import { writeFile, utils } from 'xlsx-js-style';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/header';


// The download logic is copied from the thank-you page.
const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the item data. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };
    const footerStyle = {
        font: { italic: true, sz: 10 }
    };

    let checklists: PackChecklist[] = [];
    let packTitle = item.title;

    if (type === 'pack') {
        const pack = item as PremiumPack;
        packTitle = pack.title;
        checklists = pack.checklists;
    } else {
        const checklist = item as IndividualChecklist;
        packTitle = checklist.title;
        checklists = [{
            title: checklist.title,
            tasks: checklist.tasks,
            department: checklist.category, // fallback
            frequency: 'N/A',
            role: 'N/A',
            summary: checklist.longDescription,
            icon: checklist.icon
        }];
    }
    
    // --- Cover Page ---
    const coverPageName = "Cover Page";
    const footerText = "Provided by MoreMeets | www.moremeets.com";

    const coverPageHeader = [packTitle];
    const coverPageData = [
        [" "],
        ["Click to navigate:"],
        ["Checklist Title", "Department", "Frequency", "Role"],
         ...checklists.map((checklist) => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            return [
                { v: checklist.title, f: formula },
                checklist.department,
                checklist.frequency,
                checklist.role
            ];
        }),
        [" "], 
        [footerText] 
    ];

    const coverWorksheet = utils.aoa_to_sheet([coverPageHeader, ...coverPageData]);
    coverWorksheet['!cols'] = [{ wch: 60 }, { wch: 25 }, { wch: 20 }, { wch: 25 }];
    
    coverWorksheet['A1'].s = { font: { sz: 24, bold: true }};
    
    ['A4', 'B4', 'C4', 'D4'].forEach(cell => {
        if (coverWorksheet[cell]) coverWorksheet[cell].s = headerStyle;
    });

    const rangeLinks = utils.decode_range(coverWorksheet['!ref']!);
    for (let R = 4; R <= rangeLinks.e.r; ++R) { 
        const address = utils.encode_cell({ r: R, c: 0 });
        if (coverWorksheet[address] && coverWorksheet[address].f) {
             coverWorksheet[address].s = { font: { color: { rgb: "0000FF" }, underline: true } };
        }
    }
    
    const footerRowIndex = rangeLinks.e.r;
    const footerCellAddress = `A${footerRowIndex + 1}`;
    if (coverWorksheet[footerCellAddress]) {
        coverWorksheet[footerCellAddress].s = footerStyle;
    }
    
    utils.book_append_sheet(workbook, coverWorksheet, coverPageName);

    // --- Master View (For Packs Only for now) ---
    if (type === 'pack') {
        const masterSheetName = "Master View";
        const masterSheetData = [
            ["Checklist Title", "Task ID", "Task Description", "Priority", "Risk Level"],
            ...(item as PremiumPack).checklists.flatMap((checklist) => 
                checklist.tasks.map(task => [
                    checklist.title,
                    task.id,
                    task.description,
                    task.priority,
                    task.riskLevel
                ])
            )
        ];
        
        const masterWorksheet = utils.aoa_to_sheet(masterSheetData);
        masterWorksheet['!cols'] = [{ wch: 40 }, { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 }];
        
        const rangeMaster = utils.decode_range(masterWorksheet['!ref']!);
        for (let C = rangeMaster.s.c; C <= rangeMaster.e.c; ++C) {
            const address = utils.encode_cell({ r: 0, c: C });
            if (masterWorksheet[address]) {
                masterWorksheet[address].s = headerStyle;
            }
        }
        masterWorksheet['!views'] = [{state: 'frozen', ySplit: 1}];
        
        utils.book_append_sheet(workbook, masterWorksheet, masterSheetName);
    }

    // --- Individual Checklist Sheets ---
    checklists.forEach(checklist => {
        const checklistHeaders = [
            'Task ID', 'Task', 'Priority', 'Risk Level', 
            'Proof / Evidence', 'Status', 'Assigned To', 'Notes'
        ];
        
        const tasksForSheet = checklist.tasks.map(task => [
            task.id,
            task.description,
            task.priority,
            task.riskLevel,
            task.proof,
            'Pending',
            '',
            ''
        ]);

        const checklistDataWithHeader = [checklistHeaders, ...tasksForSheet];
        const worksheet = utils.aoa_to_sheet(checklistDataWithHeader);
        
        worksheet['!cols'] = [
            { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 }, 
            { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }
        ];

         const headerRange = utils.decode_range(worksheet['!ref']!);
         for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
            const address = utils.encode_cell({ r: 0, c: C });
            if(worksheet[address]) {
                worksheet[address].s = headerStyle;
            }
         }
         worksheet['!views'] = [{state: 'frozen', ySplit: 1}];

        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    const fileName = item.title.replace(/ /g, '_') + '_DEMO.xlsx';
    writeFile(workbook, fileName);
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
                                    <Card key={pack.id} className="flex items-center justify-between p-4">
                                        <div className='flex items-center gap-4'>
                                            {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                                            <div>
                                                <h3 className="font-semibold">{pack.title}</h3>
                                                <p className="text-xs md:text-sm text-muted-foreground">{pack.category}</p>
                                            </div>
                                        </div>
                                        <Button onClick={() => handleDownload(pack as PremiumPack, 'pack')}>
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Button>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-headline mb-4 text-primary">Individual Checklists</h2>
                            <div className="space-y-4">
                                {individualChecklists.map((checklist) => (
                                    <Card key={checklist.id} className="flex items-center justify-between p-4">
                                        <div className='flex items-center gap-4'>
                                             {React.cloneElement(checklist.icon, { className: "w-8 h-8 text-primary" })}
                                            <div>
                                                <h3 className="font-semibold">{checklist.title}</h3>
                                                <p className="text-xs md:text-sm text-muted-foreground">{checklist.category}</p>
                                            </div>
                                        </div>
                                        <Button onClick={() => handleDownload(checklist as IndividualChecklist, 'individual')}>
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
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
