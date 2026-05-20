'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckSquare,
    Shield,
    Infinity,
    Grid3X3,
    Command,
    Smartphone,
    ChevronRight,
    Target,
    Activity,
    GraduationCap,
    FileSignature,
    ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BRAND_GREEN = "#22C55E";
const CALENDLY_URL = "https://calendly.com/more-moremeets/30min";
const PRICING_STRIP = "ONE-TIME PURCHASE • OWN FOREVER • NO MONTHLY FEES";

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

const ActionBlock = ({ centered = false }: { centered?: boolean }) => (
    <div className={cn("flex flex-col gap-4 md:gap-6", centered ? "items-center" : "items-start")}>
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl bg-primary text-black font-black uppercase italic text-[10px] md:text-[11px] tracking-widest shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all border-none">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl border-white/10 text-white/90 font-black uppercase italic text-[10px] md:text-[11px] tracking-widest hover:bg-zinc-800 hover:text-white transition-all bg-transparent">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </Button>
        </div>
        <div className="space-y-1.5 md:space-y-2 text-center lg:text-left">
            <Link href={CALENDLY_URL} target="_blank" className="group flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] text-white/20 hover:text-primary transition-colors">
                <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
                <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </div>
);

const MovingStrip = () => (
    <div className="absolute bottom-0 w-full overflow-hidden flex flex-col items-center bg-black/80 backdrop-blur-md border-t border-white/5 z-40">
         <div className="w-full py-2 bg-white/[0.02] border-b border-white/5 text-center">
            <p className="text-[8px] md:text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">{PRICING_STRIP}</p>
         </div>
         <div className="w-full h-10 md:h-12 flex items-center">
            <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
                {ELITE_INDUSTRIES.map((ind) => (
                    <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                    </Link>
                ))}
                {/* Loop Replication */}
                {ELITE_INDUSTRIES.map((ind) => (
                    <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                    </Link>
                ))}
            </div>
         </div>
    </div>
);

