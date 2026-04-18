
'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    ArrowRight, 
    LayoutGrid,
    ClipboardCheck,
    Clock,
    ShieldCheck,
    Lock,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Zap,
    GraduationCap,
    Smartphone,
    AlertTriangle,
    Download,
    HelpCircle,
    Target,
    ChevronRight,
    CircleDashed
} from 'lucide-react';
import Link from 'next/link';
import { IconComponent } from '@/components/icons';
import PricingClient from '../pricing-client';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const getIndustryContent = (id: string) => {
    const defaults = {
        pitfalls: [
            "Critical tasks get skipped during busy shifts", 
            "Work depends on the memory of key people", 
            "Standards drift as staff turnover increases",
            "Managers waste hours manually chasing staff",
            "No real-time visibility into completion status",
            "Staff 'guess' procedures when managers are away",
            "Institutional memory leaves when staff resign",
            "Audit non-conformance detected too late"
        ],
        prevents: [
            { t: "Safety failures", d: "Prevents fatal gaps in protocols." },
            { t: "Operational drift", d: "Ensures consistent quality every day." },
            { t: "PR disasters", d: "Protects your brand reputation instantly." }
        ]
    };

    const mapping: Record<string, typeof defaults> = {
        'restaurants': {
            pitfalls: [
                "Critical food safety checks (HACCP) missed during rush shifts.",
                "High-value protein leakage goes undetected without daily reconcile.",
                "Inconsistent recipe execution leading to unmonitored ingredient waste.",
                "Staff 'guess' procedures because Trainer Notes are missing.",
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
                "Shift handovers are documented in disjointed, unsearchable chat groups.",
                "Preventive maintenance for expensive HVAC assets is neglected.",
                "Brand standards drift as staff turnover increases and training fails.",
                "5-star reputation is destroyed by single, unmonitored hygiene lapses.",
                "Minibar revenue bleeds out without a structured reconciliation log.",
                "Guest Wi-Fi and tech assets fail due to lack of daily uptime audits."
            ],
            prevents: [
                { t: "Refund requests", d: "Ensures 100% room parity." },
                { t: "Guest safety gaps", d: "Verified perimeter and life safety." },
                { t: "Brand dilution", d: "Maintains 5-star standards daily." }
            ]
        },
        'cinema_operations_pack': {
            pitfalls: [
                "Projector lamp life and KDM decryption status go unmonitored.",
                "Concession profit bleeds through unverified yield gaps.",
                "Fire exit physical verification is skipped in busy intervals.",
                "Projection sound acoustic balance not tested pre-show.",
                "No institutional memory stays when a key Projectionist resigns.",
                "Restroom hygiene cycles drift, leading to viral negative reviews.",
                "Technical uptime fails because asset logs are documented on paper.",
                "Box office revenue leakage from unverified 'voided' ticket bills."
            ],
            prevents: [
                { t: "Projection failure", d: "Zero-fail technical checks." },
                { t: "Revenue leakage", d: "Stops concession profit bleed." },
                { t: "Safety disasters", d: "Daily physical exit verification." }
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
        <div className="bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased">
            
            {/* HERO SECTION - HIGH GRAVITY */}
            <section className="w-full bg-[#F7F8FA] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden min-h-[90svh] flex flex-col justify-center">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT: Technical Briefing */}
                        <div className="flex flex-col items-start space-y-8 relative z-20">
                            <div className="space-y-1">
                                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#5B6670] mb-2 block">/ {pack.category.toUpperCase()}</span>
                                <h1 className="text-[32px] md:text-[50px] lg:text-[64px] font-black text-[#0B0F14] leading-[1.05] tracking-tighter uppercase italic">
                                    {pack.title.replace('Operating System', '')} <br/>
                                    <span className="text-[#0F3D2E]">Operating System</span>
                                </h1>
                                <p className="text-[20px] md:text-[24px] text-[#5B6670] italic font-medium leading-tight pt-4">
                                    Run {pack.title.toLowerCase().replace(' operating system', '')} daily without chasing staff.
                                </p>
                            </div>

                            <div className="border-l-[3px] border-[#0F3D2E] pl-[16px] space-y-2 py-1">
                                <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Even when you’re not there.</p>
                                <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without follow-ups</p>
                                <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without confusion</p>
                                <p className="text-[18px] font-medium leading-tight text-[#0B0F14]">Without depending on memory</p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full text-[10px] font-black text-[#5B6670] uppercase tracking-[0.2em] opacity-40">
                                <span className="flex items-center gap-2"><LayoutGrid className="w-3.5 h-3.5" /> {totalChecklists} MODULES</span>
                                <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5" /> {totalTasks}+ CHECKPOINTS</span>
                            </div>

                            <div className="space-y-6 w-full pt-4">
                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    <button className="h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group">
                                        <a href="#pricing" className="flex items-center gap-3">
                                            Deploy your system → ₹{pack.priceINR}
                                        </a>
                                    </button>
                                    <div className="flex flex-col">
                                        <p className="text-[11px] font-black text-[#5B6670] uppercase tracking-widest leading-none">One-time • Own forever</p>
                                    </div>
                                </div>

                                <p className="text-[13px] text-[#5B6670] font-bold uppercase tracking-[0.1em] border-t border-[#E6E8EC] pt-4 leading-relaxed">
                                    Built on Excel • Runs on Google Sheets <br/>
                                    No software required • Universal accessibility
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Sovereign Master Engine Frame */}
                        <div className="relative lg:-ml-44 lg:pt-16">
                            <div className="relative mx-auto w-fit scale-125 transition-all duration-1000">
                                <div className="rounded-[24px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.15)] bg-white border border-[#E6E8EC] relative max-w-lg">
                                    <div className="bg-[#111] h-10 w-full flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                                                {pack.id.toUpperCase()}_MASTER_ENGINE.xlsx
                                            </div>
                                        </div>
                                    </div>

                                    <img 
                                        src={heroImageUrl} 
                                        alt={pack.title} 
                                        className="w-full h-auto object-cover aspect-[4/3] grayscale-[0.05]" 
                                    />
                                </div>
                                
                                <div className="mt-8 text-center">
                                    <p className="text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                                        {pack.category} technical implementation proof
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* PROBLEM BRIDGE */}
            <Section className="bg-white border-y border-[#E6E8EC]">
                <div className="max-w-[1000px] mx-auto text-center space-y-12">
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight leading-tight">Why {pack.title.toLowerCase().replace(' operating system', '')} operations break</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {content.pitfalls.map((p, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-[#F7F8FA] border border-zinc-100 hover:border-[#F4A261]/20 transition-all group">
                                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                                <span className="text-[#5B6670] font-bold italic text-lg leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="pt-6">
                        <p className="text-[22px] font-black text-[#0B0F14] uppercase italic">
                            Small misses create big failures.
                        </p>
                    </div>
                </div>
            </Section>

            {/* CORE FUNCTIONALITY */}
            <Section>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "Pre-built SOPs", d: "Everything already defined", i: ClipboardCheck },
                        { t: "Daily tracking", d: "Tasks updated as work happens", i: Clock },
                        { t: "Live dashboard", d: "See what’s done vs missed instantly", i: Activity }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all text-center space-y-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mx-auto group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                <card.i className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-black uppercase italic leading-tight tracking-tighter">{card.t}</h4>
                                <p className="text-[#5B6670] text-lg font-medium italic">{card.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ROADMAP */}
            <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                <div className="space-y-16">
                    <div className="text-center">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { t: "Download system", d: "Get your industry-specific file with pre-built SOPs." },
                            { t: "Open in Sheets", d: "Upload once. Access from phone or desktop." },
                            { t: "Share with team", d: "Assign roles. Lock structure so nothing breaks." },
                            { t: "See everything live", d: "Track tasks as they get done. Know what’s missed." }
                        ].map((step, i) => (
                            <div className="bg-white border border-zinc-200 p-8 rounded-[2rem] space-y-6 hover:shadow-lg transition-all group" key={i}>
                                <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-zinc-200 flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-xl italic">
                                    {i+1}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-lg uppercase italic leading-tight tracking-tight">{step.t}</h4>
                                    <p className="text-sm text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <p className="text-[20px] md:text-[28px] font-black text-[#0B0F14] uppercase italic tracking-tighter">
                            👉 No setup. No training. Ready in minutes.
                        </p>
                    </div>
                </div>
            </Section>

            {/* SYSTEM ARCHITECTURE - THE SCREENSHOT STANDARD */}
            <Section className="bg-white">
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full">System Architecture</Badge>
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">What’s inside the system</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] space-y-6 group hover:shadow-2xl hover:shadow-[#0B0F14]/5 transition-all duration-500 relative border border-zinc-100">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.3em] font-headline">{checklist.role}</p>
                                    <h4 className="text-2xl md:text-3xl font-black italic uppercase leading-none tracking-tighter text-[#0B0F14] pt-2">
                                        {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                    </h4>
                                </div>
                                <div className="pt-2 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] font-headline">
                                        {checklist.tasks.length} CHECKPOINTS
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-500 italic font-medium leading-relaxed">{checklist.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* RISK PREVENTION */}
            <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
                <div className="max-w-[900px] mx-auto space-y-16">
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">What this prevents</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {content.prevents.map((item, i) => (
                            <div key={i} className="space-y-4 text-center group">
                                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto group-hover:scale-110 transition-transform shadow-inner">
                                    <AlertTriangle className="w-10 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-xl uppercase italic leading-tight tracking-tight">{item.t}</h4>
                                    <p className="text-lg text-[#5B6670] italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PRICING ENGINE */}
            <PricingClient pack={pack} />

            {/* FINAL NARRATIVE ANCHOR */}
            <Section className="bg-[#0F3D2E] text-white text-center py-32 md:py-48">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-[40px] md:text-[64px] font-bold leading-[0.9] tracking-tighter uppercase italic">
                            Start running your {pack.title.toLowerCase().replace(' operating system', '')} properly
                        </h2>
                        <p className="text-[18px] md:text-[22px] text-white/60 font-medium italic">Deploy the Sovereign Master Engine in under 10 minutes.</p>
                    </div>
                    
                    <button className="h-[80px] px-12 rounded-[16px] bg-[#F4A261] text-white font-black uppercase italic text-2xl shadow-[0_20px_50px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group">
                        <Link href="#pricing" className="flex items-center gap-4">
                            Deploy System Now <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </button>
                </div>
            </Section>

        </div>
    );
}
