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
    Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-20 md:py-32 relative overflow-hidden", className)}>
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
                                    <Link href="#sovereign-engine">Watch Teams Use It</Link>
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
                                        "They sit in unread PDFs",
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

                {/* --- SECTION 2: THE SOP EXECUTION ENGINE --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="sovereign-engine">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 2 — WHAT THIS ACTUALLY IS" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                THE SOP EXECUTION ENGINE
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                                You don’t need new software. You need enforcement infrastructure.
                                <br/> MoreMeets is a master control system built in Excel that runs your entire operation through Google Sheets.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { 
                                    t: "OWNER COMMAND LAYER", 
                                    d: "Set standards once. Control everything from a single master file.", 
                                    i: Lock 
                                },
                                { 
                                    t: "TEAM EXECUTION LAYER", 
                                    d: "Staff complete daily work through a live, mobile-first execution ledger.", 
                                    i: Smartphone 
                                },
                                { 
                                    t: "REAL-TIME CONTROL LAYER", 
                                    d: "Every task becomes visible, timestamped, and verifiable.", 
                                    i: Activity 
                                }
                            ].map((layer, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 space-y-4 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <layer.i className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950">{layer.t}</h3>
                                    <p className="text-sm text-zinc-500 font-bold italic leading-relaxed">{layer.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: STRUCTURAL FAILURE --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] bg-zinc-900">
                             <img 
                                src="https://i.postimg.cc/X77vqvg6/confused-business-woman-using-laptop-computer-phone.jpg" 
                                alt="Operational Chaos Breakdown" 
                                className="w-full h-full object-cover grayscale-[0.3]" 
                             />
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <SectionEyebrow text="SECTION 3 — WHY TRADITIONAL TOOLS FAIL" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline leading-[0.95] tracking-tight uppercase italic">
                                    Operational chaos <br/> is not random. <br/> It is structural.
                                </h2>
                                <p className="text-zinc-400 text-lg md:text-xl font-medium italic">
                                    WhatsApp and verbal management create invisible failure loops.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-1 gap-y-6">
                                {[
                                    { t: "Reporting Chase", d: "constant follow-ups for updates" },
                                    { t: "Audit Panic", d: "no evidence trail when needed" },
                                    { t: "Knowledge Leakage", d: "system breaks when people leave" },
                                    { t: "Verbal Drift", d: "instructions change across shifts" },
                                    { t: "Operational Blindness", d: "no real-time visibility" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 border-l border-red-500/30 pl-6 group">
                                        <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                            <h4 className="text-sm font-black uppercase text-white tracking-widest">{item.t}</h4>
                                            <span className="hidden md:inline text-zinc-700">→</span>
                                            <p className="text-xs text-zinc-500 font-bold italic leading-relaxed uppercase">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-xl font-black italic uppercase tracking-tighter text-red-500">
                                    This is not inefficiency. <br/> It is system absence.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 4: THE ADOPTION MOAT --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <SectionEyebrow text="SECTION 4 — THE ADOPTION MOAT" />
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                        THE ADOPTION MOAT
                                    </h2>
                                    <p className="text-lg text-zinc-500 font-bold italic leading-relaxed border-l-4 border-emerald-500/20 pl-8">
                                        Most systems fail at adoption. MoreMeets works because it runs on behavior your team already has.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Opens in Google Sheets (no login friction)",
                                        "Mobile-first execution",
                                        "Name-based tracking",
                                        "No dashboards to “learn”",
                                        "Instant task visibility"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                            </div>
                                            <span className="text-[13px] font-bold text-[#111111] uppercase tracking-wide">{text}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xl font-black italic uppercase tracking-tighter text-zinc-950 pt-4">
                                    If your team can use Excel, they can run MoreMeets.
                                </p>
                            </div>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-200">
                                 <img 
                                    src="https://i.postimg.cc/fTZ9KZjq/three-factory-workers-safety-hats-discussing-manufacture-plan.jpg" 
                                    alt="Workplace Adoption Success" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                 />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 5: THE SYSTEM CORE --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 5 — THE SYSTEM CORE" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 tracking-tight uppercase italic leading-[0.95]">
                                INSIDE THE MASTER SYSTEM
                            </h2>
                            <p className="text-zinc-500 text-lg italic font-bold uppercase tracking-widest text-center">NOT DOCUMENTATION. OPERATIONAL ENFORCEMENT.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Executive Control Dashboard", d: "live compliance + alerts", i: Monitor },
                                { t: "Execution Ledger", d: "daily task tracking (365-day grid)", i: FileSignature },
                                { t: "SOP Library", d: "role-based instructions", i: FileText },
                                { t: "Personnel Map", d: "accountability structure", i: Users },
                                { t: "Incident Registry", d: "audit-ready evidence logs", i: ShieldAlert }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-200 space-y-4 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.i className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-sm font-black uppercase text-zinc-950 tracking-wide leading-none">{item.t}</h4>
                                    <p className="text-[10px] text-zinc-400 font-black uppercase italic leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[2/1] bg-zinc-200">
                             <img 
                                src="https://i.postimg.cc/J0QtgD5V/colleagues-real-estate-architecture-working-together-project-design-development.jpg" 
                                alt="System Design & Engineering" 
                                className="w-full h-full object-cover grayscale-[0.2]" 
                             />
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 6: OUTCOME LAYER --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <SectionEyebrow text="SECTION 6 — OUTCOME LAYER" />
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85] text-[#111111]">
                                    PEOPLE CHANGE. <br/> THE SYSTEM DOESN’T.
                                </h2>
                            </div>
                            <p className="text-lg md:text-2xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-[#B89B5E]/20 pl-8">
                                MoreMeets converts tribal knowledge into permanent infrastructure. 
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

                {/* --- SECTION 7: USE CASES --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="SECTION 7 — USE CASES" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                BUILT FOR HIGH-DISCIPLINE OPERATIONS
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

                {/* --- SECTION 8: FAQ --- */}
                <FaqSection />

                {/* --- FINAL CTA --- */}
                <Section className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                STOP MANAGING. <br/> START RUNNING SYSTEMS.
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Deploy operational control across your business in the next 10 minutes.
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
