
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Check, Download, Loader2, Banknote, CheckCircle, Info } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';
import { ComplianceIcon } from '../components/icons';


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
                description: `Your free checklist pack for "${pack.title}" has been sent.`,
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
            <Button size="lg" type="submit" className="w-full" disabled={loading} variant="accent">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Get Your Free Pack
            </Button>
        </form>
    )
}

const ValueProposition = ({ ourPrice, competitorPrice, valueStatement }: { ourPrice: string, competitorPrice: string, valueStatement: string }) => (
    <div className="rounded-lg bg-secondary/30 p-4 text-center border-2 border-dashed border-primary/20">
        <h4 className="text-sm font-semibold mb-2">THE MOREMEETS ADVANTAGE</h4>
        <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col items-center p-2 rounded-md bg-background/50">
                <p className="text-xs text-muted-foreground">Typical Enterprise Solution</p>
                <p className="text-lg font-bold text-destructive line-through">{competitorPrice}</p>
                 <p className="text-xs text-muted-foreground">Long setup · Contracts · Consultants</p>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md bg-green-100 dark:bg-green-900/50">
                 <p className="text-xs text-green-800 dark:text-green-200">MoreMeets</p>
                <p className="text-lg font-bold text-green-700 dark:text-green-300">{ourPrice}</p>
                 <p className="text-xs text-muted-foreground">Ready today · Practical · Proven</p>
            </div>
        </div>
         <p className="text-xs text-muted-foreground mt-2">{valueStatement}</p>
    </div>
);


export default function PricingClient({ pack }: { pack: PremiumPack }) {
    
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    
    const [currency, setCurrency] = React.useState(hasUSD ? 'USD' : 'INR');
    
    const totalChecklists = pack.checklists?.length || 0;
    const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;
    const isEmptyPack = totalChecklists === 0 || (totalChecklists === 1 && pack.checklists[0].title.includes("Placeholder"));

    const featuresINR = isEmptyPack ? [
        { text: "This pack is currently under development. Purchase now at a special price and receive all updates as they are released."}
    ] : [
        { text: `<strong>${totalChecklists} expert-built checklists</strong> (${totalTasks}+ tasks)`},
        { text: "<strong>Audit-ready & globally compliant</strong> framework"},
        { text: "<strong>Fully editable Excel format</strong> (offline)"},
        { text: "<strong>Lifetime access</strong> to all future updates for this pack."},
        { text: "<strong>Included customization credit</strong>"}
    ];

     const featuresUSD = isEmptyPack ? [
        { text: "This pack is currently under development. Purchase now at a special price and receive all updates as they are released."}
    ] : [
        { text: "<strong>Industry-specific operational standards</strong>"},
        { text: "<strong>Audit-ready task framework</strong> (daily / weekly / monthly)"},
        { text: "<strong>Globally aligned best practices</strong>"},
        { text: "<strong>Fully editable Excel files</strong> (offline)"},
        { text: "<strong>Lifetime updates</strong>"},
        { text: "<strong>Included customization credit</strong>"}
    ];


    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
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
                                    {!isEmptyPack && (
                                    <>
                                        <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {totalChecklists} checklists.</span></li>
                                        <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Fully editable Excel format.</span></li>
                                    </>
                                    )}
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
                    <Card className="flex flex-col max-w-2xl w-full border-2 border-border/50 shadow-xl overflow-hidden rounded-2xl">
                        <CardHeader className="p-6 bg-secondary/30 text-center">
                            <div className="flex justify-center items-center gap-4">
                                <Banknote className="w-10 h-10 text-accent" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary-text text-left">
                                        Global Compliance Pack
                                    </h3>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col gap-8">
                             {hasINR && hasUSD && (
                                <div className="flex justify-center">
                                    <Tabs defaultValue={currency} onValueChange={setCurrency} className="w-full max-w-xs">
                                      <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="USD">Pay in USD ($)</TabsTrigger>
                                        <TabsTrigger value="INR">Pay in INR (₹)</TabsTrigger>
                                      </TabsList>
                                    </Tabs>
                                </div>
                             )}
                            
                            <div className="text-center space-y-2">
                                <div className="flex justify-center">
                                    <Badge variant="secondary">✔️ Customization Included</Badge>
                                </div>
                                <p className="text-5xl font-extrabold text-primary-text">
                                    {currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                                </p>
                                <p className="text-sm text-secondary-text">One-time payment · Instant download</p>
                                <p className="text-xs text-secondary-text">No subscriptions. No hidden costs.</p>
                            </div>
                           
                            <div className='space-y-4'>
                                <h4 className="font-semibold text-center text-secondary-text/80 text-sm">WHAT'S INCLUDED</h4>
                                <ul className="space-y-3 text-sm text-primary-text">
                                    {(currency === 'INR' ? featuresINR : featuresUSD).map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-authority-green"/>
                                            <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             
                             {currency === 'INR' ? (
                                <ValueProposition 
                                    ourPrice={`₹${pack.priceINR}`}
                                    competitorPrice="₹50,000+"
                                    valueStatement="For a comparable enterprise compliance toolkit."
                                />
                             ) : (
                                <div className="text-center p-4 border border-dashed rounded-lg bg-secondary/30">
                                    <h4 className="font-semibold text-sm text-secondary-text/80">BUILT FOR GLOBAL COMPLIANCE</h4>
                                    <p className="text-xs text-muted-text mt-1">Aligned with how global frameworks work: ISO, OSHA, WHO, NABH, & local regulators. Not a certification, but a system to help you meet them.</p>
                                </div>
                             )}

                             <div className="p-4 bg-background/50 rounded-lg border border-accent/30">
                                <h4 className="font-bold text-accent flex items-center gap-2"><Info className="w-4 h-4"/> Included Customization Credit</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                   Get one free customization of this pack to match your brand, format, or internal workflow. After payment, your file downloads instantly. Our team will then send you a welcome email within one business day to collect your requirements and begin the free customization process.
                                </p>
                            </div>
                        </CardContent>
                         <CardFooter className="bg-secondary/30 mt-auto p-6 flex flex-col gap-4 items-center">
                           <div className="w-full max-w-sm text-center">
                                {currency === 'INR' && hasINR && pack.paymentId && (
                                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                                        <div className="text-center mb-4">
                                            <p className="font-bold text-lg text-primary-text">Get Instant Access</p>
                                            <p className="text-xs text-muted-foreground">Secure checkout · UPI, Cards, NetBanking</p>
                                        </div>
                                        <RazorpayButton paymentId={pack.paymentId} className="w-full" />
                                    </div>
                                )}
                                {currency === 'USD' && hasUSD && pack.lemonSqueezyUrl && (
                                     <div className="p-4 rounded-lg bg-background/50 border border-border w-full">
                                         <div className="text-center mb-4">
                                            <p className="font-bold text-lg text-primary-text">Get Instant Access</p>
                                            <p className="text-xs text-muted-foreground">Secure checkout · Cards · International payments</p>
                                        </div>
                                        <Button asChild size="lg" className="w-full font-bold" variant="accent">
                                            <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`}>
                                                Buy Now — ${pack.priceUSD}
                                            </Link>
                                        </Button>
                                     </div>
                                )}
                           </div>

                            <div className="text-xs text-muted-foreground text-center">
                                By purchasing, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> & <Link href="/refund" className="underline hover:text-primary">Refund Policy</Link>. Instant download after payment.
                           </div>
                           
                           <Button asChild variant="link" size="sm" className="w-full text-xs mt-2">
                                <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                   Need this tailored beyond one customization? Schedule a call
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
