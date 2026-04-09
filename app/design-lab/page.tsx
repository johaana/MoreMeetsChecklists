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
    Cpu,
    Target,
    LayoutGrid,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const LabHero = ({ id, badge, title, subtitle, bgClass, textClass, buttonClass, videoStyle, children }: any) => (
    <section id={id} className={cn("relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-zinc-200", bgClass)}>
        {/* Cinematic Video Layer */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className={cn("w-full h-full object-cover", videoStyle)} />
        </div>
        
        <div className="container px-6 relative z-10 mx-auto">
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-6 md:p-10 rounded-3xl border border-zinc-200 bg-white shadow-sm space-y-6 hover:shadow-md transition-all group">
        <div className="flex items-center gap-4">
            <div className={cn("p-2 rounded-xl bg-zinc-50 border border-zinc-100", accentColor)}>
                <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
        </div>
        <div className="space-y-5">
            <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><SearchCheck className="w-3.5 h-3.5"/> AUDIT (TECHNICAL)</span>
                <p className="text-sm md:text-base font-bold italic leading-tight text-zinc-800">{audit}</p>
            </div>
            <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><GraduationCap className="w-3.5 h-3.5"/> ACTION (TRAINER)</span>
                <p className="text-sm md:text-base font-medium italic text-zinc-600 leading-relaxed">{action}</p>
            </div>
            <div className="pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5"/> RISK (CONSEQUENCE)</span>
                <p className="text-xs md:text-sm text-red-600 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-zinc-900">
            <SiteHeader />

            <main className="flex-1">
                
                {/* --- ARCHETYPE 1: INSTITUTIONAL SKY (Trust / Soothing) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-[#f0f7ff] overflow-hidden border-b border-blue-100">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:32px_32px]" />
                    {/* Centered Content with subtle video background */}
                    <div className="absolute inset-0 z-0 opacity-20 grayscale">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto text-center space-y-12">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <Badge className="bg-blue-600 text-white uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-full border-none shadow-lg shadow-blue-200">Archetype 1: Institutional Sky</Badge>
                            <h1 className="text-6xl md:text-[7.5rem] font-black font-headline text-[#0f172a] uppercase italic tracking-tighter leading-[0.82]">
                                TRUST IS <br/><span className="text-blue-600">ENGINEERED.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto border-t border-blue-100 pt-6">
                                The professional standard for global compliance and operational continuity.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Button className="h-20 px-12 bg-[#0f172a] text-white font-black uppercase italic rounded-2xl text-lg shadow-2xl hover:scale-105 transition-all">
                                Explore The Library <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button variant="outline" className="h-20 px-12 border-blue-200 text-blue-600 bg-white font-black uppercase italic rounded-2xl text-lg hover:bg-blue-50 transition-all">
                                Talk To An Engineer
                            </Button>
                        </div>
                    </div>
                </section>

                {/* --- ARCHETYPE 2: THE FLOATING GOLD (Prestige / Cinematic) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-zinc-100 overflow-hidden border-b border-zinc-200">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto">
                        <div className="max-w-2xl bg-white/95 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-white/20 space-y-8 relative group">
                            {/* Technical Glow */}
                            <div className="absolute -inset-1 bg-amber-500/20 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse-soft" />
                            
                            <div className="relative z-10 space-y-10">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-amber-600 border-amber-600/30 uppercase tracking-[0.4em] font-black text-[10px] bg-amber-50/50">Archetype 2: Floating Gold</Badge>
                                    <h1 className="text-5xl md:text-7xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                        CAPTURE <br/><span className="text-amber-600">MEMORY.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-zinc-600 italic font-medium leading-relaxed border-l-4 border-amber-600/20 pl-6">
                                        Institutional memory is an asset. <br /> Anything else is just luck.
                                    </p>
                                </div>
                                <Button className="h-16 px-10 bg-amber-600 text-white font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-105 transition-all w-full md:w-auto">
                                    Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ARCHETYPE 3: THE TECHNICAL BLUEPRINT (Engineering / Precision) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-[#f8fafc] border-b border-zinc-200">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center py-20 relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-emerald-600 border-emerald-200 uppercase tracking-[0.4em] font-black text-[10px] bg-emerald-50 px-4 py-1">Archetype 3: Blueprint Standard</Badge>
                                <h1 className="text-6xl md:text-8xl font-black font-headline text-slate-900 uppercase italic tracking-tighter leading-[0.85]">
                                    SYSTEMS <br/><span className="text-emerald-600">ONLY.</span>
                                </h1>
                                <p className="text-xl text-slate-500 italic font-medium max-w-sm leading-relaxed">
                                    Stop managing manually. Deploy forensically engineered data infrastructure.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Audit Ready</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Zero SaaS</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Expert SOPs</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> High Density</div>
                            </div>
                            <Button className="h-16 px-12 bg-emerald-600 text-white font-black uppercase italic rounded-full shadow-2xl hover:brightness-110 transition-all">
                                View Technical Packs <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-emerald-600/5 rounded-[3rem] blur-3xl group-hover:bg-emerald-600/10 transition-all" />
                            <div className="relative bg-white rounded-[2.5rem] p-3 border-8 border-white shadow-2xl overflow-hidden aspect-video">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[1.5rem]" />
                                {/* Overlay UI mockup */}
                                <div className="absolute top-6 left-6 right-6 h-8 bg-zinc-900/80 backdrop-blur rounded-md border border-white/10 flex items-center px-4 justify-between">
                                    <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/40"/><div className="w-2 h-2 rounded-full bg-amber-500/40"/><div className="w-2 h-2 rounded-full bg-green-500/40"/></div>
                                    <span className="text-[7px] font-black text-white/40 uppercase tracking-[0.4em]">SOVEREIGN_V11.9_ACTIVE</span>
                                    <div className="w-4 h-4 rounded bg-primary/20"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ARCHETYPE 4: ORGANIC COMMAND (Safety / Health) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-[#f0f9f4] overflow-hidden border-b border-emerald-100">
                    <div className="absolute inset-0 z-0 opacity-30 grayscale-[0.2]">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-10">
                                <div className="space-y-6">
                                    <Badge className="bg-emerald-700 text-white uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-none border-none">Archetype 4: Organic Command</Badge>
                                    <h1 className="text-6xl md:text-8xl font-black font-headline text-[#064e3b] uppercase italic tracking-tighter leading-[0.85]">
                                        CLEAN <br/><span className="text-emerald-600">STANDARDS.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-emerald-900/60 italic font-medium leading-relaxed max-w-lg border-l-4 border-emerald-200 pl-8">
                                        Soothing interface for safety-critical environments. Built for the floor, not the desk.
                                    </p>
                                </div>
                                <Button className="h-20 px-12 bg-emerald-800 text-white font-black uppercase italic rounded-none text-lg shadow-2xl hover:bg-emerald-900 transition-all border-none">
                                    Deploy Safety Infrastructure <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                                {[
                                    { t: "HACCP", d: "Food Safety" },
                                    { t: "OSHA", d: "Worker Safety" },
                                    { t: "ISO", d: "Quality Standard" },
                                    { t: "FSSAI", d: "Compliance" }
                                ].map((cert, i) => (
                                    <div key={i} className="p-8 bg-white border border-emerald-100 flex flex-col items-center text-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                        <p className="text-2xl font-black text-emerald-900 font-headline italic">{cert.t}</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600/40">{cert.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ARCHETYPE 5: MINIMALIST MONO (Brutalist / Clarity) --- */}
                <section className="relative w-full min-h-[95vh] flex flex-col justify-center bg-white border-b border-zinc-200">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto text-center space-y-16">
                        <div className="space-y-6 max-w-5xl mx-auto">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] px-8 py-2">Archetype 5: Minimalist Mono</Badge>
                            <h1 className="text-7xl md:text-[9rem] font-black font-headline text-black uppercase italic tracking-tighter leading-[0.78]">
                                ZERO <br/><span className="text-zinc-300">CHAOS.</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-zinc-400 italic font-medium max-w-3xl mx-auto leading-tight">
                                Because your brain deserves a clean canvas for complex operations. 100% Contrast. 100% Signal.
                            </p>
                        </div>
                        <div className="max-w-md mx-auto pt-8">
                            <Button className="w-full h-24 bg-black text-white font-black uppercase italic text-2xl rounded-none hover:bg-zinc-800 transition-all group">
                                ENTER THE CORE <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300">V11.9 SOVEREIGN ENGINE</p>
                        </div>
                    </div>
                </section>

                {/* --- SHARED COMPONENT LAB: PURE WHITE STANDARD --- */}
                <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200">
                    <div className="container px-6 mx-auto">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.3em] font-black text-[10px]">Pure White Component Standard</Badge>
                            <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">High-Readability Data</h2>
                            <p className="text-sm md:text-base text-zinc-500 italic font-medium">Standardized technical task snippets for elite institutional documentation.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <TaskSnippet 
                                accentColor="text-blue-600"
                                title="Guest Arrival Protocol"
                                audit="Tier-1 VIP Reception Readiness (SOP-01)"
                                action="Verify celebration amenities and personalized greetings are placed 30m before check-in."
                                risk="Loss of high-LTV loyalty and negative luxury ranking during audit."
                            />
                            <TaskSnippet 
                                accentColor="text-emerald-600"
                                title="Thermal Integrity"
                                audit="Cold-Chain Validation (HACCP CCP-1)"
                                action="Log fridge temps: Target 1°C to 4°C. Calibrate probe using ice-point method."
                                risk="Pathogen growth, mass inventory loss, and health department sealing."
                            />
                            <TaskSnippet 
                                accentColor="text-amber-600"
                                title="LOTO Safety Audit"
                                audit="Mechanical Maintenance Lock-out (OSHA)"
                                action="Physically confirm all energy isolation points are tagged and padlocked before entry."
                                risk="Fatal industrial accident, severe legal liability, and production shutdown."
                            />
                            <TaskSnippet 
                                accentColor="text-pink-600"
                                title="Clinical Sterility"
                                audit="OT Sterility Spore Test Validation"
                                action="Verify black-strip indication on instrument sets and check biological indicator logs."
                                risk="Post-operative infection outbreak and total loss of hospital license."
                            />
                        </div>

                        {/* ANALYTICS PREVIEW */}
                        <div className="mt-24 max-w-5xl mx-auto p-10 md:p-16 rounded-[3rem] bg-white border border-zinc-200 shadow-xl space-y-12">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-zinc-100 pb-10">
                                <div className="space-y-2 text-center md:text-left">
                                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.4em]">Live Unit Health</span>
                                    <h3 className="text-3xl md:text-4xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Empire Mood</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-center p-4 border-r border-zinc-100">
                                        <p className="text-2xl font-black text-emerald-600">92%</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">PULSE</p>
                                    </div>
                                    <div className="text-center p-4 border-r border-zinc-100">
                                        <p className="text-2xl font-black text-amber-500">04</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">UNIT LOAD</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <p className="text-2xl font-black text-blue-600">120</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">TASKS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-12">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Asset Uptime", d: "MEP health monitoring.", i: Cpu },
                                    { t: "Compliance", d: "Zero-fail audit trail.", i: ShieldCheck }
                                ].map((feat, i) => (
                                    <div key={i} className="space-y-4 text-center md:text-left">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 mx-auto md:mx-0">
                                            <feat.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic tracking-tighter text-lg text-zinc-900">{feat.t}</h4>
                                            <p className="text-xs text-zinc-500 font-medium italic">{feat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA PROTOTYPES */}
                <section className="py-24 text-center bg-white border-t border-zinc-200">
                    <div className="max-w-3xl mx-auto space-y-10 px-4">
                        <h2 className="text-3xl md:text-5xl font-black font-headline italic text-zinc-300 uppercase tracking-tighter">High-Readability CTA Options</h2>
                        <div className="flex flex-col gap-4">
                            <Button className="h-20 bg-blue-600 text-white font-black uppercase text-xl rounded-2xl shadow-xl shadow-blue-100 hover:brightness-110 transition-all border-none">
                                Deploy System (Sovereign Blue) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button className="h-20 bg-zinc-900 text-white font-black uppercase text-xl rounded-2xl shadow-xl hover:bg-black transition-all border-none">
                                Deploy System (Deep Contrast) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button className="h-20 bg-amber-600 text-white font-black uppercase text-xl rounded-2xl shadow-xl shadow-amber-100 hover:brightness-110 border-none transition-all">
                                Deploy System (Golden Authority) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
