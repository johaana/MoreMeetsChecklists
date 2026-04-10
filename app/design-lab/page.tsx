
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
    LayoutGrid,
    ShieldCheck,
    ClipboardCheck,
    Activity,
    Lock,
    Smartphone,
    MousePointer2,
    PanelsTopLeft,
    PanelLeft,
    Monitor,
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

// --- SIGNATURE HERO PROTOTYPES ---

const BentoHero = ({ accentColor, glowClass }: any) => (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black border-b border-white/5">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[0.2]" />
        <div className="container px-6 relative z-10 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-6xl mx-auto">
                {/* Main Narrative Block */}
                <div className="lg:col-span-8 p-10 md:p-16 rounded-[2.5rem] border border-white/20 bg-white/40 backdrop-blur-[100px] shadow-2xl relative group">
                    <div className={cn("absolute -inset-10 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity", glowClass)} />
                    <div className="relative z-10 space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-[0.85] text-zinc-900">
                            CAPTURE <br/><span style={{ color: accentColor }}>MEMORY.</span>
                        </h1>
                        <p className="text-xl text-zinc-800 italic font-medium leading-relaxed border-l-4 border-zinc-400/30 pl-8 max-w-md">
                            Institutional memory is an asset. <br /> Anything else is just luck.
                        </p>
                        <Button className="h-16 px-10 font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-[1.02] transition-all text-white" style={{ backgroundColor: accentColor }}>
                            DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </div>
                </div>
                {/* Bento Specs */}
                <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
                    {SYSTEM_SPECS.map((spec, i) => (
                        <div key={i} className="p-6 rounded-[2rem] border border-white/20 bg-white/40 backdrop-blur-[80px] shadow-lg flex items-center justify-center text-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 italic leading-tight">{spec}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-10"><p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Archetype 1: The Bento Command</p></div>
    </section>
);

const SideRailHero = ({ accentColor, glowClass }: any) => (
    <section className="relative w-full h-screen overflow-hidden bg-black border-b border-white/5">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[450px] bg-white/40 backdrop-blur-[120px] border-r border-white/20 p-12 flex flex-col justify-center gap-12 shadow-[20px_0_50px_rgba(0,0,0,0.2)]">
            <div className={cn("absolute -inset-20 left-0 rounded-full blur-[100px] opacity-20", glowClass)} />
            <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-black font-headline uppercase italic tracking-tighter leading-[0.85] text-zinc-900">
                        CAPTURE <br/><span style={{ color: accentColor }}>MEMORY.</span>
                    </h1>
                    <p className="text-lg text-zinc-800 italic font-medium leading-relaxed border-l-4 border-zinc-400/30 pl-6">
                        Institutional memory is an asset. <br /> Anything else is just luck.
                    </p>
                </div>
                <div className="space-y-4">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em]">SYSTEM_VITALS</span>
                    <div className="space-y-3">
                        {SYSTEM_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-900 italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Button className="h-16 px-10 font-black uppercase italic rounded-xl border-none shadow-xl text-white" style={{ backgroundColor: accentColor }}>
                    GO LIVE NOW <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
            </div>
        </div>
        <div className="absolute bottom-10 right-10"><p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Archetype 2: The Side-Rail Rail</p></div>
    </section>
);

const HUDHero = ({ accentColor }: any) => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
        <div className="container relative z-10 mx-auto px-6">
            <div className="flex flex-col items-center gap-12">
                {/* Minimal HUD Title */}
                <div className="p-8 rounded-2xl border border-white/20 bg-white/45 backdrop-blur-[150px] shadow-2xl text-center space-y-4 max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-none text-zinc-900">
                        CAPTURE <span style={{ color: accentColor }}>MEMORY.</span>
                    </h1>
                    <p className="text-lg text-zinc-800 italic font-medium">Institutional memory is an asset. Anything else is just luck.</p>
                </div>
                {/* Instrument Cluster */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                    {SYSTEM_SPECS.map((spec, i) => (
                        <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/30 backdrop-blur-md text-center group hover:bg-white/50 transition-all border-t-white/40">
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900 group-hover:text-primary transition-colors">{spec}</span>
                        </div>
                    ))}
                </div>
                <Button className="h-20 px-16 font-black uppercase italic rounded-2xl border-none shadow-2xl text-white text-xl" style={{ backgroundColor: accentColor }}>
                    INITIATE DEPLOYMENT <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
            </div>
        </div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2"><p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Archetype 3: The Technical HUD</p></div>
    </section>
);

const ControlBarHero = ({ accentColor }: any) => (
    <section className="relative w-full h-screen overflow-hidden bg-black border-b border-white/5">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-10 md:p-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
                <div className="space-y-6 max-w-2xl">
                    <h1 className="text-6xl md:text-8xl font-black font-headline uppercase italic tracking-tighter leading-[0.8] text-white">
                        CAPTURE <br/><span style={{ color: accentColor }}>MEMORY.</span>
                    </h1>
                    <p className="text-xl text-white/60 italic font-medium leading-relaxed border-l-4 border-white/20 pl-8">
                        Institutional memory is an asset. <br /> Anything else is just luck.
                    </p>
                </div>
                
                <div className="p-10 rounded-[3rem] border border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl space-y-8 w-full md:w-[450px]">
                    <div className="space-y-3">
                        {SYSTEM_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900 italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                    <Button className="h-16 px-10 font-black uppercase italic rounded-xl border-none shadow-xl w-full text-white" style={{ backgroundColor: accentColor }}>
                        DEPLOY NOW <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute top-24 right-10"><p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Archetype 4: The Bottom Control Bar</p></div>
    </section>
);

const LensHero = ({ accentColor, glowClass }: any) => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black border-b border-white/5">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 p-12 md:p-24 rounded-[4rem] border border-white/30 border-t-white/60 border-l-white/60 bg-white/45 backdrop-blur-[120px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.5)] max-w-3xl text-center space-y-12 group transition-all hover:bg-white/50">
            <div className={cn("absolute -inset-40 rounded-full blur-[150px] opacity-30 group-hover:opacity-50 transition-all duration-1000", glowClass)} />
            <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-6xl md:text-[6rem] font-black font-headline uppercase italic tracking-tighter leading-[0.85] text-zinc-900">
                        CAPTURE <br/><span style={{ color: accentColor }}>MEMORY.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-800 italic font-medium max-w-xl mx-auto leading-relaxed">
                        Institutional memory is an asset. <br /> Anything else is just luck.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-4">
                    {SYSTEM_SPECS.map((spec, i) => (
                        <span key={i} className="text-[10px] font-black uppercase tracking-widest text-zinc-900 italic opacity-60">{spec}</span>
                    ))}
                </div>
                <div className="pt-6">
                    <Button className="h-20 px-16 font-black uppercase italic rounded-2xl border-none shadow-2xl text-xl text-white" style={{ backgroundColor: accentColor }}>
                        GO LIVE: ₹999 <ArrowRight className="ml-4 h-7 w-7" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute top-24 left-10"><p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Archetype 5: The Refractive Lens</p></div>
    </section>
);

// --- SHARED COMPONENT LAB ---

const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/40 backdrop-blur-[80px] shadow-xl space-y-8 hover:bg-white/60 transition-all group flex flex-col justify-between h-full relative overflow-hidden">
        <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-5">
                <div className={cn("p-3 rounded-2xl bg-white/40 border border-white/20 shadow-sm transition-transform group-hover:scale-110", accentColor)}>
                    <Zap className="w-7 h-7" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-6">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-500"><SearchCheck className="w-4 h-4"/> AUDIT (TECHNICAL)</span>
                    <p className="text-base md:text-lg font-bold italic leading-tight text-zinc-900">{audit}</p>
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-500"><GraduationCap className="w-4 h-4"/> ACTION (TRAINER)</span>
                    <p className="text-base md:text-lg font-medium italic text-zinc-800 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-6 border-t border-zinc-200/50 relative z-10">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-4 h-4"/> RISK (CONSEQUENCE)</span>
            <p className="text-sm md:text-base text-red-600 font-black uppercase italic pt-2">{risk}</p>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* SECTION 1: THE BENTO COMMAND (Gold) */}
                <BentoHero 
                    glowClass="bg-amber-500/40"
                    accentColor="#f5a623"
                />

                {/* SECTION 2: THE LEFT RAIL (Blue) */}
                <SideRailHero 
                    glowClass="bg-blue-600/40"
                    accentColor="#2563eb"
                />

                {/* SECTION 3: THE TECHNICAL HUD (Emerald) */}
                <HUDHero 
                    accentColor="#10b981"
                />

                {/* SECTION 4: THE BOTTOM BAR (Indigo) */}
                <ControlBarHero 
                    accentColor="#6366f1"
                />

                {/* SECTION 5: THE REFRACTIVE LENS (Carbon) */}
                <LensHero 
                    glowClass="bg-zinc-400/40"
                    accentColor="#18181b"
                />

                {/* UNIVERSAL GLASS COMPONENT LIBRARY */}
                <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
                    {/* Subtle Blueprint Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.4em] font-black text-[10px] border-zinc-300 text-zinc-500 px-6 py-1.5 rounded-full bg-white/50">Universal Refraction Standard</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.9]">Technical <br /> Grid Assets</h2>
                            <p className="text-lg md:text-xl text-zinc-600 italic font-medium max-w-xl mx-auto leading-relaxed">High-contrast executive data on refractive glass blocks. Optimized for ocular comfort and speed.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
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
                                accentColor="text-purple-600"
                                title="Data Security"
                                audit="Privileged Access Review (ISO 27001)"
                                action="Audit admin logs for unauthorized access patterns and stale user accounts."
                                risk="Uncontrolled data breach and massive regulatory penalties."
                            />
                        </div>

                        {/* ANALYTICS GLASS MODULE */}
                        <div className="mt-20 max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/40 backdrop-blur-[100px] shadow-2xl space-y-16 transition-all hover:bg-white/50">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-zinc-200/50 pb-12">
                                <div className="space-y-3 text-center md:text-left">
                                    <span className="text-[11px] font-black uppercase text-blue-600 tracking-[0.5em] font-headline">/ Live Portfolio Health</span>
                                    <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-8 bg-white/40 p-4 rounded-[2.5rem] border border-white/40 shadow-inner">
                                    <div className="text-center px-8 border-r border-zinc-300/50">
                                        <p className="text-4xl font-black text-emerald-600">92%</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-2">STATUS</p>
                                    </div>
                                    <div className="text-center px-8 border-r border-zinc-300/50">
                                        <p className="text-4xl font-black text-red-600">04</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-2">RISKS</p>
                                    </div>
                                    <div className="text-center px-8">
                                        <p className="text-4xl font-black text-blue-600">120</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 pt-2">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-12">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Asset Uptime", d: "Utility vitals monitor.", i: Cpu },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: LayoutGrid }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/50 border border-white/40 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-sm">
                                            <feat.i className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic tracking-tighter text-lg text-zinc-900 leading-none">{feat.t}</h4>
                                            <p className="text-sm text-zinc-600 font-medium italic leading-tight">{feat.d}</p>
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
