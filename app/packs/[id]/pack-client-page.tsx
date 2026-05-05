
'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    LayoutGrid,
    Target,
    ArrowRight,
    Check,
    AlertTriangle,
    Activity,
    ShieldCheck,
    Lock,
    Smartphone,
    CheckCircle2,
    Zap,
    TrendingUp,
    ShieldAlert
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';
import { painPointsContent } from '@/lib/pain-points-content';
import { packResolutions, defaultResolution } from '@/lib/pack-resolutions';

const BRAND_GREEN = "#22C55E";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[12px] md:text-[18px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.3)] leading-tight block text-left lg:text-right">
            {text}
        </span>
    </div>
);

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const totalChecklists = pack.checklists.length;
    const totalTasks = (pack.id === 'retail_operations_system' || pack.id === 'hotels_and_resorts' || pack.id === 'healthcare_and_hospital_operations') ? 250 : pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0);
    
    const findings = painPointsContent[pack.id as keyof typeof painPointsContent]?.points || [];
    const resolution = packResolutions[pack.id] || defaultResolution;

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-primary/20">
            
            {/* --- HERO SECTION: NARRATIVE HOOK --- */}
            <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img src={heroImageUrl} alt="" className="w-full h-full object-cover opacity-20 grayscale brightness-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/60 to-transparent" />
                </div>

                <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-32 pb-16 md:py-0">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:gap-16 items-center">
                        
                        <div className="space-y-10 w-full">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-6 py-2 rounded-none bg-primary/5">
                                    SOVEREIGN ENGINE V11.9
                                </Badge>
                                <h1 className="text-[36px] md:text-[80px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                                    {pack.title.replace('Operations System', '').replace('Operations Pack', '')} <br />
                                    <span style={{ color: BRAND_GREEN }}>OPERATIONS SYSTEM</span>
                                </h1>
                                <p className="text-lg md:text-[24px] italic font-medium text-zinc-400 max-w-xl leading-tight">
                                    {pack.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">SYSTEM SPECIFICATIONS</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                                    {[
                                        { t: `${totalChecklists} Operations Systems`, i: LayoutGrid },
                                        { t: `${totalTasks}+ Control Points`, i: Target },
                                        { t: "Live Dashboard Included", i: Activity },
                                        { t: "No SaaS. Own your data.", i: Lock }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                                            </div>
                                            <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/80 group-hover:text-[#22C55E] transition-colors">
                                                {item.t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button asChild size="lg" className="w-full sm:w-auto h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white transition-all border-none group flex items-center justify-center gap-3">
                                    <Link href="#pricing">
                                        DEPLOY THE SYSTEM <ArrowRight className="w-6 h-6 text-zinc-950 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <p className="text-[9px] md:text-[11px] text-zinc-500 font-black uppercase tracking-[0.4em] italic pl-1">
                                    SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-16 lg:mt-0 space-y-6">
                             <p className="text-[10px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">ANATOMY OF FAILURE</p>
                             <div className="flex flex-col gap-6 md:gap-10">
                                 {findings.slice(0, 4).map((item: any, i: number) => (
                                    <div key={i} className="space-y-1">
                                        <PulsatingStressText text={item.title} delay={`${i * 0.2}s`} />
                                        <p className="text-[10px] md:text-[11px] text-zinc-500 font-bold uppercase tracking-tight leading-tight max-w-xs lg:ml-auto">Sovereign v11.9 Technical Finding</p>
                                    </div>
                                 ))}
                             </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- PHASE 01: FORENSIC DISCOVERY (RED) --- */}
            <Section className="bg-white border-b border-zinc-100">
                <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">Forensic Findings</Badge>
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">Why operations break</h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            Routine responsibilities become informal, unverified, and dependent on memory. In serious environments, assumptions become risk.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        
                        {findings.map((point: any, index: number) => (
                            <div key={index} className="flex flex-col gap-6 p-10 border border-zinc-100 bg-zinc-50/30 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 relative group">
                                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <AlertTriangle className="w-24 h-24 text-red-600" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative flex h-3 w-3 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black font-headline uppercase italic tracking-tighter text-zinc-950">{point.title}</h3>
                                </div>
                                <p className="text-zinc-500 text-base md:text-lg font-bold italic leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- PHASE 02: SOVEREIGN RESOLUTION (GREEN) --- */}
            <Section className="bg-zinc-50/50">
                <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">Resolution Protocol</Badge>
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">How Sovereign prevents this</h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            Every critical function is converted into assigned execution, logged accountability, and repeatable operational discipline.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        
                        <div className="space-y-8 p-10 border-l-4 border-primary bg-white shadow-sm rounded-r-[2rem]">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">THE OPERATIONAL SHIFT</p>
                            <div className="space-y-6">
                                {resolution.prevents.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-zinc-950 font-black text-lg md:text-xl leading-tight italic uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-zinc-950 font-headline">What your team uses daily</h4>
                                <p className="text-zinc-500 italic font-medium">No new software. No app adoption. Just a clear, assigned ledger.</p>
                                <div className="grid grid-cols-1 gap-4">
                                    {resolution.teamUses.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 bg-white group hover:border-primary/20 transition-all">
                                            <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                                            <span className="text-zinc-600 font-bold italic uppercase text-sm tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- PHASE 03: THE MONDAY MORNING REALITY --- */}
            <Section className="bg-white border-y border-zinc-100">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-none">OPERATIONAL IMPACT</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter">What changes on Monday</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                        {resolution.mondayMorning.map((item, i) => (
                            <div key={i} className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 group hover:bg-zinc-950 hover:text-white transition-all duration-500">
                                <span className="text-4xl font-black italic text-zinc-200 group-hover:text-primary/20 transition-colors leading-none">0{i+1}</span>
                                <span className="text-zinc-600 group-hover:text-zinc-100 font-black italic uppercase text-sm md:text-base leading-tight tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-10">
                         <p className="text-xl md:text-2xl font-black text-zinc-950 uppercase italic tracking-tighter font-headline">
                            👉 The difference is immediate.
                        </p>
                    </div>
                </div>
            </Section>

            {/* --- PHASE 04: SYSTEM MODULE DIRECTORY --- */}
            <Section className="bg-zinc-50/30">
                <div className="space-y-20">
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-none">System Architecture</Badge>
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">Module directory</h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                            Institutional coverage across safety, compliance, administration, infrastructure, and daily execution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="border border-zinc-200 p-8 md:p-12 space-y-6 hover:border-primary hover:shadow-2xl transition-all duration-700 bg-white group flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-12 -mt-12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex justify-between items-center border-b border-zinc-100 pb-4">
                                    <span className="text-[10px] font-black text-zinc-400 tracking-[0.3em]">MODULE_ID: 0{index + 1}</span>
                                    <div className="flex items-center gap-2">
                                        <Target className="w-3.5 h-3.5 text-primary/40" />
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{checklist.tasks.length} POINTS</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[9px] font-black uppercase text-zinc-400 tracking-[0.4em] font-headline italic">{checklist.role}</p>
                                    <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-[#0B0F14] group-hover:text-primary transition-colors leading-tight">
                                        {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                    </h4>
                                </div>

                                <p className="text-sm md:text-base text-zinc-500 italic font-medium leading-relaxed flex-1">
                                    {checklist.summary}
                                </p>
                                
                                <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 group-hover:text-primary transition-colors">
                                    <ShieldCheck className="w-4 h-4" /> AUDIT-READY PROTOCOL
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- PRICING BRIDGE --- */}
            <div id="pricing" className="scroll-mt-20" />
            <PricingClient pack={pack} />

            {/* --- FINAL MANDATE --- */}
            <Section className="bg-[#0F3D2E] text-white text-center py-24 md:py-48" noSpine>
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-[40px] md:text-[90px] font-black tracking-tighter uppercase italic leading-[0.85]">
                            Run your <br/> {pack.title.toLowerCase().replace(' operations system', '').replace(' pack', '')} <br/> <span className="text-emerald-500">properly.</span>
                        </h2>
                        <p className="text-lg md:text-[32px] text-white/40 font-bold italic leading-tight">Zero improvisation. 100% operational control.</p>
                    </div>
                    <button className="h-16 md:h-24 px-10 md:px-20 rounded-2xl bg-[#F4A261] text-white font-black uppercase italic text-base md:text-2xl shadow-2xl hover:bg-white hover:text-black hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-lg mx-auto flex items-center justify-center">
                        <Link href="#pricing" className="flex items-center gap-4">
                            DEPLOY SYSTEM NOW <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </button>
                </div>
            </Section>

        </div>
    );
}
