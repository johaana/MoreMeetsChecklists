
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Check, ShieldCheck, Zap, CreditCard, Landmark, Globe, ArrowRight, Sparkles, Info, MapPin, Smartphone } from 'lucide-react';
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
    const [simulatedRegion, setSimulatedRegion] = React.useState<'INDIA' | 'USA'>('INDIA');

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V7 Payment Intelligence</span>
                        </div>
                        <SectionHeadline>The "Smart Gateway" Logic</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Refining 7.1 to prioritize location detection. The system confirms the region and automatically surfaces the correct payment tools (UPI vs. Global Cards).
                        </p>
                    </div>
                </div>
            </Section>

            {/* V7 PRIMARY CONCEPTS */}
            <Section id="v7-concepts" className="bg-alternate-background/20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        
                        {/* 7.1 Refined: The Smart Concierge */}
                        <ConceptCard 
                            title="7.1 Smart Concierge" 
                            subtitle="Dynamic detection logic with method-aware trust bar."
                            badge="Recommended"
                            variant="highlight"
                        >
                            <div className="space-y-6 py-2">
                                {/* Simulation Toggle */}
                                <div className="flex justify-center gap-2 mb-4">
                                    <Button 
                                        size="sm" 
                                        variant={simulatedRegion === 'INDIA' ? 'default' : 'outline'} 
                                        onClick={() => setSimulatedRegion('INDIA')}
                                        className="text-[9px] h-7 px-2 font-black uppercase tracking-widest"
                                    >
                                        Simulate India
                                    </Button>
                                    <Button 
                                        size="sm" 
                                        variant={simulatedRegion === 'USA' ? 'default' : 'outline'} 
                                        onClick={() => setSimulatedRegion('USA')}
                                        className="text-[9px] h-7 px-2 font-black uppercase tracking-widest"
                                    >
                                        Simulate USA
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2 bg-authority-green/5 border border-authority-green/20 rounded-lg px-3 py-2 animate-pulse">
                                    <MapPin className="w-3 h-3 text-authority-green" />
                                    <span className="text-[9px] font-black text-authority-green uppercase tracking-wider">
                                        Location Detected — Local Payment Enabled: {simulatedRegion === 'INDIA' ? 'India' : 'USA'}
                                    </span>
                                </div>

                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">
                                        {simulatedRegion === 'INDIA' ? '₹5,999' : '$79'}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-widest">Global Professional License</p>
                                </div>

                                <div className="space-y-3">
                                    <ValueCheck text="<strong>Instant Excel Download</strong> (Offline Ready)" />
                                    <ValueCheck text="<strong>1 Free Expert Customization</strong>" />
                                </div>

                                <div className="pt-4 space-y-4">
                                    {/* Trust Bar with Icons */}
                                    <div className="flex items-center justify-center gap-4 py-2 border-y border-white/5 grayscale opacity-60">
                                        {simulatedRegion === 'INDIA' ? (
                                            <>
                                                <div className="flex items-center gap-1.5">
                                                    <Smartphone className="w-3 h-3" />
                                                    <span className="text-[8px] font-black uppercase tracking-tighter">UPI / GPay</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <CreditCard className="w-3 h-3" />
                                                    <span className="text-[8px] font-black uppercase tracking-tighter">Local Cards</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-1.5">
                                                    <CreditCard className="w-3 h-3" />
                                                    <span className="text-[8px] font-black uppercase tracking-tighter">Stripe / Cards</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Globe className="w-3 h-3" />
                                                    <span className="text-[8px] font-black uppercase tracking-tighter">PayPal</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {simulatedRegion === 'INDIA' ? (
                                        <div className="relative">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        </div>
                                    ) : (
                                        <Button className="w-full h-14 text-lg font-black bg-accent text-bg-primary hover:bg-accent/90">
                                            Secure Global Checkout <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-bold text-muted-foreground uppercase">Incorrect Region?</span>
                                        <button className="text-[9px] font-black text-primary underline uppercase tracking-tighter">
                                            Switch to {simulatedRegion === 'INDIA' ? 'USD ($)' : 'INR (₹)'}
                                        </button>
                                    </div>
                                    <p className="text-[8px] text-muted-foreground leading-tight italic">
                                        {simulatedRegion === 'INDIA' 
                                            ? "Using a non-Indian card? Switch to USD for Stripe/PayPal support." 
                                            : "Paying from India? Switch to INR for local UPI/Netbanking support."
                                        }
                                    </p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.2 Method-Visual Anchor */}
                        <ConceptCard 
                            title="7.2 Method-First" 
                            subtitle="Visual cues for payment apps before the action."
                        >
                            <div className="space-y-8 py-2">
                                <div className="text-center space-y-1">
                                    <p className="text-6xl font-black text-primary tracking-tighter">₹5,999</p>
                                    <Badge variant="outline" className="text-[9px] border-primary/20 text-muted-foreground uppercase font-black">Professional License</Badge>
                                </div>
                                <div className="grid grid-cols-4 gap-2 opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700">
                                    <div className="flex flex-col items-center gap-1">
                                        <Smartphone className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">UPI</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <CreditCard className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">CARDS</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Landmark className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">BANKING</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Globe className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">GLOBAL</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative group/btn p-1 bg-gradient-to-b from-primary/20 to-transparent rounded-xl border border-primary/10">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <div className="p-3 bg-alternate-background/50 rounded-lg border border-border/50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Info className="w-3 h-3 text-primary" />
                                            <span className="text-[9px] font-bold text-secondary-text">Non-Indian Card?</span>
                                        </div>
                                        <button className="text-[9px] font-black text-primary underline uppercase tracking-tighter">Switch to USD ($)</button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.3 Rescue-First Layout */}
                        <ConceptCard 
                            title="7.3 The Concierge" 
                            subtitle="Solves the 'International Friction' at the last mile."
                        >
                            <div className="space-y-6 py-2">
                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">₹5,999</p>
                                    <div className="flex items-center justify-center gap-2 mt-1">
                                        <ShieldCheck className="w-3 h-3 text-authority-green" />
                                        <span className="text-[10px] font-bold text-authority-green uppercase tracking-widest">Safe Local Checkout</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <ValueCheck text="Audit-Ready Excel Content" />
                                    <ValueCheck text="Lifetime Access & Updates" />
                                </div>
                                
                                <div className="mt-6 space-y-4">
                                    <div className="flex flex-col gap-2 p-3 bg-background/40 rounded-xl border border-border/50">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] font-black text-muted-foreground uppercase">Outside India?</span>
                                            <button className="text-[9px] font-black text-primary hover:underline transition-all">SWITCH TO USD ($)</button>
                                        </div>
                                        <p className="text-[8px] text-muted-foreground leading-tight">Use this link for US/EU/Global cards or PayPal via our international gateway.</p>
                                    </div>
                                    <div className="relative">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <p className="text-[9px] text-center text-muted-foreground uppercase font-bold tracking-tighter">All local payment methods supported</p>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>
                </div>
            </Section>

            {/* DESIGNER NOTES */}
            <Section className="bg-bg-primary">
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
                                    <p className="leading-relaxed">Seeing text like "UPI / GPay" near the button answers the user's biggest checkout question without them having to read through a long feature list.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Frictionless "Rescue"</p>
                                    <p className="leading-relaxed">We assume India is correct (our primary market), but provide a highly readable "Concierge" exit at the bottom for global buyers, ensuring no one bounces due to technical confusion.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. One Product, Two Pipes</p>
                                    <p className="leading-relaxed">The UI emphasizes that this is the same "Global Professional License" regardless of whether they pay in INR or USD, maintaining the premium brand value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
