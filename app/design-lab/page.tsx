
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    X,
    ArrowRight, 
    Activity,
    Lock,
    ClipboardCheck,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    CheckCircle2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    History,
    ShieldAlert,
    Target,
    SearchCheck,
    FileSpreadsheet,
    ChevronRight,
    Download,
    ShoppingBag,
    Clock,
    LayoutGrid,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { FaqSection } from '@/components/layout/faq-section';

const BRAND_GREEN = "#22C55E";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const MARQUEE_SIGNALS = [
    "HACCP_SWEEP_COMPLETE", 
    "REVENUE_LEAKAGE_PLUGGED", 
    "COLD_STORAGE_STABLE", 
    "OPENING_AUDIT_VERIFIED", 
    "EXPIRY_LOG_VALIDATED", 
    "VOID_BILL_MONITORING", 
    "GAS_SHUTDOWN_CONFIRMED", 
    "SOP_VERSION_V18.1", 
    "SHIFT_COMPLIANCE_100%", 
    "ROI_ENGINE_ACTIVE"
];

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

export default function DesignLabV4() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- SECTION 1: THE DAYLIGHT HERO (CRISP & BOLD) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white text-zinc-950">
                    <div className="absolute inset-0 z-0">
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="h-full w-full object-cover opacity-[0.08] grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-24 pb-12">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center">
                            <div className="space-y-10 md:space-y-16">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-none bg-zinc-50 italic shadow-sm">OPERATIONAL INFRASTRUCTURE</Badge>
                                    <h1 className="text-[36px] md:text-[64px] lg:text-[76px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-zinc-950">
                                        YOUR BUSINESS <br />
                                        <span style={{ color: BRAND_GREEN }}>SHOULD NOT RUN</span> <br/>
                                        <span className="text-zinc-300">ON MEMORY.</span>
                                    </h1>
                                    <div className="space-y-4">
                                        <p className="text-lg md:text-2xl italic font-medium text-zinc-500 max-w-2xl leading-tight">
                                            Pre-built operational systems that turn tribal knowledge into permanent organizational assets. 
                                        </p>
                                        <div className="border-l-[3px] border-emerald-500/40 pl-8">
                                            <p className="text-[10px] md:text-sm text-emerald-600 font-black uppercase tracking-widest italic">Memory is a liability. Systems are an asset.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 items-start md:items-center">
                                    <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-zinc-950 text-white font-black uppercase italic text-sm md:text-lg shadow-2xl hover:bg-emerald-500 hover:text-black transition-all border-none group">
                                        <Link href="/library" className="flex items-center gap-4">
                                            Deploy Your System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-zinc-950 italic tracking-tighter">₹3,499</span>
                                            <span className="text-sm font-bold text-zinc-300 line-through">₹4,999</span>
                                        </div>
                                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest italic">ONE-TIME • OWN FOREVER</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block relative">
                                <div className="p-1 border-l border-zinc-100 space-y-8 pl-10">
                                    <p className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.5em] italic">ELITE VERTICALS</p>
                                    <div className="flex flex-col space-y-5">
                                        {[
                                            { n: "RETAIL OPERATIONS", id: "supermarket_grocery_retail_pack" },
                                            { n: "HOTEL OPERATIONS", id: "hotels_and_resorts" },
                                            { n: "RESTAURANT OPERATIONS", id: "restaurants" },
                                            { n: "MULTIPLEX OPERATIONS", id: "cinema_operations_pack" },
                                            { n: "HOSPITAL OPERATIONS", id: "healthcare_and_hospital_operations" },
                                            { n: "SCHOOL OPERATIONS", id: "school_operations_pack" }
                                        ].map((ind) => (
                                            <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center justify-between text-2xl font-black font-headline uppercase italic tracking-tighter text-zinc-200 hover:text-emerald-500 transition-all duration-300 hover:translate-x-3">
                                                {ind.n}
                                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        ))}
                                    </div>
                                    <p className="text-[9px] text-zinc-400 font-black uppercase tracking-[0.3em] italic leading-tight pt-8 border-t border-zinc-50">
                                        NO SaaS • WORKS ON PHONES • DEPLOY IN 10 MINS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-zinc-50 h-10 md:h-12 border-t border-zinc-100 flex items-center shadow-inner overflow-hidden">
                        <div className="flex flex-nowrap items-center gap-16 animate-marquee whitespace-nowrap px-10">
                            {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-400">
                                    <span className="text-emerald-500">[✓]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                             {/* Loop replication */}
                             {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={`dup-${i}`} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-400">
                                    <span className="text-emerald-500">[✓]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: THE PROBLEM (MEMORY VS SYSTEM) --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-red-500/10 text-red-600 border-red-200 uppercase font-black tracking-widest text-[10px] italic px-8 py-2 rounded-none">THE OPERATIONAL CEILING</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    WHY GROWTH <br/> <span className="text-red-600">FEELS CHAOTIC.</span>
                                </h2>
                                <p className="text-xl text-zinc-500 font-bold italic leading-relaxed">
                                    Most businesses don't actually have systems. They have heroes who remember how things work.
                                </p>
                            </div>
                            <div className="space-y-6 border-l-[3px] border-zinc-100 pl-8">
                                {[
                                    { t: "The \"Guesswork\" Tax", d: "When staff are unsure, they improvise. Improvisation is the enemy of profit." },
                                    { t: "Manager Burnout", d: "You spend 4 hours a day chasing updates that should be visible instantly." },
                                    { t: "Institutional Amnesia", d: "When a key manager leaves, your standards leave with them. You start from zero." }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <h4 className="font-black text-lg uppercase italic text-zinc-950">{item.t}</h4>
                                        <p className="text-sm text-zinc-400 font-medium italic">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-zinc-100 shadow-xl relative">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 flex items-center justify-center rounded-full text-white shadow-2xl -rotate-12">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                            <div className="space-y-10">
                                <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.5em] italic">COMMON FAILURE POINTS</p>
                                <div className="space-y-8">
                                    {[
                                        "Opening checks becoming assumed, not verified",
                                        "Technical SOPs buried in dead PDF folders",
                                        "Shift handovers documented via WhatsApp chat",
                                        "Critical safety vitals logged at end-of-shift"
                                    ].map((fail, i) => (
                                        <div key={i} className="flex items-center gap-4 text-zinc-950 font-black italic uppercase tracking-tighter text-lg leading-tight">
                                            <X className="w-6 h-6 text-red-500 shrink-0" />
                                            <span>{fail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: THE PROOF (THE SOVEREIGN LEDGER) --- */}
                <Section className="bg-white" noSpine>
                    <div className="max-w-[1400px] mx-auto space-y-16">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-3 rounded-none italic shadow-sm">THE INTERFACE</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                THE SOVEREIGN LEDGER
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-2xl font-bold italic max-w-3xl leading-tight">
                                Every task is assigned, timestamped, verifiable, and visible live across the team.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white font-sans group relative z-10">
                            <div className="bg-[#22C55E] text-white py-3 px-6 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]">
                                <Target className="w-4 h-4" />
                                <span>Mission Control: Daily Execution Engine v18.1</span>
                            </div>

                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[1200px]">
                                    <thead>
                                        <tr className="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                                            {["BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED TO", "DONE BY", "VERIFIED BY", "STATUS", "CONSEQUENCE / RISK", "STAMP"].map((h, i) => (
                                                <th key={i} className="px-5 py-4 text-[9px] font-black uppercase tracking-[0.2em] border-r border-zinc-800 last:border-0">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { b: "UNIT_01", r: "Kitchen Lead", t: "COLD STORAGE VITAL SYNC", a: "Anil K.", db: "AK", vb: "SK", s: "COMPLETE", c: "Mass stock loss & pathogen growth.", st: "2025-05-12 08:14" },
                                            { b: "UNIT_01", r: "Store Manager", t: "CASH-DROP SEAL WITNESS", a: "Sarah K.", db: "SK", vb: "", s: "COMPLETE", c: "Untraceable internal revenue theft.", st: "2025-05-12 11:22" },
                                            { b: "UNIT_02", r: "Security Chief", t: "FIRE EXIT CLEARANCE SCAN", a: "Rohan D.", db: "", vb: "", s: "OPEN", c: "Fatal entrapment during crisis event.", st: "" },
                                            { b: "UNIT_01", r: "Floor Sup", t: "RESTROOM HYGIENE PULSE", a: "Vikram S.", db: "VS", vb: "", s: "COMPLETE", c: "Primary driver of negative guest ratings.", st: "2025-05-12 14:02" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-zinc-100 text-[11px] hover:bg-zinc-50 transition-colors">
                                                <td className="px-5 py-5 border-r border-zinc-100 text-zinc-400 font-mono">{row.b}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-bold text-zinc-900">{row.r}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black text-zinc-950 uppercase tracking-tight">{row.t}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 text-zinc-400 italic">{row.a}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 bg-[#FEFCE8]/40 font-black text-center text-emerald-600">{row.db}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black text-center text-blue-500/40">{row.vb || "—"}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black text-center">
                                                    <span className={cn(row.s === "COMPLETE" ? "text-emerald-500" : "text-zinc-300")}>{row.s}</span>
                                                </td>
                                                <td className="px-5 py-5 border-r border-zinc-100 italic text-red-600/70 font-bold leading-tight max-w-[220px]">{row.c}</td>
                                                <td className="px-5 py-5 text-zinc-400 font-mono text-[9px]">{row.st || "NULL_SIGNAL"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[11px] text-zinc-300 font-black uppercase tracking-[0.5em] italic">
                                SYSTEM PROOF: BUILT IN EXCEL • OPERATED LIVE VIA GOOGLE SHEETS
                            </p>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 4: THE ADOPTION ENGINE (WHY SHEETS > APPS) --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic">THE ADOPTION ENGINE</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">WHY SHEETS WINS.</h2>
                            <p className="text-xl text-zinc-500 font-bold italic leading-relaxed max-w-2xl mx-auto">Frontline teams resist apps. They understand spreadsheets. We remove the learning curve to ensure 100% adoption.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                             <div className="space-y-10">
                                {[
                                    { t: "Zero Training Required", d: "If your team can type their name in a cell, they are already fully trained.", i: CheckCircle2 },
                                    { t: "No Native App Friction", d: "Google Sheets provides a native, high-speed mobile experience without installing new software.", i: Smartphone },
                                    { t: "Institutional Memory Lock", d: "When a manager resigns, your standards don't leave with them. The system is the authority.", i: History }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{item.t}</h4>
                                            <p className="text-sm text-zinc-400 font-medium italic leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                             <div className="p-10 rounded-[3rem] bg-zinc-950 text-white space-y-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Lock className="w-32 h-32" />
                                </div>
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic">SOVEREIGN ADVANTAGE</p>
                                <h3 className="text-2xl md:text-3xl font-black font-headline italic uppercase tracking-tighter leading-tight">NO SAAS. <br/> OWN YOUR DATA.</h3>
                                <p className="text-zinc-400 italic text-sm font-medium leading-relaxed">Unlike a locked SaaS app, you own the master file forever. No recurring bills. No per-user pricing. No vendor lock-in. Permanent infrastructure for a one-time investment.</p>
                                <div className="pt-4">
                                     <Button asChild variant="outline" className="border-zinc-800 text-white hover:bg-white/5 rounded-xl uppercase font-black italic text-[10px] tracking-widest h-12 bg-transparent">
                                        <Link href="/library">Explore Sovereign Systems</Link>
                                     </Button>
                                </div>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 6: SYSTEM ANATOMY --- */}
                <Section className="bg-white border-y border-zinc-50" noSpine>
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic bg-zinc-50 shadow-sm">SYSTEM ANATOMY</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">WHAT YOU GET.</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "THE BRAIN (SOPs)", d: "Industry-specific Standard Operating Procedures pre-built into the logic.", i: GraduationCap },
                                { t: "THE HEARTBEAT (TASKS)", d: "Daily, weekly, and monthly mission-ledgers assigned by role and branch.", i: ClipboardCheck },
                                { t: "THE EYE (ANALYTICS)", d: "A live executive dashboard showing completion rates and risk alerts instantly.", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-6 hover:shadow-2xl transition-all group hover:bg-white">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                                        <item.i className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline leading-none">{item.t}</h3>
                                        <p className="text-sm text-zinc-400 font-bold italic leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 4: THE RESIGNATION PILLAR --- */}
                <Section className="bg-white" noSpine>
                    <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[3rem] bg-zinc-50 border border-zinc-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                            <History className="w-80 h-80 text-zinc-950" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
                            <div className="space-y-8 flex-1 text-left">
                                <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic">ASSET PROTECTION</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.9]">
                                    WHEN SOMEONE <br/> RESIGNS: <br/> <span className="text-emerald-500">THE SYSTEM STAYS.</span>
                                </h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-relaxed border-l-[3px] border-emerald-500/20 pl-10">
                                    Don't let your operational standard leave with the individual. We convert tribal knowledge into permanent organizational infrastructure. 
                                    <br/><br/>
                                    New staff are 100% compliant from Day 1 because the instructions are built into the task.
                                </p>
                            </div>
                            <div className="w-full md:w-[400px] shrink-0">
                                 <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl aspect-[4/5] bg-zinc-200 grayscale hover:grayscale-0 transition-all duration-1000">
                                    <img 
                                        src="https://i.postimg.cc/jdMQXJpq/resignation1.jpg" 
                                        alt="Operational Risk" 
                                        className="w-full h-full object-cover" 
                                    />
                                 </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 5: THE SECTOR GRID --- */}
                <Section className="bg-white border-t border-zinc-50">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic">SOVEREIGN SOLUTIONS</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">CHOOSE YOUR SECTOR</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Hotel Operations", id: "hotels_and_resorts", i: Building, sub: "Housekeeping, Front Desk, Engineering." },
                                { t: "Restaurant Ops", id: "restaurants", i: Utensils, sub: "Kitchen HACCP, Bar, FOH, Inventory." },
                                { t: "Retail Ops", id: "retail_operations_system", i: ShoppingBag, sub: "Jewellery, Electronics, Grocery, Fashion." },
                                { t: "Hospital Ops", id: "healthcare_and_hospital_operations", i: Hospital, sub: "Clinical, Nursing, Narcotics." },
                                { t: "School Ops", id: "school_operations_pack", i: School, sub: "Transport, Safety, Admin." },
                                { t: "Multiplex Ops", id: "cinema_operations_pack", i: Popcorn, sub: "Projection, Concession, Crowd." }
                            ].map((item, i) => (
                                <Link key={i} href={`/packs/${item.id}`} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-6 hover:shadow-2xl transition-all group hover:border-emerald-500/50 hover:bg-white">
                                    <div className="flex items-center justify-between">
                                        <item.i className="w-8 h-8 text-zinc-200 group-hover:text-emerald-500 transition-colors duration-500" />
                                        <ChevronRight className="w-4 h-4 text-zinc-200 group-hover:text-emerald-500 transition-all" />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline leading-none">{item.t}</h3>
                                        <p className="text-xs font-bold text-zinc-400 italic uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- FINAL MANDATE --- */}
                <Section className="bg-emerald-500 text-black py-32 md:py-48" noSpine>
                    <div className="max-w-5xl mx-auto space-y-12 text-center">
                        <h2 className="text-[48px] md:text-[96px] font-black leading-[0.85] tracking-tighter uppercase italic font-headline text-center drop-shadow-sm">
                            STOP CHASING. <br/> START RUNNING.
                        </h2>
                        <p className="text-xl md:text-[34px] font-black italic text-black/60 uppercase leading-none text-center">
                            Less misses. More standards. Deploy now.
                        </p>
                        <div className="pt-8 text-center">
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] bg-zinc-950 text-white font-black uppercase italic text-xl hover:scale-[1.05] transition-all border-none shadow-2xl">
                                <Link href="/library" className="flex items-center gap-4">
                                    GET YOUR SYSTEM <ArrowRight className="w-8 h-8" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40 italic">ONE-TIME INVESTMENT • INSTITUTIONAL GRADE</p>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
