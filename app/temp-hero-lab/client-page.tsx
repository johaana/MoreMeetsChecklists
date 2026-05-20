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
    ChevronRight,
    ShieldCheck,
    AlertTriangle,
    Users,
    FileSignature,
    SearchCheck,
    Clock,
    LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BRAND_GREEN = "#22C55E";
const CALENDLY_URL = "https://calendly.com/more-moremeets/30min";

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

const ActionUnit = ({ centered = false }: { centered?: boolean }) => (
    <div className={cn("flex flex-col gap-6", centered ? "items-center" : "items-start")}>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-[11px] tracking-widest shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all border-none">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 rounded-xl border-white/30 text-white/90 font-black uppercase italic text-[11px] tracking-widest hover:bg-zinc-800 hover:text-white transition-all bg-transparent">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </Button>
        </div>
        <Link href={CALENDLY_URL} target="_blank" className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-white/20 hover:text-primary transition-colors">
            <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
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
            {/* Duplicate for seamless loop */}
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
            
            <div className="container px-6 pt-24 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v11.0
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase tracking-tighter text-white">
                    Winner Refinement: <span className="text-emerald-500">The Command Split</span>
                </h1>
            </div>

            {/* --- REFINED WINNER: THE COMMAND SPLIT --- */}
            <div className="w-full py-12 border-b border-white/5 bg-[#050505]">
                <div className="container px-6 mx-auto mb-8">
                    <h2 className="text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">The Final Prototype (Option 2 Refined)</h2>
                </div>
                <div className="w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-y border-white/5 bg-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.15)_0%,transparent_60%)]" />
                    
                    <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-20 items-center">
                            <div className="space-y-10 text-left">
                                <div className="space-y-5">
                                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.3em] font-black text-[10px] rounded-none py-1.5 px-4 mb-2">
                                        ONE-TIME PURCHASE • OWN FOREVER • NO MONTHLY FEES
                                    </Badge>
                                    <h1 className="text-[42px] md:text-[64px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                        YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                                    </h1>
                                    <p className="text-lg md:text-2xl italic font-medium text-zinc-400 max-w-xl leading-tight">
                                        Stop depending on memory and verbal follow-ups. <br/>
                                        Daily operations your staff will actually follow.
                                    </p>
                                </div>
                                <div className="space-y-10">
                                    <ActionUnit />
                                </div>
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
                                            "Works on phones via Google Sheets",
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