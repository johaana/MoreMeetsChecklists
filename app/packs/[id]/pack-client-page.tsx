'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    LayoutGrid,
    Target,
    ArrowRight,
    Check
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

    const TechnicalProof = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={cn("relative group w-full", isMobile ? "block md:hidden my-4" : "hidden md:block")}>
            <div className="bg-[#111] h-7 md:h-9 w-full rounded-t-xl md:rounded-t-[14px] flex items-center px-4 gap-1.5 border border-white/10">
                <div className="flex gap-1 md:gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/5 rounded px-3 py-0.5 text-[6px] md:text-[7px] font-black text-white/20 uppercase tracking-[0.3em] italic shadow-inner">
                        {pack.id.toUpperCase()}_MASTER_ENGINE.xlsx
                    </div>
                </div>
            </div>

            <div className="rounded-b-xl md:rounded-b-[14px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] bg-white border border-[#E6E8EC] border-t-0 relative">
                <img 
                    src={heroImageUrl} 
                    alt={pack.title} 
                    className="w-full h-auto object-cover aspect-[16/10] grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
                />
            </div>
            
            <div className="mt-2 text-center">
                <p className="text-[7px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                    Sovereign Technical implementation proof
                </p>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            
            {/* HERO SECTION — Reduced pt-36 to pt-24 to take it slightly up */}
            <section className="relative w-full bg-[#F7F8FA] pt-24 pb-10 md:pt-24 md:pb-16 overflow-hidden border-b border-zinc-200">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-[1.1fr,1fr] gap-8 lg:gap-16 items-center">
                        
                        <div className="flex flex-col items-start space-y-6 md:space-y-8 relative z-20">
                            <div className="space-y-2">
                                <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-0.5 block">/ {pack.category.toUpperCase()}</span>
                                <h1 className="text-[32px] md:text-[56px] lg:text-[68px] font-black text-[#0B0F14] leading-[0.95] md:leading-[0.85] tracking-tighter uppercase italic">
                                    {pack.title.replace('Operating System', '')} <br/>
                                    <span className="text-[#0F3D2E]">Operating System</span>
                                </h1>
                                <p className="text-base md:text-xl text-[#5B6670] italic font-medium leading-tight pt-1">
                                    Run {pack.title.toLowerCase().replace(' operating system', '')} daily without chasing staff.
                                </p>
                            </div>

                            {/* MOBILE: PRODUCT-FIRST — Image before bullets/CTA */}
                            <TechnicalProof isMobile />

                            <div className="border-l-[3px] border-[#0F3D2E] pl-4 md:pl-[20px] space-y-1.5">
                                <p className="text-[16px] md:text-[18px] font-bold leading-tight text-zinc-900 italic">Even when you’re not there.</p>
                                <p className="text-[16px] md:text-[18px] font-bold leading-tight text-zinc-400 italic">Without follow-ups</p>
                                <p className="text-[16px] md:text-[18px] font-bold leading-tight text-zinc-400 italic">Without depending on memory</p>
                            </div>

                            <div className="flex items-center gap-6 md:gap-8 w-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
                                <span className="flex items-center gap-2 text-zinc-900 font-headline"><Target className="w-4 h-4 text-primary" /> {totalChecklists} MODULES</span>
                                <span className="flex items-center gap-2 text-zinc-900 font-headline"><Target className="w-4 h-4 text-primary" /> {totalTasks}+ POINTS</span>
                            </div>

                            <div className="w-full pt-2">
                                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                                    <button className="h-14 md:h-[56px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-base shadow-[0_15px_35px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all border-none group w-full sm:w-auto">
                                        <Link href="#pricing" className="flex items-center gap-3">
                                            Deploy system → ₹{pack.priceINR}
                                        </Link>
                                    </button>
                                    <div className="flex flex-col text-center sm:text-left space-y-0.5">
                                        <p className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none italic">ONE-TIME PAYMENT</p>
                                        <p className="text-[8px] font-black text-[#5B6670] uppercase tracking-widest leading-none">OWN THE ENGINE FOREVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP VISUAL — Maintained side-by-side */}
                        <div className="relative z-10 w-full hidden md:block">
                            <TechnicalProof />
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. WHY THIS MATTERS */}
            <Section className="bg-white border-y border-[#E6E8EC]">
                <div className="max-w-[1000px] mx-auto text-center space-y-10 md:space-y-16">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.4em] font-black text-[9px] md:text-[10px] px-8 py-2 rounded-none italic">Forensic Finding</Badge>
                        <h2 className="text-[26px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-tight">Why operations break</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left">
                        {content.pitfalls.map((p, i) => (
                            <div key={i} className="flex items-center gap-4 md:gap-5 p-5 md:p-8 rounded-2xl bg-[#F7F8FA] border border-zinc-100 group">
                                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span className="text-[#5B6670] font-bold italic text-sm md:text-lg leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. SYSTEM ARCHITECTURE */}
            <Section className="bg-white">
                <div className="space-y-10 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px] px-10 py-3 rounded-full bg-primary/5">Institutional Engine</Badge>
                        <h2 className="text-[26px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-tight">What’s inside the system</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] space-y-6 group hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 border border-zinc-100">
                                <div className="space-y-1">
                                    <p className="text-[9px] md:text-[11px] font-black uppercase text-zinc-400 tracking-[0.3em] font-headline">{checklist.role}</p>
                                    <h4 className="text-xl md:text-4xl font-black italic uppercase tracking-tighter text-[#0B0F14]">
                                        {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                    </h4>
                                </div>
                                <div className="pt-3 md:pt-4 flex items-center gap-3 border-t border-zinc-100">
                                    <Target className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] md:text-[12px] font-black text-primary uppercase tracking-[0.3em] font-headline">
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
            <Section className="bg-[#0F3D2E] text-white text-center py-24 md:py-48">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-[32px] md:text-[80px] font-black tracking-tighter uppercase italic leading-[0.9]">
                            Run your <br/> {pack.title.toLowerCase().replace(' operating system', '')} <br/> properly.
                        </h2>
                        <p className="text-base md:text-2xl text-white/60 font-bold italic">Deploy the Sovereign Master Engine in under 10 minutes.</p>
                    </div>
                    
                    <button className="h-16 md:h-20 px-10 md:px-16 rounded-xl bg-[#F4A261] text-white font-black uppercase italic text-base md:text-xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-sm mx-auto flex items-center justify-center">
                        <Link href="#pricing" className="flex items-center gap-3">
                            Deploy System Now <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </button>
                </div>
            </Section>

        </div>
    );
}
