'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    ChevronRight, 
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
    Smartphone
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

const TECHNICAL_PAYLOAD = [
    { t: "120+ Pre-built SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for staff", i: Smartphone }
];

export const HeroSection = () => (
    <section className="relative w-full overflow-hidden bg-black">
        {/* --- MOBILE ARCHITECTURE: OPTION 1 (THE COMMAND GRID) --- */}
        <div className="md:hidden flex flex-col min-h-[calc(100dvh-64px)]">
            {/* 1. Video Header (35%) */}
            <div className="relative h-[35vh] w-full overflow-hidden bg-zinc-900">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-[2.2rem] font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter">
                        STOP CHASING.<br />
                        <span className="text-primary">START SEEING.</span>
                    </h1>
                </div>
            </div>

            {/* 2. Control Deck (65%) */}
            <div className="flex-1 px-6 pt-2 pb-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                    {/* Industry Selector */}
                    <div className="space-y-3">
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
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                        {TECHNICAL_PAYLOAD.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <item.i className="w-3 h-3 text-primary/60" />
                                <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">{item.t}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Unified CTA & Proof */}
                <div className="space-y-4">
                    <Button asChild className="w-full h-16 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-[0_0_30px_-10px_rgba(46,184,107,0.5)] border-none active:scale-95 transition-all">
                        <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    
                    <div className="flex justify-between items-center px-1 pt-2 border-t border-white/5">
                        {[
                            { t: "EXCEL READY", i: ShieldCheck },
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

        {/* --- DESKTOP ARCHITECTURE: CINEMATIC SIDE-BY-SIDE --- */}
        <div className="hidden md:flex flex-row items-center h-[90vh] min-h-[700px]">
            {/* Cinematic Visual Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Surgical Masking: 100% Black on text-side, sharp transition to clear environment */}
                <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#000_0%,#000_35%,rgba(0,0,0,0.8)_45%,rgba(0,0,0,0)_70%)]" />
            </div>

            {/* Left Command Block */}
            <div className="container px-4 md:px-6 relative z-20 flex flex-col justify-center">
                <div className="max-w-3xl space-y-5 md:space-y-6">
                    {/* 1. Hook & Payoff */}
                    <h1 className="md:text-7xl lg:text-[5.2rem] font-black font-headline tracking-tighter !leading-[0.82] text-primary-text uppercase italic">
                        STOP CHASING. <br />
                        <span className="text-primary">START SEEING.</span>
                    </h1>

                    {/* 2. Result Clarity */}
                    <div className="space-y-1.5">
                        <h2 className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                            Your team marks tasks. <br />
                            <span className="text-primary">You see everything without asking.</span>
                        </h2>
                        <p className="text-base md:text-lg max-w-[500px] text-secondary-text leading-snug font-medium italic border-l-2 border-primary/20 pl-5">
                            Know what's done. What's missed. What's delayed. <br />
                            Across your entire operation.
                        </p>
                    </div>

                    {/* 3. The Left Switchboard */}
                    <div className="p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-lg shadow-2xl space-y-3">
                        <div className="space-y-2">
                            <h3 className="text-[13px] font-black text-primary uppercase tracking-[0.3em]">SEE HOW IT WORKS FOR YOUR BUSINESS</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                                {ELITE_INDUSTRIES.map(item => (
                                    <Link 
                                        key={item.id} 
                                        href={`/packs/${item.id}`} 
                                        className="flex items-center justify-between group/link text-sm font-bold text-primary-text/70 hover:text-primary transition-all uppercase italic tracking-tighter border-b border-white/5 pb-0.5"
                                    >
                                        <div className="flex items-center gap-2">
                                            <item.icon className="w-3.5 h-3.5 text-primary/40 group-hover/link:text-primary transition-colors" />
                                            <span>{item.name}</span>
                                        </div>
                                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Action & Proof */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                            {[
                                { t: "NO APPS / NO SAAS", i: Lock },
                                { t: "OWN FOREVER", i: Zap },
                                { t: "AUDIT READY", i: ShieldCheck }
                            ].map(point => (
                                <div key={point.t} className="flex items-center gap-1.5">
                                    <point.i className="w-4 h-4 text-primary" />
                                    <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{point.t}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-3">
                            <Button size="lg" asChild className="group h-14 md:h-16 px-8 md:px-10 rounded-xl bg-primary text-black hover:brightness-110 shadow-[0_0_30px_-10px_rgba(46,184,107,0.5)] transition-all active:scale-95 border-none">
                                <Link href="/library" className="inline-flex items-center justify-center font-black uppercase italic text-sm md:text-base tracking-widest">
                                    GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <p className="text-[11px] md:text-xs text-secondary-text/70 italic font-bold leading-tight uppercase tracking-[0.15em] border-l border-primary/30 pl-4">
                                NO LEARNING CURVE. <br /> RUNS ON EXCEL / GOOGLE SHEETS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);