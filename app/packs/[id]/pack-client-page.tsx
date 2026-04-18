
'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    LayoutGrid,
    ClipboardCheck,
    Clock,
    Activity,
    Target,
    ShieldAlert
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-32", className)}>
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
        ],
        prevents: [
            { t: "Safety failures", d: "Prevents fatal gaps in protocols." },
            { t: "Operational drift", d: "Ensures consistent quality every day." },
            { t: "PR disasters", d: "Protects your brand reputation instantly." }
        ]
    };

    const mapping: Record<string, typeof defaults> = {
        'cinema_operations_pack': {
            pitfalls: [
                "Projector lamp life and KDM decryption status go unmonitored.",
                "Concession profit bleeds through unverified yield gaps.",
                "Fire exit physical verification is skipped in busy intervals.",
                "Projection sound acoustic balance not tested pre-show.",
                "Staff 'guess' procedures because technical Trainer Notes are missing.",
                "Restroom hygiene cycles drift, leading to viral negative reviews.",
                "Technical uptime fails because asset logs are documented on paper.",
                "Box office revenue leakage from unverified 'voided' ticket bills."
            ],
            prevents: [
                { t: "Projection failure", d: "Zero-fail technical checks." },
                { t: "Revenue leakage", d: "Stops concession profit bleed." },
                { t: "Safety disasters", d: "Daily physical exit verification." }
            ]
        },
        'restaurants': {
            pitfalls: [
                "Critical food safety checks (HACCP) missed during rush shifts.",
                "High-value protein leakage goes undetected without daily reconcile.",
                "Inconsistent recipe execution leading to unmonitored ingredient waste.",
                "Staff 'guess' procedures because digital Trainer Notes are missing.",
                "Managers waste hours manually chasing shift handovers.",
                "Digital reputation drops because 24h review response pulse is ignored.",
                "No institutional memory stays when your best Chef resigns.",
                "Margin erosion from unverified third-party aggregator cancellations."
            ],
            prevents: [
                { t: "Food safety incidents", d: "Zero-fail HACCP compliance." },
                { t: "Margin erosion", d: "Stops unmonitored waste and theft." },
                { t: "Service collapse", d: "Ensures kitchen readiness for rush." }
            ]
        },
        'hotels_and_resorts': {
            pitfalls: [
                "Room readiness gaps lead to immediate guest refund requests.",
                "Critical safety protocols (Fire/Perimeter) are assumed but not verified.",
                "Shift handovers are documented in unsearchable chat groups.",
                "Preventive maintenance for expensive HVAC assets is neglected.",
                "Brand standards drift as staff turnover increases and training fails.",
                "5-star reputation is destroyed by single hygiene lapses.",
                "Minibar revenue bleeds out without a structured reconciliation log.",
                "Guest Wi-Fi and tech assets fail due to lack of daily uptime audits."
            ],
            prevents: [
                { t: "Refund requests", d: "Ensures 100% room parity." },
                { t: "Guest safety gaps", d: "Verified perimeter and life safety." },
                { t: "Brand dilution", d: "Maintains 5-star standards daily." }
            ]
        },
        'healthcare_and_hospital_operations': {
            pitfalls: [
                "Critical clinical handovers missed during high-caseload shifts.",
                "Surgical 'Time Out' protocols assumed rather than verified.",
                "Narcotics safe stock counts unmonitored across shift cycles.",
                "Delayed emergency response (Code Blue) due to lack of daily drills.",
                "Staff turnover eroding institutional NABH/JCI knowledge.",
                "Infection control breaches in ICU going undetected.",
                "Pharmacy cold-chain integrity lapses during power flips.",
                "Unbilled clinical consumables leading to massive silent margin loss."
            ],
            prevents: [
                { t: "Clinical errors", d: "Zero-fail surgical & medication safety." },
                { t: "Audit failure", d: "Permanent NABH/JCI readiness." },
                { t: "Revenue leakage", d: "100% billing parity for consumables." }
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
            
            {/* 1. HERO SECTION — ONE GLANCE MANDATE */}
            <section className="relative w-full bg-[#F7F8FA] pt-12 pb-12 md:pt-16 md:pb-16 overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-zinc-200">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT: NARRATIVE AUTHORITY */}
                        <div className="flex flex-col items-start space-y-6 relative z-20">
                            <div className="space-y-3">
                                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#5B6670] mb-1 block">/ {pack.category.toUpperCase()}</span>
                                <h1 className="text-[40px] md:text-[56px] lg:text-[68px] font-black text-[#0B0F14] leading-[0.85] tracking-tighter uppercase italic">
                                    {pack.title.replace('Operating System', '')} <br/>
                                    <span className="text-[#0F3D2E]">Operating System</span>
                                </h1>
                                <p className="text-[18px] md:text-[20px] text-[#5B6670] italic font-medium leading-tight pt-1">
                                    Run {pack.title.toLowerCase().replace(' operating system', '')} daily without chasing staff.
                                </p>
                            </div>

                            <div className="border-l-[3px] border-[#0F3D2E] pl-[20px] space-y-1.5 py-0.5">
                                <p className="text-[16px] font-bold leading-none text-[#0B0F14]">Even when you’re not there.</p>
                                <p className="text-[16px] font-bold leading-none text-[#0B0F14]">Without follow-ups</p>
                                <p className="text-[16px] font-bold leading-none text-[#0B0F14]">Without confusion</p>
                                <p className="text-[16px] font-bold leading-none text-[#0B0F14]">Without depending on memory</p>
                            </div>

                            <div className="flex items-center gap-6 w-full text-[9px] font-black text-zinc-500 uppercase tracking-[0.25em]">
                                <span className="flex items-center gap-2"><LayoutGrid className="w-3.5 h-3.5 text-zinc-500" /> {totalChecklists} MODULES</span>
                                <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5 text-zinc-500" /> {totalTasks}+ CHECKPOINTS</span>
                            </div>

                            <div className="w-full pt-2">
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <button className="h-[56px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-base shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group">
                                        <Link href="#pricing" className="flex items-center gap-3">
                                            Deploy system → ₹{pack.priceINR}
                                        </Link>
                                    </button>
                                    <div className="flex flex-col text-left">
                                        <p className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none">ONE-TIME PAYMENT</p>
                                        <p className="text-[9px] font-black text-[#5B6670] uppercase tracking-widest leading-none mt-1">OWN THE ENGINE FOREVER</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: TECHNICAL PROOF FRAME — WIDESCREEN */}
                        <div className="relative z-10 w-full">
                            <div className="relative mx-auto group max-w-xl">
                                <div className="bg-[#111] h-9 w-full rounded-t-[14px] flex items-center px-4 gap-2 border border-white/10">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-black/40 border border-white/5 rounded px-4 py-0.5 text-[7px] font-black text-white/20 uppercase tracking-[0.4em] italic shadow-inner">
                                            {pack.id.toUpperCase()}_MASTER_ENGINE.xlsx
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-b-[14px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-white border border-[#E6E8EC] border-t-0 relative">
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
                <div className="max-w-[1000px] mx-auto text-center space-y-16">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-none italic">Forensic Finding</Badge>
                        <h2 className="text-[32px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-none">Why {pack.title.toLowerCase().replace(' operating system', '')} operations break</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {content.pitfalls.map((p, i) => (
                            <div key={i} className="flex items-center gap-5 p-8 rounded-2xl bg-[#F7F8FA] border border-zinc-100 hover:border-red-100 transition-all group">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(239,68,68,0.3)]" />
                                <span className="text-[#5B6670] font-bold italic text-lg leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="pt-8">
                        <p className="text-[24px] font-black text-[#0B0F14] uppercase italic tracking-tighter">
                            Small misses create big failures.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3. WHAT THIS SYSTEM DOES */}
            <Section>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { t: "Pre-built SOPs", d: "Everything already defined", i: ClipboardCheck },
                        { t: "Daily tracking", d: "Tasks updated as work happens", i: Clock },
                        { t: "Live dashboard", d: "See what’s done vs missed instantly", i: Activity }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-16 rounded-[3rem] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all duration-500 text-center space-y-8 group">
                            <div className="w-20 h-20 rounded-2xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mx-auto group-hover:bg-[#0F3D2E] group-hover:text-white transition-all shadow-inner">
                                <card.i className="w-10 h-10" />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-3xl font-black uppercase italic leading-tight tracking-tighter">{card.t}</h4>
                                <p className="text-[#5B6670] text-xl font-medium italic">{card.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4. HOW IT WORKS (ROADMAP) */}
            <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                <div className="space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-[32px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { t: "Download system", d: "Get your industry-specific file with pre-built SOPs." },
                            { t: "Open in Sheets", d: "Upload once. Access from phone or desktop." },
                            { t: "Share with team", d: "Assign roles. Lock structure so nothing breaks." },
                            { t: "See everything live", d: "Track tasks as they get done. Know what’s missed." }
                        ].map((step, i) => (
                            <div className="bg-white border border-zinc-200 p-10 rounded-[2.5rem] space-y-8 hover:shadow-xl transition-all group" key={i}>
                                <div className="w-14 h-14 rounded-xl bg-[#F7F8FA] border border-zinc-200 flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-2xl italic shadow-inner">
                                    {i+1}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-xl uppercase italic leading-tight tracking-tight">{step.t}</h4>
                                    <p className="text-sm text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <p className="text-[22px] md:text-[32px] font-black text-[#0B0F14] uppercase italic tracking-tighter">
                            👉 That’s it. Your operations are now structured.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 5. SYSTEM ARCHITECTURE (WHITE CARDS) */}
            <Section className="bg-white">
                <div className="space-y-20">
                    <div className="text-center space-y-5">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-10 py-3 rounded-full bg-primary/5">Institutional Engine</Badge>
                        <h2 className="text-[32px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight leading-none">What’s inside the system</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="bg-white p-12 rounded-[2.5rem] space-y-8 group hover:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 relative border border-zinc-100 hover:border-primary/20">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black uppercase text-zinc-400 tracking-[0.4em] font-headline">{checklist.role}</p>
                                    <h4 className="text-3xl md:text-4xl font-black italic uppercase leading-[0.85] tracking-tighter text-[#0B0F14] pt-2">
                                        {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                    </h4>
                                </div>
                                <div className="pt-4 flex items-center gap-4 border-t border-zinc-100">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-inner">
                                        <Target className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-[12px] font-black text-primary uppercase tracking-[0.4em] font-headline">
                                        {checklist.tasks.length} CHECKPOINTS
                                    </span>
                                </div>
                                <p className="text-[15px] text-zinc-500 italic font-medium leading-relaxed">{checklist.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 7. WHAT THIS PREVENTS */}
            <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                <div className="max-w-[1000px] mx-auto space-y-20">
                    <h2 className="text-[32px] md:text-[48px] font-black text-[#0B0F14] text-center uppercase italic tracking-tight">What this prevents</h2>
                    <div className="grid md:grid-cols-3 gap-16">
                        {content.prevents.map((item, i) => (
                            <div key={i} className="space-y-6 text-center group">
                                <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                    <ShieldAlert className="w-12 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-2xl uppercase italic leading-tight tracking-tighter">{item.t}</h4>
                                    <p className="text-lg text-[#5B6670] italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 8. PRICING ENGINE */}
            <PricingClient pack={pack} />

            {/* 11. FINAL CTA */}
            <Section className="bg-[#0F3D2E] text-white text-center py-40 md:py-56">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-[48px] md:text-[80px] font-black leading-[0.8] tracking-tighter uppercase italic drop-shadow-2xl">
                            Run your <br/> {pack.title.toLowerCase().replace(' operating system', '')} <br/> properly.
                        </h2>
                        <p className="text-[20px] md:text-[28px] text-white/60 font-bold italic pt-4">Deploy the Sovereign Master Engine in under 10 minutes.</p>
                    </div>
                    
                    <button className="h-[84px] px-16 rounded-[20px] bg-[#F4A261] text-white font-black uppercase italic text-2xl shadow-[0_25px_60px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group">
                        <Link href="#pricing" className="flex items-center gap-5">
                            Deploy System Now <ArrowRight className="w-10 h-10 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </button>
                </div>
            </Section>

        </div>
    );
}
