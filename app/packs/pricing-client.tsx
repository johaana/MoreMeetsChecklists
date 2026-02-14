
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Check, Download, Loader2, Banknote, Gift, Info } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';
import { ValueProposition } from '../components/ui/value-proposition';


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
                Get Your Free Toolkit
            </Button>
        </form>
    )
}


export default function PricingClient({ pack }: { pack: PremiumPack }) {
    
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    
    const [currency, setCurrency] = React.useState(hasUSD ? 'USD' : 'INR');
    
    const totalChecklists = pack.checklists?.length || 0;
    const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;
    const isEmptyPack = totalChecklists === 0 || (totalChecklists === 1 && pack.checklists[0].title.includes("Placeholder"));

    const featuresINR = [
        { text: `<strong>${totalChecklists} expert-built checklists</strong> (${totalTasks}+ tasks)`},
        { text: "<strong>Audit-ready & globally compliant</strong> framework"},
        { text: "<strong>Fully editable Excel format</strong>"},
        { text: "<strong>Lifetime access</strong> to all future updates for this pack."}
    ];

     const featuresUSD = [
        { text: "Industry-specific operational standards"},
        { text: "Audit-ready task framework (daily / weekly / monthly)"},
        { text: "Globally aligned best practices"},
        { text: "Fully editable Excel files (offline)"},
        { text: "Lifetime updates"}
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
                                        {pack.title}
                                    </h3>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col gap-8">
                             {hasINR && hasUSD && (
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">Select Currency</p>
                                    <Tabs defaultValue={currency} onValueChange={setCurrency} className="w-full max-w-xs">
                                      <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="USD">USD ($)</TabsTrigger>
                                        <TabsTrigger value="INR">INR (₹)</TabsTrigger>
                                      </TabsList>
                                    </Tabs>
                                </div>
                             )}
                            
                            <div className="text-center space-y-2">
                                <Badge variant="outline">✔️ 1 Free Customization Included</Badge>
                                <p className="text-5xl font-extrabold text-primary-text">
                                    {currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                                </p>
                                <p className="text-sm text-secondary-text font-semibold">One-time payment · Instant download · No subscriptions</p>
                            </div>
                           
                            <div className='space-y-4'>
                                <h4 className="font-semibold text-center text-secondary-text/80 text-sm uppercase">What's included</h4>
                                <ul className="space-y-3 text-sm text-primary-text">
                                     {(currency === 'INR' ? featuresINR : featuresUSD).map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-authority-green"/>
                                            <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                                        </li>
                                    ))}
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-authority-green"/>
                                        <span><strong>1 Free Customization Included</strong></span>
                                    </li>
                                </ul>
                            </div>
                             
                             <ValueProposition 
                                ourPrice={currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD || 'N/A'}`}
                                competitorPrice={currency === 'INR' ? "₹50,000+" : `$${pack.competitorPriceUSD || 599}+`}
                                valueStatement="For a comparable enterprise compliance toolkit."
                            />
                            
                            <div className="text-center p-4 border border-dashed rounded-lg bg-secondary/30">
                                <h4 className="font-semibold text-sm text-secondary-text/80">BUILT FOR REGULATED, PEOPLE-DEPENDENT OPERATIONS</h4>
                                <p className="text-xs text-muted-text mt-1">Aligned with how global compliance frameworks actually work: ISO · OSHA · WHO · NABH · Local regulators. Not a certification. A system that helps you meet them.</p>
                            </div>

                             <div className="p-4 bg-background/50 rounded-lg border border-accent/30">
                                <h4 className="font-bold text-accent flex items-center gap-2"><Gift className="w-4 h-4"/> Included Customization Benefit</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                   Your file downloads instantly after payment. Our team will reach out within 1 business day to collect requirements and begin your free customization.
                                </p>
                            </div>
                        </CardContent>
                         <CardFooter className="bg-secondary/30 mt-auto p-6 flex flex-col gap-4 items-center">
                           <div className="w-full max-w-sm text-center space-y-4">
                                {currency === 'INR' && hasINR && pack.paymentId && (
                                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                                        <RazorpayButton paymentId={pack.paymentId} />
                                    </div>
                                )}
                                {currency === 'USD' && hasUSD && pack.lemonSqueezyUrl && (
                                     <div className="p-4 rounded-lg bg-background/50 border border-border w-full">
                                        <Button asChild size="lg" className="w-full font-bold" variant="accent">
                                            <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`}>
                                                Get Instant Access
                                            </Link>
                                        </Button>
                                     </div>
                                )}
                                
                                <div className="flex items-center justify-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                                    <Info className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-xs text-primary-text font-medium text-left leading-tight">
                                        {currency === 'INR' 
                                            ? "International card? Switch to USD at the top for Stripe/Paypal." 
                                            : "Paying from India? Switch to INR at the top for UPI/Rupay."
                                        }
                                    </p>
                                </div>
                           </div>
                           <p className="text-xs text-muted-foreground mt-2">Built from real-world audit &amp; operations experience.</p>
                            <div className="text-xs text-muted-foreground text-center">
                                Secure payment via {currency === 'INR' ? 'Razorpay' : 'Lemon Squeezy'}.
                                <br />
                                By purchasing, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> & <Link href="/refund" className="underline hover:text-primary">Refund Policy</Link>.
                                <br />
                                Taxes, if applicable, are applied automatically at checkout as per local regulations.
                           </div>
                           
                           <Button asChild variant="link" size="sm" className="w-full text-xs mt-2">
                                <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                   Need additional customization? Schedule a call &rarr;
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
