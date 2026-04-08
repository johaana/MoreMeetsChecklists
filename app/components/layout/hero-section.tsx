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
    ChevronRight,
    ShieldCheck,
    ChevronDown
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "AUDIT-READY COMPLIANCE",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA.",
    "WORKS ON EXCEL & SHEETS"
];

const PROOF_STRIP = "WORKS ON EXCEL & SHEETS • OWN FOREVER • NO SaaS";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

export const HeroSection = () => (
    <section className="relative w-full overflow-hidden bg-black">
        {/* --- MOBILE ARCHITECTURE: THE SOVEREIGN SPLIT (V13.0) --- */}
        <div className="md:hidden flex flex-col min-h-[100dvh] relative">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <video 
                    src={VIDEO_URL} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-30 grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col pt-20 pb-4 h-full">
                <div className="flex-1 grid grid-cols-[40px,1fr] gap-0">
                    
                    {/* Left: The Structural Divider */}
                    <div className="relative h-full flex flex-col items-center">
                        <div className="absolute inset-y-0 w-px bg-primary/20" />
                    </div>

                    {/* Right: The Content Stack (Staggered Scan) */}
                    <div className="flex flex-col space-y-8 pr-6 overflow-y-auto no-scrollbar">
                        
                        {/* 1. Narrative Block */}
                        <div className="space-y-3">
                            <h1 className="text-[2.2rem] font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-[11px] text-white/40 italic font-medium leading-relaxed max-w-[220px]">
                                Institutional memory is an asset. <br/> Anything else is just luck.
                            </p>
                        </div>

                        {/* 2. System Specifications (Refined Gravity) */}
                        <div className="space-y-4 py-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-headline">SYSTEM SPECIFICATIONS</span>
                            <div className="space-y-2.5">
                                {SYSTEM_SPECS.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-primary shrink-0 shadow-[0_0_6px_rgba(46,184,107,0.4)]" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-white/60 leading-none">
                                            {spec}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Industry Vertical Stack (Right-Aligned for Ergonomics) */}
                        <div className="space-y-5 pt-4 pb-8 flex flex-col items-end">
                            <div className="flex flex-col items-end space-y-1.5">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] font-headline text-right">SELECT VERTICAL</span>
                                <div className="w-12 h-px bg-primary/20" />
                            </div>
                            
                            <div className="flex flex-col space-y-4 items-end">
                                {ELITE_INDUSTRIES.map((ind) => (
                                    <Link 
                                        key={ind.id} 
                                        href={`/packs/${ind.id}`} 
                                        className="group flex items-center gap-3"
                                    >
                                        <span className="text-lg font-black font-headline uppercase italic tracking-tighter text-white/20 group-hover:text-primary transition-all duration-300">
                                            {ind.name}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-white/5 group-hover:text-primary transition-colors translate-y-[1px]" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conversion Footer with Sovereign Proof-Strip */}
                <div className="px-6 mt-auto space-y-5">
                    {/* The Refined Strip */}
                    <div className="bg-white/[0.03] border-y border-white/5 py-3 px-2">
                        <p className="text-[8px] text-white/40 font-black text-center uppercase tracking-[0.3em] italic">
                            {PROOF_STRIP}
                        </p>
                    </div>

                    <div className="pt-1 text-center">
                         <Link href="/library" className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic hover:underline flex items-center justify-center gap-2">
                            EXPLORE SYSTEMS HUB <ArrowRight className="w-3 h-3" />
                         </Link>
                    </div>
                    
                    {/* Native Sovereign Home-Bar */}
                    <div className="flex justify-center pt-1 pb-2">
                        <div className="w-24 h-1 rounded-full bg-primary/30" />
                    </div>
                </div>
            </div>
        </div>

        {/* --- DESKTOP ARCHITECTURE: THE ELITE REFINEMENT --- */}
        <div className="hidden md:flex flex-row items-center h-screen relative pt-16">
            {/* Cinematic Visual Layer */}
            <div className="absolute inset-0 z-0">
                <video 
                    src={VIDEO_URL} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-30" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="container px-4 md:px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24 mx-auto">
                {/* Left: Narrative & Payload */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                            CAPTURE<br />
                            <span className="text-primary">MEMORY.</span>
                        </h1>
                        <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                            Institutional memory is an asset. <br /> Anything else is just luck.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        {SYSTEM_SPECS.slice(0, 4).map((spec, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{spec}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <Button asChild size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest transition-all active:scale-95">
                            <Link href="/library" className="flex items-center justify-center gap-2">
                                GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] pl-2">{PROOF_STRIP}</p>
                    </div>
                </div>

                {/* Right: Sector Selection (Vertical stack) */}
                <div className="p-1 border-l border-white/10 space-y-10 pl-20">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                    <div className="space-y-5">
                        {ELITE_INDUSTRIES.map((ind) => (
                            <Link 
                                key={ind.id} 
                                href={`/packs/${ind.id}`} 
                                className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:translate-x-3"
                            >
                                {ind.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);