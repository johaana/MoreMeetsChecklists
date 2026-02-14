
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Info, Globe, ArrowRight, Zap, ShieldCheck, MapPin, Check } from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, description, children, badge }: { title: string, description: string, children: React.ReactNode, badge?: string }) => (
    <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}} className="w-full border-2 shadow-lg flex flex-col h-full">
        <CardHeader>
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl" style={{color: 'hsl(var(--text-primary))'}}>{title}</CardTitle>
                {badge && <Badge variant="accent" className="bg-primary/20 text-primary border-primary/30">{badge}</Badge>}
            </div>
            <CardDescription style={{color: 'hsl(var(--text-on-light))'}} className="text-xs">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
            {children}
        </CardContent>
    </Card>
);

const RazorpaySimulator = ({ className }: { className?: string }) => (
    <button className={cn("w-full py-4 bg-[#3395FF] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:bg-[#2d84e6] transition-colors", className)}>
        <span className="text-sm">Pay via UPI / Local Card (Razorpay)</span>
        <ArrowRight className="w-4 h-4" />
    </button>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="intro">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <Badge variant="outline" className="border-primary text-primary">UX LAB: REAL-WORLD TESTING</Badge>
                        <SectionHeadline>3.1 vs 3.2 vs 3.3: The Real Button Test</SectionHeadline>
                        <p className="text-lg" style={{color: 'hsl(var(--text-secondary))'}}>
                           We are comparing how the <strong>real Razorpay branded button</strong> sits within three different layout architectures. Notice how the blue changes the visual balance of the dark mode card.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        
                        {/* Version 3.1: The Local-First Banner */}
                        <ConceptCard 
                            title="3.1 The 'Concierge' Banner" 
                            description="Focuses on trust via explicit region detection. The rescue box is a separate visual unit."
                        >
                            <div className="space-y-8 py-4">
                                <div className="flex justify-center">
                                    <Badge className="bg-authority-green/10 text-authority-green border-authority-green/20 py-1 px-3">
                                        <MapPin className="w-3 h-3 mr-2" /> Detected: Mumbai, India
                                    </Badge>
                                </div>
                                
                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary">₹5,999</p>
                                    <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">One-time payment • Lifetime updates</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-3 bg-alternate-background rounded border border-authority-green/30 flex items-start gap-3">
                                        <Info className="w-4 h-4 text-authority-green shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="text-[11px] font-bold">Outside India?</p>
                                            <button className="text-[10px] text-primary underline font-medium hover:text-primary/80 text-left">
                                                Switch to USD ($) for PayPal/Stripe
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-background/50 rounded-lg p-2 border border-border/50">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 3.2: The Inline Pricing Switcher */}
                        <ConceptCard 
                            title="3.2 The Inline Switch" 
                            description="Tighter hierarchy. The rescue link is directly associated with the price, allowing the button to breathe."
                        >
                            <div className="space-y-8 py-4">
                                <div className="text-center space-y-2">
                                    <div className="flex items-center justify-center gap-2 text-[10px] text-authority-green font-bold">
                                        <Globe className="w-3 h-3" /> LOCALIZED PRICING
                                    </div>
                                    <p className="text-6xl font-black text-primary">₹5,999</p>
                                    <button className="text-[11px] text-primary hover:text-primary/80 flex items-center justify-center gap-1 mx-auto bg-primary/5 px-2 py-1 rounded">
                                        Not in India? <span className="underline">Change to USD ($)</span>
                                    </button>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground px-1">
                                            <Check className="w-3 h-3 text-authority-green" /> Instant Excel Download
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground px-1">
                                            <Check className="w-3 h-3 text-authority-green" /> 1 Free Customization
                                        </div>
                                    </div>
                                    <div className="bg-background/50 rounded-lg p-2 border border-border/50">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <p className="text-[9px] text-center text-muted-foreground italic">UPI, GPay, PhonePe, Cards, Netbanking</p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 3.3: The Single-View Stack */}
                        <ConceptCard 
                            title="3.3 The 'Zero-Decision' Stack" 
                            description="Shows both paths with clear weight. No 'switching' needed, just choose your button."
                        >
                            <div className="space-y-8 py-4">
                                <div className="text-center">
                                    <p className="text-4xl font-black text-primary">₹5,999</p>
                                    <p className="text-xs text-secondary-text">India Edition</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <Label className="text-[10px] uppercase text-muted-foreground tracking-widest pl-1">Primary Payment (India)</Label>
                                        <div className="bg-background/50 rounded-lg p-2 border border-border/50">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        </div>
                                    </div>

                                    <div className="relative flex py-2 items-center">
                                        <div className="flex-grow border-t border-border/50"></div>
                                        <span className="flex-shrink mx-4 text-[10px] text-muted-foreground uppercase">or</span>
                                        <div className="flex-grow border-t border-border/50"></div>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <p className="text-sm font-bold text-muted-foreground">$79 USD</p>
                                        <button className="text-[11px] text-muted-foreground underline hover:text-foreground transition-colors">
                                            International Checkout (Stripe/PayPal)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>

                    <div className="mt-16 p-8 rounded-2xl border-2 border-dashed border-primary/20 bg-background/20 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="text-accent" /> Why the "Branded Button" matters:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm text-secondary-text">
                            <div className="space-y-2">
                                <p><strong className="text-primary-text">Immediate Familiarity:</strong> The blue Razorpay button is a "Trust Anchor" in India. Users recognize the color and font as safe before reading the text.</p>
                                <p><strong className="text-primary-text">Visual Contrast:</strong> In a dark-themed "Black Box" site, the bright blue draws the eye instantly to the point of conversion.</p>
                            </div>
                            <div className="space-y-2">
                                <p><strong className="text-primary-text">Mobile Speed:</strong> On mobile, users scan for the brand they use daily (UPI/Razorpay). These layouts ensure that brand is visible within the first 2 seconds of scrolling.</p>
                                <p><strong className="text-primary-text">Decision Paralysis:</strong> Version 3.3 is the boldest—it assumes the user knows their region and offers the "Safety Valve" (USD) as a clear second-tier option.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
