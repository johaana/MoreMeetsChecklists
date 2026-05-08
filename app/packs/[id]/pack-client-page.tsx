'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    LayoutGrid,
    Target,
    ArrowRight,
    Check,
    Activity,
    ShieldCheck,
    CheckCircle2,
    Zap,
    ShieldAlert,
    Smartphone,
    Users,
    History,
    GraduationCap,
    FileSpreadsheet,
    AlertTriangle,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';
import { packResolutions, defaultResolution } from '@/lib/pack-resolutions';
import { IconComponent } from '@/components/icons';

function Section({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) {
    return (
        <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
            {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
            <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}

function PulsatingStressText({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) {
    return (
        <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
            <span className="text-[11px] md:text-[14px] font-black text-red-600/60 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.1)] leading-tight block text-left lg:text-right">
                {text}
            </span>
        </div>
    );
}

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const res = packResolutions[pack.id] || defaultResolution;
    
    const getVerticalName = (p: PremiumPack) => {
        const title = p.title.toLowerCase();
        if (title.includes('restaurant')) return 'restaurants';
        if (title.includes('hotel')) return 'hotels';
        if (title.includes('hospital')) return 'hospitals';
        if (title.includes('cinema')) return 'cinemas';
        if (title.includes('school')) return 'schools';
        if (title.includes('retail')) return 'retail stores';
        if (title.includes('franchise')) return 'franchises';
        if (title.includes('facility')) return 'facilities';
        return p.category.toLowerCase() + 's';
    };
    const verticalName = getVerticalName(pack);

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-primary/20">
            
            {/* --- HERO SECTION --- */}
            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img src={heroImageUrl} alt="" className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/70 to-transparent" />
                </div>

                <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-32 pb-16">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                        <div className="space-y-20 w-full">
                            <div className="space-y-10">
                                <h1 className="font-black font-headline text-[32px] md:text-[44px] lg:text-[54px] xl:text-[60px] leading-none uppercase italic tracking-tighter text-white lg:whitespace-nowrap">
                                    {res.heroTitle || pack.title.toUpperCase()}
                                </h1>
                                <div className="space-y-10">
                                    <p className="text-lg md:text-[26px] font-medium text-zinc-300 max-w-3xl leading-tight">
                                        {res.heroSubline}
                                    </p>
                                    <div className="space-y-4 border-l-2 border-primary/40 pl-8">
                                        <p className="text-sm md:text-base text-zinc-300 font-bold max-w-xl leading-relaxed italic">
                                            {res.strategicParagraph}
                                        </p>
                                        <p className="text-[10px] md:text-[12px] text-emerald-500/50 font-black uppercase tracking-[0.25em] italic">
                                            Built in Excel. Shared through Google Sheets. No app rollout required.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.5em] italic font-headline">SYSTEM SPECIFICATIONS</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        { t: `Pre-built operational SOPs for ${verticalName}`, i: Target },
                                        { t: "Live Operational Dashboard", i: Activity },
                                        { t: "Trainer Notes Included", i: GraduationCap },
                                        { t: "Editable Operational Infrastructure", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-3 h-3 text-[#22C55E]" />
                                            </div>
                                            <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.1em] italic leading-tight text-white/70 group-hover:text-white transition-colors">
                                                {item.t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8 pt-6">
                                <div className="space-y-4">
                                    <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4">
                                        <Link href="#pricing">
                                            LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-zinc-950 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <p className="text-[10px] md:text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em] italic pl-1 text-center sm:text-left">
                                        ONE-TIME PURCHASE • OWN FOREVER • NO SUBSCRIPTIONS
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-24 lg:mt-0 space-y-12">
                             <p className="text-[10px] font-black text-red-500/40 uppercase tracking-[0.7em] italic">DAILY OPERATIONAL RISKS</p>
                             <div className="flex flex-col gap-8 md:gap-12 lg:gap-14">
                                 {res.risks.map((risk, i) => (
                                    <PulsatingStressText key={i} text={risk.title} delay={`${i * 0.2}s`} />
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: WHY EXECUTION BREAKS --- */}
            <Section className="bg-white border-b border-zinc-100">
                <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">Operational Reality</Badge>
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                            Why daily execution breaks
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            {res.whyExecutionBreaksParagraph}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        {res.risks.map((point, index) => (
                            <div key={index} className="flex flex-col gap-6 p-10 border border-zinc-100 bg-zinc-50/30 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 relative group">
                                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ShieldAlert className="w-24 h-24 text-red-600" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative flex h-3 w-3 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black font-headline uppercase italic tracking-tighter text-zinc-950">
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-zinc-500 text-base md:text-lg font-bold italic leading-relaxed text-left">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Failure Consequences Strip - Compact Mobile HUD */}
                    {res.consequences && (
                        <div className="mt-32 pt-16 border-t border-zinc-100">
                             <div className="flex items-center gap-3 justify-center mb-12">
                                <div className="w-1 h-5 bg-red-500" />
                                <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.5em] italic font-headline">FAILURE CONSEQUENCES</p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                                {res.consequences.map((c, i) => (
                                    <div key={i} className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-zinc-950 text-white space-y-2 md:space-y-3 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-1 md:w-2 h-full bg-red-600/20 group-hover:bg-red-600 transition-colors" />
                                        <p className="text-[9px] md:text-[11px] font-black uppercase text-red-500 tracking-widest leading-tight">{c.title}</p>
                                        <p className="text-[10px] md:text-sm font-bold italic text-zinc-400 leading-tight">→ {c.fallout}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Section>

            {/* --- SECTION 3: RESTORING CONTROL --- */}
            <Section className="bg-zinc-50/50">
                <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">Resolution Protocol</Badge>
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                            How the system restores control
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            MoreMeets™ converts operational dependence on memory into daily institutional visibility. Every critical function is converted into assigned execution and logged accountability.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        <div className="space-y-8 p-10 border-l-4 border-primary bg-white shadow-sm rounded-r-[2rem] text-left">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">
                                WHAT CHANGES DAILY
                            </p>
                            <div className="space-y-6">
                                {res.whatChangesDaily.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-zinc-950 font-black text-lg md:text-xl leading-tight italic uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10 text-left">
                            <div className="space-y-6">
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-zinc-950 font-headline">
                                    What your team actually uses
                                </h4>
                                <div className="p-6 bg-zinc-950 rounded-2xl border-l-4 border-emerald-500 shadow-2xl">
                                    <p className="text-white text-base md:text-lg font-bold italic leading-relaxed">
                                        Your team does not need new software, logins, or technical training. <br/><br/>
                                        <span className="text-emerald-500">They simply open the system in Excel or Google Sheets and begin running operations daily.</span>
                                    </p>
                                </div>
                                
                                {res.compliance && (
                                    <div className="space-y-4 pt-4">
                                        <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em]">COMPLIANCE COVERAGE</p>
                                        <div className="flex flex-wrap gap-2">
                                            {res.compliance.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-100 rounded-lg shadow-sm">
                                                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                                                    <span className="text-[10px] font-black uppercase text-zinc-600 tracking-wider">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CUSTOMIZATION BRIDGE --- */}
            <Section className="bg-zinc-950 text-white" noSpine>
                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] relative overflow-hidden text-center space-y-10">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <Sparkles className="w-64 h-64 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Optional Customization Support</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                            Need this system tailored <br/> to your specific brand?
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            If our standard framework requires professional adaptation to your unique department hierarchy or multi-unit reporting structure, we offer 1-on-1 discovery calls.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-2xl hover:scale-105 transition-all border-none">
                            <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                Book Customization Discovery <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Tailored implementation starts at ₹9,999 / $125 USD</p>
                    </div>
                </div>
            </Section>

            {/* --- SECTION: OPERATIONAL CONTINUITY --- */}
            <Section className="bg-white border-t border-zinc-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr,450px] gap-12 md:gap-24 items-center">
                        <div className="space-y-8 text-left">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">
                                    Operational Continuity
                                </Badge>

                                <h2 className="text-[32px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                                    Standards Stay. <br/> Even When People Leave.
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-zinc-500 text-lg md:text-2xl font-bold italic leading-tight">
                                    Most operations silently depend on a few experienced people remembering everything.
                                </p>

                                <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed border-l-2 border-primary/20 pl-6 max-w-xl">
                                    MoreMeets™ converts institutional knowledge into visible daily execution — so operational standards survive resignations, rapid hiring, shift changes, and multi-location expansion.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 w-full">
                            {[
                                "New managers onboard faster",
                                "Critical routines stop living in memory",
                                "Operational standards remain consistent",
                                "Teams follow one shared system",
                                "Execution becomes independent of individuals"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 md:p-6 bg-zinc-50 border border-zinc-100 rounded-[1.5rem] group hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all" />

                                    <span className="text-[11px] md:text-[14px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-950 transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- SECTION: OPERATIONAL DIVISIONS (2-Column Grid on Mobile) --- */}
            <Section className="bg-zinc-50 border-y border-zinc-100">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technical Density</Badge>
                        <h2 className="text-[32px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                            Operational <br className="md:hidden" /> Divisions
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            The full architecture of the Sovereign Engine. Optimized for one-glance control.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="flex flex-col gap-3 p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <IconComponent name={checklist.icon} className="w-5 h-5 md:w-8 md:h-8" />
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <h4 className="text-[11px] md:text-xl font-black uppercase italic tracking-tighter text-zinc-950 leading-tight">
                                        {checklist.title}
                                    </h4>
                                    <p className="text-[8px] md:text-[10px] text-primary font-black uppercase tracking-[0.2em]">{checklist.tasks.length} SOPs</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- SECTION 7: BUILT FOR REAL TEAMS --- */}
            <Section className="bg-white">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Operational Reassurance</Badge>
                        <h2 className="text-[32px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                            Built for real teams
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            Institutional maturity is when daily responsibilities move from individual memory to visible institutional execution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                t: "FASTER TEAM TRAINING",
                                d: "New teams understand responsibilities faster using built-in instructions and operational guidance.",
                                i: GraduationCap
                            },
                            {
                                t: "REDUCED DEPENDENCY",
                                d: "Operations stop collapsing when one experienced person is absent. Memory becomes infrastructure.",
                                i: History
                            },
                            {
                                t: res.reassuranceTrustTitle || "STAKEHOLDER TRUST",
                                d: res.reassuranceTrustDescription || "Operational consistency customers notice and trust.",
                                i: Users
                            },
                            {
                                t: "EASY FOR TEAMS",
                                d: "No apps. No software rollout. Teams simply update one shared operational system daily.",
                                i: CheckCircle2
                            },
                            {
                                t: "EDITABLE INFRASTRUCTURE",
                                d: "Add, remove, or customize technical tasks anytime to fit your unique property protocols.",
                                i: Zap
                            },
                            {
                                t: "AUDIT-READY RECORDS",
                                d: "Institutional proof for inspectors, insurers, and owners is generated automatically.",
                                i: ShieldCheck
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">{item.t}</h4>
                                    <p className="text-zinc-500 text-sm md:text-base italic font-medium leading-relaxed text-left">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- PRICING BRIDGE --- */}
            <div id="pricing" className="scroll-mt-20" />
            <PricingClient pack={pack} />

            {/* --- FINAL MANDATE --- */}
            <Section className="bg-[#0F3D2E] text-white py-24 md:py-48" noSpine>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 md:gap-24 items-center">
                        <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                            <div className="space-y-6">
                                <h2 className="text-[40px] md:text-[80px] font-black tracking-tighter uppercase italic leading-[0.9]">
                                    {res.ctaTitle?.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>{line}<br/></React.Fragment>
                                    )) || (
                                        <>Bring structure <br/> back to <br/> <span className="text-emerald-500">operations.</span></>
                                    )}
                                </h2>
                                <p className="text-lg md:text-[32px] text-white/40 font-bold italic leading-tight">
                                    {res.ctaSubline || "Less chasing. More visibility. Calmer mornings."}
                                </p>
                            </div>
                            
                            <button className="h-16 md:h-24 px-10 md:px-20 rounded-2xl bg-[#F4A261] text-white font-black uppercase italic text-base md:text-2xl shadow-2xl hover:bg-white hover:text-black hover:scale-[1.05] active:scale-95 transition-all border-none group w-full lg:w-fit flex items-center justify-center">
                                <Link href="#pricing" className="flex items-center gap-4">
                                    LIVE IN 10 MINUTES NOW <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                        </div>

                        {/* Outcomes Stack */}
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] space-y-8 shadow-2xl">
                             <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">OPERATIONAL OUTCOMES</p>
                             <div className="space-y-4">
                                {res.outcomes.map((outcome, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-3 h-3 text-[#22C55E]" />
                                        </div>
                                        <span className="text-lg md:text-xl font-black text-white/80 uppercase italic tracking-tight">{outcome}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
