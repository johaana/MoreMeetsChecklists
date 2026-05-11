'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    X,
    ArrowRight, 
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Lock,
    Target,
    History,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    Zap,
    Monitor,
    Users,
    Wrench,
    Clapperboard,
    Sparkles,
    Crown,
    ChevronRight,
    Projector,
    Ticket,
    Popcorn,
    ShieldAlert,
    LayoutGrid,
    SearchCheck,
    Clock,
    ClipboardList,
    FileSignature,
    Database,
    Table
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';

// --- CINEMA PRODUCT EVIDENCE ---
const IMG_DASHBOARD = "https://i.postimg.cc/B6YtmpVn/Screenshot-2026-05-10-150332.png";
const IMG_CONCESSION = "https://i.postimg.cc/HxZj6zht/Screenshot-2026-05-10-150441.png";
const IMG_TASKS = "https://i.postimg.cc/63jTMcm0/Screenshot-2026-05-10-150522.png";
const IMG_INCIDENTS = "https://i.postimg.cc/G279XK5M/Screenshot-2026-05-10-150732.png";
const CINEMA_HERO = "https://i.postimg.cc/43gVfgjd/multiplex2.avif";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
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
                        {label}
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
            <span className="text-[14px] md:text-[18px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <span className="animate-pulse">[!]</span> {title}
            </span>
            <span className="text-[9px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{time}</span>
        </div>
        <p className="text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-widest italic leading-tight">{sub}</p>
    </div>
);

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. HERO: ONE-GLANCE COMMAND --- */}
                <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={CINEMA_HERO} 
                            alt="Multiplex Environment" 
                            className="w-full h-full object-cover opacity-50 grayscale-[0.2]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-12 md:py-20">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr,0.7fr] lg:gap-20 items-center">
                            <div className="space-y-8 md:space-y-10">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-white/5">MULTIPLEX ENVIRONMENT</Badge>
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-emerald-500/5">CINEMA OPERATIONS SYSTEM</Badge>
                                        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block">REF: V11.9_STABLE</span>
                                    </div>
                                    <h1 className="text-[40px] md:text-6xl lg:text-[5.5rem] font-black font-headline tracking-tighter uppercase italic leading-[0.9] text-white">
                                        STOP CHASING TEAMS. <br/> <span className="text-emerald-500">SEE EVERY SCREEN.</span>
                                    </h1>
                                    <div className="space-y-4 pt-2">
                                        <p className="text-base md:text-xl lg:text-2xl text-zinc-300 font-medium italic max-w-2xl leading-tight">
                                            Live operational visibility for show readiness, concession control, crowd flow, technical uptime, and daily execution.
                                        </p>
                                        <div className="flex flex-col gap-1.5 border-l-2 border-emerald-500/40 pl-6">
                                            <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wide">Reduce dependency on individual memory.</p>
                                            <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wide text-white/80">Verify critical responsibilities in real time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                                    {[
                                        "140+ PRE-BUILT CINEMA SOPs",
                                        "LIVE OPERATIONS DASHBOARD",
                                        "BUILT-IN TRAINER NOTES",
                                        "AUDIT-READY DOCUMENTATION",
                                        "LIVE IN 10 MINUTES"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 pt-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-8">
                                        <Button asChild size="lg" className="h-16 md:h-20 px-10 md:px-14 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-base md:text-lg shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-3 w-full sm:w-auto">
                                            <Link href="/library">
                                                GET THE SYSTEM <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <Button asChild variant="outline" className="h-16 px-10 rounded-xl border-white/10 text-white font-black uppercase italic text-xs tracking-widest hover:bg-white/5 w-full sm:w-auto">
                                            <Link href="#modules">VIEW SYSTEM MODULES</Link>
                                        </Button>
                                    </div>
                                    <p className="text-[8px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic text-center sm:text-left">
                                        BUILT IN EXCEL • SHARED THROUGH GOOGLE SHEETS • NO APP ROLLOUT • ONE-TIME PURCHASE
                                    </p>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l border-white/5 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-10">
                                 <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">REAL-TIME RISK MONITORING CONSOLE</p>
                                 
                                 <div className="flex flex-col gap-8 md:gap-12">
                                     <OperationalAlert 
                                        title="EXPIRED KDM KEY" 
                                        sub="Screen 04 unavailable for evening show" 
                                        time="10:42 AM"
                                        delay="0.2s" 
                                     />
                                     <OperationalAlert 
                                        title="INTERVAL CONGESTION" 
                                        sub="Concession queue exceeding threshold" 
                                        time="01:15 PM"
                                        delay="0.4s" 
                                     />
                                     <OperationalAlert 
                                        title="FIRE EXIT VERIFICATION OVERDUE" 
                                        sub="Safety compliance check pending" 
                                        time="02:30 PM"
                                        delay="0.6s" 
                                     />
                                     <OperationalAlert 
                                        title="COLD CHAIN BREACH" 
                                        sub="Fridge temperature exceeded threshold" 
                                        time="04:05 PM"
                                        delay="0.8s" 
                                     />
                                 </div>

                                 <div className="pt-10 grid grid-cols-2 gap-4 lg:justify-end text-left lg:text-right">
                                     {[
                                         { l: "TECH_UPTIME", v: "100%", c: "text-emerald-500" },
                                         { l: "AUDIT_STATUS", v: "STABLE", c: "text-emerald-500" },
                                         { l: "SCREEN_LOAD", v: "NORMAL", c: "text-zinc-500" },
                                         { l: "SYSTEM_ACTIVE", v: "YES", c: "text-emerald-500" }
                                     ].map((stat, i) => (
                                         <div key={i} className="flex flex-col gap-0.5">
                                             <span className="text-[7px] font-mono text-zinc-600 tracking-widest">{stat.l}</span>
                                             <span className={cn("text-[10px] font-black italic", stat.c)}>{stat.v}</span>
                                         </div>
                                     ))}
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. INDUSTRY REALITY: WHY OPS BREAK --- */}
                <Section className="bg-white border-y border-zinc-100" id="reality">
                    <div className="max-w-5xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">INDUSTRY REALITY</Badge>
                            <h2 className="text-[32px] md:text-5xl font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">Why cinema operations break</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 md:gap-32 relative">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                            
                            <div className="space-y-12">
                                <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] italic border-b border-zinc-100 pb-4">Operational Pitfalls</h4>
                                <div className="space-y-8">
                                    {[
                                        "Black-screens discovered too late",
                                        "Projection readiness depends on memory",
                                        "Interval rush creates hygiene failures",
                                        "Teams skip checks during busy hours",
                                        "Concession leakage goes unnoticed",
                                        "Safety drills become paperwork only"
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-200 group-hover:bg-red-500 transition-colors" />
                                            <span className="text-zinc-500 text-lg font-bold italic leading-tight text-left uppercase tracking-tight">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-12">
                                <h4 className="text-[11px] font-black text-red-600 uppercase tracking-[0.4em] italic border-b border-red-100 pb-4">The Consequence</h4>
                                <div className="space-y-6">
                                    {[
                                        "Revenue loss per cancelled screen",
                                        "Public escalation risks",
                                        "Audit exposure",
                                        "Brand trust erosion",
                                        "Chaotic interval operations",
                                        "Manager burnout from chasing"
                                    ].map((p, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex items-center gap-4 relative overflow-hidden group">
                                            <div className="absolute inset-y-0 left-0 w-1 bg-red-500/20 group-hover:bg-red-500 transition-all" />
                                            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                                            <span className="text-red-950 font-black text-sm leading-tight italic uppercase">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 3. OPERATIONAL LOOP: HOW IT RUNS --- */}
                <Section className="bg-zinc-50/50" id="loop">
                    <div className="max-w-[1000px] mx-auto space-y-20">
                        <div className="text-center space-y-3">
                            <Badge className="bg-zinc-950 text-white rounded-none font-black uppercase tracking-widest text-[9px] px-8 py-2">THE MACHINE</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 italic uppercase tracking-tight">How the system runs</h2>
                            <p className="text-zinc-500 text-sm font-bold uppercase italic">A linear, zero-fail operational flow for every shift.</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-stretch gap-6 relative">
                            {[
                                { t: "MISSION ASSIGNMENT", d: "Projection, concession, and safety SOPs assigned automatically by role.", i: LayoutGrid },
                                { t: "TEAM EXECUTION", d: "Staff complete checks from mobile in seconds. Zero friction.", i: Users },
                                { t: "DEVIATION FLAGGING", d: "Missed checks instantly visible on dashboard for intervention.", i: ShieldAlert },
                                { t: "EXECUTIVE VISIBILITY", d: "Leadership sees total operational health across all screens.", i: Monitor }
                            ].map((step, i) => (
                                <div key={i} className="flex-1 relative group">
                                    <div className="p-10 rounded-2xl bg-white border border-zinc-200 flex flex-col items-center text-center gap-6 group-hover:border-emerald-500/40 transition-all h-full shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-emerald-600 shadow-inner border border-zinc-100 font-black italic text-lg">
                                            {i + 1}
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-black uppercase italic text-sm tracking-tight text-zinc-950 leading-tight">{step.t}</h4>
                                            <p className="text-[11px] font-bold text-zinc-400 uppercase italic leading-relaxed">{step.d}</p>
                                        </div>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center">
                                            <ChevronRight className="w-6 h-6 text-zinc-200" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 4. INSIDE THE SYSTEM: EVIDENCE --- */}
                <Section className="bg-white" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[9px] px-8 py-2 rounded-none italic">PHYSICAL EVIDENCE</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Inside the System</h2>
                            <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase max-w-2xl mx-auto">Actual operational components for high-gravity multiplex management.</p>
                        </div>

                        {/* Artifact 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left order-2 lg:order-1">
                                <div className="space-y-2">
                                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950">Cinema Operations Dashboard</h4>
                                    <p className="text-zinc-500 text-sm md:text-lg font-bold italic uppercase leading-relaxed">See technical uptime, concession margins, risk levels, and unresolved deviations across all screens in one glance.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {["Group health synthesis", "Site-wise risk mapping", "P1 Incident tracking"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <BrowserFrame src={IMG_DASHBOARD} label="EXECUTIVE_OPERATIONS_DASHBOARD" />
                            </div>
                        </div>

                        {/* Artifact 2 */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative">
                                <BrowserFrame src={IMG_CONCESSION} label="CONCESSION_YIELD_MONITORING" />
                            </div>
                            <div className="space-y-8 text-left">
                                <div className="space-y-2">
                                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950">Concession Yield Engine</h4>
                                    <p className="text-zinc-500 text-sm md:text-lg font-bold italic uppercase leading-relaxed">Corn-to-bucket reconciliation, void-bill audits, wastage tracking, and interval throughput monitoring to stop profit leakage.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {["Yield variance alerts", "Aggregator parity check", "Wastage cost analysis"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Artifact 3 */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left order-2 lg:order-1">
                                <div className="space-y-2">
                                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950">Incident & Audit Registry</h4>
                                    <p className="text-zinc-500 text-sm md:text-lg font-bold italic uppercase leading-relaxed">Verifiable proof for projection checks, subtitle sync, audio calibration, emergency lighting, and pre-show safety clearance.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {["Legal defense logs", "NOC expiry tracking", "Incident root-cause mapping"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <BrowserFrame src={IMG_INCIDENTS} label="LIABILITY_INCIDENT_REGISTRY" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. USABILITY: COMPLEXITY KILLS ADOPTION --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="usability">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] italic">USABILITY STANDARD</Badge>
                                <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic leading-[0.9] text-left">Complexity <br className="hidden md:block"/> kills adoption.</h2>
                                <p className="text-zinc-400 text-base md:text-xl font-bold italic leading-relaxed text-left uppercase">
                                    Designed to be simple enough for the floor and deep enough for leadership.
                                </p>
                            </div>
                            
                            <div className="grid gap-6">
                                {[
                                    { t: "BINARY VERIFICATION", d: "Teams simply enter names to confirm completion. Status turns GREEN instantly.", i: CheckCircle2 },
                                    { t: "BUILT-IN TRAINER NOTES", d: "Every task explains HOW to perform the step correctly on the floor.", i: GraduationCap },
                                    { t: "VISIBLE CONSEQUENCES", d: "Teams see what failure causes before small misses become incidents.", i: AlertTriangle },
                                    { t: "MOBILE FRIENDLY", d: "Runs through Google Sheets without app installation or training overhead.", i: Smartphone }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                                            <item.i className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1 text-left">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-white">{item.t}</h4>
                                            <p className="text-[11px] md:text-xs font-bold text-zinc-500 italic uppercase leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-3 bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl">
                             <img src={IMG_TASKS} alt="Mobile Ledger View" className="w-full h-auto rounded-[2.5rem]" />
                             <div className="absolute bottom-12 left-10 right-10 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                                 <p className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest leading-none">VIEW: DAILY_LEDGER_MOBILE</p>
                                 <Smartphone className="w-5 h-5 text-emerald-500/30" />
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 6. SYSTEM MODULES: COMPONENTS --- */}
                <Section className="bg-white border-b border-zinc-100" id="modules">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">OPERATIONAL INFRASTRUCTURE</Badge>
                            <h2 className="text-[32px] md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Included Cinema Modules</h2>
                            <p className="text-zinc-500 text-sm font-bold italic uppercase">A full technical ecosystem delivered as institutional Excel assets.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { t: "01_EXECUTIVE_DASHBOARD.xlsx", i: Monitor },
                                { t: "02_SHOW_READINESS_ENGINE.xlsx", i: Clapperboard },
                                { t: "03_CONCESSION_YIELD_TRACKER.xlsx", i: Popcorn },
                                { t: "04_PROJECTION_TECH_LOGS.xlsx", i: Projector },
                                { t: "05_SHIFT_HANDOVER_BRIDGE.xlsx", i: History },
                                { t: "06_BOX_OFFICE_CASH_AUDIT.xlsx", i: Ticket },
                                { t: "07_SAFETY_EHS_TRACKER.xlsx", i: ShieldCheck },
                                { t: "08_TEAM_DIRECTORY.xlsx", i: Users },
                                { t: "09_DAILY_EXECUTION_LEDGER.xlsx", i: FileSignature },
                                { t: "10_INCIDENT_REGISTRY.xlsx", i: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 flex flex-col items-center gap-5 hover:border-emerald-500/30 transition-all group h-full shadow-sm">
                                    <item.i className="w-8 h-8 text-zinc-300 group-hover:text-emerald-500 transition-all" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-center text-zinc-500 leading-tight italic font-mono">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 7. CONTINUITY: WHEN MANAGERS LEAVE --- */}
                <Section className="bg-zinc-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-[1fr,450px] gap-16 md:gap-24 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px] italic">OPERATIONAL CONTINUITY</Badge>
                                    <h2 className="text-[34px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                                        When Managers Leave, <br/> The System Stays.
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase">
                                        Most cinema operations depend on verbal follow-ups, tribal knowledge, and experienced managers remembering everything.
                                    </p>
                                    <div className="p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm space-y-4">
                                        <p className="text-zinc-400 text-xs font-black uppercase tracking-widest italic leading-relaxed">
                                            This breaks during:
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {["Resignations", "Rapid expansion", "Busy weekends", "Understaffed shifts"].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-600">
                                                    <div className="w-1 h-1 rounded-full bg-red-400" /> {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 w-full">
                                {[
                                    "Standards remain visible",
                                    "Teams follow one operational language",
                                    "New managers onboard faster",
                                    "Daily execution becomes measurable",
                                    "Continuity becomes infrastructure"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 p-6 bg-white border border-zinc-200 rounded-2xl group hover:border-emerald-500/40 transition-all shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-[11px] md:text-xs font-black uppercase tracking-widest text-zinc-950 italic">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 8. BUILT FOR: LEADERSHIP --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">IDENTIFICATION</Badge>
                            <h2 className="text-[32px] md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">Built for Cinema Leadership</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { role: "GROUP OWNERS & COOs", d: "For group-wide visibility into uptime, risk, and operational consistency across all screens.", i: Crown },
                                { role: "UNIT GENERAL MANAGERS", d: "To standardize daily execution and reduce manual chasing during high-traffic shifts.", i: LayoutGrid },
                                { role: "TECHNICAL DIRECTORS", d: "To ensure projection readiness and zero-fail technical audits before blockbusters.", i: Wrench },
                                { role: "CONCESSION LEADERS", d: "To monitor wastage, interval throughput, hygiene, and margin leakage in real-time.", i: Popcorn }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] border border-zinc-100 bg-zinc-50 flex gap-8 items-center hover:bg-white hover:shadow-2xl transition-all group">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                                        <item.i className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950 font-headline leading-tight">{item.role}</h4>
                                        <p className="text-[11px] font-bold text-zinc-400 italic leading-relaxed uppercase">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 9. CUSTOMIZATION: TAILORING --- */}
                <Section className="bg-zinc-50" noSpine id="tailoring">
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-zinc-200 bg-white shadow-2xl relative overflow-hidden text-center space-y-10">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Sparkles className="w-64 h-64 text-primary" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-none font-black tracking-widest text-[9px] uppercase px-8 py-2 italic">TAILORING SUPPORT</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                                Need help tailoring the <br className="hidden md:block" /> system to your multiplex?
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-lg font-bold italic max-w-2xl mx-auto uppercase leading-relaxed">
                                Every multiplex operates differently. We offer optional professional support for screen hierarchy adaptation and reporting structures.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-zinc-950 text-white font-black uppercase italic text-sm md:text-base shadow-xl hover:scale-105 transition-all border-none group">
                                <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                    REQUEST CUSTOMIZATION SUPPORT <ArrowRight className="ml-3 w-5 h-5" />
                                </Link>
                            </Button>
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 italic">
                                <span>TAILORED BUILDS START AT ₹9,999</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-300" />
                                <span>NO OBLIGATION DISCOVERY</span>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 10. FAQ SECTION --- */}
                <Section className="bg-white" id="faq">
                    <div className="max-w-3xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                             <h2 className="text-[32px] md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">Questions & Answers</h2>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="border-none bg-zinc-50 px-8 rounded-2xl overflow-hidden">
                                <AccordionTrigger className="text-lg font-black uppercase italic hover:no-underline py-8 text-zinc-950">We already have SOPs. Why do we need this?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-base pb-8 italic font-bold leading-relaxed uppercase">
                                    Most cinemas already have SOPs. The problem is execution. SOPs sit in folders. MoreMeets converts them into visible daily operational execution. 
                                    <br/><br/>
                                    <span className="text-emerald-600 font-black">SOPs = DOCUMENTATION | MOREMEETS = EXECUTION</span>
                                </AccordionContent>
                            </AccordionItem>
                            
                            {[
                                { q: "Will teams actually use this?", a: "Yes, because it's simple. Staff simply enter their name to confirm tasks. No logins, no complex apps, no learning curve." },
                                { q: "Does this work without an app?", a: "Yes. It runs entirely on Excel and Google Sheets. You maintain 100% data ownership without recurring SaaS fees." },
                                { q: "What happens when managers resign?", a: "The system stays. Tribal knowledge is replaced by institutional infrastructure. New hires onboard 50% faster." },
                                { q: "Is this system audit-ready?", a: "Absolutely. Every log entry includes a required proof field, creating a permanent audit trail for insurance and safety inspectors." },
                                { q: "Can we lock formulas and controls?", a: "Yes. You can lock the core engine so staff can only update daily completion fields." }
                            ].map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i+2}`} className="border-none bg-zinc-50 px-8 rounded-2xl overflow-hidden">
                                    <AccordionTrigger className="text-lg font-black uppercase italic hover:no-underline py-8 text-zinc-950">{faq.q}</AccordionTrigger>
                                    <AccordionContent className="text-zinc-500 text-base pb-8 italic font-bold leading-relaxed uppercase">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Section>

                {/* --- 11. FINAL CTA: READY TO RUN --- */}
                <section className="bg-zinc-950 text-white py-24 md:py-48 text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={CINEMA_HERO} className="w-full h-full object-cover opacity-20 grayscale brightness-50" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                    </div>
                    <div className="max-w-5xl mx-auto space-y-12 relative z-10 px-6">
                        <div className="space-y-6">
                            <h2 className="text-[44px] md:text-[90px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> every screen?</h2>
                            <p className="text-xl md:text-3xl text-zinc-500 font-bold italic uppercase tracking-widest">Full deployment takes less than 10 minutes.</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-12">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] md:rounded-[3rem] bg-emerald-500 text-black font-black uppercase italic text-lg md:text-4xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-8">
                                <Link href="/library" className="flex items-center gap-6">
                                    GET THE SYSTEM <ArrowRight className="w-8 h-8 md:w-14 md:h-14 transition-transform group-hover:translate-x-4" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-baseline gap-4">
                                    <p className="text-[44px] md:text-[72px] font-black italic">₹999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-zinc-700 italic">/ $12</span>
                                </div>
                                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">
                                    ONE-TIME PURCHASE • OWN FOREVER • NO SaaS
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

