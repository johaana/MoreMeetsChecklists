'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    X,
    ArrowRight, 
    Download,
    LayoutGrid,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Building2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Popcorn,
    Lock,
    Target,
    ShoppingBag,
    History,
    ClipboardCheck,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    ShieldAlert,
    Monitor,
    Clapperboard,
    Projector,
    Ticket,
    Wrench,
    FileSignature,
    Zap,
    Scale,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- AUTHENTIC CINEMA ASSETS ---
const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";
const CINEMA_TASKS_IMAGE = "https://i.postimg.cc/G278vKh8/Screenshot-2026-04-18-004329.png";
const CONCESSION_IMAGE = "https://i.postimg.cc/HxZj6zht/Screenshot-2026-05-10-150441.png";
const INCIDENT_IMAGE = "https://i.postimg.cc/G279XK5M/Screenshot-2026-05-10-150732.png";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, label }: { src: string, label: string }) => (
    <div className="group space-y-4">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.15)] border border-zinc-200 bg-white">
            <div className="bg-[#111] border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 border border-white/5 rounded px-8 py-0.5 text-[8px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                        sovereign_master_engine_console
                    </div>
                </div>
            </div>
            <img src={src} alt={label} className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" />
        </div>
    </div>
);

const OperationalAlert = ({ title, sub, time, delay = "0s" }: { title: string, sub: string, time: string, delay?: string }) => (
    <div className="flex flex-col items-start lg:items-end gap-1 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-3">
            <span className="text-[20px] md:text-[32px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_40px_rgba(239,68,68,1)]">
                <span className="animate-pulse">●</span> {title}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{time}</span>
        </div>
        <p className="text-[11px] md:text-[14px] font-bold text-white/40 uppercase tracking-widest italic leading-tight">{sub}</p>
    </div>
);

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. HERO: THE CINEMA MASTER ENGINE --- */}
                <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://i.postimg.cc/43gVfgjd/multiplex2.avif" 
                            alt="Multiplex Terminal" 
                            className="w-full h-full object-cover opacity-50 grayscale-[0.1]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-12 md:py-20">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-20 items-center">
                            <div className="space-y-8 md:space-y-12">
                                <div className="space-y-4 md:space-y-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge variant="outline" className="text-zinc-600 border-zinc-800 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-white/5 italic">SYS_REF: CINEMA_SOVEREIGN</Badge>
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-emerald-500/5 italic leading-none">OPERATIONAL_INFRASTRUCTURE</Badge>
                                    </div>
                                    <h1 className="text-[34px] md:text-8xl font-black font-headline tracking-tighter uppercase italic leading-[0.82] text-white">
                                        PROTECT CROWD SAFETY. <br/> <span className="text-emerald-500">SECURE REVENUE.</span>
                                    </h1>
                                    <div className="space-y-6 pt-2">
                                        <p className="text-xl md:text-3xl font-black italic text-zinc-100 max-w-2xl leading-[1.05] uppercase tracking-tight">
                                            Technical command for show readiness, <br className="hidden md:block" /> crowd flow, and concession yield.
                                        </p>
                                        <div className="flex flex-col gap-2 border-l-4 border-emerald-500/60 pl-8 max-w-xl">
                                            <p className="text-sm md:text-xl text-zinc-400 font-bold leading-relaxed italic">
                                                Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                                        {[
                                            { t: "120+ PRE-BUILT CINEMA SOPs", i: Target },
                                            { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                            { t: "TRAINER NOTES FOR TEAMS", i: GraduationCap },
                                            { t: "AUDIT-READY DOCUMENTATION", i: FileSpreadsheet }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                    <Check className="w-2.5 h-2.5 text-emerald-500" />
                                                </div>
                                                <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.1em] italic text-white/70 group-hover:text-white transition-colors">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-10">
                                        <Button asChild size="lg" className="h-16 md:h-20 px-12 md:px-20 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-lg md:text-xl shadow-[0_20px_60px_-10px_rgba(34,197,94,0.6)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4 w-full sm:w-auto">
                                            <Link href="/library">
                                                DEPLOY NOW <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-zinc-950 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center sm:items-start">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none">₹999</span>
                                            </div>
                                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">ONE-TIME • OWN FOREVER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l border-white/5 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-16 lg:mt-0 space-y-16">
                                 <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">ACTIVE_RISK_MONITOR</p>
                                 
                                 <div className="flex flex-col gap-12 md:gap-16">
                                     <OperationalAlert 
                                        title="[!] RISK: EXPIRED_KDM_KEYS" 
                                        sub="Screen 04: show blackout imminent" 
                                        time="10:42:01"
                                        delay="0.2s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] LOSS: CONCESSION_LEAKAGE" 
                                        sub="Yield variance detected: -14%" 
                                        time="01:15:44"
                                        delay="0.4s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] RISK: FIRE_EXIT_BLOCKAGE" 
                                        sub="Egress path obstructed: Screen 02" 
                                        time="02:30:12"
                                        delay="0.6s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] CRITICAL: COMMS_FAILURE" 
                                        sub="Emergency PA system: offline" 
                                        time="04:05:09"
                                        delay="0.8s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. SYSTEM MODULES: INFRASTRUCTURE GRID --- */}
                <Section className="bg-white border-b border-zinc-100" id="modules">
                    <div className="max-w-[1200px] mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">INFRASTRUCTURE COMPONENTS</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">The Engine Core</h2>
                            <p className="text-zinc-500 text-sm font-bold italic uppercase">A complete technical ecosystem delivered as one integrated master engine</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                { t: "EXECUTIVE DASHBOARD", i: Monitor, active: true },
                                { t: "SHOW READINESS ENGINE", i: Clapperboard },
                                { t: "CONCESSION YIELD TRACKER", i: Popcorn },
                                { t: "PROJECTION TECH LOGS", i: Projector },
                                { t: "SHIFT HANDOVER BRIDGE", i: History },
                                { t: "BOX OFFICE CASH AUDIT", i: Ticket },
                                { t: "SAFETY & EHS TRACKER", i: ShieldCheck },
                                { t: "TEAM DIRECTORY", i: Users },
                                { t: "DAILY EXECUTION LEDGER", i: FileSignature },
                                { t: "INCIDENT REGISTRY", i: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className={cn(
                                    "p-10 rounded-[1.5rem] border border-zinc-100 bg-zinc-50/30 flex flex-col items-center justify-center gap-8 transition-all group h-[240px] shadow-sm text-center relative",
                                    item.active && "ring-2 ring-emerald-500/20 border-emerald-500/20 bg-white"
                                )}>
                                    <item.i className={cn(
                                        "w-14 h-14 transition-all duration-500",
                                        item.active ? "text-emerald-500" : "text-zinc-300 group-hover:text-emerald-500/60"
                                    )} />
                                    <span className={cn(
                                        "text-[10px] font-black uppercase tracking-widest leading-tight italic",
                                        item.active ? "text-zinc-800" : "text-zinc-400 group-hover:text-zinc-600"
                                    )}>{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 3. INSIDE THE SYSTEM: EVIDENCE --- */}
                <Section className="bg-zinc-50/50" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-24 md:space-y-40">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px] px-12 py-3 rounded-none italic bg-white shadow-sm">OPERATIONAL EVIDENCE</Badge>
                            <h2 className="text-[32px] md:text-7xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Technical Artifacts</h2>
                            <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase max-w-2xl mx-auto text-center">Physical evidence from the Cinema Operations Engine</p>
                        </div>

                        {/* Artifact 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                            <div className="space-y-10 text-left order-2 lg:order-1">
                                <div className="space-y-4">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Executive Dashboard</h4>
                                    <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase leading-relaxed text-left">Centralized visibility into technical uptime, concession margins, and unresolved incidents across every unit.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {["Multi-screen health synthesis", "Site-wise risk mapping", "Unresolved P1 tracking"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <Check className="w-5 h-5 text-emerald-500" />
                                            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <BrowserFrame src={DASHBOARD_IMAGE} label="EXECUTIVE_DASHBOARD" />
                            </div>
                        </div>

                        {/* Artifact 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                            <div className="relative">
                                <BrowserFrame src={CONCESSION_IMAGE} label="CONCESSION_YIELD_ENGINE" />
                            </div>
                            <div className="space-y-10 text-left">
                                <div className="space-y-4">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Concession Shield</h4>
                                    <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase leading-relaxed text-left">Reconcile raw-corn usage to actual bucket sales. Stop unrecorded profit leakage during interval rushes.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {["Yield variance detection", "Aggregator parity audits", "Wastage reconciliation"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <Check className="w-5 h-5 text-emerald-500" />
                                            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. STAFF VIEW: THE FEAR KILLER --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="usability">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center max-w-6xl mx-auto">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[11px] italic">USABILITY STANDARD</Badge>
                                <h2 className="text-5xl md:text-[6.5rem] font-black font-headline uppercase italic leading-[0.85] text-left tracking-tighter">Complexity <br className="hidden md:block"/> kills adoption.</h2>
                                <p className="text-zinc-400 text-lg md:text-2xl font-bold italic leading-relaxed text-left uppercase">
                                    Simple enough for the floor. <br/> Deep enough for leadership.
                                </p>
                            </div>
                            
                            <div className="grid gap-8">
                                {[
                                    { t: "BINARY VERIFICATION", d: "Staff simply enter their name to confirm completion. Status turns GREEN instantly.", i: CheckCircle2 },
                                    { t: "BUILT-IN TRAINER NOTES", d: "Every technical task explains HOW to perform the step correctly on the floor.", i: GraduationCap },
                                    { t: "VISIBLE CONSEQUENCES", d: "Teams see exactly what failure causes before a small miss becomes an incident.", i: AlertTriangle },
                                    { t: "MOBILE INFRASTRUCTURE", d: "Runs through Google Sheets without app installation or login friction.", i: Smartphone }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 p-8 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1 text-left">
                                            <h4 className="text-base font-black uppercase tracking-widest text-white">{item.t}</h4>
                                            <p className="text-[12px] md:text-sm font-bold text-zinc-500 italic uppercase leading-relaxed text-left">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-4 bg-white/5 border border-white/10 rounded-[3.5rem] shadow-2xl">
                             <img src={CINEMA_TASKS_IMAGE} alt="Staff View" className="w-full h-auto rounded-[3rem]" />
                             <div className="absolute bottom-16 left-12 right-12 p-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-between shadow-2xl">
                                 <p className="text-[11px] font-mono text-emerald-500/90 uppercase tracking-[0.2em] leading-none">VIEW: DAILY_LEDGER_MOBILE</p>
                                 <Smartphone className="w-6 h-6 text-emerald-500/30" />
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. THE LOOP: HOW IT RUNS --- */}
                <Section className="bg-white" noSpine id="loop">
                    <div className="max-w-[1000px] mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">OPERATIONAL LOOP</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tight">The Machine Logic</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                            {/* Technical connecting lines (desktop only) */}
                            <div className="absolute top-12 left-0 right-0 h-px bg-zinc-100 z-0 hidden md:block" />
                            
                            {[
                                { t: "MISSION ASSIGNMENT", d: "Map staff names to cinema roles once in the Team Hub.", i: Users },
                                { t: "DAILY EXECUTION", d: "Staff log completion on their phones throughout the shift.", i: Activity },
                                { t: "AUTO-SYNTHESIS", d: "Ledger status and yields update the dashboard in real-time.", i: Zap },
                                { t: "EXECUTIVE OVERSIGHT", d: "Management reviews site-wise health from a single screen.", i: Monitor }
                            ].map((step, i) => (
                                <div className="space-y-8 relative z-10 text-center md:text-left" key={i}>
                                    <div className="w-24 h-24 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center text-zinc-950 shadow-xl mx-auto md:mx-0 group hover:border-emerald-500 transition-all duration-500">
                                        <step.i className="w-10 h-10 text-zinc-300 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-lg uppercase italic leading-tight text-zinc-950">{step.t}</h4>
                                        <p className="text-xs text-zinc-500 font-bold italic leading-relaxed uppercase">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 6. CONTINUITY: THE SYSTEM STAYS --- */}
                <Section className="bg-zinc-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-[1fr,450px] gap-16 md:gap-32 items-center">
                            <div className="space-y-10 text-left">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px] italic">OPERATIONAL CONTINUITY</Badge>
                                    <h2 className="text-[40px] md:text-7xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.92]">
                                        When Managers Leave, <br/> The System Stays.
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-zinc-500 text-xl md:text-2xl font-bold italic leading-tight uppercase">
                                        Remove the risk of tribal knowledge and undocumented standards
                                    </p>
                                    <div className="p-10 bg-white border border-zinc-200 rounded-[2rem] shadow-sm space-y-6">
                                        <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.5em] italic leading-relaxed">
                                            PROTECTION DURING:
                                        </p>
                                        <div className="grid grid-cols-2 gap-6">
                                            {["Resignations", "Rapid expansion", "Blockbuster rushes", "Night shifts"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 text-xs font-black uppercase text-zinc-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 w-full">
                                {[
                                    "Standards remain visible daily",
                                    "Teams follow one shared system",
                                    "New managers onboard in hours",
                                    "Daily execution is measurable",
                                    "Continuity becomes infrastructure"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-7 bg-white border border-zinc-200 rounded-2xl group hover:border-emerald-500/40 transition-all shadow-sm">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                        <span className="text-[12px] md:text-sm font-black uppercase tracking-widest text-zinc-950 italic">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 7. FINAL CTA: READY TO RUN --- */}
                <section className="bg-zinc-950 text-white py-32 md:py-56 text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="https://i.postimg.cc/43gVfgjd/multiplex2.avif" className="w-full h-full object-cover opacity-20 grayscale brightness-50" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                    </div>
                    <div className="max-w-5xl mx-auto space-y-16 relative z-10 px-6">
                        <div className="space-y-8">
                            <h2 className="text-[50px] md:text-[110px] font-black font-headline leading-[0.82] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> your multiplex?</h2>
                            <p className="text-xl md:text-4xl text-zinc-500 font-bold italic uppercase tracking-[0.2em]">Full deployment in under 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-16">
                            <button className="h-20 md:h-28 px-14 md:px-28 rounded-[2.5rem] md:rounded-[3.5rem] bg-emerald-500 text-black font-black uppercase italic text-xl md:text-5xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-10">
                                <Link href="/library" className="flex items-center gap-8">
                                    GET THE SYSTEM <ArrowRight className="w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-4" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[50px] md:text-[84px] font-black italic">₹999</p>
                                    <span className="text-2xl md:text-5xl font-bold text-zinc-700 italic">/ $12</span>
                                </div>
                                <p className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-600 italic">
                                    ONE-TIME PURCHASE • OWN FOREVER • NO SUBSCRIPTIONS
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <Section className="bg-white" noSpine>
                    <div className="max-w-[800px] mx-auto space-y-16">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">Questions & Answers</h2>
                        
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-zinc-50 px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Can my team break the system?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    No. You can lock technical formulas and master data so only the daily task columns can be edited by staff. This ensures the engine remains bulletproof while allowing daily reporting.
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-2" className="bg-zinc-50 px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Is this difficult to roll out?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    No. Your team already knows Excel and Google Sheets. There are no new passwords to manage and no complex training required. You can go live across a multiplex in under an hour.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-zinc-50 px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Can I customize the SOPs?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    Yes. The system is 100% unlocked for the owner. You can add, delete, or modify any technical task to fit your specific brand standards or local regulations.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

            </main>
            
            <Footer />
        </div>
    );
}
