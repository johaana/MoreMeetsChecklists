

'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Download, Sparkles, ShieldCheck, Eye, FileText, Loader2, Briefcase, Landmark, Book, Globe, Award, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { addContact } from '../actions';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { Info } from 'lucide-react';


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

const RazorpayButtonWrapper = ({ paymentId, packId }: { paymentId: string, packId: string }) => {
    const formContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!paymentId || !formContainerRef.current) return;

        const form = document.createElement('form');
        form.action = `/thank-you?pack_id=${packId}`;
        
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.async = true;
        script.dataset.payment_button_id = paymentId;
        
        form.appendChild(script);
        
        // To prevent multiple buttons from being added on re-renders
        formContainerRef.current.innerHTML = '';
        formContainerRef.current.appendChild(form);

    }, [paymentId, packId]);

    if (!paymentId) {
        return (
            <div className="text-center text-destructive p-4 bg-destructive/10 rounded-md">
                <p className="font-semibold">Payment Button Error</p>
                <p className="text-sm">The payment button ID is missing. Please contact support.</p>
            </div>
        );
    }

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
            setSubmitted(true);
            toast({
                title: "Check Your Inbox!",
                description: "Your free checklist pack has been sent to your email.",
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
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900/50 dark:text-green-200">
                <p className="font-semibold">Thank you! Your pack is on its way.</p>
                <p className="text-sm">Please check your email inbox (and spam folder).</p>
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
                Get Your Free Pack
            </Button>
        </form>
    )
}

const ComplianceIcon = ({ standard }: { standard: string }) => {
    switch(standard.toUpperCase()) {
        case 'NABH': return <Star className="w-4 h-4 text-green-600" />;
        case 'JCI': return <Globe className="w-4 h-4 text-blue-600" />;
        case 'WHO GUIDELINES': return <Check className="w-4 h-4 text-cyan-600" />;
        case 'ISO 15189': return <Book className="w-4 h-4 text-purple-600" />;
        default: return <Award className="w-4 h-4 text-gray-500" />;
    }
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {

    const totalChecklists = pack.checklists.length;
    const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);
    
    if (pack.priceINR === 0) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                        <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Get Your Free Toolkit</h2>
                        <p className="text-foreground/80 text-base md:text-lg">As part of our commitment to social impact, this entire pack is available as a free, instant download.</p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex flex-col max-w-md w-full">
                            <CardHeader className="text-center">
                                <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                                <CardTitle className="text-2xl font-headline">Instant Download</CardTitle>
                                <CardDescription>Get the complete, fully-editable Excel file for the {pack.title}.</CardDescription>
                                <p className="text-5xl font-extrabold pt-4">Free</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {totalChecklists} checklists.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Fully editable Excel format.</span></li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto flex flex-col justify-center w-full gap-2 p-6">
                                <FreeDownloadForm pack={pack} />
                                <p className="text-xs text-muted-foreground text-center">By downloading, you agree to receive occasional updates from MoreMeets.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-12 md:py-16" id="pricing">
            <div className="container px-2 md:px-6">
                <div className="flex justify-center">
                    <Card className="flex flex-col max-w-2xl w-full border-2 border-accent shadow-2xl overflow-hidden rounded-2xl">
                        <CardHeader className="p-6 bg-secondary/30 text-center">
                             <div className="flex justify-center items-center gap-4">
                                <Landmark className="w-10 h-10 text-accent" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary text-left">
                                        Global Compliance Pack
                                    </h3>
                                    {pack.badgeText && (
                                        <Badge variant="accent" className="mt-1">{pack.badgeText}</Badge>
                                    )}
                                </div>
                            </div>
                             <p className="text-muted-foreground pt-2 text-sm md:text-base">{pack.description}</p>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col gap-6">
                            <div className="flex items-baseline justify-center gap-2">
                                <p className="text-5xl font-extrabold">₹{pack.priceINR}</p>
                                <p className="text-sm text-muted-foreground">/ One-time payment</p>
                            </div>
                           
                            <div className='space-y-4'>
                                <h4 className="font-semibold text-center text-primary/90">WHAT'S INCLUDED:</h4>
                                <ul className="space-y-3 text-sm text-foreground/90">
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span><strong>{totalChecklists} Expert-Built Checklists</strong> ({totalTasks}+ total tasks)</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span><strong>Audit-Ready & Globally Compliant</strong> framework.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span><strong>Instant Download</strong> in fully editable Excel format.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span><strong>Lifetime Access</strong> to all future updates for this pack.</span></li>
                                </ul>
                            </div>
                             {pack.globalStandards && (
                                <div className="text-center">
                                    <h4 className="font-semibold text-center text-sm mb-3 text-primary/90">ALIGNED WITH:</h4>
                                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-2">
                                        {pack.globalStandards.standards.map(standard => (
                                            <div key={standard.name} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                                <ComplianceIcon standard={standard.name} />
                                                <span>{standard.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                             <div className="text-center bg-secondary/50 p-4 rounded-lg border border-dashed border-primary/20">
                                <p className="font-bold text-primary">Worth ₹25,000+ in SOP creation time.</p>
                                <blockquote className="text-sm text-muted-foreground italic mt-2">“Every MoreMeets pack is globally compliant. Because operational excellence should be accessible, not expensive.”</blockquote>
                            </div>

                        </CardContent>
                         <CardFooter className="bg-secondary/30 mt-auto p-6 flex flex-col gap-3">
                           <RazorpayButtonWrapper paymentId={pack.paymentId} packId={pack.id}/>
                           <p className="text-xs text-muted-foreground">Secure payment via Razorpay</p>
                           <Button asChild variant="link" size="sm" className="w-full text-xs mt-2">
                                <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                    Need custom branding or team licensing? Book a Call
                                </Link>
                            </Button>
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