const AtmosphericHero = ({ children, id, label }: { children: React.ReactNode, id: string, label: string }) => (
    <div className="w-full py-6 md:py-12 border-b border-white/5 bg-[#050505]">
        <div className="container px-6 mx-auto mb-10 md:mb-12 flex justify-between items-center">
            <h2 className="text-[10px] md:text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">Variation {id}: {label}</h2>
             <div className="flex items-center gap-2 md:gap-3">
                <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <div className="flex flex-col">
                    <span className="font-headline text-[10px] md:text-xs font-bold leading-none tracking-tight text-white uppercase">MoreMeets™</span>
                    <span className="text-[6px] md:text-[7px] font-black uppercase tracking-[0.2em] text-white/40 leading-none mt-1">WHERE SOPs MEET EXECUTION</span>
                </div>
            </div>
        </div>
        <div className="w-full relative overflow-hidden min-h-[90svh] flex flex-col justify-center border-y border-white/5 bg-black pb-44 pt-10 md:pt-20 md:pb-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
            <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                {children}
            </div>
            <MovingStrip />
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
            
            <div className="container px-6 pt-24 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v18.0
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase tracking-tighter text-white">
                    Operational <span className="text-emerald-500">Design Selection</span>
                </h1>
            </div>

            {/* --- VAR 1: THE MONOLITH --- */}
            <AtmosphericHero id="01" label="The Centered Monolith">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="space-y-4">
                        <h1 className="text-[36px] md:text-[72px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter">
                            YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                        </h1>
                        <p className="text-base md:text-2xl italic font-medium text-zinc-400 max-w-2xl mx-auto leading-tight">
                            Stop depending on memory and verbal follow-ups. <br/>
                            Daily operations your staff will actually follow.
                        </p>
                    </div>
                    <ActionBlock centered />
                </div>
            </AtmosphericHero>

            {/* --- VAR 2: THE COMMAND SPLIT --- */}
            <AtmosphericHero id="02" label="The Command Split">
                <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-20 items-center">
                    <div className="space-y-10 text-left">
                        <div className="space-y-5">
                            <h1 className="text-[36px] md:text-[64px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                            </h1>
                            <p className="text-base md:text-2xl italic font-medium text-zinc-400 max-w-xl leading-tight">
                                Stop depending on memory and verbal follow-ups. <br/>
                                Daily operations your staff will actually follow.
                            </p>
                        </div>
                        <ActionBlock />
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="absolute -inset-10 blur-[80px] opacity-10 bg-primary rounded-full" />
                        <div className="relative p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-8">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-headline">BUILT FOR DAILY EXECUTION</p>
                                <h3 className="text-xl font-black italic uppercase text-white/90">Institutional Grade.</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Daily tasks assigned automatically",
                                    "Staff know exactly what to do",
                                    "Managers track completion live",
                                    "Works on phones through Sheets",
                                    "Ready in 10 minutes",
                                    "No app installation required"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-2.5 h-2.5 text-primary" />
                                        </div>
                                        <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- VAR 7: THE REPORTING CHASE (WINNER) --- */}
            <AtmosphericHero id="07" label="The Reporting Chase (Winner)">
                <div className="relative">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-start lg:items-center">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-[36px] md:text-[60px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter">
                                STOP THE <br/> REPORTING <br/> <span className="text-red-500">CHASE.</span>
                            </h1>
                            <p className="text-zinc-400 text-sm md:text-xl font-medium italic border-l-2 border-primary/20 pl-6 max-w-xl">
                                Stop chasing staff on calls or WhatsApp and start seeing real-time reporting from your phone. Even when you aren't there.
                            </p>
                        </div>
                        
                        {/* Mandate Panel - Re-ordered for Mobile: Mandate before CTA */}
                        <div className="order-2 lg:order-none relative w-full lg:col-start-2 lg:row-start-1 lg:row-span-2">
                             <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-3xl -rotate-1" />
                             <div className="relative p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-white/10 bg-zinc-950/80 backdrop-blur-xl space-y-4 md:space-y-8">
                                <div className="space-y-1 md:space-y-2">
                                    <p className="text-[8px] md:text-[9px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">THE MANDATE</p>
                                    <p className="text-xs md:text-sm font-black italic uppercase text-white/90 leading-tight">YOUR BUSINESS SHOULD NOT RUN ON MEMORY.</p>
                                </div>
                                {/* 2-column grid on mobile to accommodate in one glance */}
                                <div className="grid grid-cols-2 lg:flex lg:flex-col gap-x-4 gap-y-3 md:gap-y-4 pt-1">
                                    {[
                                        "Daily tasks assigned automatically",
                                        "Staff know exactly what to do",
                                        "Managers can track completion live",
                                        "Works on phones via Google Sheets",
                                        "Ready in 10 minutes",
                                        "No app installation required"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 md:gap-4">
                                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-primary" />
                                            </div>
                                            <span className="text-[9px] md:text-[11px] font-bold text-zinc-300 uppercase tracking-widest italic leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>

                        {/* CTA Block - Order 3 on Mobile */}
                        <div className="order-3 lg:order-none w-full lg:col-start-1 lg:row-start-2">
                            <ActionBlock />
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- LOGO DESIGN LAB --- */}
            <div className="container px-6 py-32 mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">BRAND IDENTITY LAB</Badge>
                    <h2 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-white">Choose Your Vision</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                        { label: "Option A", desc: "Reliable Standard", icon: CheckSquare },
                        { label: "Option B", desc: "Geometric Pivot", icon: Command },
                        { label: "Option C", desc: "Command Shield", icon: Shield },
                        { label: "Option D", desc: "Operational Continuity", icon: Infinity },
                        { label: "Option E", desc: "Precision Grid", icon: Grid3X3 }
                    ].map((opt, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-3 group hover:border-primary/30 transition-all">
                            <opt.icon className="w-8 h-8 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-primary">{opt.label}</p>
                                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{opt.desc}</p>
                            </div>
                        </div>
                    ))}
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
