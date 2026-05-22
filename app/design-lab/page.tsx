
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
    Zap,
    History,
    ShieldAlert,
    Target,
    FileSpreadsheet,
    ChevronRight,
    LayoutGrid,
    Eye,
    TrendingUp,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    ShoppingBag,
    Gem,
    Cpu,
    ShoppingBasket
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { FaqSection } from '@/components/layout/faq-section';

const ACCENT_ROSE = "#E11D48"; // Vibrant Rose/Pink for high-impact alerts
const BRAND_GREEN = "#22C55E"; // Success Green
const OBSIDIAN = "#050505"; // Deep Midnight base

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

const PulsatingRoseText = ({ text, delay = "0s" }: { text: string, delay?: string }) => (
    <div className="animate-pulse duration-[2000ms] transition-all" style={{ animationDelay: delay }}>
        <span className="text-[12px] md:text-[15px] font-black uppercase tracking-tighter italic leading-none block text-left lg:text-right whitespace-nowrap" style={{ color: ACCENT_ROSE }}>
            {text}
        </span>
    </div>
);

export default function DesignLabV6() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-white text-[#051C14] font-sans antialiased selection:bg-rose-500/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- SECTION 1: THE HIGH-IMPACT HERO (OBSIDIAN & ROSE) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center overflow-hidden bg-zinc-950 text-white">
                    <div className="absolute inset-0 z-0">
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="h-full w-full object-cover opacity-20 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1200px] px-6 py-20">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
                            <div className="space-y-10 md:space-y-14">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="border-rose-500/30 text-rose-500 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-none bg-rose-950/20 italic">
                                        OPERATIONAL MANDATE
                                    </Badge>
                                    <h1 className="text-[34px] md:text-[64px] lg:text-[76px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter">
                                        STOP THE <br />
                                        <span style={{ color: ACCENT_ROSE }}>REPORTING</span> <br/>
                                        <span className="text-white">CHASE.</span>
                                    </h1>
                                    <div className="space-y-4 max-w-2xl">
                                        <p className="text-lg md:text-2xl italic font-medium text-zinc-400 leading-tight">
                                            Chasing staff for updates is a full-time job you didn't apply for. Deploy a live system your team will actually follow.
                                        </p>
                                        <div className="border-l-[3px] border-rose-500/40 pl-8">
                                            <p className="text-[11px] md:text-sm text-rose-400 font-black uppercase tracking-widest italic">
                                                Memory is a liability. Systems are an asset.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 items-start md:items-center">
                                    <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-white text-black font-black uppercase italic text-sm md:text-lg shadow-2xl hover:bg-rose-600 hover:text-white transition-all border-none group">
                                        <Link href="/library" className="flex items-center gap-4">
                                            Deploy Your System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white italic tracking-tighter">₹3,499</span>
                                            <span className="text-sm font-bold text-zinc-700 line-through">₹4,999</span>
                                        </div>
                                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest italic">ONE-TIME • OWN FOREVER</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-col items-end gap-12 text-right">
                                <div className="space-y-4">
                                    <p className="text-[9px] font-black text-rose-500/40 uppercase tracking-[0.6em] italic">SYSTEM VITAL RISKS</p>
                                    <div className="flex flex-col gap-5">
                                        <PulsatingRoseText text="EXPIRED KDM BLACKOUTS" delay="0s" />
                                        <PulsatingRoseText text="CONCESSION YIELD LEAKAGE" delay="0.2s" />
                                        <PulsatingRoseText text="UNVERIFIED SAFETY CHECKS" delay="0.4s" />
                                        <PulsatingRoseText text="INSTITUTIONAL AMNESIA" delay="0.6s" />
                                    </div>
                                </div>

                                <div className="p-1 border-r border-white/10 space-y-4 pr-10">
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em] italic">ELITE VERTICALS</p>
                                    <div className="flex flex-col space-y-4">
                                        {["RETAIL OPS", "HOTEL OPS", "MULTIPLEX OPS", "HOSPITAL OPS", "SCHOOL OPS"].map((n) => (
                                            <span key={n} className="text-2xl font-black font-headline uppercase italic tracking-tighter text-zinc-800 hover:text-rose-500 transition-colors cursor-default">
                                                {n}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-black/40 h-10 md:h-12 border-t border-white/5 flex items-center shadow-inner overflow-hidden">
                        <div className="flex flex-nowrap items-center gap-16 animate-marquee whitespace-nowrap px-10">
                            {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-600">
                                    <span className="text-rose-500">[!]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                             {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={`dup-${i}`} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-600">
                                    <span className="text-rose-500">[!]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: THE ADOPTION ENGINE (UX PSYCHOLOGY) --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-rose-600 border-rose-100 bg-rose-50 uppercase tracking-[0.4em] font-black text-[10px] italic px-8 py-2 rounded-none">THE ADOPTION ENGINE</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">WHY SHEETS WINS.</h2>
                            <p className="text-xl text-zinc-500 font-bold italic leading-relaxed max-w-2xl mx-auto text-center">
                                Frontline teams resist complex apps. They understand spreadsheets. We remove the learning curve to ensure 100% adoption.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                             <div className="space-y-12">
                                {[
                                    { t: "Zero Training", d: "If your team can type their initials in a box, they are already fully trained. No new software behavior to learn.", i: CheckCircle2 },
                                    { t: "Native Mobile Speed", d: "Google Sheets provides a high-speed mobile interface that works instantly on any smartphone without installation.", i: Smartphone },
                                    { t: "No SaaS Tax", d: "One-time investment. No per-user fees. No recurring monthly bills. You own your master operational file forever.", i: Lock }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-rose-500 shrink-0 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{item.t}</h4>
                                            <p className="text-sm text-zinc-400 font-bold italic leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                             <div className="p-10 rounded-[3rem] bg-zinc-950 text-white space-y-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <ShieldCheck className="w-48 h-48" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] italic">SOVEREIGN ADVANTAGE</p>
                                    <h3 className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter leading-tight">PERMANENT <br/> INFRASTRUCTURE.</h3>
                                    <p className="text-zinc-400 italic text-sm md:text-base font-bold leading-relaxed">
                                        Standard Operating Procedures (SOPs) usually die in PDF folders. <br/><br/>
                                        MoreMeets™ converts those static PDFs into a <strong>Live Operating System</strong> where work is assigned and execution is recorded in real time.
                                    </p>
                                </div>
                                <Button asChild variant="outline" className="border-zinc-800 text-white hover:bg-rose-600 hover:border-transparent rounded-xl uppercase font-black italic text-[10px] tracking-widest h-12 bg-transparent">
                                    <Link href="/library">Explore Sovereign Systems</Link>
                                </Button>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: THE SOVEREIGN LEDGER (THE PROOF) --- */}
                <Section className="bg-zinc-50/50" noSpine>
                    <div className="max-w-[1400px] mx-auto space-y-16">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 bg-white uppercase tracking-[0.5em] font-black text-[10px] px-8 py-3 rounded-none italic shadow-sm">THE INTERFACE</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                THE SOVEREIGN LEDGER
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-2xl font-bold italic max-w-3xl leading-tight">
                                Every task is assigned, timestamped, verifiable, and visible live across the team.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-zinc-300 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white font-sans group relative z-10">
                            <div className="bg-[#22C55E] text-white py-3 px-6 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]">
                                <Target className="w-4 h-4" />
                                <span>Mission Control: Daily Execution Engine v18.1</span>
                            </div>

                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[1200px]">
                                    <thead>
                                        <tr className="bg-zinc-950 text-zinc-400 border-b border-white/5">
                                            {["BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED TO", "DONE BY", "VERIFIED BY", "STATUS", "CONSEQUENCE / RISK", "STAMP"].map((h, i) => (
                                                <th key={i} className="px-5 py-4 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5 last:border-0">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { b: "BRANCH_01", r: "Projection Lead", t: "KDM KEY VALIDITY SYNC", a: "Anil K.", db: "AK", vb: "SM", s: "COMPLETE", c: "Immediate show cancellation & refund risk.", st: "2025-05-12 08:14" },
                                            { b: "BRANCH_01", r: "Kitchen Head", t: "COLD STORAGE VITAL PULSE", a: "Sarah M.", db: "SM", vb: "", s: "COMPLETE", c: "Mass stock spoilage & pathogen risk.", st: "2025-05-12 11:22" },
                                            { b: "BRANCH_02", r: "Security Chief", t: "FIRE EXIT EGRESS SWEEP", a: "Rohan D.", db: "", vb: "", s: "OPEN", c: "Fatal entrapment during crisis event.", st: "" },
                                            { b: "BRANCH_01", r: "Front Desk", t: "C-FORM COMPLIANCE LOG", a: "Vikram S.", db: "VS", vb: "", s: "COMPLETE", c: "Serious regulatory violation & legal fines.", st: "2025-05-12 14:02" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-zinc-100 text-[11px] hover:bg-zinc-50 transition-colors">
                                                <td className="px-5 py-5 border-r border-zinc-100 text-zinc-400 font-mono">{row.b}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-bold text-zinc-900">{row.r}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black uppercase tracking-tight text-zinc-950">{row.t}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 text-zinc-400 italic">{row.a}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 bg-emerald-500/10 font-black text-center text-emerald-600">{row.db}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black text-center text-blue-500/40">{row.vb || "—"}</td>
                                                <td className="px-5 py-5 border-r border-zinc-100 font-black text-center">
                                                    <span className={cn(row.s === "COMPLETE" ? "text-emerald-500" : "text-zinc-300")}>{row.s}</span>
                                                </td>
                                                <td className="px-5 py-5 border-r border-zinc-100 italic text-rose-600/70 font-bold leading-tight max-w-[220px]">{row.c}</td>
                                                <td className="px-5 py-5 text-zinc-400 font-mono text-[9px]">{row.st || "NULL_SIGNAL"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.5em] italic">
                                SYSTEM PROOF: BUILT IN EXCEL • OPERATED LIVE VIA GOOGLE SHEETS
                            </p>
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
                                <Badge variant="outline" className="text-rose-600 border-rose-200 bg-white uppercase tracking-[0.4em] font-black text-[10px] italic">ASSET PROTECTION</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.9]">
                                    WHEN SOMEONE <br/> RESIGNS: <br/> <span style={{ color: ACCENT_ROSE }}>THE SYSTEM STAYS.</span>
                                </h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-relaxed border-l-[3px] border-rose-500/20 pl-10">
                                    Don't let your operational standard leave with the individual. We convert tribal knowledge into permanent organizational infrastructure. 
                                    <br/><br/>
                                    New staff are 100% compliant from Day 1 because the instructions are built into the task.
                                </p>
                            </div>
                            <div className="w-full md:w-[400px] shrink-0">
                                 <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl aspect-[4/5] bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000">
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
                <Section className="bg-white border-t border-zinc-100">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] italic">SOVEREIGN SOLUTIONS</Badge>
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
                                <Link key={i} href={`/packs/${item.id}`} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-6 hover:shadow-2xl transition-all group hover:border-rose-500/50 hover:bg-white">
                                    <div className="flex items-center justify-between">
                                        <item.i className="w-8 h-8 text-zinc-300 group-hover:text-rose-500 transition-colors duration-500" />
                                        <ChevronRight className="w-4 h-4 text-zinc-200 group-hover:text-rose-500 transition-all" />
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
                <Section className="bg-zinc-950 text-white py-32 md:py-48" noSpine>
                    <div className="max-w-5xl mx-auto space-y-12 text-center">
                        <h2 className="text-[48px] md:text-[96px] font-black leading-[0.85] tracking-tighter uppercase italic font-headline text-center drop-shadow-sm">
                            STOP CHASING. <br/> START RUNNING.
                        </h2>
                        <p className="text-xl md:text-[34px] font-black italic text-rose-500 uppercase leading-none text-center">
                            Less misses. More standards. Deploy now.
                        </p>
                        <div className="pt-8 text-center">
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] bg-white text-black font-black uppercase italic text-xl hover:scale-[1.05] transition-all border-none shadow-2xl">
                                <Link href="/library" className="flex items-center gap-4">
                                    GET YOUR SYSTEM <ArrowRight className="w-8 h-8" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700 italic">ONE-TIME INVESTMENT • INSTITUTIONAL GRADE</p>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}

