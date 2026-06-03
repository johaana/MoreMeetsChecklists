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
    Target,
    X,
    Search,
    MoreVertical,
    Share2,
    ShieldAlert,
    Camera,
    ChevronRight,
    FileSpreadsheet,
    ClipboardCheck,
    UserCheck
} from "lucide-react";
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const BRAND_GREEN = "#1F3A34";
const BRAND_GOLD = "#B89B5E";

const ELITE_INDUSTRIES = [
    { name: "Restaurant Operations", id: "restaurants", icon: Utensils },
    { name: "Hotel Operations", id: "hotels_and_resorts", icon: Building },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "School Operations", id: "school_operations_pack", icon: School },
    { name: "Franchise Operations", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities Operations", id: "facility_management_blueprint", icon: Building2 },
    { name: "Multiplex Operations", id: "cinema_operations_pack", icon: Popcorn }
];

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "WORKS DURING INTERNET DISRUPTIONS",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

const PROOF_STRIP = "EXCEL & SHEETS • OWN FOREVER • NO SaaS";

const HomeSection = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-28 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.03] z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const SectionEyebrow = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
        <div className="w-8 md:w-12 h-px bg-[#B89B5E] opacity-40 shrink-0" />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#B89B5E] font-headline whitespace-nowrap">
            {text}
        </span>
    </div>
);

const LedgerSimulation = () => (
    <div className="relative group max-w-[1250px] mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
        <div className="relative z-10 w-full bg-zinc-950 rounded-[2rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-zinc-900 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden ring-1 ring-white/10">
            <div className="bg-[#22C55E] text-white py-2 md:py-3 px-8 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" strokeWidth={5} />
                    </div>
                    <span className="text-[9px] md:text-[11px] font-black tracking-tight uppercase">DAILY_TASK_SYSTEM_V18.5</span>
                </div>
                <div className="flex items-center gap-5 opacity-80">
                    <Search className="w-3.5 h-3.5" />
                    <Share2 className="w-3.5 h-3.5" />
                    <MoreVertical className="w-3.5 h-3.5" />
                </div>
            </div>
            <div className="w-full relative overflow-hidden bg-white">
                <img 
                    src="https://i.postimg.cc/5y3hF93d/Screenshot-2026-05-28-202324.png" 
                    alt="MoreMeets™ Daily Task System" 
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-white border-t border-zinc-100 h-10 flex items-center justify-between px-8 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">LIVE_SYSTEM_STABLE</span>
                </div>
                <span className="text-[9px] font-black text-[#B89B5E] uppercase tracking-widest italic">AUTOMATIC_AUDIT_ACTIVE</span>
            </div>
        </div>
    </div>
);

