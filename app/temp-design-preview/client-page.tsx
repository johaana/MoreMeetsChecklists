
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Check, ShieldCheck, Zap, Globe, ArrowRight, Sparkles, MapPin, Smartphone, CreditCard, Landmark, Shield, Info, Activity } from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { Button } from '@/components/ui/button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className="w-full py-16 md:py-24 border-b border-border/50" {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[44px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, subtitle, children, badge, variant = "default" }: { title: string, subtitle: string, children: React.ReactNode, badge?: string, variant?: "default" | "highlight" }) => (
    <Card 
        style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: variant === "highlight" ? 'hsl(var(--primary))' : 'hsl(var(--border-color))'}} 
        className={cn("w-full border-2 shadow-2xl flex flex-col h-full overflow-hidden transition-all duration-500 group", variant === "highlight" && "ring-4 ring-primary/10")}
    >
        <CardHeader className="pb-4 border-b border-white/5 bg-white/[0.02]">
            <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">{title}</span>
                {badge && <Badge className="bg-primary text-bg-primary border-none text-[9px] font-black px-2 py-0.5">{badge}</Badge>}
            </div>
            <CardTitle className="text-lg text-primary-text">{subtitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6 flex flex-col">
            {children}
        </CardContent>
    </Card>
);

const ValueCheck = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 text-xs text-secondary-text">
        <Check className="w-4 h-4 text-authority-green shrink-0 mt-0.5" />
        <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
);

// Minimal SVG icons for payment methods to ensure 100% stability in preview
const UpiIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-70"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
);

