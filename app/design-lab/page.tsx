'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    ShieldCheck, 
    Smartphone,
    AlertTriangle,
    History,
    Users,
    ClipboardCheck,
    Target,
    Activity,
    ChevronRight,
    Circle,
    LayoutGrid,
    SearchCheck,
    Zap,
    Scale,
    FileSpreadsheet,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const GOLD = "#D6A85F";
const GREEN = "#22C55E";
const AMBER = "#F59E0B";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-32 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const OperationalSignal = ({ status, text, time, pulse = false }: { status: 'complete' | 'pending', text: string, time: string, pulse?: boolean }) => (
    <div className={cn(
        "p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-1.5 transition-all duration-700",
        pulse && "animate-soft-pulse border-amber-500/20 bg-amber-500/[0.02]"
    )}>
        <div className="flex items-center gap-3">
            {status === 'complete' ? (
                <Check className="w-4 h-4 text-emerald-500" />
            ) : (
                <AlertTriangle className="w-4 h-4 text-amber-500" />
            )}
            <span className="text-[11px] font-black uppercase tracking-widest text-white/90 italic">{text}</span>
        </div>
        <span className={cn(
            "text-[9px] font-mono uppercase tracking-widest pl-7",
            status === 'complete' ? "text-white/30" : "text-amber-500/60"
        )}>{time}</span>
    </div>
);

