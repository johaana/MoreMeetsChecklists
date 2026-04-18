
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
    ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { IconComponent } from '@/components/icons';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

// Industry specific technical pitfalls and prevention mappings
const getIndustryContent = (id: string) => {
    const defaults = {
        pitfalls: [
            "Tasks get skipped during busy shifts", 
            "Work depends on memory of key people", 
            "Inconsistent standards across locations",
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
        },
        'healthcare_and_hospital_operations': {
            pitfalls: [
                "Surgical safety 'time-outs' bypassed under high-volume pressure.",
                "High-alert medication dual-verification is skipped during shifts.",
                "Bedside handovers lose critical vitals data in verbal-only transfers.",
                "Biomedical waste segregation lapses risk massive regulatory fines.",
                "Pharmacy cold-chain integrity is assumed rather than logged.",
                "Audit non-conformance (NABH/JCI) detected only when it's too late.",
                "Staff skills decay because technical protocols aren't at the point of work.",
                "ICU and Ward vitals unmonitored due to management gaps."
            ],
            prevents: [
                { t: "Clinical errors", d: "Hardened surgical safety checks." },
                { t: "Audit non-conformance", d: "NABH/JCI ready documentation." },
                { t: "Patient risk", d: "Zero-fail ICU and Ward vitals." }
            ]
        },
        'school_operations_pack': {
            pitfalls: [
                "'Empty Bus Walkthroughs' missed, risking student abandonment.",
                "Visitor ID verification becomes lax at high-traffic entry points.",
                "Playground equipment rust and loose bolts go unnoticed by maintenance.",
                "Student allergy red-flags aren't synced with the canteen floor.",
                "Admin chaos ensues when attendance parity isn't verified by 8:30 AM.",
                "Campus safety culture drifts without verifiable technical audits.",
                "Institutional standards leave when key administrative staff resign.",
                "Emergency response fails because drills are documented but not hardened."
            ],
            prevents: [
                { t: "Transport tragedies", d: "Zero-fail bus safety protocols." },
                { t: "Campus accidents", d: "Daily playground & infrastructure audits." },
                { t: "Admin chaos", d: "Streamlined student welfare tracking." }
            ]
        }
    };

    return mapping[id] || defaults;
};

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const content = getIndustryContent(pack.id);

    if (!mounted) return null;

    return (
        <div className="bg-[#F7F8FA] text-[#0B0F14]">
            
            {/* SECTION 1 — HERO */}
            <section className="w-full bg-[#F7F8FA] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden min-h-[85vh] flex flex-col justify-center relative">
                <div className="container mx-auto max-w-[1200px] px-6">
                    {/* Subtle Background Accent */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B0F14_1px,transparent_1px)] [background-size:32px_32px]" />

                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center relative z-10">
                        
                        {/* LEFT SIDE: Narrative */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#5B6670]">{pack.category.toUpperCase()}</span>
                                <h1 className="text-[32px] md:text-[64px] font-black text-[#0B0F14] leading-[0.9] tracking-tighter uppercase italic drop-shadow-sm">
                                    {pack.title.replace('Operating System', '')} <br/> 
                                    <span className="text-[#0F3D2E]">Operating System</span>
                                </h1>
                                <p className="text-[20px] md:text-[24px] text-[#5B6670] italic font-medium leading-tight pt-2">
                                    Run your {pack.title.toLowerCase().replace(' operating system', '')} without chasing staff.
                                </p>
                            </div>

                            <div className="border-l-[3px] border-[#0B0F14] pl-[20px] space-y-2 py-1">
                                <p className="text-[18px] font-black leading-tight text-[#0B0F14] italic uppercase">Even when you’re not there.</p>
                                <div className="space-y-1.5 opacity-60">
                                    <p className="text-sm font-bold text-[#0B0F14]">Without follow-ups</p>
                                    <p className="text-sm font-bold text-[#0B0F14]">Without confusion</p>
                                    <p className="text-sm font-bold text-[#0B0F14]">Without depending on memory</p>
                                </div>
                            </div>

                            <p className="text-sm font-bold text-[#0B0F14] italic opacity-80">Pre-built, editable SOPs with live tracking and dashboard</p>

                            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                                <button className="h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group">
                                    <a href="#pricing" className="flex items-center gap-3">
                                        Deploy your system → ₹{pack.priceINR}
                                    </a>
                                </button>
                                <div className="flex flex-col">
                                    <p className="text-[10px] font-black text-[#5B6670] uppercase tracking-[0.2em]">ONE-TIME • OWN FOREVER</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Technical Image Frame (No Annotations) */}
                        <div className="relative lg:-ml-44">
                            <div className="relative mx-auto w-fit scale-110 lg:scale-125 transition-all duration-1000">
                                <div className="rounded-[24px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.15)] bg-white border border-zinc-200 relative max-w-lg">
                                    {/* Browser Simulation Bar */}
                                    <div className="bg-[#111] h-10 w-full flex items-center px-4 gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                            <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                                            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-white/5 px-6 py-1 rounded text-[8px] font-black text-white/30 uppercase tracking-[0.4em] italic truncate max-w-[240px]">
                                                {pack.id.toUpperCase()}_SOVEREIGN_MASTER_ENGINE
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
                                    <p className="text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.5em] italic opacity-50">
                                        {pack.category} technical implementation proof
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHY THIS MATTERS (Expanded & Grid) */}
            <Section className="bg-white border-y border-zinc-200">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Why {pack.title.toLowerCase().replace(' operating system', '')} operations break</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {content.pitfalls.map((p, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#F7F8FA] border border-zinc-100 group hover:border-[#F4A261]/30 transition-all">
                                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                                <span className="text-[#5B6670] font-bold italic text-lg leading-tight">{p}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="pt-6">
                        <p className="text-xl font-black text-red-600 uppercase italic">Small misses create big failures.</p>
                        <p className="text-xs text-[#5B6670] mt-2 font-black uppercase tracking-[0.4em] opacity-40">Operational Hardening Required</p>
                    </div>
                </div>
            </Section>

            {/* SECTION 3 — WHAT THIS SYSTEM DOES */}
            <Section>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "Pre-built SOPs", d: "Everything already defined", i: ClipboardCheck },
                        { t: "Daily tracking", d: "Tasks updated as work happens", i: Clock },
                        { t: "Live dashboard", d: "See what’s done vs missed instantly", i: Activity }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all text-center space-y-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mx-auto group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                <card.i className="w-7 h-7" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-black uppercase italic leading-tight">{card.t}</h4>
                                <p className="text-[#5B6670] text-base font-medium italic">{card.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* SECTION 4 — HOW IT WORKS */}
            <Section className="bg-[#F7F8FA] border-y border-zinc-200">
                <div className="space-y-16">
                    <div className="text-center space-y-2">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { t: "Download your system", d: "Get your industry-specific file with pre-built SOPs — ready to use." },
                            { t: "Open in Google Sheets", d: "Upload once. Access from phone or desktop." },
                            { t: "Share with your team", d: "Assign roles. Lock structure so nothing breaks." },
                            { t: "See everything live", d: "Track tasks as they get done. Know what’s missed — without asking." }
                        ].map((step, i) => (
                            <div className="bg-white border border-zinc-200 p-8 rounded-3xl space-y-6 hover:shadow-lg transition-all group" key={i}>
                                <div className="w-12 h-12 rounded-2xl bg-[#F7F8FA] border border-zinc-200 flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-xl italic shadow-inner">
                                    {i+1}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-base uppercase italic leading-tight">{step.t}</h4>
                                    <p className="text-sm text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-8 space-y-4">
                        <p className="text-[22px] md:text-[28px] font-black text-[#0B0F14] uppercase italic tracking-tighter">
                            👉 That’s it. Your operations are now structured.
                        </p>
                        <p className="text-sm text-[#5B6670] font-bold uppercase tracking-widest italic opacity-60">
                            No setup. No training. Ready in minutes.
                        </p>
                    </div>
                </div>
            </Section>

            {/* SECTION 5 — PACK-SPECIFIC DEPTH */}
            <Section className="bg-white">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-full">OS Interior</Badge>
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">What’s inside the system</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {pack.checklists.map((checklist, index) => (
                            <div key={index} className="flex gap-6 p-8 rounded-3xl bg-[#F7F8FA] border border-zinc-100 group hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all shadow-sm">
                                    <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-7 h-7" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black text-lg uppercase italic leading-tight">{checklist.title}</h4>
                                    <p className="text-base text-[#5B6670] italic font-medium leading-snug">{checklist.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 6 — ROLES / MODULES */}
            <Section className="bg-[#F7F8FA] border-y border-zinc-200">
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {pack.checklists.slice(0, 6).map((checklist, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 space-y-6 shadow-sm hover:shadow-xl transition-all">
                            <div className="flex justify-between items-start">
                                <h4 className="text-[12px] font-black uppercase text-[#5B6670] tracking-[0.3em]">{checklist.role}</h4>
                                <Badge variant="outline" className="text-[9px] font-black tracking-widest bg-zinc-50 border-zinc-200 uppercase">{checklist.frequency}</Badge>
                            </div>
                            <div className="space-y-3">
                                <p className="text-2xl font-black italic uppercase leading-none tracking-tighter">
                                    {checklist.title.replace('System', '').replace('Command', '').replace('Operations', '').replace('Protocol', '')}
                                </p>
                                <p className="text-[11px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-2">
                                    <Target className="w-4 h-4" /> {checklist.tasks.length} Checkpoints
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* SECTION 7 — REAL RISKS */}
            <Section className="bg-white">
                <div className="max-w-[900px] mx-auto space-y-16">
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">What this prevents</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {content.prevents.map((item, i) => (
                            <div key={i} className="space-y-4 text-center group">
                                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto group-hover:scale-110 transition-transform">
                                    <AlertTriangle className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-lg uppercase italic leading-tight">{item.t}</h4>
                                    <p className="text-base text-[#5B6670] italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SECTION 8-11 — PRICING & PROOFS */}
            <Section id="pricing" className="bg-[#0F3D2E] text-white py-32 md:py-48 relative overflow-hidden">
                 {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

                <div className="max-w-xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-6">
                        <Badge variant="outline" className="text-[#F4A261] border-[#F4A261]/30 uppercase tracking-[0.5em] font-black text-[11px] px-10 py-3 rounded-none">Institutional Certainty</Badge>
                        <h2 className="text-[40px] md:text-[72px] font-black leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">Deploy your system</h2>
                        
                        <div className="flex flex-col items-center pt-4">
                            <div className="flex items-baseline gap-4">
                                <p className="text-[64px] font-black italic">₹{pack.priceINR}</p>
                                <span className="text-2xl font-bold text-white/30 italic line-through">₹1,999</span>
                            </div>
                            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 mt-1">One-time payment • Own forever</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-left border-y border-white/10 py-12">
                        {[
                            { t: "Pre-built SOPs", i: ClipboardCheck },
                            { t: "Auto dashboard", i: Activity },
                            { t: "Trainer notes", i: GraduationCap },
                            { t: "Admin controls", i: Lock },
                            { t: "Multi-branch ready", i: LayoutGrid },
                            { t: "100% Unlocked Excel", i: FileSpreadsheet }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <item.i className="w-5 h-5 text-[#F4A261] shrink-0" />
                                <span className="text-[11px] font-bold uppercase tracking-widest italic leading-none">{item.t}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-10">
                        <button className="h-[84px] w-full px-12 rounded-[16px] bg-[#F4A261] text-white font-black uppercase italic text-2xl shadow-[0_20px_60px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group">
                            <Link href={`/packs/${pack.id}#pricing`} className="flex items-center justify-center gap-4">
                                DEPLOY SYSTEM NOW <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </button>
                        <div className="space-y-4">
                            <p className="text-[20px] md:text-[24px] font-black uppercase italic tracking-tighter text-white">
                                👉 Start running your {pack.title.toLowerCase().replace(' operating system', '')} properly
                            </p>
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.8em]">SOVEREIGN_SYSTEM_DEPLOYMENT_V11.9</p>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
}
