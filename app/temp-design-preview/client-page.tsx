
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
    Search,
    Lock,
    Scale,
    AlertTriangle,
    FileCheck,
    Download
} from 'lucide-react';
import { RazorpayButton } from '@/components/ui/razorpay-button';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-b border-white/5", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const MobileFrame = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{title}</span>
        <div className="w-[375px] h-[667px] bg-background border-[8px] border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-50" />
            <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
                {children}
            </div>
        </div>
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
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <SectionHeadline>Mobile Hero Lab V1.0</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                       Evaluating 8 high-conversion mobile layouts for the MoreMeets™ Institutional Standard.
                    </p>
                </div>
            </Section>

            {/* MOBILE HERO VARIATIONS */}
            <Section id="mobile-heroes" className="bg-alternate-background/20 border-none">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                        
                        {/* HERO 1: INSTITUTIONAL CENTER */}
                        <MobileFrame title="V1: Institutional Center">
                            <div className="h-full bg-slate-950 flex flex-col items-center justify-center p-8 text-center relative">
                                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">MoreMeets™</span>
                                </div>
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-black tracking-tighter leading-[0.95] text-white">
                                        MEMORY <br/> FAILS. <br/> <span className="text-primary">SYSTEMS</span> <br/> DON'T.
                                    </h1>
                                    <p className="text-sm text-slate-400 leading-relaxed px-4">
                                        The global procurement standard for audit-ready operations.
                                    </p>
                                    <Button className="w-full h-14 bg-primary text-slate-950 font-black uppercase rounded-none">
                                        ACQUIRE ASSET <ArrowRight className="ml-2 w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
                        </MobileFrame>

                        {/* HERO 2: NARRATIVE LAYER */}
                        <MobileFrame title="V2: Narrative Layer">
                            <div className="h-full bg-slate-900 relative">
                                <div className="h-[60%] bg-[url('https://picsum.photos/seed/hotel_ops_pro/800/1200')] bg-cover bg-center grayscale contrast-125" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 w-full p-8 space-y-6">
                                    <Badge className="bg-primary text-slate-950">AUDIT READY</Badge>
                                    <h1 className="text-3xl font-black tracking-tight text-white leading-tight">
                                        People forget. <br/> Your business <br/> shouldn't.
                                    </h1>
                                    <Button className="w-full h-14 bg-white text-slate-950 font-black uppercase rounded-xl">
                                        EXPLORE STANDARDS
                                    </Button>
                                </div>
                            </div>
                        </MobileFrame>

                        {/* HERO 3: THE ACTIVE GRID */}
                        <MobileFrame title="V3: Active Grid">
                            <div className="h-full bg-zinc-950 p-8 flex flex-col">
                                <div className="mt-12 mb-8">
                                    <div className="grid grid-cols-3 gap-1">
                                        {[1,2,3,4,5,6,7,8,9].map(i => (
                                            <div key={i} className="aspect-square bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                {i === 5 ? <Shield className="w-4 h-4 text-primary animate-pulse" /> : <div className="w-1 h-1 rounded-full bg-primary/20" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-black text-white italic">MORE <br/> MEETS.</h1>
                                    <p className="text-lg font-bold text-primary">Compliance Grade SOPs.</p>
                                    <p className="text-xs text-zinc-500">Professional Excel frameworks for institutional risk reduction.</p>
                                    <Button className="mt-4 w-fit px-8 h-12 bg-primary text-zinc-950 font-black rounded-full">
                                        BROWSE LIBRARY
                                    </Button>
                                </div>
                            </div>
                        </MobileFrame>

                        {/* HERO 4: EXECUTIVE MINIMALIST */}
                        <MobileFrame title="V4: Exec Minimalist">
                            <div className="h-full bg-white flex flex-col p-8 justify-between">
                                <div className="mt-12 flex justify-between items-start">
                                    <Landmark className="w-8 h-8 text-black" />
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-zinc-400 uppercase">Version 2025</p>
                                        <p className="text-[10px] font-black text-black uppercase tracking-widest">Licensed Asset</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <h1 className="text-5xl font-black tracking-tighter text-black leading-[0.85]">
                                        STOP <br/> GUESSING. <br/> START <br/> RUNNING.
                                    </h1>
                                    <div className="h-1 w-12 bg-black" />
                                    <p className="text-sm text-zinc-600 font-medium">
                                        The Institutional Standard for operational excellence. One-time purchase. Lifetime ownership.
                                    </p>
                                </div>
                                <Button className="w-full h-16 bg-black text-white font-black text-lg">
                                    GET THE STANDARDS
                                </Button>
                            </div>
                        </MobileFrame>

                        {/* HERO 5: STATUS VERIFIED */}
                        <MobileFrame title="V5: Status Verified">
                            <div className="h-full bg-slate-950 flex flex-col">
                                <div className="bg-primary/20 border-b border-primary/30 p-3 flex justify-between items-center mt-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[9px] font-black text-primary uppercase tracking-widest">System Status: Verified</span>
                                    </div>
                                    <span className="text-[9px] font-black text-primary uppercase">Audit-Ready</span>
                                </div>
                                <div className="flex-1 p-8 flex flex-col justify-center gap-6">
                                    <h1 className="text-4xl font-black text-white leading-none tracking-tight">
                                        INSTITUTIONAL <br/> GRADE <br/> <span className="text-slate-500 font-outline-2">CHECKLISTS</span>
                                    </h1>
                                    <div className="space-y-2">
                                        {["ISO ALIGNED", "OSHA COMPLIANT", "HACCP READY"].map(t => (
                                            <div key={t} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <Check className="w-3 h-3 text-primary" /> {t}
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full h-14 bg-primary text-slate-950 font-black uppercase mt-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                        PROCURE ASSET
                                    </Button>
                                </div>
                            </div>
                        </MobileFrame>

                        {/* HERO 6: THE COMPLIANCE CARD */}
                        <MobileFrame title="V6: Compliance Card">
                            <div className="h-full bg-black relative p-6 flex flex-col justify-end">
                                <video 
                                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                                    autoPlay loop muted playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl space-y-4">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-primary">Operational Blueprint</p>
                                    <h1 className="text-2xl font-black text-white leading-tight">
                                        Eliminate Human Error <br/> From Your Scale.
                                    </h1>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        Professional Excel toolkits for businesses that cannot afford to miss a single step.
                                    </p>
                                    <Button className="w-full h-12 bg-primary text-black font-black uppercase rounded-xl">
                                        VIEW TOOLKITS
                                    </Button>
                                </div>
                            </div>
                        </MobileFrame>

                        {/* HERO 7: GLOBAL MAP GRID */}
                        <MobileFrame title="V7: Global Map">
                            <div className="h-full bg-slate-950 p-8 flex flex-col justify-between">
                                <div className="relative mt-12">
                                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                                    <Globe className="w-12 h-12 text-primary relative z-10" />
                                </div>
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-black text-white leading-tight">
                                        ONE <br/> GLOBAL <br/> STANDARD.
                                    </h1>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <p className="text-xs text-slate-400 italic">"The definitive blueprint for multi-location consistency."</p>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium">
                                        Deploy the MoreMeets™ compliance framework across your entire organization today.
                                    </p>
                                </div>
                                <Button className="w-full h-14 bg-primary text-slate-950 font-black rounded-xl">
                                    START PROCUREMENT
                                </Button>
                            </div>
                        </MobileFrame>

                        {/* HERO 8: PROCUREMENT PRIME */}
                        <MobileFrame title="V8: Procure Prime">
                            <div className="h-full bg-zinc-900 flex flex-col justify-between p-8">
                                <div className="mt-12 flex justify-between items-center">
                                    <Badge variant="outline" className="text-primary border-primary">AUDIT READY</Badge>
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Excel Asset</span>
                                </div>
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-black text-white leading-none">
                                        TRUSTED <br/> BY <br/> OPERATORS.
                                    </h1>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        Don't build from scratch. Procure the verified industry specification and launch tomorrow.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <Button className="w-full h-16 bg-primary text-zinc-950 font-black text-lg shadow-xl shadow-primary/20">
                                        PROCURE NOW
                                    </Button>
                                    <p className="text-center text-[10px] text-zinc-500 uppercase font-black">Institutional License Included</p>
                                </div>
                            </div>
                        </MobileFrame>

                    </div>
                </div>
            </Section>

            {/* PRICING PREVIEW (Context) */}
            <Section id="pricing-context">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <SectionHeadline>Procurement Card: V9.1 (Institutional)</SectionHeadline>
                    </div>
                    <div className="flex justify-center">
                        <Card 
                            className="w-full max-w-[480px] bg-slate-900 border-primary shadow-2xl flex flex-col h-full overflow-hidden ring-1 ring-primary/20 text-white"
                        >
                            <CardHeader className="pb-6 border-b border-white/5 bg-white/[0.01] relative flex flex-col items-center">
                                <CurrencySelector />
                                <div className="w-full flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">COMPLIANCE GRADE</span>
                                    </div>
                                    <Badge variant="outline" className="text-[9px] font-black border-primary/30 text-primary">AUDIT READY</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-8 flex flex-col space-y-8">
                                <div className="space-y-5 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                                    {coreBenefits.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <Check className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                                            <div className="space-y-0.5">
                                                <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                                                <p className="text-xs text-slate-400 leading-tight">{item.subText}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center space-y-6">
                                    <div>
                                        <p className="text-5xl font-black text-white tracking-tighter">
                                            {region === 'INDIA' ? '₹5,999' : '$79'}
                                        </p>
                                        <div className="flex flex-col items-center gap-1 mt-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                <p className="text-[10px] text-primary font-black uppercase tracking-[0.15em] leading-none">
                                                    LIFETIME ORGANIZATION LICENSE
                                                </p>
                                            </div>
                                            <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">• Unlimited Deployment + All Future Versions</p>
                                        </div>
                                    </div>
                                    <Button className="w-full h-14 bg-primary text-slate-950 font-black uppercase text-sm rounded-xl">
                                        PROCURE ASSET <ArrowRight className="ml-2 h-5 w-5"/>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </main>
    );
}
