'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Monitor,
    Clapperboard,
    Popcorn,
    Projector,
    History,
    Ticket,
    ShieldCheck,
    ShieldAlert,
    Target,
    Activity,
    Smartphone,
    GraduationCap,
    AlertTriangle,
    FileSignature,
    Users,
    CheckCircle2,
    Wrench,
    Zap,
    Leaf,
    Recycle,
    Banknote,
    Thermometer,
    LayoutGrid,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import images from '@/lib/placeholder-images.json';

// --- TECHNICAL ARTIFACTS ---
const VITALS_IMAGE = images.find(i => i.id === 'sovereign-vitals')?.imageUrl!;
const LEDGER_IMAGE = images.find(i => i.id === 'sovereign-ledger')?.imageUrl!;
const HERO_IMAGE = "https://i.postimg.cc/43gVfgjd/multiplex2.avif";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, viewLabel }: { src: string, viewLabel: string }) => (
    <div className="group space-y-3 w-full max-w-lg mx-auto">
        <div className="relative rounded-[1rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0A0F19] transition-all duration-1000">
            <div className="bg-[#0D121F] border-b border-white/5 px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-red-500/20" />
                    <div className="w-1 h-1 rounded-full bg-amber-500/20" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/20" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/5 rounded px-6 py-0.5 text-[7px] font-black text-white/20 uppercase tracking-[0.4em] italic leading-none">
                        moremeets-master-engine.xlsx
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[120px] md:h-[160px] overflow-hidden bg-zinc-900">
                <img 
                    src={src} 
                    alt={viewLabel} 
                    className="w-full h-auto object-cover object-top grayscale-[0.6] group-hover:grayscale-[0.3] transition-all duration-1000 opacity-30 group-hover:opacity-60 blur-[2px] group-hover:blur-[1px]" 
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F19] via-transparent to-transparent pointer-events-none" />
            </div>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.3em] italic leading-none">{viewLabel}</span>
        </div>
    </div>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[12px] md:text-[16px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] leading-none block text-left lg:text-right whitespace-nowrap">
            {text}
        </span>
    </div>
);

