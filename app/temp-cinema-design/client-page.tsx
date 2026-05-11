'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
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
    Leaf,
    Recycle,
    Wrench,
    LayoutGrid,
    Eye
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../packs/pricing-client';
import { packResolutions } from '@/lib/pack-resolutions';

const CHAMBER_GREEN = "#0F3D2E";
const ACTION_AMBER = "#F4A261";

const MARQUEE_SIGNALS = [
    "DCP_SYNC_CONFIRMED",
    "SUBTITLE_TRACK_VALIDATED",
    "PROJECTOR_LAMP_HOURS_MONITORED",
    "AUDIO_CHANNEL_CALIBRATION_ACTIVE",
    "SCREEN_TEMP_RANGE_STABLE",
    "KDM_EXPIRY_WARNING",
    "VOID_BILL_AUDIT_ACTIVE",
    "POPCORN_YIELD_1:40_STABLE"
];

const SUSTAINABILITY = [
    { t: "ENERGY DISCIPLINE", d: "Daily AC shutdown compliance logs for empty auditoriums stop unmonitored power waste.", i: Zap },
    { t: "RESOURCE CONSERVATION", d: "Water vitals logging and overnight leak detection through digital meter-parity checks.", i: Leaf },
    { t: "WASTE MITIGATION", d: "Concession yield logic (corn-to-bucket) identifies production waste before it reaches the bin.", i: Recycle },
    { t: "ASSET LONGEVITY", d: "Preventive uptime audits extend technical hardware life by 30%, reducing e-waste footprint.", i: Wrench }
];

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noSpine?: boolean;
}

function Section({ children, className, id, noSpine = false }: SectionProps) {
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
            <span className="text-[12px] md:text-[16px] font-black text-red-500 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(239,68,68,0.2)] leading-none block text-left lg:text-right whitespace-nowrap">
                {text}
            </span>
        </div>
    );
}

