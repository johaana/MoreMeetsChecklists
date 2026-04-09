
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
    CheckCircle2,
    ShieldCheck,
    LayoutGrid,
    Clock,
    FileSpreadsheet,
    Lock,
    Activity
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

const HeroVariation = ({ id, badge, glowClass, titleColor2, accentClass, btnClass }: any) => (
    <section id={id} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
        {/* Clear Cinematic Video */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
        </div>
        
        <div className="container px-6 relative z-10 mx-auto">
            <div className="max-w-lg relative group"> 
                {/* Technical Engine Glow */}
                <div className={cn("absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse-soft", glowClass)} />
                
                {/* The Compact Glass Rectangle Block */}
                <div className="relative z-10 p-8 md:p-10 rounded-[2.5rem] border border-white/40 bg-white/90 backdrop-blur-2xl space-y-6 shadow-2xl transition-all duration-500 hover:bg-white/95">
                    <div className="space-y-4">
                        <Badge variant="outline" className={cn("uppercase tracking-[0.4em] font-black text-[10px] px-4 py-1 rounded-full border-none", accentClass)}>
                            {badge}
                        </Badge>
                        
                        <div className="space-y-1">
                            <h1 className="text-4xl md:text-5xl font-black font-headline uppercase italic tracking-tighter leading-[0.85]">
                                <span className="text-zinc-900">CAPTURE</span> <br/>
                                <span className={titleColor2}>MEMORY.</span>
                            </h1>
                            <p className="text-sm md:text-base text-zinc-600 italic font-medium leading-relaxed border-l-2 border-zinc-200 pl-4">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                        </div>

                        {/* Technical Specs - High Density */}
                        <div className="grid grid-cols-1 gap-2 pt-2">
                            {SYSTEM_SPECS.map((spec, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={cn("w-1.5 h-1.5 rounded-full", titleColor2.replace('text-', 'bg-').split(' ')[0] || 'bg-primary')} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-500 italic">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button className={cn("h-14 px-8 font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-[1.02] transition-all w-full", btnClass)}>
                        Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-6 md:p-8 rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl space-y-5 hover:bg-white/90 transition-all group flex flex-col justify-between h-full">
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-lg bg-zinc-100/50 border border-white/20", accentColor)}>
                    <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-lg md:text-2xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-4">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><SearchCheck className="w-3.5 h-3.5"/> AUDIT (TECHNICAL)</span>
                    <p className="text-xs md:text-sm font-bold italic leading-tight text-zinc-800">{audit}</p>
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><GraduationCap className="w-3.5 h-3.5"/> ACTION (TRAINER)</span>
                    <p className="text-xs md:text-sm font-medium italic text-zinc-600 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-4 border-t border-zinc-200/50">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3.5 h-3.5"/> RISK (CONSEQUENCE)</span>
            <p className="text-[10px] md:text-xs text-red-600 font-black uppercase italic pt-1">{risk}</p>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* OPTION 1: GOLD COMMAND (Prestige) */}
                <HeroVariation 
                    id="gold"
                    badge="1. The Gold Command"
                    glowClass="bg-amber-500/20"
                    titleColor2="text-amber-600"
                    accentClass="bg-amber-50 text-amber-600"
                    btnClass="bg-amber-600 text-white"
                />

                {/* OPTION 2: SOVEREIGN BLUE (Trust) */}
                <HeroVariation 
                    id="blue"
                    badge="2. Institutional Sky"
                    glowClass="bg-blue-500/20"
                    titleColor2="text-blue-600"
                    accentClass="bg-blue-50 text-blue-600"
                    btnClass="bg-blue-600 text-white"
                />

                {/* OPTION 3: EXECUTIVE EMERALD (Authority) */}
                <HeroVariation 
                    id="green"
                    badge="3. Executive Emerald"
                    glowClass="bg-emerald-500/20"
                    titleColor2="text-emerald-700"
                    accentClass="bg-emerald-50 text-emerald-700"
                    btnClass="bg-emerald-700 text-white"
                />

                {/* OPTION 4: MINIMALIST ONYX (Clarity) */}
                <HeroVariation 
                    id="minimal"
                    badge="4. Minimalist Onyx"
                    glowClass="bg-zinc-400/20"
                    titleColor2="text-zinc-500"
                    accentClass="bg-zinc-100 text-zinc-900"
                    btnClass="bg-black text-white"
                />

                {/* OPTION 5: INDUSTRIAL COPPER (Stability) */}
                <HeroVariation 
                    id="copper"
                    badge="5. Industrial Copper"
                    glowClass="bg-orange-500/20"
                    titleColor2="text-orange-700"
                    accentClass="bg-orange-100 text-orange-800"
                    btnClass="bg-orange-700 text-white"
                />

                {/* SHARED COMPONENT LAB: GLASS RECTANGLE STANDARD */}
                <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
                    {/* Subtle Technical Backdrop */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />

                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.3em] font-black text-[10px] border-zinc-200">Universal Glass Standard</Badge>
                            <h2 className="text-4xl md:text-6xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-tight">Block-First Architecture</h2>
                            <p className="text-sm md:text-base text-zinc-500 italic font-medium">Standardized glassmorphic rectangles for high-gravity institutional documentation.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                            <TaskSnippetGlass 
                                accentColor="text-blue-600"
                                title="Guest Arrival Protocol"
                                audit="Tier-1 VIP Reception Readiness (SOP-01)"
                                action="Verify celebration amenities and personalized greetings are placed 30m before check-in."
                                risk="Loss of high-LTV loyalty and negative luxury ranking during audit."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-emerald-600"
                                title="Thermal Integrity"
                                audit="Cold-Chain Validation (HACCP CCP-1)"
                                action="Log fridge temps: Target 1°C to 4°C. Calibrate probe using ice-point method."
                                risk="Pathogen growth, mass inventory loss, and health department sealing."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-amber-600"
                                title="LOTO Safety Audit"
                                audit="Mechanical Maintenance Lock-out (OSHA)"
                                action="Physically confirm all energy isolation points are tagged and padlocked before entry."
                                risk="Fatal industrial accident, severe legal liability, and production shutdown."
                            />
                            <TaskSnippetGlass 
                                accentColor="text-pink-600"
                                title="Clinical Sterility"
                                audit="OT Sterility Spore Test Validation"
                                action="Verify black-strip indication on instrument sets and check biological indicator logs."
                                risk="Post-operative infection outbreak and total loss of hospital license."
                            />
                        </div>

                        {/* GLASS ANALYTICS PREVIEW */}
                        <div className="mt-20 max-w-5xl mx-auto p-8 md:p-12 rounded-[2.5rem] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-2xl space-y-10">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-zinc-200/50 pb-8">
                                <div className="space-y-1 text-center md:text-left">
                                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.4em]">Live Unit Health</span>
                                    <h3 className="text-3xl md:text-4xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-4 bg-white/40 p-2 rounded-2xl border border-white/40">
                                    <div className="text-center px-4 border-r border-zinc-200/50">
                                        <p className="text-2xl font-black text-emerald-600">92%</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">STATUS</p>
                                    </div>
                                    <div className="text-center px-4 border-r border-zinc-200/50">
                                        <p className="text-2xl font-black text-amber-600">04</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">RISKS</p>
                                    </div>
                                    <div className="text-center px-4">
                                        <p className="text-2xl font-black text-blue-600">120</p>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Asset Uptime", d: "Utility vitals monitor.", i: Cpu },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: ShieldCheck }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-white/20 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                            <feat.i className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <h4 className="font-black uppercase italic tracking-tighter text-sm text-zinc-900">{feat.t}</h4>
                                            <p className="text-[10px] text-zinc-500 font-medium italic">{feat.d}</p>
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