export default function TempDesignClientPage() {
    const [region, setRegion] = React.useState<'INDIA' | 'USA'>('INDIA');

    const IndiaMethods = () => (
        <div className="flex items-center justify-center gap-3 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 py-2">
            <div className="flex flex-col items-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">UPI / GPay</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <CreditCard className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">Local Cards</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Landmark className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">Netbanking</span>
            </div>
        </div>
    );

    const GlobalMethods = () => (
        <div className="flex items-center justify-center gap-3 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 py-2">
            <div className="flex flex-col items-center gap-1">
                <CreditCard className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">Stripe / Cards</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Globe className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">PayPal</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-[7px] font-black uppercase">Secure Global</span>
            </div>
        </div>
    );

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V7.1 Smart Concierge Lab</span>
                        </div>
                        <SectionHeadline>Refining the "Smart Gateway" Logic</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Testing 5 variations of the 7.1 architecture. One global product, dynamic payment pipes based on zero-click location detection.
                        </p>
                        
                        {/* GLOBAL TOGGLE */}
                        <div className="flex justify-center items-center gap-4 pt-4">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Simulate Detection:</span>
                            <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
                                <Button 
                                    size="sm" 
                                    variant={region === 'INDIA' ? 'default' : 'ghost'} 
                                    onClick={() => setRegion('INDIA')}
                                    className="text-[10px] h-8 px-4 font-black uppercase tracking-tighter"
                                >
                                    India (INR)
                                </Button>
                                <Button 
                                    size="sm" 
                                    variant={region === 'USA' ? 'default' : 'ghost'} 
                                    onClick={() => setRegion('USA')}
                                    className="text-[10px] h-8 px-4 font-black uppercase tracking-tighter"
                                >
                                    Global (USD)
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* VARIATIONS GRID */}
            <Section id="variations" className="bg-alternate-background/20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        
                        {/* 7.1.1 The Institutional Guard */}
                        <ConceptCard 
                            title="Variation 7.1.1" 
                            subtitle="The Institutional Guard"
                            variant="highlight"
                            badge="High Trust"
                        >
                            <div className="space-y-6">
                                <div className="bg-authority-green/10 border border-authority-green/20 rounded-lg p-3 flex items-center gap-3">
                                    <Shield className="w-4 h-4 text-authority-green" />
                                    <span className="text-[10px] font-black text-authority-green uppercase tracking-wider">
                                        Location Verified: {region === 'INDIA' ? 'India Gateway Active' : 'Global Gateway Active'}
                                    </span>
                                </div>
                                <div className="text-center space-y-1">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">
                                        {region === 'INDIA' ? '₹5,999' : '$79'}
                                    </p>
                                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Full Professional License</p>
                                </div>
                                <div className="space-y-2">
                                    <ValueCheck text="Audit-Ready Excel Standards" />
                                    <ValueCheck text="Lifetime Access & Updates" />
                                </div>
                                <div className="pt-4 space-y-4">
                                    {region === 'INDIA' ? <IndiaMethods /> : <GlobalMethods />}
                                    {region === 'INDIA' ? (
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    ) : (
                                        <Button className="w-full h-12 bg-accent text-bg-primary font-black uppercase text-xs">Secure Global Checkout <ArrowRight className="ml-2 w-4 h-4"/></Button>
                                    )}
                                </div>
                                <div className="text-center">
                                    <button className="text-[9px] font-black text-primary underline uppercase">
                                        Switch to {region === 'INDIA' ? 'USD ($)' : 'INR (₹)'}
                                    </button>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.1.2 The Value Inset */}
                        <ConceptCard 
                            title="Variation 7.1.2" 
                            subtitle="The Value-First Inset"
                        >
                            <div className="space-y-6">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                                        <MapPin className="w-3 h-3 text-primary" />
                                        <span className="text-[9px] font-bold text-primary-text/70 uppercase">Route: {region === 'INDIA' ? 'Local' : 'International'}</span>
                                    </div>
                                    <p className="text-6xl font-black text-primary tracking-tighter">
                                        {region === 'INDIA' ? '₹5,999' : '$79'}
                                    </p>
                                </div>
                                <div className="p-4 bg-background/40 rounded-xl border border-white/5 space-y-3">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase text-center border-b border-white/5 pb-2">Supported Methods</p>
                                    {region === 'INDIA' ? <IndiaMethods /> : <GlobalMethods />}
                                </div>
                                <div className="space-y-4">
                                    {region === 'INDIA' ? (
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    ) : (
                                        <Button className="w-full h-12 bg-primary text-bg-primary font-black uppercase text-xs">Instant Download <ArrowRight className="ml-2 w-4 h-4"/></Button>
                                    )}
                                    <div className="flex items-center justify-center gap-2">
                                        <Info className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-[8px] text-muted-foreground italic">
                                            Not in {region === 'INDIA' ? 'India' : 'USA'}? <button className="underline font-bold text-primary">Change Currency</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.1.3 The Minimalist Pulse */}
                        <ConceptCard 
                            title="Variation 7.1.3" 
                            subtitle="The Verification Pulse"
                            badge="Sleek"
                        >
                            <div className="space-y-8 py-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black text-primary-text">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Activity className="w-3 h-3 text-authority-green animate-pulse" />
                                            <span className="text-[9px] font-bold text-authority-green uppercase">Local detected</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><Smartphone className="w-3 h-3 opacity-50" /></div>
                                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><CreditCard className="w-3 h-3 opacity-50" /></div>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <ValueCheck text="<strong>One-Time</strong> License Fee" />
                                    <ValueCheck text="<strong>Audit-Ready</strong> Content" />
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="relative">
                                        {region === 'INDIA' ? (
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        ) : (
                                            <Button className="w-full h-14 bg-white text-black font-black uppercase text-sm rounded-xl">Buy Now <ArrowRight className="ml-2 w-4 h-4"/></Button>
                                        )}
                                    </div>
                                    <p className="text-[8px] text-center text-muted-foreground leading-tight">
                                        Need a non-{region === 'INDIA' ? 'Indian' : 'US'} payment gateway? <button className="text-primary font-black underline">Click Here</button>
                                    </p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.1.4 The Method-First Anchor */}
                        <ConceptCard 
                            title="Variation 7.1.4" 
                            subtitle="Method-Relief Focus"
                        >
                            <div className="space-y-6 flex flex-col items-center">
                                <div className="w-full py-2 border-b border-white/5 text-center">
                                    <span className="text-[9px] font-black text-primary/60 uppercase tracking-widest">Optimized for {region === 'INDIA' ? 'UPI & Local Banking' : 'Global Cards & PayPal'}</span>
                                </div>
                                <div className="text-center py-4">
                                    <p className="text-5xl font-black text-primary-text mb-1">{region === 'INDIA' ? '₹5,999' : '$79'}</p>
                                    <Badge variant="outline" className="text-[8px] border-white/10 text-muted-foreground uppercase">Lifetime Access License</Badge>
                                </div>
                                <div className="w-full space-y-4">
                                    {region === 'INDIA' ? <IndiaMethods /> : <GlobalMethods />}
                                    <div className="p-1 bg-gradient-to-b from-white/10 to-transparent rounded-xl">
                                        {region === 'INDIA' ? (
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        ) : (
                                            <Button className="w-full h-14 bg-accent text-bg-primary font-black uppercase">Start Download</Button>
                                        )}
                                    </div>
                                </div>
                                <button className="text-[9px] font-black text-primary/80 uppercase hover:text-primary transition-all">
                                    Outside {region === 'INDIA' ? 'India' : 'the USA'}? Switch Gateway
                                </button>
                            </div>
                        </ConceptCard>

                        {/* 7.1.5 The Concierge Footer */}
                        <ConceptCard 
                            title="Variation 7.1.5" 
                            subtitle="The Concierge Footer"
                        >
                            <div className="space-y-6 flex flex-col h-full">
                                <div className="text-center py-6">
                                    <p className="text-6xl font-black text-primary-text tracking-tighter">
                                        {region === 'INDIA' ? '₹5,999' : '$79'}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground font-black uppercase mt-2">Professional Standard License</p>
                                </div>
                                <div className="flex-1 space-y-3 px-2">
                                    <ValueCheck text="Unlimited use for 1 organization" />
                                    <ValueCheck text="1 Free custom branding" />
                                    <ValueCheck text="Excel & PDF delivery" />
                                </div>
                                <div className="mt-auto pt-6 space-y-4">
                                    <div className="relative">
                                        {region === 'INDIA' ? (
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        ) : (
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-sm">Secure Checkout</Button>
                                        )}
                                    </div>
                                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <Activity className="w-2.5 h-2.5 text-authority-green" />
                                                <span className="text-[8px] font-black text-muted-foreground uppercase">detected: {region}</span>
                                            </div>
                                            <button className="text-[8px] font-black text-primary underline uppercase">Switch to {region === 'INDIA' ? 'USD' : 'INR'}</button>
                                        </div>
                                        <p className="text-[7px] text-muted-foreground leading-tight italic">
                                            {region === 'INDIA' ? "Use this link for non-Indian cards or PayPal." : "Use this link for local UPI or Netbanking support."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>
                </div>
            </Section>

            {/* DESIGNER NOTES */}
            <Section className="border-none">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto p-10 rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-surface-card/50 relative overflow-hidden">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-primary">
                            <Zap className="text-accent w-8 h-8" /> Smart Detection Improvements (V7.1):
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Zero-Click Context</p>
                                    <p className="leading-relaxed">By stating "Location Detected," we reassure the user that the system is working for them. It removes the need for them to manually search for a currency toggle.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Visual Relief Row</p>
                                    <p className="leading-relaxed">Seeing subtle icons like "UPI / GPay" near the button answers the user's biggest checkout question without them having to read through a long feature list.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Frictionless "Rescue"</p>
                                    <p className="leading-relaxed">We assume the local detection is correct, but provide a highly readable "Concierge" exit at the bottom for global buyers, ensuring no one bounces due to technical confusion.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. One Product, Two Pipes</p>
                                    <p className="leading-relaxed">The UI emphasizes that this is the same "Global Professional License" regardless of the gateway, maintaining the premium brand value across all regions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
    