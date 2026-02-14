
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Check, ShieldCheck, Zap, Lock, CreditCard, Landmark, Smartphone, MapPin, Globe, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-b border-border/50", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[44px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, description, children, badge, variant = "default" }: { title: string, description: string, children: React.ReactNode, badge?: string, variant?: "default" | "highlight" }) => (
    <Card 
        style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: variant === "highlight" ? 'hsl(var(--primary))' : 'hsl(var(--border-color))'}} 
        className={cn("w-full border-2 shadow-2xl flex flex-col h-full overflow-hidden transition-all duration-500 group hover:translate-y-[-4px]", variant === "highlight" && "ring-4 ring-primary/10")}
    >
        <CardHeader className="pb-4 relative">
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors" style={{color: 'hsl(var(--text-primary))'}}>{title}</CardTitle>
                {badge && <Badge className="bg-primary text-bg-primary border-none uppercase text-[9px] font-black tracking-widest px-2 py-0.5">{badge}</Badge>}
            </div>
            <CardDescription style={{color: 'hsl(var(--text-on-light))'}} className="text-xs font-medium opacity-80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
            {children}
        </CardContent>
    </Card>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* Header / Intro */}
            <Section id="intro" className="relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]"></div>
                </div>
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V5 Signature Series</span>
                        </div>
                        <SectionHeadline>The "Location-Certainty" Framework</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           We are moving from "Currency Pickers" to **"Regional Concierges."** These architectures are engineered to make the Razorpay path the only logical choice for local buyers while maintaining a high-trust path for the world.
                        </p>
                    </div>
                </div>
            </Section>

            {/* V5 PRIMARY CONCEPTS */}
            <Section id="v5-concepts" className="bg-alternate-background/20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        
                        {/* 5.1 The Value Anchor Split */}
                        <ConceptCard 
                            title="5.1 The Value Contrast" 
                            description="Psychology: Frames the local price as a region-locked subsidy vs. the $79 global standard."
                            badge="High Conversion"
                        >
                            <div className="space-y-8 py-4">
                                <div className="flex justify-between items-end border-b border-border/30 pb-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global Access</p>
                                        <p className="text-2xl font-bold opacity-40 line-through">$79.00</p>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <p className="text-[10px] text-primary uppercase font-black tracking-widest flex items-center justify-end gap-1">
                                            <MapPin className="w-3 h-3" /> Local Edition: India
                                        </p>
                                        <p className="text-5xl font-black text-primary tracking-tighter">₹5,999</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-background/40 p-3 rounded-lg border border-border/50 text-center">
                                            <Check className="w-4 h-4 text-authority-green mx-auto mb-1" />
                                            <p className="text-[9px] font-bold text-secondary-text uppercase">Excel Files</p>
                                        </div>
                                        <div className="bg-background/40 p-3 rounded-lg border border-border/50 text-center">
                                            <Check className="w-4 h-4 text-authority-green mx-auto mb-1" />
                                            <p className="text-[9px] font-bold text-secondary-text uppercase">1 Free Edit</p>
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" className="relative w-full" />
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">UPI • GPAY • NETBANKING • LOCAL CARDS</p>
                                        <button className="text-[10px] text-primary hover:underline font-bold flex items-center gap-1">
                                            <Globe className="w-3 h-3" /> Outside India? Pay in USD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 5.2 The Identity Lock (Authority Series) */}
                        <ConceptCard 
                            title="5.2 The Identity Seal" 
                            description="Focus: Procurement Authority. Wraps the checkout in an institutional 'Verified' environment."
                            variant="highlight"
                        >
                            <div className="mt-2 rounded-2xl overflow-hidden border-2 border-primary/30 bg-alternate-background">
                                <div className="bg-primary/10 px-4 py-3 border-b border-primary/20 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Regional Compliance Secure</span>
                                    </div>
                                    <Lock className="w-3 h-3 text-primary/50" />
                                </div>
                                <div className="p-6 space-y-8">
                                    <div className="text-center space-y-1">
                                        <p className="text-6xl font-black text-primary tracking-tighter">₹5,999</p>
                                        <Badge variant="outline" className="text-[9px] border-primary/20 text-muted-foreground">ONE-TIME PROFESSIONAL LICENSE</Badge>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-background/20 p-4 rounded-xl border border-border/50">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-center gap-4 opacity-50 grayscale">
                                                <Smartphone className="w-4 h-4" />
                                                <Landmark className="w-4 h-4" />
                                                <CreditCard className="w-4 h-4" />
                                            </div>
                                            <button className="w-full text-center text-[10px] font-black text-primary/60 hover:text-primary uppercase tracking-widest">
                                                Not in India? Use Global Gateway ($)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 5.3 The Method Hub (Behavioral First) */}
                        <ConceptCard 
                            title="5.3 The Payment Hub" 
                            description="UX Goal: Removes decision anxiety by showing payment app logos before the final action."
                        >
                            <div className="space-y-8 py-4">
                                <div className="flex items-center justify-between px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-authority-green/10 flex items-center justify-center">
                                            <MapPin className="w-4 h-4 text-authority-green" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase leading-none">Detected Location</span>
                                            <span className="text-xs text-secondary-text font-bold">India (Local Path)</span>
                                        </div>
                                    </div>
                                    <div className="h-8 w-px bg-border/50"></div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black uppercase leading-none text-muted-foreground">Currency</span>
                                        <p className="text-xs font-bold text-primary">INR (₹)</p>
                                    </div>
                                </div>
                                <div className="text-center group cursor-default">
                                    <p className="text-7xl font-black text-primary tracking-tighter group-hover:scale-110 transition-transform duration-500">₹5,999</p>
                                    <p className="text-[10px] text-muted-foreground font-bold mt-1 tracking-[0.3em]">ALL LOCAL TAXES INCLUDED</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface-card px-3 text-[9px] font-black text-primary border border-border/50 rounded-full z-10">FAST LOCAL PAY</div>
                                        <div className="pt-4 pb-2 px-2 bg-background/30 border border-border/50 rounded-xl">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        </div>
                                    </div>
                                    <div className="p-3 bg-alternate-background rounded-lg border border-dashed border-border/50 flex items-center justify-between">
                                        <p className="text-[10px] text-muted-foreground font-bold">Using International Card?</p>
                                        <button className="text-[10px] text-primary font-black underline uppercase tracking-tighter">Switch to $</button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 5.4 The Modern Pulse (Tech-Forward) */}
                        <ConceptCard 
                            title="5.4 The Smart Pulse" 
                            description="Minimalist. High-tech. The card 'responds' to the user's IP location with ambient animation."
                        >
                            <div className="space-y-10 py-6">
                                <div className="relative flex justify-center">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 animate-pulse"></div>
                                    <div className="relative flex items-center gap-3 bg-background/50 rounded-full pl-2 pr-4 py-1.5 border border-primary/20 shadow-inner">
                                        <div className="w-2 h-2 rounded-full bg-authority-green animate-ping"></div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Active: India Payment Node</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-6xl font-black text-primary tracking-tighter">₹5,999</p>
                                    <div className="flex items-center justify-center gap-2 mt-2">
                                        <Check className="w-3 h-3 text-authority-green" />
                                        <span className="text-[10px] font-bold text-secondary-text uppercase tracking-widest">1 Free Customization</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-1.5 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-primary/10">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <div className="text-center space-y-2">
                                        <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest">Support: PhonePe • GPay • UPI • Cards</p>
                                        <button className="text-[10px] text-primary/50 hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto group">
                                            <Globe className="w-3 h-3 group-hover:rotate-12 transition-transform" /> Not in India? Click for Global USD ($)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 5.5 The "Expert Frame" (The Professional Choice) */}
                        <ConceptCard 
                            title="5.5 The Authority Frame" 
                            description="Design: Heavy & Institutional. Frames the checkout as a formal 'India-Edition' procurement path."
                        >
                            <div className="bg-alternate-background rounded-2xl overflow-hidden border border-border shadow-inner">
                                <div className="bg-secondary/50 px-5 py-3 border-b border-border flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-accent" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.1em] text-accent">Professional License</span>
                                    </div>
                                    <span className="text-[9px] font-bold text-muted-foreground opacity-50 tracking-tighter">ID: MMO-IN-2025</span>
                                </div>
                                <div className="p-8 space-y-8">
                                    <div className="text-center space-y-1">
                                        <p className="text-5xl font-black text-primary">₹5,999</p>
                                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">India Edition Full Toolkit</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-xs text-secondary-text border-l-2 border-authority-green pl-3">
                                            <Check className="w-3 h-3 text-authority-green" /> 
                                            <span>Audit-Ready Excel Source</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-secondary-text border-l-2 border-authority-green pl-3">
                                            <Check className="w-3 h-3 text-authority-green" /> 
                                            <span>Certified Expert Customization</span>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <div className="flex items-center justify-center gap-2 pt-2 grayscale opacity-40">
                                        <CreditCard className="w-4 h-4" />
                                        <Smartphone className="w-4 h-4" />
                                        <Landmark className="w-4 h-4" />
                                    </div>
                                    <button className="w-full text-center text-[9px] font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest border-t border-border/30 pt-4">
                                        Switch to International USD Checkout
                                    </button>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>
                </div>
            </Section>

            {/* Analysis Section */}
            <Section className="bg-bg-primary">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto p-10 rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-surface-card/50 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-primary">
                            <Zap className="text-accent w-8 h-8" /> Why "Location Certainty" converts B2B buyers:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">The "Local Advantage" Anchor (v5.1)</p>
                                    <p className="leading-relaxed">By showing the $79 reference price, you create a "Price Anchor." The Indian buyer feels they are getting a tailored, subsidized version of a global high-value product. It removes the "Is this too expensive?" thought and replaces it with "I'm getting a local deal."</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">The Institutional Authority (v5.2 & v5.5)</p>
                                    <p className="leading-relaxed">Business owners don't want to just "pay online"; they want to "secure a license." Using terminology like "Procurement Portal" and "Compliance Secure" makes the purchase feel like a professional capital investment rather than a consumer impulse buy.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">Method Familiarity (v5.3)</p>
                                    <p className="leading-relaxed">For Indian operators, "Credit Card" means friction (OTP, 3D Secure). Visually confirming "UPI" and "GPay" before the price establishes that the checkout will be frictionless—drastically reducing the bounce rate during the final seconds of the decision.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">The "Safety Valve" Logic</p>
                                    <p className="leading-relaxed">The goal of the "Last-Mile Switcher" is to treat the 10% international users with respect without distracting the 90% local path. It acts as a concierge waiting at the door, rather than a confusing map at the start of the journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-border/50 text-center">
                            <button className="inline-flex items-center gap-2 bg-accent text-bg-primary font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform">
                                Final Choice Recommendation: 5.1 or 5.2 <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
