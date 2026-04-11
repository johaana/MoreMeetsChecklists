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
    Check,
    Lock,
    Smartphone,
    Eye,
    Palette,
    Command,
    Workflow,
    Trophy,
    TrendingUp,
    Settings,
    Shield,
    Factory,
    ShoppingCart,
    Scale
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";
const EXCEL_GREEN = "#217346";
const SKY_BLUE = "#38bdf8";
const SOFT_PINK = "#f472b6";
const SOFT_PURPLE = "#a855f7";
const SOFT_MINT = "#34d399";

/**
 * 01. DESIGN SUCCESS (The Pink/Purple Favorite)
 */
const DesignSuccessHero = () => (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white py-20 border-b">
        <div className="container px-6 relative z-10 mx-auto text-center space-y-16">
            <div className="max-w-5xl mx-auto space-y-8">
                <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-full bg-white shadow-sm">
                    ARCHETYPE 01: DESIGN SUCCESS
                </Badge>
                <div className="space-y-2">
                    <h1 className="text-7xl md:text-[10rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                        DESIGN <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f472b6] to-[#a855f7]">SUCCESS.</span>
                    </h1>
                </div>
                <p className="text-2xl md:text-4xl text-zinc-400 italic font-medium max-w-3xl mx-auto leading-tight">
                    Premium workflows for premium brands. <br /> 
                    <span className="text-zinc-300">Soft on the eyes, hard on the errors.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                    { t: "TEAM FRIENDLY", i: Smile, c: "text-pink-400", bg: "bg-pink-50" },
                    { t: "PREMIUM OUTPUT", i: Sparkles, c: "text-purple-400", bg: "bg-purple-50" },
                    { t: "LIVE HUD", i: Monitor, c: "text-blue-400", bg: "bg-blue-50" }
                ].map((card, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-zinc-50 flex flex-col items-center gap-6 group hover:scale-105 transition-all duration-500">
                        <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-inner", card.bg, card.c)}>
                            <card.i className="w-8 h-8" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">{card.t}</p>
                    </div>
                ))}
            </div>

            <Button className="h-20 px-16 rounded-3xl font-black uppercase italic text-xl tracking-widest shadow-2xl bg-zinc-950 text-white border-none hover:bg-zinc-800 transition-all">
                DEPLOY SYSTEM <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
        </div>
    </section>
);

/**
 * 02. PURE ORDER (The Sky Blue Standard)
 */
const PureOrderHero = () => (
    <section className="relative w-full h-screen flex bg-white overflow-hidden border-b">
        <div className="w-full lg:w-[45%] h-full bg-white p-8 md:p-24 flex flex-col justify-between relative border-r border-zinc-100 z-20 shadow-2xl">
            <div className="space-y-12">
                <Badge variant="outline" className="border-zinc-100 text-zinc-300 uppercase tracking-[0.6em] font-black text-[10px] px-6 py-2 rounded-none">
                    ARCHETYPE 02: PURE ORDER
                </Badge>
                <div className="space-y-6">
                    <div className="space-y-0">
                        <h1 className="text-7xl md:text-[9.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                            PURE <br />
                            <span style={{ color: SKY_BLUE }}>ORDER.</span>
                        </h1>
                        <div className="w-32 h-3 mt-6" style={{ backgroundColor: SKY_BLUE }} />
                    </div>
                    <p className="text-2xl text-zinc-400 italic font-medium leading-relaxed max-w-sm pt-4">
                        The definitive standard for clinical, zero-clutter operations.
                    </p>
                </div>
            </div>

            <div className="space-y-10">
                <div className="space-y-4">
                    {["100% EDITABLE", "AUDIT READY", "TEAM CENTRIC"].map(s => (
                        <div key={s} className="flex items-center gap-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest italic">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: SKY_BLUE }} />
                            {s}
                        </div>
                    ))}
                </div>
                <Button className="h-20 w-full rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all border-none bg-zinc-950 text-white hover:brightness-110">
                    GET STARTED: ₹999
                </Button>
            </div>
        </div>

        <div className="hidden lg:block flex-1 relative bg-zinc-50">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
            
            <div className="absolute bottom-16 right-16">
                <div className="p-12 rounded-[4rem] bg-white/90 backdrop-blur-2xl border border-white shadow-2xl flex items-center gap-10">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: SKY_BLUE }}>
                        <Activity className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.4em]">SYSTEM STATUS</p>
                        <p className="text-4xl font-black text-zinc-900 italic uppercase tracking-tighter">Optimized</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/**
 * 03. EXCEL EXECUTIVE (Main Site Standard)
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
                        ARCHETYPE 03: THE EXCEL EXECUTIVE
                    </Badge>
                    <h1 className="text-7xl md:text-[8rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
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
                        {[
                            "120+ PRE-BUILT SOPs",
                            "AUDIT-READY COMPLIANCE",
                            "LIVE DASHBOARD",
                            "NO SaaS. OWN YOUR DATA."
                        ].map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EXCEL_GREEN }} />
                                <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.3em] italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                    <Button style={{ backgroundColor: EXCEL_GREEN }} className="h-20 px-12 rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all hover:scale-105 text-white border-none flex items-center justify-center gap-4">
                        DEPLOY MASTER ENGINE <ArrowRight className="h-6 w-6" />
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
 * 04. FLOW STUDIO (Friendly Bento)
 */
