
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
    ShieldCheck
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
 * ARCHETYPE 01: THE EXCEL EXECUTIVE (Light Main Site)
 * A precise light-mode recreation of the main site's hero.
 */
const ExcelExecutiveHero = () => (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-white border-b border-zinc-100">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/40 to-transparent" />
        </div>

        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-20 items-center">
            <div className="space-y-12">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full border-zinc-200 text-zinc-400 bg-white/50 backdrop-blur-sm">
                        ARCHETYPE 01: EXCEL EXECUTIVE
                    </Badge>
                    <h1 className="text-6xl md:text-[8rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                        CAPTURE <br />
                        <span style={{ color: EXCEL_GREEN }}>MEMORY.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 italic font-medium max-w-sm border-l-4 pl-8 leading-relaxed" style={{ borderColor: EXCEL_GREEN }}>
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
                    <Button className="h-20 px-12 rounded-xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 border-none flex items-center justify-center gap-4" style={{ backgroundColor: EXCEL_GREEN, color: '#fff' }}>
                        DEPLOY NOW <ArrowRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            <div className="hidden lg:block p-1 border-l border-zinc-200 space-y-10 pl-20">
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
 * ARCHETYPE 02: THE FRIENDLY PULSE (Approachabe & Airy)
 */
const FriendlyPulseHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-emerald-50/30">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>

        <div className="container px-6 relative z-10 mx-auto text-center space-y-12">
            <div className="max-w-4xl mx-auto space-y-6">
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-full">
                    ARCHETYPE 02: FRIENDLY PULSE
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter text-zinc-900 leading-none">
                    Better Days, <br /> <span className="text-emerald-500 italic uppercase font-headline">Built-In.</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                    Running your business shouldn't feel like a battle. <br /> 
                    We've made high-end operations simple enough for everyone.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                    { t: "Easy Onboarding", d: "Staff learn the system in under 5 minutes.", i: Smile, c: "text-blue-500" },
                    { t: "Excel Familiarity", d: "Works on tools your team already uses.", i: FileSpreadsheet, c: "text-emerald-600" },
                    { t: "Visual Clarity", d: "Instantly see what's done and what needs help.", i: CheckCircle2, c: "text-amber-500" }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[3rem] bg-white border border-zinc-100 shadow-xl space-y-4 hover:shadow-2xl transition-all">
                        <div className={cn("w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center mx-auto", item.c)}>
                            <item.i className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900">{item.t}</h3>
                        <p className="text-sm text-zinc-500 italic font-medium leading-relaxed">{item.d}</p>
                    </div>
                ))}
            </div>

            <Button className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest shadow-xl bg-zinc-900 text-white hover:bg-emerald-600 transition-all border-none">
                GET STARTED FOR ₹999
            </Button>
        </div>
    </section>
);

/**
 * ARCHETYPE 03: THE STUDIO CANVAS (Minimalist White)
 */
