'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Activity,
    CheckCircle2,
    Lock,
    Target,
    History,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    Monitor,
    Users,
    Clapperboard,
    ChevronRight,
    Projector,
    Ticket,
    Popcorn,
    ShieldAlert,
    LayoutGrid,
    FileSignature
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';

// --- AUTHENTIC CINEMA ASSETS ---
const IMG_DASHBOARD = "https://i.postimg.cc/B6YtmpVn/Screenshot-2026-05-10-150332.png";
const IMG_CONCESSION = "https://i.postimg.cc/HxZj6zht/Screenshot-2026-05-10-150441.png";
const IMG_TASKS = "https://i.postimg.cc/63jTMcm0/Screenshot-2026-05-10-150522.png";
const IMG_INCIDENTS = "https://i.postimg.cc/G279XK5M/Screenshot-2026-05-10-150732.png";
const CINEMA_HERO = "https://i.postimg.cc/43gVfgjd/multiplex2.avif";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-12 md:py-24 relative overflow-hidden", className)}>
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
            <span className="text-[16px] md:text-[24px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_30px_rgba(239,68,68,0.7)]">
                <span className="animate-pulse">●</span> {title}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">{time}</span>
        </div>
        <p className="text-[11px] md:text-[13px] font-bold text-white/40 uppercase tracking-widest italic leading-tight">{sub}</p>
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
                
                {/* --- 1. HERO: TIGHT, AGGRESSIVE TYPOGRAPHY --- */}
                <section className="relative w-full min-h-[85svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={CINEMA_HERO} 
                            alt="Multiplex Operations" 
                            className="w-full h-full object-cover opacity-60 grayscale-[0.1]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-12 md:py-16">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.3fr,0.7fr] lg:gap-24 items-center">
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-white/5">SYS_ID: CINEMA_SOVEREIGN</Badge>
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[9px] px-4 py-1.5 rounded-none bg-emerald-500/5 italic">OPERATIONAL_INFRASTRUCTURE</Badge>
                                    </div>
                                    <h1 className="text-[48px] md:text-8xl lg:text-[7.5rem] font-black font-headline tracking-tighter uppercase italic leading-[0.82] text-white">
                                        STOP CHASING.<br/> <span className="text-emerald-500">START SEEING.</span>
                                    </h1>
                                    <div className="space-y-6 pt-2">
                                        <p className="text-xl md:text-3xl lg:text-4xl font-black italic text-zinc-100 max-w-2xl leading-[1.05] uppercase tracking-tight">
                                            Technical command for show readiness, <br className="hidden md:block" /> crowd flow, and concession yield.
                                        </p>
                                        <div className="flex flex-col gap-2 border-l-4 border-emerald-500/60 pl-8 max-w-xl">
                                            <p className="text-base md:text-lg text-zinc-400 font-bold leading-relaxed italic">
                                                Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-8">
                                        <Button asChild size="lg" className="h-16 md:h-20 px-12 md:px-16 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-base md:text-xl shadow-[0_20px_50px_-10px_rgba(34,197,94,0.5)] hover:bg-white transition-all border-none group flex items-center justify-center gap-3 w-full sm:w-auto">
                                            <Link href="/library">
                                                DEPLOY SYSTEM <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center sm:items-start">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl md:text-4xl font-black text-white italic tracking-tighter leading-none">₹999</span>
                                                <span className="text-sm font-bold text-zinc-600 line-through">₹5,999</span>
                                            </div>
                                            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">ONE-TIME • OWN FOREVER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l border-white/5 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-16">
                                 <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">ACTIVE_RISK_FEED</p>
                                 
                                 <div className="flex flex-col gap-10 md:gap-14">
                                     <OperationalAlert 
                                        title="[!] ERR_KDM_EXPIRED" 
                                        sub="Screen 04: show blackout imminent" 
                                        time="10:42:01"
                                        delay="0.2s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] LVL_CONGESTION_HI" 
                                        sub="Interval rush bottleneck detected" 
                                        time="01:15:44"
                                        delay="0.4s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] COMMS_TIMEOUT" 
                                        sub="Emergency response check overdue" 
                                        time="02:30:12"
                                        delay="0.6s" 
                                     />
                                     <OperationalAlert 
                                        title="[!] CCP_COLD_BREACH" 
                                        sub="Concession Dairy: Threshold Exceeded" 
                                        time="04:05:09"
                                        delay="0.8s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. THE MACHINE: LINEAR OPERATIONAL LOOP --- */}
                <Section className="bg-zinc-50/50" id="loop">
                    <div className="max-w-[1100px] mx-auto space-y-20">
                        <div className="text-center space-y-3">
                            <Badge className="bg-zinc-950 text-white rounded-none font-black uppercase tracking-widest text-[10px] px-10 py-2.5 italic shadow-lg">THE OPERATIONAL LOOP</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 italic uppercase tracking-tight">How the system runs</h2>
                            <p className="text-zinc-500 text-sm font-bold uppercase italic">From floor execution to group-level oversight</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-stretch gap-6 relative">
                            {[
                                { t: "DAILY ASSIGNMENT", d: "Projection, concession, and safety SOPs assigned automatically by role.", i: LayoutGrid },
                                { t: "TEAM EXECUTION", d: "Staff complete checks from mobile in seconds. Zero technical training.", i: Users },
                                { t: "DEVIATION FLAGGING", d: "Missed checks instantly visible on dashboard for manager intervention.", i: ShieldAlert },
                                { t: "EXECUTIVE VISIBILITY", d: "Leadership sees total operational health across all screens live.", i: Monitor }
                            ].map((step, i) => (
                                <div key={i} className="flex-1 relative group">
                                    <div className="p-10 rounded-2xl bg-white border border-zinc-200 flex flex-col items-center text-center gap-6 group-hover:border-emerald-500/40 transition-all h-full shadow-sm">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-emerald-600 shadow-inner border border-zinc-100 font-black italic text-xl">
                                            0{i + 1}
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

                {/* --- 3. SYSTEM MODULES: INFRASTRUCTURE GRID (IMAGE MATCH) --- */}
                <Section className="bg-white border-b border-zinc-100" id="modules">
                    <div className="max-w-[1200px] mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">INFRASTRUCTURE MANIFEST</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">System Components</h2>
                            <p className="text-zinc-500 text-sm font-bold italic uppercase">A complete technical ecosystem delivered as one integrated engine</p>
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

                {/* --- 4. INSIDE THE SYSTEM: EVIDENCE --- */}
                <Section className="bg-zinc-50/50" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-24 md:space-y-40">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px] px-12 py-3 rounded-none italic bg-white shadow-sm">OPERATIONAL EVIDENCE</Badge>
                            <h2 className="text-[32px] md:text-7xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Inside the System</h2>
                            <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase max-w-2xl mx-auto">Physical artifacts from the Cinema Master Engine</p>
                        </div>

                        {/* Artifact 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                            <div className="space-y-10 text-left order-2 lg:order-1">
                                <div className="space-y-4">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Executive Dashboard</h4>
                                    <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase leading-relaxed">See technical uptime, concession margins, and unresolved deviations across your multiplex in one glance.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {["Multi-unit health synthesis", "Site-wise risk mapping", "Unresolved P1 tracking"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <Check className="w-5 h-5 text-emerald-500" />
                                            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <BrowserFrame src={IMG_DASHBOARD} label="EXECUTIVE_OPERATIONS_DASHBOARD" />
                            </div>
                        </div>

                        {/* Artifact 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                            <div className="relative">
                                <BrowserFrame src={IMG_CONCESSION} label="CONCESSION_YIELD_MONITORING" />
                            </div>
                            <div className="space-y-10 text-left">
                                <div className="space-y-4">
                                    <h4 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Concession Shield</h4>
                                    <p className="text-zinc-500 text-base md:text-xl font-bold italic uppercase leading-relaxed">Corn-to-bucket reconciliation, void-bill audits, and interval throughput monitoring to stop profit leakage.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {["Yield variance alerts", "Aggregator parity checks", "Inventory wastage analysis"].map((item, i) => (
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

                {/* --- 5. USABILITY: COMPLEXITY KILLS ADOPTION --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="usability">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center max-w-6xl mx-auto">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[11px] italic">USABILITY STANDARD</Badge>
                                <h2 className="text-5xl md:text-[6rem] font-black font-headline uppercase italic leading-[0.85] text-left tracking-tighter">Complexity <br className="hidden md:block"/> kills adoption.</h2>
                                <p className="text-zinc-400 text-lg md:text-2xl font-bold italic leading-relaxed text-left uppercase">
                                    Simple enough for the floor. <br/> Deep enough for leadership.
                                </p>
                            </div>
                            
                            <div className="grid gap-8">
                                {[
                                    { t: "BINARY VERIFICATION", d: "Teams enter names to confirm completion. Status turns GREEN instantly.", i: CheckCircle2 },
                                    { t: "BUILT-IN TRAINER NOTES", d: "Every task explains HOW to perform the step correctly on the floor.", i: GraduationCap },
                                    { t: "VISIBLE CONSEQUENCES", d: "Teams see what failure causes before small misses become incidents.", i: AlertTriangle },
                                    { t: "MOBILE READY", d: "Runs through Google Sheets without app installation or login overhead.", i: Smartphone }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 p-8 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-all">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1 text-left">
                                            <h4 className="text-base font-black uppercase tracking-widest text-white">{item.t}</h4>
                                            <p className="text-[12px] md:text-sm font-bold text-zinc-500 italic uppercase leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-4 bg-white/5 border border-white/10 rounded-[3.5rem] shadow-2xl">
                             <img src={IMG_TASKS} alt="Mobile Ledger View" className="w-full h-auto rounded-[3rem]" />
                             <div className="absolute bottom-16 left-12 right-12 p-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-between shadow-2xl">
                                 <p className="text-[11px] font-mono text-emerald-500/90 uppercase tracking-[0.2em] leading-none">VIEW: LIVE_DAILY_LEDGER</p>
                                 <Smartphone className="w-6 h-6 text-emerald-500/30" />
                             </div>
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
                                        Remove the risk of tribal knowledge and unwritten standards
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
                        <img src={CINEMA_HERO} className="w-full h-full object-cover opacity-20 grayscale brightness-50" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                    </div>
                    <div className="max-w-5xl mx-auto space-y-16 relative z-10 px-6">
                        <div className="space-y-8">
                            <h2 className="text-[50px] md:text-[100px] font-black font-headline leading-[0.82] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> your multiplex?</h2>
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

            </main>
            <Footer />
        </div>
    );
}
