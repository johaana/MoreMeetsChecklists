
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
    ShieldCheck, 
    Zap, 
    Award,
    QrCode,
    CreditCard as CardIcon,
    Shield,
    Trophy,
    UserCheck,
    Search,
    Lock,
    Scale,
    Map
} from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        <CardHeader className="pb-4 border-b border-white/5 bg-white/[0.01] relative">
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

const BenefitList = ({ items, type }: { items: any[], type: 'bullet' | 'green-check' | 'gold-check' | 'mixed-check' }) => (
    <div className="space-y-4">
        {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 group">
                <div className="mt-1 shrink-0">
                    {type === 'bullet' && <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1" />}
                    {type === 'green-check' && <Check className="w-4 h-4 text-primary" />}
                    {type === 'gold-check' && <Check className="w-4 h-4 text-accent" />}
                    {type === 'mixed-check' && (
                        i === 3 ? <Check className="w-4 h-4 text-accent" /> : <Check className="w-4 h-4 text-primary" />
                    )}
                </div>
                <div className="space-y-0.5">
                    <p className="text-xs font-bold text-primary-text leading-tight">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{item.subText}</p>
                </div>
            </div>
        ))}
    </div>
);

const Timeline = ({ activeStep }: { activeStep: number }) => (
    <div className="mt-8 pt-5 border-t border-white/5 flex justify-between items-center">
        <div className="flex flex-col gap-1 items-center">
            <span className={cn("text-[7px] font-black uppercase tracking-widest", activeStep === 1 ? "text-primary" : "text-muted-foreground opacity-40")}>1. Acquire</span>
            {activeStep === 1 && <div className="w-full h-0.5 bg-primary rounded-full" />}
        </div>
        <div className="h-px flex-1 bg-white/10 mx-2" />
        <span className="text-[7px] font-black uppercase text-muted-foreground opacity-40 tracking-widest">2. Deliver</span>
        <div className="h-px flex-1 bg-white/10 mx-2" />
        <span className="text-[7px] font-black uppercase text-muted-foreground opacity-40 tracking-widest">3. Tailor</span>
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
        <p className="text-[9px] text-muted-foreground font-medium italic">Tax Invoice provided for GST input credit</p>
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
        { title: "Instant Excel Delivery", subText: "Fully editable professional .xlsx file" },
        { title: "100% Offline Use", subText: "Internal data privacy & security" },
        { title: "Unlimited Internal Rights", subText: "Deploy across your entire organization" },
        { title: "1 Free Customization", subText: "Tailored to your specific brand/workflow" }
    ];

    const CurrencySelector = () => (
        <div className="flex justify-center mb-8">
            <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-fit">
                <TabsList className="bg-white/5 border border-white/10 h-8 p-0.5 rounded-full px-1">
                    <TabsTrigger 
                        value="GLOBAL" 
                        className="text-[9px] font-black uppercase px-4 h-7 rounded-full data-[state=active]:bg-white/10 data-[state=active]:text-primary flex items-center gap-2"
                    >
                        <Globe className="w-3.5 h-3.5" /> GLOBAL ($)
                    </TabsTrigger>
                    <TabsTrigger 
                        value="INDIA" 
                        className="text-[9px] font-black uppercase px-4 h-7 rounded-full data-[state=active]:bg-white/10 data-[state=active]:text-primary flex items-center gap-2"
                    >
                        <Landmark className="w-3.5 h-3.5" /> INDIA (₹)
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V9.6 Authority Lab</span>
                        </div>
                        <SectionHeadline>Enterprise Asset Acquisition.</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Refining institutional trust signals, localized currency pipes, and high-fidelity procurement workflows.
                        </p>
                    </div>
                </div>
            </Section>

            {/* VARIATIONS GRID */}
            <Section id="variations" className="bg-alternate-background/20 border-none">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
                        
                        {/* 9.1 Improvised: The Executive Standard */}
                        <ConceptCard 
                            title="Variation 9.1" 
                            subtitle="Licensed B2B Asset"
                            badge="Institutional"
                            variant="highlight"
                        >
                            <CurrencySelector />
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5 relative overflow-hidden">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-primary" />
                                            <p className="text-[10px] font-black uppercase text-primary tracking-widest">Elite Specification</p>
                                        </div>
                                        <Badge variant="outline" className="text-[8px] border-primary/30 text-primary">AUDIT READY</Badge>
                                    </div>
                                    <BenefitList items={coreBenefits} type="green-check" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <div className="flex flex-col items-center gap-1 mt-1">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                                <p className="text-[8px] text-primary font-black uppercase tracking-[0.15em] leading-none">
                                                    LIFETIME ORGANIZATION LICENSE
                                                </p>
                                            </div>
                                            <p className="text-[8px] text-muted-foreground uppercase font-black tracking-widest">• Unlimited Internal Rights</p>
                                        </div>
                                    </div>
                                    
                                    {region === 'INDIA' ? (
                                        <div className="space-y-4">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-xs rounded-xl shadow-xl hover:bg-primary/90 transition-all active:scale-95">
                                                PROCURE ASSET <ArrowRight className="ml-2 w-4 h-4"/>
                                            </Button>
                                            <GlobalMethods />
                                        </div>
                                    )}
                                    <Timeline activeStep={1} />
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.2 Improvised: Compliance Confidence */}
                        <ConceptCard 
                            title="Variation 9.2" 
                            subtitle="Security Standard"
                        >
                            <CurrencySelector />
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <p className="text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-2">
                                            <Lock className="w-3.5 h-3.5" /> Zero Data Exposure
                                        </p>
                                        <Scale className="w-3.5 h-3.5 text-primary/40" />
                                    </div>
                                    <BenefitList items={coreBenefits} type="green-check" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <Badge variant="outline" className="border-white/10 text-[8px] font-black uppercase tracking-widest text-muted-foreground">Internal Implementation Only</Badge>
                                    </div>

                                    {region === 'INDIA' ? (
                                        <div className="space-y-4">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-xs rounded-xl hover:bg-primary/90 transition-all active:scale-95">
                                                START IMPLEMENTATION
                                            </Button>
                                            <GlobalMethods />
                                        </div>
                                    )}
                                    <Timeline activeStep={1} />
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.3 Improvised: Elite Premium */}
                        <ConceptCard 
                            title="Variation 9.3" 
                            subtitle="Gold Tier Standard"
                        >
                            <CurrencySelector />
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 space-y-5">
                                    <div className="flex justify-between items-center border-b border-accent/10 pb-3">
                                        <p className="text-[10px] font-black uppercase text-accent tracking-widest flex items-center gap-2">
                                            <Trophy className="w-3.5 h-3.5" /> Elite Service Model
                                        </p>
                                        <Award className="w-4 h-4 text-accent" />
                                    </div>
                                    <BenefitList items={coreBenefits} type="mixed-check" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="flex flex-col items-center gap-1">
                                        <p className="text-5xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-accent">Service-Backed Premium Asset</p>
                                    </div>

                                    {region === 'INDIA' ? (
                                        <div className="space-y-4">
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <Button 
                                                className="w-full h-14 bg-white text-black font-black uppercase rounded-xl hover:bg-white/90 transition-all active:scale-95 chasing-border-button shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                                style={{'--chasing-color': 'hsl(var(--accent))'} as any}
                                            >
                                                SECURE CHECKOUT
                                            </Button>
                                            <GlobalMethods />
                                        </div>
                                    )}
                                    <Timeline activeStep={1} />
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
                            <Search className="text-accent w-8 h-8" /> V9.6 Authority Audit:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. Institutional Locality</p>
                                    <p className="leading-relaxed">Renamed currency pipes to "GLOBAL" and "INDIA" with corresponding iconography. This shifts the focus from "money" to "territorial alignment."</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Executive Affirmation (9.1)</p>
                                    <p className="leading-relaxed">Implemented checkmarks in the baseline variation. Psychologically, ticks signal "Requirements Met," which is critical for B2B procurement confidence.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Rights-First Anchoring</p>
                                    <p className="leading-relaxed">Explicitly added "Unlimited Internal Rights" micro-copy. In large organizations, the legal right to deploy is the primary barrier to purchase.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Service-Level Separation (9.3)</p>
                                    <p className="leading-relaxed">Used gold specifically for the "1 Free Customization" point. This visually justifies the price by separating the human service from the technical tool.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