const StudioCanvasHero = () => (
    <section className="relative w-full h-screen flex bg-zinc-50 overflow-hidden border-b border-zinc-200">
        <div className="w-[40%] h-full bg-white p-16 md:p-24 flex flex-col justify-between relative border-r border-zinc-100 shadow-2xl z-20">
            <div className="space-y-10">
                <Badge variant="outline" className="border-zinc-200 text-zinc-400 uppercase tracking-[0.6em] font-black text-[10px] px-6 py-2 rounded-none">
                    ARCHETYPE 03: STUDIO CANVAS
                </Badge>
                <h1 className="text-6xl md:text-[7rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-zinc-950">
                    Pure <br />
                    <span style={{ color: EXCEL_GREEN }}>Order.</span>
                </h1>
                <p className="text-xl text-zinc-400 italic font-medium leading-tight max-w-sm">
                    A clean slate for your operations. No clutter, just high-definition control.
                </p>
            </div>

            <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                    {["Simple Setup", "Audit Proof", "Team Ready", "Live Data"].map(s => (
                        <div key={s} className="flex items-center gap-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest italic p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: EXCEL_GREEN }} />
                            {s}
                        </div>
                    ))}
                </div>
                <Button className="h-20 w-full rounded-none font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all border-none" style={{ backgroundColor: EXCEL_GREEN, color: '#fff' }}>
                    DEPLOY SYSTEM
                </Button>
            </div>
        </div>

        <div className="flex-1 relative bg-zinc-100">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
            
            <div className="absolute bottom-16 right-16 flex flex-col gap-4">
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-900 text-white">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">SYSTEM STATUS</p>
                        <p className="text-xl font-black text-zinc-900 italic uppercase">Operational Excellence</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/**
 * ARCHETYPE 04: THE GUIDANCE HUB (Warm & Human)
 */
const GuidanceHero = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#faf9f6]">
        <div className="container px-6 relative z-10 mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 text-left">
                <Badge variant="outline" className="text-[#8b7e6a] border-[#8b7e6a]/30 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-full">
                    ARCHETYPE 04: THE GUIDANCE HUB
                </Badge>
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-[9rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-[#4a4238]">
                        Lead with <br />
                        <span style={{ color: EXCEL_GREEN }}>Ease.</span>
                    </h1>
                    <p className="text-2xl text-[#8b7e6a] italic font-medium max-w-xl leading-relaxed">
                        Empower your team with systems that teach. We've turned complex SOPs into a friendly, supportive mentor for your staff.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                    <Button className="h-20 px-12 rounded-2xl font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all hover:scale-105 border-none" style={{ backgroundColor: EXCEL_GREEN, color: '#fff' }}>
                        SEE THE TOOLKIT
                    </Button>
                    <div className="flex items-center gap-4 text-[10px] font-black text-[#8b7e6a] uppercase tracking-[0.4em] border-l border-[#8b7e6a]/20 pl-8 italic">
                        100% EXCEL <br /> FOREVER OWNERSHIP
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="p-4 rounded-[4rem] bg-white shadow-[0_50px_100px_-20px_rgba(139,126,106,0.15)] border border-[#8b7e6a]/10 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 bg-[#faf9f6]/80 backdrop-blur-md rounded-[3.5rem] p-12 space-y-10">
                        {[
                            { l: "Trainer Notes", d: "How-to guides for every single task.", i: GraduationCap },
                            { l: "Risk Mapping", d: "Know why each step matters.", i: ShieldCheck },
                            { l: "Daily Cycles", d: "Never miss a morning check again.", i: Clock }
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#8b7e6a]/10 flex items-center justify-center text-[#8b7e6a] group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
                                    <feat.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black uppercase text-sm text-[#4a4238] tracking-widest">{feat.l}</h4>
                                    <p className="text-xs text-[#8b7e6a] italic font-medium">{feat.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TaskCard = ({ title, audit, action, risk, color }: any) => (
    <div className="p-12 rounded-[3.5rem] border border-zinc-100 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] space-y-12 hover:shadow-2xl transition-all group relative overflow-hidden ring-1 ring-black/5">
        <div className="space-y-10 relative z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="p-5 rounded-2xl bg-zinc-50 shadow-inner group-hover:scale-110 transition-transform" style={{ color: color }}>
                        <Zap className="w-10 h-10" />
                    </div>
                    <h4 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-950">{title}</h4>
                </div>
                <span className="text-[10px] font-black text-zinc-200 uppercase tracking-widest">MODULE_PRT_01</span>
            </div>
            
            <div className="space-y-10">
                <div className="space-y-3">
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-zinc-400">
                        <SearchCheck className="w-6 h-6 text-zinc-200"/> AUDIT (TECHNICAL)
                    </span>
                    <p className="text-xl md:text-2xl font-bold italic leading-tight text-zinc-950">{audit}</p>
                </div>
                <div className="space-y-3">
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-zinc-400">
                        <GraduationCap className="w-6 h-6 text-zinc-200"/> ACTION (TRAINER)
                    </span>
                    <p className="text-xl md:text-2xl font-medium italic text-zinc-600 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>

        <div className="pt-10 border-t border-zinc-100 relative z-10">
            <div className="flex items-center justify-between">
                <div className="space-y-3">
                    <span className="text-[12px] font-black text-red-600/60 uppercase tracking-[0.5em] flex items-center gap-4">
                        <ShieldAlert className="w-6 h-6"/> RISK (CONSEQUENCE)
                    </span>
                    <p className="text-lg md:text-xl text-red-600 font-black uppercase italic leading-tight">{risk}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-200 group-hover:text-emerald-500 transition-colors">
                    <CheckCircle2 className="w-8 h-8" />
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
                <FriendlyPulseHero />
                <StudioCanvasHero />
                <GuidanceHero />

                {/* TECHNICAL COMPONENT REGISTRY */}
                <section className="py-32 md:py-56 bg-zinc-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-10 mb-32">
                            <Badge variant="outline" className="uppercase tracking-[0.8em] font-black text-[12px] border-zinc-200 text-zinc-400 px-10 py-3 rounded-full bg-white shadow-xl">Component Registry</Badge>
                            <h2 className="text-6xl md:text-[10rem] font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-[0.8]">Master <br /> Tool Library.</h2>
                            <div className="flex justify-center pt-10">
                                <p className="text-xl md:text-4xl text-zinc-500 italic font-medium max-w-3xl leading-[1.1] border-l-8 border-zinc-200 pl-12 text-left">
                                    Simplified technical assets engineered for clarity and absolute readability.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-[90rem] mx-auto">
                            <TaskCard 
                                color={EXCEL_GREEN}
                                title="Guest Arrival"
                                audit="Reception Readiness (SOP-01)"
                                action="Verify celebration amenities and greetings are placed 30m before check-in."
                                risk="Loss of customer loyalty and negative reviews."
                            />
                            <TaskCard 
                                color="#2563eb"
                                title="Thermal Check"
                                audit="Cold-Chain Validation (HACCP)"
                                action="Log fridge temps: Target 1°C to 4°C. Verify probe accuracy."
                                risk="Pathogen growth and inventory loss."
                            />
                        </div>

                        {/* SYSTEM MONITOR HUD */}
                        <div className="mt-40 max-w-7xl mx-auto p-20 md:p-32 rounded-[6rem] border border-zinc-100 bg-white shadow-[0_100px_200px_-30px_rgba(0,0,0,0.1)] space-y-32 transition-all hover:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
                                <Target className="w-[45rem] h-[45rem]" />
                            </div>
                            
                            <div className="flex flex-col xl:flex-row items-center justify-between gap-24 border-b border-zinc-100 pb-24 relative z-10">
                                <div className="space-y-10 text-center xl:text-left max-w-xl">
                                    <div className="flex items-center gap-4 justify-center xl:justify-start">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[14px] font-black uppercase text-zinc-400 tracking-[1em] font-headline">/ Operational Status</span>
                                    </div>
                                    <h3 className="text-7xl md:text-9xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-none">Command <br /> Center.</h3>
                                </div>
                                
                                <div className="flex flex-wrap items-center justify-center gap-12 bg-zinc-50 p-12 rounded-[5rem] border border-zinc-100 shadow-inner">
                                    {[
                                        { v: "92%", l: "STATUS", c: "text-emerald-600" },
                                        { v: "04", l: "RISKS", c: "text-red-600" },
                                        { v: "120", l: "MISSIONS", c: "text-zinc-950" }
                                    ].map((stat, i) => (
                                        <div key={i} className={cn("text-center px-16", i !== 2 && "border-r border-zinc-200")}>
                                            <p className={cn("text-7xl md:text-8xl font-black tracking-tighter", stat.c)}>{stat.v}</p>
                                            <p className="text-[13px] font-bold uppercase tracking-[0.5em] text-zinc-400 pt-6">{stat.l}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-24 relative z-10">
                                {[
                                    { t: "Simple Reporting", d: "No training required. Your team already knows how to use this.", i: GraduationCap },
                                    { t: "Live Uptime", d: "Real-time infrastructure vitals and critical utility monitor.", i: Zap },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail mapped to international standards.", i: ClipboardCheck }
                                ].map((feat, i) => (
                                    <div key={i} className="flex flex-col gap-10 group">
                                        <div className="w-24 h-24 rounded-[3rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 shrink-0 group-hover:bg-zinc-950 group-hover:text-white transition-all shadow-xl">
                                            <feat.i className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-black uppercase italic tracking-tighter text-3xl text-zinc-950 leading-none">{feat.t}</h4>
                                            <p className="text-lg text-zinc-500 font-medium italic leading-snug">{feat.d}</p>
                                        </div>
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
