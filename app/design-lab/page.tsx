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
    ClipboardCheck,
    Clock,
    ShieldCheck,
    Lock,
    Users,
    AlertTriangle,
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
    Zap,
    GraduationCap,
    Smartphone,
    ShieldAlert,
    Target,
    ChevronRight,
    History,
    FileSignature,
    Scale,
    Cpu,
    Gem,
    ShoppingBag,
    ShoppingBasket
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { FaqSection } from '@/components/layout/faq-section';

const BRAND_GREEN = "#22C55E";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

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

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noSpine?: boolean;
}

const Section = ({ children, className, id, noSpine = false }: SectionProps) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

export default function DesignLabV2() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-primary/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- SECTION 1: THE COMMAND HERO --- */}
                <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="h-full w-full object-cover opacity-25 grayscale brightness-[0.4]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 md:via-black/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-20 pb-12">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center">
                            <div className="space-y-10 md:space-y-16">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-none bg-primary/5 italic">OPERATIONAL INFRASTRUCTURE</Badge>
                                    <h1 className="text-[32px] md:text-[64px] lg:text-[78px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                        STOP CHASING <br />
                                        <span style={{ color: BRAND_GREEN }}>YOUR TEAM.</span> <br/>
                                        <span className="text-zinc-500">SEE WORK DONE.</span>
                                    </h1>
                                    <p className="text-lg md:text-2xl italic font-medium text-zinc-400 max-w-2xl leading-tight border-l-2 border-primary/40 pl-8">
                                        Institutional-grade operational systems that turn tribal knowledge into permanent organizational assets. 
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 items-start md:items-center">
                                    <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-lg shadow-[0_20px_60px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group">
                                        <Link href="/library" className="flex items-center gap-4">
                                            Deploy Your System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-black text-white italic tracking-tighter">₹3,499</span>
                                            <span className="text-sm font-bold text-zinc-600 line-through">₹4,999</span>
                                        </div>
                                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest italic">ONE-TIME • OWN FOREVER</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block relative">
                                <div className="p-1 border-l border-white/10 space-y-8 pl-10">
                                    <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">ELITE VERTICALS</p>
                                    <div className="flex flex-col space-y-5">
                                        {[
                                            { n: "HOTEL OPERATIONS", id: "hotels_and_resorts" },
                                            { n: "RESTAURANT OPERATIONS", id: "restaurants" },
                                            { n: "GROCERY OPERATIONS", id: "supermarket_grocery_retail_pack" },
                                            { n: "HOSPITAL OPERATIONS", id: "healthcare_and_hospital_operations" },
                                            { n: "SCHOOL OPERATIONS", id: "school_operations_pack" }
                                        ].map((ind) => (
                                            <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center justify-between text-2xl font-black font-headline uppercase italic tracking-tighter text-white/20 hover:text-primary transition-all duration-300 hover:translate-x-3">
                                                {ind.n}
                                                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-10 transition-opacity" />
                                            </Link>
                                        ))}
                                    </div>
                                    <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.3em] italic leading-tight pt-8 border-t border-white/5">
                                        NO SaaS • WORKS ON PHONES • DEPLOY IN 10 MINS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-zinc-950/90 backdrop-blur-xl h-10 md:h-12 border-t border-white/5 flex items-center shadow-2xl overflow-hidden">
                        <div className="flex flex-nowrap items-center gap-16 animate-marquee whitespace-nowrap px-10">
                            {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={i} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-600">
                                    <span className="text-primary">[✓]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                            {MARQUEE_SIGNALS.map((signal, i) => (
                                <span key={`dup-${i}`} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.3em] flex items-center gap-2.5 text-zinc-600">
                                    <span className="text-primary">[✓]</span>
                                    <span className="opacity-70">{signal}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: THE PROBLEM (MEMORY VS SYSTEM) --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-red-500/10 text-red-600 border-red-200 uppercase font-black tracking-widest text-[10px]">THE OPERATIONAL CEILING</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    WHY GROWTH <br/> <span className="text-red-600">FEELS CHAOTIC.</span>
                                </h2>
                                <p className="text-xl text-zinc-500 font-bold italic leading-relaxed">
                                    Most businesses don't actually have systems. They have heroes who remember how things work.
                                </p>
                            </div>
                            <div className="space-y-6 border-l-2 border-zinc-100 pl-8">
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
                        <div className="bg-zinc-50 rounded-[3rem] p-12 md:p-16 border border-zinc-100 relative">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600 flex items-center justify-center rounded-full text-white shadow-2xl -rotate-12">
                                <AlertTriangle className="w-10 h-10" />
                            </div>
                            <div className="space-y-10">
                                <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.5em]">COMMON FAILURE POINTS</p>
                                <div className="space-y-8">
                                    {[
                                        "Fridge temps logged at shift-end (Guesswork)",
                                        "Closing checklists skipped during rush",
                                        "Opening readiness assumed, not verified",
                                        "Handover notes buried in WhatsApp chats"
                                    ].map((fail, i) => (
                                        <div key={i} className="flex items-center gap-4 text-zinc-950 font-black italic uppercase tracking-tighter text-lg">
                                            <X className="w-6 h-6 text-red-400 shrink-0" />
                                            <span>{fail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: THE PROOF (THE SOVEREIGN LEDGER) --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-[1400px] mx-auto space-y-16">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-3 rounded-none italic">THE INFRASTRUCTURE</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-white leading-[0.95] tracking-tight uppercase italic">
                                THE SOVEREIGN LEDGER
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-2xl font-bold italic max-w-3xl leading-tight">
                                One master engine. Up to 10 branches. <br/> Zero ambiguity for every single role.
                            </p>
                        </div>

                        {/* REPLICA GRID UI */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(34,197,94,0.15)] bg-[#0A0F19] font-sans group">
                            <div className="bg-[#22C55E] text-black py-3 px-6 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]">
                                <Target className="w-4 h-4" />
                                <span>Mission Control: Daily Execution Engine v18.1</span>
                            </div>

                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[1200px]">
                                    <thead>
                                        <tr className="bg-[#111827] text-zinc-500 border-b border-white/5">
                                            {["BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED TO", "DONE BY", "VERIFIED BY", "STATUS", "CONSEQUENCE / RISK", "STAMP"].map((h, i) => (
                                                <th key={i} className="px-5 py-4 text-[9px] font-black uppercase tracking-[0.2em] border-r border-white/5 last:border-0">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { b: "BRANCH_01", r: "Kitchen Lead", t: "COLD STORAGE VITAL SYNC", a: "Anil K.", db: "AK", vb: "SK", s: "COMPLETE", c: "Mass stock loss & pathogen growth.", st: "2025-05-12 08:14" },
                                            { b: "BRANCH_01", r: "Store Manager", t: "CASH-DROP SEAL WITNESS", a: "Sarah K.", db: "SK", vb: "", s: "COMPLETE", c: "Untraceable internal revenue theft.", st: "2025-05-12 11:22" },
                                            { b: "BRANCH_02", r: "Security Chief", t: "FIRE EXIT CLEARANCE SCAN", a: "Rohan D.", db: "", vb: "", s: "OPEN", c: "Fatal entrapment during crisis event.", st: "" },
                                            { b: "BRANCH_01", r: "Floor Sup", t: "RESTROOM HYGIENE PULSE", a: "Vikram S.", db: "VS", vb: "", s: "COMPLETE", c: "Primary driver of negative guest ratings.", st: "2025-05-12 14:02" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-white/5 text-[11px] hover:bg-white/[0.02] transition-colors">
                                                <td className="px-5 py-5 border-r border-white/5 text-zinc-500 font-mono">{row.b}</td>
                                                <td className="px-5 py-5 border-r border-white/5 font-bold text-zinc-400">{row.r}</td>
                                                <td className="px-5 py-5 border-r border-white/5 font-black text-white uppercase tracking-tight">{row.t}</td>
                                                <td className="px-5 py-5 border-r border-white/5 text-zinc-600 italic">{row.a}</td>
                                                <td className="px-5 py-5 border-r border-white/5 bg-[#FEFCE8]/5 font-black text-center text-primary">{row.db}</td>
                                                <td className="px-5 py-5 border-r border-white/5 font-black text-center text-blue-400/40">{row.vb || "—"}</td>
                                                <td className="px-5 py-5 border-r border-white/5 font-black text-center">
                                                    <span className={cn(row.s === "COMPLETE" ? "text-emerald-500" : "text-zinc-700")}>{row.s}</span>
                                                </td>
                                                <td className="px-5 py-5 border-r border-white/5 italic text-red-500/60 font-bold leading-tight max-w-[220px]">{row.c}</td>
                                                <td className="px-5 py-5 text-zinc-700 font-mono text-[9px]">{row.st || "NULL_SIGNAL"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em] italic">
                                SYSTEM PROOF: WORKS IN EXCEL • OPERATED LIVE VIA GOOGLE SHEETS
                            </p>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 4: THE RESIGNATION PILLAR --- */}
                <Section className="bg-white border-y border-zinc-100" noSpine>
                    <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[3rem] bg-zinc-50 border border-zinc-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                            <History className="w-80 h-80 text-zinc-950" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
                            <div className="space-y-8 flex-1">
                                <Badge variant="outline" className="text-zinc-400 border-zinc-300 uppercase tracking-[0.4em] font-black text-[10px]">ASSET PROTECTION</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.9]">
                                    WHEN SOMEONE <br/> RESIGNS: <br/> <span className="text-primary">THE SYSTEM STAYS.</span>
                                </h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-relaxed border-l-4 border-primary/20 pl-10">
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
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px]">SOVEREIGN SOLUTIONS</Badge>
                            <h2 className="text-[34px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">CHOOSE YOUR SECTOR</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Hotel Operations", id: "hotels_and_resorts", i: Building, sub: "Housekeeping, Front Desk, Engineering." },
                                { t: "Restaurant Ops", id: "restaurants", i: Utensils, sub: "Kitchen HACCP, Bar, FOH, Inventory." },
                                { t: "Grocery Retail", id: "supermarket_grocery_retail_pack", i: ShoppingBasket, sub: "Cold Chain, Expiry, Shrinkage." },
                                { t: "Jewellery Retail", id: "retail_jewellery_operations_pack", i: Gem, sub: "Vault, Custody, Hallmarking." },
                                { t: "Fashion Retail", id: "fashion_and_apparel_retail", i: ShoppingBag, sub: "VM, Size-Curve, Trial Rooms." },
                                { t: "Hospital Ops", id: "healthcare_and_hospital_operations", i: Hospital, sub: "Clinical, Nursing, Narcotics." },
                                { t: "School Ops", id: "school_operations_pack", i: School, sub: "Transport, Safety, Admin." },
                                { t: "Facilities Mgmt", id: "facility_management_blueprint", i: Building2, sub: "MEP, Safety, Energy, Vendor." },
                                { t: "Cinema Ops", id: "cinema_operations_pack", i: Popcorn, sub: "Projection, Concession, Crowd." }
                            ].map((item, i) => (
                                <Link key={i} href={`/packs/${item.id}`} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-6 hover:shadow-2xl transition-all group hover:border-primary">
                                    <div className="flex items-center justify-between">
                                        <item.i className="w-8 h-8 text-zinc-300 group-hover:text-primary transition-colors" />
                                        <ChevronRight className="w-4 h-4 text-zinc-200 group-hover:text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">{item.t}</h3>
                                        <p className="text-xs font-bold text-zinc-400 italic uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 6: THE SaaS ANTIDOTE --- */}
                <Section className="bg-zinc-950 text-white" noSpine id="no-saas">
                    <div className="max-w-4xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20 uppercase font-black tracking-widest text-[10px] px-8 py-2 rounded-none italic">THE SaaS ANTIDOTE</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter">
                                NO LOGINS. NO TRAINING. <br/> <span className="text-primary">ZERO FRICTION.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 font-bold italic leading-relaxed max-w-2xl mx-auto">
                                Most operational apps fail because the frontline team resists them. MoreMeets uses the tool they already understand: The Spreadsheet.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "Works on Phones", d: "Google Sheets provides a native mobile experience for floor teams.", i: Smartphone },
                                { t: "Own Your Data", d: "Zero SaaS dependency. You buy the master file once and keep it forever.", i: Lock },
                                { t: "Ready in 10 Mins", d: "Instant download. No consultants, no IT setup, no cloud onboarding.", i: Zap }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 p-8 bg-white/5 rounded-[2rem] border border-white/5">
                                    <item.i className="w-8 h-8 text-primary mx-auto" />
                                    <h4 className="text-lg font-black uppercase italic text-white leading-none">{item.t}</h4>
                                    <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- FINAL MANDATE --- */}
                <Section className="bg-primary text-black py-32 md:py-48" noSpine>
                    <div className="max-w-5xl mx-auto space-y-12 text-center">
                        <h2 className="text-[48px] md:text-[96px] font-black leading-[0.85] tracking-tighter uppercase italic font-headline text-center drop-shadow-sm">
                            STOP CHASING. <br/> START RUNNING.
                        </h2>
                        <p className="text-xl md:text-[34px] font-black italic text-black/60 uppercase leading-none text-center">
                            Less misses. More standards. Deploy now.
                        </p>
                        <div className="pt-8">
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] bg-black text-white font-black uppercase italic text-xl hover:scale-[1.05] transition-all border-none shadow-2xl">
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