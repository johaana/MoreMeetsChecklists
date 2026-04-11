
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    SearchCheck,
    GraduationCap,
    ShieldAlert,
    Zap,
    LayoutGrid,
    Activity,
    ClipboardCheck,
    Target,
    CheckCircle2,
    Monitor,
    Terminal,
    Layers,
    Cpu,
    Maximize2,
    Clock,
    FileSpreadsheet,
    Smile,
    ShieldCheck,
    Heart,
    Star,
    Sparkles,
    MousePointer2,
    Download,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";
const EXCEL_GREEN = "#217346";

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "AUDIT-READY COMPLIANCE",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

/**
 * ARCHETYPE 01: THE INSTITUTIONAL EXECUTIVE (Main Site Upgrade)
 * White gradient field on left, Cinematic Video on right.
 */
const InstitutionalExecutiveHero = () => (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-white border-b">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            {/* The Hard Split Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/40 to-transparent" />
        </div>

        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-20 items-center">
            <div className="space-y-12">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full border-zinc-200 text-zinc-400 bg-white/50 backdrop-blur-sm">
                        ARCHETYPE 01: THE EXECUTIVE SPLIT
                    </Badge>
                    <h1 className="text-6xl md:text-[7.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                        CAPTURE <br />
                        <span style={{ color: EXCEL_GREEN }}>MEMORY.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 italic font-medium max-w-sm border-l-4 border-zinc-100 pl-8 leading-relaxed">
                        Institutional memory is an asset. <br /> 
                        <span className="text-zinc-400">Anything else is just luck.</span>
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col gap-4">
                        {SYSTEM_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EXCEL_GREEN }} />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.3em] italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                    <Button style={{ backgroundColor: EXCEL_GREEN }} className="h-20 px-12 rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all hover:scale-105 text-white border-none flex items-center justify-center gap-4">
                        DEPLOY ENGINE <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            <div className="hidden lg:block p-1 border-l border-zinc-100 space-y-10 pl-20">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                <div className="space-y-5">
                    {["RESTAURANTS", "HOTELS", "SCHOOLS", "FACILITIES", "HEALTHCARE"].map((ind) => (
                        <div key={ind} className="block text-2xl font-bold uppercase italic text-zinc-200 hover:text-zinc-950 transition-all cursor-pointer hover:translate-x-3">{ind}</div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 02: THE SOFT PRODUCTIVITY (Friendly & Approachable)
 * Pastel tones, oversized rounding, centered narrative.
 */
const SoftProductivityHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#f0fdf4]">
        <div className="absolute inset-0 z-0 opacity-10">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center space-y-12">
            <div className="max-w-4xl mx-auto space-y-6">
                <Badge className="bg-white text-emerald-600 border-emerald-100 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-full shadow-sm">
                    ARCHETYPE 02: SOFT WORKFLOW
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter text-zinc-900 leading-tight">
                    Better Days, <br /> <span className="text-emerald-500 italic uppercase">Built-In.</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                    We've made elite standards simple enough for everyone. <br /> 
                    No complicated software. Just pure clarity for your team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    { t: "Learn in 5 Mins", d: "Designed for busy staff who hate complex apps.", i: Smile, c: "text-blue-400" },
                    { t: "Excel Familiarity", d: "Works on the tools your team already uses.", i: FileSpreadsheet, c: "text-emerald-500" },
                    { t: "Instant Results", d: "See exactly what needs help in one click.", i: CheckCircle2, c: "text-amber-400" }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[3rem] bg-white/60 backdrop-blur-xl border border-white shadow-xl space-y-4 hover:translate-y-[-4px] transition-all">
                        <div className={cn("w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mx-auto shadow-inner", item.c)}>
                            <item.i className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">{item.t}</h3>
                        <p className="text-sm text-zinc-400 italic font-medium leading-relaxed">{item.d}</p>
                    </div>
                ))}
            </div>

            <Button className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest shadow-xl bg-emerald-600 text-white hover:bg-zinc-900 transition-all border-none">
                GET STARTED: ₹999
            </Button>
        </div>
    </section>
);

/**
 * ARCHETYPE 03: THE MINIMALIST STUDIO (Architectural White)
 * Massive whitespace, ultra-thin lines, prestigious split.
 */
