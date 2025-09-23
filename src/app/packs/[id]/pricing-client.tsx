'use client';

import type { PremiumPack } from '@/lib/premium-packs';
import { writeFile, utils, WorkSheet } from 'xlsx-js-style';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, BadgeCheck, Repeat, Clock, Download, DollarSign, Sparkles } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    
    const handleDownload = () => {
        // This function will be updated to handle the checkout process
        // For now, it will continue to trigger the direct download
        const workbook = utils.book_new();

        const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
        };
        
        const highPriorityColor = { rgb: "FFC7CE" }; 

        const applyStylesAndFilter = (ws: WorkSheet, data: any[][]) => {
            if(!data || data.length === 0) return;
            
            const headers = data[0];
            const priorityColIndex = headers.indexOf('Priority');
            const riskLevelColIndex = headers.indexOf('Risk Level');

            for (let R = 1; R < data.length; ++R) {
                const row = data[R];
                
                const applyHighlight = (colIndex: number, value: string) => {
                    if (colIndex !== -1 && value === 'High') {
                        for(let C = 0; C < headers.length; ++C) {
                            const cellAddress = utils.encode_cell({r: R, c: C});
                            if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: row[C] };
                            ws[cellAddress].s = { fill: { fgColor: highPriorityColor } };
                        }
                    }
                }
                if (priorityColIndex !== -1) {
                    applyHighlight(priorityColIndex, row[priorityColIndex]);
                }
                if (riskLevelColIndex !== -1) {
                    applyHighlight(riskLevelColIndex, row[riskLevelColIndex]);
                }
            }
            
            ws['!ref'] = utils.encode_range(utils.decode_range(ws['!ref'] || "A1:A1"));
            if (data.length > 1) {
                const filterRange = utils.encode_range({s: {r: 0, c: 0}, e: {r: data.length - 1, c: headers.length - 1}});
                ws['!autofilter'] = { ref: filterRange };
            }
            ws['!views'] = [{state: 'frozen', ySplit: 1}];
        };

        // Master Sheet
        const masterHeaders = [
        'Checklist', 'Department', 'Frequency', 'Role Responsible', 
        'Task ID', 'Task', 'Priority', 'Risk Level', 'Proof / Evidence', 
        'Location / Site', 'Status'
        ];
        
        const masterSheetData = pack.checklists.flatMap(checklist => 
            checklist.tasks.map(task => [
                checklist.title,
                checklist.department,
                checklist.frequency,
                checklist.role,
                task.id,
                task.description,
                task.priority,
                task.riskLevel,
                task.proof,
                task.location,
                'Pending'
            ])
        );
        
        const masterDataWithHeader = [masterHeaders, ...masterSheetData];
        const masterWorksheet = utils.aoa_to_sheet(masterDataWithHeader.map((row, r_idx) => {
            return row.map((cell) => {
                if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
                return cell;
            })
        }));
        
        applyStylesAndFilter(masterWorksheet, masterDataWithHeader);

        masterWorksheet['!cols'] = [
            { wch: 40 }, { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, 
            { wch: 60 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }, { wch: 15 },
        ];
        const masterSheetName = "Master View";
        utils.book_append_sheet(workbook, masterWorksheet, masterSheetName);

        if (workbook.Sheets[masterSheetName]) {
            workbook.Sheets[masterSheetName]['!props'] = { tabColor: { rgb: "FFC000" } };
        }

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
            
            const worksheet = utils.aoa_to_sheet(checklistDataWithHeader.map((row, r_idx) => {
                return row.map((cell) => {
                    if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
                    return cell;
                })
            }));
            
            applyStylesAndFilter(worksheet, checklistDataWithHeader);
            
            worksheet['!cols'] = [
            { wch: 15 }, { wch: 50 }, { wch: 15 }, { wch: 15 }, 
            { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }
            ];
            
            const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            utils.book_append_sheet(workbook, worksheet, sheetName);
        });

        writeFile(workbook, `${pack.title.replace(/ /g, '_')}.xlsx`);
    }

    const personalizationPriceUSD = 29;
    const personalizationPriceINR = 2300;
    
    return (
        <div className="w-full">
            <div className="text-center bg-secondary/30 border-t border-b border-border/50 py-16 rounded-2xl">
                <div className="max-w-md mx-auto mb-10 text-center">
                    <h2 className="text-2xl font-bold font-headline mb-2">Special Launch Offer: Lock In Your Lifetime Price.</h2>
                    <p className="text-muted-foreground">Select your package. One-time payment, forever yours.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
                    
                    <Card className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <CardHeader className="p-6">
                            <CardTitle className="font-headline text-2xl">Professional Pack</CardTitle>
                            <p className="text-3xl font-bold text-primary">${pack.priceUSD} / ₹{pack.priceINR}</p>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                             <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Complete, expert-curated checklist pack.</span></p>
                             <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Lifetime access & free updates.</span></p>
                             <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Access to bonus templates (Audit, SOP, F&B).</span></p>
                             <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>24/7 customer support.</span></p>
                             <p className="flex items-start gap-2"><X className="w-5 h-5 mt-0.5 text-red-500 shrink-0" /> <span className="text-muted-foreground">No custom priority action plan.</span></p>
                        </CardContent>
                        <CardFooter className="p-6 mt-auto">
                            <Button size="lg" className="w-full font-bold text-lg" onClick={handleDownload}>
                                Get Professional
                            </Button>
                        </CardFooter>
                    </Card>

                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Card className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-accent relative cursor-pointer">
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 py-1 px-4 bg-accent text-accent-foreground font-bold z-10">Best Value</Badge>
                                <CardHeader className="p-6">
                                    <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                                        Personalized Pack
                                    </CardTitle>
                                        <div className="flex items-baseline gap-2">
                                        <p className="text-3xl font-bold text-primary">
                                            ${pack.priceUSD + personalizationPriceUSD} / ₹{pack.priceINR + personalizationPriceINR}
                                        </p>
                                            <p className="text-lg font-medium text-muted-foreground line-through">
                                            ${pack.priceUSD + personalizationPriceUSD + 30} / ₹{pack.priceINR + personalizationPriceINR + 2701}
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                                        <p className="flex items-start gap-2 font-semibold text-primary"><Check className="w-5 h-5 mt-0.5 text-primary shrink-0" /> <span>Everything in Professional Pack, plus:</span></p>
                                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Custom Priority Action Plan tailored for your property.</span></p>
                                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Extra templates & location-specific compliance checklists.</span></p>
                                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Priority support (faster response time).</span></p>
                                </CardContent>
                                <CardFooter className="p-6 mt-auto">
                                    <Button size="lg" className="w-full font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                                        Personalize Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-2xl">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="flex items-center gap-2 font-headline text-2xl">
                                    <Sparkles className="w-6 h-6 text-accent" />
                                    Personalize Your Checklist Pack
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Answer a few questions to help us tailor this pack to your exact needs. This will add a customized 'Priority Action Plan' to your download.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <div className="space-y-4 py-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="q1">What is your primary business focus?</Label>
                                        <Input id="q1" placeholder="e.g., 5-Star Luxury Hotel, Business Hotel..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="q2">Which department needs the most improvement?</Label>
                                        <Input id="q2" placeholder="e.g., Housekeeping, Front Office, F&B..." />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="q3">What is the single biggest challenge you are facing?</Label>
                                    <Input id="q3" placeholder="e.g., Inconsistent guest service, high costs..." />
                                </div>
                                    <div className="space-y-2">
                                    <Label htmlFor="q4">What is your primary goal for the next quarter?</Label>
                                    <Input id="q4" placeholder="e.g., Increase positive reviews, reduce costs..." />
                                </div>
                                    <div className="space-y-2">
                                    <Label htmlFor="q5">Anything else you'd like us to know?</Label>
                                    <Textarea id="q5" placeholder="e.g., Specific compliance needs like JCI, NABH, or any other unique challenges." />
                                </div>
                            </div>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => handleDownload()}>Skip &amp; Download Standard</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDownload()}>
                                    Generate &amp; Proceed to Purchase
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                </div>

                <div className="mt-12 bg-primary/5 p-6 rounded-2xl max-w-4xl mx-auto border border-primary/10">
                    <h3 className="text-center font-headline text-xl font-bold mb-4 flex items-center justify-center gap-2"><BadgeCheck className="w-6 h-6 text-primary" /> The MoreMeets Promise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <DollarSign className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">One-Time Payment</p>
                            <p className="text-xs text-muted-foreground">No recurring subscriptions. Ever. Buy it once, own it forever.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Repeat className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Lifetime Updates</p>
                            <p className="text-xs text-muted-foreground">Receive all future enhancements and additions to your pack, for free.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Download className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Instant Access</p>
                            <p className="text-xs text-muted-foreground">Download your fully editable Excel file immediately after purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

    