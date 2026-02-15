
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
    ShieldAlert,
    PackageCheck,
    Lock
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

const BenefitList = ({ items, type }: { items: any[], type: 'bullet' | 'green-check' | 'gold-check' }) => (
    <div className="space-y-4">
        {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 group">
                <div className="mt-1 shrink-0">
                    {type === 'bullet' && <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1" />}
                    {type === 'green-check' && <Check className="w-4 h-4 text-primary" />}
                    {type === 'gold-check' && <Check className="w-4 h-4 text-accent" />}
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
    <div className="mt-10 pt-5 border-t border-white/5 flex justify-between items-center">
        <span className={cn("text-[7px] font-black uppercase transition-colors tracking-widest", activeStep === 1 ? "text-primary" : "text-muted-foreground opacity-40")}>1. Acquire</span>
        <div className="h-px flex-1 bg-white/10 mx-2" />
        <span className={cn("text-[7px] font-black uppercase transition-colors tracking-widest", activeStep === 2 ? "text-primary" : "text-muted-foreground opacity-40")}>2. Deliver</span>
        <div className="h-px flex-1 bg-white/10 mx-2" />
        <span className={cn("text-[7px] font-black uppercase transition-colors tracking-widest", activeStep === 3 ? "text-primary" : "text-muted-foreground opacity-40")}>3. Tailor</span>
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
        { title: "Instant Excel Delivery", subText: "Fully editable professional .xlsx file" },
        { title: "100% Offline Use", subText: "Internal data privacy & security" },
        { title: "1 Free Customization", subText: "Tailored to your specific brand/workflow" },
        { title: "Lifetime Access", subText: "One-time purchase, all future updates" }
    ];

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12">
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">V9.3 Intelligent Gateway Lab</span>
                        </div>
                        <SectionHeadline>Global Anchoring. Executive Verification.</SectionHeadline>
                        <p className="text-xl max-w-2xl mx-auto" style={{color: 'hsl(var(--text-secondary))'}}>
                           Comparing elite specifications vs authority green vs elite gold verification signals.
                        </p>
                        
                        {/* GLOBAL REGION SELECTOR */}
                        <div className="flex flex-col justify-center items-center gap-4 pt-8">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Select Payment Region</span>
                            <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 shadow-2xl">
                                <button 
                                    onClick={() => setRegion('GLOBAL')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'GLOBAL' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🌎</span> Global Pipe
                                </button>
                                <button 
                                    onClick={() => setRegion('INDIA')}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-tighter transition-all",
                                        region === 'INDIA' ? "bg-primary text-bg-primary shadow-lg" : "text-muted-foreground hover:text-primary-text"
                                    )}
                                >
                                    <span className="text-base leading-none">🇮🇳</span> India Pipe
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
                        
                        {/* 9.1 Baseline: The Elite Asset */}
                        <ConceptCard 
                            title="Variation 9.1" 
                            subtitle="Baseline: The Institutional Hub"
                            badge="Premium Asset"
                            variant="highlight"
                        >
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5 relative overflow-hidden">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <p className="text-[9px] font-black uppercase text-primary tracking-widest flex items-center gap-2">
                                            <Award className="w-3 h-3" /> Elite Specifications
                                        </p>
                                        <div className="flex gap-1">
                                            <span className="text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-muted-foreground uppercase">ISO</span>
                                            <span className="text-[7px] font-black bg-white/5 px-1.5 py-0.5 rounded text-muted-foreground uppercase">HACCP</span>
                                        </div>
                                    </div>
                                    <BenefitList items={coreBenefits} type="bullet" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <p className="text-[8px] text-muted-foreground font-black uppercase mt-1 tracking-widest leading-none">
                                            Lifetime Organization License • Unlimited Internal Rights
                                        </p>
                                    </div>
                                    
                                    {region === 'INDIA' ? (
                                        <>
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </>
                                    ) : (
                                        <>
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-xs rounded-xl shadow-xl hover:bg-primary/90">
                                                Procure Asset (USD) <ArrowRight className="ml-2 w-4 h-4"/>
                                            </Button>
                                            <GlobalMethods />
                                        </>
                                    )}
                                    <Timeline activeStep={1} />
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.2 Refinement A: Green Authority */}
                        <ConceptCard 
                            title="Variation 9.2" 
                            subtitle="Authority: Green Checkmarks"
                        >
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <p className="text-[9px] font-black uppercase text-primary tracking-widest">Verified Standards</p>
                                        <ShieldAlert className="w-3 h-3 text-primary" />
                                    </div>
                                    <BenefitList items={coreBenefits} type="green-check" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="text-center">
                                        <p className="text-4xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <p className="text-[8px] text-muted-foreground font-black uppercase mt-1 tracking-widest leading-none">Instant Asset Delivery • Unlimited Internal Rights</p>
                                    </div>

                                    {region === 'INDIA' ? (
                                        <>
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </>
                                    ) : (
                                        <>
                                            <Button className="w-full h-14 bg-primary text-bg-primary font-black uppercase text-xs rounded-xl hover:bg-primary/90">
                                                Unlock Asset Path
                                            </Button>
                                            <GlobalMethods />
                                        </>
                                    )}
                                    <Timeline activeStep={1} />
                                </div>
                            </div>
                        </ConceptCard>

                        {/* 9.3 Refinement B: Gold Premium */}
                        <ConceptCard 
                            title="Variation 9.3" 
                            subtitle="Premium: Elite Gold Path"
                        >
                            <div className="flex-1 flex flex-col space-y-6">
                                <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 space-y-5">
                                    <div className="flex justify-between items-center border-b border-accent/10 pb-3">
                                        <p className="text-[9px] font-black uppercase text-accent tracking-widest">Elite Specifications</p>
                                        <Award className="w-3 h-3 text-accent" />
                                    </div>
                                    <BenefitList items={coreBenefits} type="gold-check" />
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                                    <div className="flex flex-col items-center gap-1">
                                        <p className="text-5xl font-black text-primary-text tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <Badge variant="outline" className="border-accent/30 text-accent text-[8px] font-black px-2 uppercase tracking-widest">Service-Backed Procurement</Badge>
                                    </div>

                                    {region === 'INDIA' ? (
                                        <>
                                            <RazorpayButton paymentId="pl_RaWEBHhFLQENxC" />
                                            <IndiaMethods />
                                        </>
                                    ) : (
                                        <>
                                            <Button className="w-full h-14 bg-white text-black font-black uppercase rounded-xl hover:bg-white/90">Secure Checkout</Button>
                                            <GlobalMethods />
                                        </>
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
                            <PackageCheck className="text-accent w-8 h-8" /> V9.3 Institutional Evolution:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 text-base text-secondary-text">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">1. The "Elite Asset" Framing</p>
                                    <p className="leading-relaxed">Variation 9.1 now explicitly brands the contents as "Elite Specifications" and adds an "Unlimited Internal Rights" clause, removing purchase friction for corporate buyers.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">2. Journey Contextualization</p>
                                    <p className="leading-relaxed">The bottom timeline now highlights the "Acquire" stage, visually telling the user that they are initiating a professional onboarding process.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">3. Global-First Anchor</p>
                                    <p className="leading-relaxed">By defaulting to $79, we establish the international value benchmark before allowing the user to discover their localized payment path.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary-text font-headline font-bold text-lg">4. Verification Logic</p>
                                    <p className="leading-relaxed">Variations 9.2 and 9.3 test different icon-based trust signals (Authority Green vs Elite Gold) to see which resonates more with the target audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
