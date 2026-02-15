
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    Globe, 
    ArrowRight, 
    Smartphone, 
    CreditCard, 
    Landmark, 
    Shield, 
    Info, 
    FileSpreadsheet, 
    CloudOff, 
    Zap, 
    Gift,
    ShieldCheck,
    Lock,
    Sparkles,
    Briefcase,
    QrCode,
    CreditCard as CardIcon
} from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { Button } from '@/components/ui/button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className="w-full py-16 md:py-24 border-b border-white/5" {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, subtitle, children, badge, variant = "default" }: { title: string, subtitle: string, children: React.ReactNode, badge?: string, variant?: "default" | "highlight" }) => (
    <Card 
        style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: variant === "highlight" ? 'hsl(var(--primary))' : 'hsl(var(--border-color))'}} 
        className={cn("w-full border shadow-2xl flex flex-col h-full overflow-hidden transition-all duration-500", variant === "highlight" && "ring-1 ring-primary/20")}
    >
        <CardHeader className="pb-4 border-b border-white/5 bg-white/[0.01]">
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

const BenefitItem = ({ icon: Icon, title, subText }: { icon: any, title: string, subText?: string }) => (
    <div className="flex gap-3 items-start group">
        <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
            <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary" />
        </div>
        <div className="space-y-0.5">
            <p className="text-xs font-bold text-primary-text leading-tight">{title}</p>
            {subText && <p className="text-[10px] text-muted-foreground leading-tight">{subText}</p>}
        </div>
    </div>
);

const IndiaMethods = () => (
    <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-1">
                <QrCode className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">UPI / GPAY</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <CardIcon className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">CARDS</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">NETBANKING</span>
            </div>
        </div>
        <p className="text-[9px] text-muted-foreground font-medium italic">Supports GPay, PhonePe, Paytm, UPI & All Indian Cards</p>
    </div>
);

const GlobalMethods = () => (
    <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-4 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-1">
                <CreditCard className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">STRIPE</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">PAYPAL</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[7px] font-black uppercase">GLOBAL CARDS</span>
            </div>
        </div>
        <p className="text-[9px] text-muted-foreground font-medium italic">Secure International Checkout via Stripe / PayPal</p>
    </div>
);

