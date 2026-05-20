'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckCircle2,
    Smartphone,
    Lock,
    Target,
    Activity,
    GraduationCap,
    FileSignature,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ELITE_INDUSTRIES = [
    { name: "Hotel Operations", id: "hotels_and_resorts" },
    { name: "Restaurant Operations", id: "restaurants" },
    { name: "Jewellery Store Operations", id: "retail_jewellery_operations_pack" },
    { name: "Grocery Store Operations", id: "supermarket_grocery_retail_pack" },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations" },
    { name: "School Operations", id: "school_operations_pack" },
    { name: "Franchise Operations", id: "franchise_operations_pack" },
    { name: "Facilities Operations", id: "facility_management_blueprint" },
    { name: "Multiplex Operations", id: "cinema_operations_pack" },
    { name: "Fashion Store Operations", id: "fashion_and_apparel_retail" },
    { name: "Electronics Store Operations", id: "electronics_showroom_pack" }
];

const BRAND_GREEN = "#22C55E";
const CALENDLY_URL = "https://calendly.com/more-moremeets/30min";

const LabBranding = () => (
    <div className="absolute top-4 left-8 z-50 flex flex-col items-start gap-0.5">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
                <Check className="text-black w-3.5 h-3.5" />
            </div>
            <span className="font-headline text-lg font-bold text-white tracking-tight">MoreMeets™</span>
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/70">Where SOPs Meet Execution</span>
    </div>
);

const TechnicalPayload = () => (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">
        <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-primary/60" /> Audit Ready</span>
        <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary/60" /> Powered by Google Sheets</span>
        <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-primary/60" /> No SaaS Fees</span>
    </div>
);

const ActionUnit = ({ centered = true }: { centered?: boolean }) => (
    <div className={cn("flex flex-col gap-6", centered ? "items-center" : "items-start")}>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 rounded-xl bg-primary text-black font-black uppercase italic text-[10px] tracking-widest shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all border-none">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-xl border-white/30 text-white/90 font-black uppercase italic text-[10px] tracking-widest hover:bg-white/10 transition-all">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </Button>
        </div>
        <Link href={CALENDLY_URL} target="_blank" className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-white/20 hover:text-primary transition-colors">
            <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
    </div>
);

const AtmosphericBg = () => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
);

const MovingStrip = () => (
    <div className="absolute bottom-0 w-full overflow-hidden flex items-center h-12 bg-black/80 backdrop-blur-md border-t border-white/5 z-40">
         <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
            {ELITE_INDUSTRIES.map((ind) => (
                <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                </Link>
            ))}
            {/* Loop for infinite feel */}
            {ELITE_INDUSTRIES.map((ind) => (
                <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                </Link>
            ))}
         </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500/30 pb-40">
            
            <div className="container px-6 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v7.0
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter leading-tight text-white">
                    Operational <span className="text-emerald-500"> Rhythms.</span>
                </h1>
            </div>

            {/* --- ARCHETYPE 01: THE SOVEREIGN MONOLITH (TIGHTENED) --- */}
            <div className="w-full py-12 border-b border-white/5 bg-[#050505]">
                <div className="container px-6 mx-auto mb-8">
                    <h2 className="text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">01. The Sovereign Monolith (Tightened)</h2>
                </div>
                <div className="w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-y border-white/5 bg-black">
                    <AtmosphericBg />
                    <LabBranding />
                    <div className="relative z-10 container mx-auto max-w-[900px] text-center space-y-8">
                        <div className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-6">
                            <h1 className="text-[38px] md:text-[68px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                            </h1>
                            <p className="text-base md:text-xl italic font-medium text-zinc-400 mx-auto max-w-xl leading-tight">
                                Stop chasing staff on WhatsApp. <br/> Turn SOPs into daily execution.
                            </p>
                            <div className="flex flex-col items-center gap-8 pt-2">
                                <TechnicalPayload />
                                <ActionUnit />
                            </div>
                        </div>
                    </div>
                    <MovingStrip />
                </div>
            </div>

            {/* --- ARCHETYPE 02: THE COMMAND SPLIT (STANDARDIZED) --- */}
            <div className="w-full py-12 border-b border-white/5 bg-[#050505]">
                <div className="container px-6 mx-auto mb-8">
                    <h2 className="text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">02. The Command Split (Standardized)</h2>
                </div>
                <div className="w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-y border-white/5 bg-black">
                    <AtmosphericBg />
                    <LabBranding />
                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 items-center">
                            <div className="space-y-8 text-left">
                                <div className="space-y-4">
                                    <h1 className="text-[38px] md:text-[68px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                                        YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl italic font-medium text-zinc-400 max-w-lg leading-tight">
                                        Stop chasing staff on WhatsApp. <br/> Turn SOPs into daily execution.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    <TechnicalPayload />
                                    <ActionUnit centered={false} />
                                </div>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="absolute -inset-10 blur-[80px] opacity-10 bg-primary rounded-full" />
                                <div className="relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.01] backdrop-blur-md shadow-2xl space-y-6">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM STATUS</p>
                                        <h3 className="text-lg font-black italic uppercase text-white/90">Institutional Grade.</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            "No apps to install",
                                            "Works on any smartphone",
                                            "Audit-ready logs generated",
                                            "Shared team visibility"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-primary/60" />
                                                <span className="text-[10px] font-bold text-white/40 uppercase italic tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MovingStrip />
                </div>
            </div>

            {/* --- ARCHETYPE 03: PRESTIGIOUS MINIMALIST (TIGHTENED & CONTRAST) --- */}
            <div className="w-full py-12 border-b border-white/5 bg-[#050505]">
                <div className="container px-6 mx-auto mb-8">
                    <h2 className="text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">03. Prestigious Minimalist (High Contrast)</h2>
                </div>
                <div className="w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-y border-white/5 bg-black">
                    <AtmosphericBg />
                    <LabBranding />
                    <div className="relative z-10 container mx-auto max-w-[1200px] text-center space-y-12">
                        <div className="space-y-6">
                            <h1 className="text-[48px] md:text-[94px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                SOVEREIGN <br/> <span className="text-zinc-800">OPERATIONS.</span>
                            </h1>
                            <div className="h-0.5 w-16 bg-emerald-500 mx-auto shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-3">
                                <p className="text-lg md:text-2xl text-white font-bold italic uppercase tracking-widest max-w-2xl mx-auto leading-tight">
                                    "YOUR BUSINESS SHOULD NOT <br/> RUN ON MEMORY."
                                </p>
                                <p className="text-sm md:text-base text-zinc-500 font-medium italic max-w-md mx-auto">
                                    Stop chasing staff on WhatsApp. <br/> Turn SOPs into daily execution.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-10">
                                <ActionUnit />
                                <TechnicalPayload />
                            </div>
                        </div>
                    </div>
                    <MovingStrip />
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </div>
    );
}