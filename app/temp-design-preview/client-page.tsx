
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    Globe, 
    ArrowRight, 
    Landmark, 
    Shield, 
    FileSpreadsheet, 
    CloudOff, 
    Zap, 
    Gift,
    ShieldCheck,
    Lock,
    Briefcase,
    QrCode,
    CreditCard as CardIcon,
    History,
    PackageCheck,
    PenTool,
    CheckCircle2,
    ShieldAlert
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
                <CardIcon className="w-3.5 h-3.5" />
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
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>('GLOBAL');

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
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V9.2 Enterprise Standard Hub</span>
                        </div>
                        <SectionHeadline>Universal Standards. Localized Paths.</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Refining the "Institutional Hub" with B2B licensing language and visualization of the tailoring process.
                        </p>
                        
                        {/* GLOBAL REGION SELECTOR (Simulator Controls) */}
                        <div className="flex flex-col justify-center items-center gap-4 pt-8">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Lab Simulator: Current Global Anchor Strategy</span>
                            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 shadow-2xl">
                                <button 
                                    onClick={() => setRegion('GLOBAL')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🌎</span> Global View
                                </button>
                                <button 
                                    onClick={() => setRegion('INDIA')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🇮🇳</span> India View
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
                        
                        {/* 9.1 The Institutional Asset Hub */}
                        <ConceptCard 
                            title="Variation 9.1" 
                            subtitle="The Asset Acquisition Hub"
                            variant="highlight"
                            badge="Recommended"
                        >
                            <div className="flex-1 flex flex-col space-y-6">
                                {/* Asset Spec Block */}
                                <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5 overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-5">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-3 h-3 text-primary/60" />
                                                <p className="text-[9px] font-black uppercase text-primary/60 tracking-widest">Specifications</p>
                                            </div>
                                            <div className="flex gap-1">
                                                <span className="text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-muted-foreground">ISO</span>
                                                <span className="text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-muted-foreground">OSHA</span>
                                                <span className="text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-muted-foreground">HACCP</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {coreBenefits.slice(0, 3).map((b, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                    <p className="text-xs font-bold text-primary-text">{b.title}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Procurement Zone */}
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-end mb-6 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                                        <div className="space-y-2">
                                            <p className="text-[8px] font-black uppercase text-primary tracking-tighter">Select Gateway Pipe</p>
                                            <div className="flex gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5">
                                                <button 
                                                    onClick={() => setRegion('GLOBAL')} 
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-md text-[9px] font-black uppercase transition-all", 
                                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-sm" : "text-muted-foreground hover:text-primary-text"
                                                    )}
                                                >
                                                    🌎 Global
                                                </button>
                                                <button 
                                                    onClick={() => setRegion('INDIA')} 
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-md text-[9px] font-black uppercase transition-all", 
                                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-sm" : "text-muted-foreground hover:text-primary-text"
                                                    )}
                                                >
                                                    🇮🇳 India
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-primary-text tracking-tighter leading-none">
                                                {region === 'INDIA' ? '₹5,999' : '$79'}
                                            </p>
                                            <p className="text-[8px] text-muted-foreground font-black uppercase mt-1.5 tracking-widest">Lifetime Organization License</p>
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
                                                    Procure Asset (USD) <ArrowRight className="ml-2 w-4 h-4"/>
                                                </Button>
                                                <GlobalMethods />
                                            </>
                                        )}
                                    </div>

                                    {/* Detailed Procurement Timeline */}
                                    <div className="mt-10 pt-5 border-t border-white/5">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col items-center gap-2 flex-1">
                                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                                    <PackageCheck className="w-3 h-3 text-primary" />
                                                </div>
                                                <span className="text-[7px] font-black uppercase text-primary">1. Acquire</span>
                                            </div>
                                            <div className="h-px w-8 bg-white/10 mt-3" />
                                            <div className="flex flex-col items-center gap-2 flex-1 opacity-40">
                                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                    <History className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-[7px] font-black uppercase">2. Deliver</span>
                                            </div>
                                            <div className="h-px w-8 bg-white/10 mt-3" />
                                            <div className="flex flex-col items-center gap-2 flex-1 opacity-40">
                                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                    <PenTool className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-[7px] font-black uppercase">3. Tailor</span>
                                            </div>
                                        </div>
                                        <p className="text-[8px] text-center text-muted-foreground mt-4 font-bold uppercase tracking-widest italic">Service-Backed Professional Standard</p>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.2 Method-First Confidence */}
                        <ConceptCard 
                            title="Variation 9.2" 
                            subtitle="Method-First Confidence"
                        >
                            <div className="flex-1 flex flex-col">
                                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mb-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Verified Methods</h4>
                                        <div className="flex gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                            <ShieldCheck className="w-3 h-3 text-primary" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        {region === 'INDIA' ? <IndiaMethods /> : <GlobalMethods />}
                                    </div>
                                    <div className="space-y-4 border-t border-white/5 pt-5">
                                        <BenefitItem icon={FileSpreadsheet} title="Licensed .XLSX Standard" />
                                        <BenefitItem icon={Gift} title="Consultancy Tailoring Included" />
                                    </div>
                                </div>

                                <div className="mt-auto space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 mt-1.5">
                                            <Lock className="w-2.5 h-2.5 text-muted-foreground" />
                                            <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">One-Time Asset Purchase</p>
                                        </div>
                                    </div>

                                    {region === 'INDIA' ? (
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    ) : (
                                        <Button className="w-full h-14 bg-accent text-bg-primary font-black uppercase rounded-xl shadow-lg">
                                            Get Instant Access
                                        </Button>
                                    )}
                                    
                                    <div className="flex items-center justify-center gap-2">
                                        <CloudOff className="w-3 h-3 text-muted-foreground" />
                                        <span className="text-[8px] text-muted-foreground uppercase font-black tracking-[0.2em]">100% Secure Offline Environment</span>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.3 The Utility Portfolio */}
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

                                <div className="text-center p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter leading-none">
                                        {region === 'INDIA' ? '₹5,999' : '$79'}
                                    </p>
                                    <p className="text-[8px] text-muted-foreground font-black uppercase mt-2 tracking-widest">Lifetime Business Rights</p>
                                </div>

                                <div className="space-y-4">
                                    {region === 'INDIA' ? (
                                        <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                    ) : (
                                        <Button className="w-full h-14 bg-white text-black font-black uppercase rounded-xl">Unlock Toolkit</Button>
                                    )}
                                    <div className="flex items-center justify-center gap-2 opacity-50">
                                        <ShieldAlert className="w-3 h-3" />
                                        <span className="text-[8px] font-black uppercase tracking-widest">Encrypted {region === 'INDIA' ? 'Razorpay' : 'Stripe'} Gateway</span>
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
                            <Zap className="text-accent w-8 h-8" /> V9.2 Strategic Refinements:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Professional Licensing Language</p>
                                    <p className="leading-relaxed">Changed "Single License" to "Lifetime Business License." This removes the "individual consumer" friction and frames the purchase as a corporate procurement event.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Standard Validation Tags</p>
                                    <p className="leading-relaxed">Added micro-tags for ISO, OSHA, and HACCP. This provides immediate regulatory context, signaling that these SOPs aren't just templates, but compliant frameworks.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Active Procurement Timeline</p>
                                    <p className="leading-relaxed">The timeline at the bottom of 9.1 now has a "Step 1: Active" state. This visualizes the immediate value realization (Acquire) while promising future value (Tailor).</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Gateway Method Density</p>
                                    <p className="leading-relaxed">Variation 9.2 now emphasizes the "Verified Methods" first. This provides psychological safety for high-ticket transactions before the user sees the price.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
