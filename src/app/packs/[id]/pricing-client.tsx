

'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Repeat, DollarSign, Sparkles, ShieldCheck, Eye, Building, AlertCircle, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { writeFile, utils } from 'xlsx-js-style';


function handleDownload (pack: PremiumPack) {
    if (!pack) {
        alert("Could not find the pack data. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };

    pack.checklists.forEach(checklist => {
        const checklistHeaders = [
            'Task ID', 'Task Description', 'Priority', 'Risk Level', 
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

    const fileName = pack.title.replace(/ /g, '_') + '.xlsx';
    writeFile(workbook, fileName);
};


function ScenarioPreviewDialog({ scenario }: { scenario: PremiumPack['previewScenario'] }) {
    if (!scenario) return null;

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
    const professionalPrice = pack.priceINR;
    const professionalPaymentId = pack.paymentId; 

    // Standardized, fixed pricing for the premium personalized tier
    const personalizedPrice = 10999;
    const personalizedStrikethroughPrice = 18999;
    const personalizedPaymentId = 'pl_RMncDLAlms69Pd'; // This ID corresponds to the personalized price point in Razorpay

    const [showStickyBar, setShowStickyBar] = React.useState(false);
    const pricingSectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowStickyBar(!entry.isIntersecting);
            },
            { rootMargin: "0px 0px -100% 0px" } 
        );

        if (pricingSectionRef.current) {
            observer.observe(pricingSectionRef.current);
        }

        return () => {
            if (pricingSectionRef.current) {
                observer.unobserve(pricingSectionRef.current);
            }
        };
    }, []);


    if (pack.priceINR <= 0) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-4 md:px-6">
                     <div className="max-w-md mx-auto">
                        <Card className="shadow-2xl border-2 border-primary/20">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-headline">Get Instant Access</CardTitle>
                                <CardDescription>This is a free community resource. Download it instantly.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                               <p className="text-4xl font-extrabold mb-4">Free Download</p>
                               <Button size="lg" className="w-full" onClick={() => handleDownload(pack)}>
                                 <Download className="mr-2 h-5 w-5" />
                                 Download Now
                               </Button>
                            </CardContent>
                             <CardFooter className="flex-col gap-2 pt-2 items-center">
                                <p className="text-xs text-muted-foreground mt-2">Thank you for supporting animal welfare!</p>
                             </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        );
    }

    const pricingCards = [
        <Card key="professional" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/80 relative">
            <CardHeader className="p-6 pt-8">
                <CardTitle className="font-headline text-2xl">Professional Pack</CardTitle>
                <p className="text-4xl font-bold text-foreground">₹{professionalPrice}</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Complete, expert-curated checklist pack with {pack.checklists.length} checklists.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Instant download, immediate impact.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Fully editable & brandable Excel files.</span></p>
            </CardContent>
            <CardFooter className="p-6 mt-auto flex flex-col items-center">
                 <div className="[&_form]:w-full [&_.razorpay-payment-button]:h-12 [&_.razorpay-payment-button]:text-lg [&_.razorpay-payment-button]:font-bold [&_.razorpay-payment-button]:w-full [&_.razorpay-payment-button]:bg-primary [&_.razorpay-payment-button]:text-primary-foreground [&_.razorpay-payment-button]:hover:bg-primary/90">
                    <RazorpayButton paymentId={professionalPaymentId} params={{ pack_id: pack.id }}/>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Secure payment via Razorpay</p>
            </CardFooter>
        </Card>,

        <Card key="personalized" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-accent relative">
            <Badge variant="accent" className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 font-bold z-10 border-2 border-background">Best Value</Badge>
            <CardHeader className="p-6">
                <CardTitle className="flex items-center gap-2 font-headline text-2xl pt-4">
                    Personalized Pack
                </CardTitle>
                <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-foreground">
                        ₹{personalizedPrice}
                    </p>
                    <p className="text-xl font-medium text-muted-foreground line-through">
                        ₹{personalizedStrikethroughPrice}
                    </p>
                </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Professional, plus:</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>**Custom Branding:** Your logo added to the checklists.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>**Priority Action Plan:** A document highlighting the top 10 most critical checklists for you to implement first.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>**30-Min Onboarding Call:** A walkthrough of the pack to help you get started.</span></p>
            </CardContent>
            <CardFooter className="p-6 mt-auto flex flex-col items-center">
                 <div className="[&_form]:w-full [&_.razorpay-payment-button]:h-12 [&_.razorpay-payment-button]:text-lg [&_.razorpay-payment-button]:font-bold [&_.razorpay-payment-button]:w-full [&_.razorpay-payment-button]:bg-accent [&_.razorpay-payment-button]:text-accent-foreground [&_.razorpay-payment-button]:hover:bg-accent/90">
                    <RazorpayButton paymentId={personalizedPaymentId} params={{ pack_id: pack.id, type: 'personalized' }}/>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Secure payment via Razorpay</p>
            </CardFooter>
        </Card>,

        <Card key="enterprise" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/10 relative">
            <CardHeader className="p-6 pt-8">
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Building className="w-6 h-6 text-primary" />
                    Enterprise
                </CardTitle>
                <p className="text-4xl font-bold text-foreground">Custom</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Personalized, plus:</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Full SOP manual creation from checklists.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Dedicated account manager for support.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Training for your team.</span></p>
                <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Bespoke checklist creation for your unique needs.</span></p>
            </CardContent>
            <CardFooter className="p-6 mt-auto">
                <Button asChild className="w-full h-12 text-lg font-bold">
                    <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                        Book a Discovery Call
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    ];

    return (
        <>
        <section ref={pricingSectionRef} className="w-full py-12 md:py-16" id="pricing">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Special Launch Offer: Lock In Your Lifetime Price</h2>
                    <p className="text-foreground/80 md:text-lg">One-time payment, forever yours. Select the pack that's right for you.</p>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingCards}
                </div>

                {/* Mobile View - Now a vertical stack */}
                <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto lg:hidden">
                   {pricingCards.map((card, index) => (
                        <div key={index}>{card}</div>
                    ))}
                </div>


                {pack.previewScenario && <ScenarioPreviewDialog scenario={pack.previewScenario} />}


                <div className="mt-16 bg-primary/5 p-8 rounded-2xl max-w-5xl mx-auto border-2 border-primary/10">
                    <h3 className="text-center font-headline text-2xl font-bold mb-6 text-primary flex items-center justify-center gap-2">Buy Once, Own It Forever.</h3>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">This is a one-time payment. No subscriptions. No hidden fees. You get lifetime access to your checklist pack and all future updates, guaranteed.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold">One-Time Payment</h4>
                            <p className="text-xs text-muted-foreground">No recurring subscriptions. Ever. Your single purchase is valid for life.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Repeat className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold">Lifetime Updates</h4>
                            <p className="text-xs text-muted-foreground">Receive all future enhancements and additions to your pack, for free.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold">Secure Checkout</h4>
                            <p className="text-xs text-muted-foreground">Your payment is processed securely. Download your files instantly after purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='flex items-center justify-between gap-4'>
                 <div>
                    <p className='font-bold text-sm truncate'>{pack.title}</p>
                    <p className='text-lg font-extrabold'>₹{professionalPrice}</p>
                </div>
                <div className="[&_form]:w-full [&_.razorpay-payment-button]:h-12 [&_.razorpay-payment-button]:text-lg [&_.razorpay-payment-button]:font-bold [&_.razorpay-payment-button]:w-full [&_.razorpay-payment-button]:bg-primary [&_.razorpay-payment-button]:text-primary-foreground [&_.razorpay-payment-button]:hover:bg-primary/90">
                    <RazorpayButton paymentId={professionalPaymentId} params={{ pack_id: pack.id }}/>
                </div>
            </div>
        </div>
        </>
    );
}
