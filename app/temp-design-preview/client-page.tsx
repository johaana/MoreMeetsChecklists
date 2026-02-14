'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
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
    MonitorPlay,
    Sparkles
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
    <div className="flex items-center justify-center gap-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div className="flex flex-col items-center gap-1">
            <Smartphone className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">UPI</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <CreditCard className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">Cards</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <Landmark className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">Netbanking</span>
        </div>
    </div>
);

const GlobalMethods = () => (
    <div className="flex items-center justify-center gap-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div className="flex flex-col items-center gap-1">
            <CreditCard className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">Stripe</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <Globe className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">PayPal</span>
        </div>
        <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[7px] font-black uppercase">Global Cards</span>
        </div>
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
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V9 Intelligent Gateway Lab</span>
                        </div>
                        <SectionHeadline>One Standard. Universal Access.</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Refining the professional procurement environment. Comparing 5 Variations of the "Intelligent Gateway" Architecture.
                        </p>
                        
                        {/* GLOBAL REGION SELECTOR */}
                        <div className="flex flex-col justify-center items-center gap-4 pt-8">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Select Payment Region</span>
                            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 shadow-2xl">
                                <button 
                                    onClick={() => setRegion('INDIA')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🇮🇳</span> India
                                </button>
                                <button 
                                    onClick={() => setRegion('GLOBAL')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🌎</span> International
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
                        
                        {/* 9.1 The Executive Value Stack */}
                        <ConceptCard 
                            title="Variation 9.1" 
                            subtitle="Executive Value Stack"
                            variant="highlight"
                            badge="High Conversion"
                        >
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    {coreBenefits.slice(0, 3).map((b, i) => (
                                        <BenefitItem key={i} icon={b.icon} title={b.title} subText={b.subText} />
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-center mb-6">
                                        <p className="text-5xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase mt-1">Professional License • One-Time Payment</p>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {region === 'INDIA' ? (
                                            <>
                                                <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                                <IndiaMethods />
                                            </>
                                        ) : (
                                            <>
                                                <Button className="w-full h-14 bg-accent text-bg-primary font-black uppercase text-xs rounded-xl shadow-xl hover:bg-accent/90">Secure USD Checkout <ArrowRight className="ml-2 w-4 h-4"/></Button>
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
                                        <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Gateway Ready</h4>
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

                                    {region === 'INDIA' ? <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" /> : <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase rounded-xl">Unlock Full Toolkit</Button>}
                                    
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
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center">
                                        <FileSpreadsheet className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Excel<br/>Standard</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center">
                                        <CloudOff className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Privacy<br/>Offline</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center">
                                        <Gift className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Free<br/>Custom</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 flex flex-col items-center text-center">
                                        <ShieldCheck className="w-5 h-5 text-accent" />
                                        <p className="text-[9px] font-black text-primary-text leading-tight uppercase">Audit<br/>Ready</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p className="text-5xl font-black text-primary-text tracking-tighter">{region === 'INDIA' ? '₹5,999' : '$79'}</p>
                                </div>

                                <div className="space-y-4">
                                    {region === 'INDIA' ? <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" /> : <Button className="w-full h-14 bg-white text-black font-black uppercase">Get Instant Access</Button>}
                                    <div className="text-center">
                                        <span className="text-[10px] text-muted-foreground font-bold">Pay via {region === 'INDIA' ? 'UPI, GPay or Local Cards' : 'Stripe or Global PayPal'}</span>
                                    </div>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.4 The Enterprise Procurement */}
                        <ConceptCard 
                            title="Variation 9.4" 
                            subtitle="Professional Asset"
                        >
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Procure the world's most comprehensive operational standard. One-time licensing for internal distribution.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-primary-text font-bold">
                                            <Check className="w-4 h-4 text-authority-green" />
                                            <span>One-Time Licensing Fee</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-primary-text font-bold">
                                            <Check className="w-4 h-4 text-authority-green" />
                                            <span>100% Offline Utility</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-primary-text font-bold">
                                            <Check className="w-4 h-4 text-authority-green" />
                                            <span>1 Free Branding Personalization</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 space-y-4">
                                    <div className="flex justify-between items-center px-2">
                                        <span className="text-[10px] font-black uppercase text-muted-foreground">Asset Price</span>
                                        <span className="text-2xl font-black text-primary-text">{region === 'INDIA' ? '₹5,999' : '$79'}</span>
                                    </div>
                                    {region === 'INDIA' ? <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" /> : <Button variant="outline" className="w-full h-12 font-black uppercase">Secure Checkout</Button>}
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.5 The Signature Pulse */}
                        <ConceptCard 
                            title="Variation 9.5" 
                            subtitle="Signature Minimalist"
                        >
                            <div className="flex-1 flex flex-col">
                                <div className="space-y-6 flex-1">
                                    <div className="text-center py-4">
                                        <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full mb-6" />
                                        <p className="text-6xl font-black text-primary-text tracking-tighter mb-2">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <Badge variant="outline" className="text-[8px] border-white/10 text-muted-foreground uppercase font-black px-3">Lifetime License</Badge>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 px-2">
                                        <div className="flex items-start gap-3">
                                            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p className="text-xs font-bold text-primary-text leading-tight">Included: 1 Customization Session</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <FileSpreadsheet className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <p className="text-xs font-bold text-primary-text leading-tight">Editable Offline Excel Tool</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 space-y-4">
                                    <div className="p-1 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-xl">
                                        {region === 'INDIA' ? (
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                        ) : (
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase rounded-lg">Get Instant Access</Button>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Trusted by 1,200+ Organizations</p>
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
                            <Zap className="text-accent w-8 h-8" /> V9 "Intelligent Gateway" Principles:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Explicit Benefit Stacking</p>
                                    <p className="leading-relaxed">By listing "Excel Delivery" and "Offline Use" alongside "1 Free Customization," we justify the price as a professional asset acquisition rather than just a file download.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Honest Choice Architecture</p>
                                    <p className="leading-relaxed">Removed "Location Detected" text. The user is now given agency via a high-end toggle, which feels like a professional "Gateway Selector."</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Method Reassurance</p>
                                    <p className="leading-relaxed">Subtle descriptors for UPI, GPay, and Stripe answer the "Can I pay?" question at the point of decision, reducing final-step anxiety.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Clean Hierarchy</p>
                                    <p className="leading-relaxed">The UI moves from Benefits → Region Selection → Pricing → Action. It is a logical, persuasive funnel contained within a single card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