export default function TempCinemaDesignClient({ pack }: { pack: PremiumPack }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const res = packResolutions[pack.id];

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            
            {/* --- REFINED CHAMBER GREEN HERO --- */}
            <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden text-white" style={{ backgroundColor: CHAMBER_GREEN }}>
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                
                <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-20 pb-12">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                        <div className="space-y-8 md:space-y-12 w-full">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 py-1.5 px-6 uppercase tracking-[0.4em] font-black text-[10px] rounded-none bg-emerald-500/5">
                                    SOVEREIGN INFRASTRUCTURE
                                </Badge>
                                <h1 className="font-headline font-black text-[36px] md:text-[54px] lg:text-[72px] leading-[0.9] uppercase italic tracking-tighter text-white">
                                    CINEMA <br/> <span className="text-emerald-400">OPERATIONS SYSTEM.</span>
                                </h1 >
                                <div className="space-y-4">
                                    <p className="text-lg md:text-[26px] font-medium text-zinc-300 max-w-2xl leading-tight">
                                        Technical command for show readiness, crowd flow, and concession yield.
                                    </p>
                                    <div className="border-l-[3px] border-emerald-500/30 pl-8">
                                        <p className="text-sm md:text-lg text-zinc-400 font-bold max-w-xl leading-relaxed italic">
                                            Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                                    {[
                                        { t: "144+ PRE-BUILT OPERATIONAL SOPs", i: Target },
                                        { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                        { t: "EXCEL MASTER • OPERATED LIVE VIA SHEETS", i: GraduationCap },
                                        { t: "AUDIT-READY DOCUMENTATION", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-3 h-3 text-emerald-400" />
                                            </div>
                                            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.05em] italic leading-tight text-white/80 group-hover:text-white transition-colors">
                                                {item.t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    <Button asChild size="lg" className="w-full sm:w-auto h-16 md:h-20 px-12 md:px-16 rounded-xl text-black font-black uppercase italic text-sm md:text-xl shadow-[0_20px_50px_-10px_rgba(244,162,97,0.4)] hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-4" style={{ backgroundColor: ACTION_AMBER }}>
                                        <Link href="#pricing">
                                            LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                         <div className="flex items-baseline gap-2">
                                            <p className="text-[32px] md:text-[40px] font-black text-white italic tracking-tighter">₹999</p>
                                            <span className="text-xs font-bold text-zinc-500 line-through">₹4,999</span>
                                        </div>
                                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">ONE-TIME • OWN FOREVER</p>
                                    </div>
                                </div>
                                <p className="text-[10px] md:text-[11px] text-emerald-500/60 font-black uppercase tracking-[0.4em] italic leading-tight text-center sm:text-left">
                                    NO APP ROLLOUT REQUIRED • NO SaaS LOCK-IN
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-16 lg:mt-0 space-y-8">
                             <p className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.7em] italic">DAILY OPERATIONAL RISKS</p>
                             <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                                 {["EXPIRED KDM KEYS", "CONCESSION YIELD LEAKAGE", "INTERVAL SURGE CONGESTION", "EMERGENCY COMMS FAILURE"].map((text, i) => (
                                    <PulsatingStressText key={i} text={text} delay={`${i * 0.2}s`} />
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TELEMETRY MARQUEE --- */}
            <div className="w-full bg-[#1a0505] h-10 overflow-hidden border-y border-black/10 relative z-30 flex items-center shadow-2xl">
                <div className="flex flex-nowrap items-center gap-16 animate-marquee whitespace-nowrap px-10">
                    {MARQUEE_SIGNALS.map((signal, i) => {
                        const isAlert = signal.includes('ALERT') || signal.includes('WARNING') || signal.includes('VARIANCE') || signal.includes('PENDING');
                        return (
                            <span key={i} className={cn(
                                "text-[10px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2",
                                isAlert ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" : "text-white/10"
                            )}>
                                <span className="opacity-40">{isAlert ? '[!]' : '[/]'}</span>
                                {signal}
                            </span>
                        );
                    })}
                    {MARQUEE_SIGNALS.map((signal, i) => {
                        const isAlert = signal.includes('ALERT') || signal.includes('WARNING') || signal.includes('VARIANCE') || signal.includes('PENDING');
                        return (
                            <span key={`dup-${i}`} className={cn(
                                "text-[10px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2",
                                isAlert ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" : "text-white/10"
                            )}>
                                <span className="opacity-40">{isAlert ? '[!]' : '[/]'}</span>
                                {signal}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* --- WHY EXECUTION BREAKS --- */}
            <Section className="bg-white border-b border-zinc-100">
                <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL REALITY</Badge>
                        <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                            Why daily execution breaks
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                            Cinemas fail when technical readiness is assumed and interval rushes become disorganized coordination exercises.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        {res.risks.map((point, index) => (
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
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-zinc-500 text-sm md:text-base font-bold italic leading-relaxed text-left">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- RESOLUTION PROTOCOL --- */}
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
                                        {["Show Readiness", "Fire Safety", "FSSAI", "LOTO", "Tax Seriality", "C-Form Sync"].map((item, i) => (
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

            {/* --- BUILT FOR REAL TEAMS --- */}
            <Section className="bg-white">
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">OPERATIONAL REASSURANCE</Badge>
                        <h2 className="text-[28px] md:text-[50px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95] text-center">
                            Built for real teams
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {[
                            { t: "FASTER TEAM TRAINING", d: "New teams understand responsibilities faster using built-in instructions.", i: GraduationCap },
                            { t: "REDUCED DEPENDENCY", d: "Operations stop collapsing when key staff leave. Memory becomes infrastructure.", i: History },
                            { t: "STAKEHOLDER TRUST", d: "Operational consistency customers notice.", i: Users },
                            { t: "EASY FOR TEAMS", d: "No apps. No software rollout. Teams simply update one shared dashboard daily.", i: CheckCircle2 },
                            { t: "EDITABLE INFRASTRUCTURE", d: "Add, remove, or customize tasks anytime to fit your unique property protocols.", i: Zap },
                            { t: "AUDIT-READY RECORDS", d: "Institutional proof for inspectors and insurers is generated automatically.", i: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 p-8 bg-white rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">{item.t}</h4>
                                    <p className="text-zinc-500 text-sm md:text-base italic font-medium leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: item.d }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- DEPLOYMENT GUIDE --- */}
            <Section className="bg-zinc-50 border-y border-zinc-100" id="guide">
                 <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">DEPLOYMENT PROTOCOL</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">Go live in 10 minutes</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { t: "Download", d: "Get your pre-built, industry-specific Excel Master instantly after payment." },
                                { t: "Upload Master", d: "Upload your Excel Master to Google Drive for live team access via Google Sheets." },
                                { t: "Assign", d: "Add your business details, map staff names to roles, and set your controls once." },
                                { t: "Run", d: "Daily tasks begin populating automatically by role, date, and frequency — live across your team." }
                            ].map((step, i) => (
                                <div className="space-y-8 group text-left" key={i}>
                                    <div className="text-6xl md:text-8xl font-black italic text-zinc-200 group-hover:text-primary transition-colors leading-none">
                                        {i+1}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-xl md:text-2xl uppercase italic leading-tight font-headline text-zinc-950 text-left">{step.t}</h4>
                                        <p className="text-base text-zinc-500 font-bold italic leading-relaxed text-left">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </Section>

            {/* --- OPERATIONAL SUSTAINABILITY --- */}
            <Section className="bg-white" id="esg">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-6 text-center">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[10px] italic px-10 py-3 rounded-none">OPERATIONAL SUSTAINABILITY</Badge>
                        <h2 className="text-[34px] md:text-[64px] font-black font-headline uppercase italic leading-[0.9] tracking-tighter text-center">Sustainability through Rigor.</h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase border-l-2 border-emerald-500/20 pl-8 mx-auto max-w-xl text-center">
                            Environmental sustainability isn't a report. It's the byproduct of daily operational discipline and visibility.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                        {SUSTAINABILITY.map((item, i) => (
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

            {/* --- PRICING SECTION --- */}
            <div id="pricing" className="scroll-mt-20" />
            <PricingClient pack={pack} />

            {/* --- CUSTOMIZATION BRIDGE --- */}
            <Section className="bg-zinc-950 text-white" noSpine>
                <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2rem] border border-white/10 bg-white/[0.02] relative overflow-hidden text-center space-y-8">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldCheck className="w-48 h-48 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-3">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[9px]">OPTIONAL CUSTOMIZATION SUPPORT</Badge>
                        <h2 className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                            Need this system tailored <br/> to your specific brand?
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg font-medium italic max-w-2xl mx-auto">
                            If our standard framework requires professional adaptation to your unique department hierarchy, we offer 1-on-1 discovery calls.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-primary text-black font-black uppercase italic text-xs shadow-2xl hover:scale-105 transition-all border-none">
                            <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                BOOK CUSTOMIZATION DISCOVERY <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">TAILORED IMPLEMENTATION STARTS AT ₹9,999 / $125 USD</p>
                    </div>
                </div>
            </Section>

            <Section className="bg-[#0F3D2E] text-white py-20 md:py-32" noSpine>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 md:gap-20 items-center">
                        <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                            <div className="space-y-5">
                                <h2 className="text-[36px] md:text-[64px] font-black tracking-tighter uppercase italic leading-[0.9]">
                                    THE AUDIENCE NEVER SEES THE <br/> CHAOS BEHIND THE <br/> <span className="text-emerald-500">CURTAIN.</span>
                                </h2>
                                <p className="text-base md:text-[26px] text-white/40 font-bold italic leading-tight">
                                    CALM OPERATIONS BEFORE THE LIGHTS GO DOWN.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center lg:items-start gap-4">
                                <button className="h-14 md:h-20 px-8 md:px-16 rounded-xl text-black font-black uppercase italic text-sm md:text-xl shadow-2xl hover:bg-white hover:scale-[1.05] active:scale-95 transition-all border-none group w-full lg:w-fit flex items-center justify-center" style={{ backgroundColor: ACTION_AMBER }}>
                                    <Link href="#pricing" className="flex items-center gap-3">
                                        LIVE IN 10 MINUTES NOW <ArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-3" />
                                    </Link>
                                </button>
                                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-emerald-500/60 italic">
                                    EXCEL MASTER • NO APP ROLLOUT • ONE-TIME BUY
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] space-y-6 shadow-2xl">
                             <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">OPERATIONAL OUTCOMES</p>
                             <div className="space-y-3">
                                {[
                                    "Black-screens prevented",
                                    "Concession yields protected",
                                    "Crowd safety secured",
                                    "Technical uptime tracked",
                                    "Guest scores protected"
                                ].map((outcome, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                                        </div>
                                        <span className="text-base md:text-lg font-black text-white/80 uppercase italic tracking-tight">{outcome}</span>
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

