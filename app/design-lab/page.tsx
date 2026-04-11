
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
    HelpCircle,
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";
const EXCEL_GREEN = "#217346";
const SKY_BLUE = "#38bdf8";
const PASTEL_PINK = "#fbcfe8";
const PASTEL_MINT = "#d1fae5";
const PASTEL_LAVENDER = "#e9d5ff";

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "AUDIT-READY COMPLIANCE",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

/**
 * ARCHETYPE 01: THE EXCEL EXECUTIVE (Light Split)
 * White gradient field on left, Cinematic Video on right.
 */
const ExcelExecutiveHero = () => (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-white border-b">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 opacity-40" />
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
 * ARCHETYPE 02: THE FLOW STUDIO (Pastel Mint & Azure)
 * Modern bento style, very soft, approachable.
 */
const FlowStudioHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#f0fdfa] via-white to-[#f0f9ff]" />
        
        <div className="container px-6 relative z-10 mx-auto grid lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-full">
                        ARCHETYPE 02: FLOW STUDIO
                    </Badge>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-zinc-900 leading-[0.9]">
                        Better Days, <br /> <span className="text-sky-400 italic uppercase">Built-In.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 italic font-medium max-w-xl">
                        We've made elite standards simple enough for everyone. <br /> 
                        No complicated software. Just pure clarity for your team.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="h-16 px-10 rounded-2xl font-black uppercase italic text-sm tracking-widest shadow-xl bg-zinc-900 text-white hover:bg-emerald-600 transition-all border-none">
                        GET STARTED: ₹999
                    </Button>
                    <Button variant="outline" className="h-16 px-10 rounded-2xl font-black uppercase italic text-sm tracking-widest border-zinc-200 text-zinc-400 hover:bg-zinc-50 transition-all">
                        VIEW TOUR
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[
                    { t: "ONBOARDING", c: "bg-emerald-50 text-emerald-500", i: GraduationCap },
                    { t: "DAILY PULSE", c: "bg-sky-50 text-sky-500", i: Zap },
                    { t: "SAFETY", c: "bg-pink-50 text-pink-500", i: ShieldCheck },
                    { t: "DATA OWNED", c: "bg-amber-50 text-amber-500", i: Lock }
                ].map((card, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-900/5 space-y-4">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", card.c)}>
                            <card.i className="w-6 h-6" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{card.t}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 03: THE STUDIO MINIMALIST (Pure Order - User Favorite)
 * Pristine whitespace, sky blue accents, high-contrast.
 */
const MinimalistStudioHero = () => (
    <section className="relative w-full h-screen flex bg-zinc-50 overflow-hidden border-b">
        <div className="w-[45%] h-full bg-white p-16 md:p-24 flex flex-col justify-between relative border-r border-zinc-100 z-20">
            <div className="space-y-10">
                <Badge variant="outline" className="border-zinc-100 text-zinc-300 uppercase tracking-[0.6em] font-black text-[10px] px-6 py-2 rounded-none">
                    ARCHETYPE 03: STUDIO MINIMALIST
                </Badge>
                <div className="space-y-4">
                    <div className="space-y-0">
                        <h1 className="text-6xl md:text-[8.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                            PURE <br />
                            <span style={{ color: SKY_BLUE }}>ORDER.</span>
                        </h1>
                        <div className="w-24 h-2 mt-4" style={{ backgroundColor: SKY_BLUE }} />
                    </div>
                    <p className="text-2xl text-zinc-400 italic font-medium leading-relaxed max-w-sm pt-4">
                        A clean slate for your operations. <br />
                        No clutter, just high-definition control.
                    </p>
                </div>
            </div>

            <div className="space-y-10">
                <div className="space-y-3">
                    {["SIMPLE SETUP", "AUDIT PROOF", "TEAM READY"].map(s => (
                        <div key={s} className="flex items-center gap-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SKY_BLUE }} />
                            {s}
                        </div>
                    ))}
                </div>
                <Button className="h-20 w-full rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all border-none bg-zinc-950 text-white hover:brightness-110">
                    DEPLOY SYSTEM
                </Button>
            </div>
        </div>

        <div className="flex-1 relative bg-zinc-100">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
            
            <div className="absolute bottom-16 right-16">
                <div className="p-10 rounded-[3rem] bg-white/90 backdrop-blur-xl border border-white shadow-2xl flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: SKY_BLUE }}>
                        <Activity className="w-8 h-8" />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.3em]">SYSTEM STATUS</p>
                        <p className="text-3xl font-black text-zinc-900 italic uppercase tracking-tighter">Optimized</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 04: THE CREATIVE PULSE (Pastel Pink & Lavender)
 * Friendly, warm, premium agency feel.
 */
const CreativePulseHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-200 blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200 blur-[150px]" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center space-y-16">
            <div className="max-w-4xl mx-auto space-y-8">
                <Badge className="bg-white text-purple-500 border-purple-100 uppercase tracking-[0.5em] font-black text-[10px] px-10 py-3 rounded-full shadow-lg">
                    ARCHETYPE 04: CREATIVE PULSE
                </Badge>
                <h1 className="text-6xl md:text-[9.5rem] font-black font-headline tracking-tighter text-zinc-950 leading-[0.8] uppercase italic">
                    Design <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Success.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-zinc-400 italic font-medium max-w-2xl mx-auto leading-tight">
                    Premium workflows for premium brands. <br /> 
                    Soft on the eyes, hard on the errors.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="p-8 px-12 rounded-[3rem] bg-white shadow-2xl border border-white flex flex-col items-center gap-4 group hover:scale-105 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-400">
                        <Smile className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">TEAM FRIENDLY</p>
                </div>
                <div className="p-8 px-12 rounded-[3rem] bg-white shadow-2xl border border-white flex flex-col items-center gap-4 group hover:scale-105 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-400">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">PREMIUM OUTPUT</p>
                </div>
                <div className="p-8 px-12 rounded-[3rem] bg-white shadow-2xl border border-white flex flex-col items-center gap-4 group hover:scale-105 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-400">
                        <Monitor className="w-8 h-8" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">LIVE HUD</p>
                </div>
            </div>

            <Button className="h-20 px-16 rounded-3xl font-black uppercase italic text-xl tracking-widest shadow-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none hover:brightness-110 transition-all">
                DEPLOY SYSTEM: ₹999
            </Button>
        </div>
    </section>
);

