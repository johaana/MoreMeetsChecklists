
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
    ACCENT: "#F4A261",       // Muted Amber CTA
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

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased">
            {/* Header forced to contrast with light background */}
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 HERO SECTION (FRAME 1) */}
                <section className="w-full bg-[#F7F8FA] pt-24 pb-20 md:pt-32 md:pb-24">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            
                            {/* Left: Narrative (6 cols) */}
                            <div className="max-w-[520px] flex flex-col items-start">
                                <span className="text-[11px] font-black text-[#5B6670] uppercase tracking-[0.4em] mb-4">
                                    INSTITUTIONAL OPERATING SYSTEM
                                </span>
                                
                                <h1 className="text-4xl md:text-[56px] font-bold text-[#0B0F14] leading-[1.14] tracking-tight mb-4">
                                    Stop chasing your team. <br/>
                                    See daily work getting done.
                                </h1>
                                
                                <p className="text-[20px] text-[#5B6670] italic mb-8">
                                    Even when you’re not there.
                                </p>

                                {/* Pain Block (Key Visual) */}
                                <div className="border-l-[3px] border-[#0F3D2E] pl-[12px] space-y-2 mb-8">
                                    <p className="text-[18px] font-medium leading-tight">Without follow-ups</p>
                                    <p className="text-[18px] font-medium leading-tight">Without confusion</p>
                                    <p className="text-[18px] font-medium leading-tight">Without depending on memory</p>
                                </div>

                                <p className="text-[18px] font-medium mb-5">
                                    A ready operational system for your daily work
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-7 w-full">
                                    {[
                                        "Pre-built, editable SOPs",
                                        "Daily task tracking",
                                        "Trainer notes (faster training)",
                                        "Live dashboard visibility"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-[#0F3D2E] shrink-0" />
                                            <span className="text-sm font-medium text-[#0B0F14]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[14px] text-[#5B6670] mb-7 font-medium">
                                    Built on Excel • Runs on Google Sheets <br/>
                                    No software • No subscription
                                </p>

                                <div className="flex flex-col gap-3 w-full sm:w-auto">
                                    <button className="h-[52px] px-7 rounded-[10px] bg-[#F4A261] text-white font-semibold text-base shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                                        <Link href="/library" className="flex items-center gap-2">
                                            Start using your system <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </button>
                                    
                                    <div className="flex flex-col items-center sm:items-start pl-1">
                                        <p className="text-[20px] font-semibold">₹2,999 <span className="text-xs font-normal text-[#5B6670] ml-1">(limited time)</span></p>
                                        <p className="text-[14px] text-[#5B6670]">Own forever</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-[#E6E8EC] w-full">
                                    <p className="text-[14px] text-[#5B6670] font-medium">
                                        Your team knows what to do. <br/>
                                        You know what actually got done.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Dashboard (6 cols) */}
                            <div className="relative group animate-in fade-in slide-in-from-right-4 duration-1000">
                                {/* Container styling */}
                                <div className="rounded-[16px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white border border-[#E6E8EC] relative">
                                    {/* Top-Left Label */}
                                    <div className="absolute top-4 left-4 z-20 bg-[#0B0F14]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest border border-white/10">
                                        Live Operational Dashboard
                                    </div>

                                    <img 
                                        src={DASHBOARD_IMAGE} 
                                        alt="Product Dashboard" 
                                        className="w-full h-auto object-cover" 
                                    />
                                    
                                    {/* Floating Labels (Annotations) */}
                                    <div className="absolute top-[20%] left-[-20px] z-30 bg-white p-2.5 rounded-lg shadow-2xl flex items-center gap-2 border border-[#E6E8EC]">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-[10px] font-bold text-[#0B0F14] uppercase">Missed tasks</span>
                                    </div>

                                    <div className="absolute top-[45%] right-[-10px] z-30 bg-white p-2.5 rounded-lg shadow-2xl flex items-center gap-2 border border-[#E6E8EC]">
                                        <div className="w-2 h-2 rounded-full bg-[#1F7A63]" />
                                        <span className="text-[10px] font-bold text-[#0B0F14] uppercase">Completed tasks</span>
                                    </div>

                                    <div className="absolute bottom-[15%] left-[5%] z-30 bg-white p-2.5 rounded-lg shadow-2xl flex items-center gap-2 border border-[#E6E8EC]">
                                        <Activity className="w-3 h-3 text-blue-500" />
                                        <span className="text-[10px] font-bold text-[#0B0F14] uppercase">Live Dashboard</span>
                                    </div>
                                </div>
                                
                                <p className="text-center mt-6 text-[12px] font-bold text-[#5B6670] uppercase tracking-[0.2em]">
                                    Used across restaurants, hotels, healthcare & operations teams
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2 — PROBLEM */}
                <Section className="bg-white">
                    <div className="max-w-[760px] mx-auto text-center">
                        <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0B0F14] mb-6 leading-tight">One common issue across operations</h2>
                        <p className="text-[18px] text-[#5B6670] mb-10 leading-relaxed">
                            Most businesses run on memory and assumptions. When a task is missed, it's rarely a disaster—at first. But small misses compound into exposure.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-10 text-left mb-12">
                            <div className="space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-[#5B6670]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B6670] mt-2 shrink-0" />
                                        <span>Work depends on specific people</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#5B6670]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B6670] mt-2 shrink-0" />
                                        <span>Tasks get skipped during rush hours</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#5B6670]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5B6670] mt-2 shrink-0" />
                                        <span>Staff executes steps differently</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-[#0B0F14] font-bold">
                                        <X className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                        <span>Managers keep following up manually</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#0B0F14] font-bold">
                                        <X className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                        <span>No real-time visibility into completion</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#0B0F14] font-bold">
                                        <X className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                                        <span>No verifiable records for audits</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <p className="text-[20px] font-bold text-[#0B0F14]">
                            Small misses. Every day. <br/>
                            <span className="text-[#5B6670] font-semibold">That’s where control is lost.</span>
                        </p>
                    </div>
                </Section>

                {/* 🟢 SECTION 3 — SOLUTION */}
                <Section className="bg-[#FFFFFF] border-y border-[#E6E8EC]">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14] leading-tight">This solves that.</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0F3D2E]/10 flex items-center justify-center text-[#0F3D2E] shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-bold text-[#0B0F14]">Tasks are already defined</h4>
                                        <p className="text-[#5B6670]">Over 120+ industry standard SOPs built-in.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0F3D2E]/10 flex items-center justify-center text-[#0F3D2E] shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-bold text-[#0B0F14]">Work is updated daily</h4>
                                        <p className="text-[#5B6670]">Team updates progress in seconds, not meetings.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#0F3D2E]/10 flex items-center justify-center text-[#0F3D2E] shrink-0">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[18px] font-bold text-[#0B0F14]">Full visibility instantly</h4>
                                        <p className="text-[#5B6670]">One glance shows you exactly what’s done vs missed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-[#E6E8EC] space-y-2">
                                <p className="text-[18px] font-bold text-[#0F3D2E] flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4" /> No follow-ups required
                                </p>
                                <p className="text-[18px] font-bold text-[#0F3D2E] flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4" /> No dependency on memory
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E6E8EC]">
                            <img src={DASHBOARD_IMAGE} alt="Simple System" className="w-full h-auto" />
                        </div>
                    </div>
                </Section>

                {/* 🔵 SECTION 4 — HOW IT WORKS */}
                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">Start in minutes</h2>
                            <p className="text-[#5B6670]">Works on phone or desktop • No training required</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { t: "Download system", d: "Get the master file instantly.", i: Download },
                                { t: "Upload to Sheets", d: "Or open in local Excel.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Define roles in 60 seconds.", i: Users },
                                { t: "Track everything live", d: "Dashboard updates in real-time.", i: Activity }
                            ].map((step, i) => (
                                <div key={i} className="bg-white border border-[#E6E8EC] p-[20px] rounded-[12px] space-y-4 hover:border-[#0F3D2E]/20 transition-all group">
                                    <div className="w-10 h-10 rounded-lg bg-[#F7F8FA] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        {i+1}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-base leading-tight">{step.t}</h4>
                                        <p className="text-[14px] text-[#5B6670] leading-snug">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🟣 SECTION 5 — DASHBOARD VIEW */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">Your daily view</h2>
                            <p className="text-[18px] text-[#5B6670]">You don’t ask. You already know.</p>
                        </div>
                        
                        <div className="relative rounded-[16px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-[#E6E8EC] group">
                            <img src={DASHBOARD_IMAGE} alt="Annotated View" className="w-full h-[420px] object-cover" />
                            
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            
                            {/* Visual Annotations */}
                            <div className="absolute top-[20%] right-[10%] bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-[#E6E8EC] space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <span className="text-sm font-bold">🔴 Pending tasks</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-sm font-bold">🟢 Completed tasks</span>
                                </div>
                                <div className="flex items-center gap-3 pt-2 border-t border-[#E6E8EC]">
                                    <Activity className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-bold">📊 Performance %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🟡 SECTION 6 — WHAT YOU GET */}
                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center">
                             <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">What you get</h2>
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
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E8EC] flex items-center justify-center text-[#0F3D2E] shrink-0 shadow-sm">
                                        <item.i className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[16px] font-semibold text-[#0B0F14]">{item.t}</h4>
                                        <p className="text-[14px] text-[#5B6670] leading-snug">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ⚫ SECTION 7 — WHY THIS WORKS */}
                <Section className="bg-white">
                    <div className="grid md:grid-cols-2 gap-1 gap-y-12 bg-[#0B0F14] rounded-[24px] overflow-hidden">
                        <div className="p-12 space-y-8 text-white/60">
                            <h3 className="text-[20px] font-bold text-red-400 uppercase tracking-widest">Why others fail</h3>
                            <div className="space-y-6">
                                <p className="text-[18px] font-medium line-through">SOPs sit in files / folders</p>
                                <p className="text-[18px] font-medium line-through">Staff doesn’t understand them</p>
                                <p className="text-[18px] font-medium line-through">No one tracks daily execution</p>
                            </div>
                        </div>
                        <div className="p-12 bg-[#0F3D2E] space-y-8 text-white">
                            <h3 className="text-[20px] font-bold text-green-400 uppercase tracking-widest">How we fix it</h3>
                            <div className="space-y-6 text-[18px] font-medium">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Clear what to do (SOPs)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Trainer notes explain how</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Consequences show why it matters</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>Daily tracking ensures it gets done</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                         <p className="text-[24px] font-bold text-[#0B0F14]">
                            This is not documentation. <br/>
                            <span className="text-[#0F3D2E]">This is execution.</span>
                        </p>
                    </div>
                </Section>

                {/* 🔴 SECTION 8 — RISKS */}
                <Section className="bg-[#FFF5F5]">
                    <div className="max-w-[800px] mx-auto text-center space-y-12">
                        <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">What this prevents</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                            {[
                                "Missed safety checks",
                                "Equipment failures",
                                "Poor customer experience",
                                "Audit failures",
                                "Revenue loss"
                            ].map((risk, i) => (
                                <div key={i} className="flex items-center gap-3 font-bold text-red-800">
                                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
                                    <span>{risk}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[20px] font-bold italic text-red-700">
                            "Small misses don’t become big problems."
                        </p>
                    </div>
                </Section>

                {/* 🏢 SECTION 9 — WHO IT’S FOR */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">Built for serious operations</h2>
                             <p className="text-[#5B6670]">Built for single units and multi-location teams</p>
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
                                <div key={i} className="bg-[#F7F8FA] border border-[#E6E8EC] p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-[#0F3D2E]/30 transition-all group">
                                    <ind.i className="w-8 h-8 text-[#5B6670] group-hover:text-[#0F3D2E] transition-colors mb-4" />
                                    <span className="font-bold text-[14px] text-[#0B0F14]">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ⚙️ SECTION 10 — CLARITY */}
                <Section className="bg-white border-t border-[#E6E8EC]">
                    <div className="max-w-[760px] mx-auto text-center space-y-8">
                        <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14]">This is not "just Excel"</h2>
                        <p className="text-[18px] text-[#5B6670] leading-relaxed">
                            It’s a complete operational system built for daily execution.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 pt-4">
                            <div className="space-y-1">
                                <h4 className="font-bold text-[#0B0F14]">No software dependency</h4>
                                <p className="text-[14px] text-[#5B6670]">Nothing new to install</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-[#0B0F14]">No recurring cost</h4>
                                <p className="text-[14px] text-[#5B6670]">One-time investment</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-[#0B0F14]">No complexity</h4>
                                <p className="text-[14px] text-[#5B6670]">Universal accessibility</p>
                            </div>
                        </div>
                        <p className="text-[20px] font-bold text-[#0B0F14] pt-4">
                            Simple for teams. <br/>
                            <span className="text-[#0F3D2E]">Powerful for managers.</span>
                        </p>
                    </div>
                </Section>

                {/* 💬 SECTION 11 — FAQ */}
                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[760px] mx-auto space-y-12">
                        <h2 className="text-[32px] md:text-[36px] font-semibold text-[#0B0F14] text-center">Common Questions</h2>
                        
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="bg-white px-6 rounded-xl border border-[#E6E8EC] mb-4">
                                <AccordionTrigger className="text-[18px] font-semibold hover:no-underline py-6">Can my team break the system?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-6">
                                    No. You can lock formulas and key sections so only daily tasks can be updated. This ensures the technical engine remains bulletproof while allowing staff to log completion.
                                </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-2" className="bg-white px-6 rounded-xl border border-[#E6E8EC] mb-4">
                                <AccordionTrigger className="text-[18px] font-semibold hover:no-underline py-6">Is this difficult to use?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-6">
                                    No. Your team already knows Excel / Google Sheets. There is no new software to learn, no separate passwords to manage, and no complex training required.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-white px-6 rounded-xl border border-[#E6E8EC] mb-4">
                                <AccordionTrigger className="text-[18px] font-semibold hover:no-underline py-6">Can I edit the system?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-6">
                                    Yes. It is fully customizable to your operations. You can add, delete, or modify any task to fit your specific brand standards. You own the file forever.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-white px-6 rounded-xl border border-[#E6E8EC] mb-4">
                                <AccordionTrigger className="text-[18px] font-semibold hover:no-underline py-6">What if I need help?</AccordionTrigger>
                                <AccordionContent className="text-[#5B6670] text-base pb-6">
                                    Support and customization available. We provide 1-on-1 discovery calls if you need a bespoke engine built for a specialized sector or multi-unit group.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🚀 FINAL CTA */}
                <Section className="bg-[#FFFFFF] border-t border-[#E6E8EC] text-center">
                    <div className="max-w-[800px] mx-auto space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] leading-tight">Start running your system today</h2>
                            <p className="text-[18px] text-[#5B6670]">Setup takes less than 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-5">
                            <button className="h-[56px] px-10 rounded-[10px] bg-[#F4A261] text-white font-semibold text-[18px] shadow-[0_8px_25px_rgba(244,162,97,0.3)] hover:brightness-105 active:scale-95 transition-all">
                                <Link href="/library" className="flex items-center gap-2">
                                    Get Your System Now <ArrowRight className="w-5 h-5" />
                                </Link>
                            </button>
                            
                            <div className="flex flex-col items-center">
                                <p className="text-[24px] font-bold text-[#0B0F14]">₹2,999 / $29</p>
                                <p className="text-[14px] text-[#5B6670] font-medium uppercase tracking-widest">
                                    One-time payment • Own forever
                                </p>
                                <p className="text-[12px] text-red-500 font-bold mt-1 uppercase tracking-tighter">Limited-time pricing</p>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-[#E6E8EC]">
                            <p className="text-[14px] text-[#5B6670] font-medium">Need help setting this up?</p>
                            <Button asChild variant="link" className="text-[#0F3D2E] font-bold">
                                <Link href="/contact">Customization and setup support available →</Link>
                            </Button>
                        </div>
                    </div>
                </Section>

            </main>
            
            <Footer />
        </div>
    );
}
