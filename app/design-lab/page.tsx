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
 * --- ULTRA PREMIUM LIGHT HERO ARCHETYPE ---
 * Modeled after high-brand executive interfaces.
 * Optimized for Light backgrounds with dark typography.
 */
const UltraPremiumLightHero = ({ accentColor, glowClass, archetypeTitle }: any) => (
    <section className="relative w-full h-[90vh] flex items-center overflow-hidden bg-white border-b border-zinc-200">
        {/* Background Video - Higher opacity for clarity */}
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        
        {/* Light Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
        
        <div className="container px-6 lg:px-24 relative z-10 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
                
                {/* Left: Aggressive Narrative (Dark Text) */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-[7.5rem] font-black font-headline text-zinc-900 leading-[0.85] uppercase italic tracking-tighter">
                            CAPTURE <br />
                            <span style={{ color: accentColor }}>MEMORY.</span>
                        </h1>
                        <div className="flex gap-6 items-start">
                            <div className="w-1 h-12 bg-zinc-200 mt-2" />
                            <p className="text-xl md:text-2xl text-zinc-500 italic font-medium leading-tight max-w-sm">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Floating Glass Command Card */}
                <div className="relative group flex justify-center lg:justify-end">
                    {/* The Technical Pulse Glow */}
                    <div className={cn("absolute -inset-10 rounded-full blur-[120px] opacity-30 group-hover:opacity-40 transition-all duration-1000", glowClass)} />
                    
                    {/* The Light Glass Pane */}
                    <div className="w-full max-w-md p-10 md:p-12 rounded-[3.5rem] border border-white/60 bg-white/40 backdrop-blur-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] space-y-10 relative overflow-hidden ring-1 ring-black/5">
                        {/* Internal Rim Light */}
                        <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] pointer-events-none rounded-[3.5rem]" />
                        
                        <div className="space-y-4 relative z-10">
                            {SYSTEM_SPECS.map((spec, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-600 italic leading-none">{spec}</span>
                                </div>
                            ))}
                        </div>
                        
                        <Button 
                            className="w-full h-20 rounded-[2rem] font-black uppercase italic text-lg tracking-widest shadow-2xl transition-all hover:scale-[1.02] active:scale-95 border-none relative z-10"
                            style={{ backgroundColor: accentColor, color: '#fff' }}
                        >
                            DEPLOY NOW <ArrowRight className="ml-3 h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Archetype Label */}
        <div className="absolute top-24 right-10 flex items-center gap-3">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-400">{archetypeTitle}</span>
            <div className="w-12 h-px bg-zinc-200" />
        </div>
    </section>
);

/**
 * --- RECTANGULAR GLASS ASSET ---
 * Standardized for Light mode.
 */
const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] space-y-8 hover:border-zinc-300 transition-all group flex flex-col justify-between h-full relative overflow-hidden ring-1 ring-black/5">
        <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-5">
                <div className={cn("p-3 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm transition-transform group-hover:scale-110", accentColor)}>
                    <Zap className="w-7 h-7" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-6">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><SearchCheck className="w-4 h-4"/> AUDIT (TECHNICAL)</span>
                    <p className="text-base md:text-lg font-bold italic leading-tight text-zinc-900">{audit}</p>
                </div>
                <div className="space-y-1">
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
                
                {/* 1. PLATINUM GOLD (Prestige standard) */}
                <UltraPremiumLightHero 
                    archetypeTitle="ARCHETYPE 1: PLATINUM GOLD"
                    accentColor="#f5a623"
                    glowClass="bg-amber-500/20"
                />

                {/* 2. OCEANIC BLUE (Trust Focus) */}
                <UltraPremiumLightHero 
                    archetypeTitle="ARCHETYPE 2: OCEANIC BLUE"
                    accentColor="#2563eb"
                    glowClass="bg-blue-500/20"
                />

                {/* 3. VIVID EMERALD (Safety/Medical) */}
                <UltraPremiumLightHero 
                    archetypeTitle="ARCHETYPE 3: VIVID EMERALD"
                    accentColor="#10b981"
                    glowClass="bg-emerald-500/20"
                />

                {/* 4. ELECTRIC ORCHID (Creative Tech) */}
                <UltraPremiumLightHero 
                    archetypeTitle="ARCHETYPE 4: ELECTRIC ORCHID"
                    accentColor="#8b5cf6"
                    glowClass="bg-purple-500/20"
                />

                {/* 5. STEEL CARBON (Industrial) */}
                <UltraPremiumLightHero 
                    archetypeTitle="ARCHETYPE 5: STEEL CARBON"
                    accentColor="#3f3f46"
                    glowClass="bg-zinc-400/20"
                />

                {/* UNIVERSAL GLASS ASSET HUB (Daylight Optimized) */}
                <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
                    {/* Light Technical Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.4em] font-black text-[10px] border-zinc-200 text-zinc-400 px-6 py-1.5 rounded-full bg-white shadow-sm">Universal Light Component Standard</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.9]">Light Glass <br /> Grid Assets</h2>
                            <p className="text-lg md:text-xl text-zinc-500 italic font-medium max-w-xl mx-auto leading-relaxed">High-translucency, daylight-optimized documentation blocks. Designed for clarity, speed, and absolute contrast.</p>
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
                                accentColor="text-indigo-600"
                                title="Data Security"
                                audit="Privileged Access Review (ISO 27001)"
                                action="Audit admin logs for unauthorized access patterns and stale user accounts."
                                risk="Uncontrolled data breach and massive regulatory penalties."
                            />
                        </div>

                        {/* LIGHT KEY ANALYTICS MODULE */}
                        <div className="mt-20 max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] border border-white bg-white/60 backdrop-blur-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] space-y-16 transition-all hover:bg-white/80 ring-1 ring-black/5">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-b border-zinc-100 pb-12">
                                <div className="space-y-3 text-center md:text-left">
                                    <span className="text-[11px] font-black uppercase text-blue-600 tracking-[0.5em] font-headline">/ Live Portfolio Health</span>
                                    <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-8 bg-zinc-50/50 p-4 rounded-[2.5rem] border border-zinc-100 shadow-inner">
                                    <div className="text-center px-8 border-r border-zinc-200">
                                        <p className="text-4xl font-black text-emerald-600">92%</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-2">STATUS</p>
                                    </div>
                                    <div className="text-center px-8 border-r border-zinc-200">
                                        <p className="text-4xl font-black text-red-600">04</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-2">RISKS</p>
                                    </div>
                                    <div className="text-center px-8">
                                        <p className="text-4xl font-black text-blue-600">120</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-2">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-12">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Uptime Sync", d: "Utility vitals monitor.", i: Zap },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: LayoutGrid }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shadow-sm">
                                            <feat.i className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic tracking-tighter text-lg text-zinc-900 leading-none">{feat.t}</h4>
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