/**
 * ARCHETYPE 05: THE GLASS INSTRUMENT (Multi-color HUD)
 * High-tech but light and airy.
 */
const GlassInstrumentHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center">
            <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] bg-white/40 border border-white backdrop-blur-[100px] shadow-2xl space-y-12 ring-1 ring-white/20">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.8em] font-black text-[10px] px-10 py-3 rounded-full bg-white/50">
                        ARCHETYPE 05: GLASS INSTRUMENT
                    </Badge>
                    <h1 className="text-5xl md:text-[9rem] font-black font-headline tracking-tighter text-zinc-950 leading-none">
                        OPERATE <br /> <span className="text-sky-400 italic">SMARTER.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-500 italic font-medium max-w-2xl mx-auto leading-tight">
                        The professional plug for operational leaks. <br /> 
                        <span className="text-emerald-500">Simple.</span> Scalable. Sovereign.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest bg-sky-500 text-white shadow-xl hover:brightness-110 transition-all border-none">
                        DEPLOY ENGINE: ₹999
                    </Button>
                    <Button variant="outline" className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest border-zinc-200 text-zinc-400 bg-white/50 hover:bg-white transition-all">
                        EXPLORE LIBRARY
                    </Button>
                </div>

                <div className="pt-10 border-t border-zinc-200/50 flex flex-wrap justify-center gap-10">
                    {["MINT PALETTE", "PINK PULSE", "AZURE FLOW"].map((s, i) => (
                        <div key={s} className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                            <div className={cn("w-1.5 h-1.5 rounded-full", i === 0 ? "bg-emerald-400" : i === 1 ? "bg-pink-400" : "bg-sky-400")} />
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
                
                <ExcelExecutiveHero />
                <FlowStudioHero />
                <MinimalistStudioHero />
                <CreativePulseHero />
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
                                color={SKY_BLUE}
                                title="Guest Check-in"
                                audit="Front Desk Readiness (SOP-01)"
                                action="Verify arrival kits and welcome notes are ready 30m before guest check-in."
                                risk="Loss of reputation and guest loyalty."
                            />
                            <TaskCard 
                                color={EXCEL_GREEN}
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