export default function CinemaDesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- SOVEREIGN HERO: PRODUCTION FIDELITY --- */}
                <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={HERO_IMAGE} 
                            alt="" 
                            className="w-full h-full object-cover opacity-40 grayscale brightness-[0.35]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-20 pb-12">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                            <div className="space-y-6 md:space-y-8 w-full">
                                <div className="space-y-3">
                                    <h1 className="font-headline font-black text-[32px] md:text-[44px] lg:text-[54px] xl:text-[60px] leading-none uppercase italic tracking-tighter text-white lg:whitespace-nowrap">
                                        CINEMA OPERATIONS SYSTEM
                                    </h1 >
                                    <div className="space-y-3">
                                        <p className="text-lg md:text-[24px] font-medium text-zinc-300 max-w-3xl leading-tight">
                                            Technical command for show readiness, crowd flow, and concession yield.
                                        </p>
                                        <div className="border-l-2 border-emerald-500/40 pl-6">
                                            <p className="text-sm md:text-base text-zinc-400 font-bold max-w-xl leading-relaxed italic">
                                                Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-5 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                        <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">SYSTEM SPECIFICATIONS</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-3">
                                        {[
                                            { t: "144+ PRE-BUILT OPERATIONAL SOPs", i: Target },
                                            { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                            { t: "EXECUTION GUIDANCE INCLUDED", i: GraduationCap },
                                            { t: "AUDIT-READY DOCUMENTATION", i: FileSignature }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 md:gap-4 group">
                                                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                    <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                                                </div>
                                                <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/70 group-hover:text-white transition-colors">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-5 pt-2">
                                    <div className="space-y-3">
                                        <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4">
                                            <Link href="#pricing">
                                                LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-zinc-950 transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </Button>
                                        <div className="space-y-1.5 pl-1">
                                            <p className="text-[10px] md:text-[12px] text-emerald-500/90 font-black uppercase tracking-[0.2em] italic leading-tight text-center sm:text-left">
                                                BUILT IN EXCEL • NO APP ROLLOUT REQUIRED
                                            </p>
                                            <p className="text-[9px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic leading-tight text-center sm:text-left">
                                                ONE-TIME PURCHASE • OWN FOREVER • NO SUBSCRIPTIONS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-6 md:space-y-8">
                                 <p className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.7em] italic">DAILY OPERATIONAL RISKS</p>
                                 <div className="flex flex-col gap-3 md:gap-5 lg:gap-6">
                                     <PulsatingStressText text="EXPIRED KDM KEYS" delay="0s" />
                                     <PulsatingStressText text="CONCESSION YIELD LEAKAGE" delay="0.2s" />
                                     <PulsatingStressText text="INTERVAL SURGE CONGESTION" delay="0.4s" />
                                     <PulsatingStressText text="EMERGENCY COMMS FAILURE" delay="0.6s" />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full bg-[#E11D48] py-4 md:py-6 overflow-hidden border-y border-black/10 relative z-30">
                    <div className="flex flex-nowrap items-center gap-20 animate-marquee whitespace-nowrap px-10">
                        {[
                            "BLACK-SCREEN INCIDENTS PREVENTED",
                            "CONCESSION LEAKAGE PLUGGED",
                            "MISSED FIRE SAFETY CHECKS ELIMINATED",
                            "UNVERIFIED SHOW READINESS STOPPED",
                            "LOST INTERVAL REVENUE RECLAIMED",
                            "EXPIRED KDM BLACKOUTS AVOIDED"
                        ].map((text, i) => (
                            <span key={i} className="text-[11px] md:text-[14px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-5">
                                <ShieldAlert className="w-5 h-5" /> {text}
                            </span>
                        ))}
                    </div>
                </div>

                <Section className="bg-white border-b border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL REALITY</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                Why Cinema operations break
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                                Cinemas fail when technical readiness is assumed and interval rushes become disorganized coordination exercises.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                            {[
                                { t: "Technical Readiness Gaps", d: "Show readiness is often verbally confirmed rather than technically verified, leading to black-screens during blockbuster openings." },
                                { t: "Invisible Profit Theft", d: "Lack of raw-corn-to-bucket yield logic creates massive internal profit leakage at the concession counter that owners never see." },
                                { t: "Interval Rush Gridlock", d: "Washroom congestion and concession queue overload damage guest satisfaction scores and reduce interval spending." },
                                { t: "Emergency Maintenance Decay", d: "Critical life-safety systems or fire doors often fail unnoticed until a crisis occurs due to lack of daily operational audits." }
                            ].map((point, index) => (
                                <div key={index} className="flex flex-col gap-5 p-8 border border-zinc-100 bg-zinc-50/30 rounded-[1.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 relative group">
                                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <ShieldAlert className="w-20 h-20 text-red-600" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="relative flex h-2.5 w-2.5 shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black font-headline uppercase italic tracking-tighter text-zinc-950">
                                            {point.t}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic leading-relaxed text-left">
                                        {point.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- RESTORES CONTROL: CLARITY OVERHAUL --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">RESOLUTION PROTOCOL</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                How the system restores control
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                            <div className="space-y-6 p-8 border-l-4 border-primary bg-white shadow-sm rounded-r-[1.5rem] text-left">
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">
                                    WHAT CHANGES DAILY
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Show readiness has a mandatory technical seal",
                                        "Concession yields are reconciled shift-wise",
                                        "Auditorium temperatures are logged during peak",
                                        "Egress safety patrols are verified pre-credits",
                                        "DCP/KDM status is confirmed 24h prior",
                                        "Operations heads see group readiness instantly"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-zinc-950 font-black text-base md:text-lg leading-tight italic uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-8 text-left">
                                <div className="space-y-6">
                                    <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-zinc-950 font-headline">
                                        What your team actually uses
                                    </h4>
                                    <div className="p-6 bg-zinc-950 rounded-xl border-l-4 border-emerald-500 shadow-2xl">
                                        <p className="text-white text-sm md:text-base font-bold italic leading-relaxed">
                                            Your team does not need new software, logins, or technical training. <br/><br/>
                                            <span className="text-emerald-500 uppercase">They simply open our <strong>operational checklists</strong> in Excel or Google Sheets and begin running operations daily.</span>
                                        </p>
                                    </div>
                                    <div className="space-y-3 pt-2">
                                        <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">COMPLIANCE COVERAGE</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Show Readiness", "Fire Safety", "FSSAI", "LOTO", "Tax seriality", "C-Form Sync"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-100 rounded-lg shadow-sm">
                                                    <ShieldCheck className="w-3 h-3 text-primary" />
                                                    <span className="text-[9px] font-black uppercase text-zinc-600 tracking-wider">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-white" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] px-6 py-1.5 rounded-none italic bg-zinc-50">TECHNICAL PROOF</Badge>
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left">
                                        Executive <br/> Operations View
                                    </h2>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-l-2 border-primary/20 pl-8 text-left">
                                        Know what's done and what's missed without attending a single meeting. Real-time visibility into multi-screen health.
                                    </p>
                                </div>
                                <div className="p-6 bg-[#F0FDF4] border border-emerald-100 rounded-xl space-y-2 shadow-sm">
                                    <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">SYSTEM DATA REALISM:</p>
                                    <p className="text-base font-black italic text-emerald-900 leading-tight uppercase">"87% Completion Across Region North. 3 High-Priority Tasks Overdue."</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <BrowserFrame src={VITALS_IMAGE} viewLabel="EXECUTIVE COMMAND PULSE" />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1 w-full">
                                <BrowserFrame src={LEDGER_IMAGE} viewLabel="DAILY EXECUTION LEDGER" />
                            </div>
                            <div className="space-y-8 text-left order-1 lg:order-2">
                                <div className="space-y-4">
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left lg:text-right">
                                        Staff Mobile <br/> Execution
                                    </h2>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-r-2 border-primary/20 pr-8 text-left lg:text-right">
                                        No app training required. Staff log completion in seconds. If it's not logged, it's not done.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-6 items-start lg:items-end">
                                    {[
                                        { t: "EXECUTION GUIDANCE", d: "Actionable instructions embedded in every task.", i: GraduationCap },
                                        { t: "BINARY VERIFICATION", d: "Staff enters name -> status turns green instantly.", i: CheckCircle2 }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-5 items-center">
                                            <div className="order-2 w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center shrink-0 shadow-xl">
                                                <feat.i className="w-6 h-6 text-emerald-500" />
                                            </div>
                                            <div className="order-1 text-left lg:text-right">
                                                <p className="text-lg font-black uppercase italic text-zinc-950 leading-none">{feat.t}</p>
                                                <p className="text-[10px] font-bold text-zinc-400 italic uppercase leading-snug pt-1">{feat.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-zinc-50 border-y border-zinc-100" id="modules">
                    <div className="max-w-[1100px] mx-auto space-y-12 md:space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] italic bg-white shadow-sm">SYSTEM MODULES</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">The Engine Core</h2>
                            <p className="text-zinc-500 text-[10px] font-bold italic uppercase tracking-widest text-center">FULL TECHNICAL DENSITY FOR MULTIPLEX COMMAND</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
                            {[
                                { t: "OPERATIONS DASHBOARD", i: Monitor },
                                { t: "READINESS CONSOLE", i: Clapperboard },
                                { t: "CONCESSION MONITOR", i: Popcorn },
                                { t: "PROJECTION LEDGER", i: Projector },
                                { t: "SHIFT HANDOVER", i: History },
                                { t: "REVENUE SHIELD", i: Ticket },
                                { t: "COMPLIANCE MONITOR", i: ShieldCheck },
                                { t: "PERSONNEL HUB", i: Users },
                                { t: "EXECUTION LEDGER", i: FileSignature },
                                { t: "INCIDENT REGISTRY", i: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className="p-6 md:p-8 rounded-[1.5rem] border border-zinc-200 flex flex-col items-center justify-center gap-4 transition-all group h-[180px] shadow-sm text-center bg-white hover:border-emerald-500/40 hover:shadow-2xl duration-500">
                                    <item.i className="w-8 h-8 text-slate-300 transition-all duration-700 group-hover:text-emerald-500 group-hover:scale-110" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.15em] leading-tight italic text-slate-900 group-hover:text-emerald-600">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- OPERATIONAL ESG: RESTRAINED TECHNICAL --- */}
                <Section className="bg-white" id="esg">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-6 text-center">
                            <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[10px] italic px-10 py-3 rounded-none">OPERATIONAL SUSTAINABILITY</Badge>
                            <h2 className="text-[34px] md:text-[64px] font-black font-headline uppercase italic leading-[0.9] tracking-tighter text-center">Operational <br/> Sustainability.</h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase border-l-2 border-emerald-500/20 pl-8 mx-auto max-w-xl text-center">
                                Environmental sustainability isn't a report. It's the byproduct of daily operational discipline and visibility.
                            </p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                            {[
                                { t: "ENERGY DISCIPLINE", d: "Daily AC shutdown compliance logs for empty auditoriums stop unmonitored power waste.", i: Zap },
                                { t: "RESOURCE CONSERVATION", d: "Water vitals logging and overnight leak detection through digital meter-parity checks.", i: Leaf },
                                { t: "WASTE MITIGATION", d: "Concession yield logic (corn-to-bucket) identifies production waste before it reaches the bin.", i: Recycle },
                                { t: "ASSET LONGEVITY", d: "Preventive uptime audits extend technical hardware life by 30%, reducing e-waste footprint.", i: Wrench }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black uppercase italic text-zinc-950 leading-tight text-left">{item.t}</h4>
                                        <p className="text-[11px] font-bold text-zinc-400 italic uppercase leading-relaxed text-left">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <section className="bg-zinc-950 text-white py-32 md:py-48 text-center relative overflow-hidden border-t border-white/5" id="pricing">
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                    
                    <div className="max-w-5xl mx-auto space-y-16 relative z-10 px-6">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 uppercase tracking-[0.6em] font-black text-[10px] px-12 py-3 rounded-none italic text-center">INSTITUTIONAL ACCESS</Badge>
                            <h2 className="text-[42px] md:text-[90px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl text-white text-center">Own the system. <br/> Deploy for life.</h2>
                            <p className="text-lg md:text-2xl text-zinc-500 font-bold italic uppercase tracking-[0.3em] max-w-2xl mx-auto text-center">ONE-TIME INVESTMENT. PERMANENT VISIBILITY.</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-14">
                            <button className="h-16 md:h-24 px-12 md:px-20 rounded-xl md:rounded-[2.5rem] bg-emerald-500 text-black font-black uppercase italic text-sm md:text-2xl shadow-[0_20px_80px_-10px_rgba(34,197,94,0.6)] hover:bg-white hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-8">
                                <Link href="/library" className="flex items-center gap-8">
                                    GET SOVEREIGN PRO <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:translate-x-4" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[56px] md:text-[110px] font-black italic tracking-tighter">₹999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-zinc-700 italic">/ $12</span>
                                </div>
                                <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.5em] text-zinc-600 italic text-center">
                                    NO MONTHLY FEES • NO SaaS TAX • NO DATA LOCK-IN
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
