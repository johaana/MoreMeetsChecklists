
'use client';

import * as React from 'react';
import type { PremiumPack, Checklist as PackChecklist } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Repeat, DollarSign, Sparkles, ShieldCheck, Eye, Download, Globe, Landmark, FileText, BadgeInfo, Info, Loader2, Briefcase, Bot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { writeFile, utils } from 'xlsx-js-style';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { premiumPacks } from '@/lib/premium-packs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-mobile';
import { addContact } from '../actions';
import { Input } from '@/components/ui/input';


function ScenarioPreviewDialog({ scenario }: { scenario: PremiumPack['previewScenario'] }) {
    if (!scenario) return null;
    const isMobile = useIsMobile();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                 <Button variant="accent" className="w-full">
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
                     {isMobile ? (
                        <div className="space-y-4">
                            {scenario.tasks.map((task, index) => (
                                <Card key={index} className="p-4">
                                    <p className="font-bold">{task.description}</p>
                                    <p className="text-sm text-muted-foreground mt-1"><strong>Source:</strong> {task.sourceChecklist}</p>
                                    <div className="mt-2">
                                        <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
                                            {task.priority} Priority
                                        </Badge>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
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
                    )}
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
    const remainingTasks = checklist.tasks.length > 5 ? checklist.tasks.length - 5 : 0;
    const isMobile = useIsMobile();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                 <Button variant="ghost" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Preview a Sample Checklist
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-6xl">
                 <AlertDialogHeader>
                    <AlertDialogTitle className="font-headline flex items-start gap-4 text-2xl">
                       <div className="p-2 bg-primary/10 rounded-md">
                         {React.cloneElement(pack.icon, { className: 'w-6 h-6 text-primary' })}
                       </div>
                        <span>Sample Preview: {pack.title}</span>
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription className="text-left pt-2 text-base">
                    This is a detailed preview of one of the <strong>{pack.checklists.length} checklists</strong> in this pack. The final downloaded Excel file is a fully editable tool and includes additional columns like <strong>'Status', 'Assigned To', and 'Notes'</strong> for your team to use.
                </AlertDialogDescription>
                <ScrollArea className="max-h-[50vh] pr-6 mt-4">
                    <TooltipProvider>
                        <div className="border rounded-lg overflow-hidden bg-background">
                            <div className="p-4 bg-secondary/50">
                                    <h3 className="text-xl font-bold font-headline">{checklist.title}</h3>
                            </div>
                            {isMobile ? (
                                <div className="p-4 space-y-4">
                                {checklist.tasks.slice(0, 5).map((task) => (
                                    <Card key={task.id} className="p-4">
                                        <div className="flex justify-between items-start">
                                            <p className="font-bold flex-1 pr-2">{task.description}</p>
                                            {task.consequence && (
                                                <Tooltip>
                                                    <TooltipTrigger asChild><Info className="w-4 h-4 text-muted-foreground hover:text-accent cursor-pointer shrink-0"/></TooltipTrigger>
                                                    <TooltipContent className="max-w-xs">
                                                        <p className='font-bold text-accent'>Why it matters:</p>
                                                        <p>{task.consequence}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2"><strong>Proof:</strong> {task.proof}</p>
                                        <div className="flex gap-2 mt-2">
                                            <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'secondary' : 'outline'}>
                                                {task.priority} Priority
                                            </Badge>
                                            <Badge variant={task.riskLevel === 'High' ? 'destructive' : task.riskLevel === 'Medium' ? 'secondary' : 'outline'}>
                                                {task.riskLevel} Risk
                                            </Badge>
                                            <Badge variant="outline">Pending</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2 font-mono">ID: {task.id}</p>
                                    </Card>
                                ))}
                                </div>
                            ) : (
                                <Table className="text-sm border-t">
                                     <TableHeader>
                                    <TableRow className="bg-primary/5 border-b-0">
                                        <TableHead className="p-2 text-primary/80 font-bold" colSpan={6}>
                                            <div className="flex justify-between items-center text-xs">
                                                <span><strong>Dept:</strong> {checklist.department}</span>
                                                <span><strong>Freq:</strong> {checklist.frequency}</span>
                                                <span><strong>Role:</strong> {checklist.role}</span>
                                            </div>
                                        </TableHead>
                                    </TableRow>
                                    <TableRow className="bg-primary/10">
                                        <TableHead className="w-[100px] p-2 text-primary font-bold">Task ID</TableHead>
                                        <TableHead className="w-[40%] p-2 text-primary font-bold">Task Description</TableHead>
                                        <TableHead className="p-2 text-primary font-bold">Priority</TableHead>
                                        <TableHead className="p-2 text-primary font-bold">Risk Level</TableHead>
                                        <TableHead className="p-2 text-primary font-bold">Proof / Evidence</TableHead>
                                        <TableHead className="p-2 text-primary font-bold">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {checklist.tasks.slice(0, 5).map((task) => (
                                        <TableRow key={task.id} className="border-t">
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
                                            <TableCell className="p-2">
                                                <Badge variant="outline">Pending</Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            )}
                        </div>
                    </TooltipProvider>
                </ScrollArea>
                {remainingTasks > 0 && (
                    <div className="text-center text-sm text-muted-foreground p-3 bg-secondary/50 rounded-md mt-4">
                        This is a sample of the full checklist, which contains <strong>{remainingTasks} more</strong> detailed tasks.
                    </div>
                )}
                <AlertDialogFooter className="pt-4">
                        <AlertDialogCancel>Close Preview</AlertDialogCancel>
                    </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

const handleDownload = (pack: PremiumPack, isPersonalized?: boolean) => {
    if (!pack) {
        alert("Could not find the pack data. Please contact support.");
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
    const complianceHeaderStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "C0504D" } }
    };

    const checklists = isPersonalized
        ? premiumPacks.flatMap(p => p.checklists)
        : pack.checklists;

    // --- Cover Page ---
    const coverPageName = "Cover Page";
    const footerText = "Provided by MoreMeets | www.moremeets.com";

    const coverPageHeader = [pack.title];
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

    // --- Add Compliance Matrix for Personalized/Global Compliance Pack ---
    if (isPersonalized && pack.globalStandards) {
        const complianceSheetName = "Compliance Matrix";
        const complianceData: any[][] = [
            ["Global Standards Compliance Matrix"],
            [],
            [pack.globalStandards.title],
            [],
            ["Task ID", "Task Description", ...pack.globalStandards.standards.map(s => s.name)],
        ];

        const mockMapping: { [key: string]: string[] } = {
            'LOTO-01': ['ISO 45001', 'OSHA'],
            'PTW-01': ['ISO 45001', 'OSHA'],
            'HACCP-01': ['ISO 22000', 'HACCP'],
            'FIRE-01': ['NFPA 101'],
        };
        
        checklists.forEach(checklist => {
            checklist.tasks.forEach(task => {
                const row = [task.id, task.description];
                pack.globalStandards!.standards.forEach(standard => {
                    if (mockMapping[task.id]?.includes(standard.name)) {
                        row.push('✔');
                    } else {
                        row.push('');
                    }
                });
                complianceData.push(row);
            });
        });

        const complianceWorksheet = utils.aoa_to_sheet(complianceData);
        complianceWorksheet['!cols'] = [{ wch: 20 }, { wch: 60 }, ...pack.globalStandards.standards.map(() => ({ wch: 20 }))];
        complianceWorksheet['A1'].s = { font: { sz: 18, bold: true } };
        complianceWorksheet['A3'].s = { font: { sz: 14, bold: true } };
        complianceData[4].forEach((_, C) => {
            const address = utils.encode_cell({ r: 4, c: C });
            complianceWorksheet[address].s = complianceHeaderStyle;
        });

        utils.book_append_sheet(workbook, complianceWorksheet, complianceSheetName);
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

    const fileName = pack.title.replace(/ /g, '_') + '.xlsx';
    writeFile(workbook, fileName);
}

const RazorpayButtonWrapper = ({ paymentId, packId, type }: { paymentId: string, packId?: string, type?: string }) => {
    const formContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!formContainerRef.current) return;

        const form = document.createElement('form');
        let actionUrl = `/thank-you?razorpay_payment_id=`; 

        if (packId) {
            actionUrl += `&pack_id=${packId}`;
        }
        if (type) {
            actionUrl += `&type=${type}`;
        }
        form.action = actionUrl;

        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.async = true;
        script.dataset.payment_button_id = paymentId;
        
        form.appendChild(script);
        
        formContainerRef.current.innerHTML = '';
        formContainerRef.current.appendChild(form);

    }, [paymentId, packId, type]);

    return <div ref={formContainerRef} className="w-full flex justify-center" />;
};


function FreeDownloadForm({ pack }: { pack: PremiumPack }) {
    const { toast } = useToast();
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const result = await addContact({ email, packId: pack.id });

        if (result.success) {
            handleDownload(pack);
            setSubmitted(true);
            toast({
                title: "Download Started!",
                description: "Your checklist pack is being downloaded.",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Something went wrong",
                description: result.message || "Could not process your request.",
            });
        }

        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
                <p className="font-semibold">Thank you! Your download has started.</p>
                <p className="text-sm">Please check your browser's download folder.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <Input
                type="email"
                placeholder="Enter your email to download"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
            />
            <Button size="lg" type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download Now
            </Button>
        </form>
    )
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    
    const globalCompliancePack = {
      ...pack,
      id: 'personalized_pack',
      title: 'Global Compliance Pack',
      priceINR: 10999,
      paymentId: 'pl_RMncDLAlms69Pd',
    };

    if (pack.priceINR === 0) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                        <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Get Your Free Toolkit</h2>
                        <p className="text-foreground/80 text-base md:text-lg">As part of our commitment to social impact, this entire pack is available as a free, instant download.</p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex flex-col max-w-md">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Download className="w-6 h-6 text-primary" />
                                    <CardTitle>Instant Download</CardTitle>
                                </div>
                                <CardDescription>Get the complete, fully-editable Excel file for the {pack.title}.</CardDescription>
                                <p className="text-4xl font-bold pt-4">Free</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {pack.checklists.length} checklists.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Fully editable Excel format.</span></li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto flex flex-col justify-center w-full gap-2">
                                <FreeDownloadForm pack={pack} />
                                <p className="text-xs text-muted-foreground">By downloading, you agree to receive occasional updates from MoreMeets.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    // Low-cost pack view
    if (pack.priceINR < 5000) {
        const originalPrice = 7999;
        const discount = Math.round(((originalPrice - pack.priceINR) / originalPrice) * 100);

        return (
            <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                         <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Get Your Toolkit</h2>
                         <p className="text-foreground/80 text-base md:text-lg">One-time payment, forever yours. Instant download.</p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex flex-col max-w-md border-2 border-accent shadow-lg">
                            <CardHeader>
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Landmark className="w-6 h-6 text-accent" />
                                        <CardTitle>Professional Pack</CardTitle>
                                    </div>
                                     {pack.badgeText && (
                                        <Badge variant="accent">{pack.badgeText}</Badge>
                                    )}
                                </div>
                                <CardDescription>The complete, expert-built checklist pack.</CardDescription>
                                <div className="flex items-baseline gap-4 pt-4">
                                    <p className="text-4xl font-bold">₹{pack.priceINR}</p>
                                    <p className="text-xl font-medium text-muted-foreground line-through">₹{originalPrice}</p>
                                     <p className="text-lg font-bold text-accent">{discount}% OFF</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {pack.checklists.length} checklists.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Instant download in fully editable Excel format.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Lifetime access to all future updates for this pack.</span></li>
                                </ul>
                            </CardContent>
                             <CardFooter className="mt-auto flex justify-center w-full">
                                <RazorpayButtonWrapper paymentId={pack.paymentId} packId={pack.id} />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {pack.previewScenario && <ScenarioPreviewDialog scenario={pack.previewScenario} />}
                        {pack.checklists && pack.checklists.length > 0 && <SampleChecklistPreviewDialog pack={pack} />}
                    </div>
                </div>
            </section>
        );
    }


    // Standard premium pack view
    return (
        <section className="w-full py-12 md:py-16" id="pricing">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Special Launch Offer: Lock In Your Lifetime Price</h2>
                    <p className="text-foreground/80 text-base md:text-lg">One-time payment, forever yours. Select the pack that's right for you.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-6 max-w-6xl mx-auto">
                     {/* Professional Pack */}
                     <Card className="flex flex-col">
                        <CardHeader>
                             <div className="flex items-center gap-2">
                                <Landmark className="w-6 h-6 text-primary" />
                                <CardTitle>Professional Pack</CardTitle>
                            </div>
                            <CardDescription>The complete, expert-built checklist pack for your industry.</CardDescription>
                            <p className="text-4xl font-bold pt-4">₹{pack.priceINR}</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {pack.checklists.length} checklists.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Instant download in fully editable Excel format.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Lifetime access to all future updates for this pack.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span className="font-semibold text-foreground">Built on Best Practices:</span><span className="ml-1">Aligned with foundational Indian standards.</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter className="mt-auto flex justify-center">
                           <RazorpayButtonWrapper paymentId={pack.paymentId} packId={pack.id}/>
                        </CardFooter>
                    </Card>

                    {/* Global Compliance Pack */}
                    <Card className="flex flex-col border-2 border-accent shadow-lg">
                       <CardHeader>
                         <div className="flex items-center gap-2">
                            <Globe className="w-6 h-6 text-accent" />
                            <CardTitle>Global Compliance Pack</CardTitle>
                        </div>
                        <CardDescription>The Professional pack, enhanced with international standards for global operations.</CardDescription>
                        <p className="text-4xl font-bold pt-4">₹{globalCompliancePack.priceINR}</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                         <p className="font-semibold mb-3 text-sm">Everything in Professional, plus:</p>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span className="font-semibold text-foreground">Aligned with global frameworks</span><span className="ml-1">(ISO, JCI, HACCP, etc.)</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span className="font-semibold text-foreground">Includes a Compliance Matrix</span><span className="ml-1">Excel sheet mapping tasks to standards.</span></li>
                            <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span className="font-semibold text-foreground">Priority customer support</span></li>
                        </ul>
                    </CardContent>
                        <CardFooter className="mt-auto flex justify-center">
                           <RazorpayButtonWrapper paymentId={globalCompliancePack.paymentId} packId={pack.id} type="personalized" />
                        </CardFooter>
                    </Card>

                    {/* Enterprise Edition */}
                    <Card className="flex flex-col">
                        <CardHeader>
                             <div className="flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-primary" />
                                <CardTitle>Enterprise</CardTitle>
                            </div>
                            <CardDescription>A complete, done-for-you operational system.</CardDescription>
                            <p className="text-4xl font-bold pt-4">Custom</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                                <p className="font-semibold mb-3 text-sm">Everything in Global Compliance, plus:</p>
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Full SOP Manual Creation & Customization</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Dedicated Account Manager & Team Training</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Bespoke Checklist Creation for Your Unique Needs</span></li>
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

    