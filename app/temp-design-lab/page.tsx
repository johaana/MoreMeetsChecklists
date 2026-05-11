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
    Scale,
    TrendingUp,
    Lock,
    Leaf,
    Banknote,
    Thermometer,
    LayoutGrid,
    Eye,
    Recycle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

// --- TECHNICAL ARTIFACTS ---
const VITALS_IMAGE = "https://i.postimg.cc/W1Yt09r8/Screenshot-2026-05-11-170634.png";
const LEDGER_IMAGE = "https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png";
const FINANCE_IMAGE = "https://i.postimg.cc/g2tr3MRD/Screenshot-2026-05-11-170957.png";
const HERO_IMAGE = "https://i.postimg.cc/43gVfgjd/multiplex2.avif";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, label, sub }: { src: string, label: string, sub?: string }) => (
    <div className="group space-y-3 w-full max-w-lg mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] border border-zinc-200 bg-white transition-all duration-1000 hover:shadow-[0_30px_70px_-10px_rgba(34,197,94,0.15)]">
            {/* Browser Top Chrome */}
            <div className="bg-[#0D121F] border-b border-white/5 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 border border-white/5 rounded-md px-12 py-1 text-[8px] font-black text-white/30 uppercase tracking-[0.4em] italic leading-none">
                        {label}.xlsx
                    </div>
                </div>
            </div>
            {/* Shortened, non-readable artifact */}
            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden bg-zinc-50">
                <img 
                    src={src} 
                    alt={label} 
                    className="w-full h-auto object-cover object-top grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100 blur-[1px] group-hover:blur-0" 
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            </div>
        </div>
        {sub && <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.5em] italic text-center">{sub}</p>}
    </div>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[14px] md:text-[20px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] leading-tight block text-left lg:text-right">
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
                
                {/* --- 1. HERO: MAIN PACK STYLE --- */}
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
                                                Built for multiplex leadership where black-screens and concession profit-leakage are daily variables you must control.
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
                                            <p className="text-[10px] md:text-[12px] text-emerald-500/90 font-black uppercase tracking-[0.2em] italic leading-tight">
                                                BUILT IN EXCEL • SHARED THROUGH GOOGLE SHEETS • NO APP ROLLOUT
                                            </p>
                                            <p className="text-[9px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic leading-tight">
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

                {/* --- 2. THE RED MARQUEE --- */}
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
                        {/* Duplicate for seamless loop */}
                        {[
                            "BLACK-SCREEN INCIDENTS PREVENTED",
                            "CONCESSION LEAKAGE PLUGGED",
                            "MISSED FIRE SAFETY CHECKS ELIMINATED",
                            "UNVERIFIED SHOW READINESS STOPPED",
                            "LOST INTERVAL REVENUE RECLAIMED",
                            "EXPIRED KDM BLACKOUTS AVOIDED"
                        ].map((text, i) => (
                            <span key={`dup-${i}`} className="text-[11px] md:text-[14px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-5">
                                <ShieldAlert className="w-5 h-5" /> {text}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- 3. WHY IT BREAKS: INDUSTRIAL REALISM --- */}
                <Section className="bg-white border-b border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL REALITY</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                Why Cinema operations break
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
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

                {/* --- 4. OPERATIONAL LOOP: HOW IT WORKS --- */}
                <Section className="bg-zinc-50/50" id="loop">
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">RESOLUTION PROTOCOL</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                How the system restores control
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto uppercase tracking-tighter">
                                From floor execution to boardroom visibility.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { t: "01 INPUT", d: "Staff log technical tasks on the floor via mobile Sheets.", i: Smartphone },
                                { t: "02 VERIFY", d: "Managers sign off on high-priority readiness points.", i: ShieldCheck },
                                { t: "03 ESCALATE", d: "Any missed work is auto-logged as an operational risk.", i: AlertTriangle },
                                { t: "04 VISIBILITY", d: "One dashboard shows group health across every screen.", i: TrendingUp }
                            ].map((step, i) => (
                                <div key={i} className="bg-white border border-zinc-100 p-8 rounded-[1.5rem] space-y-6 group hover:shadow-2xl transition-all duration-700">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <step.i className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black uppercase italic tracking-widest text-zinc-950 leading-tight">{step.t}</h4>
                                        <p className="text-[10px] font-bold text-zinc-400 italic uppercase leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 5. THE EVIDENCE: ARTIFACT TRIPTYCH --- */}
                <Section className="bg-white" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] px-6 py-1.5 rounded-none italic bg-zinc-50">TECHNICAL PROOF</Badge>
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                        Executive <br/> Operations View
                                    </h2>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-l-2 border-primary/20 pl-8">
                                        Know what's done and what's missed without attending a single meeting. Real-time visibility into multi-screen health.
                                    </p>
                                </div>
                                <div className="p-6 bg-[#F0FDF4] border border-emerald-100 rounded-xl space-y-2 shadow-sm">
                                    <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">LIVE SYSTEM DATA:</p>
                                    <p className="text-base font-black italic text-emerald-900 leading-tight uppercase">"87% Completion Across Region North. 3 High-Priority Tasks Overdue."</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <BrowserFrame src={VITALS_IMAGE} label="EXECUTIVE DASHBOARD" sub="VIEW: GROUP COMMAND PULSE" />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1 w-full">
                                <BrowserFrame src={LEDGER_IMAGE} label="DAILY EXECUTION LEDGER" sub="VIEW: DAILY STAFF LOG" />
                            </div>
                            <div className="space-y-8 text-left order-1 lg:order-2">
                                <div className="space-y-4">
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left lg:text-right">
                                        Staff Mobile <br/> Ledger
                                    </h2>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-r-2 border-primary/20 pr-8 text-left lg:text-right">
                                        No app training required. Staff log completion in seconds. If it's not logged, it's not done.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-6 items-start lg:items-end">
                                    {[
                                        { t: "EXECUTION GUIDANCE", d: "Step-by-step instructions embedded in every task.", i: GraduationCap },
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

                {/* --- 6. THE ENGINE CORE: COMPONENT GRID --- */}
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

                {/* --- 7. OPERATIONAL ESG: SUSTAINABILITY THROUGH RIGOR --- */}
                <Section className="bg-white" id="esg">
                    <div className="grid lg:grid-cols-[1fr,450px] gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-12 text-left">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[9px] italic px-10 py-3 rounded-none">OPERATIONAL ESG</Badge>
                                <h2 className="text-[34px] md:text-[64px] font-black font-headline uppercase italic leading-[0.9] tracking-tighter">Sustainability <br/> Through Rigor.</h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase border-l-2 border-emerald-500/20 pl-8 max-w-xl">
                                    Environmental sustainability isn't theater. It's the byproduct of daily resource discipline and visibility.
                                </p>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
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
                                            <h4 className="text-lg font-black uppercase italic text-zinc-950 leading-tight">{item.t}</h4>
                                            <p className="text-[11px] font-bold text-zinc-400 italic uppercase leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-8 bg-zinc-950 rounded-[3rem] shadow-2xl overflow-hidden group">
                             <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                             <BrowserFrame src={FINANCE_IMAGE} label="FINANCIAL SHIELD" sub="VIEW: MARGIN & RESOURCE PROTECTION" />
                        </div>
                    </div>
                </Section>

                {/* --- 8. FINAL MANDATE --- */}
                <section className="bg-zinc-950 text-white py-32 md:py-48 text-center relative overflow-hidden border-t border-white/5" id="pricing">
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                    
                    <div className="max-w-5xl mx-auto space-y-16 relative z-10 px-6">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 uppercase tracking-[0.6em] font-black text-[10px] px-12 py-3 rounded-none italic">INSTITUTIONAL ACCESS</Badge>
                            <h2 className="text-[42px] md:text-[90px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl text-white">Own the system. <br/> Deploy for life.</h2>
                            <p className="text-lg md:text-2xl text-zinc-500 font-bold italic uppercase tracking-[0.3em] max-w-2xl mx-auto">ONE-TIME INVESTMENT. PERMANENT VISIBILITY.</p>
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
                                <p className="text-[11px] md:text-sm font-black uppercase tracking-[0.5em] text-zinc-600 italic">
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

