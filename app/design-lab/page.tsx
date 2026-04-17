
'use client';

import React from 'react';
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
    HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-tight", className)}>
        {children}
    </h2>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-body selection:bg-violet-100">
            {/* Header forced to light theme for this preview */}
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* 🔴 SECTION 1: THE SOVEREIGN HERO (PREMIUM GLASS ARCHITECTURE) */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center bg-zinc-50 overflow-hidden border-b border-zinc-200">
                    {/* Background Aura */}
                    <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-violet-600/5 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[80%] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
                    
                    <div className="container px-6 lg:px-12 mx-auto pt-16 h-full flex items-center">
                        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center w-full">
                            
                            {/* Left: High-Conversion Narrative */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600 font-headline">MoreMeets™ Sovereign</span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-[#0F172A] leading-[0.95] tracking-tighter uppercase italic">
                                        Stop chasing <br /> your team.
                                    </h1>
                                    <p className="text-xl md:text-3xl font-bold italic text-zinc-500 leading-tight">
                                        See daily work getting done—even when you’re not there.
                                    </p>
                                </div>

                                <div className="space-y-3 border-l-4 border-violet-600 pl-8">
                                    <p className="text-lg md:text-2xl font-black text-[#0F172A] italic leading-tight">
                                        Operations on Autopilot.
                                    </p>
                                    <p className="text-sm md:text-base font-medium text-zinc-400 italic">
                                        Without follow-ups. Without confusion. <br />
                                        Without depending on memory.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                        {[
                                            { t: "Pre-built, editable SOPs", i: ClipboardCheck },
                                            { t: "Daily task tracking", i: Clock },
                                            { t: "Trainer notes for staff", i: GraduationCap },
                                            { t: "Live dashboard visibility", i: Activity }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <item.i className="w-4 h-4 text-violet-600 shrink-0" />
                                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest italic">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2 pt-4">
                                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.3em]">ONE-TIME INVESTMENT</p>
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-4xl font-black text-violet-600 italic font-headline">₹2,999</span>
                                            <span className="text-sm font-bold text-zinc-300 line-through">₹4,999</span>
                                            <Badge className="bg-violet-600 text-white border-none text-[8px] font-black uppercase py-0.5 px-2">Launch Price</Badge>
                                        </div>
                                        <p className="text-[10px] font-bold text-zinc-400 italic">⏳ Limited early-user pricing • Own Forever</p>
                                    </div>
                                    
                                    <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-zinc-950 text-white font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-2xl border-none w-full md:w-fit group">
                                        <Link href="/library">START USING YOUR SYSTEM TODAY <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                    </Button>
                                    
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] italic">
                                        💡 Your team knows what to do. You know what actually got done.
                                    </p>
                                </div>
                            </div>

                            {/* Right: The Perspective Dashboard (Floating Proof) */}
                            <div className="relative group hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                {/* Glass Browser Frame */}
                                <div className="relative bg-white border border-zinc-200 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(139,92,246,0.15)] overflow-hidden p-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="bg-zinc-100 rounded-t-[2rem] py-3 px-6 flex items-center gap-2 border-b border-zinc-200">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-400/20" />
                                            <div className="w-2 h-2 rounded-full bg-amber-400/20" />
                                            <div className="w-2 h-2 rounded-full bg-green-400/20" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-white border border-zinc-200 rounded-md px-10 py-1 text-[8px] font-black uppercase text-zinc-400 tracking-widest shadow-inner">sovereign_master_v11.9.xlsx</div>
                                        </div>
                                    </div>
                                    <div className="relative aspect-video overflow-hidden">
                                        <img src={DASHBOARD_IMAGE} alt="MoreMeets Dashboard" className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                </div>

                                {/* Floating Telemetry Card (Doesn't obstruct main data) */}
                                <div className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-xl border border-zinc-200 p-6 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] flex items-center gap-5 animate-bounce duration-[4000ms]">
                                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 relative">
                                        <CheckCircle2 className="w-8 h-8" />
                                        <div className="absolute inset-0 bg-green-500/20 rounded-2xl animate-ping" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">LIVE SYSTEM STATUS</span>
                                        <span className="text-lg font-black text-[#0F172A] uppercase italic tracking-tighter">OPS SECURED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Telemetry Strip */}
                    <div className="absolute bottom-0 w-full py-5 bg-white/40 backdrop-blur-xl border-t border-zinc-200/50">
                        <div className="container px-12 mx-auto flex justify-center md:justify-between items-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                             <span className="hidden md:block">BUILT ON EXCEL. RUNS ON GOOGLE SHEETS.</span>
                             <span className="flex items-center gap-3 text-violet-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                                NO NEW SOFTWARE. NO SUBSCRIPTION.
                             </span>
                             <span className="hidden md:block">TEAM READY IN 10 MINUTES.</span>
                        </div>
                    </div>
                </section>

                {/* 🔥 SECTION 2 — THE REAL PROBLEM (FEAR + RELATABILITY) */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.3em] font-black text-[10px]">The Operational Reality</Badge>
                            <SectionHeadline>Teams don’t complete daily tasks unless someone keeps following up.</SectionHeadline>
                            <p className="text-zinc-400 italic font-medium">This is where businesses silently lose control.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-8">
                                <h3 className="font-black text-red-500 uppercase italic tracking-tighter text-xl flex items-center gap-3">
                                    <AlertTriangle className="w-6 h-6" /> What actually happens:
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Tasks get skipped assuming someone else did them",
                                        "Checks are done “mentally,” not verified",
                                        "Small issues go noticed too late to fix",
                                        "Managers chase work instead of leading"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-base font-bold text-zinc-600 italic leading-tight">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-10">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-[#0F172A] uppercase italic tracking-tighter">The reality</h4>
                                    <p className="text-xl md:text-2xl font-bold italic text-zinc-500 leading-snug border-l-4 border-red-500 pl-8">
                                        "Most operational problems don’t come from big failures. They come from small tasks being missed every day."
                                    </p>
                                </div>
                                <div className="p-8 bg-zinc-950 rounded-3xl text-white shadow-2xl">
                                    <p className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-2">INFRASTRUCTURE MANDATE</p>
                                    <p className="text-lg font-bold italic">This is exactly where control is lost.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 3 — THE SOLUTION (IMPACT GRADIENT) */}
                <Section className="bg-violet-600 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
                    <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                        <div className="space-y-4">
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">The Resolution</Badge>
                            <h2 className="text-3xl md:text-6xl font-black font-headline text-white uppercase italic tracking-tighter">This solves that.</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { t: "TASKS DEFINED", d: "120+ pre-built, editable SOPs ready to deploy.", i: ClipboardCheck },
                                { t: "UPDATED DAILY", d: "Your team logs work live in one shared engine.", i: Clock },
                                { t: "INSTANT VISIBILITY", d: "See what’s done vs missed in one glance.", i: Activity }
                            ].map((card, i) => (
                                <div key={i} className="p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 space-y-4 text-left hover:bg-white/15 transition-all">
                                    <card.i className="w-12 h-12 text-white/40" />
                                    <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight text-lg">{card.t}</h4>
                                    <p className="text-sm text-white/70 italic font-medium leading-relaxed">{card.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-12 pt-8">
                            <span className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest italic"><CheckCircle2 className="w-6 h-6 text-white/40" /> NO FOLLOW-UPS REQUIRED</span>
                            <span className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest italic"><CheckCircle2 className="w-6 h-6 text-white/40" /> NO DEPENDENCY ON MEMORY</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 4 — HOW TO USE (ZERO LEARNING CURVE) */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Simple Deployment</Badge>
                             <SectionHeadline>HOW TO USE THIS SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-4 gap-12">
                            {[
                                { s: "01", t: "DOWNLOAD", d: "Get the master system in Excel format." },
                                { s: "02", t: "CLOUD SYNC", d: "Upload to Google Sheets & share with team." },
                                { s: "03", t: "EXECUTE", d: "Team updates tasks as work happens." },
                                { s: "04", t: "COMMAND", d: "Dashboard shows real-time site status." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-4 relative">
                                    <div className="text-6xl font-black text-violet-100 font-headline leading-none">{step.s}</div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-xl">{step.t}</h4>
                                    <p className="text-sm text-zinc-400 italic font-medium">{step.d}</p>
                                    {i < 3 && <div className="hidden md:block absolute top-10 -right-6 text-zinc-100"><ArrowRight className="w-8 h-8" /></div>}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black text-zinc-400 uppercase tracking-widest pt-12 border-t border-zinc-200">
                            <span className="flex items-center gap-4"><Smartphone className="w-5 h-5 text-violet-600" /> WORKS ON PHONE OR DESKTOP</span>
                            <span className="flex items-center gap-4"><Zap className="w-5 h-5 text-violet-600" /> NO TRAINING REQUIRED FOR TOOLS</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 5 — DAILY VIEW (WHAT YOU SEE) */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Manager Intel</Badge>
                                <SectionHeadline>YOUR DAILY VIEW</SectionHeadline>
                                <p className="text-2xl text-zinc-500 italic font-medium border-l-4 border-violet-600 pl-8 leading-tight">You don’t ask. <br /> You already know.</p>
                            </div>
                            <ul className="space-y-8">
                                {[
                                    { t: "PENDING TASKS", d: "What was missed or delayed today.", i: AlertTriangle, c: "text-red-500" },
                                    { t: "COMPLETED TASKS", d: "Verifiable proof of work getting done.", i: CheckCircle2, c: "text-green-600" },
                                    { t: "PERFORMANCE %", d: "Track efficiency by staff or location.", i: Activity, c: "text-violet-600" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-8 group">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:bg-white group-hover:shadow-2xl transition-all shrink-0">
                                            <item.i className={cn("w-8 h-8", item.c)} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-[#0F172A] uppercase italic text-xl tracking-tight font-headline">{item.t}</h4>
                                            <p className="text-sm text-zinc-400 italic font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
                            <div className="relative bg-white border border-zinc-200 rounded-[3rem] shadow-2xl p-2">
                                <img src={DASHBOARD_IMAGE} alt="Dashboard Detail" className="rounded-[2.8rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 6 — WHAT YOU GET (GRID COMMAND) */}
                <Section className="bg-zinc-50">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Sovereign Payload</Badge>
                             <SectionHeadline>A READY-TO-RUN OPERATING SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { t: "120+ PRE-BUILT SOPs", d: "Audit-ready templates for your vertical.", i: ClipboardCheck },
                                { t: "DAILY EXECUTION LOGS", d: "Verifiable records for every single shift.", i: Clock },
                                { t: "TRAINER NOTES", d: "Step-by-step guidance for every task.", i: GraduationCap },
                                { t: "CONSEQUENCES DEFINED", d: "Build a culture of intentional compliance.", i: AlertTriangle },
                                { t: "LIVE DASHBOARD", d: "High-gravity oversight across all units.", i: Activity },
                                { t: "ADMIN CONTROLS", d: "Lock formulas & structure so staff cannot break the system.", i: Lock, elite: true }
                            ].map((item, i) => (
                                <div key={i} className={cn("p-10 rounded-[2.5rem] bg-white border border-zinc-100 space-y-5 hover:shadow-2xl transition-all group", item.elite && "border-violet-200 bg-violet-50/30")}>
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                                        <item.i className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-lg">{item.t}</h4>
                                    <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 7 — WHY IT WORKS (PSYCHOLOGICAL ANCHOR) */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Systemic Discipline</Badge>
                            <SectionHeadline>WHY TEAMS ACTUALLY FOLLOW THIS</SectionHeadline>
                            <p className="text-zinc-400 italic font-medium">Most SOPs fail because they sit in files. This system stays on the floor.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 flex gap-8 items-start">
                                <div className="w-1.5 h-20 bg-violet-600 rounded-full shrink-0" />
                                <div className="space-y-3">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-sm">TRAINER NOTES</h4>
                                    <p className="text-lg text-zinc-500 italic font-bold leading-snug">They explain exactly HOW to do it. Faster onboarding, lower dependency on managers.</p>
                                </div>
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 flex gap-8 items-start">
                                <div className="w-1.5 h-20 bg-red-500 rounded-full shrink-0" />
                                <div className="space-y-3">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-sm">CONSEQUENCES</h4>
                                    <p className="text-lg text-zinc-500 italic font-bold leading-snug">They explain WHY it matters. Turns mechanical ticking into intentional execution.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-zinc-400 font-black uppercase tracking-widest text-xs pt-8 border-t border-zinc-100">
                             THIS IS NOT DOCUMENTATION. THIS IS EXECUTION.
                        </p>
                    </div>
                </Section>

                {/* 🔥 SECTION 8 — USE CASES (SECTOR HUD) */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.3em] font-black text-[10px]">Sector Mapping</Badge>
                             <SectionHeadline>WHO IS THIS FOR?</SectionHeadline>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels & Resorts", i: Building },
                                { n: "Hospitals & Clinics", i: Hospital },
                                { n: "Retail Stores", i: Store },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise Networks", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="px-12 py-10 rounded-3xl bg-white border border-zinc-200 flex flex-col items-center gap-5 hover:border-violet-600 hover:shadow-2xl transition-all group shrink-0">
                                    <ind.i className="w-10 h-10 text-zinc-300 group-hover:text-violet-600 transition-colors" />
                                    <span className="text-lg font-black text-[#0F172A] uppercase italic tracking-tighter">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-zinc-400 italic font-medium leading-relaxed max-w-lg mx-auto">Especially useful if you are not always on-site or manage multiple locations.</p>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 9 — IMPORTANT CLARITY (THE MANIFESTO) */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[3.5rem] bg-violet-600 text-white space-y-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <FileSpreadsheet className="w-[400px] h-[400px]" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">Infrastructure Mandate</Badge>
                            <h2 className="text-3xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-none">This is not <br/> “just Excel”</h2>
                            <p className="text-xl md:text-3xl font-bold italic text-white/80 leading-relaxed max-w-3xl mx-auto">
                                It’s a ready-to-run operational system designed for daily scale.
                            </p>
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center border-t border-white/20 pt-16">
                             <div className="space-y-2">
                                <h4 className="text-base font-black uppercase tracking-widest font-headline">ZERO SOFTWARE DEBT</h4>
                                <p className="text-xs text-white/60 italic font-medium">Start today, not next month.</p>
                             </div>
                             <div className="space-y-2">
                                <h4 className="text-base font-black uppercase tracking-widest font-headline">ZERO SUBSCRIPTION</h4>
                                <p className="text-xs text-white/60 italic font-medium">Buy once, own the system forever.</p>
                             </div>
                             <div className="space-y-2">
                                <h4 className="text-base font-black uppercase tracking-widest font-headline">ZERO COMPLEXITY</h4>
                                <p className="text-xs text-white/60 italic font-medium">Simple for teams. Powerful for you.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 10 — FAQ (TRUST RESTORATION) */}
                <Section id="faq">
                    <div className="max-w-3xl mx-auto space-y-16">
                         <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Trust Restoration</Badge>
                             <SectionHeadline>COMMON QUESTIONS</SectionHeadline>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="lock" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-8">Can my team accidentally break the system?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-lg italic leading-relaxed font-medium pb-8">
                                    No. The system includes <strong>Admin Controls</strong> that allow you to lock formulas and critical structure. Your team can only update the assigned task fields. This ensures data integrity across all reports.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="break" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-8">What if I need custom changes later?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-lg italic leading-relaxed font-medium pb-8">
                                    The system is 100% editable by you. You can add, remove, or modify tasks as your brand grows. We also offer customization support if your business reaches complex multi-location requirements.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="software" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline py-8">Why not use a SaaS mobile app?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-lg italic leading-relaxed font-medium pb-8">
                                    Software requires training, password management, and monthly bills. Your team already knows Excel. MoreMeets gives you SaaS-level visibility with zero SaaS-level friction or recurring costs.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>

                {/* 🔥 FINAL CTA (HIGH GRAVITY CONVERSION) */}
                <Section className="bg-zinc-50 border-t border-zinc-200 py-32 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-6">
                            <Badge className="bg-violet-600 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">Secure Your Operations</Badge>
                            <h2 className="text-5xl md:text-[6rem] font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-[0.85]">START RUNNING <br /> YOUR SYSTEM TODAY</h2>
                            <p className="text-xl text-zinc-400 italic font-medium">Setup takes less than 10 minutes. <br/> Customization support available.</p>
                        </div>
                        
                        <div className="space-y-10">
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex items-baseline gap-6">
                                    <span className="text-7xl md:text-[9rem] font-black text-violet-600 italic font-headline leading-none">₹2,999</span>
                                    <span className="text-2xl md:text-3xl font-bold text-zinc-300 line-through italic leading-none">₹4,999</span>
                                </div>
                                <div className="flex items-center gap-8 text-xs font-black text-zinc-400 uppercase tracking-[0.3em]">
                                    <span className="flex items-center gap-2"><Lock className="w-4 h-4" /> OWN FOREVER</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                                    <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> NO SUBSCRIPTION</span>
                                </div>
                            </div>
                            
                            <Button asChild size="lg" className="h-24 px-20 rounded-[2rem] bg-zinc-950 text-white font-black uppercase italic tracking-widest text-2xl shadow-[0_30px_100px_-15px_rgba(139,92,246,0.3)] hover:scale-105 transition-all border-none">
                                <Link href="/library">GET INSTANT ACCESS <ArrowRight className="ml-4 h-8 w-8" /></Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}