export default function ProductionDesignLab() {
    const [mounted, setMounted] = useState(false);
    const [visibleFailure, setVisibleFailure] = useState(0);

    const failures = [
        "Missed temperature logs",
        "Opening checklists skipped",
        "Manager follow-ups pending",
        "Safety checks unverified",
        "Training inconsistency",
        "Shift handovers missed"
    ];

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setVisibleFailure((prev) => (prev + 1) % failures.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#0F1720] text-[#F8FAFC] font-sans antialiased selection:bg-primary/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-black">
                    {/* Background Treatment */}
                    <div className="absolute inset-0 z-0">
                        <iframe 
                            src="https://player.vimeo.com/video/1194885765?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115vw] h-[115vh] object-cover opacity-40 grayscale brightness-[0.4]"
                            frameBorder="0" 
                            allow="autoplay; fullscreen"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,10,14,0.74) 0%, rgba(7,10,14,0.60) 45%, rgba(7,10,14,0.84) 100%)' }} />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1300px] px-6 flex items-center h-full">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center w-full">
                            
                            {/* Left: Narrative */}
                            <div className="space-y-10 md:space-y-12">
                                <div className="space-y-6">
                                    <p className="text-[12px] font-black uppercase tracking-[0.5em] italic" style={{ color: GOLD }}>
                                        LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                                    </p>
                                    <h1 className="text-[52px] md:text-[80px] lg:text-[100px] font-black tracking-[-0.06em] leading-[0.92] uppercase italic text-white drop-shadow-2xl">
                                        YOUR BUSINESS <br/> SHOULD NOT <br/> DEPEND <br/> ON MEMORY.
                                    </h1>
                                    <p className="text-[18px] md:text-[20px] font-normal leading-[1.7] text-[#CBD5E1] max-w-[620px] italic">
                                        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, step-by-step instructions, and total accountability. <br/><br/>
                                        No new apps to learn. No training headaches. <br/>
                                        Works directly on Google Sheets.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Button asChild className="h-16 px-10 rounded-2xl text-zinc-950 font-bold uppercase italic text-sm tracking-widest shadow-2xl transition-all hover:-translate-y-1 hover:shadow-primary/20" style={{ backgroundColor: GOLD }}>
                                        <Link href="/library">Get Your System <ArrowRight className="ml-3 w-5 h-5" /></Link>
                                    </Button>
                                    <Button variant="outline" asChild className="h-16 px-10 rounded-2xl border-white/10 bg-white/[0.03] backdrop-blur-xl font-bold uppercase italic text-sm tracking-widest hover:bg-white/10 text-white">
                                        <Link href="#ledger">See the Interface</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Operational Terminal */}
                            <div className="hidden lg:block relative group">
                                <div className="absolute -inset-10 bg-primary/10 blur-[100px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-1000" />
                                <div className="relative p-10 rounded-[28px] border border-white/10 bg-[#0F1720]/60 backdrop-blur-[24px] space-y-8 shadow-2xl">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">TODAY'S OPERATIONS</p>
                                            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">SOVEREIGN_ENGINE_v4.3</p>
                                        </div>
                                        <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <OperationalSignal status="complete" text="Opening Audit Verified" time="08:14 AM" />
                                        <OperationalSignal status="complete" text="Cold Storage Temperature Logged" time="09:02 AM" />
                                        <OperationalSignal status="pending" text="Fire Exit Inspection Pending" time="Due in 12 mins" pulse />
                                        <OperationalSignal status="complete" text="Kitchen Hygiene Sweep Complete" time="11:27 AM" />
                                        <OperationalSignal status="complete" text="Shift Handover Signed" time="12:01 PM" />
                                    </div>

                                    <div className="pt-4 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1,2,3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F1720] bg-zinc-800 flex items-center justify-center text-[10px] font-bold">ST</div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-black uppercase text-primary/40 italic">Live Coverage</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- TRUST STRIP --- */}
                <div className="w-full bg-[#0F1720] py-6 border-y border-white/5 overflow-hidden">
                    <div className="flex flex-nowrap items-center justify-center gap-10 md:gap-16">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] whitespace-nowrap">USED FOR DAILY OPERATIONS IN</span>
                        <div className="flex items-center gap-8 md:gap-12">
                            {["RESTAURANTS", "HOTELS", "MULTIPLEXES", "RETAIL", "HOSPITALS", "SCHOOLS"].map((ind) => (
                                <span key={ind} className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] italic whitespace-nowrap">{ind}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- PROBLEM SECTION --- */}
                <Section className="bg-[#121B26]">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.4em] font-black text-[10px]">THE OPERATIONAL COST</Badge>
                            <h2 className="text-[44px] md:text-[72px] font-black font-headline text-white leading-[0.9] uppercase italic tracking-tighter">
                                STOP CHASING <br/> STAFF <br/> FOR UPDATES.
                            </h2>
                        </div>
                        <div className="space-y-6 relative h-[200px]">
                            {failures.map((fail, i) => (
                                <div 
                                    key={i} 
                                    className={cn(
                                        "absolute inset-0 flex items-center gap-6 transition-all duration-1000",
                                        visibleFailure === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    )}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white/80">{fail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- HOW IT WORKS --- */}
                <Section>
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.4em] font-black text-[10px]">THE INFRASTRUCTURE</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-white uppercase italic tracking-tight leading-none text-center">SYSTEM ANATOMY</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { t: "The Brain", d: "120+ industry-specific SOPs pre-built and ready for deployment.", i: Target },
                                { t: "The Heartbeat", d: "Daily task assignments with built-in accountability and timestamps.", i: Activity },
                                { t: "The Guard", d: "Risk and consequence definitions attached to every critical action.", i: ShieldCheck },
                                { t: "The Eye", d: "Live group-level dashboards for owners to see everything remotely.", i: LayoutGrid }
                            ].map((item, i) => (
                                <Card key={i} className="bg-white/[0.04] border-white/5 p-10 space-y-6 hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500 rounded-[24px]">
                                    <item.i className="w-10 h-10 text-primary" strokeWidth={1.5} />
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{item.t}</h3>
                                        <p className="text-sm text-zinc-400 font-medium italic leading-relaxed">{item.d}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- LIVE SYSTEM INTERFACE (THE LEDGER) --- */}
                <Section className="bg-[#121B26]" id="ledger">
                    <div className="max-w-[1400px] mx-auto space-y-16">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-3 rounded-full italic">REAL-TIME INTERFACE</Padding>
                            <h2 className="text-[36px] md:text-[72px] font-black font-headline text-white leading-[0.95] tracking-tight uppercase italic text-center">
                                THE SOVEREIGN LEDGER
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-2xl font-normal italic max-w-3xl leading-tight">
                                This is not just a checklist. It is a live data ledger where every role owns their execution, verified by manager co-signs and tamper-proof history.
                            </p>
                        </div>

                        <div className="rounded-[28px] overflow-hidden border border-white/10 bg-[#0F1720]/80 shadow-2xl backdrop-blur-xl relative z-10">
                            <div className="bg-[#22C55E]/10 text-[#22C55E] py-4 px-8 flex items-center justify-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] border-b border-white/5">
                                <Activity className="w-4 h-4" />
                                <span>LIVE EXECUTION ENGINE: MULTI-UNIT SYNC ACTIVE</span>
                            </div>

                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[1200px]">
                                    <thead>
                                        <tr className="bg-black/40 text-zinc-500 border-b border-white/5">
                                            {["UNIT", "OPERATIONAL ROLE", "TECHNICAL TASK", "ASSIGNED", "DONE", "VERIFIED", "STATUS", "RISK / CONSEQUENCE", "STAMP"].map((h, i) => (
                                                <th key={i} className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.3em] border-r border-white/5 last:border-0">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { u: "RE-01", r: "Kitchen Head", t: "COLD STORAGE VITAL PULSE", a: "Anil K.", db: "AK", vb: "SK", s: "COMPLETE", c: "Stock spoilage & pathogen risk.", st: "08:14:22" },
                                            { u: "RE-01", r: "Supervisor", t: "FIRE EXIT EGRESS SWEEP", a: "Sarah M.", db: "SM", vb: "", s: "OPEN", c: "Fatal entrapment during crisis.", st: "" },
                                            { u: "RE-02", r: "Bar Lead", t: "ALCOHOL STOCK BLIND COUNT", a: "Rohan D.", db: "RD", vb: "AM", s: "COMPLETE", c: "Undetected high-value pilferage.", st: "11:02:45" },
                                            { u: "RE-01", r: "Floor Lead", t: "RESTROOM HYGIENE CYCLE", a: "Vikram S.", db: "VS", vb: "", s: "COMPLETE", c: "Primary guest rating decay.", st: "14:20:11" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-white/5 text-[13px] hover:bg-white/[0.02] transition-colors">
                                                <td className="px-6 py-8 border-r border-white/5 font-mono text-zinc-500">{row.u}</td>
                                                <td className="px-6 py-8 border-r border-white/5 font-bold text-white uppercase italic">{row.r}</td>
                                                <td className="px-6 py-8 border-r border-white/5 font-black text-white/90">{row.t}</td>
                                                <td className="px-6 py-8 border-r border-white/5 text-zinc-400 italic">{row.a}</td>
                                                <td className="px-6 py-8 border-r border-white/5 font-mono text-center text-primary">{row.db}</td>
                                                <td className="px-6 py-8 border-r border-white/5 font-mono text-center text-white/20">{row.vb || "—"}</td>
                                                <td className="px-6 py-8 border-r border-white/5">
                                                    <span className={cn(
                                                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                                                        row.s === "COMPLETE" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-transparent text-amber-500 border border-amber-500/20"
                                                    )}>{row.s}</span>
                                                </td>
                                                <td className="px-6 py-8 border-r border-white/5 italic text-red-500/80 font-bold leading-tight max-w-[200px]">{row.c}</td>
                                                <td className="px-6 py-8 text-zinc-500 font-mono text-[11px]">{row.st || "00:00:00"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em] italic">
                                SYSTEM PROOF: BUILT IN EXCEL • OPERATED LIVE VIA GOOGLE SHEETS
                            </p>
                        </div>
                    </div>
                </Section>

                {/* --- WHO IT IS FOR --- */}
                <Section className="bg-white text-zinc-950">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic">ELITE VERTICALS</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">CHOOSE YOUR SECTOR</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "RESTAURANT OPS", id: "restaurants", i: "https://i.postimg.cc/wxF6Cpdx/restaurant-backoffice.jpg", sub: ["Kitchen hygiene", "Opening checks", "Inventory discipline", "Closing routines"] },
                                { t: "HOTEL OPS", id: "hotels_and_resorts", i: "https://i.postimg.cc/7hPq5BSy/hotel-ops.webp", sub: ["Housekeeping parity", "Front desk compliance", "Engineering vitals", "Privacy audits"] },
                                { t: "RETAIL OPS", id: "retail_operations_system", i: "https://i.postimg.cc/J4pcqBfQ/fashion-retail.webp", sub: ["Loss prevention", "Stock integrity", "Metrology accuracy", "Visual standards"] }
                            ].map((item, i) => (
                                <Link key={i} href={`/packs/${item.id}`} className="relative h-[480px] rounded-[32px] overflow-hidden group">
                                    <img src={item.i} alt={item.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720] via-[#0F1720]/40 to-transparent" />
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end gap-4">
                                        <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase font-headline leading-none">{item.t}</h3>
                                        <ul className="space-y-1">
                                            {item.sub.map((s, j) => (
                                                <li key={j} className="text-sm font-bold text-white/40 italic uppercase tracking-widest">{s}</li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-950 group-hover:bg-primary transition-colors">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- DEPLOYMENT GUIDE --- */}
                <Section className="bg-[#121B26]" id="deploy">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                             <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">ONBOARDING PROTOCOL</Padding>
                             <h2 className="text-[34px] md:text-[60px] font-black font-headline text-white leading-[0.95] tracking-tight uppercase italic text-center">GO LIVE IN 10 MINUTES</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { n: "01", t: "DOWNLOAD", d: "Instantly get your pre-built industry master file." },
                                { n: "02", t: "UPLOAD", d: "Add to Google Drive for live cloud team access." },
                                { n: "03", t: "ASSIGN", d: "Map staff to roles and set your control metrics." },
                                { n: "04", t: "RUN", d: "Your business is now systemized. Watch live." }
                            ].map((step, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-6 relative overflow-hidden group">
                                    <span className="text-6xl font-black italic text-white/5 group-hover:text-primary/10 transition-colors absolute -top-2 -right-2">{step.n}</span>
                                    <div className="space-y-2 relative z-10">
                                        <p className="text-[10px] font-mono text-zinc-500 tracking-widest font-black uppercase">STEP_{step.n}</p>
                                        <h4 className="text-xl font-black italic uppercase text-white font-headline">{step.t}</h4>
                                        <p className="text-sm text-zinc-400 font-bold italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- FINAL CTA --- */}
                <Section className="bg-[#0F1720] text-white py-32 md:py-48" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12 text-center">
                        <h2 className="text-[44px] md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-center">
                            STOP CHASING. <br/> START RUNNING.
                        </h2>
                        <div className="space-y-4">
                             <p className="text-xl md:text-[32px] font-black italic text-primary uppercase leading-tight text-center">
                                OPERATIONS PROPERLY.
                            </p>
                            <p className="text-sm md:text-lg text-zinc-500 font-bold italic uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                                Less confusion. Less follow-ups. <br/> More consistency. Better accountability.
                            </p>
                        </div>
                        <div className="pt-8">
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] text-zinc-950 font-black uppercase italic text-xl hover:scale-[1.05] transition-all border-none shadow-2xl" style={{ backgroundColor: GOLD }}>
                                <Link href="/library" className="flex items-center gap-6">
                                    DEPLOY YOUR SYSTEM <ArrowRight className="w-8 h-8" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-800 italic">SYSTEMIZED INFRASTRUCTURE • ONE-TIME INVESTMENT</p>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
