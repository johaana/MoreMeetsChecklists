
'use client';

import * as React from 'react';
import type { PremiumPack, Checklist as PackChecklist } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Repeat, DollarSign, Sparkles, ShieldCheck, Eye, Download, Globe, Landmark, FileText, BadgeInfo, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { writeFile, utils } from 'xlsx-js-style';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

function handleDemoDownload (checklist: PackChecklist) {
    if (!checklist) {
        alert("Could not find the checklist data. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };
    
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

    const fileName = checklist.title.replace(/ /g, '_') + '_DEMO.xlsx';
    writeFile(workbook, fileName);
};

function ScenarioPreviewDialog({ scenario }: { scenario: PremiumPack['previewScenario'] }) {
    if (!scenario) return null;

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview a Real-World Scenario
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-4xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-headline flex items-center gap-3">
                         <Sparkles className="w-6 h-6 text-accent" />
                        Scenario: {scenario.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {scenario.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <ScrollArea className="max-h-[60vh] pr-6">
                    <div className="text-sm text-muted-foreground mt-2 mb-4">The full checklist pack contains dozens of such integrated protocols. This is just a sample of how they work together.</div>
                    <Table className="mt-4 border rounded-lg">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Critical Task</TableHead>
                                <TableHead>Source Checklist</TableHead>
                                <TableHead>Priority</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {scenario.tasks.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{task.description}</TableCell>
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

function SampleChecklistPreviewDialog({ pack }: { pack: PremiumPack }) {
    const checklist = pack.checklists[0];
    if (!checklist) return null;

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="secondary" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Preview a Sample Checklist
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-6xl">
                 <Tabs defaultValue="sample" className="w-full">
                    <AlertDialogHeader>
                        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
                            <AlertDialogTitle className="font-headline flex items-start gap-4">
                                <div className="flex items-center gap-3">
                                {React.cloneElement(checklist.icon, { className: 'w-6 h-6 text-accent' })}
                                    <span>{pack.title} Preview</span>
                                </div>
                            </AlertDialogTitle>
                            <TabsList className="grid grid-cols-2 max-w-sm mt-2 sm:mt-0">
                                <TabsTrigger value="sample">Sample Checklist</TabsTrigger>
                                <TabsTrigger value="contents">Full Pack Contents</TabsTrigger>
                            </TabsList>
                        </div>
                    </AlertDialogHeader>
                    <TabsContent value="sample">
                        <AlertDialogDescription className="text-left pt-2">
                             This is a detailed preview of one of the <strong>{pack.checklists.length} checklists</strong> in this pack. The final downloaded Excel file will contain all checklists as separate, fully editable tabs.
                        </AlertDialogDescription>
                        <ScrollArea className="max-h-[50vh] pr-6 mt-4">
                            <TooltipProvider>
                                <div className="border rounded-lg overflow-hidden">
                                    <Table className="bg-background text-xs">
                                        <TableHeader className="bg-primary/5">
                                            <TableRow>
                                                <TableHead className="text-primary font-bold p-2" colSpan={5}>
                                                    <div className="flex justify-between items-center text-xs">
                                                    <span><strong>Dept:</strong> {checklist.department}</span>
                                                    <span><strong>Freq:</strong> {checklist.frequency}</span>
                                                    <span><strong>Role:</strong> {checklist.role}</span>
                                                    </div>
                                                </TableHead>
                                            </TableRow>
                                            <TableRow>
                                                <TableHead className="w-[100px] p-2 text-primary font-bold">Task ID</TableHead>
                                                <TableHead className="w-[40%] p-2 text-primary font-bold">Task Description</TableHead>
                                                <TableHead className="p-2 text-primary font-bold">Priority</TableHead>
                                                <TableHead className="p-2 text-primary font-bold">Risk Level</TableHead>
                                                <TableHead className="p-2 text-primary font-bold">Proof / Evidence</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {checklist.tasks.slice(0, 5).map((task) => (
                                                <TableRow key={task.id}>
                                                    <TableCell className="p-2 font-mono">{task.id}</TableCell>
                                                    <TableCell className="p-2 font-medium">
                                                        <div className="flex items-start gap-2">
                                                            <span>{task.description}</span>
                                                            {task.consequence && (
                                                                <Tooltip>
                                                                    <TooltipTrigger asChild><Info className="w-3.5 h-3.5 text-muted-foreground hover:text-accent cursor-pointer shrink-0"/></TooltipTrigger>
                                                                    <TooltipContent className="max-w-xs">
                                                                        <p className='font-bold text-accent'>Why it matters:</p>
                                                                        <p>{task.consequence}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="p-2">
                                                        <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'secondary' : 'outline'}>
                                                            {task.priority}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="p-2">
                                                        <Badge variant={task.riskLevel === 'High' ? 'destructive' : task.riskLevel === 'Medium' ? 'secondary' : 'outline'}>
                                                            {task.riskLevel}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="p-2 text-muted-foreground">{task.proof}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </TooltipProvider>
                        </ScrollArea>
                        <AlertDialogFooter className="sm:justify-between items-center pt-4">
                            <Button onClick={() => handleDemoDownload(checklist)}>
                                <Download className="mr-2 h-4 w-4" />
                                Download DEMO .xlsx
                            </Button>
                            <AlertDialogCancel>Close Preview</AlertDialogCancel>
                        </AlertDialogFooter>
                    </TabsContent>
                     <TabsContent value="contents">
                         <AlertDialogDescription className="text-left pt-2">
                            The final Excel file includes a hyperlinked cover page like this for easy navigation between checklists.
                        </AlertDialogDescription>
                         <ScrollArea className="max-h-[50vh] pr-6 mt-4">
                             <div className="border rounded-lg overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-primary/5">
                                        <TableRow>
                                            <TableHead className="w-[50%] text-primary">Checklist Title</TableHead>
                                            <TableHead className="text-primary">Department</TableHead>
                                            <TableHead className="text-primary">Frequency</TableHead>
                                            <TableHead className="text-primary">Role</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pack.checklists.map((c, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline text-sm">{c.title}</TableCell>
                                                <TableCell className="text-muted-foreground text-xs">{c.department}</TableCell>
                                                <TableCell className="text-muted-foreground text-xs">{c.frequency}</TableCell>
                                                <TableCell className="text-muted-foreground text-xs">{c.role}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </ScrollArea>
                        <AlertDialogFooter className="pt-4">
                             <AlertDialogCancel>Close Preview</AlertDialogCancel>
                         </AlertDialogFooter>
                     </TabsContent>
                </Tabs>
            </AlertDialogContent>
        </AlertDialog>
    );
}

const FreeDownloadDialog = ({ pack }: { pack: PremiumPack }) => {
    const { toast } = useToast();
    const [email, setEmail] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);

    const handleFreeDownload = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            toast({
                variant: "destructive",
                title: "Invalid Email",
                description: "Please enter a valid email address.",
            });
            return;
        }

        // In a real app, you'd send this email to a service.
        // For now, we'll just trigger the download.
        
        const workbook = utils.book_new();
        const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } } };
        pack.checklists.forEach(checklist => addChecklistSheet(workbook, checklist, headerStyle));
        const fileName = pack.title.replace(/ /g, '_') + '.xlsx';
        writeFile(workbook, fileName);
        
        toast({
            title: "Download Started!",
            description: `The complete "${pack.title}" pack is being downloaded.`,
        });

        setIsOpen(false);
    };

    const addChecklistSheet = (workbook: any, checklist: PackChecklist, headerStyle: any) => {
        const checklistHeaders = ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Proof / Evidence', 'Status', 'Assigned To', 'Notes'];
        const tasksForSheet = checklist.tasks.map(task => [task.id, task.description, task.priority, task.riskLevel, task.proof, 'Pending', '', '']);
        const checklistDataWithHeader = [checklistHeaders, ...tasksForSheet];
        const worksheet = utils.aoa_to_sheet(checklistDataWithHeader);
        worksheet['!cols'] = [{ wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }];
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
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button size="lg" className="w-full" variant="accent">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Get Your Free Pack</AlertDialogTitle>
                    <AlertDialogDescription>
                        Enter your email address to receive the download link for the complete "{pack.title}" pack.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleFreeDownload}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="col-span-3"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button type="submit">
                           <Download className="mr-2 h-4 w-4" />
                           Download for Free
                        </Button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
};


export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const professionalPrice = 7999;
    const professionalPaymentId = 'pl_RMnYKoxjfq5XCx';

    const personalizedPrice = 10999;
    const personalizedStrikethroughPrice = 18999;
    const personalizedPaymentId = "pl_RMncDLAlms69Pd";
    
    if (pack.priceINR <= 0) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                     <div className="max-w-md mx-auto">
                        <Card className="shadow-2xl border-2 border-primary/20">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-headline">Get Instant Access</CardTitle>
                                <CardDescription>This is a free community resource. Enter your email to download it instantly.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                               <p className="text-4xl font-extrabold mb-4">Free Download</p>
                               <FreeDownloadDialog pack={pack} />
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
    
    return (
        <section className="w-full py-12 md:py-16" id="pricing">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Special Launch Offer: Lock In Your Lifetime Price</h2>
                    <p className="text-foreground/80 text-base md:text-lg">One-time payment, forever yours. Select the pack that's right for you.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {/* Professional Pack */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Professional Pack</CardTitle>
                            <Badge variant="outline" className="w-fit font-bold flex items-center gap-1.5 border-green-600/50 bg-green-500/10 text-green-800 dark:text-green-300 mt-2">
                                <Landmark className="w-4 h-4" /> India Edition
                            </Badge>
                            <p className="text-4xl font-bold pt-4">₹{professionalPrice}</p>
                            <CardDescription>Aligned with domestic standards (BIS, NABH, etc.)</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Complete checklist pack with {pack.checklists.length} checklists.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Instant Excel download.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Lifetime updates.</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <div className="[&_form]:w-full [&_.razorpay-payment-button]:w-full">
                                <RazorpayButton paymentId={professionalPaymentId} params={{ pack_id: pack.id }}/>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* Personalized Pack */}
                    <Card className="flex flex-col border-2 border-accent relative">
                        <Badge variant="accent" className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 font-bold z-10 border-2 border-background">Best Value</Badge>
                        <CardHeader>
                            <CardTitle className="pt-2">Personalized Pack</CardTitle>
                            <Badge variant="outline" className="w-fit font-bold flex items-center gap-1.5 border-blue-600/50 bg-blue-500/10 text-blue-800 dark:text-blue-300 mt-2">
                                <Globe className="w-4 h-4" /> Global Edition
                            </Badge>
                                <div className="flex items-baseline gap-2 pt-4">
                                <p className="text-4xl font-bold">₹{personalizedPrice}</p>
                                <p className="text-xl font-medium text-muted-foreground line-through">₹{personalizedStrikethroughPrice}</p>
                            </div>
                                <CardDescription>Benchmarks against global standards (ISO, JCI, etc.)</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                                <p className="font-semibold mb-3 text-sm">Everything in Professional, plus:</p>
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Global Compliance Checklists</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Priority Action Plan</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>30-Min Onboarding Call</span></li>
                                </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <div className="[&_form]:w-full [&_.razorpay-payment-button]:w-full [&_.razorpay-payment-button]:bg-accent [&_.razorpay-payment-button]:text-accent-foreground [&_.razorpay-payment-button]:hover:bg-accent/90">
                                    <RazorpayButton paymentId={personalizedPaymentId} params={{ pack_id: pack.id, type: 'personalized' }}/>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Pack */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                                <div className="pt-4 mt-9"> {/* Spacer to align with other cards */}
                                <p className="text-4xl font-bold">Custom</p>
                            </div>
                            <CardDescription>A complete, done-for-you operational system.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                                <p className="font-semibold mb-3 text-sm">Everything in Personalized, plus:</p>
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Full SOP Manual Creation</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Dedicated Account Manager</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Team Training & Onboarding</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Bespoke Checklist Creation</span></li>
                                </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button asChild className="w-full" variant="secondary">
                                <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                    Book a Discovery Call
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {pack.previewScenario && <ScenarioPreviewDialog scenario={pack.previewScenario} />}
                    {pack.checklists && pack.checklists.length > 0 && <SampleChecklistPreviewDialog pack={pack} />}
                </div>


                <div className="mt-16 bg-primary/5 p-8 rounded-2xl max-w-5xl mx-auto border-2 border-primary/10">
                    <h3 className="text-center font-headline text-2xl font-bold mb-6 text-primary flex items-center justify-center gap-2">Buy Once, Own It Forever.</h3>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8 text-sm md:text-base">This is a one-time payment. No subscriptions. No hidden fees. You get lifetime access to your checklist pack and all future updates, guaranteed.</p>
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
    );
}