const FlowStudioHero = () => (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white py-20 border-b">
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#f0fdfa] via-white to-[#f0f9ff]" />
        
        <div className="container px-6 relative z-10 mx-auto grid lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
            <div className="space-y-10">
                <div className="space-y-4">
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-full">
                        ARCHETYPE 04: FLOW STUDIO
                    </Badge>
                    <h1 className="text-7xl md:text-9xl font-black font-headline tracking-tighter text-zinc-900 leading-[0.9]">
                        Better Days, <br /> <span className="text-emerald-400 italic uppercase">Built-In.</span>
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
 * 05. GLASS INSTRUMENT (HUD Multi-Color)
 */
const GlassInstrumentHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white border-b">
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
                    <h1 className="text-6xl md:text-[10rem] font-black font-headline tracking-tighter text-zinc-950 leading-none">
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

/**
 * 06. PANORAMIC HUD (Bottom Command)
 */
const PanoramicHUDHero = () => (
    <section className="relative w-full h-screen bg-white flex flex-col justify-end overflow-hidden border-b">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full p-10 md:p-20 space-y-12">
            <div className="max-w-4xl space-y-6">
                <Badge className="bg-white text-zinc-900 border-zinc-100 uppercase tracking-[0.6em] font-black text-[10px] px-8 py-2 rounded-full shadow-2xl">
                    ARCHETYPE 06: PANORAMIC HUD
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black font-headline text-white drop-shadow-2xl uppercase italic tracking-tighter leading-[0.85]">
                    THE VIEW FROM <br /><span className="text-primary">THE TOP.</span>
                </h1>
            </div>

            <div className="p-8 md:p-12 rounded-[3rem] bg-white/90 backdrop-blur-2xl border border-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex gap-8">
                    {[
                        { t: "120+ SOPs", i: ClipboardCheck },
                        { t: "AUDIT READY", i: ShieldCheck },
                        { t: "LIVE LOGS", i: Activity }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <item.i className="w-5 h-5 text-primary" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400">{item.t}</span>
                        </div>
                    ))}
                </div>
                <Button className="h-16 px-12 rounded-2xl bg-zinc-900 text-white font-black uppercase italic text-sm tracking-widest shadow-xl border-none">
                    DEPLOY NOW: ₹999
                </Button>
            </div>
        </div>
    </section>
);

/**
 * 07. THE VERTICAL RAIL (Technical Command)
 */
const VerticalRailHero = () => (
    <section className="relative w-full h-screen bg-zinc-50 flex items-center overflow-hidden border-b">
        <div className="w-24 md:w-32 h-full bg-white border-r border-zinc-100 flex flex-col items-center justify-center gap-12 z-20 shadow-2xl">
            {[Workflow, Command, Palette, Settings].map((Ico, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-300 hover:text-primary transition-colors cursor-pointer group">
                    <Ico className="w-6 h-6" />
                </div>
            ))}
        </div>

        <div className="flex-1 h-full relative">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/20 to-transparent" />
            
            <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24 space-y-10">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-none bg-white/50">
                        ARCHETYPE 07: VERTICAL RAIL
                    </Badge>
                    <h1 className="text-6xl md:text-[10rem] font-black font-headline text-zinc-900 leading-[0.8] uppercase italic tracking-tighter">
                        SYSTEMS <br /> <span className="text-primary">ONLY.</span>
                    </h1>
                    <p className="text-2xl text-zinc-500 italic font-medium max-w-sm">
                        Remove the human variable from high-stakes operations.
                    </p>
                </div>
                <Button className="h-20 w-fit px-12 rounded-2xl font-black uppercase italic text-lg tracking-widest shadow-2xl bg-zinc-950 text-white border-none">
                    EXPLORE SYSTEMS HUB
                </Button>
            </div>
        </div>
    </section>
);

/**
 * 08. THE ORGANIC MESH (Soft Flow)
 */
const OrganicMeshHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white border-b">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-200 blur-[150px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-200 blur-[150px] animate-pulse" />
            <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-emerald-100 blur-[120px]" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center space-y-12">
            <div className="space-y-6">
                <Badge className="bg-white text-zinc-400 border-zinc-100 uppercase tracking-[0.5em] font-black text-[10px] px-10 py-3 rounded-full shadow-lg">
                    ARCHETYPE 08: ORGANIC MESH
                </Badge>
                <h1 className="text-7xl md:text-[11rem] font-black font-headline tracking-tighter text-zinc-950 leading-none uppercase italic">
                    FLOW <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400">STATE.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-zinc-400 italic font-medium max-w-2xl mx-auto leading-tight">
                    Where institutional discipline meets modern accessibility. <br />
                    Friendly interface. Hardened protocols.
                </p>
            </div>

            <div className="flex justify-center gap-6">
                <Button className="h-20 px-16 rounded-[2rem] font-black uppercase italic text-xl tracking-widest shadow-2xl bg-white text-zinc-900 border-zinc-100 hover:scale-105 transition-all">
                    GET STARTED
                </Button>
                <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary animate-bounce">
                    <ChevronRight className="w-10 h-10 rotate-90" />
                </div>
            </div>
        </div>
    </section>
);

/**
 * 09. STUDIO CANVAS (Brutalist White)
 */
const StudioCanvasHero = () => (
    <section className="relative w-full h-screen bg-white flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <div className="space-y-12 max-w-6xl">
            <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-300">ARCHETYPE 09: STUDIO CANVAS</span>
                <h1 className="text-8xl md:text-[14rem] font-black font-headline tracking-tighter text-zinc-950 leading-[0.75] uppercase italic">
                    UN <br /> CLUTTER.
                </h1>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10 border-t border-zinc-100">
                <p className="text-xl text-zinc-400 italic font-medium max-w-xs text-left leading-tight">
                    We remove the complexity of operations through minimalist architecture.
                </p>
                <div className="h-20 w-px bg-zinc-100 hidden md:block" />
                <Button className="h-24 px-20 rounded-none bg-zinc-950 text-white font-black uppercase italic text-xl tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                    DEPLOY NOW
                </Button>
            </div>
        </div>
    </section>
);

/**
 * 10. INTERACTIVE BENTO (Modern Matrix)
 */
const InteractiveBentoHero = () => (
    <section className="relative w-full min-h-screen bg-zinc-50 flex items-center justify-center py-20 px-6 border-b">
        <div className="container mx-auto grid lg:grid-cols-[1fr,1.2fr] gap-10 items-stretch">
            
            <div className="p-16 rounded-[4rem] bg-white border border-zinc-100 shadow-2xl flex flex-col justify-between space-y-12">
                <div className="space-y-6">
                    <Badge className="bg-zinc-950 text-white uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-full">
                        ARCHETYPE 10: BENTO MATRIX
                    </Badge>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-zinc-900 leading-[0.9]">
                        Operational <br /> <span className="text-primary italic">Intelligence.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 italic font-medium leading-relaxed">
                        A collection of high-gravity tools built to run your empire with zero friction.
                    </p>
                </div>
                <Button className="h-20 px-12 rounded-2xl bg-primary text-black font-black uppercase italic text-lg tracking-widest shadow-xl border-none">
                    EXPLORE THE LIBRARY
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {[
                    { t: "Hospitality", i: Heart, c: "bg-pink-100 text-pink-600" },
                    { t: "Clinical", i: Shield, c: "bg-blue-100 text-blue-600" },
                    { t: "Industrial", i: Factory, c: "bg-emerald-100 text-emerald-600" },
                    { t: "Retail", i: ShoppingCart, c: "bg-amber-100 text-amber-600" },
                    { t: "Security", i: Lock, c: "bg-purple-100 text-purple-600" },
                    { t: "Compliance", i: Scale, c: "bg-zinc-100 text-zinc-600" }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white border border-zinc-100 shadow-xl flex flex-col justify-center gap-4 group hover:bg-zinc-950 transition-all duration-500">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", item.c)}>
                            <item.i className="w-7 h-7" />
                        </div>
                        <h4 className="text-lg font-black uppercase italic tracking-widest text-zinc-400 group-hover:text-white transition-colors">{item.t}</h4>
                    </div>
                ))}
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
                
                {/* 10 HERO ARCHETYPES */}
                <DesignSuccessHero />
                <PureOrderHero />
                <ExcelExecutiveHero />
                <FlowStudioHero />
                <GlassInstrumentHero />
                <PanoramicHUDHero />
                <VerticalRailHero />
                <OrganicMeshHero />
                <StudioCanvasHero />
                <InteractiveBentoHero />

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
