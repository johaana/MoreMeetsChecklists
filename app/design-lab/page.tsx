
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
    Search
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

const HeroVariation = ({ id, title, badge, accentText, accentBg, glowClass }: any) => (
    <section id={id} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black border-b border-white/10">
        {/* Full-Clarity Cinematic Video */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-6 relative z-10 mx-auto">
            <div className="max-w-xl relative group"> 
                {/* Dynamic Technical Glow */}
                <div className={cn("absolute -inset-20 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000 animate-pulse-soft", glowClass)} />
                
                {/* 40% Hyper-Translucent Glass Card */}
                <div className="relative z-10 p-10 md:p-16 rounded-[3.5rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/40 backdrop-blur-[100px] space-y-10 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] transition-all duration-500 hover:bg-white/45">
                    <div className="space-y-8">
                        <div className="w-20 h-2 rounded-full opacity-80" style={{ backgroundColor: accentBg }} />
                        
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-[0.85] text-zinc-900">
                                CAPTURE <br/>
                                <span style={{ color: accentText }}>MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-700 italic font-medium leading-relaxed border-l-4 border-zinc-400/30 pl-8">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                        </div>

                        {/* High-Density Technical Specs */}
                        <div className="space-y-3 pt-2">
                            {SYSTEM_SPECS.map((spec, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentBg }} />
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-800 italic">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button className="h-20 px-12 font-black uppercase italic rounded-2xl border-none shadow-2xl hover:scale-[1.02] active:scale-95 transition-all w-full text-lg tracking-widest text-white" style={{ backgroundColor: accentBg }}>
                        Deploy System Now <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/60">
            <p className="text-[10px] font-black uppercase tracking-[0.5em]">{badge}</p>
        </div>
    </section>
);

const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-10 rounded-[3rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/40 backdrop-blur-[100px] shadow-xl space-y-8 hover:bg-white/50 transition-all group flex flex-col justify-between h-full">
        <div className="space-y-6">
            <div className="flex items-center gap-5">
                <div className={cn("p-3 rounded-2xl bg-white/40 border border-white/20 shadow-sm", accentColor)}>
                    <Zap className="w-7 h-7" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-6">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-500"><SearchCheck className="w-4 h-4"/> AUDIT (TECHNICAL)</span>
                    <p className="text-base md:text-lg font-bold italic leading-tight text-zinc-800">{audit}</p>
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-500"><GraduationCap className="w-4 h-4"/> ACTION (TRAINER)</span>
                    <p className="text-base md:text-lg font-medium italic text-zinc-700 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-6 border-t border-zinc-200/50">
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
                
                {/* ARCHETYPE 1: ROYAL GOLD (Prestige) */}
                <HeroVariation 
                    id="gold"
                    badge="1. Royal Gold (High Prestige)"
                    glowClass="bg-amber-500/40"
                    accentText="#f5a623"
                    accentBg="#f5a623"
                />

                {/* ARCHETYPE 2: OCEANIC BLUE (Trust) */}
                <HeroVariation 
                    id="blue"
                    badge="2. Oceanic Blue (Asego Standard)"
                    glowClass="bg-blue-600/40"
                    accentText="#2563eb"
                    accentBg="#2563eb"
                />

                {/* ARCHETYPE 3: VIVID EMERALD (Safety) */}
                <HeroVariation 
                    id="emerald"
                    badge="3. Vivid Emerald (Safety Standard)"
                    glowClass="bg-emerald-500/40"
                    accentText="#10b981"
                    accentBg="#10b981"
                />

                {/* ARCHETYPE 4: ELECTRIC ORCHID (Tech) */}
                <HeroVariation 
                    id="orchid"
                    badge="4. Electric Orchid (Innovation)"
                    glowClass="bg-purple-600/40"
                    accentText="#9333ea"
                    accentBg="#9333ea"
                />

                {/* ARCHETYPE 5: STEEL CARBON (Industrial) */}
                <HeroVariation 
                    id="carbon"
                    badge="5. Steel Carbon (Grounded Focus)"
                    glowClass="bg-zinc-400/40"
                    accentText="#18181b"
                    accentBg="#18181b"
                />

                {/* HIGH-CONTRAST GLASS COMPONENT LIBRARY */}
                <section className="py-24 md:py-32 bg-zinc-100 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.4em] font-black text-[10px] border-zinc-300 text-zinc-500 px-6 py-1.5 rounded-full bg-white/50">Hyper-Translucent Hub</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.9]">Sovereign Glass <br /> Standards</h2>
                            <p className="text-lg md:text-xl text-zinc-600 italic font-medium max-w-xl mx-auto leading-relaxed">40% translucent blocks with 100px refraction engineered for daylight-optimized execution.</p>
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
                                <div className="flex items-center gap-8 bg-white/40 p-4 rounded-[2rem] border border-white/40 shadow-inner">
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
