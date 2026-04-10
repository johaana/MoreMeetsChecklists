
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
    Maximize2
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

const SignatureSpine = ({ color }: { color: string }) => (
    <div className="w-2.5 h-20 mt-1 shrink-0" style={{ backgroundColor: color }} />
);

const HUDModule = ({ label, value, color, dark = false }: { label: string, value: string, color: string, dark?: boolean }) => (
    <div className={cn(
        "p-6 rounded-2xl backdrop-blur-[80px] border-t border-l shadow-xl ring-1 ring-black/5 flex flex-col gap-1 min-w-[160px]",
        dark ? "bg-black/40 border-white/10" : "bg-white/40 border-white"
    )}>
        <span className={cn("text-[9px] font-black uppercase tracking-[0.4em] opacity-40", dark ? "text-white" : "text-zinc-950")}>{label}</span>
        <p className={cn("text-xl font-black italic tracking-tighter", dark ? "text-white" : "text-zinc-950")}>{value}</p>
        <div className={cn("w-full h-0.5 mt-2 relative overflow-hidden", dark ? "bg-white/10" : "bg-zinc-100")}>
            <div className="absolute inset-y-0 left-0 w-3/4 animate-shimmer" style={{ backgroundColor: color }} />
        </div>
    </div>
);

/**
 * --- ARCHETYPE 01: PLATINUM PRESTIGE (PRESERVED) ---
 */
const PrestigeHero = ({ accentColor, label, dark = false }: any) => (
    <section className={cn("relative w-full min-h-screen flex items-center overflow-hidden border-b", dark ? "bg-zinc-950 border-white/10" : "bg-white border-zinc-100")}>
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.2]" />
            <div className={cn("absolute inset-0", dark ? "bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" : "bg-gradient-to-r from-white via-white/95 via-white/40 to-transparent")} />
        </div>

        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-20 items-center">
            <div className="space-y-16">
                <div className="space-y-8">
                    <Badge variant="outline" className={cn("text-[10px] font-black uppercase tracking-[0.6em] px-6 py-2 rounded-full", dark ? "border-white/20 text-white/40" : "border-zinc-200 text-zinc-400")}>
                        {label}
                    </Badge>
                    <div className="space-y-4">
                        <h1 className={cn("text-6xl md:text-[10rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter", dark ? "text-white" : "text-zinc-950")}>
                            CAPTURE <br />
                            <span style={{ color: accentColor }}>MEMORY.</span>
                        </h1>
                    </div>
                    <div className="flex gap-10 items-start">
                        <SignatureSpine color={accentColor} />
                        <p className={cn("text-xl md:text-3xl italic font-medium leading-[1.1] max-w-sm", dark ? "text-zinc-400" : "text-zinc-600")}>
                            Institutional memory is an asset. <br /> 
                            <span className={dark ? "text-zinc-600" : "text-zinc-400"}>Anything else is just luck.</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-4">
                        {SYSTEM_SPECS.slice(0, 3).map((spec, i) => (
                            <div key={i} className={cn("flex items-center gap-3 px-6 py-3 rounded-full border", dark ? "bg-white/5 border-white/10" : "bg-zinc-50 border-zinc-100")}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className={cn("text-[10px] font-black uppercase tracking-widest", dark ? "text-white/40" : "text-zinc-400")}>{spec}</span>
                            </div>
                        ))}
                    </div>
                    <Button className="h-24 px-16 rounded-2xl font-black uppercase italic text-2xl tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 border-none transition-all flex items-center justify-center gap-4 w-fit" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY ENGINE <ArrowRight className="h-8 w-8" />
                    </Button>
                </div>
            </div>

            <div className="hidden lg:flex flex-col gap-6 items-end">
                <HUDModule label="OPERATIONAL PULSE" value="98.2%" color={accentColor} dark={dark} />
                <div className="translate-x-[-40px]">
                    <HUDModule label="RISK STATUS" value="ALL CLEAR" color={accentColor} dark={dark} />
                </div>
                <HUDModule label="ACTIVE MISSIONS" value="124" color={accentColor} dark={dark} />
            </div>
        </div>
    </section>
);

/**
 * --- ARCHETYPE 02: THE BENTO MATRIX (NEW) ---
 */
