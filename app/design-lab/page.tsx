
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock, 
    GraduationCap,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Popcorn,
    AlertTriangle,
    ClipboardCheck,
    Building2,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Optimized URL: 1080p, H.264, auto-quality for professional smoothness.
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ROTATING_NARATIVES = [
    {
        badge: "INTELLECTUAL ASSET",
        titleWhite: "CAPTURE",
        titleColor: "MEMORY.",
        subtitle: "Don't let your best secrets leave when staff resign.",
        accentColor: "#38bdf8", // Azure
    },
    {
        badge: "OPERATIONAL ORDER",
        titleWhite: "SYSTEMS",
        titleColor: "OVER LUCK.",
        subtitle: "Make sure every task is done right, even when you aren't there.",
        accentColor: "#fbbf24", // Gold
    },
    {
        badge: "FINANCIAL COMMAND",
        titleWhite: "CHAOS IS",
        titleColor: "EXPENSIVE.",
        subtitle: "Stop the daily stress. Make your business run itself. No more management gaps.",
        accentColor: "#10b981", // Emerald
    },
    {
        badge: "SOVEREIGN ENGINE",
        titleWhite: "OWN THE",
        titleColor: "INFRASTRUCTURE.",
        subtitle: "No monthly fees. No SaaS lock-in. Buy it once, own your system forever.",
        accentColor: "#f97316", // Sunset
    }
];

/**
 * STATIONARY SECTOR NAVIGATOR
 * Improved Glass look with better fonts and refined iconography.
 */
const SectorNavigator = () => {
    const sectorPoints = [
        { label: "HOSPITALITY", val: "RESTAURANTS", icon: Utensils, href: "/packs/restaurants" },
        { label: "HOSPITALITY", val: "HOTELS & RESORTS", icon: Building, href: "/packs/hotels_and_resorts" },
        { label: "HEALTHCARE", val: "HOSPITALS", icon: Hospital, href: "/packs/healthcare_and_hospital_operations" },
        { label: "EDUCATION", val: "SCHOOLS", icon: School, href: "/packs/school_operations_pack" },
        { label: "FRANCHISE", val: "NETWORKS", icon: Store, href: "/packs/franchise_operations_pack" },
        { label: "FACILITIES", val: "MGMT", icon: Building2, href: "/packs/facility_management_blueprint" },
        { label: "ENTERTAINMENT", val: "CINEMAS", icon: Popcorn, href: "/packs/cinema_operations_pack" }
    ];

    return (
        <div className="bg-white/70 backdrop-blur-2xl border-y border-white/20 p-2 md:p-0 flex flex-col md:flex-row items-center gap-0 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] relative z-10 overflow-hidden">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-7 gap-px w-full h-full bg-zinc-200/20">
                {sectorPoints.map((item, i) => (
                    <Link key={i} href={item.href} className="group/item bg-white/40 hover:bg-white/80 transition-all duration-500 py-6 px-6">
                        <div className="flex flex-col gap-2 h-full justify-center">
                            <span className="text-[7px] font-black uppercase tracking-[0.4em] text-zinc-400 whitespace-nowrap leading-none transition-colors group-hover/item:text-primary/60">{item.label}</span>
                            <div className="flex items-center gap-2.5">
                                <item.icon className="w-4 h-4 shrink-0 text-primary transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-3" />
                                <span className="text-[10px] font-black uppercase italic whitespace-nowrap leading-none text-zinc-950 tracking-tighter">{item.val}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="p-4 md:px-10 bg-white/60 h-full flex items-center border-l border-white/20">
                <Button asChild className="h-14 px-10 rounded-xl font-black uppercase italic text-xs tracking-widest transition-all hover:scale-105 active:scale-95 border-none shrink-0 group/btn bg-zinc-950 text-white shadow-2xl">
                    <Link href="/library">
                        DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

/**
 * STATIONARY VALUE STRIP
 * High-density technical anchor.
 */
const ValueStrip = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-16 py-4 px-4 bg-zinc-950/95 backdrop-blur-md shadow-2xl relative z-10 border-t border-white/5">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: GraduationCap },
            { t: "CONSEQUENCES DEFINED", i: AlertTriangle }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3 shrink-0 group">
                <item.i className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 italic whitespace-nowrap group-hover:text-zinc-300 transition-colors">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

export default function ProDesignerSovereignPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_NARATIVES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const active = ROTATING_NARATIVES[currentIndex];

    return (
        <div className="flex flex-col min-h-screen bg-zinc-100 selection:bg-primary/20 overflow-hidden">
            <SiteHeader />

            <main className="flex-1">
                <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-zinc-100">
                    
                    {/* Cinematic Backdrop - Clear Right, White Left */}
                    <div className="absolute inset-0 z-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            preload="auto"
                            className="w-full h-full object-cover opacity-60 will-change-transform" 
                            style={{ transform: 'translate3d(0,0,0)' }}
                        />
                        {/* 
                            ELITE GRADIENT MASK: 
                            Left: Solid Zinc-100 for surgical text clarity.
                            Right: Transparent to show vivid operational video.
                        */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-100/95 to-zinc-100/0 pointer-events-none z-10" />
                    </div>

                    {/* DYNAMIC CONTENT LAYER (The Narratives) */}
                    <div className="relative z-20 flex-1 flex flex-col px-6 md:px-24 justify-center pt-16">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentIndex}
                                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="max-w-6xl space-y-8 md:space-y-10"
                            >
                                <Badge variant="outline" className="backdrop-blur-md bg-white/90 border-zinc-300 text-zinc-500 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full mb-2 shadow-sm border-none ring-1 ring-black/5">
                                    {active.badge}
                                </Badge>
                                
                                <div className="relative group">
                                    {/* High-Gravity Rim Lighting */}
                                    <div 
                                        className="absolute -inset-40 blur-[150px] opacity-20 pointer-events-none transition-all duration-1000" 
                                        style={{ background: `radial-gradient(circle, ${active.accentColor} 0%, transparent 70%)` }} 
                                    />
                                    
                                    <h1 className="text-5xl md:text-[8.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950 relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                                        {active.titleWhite} <br/> 
                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">
                                            {active.titleColor}
                                        </span>
                                    </h1>
                                </div>
                                
                                <div className="flex gap-8 pt-4">
                                    <div 
                                        className="w-2 rounded-full h-auto self-stretch shadow-sm transition-colors duration-1000" 
                                        style={{ backgroundColor: active.accentColor }} 
                                    />
                                    <p className="text-xl md:text-4xl font-bold italic max-w-2xl leading-[1.1] text-zinc-800 relative z-10">
                                        {active.subtitle}
                                    </p>
                                </div>

                                <div className="pt-10 flex items-center gap-4 group/label">
                                    <div className="w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_rgba(46,184,107,0.5)] bg-primary" />
                                    <span className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.6em] italic font-headline transition-colors group-hover/label:text-zinc-900">
                                        LOOK WHAT'S IN FOR YOUR BUSINESS
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* STATIONARY FOUNDATION LAYER (The Command Docks) */}
                    <div className="relative z-30 w-full mt-auto">
                        <SectorNavigator />
                        <ValueStrip />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
