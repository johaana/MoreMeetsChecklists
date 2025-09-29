
'use client';

import * as React from 'react';
import { premiumPacks } from '@/lib/premium-packs';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, KeyRound, ShieldCheck } from 'lucide-react';
import { writeFile, utils } from 'xlsx-js-style';
import { Logo } from '@/components/icons';
import Link from 'next/link';


// The download logic is copied from the thank-you page.
const handleDownload = (pack: PremiumPack) => {
    if (!pack) {
        alert("Could not find the pack data. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };

    // --- Cover Page ---
    const coverPageName = "Cover Page";
    const coverPageHeader = [pack.title];
    const coverPageData = [
        [" "],
        ["Click to navigate:"],
        ["Checklist Title", "Department", "Frequency", "Role"],
         ...pack.checklists.map((checklist) => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            return [
                { v: checklist.title, f: formula },
                checklist.department,
                checklist.frequency,
                checklist.role
            ];
        })
    ];

    const coverWorksheet = utils.aoa_to_sheet([coverPageHeader, ...coverPageData]);
    coverWorksheet['!cols'] = [{ wch: 60 }, { wch: 25 }, { wch: 20 }, { wch: 25 }];
    
    // Style header
    coverWorksheet['A1'].s = { font: { sz: 24, bold: true }};
    
    // Style table headers
    ['A4', 'B4', 'C4', 'D4'].forEach(cell => {
        if (coverWorksheet[cell]) coverWorksheet[cell].s = headerStyle;
    });

    // Style hyperlinks
    const rangeLinks = utils.decode_range(coverWorksheet['!ref']!);
    for (let R = 4; R <= rangeLinks.e.r; ++R) { // Start from row 5 (index 4)
        const address = utils.encode_cell({ r: R, c: 0 });
        if (coverWorksheet[address] && coverWorksheet[address].f) {
             coverWorksheet[address].s = { font: { color: { rgb: "0000FF" }, underline: true } };
        }
    }
    
    utils.book_append_sheet(workbook, coverWorksheet, coverPageName);

    // --- Master View ---
    const masterSheetName = "Master View";
    const masterSheetData = [
        ["Checklist Title", "Task ID", "Task Description", "Priority", "Risk Level"],
        ...pack.checklists.flatMap((checklist) => 
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

    // --- Individual Checklist Sheets ---
    pack.checklists.forEach(checklist => {
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

    const fileName = pack.title.replace(/ /g, '_') + '_DEMO.xlsx';
    writeFile(workbook, fileName);
}


export default function MasterAccessPage() {
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
                 <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                </header>
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
             <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
                <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold">MoreMeets</span>
                </Link>
                 <div className="ml-auto">
                    <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
                </div>
            </header>
            <main className="flex-1 py-12">
                <div className="container px-4 md:px-6">
                     <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-green-500" />
                            Internal Resource Portal
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                            Download any premium pack for demonstration or customer support purposes.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {premiumPacks.map((pack) => (
                            <Card key={pack.id} className="flex items-center justify-between p-4">
                                <div className='flex items-center gap-4'>
                                    {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                                    <div>
                                        <h3 className="font-semibold">{pack.title}</h3>
                                        <p className="text-sm text-muted-foreground">{pack.category}</p>
                                    </div>
                                </div>
                                <Button onClick={() => handleDownload(pack as PremiumPack)}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

    
