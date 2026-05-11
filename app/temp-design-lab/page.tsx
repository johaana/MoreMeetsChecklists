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
    Leaf
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
const LEDGER_IMAGE = images.find(i => i.id === 'sovereign-ledger')?.imageUrl!;

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-12 md:py-20 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, label, sub }: { src: string, label: string, sub?: string }) => (
    <div className="group space-y-3">
        <div className="relative rounded-xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-zinc-200 bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(34,197,94,0.1)]">
            <div className="bg-[#111] border-b border-white/5 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 border border-white/5 rounded px-8 py-0.5 text-[7px] font-black text-white/20 uppercase tracking-[0.4em] italic">
                        {label.toLowerCase()}.xlsx
                    </div>
                </div>
            </div>
            <img src={src} alt={label} className="w-full h-auto grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000" />
        </div>
        {sub && <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest italic text-center">{sub}</p>}
    </div>
);

const OperationalAlert = ({ title, sub, time, delay = "0s" }: { title: string, sub: string, time: string, delay?: string }) => (
    <div className="flex flex-col items-start lg:items-end gap-1 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-3">
            <span className="text-[14px] md:text-[18px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                <span className="animate-pulse">●</span> {title}
            </span>
            <span className="text-[8px] font-mono text-zinc-600 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{time}</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-bold text-white/20 uppercase tracking-widest italic leading-none">{sub}</p>
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
                
                {/* --- 1. HERO: RESTRAINED AUTHORITY --- */}
                <section className="relative w-full min-h-[85svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://i.postimg.cc/43gVfgjd/multiplex2.avif" 
                            alt="" 
                            className="w-full h-full object-cover opacity-40 grayscale-[0.2] brightness-[0.4]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-12">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-12 items-center">
                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-3">
                                    <h1 className="text-[36px] md:text-[72px] lg:text-[80px] font-black font-headline tracking-tighter uppercase italic leading-[0.88] text-white">
                                        CINEMA <br/> <span className="text-emerald-500">OPERATING SYSTEM</span>
                                    </h1>
                                    <div className="space-y-4">
                                        <p className="text-lg md:text-[28px] font-black italic text-zinc-300 max-w-2xl leading-tight uppercase tracking-tight">
                                            Technical command for show readiness, <br className="hidden md:block" /> crowd flow, and concession yield.
                                        </p>
                                        <div className="flex flex-col gap-2 border-l-2 border-emerald-500/60 pl-6 max-w-xl">
                                            <p className="text-sm md:text-base text-zinc-400 font-bold leading-relaxed italic">
                                                Built for multiplex leadership where black-screens and concession profit-leakage are daily variables you must control.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 pt-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                                        {[
                                            { t: "PRE-BUILT OPERATIONAL SOPs", i: Target },
                                            { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                            { t: "EXECUTION GUIDANCE INCLUDED", i: GraduationCap },
                                            { t: "AUDIT-READY DOCUMENTATION", i: FileSignature }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 group">
                                                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                    <Check className="w-2.5 h-2.5 text-emerald-500" />
                                                </div>
                                                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] italic text-white/50 group-hover:text-white transition-colors">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-8">
                                        <Button asChild size="lg" className="h-14 md:h-16 px-10 md:px-14 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-sm md:text-base shadow-[0_15px_40px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4 w-full sm:w-auto">
                                            <Link href="/library">
                                                LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 text-zinc-950 transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </Button>
                                        <div className="flex flex-col items-center sm:items-start opacity-40">
                                            <p className="text-[10px] md:text-xs text-zinc-400 font-black uppercase tracking-[0.2em] italic">BUILT IN EXCEL • SHARED VIA SHEETS</p>
                                            <p className="text-[9px] md:text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] italic leading-none pt-1">NO APP ROLLOUT REQUIRED</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l border-white/5 pl-6 lg:pl-0 lg:pr-6 lg:text-right mt-16 lg:mt-0 space-y-8">
                                 <p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.6em] italic">ACTIVE_RISK_MONITOR</p>
                                 
                                 <div className="flex flex-col gap-8 md:gap-10">
                                     <OperationalAlert 
                                        title="[!] RISK: EXPIRED_KDM_KEYS" 
                                        sub="Screen 04: Blackout imminent" 
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
                                        sub="Off-peak thermal spike detected" 
                                        time="04:05:09"
                                        delay="0.6s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. ENGINE CORE: RESTRICTED COMPONENT GRID --- */}
                <Section className="bg-white border-b border-zinc-100" id="modules">
                    <div className="max-w-[1100px] mx-auto space-y-12">
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] italic">SYSTEM COMPONENTS</Badge>
                            <h2 className="text-[28px] md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">The Engine Core</h2>
                            <p className="text-zinc-500 text-[10px] font-bold italic uppercase tracking-widest text-center">INTEGRATED MASTER INFRASTRUCTURE</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                            {[
                                { t: "EXECUTIVE DASHBOARD", i: Monitor },
                                { t: "READINESS ENGINE", i: Clapperboard },
                                { t: "CONCESSION TRACKER", i: Popcorn },
                                { t: "PROJECTION LOGS", i: Projector },
                                { t: "SHIFT HANDOVER", i: History },
                                { t: "CASH AUDIT SHIELD", i: Ticket },
                                { t: "SAFETY & EHS MONITOR", i: ShieldCheck },
                                { t: "TEAM DIRECTORY", i: Users },
                                { t: "DAILY EXECUTION LEDGER", i: FileSignature },
                                { t: "INCIDENT REGISTRY", i: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className="p-5 md:p-6 rounded-2xl border border-zinc-200 flex flex-col items-center justify-center gap-4 transition-all group h-[160px] shadow-sm text-center bg-white hover:border-emerald-500/40 hover:shadow-xl">
                                    <item.i className="w-8 h-8 text-slate-400 transition-all duration-500 group-hover:text-emerald-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight italic text-slate-900 group-hover:text-emerald-600">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 3. EVIDENCE: REALISM OVER PERFECTION --- */}
                <Section className="bg-zinc-50/50" id="evidence">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-3">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[9px] px-6 py-2 rounded-none italic bg-white shadow-sm">OPERATIONAL EVIDENCE</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">Inside the Machine</h2>
                            <p className="text-zinc-500 text-[11px] md:text-sm font-bold italic uppercase max-w-2xl mx-auto text-center">SEE HOW THE SYSTEM DETECTS DRIFT AND ENFORCES COMPLIANCE</p>
                        </div>

                        {/* Artifact 1: Dashboard */}
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Executive Operations View</h4>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed">Visibility into site-wise velocity. Detects when the "Empire Mood" drops below 90%.</p>
                                </div>
                                <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl">
                                    <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-1">REAL-WORLD SIGNAL:</p>
                                    <p className="text-sm font-bold italic text-emerald-900">"Current status: 87% Completion. 3 High-Load missions pending verification."</p>
                                </div>
                            </div>
                            <BrowserFrame src={VITALS_IMAGE} label="EXECUTIVE_VIEW" sub="VIEW: GROUP_COMMAND_VITALS" />
                        </div>

                        {/* Artifact 2: The Ledger */}
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <BrowserFrame src={LEDGER_IMAGE} label="EXECUTION_LEDGER" sub="VIEW: DAILY_TASK_LEDGER" />
                            </div>
                            <div className="space-y-8 text-left order-1 lg:order-2">
                                <div className="space-y-4">
                                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">Daily Execution Ledger</h4>
                                    <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed">No separate app training required. Staff log completion in seconds, using tools they already understand.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { t: "Execution Guidance", d: "Step-by-step technical instructions embedded in every task.", i: GraduationCap },
                                        { t: "Binary Completion", d: "Staff enters name -> status turns green. Zero ambiguity.", i: CheckCircle2 }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                                                <feat.i className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black uppercase italic text-zinc-950">{feat.t}</p>
                                                <p className="text-[11px] font-bold text-zinc-500 italic uppercase">{feat.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. THE OPERATIONAL LOOP (HOW IT WORKS) --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="loop">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-3">
                            <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[9px] italic">SYSTEM ARCHITECTURE</Badge>
                            <h2 className="text-[32px] md:text-6xl font-black font-headline uppercase italic leading-[0.85] tracking-tighter text-center">The Operational Loop</h2>
                            <p className="text-zinc-500 text-sm md:text-lg font-bold italic leading-relaxed uppercase max-w-2xl mx-auto text-center">
                                FROM FLOOR EXECUTION TO BOARDROOM INTELLIGENCE
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { t: "01 INPUT", d: "Staff log tasks on the floor via mobile Sheets.", i: Smartphone },
                                { t: "02 VERIFY", d: "Managers sign off on high-priority mission points.", i: ShieldCheck },
                                { t: "03 ESCALATE", d: "Deviations are auto-logged in the Incident Registry.", i: AlertTriangle },
                                { t: "04 VISIBILITY", d: "Executive dashboard reflects live group health.", i: TrendingUp }
                            ].map((step, i) => (
                                <div key={i} className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] space-y-6 group hover:bg-white/[0.05] transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                                        <step.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-black uppercase italic tracking-widest text-white">{step.t}</h4>
                                        <p className="text-xs font-bold text-zinc-500 italic uppercase leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 5. SUSTAINABILITY: STRUCTURAL ENDURANCE --- */}
                <Section className="bg-white" id="sustainability">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-10 text-left">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[9px] italic px-6 py-1.5 rounded-none">STRUCTURAL ENDURANCE</Badge>
                                <h2 className="text-3xl md:text-6xl font-black font-headline uppercase italic leading-[0.85] tracking-tighter">Sustainability <br/> Through Rigor.</h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase">
                                    Protect your margins. Sustain your assets.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { t: "Financial Sustainability", d: "Zero-leakage concession yield and end-of-SaaS subscriptions.", i: Banknote },
                                    { t: "Asset Sustainability", d: "Preventive HVAC and Projection maintenance to extend hardware life.", i: Wrench },
                                    { t: "Knowledge Sustainability", d: "Institutional memory stays with the brand even when managers resign.", i: History },
                                    { t: "Resource Sustainability", d: "Daily energy-shutdown compliance to stop unmonitored utility waste.", i: Leaf }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <item.i className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-[14px] font-black uppercase italic text-zinc-950">{item.t}</h4>
                                            <p className="text-[11px] font-bold text-zinc-500 italic uppercase leading-tight">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-4 bg-zinc-950 rounded-[3rem] shadow-2xl overflow-hidden group">
                             <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                             <BrowserFrame src={FINANCE_IMAGE} label="MARGIN_SUSTAINABILITY" sub="FINANCIAL_SHIELD_MODULE" />
                        </div>
                    </div>
                </Section>

                {/* --- 6. PREVENTED INCIDENTS STRIP --- */}
                <div className="w-full bg-red-600 py-4 overflow-hidden border-y border-black/10">
                    <div className="flex flex-nowrap items-center gap-12 animate-marquee whitespace-nowrap px-10">
                        {[
                            "BLACK-SCREEN INCIDENTS PREVENTED",
                            "CONCESSION LEAKAGE PLUGGED",
                            "MISSED FIRE SAFETY CHECKS ELIMINATED",
                            "UNVERIFIED SHOW READINESS STOPPED",
                            "LOST INTERVAL REVENUE RECLAIMED",
                            "EXPIRED KDM BLACKOUTS AVOIDED"
                        ].map((text, i) => (
                            <span key={i} className="text-[10px] md:text-[12px] font-black text-white uppercase tracking-[0.3em] italic flex items-center gap-3">
                                <ShieldAlert className="w-4 h-4" /> {text}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- 7. FINAL COMMAND --- */}
                <section className="bg-zinc-950 text-white py-24 md:py-40 text-center relative overflow-hidden border-t border-white/5">
                    <div className="max-w-5xl mx-auto space-y-12 relative z-10 px-6">
                        <div className="space-y-4">
                            <h2 className="text-[40px] md:text-8xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">Own the system. <br/> Deploy for life.</h2>
                            <p className="text-base md:text-2xl text-zinc-500 font-bold italic uppercase tracking-[0.3em]">ONE-TIME INVESTMENT. PERMANENT VISIBILITY.</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-12">
                            <button className="h-16 md:h-24 px-12 md:px-20 rounded-xl md:rounded-[2.5rem] bg-emerald-500 text-black font-black uppercase italic text-sm md:text-3xl shadow-[0_20px_60px_-10px_rgba(34,197,94,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-6">
                                <Link href="/library" className="flex items-center gap-6">
                                    GET SOVEREIGN PRO <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:translate-x-4" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-baseline gap-4">
                                    <p className="text-[48px] md:text-[100px] font-black italic">₹999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-zinc-700 italic">/ $12</span>
                                </div>
                                <p className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-zinc-600 italic">
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
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}