export default function TempDesignClientPage() {
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>('INDIA');

    const coreBenefits = [
        { icon: FileSpreadsheet, title: "Instant Excel Delivery", subText: "Fully editable .xlsx file" },
        { icon: CloudOff, title: "100% Offline Use", subText: "Internal privacy & security" },
        { icon: Gift, title: "1 Free Customization", subText: "We tailor it to your brand" },
        { icon: Lock, title: "One-Time Purchase", subText: "Lifetime access & updates" }
    ];

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V9.1 Elite Gateway Lab</span>
                        </div>
                        <SectionHeadline>One Standard. Universal Access.</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Refining the professional procurement environment. Comparing the most effective "Intelligent Gateway" architectures.
                        </p>
                        
                        {/* GLOBAL REGION SELECTOR (Simulator Controls) */}
                        <div className="flex flex-col justify-center items-center gap-4 pt-8">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Lab Simulator: Change Region View</span>
                            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 shadow-2xl">
                                <button 
                                    onClick={() => setRegion('INDIA')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🇮🇳</span> India Path
                                </button>
                                <button 
                                    onClick={() => setRegion('GLOBAL')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🌎</span> Global Path
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* VARIATIONS GRID */}
            <Section id="variations" className="bg-alternate-background/20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        
                        {/* 9.1 The Executive Asset Hub */}
                        <ConceptCard 
                            title="Variation 9.1" 
                            subtitle="Institutional Asset Hub"
                            variant="highlight"
                            badge="High Utility"
                        >
                            <div className="flex-1 flex flex-col space-y-6">
                                {/* Asset Spec Block */}
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                                    <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2">
                                        <Briefcase className="w-3 h-3 text-primary/60" />
                                        <p className="text-[9px] font-black uppercase text-primary/60 tracking-widest">Licensed Operational Asset</p>
                                    </div>
                                    <div className="space-y-3">
                                        {coreBenefits.slice(0, 3).map((b, i) => (
                                            <BenefitItem key={i} icon={b.icon} title={b.title} />
                                        ))}
                                    </div>
                                </div>

                                {/* Procurement Zone with Internal Switcher */}
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-end mb-6 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                                        <div className="space-y-1.5">
                                            <p className="text-[8px] font-black uppercase text-primary tracking-tighter">Procurement Gateway</p>
                                            <div className="flex gap-1 bg-black/40 p-0.5 rounded-md">
                                                <button 
                                                    onClick={() => setRegion('INDIA')} 
                                                    className={cn(
                                                        "px-2 py-1 rounded text-[9px] font-black uppercase transition-all", 
                                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-sm" : "text-muted-foreground hover:text-primary-text"
                                                    )}
                                                >
                                                    🇮🇳 India
                                                </button>
                                                <button 
                                                    onClick={() => setRegion('GLOBAL')} 
                                                    className={cn(
                                                        "px-2 py-1 rounded text-[9px] font-black uppercase transition-all", 
                                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-sm" : "text-muted-foreground hover:text-primary-text"
                                                    )}
                                                >
                                                    🌎 Global
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-primary-text tracking-tighter leading-none">
                                                {region === 'INDIA' ? '₹5,999' : '$79'}
                                            </p>
                                            <p className="text-[8px] text-muted-foreground font-bold uppercase mt-1">One-Time Acquisition</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {region === 'INDIA' ? (
                                            <>
                                                <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                                <IndiaMethods />
                                            </>
                                        ) : (
                                            <>
                                                <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-xs rounded-xl shadow-xl hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                                    Acquire Asset (USD) <ArrowRight className="ml-2 w-4 h-4"/>
                                                </Button>
                                                <GlobalMethods />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.2 The Trust Anchor */}
                        <ConceptCard 
                            title="Variation 9.2" 
                            subtitle="Method-First Relief"
                        >
                            <div className="flex-1 flex flex-col">
                                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Available Methods</h4>
                                        {region === 'INDIA' ? <IndiaMethods /> : <GlobalMethods />}
                                    </div>
                                    <div className="space-y-4">
                                        <BenefitItem icon={FileSpreadsheet} title="Instant Excel Download" />
                                        <BenefitItem icon={Gift} title="1 Free Customization Session" />
                                    </div>
                                </div>

                                <div className="mt-auto space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text">{region === 'INDIA' ? '₹5,999' : '$79'}</p>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase mt-1">No Subscription • Lifetime Updates</p>
                                    </div>

                                    {region === 'INDIA' ? <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" /> : <Button className="w-full h-14 bg-accent text-bg-primary font-black uppercase rounded-xl">Unlock Full Toolkit</Button>}
                                    
                                    <div className="flex items-center justify-center gap-2">
                                        <CloudOff className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-[8px] text-muted-foreground uppercase font-black tracking-[0.1em]">100% Offline Access</span>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.3 The Bento Logic Grid */}
                        <ConceptCard 
                            title="Variation 9.3" 
                            subtitle="Utility Bento Grid"
                        >
                            <div className="flex-1 space-y-8">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                        <FileSpreadsheet className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Excel<br/>Standard</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                        <CloudOff className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Privacy<br/>Offline</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                        <Gift className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Free<br/>Custom</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                        <ShieldCheck className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Audit<br/>Ready</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">{region === 'INDIA' ? '₹5,999' : '$79'}</p>
                                </div>

                                <div className="space-y-4">
                                    {region === 'INDIA' ? <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" /> : <Button className="w-full h-14 bg-white text-black font-black uppercase rounded-xl">Get Instant Access</Button>}
                                    <div className="text-center">
                                        <span className="text-[10px] text-muted-foreground font-bold">Pay via {region === 'INDIA' ? 'UPI, GPay or Local Cards' : 'Stripe or Global PayPal'}</span>
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
                            <Zap className="text-accent w-8 h-8" /> V9.1 "Elite Gateway" Principles:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Bi-Lateral Payment Color Logic</p>
                                    <p className="leading-relaxed">India uses the Razorpay Blue path, while Global uses the Brand Green path. This color-coding differentiates the "Payment Pipe" visually, reducing user confusion.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Expanded Method Relief</p>
                                    <p className="leading-relaxed">Explicitly mentioning GPay and PhonePe for Indian users removes the mental friction of wondering if their specific app is supported by the "Razorpay" label.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. The Asset Hub Framing</p>
                                    <p className="leading-relaxed">By grouping Excel, Offline, and Customization as "Specifications," we move the user from a "Buying a File" mindset to an "Acquiring a Licensed Asset" mindset.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Verification Trust Bar</p>
                                    <p className="leading-relaxed">The method-bar changes icons based on the region, confirming that the checkout has been fully localized for their banking standard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