const BentoHero = ({ accentColor, label }: any) => (
    <section className="relative w-full min-h-screen flex items-center py-32 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-6 lg:px-24 relative z-10 mx-auto">
            <div className="max-w-4xl space-y-12 mb-20">
                <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.6em] px-6 py-2 rounded-full border-zinc-200 text-zinc-400">
                    {label}
                </Badge>
                <h1 className="text-6xl md:text-[8rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-zinc-950">
                    Bento <br />
                    <span style={{ color: accentColor }}>Matrix.</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                <div className="md:col-span-2 p-10 rounded-[3rem] bg-white border border-zinc-100 shadow-xl flex flex-col justify-between group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:scale-110 transition-transform">
                        <Activity className="w-64 h-64" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">/ NARRATIVE_ANCHOR</span>
                        <p className="text-2xl md:text-4xl italic font-medium leading-tight text-zinc-950 max-w-xl">
                            Convert individual brilliance into permanent organizational infrastructure.
                        </p>
                    </div>
                    <Button className="h-16 px-10 rounded-xl font-black uppercase italic text-sm tracking-widest shadow-xl w-fit" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        INITIATE DEPLOYMENT
                    </Button>
                </div>

                <div className="p-10 rounded-[3rem] bg-white border border-zinc-100 shadow-xl flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-zinc-50 flex items-center justify-center" style={{ color: accentColor }}>
                        <ClipboardCheck className="w-10 h-10" />
                    </div>
                    <p className="text-4xl font-black italic tracking-tighter text-zinc-950">120+</p>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">PRE-BUILT SOPs</span>
                </div>

                <div className="p-10 rounded-[3rem] bg-zinc-950 border border-white/10 shadow-2xl flex flex-col justify-center gap-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    <div className="flex items-center gap-4 text-white">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">LIVE_STATUS</span>
                    </div>
                    <p className="text-2xl font-black italic text-white uppercase tracking-tighter">Sovereign <br /> Uptime 99.9%</p>
                </div>

                <div className="md:col-span-2 p-10 rounded-[3rem] bg-white border border-zinc-100 shadow-xl flex items-center justify-between">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">SYSTEM_REQUIREMENTS</span>
                        <div className="flex gap-4">
                            {["Excel", "Sheets", "Offline-Ready"].map(s => (
                                <Badge key={s} variant="secondary" className="bg-zinc-50 text-zinc-500 uppercase text-[9px] font-black px-4 py-1">{s}</Badge>
                            ))}
                        </div>
                    </div>
                    <SignatureSpine color={accentColor} />
                </div>
            </div>
        </div>
    </section>
);

/**
 * --- ARCHETYPE 04: THE CENTRAL COMMAND LENS (NEW) ---
 */
