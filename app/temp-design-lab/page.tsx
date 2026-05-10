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
    Projector,
    Ticket,
    Popcorn,
    ClipboardCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from "@/components/layout/faq-section";
import Link from 'next/link';

// --- PRODUCTION ASSETS (Actual Cinema Screenshots) ---
const IMG_DASHBOARD = "https://i.postimg.cc/B6YtmpVn/Screenshot-2026-05-10-150332.png";
const IMG_BRANCH_SETUP = "https://i.postimg.cc/HxZj6zht/Screenshot-2026-05-10-150441.png";
const IMG_TEAM_HUB = "https://i.postimg.cc/nzRM32PD/Screenshot-2026-05-10-150505.png";
const IMG_TODAYS_TASKS = "https://i.postimg.cc/63jTMcm0/Screenshot-2026-05-10-150522.png";
const IMG_INCIDENT_LOG = "https://i.postimg.cc/fL2k8CrC/Screenshot-2026-05-10-150620.png";
const IMG_HEALTH_ANALYTICS = "https://i.postimg.cc/63jTMcmz/Screenshot-2026-05-10-150704.png";
const IMG_COST_TRACKER = "https://i.postimg.cc/G279XK5M/Screenshot-2026-05-10-150732.png";
const IMG_SYSTEM_GUIDE = "https://i.postimg.cc/wvf3w2Gf/Screenshot-2026-05-10-150755.png";

