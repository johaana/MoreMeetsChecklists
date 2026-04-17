
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
    Smartphone as MobileIcon,
    ShieldAlert,
    Target,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-20 relative overflow-hidden", className)}>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-[0.95]", className)}>
        {children}
    </h2>
);

/**
 * PREMIUM HORIZONTAL MOBILE CHASSIS
 * Fits the full dashboard wide-angle for zero clipping.
 */
const HorizontalMobileChassis = () => (
    <div className="relative mx-auto w-full max-w-[550px] aspect-[19/9] group perspective-[2000px]">
        {/* Outer Frame - Premium Landscape Tilt */}
        <div className="absolute inset-0 bg-[#0F172A] rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10 rotate-x-[8deg] rotate-y-[-10deg] group-hover:rotate-0 transition-transform duration-1000 ease-out" />
        
        {/* Screen */}
        <div className="absolute inset-[8px] bg-black rounded-[2rem] overflow-hidden border border-white/5 rotate-x-[8deg] rotate-y-[-10deg] group-hover:rotate-0 transition-transform duration-1000 ease-out">
            {/* Dynamic Camera Notch (Repositioned for Landscape) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1/4 bg-[#0F172A] rounded-r-xl z-20" />
            
            {/* Full Dashboard Content */}
            <div className="w-full h-full relative bg-white overflow-hidden p-1">
                <img 
                    src={DASHBOARD_IMAGE} 
                    alt="System Dashboard" 
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-1000" 
                />
            </div>
        </div>

        {/* Floating Vitals - REPOSITIONED to prevent obstruction */}
        <div className="absolute -bottom-10 -right-4 bg-white/90 backdrop-blur-2xl p-5 rounded-2xl border border-zinc-200 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 z-30">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                    <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">SYSTEM_STATUS</span>
                    <span className="text-[12px] font-black text-[#0F172A] uppercase italic leading-none mt-1">OPERATIONS SECURED</span>
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
            {/* Forcing Dark Header links visibility on Light BG */}
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 SECTION 1: RADIANT LIGHT HERO (ZERO SCROLL) */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center bg-[#f8fafc] overflow-hidden border-b border-zinc-100 pt-16">
                    {/* Radiant Pastel Mesh - Premium Depth */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-[radial-gradient(circle_at_center,#f0f9f4_0%,transparent_70%)] opacity-70" />
                        <div className="absolute bottom-0 left-0 w-[50%] h-[80%] bg-[radial-gradient(circle_at_center,#ede9fe_0%,transparent_60%)] opacity-50" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:64px_64px]" />
                    </div>
                    
                    <div className="container px-6 lg:px-12 mx-auto h-full flex items-center relative z-10">
                        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 items-center w-full">
                            
                            {/* Left Narrative Slab */}
                            <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-black font-headline text-[#0F172A] leading-[0.9] tracking-tighter uppercase italic">
                                        Stop chasing <br /> <span className="text-primary">your team.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl font-bold italic text-zinc-500 leading-tight border-l-4 border-primary/40 pl-6">
                                        See daily work getting done—even when you’re not there.
                                    </p>
                                </div>

                                {/* Autopilot Feature Block */}
                                <div className="p-6 md:p-8 rounded-3xl bg-[#0F172A] text-white border-l-[12px] border-primary shadow-[0_30px_60px_-12px_rgba(15,23,42,0.3)] space-y-2 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Zap className="w-24 h-24 text-primary" />
                                    </div>
                                    <p className="text-2xl md:text-3xl font-black italic leading-tight uppercase tracking-tighter">
                                        Operations on Autopilot.
                                    </p>
                                    <p className="text-sm md:text-base font-medium text-white/40 italic leading-relaxed">
                                        Without follow-ups. Without confusion. <br />
                                        Without depending on memory.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            { t: "Pre-built, editable SOPs", i: ClipboardCheck },
                                            { t: "Daily task tracking", i: Clock },
                                            { t: "Trainer notes for staff", i: GraduationCap },
                                            { t: "Admin system lock", i: Lock }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <item.i className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-[11px] font-black text-zinc-600 uppercase tracking-widest italic">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center gap-10 pt-2">
                                        <div className="space-y-1">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-5xl font-black text-[#0F172A] italic font-headline leading-none">₹2,999</span>
                                                <span className="text-lg font-bold text-zinc-300 line-through italic">₹4,999</span>
                                            </div>
                                            <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em]">⏳ Launch Rate • Own Forever</p>
                                        </div>
                                        <button className="h-16 px-10 rounded-2xl bg-[#f97316] text-white font-black uppercase italic tracking-widest text-base hover:scale-105 transition-all shadow-[0_20px_40px_-5px_rgba(249,115,22,0.4)] border-none group">
                                            <Link href="/library" className="flex items-center gap-3">
                                                START RUNNING YOUR SYSTEM <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 py-4 px-8 bg-white border border-zinc-100 rounded-full w-fit shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] italic leading-none">
                                            BUILT ON EXCEL. RUNS ON GOOGLE SHEETS.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Proof Column: Landscape Mobile Chassis */}
                            <div className="relative group flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                                <HorizontalMobileChassis />
                            </div>
                        </div>
                    </div>

                    {/* Technical Command Strip */}
                    <div className="absolute bottom-0 w-full py-5 bg-white/60 backdrop-blur-md border-t border-zinc-100">
                        <div className="container px-12 mx-auto flex justify-center md:justify-between items-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] italic font-headline">
                             <span className="hidden md:block">AUDIT READY COMPLIANCE</span>
                             <span className="flex items-center gap-4 text-primary">
                                <ShieldCheck className="w-4 h-4" />
                                100% SOVEREIGN DATA OWNERSHIP
                             </span>
                             <span className="hidden md:block">SECURE_BUILD_V220.0</span>
                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2 — THE REAL PROBLEM (FEAR) */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none bg-red-50">One Common Issue</Badge>
                            <SectionHeadline>Teams don’t complete daily tasks unless someone keeps following up.</SectionHeadline>
                            <p className="text-zinc-400 text-lg italic font-medium">This is where businesses silently lose control.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 rounded-[3rem] bg-[#fdf2f2] border border-red-100 space-y-10 relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <AlertTriangle className="w-48 h-48 text-red-500" />
                                </div>
                                <h3 className="font-black text-red-600 uppercase italic tracking-tighter text-2xl flex items-center gap-4">
                                    <AlertTriangle className="w-7 h-7" /> What actually happens:
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Tasks get skipped assuming someone else did them",
                                        "Checks are done “mentally,” not verified",
                                        "Small issues go unnoticed until they break",
                                        "Managers spend time chasing instead of managing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-base font-bold text-zinc-700 italic leading-tight">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-2 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-12">
                                <div className="space-y-8">
                                    <h4 className="text-xl font-black text-zinc-300 uppercase italic tracking-widest">The reality</h4>
                                    <p className="text-2xl md:text-4xl font-bold italic text-zinc-600 leading-tight border-l-8 border-red-500 pl-10">
                                        "Most operational problems don’t come from big failures. They come from small tasks being missed every day."
                                    </p>
                                </div>
                                <div className="p-10 bg-zinc-50 border border-zinc-100 rounded-3xl text-zinc-400 shadow-sm relative overflow-hidden">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2 italic">INFRASTRUCTURE MANDATE</p>
                                    <p className="text-xl font-bold italic leading-snug">That is exactly where control is lost. Memory is not a system.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 3 — THE SOLUTION (DIRECT SOLVE) */}
                <Section className="bg-[#f0f9f4]">
                    <div className="max-w-4xl mx-auto text-center space-y-16">
                        <div className="space-y-4">
                            <Badge className="bg-primary/20 text-primary border-none uppercase tracking-[0.4em] font-black text-[11px] px-10 py-2 rounded-full">The Resolution</Badge>
                            <SectionHeadline>This solves that.</SectionHeadline>
                            <p className="text-xl italic font-medium text-zinc-500">A simple system for daily execution.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { t: "TASKS DEFINED", d: "120+ pre-built, editable SOPs ready to deploy.", i: ClipboardCheck },
                                { t: "UPDATED DAILY", d: "Your team logs work live in one shared engine.", i: Clock },
                                { t: "SEE STATUS", d: "See what’s done vs missed in one glance.", i: Activity }
                            ].map((card, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 space-y-8 text-left shadow-sm hover:border-primary/40 transition-all group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                                        <card.i className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-xl">{card.t}</h4>
                                        <p className="text-base text-zinc-500 italic font-medium leading-relaxed">{card.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 pt-8">
                            <span className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest italic text-zinc-400"><CheckCircle2 className="w-6 h-6 text-primary" /> NO FOLLOW-UPS REQUIRED</span>
                            <span className="flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest italic text-zinc-400"><CheckCircle2 className="w-6 h-6 text-primary" /> NO DEPENDENCY ON MEMORY</span>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 4 — HOW TO USE (STEP ENGINE) */}
                <Section className="bg-white border-y border-zinc-50">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none bg-primary/5">Standard Deployment</Badge>
                             <SectionHeadline>HOW TO USE THIS SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-4 gap-10 md:gap-12">
                            {[
                                { s: "01", t: "DOWNLOAD", d: "Get the master system in Excel format." },
                                { s: "02", t: "UPLOAD", d: "Sync to Google Sheets & share with team." },
                                { s: "03", t: "EXECUTE", d: "Team updates tasks as work happens." },
                                { s: "04", t: "COMMAND", d: "Dashboard shows real-time status." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 relative group">
                                    <div className="text-8xl font-black text-zinc-50 font-headline leading-none group-hover:text-primary/10 transition-colors">{step.s}</div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-2xl">{step.t}</h4>
                                    <p className="text-base text-zinc-500 italic font-medium leading-relaxed">{step.d}</p>
                                    {i < 3 && <div className="hidden md:block absolute top-12 -right-8 text-zinc-100"><ArrowRight className="w-10 h-10" /></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 5 — DAILY VIEW (DASHBOARD) */}
                <Section className="bg-[#f8fafc]">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 md:gap-24 items-center">
                        <div className="space-y-16">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Operational Pulse</Badge>
                                <SectionHeadline>YOUR DAILY VIEW</SectionHeadline>
                                <p className="text-3xl md:text-4xl text-zinc-600 italic font-medium border-l-8 border-primary pl-10 leading-tight">You don’t ask. <br /> You already know.</p>
                            </div>
                            <ul className="space-y-10">
                                {[
                                    { t: "PENDING TASKS", d: "Real-time visibility into what's being missed.", i: AlertTriangle, c: "text-red-500" },
                                    { t: "COMPLETED TASKS", d: "Verifiable proof of work getting done.", i: CheckCircle2, c: "text-primary" },
                                    { t: "PERFORMANCE %", d: "Track efficiency across all sites instantly.", i: Activity, c: "text-primary" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-10 group">
                                        <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white border border-zinc-100 group-hover:bg-primary group-hover:text-white transition-all shrink-0 shadow-sm">
                                            <item.i className={cn("w-10 h-10", item.c, "group-hover:text-white")} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-[#0F172A] uppercase italic text-2xl tracking-tight font-headline">{item.t}</h4>
                                            <p className="text-base text-zinc-500 italic font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                            <HorizontalMobileChassis />
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 6 — WHAT YOU GET (TECHNICAL LIST) */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Sovereign Payload</Badge>
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
                                <div key={i} className={cn("p-12 rounded-[3rem] bg-[#f8fafc] border border-zinc-100 space-y-6 hover:border-primary/40 transition-all group", item.elite && "border-primary/20 bg-primary/5")}>
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <item.i className="w-7 h-7" />
                                    </div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-xl">{item.t}</h4>
                                    <p className="text-base text-zinc-500 italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 7 — WHY THIS WORKS (PSYCHOLOGICAL) */}
                <Section className="bg-[#f0f9f4]">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Systemic Discipline</Badge>
                            <SectionHeadline>WHY TEAMS ACTUALLY FOLLOW THIS</SectionHeadline>
                            <p className="text-zinc-500 text-lg italic font-medium">Most SOPs fail because they sit in files. This system stays on the floor.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                            <div className="p-12 rounded-[3rem] bg-white border border-zinc-100 flex gap-10 items-start hover:border-primary/40 transition-all group shadow-sm">
                                <div className="w-2 h-24 bg-primary rounded-full shrink-0 group-hover:scale-y-110 transition-transform shadow-[0_0_20px_rgba(46,184,107,0.4)]" />
                                <div className="space-y-4">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-base">TRAINER NOTES</h4>
                                    <p className="text-xl text-zinc-600 italic font-bold leading-snug">They explain exactly HOW to do it. Faster onboarding, lower dependency on managers.</p>
                                </div>
                            </div>
                            <div className="p-12 rounded-[3rem] bg-white border border-zinc-100 flex gap-10 items-start hover:border-[#f97316]/40 transition-all group shadow-sm">
                                <div className="w-2 h-24 bg-[#f97316] rounded-full shrink-0 group-hover:scale-y-110 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
                                <div className="space-y-4">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-base">CONSEQUENCES</h4>
                                    <p className="text-xl text-zinc-600 italic font-bold leading-snug">They explain WHY it matters. Turns mechanical ticking into intentional execution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 8 — USE CASES (INDUSTRY HUB) */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
                        <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 rounded-none bg-zinc-50">Sector Mapping</Badge>
                             <SectionHeadline>WHO IS THIS FOR?</SectionHeadline>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels & Resorts", i: Building },
                                { n: "Hospitals & Clinics", i: Hospital },
                                { n: "Retail Stores", i: Store },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise Networks", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="px-12 py-10 rounded-[2.5rem] bg-[#f8fafc] border border-zinc-100 flex flex-col items-center gap-6 hover:border-primary/40 hover:bg-white transition-all group shrink-0 shadow-sm">
                                    <ind.i className="w-10 h-10 text-zinc-300 group-hover:text-primary transition-colors" />
                                    <span className="text-xl font-black text-[#0F172A] uppercase italic tracking-tighter font-headline">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 9 — IMPORTANT CLARITY (TECHNICAL MANIFESTO) */}
                <Section className="bg-[#0F172A]">
                    <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-[#1E293B] text-white space-y-16 md:space-y-20 text-center relative overflow-hidden group border border-white/5 shadow-2xl">
                        {/* Technical Matrix Background Decor */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                            <FileSpreadsheet className="absolute -top-20 -right-20 w-[600px] h-[600px] rotate-12" />
                            <LayoutGrid className="absolute -bottom-20 -left-20 w-[400px] h-[400px] -rotate-12" />
                        </div>
                        
                        <div className="relative z-10 space-y-8">
                            <Badge className="bg-primary/20 text-primary border-none uppercase tracking-[0.5em] font-black text-[12px] px-12 py-3 rounded-full">Infrastructure Mandate</Badge>
                            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-tight text-white">This is not <br/> “just Excel”</h2>
                            <p className="text-2xl md:text-4xl font-bold italic text-white/60 leading-relaxed max-w-4xl mx-auto">
                                It’s a ready-to-run operational system designed for daily scale.
                            </p>
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-20">
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-primary">ZERO SOFTWARE DEBT</h4>
                                <p className="text-sm text-white/40 italic font-medium leading-relaxed">Start today, not next month. <br/> No implementation period.</p>
                             </div>
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-primary">ZERO SUBSCRIPTION</h4>
                                <p className="text-sm text-white/40 italic font-medium leading-relaxed">Buy once, own it forever. <br/> No per-user monthly bills.</p>
                             </div>
                             <div className="space-y-3">
                                <h4 className="text-lg font-black uppercase tracking-widest font-headline text-primary">ZERO COMPLEXITY</h4>
                                <p className="text-sm text-white/40 italic font-medium leading-relaxed">Simple for teams. <br/> Industrial power for managers.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 10 — FAQ (TRUST ARCHITECTURE) */}
                <Section id="faq" className="bg-white pb-32">
                    <div className="max-w-3xl mx-auto space-y-20">
                         <div className="text-center space-y-3">
                             <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2 bg-primary/5">Trust Architecture</Badge>
                             <SectionHeadline>COMMON QUESTIONS</SectionHeadline>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="lock" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">Can my team accidentally change or break the system?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-xl italic leading-relaxed font-medium pb-10">
                                    No. The system includes <strong>Admin Controls</strong> that allow you to lock formulas and critical structure. Your team can only update the assigned task fields. This ensures data integrity across all reports.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="break" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">What if I need custom changes later?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-xl italic leading-relaxed font-medium pb-10">
                                    The system is 100% editable by you. You can add, remove, or modify tasks as your brand grows. We also offer customization support if your business reaches complex multi-location requirements.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="software" className="border-zinc-100">
                                <AccordionTrigger className="text-2xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-10 text-left">Why not use a SaaS mobile app?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-xl italic leading-relaxed font-medium pb-10">
                                    Software requires training, password management, and monthly bills. Your team already knows Excel. MoreMeets gives you SaaS-level visibility with zero SaaS-level friction or recurring costs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🔴 FINAL CTA (HIGH GRAVITY) */}
                <Section className="bg-[#f8fafc] border-t border-zinc-100 py-32 text-center">
                    <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                        <div className="space-y-8">
                            <Badge className="bg-primary text-white border-none uppercase tracking-[0.5em] font-black text-[12px] px-12 py-3 rounded-full shadow-lg">Secure Your Operations</Badge>
                            <h2 className="text-5xl md:text-[6rem] font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-[0.9]">START RUNNING <br /> YOUR SYSTEM TODAY</h2>
                            <p className="text-2xl md:text-3xl text-zinc-400 italic font-medium">Setup takes less than 10 minutes. <br/> Customization support available.</p>
                        </div>
                        
                        <div className="space-y-12">
                            <div className="flex flex-col items-center gap-8">
                                <div className="flex items-baseline gap-6">
                                    <span className="text-7xl md:text-[9rem] font-black text-primary italic font-headline leading-none drop-shadow-xl">₹2,999</span>
                                    <span className="text-3xl md:text-5xl font-bold text-zinc-200 line-through italic leading-none">₹4,999</span>
                                </div>
                                <div className="flex items-center gap-12 text-sm font-black text-zinc-300 uppercase tracking-[0.4em]">
                                    <span className="flex items-center gap-3"><Lock className="w-5 h-5" /> OWN FOREVER</span>
                                    <div className="w-2 h-2 rounded-full bg-zinc-200" />
                                    <span className="flex items-center gap-3"><Zap className="w-5 h-5" /> NO SUBSCRIPTION</span>
                                </div>
                            </div>
                            
                            <button className="h-28 px-20 rounded-[2.5rem] bg-[#f97316] text-white font-black uppercase italic tracking-widest text-3xl shadow-[0_30px_60px_-10px_rgba(249,115,22,0.4)] hover:scale-105 transition-all border-none">
                                <Link href="/library" className="flex items-center justify-center">GET INSTANT ACCESS <ArrowRight className="ml-6 h-10 w-10" /></Link>
                            </button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}