const MinimalistStudioHero = () => (
    <section className="relative w-full h-screen flex bg-zinc-50 overflow-hidden">
        <div className="w-[45%] h-full bg-white p-16 md:p-24 flex flex-col justify-between relative border-r border-zinc-100 z-20">
            <div className="space-y-10">
                <Badge variant="outline" className="border-zinc-100 text-zinc-300 uppercase tracking-[0.6em] font-black text-[10px] px-6 py-2 rounded-none">
                    ARCHETYPE 03: STUDIO MINIMALIST
                </Badge>
                <div className="space-y-2">
                    <h1 className="text-6xl md:text-[8rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-zinc-950">
                        Pure <br />
                        <span className="text-sky-400">Order.</span>
                    </h1>
                    <div className="w-20 h-2 bg-sky-400" />
                </div>
                <p className="text-xl text-zinc-400 italic font-medium leading-relaxed max-w-sm">
                    A clean slate for your operations. <br />
                    No clutter, just high-definition control.
                </p>
            </div>

            <div className="space-y-8">
                <div className="grid grid-cols-1 gap-2">
                    {["Simple Setup", "Audit Proof", "Team Ready", "Live Data"].map(s => (
                        <div key={s} className="flex items-center gap-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest italic p-4 bg-zinc-50 rounded-xl">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            {s}
                        </div>
                    ))}
                </div>
                <Button className="h-20 w-full rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all border-none bg-zinc-950 text-white hover:bg-sky-500">
                    DEPLOY SYSTEM
                </Button>
            </div>
        </div>

        <div className="flex-1 relative bg-zinc-100">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
            
            <div className="absolute bottom-16 right-16 flex flex-col gap-4">
                <div className="p-8 rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white shadow-2xl flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-sky-400 text-white shadow-lg">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">SYSTEM STATUS</p>
                        <p className="text-xl font-black text-zinc-900 italic uppercase">Optimized</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 04: THE GUIDANCE HUB (Warm Amber & Sand)
 * Helper-focused, mentorship narrative.
 */
const GuidanceHubHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#fffaf5]">
        <div className="container px-6 relative z-10 mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 text-left">
                <Badge variant="outline" className="text-orange-300 border-orange-100 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-full bg-white shadow-sm">
                    ARCHETYPE 04: GUIDANCE HUB
                </Badge>
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-[8.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-800">
                        Lead with <br />
                        <span className="text-orange-400">Ease.</span>
                    </h1>
                    <p className="text-2xl text-zinc-400 italic font-medium max-w-xl leading-relaxed">
                        Empower your team with systems that teach. We've turned complex SOPs into a friendly, supportive mentor for your staff.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <Button className="h-20 px-12 rounded-2xl font-black uppercase italic text-lg tracking-widest shadow-xl bg-orange-500 text-white hover:bg-zinc-900 transition-all border-none">
                        SEE THE TOOLKIT
                    </Button>
                    <div className="flex items-center gap-4 text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em] border-l border-zinc-100 pl-8 italic leading-relaxed">
                        100% EXCEL <br /> FOREVER OWNERSHIP
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="p-10 rounded-[4rem] bg-white shadow-2xl shadow-orange-900/5 border border-orange-50 space-y-10">
                    {[
                        { l: "Trainer Notes", d: "Step-by-step guides for every task.", i: GraduationCap, color: "text-blue-400" },
                        { l: "Daily Pulse", d: "Never miss a morning check again.", i: Zap, color: "text-amber-400" },
                        { l: "Safety First", d: "Know exactly why every step matters.", i: ShieldCheck, color: "text-emerald-400" }
                    ].map((feat, i) => (
                        <div key={i} className="flex items-center gap-6 group">
                            <div className={cn("w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center transition-all shadow-inner", feat.color)}>
                                <feat.i className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-black uppercase text-sm text-zinc-800 tracking-widest">{feat.l}</h4>
                                <p className="text-xs text-zinc-400 italic font-medium">{feat.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 05: THE GLASS INSTRUMENT (Modern Apple feel)
 * Refractive Index Glass modules, Light and High-Tech.
 */
const GlassInstrumentHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center">
            <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] bg-white/40 border border-white backdrop-blur-[100px] shadow-2xl space-y-12 ring-1 ring-white/20">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.8em] font-black text-[10px] px-10 py-3 rounded-full bg-white/50">
                        ARCHETYPE 05: GLASS INSTRUMENT
                    </Badge>
                    <h1 className="text-5xl md:text-[9rem] font-black font-headline tracking-tighter text-zinc-950 leading-none">
                        OPERATE <br /> <span style={{ color: EXCEL_GREEN }} className="italic">SMARTER.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-500 italic font-medium max-w-2xl mx-auto leading-tight">
                        The professional plug for operational leaks. <br /> 
                        Simple. Scalable. Sovereign.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button style={{ backgroundColor: EXCEL_GREEN }} className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest text-white shadow-xl hover:brightness-110 transition-all border-none">
                        DEPLOY ENGINE: ₹999
                    </Button>
                    <Button variant="outline" className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest border-zinc-200 text-zinc-400 bg-white/50 hover:bg-white transition-all">
                        EXPLORE LIBRARY
                    </Button>
                </div>

                <div className="pt-10 border-t border-zinc-200/50 flex flex-wrap justify-center gap-10">
                    {["EXCEL BASED", "NO SaaS", "OWN FOREVER"].map(s => (
                        <div key={s} className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EXCEL_GREEN }} />
                            {s}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const TaskCard = ({ title, audit, action, risk, color }: any) => (
    <div className="p-10 rounded-[3rem] border border-zinc-100 bg-white shadow-xl shadow-zinc-900/5 space-y-10 hover:shadow-2xl transition-all group relative overflow-hidden">
        <div className="space-y-8 relative z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="p-4 rounded-2xl bg-zinc-50 shadow-inner" style={{ color: color }}>
                        <Zap className="w-8 h-8" />
                    </div>
                    <h4 className="text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-950">{title}</h4>
                </div>
                <span className="text-[10px] font-black text-zinc-200 uppercase tracking-widest">TASK_ID_01</span>
            </div>
            
            <div className="space-y-8">
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300">TECHNICAL AUDIT</span>
                    <p className="text-xl font-bold italic leading-tight text-zinc-950">{audit}</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300">ACTION STEPS</span>
                    <p className="text-lg font-medium italic text-zinc-500 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-zinc-50 relative z-10">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.4em]">RISK</span>
                    <p className="text-sm text-red-500 font-bold uppercase italic">{risk}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-200 group-hover:text-emerald-500 transition-colors shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                <InstitutionalExecutiveHero />
                <SoftProductivityHero />
                <MinimalistStudioHero />
                <GuidanceHubHero />
                <GlassInstrumentHero />

                {/* VISITOR REASSURANCE SECTION */}
                <section className="py-32 bg-zinc-50">
                    <div className="container px-6 mx-auto">
                        <div className="max-w-4xl mx-auto text-center space-y-10 mb-24">
                            <Badge variant="outline" className="uppercase tracking-[0.6em] font-black text-[11px] border-zinc-200 text-zinc-400 px-8 py-2 rounded-full bg-white shadow-sm">
                                Why MoreMeets?
                            </Badge>
                            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-tight">Expert results. <br /> Simple methods.</h2>
                            <p className="text-xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                                We've translated complex global compliance standards into everyday checklists that your team will actually enjoy using.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <TaskCard 
                                color={EXCEL_GREEN}
                                title="Guest Check-in"
                                audit="Front Desk Readiness (SOP-01)"
                                action="Verify arrival kits and welcome notes are ready 30m before guest check-in."
                                risk="Loss of reputation and guest loyalty."
                            />
                            <TaskCard 
                                color="#3b82f6"
                                title="Fridge Temp"
                                audit="Cold-Chain Audit (HACCP)"
                                action="Check and log fridge temps: must be between 1°C and 4°C."
                                risk="Stock spoilage and safety fines."
                            />
                        </div>

                        <div className="mt-24 p-16 rounded-[4rem] bg-white shadow-2xl shadow-zinc-900/5 border border-zinc-100 text-center space-y-10">
                            <div className="grid md:grid-cols-3 gap-12">
                                {[
                                    { t: "Step 1: Download", d: "Instantly get your master file.", i: Download },
                                    { t: "Step 2: Assign", d: "Type in your team's names.", i: MousePointer2 },
                                    { t: "Step 3: Deploy", d: "Start running like an elite group.", i: Sparkles }
                                ].map((step, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="w-16 h-16 rounded-3xl bg-zinc-50 flex items-center justify-center mx-auto text-zinc-300 shadow-inner">
                                            <step.i className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-black uppercase tracking-widest text-zinc-900">{step.t}</h4>
                                        <p className="text-sm text-zinc-400 italic font-medium">{step.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
