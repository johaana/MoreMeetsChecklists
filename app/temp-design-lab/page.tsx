'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    X,
    ArrowRight, 
    LayoutGrid,
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
    ShieldAlert,
    Zap,
    Monitor,
    Users,
    Wrench,
    Clapperboard,
    Sparkles,
    Crown,
    ChevronRight,
    SearchCheck,
    ArrowDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from "@/components/layout/faq-section";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- PRODUCTION CONSTANTS ---
const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";
const TASKS_IMAGE = "https://i.postimg.cc/G278vKh8/Screenshot-2026-04-18-004329.png";
const HERO_IMAGE = "https://i.postimg.cc/BvKyg8vX/ceo-engages-phone-call-briefing-with-investor-sharing-insight.jpg";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

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
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
            <div className="bg-[#111] border-b border-white/10 px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white/5 border border-white/5 rounded px-8 py-0.5 text-[8px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                        {label}
                    </div>
                </div>
            </div>
            <img src={src} alt={label} className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700" />
        </div>
    </div>
);

const OperationalAlert = ({ title, sub, delay = "0s" }: { title: string, sub: string, delay?: string }) => (
    <div className="flex flex-col items-start lg:items-end gap-1 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-3">
            <span className="text-[12px] md:text-[18px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                <span className="animate-pulse">[!]</span> {title}
            </span>
        </div>
        <p className="text-[10px] md:text-[12px] font-bold text-white/40 uppercase tracking-widest italic">{sub}</p>
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
                
                {/* --- 1. THE CALM AUTHORITY HERO --- */}
                <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={HERO_IMAGE} 
                            alt="Operational Pressure" 
                            className="w-full h-full object-cover opacity-60 grayscale-[0.2]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-20">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-emerald-500/5">OPERATIONAL INFRASTRUCTURE</Badge>
                                    <h1 className="text-[34px] md:text-8xl font-black font-headline tracking-tighter uppercase italic leading-[0.9]">
                                        STOP CHASING. <br/> <span className="text-emerald-500">START SEEING.</span>
                                    </h1>
                                    <p className="text-xl md:text-[32px] text-zinc-300 font-medium italic max-w-2xl leading-tight">
                                        See show-readiness getting done. <br/> Even when you aren't there.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl border-l-2 border-emerald-500/20 pl-8 py-2">
                                    {[
                                        { t: "140+ PRE-BUILT CINEMA SOPs", i: Target },
                                        { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                        { t: "BUILT-IN TRAINER NOTES", i: GraduationCap },
                                        { t: "AUDIT-READY COMPLIANCE", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 italic">{item.t}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-lg shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4 w-full sm:w-auto">
                                            <Link href="#pricing">
                                                LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </Button>
                                        <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.3em] italic">
                                            BUILT IN EXCEL • NO APP ROLLOUT REQUIRED • ONE-TIME BUY
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-8 md:space-y-12">
                                 <div className="space-y-2">
                                    <p className="text-[9px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">OPERATIONAL RISK MONITORING</p>
                                    <div className="w-20 h-px bg-red-500/20 ml-auto hidden lg:block" />
                                 </div>
                                 
                                 <div className="flex flex-col gap-6 md:gap-10">
                                     <OperationalAlert 
                                        title="EXPIRED KDM KEY" 
                                        sub="Screen 04 unavailable for evening show" 
                                        delay="0.2s" 
                                     />
                                     <OperationalAlert 
                                        title="INTERVAL CONGESTION" 
                                        sub="Concession queue exceeding threshold" 
                                        delay="0.4s" 
                                     />
                                     <OperationalAlert 
                                        title="EMERGENCY COMMS FAILURE" 
                                        sub="Security response verification overdue" 
                                        delay="0.6s" 
                                     />
                                     <OperationalAlert 
                                        title="COLD CHAIN BREACH" 
                                        sub="Concession fridge temp recorded > 8°C" 
                                        delay="0.8s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. THE MACHINE (FLOW DIAGRAM) --- */}
                <Section className="bg-zinc-50 border-b border-zinc-100" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge className="bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[9px] px-6 py-2">THE OPERATIONAL LOOP</Badge>
                            <h2 className="text-[28px] md:text-5xl font-black font-headline text-zinc-950 italic uppercase tracking-tight">How the machine works</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                            {[
                                { t: "Daily Tasks", d: "SOPs assigned by role", i: ClipboardCheck },
                                { t: "Team Completion", d: "Staff log status in seconds", i: Users },
                                { t: "Risk Visibility", d: "Missed work flagged RED", i: AlertTriangle },
                                { t: "Command Center", d: "Execs see group health", i: Monitor }
                            ].map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="p-8 rounded-[2rem] bg-white border border-zinc-200 shadow-sm flex flex-col items-center text-center gap-4 group-hover:border-emerald-500/30 transition-all z-10 relative">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-emerald-600 shadow-inner group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <step.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic text-sm tracking-tight">{step.t}</h4>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase italic leading-none">{step.d}</p>
                                        </div>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center">
                                            <ChevronRight className="w-8 h-8 text-zinc-200" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 3. BEFORE / AFTER REALITY --- */}
                <Section className="bg-white border-b border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-100 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL AUDIT</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight">The difference is visibility</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 relative">
                            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden md:block" />
                            
                            <div className="p-10 space-y-8 bg-red-50/30 rounded-3xl border border-red-50 relative">
                                <h3 className="text-xl font-black uppercase italic text-red-600">The Friction (Before)</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Constant manual follow-ups on basic tasks.",
                                        "Work depends on the memory of key people.",
                                        "SOPs sit in folders, disconnected from the floor.",
                                        "Unrecorded near-misses creating hidden liability."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-zinc-500 font-bold italic">
                                            <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 space-y-8 bg-emerald-50/30 rounded-3xl border border-emerald-50 relative">
                                <h3 className="text-xl font-black uppercase italic text-emerald-600">The System (After)</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Live dashboard visibility into all completion.",
                                        "Accountability assigned by role, not individual.",
                                        "Standards stay even when managers leave.",
                                        "Audit-ready logs generated automatically."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-zinc-950 font-black uppercase italic">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. INSIDE THE SYSTEM (EVIDENCE) --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-none italic">INSIDE THE SYSTEM</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight">Operational Proof</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="space-y-12">
                                {[
                                    { t: "Show Readiness Protocol", d: "Zero-fail technical checks for projection, sound, and egress safety.", i: Clapperboard },
                                    { t: "Revenue Leakage Shield", d: "Concession yield reconciliation and void-bill audit tracking.", i: Zap },
                                    { t: "Interval Rush Command", d: "Assigned crowd-control zones and hygiene frequency monitoring.", i: Users }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group text-left">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{item.t}</h4>
                                            <p className="text-zinc-500 font-bold italic leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <BrowserFrame src={DASHBOARD_IMAGE} label="EXECUTIVE_CONCESSION_DASHBOARD" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. WHAT'S INSIDE (MANIFEST) --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">TECHNICAL PAYLOAD</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">System Manifest</h2>
                            <p className="text-zinc-500 text-lg font-medium italic">The complete architecture of the Sovereign Engine.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { t: "Executive Dashboard", i: Monitor },
                                { t: "Projection Tech Log", i: Wrench },
                                { t: "Concession Yields", i: Zap },
                                { t: "Show Readiness", i: CheckCircle2 },
                                { t: "Shift Handover", i: History },
                                { t: "Incident Tracker", i: AlertTriangle },
                                { t: "Audit Registry", i: ShieldCheck },
                                { t: "Trainer Notes", i: GraduationCap }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2rem] border border-zinc-100 bg-zinc-50 flex flex-col items-center gap-4 hover:border-emerald-500/30 transition-all group">
                                    <item.i className="w-8 h-8 text-zinc-300 group-hover:text-emerald-500 transition-all" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-center text-zinc-600">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 6. WHAT TEAMS ACTUALLY USE --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] italic">ZERO FRICTION</Badge>
                                <h2 className="text-3xl md:text-6xl font-black font-headline uppercase italic leading-[0.95] text-left">What your team <br/> actually sees</h2>
                                <p className="text-zinc-400 text-lg md:text-xl font-medium italic leading-relaxed text-left">
                                    Implementation anxiety kills most systems. We designed MoreMeets to be **simple to adopt** and **impossible to ignore**.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { t: "SIMPLE INPUT", d: "Staff enter their name to log completion. No complex forms." },
                                    { t: "CLEAR INSTRUCTION", d: "Every task includes 'Trainer Notes' on how to do it right." },
                                    { t: "BUILT-IN URGENCY", d: "Consequences of failure are visible, building an intentional culture." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 border-l border-emerald-500/20 pl-6 group">
                                        <div className="space-y-1 text-left">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500">{item.t}</h4>
                                            <p className="text-xs font-bold text-zinc-500 italic uppercase">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl">
                             <img src={TASKS_IMAGE} alt="Technical Tasks" className="w-full h-auto rounded-[2rem]" />
                             <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-between">
                                 <p className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest leading-none">VIEW: DAILY_EXECUTION_LEDGER</p>
                                 <Smartphone className="w-4 h-4 text-emerald-500/40" />
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 7. WHO THIS IS FOR --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">TARGET VERTICAL</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight">Built for leadership</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { role: "Owners & COOs", d: "For high-level visibility into group-wide compliance and profit protection.", i: Crown },
                                { role: "Operations Managers", d: "To standardize multi-unit shifts and remove dependency on individual memory.", i: LayoutGrid },
                                { role: "Technical Directors", d: "To ensure show readiness and zero-fail equipment uptime audits.", i: Wrench }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] border border-zinc-100 bg-zinc-50 text-center space-y-6 hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform shadow-inner">
                                        <item.i className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">{item.role}</h4>
                                        <p className="text-sm font-bold text-zinc-500 italic leading-relaxed uppercase">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 8. TAILORING BRIDGE --- */}
                <Section className="bg-zinc-50" noSpine>
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-zinc-200 bg-white shadow-2xl relative overflow-hidden text-center space-y-10">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Sparkles className="w-64 h-64 text-primary" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full font-black tracking-widest text-[9px] uppercase px-6">OPTIONAL CUSTOMIZATION</Badge>
                            <h2 className="text-2xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                                Need help tailoring <br className="hidden md:block" /> the system to your business?
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                                If our standard framework requires surgical adaptation to your specific brand protocols, we offer 1-on-1 discovery calls with our operations engineers.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-xl hover:scale-105 transition-all border-none">
                                <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                    BOOK DISCOVERY SESSION <ArrowRight className="ml-3 w-5 h-5" />
                                </Link>
                            </Button>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">TAILORED BUILDS START AT ₹9,999 / $125 USD</p>
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- 9. FINAL CALL TO COMMAND --- */}
                <section className="bg-emerald-600 text-white py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
                        <div className="absolute inset-0 bg-emerald-600/60" />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-6">
                        <div className="space-y-6">
                            <h2 className="text-[44px] md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> your system?</h2>
                            <p className="text-xl md:text-3xl text-white/80 font-bold italic">Setup takes less than 10 minutes.</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-10">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[30px] bg-black text-white font-black uppercase italic text-xl md:text-4xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-8">
                                <Link href="/library" className="flex items-center gap-6">
                                    GET THE SYSTEM <ArrowRight className="w-8 h-8 md:w-14 md:h-14 transition-transform group-hover:translate-x-4" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-3">
                                    <p className="text-[40px] md:text-[64px] font-black italic">₹999</p>
                                    <span className="text-xl md:text-3xl font-bold text-white/30 italic">/ $12</span>
                                </div>
                                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-white/40 pt-4">
                                    ONE-TIME PAYMENT • OWN FOREVER
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
