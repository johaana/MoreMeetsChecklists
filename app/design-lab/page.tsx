
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
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
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- DESIGN SYSTEM CONSTANTS ---
const COLORS = {
    PRIMARY: "#1F7A63",      // Dark Green (Trust)
    ACCENT: "#F59E0B",       // Amber (Action/CTA)
    TEXT_PRIMARY: "#0F172A", // Dark Navy
    TEXT_SECONDARY: "#475569", // Slate Grey
    BACKGROUND: "#F8FAFC",   // Soft Grey
    CARD_BG: "#FFFFFF",
    BORDER: "#E2E8F0"
};

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-20 px-4 md:px-6", className)}>
        <div className="container mx-auto max-w-6xl">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-[44px] font-bold tracking-tight text-[#0F172A] leading-tight text-center", className)}>
        {children}
    </h2>
);

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-body text-[#0F172A]">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 SECTION 1: THE SOVEREIGN HERO (ZERO-SCROLL) */}
                <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-16 overflow-hidden">
                    <div className="container px-6 lg:px-12 mx-auto relative z-10">
                        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
                            
                            {/* Left: Text Narrative (60%) */}
                            <div className="bg-white/88 backdrop-blur-md border border-zinc-200 rounded-[20px] p-8 md:p-12 shadow-xl space-y-8 max-w-[580px]">
                                <div className="space-y-4">
                                    <span className="text-[11px] font-black text-[#475569] uppercase tracking-[0.4em] leading-none">
                                        INSTITUTIONAL OPERATING SYSTEM
                                    </span>
                                    <h1 className="text-4xl md:text-[56px] font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                                        Stop chasing your team.<br/>
                                        See daily work done.
                                    </h1>
                                    <p className="text-xl md:text-2xl font-medium text-[#475569] italic">
                                        Even when you’re not there.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-lg font-medium text-[#0F172A] leading-relaxed">
                                        No follow-ups. No confusion.<br/>
                                        No dependency on memory.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {[
                                            "No follow-ups",
                                            "No confusion",
                                            "No dependency on memory"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-[#1F7A63] shrink-0" />
                                                <span className="text-sm font-bold text-[#0F172A]">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold text-[#475569] uppercase tracking-widest pt-2">
                                        <span>Pre-built SOPs</span>
                                        <span>Daily tracking</span>
                                        <span>Trainer notes</span>
                                        <span>Live dashboard</span>
                                    </div>
                                </div>

                                <div className="space-y-6 pt-4 border-t border-zinc-100">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="w-full">
                                            <button className="w-full md:w-auto h-16 px-12 rounded-xl bg-[#F59E0B] text-white font-black uppercase italic tracking-widest text-lg hover:scale-[1.02] transition-all shadow-[0_15px_30px_-5px_rgba(245,158,11,0.3)] active:scale-95 border-none">
                                                <Link href="/library" className="flex items-center justify-center gap-3">
                                                    Start Your System →
                                                </Link>
                                            </button>
                                        </div>
                                        <div className="pl-2 space-y-1">
                                            <p className="text-xl font-black text-[#0F172A]">
                                                <span className="text-sm font-bold text-[#475569] line-through mr-2">₹4,999</span>
                                                ₹2,999 / $29
                                            </p>
                                            <p className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">
                                                One-time payment • Own forever
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">
                                            Runs on Excel / Google Sheets • No software required
                                        </p>
                                        <p className="text-[9px] font-bold text-[#475569]/60 uppercase tracking-[0.2em]">
                                            Used across restaurants, hotels, healthcare & operations teams
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Dashboard Proof (40%) */}
                            <div className="relative group animate-in fade-in slide-in-from-right-4 duration-1000 delay-200 h-fit">
                                <div className="absolute top-4 left-4 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest z-20 shadow-xl border border-white/10">
                                    Live Operational Dashboard
                                </div>
                                
                                {/* Floating Annotations */}
                                <div className="absolute top-[20%] -left-12 z-30 bg-white/95 backdrop-blur-sm border border-zinc-200 p-3 rounded-xl shadow-2xl animate-bounce duration-[3000ms]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-[10px] font-black uppercase text-[#0F172A]">Missed tasks</span>
                                    </div>
                                </div>
                                <div className="absolute top-[40%] -right-8 z-30 bg-white/95 backdrop-blur-sm border border-zinc-200 p-3 rounded-xl shadow-2xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#1F7A63]" />
                                        <span className="text-[10px] font-black uppercase text-[#0F172A]">Completed tasks</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-[20%] left-[10%] z-30 bg-white/95 backdrop-blur-sm border border-zinc-200 p-3 rounded-xl shadow-2xl">
                                    <div className="flex items-center gap-2">
                                        <Activity className="w-3 h-3 text-[#3b82f6]" />
                                        <span className="text-[10px] font-black uppercase text-[#0F172A]">Performance %</span>
                                    </div>
                                </div>

                                <div className="rounded-[20px] overflow-hidden border border-zinc-200 shadow-2xl bg-white relative transition-transform duration-700 group-hover:scale-[1.01]">
                                    <img 
                                        src={DASHBOARD_IMAGE} 
                                        alt="System Dashboard" 
                                        className="w-full h-auto object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all" 
                                    />
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-white border border-zinc-200">
                                        <p className="text-[10px] font-black text-[#475569] uppercase tracking-widest mb-1">Status Tracking</p>
                                        <p className="text-sm font-bold text-[#0F172A]">Instant Visibility</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-zinc-200">
                                        <p className="text-[10px] font-black text-[#475569] uppercase tracking-widest mb-1">Accountability</p>
                                        <p className="text-sm font-bold text-[#0F172A]">Person-of-the-day</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2: PROBLEM */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <SectionHeadline>Why daily work breaks in most businesses</SectionHeadline>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-6">
                                <h4 className="text-[11px] font-black text-[#475569] uppercase tracking-[0.3em] mb-4">THE CHAOS MODEL</h4>
                                {[
                                    "Work depends on people",
                                    "Tasks get skipped",
                                    "No real visibility"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-medium text-[#475569]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#475569]" /> {item}
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6 p-8 rounded-2xl bg-red-50 border border-red-100">
                                <h4 className="text-[11px] font-black text-red-600 uppercase tracking-[0.3em] mb-4">THE CONSEQUENCE</h4>
                                {[
                                    "Mistakes repeat daily",
                                    "You keep chasing staff",
                                    "No control over standard"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-bold text-[#0F172A]">
                                        <X className="w-4 h-4 text-red-500 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                                Small misses. Every day. <br/>
                                <span className="text-[#475569]">That’s where control is lost.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 3: SOLUTION */}
                <Section className="bg-[#F3F4F6]">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <SectionHeadline>A simple system that runs your daily operations</SectionHeadline>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "Tasks already defined", d: "SOPs are pre-loaded and ready to run.", i: ClipboardCheck },
                                { t: "Team updates daily", d: "Zero-friction entry for front-line staff.", i: Clock },
                                { t: "See everything instantly", d: "Real-time dashboard for management.", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1F7A63] mx-auto shadow-sm">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-lg leading-tight">{item.t}</h4>
                                    <p className="text-sm text-[#475569] italic">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-8 border-t border-zinc-200 space-y-2">
                            <p className="text-2xl font-bold text-[#1F7A63] uppercase tracking-tighter italic">No follow-ups required.</p>
                            <p className="text-2xl font-bold text-[#1F7A63] uppercase tracking-tighter italic">No dependency on memory.</p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 4: HOW IT WORKS */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <SectionHeadline>Start in minutes</SectionHeadline>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { t: "Download system", i: Download },
                                { t: "Open in Sheets", i: FileSpreadsheet },
                                { t: "Share with team", i: Users },
                                { t: "Track everything live", i: Activity }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                                    <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#0F172A] group-hover:bg-[#1F7A63] group-hover:text-white transition-all">
                                        <span className="text-xl font-black">{i+1}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm leading-tight px-4">{step.t}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-[11px] font-black text-[#475569] uppercase tracking-widest">
                                Works on phone or desktop • No training required
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 5: DASHBOARD (HIGH IMPACT) */}
                <Section className="bg-[#F8FAFC]">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <SectionHeadline>See everything without asking</SectionHeadline>
                            <p className="text-lg text-[#475569] italic">Your daily executive pulse, visualized.</p>
                        </div>
                        <div className="relative rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white group">
                            <img src={DASHBOARD_IMAGE} alt="Dashboard Focus" className="w-full h-auto" />
                            
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-[#0F172A] text-white px-6 py-3 rounded-full flex items-center gap-3">
                                    <SearchCheck className="w-5 h-5" />
                                    <span className="text-xs font-black uppercase tracking-widest">Annotated System View</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 pt-8">
                            {[
                                { t: "Pending tasks", c: "text-red-500", i: AlertTriangle },
                                { t: "Completed tasks", c: "text-[#1F7A63]", i: CheckCircle2 },
                                { t: "Performance %", c: "text-blue-500", i: Activity }
                            ].map((label, i) => (
                                <div key={i} className="flex items-center gap-4 justify-center md:justify-start">
                                    <label.i className={cn("w-5 h-5", label.c)} />
                                    <span className="font-bold uppercase text-sm tracking-widest">{label.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 6: WHAT YOU GET */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <SectionHeadline>A Ready-to-Run System</SectionHeadline>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { t: "120+ pre-built SOPs", d: "Industry-standard protocols.", i: ClipboardCheck },
                                { t: "Trainer notes", d: "Action instructions for every task.", i: GraduationCap },
                                { t: "Live dashboard", d: "One-screen operational pulse.", i: Activity },
                                { t: "Task tracking", d: "Daily, weekly, monthly cycles.", i: Clock },
                                { t: "Admin control", d: "Lock formulas and structure.", i: Lock },
                                { t: "Multi-location", d: "View all branches in one place.", i: LayoutGrid }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-[#F8FAFC] border border-zinc-100 hover:border-[#1F7A63]/30 transition-all space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1F7A63] shadow-sm">
                                        <item.i className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-base">{item.t}</h4>
                                        <p className="text-xs text-[#475569] italic">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 7: WHY THIS WORKS */}
                <Section className="bg-[#0F172A] text-white">
                    <div className="grid lg:grid-cols-2 gap-1 gap-y-12">
                        <div className="p-12 space-y-10 opacity-60">
                            <h3 className="text-xl font-black text-red-400 uppercase tracking-widest">Why most SOPs fail</h3>
                            <div className="space-y-6">
                                {[
                                    "Not used daily",
                                    "Not tracked",
                                    "Not understood"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-xl font-bold line-through">
                                        <div className="w-2 h-2 rounded-full bg-red-400" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-12 bg-white/5 rounded-[32px] border border-white/10 space-y-10">
                            <h3 className="text-xl font-black text-[#1F7A63] uppercase tracking-widest">Why this works</h3>
                            <div className="space-y-6">
                                {[
                                    "Clear what to do",
                                    "Built-in training (how-to)",
                                    "Daily tracking ensures completion"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-xl font-bold">
                                        <div className="w-2 h-2 rounded-full bg-[#1F7A63]" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-20">
                        <p className="text-2xl md:text-3xl font-bold">
                            This is not documentation. <br/>
                            <span className="text-[#1F7A63]">This is execution.</span>
                        </p>
                    </div>
                </Section>

                {/* 🔴 SECTION 8: RISKS */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <SectionHeadline>What this prevents</SectionHeadline>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { t: "Missed safety checks", i: ShieldCheck },
                                { t: "Audit failures", i: AlertTriangle },
                                { t: "Customer issues", i: Users }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-red-50/30 border border-red-100 flex flex-col items-center text-center space-y-4">
                                    <item.i className="w-10 h-10 text-red-500/80" />
                                    <span className="font-bold text-lg text-[#0F172A]">{item.t}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-xl font-bold italic text-red-600">
                                "Small misses don’t become big problems."
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 9: WHO IT'S FOR */}
                <Section className="bg-[#F8FAFC]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <SectionHeadline>Built for serious operations</SectionHeadline>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels", i: Building },
                                { n: "Clinics", i: Hospital },
                                { n: "Retail", i: Store },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="aspect-square rounded-2xl bg-white flex flex-col items-center justify-center text-center p-6 border border-zinc-100 hover:border-[#1F7A63]/40 transition-all group">
                                    <ind.i className="w-8 h-8 text-zinc-300 group-hover:text-[#1F7A63] transition-colors mb-4" />
                                    <span className="font-black uppercase italic tracking-tighter text-xs text-[#0F172A]">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                             <p className="text-sm font-bold text-[#475569] uppercase tracking-widest">Built for single units and multi-location teams</p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 10: CLARITY */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] bg-[#F8FAFC] border border-zinc-200 space-y-12 text-center relative overflow-hidden">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">This is not “just Excel”</h2>
                            <p className="text-xl md:text-2xl font-medium text-[#475569] italic">A ready system for running daily operations.</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 text-center pt-10 border-t border-zinc-200">
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">No Software</h4>
                                <p className="text-[10px] text-[#475569]">Zero Debt</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">No Subscription</h4>
                                <p className="text-[10px] text-[#475569]">One-time cost</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Fully Editable</h4>
                                <p className="text-[10px] text-[#475569]">Your engine</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Works Everywhere</h4>
                                <p className="text-[10px] text-[#475569]">Universal</p>
                             </div>
                        </div>
                        <div className="pt-10">
                            <p className="text-xl font-bold text-[#0F172A]">
                                Simple for teams. <br/>
                                <span className="text-[#1F7A63]">Powerful for managers.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 FINAL CTA SECTION */}
                <Section className="bg-[#1F7A63] text-white py-24 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase italic leading-[0.9]">Start running your <br/> operations properly</h2>
                            <p className="text-xl md:text-2xl text-white/60 font-medium">Setup takes less than 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-20 px-16 rounded-2xl bg-[#F59E0B] text-white font-black uppercase italic tracking-widest text-2xl hover:scale-105 transition-all border-none shadow-[0_20px_50px_-10px_rgba(245,158,11,0.5)]">
                                <Link href="/library">Start Now →</Link>
                            </button>
                            <div className="space-y-1">
                                <p className="text-2xl font-black">
                                    <span className="text-lg font-bold text-white/40 line-through mr-3">₹4,999</span>
                                    ₹2,999 / $29
                                </p>
                                <p className="text-[12px] font-bold text-white/40 uppercase tracking-[0.4em]">
                                    One-time payment • Own forever
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔴 FAQ */}
                <Section className="bg-white pb-32">
                    <div className="max-w-3xl mx-auto space-y-16">
                        <div className="text-center">
                             <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Common Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Can my team break the system?</AccordionTrigger>
                                <AccordionContent className="text-[#475569] text-lg leading-relaxed pb-8 font-medium">
                                    No. You can lock formulas and key sections so only tasks can be updated. This ensures the engine remains bulletproof while allowing daily entry.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Is this difficult to use?</AccordionTrigger>
                                <AccordionContent className="text-[#475569] text-lg leading-relaxed pb-8 font-medium">
                                    No. Your team already knows Excel / Sheets. There is no new software to learn, no passwords to manage, and no complex training required.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Can I edit the system?</AccordionTrigger>
                                <AccordionContent className="text-[#475569] text-lg leading-relaxed pb-8 font-medium">
                                    Yes. It is fully customizable to your unique operations. You can add, delete, or modify any task to fit your specific brand standards.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">What if I need help?</AccordionTrigger>
                                <AccordionContent className="text-[#475569] text-lg leading-relaxed pb-8 font-medium">
                                    Support and customization available. We provide 1-on-1 discovery calls if you need a bespoke engine built for a specialized sector.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🔴 SUPPORT SECTION */}
                <Section className="bg-[#F8FAFC] text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold text-[#0F172A]">Need help setting this up?</h2>
                        <p className="text-[#475569] text-lg font-medium">Customization and setup support available.</p>
                        <Button asChild variant="link" className="text-[#1F7A63] font-black uppercase tracking-widest">
                            <Link href="/contact">Message Support →</Link>
                        </Button>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
