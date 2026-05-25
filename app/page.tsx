
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from '@/components/layout/faq-section';
import { 
    Check, 
    ArrowRight, 
    Activity, 
    CheckCircle2, 
    Users, 
    History, 
    ShieldCheck, 
    Smartphone, 
    LayoutGrid, 
    Lock, 
    GraduationCap, 
    Zap, 
    AlertTriangle, 
    ShieldAlert, 
    Building, 
    Utensils, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn, 
    Gem, 
    Wrench, 
    Leaf, 
    Recycle, 
    Search,
    ClipboardCheck,
    FileText,
    Target,
    ChevronRight,
    SearchCheck,
    Database,
    FileSignature,
    Monitor,
    X,
    Clock,
    UserCheck,
    Scale,
    Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-20 md:py-40 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.03] z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const SectionEyebrow = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
        <div className="w-8 md:w-12 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#8B6B3F] font-headline whitespace-nowrap">
            {text}
        </span>
    </div>
);

const LedgerSimulation = () => (
    <div className="rounded-xl overflow-hidden border border-zinc-300 shadow-2xl bg-[#f8f9fa] font-sans group">
        {/* Mission Header */}
        <div className="bg-[#22C55E] text-white py-1.5 px-4 flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-bold">
            <span>📋</span>
            <span>DAILY TASKS – Update 'Done By' to complete daily work.</span>
        </div>

        {/* Ledger Body */}
        <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                    <tr className="bg-[#0F172A] text-white">
                        {["BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED", "DONE BY", "VERIFIED", "STATUS", "CONSEQUENCE / RISK", "STAMP"].map((h, i) => (
                            <th key={i} className="px-3 py-2.5 text-[9px] font-black uppercase tracking-tight border-r border-white/10 last:border-0">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                        { b: "Bandra", r: "General Manager", t: "Revenue Reconcile", a: "Aditi", db: "AK", v: "AK", s: "COMPLETE", c: "Untraceable internal revenue theft.", st: "2026-05-23 19:53:25" },
                        { b: "Bandra", r: "General Manager", t: "P1 Incident Triage", a: "Aditi", db: "", v: "", s: "OPEN", c: "Unmonitored liability and guest distress.", st: "" },
                        { b: "Bandra", r: "Front Office Manager", t: "C-Form Compliance", a: "Sarah", db: "SM", v: "", s: "COMPLETE", c: "Legal violation / premises shutdown.", st: "2026-05-23 09:12:04" },
                        { b: "Bandra", r: "Executive Chef", t: "HACCP Thermal Pulse", a: "Vikram", db: "", v: "", s: "OPEN", c: "Mass food poisoning / total stock loss.", st: "" }
                    ].map((row, idx) => (
                        <tr key={idx} className={cn("border-b border-zinc-200 text-[10px]", idx % 2 === 0 ? "bg-white" : "bg-zinc-50")}>
                            <td className="px-3 py-3 border-r border-zinc-200 text-zinc-400">{row.b}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 font-bold text-zinc-900">{row.r}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 font-black text-zinc-950 uppercase">{row.t}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 text-zinc-400">{row.a}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 bg-[#FEFCE8] font-black text-center">{row.db}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 font-black text-center">{row.v}</td>
                            <td className={cn(
                                "px-3 py-3 border-r border-zinc-200 font-black text-center", 
                                row.s === "COMPLETE" ? "text-emerald-600" : "text-zinc-300"
                            )}>{row.s}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 italic text-red-700 font-medium leading-tight max-w-[200px]">{row.c}</td>
                            <td className="px-3 py-3 text-zinc-400 font-mono text-[9px] relative overflow-hidden">
                                {row.st}
                                {row.s === "COMPLETE" && <div className="absolute inset-y-0 right-0 w-1 bg-emerald-500" />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="bg-white border-t border-zinc-200 p-2 flex items-center justify-between px-4">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">SOVEREIGN_ENGINE_STABLE</span>
             </div>
             <span className="text-[8px] font-black text-zinc-300 uppercase tracking-widest">365-DAY AUDIT TRAIL</span>
        </div>
    </div>
);

export default function HomePage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-[#B89B5E]/10">
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* --- HERO SECTION (DESKTOP) --- */}
                <section className="hidden md:flex relative w-full h-[100svh] min-h-[700px] flex-col justify-start overflow-hidden bg-[#F8F6F2]">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full animate-[zoom_20s_ease-in-out_infinite_alternate]">
                            <iframe 
                                src={VIMEO_URL} 
                                className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[1.4] pointer-events-none"
                                frameBorder="0" 
                                allow="autoplay; fullscreen" 
                                style={{ filter: 'brightness(0.88) saturate(0.92) contrast(1.02)' }}
                            />
                        </div>
                        <div 
                            className="absolute inset-0 z-20" 
                            style={{ 
                                background: 'linear-gradient(90deg, rgba(248,246,242,0.92) 0%, rgba(248,246,242,0.85) 38%, rgba(248,246,242,0.4) 58%, rgba(0,0,0,0.05) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-30 container mx-auto max-w-[1200px] px-6 h-full flex items-center pt-24">
                        <div className="max-w-[620px] space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
                                        LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                                    </span>
                                </div>

                                <h1 className="text-[34px] md:text-[58px] font-bold font-headline leading-[0.95] uppercase text-[#121212] tracking-[-0.04em]">
                                    YOUR BUSINESS SHOULD NOT <br />
                                    <span className="relative inline-block mt-1">
                                        DEPEND ON MEMORY.
                                        <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#D6A85F]/30 rounded-full" />
                                    </span>
                                </h1>
                                
                                <p className="text-[18px] font-normal leading-[1.6] text-[#4B5563] max-w-lg">
                                    MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking — so work gets done properly, even when managers are absent.
                                </p>
                                
                                <div className="flex flex-col gap-2.5 pt-1">
                                    {[
                                        "Works directly on Google Sheets.",
                                        "No new apps to learn."
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                            </div>
                                            <span className="text-[13px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-10">
                                <button className="h-16 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                                    <Link href="/library" className="flex items-center justify-center gap-3">
                                        See the systems <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                                <button className="group text-[#5F6368] font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:text-[#111111] flex items-center gap-3">
                                    <Link href="#inside">Watch Teams Use It</Link>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-sm border-t border-black/5 py-4">
                        <div className="container mx-auto px-6">
                            <p className="text-[9px] font-black text-[#8B6B3F] uppercase tracking-[0.4em] text-center italic">
                                NO SaaS LOCK-IN • BUILT IN EXCEL • DEPLOY IN 10 MINUTES • WORKS ON PHONES
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- HERO SECTION (MOBILE) --- */}
                <section className="md:hidden relative w-full flex flex-col bg-[#F8F6F2]">
                    <div className="w-full aspect-[4/5] relative overflow-hidden bg-zinc-200">
                        <iframe 
                            src={VIMEO_URL} 
                            className="absolute inset-0 w-full h-full scale-[1.8]" 
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                        />
                        <div className="absolute inset-0 bg-black/5" />
                    </div>
                    <div className="p-8 space-y-8 flex flex-col justify-start">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
                            <span className="text-[7.5px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
                                LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                            </span>
                        </div>
                        
                        <div className="space-y-3">
                            <h1 className="text-[32px] font-bold font-headline leading-[0.95] uppercase italic tracking-tighter text-[#121212]">
                                YOUR BUSINESS SHOULD NOT <br />
                                <span className="relative inline-block mt-1">
                                    DEPEND ON MEMORY.
                                    <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#D6A85F]/30 rounded-full" />
                                </span>
                            </h1>
                            <p className="text-[14px] font-normal leading-[1.6] text-[#4B5563]">
                                MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            {[
                                "Works directly on Google Sheets.",
                                "No new apps to learn."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Check className="w-2.5 h-2 text-[#2E7D5A]" />
                                    </div>
                                    <span className="text-[11px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                             <button className="h-14 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] w-full text-center">
                                <Link href="/library">See the systems</Link>
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 1: THE CORE TRUTH --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <SectionEyebrow text="SECTION 1 — THE CORE TRUTH" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    SOPs don’t fail <br/> because they are missing.
                                </h2>
                                <p className="text-xl md:text-2xl font-black text-primary italic leading-none uppercase">
                                    They fail because they are not executed.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-500 font-bold italic leading-relaxed">
                                    Most businesses already have SOPs. But in reality:
                                </p>
                                <div className="grid gap-3">
                                    {[
                                        "They sit in unread folders",
                                        "They depend on individual memory",
                                        "They disappear under pressure",
                                        "They are not verifiable"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            <span className="text-base font-black uppercase italic tracking-tighter text-zinc-900">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-zinc-400 font-bold italic text-base pt-4 uppercase">
                                    MoreMeets turns static SOPs into a live operating system for execution.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-100">
                             <img 
                                src="https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg" 
                                alt="Operational Execution Audit" 
                                className="w-full h-full object-cover grayscale-[0.2]" 
                             />
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 2: THE TRANSFORMATION (BEFORE VS AFTER) --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 2 — THE TRANSFORMATION" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 tracking-tight uppercase italic leading-none">
                                RESTORE CONTROL
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Before */}
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-red-50 border border-red-100 space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <X className="w-32 h-32 text-red-600" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-red-600 font-headline italic">BEFORE MOREMEETS</h3>
                                <div className="space-y-4">
                                    {[
                                        "WhatsApp follow-ups for updates",
                                        "Repeated instructions to staff",
                                        "No proof of completion",
                                        "Operational drift across shifts",
                                        "Audit panic when inspectors arrive"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-red-900/60 font-bold italic line-through">
                                            <AlertTriangle className="w-4 h-4 shrink-0" />
                                            <span className="text-sm md:text-base uppercase leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* After */}
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Check className="w-32 h-32 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-emerald-600 font-headline italic">AFTER MOREMEETS</h3>
                                <div className="space-y-4">
                                    {[
                                        "Daily execution becomes visible",
                                        "Every action creates audit proof",
                                        "Mobile accountability for staff",
                                        "Memory becomes permanent infrastructure",
                                        "Audits become a 10-second download"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-emerald-950 font-black italic">
                                            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                                            <span className="text-sm md:text-base uppercase leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: INSIDE A LIVE OPERATION --- */}
                <Section id="inside" className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <SectionEyebrow text="SECTION 3 — OPERATIONAL REALISM" />
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                        Inside a live <br/> operation.
                                    </h2>
                                    <p className="text-zinc-500 text-lg md:text-xl font-medium italic border-l-4 border-primary/20 pl-8">
                                        This is what your team actually uses. 
                                        A high-density, mobile-first execution grid where instructions, risks, and proof are integrated.
                                    </p>
                                </div>
                                <div className="grid gap-6">
                                    {[
                                        { t: "TECHNICAL INSTRUCTIONS", d: "Step-by-step guidance for every task.", i: GraduationCap },
                                        { t: "RISK VISIBILITY", d: "Staff understand the consequence of a miss.", i: AlertTriangle },
                                        { t: "FORENSIC HEARTBEAT", d: "Non-retractable, automated audit timestamps.", i: Activity }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-primary transition-colors shadow-inner">
                                                <feat.i className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-black uppercase text-zinc-950 italic">{feat.t}</p>
                                                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest leading-none">{feat.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <LedgerSimulation />
                                <p className="mt-6 text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] text-center italic">
                                    SIMULATED SOVEREIGN MASTER LEDGER INTERFACE
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 4: WHY SPREADSHEET-NATIVE --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-6">
                            <SectionEyebrow text="SECTION 4 — THE ADOPTION MOAT" />
                            <h2 className="text-[32px] md:text-[64px] font-black font-headline leading-[0.95] tracking-tight uppercase italic text-center">
                                Adoptability <br/> Over Complexity.
                            </h2>
                            <p className="text-xl md:text-2xl text-zinc-400 font-medium italic max-w-2xl mx-auto">
                                SaaS fails when teams refuse to log in. MoreMeets succeeds because it runs on infrastructure your team already uses.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { 
                                    t: "NO NEW LOGINS", 
                                    d: "Staff use existing Google accounts. Zero onboarding friction.", 
                                    i: UserCheck 
                                },
                                { 
                                    t: "NO IT TEAM NEEDED", 
                                    d: "Deploy in 10 minutes without server setup or app downloads.", 
                                    i: Cpu 
                                },
                                { 
                                    t: "OWN THE DATA", 
                                    d: "No SaaS subscriptions. Your data stays in your drive forever.", 
                                    i: Database 
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/[0.03] rounded-3xl border border-white/10 space-y-4 backdrop-blur-sm group hover:border-primary/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-all">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">{item.t}</h3>
                                    <p className="text-sm text-zinc-500 font-bold italic leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                             <p className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-primary">
                                If your team can use a phone, <br/> they can run this system.
                             </p>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 5: DEPLOYMENT PROTOCOL --- */}
                <Section className="bg-white border-y border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 5 — DEPLOYMENT PROTOCOL" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                LIVE IN 10 MINUTES
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-100 -translate-y-1/2 z-0 hidden md:block" />
                            <div className="grid md:grid-cols-4 gap-8 relative z-10">
                                {[
                                    { t: "DOWNLOAD", d: "Get your pre-built Sovereign Pack instantly." },
                                    { t: "UPLOAD", d: "Save to Google Drive for live team access." },
                                    { t: "ASSIGN", d: "Map staff to roles and set the cadence." },
                                    { t: "EXECUTE", d: "Daily work begins populating automatically." }
                                ].map((step, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-xl transition-all">
                                        <div className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center font-black italic text-lg">{i+1}</div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-950">{step.t}</h4>
                                            <p className="text-[10px] text-zinc-400 font-bold uppercase italic leading-tight">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 6: A ZERO-CHASE MORNING --- */}
                <Section className="bg-[#F9F9F7]" noSpine>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <SectionEyebrow text="SECTION 6 — THE COMMAND EXPERIENCE" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic leading-none tracking-tight">A zero-chase morning</h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest">REAL-TIME VISIBILITY, NO WHATSAPP REQUIRED.</p>
                        </div>
                        
                        <div className="space-y-1">
                            {[
                                { time: "08:00 AM", t: "MANAGEMENT OPENS LEDGER", d: "The system identifies today's 12 high-priority compliance checks." },
                                { time: "08:15 AM", t: "KITCHEN PREP VERIFIED", d: "Chef logs station temperatures. Cell turns green on Owner's phone." },
                                { time: "08:30 AM", t: "SAFETY EXIT SWEEP", d: "Security confirms egress clear. Audit stamp is secured automatically." },
                                { time: "09:00 AM", t: "100% READINESS CONFIRMED", d: "Owner sees a 'Station Discipline' score of 100% from their commute." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-24 shrink-0 py-8 border-r border-zinc-200 text-right pr-8">
                                        <span className="text-xs font-black text-primary uppercase font-mono">{step.time}</span>
                                    </div>
                                    <div className="py-8 space-y-2">
                                        <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950 leading-none">{step.t}</h4>
                                        <p className="text-sm text-zinc-500 font-bold italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 7: OUTCOME LAYER --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <SectionEyebrow text="SECTION 7 — OUTCOME LAYER" />
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85] text-[#111111]">
                                    PEOPLE CHANGE. <br/> THE SYSTEM DOESN’T.
                                </h2>
                            </div>
                            <p className="text-lg md:text-2xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-[#B89B5E]/20 pl-8">
                                MoreMeets™ converts tribal knowledge into permanent infrastructure. 
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { t: "Standardization", d: "across locations", i: Target },
                                    { t: "Fast Onboarding", d: "hours, not weeks", i: GraduationCap },
                                    { t: "Role Continuity", d: "without dependency", i: Users },
                                    { t: "Audit-ready", d: "operational proof", i: ShieldCheck },
                                    { t: "Reduced Overhead", d: "management efficiency", i: Zap }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <item.i className="w-5 h-5 text-[#B89B5E] shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold uppercase text-[#121212]">{item.t}</p>
                                            <p className="text-xs text-[#5F6368] italic uppercase font-black tracking-widest">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-200">
                                <img 
                                    src="https://i.postimg.cc/Gt3b4Mvc/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg" 
                                    alt="Personnel Resilience Narrative" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 8: WHO THIS IS NOT FOR --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-red-500 italic font-headline">NOT BUILT FOR</h3>
                                <div className="space-y-4">
                                    {[
                                        "Casual personal to-do lists",
                                        "One-off project management",
                                        "Lightweight productivity hacks",
                                        "Teams avoiding accountability"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4 text-zinc-600 font-bold italic">
                                            <X className="w-4 h-4 text-red-900/40" />
                                            <span className="text-sm md:text-base uppercase">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-xl font-black uppercase tracking-[0.2em] text-emerald-500 italic font-headline">BUILT FOR</h3>
                                <div className="space-y-4">
                                    {[
                                        "Operational discipline",
                                        "Multi-location execution",
                                        "Audit-sensitive businesses",
                                        "Institutional scale & growth"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4 text-white font-black italic">
                                            <Check className="w-5 h-5 text-emerald-500" />
                                            <span className="text-sm md:text-base uppercase">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 9: USE CASES --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 9 — USE CASES" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                DEPLOY OPERATIONAL DISCIPLINE
                            </h2>
                            <p className="text-[#5F6368] text-lg md:text-xl italic leading-relaxed">
                                Not templates. Operational systems tailored for high-variability environments.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hospitals", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Jewellery Retail", id: "retail_jewellery_operations_pack", icon: Gem },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
                            ].map((ind, i) => (
                                <Link key={i} href={`/packs/${ind.id}`} className="group p-8 rounded-[2rem] bg-white border border-zinc-200 hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-700 text-center flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#B89B5E] group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 shadow-inner">
                                        <ind.icon className="w-7 h-7" />
                                    </div>
                                    <span className="text-sm md:text-base font-bold uppercase tracking-tighter italic text-[#111111] group-hover:text-[#2E7D5A] transition-colors">{ind.name}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center pt-8">
                             <button className="h-14 px-12 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                                <Link href="/library" className="flex items-center justify-center gap-3">
                                    Explore Systems <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 10: FAQ --- */}
                <FaqSection />

                {/* --- FINAL CTA: THE MANDATE --- */}
                <Section className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                YOUR BUSINESS SHOULD RUN ON SYSTEMS — <span className="text-emerald-600">NOT MEMORY.</span>
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Deploy operational execution infrastructure across your business in the next 10 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group">
                                <Link href="/library" className="flex items-center gap-6">
                                    Get Your System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </Section>

            </main>
            
            <Footer />

            <style jsx global>{`
                @keyframes zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.06); }
                }
            `}</style>
        </div>
    );
}