const LensHero = ({ accentColor, label }: any) => (
    <section className="relative w-full h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto p-16 md:p-32 rounded-[6rem] bg-white/10 backdrop-blur-[120px] border border-white/20 shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)] space-y-12 ring-1 ring-white/10">
                <div className="space-y-6">
                    <Badge className="bg-white/5 text-white/60 border-white/10 uppercase tracking-[0.8em] font-black text-[10px] px-8 py-2 rounded-full">
                        {label}
                    </Badge>
                    <h1 className="text-6xl md:text-[9rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                        Master <br />
                        <span style={{ color: accentColor }}>Systems.</span>
                    </h1>
                </div>
                
                <p className="text-xl md:text-3xl text-white/60 italic font-medium max-w-2xl mx-auto leading-relaxed">
                    Capture the institutional history of your brand in a single, high-refraction data engine.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10">
                    <Button className="h-20 px-16 rounded-2xl font-black uppercase italic text-xl tracking-widest shadow-2xl hover:scale-105 transition-all border-none" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY ENGINE <ArrowRight className="ml-4 h-6 w-6" />
                    </Button>
                    <div className="flex gap-6 text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
                        <span>Zero SaaS</span>
                        <div className="w-px h-4 bg-white/10" />
                        <span>Offline Ready</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/**
 * --- ARCHETYPE 05: THE SIDE MATRIX CONTROL (NEW) ---
 */
const MatrixHero = ({ accentColor, label }: any) => (
    <section className="relative w-full h-screen flex bg-white overflow-hidden border-b border-zinc-100">
        <div className="w-[45%] h-full bg-zinc-950 p-16 md:p-24 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="relative z-10 space-y-10">
                <Badge variant="outline" className="border-white/20 text-white/40 uppercase tracking-[0.6em] font-black text-[10px] px-6 py-2 rounded-none">
                    {label}
                </Badge>
                <h1 className="text-6xl md:text-[7rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                    Side <br />
                    <span style={{ color: accentColor }}>Matrix.</span>
                </h1>
                <div className="flex gap-8 items-start">
                    <div className="w-2 h-20 shrink-0" style={{ backgroundColor: accentColor }} />
                    <p className="text-xl text-white/40 italic font-medium leading-tight max-w-sm">
                        Surgical precision for large-scale multi-unit operations.
                    </p>
                </div>
            </div>

            <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                    {SYSTEM_SPECS.map(s => (
                        <div key={s} className="flex items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-widest italic">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                            {s}
                        </div>
                    ))}
                </div>
                <Button className="h-20 w-full rounded-none font-black uppercase italic text-lg tracking-widest shadow-2xl hover:brightness-110 transition-all border-none" style={{ backgroundColor: accentColor, color: '#fff' }}>
                    EXECUTE COMMAND
                </Button>
            </div>
        </div>

        <div className="flex-1 relative bg-zinc-50">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-16 right-16 flex flex-col gap-6">
                <HUDModule label="MATRIX_SYNC" value="ACTIVE" color={accentColor} />
                <HUDModule label="RELIABILITY" value="99.9%" color={accentColor} />
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
                
                {/* 1. PRESTIGE WHITE (Option 1 - Preserved) */}
                <PrestigeHero 
                    label="ARCHETYPE 01: PLATINUM PRESTIGE"
                    accentColor="#f5a623"
                />

                {/* 2. BENTO MATRIX (New Design) */}
                <BentoHero 
                    label="ARCHETYPE 02: BENTO COMMAND"
                    accentColor="#2563eb"
                />

                {/* 3. OBSIDIAN COMMAND (Option 3 - Preserved) */}
                <PrestigeHero 
                    label="ARCHETYPE 03: OBSIDIAN COMMAND"
                    accentColor="#10b981"
                    dark={true}
                />

                {/* 4. CENTRAL LENS (New Design) */}
                <LensHero 
                    label="ARCHETYPE 04: THE COMMAND LENS"
                    accentColor="#6366f1"
                />

                {/* 5. SIDE MATRIX (New Design) */}
                <MatrixHero 
                    label="ARCHETYPE 05: SIDE MATRIX CONTROL"
                    accentColor="#3f3f46"
                />

                {/* TECHNICAL COMPONENT REGISTRY */}
                <section className="py-32 md:py-56 bg-zinc-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-5xl mx-auto text-center space-y-10 mb-32">
                            <Badge variant="outline" className="uppercase tracking-[0.8em] font-black text-[12px] border-zinc-200 text-zinc-400 px-10 py-3 rounded-full bg-white shadow-xl">High-Brand Asset Registry</Badge>
                            <h2 className="text-6xl md:text-[10rem] font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-[0.8]">Master <br /> Tool Library.</h2>
                            <div className="flex justify-center pt-10">
                                <p className="text-xl md:text-4xl text-zinc-500 italic font-medium max-w-3xl leading-[1.1] border-l-8 border-zinc-200 pl-12 text-left">
                                    Sovereign-tier technical assets engineered for institutional authority and absolute readability.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 max-w-[90rem] mx-auto">
                            <TaskCard 
                                color="#2563eb"
                                title="Guest Arrival"
                                audit="VIP Reception Readiness (SOP-01)"
                                action="Verify celebration amenities and personalized greetings are placed 30m before check-in."
                                risk="Loss of high-LTV loyalty and negative review escalation."
                            />
                            <TaskCard 
                                color="#10b981"
                                title="Thermal Integrity"
                                audit="Cold-Chain Validation (HACCP CCP-1)"
                                action="Log fridge temps: Target 1°C to 4°C. Calibrate probe using ice-point method."
                                risk="Pathogen growth, inventory loss, and health department sealing."
                            />
                            <TaskCard 
                                color="#f5a623"
                                title="LOTO Safety"
                                audit="Mechanical Maintenance Lock-out (OSHA)"
                                action="Physically confirm all energy isolation points are tagged and padlocked before entry."
                                risk="Fatal industrial accident and production shutdown."
                            />
                            <TaskCard 
                                color="#6366f1"
                                title="Data Security"
                                audit="Privileged Access Review (ISO 27001)"
                                action="Audit admin logs for unauthorized access patterns and stale user accounts."
                                risk="Uncontrolled data breach and massive regulatory penalties."
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
                                        <span className="text-[14px] font-black uppercase text-zinc-400 tracking-[1em] font-headline">/ Live Portfolio Pulse</span>
                                    </div>
                                    <h3 className="text-7xl md:text-9xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-none">Sovereign <br /> Monitor.</h3>
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
                                    { t: "Role Mastery", d: "Aggregated staff performance metrics and competency logs.", i: GraduationCap },
                                    { t: "Uptime Sync", d: "Real-time infrastructure vitals and critical utility monitor.", i: Zap },
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
