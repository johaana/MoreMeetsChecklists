'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Utensils, 
    Building, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn,
    ChevronRight
} from "lucide-react";
import React from 'react';

const ELITE_INDUSTRIES = [
    { name: "Restaurant Operations", id: "restaurants", icon: Utensils },
    { name: "Hotel Operations", id: "hotels_and_resorts", icon: Building },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "School Operations", id: "school_operations_pack", icon: School },
    { name: "Franchise Operations", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities Operations", id: "facility_management_blueprint", icon: Building2 },
    { name: "Multiplex Operations", id: "cinema_operations_pack", icon: Popcorn }
];

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "WORKS DURING INTERNET DISRUPTIONS",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

const PROOF_STRIP = "EXCEL & SHEETS • OWN FOREVER • NO SaaS";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

export const HeroSection = () => (
    <section className="relative w-full overflow-hidden bg-black">
        {/* --- MOBILE ARCHITECTURE --- */}
        <div className="md:hidden flex flex-col min-h-[100dvh] relative">
            <div className="absolute inset-0 z-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                <video 
                    src={VIDEO_URL} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    className="w-full h-full object-cover opacity-20 grayscale will-change-transform" 
                    style={{ transform: 'translate3d(0,0,0)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col pt-16 pb-4">
                <div className="flex-1 grid grid-cols-[30px,1fr] gap-0">
                    <div className="relative h-full flex flex-col items-center">
                        <div className="absolute inset-y-0 w-px bg-primary/20" />
                    </div>

                    <div className="flex flex-col space-y-4 pr-6">
                        <div className="space-y-2">
                            <h1 className="text-[2rem] font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-[10px] text-white/40 italic font-medium max-w-[180px]">
                                Your business should not depend on memory. Luck is not a strategy.
                            </p>
                        </div>

                        <div className="space-y-2 py-1">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] font-headline">SYSTEM SPECS</span>
                            <div className="space-y-1.5">
                                {SYSTEM_SPECS.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] italic text-white/50 leading-none">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3 pt-2 flex flex-col items-end">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em] font-headline text-right">SELECT VERTICAL</span>
                            <div className="flex flex-col space-y-2 items-end">
                                {ELITE_INDUSTRIES.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center gap-2">
                                        <span className="text-base font-black font-headline uppercase italic tracking-tighter text-white/20 group-hover:text-primary transition-all text-right">{ind.name}</span>
                                        <ChevronRight className="w-3 h-3 text-white/5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 mt-auto space-y-3">
                    <div className="bg-white/[0.03] border-y border-white/5 py-2">
                        <p className="text-[7px] text-white/30 font-black text-center uppercase tracking-[0.3em] italic">{PROOF_STRIP}</p>
                    </div>
                    <div className="text-center">
                         <Link href="/library" className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic hover:underline flex items-center justify-center gap-2">
                            EXPLORE SYSTEMS HUB <ArrowRight className="w-3 h-3" />
                         </Link>
                    </div>
                    <div className="flex justify-center pb-2">
                        <div className="w-20 h-1 rounded-full bg-primary/20" />
                    </div>
                </div>
            </div>
        </div>

        {/* --- DESKTOP ARCHITECTURE --- */}
        <div className="hidden md:flex flex-row items-center h-screen relative pt-16">
            <div className="absolute inset-0 z-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                <video 
                    src={VIDEO_URL} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    className="w-full h-full object-cover opacity-30 will-change-transform" 
                    style={{ transform: 'translate3d(0,0,0)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>
            <div className="container px-4 md:px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24 mx-auto">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">CAPTURE<br /><span className="text-primary">MEMORY.</span></h1>
                        <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">Your business should not depend on memory. <br /> Serious operations deserve more than improvisation.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {SYSTEM_SPECS.map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{spec}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <Button asChild size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest transition-all active:scale-[0.98]">
                            <Link href="/library" className="flex items-center justify-center gap-2">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="h-5 w-5" /></Link>
                        </Button>
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] pl-2">{PROOF_STRIP} • NO SaaS</p>
                    </div>
                </div>
                <div className="p-1 border-l border-white/10 space-y-10 pl-20">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                    <div className="space-y-5">
                        {ELITE_INDUSTRIES.map((ind) => (
                            <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:translate-x-3">{ind.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
