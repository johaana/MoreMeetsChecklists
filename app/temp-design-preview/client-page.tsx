
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Landmark, Smartphone, MapPin, Globe, ArrowRight, Sparkles, Info, HelpCircle } from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-b border-border/50", className)} {...props} />
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

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* V7 INTRO */}
            <Section id="intro" className="relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]"></div>
                </div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V7 Performance Series</span>
                        </div>
                        <SectionHeadline>The "Payment Method" Mental Model</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           We've removed the "Edition" branding to reinforce that there is only one premium product. The UI now adapts to the user's **payment tool intent** (Local UPI vs. Global Card).
                        </p>
                    </div>
                </div>
            </Section>

            {/* V7 PRIMARY CONCEPTS */}
            <Section id="v7-concepts" className="bg-alternate-background/20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        
                        {/* 7.1 The Local priority Path */}
                        <ConceptCard 
                            title="7.1 The Seamless Local" 
                            subtitle="Minimalist approach. Region is a helper, not a brand."
                            badge="Cleanest"
                        >
                            <div className="space-y-6 py-2">
                                <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2">
                                    <MapPin className="w-3 h-3 text-primary" />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Local Payment Enabled: India</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">₹5,999</p>
                                    <p className="text-[10px] text-muted-foreground font-bold mt-1 uppercase tracking-widest">One-time investment</p>
                                </div>
                                <div className="space-y-3">
                                    <ValueCheck text="<strong>Instant Excel Download</strong> (Offline Ready)" />
                                    <ValueCheck text="<strong>1 Free Expert Customization</strong>" />
                                </div>
                                <div className="pt-4">
                                    <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    <p className="text-[10px] text-center text-muted-foreground italic mt-3">Supports: UPI, GPay, PhonePe, Cards, Netbanking</p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <button className="w-full text-center text-[10px] font-black text-primary/40 hover:text-primary uppercase tracking-[0.2em] transition-colors">
                                        Using an International Card? Switch to $
                                    </button>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 7.2 The Method-Visual Anchor */}
                        <ConceptCard 
                            title="7.2 The Trust Anchor" 
                            subtitle="Visual cues for payment apps before the action."
                            variant="highlight"
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

                        {/* 7.3 The Rescue-First Layout */}
                        <ConceptCard 
                            title="7.3 The Rescue Proximity" 
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
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-primary">
                            <Zap className="text-accent w-8 h-8" /> UI/UX Strategic Improvments (V7):
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Zero "Edition" Friction</p>
                                    <p className="leading-relaxed">By removing "India Edition" and using "India Payment Node" or "Local Gateway," we reassure the user that the **Product** is the same global standard, but the **Pipe** is optimized for them.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Grayscale Trust Row (v7.2)</p>
                                    <p className="leading-relaxed">Showing UPI/GPay logos in a grayscale, high-end format maintains the "Black Box" luxury feel while answering the user's #1 question: "Does this support my local app?"</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. The "Rescue" Box (v7.3)</p>
                                    <p className="leading-relaxed">The high-contrast rescue box above the button is critical for international conversion. It acknowledges that they might be misplaced and offers an immediate "Concierge" exit to the USD path.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Eye-Path Efficiency</p>
                                    <p className="leading-relaxed">All V7 designs keep the "Switch" option near the "Buy" button. This reduces the cognitive load of searching for a currency toggle at the top of the page.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-border/50 text-center">
                            <button className="inline-flex items-center gap-2 bg-accent text-bg-primary font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform uppercase tracking-widest text-xs">
                                Recommendation: Variation 7.2 <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
