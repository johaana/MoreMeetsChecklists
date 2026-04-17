
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
    HelpCircle,
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
    CircleDollarSign,
    ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- PRODUCTION DESIGN SYSTEM ---
const COLORS = {
    PRIMARY: "#0F3D2E",      // Dark Green
    ACCENT: "#F4A261",       // Amber CTA
    TEXT_PRIMARY: "#0B0F14", // Dark
    TEXT_SECONDARY: "#5B6670", // Grey
    BACKGROUND: "#F7F8FA",   // Off-white
    WHITE: "#FFFFFF",
    BORDER: "#E6E8EC",
    RISK_BG: "#FFF5F5"
};

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const AnimatedAnnotation = ({ children, className, delay = "0s", color = "green" }: { children: React.ReactNode, className?: string, delay?: string, color?: "green" | "red" | "blue" }) => {
    const dotColors = {
        green: "bg-emerald-500",
        red: "bg-red-500",
        blue: "bg-blue-500"
    };
    const pingColors = {
        green: "bg-emerald-400",
        red: "bg-red-400",
        blue: "bg-blue-400"
    };

    return (
        <div className={cn(
            "absolute z-30 bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg shadow-2xl flex items-center gap-2 border border-[#E6E8EC] animate-in fade-in zoom-in duration-700",
            className
        )} style={{ animationDelay: delay }}>
            <span className="relative flex h-2 w-2">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", pingColors[color])}></span>
                <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColors[color])}></span>
            </span>
            <span className="text-[10px] font-black text-[#0B0F14] uppercase tracking-widest">{children}</span>
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
            {/* Header forced to contrast with light background */}
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 HERO SECTION (FRAME 1) - ONE GLANCE OPTIMIZED */}
                <section className="w-full bg-[#F7F8FA] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <div className="flex flex-col space-y-12">
                            
                            {/* Headline: THE ONE-LINE MANDATE */}
                            <div className="max-w-7xl">
                                <span className="text-[11px] font-black text-[#5B6670] uppercase tracking-[0.4em] mb-4 block">
                                    INSTITUTIONAL OPERATING SYSTEM
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-[4.2rem] font-bold text-[#0B0F14] leading-tight tracking-tighter uppercase italic">
                                    Stop chasing your team. <span className="text-[#0F3D2E]">See daily work getting done.</span>
                                </h1>
                            </div>

                            <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-24 items-start">
                                
                                {/* Left: Narrative (6 cols) */}
                                <div className="max-w-[520px] flex flex-col items-start space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-[22px] text-[#5B6670] italic leading-tight">
                                            Even when you’re not there.
                                        </p>
                                        <div className="border-l-[3px] border-[#0F3D2E] pl-[16px] space-y-1 py-1">
                                            <p className="text-[18px] font-medium leading-tight">Without follow-ups</p>
                                            <p className="text-[18px] font-medium leading-tight">Without confusion</p>
                                            <p className="text-[18px] font-medium leading-tight">Without depending on memory</p>
                                        </div>
                                    </div>

                                    {/* Features Grid */}
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

                                    <div className="space-y-6 w-full">
                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                            <button className="h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group">
                                                <Link href="/library" className="flex items-center gap-3">
                                                    Start Your System <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </button>
                                            
                                            <div className="flex flex-col items-center sm:items-start">
                                                <div className="flex items-baseline gap-2">
                                                    <p className="text-[28px] font-black text-[#0B0F14] italic tracking-tight">₹2,999</p>
                                                    <span className="text-xs font-bold text-[#5B6670] line-through">₹4,999</span>
                                                </div>
                                                <p className="text-[11px] font-black text-[#5B6670] uppercase tracking-widest">One-time • Own forever</p>
                                            </div>
                                        </div>

                                        <p className="text-[13px] text-[#5B6670] font-bold uppercase tracking-[0.1em] border-t border-[#E6E8EC] pt-4 leading-relaxed">
                                            Built on Excel • Runs on Google Sheets <br/>
                                            Used across hotels, clinics, and multi-unit ops.
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Master Dashboard (6 cols) */}
                                <div className="relative group perspective-2000">
                                    <div className="rounded-[20px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] bg-white border border-[#E6E8EC] relative transform-gpu transition-all duration-1000 group-hover:rotate-y-[-2deg] group-hover:rotate-x-[1deg]">
                                        {/* Browser-style Header Overlay */}
                                        <div className="bg-[#0B0F14] h-10 w-full flex items-center px-4 gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                                <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                                                <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                                            </div>
                                            <div className="flex-1 flex justify-center">
                                                <div className="bg-white/10 px-6 py-1 rounded text-[8px] font-black text-white/40 uppercase tracking-widest italic">
                                                    MASTER_OPERATIONAL_CONSOLE_V4.3
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <img 
                                                src={DASHBOARD_IMAGE} 
                                                alt="Sovereign Master Dashboard" 
                                                className="w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" 
                                            />
                                            {/* Mask to hide specific text if needed (simulated) */}
                                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
                                        </div>
                                        
                                        {/* HIGH-FIDELITY ANNOTATIONS WITH EFFECTS */}
                                        <AnimatedAnnotation className="top-[15%] left-[-20px]" color="red" delay="0.5s">
                                            Missed tasks
                                        </AnimatedAnnotation>

                                        <AnimatedAnnotation className="top-[40%] right-[-10px]" color="green" delay="1s">
                                            Completed tasks
                                        </AnimatedAnnotation>

                                        <AnimatedAnnotation className="bottom-[10%] left-[10%]" color="blue" delay="1.5s">
                                            Live dashboard
                                        </AnimatedAnnotation>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Audit-Ready Infrastructure</span>
                                        <Lock className="w-5 h-5" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2 — PROBLEM */}
                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="max-w-[800px] mx-auto text-center space-y-10">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.2em] font-black text-[10px]">Operational Risk</Badge>
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
                                        "No verifiable records for audits"
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
                <Section className="bg-[#FFFFFF]">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-[#0F3D2E] border-[#0F3D2E]/30 uppercase tracking-[0.2em] font-black text-[10px]">The Resolution</Badge>
                                <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] leading-tight tracking-tight uppercase italic">This changes everything.</h2>
                            </div>
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
                                        <SearchCheck className="w-6 h-6" />
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
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E6E8EC] bg-black p-2">
                             <img src={DASHBOARD_IMAGE} alt="Simple System" className="w-full h-auto rounded-xl grayscale-[0.2]" />
                        </div>
                    </div>
                </Section>

                {/* 🔵 SECTION 4 — HOW IT WORKS */}
                <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="text-[#5B6670] border-[#5B6670]/30 uppercase tracking-[0.2em] font-black text-[10px]">Implementation</Badge>
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                            <p className="text-[#5B6670] font-medium italic">Works on phone or desktop • No training required</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { t: "Download system", d: "Get the master file instantly.", i: Download },
                                { t: "Upload to Sheets", d: "Or open in local Excel.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Define roles in 60 seconds.", i: Users },
                                { t: "Track everything live", d: "Dashboard updates in real-time.", i: Activity }
                            ].map((step, i) => (
                                <div key={i} className="bg-white border border-[#E6E8EC] p-8 rounded-2xl space-y-6 hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-xl italic">
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
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-[#0F3D2E] border-[#0F3D2E]/30 uppercase tracking-[0.2em] font-black text-[10px]">Inventory</Badge>
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
                                <div key={i} className="flex gap-5 p-4 rounded-xl hover:bg-[#F7F8FA] transition-colors">
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
                <Section className="bg-[#0B0F14]">
                    <div className="grid md:grid-cols-2 gap-1 gap-y-12 bg-[#0B0F14] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
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
                         <p className="text-[28px] md:text-[40px] font-black text-white uppercase italic tracking-tighter">
                            This is not documentation. <br/>
                            <span className="text-[#0F3D2E] bg-white px-4 py-1 inline-block mt-2">This is execution.</span>
                        </p>
                    </div>
                </Section>

                {/* 🔴 SECTION 8 — RISKS */}
                <Section className="bg-[#FFF5F5]">
                    <div className="max-w-[1000px] mx-auto text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">What this prevents</h2>
                            <p className="text-red-900/60 font-bold uppercase tracking-widest text-xs">Small misses don't become big problems.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {[
                                { t: "Missed safety checks", i: ShieldAlert },
                                { t: "Equipment failures", i: Zap },
                                { t: "Poor customer experience", i: Users },
                                { t: "Audit failures", i: SearchCheck },
                                { t: "Revenue loss", i: CircleDollarSign }
                            ].map((risk, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group">
                                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                                        <risk.i className="w-6 h-6" />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-red-900 leading-tight">{risk.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🏢 SECTION 9 — WHO IT’S FOR */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-[#5B6670] border-[#E6E8EC] uppercase tracking-[0.2em] font-black text-[10px]">Institutional Fit</Badge>
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
                                <div key={i} className="bg-[#F7F8FA] border border-[#E6E8EC] p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-[#0F3D2E]/40 hover:bg-white transition-all group">
                                    <ind.i className="w-10 h-10 text-[#5B6670] group-hover:text-[#0F3D2E] transition-colors mb-6" />
                                    <span className="font-black text-[11px] text-[#0B0F14] uppercase tracking-widest leading-none">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ⚙️ SECTION 10 — CLARITY */}
                <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
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
                            <div className="space-y-3">
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

                {/* 💬 SECTION 11 — FAQ */}
                <Section className="bg-white">
                    <div className="max-w-[800px] mx-auto space-y-16">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">Technical Questions</h2>
                        
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
                                <AccordionTrigger className="text-[18px] font-black uppercase italic hover:no-underline py-8">What if I need professional help?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-8 italic font-medium leading-relaxed">
                                    Full support and customization are available. We provide 1-on-1 discovery calls if you need a bespoke engine built for a specialized sector or large multi-unit group.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🚀 FINAL CTA */}
                <Section className="bg-[#0F3D2E] text-white text-center py-32">
                    <div className="max-w-[800px] mx-auto space-y-12">
                        <div className="space-y-6">
                            <Badge className="bg-white/10 text-white border-white/20 uppercase tracking-[0.4em] font-black text-[11px] px-8 py-2">Infrastructure Mandate</Badge>
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

                        <div className="pt-16 border-t border-white/5 opacity-60">
                            <p className="text-[14px] font-bold italic mb-4">Need help setting this up?</p>
                            <Button asChild variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black font-black uppercase italic text-xs tracking-widest px-8">
                                <Link href="/contact">Customization support available →</Link>
                            </Button>
                        </div>
                    </div>
                </Section>

            </main>
            
            <Footer />
        </div>
    );
}

