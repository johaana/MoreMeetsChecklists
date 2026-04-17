
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    ArrowRight, 
    ShieldCheck, 
    Activity, 
    Lock,
    Zap,
    LayoutGrid,
    Smartphone,
    AlertTriangle,
    ClipboardCheck,
    CheckCircle2,
    Clock,
    FileSpreadsheet,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    GraduationCap,
    SearchCheck,
    HelpCircle,
    MousePointer2,
    ShieldAlert,
    Target,
    Server,
    TrendingUp,
    Smartphone as MobileIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 relative overflow-hidden", className)}>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-tight", className)}>
        {children}
    </h2>
);

/**
 * PREMIUM MOBILE CHASSIS
 * Repositions dashboard into a handheld context for instant "Execution" feel.
 */
const MobileChassis = ({ src }: { src: string }) => (
    <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] group">
        {/* Outer Frame */}
        <div className="absolute inset-0 bg-[#0F172A] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] ring-8 ring-[#1e293b]" />
        
        {/* Screen */}
        <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden border border-black/10">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#0F172A] rounded-b-xl z-20" />
            
            {/* Live Content */}
            <div className="w-full h-full relative overflow-hidden bg-zinc-100">
                <img src={src} alt="Mobile Dashboard" className="h-full w-auto max-w-none object-cover object-left grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" />
                
                {/* HUD Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                            <Activity className="w-4 h-4 animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">LIVE PULSE</span>
                            <span className="text-xs font-black text-[#0F172A] uppercase italic">OPERATIONS SECURED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-white font-body selection:bg-violet-100">
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* 🔴 SECTION 1: RADIANT EXECUTIVE HERO (ZERO SCROLL) */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center bg-white overflow-hidden border-b border-zinc-100 pt-16">
                    {/* Radiant Aurora Mesh - Sophisticated Depth */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[90%] h-full bg-[radial-gradient(circle_at_70%_20%,#f5f3ff_0%,transparent_55%)] opacity-70" />
                        <div className="absolute bottom-0 left-0 w-[70%] h-full bg-[radial-gradient(circle_at_20%_80%,#f0f9ff_0%,transparent_50%)] opacity-50" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                    </div>
                    
                    <div className="container px-6 lg:px-12 mx-auto h-full flex items-center relative z-10">
                        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center w-full">
                            
                            {/* Left: High-Conversion Industrial Narrative */}
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
                                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-violet-600/80 font-headline">MoreMeets™ Sovereign</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black font-headline text-[#0F172A] leading-[0.9] tracking-tighter uppercase italic drop-shadow-sm">
                                        Stop chasing <br /> your team.
                                    </h1>
                                    <p className="text-xl md:text-2xl font-bold italic text-zinc-500 leading-tight">
                                        See daily work getting done—even when you’re not there.
                                    </p>
                                </div>

                                {/* Promoting "Operations on Autopilot" */}
                                <div className="p-8 rounded-3xl bg-[#0F172A] text-white border-l-[8px] border-violet-500 shadow-2xl space-y-3 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Zap className="w-24 h-24 text-violet-400" />
                                    </div>
                                    <p className="text-xl md:text-3xl font-black italic leading-tight text-white">
                                        Operations on Autopilot.
                                    </p>
                                    <p className="text-sm md:text-base font-medium text-zinc-400 italic leading-relaxed">
                                        Without follow-ups. Without confusion. <br />
                                        Without depending on memory.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                        {[
                                            { t: "Pre-built, editable SOPs", i: ClipboardCheck },
                                            { t: "Daily task tracking", i: Clock },
                                            { t: "Trainer notes for staff", i: GraduationCap },
                                            { t: "Admin system lock", i: Lock }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <item.i className="w-4 h-4 text-violet-600 shrink-0" />
                                                <span className="text-[11px] font-black text-zinc-800 uppercase tracking-widest italic">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center gap-8 pt-4">
                                        <div className="space-y-1.5">
                                            <div className="flex items-baseline gap-4">
                                                <span className="text-5xl font-black text-[#0F172A] italic font-headline leading-none">₹2,999</span>
                                                <span className="text-lg font-bold text-zinc-300 line-through">₹4,999</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">⏳ Launch Price • One-time Purchase</p>
                                        </div>
                                        <Button asChild size="lg" className="h-20 px-12 rounded-2xl bg-[#f97316] text-white font-black uppercase italic tracking-widest text-lg hover:scale-105 transition-all shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] border-none group">
                                            <Link href="/library" className="flex items-center gap-3">
                                                START RUNNING YOUR SYSTEM <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                    
                                    <p className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] italic flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                                        Your team knows what to do. You know what actually got done.
                                    </p>
                                </div>
                            </div>

                            {/* Right: The Mobile Proof Chassis */}
                            <div className="relative group flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                <div className="absolute -inset-20 bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />
                                <MobileChassis src={DASHBOARD_IMAGE} />
                            </div>
                        </div>
                    </div>

                    {/* Technical Command Strip */}
                    <div className="absolute bottom-0 w-full py-5 bg-zinc-950/95 backdrop-blur-md">
                        <div className="container px-12 mx-auto flex justify-center md:justify-between items-center text-[11px] font-black text-zinc-500 uppercase tracking-[0.5em] italic font-headline">
                             <span className="hidden md:block">BUILT ON EXCEL. RUNS ON GOOGLE SHEETS.</span>
                             <span className="flex items-center gap-4 text-white">
                                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                NO NEW SOFTWARE. NO SUBSCRIPTION.
                             </span>
                             <span className="hidden md:block">READY IN 10 MINUTES.</span>
                        </div>
                    </div>
                </section>

                {/* 🔥 SECTION 2 — THE OPERATIONAL REALITY (FEAR) */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none">The Operational Gaps</Badge>
                            <SectionHeadline>Teams don’t complete daily tasks unless someone keeps following up.</SectionHeadline>
                            <p className="text-zinc-600 text-lg italic font-medium">This is where businesses silently lose control.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 space-y-10 shadow-sm">
                                <h3 className="font-black text-red-500 uppercase italic tracking-tighter text-2xl flex items-center gap-4">
                                    <AlertTriangle className="w-8 h-8" /> What actually happens:
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Tasks get skipped assuming someone else did them",
                                        "Checks are done “mentally,” not verified",
                                        "Small issues go noticed too late to fix",
                                        "Managers spend time chasing instead of leading"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-5 text-lg font-bold text-zinc-700 italic leading-tight">
                                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-10">
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-[#0F172A] uppercase italic tracking-widest">The reality</h4>
                                    <p className="text-2xl md:text-3xl font-bold italic text-zinc-800 leading-tight border-l-4 border-red-500 pl-10">
                                        "Most operational problems don’t come from big failures. They come from small tasks being missed every day."
                                    </p>
                                </div>
                                <div className="p-10 bg-[#0F172A] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <ShieldAlert className="w-24 h-24 text-red-400" />
                                    </div>
                                    <p className="text-[11px] font-black text-violet-400 uppercase tracking-[0.5em] mb-3">INFRASTRUCTURE MANDATE</p>
                                    <p className="text-xl font-bold italic leading-snug">This is exactly where control is lost. Memory is not a system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 3 — THE RESOLUTION (DIRECT SOLVE) */}
                <Section className="bg-violet-600 text-white relative">
                    <div className="absolute top-0 right-0 w-[45%] h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
                        <div className="space-y-6">
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.5em] font-black text-[11px] px-10 py-2.5 rounded-full">The Resolution</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline text-white uppercase italic tracking-tighter leading-tight">This solves that.</h2>
                            <p className="text-2xl italic font-medium text-white/90">A ready system for daily execution.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "TASKS DEFINED", d: "120+ pre-built, editable SOPs ready to deploy.", i: ClipboardCheck },
                                { t: "UPDATED DAILY", d: "Your team logs work live in one shared engine.", i: Clock },
                                { t: "INSTANT VISIBILITY", d: "See what’s done vs missed in one glance.", i: Activity }
                            ].map((card, i) => (
                                <div key={i} className="p-12 rounded-[3rem] bg-white/10 backdrop-blur-2xl border border-white/10 space-y-8 text-left hover:bg-white/15 transition-all">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center">
                                        <card.i className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight text-2xl">{card.t}</h4>
                                        <p className="text-base text-white/80 italic font-medium leading-relaxed">{card.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-16 pt-10">
                            <span className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest italic text-white/90"><CheckCircle2 className="w-6 h-6 text-white/50" /> NO FOLLOW-UPS REQUIRED</span>
                            <span className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest italic text-white/90"><CheckCircle2 className="w-6 h-6 text-white/50" /> NO DEPENDENCY ON MEMORY</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 4 — HOW TO USE (STEP ENGINE) */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none">Simple Deployment</Badge>
                             <SectionHeadline>HOW TO USE THIS SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-4 gap-12">
                            {[
                                { s: "01", t: "DOWNLOAD", d: "Get the master system in Excel format." },
                                { s: "02", t: "UPLOAD", d: "Sync to Google Sheets & share with team." },
                                { s: "03", t: "EXECUTE", d: "Team updates tasks as work happens." },
                                { s: "04", t: "COMMAND", d: "Dashboard shows real-time site status." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 relative group">
                                    <div className="text-8xl font-black text-violet-100 font-headline leading-none group-hover:text-violet-200 transition-colors">{step.s}</div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-2xl">{step.t}</h4>
                                    <p className="text-base text-zinc-600 italic font-medium leading-relaxed">{step.d}</p>
                                    {i < 3 && <div className="hidden md:block absolute top-14 -right-8 text-zinc-200"><ArrowRight className="w-10 h-10" /></div>}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-16 text-[12px] font-black text-zinc-500 uppercase tracking-[0.3em] pt-16 border-t border-zinc-200">
                            <span className="flex items-center gap-5"><Smartphone className="w-6 h-6 text-violet-600" /> WORKS ON PHONE OR DESKTOP</span>
                            <span className="flex items-center gap-5"><Zap className="w-6 h-6 text-violet-600" /> NO TRAINING REQUIRED FOR TOOLS</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 5 — DAILY VIEW (DASHBOARD HIGHLIGHT) */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Manager Intel</Badge>
                                <SectionHeadline>YOUR DAILY VIEW</SectionHeadline>
                                <p className="text-3xl text-zinc-800 italic font-medium border-l-4 border-violet-600 pl-10 leading-tight">You don’t ask. <br /> You already know.</p>
                            </div>
                            <ul className="space-y-10">
                                {[
                                    { t: "PENDING TASKS", d: "Real-time visibility into what's being missed.", i: AlertTriangle, c: "text-red-500" },
                                    { t: "COMPLETED TASKS", d: "Verifiable proof of work getting done.", i: CheckCircle2, c: "text-green-600" },
                                    { t: "PERFORMANCE %", d: "Track efficiency across all sites instantly.", i: Activity, c: "text-violet-600" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-10 group">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-zinc-50 border border-zinc-100 group-hover:bg-white group-hover:shadow-2xl transition-all shrink-0">
                                            <item.i className={cn("w-10 h-10", item.c)} />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-black text-[#0F172A] uppercase italic text-2xl tracking-tight font-headline">{item.t}</h4>
                                            <p className="text-base text-zinc-600 italic font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
                            <MobileChassis src={DASHBOARD_IMAGE} />
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 6 — WHAT YOU GET (TECHNICAL LIST) */}
                <Section className="bg-zinc-50">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Sovereign Payload</Badge>
                             <SectionHeadline>A READY-TO-RUN OPERATING SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "120+ PRE-BUILT SOPs", d: "Audit-ready templates for your specific sector.", i: ClipboardCheck },
                                { t: "DAILY EXECUTION LOGS", d: "Verifiable records for every single shift.", i: Clock },
                                { t: "TRAINER NOTES", d: "Step-by-step guidance for every single task.", i: GraduationCap },
                                { t: "CONSEQUENCES DEFINED", d: "Build a culture of intentional compliance.", i: ShieldAlert },
                                { t: "LIVE DASHBOARD", d: "High-gravity oversight across all units.", i: Activity },
                                { t: "ADMIN CONTROLS", d: "Lock formulas & structure so staff can't break it.", i: Lock, elite: true }
                            ].map((item, i) => (
                                <div key={i} className={cn("p-12 rounded-[3.5rem] bg-white border border-zinc-100 space-y-6 hover:shadow-xl transition-all group", item.elite && "border-violet-200 bg-violet-50/30")}>
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <item.i className="w-10 h-10" />
                                    </div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-xl">{item.t}</h4>
                                    <p className="text-sm text-zinc-600 italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 7 — WHY THIS WORKS (PSYCHOLOGICAL) */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-6">
                            <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Systemic Discipline</Badge>
                            <SectionHeadline>WHY TEAMS ACTUALLY FOLLOW THIS</SectionHeadline>
                            <p className="text-zinc-600 text-lg italic font-medium">Most SOPs fail because they sit in files. This system stays on the floor.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 flex gap-10 items-start hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-2 h-24 bg-violet-600 rounded-full shrink-0 group-hover:scale-y-110 transition-transform" />
                                <div className="space-y-4">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-base">TRAINER NOTES</h4>
                                    <p className="text-xl text-zinc-700 italic font-bold leading-snug">They explain exactly HOW to do it. Faster onboarding, lower dependency on managers.</p>
                                </div>
                            </div>
                            <div className="p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100 flex gap-10 items-start hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-2 h-24 bg-[#f97316] rounded-full shrink-0 group-hover:scale-y-110 transition-transform" />
                                <div className="space-y-4">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-base">CONSEQUENCES</h4>
                                    <p className="text-xl text-zinc-700 italic font-bold leading-snug">They explain WHY it matters. Turns mechanical ticking into intentional execution.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-zinc-400 font-black uppercase tracking-[0.6em] text-[12px] pt-16">
                             THIS IS NOT DOCUMENTATION. THIS IS EXECUTION.
                        </p>
                    </div>
                </Section>

                {/* 🔥 SECTION 8 — USE CASES (INDUSTRY HUB) */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none">Sector Mapping</Badge>
                             <SectionHeadline>WHO IS THIS FOR?</SectionHeadline>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels & Resorts", i: Building },
                                { n: "Hospitals & Clinics", i: Hospital },
                                { n: "Retail Stores", i: Store },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise Networks", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="px-14 py-12 rounded-[2.5rem] bg-white border border-zinc-200 flex flex-col items-center gap-6 hover:border-violet-600 hover:shadow-2xl transition-all group shrink-0">
                                    <ind.i className="w-12 h-12 text-zinc-300 group-hover:text-violet-600 transition-colors" />
                                    <span className="text-xl font-black text-[#0F172A] uppercase italic tracking-tighter font-headline">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-10">
                            <p className="text-zinc-600 text-lg italic font-medium leading-relaxed max-w-xl mx-auto">Especially useful if you are not always on-site or manage multiple locations.</p>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 9 — IMPORTANT CLARITY (TECHNICAL MANIFESTO) */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto p-16 md:p-24 rounded-[4rem] bg-[#0F172A] text-white space-y-16 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FileSpreadsheet className="w-[600px] h-[600px] text-violet-400" />
                        </div>
                        <div className="relative z-10 space-y-8">
                            <Badge className="bg-violet-500/20 text-violet-400 border-none uppercase tracking-[0.5em] font-black text-[12px] px-12 py-3 rounded-full">Infrastructure Mandate</Badge>
                            <h2 className="text-5xl md:text-8xl font-black font-headline uppercase italic tracking-tighter leading-none text-white">This is not <br/> “just Excel”</h2>
                            <p className="text-2xl md:text-4xl font-bold italic text-white/80 leading-relaxed max-w-4xl mx-auto">
                                It’s a ready-to-run operational system designed for daily scale.
                            </p>
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-16 text-center border-t border-white/10 pt-20">
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-violet-400">ZERO SOFTWARE DEBT</h4>
                                <p className="text-sm text-white/60 italic font-medium leading-relaxed">Start today, not next month. <br/> No implementation period.</p>
                             </div>
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-violet-400">ZERO SUBSCRIPTION</h4>
                                <p className="text-sm text-white/60 italic font-medium leading-relaxed">Buy once, own it forever. <br/> No per-user monthly bills.</p>
                             </div>
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-violet-400">ZERO COMPLEXITY</h4>
                                <p className="text-sm text-white/60 italic font-medium leading-relaxed">Simple for teams. <br/> Industrial power for managers.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 10 — FAQ (TRUST ARCHITECTURE) */}
                <Section id="faq">
                    <div className="max-w-3xl mx-auto space-y-20">
                         <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Trust Architecture</Badge>
                             <SectionHeadline>COMMON QUESTIONS</SectionHeadline>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="lock" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">Can my team accidentally break the system?</AccordionTrigger>
                                <AccordionContent className="text-zinc-700 text-xl italic leading-relaxed font-medium pb-10">
                                    No. The system includes <strong>Admin Controls</strong> that allow you to lock formulas and critical structure. Your team can only update the assigned task fields. This ensures data integrity across all reports.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="break" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">What if I need custom changes later?</AccordionTrigger>
                                <AccordionContent className="text-zinc-700 text-xl italic leading-relaxed font-medium pb-10">
                                    The system is 100% editable by you. You can add, remove, or modify tasks as your brand grows. We also offer customization support if your business reaches complex multi-location requirements.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="software" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">Why not use a SaaS mobile app?</AccordionTrigger>
                                <AccordionContent className="text-zinc-700 text-xl italic leading-relaxed font-medium pb-10">
                                    Software requires training, password management, and monthly bills. Your team already knows Excel. MoreMeets gives you SaaS-level visibility with zero SaaS-level friction or recurring costs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🔥 FINAL CTA (HIGH GRAVITY CONVERSION) */}
                <Section className="bg-zinc-50 border-t border-zinc-200 py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5f3ff_0%,transparent_70%)] opacity-50" />
                    <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                        <div className="space-y-8">
                            <Badge className="bg-violet-600 text-white border-none uppercase tracking-[0.5em] font-black text-[12px] px-12 py-3 rounded-full">Secure Your Operations</Badge>
                            <h2 className="text-5xl md:text-[7rem] font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-[0.85]">START RUNNING <br /> YOUR SYSTEM TODAY</h2>
                            <p className="text-2xl text-zinc-700 italic font-medium">Setup takes less than 10 minutes. <br/> Customization support available.</p>
                        </div>
                        
                        <div className="space-y-12">
                            <div className="flex flex-col items-center gap-8">
                                <div className="flex items-baseline gap-8">
                                    <span className="text-7xl md:text-[10rem] font-black text-violet-600 italic font-headline leading-none drop-shadow-2xl">₹2,999</span>
                                    <span className="text-3xl md:text-5xl font-bold text-zinc-300 line-through italic leading-none">₹4,999</span>
                                </div>
                                <div className="flex items-center gap-12 text-sm font-black text-zinc-500 uppercase tracking-[0.4em]">
                                    <span className="flex items-center gap-3"><Lock className="w-5 h-5" /> OWN FOREVER</span>
                                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                    <span className="flex items-center gap-3"><Zap className="w-5 h-5" /> NO SUBSCRIPTION</span>
                                </div>
                            </div>
                            
                            <Button asChild size="lg" className="h-28 px-24 rounded-[2.5rem] bg-[#f97316] text-white font-black uppercase italic tracking-widest text-3xl shadow-[0_30px_100px_-15px_rgba(249,115,22,0.5)] hover:scale-105 transition-all border-none">
                                <Link href="/library">GET INSTANT ACCESS <ArrowRight className="ml-5 h-10 w-10" /></Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}

