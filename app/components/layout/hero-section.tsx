'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Lock, Zap, Check } from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants" },
    { name: "Hotels & Resorts", id: "hotels_and_resorts" },
    { name: "Healthcare", id: "healthcare_and_hospital_operations" },
    { name: "Schools", id: "school_operations_pack" },
    { name: "Franchise Networks", id: "franchise_operations_pack" },
    { name: "Facilities", id: "facility_management_blueprint" },
    { name: "Cinemas", id: "cinema_operations_pack" }
];

export const HeroSection = () => (
    <section className="relative w-full flex flex-col md:flex-row md:items-center min-h-[calc(100dvh-64px)] md:h-[92vh] overflow-hidden bg-background">
        {/* Cinematic Visual Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
            />
            {/* Gradient Masking - Surgical heavy-left mask, clear right */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.9)_25%,rgba(10,15,25,0.4)_50%,rgba(10,15,25,0)_100%)]" />
        </div>

        {/* Left Command Block */}
        <div className="container px-4 md:px-6 relative z-20 flex flex-col justify-center pt-6 md:pt-10 pb-8">
            <div className="max-w-3xl space-y-4 md:space-y-5">
                {/* 1. Hook & Payoff - Tighter Lead */}
                <div className="space-y-0.5">
                    <div className="flex items-center px-1 pb-1">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic border-l-2 border-primary/40 pl-3 pr-4">
                            MoreMeets™ Sovereign Operating System
                        </p>
                    </div>
                    <h1 className="text-[2.2rem] sm:text-6xl md:text-7xl lg:text-[4.8rem] font-black font-headline tracking-tighter !leading-[0.82] text-primary-text uppercase italic">
                        STOP CHASING. <br />
                        <span className="text-primary">START SEEING.</span>
                    </h1>
                </div>

                {/* 2. Result Clarity (Telemetry) - Sentence Case refinement */}
                <div className="space-y-1.5">
                    <h2 className="text-lg md:text-xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                        Your team updates tasks. <br />
                        <span className="text-primary/80">You see everything live.</span>
                    </h2>
                    <p className="text-[13px] md:text-sm max-w-[450px] text-secondary-text leading-snug font-medium italic border-l-2 border-primary/20 pl-5">
                        Know what's done. What's missed. What's delayed. <br />
                        Across your entire operation.
                    </p>
                </div>

                {/* 3. The Left Switchboard (Compact Glass) - Tighter Padding */}
                <div className="p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-lg shadow-2xl space-y-3">
                    <div className="space-y-1">
                        <h3 className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">SELECT DEPLOYMENT MODULE:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                            {ELITE_INDUSTRIES.map(item => (
                                <Link 
                                    key={item.id} 
                                    href={`/packs/${item.id}`} 
                                    className="flex items-center justify-between group/link text-xs font-bold text-primary-text/70 hover:text-primary transition-all uppercase italic tracking-tighter border-b border-white/5 pb-0.5"
                                >
                                    <span>{item.name}</span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Action & Proof - Compressed Flow */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                        {[
                            { t: "NO APPS / NO SAAS", i: Lock },
                            { t: "OWN FOREVER", i: Zap },
                            { t: "LIVE IN MINUTES", i: Check }
                        ].map(point => (
                            <div key={point.t} className="flex items-center gap-1.5">
                                <point.i className="w-2.5 h-2.5 text-primary" />
                                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{point.t}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button size="lg" asChild className="group h-14 md:h-16 px-8 md:px-10 rounded-xl bg-primary text-black hover:brightness-110 shadow-[0_0_30px_-10px_rgba(46,184,107,0.5)] transition-all active:scale-95 border-none">
                            <Link href="/library" className="flex flex-col items-center leading-none gap-0.5">
                                <span className="font-black uppercase italic text-sm md:text-base tracking-widest flex items-center">
                                    DEPLOY YOUR SYSTEM: ₹999 <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <span className="text-[8px] font-bold opacity-60">~ ₹1,999 ~ LAUNCH DEPLOYMENT OFFER</span>
                            </Link>
                        </Button>
                        <p className="text-[9px] text-secondary-text max-w-[140px] italic font-medium leading-tight">
                            No learning curve. <br /> Works on Excel / Sheets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);