export default function HomePage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-[#B89B5E]/10 overflow-x-hidden">
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* --- HERO SECTION --- */}
                <section className="relative w-full overflow-hidden bg-[#F8F6F2]">
                    <div className="md:hidden flex flex-col bg-[#F8F6F2]">
                        <div className="w-full aspect-video bg-zinc-900 relative overflow-hidden">
                             <iframe 
                                src={VIMEO_URL} 
                                className="absolute inset-0 w-full h-full scale-[1.5] translate-y-[-10%] brightness-[0.9]" 
                                frameBorder="0" 
                                allow="autoplay; fullscreen" 
                             />
                             <div className="absolute inset-0 bg-black/5" />
                        </div>
                        <div className="p-6 pt-8 space-y-7 flex flex-col justify-start">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-px bg-[#B89B5E] opacity-60 shrink-0" />
                                    <span className="text-[7.5px] font-black uppercase tracking-[0.15em] text-[#B89B5E] font-headline whitespace-nowrap">
                                        WHERE SOPS MEET EXECUTION
                                    </span>
                                </div>
                                <h1 className="text-[1.8rem] font-bold font-headline leading-[1.0] uppercase italic tracking-tighter" style={{ color: BRAND_GREEN }}>
                                    YOUR BUSINESS <br />
                                    <span className="relative inline-block mt-1">
                                        SHOULD NOT <br/> DEPEND ON MEMORY.
                                        <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#B89B5E]/30 rounded-full" />
                                    </span>
                                </h1>
                            </div>
                            <p className="text-[13px] font-medium leading-[1.5] text-zinc-800 italic">
                                Get pre-built, industry-specific, fully editable SOP systems with daily tasks, built-in instructions, and proof of completion so important work gets done consistently, even when you're not there.
                            </p>
                            <div className="flex flex-col gap-2.5">
                                {[
                                    "Works directly on Google Sheets.",
                                    "No app-adoption battle.",
                                    "Works during internet disruptions."
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-[#2E7D5A]" />
                                        </div>
                                        <span className="text-[10px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-2">
                                <button className="h-14 px-8 rounded-2xl text-black font-black uppercase italic text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] active:scale-95 transition-all w-full" style={{ backgroundColor: BRAND_GOLD }}>
                                    <Link href="/library">EXPLORE SYSTEMS • ₹2,499 / $29</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block relative w-full h-[100svh] min-h-[700px]">
                        <div className="absolute inset-0 z-0">
                            <div className="w-full h-full">
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
                            <div className="max-w-[1100px] space-y-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-[#B89B5E] opacity-40 shrink-0" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#B89B5E] font-headline whitespace-nowrap">
                                            WHERE SOPS MEET EXECUTION
                                        </span>
                                    </div>

                                    <h1 className="text-[2.2rem] md:text-[62px] font-bold font-headline leading-[1.1] uppercase tracking-[-0.04em]" style={{ color: BRAND_GREEN }}>
                                        YOUR BUSINESS SHOULD NOT <br />
                                        <span className="relative inline-block mt-1">
                                            DEPEND ON MEMORY.
                                            <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#B89B5E]/30 rounded-full" />
                                        </span>
                                    </h1>
                                    
                                    <p className="text-[16px] md:text-[18px] font-medium leading-[1.5] text-zinc-800 max-w-3xl border-l-[3px] border-[#B89B5E]/20 pl-8 italic">
                                        Get pre-built, industry-specific, fully editable SOP systems with daily tasks, built-in instructions, and proof of completion so important work gets done consistently, even when you're not there.
                                    </p>
                                    
                                    <div className="flex flex-col gap-2.5 pt-1">
                                        {[
                                            "Works directly on Google Sheets.",
                                            "No app-adoption battle.",
                                            "Works during internet disruptions."
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

                                <div className="flex flex-col items-start gap-4">
                                    <button className="h-16 px-10 rounded-[16px] bg-primary text-black font-black uppercase text-[11px] md:text-[13px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(184,155,94,0.3)] group" style={{ backgroundColor: BRAND_GOLD }}>
                                        <Link href="/library" className="flex items-center justify-center gap-3">
                                            DEPLOY IN 10 MINUTES • ₹2,499 / $29 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </button>
                                    <p className="text-[10px] font-black text-[#8B6B3F] uppercase tracking-[0.3em] pl-2 italic">
                                        ONE-TIME PURCHASE • OWN FOREVER • FULLY EDITABLE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 1: WHAT IS AN SOP? --- */}
                <HomeSection className="bg-white border-b border-zinc-100">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <SectionEyebrow text="THE BASICS" />
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                What is an SOP and why does every business need one?
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium italic leading-relaxed">
                                Every business runs on a set of instructions. Whether written down properly or not, every business follows some version of them every day.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Open the store", "Check the stock", "Clean equipment", "Log temperatures",
                                "Lock premises", "Serve customers", "Handle complaints", "Train employees"
                            ].map((task, i) => (
                                <div key={i} className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-[#B89B5E]" />
                                    <span className="text-[10px] font-black uppercase tracking-tight text-zinc-900 italic">{task}</span>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-2xl mx-auto text-center space-y-6 pt-8">
                            <p className="text-lg text-zinc-700 italic">
                                These instructions are called <strong>Standard Operating Procedures (SOPs)</strong>. 
                                An SOP is simply the agreed way of doing a task.
                            </p>
                            <div className="p-8 bg-[#F8F6F2] rounded-3xl border border-[#B89B5E]/20 space-y-4">
                                <h3 className="text-lg font-black uppercase text-zinc-950 italic">Without SOPs:</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Every employee does things differently",
                                        "Quality becomes inconsistent",
                                        "Mistakes increase daily",
                                        "Training becomes difficult",
                                        "Managers waste time correcting problems"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-600 italic">
                                            <X className="w-3.5 h-3.5 text-red-500" /> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </HomeSection>

                {/* --- SECTION 2: THE STRUGGLE --- */}
                <HomeSection className="bg-zinc-50/50">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="THE CHALLENGE" />
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                Then why do businesses still struggle?
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium italic">
                                Because having instructions is not the same as following them.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">In many businesses:</h4>
                                <div className="space-y-4">
                                    {[
                                        { t: "WhatsApp Chaos", d: "Instructions live in chat messages and groups." },
                                        { t: "Old Documents", d: "Instructions live in files nobody opens." },
                                        { t: "Memory Dependency", d: "Instructions live only in people's memory." },
                                        { t: "Verbal Passing", d: "Different employees follow different versions." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                                            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-black uppercase text-zinc-950 italic">{item.t}</p>
                                                <p className="text-xs text-zinc-500 font-bold italic uppercase">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-zinc-950 text-white p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl">
                                <h4 className="text-xl font-black uppercase italic text-emerald-500">As you grow:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Tasks get missed",
                                        "Checks are forgotten",
                                        "Managers keep chasing updates",
                                        "Owners lose visibility",
                                        "Knowledge leaves when staff resign"
                                    ].map((p, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold italic uppercase text-zinc-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </HomeSection>

                {/* --- SECTION 3: THE REAL PROBLEM --- */}
                <HomeSection className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <SectionEyebrow text="THE TRUTH ABOUT GROWTH" />
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                The real problem is not writing SOPs.
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium italic max-w-3xl mx-auto">
                                The real problem is making sure they are followed every day. 
                                Most businesses do not fail because nobody knows what to do. They fail because there is no simple system that ensures the right things happen consistently.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { t: "Suggestions", d: "Instructions without accountability", i: Target },
                                { t: "Assumptions", d: "Instructions without proof", i: ShieldAlert },
                                { t: "Guesswork", d: "Instructions without visibility", i: GraduationCap }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-zinc-100 bg-zinc-50/50 rounded-[2rem] text-center space-y-3">
                                    <item.i className="w-8 h-8 text-red-500 mx-auto opacity-40" />
                                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{item.d}</p>
                                    <p className="text-2xl font-black uppercase italic text-zinc-950">Become {item.t}.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </HomeSection>

                {/* --- SECTION 4: THE SOLUTION (MOREMEETS) --- */}
                <HomeSection className="bg-[#F8F6F2]" noSpine>
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 md:gap-20 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <SectionEyebrow text="THE SOLUTION" />
                                    <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                        This is where <br/> MoreMeets helps.
                                    </h2>
                                    <p className="text-lg text-zinc-700 italic font-medium leading-relaxed">
                                        MoreMeets gives you ready-to-use SOP systems built for your industry. 
                                        Instead of creating everything from scratch, you start with a complete system that is already organized and ready to use.
                                    </p>
                                </div>

                                {/* WHAT DO YOU ACTUALLY RECEIVE SECTION */}
                                <div className="p-8 bg-white rounded-3xl border border-black/5 space-y-6 shadow-sm">
                                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">
                                        What do you actually receive?
                                    </h3>
                                    <p className="text-sm font-bold text-zinc-500 italic uppercase tracking-wider">
                                        When you purchase a MoreMeets system, you receive:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { t: "Industry-specific SOPs", i: ClipboardCheck },
                                            { t: "Daily task schedules", i: History },
                                            { t: "Built-in instructions", i: GraduationCap },
                                            { t: "Accountability tracking", i: UserCheck },
                                            { t: "Photo verification workflows", i: Camera },
                                            { t: "Audit-ready records", i: ShieldCheck },
                                            { t: "Fully editable Google Sheets", i: FileSpreadsheet }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <item.i className="w-4 h-4 text-[#B89B5E]" />
                                                <span className="text-[11px] font-black uppercase text-zinc-800 italic tracking-tight">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100">
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase italic">
                                            Everything is ready to use from Day 1. <br/>
                                            No need to build systems from scratch.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">EVERY TASK HAS:</p>
                                    <div className="grid gap-3">
                                        {[
                                            "What needs to be done",
                                            "When it needs to be done",
                                            "How it should be done",
                                            "Proof that it was completed"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                                </div>
                                                <span className="text-sm font-black uppercase text-zinc-900 italic tracking-tight">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-zinc-950 text-white font-black uppercase italic tracking-widest shadow-xl">
                                        <Link href="/library">Explore Systems Hub <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-10 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-50"></div>
                                <LedgerSimulation />
                            </div>
                        </div>
                    </div>
                </HomeSection>

                {/* --- SECTION 5: SOFTWARE FAILURE --- */}
                <HomeSection className="bg-white border-y border-zinc-100">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="THE ADOPTION PROBLEM" />
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                Why most business software fails
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 font-medium italic max-w-2xl mx-auto">
                                Most software assumes employees want another app. Reality is different.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { t: "Password Fatigue", d: "People forget logins and avoid using the system.", i: Lock },
                                { t: "Learning Curve", d: "Teams resist learning complex new interfaces.", i: GraduationCap },
                                { t: "Usage Drop-off", d: "Teams stop using new apps after a few weeks.", i: Activity },
                                { t: "The Chase", d: "Managers end up chasing updates manually anyway.", i: History }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl group hover:bg-white hover:shadow-xl transition-all">
                                    <item.i className="w-8 h-8 text-zinc-300 group-hover:text-red-500 transition-colors" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-black uppercase text-zinc-950 italic">{item.t}</p>
                                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-tight">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </HomeSection>

                {/* --- SECTION 6: WHY TEAMS ACTUALLY USE THIS --- */}
                <HomeSection className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-8 py-2 uppercase font-black tracking-[0.5em] text-[10px] rounded-none italic mb-4">WHY TEAMS ACTUALLY USE THIS</Badge>
                            <h2 className="text-3xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-none">
                                Why MoreMeets runs on <br/> <span className="text-emerald-500">Google Sheets.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-zinc-500 font-medium italic max-w-2xl mx-auto">
                                Because your team already knows how to use it.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                {[
                                    { t: "Zero Training", d: "No instruction manuals or sessions required." },
                                    { t: "No App Downloads", d: "Works directly in your existing workspace." },
                                    { t: "Offline Ready", d: "Execution happens first. Sync happens later." },
                                    { t: "No Adoption Battle", d: "The goal is to make sure the system actually gets used." }
                                ].map((point, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={5} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-lg font-black uppercase italic tracking-tighter text-white">{point.t}</p>
                                            <p className="text-sm text-zinc-500 font-bold italic leading-relaxed">{point.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center space-y-6 text-center md:text-left">
                                <Smartphone className="w-12 h-12 text-emerald-500 mb-2 opacity-50" />
                                <p className="text-lg md:text-xl font-bold italic leading-tight text-white/80">
                                    "The goal is not to introduce another tool. The goal is to make sure the right things happen every day."
                                </p>
                            </div>
                        </div>
                    </div>
                </HomeSection>

                {/* --- DEPLOYMENT PROTOCOL --- */}
                <HomeSection className="bg-white border-b border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="DEPLOYMENT PROTOCOL" />
                            <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                READY TO USE IN 10 MINUTES
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                            {[
                                { t: "PURCHASE", d: "Download your industry-specific SOP system instantly." },
                                { t: "DOWNLOAD FILE", d: "Save the master Excel file to your computer." },
                                { t: "OPEN IN GOOGLE SHEETS", d: "Upload the file to Google Drive and open it in Google Sheets. Simple setup instructions are already included inside the file." },
                                { t: "CUSTOMIZE IF NEEDED", d: "Add team names, adjust tasks, and make any changes you want. Everything is fully editable." },
                                { t: "SHARE & START USING", d: "Share it with your team and begin daily tracking immediately." }
                            ].map((step, i) => (
                                <div className="space-y-6 group text-left" key={i}>
                                    <div className="text-4xl md:text-6xl font-black italic text-primary/20 group-hover:text-[#B89B5E] transition-colors leading-none">
                                        {i+1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-sm uppercase italic leading-tight font-headline text-zinc-950">{step.t}</h4>
                                        <p className="text-[10px] text-zinc-500 font-bold italic leading-relaxed uppercase tracking-wider">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </HomeSection>

                <FaqSection />

                {/* --- FINAL CTA --- */}
                <HomeSection className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                RUN ON SYSTEMS — <br/> <span className="text-emerald-600">NOT MEMORY.</span>
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Start using your SOP system in the next 10 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group" style={{ backgroundColor: BRAND_GOLD, color: '#000' }}>
                                <Link href="/library" className="flex items-center gap-6">
                                    DEPLOY IN 10 MINUTES • ₹2,499 / $29 <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                            <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.5em] text-zinc-400 italic">
                                ONE-TIME PURCHASE • OWN FOREVER • FULLY EDITABLE
                            </p>
                        </div>
                    </div>
                </HomeSection>

            </main>
            
            <Footer />
        </div>
    );
}
