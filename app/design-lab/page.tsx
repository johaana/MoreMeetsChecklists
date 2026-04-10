
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
    Lock,
    Smartphone,
    ShieldCheck,
    Target,
    Scale,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "AUDIT-READY COMPLIANCE",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

/**
 * --- SOVEREIGN MASTER STANDARD v26.0 ---
 * The "Pearl & Obsidian" Architecture.
 * Focus: High-Gravity Glass, Precision Grids, Typographic Weight.
 */

const SignatureHeadline = ({ accentColor, label1, label2 }: { accentColor: string, label1: string, label2: string }) => (
    <div className="space-y-10">
        <div className="space-y-4">
            <h1 className="text-6xl md:text-[9rem] font-black font-headline text-zinc-950 leading-[0.8] uppercase italic tracking-tighter">
                {label1} <br />
                <span style={{ color: accentColor }}>{label2}.</span>
            </h1>
        </div>
        <div className="flex gap-10 items-start">
            <div className="w-2.5 h-20 mt-1 shrink-0" style={{ backgroundColor: accentColor }} />
            <p className="text-xl md:text-3xl text-zinc-600 italic font-medium leading-[1.1] max-w-sm">
                Institutional memory is an asset. <br /> 
                <span className="text-zinc-400">Anything else is just luck.</span>
            </p>
        </div>
    </div>
);

const ArchetypeSplit = ({ accentColor, label, label1 = "CAPTURE", label2 = "MEMORY" }: any) => (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white border-b border-zinc-100">
        {/* RIGHT: THE OBSERVATION WINDOW */}
        <div className="absolute top-0 right-0 w-3/5 h-full z-0 overflow-hidden">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.1] opacity-90 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/40 to-transparent" />
        </div>

        {/* LEFT: THE COMMAND FIELD */}
        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-20 items-center">
            <div className="space-y-20">
                <SignatureHeadline accentColor={accentColor} label1={label1} label2={label2} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    {SYSTEM_SPECS.map((spec, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white/45 backdrop-blur-[120px] border-t border-l border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] flex flex-col gap-4 hover:bg-white transition-all ring-1 ring-black/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Scale className="w-12 h-12" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] block" style={{ color: accentColor }}>MOD_0{i+1}</span>
                            <p className="text-sm font-black uppercase italic tracking-widest text-zinc-950 leading-tight">{spec}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-6">
                    <Button className="h-24 px-16 rounded-2xl font-black uppercase italic text-2xl tracking-widest shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-95 border-none transition-all flex items-center justify-center gap-4" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY MASTER ENGINE <ArrowRight className="h-8 w-8" />
                    </Button>
                    <div className="flex items-center gap-4 ml-6">
                        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 border-zinc-200">EXCEL & GOOGLE SHEETS</Badge>
                        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 border-zinc-200">SOVEREIGN IP</Badge>
                    </div>
                </div>
            </div>
        </div>

        {/* INSTITUTIONAL METADATA */}
        <div className="absolute top-32 right-12 flex items-center gap-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-400">{label}</span>
            <div className="w-24 h-px bg-zinc-200" />
        </div>
    </section>
);

