'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Lock, 
    Zap, 
    ShieldCheck, 
    Utensils, 
    Building, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn,
    ClipboardCheck,
    Activity,
    FileSpreadsheet,
    FileCheck
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

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

export const HeroSection = () => (
    <section className="relative w-full overflow-hidden bg-black">
        {/* --- MOBILE ARCHITECTURE: THE COMMAND GRID --- */}
        <div className="md:hidden flex flex-col min-h-[100dvh]">
            {/* 1. Video Header (35%) */}
            <div className="relative h-[32vh] w-full overflow-hidden bg-zinc-900">
                <video
                    src={VIDEO_URL}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                    <h1 className="text-[2rem] font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                        STOP CHASING.<br />
                        <span className="text-primary">START SEEING.</span>
                    </h1>
                </div>
            </div>

            {/* 2. Control Deck (65%) */}
            <div className="flex-1 px-6 pt-2 pb-6 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                    {/* Industry Selector */}
                    <div className="space-y-2">
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                        <div className="grid grid-cols-2 gap-2">
                            {ELITE_INDUSTRIES.map((ind, i) => (
                                <Link 
                                    key={ind.id} 
                                    href={`/packs/${ind.id}`} 
                                    className={cn(
                                        "flex items-center gap-2.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5 transition-colors",
                                        i === ELITE_INDUSTRIES.length - 1 && "col-span-2"
                                    )}
                                >
                                    <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                    <span className="text-[8px] font-black uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Technical Payload */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-2">
                            <ClipboardCheck className="w-3 h-3 text-primary/60" />
                            <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">120+ PRE-BUILT SOPs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileCheck className="w-3 h-3 text-primary/60" />
                            <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">AUDIT-READY COMPLIANCE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-primary/60" />
                            <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">LIVE DASHBOARD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-3 h-3 text-primary/60" />
                            <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">NO SaaS. OWN YOUR DATA.</span>
                        </div>
                    </div>
                </div>

                {/* Unified CTA & Proof */}
                <div className="space-y-3">
                    <Button asChild className="w-full h-14 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all">
                        <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    
                    <div className="flex justify-between items-center px-1 pt-2 border-t border-white/5">
                        {[
                            { t: "EXCEL & SHEETS", i: ShieldCheck },
                            { t: "OWN FOREVER", i: Zap },
                            { t: "AUDIT READY", i: ShieldCheck }
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-1">
                                <point.i className="w-2 h-2 text-primary/60" />
                                <span className="text-[6px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
                            </div>
                        ))}
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

            <div className="container px-4 md:px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24">
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
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">120+ PRE-BUILT SOPs</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">AUDIT-READY COMPLIANCE</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">LIVE DASHBOARD TELEMETRY</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button asChild size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest transition-all active:scale-95">
                            <Link href="/library" className="flex items-center justify-center gap-2">
                                GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                        <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] pl-2">WORKS ON EXCEL & SHEETS • OWN FOREVER • NO SaaS</p>
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
