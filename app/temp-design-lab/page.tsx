
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
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import images from '@/lib/placeholder-images.json';

// --- AUTHENTIC SOVEREIGN ASSETS ---
const DASHBOARD_IMAGE = images.find(i => i.id === 'sovereign-dashboard')?.imageUrl!;
const MOBILE_LEDGER_IMAGE = images.find(i => i.id === 'sovereign-mobile')?.imageUrl!;
const VITALS_IMAGE = images.find(i => i.id === 'sovereign-vitals')?.imageUrl!;
const FINANCE_IMAGE = images.find(i => i.id === 'sovereign-finance')?.imageUrl!;

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-10 md:py-16 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, label }: { src: string, label: string }) => (
    <div className="group space-y-4">
        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-zinc-200 bg-white">
            <div className="bg-[#111] border-b border-white/10 px-5 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 border border-white/5 rounded px-6 py-0.5 text-[7px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                        sovereign_master_engine_v11.9
                    </div>
                </div>
            </div>
            <img src={src} alt={label} className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" />
        </div>
    </div>
);

const OperationalAlert = ({ title, sub, time, delay = "0s" }: { title: string, sub: string, time: string, delay?: string }) => (
    <div className="flex flex-col items-start lg:items-end gap-0.5 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-2.5">
            <span className="text-[16px] md:text-[20px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                <span className="animate-pulse">●</span> {title}
            </span>
            <span className="text-[8px] font-mono text-zinc-600 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{time}</span>
        </div>
        <p className="text-[9px] md:text-[11px] font-bold text-white/20 uppercase tracking-widest italic leading-none">{sub}</p>
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
                
                {/* --- 1. HERO: THE ONE-GLANCE COMMAND --- */}
                <section className="relative w-full h-[85svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://i.postimg.cc/43gVfgjd/multiplex2.avif" 
                            alt="" 
                            className="w-full h-full object-cover opacity-50 grayscale-[0.1]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-8">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-12 items-center">
                            <div className="space-y-5 md:space-y-7">
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Badge variant="outline" className="text-zinc-600 border-zinc-800 uppercase tracking-[0.4em] font-black text-[7px] px-2.5 py-1 rounded-none bg-white/5 italic">SYS_REF: CINEMA_SOVEREIGN</Badge>
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[7px] px-2.5 py-1 rounded-none bg-emerald-500/5 italic leading-none">OPERATIONAL_INFRASTRUCTURE</Badge>
                                    </div>
                                    <h1 className="text-[28px] md:text-5xl lg:text-5xl font-black font-headline tracking-tighter uppercase italic leading-[0.85] text-white">
                                        STOP OPERATIONAL DRIFT. <br/> <span className="text-emerald-500">START SEEING EVERY SCREEN.</span>
                                    </h1>
                                    <div className="space-y-4 pt-1">
                                        <p className="text-sm md:text-lg font-black italic text-zinc-300 max-w-2xl leading-tight uppercase tracking-tight">
                                            TECHNICAL COMMAND FOR SHOW READINESS, <br className="hidden md:block" /> CROWD FLOW, AND CONCESSION YIELD.
                                        </p>
                                        <div className="flex flex-col gap-2 border-l-2 border-emerald-500/60 pl-6 max-w-lg">
                                            <p className="text-xs md:text-[13px] text-zinc-400 font-bold leading-relaxed italic">
                                                Built for multiplex leadership where black-screens and concession profit-theft are daily variables you must control.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 pt-1">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                        {[
                                            { t: "120+ PRE-BUILT CINEMA SOPs", i: Target },
                                            { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                            { t: "TRAINER NOTES FOR TEAMS", i: GraduationCap },
                                            { t: "AUDIT-READY DOCUMENTATION", i: FileSignature }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 group">
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                    <Check className="w-2 h-2 text-emerald-500" />
                                                </div>
                                                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] italic text-white/50 group-hover:text-white transition-colors">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                                        <Button asChild size="lg" className="h-12 md:h-14 px-8 md:px-12 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-xs md:text-sm shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-3 w-full sm:w-auto">
                                            <Link href="/library">
                                                DEPLOY NOW <ArrowRight className="w-5 h-5 text-zinc-950 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center sm:items-start">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-xl md:text-3xl font-black text-white italic tracking-tighter leading-none">₹999</span>
                                            </div>
                                            <p className="text-[8px] text-zinc-700 font-black uppercase tracking-[0.4em] italic">ONE-TIME • OWN FOREVER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l border-white/5 pl-6 lg:pl-0 lg:pr-6 lg:text-right mt-12 lg:mt-0 space-y-8">
                                 <p className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.6em] italic">ACTIVE_RISK_MONITOR</p>
                                 
                                 <div className="flex flex-col gap-6 md:gap-7">
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
                                        title="[!] ALERT: HVAC_EFFICIENCY" 
                                        sub="High-load thermal spike detected" 
                                        time="04:05:09"
                                        delay="0.6s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. ENGINE CORE: MODULE GRID --- */}
                <Section className="bg-white border-b border-zinc-100" id="modules">
                    <div className="max-w-[1100px] mx-auto space-y-10 md:space-y-14">
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[8px]">INFRASTRUCTURE COMPONENTS</Badge>
                            <h2 className="text-[26px] md:text-4xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">The Engine Core</h2>
                            <p className="text-zinc-500 text-[9px] md:text-[10px] font-bold italic uppercase tracking-widest text-center">A COMPLETE TECHNICAL ECOSYSTEM DELIVERED AS ONE INTEGRATED MASTER ENGINE</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                            {[
                                { t: "EXECUTIVE DASHBOARD", i: Monitor },
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
                                <div key={i} className="p-5 md:p-6 rounded-2xl border border-zinc-200 flex flex-col items-center justify-center gap-4 transition-all group h-[160px] md:h-[180px] shadow-sm text-center bg-white hover:border-emerald-500/40 hover:shadow-lg">
                                    <item.i className="w-8 h-8 md:w-10 md:h-10 text-slate-400 transition-all duration-500 group-hover:text-emerald-500" />
                                    <span className="text-[9px] font-black uppercase tracking-widest leading-tight italic text-slate-900 group-hover:text-emerald-600">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 3. EVIDENCE: TECHNICAL ARTIFACTS --- */}
                <Section className="bg-zinc-50/50" id="evidence">
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[8px] px-6 py-1.5 rounded-none italic bg-white shadow-sm">OPERATIONAL EVIDENCE</Badge>
                            <h2 className="text-[26px] md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Technical Artifacts</h2>
                            <p className="text-zinc-500 text-[10px] md:text-xs font-bold italic uppercase max-w-2xl mx-auto text-center">Physical evidence from the Cinema Operations Engine</p>
                        </div>

                        {/* Executive View */}
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                            <div className="space-y-6 text-left order-2 lg:order-1">
                                <div className="space-y-2">
                                    <h4 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">Executive Vitals</h4>
                                    <p className="text-zinc-500 text-[11px] md:text-sm font-bold italic uppercase leading-relaxed text-left">Centralized visibility into site-wise execution velocity, high-load pending missions, and workforce availability pulse.</p>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    {["Site-wise risk mapping", "Execution velocity scoring", "Unresolved incident alerting"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <BrowserFrame src={VITALS_IMAGE} label="EXECUTIVE_VITALS" />
                            </div>
                        </div>

                        {/* Financial Shield */}
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                            <div className="relative">
                                <BrowserFrame src={FINANCE_IMAGE} label="FINANCIAL_SHIELD" />
                            </div>
                            <div className="space-y-6 text-left">
                                <div className="space-y-2">
                                    <h4 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">Financial Shield</h4>
                                    <p className="text-zinc-500 text-[11px] md:text-sm font-bold italic uppercase leading-relaxed text-left">Reconcile unit contribution (GP) by tracking sales vs. CoGS, labor costs, and logged waste for zero-leakage profit protection.</p>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    {["Real-time margin calculation", "Labor-cost intensity monitoring", "Waste cost attribution"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. STAFF VIEW: THE FEAR KILLER --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="usability">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
                        <div className="space-y-10">
                            <div className="space-y-3">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[9px] italic">USABILITY STANDARD</Badge>
                                <h2 className="text-3xl md:text-6xl font-black font-headline uppercase italic leading-[0.85] text-left tracking-tighter">Complexity <br className="hidden md:block"/> kills adoption.</h2>
                                <p className="text-zinc-500 text-sm md:text-lg font-bold italic leading-relaxed text-left uppercase">
                                    Simple enough for the floor. <br/> Deep enough for leadership.
                                </p>
                            </div>
                            
                            <div className="grid gap-4">
                                {[
                                    { t: "BINARY VERIFICATION", d: "Staff enter their name to confirm completion. Status turns GREEN instantly.", i: CheckCircle2 },
                                    { t: "BUILT-IN TRAINER NOTES", d: "Every task explains HOW to perform the step correctly on the floor.", i: GraduationCap },
                                    { t: "VISIBLE CONSEQUENCES", d: "Teams see exactly what failure causes before a small miss becomes an incident.", i: AlertTriangle },
                                    { t: "MOBILE INFRASTRUCTURE", d: "Runs through Google Sheets without app installation or login friction.", i: Smartphone }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                            <item.i className="w-4.5 h-4.5" />
                                        </div>
                                        <div className="space-y-0.5 text-left">
                                            <h4 className="text-[12px] md:text-[13px] font-black uppercase tracking-widest text-white">{item.t}</h4>
                                            <p className="text-[10px] md:text-[12px] font-bold text-zinc-500 italic uppercase leading-relaxed text-left">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-3 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl">
                             <img src={MOBILE_LEDGER_IMAGE} alt="Staff View" className="w-full h-auto rounded-[2.2rem]" />
                             <div className="absolute bottom-10 left-8 right-8 p-3 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center justify-between shadow-2xl">
                                 <p className="text-[8px] font-mono text-emerald-500/90 uppercase tracking-[0.2em] leading-none">VIEW: DAILY_LEDGER_MOBILE</p>
                                 <Smartphone className="w-4 h-4 text-emerald-500/30" />
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. FINAL CTA --- */}
                <section className="bg-zinc-950 text-white py-20 md:py-32 text-center relative overflow-hidden border-t border-white/5">
                    <div className="max-w-5xl mx-auto space-y-10 relative z-10 px-6">
                        <div className="space-y-4">
                            <h2 className="text-[38px] md:text-7xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> your operations?</h2>
                            <p className="text-base md:text-xl text-zinc-500 font-bold italic uppercase tracking-[0.2em]">Full deployment in under 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-10">
                            <button className="h-14 md:h-20 px-10 md:px-16 rounded-xl md:rounded-[2rem] bg-emerald-500 text-black font-black uppercase italic text-sm md:text-2xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-5">
                                <Link href="/library" className="flex items-center gap-5">
                                    GET THE SYSTEM <ArrowRight className="w-6 h-6 md:w-9 md:h-9 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-baseline gap-3">
                                    <p className="text-[32px] md:text-6xl font-black italic">₹999</p>
                                    <span className="text-lg md:text-2xl font-bold text-zinc-700 italic">/ $12</span>
                                </div>
                                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">
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
