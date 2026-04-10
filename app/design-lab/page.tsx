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
    CheckCircle2,
    Activity,
    ShieldCheck,
    Clock,
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
 * --- ULTRA PREMIUM LIGHT HERO ARCHITECTURE ---
 * Engineered for high-brand executive interfaces.
 * Uses complex glass physics (double-blur, refractive rim lighting).
 */

const SignatureHeadline = ({ accentColor }: { accentColor: string }) => (
    <div className="space-y-4">
        <h1 className="text-6xl md:text-[7.5rem] font-black font-headline text-zinc-900 leading-[0.85] uppercase italic tracking-tighter">
            CAPTURE <br />
            <span style={{ color: accentColor }}>MEMORY.</span>
        </h1>
        <div className="flex gap-6 items-start">
            <div className="w-1.5 h-12 mt-2" style={{ backgroundColor: accentColor }} />
            <p className="text-xl md:text-2xl text-zinc-500 italic font-medium leading-tight max-w-sm">
                Institutional memory is an asset. <br /> Anything else is just luck.
            </p>
        </div>
    </div>
);

// 1. Archetype: The Signature Command (Floating Rectangle)
const ArchetypeSignature = ({ accentColor, glowClass, label }: any) => (
    <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-white border-b border-zinc-100">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
        
        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            <SignatureHeadline accentColor={accentColor} />
            
            <div className="flex justify-end">
                <div className={cn("relative p-10 md:p-14 rounded-[3.5rem] border border-white/80 bg-white/45 backdrop-blur-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] space-y-10 group ring-1 ring-black/5")}>
                    <div className={cn("absolute -inset-10 rounded-full blur-[120px] opacity-20 transition-all duration-1000", glowClass)} />
                    <div className="space-y-5 relative z-10">
                        {SYSTEM_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-600 italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full h-20 rounded-[2rem] font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 border-none" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY NOW <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute top-24 right-10 flex items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">{label}</span>
            <div className="w-12 h-px bg-zinc-200" />
        </div>
    </section>
);

// 2. Archetype: The Vertical Pillar (Tablet Style)
const ArchetypePillar = ({ accentColor, glowClass, label }: any) => (
    <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/95 via-transparent to-transparent" />
        
        <div className="container px-6 lg:px-24 relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-[1fr,450px] h-full items-center">
            <SignatureHeadline accentColor={accentColor} />
            
            <div className="h-[80%] flex flex-col justify-center border-l border-zinc-200/50 pl-12">
                <div className="relative h-full max-h-[600px] w-full bg-white/40 backdrop-blur-[100px] rounded-[4rem] border border-white/60 shadow-2xl p-12 flex flex-col justify-between group overflow-hidden ring-1 ring-black/5">
                    <div className={cn("absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-30", glowClass)} />
                    <div className="space-y-8 relative z-10">
                        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border-zinc-200 text-zinc-400">Technical Briefing</Badge>
                        <div className="space-y-6">
                            {SYSTEM_SPECS.map((spec, i) => (
                                <div key={i} className="flex items-center gap-5 border-b border-zinc-900/5 pb-4">
                                    <span className="text-[10px] font-mono text-zinc-300">0{i+1}</span>
                                    <span className="text-xs font-black uppercase tracking-widest text-zinc-700 italic">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button className="w-full h-20 rounded-[2.5rem] font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 border-none" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        INITIATE <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute top-24 right-10 flex items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">{label}</span>
            <div className="w-12 h-px bg-zinc-200" />
        </div>
    </section>
);

// 3. Archetype: The Industrial Dashboard (Wide HUD)
const ArchetypeDashboard = ({ accentColor, glowClass, label }: any) => (
    <section className="relative w-full h-[95vh] flex items-center overflow-hidden bg-white border-b border-zinc-100">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-white/20" />
        
        <div className="container px-6 lg:px-24 relative z-10 mx-auto flex flex-col justify-center h-full">
            <div className="max-w-4xl mb-12">
                <SignatureHeadline accentColor={accentColor} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {SYSTEM_SPECS.map((spec, i) => (
                    <div key={i} className="bg-white/60 backdrop-blur-3xl border border-white p-8 rounded-[2rem] shadow-xl group hover:bg-white/80 transition-all ring-1 ring-black/5">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] block mb-4" style={{ color: accentColor }}>Module 0{i+1}</span>
                        <p className="text-sm font-black uppercase italic tracking-tighter text-zinc-900 leading-tight">{spec}</p>
                    </div>
                ))}
                <div className="lg:col-span-4 mt-4">
                    <Button className="w-full h-20 rounded-[2rem] font-black uppercase italic text-xl tracking-[0.2em] shadow-2xl border-none" style={{ backgroundColor: accentColor, color: '#fff' }}>
                        DEPLOY MASTER ENGINE V11.9 <ArrowRight className="ml-4 h-7 w-7" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute top-24 right-10 flex items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">{label}</span>
            <div className="w-12 h-px bg-zinc-200" />
        </div>
    </section>
);

// Component: Technical Task Glass Block
const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-10 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] space-y-8 hover:border-zinc-300 transition-all group flex flex-col justify-between h-full relative overflow-hidden ring-1 ring-black/5">
        <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-5">
                <div className={cn("p-3 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm transition-transform group-hover:scale-110", accentColor)}>
                    <Zap className="w-7 h-7" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-6">
                <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><SearchCheck className="w-4 h-4"/> AUDIT (TECHNICAL)</span>
                    <p className="text-base md:text-lg font-bold italic leading-tight text-zinc-900">{audit}</p>
                </div>
                <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><GraduationCap className="w-4 h-4"/> ACTION (TRAINER)</span>
                    <p className="text-base md:text-lg font-medium italic text-zinc-600 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-6 border-t border-zinc-100 relative z-10">
            <span className="text-[10px] font-black text-red-600/60 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-4 h-4"/> RISK (CONSEQUENCE)</span>
            <p className="text-sm md:text-base text-red-600 font-black uppercase italic pt-2">{risk}</p>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 1. PLATINUM GOLD (Archetype: Signature Command) */}
                <ArchetypeSignature 
                    label="TYPE 1: SIGNATURE COMMAND"
                    accentColor="#f5a623"
                    glowClass="bg-amber-500/20"
                />

                {/* 2. OCEANIC BLUE (Archetype: Vertical Pillar) */}
                <ArchetypePillar 
                    label="TYPE 2: VERTICAL HUD"
                    accentColor="#2563eb"
                    glowClass="bg-blue-500/20"
                />

                {/* 3. VIVID EMERALD (Archetype: Industrial Dashboard) */}
                <ArchetypeDashboard 
                    label="TYPE 3: WIDE HUD"
                    accentColor="#10b981"
                    glowClass="bg-emerald-500/20"
                />

                {/* 4. ELECTRIC ORCHID (Archetype: Signature Command) */}
                <ArchetypeSignature 
                    label="TYPE 4: CREATIVE TECH"
                    accentColor="#8b5cf6"
                    glowClass="bg-purple-500/20"
                />

                {/* 5. STEEL CARBON (Archetype: Vertical Pillar) */}
                <ArchetypePillar 
                    label="TYPE 5: BRUTALIST PILLAR"
                    accentColor="#3f3f46"
                    glowClass="bg-zinc-400/20"
                />

                {/* UNIVERSAL GLASS ASSET HUB (Expert Optimized) */}
                <section className="py-24 md:py-40 bg-zinc-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
                            <Badge variant="outline" className="uppercase tracking-[0.5em] font-black text-[10px] border-zinc-200 text-zinc-400 px-8 py-2 rounded-full bg-white shadow-sm">High-Brand Design System</Badge>
                            <h2 className="text-4xl md:text-8xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.85]">Technical <br /> Glass Grid</h2>
                            <p className="text-xl md:text-2xl text-zinc-500 italic font-medium max-w-2xl mx-auto leading-relaxed border-l-2 border-zinc-200 pl-8">Expert-tier documentation assets engineered for absolute clarity and prestigious visual weight.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto">
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

                        {/* LIGHT KEY ANALYTICS MODULE */}
                        <div className="mt-32 max-w-6xl mx-auto p-16 md:p-24 rounded-[5rem] border border-white bg-white/65 backdrop-blur-3xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] space-y-20 transition-all hover:bg-white/80 ring-1 ring-black/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                                <Activity className="w-96 h-96" />
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-zinc-100 pb-16 relative z-10">
                                <div className="space-y-4 text-center md:text-left">
                                    <span className="text-[11px] font-black uppercase text-blue-600 tracking-[0.6em] font-headline">/ Live Portfolio Health</span>
                                    <h3 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-10 bg-zinc-50/50 p-6 rounded-[3.5rem] border border-zinc-100 shadow-inner">
                                    <div className="text-center px-10 border-r border-zinc-200">
                                        <p className="text-5xl font-black text-emerald-600">92%</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-3">STATUS</p>
                                    </div>
                                    <div className="text-center px-10 border-r border-zinc-200">
                                        <p className="text-5xl font-black text-red-600">04</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-3">RISKS</p>
                                    </div>
                                    <div className="text-center px-10">
                                        <p className="text-5xl font-black text-blue-600">120</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-3">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-16 relative z-10">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Uptime Sync", d: "Utility vitals monitor.", i: Zap },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: LayoutGrid }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shadow-sm">
                                            <feat.i className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-black uppercase italic tracking-tighter text-xl text-zinc-900 leading-none">{feat.t}</h4>
                                            <p className="text-sm text-zinc-500 font-medium italic leading-tight">{feat.d}</p>
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
