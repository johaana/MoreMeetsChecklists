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
    Building, 
    Utensils, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn, 
    Gem,
    Target,
    Database,
    X,
    Wifi,
    Clock
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
        {/* Actual Sovereign Banner */}
        <div className="bg-[#22C55E] text-white py-2 px-4 flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-bold">
            <span>📋</span>
            <span>DAILY TASKS – Update 'Done By' to complete daily work.</span>
        </div>

        {/* The Symmetric Grid */}
        <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1100px]">
                <thead>
                    <tr className="bg-[#0F172A] text-white">
                        {[
                            "BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED TO", 
                            "DONE BY", "VERIFIED BY", "STATUS", 
                            "CONSEQUENCE / RISK", "FLOOR INSTRUCTIONS", "STAMP"
                        ].map((h, i) => (
                            <th key={i} className="px-3 py-3 text-[9px] font-black uppercase tracking-tight border-r border-white/10 last:border-0">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                        { 
                            b: "Bandra", 
                            r: "General Manager", 
                            t: "Revenue Reconcile", 
                            a: "Aditi", 
                            db: "AK", 
                            vb: "AK", 
                            s: "COMPLETE", 
                            c: "Untraceable internal revenue theft.", 
                            i: "Match daily total revenue against physical bank deposit slips.",
                            st: "2026-05-23 19:53:25" 
                        },
                        { 
                            b: "Bandra", 
                            r: "General Manager", 
                            t: "P1 Incident Triage", 
                            a: "Aditi", 
                            db: "", 
                            vb: "", 
                            s: "OPEN", 
                            c: "Unmonitored liability and guest distress.", 
                            i: "Review incident log for any technical halts > 5 mins.",
                            st: "" 
                        },
                        { 
                            b: "Bandra", 
                            r: "Front Office Manager", 
                            t: "C-Form Compliance", 
                            a: "Sarah", 
                            db: "SM", 
                            vb: "", 
                            s: "COMPLETE", 
                            c: "Legal violation / premises shutdown.", 
                            i: "Verify 100% ID registration for foreign nationals.",
                            st: "2026-05-23 09:12:04" 
                        },
                        { 
                            b: "Bandra", 
                            r: "Executive Chef", 
                            t: "HACCP Thermal Pulse", 
                            a: "Vikram", 
                            db: "", 
                            vb: "", 
                            s: "OPEN", 
                            c: "Mass food poisoning / total stock loss.", 
                            i: "Log walk-in temperatures at 8 AM and 4 PM.",
                            st: "" 
                        }
                    ].map((row, idx) => (
                        <tr key={idx} className={cn("border-b border-zinc-200 text-[11px]", idx % 2 === 0 ? "bg-white" : "bg-zinc-50")}>
                            <td className="px-3 py-3 border-r border-zinc-200 text-zinc-500">{row.b}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 font-bold text-zinc-900">{row.r}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 font-black text-zinc-950 uppercase">{row.t}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 text-zinc-400">{row.a}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 bg-[#FEFCE8] font-black text-center">{row.db}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 bg-[#EFF6FF] font-black text-center">{row.vb}</td>
                            <td className={cn(
                                "px-3 py-3 border-r border-zinc-200 font-black text-center", 
                                row.s === "COMPLETE" ? "text-emerald-600" : "text-zinc-300"
                            )}>{row.s}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 italic text-red-700 font-medium leading-tight max-w-[180px]">{row.c}</td>
                            <td className="px-3 py-3 border-r border-zinc-200 text-emerald-700 font-medium leading-tight max-w-[250px]">{row.i}</td>
                            <td className="px-3 py-3 text-zinc-400 font-mono text-[9px] text-center">{row.st}</td>
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
             <span className="text-[8px] font-black text-zinc-300 uppercase tracking-widest">PERMANENT AUDIT TRAIL ACTIVE</span>
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
                
                {/* --- 1. THE CINEMATIC HERO --- */}
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
                                        "No new apps to learn.",
                                        "Works even during internet disruptions."
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
                                    <Link href="#how-it-works">How it works</Link>
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

                {/* --- MOBILE HERO --- */}
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
                                "No new apps to learn.",
                                "Works during internet disruptions."
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

                {/* --- SECTION: HOW IT WORKS --- */}
                <Section id="how-it-works" className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="HOW MOREMEETS WORKS" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 tracking-tight uppercase italic leading-none">
                                RESTORE CONTROL IN 10 MINUTES
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                            {[
                                { t: "Download", d: "Get your industry-specific system instantly." },
                                { t: "Open in Sheets", d: "Upload to Google Drive for live team access." },
                                { t: "Assign Tasks", d: "Map staff names to specific roles once." },
                                { t: "Daily Execution", d: "Staff complete work on their phones." },
                                { t: "Live Visibility", d: "Managers see progress instantly." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 text-center md:text-left group">
                                    <div className="text-6xl md:text-8xl font-black text-zinc-200 group-hover:text-primary transition-colors leading-none">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-black uppercase italic text-zinc-950">{step.t}</h4>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wide leading-tight">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: THE CORE TRUTH --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <SectionEyebrow text="THE PROBLEM" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    SOPs don’t fail <br/> because they are missing.
                                </h2>
                                <p className="text-xl md:text-2xl font-black text-primary italic leading-none uppercase">
                                    They fail because they are not followed.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-500 font-bold italic leading-relaxed">
                                    Instructions are repeated daily, but teams still forget. Static documents don't drive execution. MoreMeets turns instructions into tracked daily work.
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        "Managers stop chasing teams for updates",
                                        "Processes survive staff turnover",
                                        "Every critical task has proof of completion",
                                        "Built for single units and multi-branch groups"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm md:text-base font-black uppercase italic tracking-tighter text-zinc-900">{point}</span>
                                        </div>
                                    ))}
                                </div>
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

                {/* --- SECTION: INSIDE A LIVE OPERATION --- */}
                <Section id="inside" className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <SectionEyebrow text="INSIDE THE SYSTEM" />
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                        Real systems <br/> for real teams.
                                    </h2>
                                    <p className="text-zinc-500 text-lg md:text-xl font-medium italic border-l-4 border-primary/20 pl-8">
                                        No fake dashboards. No polished mockups. We use real operational ledgers because that is what frontline teams trust and use daily.
                                    </p>
                                </div>
                                <div className="grid gap-6">
                                    {[
                                        { t: "NO NEW APPS", d: "Staff use existing phones and Google accounts.", i: Smartphone },
                                        { t: "AUTOMATIC TIMESTAMPS", d: "Verify exactly when a task was finished.", i: Activity },
                                        { t: "BUILT-IN COACHING", d: "Step-by-step instructions for every task.", i: GraduationCap }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-primary transition-colors shadow-inner">
                                                <feat.i className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-black uppercase text-zinc-950 italic">{feat.t}</p>
                                                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">{feat.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <LedgerSimulation />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: CONTINUITY & OWNERSHIP --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-32">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-8">
                                <SectionEyebrow text="OPERATIONAL CONTINUITY" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white font-headline">Operations continue even without internet.</h3>
                                <p className="text-zinc-400 text-lg italic leading-relaxed">
                                    Software should not be the bottleneck. Our systems are built for real-world environments, including low-connectivity zones like kitchens, basements, and warehouses. Execution never stops.
                                </p>
                                <div className="flex items-center gap-4 text-emerald-500 font-black italic uppercase">
                                    <Wifi className="w-6 h-6 opacity-40" />
                                    <span>Sync happens later. Execution happens now.</span>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <SectionEyebrow text="DATA OWNERSHIP" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white font-headline">You own your data. Not us.</h3>
                                <p className="text-zinc-400 text-lg italic leading-relaxed">
                                    Your operational history stays in your own Google or Excel environment. No vendor hostage risk. No monthly subscription fees. You own the system and the audit trail forever.
                                </p>
                                <div className="flex items-center gap-4 text-primary font-black italic uppercase">
                                    <Database className="w-6 h-6 opacity-40" />
                                    <span>Permanent access. Zero SaaS dependency.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: OUTCOMES --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <SectionEyebrow text="THE OUTCOME" />
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85] text-[#111111]">
                                    PEOPLE CHANGE. <br/> THE SYSTEM DOESN’T.
                                </h2>
                            </div>
                            <p className="text-lg md:text-2xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-[#B89B5E]/20 pl-8">
                                We transform tribal knowledge into permanent infrastructure that stays even when staff resign. 
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { t: "Standardization", d: "across all locations", i: Target },
                                    { t: "Fast Onboarding", d: "hours, not weeks", i: GraduationCap },
                                    { t: "Audit-ready", d: "instant proof", i: ShieldCheck },
                                    { t: "Reduced Overhead", d: "less chasing", i: Zap }
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

                {/* --- USE CASES --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="INDUSTRY SYSTEMS" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                BUILT FOR REAL-WORLD TEAMS
                            </h2>
                            <p className="text-[#5F6368] text-lg md:text-xl italic leading-relaxed">
                                Not just templates. Practical operational systems for high-stakes environments.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
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
                                    Explore All Systems <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- FINAL CTA --- */}
                <Section className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                RUN ON SYSTEMS — <span className="text-emerald-600">NOT MEMORY.</span>
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Deploy your operational execution system in the next 10 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group">
                                <Link href="/library" className="flex items-center gap-6">
                                    Get Started Now <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
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