const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-12 rounded-[3.5rem] border-t border-l border-white bg-white/60 backdrop-blur-[100px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] space-y-12 hover:bg-white/95 transition-all group flex flex-col justify-between h-full relative overflow-hidden ring-1 ring-black/5">
        <div className="space-y-10 relative z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className={cn("p-5 rounded-2xl bg-white shadow-xl transition-transform group-hover:scale-110 border border-zinc-100", accentColor)}>
                        <Zap className="w-10 h-10" />
                    </div>
                    <h4 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-950">{title}</h4>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-zinc-100 flex items-center justify-center text-zinc-200 font-mono text-xs">
                    01
                </div>
            </div>
            <div className="space-y-10">
                <div className="space-y-3">
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-zinc-400"><SearchCheck className="w-6 h-6 text-zinc-200"/> AUDIT (TECHNICAL)</span>
                    <p className="text-xl md:text-2xl font-bold italic leading-tight text-zinc-950 max-w-sm">{audit}</p>
                </div>
                <div className="space-y-3">
                    <span className="text-[12px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-zinc-400"><GraduationCap className="w-6 h-6 text-zinc-200"/> ACTION (TRAINER)</span>
                    <p className="text-xl md:text-2xl font-medium italic text-zinc-600 leading-relaxed max-w-sm">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-10 border-t border-zinc-100 relative z-10">
            <div className="flex items-center justify-between">
                <div className="space-y-3">
                    <span className="text-[12px] font-black text-red-600/60 uppercase tracking-[0.5em] flex items-center gap-4"><ShieldAlert className="w-6 h-6"/> RISK (CONSEQUENCE)</span>
                    <p className="text-lg md:text-xl text-red-600 font-black uppercase italic leading-tight">{risk}</p>
                </div>
                <CheckCircle2 className="w-10 h-10 text-zinc-100 group-hover:text-emerald-500 transition-colors" />
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 1. PLATINUM GOLD (Director Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 01: PLATINUM PRESTIGE"
                    accentColor="#f5a623"
                />

                {/* 2. OCEANIC BLUE (Trust Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 02: CLINICAL AZURE"
                    accentColor="#2563eb"
                />

                {/* 3. VIVID EMERALD (Safety Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 03: INDUSTRIAL EMERALD"
                    accentColor="#10b981"
                />

                {/* 4. Midnight Indigo (Innovation Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 04: MIDNIGHT INDIGO"
                    accentColor="#6366f1"
                />

                {/* 5. STEEL CARBON (Brutalist Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 05: COMMAND CARBON"
                    accentColor="#3f3f46"
                />

                {/* UNIVERSAL COMPONENT HUB (The Master Standard) */}
                <section className="py-32 md:py-56 bg-zinc-50 relative overflow-hidden">
                    {/* Technical Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-8 mb-32">
                            <Badge variant="outline" className="uppercase tracking-[0.8em] font-black text-[12px] border-zinc-200 text-zinc-400 px-10 py-3 rounded-full bg-white shadow-xl">High-Brand Asset Registry</Badge>
                            <h2 className="text-6xl md:text-[10rem] font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-[0.8]">Master <br /> Tool Library</h2>
                            <div className="flex justify-center pt-10">
                                <p className="text-xl md:text-4xl text-zinc-500 italic font-medium max-w-3xl leading-[1.1] border-l-8 border-zinc-200 pl-12 text-left">Sovereign-tier technical assets engineered for institutional authority and absolute readability.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-[90rem] mx-auto">
                            <TaskSnippetGlass 
                                accentColor="text-blue-600"
                                title="Guest Arrival"
                                audit="VIP Reception Readiness (SOP-01)"
                                action="Verify celebration amenities and personalized greetings are placed 30m before check-in."
                                risk="Loss of high-LTV loyalty and negative review escalation."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-emerald-600"
                                title="Thermal Integrity"
                                audit="Cold-Chain Validation (HACCP CCP-1)"
                                action="Log fridge temps: Target 1°C to 4°C. Calibrate probe using ice-point method."
                                risk="Pathogen growth, total inventory loss, and health department sealing."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-amber-600"
                                title="LOTO Safety"
                                audit="Mechanical Maintenance Lock-out (OSHA)"
                                action="Physically confirm all energy isolation points are tagged and padlocked before entry."
                                risk="Fatal industrial accident, severe legal liability, and production shutdown."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-indigo-600"
                                title="Data Security"
                                audit="Privileged Access Review (ISO 27001)"
                                action="Audit admin logs for unauthorized access patterns and stale user accounts."
                                risk="Uncontrolled data breach and massive regulatory penalties."
                            />
                        </div>

                        {/* LIVE ANALYTICS HUD (Executive Monitor) */}
                        <div className="mt-40 max-w-7xl mx-auto p-20 md:p-32 rounded-[6rem] border-t border-l border-white bg-white/70 backdrop-blur-[120px] shadow-[0_100px_200px_-30px_rgba(0,0,0,0.15)] space-y-32 transition-all hover:bg-white ring-1 ring-black/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
                                <Target className="w-[45rem] h-[45rem]" />
                            </div>
                            
                            <div className="flex flex-col xl:flex-row items-center justify-between gap-24 border-b border-zinc-100 pb-24 relative z-10">
                                <div className="space-y-10 text-center xl:text-left max-w-xl">
                                    <div className="flex items-center gap-4 justify-center xl:justify-start">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[14px] font-black uppercase text-blue-600 tracking-[1em] font-headline">/ Live Portfolio Pulse</span>
                                    </div>
                                    <h3 className="text-7xl md:text-9xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-none">Sovereign <br /> Monitor.</h3>
                                </div>
                                
                                <div className="flex flex-wrap items-center justify-center gap-12 bg-zinc-50/80 p-12 rounded-[5rem] border border-zinc-100 shadow-inner">
                                    {[
                                        { v: "92%", l: "STATUS", c: "text-emerald-600" },
                                        { v: "04", l: "RISKS", c: "text-red-600" },
                                        { v: "120", l: "MISSIONS", c: "text-blue-600" }
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
                                    { t: "Role Mastery", d: "Aggregated staff performance metrics and competency logs.", i: GraduationCap },
                                    { t: "Uptime Sync", d: "Real-time infrastructure vitals and critical utility monitor.", i: Zap },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail mapped to international standards.", i: ClipboardCheck }
                                ].map((feat, i) => (
                                    <div key={i} className="flex flex-col gap-10 group">
                                        <div className="w-24 h-24 rounded-[3rem] bg-white border border-zinc-100 flex items-center justify-center text-zinc-300 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shadow-xl">
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
