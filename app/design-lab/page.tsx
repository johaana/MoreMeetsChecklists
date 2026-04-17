
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
    SearchCheck,
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
    CircleDollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";
const CINEMA_TASKS_IMAGE = "https://i.postimg.cc/G278vKh8/Screenshot-2026-04-18-004329.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const AnimatedAnnotation = ({ children, className, delay = "0s", color = "green" }: { children: React.ReactNode, className?: string, delay?: string, color?: "green" | "red" | "blue" }) => {
    const pingColors = {
        green: "bg-emerald-500",
        red: "bg-red-500",
        blue: "bg-blue-500"
    };

    return (
        <div className={cn(
            "absolute z-30 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-xl flex items-center gap-2 border border-[#E6E8EC] animate-in fade-in zoom-in duration-700 whitespace-nowrap",
            className
        )} style={{ animationDelay: delay }}>
            <span className="relative flex h-2 w-2">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-100 scale-[4]", pingColors[color as keyof typeof pingColors])}></span>
                <span className={cn("relative inline-flex rounded-full h-2 w-2", pingColors[color as keyof typeof pingColors])}></span>
            </span>
            <span className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none">{children}</span>
        </div>
    );
};

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 HERO SECTION - ONE GLANCE OPTIMIZED */}
                <section className="w-full bg-[#F7F8FA] pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden min-h-[90svh] flex flex-col justify-center">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
                            
                            {/* LEFT SIDE: NARRATIVE */}
                            <div className="flex flex-col items-start space-y-8 relative z-20">
                                <div className="space-y-1">
                                    <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-bold text-[#0B0F14] leading-[1.05] tracking-tighter uppercase italic lg:whitespace-nowrap">
                                        Stop chasing your team.
                                    </h1>
                                    <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-bold text-[#0F3D2E] leading-[1.05] tracking-tighter uppercase italic lg:whitespace-nowrap">
                                        See daily work getting done.
                                    </h1>
                                    <p className="text-[20px] md:text-[24px] text-[#5B6670] italic font-medium leading-tight pt-4">
                                        Even when you’re not there.
                                    </p>
                                </div>

                                {/* PAIN BLOCK */}
                                <div className="border-l-[3px] border-[#0F3D2E] pl-[16px] space-y-2 py-1">
                                    <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without follow-ups</p>
                                    <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without confusion</p>
                                    <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without depending on memory</p>
                                </div>

                                {/* FEATURES GRID */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 w-full">
                                    {[
                                        "Pre-built, editable SOPs",
                                        "Daily task tracking",
                                        "Trainer notes (faster training)",
                                        "Live dashboard visibility"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-5 h-5 rounded-full bg-[#0F3D2E]/10 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-[#0F3D2E]" />
                                            </div>
                                            <span className="text-sm font-bold text-[#0B0F14]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 w-full pt-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-8">
                                        <div className="flex flex-col items-center sm:items-start order-2 sm:order-1">
                                            <div className="flex items-baseline gap-2">
                                                <p className="text-[32px] font-black text-[#0B0F14] italic tracking-tight">₹2,999</p>
                                                <span className="text-xs font-bold text-[#5B6670] line-through">₹4,999</span>
                                            </div>
                                            <p className="text-[11px] font-black text-[#5B6670] uppercase tracking-widest">One-time • Own forever</p>
                                        </div>
                                        <button className="h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group order-1 sm:order-2">
                                            <Link href="/library" className="flex items-center gap-3">
                                                Start Your System <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </button>
                                    </div>

                                    <p className="text-[13px] text-[#5B6670] font-bold uppercase tracking-[0.1em] border-t border-[#E6E8EC] pt-4 leading-relaxed">
                                        Built on Excel • Runs on Google Sheets <br/>
                                        No software required • Universal accessibility
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE: DASHBOARD PROOF */}
                            <div className="relative pt-24 lg:-ml-32 scale-125 transition-all duration-1000">
                                {/* Dynamic Annotations - Tightened Proximity */}
                                <AnimatedAnnotation className="top-8 -left-4" color="red" delay="0.5s">
                                    Missed tasks
                                </AnimatedAnnotation>

                                <AnimatedAnnotation className="top-20 -right-4" color="green" delay="1s">
                                    Completed tasks
                                </AnimatedAnnotation>

                                <AnimatedAnnotation className="bottom-12 -left-2" color="blue" delay="1.5s">
                                    Live dashboard
                                </AnimatedAnnotation>

                                <div className="rounded-[24px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] bg-white border border-[#E6E8EC] relative">
                                    {/* Virtual Browser Header */}
                                    <div className="bg-[#0B0F14] h-10 w-full flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                            <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                                            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-white/10 px-6 py-1 rounded text-[8px] font-black text-white/40 uppercase tracking-widest italic">
                                                MASTER_OPERATIONAL_SYSTEM_CONSOLE
                                            </div>
                                        </div>
                                    </div>

                                    <img 
                                        src={DASHBOARD_IMAGE} 
                                        alt="Master Operational System" 
                                        className="w-full h-auto object-cover grayscale-[0.05]" 
                                    />
                                </div>
                                
                                {/* Image Caption */}
                                <div className="mt-4 text-center">
                                    <p className="text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                                        Sample of Restaurant Operating Dashboard
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2 — PROBLEM */}
                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="max-w-[800px] mx-auto text-center space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] leading-tight tracking-tight uppercase italic">Why operations break</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div className="space-y-6">
                                <h4 className="text-[11px] font-black text-[#5B6670] uppercase tracking-[0.3em]">Common Pitfalls</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Work depends on memory of key people",
                                        "Tasks get skipped during busy shifts",
                                        "Staff executes steps differently every time"
                                    ].map((p, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[#5B6670] text-sm font-medium italic">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6 p-8 rounded-2xl bg-[#FFF5F5] border border-red-100">
                                <h4 className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em]">The Consequence</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Managers keep following up manually",
                                        "No real-time visibility into completion",
                                        "No proper records for audits"
                                    ].map((p, i) => (
                                        <li key={i} className="flex items-start gap-3 text-red-900 font-bold text-sm">
                                            <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <p className="text-[22px] font-black text-[#0B0F14] pt-4 uppercase italic">
                            Small misses. Every day. <br/>
                            <span className="text-red-500">That’s where control is lost.</span>
                        </p>
                    </div>
                </Section>

                {/* 🟢 SECTION 3 — SOLUTION */}
                <Section className="bg-[#F3F4F6]">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] leading-tight tracking-tight uppercase italic">This changes everything.</h2>
                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <ClipboardCheck className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-black text-[#0B0F14] uppercase italic">Tasks are already defined</h4>
                                        <p className="text-[#5B6670] text-sm font-medium">Over 120+ industry standard SOPs built-in.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-black text-[#0B0F14] uppercase italic">Work is updated daily</h4>
                                        <p className="text-[#5B6670] text-sm font-medium">Team updates progress in seconds, not meetings.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-black text-[#0B0F14] uppercase italic">Full visibility instantly</h4>
                                        <p className="text-[#5B6670] text-sm font-medium">One glance shows you exactly what’s done vs missed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 border-t border-[#E6E8EC] space-y-3">
                                <p className="text-[18px] font-black text-[#0F3D2E] flex items-center gap-3 uppercase italic">
                                    <CheckCircle2 className="w-5 h-5" /> No follow-ups required
                                </p>
                                <p className="text-[18px] font-black text-[#0F3D2E] flex items-center gap-3 uppercase italic">
                                    <CheckCircle2 className="w-5 h-5" /> No dependency on memory
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E6E8EC] bg-black p-2">
                                 <img src={CINEMA_TASKS_IMAGE} alt="Cinema Daily Tasks" className="w-full h-auto rounded-xl" />
                            </div>
                            {/* Image Caption */}
                            <p className="text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic text-center">
                                sample daily tasks cinema product
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔵 SECTION 4 — HOW IT WORKS */}
                <Section className="bg-[#FFFFFF]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                            <p className="text-[#5B6670] font-medium italic">Works on phone or desktop • No training required</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { t: "Download system", d: "Get the master file instantly.", i: Download },
                                { t: "Open in Sheets", d: "Or open in local Excel.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Define roles in 60 seconds.", i: Users },
                                { t: "Track everything live", d: "Dashboard updates in real-time.", i: Activity }
                            ].map((step, i) => (
                                <div key={i} className="bg-[#F7F8FA] border border-[#E6E8EC] p-8 rounded-2xl space-y-6 hover:shadow-lg transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E8EC] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-xl italic">
                                        {i+1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-lg uppercase italic leading-tight">{step.t}</h4>
                                        <p className="text-sm text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🟡 SECTION 6 — WHAT YOU GET */}
                <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">What you get</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "120+ Pre-built SOPs", d: "Industry-standard protocols.", i: ClipboardCheck },
                                { t: "Daily Execution Tracking", d: "Verifiable logs for every task.", i: Clock },
                                { t: "Trainer Notes", d: "Action instructions for every task.", i: GraduationCap },
                                { t: "Defined Consequences", d: "Built-in accountability metrics.", i: AlertTriangle },
                                { t: "Live Dashboard", d: "One-screen operational pulse.", i: Activity },
                                { t: "Admin Controls", d: "Lock formulas and structure.", i: Lock },
                                { t: "Fully Editable System", d: "Universal accessibility forever.", i: FileSpreadsheet },
                                { t: "Multi-Location View", d: "See all units in one place.", i: LayoutGrid }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E8EC] flex items-center justify-center text-[#0F3D2E] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-black text-[#0B0F14] uppercase italic">{item.t}</h4>
                                        <p className="text-[13px] text-[#5B6670] leading-snug font-medium italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ⚫ SECTION 7 — WHY THIS WORKS */}
                <Section className="bg-[#FFFFFF]">
                    <div className="grid md:grid-cols-2 gap-1 gap-y-12 bg-[#0B0F14] rounded-[32px] overflow-hidden border border-[#E6E8EC] shadow-2xl">
                        <div className="p-16 space-y-10 text-white/40">
                            <h3 className="text-[14px] font-black text-red-500/60 uppercase tracking-[0.5em]">The Failure Loop</h3>
                            <div className="space-y-8 text-xl font-bold italic">
                                <p className="line-through decoration-red-500/50 decoration-2 text-white/20">SOPs sit in files / folders</p>
                                <p className="line-through decoration-red-500/50 decoration-2 text-white/20">Staff doesn’t understand them</p>
                                <p className="line-through decoration-red-500/50 decoration-2 text-white/20">No one tracks daily execution</p>
                            </div>
                        </div>
                        <div className="p-16 bg-[#0F3D2E] space-y-10 text-white">
                            <h3 className="text-[14px] font-black text-emerald-400 uppercase tracking-[0.5em]">The Sovereign Fix</h3>
                            <div className="space-y-8 text-xl font-black italic">
                                <div className="flex items-center gap-4">
                                    <Check className="w-6 h-6 text-emerald-400" />
                                    <span>Clear what to do (SOPs)</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Check className="w-6 h-6 text-emerald-400" />
                                    <span>Trainer notes explain how</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Check className="w-6 h-6 text-emerald-400" />
                                    <span>Consequences show why it matters</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Check className="w-6 h-6 text-emerald-400" />
                                    <span>Daily tracking ensures it gets done</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-16 space-y-2">
                         <p className="text-[28px] md:text-[40px] font-black text-[#0B0F14] uppercase italic tracking-tighter">
                            This is not documentation. <br/>
                            <span className="text-[#FFFFFF] bg-[#0F3D2E] px-4 py-1 inline-block mt-2">This is execution.</span>
                        </p>
                    </div>
                </Section>

                {/* 🏢 SECTION 9 — WHO IT’S FOR */}
                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Built for serious operations</h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels", i: Building },
                                { n: "Clinics", i: Hospital },
                                { n: "Retail", i: Store },
                                { n: "Facilities", i: Building2 },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Franchise", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="bg-white border border-[#E6E8EC] p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-[#0F3D2E]/40 hover:shadow-md transition-all group">
                                    <ind.i className="w-10 h-10 text-[#5B6670] group-hover:text-[#0F3D2E] transition-colors mb-6" />
                                    <span className="font-black text-[11px] text-[#0B0F14] uppercase tracking-widest leading-none">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-[13px] text-[#5B6670] font-bold uppercase tracking-[0.2em] italic">Built for single units and multi-location teams</p>
                    </div>
                </Section>

                {/* ⚙️ SECTION 10 — CLARITY */}
                <Section className="bg-[#FFFFFF] border-y border-[#E6E8EC]">
                    <div className="max-w-[800px] mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">This is not "just Excel"</h2>
                            <p className="text-[20px] text-[#5B6670] font-medium italic">It’s a complete operational engine built for daily execution.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
                            <div className="space-y-3">
                                <h4 className="font-black text-[#0B0F14] uppercase italic text-sm">No software debt</h4>
                                <p className="text-[13px] text-[#5B6670] italic font-medium">Nothing new to install or learn.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h4 className="font-black text-[#0B0F14] uppercase italic text-sm">No recurring cost</h4>
                                <p className="text-[13px] text-[#5B6670] italic font-medium">One-time payment. Own forever.</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-black text-[#0B0F14] uppercase italic text-sm">No complexity</h4>
                                <p className="text-[13px] text-[#5B6670] italic font-medium">Universal access for any team.</p>
                            </div>
                        </div>
                        <p className="text-[22px] font-black text-[#0B0F14] pt-8 uppercase italic border-t border-[#E6E8EC]">
                            Simple for teams. <br/>
                            <span className="text-[#0F3D2E]">Surgical for managers.</span>
                        </p>
                    </div>
                </Section>

                {/* 🚀 FINAL CTA */}
                <Section className="bg-[#0F3D2E] text-white text-center py-32">
                    <div className="max-w-[800px] mx-auto space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-[40px] md:text-[64px] font-bold leading-[0.9] tracking-tighter uppercase italic">Start running your system today</h2>
                            <p className="text-[18px] text-white/60 font-medium italic">Setup takes less than 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-8">
                            <button className="h-[80px] px-12 rounded-[16px] bg-[#F4A261] text-white font-black uppercase italic text-2xl shadow-[0_20px_50px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group">
                                <Link href="/library" className="flex items-center gap-4">
                                    Get Your System Now <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                                </Link>
                            </button>
                            
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-3">
                                    <p className="text-[40px] font-black italic">₹2,999</p>
                                    <span className="text-xl font-bold text-white/30 italic">/ $29</span>
                                </div>
                                <p className="text-[12px] font-black uppercase tracking-[0.3em] text-white/40">
                                    One-time payment • Own forever
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 💬 SECTION 11 — FAQ */}
                <Section className="bg-white">
                    <div className="max-w-[800px] mx-auto space-y-16">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">Questions & Answers</h2>
                        
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-[#F7F8FA] px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Can my team break the system?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    No. You can lock formulas and key structures so only daily tasks can be updated. This ensures the technical engine remains bulletproof while allowing staff to log completion.
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-2" className="bg-[#F7F8FA] px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Is this difficult to use?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    No. Your team already knows Excel / Google Sheets. There is no new software to learn, no separate passwords to manage, and no complex training required.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-[#F7F8FA] px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">Can I edit the system?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    Yes. It is 100% unlocked and customizable. You can add, delete, or modify any task to fit your specific brand standards. You own the file for life.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-[#F7F8FA] px-8 rounded-2xl border-none">
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">What if I need help?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    Full support and customization are available. We provide setup guidance and 1-on-1 discovery calls if you need a bespoke engine built for specialized requirements.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

            </main>
            
            <Footer />
        </div>
    );
}
