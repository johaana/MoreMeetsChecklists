
'use client';

import * as React from 'react';
import type { PremiumPack, PreviewScenario } from '@/lib/premium-packs';
import Link from 'next/link';
import { writeFile, utils } from 'xlsx-js-style';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Repeat, DollarSign, Sparkles, ShieldCheck, Star, Eye, Package, Download, Building, Users, FileText } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

function ScenarioPreviewDialog({ scenario }: { scenario: PreviewScenario }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4">
                    <Eye className="w-4 h-4 mr-2" />
                    See a Sample
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-4xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-headline">Scenario: {scenario.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {scenario.description} The full download is a fully editable Excel file.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <ScrollArea className="max-h-[60vh] pr-6">
                    <Table className="mt-4 border rounded-lg">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Task Description</TableHead>
                                <TableHead>Source Checklist</TableHead>
                                <TableHead>Priority</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {scenario.tasks.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell className="text-muted-foreground">{task.sourceChecklist}</TableCell>
                                    <TableCell>
                                        <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
                                            {task.priority}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close Preview</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);
    
    const professionalPackLink = "https://rzp.io/rzp/9WsK9ML";
    const personalizedPackLink = "https://rzp.io/rzp/JFmUeMms";

    const handleDownload = () => {
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

        writeFile(workbook, `${pack.title.replace(/ /g, '_')}.xlsx`);
        setShowDownloadConfirm(true);
    }

    const personalizationPriceINR = 3000;
    const personalizedPackPrice = (pack.priceINR || 7999) + personalizationPriceINR;
    const enterprisePriceINR = 49999;

    const pricingCards = [
            <Card key="professional" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/80 relative">
                <Badge variant="default" className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 bg-primary text-primary-foreground font-bold z-10 border-2 border-background">Most Popular</Badge>
                <CardHeader className="p-6 pt-8">
                    <CardTitle className="font-headline text-2xl">Professional Pack</CardTitle>
                    <p className="text-4xl font-bold text-foreground">₹{pack.priceINR}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                     <p className="flex items-start gap-2"><Package className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Complete, expert-curated checklist pack with {pack.checklists.length} checklists.</span></p>
                     <p className="flex items-start gap-2"><Download className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Instant download, immediate impact.</span></p>
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Fully editable & brandable Excel files.</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                     <Button size="lg" className="w-full font-bold text-lg" asChild>
                        <Link href={professionalPackLink} target="_blank">
                           Get Professional Pack
                        </Link>
                    </Button>
                </CardFooter>
            </Card>,

            <Card key="personalized" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-accent relative">
                <Badge className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 bg-accent text-accent-foreground font-bold z-10 border-2 border-background">Best Value</Badge>
                <CardHeader className="p-6">
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl pt-4">
                        Personalized Pack
                    </CardTitle>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-foreground">
                            ₹{personalizedPackPrice}
                        </p>
                        <p className="text-xl font-medium text-muted-foreground line-through">
                            ₹{personalizedPackPrice + 2000}
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                        <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Professional, plus:</span></p>
                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Custom Priority Action Plan tailored for you.</span></p>
                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Your branding automatically added.</span></p>
                        <p className="flex items-start gap-2"><Star className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Priority support (faster response time).</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                     <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button size="lg" className="w-full font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                                Personalize Now
                            </Button>
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
                                        <Input id="q2" placeholder="e.g., Housekeeping, Front Office, F&amp;B..." />
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
                                <AlertDialogCancel asChild>
                                    <Link href={personalizedPackLink} target="_blank">
                                        Skip &amp; Proceed to Purchase
                                    </Link>
                                </AlertDialogCancel>
                                <AlertDialogAction asChild>
                                     <Link href={personalizedPackLink} target="_blank">
                                        Generate &amp; Proceed to Purchase
                                    </Link>
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            </Card>,

             <Card key="enterprise" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary relative">
                 <Badge variant="destructive" className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 bg-accent text-accent-foreground font-bold z-10 border-2 border-background">For Teams</Badge>
                <CardHeader className="p-6 pt-8">
                     <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <Building className="w-6 h-6 text-primary" />
                        Enterprise
                    </CardTitle>
                    <p className="text-4xl font-bold text-foreground">₹{enterprisePriceINR}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                    <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Personalized, plus:</span></p>
                    <p className="flex items-start gap-2"><FileText className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Full SOP manual creation from checklists.</span></p>
                    <p className="flex items-start gap-2"><Users className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Dedicated account manager for support.</span></p>
                    <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Training for your team.</span></p>
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Bespoke checklist creation for your unique needs.</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                    <Button size="lg" className="w-full font-bold text-lg" variant="outline" asChild>
                        <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">Book a Discovery Call</Link>
                    </Button>
                </CardFooter>
            </Card>
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-secondary/30" id="pricing">
             <AlertDialog open={showDownloadConfirm} onOpenChange={setShowDownloadConfirm}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2"><Download className="w-5 h-5"/> Download Started</AlertDialogTitle>
                        <AlertDialogDescription>
                            Your checklist pack has started downloading. Please check your downloads folder.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setShowDownloadConfirm(false)}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Special Launch Offer: Lock In Your Lifetime Price</h2>
                    <p className="text-foreground/80 md:text-lg">One-time payment, forever yours. Select the pack that's right for you.</p>
                </div>
                
                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingCards.map(card => card)}
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm mx-auto"
                    >
                        <CarouselContent>
                            {React.Children.map(pricingCards, (child, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <div className="p-1">{child}</div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                         <CarouselPrevious className="left-[-0.5rem]" />
                        <CarouselNext className="right-[-0.5rem]" />
                    </Carousel>
                </div>


                {pack.previewScenario && <ScenarioPreviewDialog scenario={pack.previewScenario} />}

                <div className="mt-16 bg-primary/5 p-8 rounded-2xl max-w-5xl mx-auto border-2 border-primary/10">
                    <h3 className="text-center font-headline text-2xl font-bold mb-6 text-primary flex items-center justify-center gap-2">Buy Once, Own It Forever.</h3>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">This is a one-time payment. No subscriptions. No hidden fees. You get lifetime access to your checklist pack and all future updates, guaranteed.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <DollarSign className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">One-Time Payment</p>
                            <p className="text-xs text-muted-foreground">No recurring subscriptions. Ever. Your single purchase is valid for life.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Repeat className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Lifetime Updates</p>
                            <p className="text-xs text-muted-foreground">Receive all future enhancements and additions to your pack, for free.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Secure Checkout</p>
                            <p className="text-xs text-muted-foreground">Your payment is processed securely. Download your files instantly after purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

    