
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Info, Globe, MapPin, Check, ShieldCheck, Zap, Lock, CreditCard, Wallet, Smartphone, Landmark, Search, HelpCircle } from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-b border-border/50", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, description, children, badge, variant = "default" }: { title: string, description: string, children: React.ReactNode, badge?: string, variant?: "default" | "highlight" }) => (
    <Card 
        style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: variant === "highlight" ? 'hsl(var(--primary))' : 'hsl(var(--border-color))'}} 
        className={cn("w-full border-2 shadow-lg flex flex-col h-full overflow-hidden transition-all duration-300", variant === "highlight" && "ring-4 ring-primary/10")}
    >
        <CardHeader className="pb-4">
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl" style={{color: 'hsl(var(--text-primary))'}}>{title}</CardTitle>
                {badge && <Badge variant="accent" className="bg-primary/20 text-primary border-primary/30 uppercase text-[10px] tracking-wider">{badge}</Badge>}
            </div>
            <CardDescription style={{color: 'hsl(var(--text-on-light))'}} className="text-xs">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
            {children}
        </CardContent>
    </Card>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="intro">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <Badge variant="outline" className="border-primary text-primary px-4 py-1">UX RESEARCH LAB</Badge>
                        <SectionHeadline>Location-Aware Checkout: The "Concierge" Evolution</SectionHeadline>
                        <p className="text-lg" style={{color: 'hsl(var(--text-secondary))'}}>
                           We are testing 8 variations of the "India-First" checkout. The goal is to make the <strong>Razorpay Button</strong> feel like the native, pre-destined path for 90% of users while providing a non-obstructive escape for the 10% using global cards.
                        </p>
                    </div>
                </div>
            </Section>

            {/* NEW BATCH: VERSIONS 4.1 - 4.5 */}
            <Section id="new-concepts" className="bg-alternate-background/30">
                <div className="container px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h3 className="text-2xl font-bold font-headline text-primary mb-2 italic">The "Expert Tier" Variations</h3>
                        <p className="text-sm text-muted-foreground">Focusing on high-ticket B2B psychological triggers.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        
                        {/* Version 4.1: The Ambient Shield */}
                        <ConceptCard 
                            title="4.1 The Ambient Shield" 
                            description="Focus: Security & Location Integrity. Integrates the 'Detected' status into a top-level security tab."
                        >
                            <div className="relative mt-2 border border-border/50 rounded-xl bg-background/20 p-6 space-y-6">
                                <div className="absolute -top-3 left-4">
                                    <Badge className="bg-authority-green text-bg-primary border-none text-[10px] font-black">
                                        <ShieldCheck className="w-3 h-3 mr-1" /> SECURE INDIA CHECKOUT
                                    </Badge>
                                </div>
                                <div className="text-center space-y-1 pt-2">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">India Local Edition</p>
                                    <p className="text-5xl font-black text-primary">₹5,999</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col gap-2 border-y border-border/30 py-4">
                                        <div className="flex items-center gap-3 text-sm text-secondary-text">
                                            <div className="bg-authority-green/10 p-1 rounded"><Check className="w-3 h-3 text-authority-green" /></div>
                                            Instant Excel Download
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-secondary-text">
                                            <div className="bg-authority-green/10 p-1 rounded"><Check className="w-3 h-3 text-authority-green" /></div>
                                            1 Free Customization
                                        </div>
                                    </div>
                                    <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    <div className="flex justify-between items-center text-[9px] text-muted-foreground px-1 uppercase tracking-tighter font-bold">
                                        <span>UPI • NETBANKING • CARDS</span>
                                        <button className="text-primary hover:underline">Global Version ($)?</button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 4.2: The "Reference Anchor" */}
                        <ConceptCard 
                            title="4.2 The Value Anchor" 
                            description="Psychology: Frames the local price as a region-locked saving against the global $79 standard."
                        >
                            <div className="space-y-6 py-4">
                                <div className="bg-primary/5 border-l-4 border-primary p-3 rounded-r-md">
                                    <p className="text-[10px] text-primary font-bold uppercase">Region Unlocked: India</p>
                                    <p className="text-[11px] text-secondary-text">Standard Global Price: <span className="line-through">$79 (~₹6,600)</span></p>
                                </div>
                                <div className="text-center">
                                    <p className="text-6xl font-black text-primary tracking-tighter">₹5,999</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">Special Localized Pricing</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <div className="p-3 bg-alternate-background rounded-lg border border-dashed border-border/50 flex items-center justify-between">
                                        <p className="text-[10px] text-muted-foreground">Using a Non-Indian Card?</p>
                                        <button className="text-[10px] text-primary font-bold underline">Switch to USD</button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 4.3: The "Method Bar" Architecture */}
                        <ConceptCard 
                            title="4.3 The Method Focus" 
                            description="UX Goal: Removes decision paralysis by showing exactly which apps will work before the click."
                        >
                            <div className="space-y-6 py-4">
                                <div className="flex justify-center items-center gap-4 border-b border-border/30 pb-4">
                                    <div className="flex flex-col items-center gap-1 opacity-60">
                                        <Smartphone className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">UPI</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 opacity-60">
                                        <Landmark className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">BANK</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 opacity-60">
                                        <CreditCard className="w-4 h-4" />
                                        <span className="text-[8px] font-bold">CARDS</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Badge variant="outline" className="text-[9px] text-authority-green border-authority-green/30 mb-2">LOCAL PAYMENT ENABLED</Badge>
                                    <p className="text-5xl font-black text-primary">₹5,999</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="space-y-2 text-[11px] text-secondary-text bg-background/30 p-3 rounded-lg">
                                        <div className="flex justify-between"><span>Excel Toolkit</span> <span>Included</span></div>
                                        <div className="flex justify-between font-bold text-primary"><span>Local Customization</span> <span>Free</span></div>
                                    </div>
                                    <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    <p className="text-center text-[10px] text-muted-foreground underline cursor-pointer hover:text-primary">International Buyer? Change to USD ($)</p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 4.4: The "Floating Detection" */}
                        <ConceptCard 
                            title="4.4 The Detection Pulse" 
                            description="Focus: High-tech minimalist. The card 'responds' to the user's location with a live badge."
                        >
                            <div className="space-y-8 py-6">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-authority-green rounded-full animate-ping opacity-25"></div>
                                        <MapPin className="w-4 h-4 text-authority-green relative z-10" />
                                    </div>
                                    <span className="text-[11px] font-bold text-secondary-text tracking-tight">Mumbai, India detected</span>
                                </div>
                                <div className="text-center group">
                                    <p className="text-sm text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">One-Time Fee</p>
                                    <p className="text-6xl font-black text-primary tracking-tighter group-hover:scale-105 transition-transform duration-500">₹5,999</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-background/50 rounded-xl p-2 border-2 border-border/20">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <p className="text-[10px] text-muted-foreground">Supported: GPay, PhonePe, UPI, Local Visa/Master</p>
                                        <button className="text-[10px] text-primary font-medium hover:underline flex items-center justify-center gap-1 mx-auto">
                                            <Globe className="w-3 h-3" /> Not in India? Switch to Global USD ($)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 4.5: The "Authority Frame" */}
                        <ConceptCard 
                            title="4.5 The Authority Frame" 
                            description="Design: Institutional & Heavy. Frames the checkout as a formal 'India-Edition' procurement path."
                        >
                            <div className="bg-alternate-background rounded-xl overflow-hidden border border-border/50">
                                <div className="bg-secondary/50 px-4 py-2 border-b border-border/50 flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-tighter">Procurement: India</span>
                                    <Lock className="w-3 h-3 text-muted-foreground" />
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="text-center space-y-1">
                                        <p className="text-4xl font-black text-primary">₹5,999</p>
                                        <p className="text-[10px] text-muted-foreground">All local taxes included</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-secondary-text">
                                            <Check className="w-3 h-3 text-authority-green" /> Verifiable Audit-Ready Data
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-secondary-text">
                                            <Check className="w-3 h-3 text-authority-green" /> Full Excel Source File
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <button className="w-full text-center text-[10px] text-muted-foreground/50 hover:text-primary transition-colors">
                                        Switch to International Gateway (Stripe/PayPal)
                                    </button>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>
                </div>
            </Section>

            {/* ORIGINAL BATCH: VERSIONS 3.1 - 3.3 (For comparison) */}
            <Section id="original-concepts">
                <div className="container px-4 md:px-6">
                    <div className="mb-12 text-center">
                        <h3 className="text-2xl font-bold font-headline text-muted-foreground/50">Comparison Suite: The Original Iterations</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto opacity-70 hover:opacity-100 transition-opacity">
                        
                        {/* Version 3.1: The Local-First Banner */}
                        <ConceptCard 
                            title="3.1 The 'Concierge' Banner" 
                            description="Focuses on trust via explicit region detection."
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
                                    <div className="space-y-2 px-1">
                                        <div className="flex items-center gap-2 text-sm text-secondary-text">
                                            <Check className="w-4 h-4 text-authority-green" /> Instant Excel Download
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-secondary-text">
                                            <Check className="w-4 h-4 text-authority-green" /> 1 Free Customization
                                        </div>
                                    </div>
                                    <div className="bg-background/50 rounded-lg p-2 border border-border/50">
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    </div>
                                    <p className="text-[10px] text-center text-muted-foreground italic">UPI, GPay, PhonePe, Cards, Netbanking</p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Version 3.2: The Inline Switch */}
                        <ConceptCard 
                            title="3.2 The Inline Switch" 
                            description="Tighter hierarchy. Rescue link association."
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

                        {/* Version 3.3: The 'Zero-Decision' Stack */}
                        <ConceptCard 
                            title="3.3 The Zero-Decision Stack" 
                            description="Shows both paths with clear weight."
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
                </div>
            </Section>

            {/* Analysis Section */}
            <Section className="bg-bg-primary">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto p-8 rounded-3xl border-2 border-dashed border-primary/20 bg-surface-card/50">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
                            <Zap className="text-accent" /> Why "Location Certainty" drives B2B conversions:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-secondary-text">
                            <div className="space-y-4">
                                <p><strong className="text-primary-text font-headline">The Local Advantage (v4.2):</strong> By showing the $79 reference price, you create a "Price Anchor." The user in India feels they are getting a tailored, subsidized version of a global high-value product.</p>
                                <p><strong className="text-primary-text font-headline">The Authority Seal (v4.5):</strong> Business owners want to know they are entering a "Compliant Flow." Using terminology like "India-Standard Checkout" makes the purchase feel like a professional procurement step, not just an internet transaction.</p>
                            </div>
                            <div className="space-y-4">
                                <p><strong className="text-primary-text font-headline">Method Relatability (v4.3):</strong> For many in India, "Credit Card" means friction (OTP, 3D Secure). Seeing "UPI" and "GPay" visually before the price establishes that the checkout will be fast—reducing the "I'll do it later" bounce rate.</p>
                                <p><strong className="text-primary-text font-headline">Decision Redundancy:</strong> The goal of these variations is to make the Razorpay button the "Natural Default." Version 4.1 is likely the strongest balance between "Trust" and "Speed."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
