'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    LayoutGrid,
    Target,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-10 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const getIndustryContent = (id: string) => {
    const defaults = {
        pitfalls: [
            "Critical tasks get skipped during busy shifts.",
            "Work depends on the memory of key people.",
            "Standards drift as staff turnover increases.",
            "Managers waste hours manually chasing staff.",
            "No real-time visibility into completion status.",
            "Staff 'guess' procedures when managers are away.",
            "Institutional memory leaves when staff resign.",
            "Audit non-conformance detected too late."
        ]
    };

    const mapping: Record<string, typeof defaults> = {
        'cinema_operations_pack': {
            pitfalls: [
                "Projector lamp life and KDM status go unmonitored.",
                "Concession profit bleeds through unverified yield gaps.",
                "Fire exit physical verification is skipped in busy intervals.",
                "Projection sound acoustic balance not tested pre-show.",
                "Staff 'guess' procedures because technical notes are missing.",
                "Restroom hygiene cycles drift, leading to negative reviews.",
                "Technical uptime fails because asset logs are paper-based.",
                "Box office revenue leakage from unverified 'voided' bills."
            ]
        },
        'restaurants': {
            pitfalls: [
                "Critical food safety checks (HACCP) missed during rush.",
                "High-value protein leakage goes undetected without daily reconcile.",
                "Inconsistent recipe execution leading to unmonitored waste.",
                "Staff 'guess' procedures because digital notes are missing.",
                "Managers waste hours manually chasing shift handovers.",
                "Digital reputation drops as 24h review pulse is ignored.",
                "No institutional memory stays when your best Chef resigns.",
                "Margin erosion from unverified aggregator cancellations."
            ]
        },
        'hotels_and_resorts': {
            pitfalls: [
                "Room readiness gaps lead to immediate refund requests.",
                "Critical safety protocols are assumed but not verified.",
                "Shift handovers are documented in unsearchable chat groups.",
                "Preventive maintenance for expensive assets is neglected.",
                "Brand standards drift as staff turnover increases.",
                "5-star reputation is destroyed by single hygiene lapses.",
                "Minibar revenue bleeds out without a structured log.",
                "Guest Wi-Fi and tech assets fail due to lack of daily audits."
            ]
        },
        'healthcare_and_hospital_operations': {
            pitfalls: [
                "Critical clinical handovers missed during high caseloads.",
                "Surgical 'Time Out' protocols assumed rather than verified.",
                "Narcotics safe stock counts unmonitored across shift cycles.",
                "Delayed emergency response (Code Blue) without daily drills.",
                "Staff turnover eroding institutional NABH/JCI knowledge.",
                "Infection control breaches in ICU going undetected.",
                "Pharmacy cold-chain integrity lapses during power flips.",
                "Unbilled clinical consumables leading to massive margin loss."
            ]
        }
    };

    return mapping[id] || defaults;
};

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const content = getIndustryContent(pack.id);
    const totalChecklists = pack.checklists.length;
    const totalTasks = pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0);

    if (!mounted) return null;

    return (
        <div className="bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            
            {/* 1. HERO SECTION — HIGH-DENSITY BRIEFING */}
            <section className="relative w-full bg-[#F7F8FA] pt-8 pb-10 md:pt-20 md:pb-16 overflow-hidden border-b border-zinc-200">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 lg:gap-16 items-center">
                        
                        {/* LEFT: NARRATIVE AUTHORITY */}
                        <div className="flex flex-col items-start space-y-5 md:space-y-8 relative z-20">
                            <div className="space-y-1 md:space-y-3">
                                <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#5B6670] mb-0.5 block">/ {pack.category.toUpperCase()}</span>
                                <h1 className="text-[32px] md:text-[56px] lg:text-[68px] font-black text-[#0B0F14] leading-[1] md:leading-[0.85] tracking-tighter uppercase italic">
                                    {pack.title.replace('Operating System', '')} <br/>
                                    <span className="text-[#0F3D2E]">Operating System</span>
                                </h1>
                                <p className="text-base md:text-xl text-[#5B6670] italic font-medium leading-tight pt-0.5 md:pt-1">
                                    Run {pack.title.toLowerCase().replace(' operating system', '')} daily without chasing staff.
                                </p>
                            </div>

                            <div className="border-l-[3px] border-[#0F3D2E] pl-4 md:pl-[20px] space-y-1 py-0.5">
                                <p className="text-[15px] md:text-[16px] font-bold leading-none text-[#0B0F14]">Even when you’re not there.</p>
                                <p className="text-[15px] md:text-[16px] font-bold leading-none text-[#0B0F14]">Without follow-ups</p>
                                <p className="text-[15px] md:text-[16px] font-bold leading-none text-[#0B0F14]">Without confusion</p>
                                <p className="text-[15px] md:text-[16px] font-bold leading-none text-[#0B0F14]">Without depending on memory</p>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6 w-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">
                                <span className="flex items-center gap-2 text-zinc-800 font-headline"><LayoutGrid className="w-3.5 h-3.5 text-primary" /> {totalChecklists} MODULES</span>
                                <span className="flex items-center gap-2 text-zinc-800 font-headline"><Target className="w-3.5 h-3.5 text-primary" /> {totalTasks}+ CHECKPOINTS</span>
                            </div>

                            <div className="w-full pt-1">
                                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                                    <button className="h-14 md:h-[56px] px-8 md:px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-sm md:text-base shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 md:gap-3 border-none group w-full sm:w-auto">
                                        <Link href="#pricing" className="flex items-center gap-3">
                                            Deploy system → ₹{pack.priceINR}
                                        </Link>
                                    </button>
                                    <div className="flex flex-col text-center sm:text-left space-y-0.5">
                                        <p className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none">ONE-TIME PAYMENT</p>
                                        <p className="text-[9px] font-black text-[#5B6670] uppercase tracking-widest leading-none">OWN THE ENGINE FOREVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: TECHNICAL PROOF FRAME */}
                        <div className="relative z-10 w-full lg:pt-0 pt-2">
                            <div className="relative mx-auto group max-w-xl">
                                <div className="bg-[#111] h-8 md:h-9 w-full rounded-t-xl md:rounded-t-[14px] flex items-center px-4 gap-1.5 md:gap-2 border border-white/10">
                                    <div className="flex gap-1 md:gap-1.5">
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500/30" />
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-500/30" />
                                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500/30" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-black/40 border border-white/5 rounded px-3 md:px-4 py-0.5 text-[6px] md:text-[7px] font-black text-white/20 uppercase tracking-[0.3em] md:tracking-[0.4em] italic shadow-inner">
                                            {pack.id.toUpperCase()}_MASTER_ENGINE.xlsx
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-b-xl md:rounded-b-[14px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-white border border-[#E6E8EC] border-t-0 relative">
                                    <img 
                                        src={heroImageUrl} 
                                        alt={pack.title} 
                                        className="w-full h-auto object-cover aspect-[16/10] grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                                </div>
                                
                                <div className="mt-3 text-center">
                                    <p className="text-[7px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                                        {pack.category.replace('&', '&')} technical implementation proof
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. WHY THIS MATTERS (PITFALLS) */}
            <Section className="bg-white border-y border-[#E6E8EC]">
                <div className="max-w-[1000px] mx-auto text-center space-y-10 md:space-y-16">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-[9px] md:text-[10px] px-6 md:px-8 py-2 rounded-none italic">Forensic Finding</Badge>
                        <h2 className="text-[26px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-tight">Why {pack.title.toLowerCase().replace(' operating system', '')} operations break</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left">
                        {content.pitfalls.map((p, i) => (
                            <div key={i} className="flex items-center gap-4 md:gap-5 p-5 md:p-8 rounded-2xl bg-[#F7F8FA] border border-zinc-100 hover:border-red-100 transition-all group">
                                <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
                                <span className="text-[#5B6670] font-bold italic text-sm md:text-lg leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. SYSTEM ARCHITECTURE (WHITE CARDS) */}
            <Section className="bg-white">
                <div className="space-y-10 md:space-y-20">
                    <div className="text-center space-y-3 md:space-y-5">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] md:tracking-[0.5em] font-black text-[9px] md:text-[10px] px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-primary/5">Institutional Engine</Badge>
                        <h2 className="text-[26px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-tight">What’s inside the system</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] space-y-5 md:space-y-8 group hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 relative border border-zinc-100 hover:border-primary/20">
                                <div className="space-y-1 md:space-y-2">
                                    <p className="text-[9px] md:text-[11px] font-black uppercase text-zinc-400 tracking-[0.3em] md:tracking-[0.4em] font-headline">{checklist.role}</p>
                                    <h4 className="text-xl md:text-4xl font-black italic uppercase leading-[0.95] md:leading-[0.9] tracking-tighter text-[#0B0F14] pt-0.5 md:pt-1">
                                        {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                    </h4>
                                </div>
                                <div className="pt-3 md:pt-4 flex items-center gap-3 md:gap-4 border-t border-zinc-100">
                                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                                        <Target className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <span className="text-[9px] md:text-[12px] font-black text-primary uppercase tracking-[0.3em] md:tracking-[0.4em] font-headline">
                                        {checklist.tasks.length} CHECKPOINTS
                                    </span>
                                </div>
                                <p className="text-xs md:text-[15px] text-zinc-500 italic font-medium leading-relaxed">{checklist.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. PRICING ENGINE */}
            <PricingClient pack={pack} />

            {/* 5. FINAL CTA */}
            <Section className="bg-[#0F3D2E] text-white text-center py-24 md:py-56">
                <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
                    <div className="space-y-4 md:space-y-6 px-2">
                        <h2 className="text-[32px] md:text-[80px] font-black leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic drop-shadow-2xl">
                            Run your <br/> {pack.title.toLowerCase().replace(' operating system', '')} <br/> properly.
                        </h2>
                        <p className="text-base md:text-[28px] text-white/60 font-bold italic pt-1 md:pt-2">Deploy the Sovereign Master Engine in under 10 minutes.</p>
                    </div>
                    
                    <button className="h-16 md:h-[84px] px-8 md:px-16 rounded-xl md:rounded-[20px] bg-[#F4A261] text-white font-black uppercase italic text-base md:text-2xl shadow-[0_25px_60px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-sm mx-auto flex items-center justify-center">
                        <Link href="#pricing" className="flex items-center gap-3 md:gap-5">
                            Deploy System Now <ArrowRight className="w-7 h-7 md:w-10 md:h-10 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </button>
                </div>
            </Section>

        </div>
    );
}