const CINEMA_HERO = "https://i.postimg.cc/43gVfgjd/multiplex2.avif";
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
        <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] border border-zinc-200 bg-white">
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
            <span className="text-[12px] md:text-[16px] font-black text-red-500 uppercase tracking-tighter italic flex items-center gap-2">
                <span className="animate-pulse">[!]</span> {title}
            </span>
            <span className="text-[9px] font-mono text-zinc-600 bg-white/5 px-2 py-0.5 rounded">{time}</span>
        </div>
        <p className="text-[10px] md:text-[11px] font-bold text-white/50 uppercase tracking-widest italic">{sub}</p>
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
                
                {/* --- 1. CALM AUTHORITY HERO --- */}
                <section className="relative w-full min-h-[95svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={CINEMA_HERO} 
                            alt="Operational Environment" 
                            className="w-full h-full object-cover opacity-50 grayscale-[0.1]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6 py-20">
                        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                            <div className="space-y-10">
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4">
                                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-6 py-1.5 rounded-none italic bg-emerald-500/5">CINEMA OPERATIONS SYSTEM</Badge>
                                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest hidden md:block">SYS_REF: V11.9_STABLE</span>
                                    </div>
                                    <h1 className="text-[36px] md:text-8xl font-black font-headline tracking-tighter uppercase italic leading-[0.9]">
                                        STOP CHASING SHIFTS. <br/> <span className="text-emerald-500">START SEEING OPERATIONS.</span>
                                    </h1>
                                    <div className="space-y-3">
                                        <p className="text-xl md:text-[34px] text-zinc-300 font-medium italic max-w-2xl leading-tight">
                                            Technical command for show readiness, crowd flow, and concession yield.
                                        </p>
                                        <p className="text-sm md:text-xl text-zinc-400 font-bold border-l-2 border-emerald-500/40 pl-6 max-w-xl">
                                            Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events. Real-time oversight for professional cinema groups.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 border-l-2 border-white/10 pl-8 py-2">
                                    {[
                                        { t: "140+ PRE-BUILT CINEMA SOPs", i: Target },
                                        { t: "REAL-TIME OPERATIONS DASHBOARD", i: Activity },
                                        { t: "INCLUDED TRAINER NOTES", i: GraduationCap },
                                        { t: "AUDIT-READY DOCUMENTATION", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 italic">{item.t}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-lg shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4 w-full sm:w-auto">
                                            <Link href="/library">
                                                START RUNNING EVERY SCREEN <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </Button>
                                        <div className="space-y-1 text-center sm:text-left">
                                            <p className="text-[10px] md:text-[11px] text-zinc-500 font-black uppercase tracking-[0.3em] italic">
                                                BUILT IN EXCEL • SHARED ON GOOGLE SHEETS • NO APP ROLLOUT
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-8 md:space-y-12">
                                 <div className="space-y-2">
                                    <p className="text-[9px] font-black text-red-500 uppercase tracking-[0.6em] italic">RISK MONITORING FEED</p>
                                    <div className="w-20 h-px bg-red-500/20 ml-auto hidden lg:block" />
                                 </div>
                                 
                                 <div className="flex flex-col gap-6 md:gap-10">
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
                                        title="EMERGENCY COMMS FAILURE" 
                                        sub="Security response verification overdue" 
                                        time="02:30 PM"
                                        delay="0.6s" 
                                     />
                                     <OperationalAlert 
                                        title="COLD CHAIN BREACH" 
                                        sub="Concession fridge temp recorded > 8°C" 
                                        time="04:05 PM"
                                        delay="0.8s" 
                                     />
                                 </div>
                            </div>
                        </div>
                    </div>

                    {/* --- SYSTEM VITALS BAR --- */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 z-30 hidden md:block">
                        <div className="container mx-auto h-full flex items-center justify-between px-10">
                            <div className="flex items-center gap-12">
                                {[
                                    { l: "TECH_UPTIME", v: "100.0%" },
                                    { l: "SAFETY_INDEX", v: "STABLE" },
                                    { l: "UNIT_LOAD", v: "NORMAL" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-[9px] font-mono text-zinc-500 tracking-widest">{stat.l}</span>
                                        <span className="text-[11px] font-black text-emerald-500 italic">{stat.v}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">SOVEREIGN_NODE_ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. THE OPERATIONAL LOOP (MACHINE FLOW) --- */}
                <Section className="bg-white border-b border-zinc-100" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge className="bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[9px] px-6 py-2">THE OPERATIONAL LOOP</Badge>
                            <h2 className="text-[28px] md:text-5xl font-black font-headline text-zinc-950 italic uppercase tracking-tight leading-none">How the machine works</h2>
                            <p className="text-zinc-500 text-sm md:text-base font-medium italic max-w-2xl mx-auto uppercase">A zero-gap flow architecture that ensures technical and concession discipline.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                            {[
                                { t: "Daily Tasks", d: "SOPs assigned to roles across the theater", i: Projector },
                                { t: "Team Completion", d: "Staff log tasks via mobile in seconds", i: Users },
                                { t: "Risk Visibility", d: "Lapses flagged RED on dashboard instantly", i: AlertTriangle },
                                { t: "Executive Oversight", d: "Leadership sees total group health daily", i: Monitor }
                            ].map((step, i) => (
                                <div key={i} className="relative group">
                                    <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 shadow-sm flex flex-col items-center text-center gap-4 group-hover:border-emerald-500/30 transition-all z-10 relative h-full">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-inner group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <step.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic text-sm tracking-tight">{step.t}</h4>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase italic leading-tight">{step.d}</p>
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

                {/* --- 3. INSIDE THE SYSTEM (EVIDENCE) --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL EVIDENCE</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Inside the System</h2>
                            <p className="text-zinc-500 text-lg font-medium italic uppercase">The actual data engine running your daily operations.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="space-y-12">
                                {[
                                    { t: "Executive Operations Dashboard", d: "One screen to see performance, risk, and technical uptime across all multiplex units.", i: Monitor },
                                    { t: "Revenue Variance Tracking", d: "Corn-to-bucket yield reconciliation and POS void-bill auditing to stop profit leakage.", i: Zap },
                                    { t: "Show Readiness Validation", d: "Zero-fail daily checks for projection, 3D assets, and subtitle sync before every show.", i: Clapperboard }
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
                                <BrowserFrame src={IMG_DASHBOARD} label="CINEMA_OPERATIONS_DASHBOARD_V11.9" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. STAFF VIEW (USABILITY PROOF) --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] italic">USABILITY PROOF</Badge>
                                <h2 className="text-3xl md:text-6xl font-black font-headline uppercase italic leading-[0.95] text-left">Complexity kills adoption.</h2>
                                <p className="text-zinc-400 text-lg md:text-xl font-medium italic leading-relaxed text-left">
                                    Your staff does not need technical training to run this. We designed the interface to be simple, binary, and mobile-ready.
                                </p>
                            </div>
                            
                            <div className="space-y-8">
                                {[
                                    { t: "BINARY VERIFICATION", d: "Projectionists and floor staff enter their name to confirm tasks. Status turns GREEN instantly." },
                                    { t: "BUILT-IN TRAINER NOTES", d: "Every check includes action-oriented instructions on HOW to perform the step." },
                                    { t: "VISIBLE CONSEQUENCES", d: "Staff see why the task matters, turning mechanical ticking into intentional compliance." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 border-l-2 border-emerald-500/20 pl-8 group">
                                        <div className="space-y-1 text-left">
                                            <h4 className="text-sm md:text-base font-black uppercase tracking-widest text-emerald-500">{item.t}</h4>
                                            <p className="text-xs md:text-sm font-bold text-zinc-500 italic uppercase">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl">
                             <img src={IMG_TODAYS_TASKS} alt="Cinema Tasks Mobile View" className="w-full h-auto rounded-[2rem]" />
                             <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-between">
                                 <p className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest leading-none">VIEW: CINEMA_DAILY_LEDGER_MOBILE</p>
                                 <Smartphone className="w-4 h-4 text-emerald-500/40" />
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. SYSTEM MANIFEST (WHAT'S INCLUDED) --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">SYSTEM MANIFEST</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Included Cinema Systems</h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { t: "01_EXECUTIVE_DASHBOARD.XLSX", i: Monitor },
                                { t: "04_PROJECTION_TECH_LOGS.XLSX", i: Projector },
                                { t: "06_CONCESSION_YIELD_SHIELD.XLSX", i: Popcorn },
                                { t: "02_SHOW_READINESS_LEDGER.XLSX", i: CheckCircle2 },
                                { t: "08_SHIFT_HANDOVER_BRIDGE.XLSX", i: History },
                                { t: "07_BOX_OFFICE_CASH_AUDIT.XLSX", i: Ticket },
                                { t: "09_SAFETY_EHS_TRACKER.XLSX", i: ShieldCheck },
                                { t: "03_TEAM_HUB_DIRECTORY.XLSX", i: Users }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2rem] border border-zinc-100 bg-zinc-50 flex flex-col items-center gap-4 hover:border-emerald-500/30 transition-all group h-full">
                                    <item.i className="w-8 h-8 text-zinc-300 group-hover:text-emerald-500 transition-all" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-center text-zinc-600 leading-tight italic">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 6. WHO THIS IS FOR --- */}
                <Section className="bg-zinc-50">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">IDENTIFICATION</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">Built for Cinema Leadership</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { role: "Group Owners & COOs", d: "For real-time visibility into technical compliance and concession margins across the group.", i: Crown },
                                { role: "Unit General Managers", d: "To standardize interval shifts and remove dependency on the memory of key personnel.", i: LayoutGrid },
                                { role: "Technical Directors", d: "To ensure show readiness and zero-fail equipment uptime audits before every showtime.", i: Wrench }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] border border-zinc-200 bg-white text-center space-y-6 hover:shadow-xl transition-all group h-full shadow-sm">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform shadow-inner">
                                        <item.i className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline leading-tight">{item.role}</h4>
                                        <p className="text-sm font-bold text-zinc-500 italic leading-relaxed uppercase">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 7. TAILORING BRIDGE --- */}
                <Section className="bg-white" noSpine>
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border border-zinc-200 bg-zinc-50 shadow-2xl relative overflow-hidden text-center space-y-10">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Sparkles className="w-64 h-64 text-primary" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full font-black tracking-widest text-[9px] uppercase px-6">TAILORING SUPPORT</Badge>
                            <h2 className="text-2xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                                Need help tailoring the <br className="hidden md:block" /> system to your business?
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                                If our standard framework requires professional adaptation to your unique screen hierarchy or specialized concession model, we offer 1-on-1 discovery sessions.
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

                {/* --- 8. FINAL CTA --- */}
                <section className="bg-emerald-600 text-white py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
                        <div className="absolute inset-0 bg-emerald-600/60" />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-12 relative z-10 px-6">
                        <div className="space-y-6">
                            <h2 className="text-[44px] md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase italic drop-shadow-2xl">Ready to run <br/> your system?</h2>
                            <p className="text-xl md:text-3xl text-white/80 font-bold italic">Full system deployment takes less than 10 minutes.</p>
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