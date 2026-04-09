
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
    ShieldCheck,
    LayoutGrid,
    Clock,
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

const HeroVariation = ({ id, badge, glowClass, accentText, accentBg, btnClass }: any) => (
    <section id={id} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
        {/* Cinematic Backdrop - 100% Clear */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
        
        <div className="container px-6 relative z-10 mx-auto">
            <div className="max-w-lg relative group"> 
                {/* Technical Pulse Glow */}
                <div className={cn("absolute -inset-6 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse-soft", glowClass)} />
                
                {/* High-Gravity Glass Card */}
                <div className="relative z-10 p-8 md:p-12 rounded-[2.5rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/90 backdrop-blur-3xl space-y-8 shadow-2xl transition-all duration-500 hover:bg-white/95">
                    <div className="space-y-6">
                        <Badge variant="outline" className={cn("uppercase tracking-[0.4em] font-black text-[10px] px-4 py-1.5 rounded-full border-none", accentBg, accentText)}>
                            {badge}
                        </Badge>
                        
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-6xl font-black font-headline uppercase italic tracking-tighter leading-[0.85] text-zinc-900">
                                CAPTURE <br/>
                                <span className={accentText}>MEMORY.</span>
                            </h1>
                            <p className="text-base md:text-lg text-zinc-600 italic font-medium leading-relaxed border-l-2 border-zinc-200 pl-6">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                        </div>

                        {/* Technical Specs - High Density */}
                        <div className="space-y-2.5 pt-2">
                            {SYSTEM_SPECS.map((spec, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={cn("w-1.5 h-1.5 rounded-full", accentBg)} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 italic">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button className={cn("h-16 px-10 font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-[1.02] transition-all w-full text-base tracking-widest", btnClass)}>
                        Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const TaskSnippetGlass = ({ title, audit, action, risk, accentColor }: any) => (
    <div className="p-8 rounded-[2.5rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/90 backdrop-blur-3xl shadow-xl space-y-6 hover:bg-white/95 transition-all group flex flex-col justify-between h-full">
        <div className="space-y-5">
            <div className="flex items-center gap-4">
                <div className={cn("p-2.5 rounded-xl bg-zinc-100/50 border border-white/20", accentColor)}>
                    <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-900">{title}</h4>
            </div>
            <div className="space-y-5">
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><SearchCheck className="w-4 h-4"/> AUDIT (TECHNICAL)</span>
                    <p className="text-sm md:text-base font-bold italic leading-tight text-zinc-800">{audit}</p>
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 text-zinc-400"><GraduationCap className="w-4 h-4"/> ACTION (TRAINER)</span>
                    <p className="text-sm md:text-base font-medium italic text-zinc-600 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>
        <div className="pt-5 border-t border-zinc-200/50">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-4 h-4"/> RISK (CONSEQUENCE)</span>
            <p className="text-xs md:text-sm text-red-600 font-black uppercase italic pt-1.5">{risk}</p>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* OPTION 1: PLATINUM EXECUTIVE (Prestige) */}
                <HeroVariation 
                    id="platinum"
                    badge="1. Platinum Executive"
                    glowClass="bg-amber-500/30"
                    accentText="text-amber-600"
                    accentBg="bg-amber-600"
                    btnClass="bg-amber-600 text-white"
                />

                {/* OPTION 2: AZURE CLINICAL (Trust) */}
                <HeroVariation 
                    id="azure"
                    badge="2. Azure Clinical"
                    glowClass="bg-blue-500/30"
                    accentText="text-blue-600"
                    accentBg="bg-blue-600"
                    btnClass="bg-blue-600 text-white"
                />

                {/* OPTION 3: FOREST SLATE (Authority) */}
                <HeroVariation 
                    id="forest"
                    badge="3. Forest Slate"
                    glowClass="bg-emerald-500/30"
                    accentText="text-emerald-700"
                    accentBg="bg-emerald-700"
                    btnClass="bg-emerald-700 text-white"
                />

                {/* OPTION 4: MIDNIGHT INDIGO (Corporate) */}
                <HeroVariation 
                    id="indigo"
                    badge="4. Midnight Indigo"
                    glowClass="bg-indigo-500/30"
                    accentText="text-indigo-700"
                    accentBg="bg-indigo-700"
                    btnClass="bg-indigo-700 text-white"
                />

                {/* OPTION 5: TERRACOTTA GLASS (Stability) */}
                <HeroVariation 
                    id="terracotta"
                    badge="5. Industrial Terracotta"
                    glowClass="bg-orange-500/30"
                    accentText="text-orange-700"
                    accentBg="bg-orange-700"
                    btnClass="bg-orange-700 text-white"
                />

                {/* GLASS COMPONENT HUB */}
                <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
                    {/* Subtle Technical Backdrop */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-100/50 to-white" />

                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-4 mb-20">
                            <Badge variant="outline" className="uppercase tracking-[0.4em] font-black text-[10px] border-zinc-200 text-zinc-400 px-6 py-1.5 rounded-full">Universal Glass Architecture</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-900 leading-[0.9]">High-Gravity <br /> Execution Blocks</h2>
                            <p className="text-base md:text-lg text-zinc-500 italic font-medium max-w-xl mx-auto">Standardized glassmorphic rectangles engineered for high-brightness readability and executive focus.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
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

                        {/* GLASS ANALYTICS MODULE */}
                        <div className="mt-20 max-w-5xl mx-auto p-10 md:p-16 rounded-[3rem] border border-white/20 border-t-white/60 border-l-white/60 bg-white/90 backdrop-blur-3xl shadow-2xl space-y-12 transition-all hover:bg-white/95">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-zinc-200/50 pb-10">
                                <div className="space-y-2 text-center md:text-left">
                                    <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.5em] font-headline">/ Live Unit Health</span>
                                    <h3 className="text-4xl md:text-5xl font-black font-headline uppercase italic tracking-tighter text-zinc-900">Sovereign Pulse</h3>
                                </div>
                                <div className="flex items-center gap-6 bg-zinc-100/50 p-3 rounded-2xl border border-white/40">
                                    <div className="text-center px-6 border-r border-zinc-300">
                                        <p className="text-3xl font-black text-emerald-600">92%</p>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 pt-1">STATUS</p>
                                    </div>
                                    <div className="text-center px-6 border-r border-zinc-300">
                                        <p className="text-3xl font-black text-red-600">04</p>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 pt-1">RISKS</p>
                                    </div>
                                    <div className="text-center px-6">
                                        <p className="text-3xl font-black text-blue-600">120</p>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 pt-1">MISSIONS</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-10">
                                {[
                                    { t: "Role Mastery", d: "Staff completion scores.", i: GraduationCap },
                                    { t: "Asset Uptime", d: "Utility vitals monitor.", i: Cpu },
                                    { t: "Audit Proof", d: "Zero-gap evidence trail.", i: LayoutGrid }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-white/20 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                            <feat.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black uppercase italic tracking-tighter text-base text-zinc-900 leading-none">{feat.t}</h4>
                                            <p className="text-xs text-zinc-500 font-medium italic leading-tight">{feat.d}</p>
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
