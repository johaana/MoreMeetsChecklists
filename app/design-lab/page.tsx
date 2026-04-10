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
    Smartphone
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
 * --- SOVEREIGN SIGNATURE ARCHITECTURE v24.0 ---
 * The "Institutional Split" Standard.
 * Left: High-contrast white narrative field.
 * Right: Immersive cinematic video.
 * Transition: Refined white-to-transparent gradient.
 */

const SignatureHeadline = ({ accentColor, label1, label2 }: { accentColor: string, label1: string, label2: string }) => (
    <div className="space-y-8">
        <h1 className="text-6xl md:text-[8rem] font-black font-headline text-zinc-900 leading-[0.8] uppercase italic tracking-tighter">
            {label1} <br />
            <span style={{ color: accentColor }}>{label2}.</span>
        </h1>
        <div className="flex gap-8 items-start">
            <div className="w-2 h-16 mt-1 shrink-0" style={{ backgroundColor: accentColor }} />
            <p className="text-xl md:text-3xl text-zinc-500 italic font-medium leading-snug max-w-md">
                Institutional memory is an asset. <br /> 
                <span className="text-zinc-400">Anything else is just luck.</span>
            </p>
        </div>
    </div>
);

const ArchetypeSplit = ({ accentColor, label, label1 = "CAPTURE", label2 = "MEMORY" }: any) => (
    <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-white border-b border-zinc-100">
        {/* RIGHT: THE CINEMATIC WINDOW */}
        <div className="absolute top-0 right-0 w-2/3 h-full z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.2] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
        </div>

        {/* LEFT: THE COMMAND FIELD */}
        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            <div className="space-y-16">
                <SignatureHeadline accentColor={accentColor} label1={label1} label2={label2} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SYSTEM_SPECS.map((spec, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-white/40 backdrop-blur-3xl border border-white shadow-xl flex flex-col gap-3 hover:bg-white/80 transition-all ring-1 ring-black/5">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] block" style={{ color: accentColor }}>Module 0{i+1}</span>
                            <p className="text-xs font-black uppercase italic tracking-widest text-zinc-900 leading-tight">{spec}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <Button className="h-20 px-12 rounded-[2rem] font-black uppercase italic text-xl tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 border-none transition-all" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY MASTER ENGINE V11.9 <ArrowRight className="ml-4 h-7 w-7" />
                    </Button>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 ml-4">WORKS ON EXCEL & GOOGLE SHEETS • NO SaaS</p>
                </div>
            </div>
        </div>

        {/* INSTITUTIONAL METADATA */}
        <div className="absolute top-24 right-10 flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400">{label}</span>
            <div className="w-16 h-px bg-zinc-200" />
        </div>
    </section>
);

// Component: Technical Task Glass Block (Daylight Optimized)
const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-10 rounded-[3rem] border border-white bg-white/65 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] space-y-10 hover:bg-white/90 transition-all group flex flex-col justify-between h-full relative overflow-hidden ring-1 ring-black/5">
        <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-6">
                <div className={cn("p-4 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm transition-transform group-hover:scale-110", accentColor)}>
                    <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-8">
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3 text-zinc-400"><SearchCheck className="w-5 h-5"/> AUDIT (TECHNICAL)</span>
                    <p className="text-lg md:text-xl font-bold italic leading-tight text-zinc-900">{audit}</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3 text-zinc-400"><GraduationCap className="w-5 h-5"/> ACTION (TRAINER)</span>
                    <p className="text-lg md:text-xl font-medium italic text-zinc-600 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-8 border-t border-zinc-100 relative z-10">
            <span className="text-[11px] font-black text-red-600/60 uppercase tracking-[0.4em] flex items-center gap-3"><ShieldAlert className="w-5 h-5"/> RISK (CONSEQUENCE)</span>
            <p className="text-base md:text-lg text-red-600 font-black uppercase italic pt-3">{risk}</p>
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

                {/* 4. ELECTRIC ORCHID (Innovation Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 04: CREATIVE ORCHID"
                    accentColor="#8b5cf6"
                />

                {/* 5. STEEL CARBON (Brutalist Variant) */}
                <ArchetypeSplit 
                    label="VARIATION 05: COMMAND CARBON"
                    accentColor="#3f3f46"
                />

                {/* UNIVERSAL COMPONENT HUB (Expert Standard) */}
                <section className="py-24 md:py-40 bg-zinc-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
                            <Badge variant="outline" className="uppercase tracking-[0.6em] font-black text-[11px] border-zinc-200 text-zinc-400 px-8 py-2.5 rounded-full bg-white shadow-sm">High-Brand Component Registry</Badge>
                            <h2 className="text-5xl md:text-9xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.8]">Technical <br /> Glass Library</h2>
                            <p className="text-xl md:text-3xl text-zinc-500 italic font-medium max-w-2xl mx-auto leading-relaxed border-l-4 border-zinc-200 pl-10 mt-8">Daylight-optimized technical assets engineered for maximum readability and visual authority.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-7xl mx-auto">
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

                        {/* LIVE ANALYTICS HUD (Light Standard) */}
                        <div className="mt-32 max-w-6xl mx-auto p-16 md:p-24 rounded-[5rem] border border-white bg-white/70 backdrop-blur-[100px] shadow-[0_80px_160px_-20px_rgba(0,0,0,0.12)] space-y-24 transition-all hover:bg-white/90 ring-1 ring-black/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-16 opacity-[0.03]">
                                <Activity className="w-[30rem] h-[30rem]" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center justify-between gap-16 border-b border-zinc-100 pb-20 relative z-10">
                                <div className="space-y-6 text-center md:text-left">
                                    <span className="text-[12px] font-black uppercase text-blue-600 tracking-[0.8em] font-headline">/ Live Portfolio Health</span>
                                    <h3 className="text-6xl md:text-8xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-12 bg-zinc-50/80 p-8 rounded-[4rem] border border-zinc-100 shadow-inner">
                                    <div className="text-center px-12 border-r border-zinc-200">
                                        <p className="text-6xl font-black text-emerald-600">92%</p>
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 pt-4">STATUS</p>
                                    </div>
                                    <div className="text-center px-12 border-r border-zinc-200">
                                        <p className="text-6xl font-black text-red-600">04</p>
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 pt-4">RISKS</p>
                                    </div>
                                    <div className="text-center px-12">
                                        <p className="text-6xl font-black text-blue-600">120</p>
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 pt-4">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-20 relative z-10">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Uptime Sync", d: "Utility vitals monitor.", i: Zap },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: LayoutGrid }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-10 group">
                                        <div className="w-20 h-20 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shadow-sm">
                                            <feat.i className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-black uppercase italic tracking-tighter text-2xl text-zinc-900 leading-none">{feat.t}</h4>
                                            <p className="text-base text-zinc-500 font-medium italic leading-tight">{feat.d}</p>
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
