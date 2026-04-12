
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
    ChevronRight,
    Activity,
    SearchCheck,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: THE HIGH-GRAVITY NARRATIVES ---
const ROTATING_NARRATIVES = [
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

// Optimized High-Performance Stream
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * STATIONARY FOUNDATION: THE SECTOR NAVIGATOR
 */
const SectorNavigator = () => {
    const sectors = [
        { label: "HOSPITALITY", val: "RESTAURANTS", icon: Utensils, href: "/packs/restaurants" },
        { label: "HOSPITALITY", val: "HOTELS & RESORTS", icon: Building, href: "/packs/hotels_and_resorts" },
        { label: "HEALTHCARE", val: "HOSPITALS", icon: Hospital, href: "/packs/healthcare_and_hospital_operations" },
        { label: "EDUCATION", val: "SCHOOLS", icon: School, href: "/packs/school_operations_pack" },
        { label: "FRANCHISE", val: "NETWORKS", icon: Store, href: "/packs/franchise_operations_pack" },
        { label: "FACILITIES", val: "MGMT", icon: Building2, href: "/packs/facility_management_blueprint" },
        { label: "ENTERTAINMENT", val: "CINEMAS", icon: Popcorn, href: "/packs/cinema_operations_pack" }
    ];

    return (
        <div className="bg-white/95 backdrop-blur-2xl border-y border-zinc-200 flex flex-col md:flex-row items-center shadow-2xl relative z-30">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-7 gap-px bg-zinc-200/50">
                {sectors.map((s, i) => (
                    <Link key={i} href={s.href} className="group/item bg-white hover:bg-zinc-50 transition-all duration-500 py-6 px-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-[7px] font-black uppercase tracking-[0.4em] text-zinc-400 leading-none">{s.label}</span>
                            <div className="flex items-center gap-2.5">
                                <s.icon className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform" />
                                <span className="text-[10px] font-black uppercase italic text-zinc-950 tracking-tighter">{s.val}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="p-4 md:px-10 flex items-center border-l border-zinc-200 bg-white">
                <Button asChild className="h-14 px-10 rounded-xl font-black uppercase italic text-xs tracking-widest bg-zinc-950 text-white shadow-2xl hover:scale-105 transition-all border-none group/btn">
                    <Link href="/library">
                        DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

/**
 * STATIONARY FOUNDATION: THE TECHNICAL PAYLOAD
 */
const ValueStrip = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-16 py-4 px-4 bg-zinc-950 relative z-30 border-t border-white/5">
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

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetype, setArchetype] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_NARRATIVES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const active = ROTATING_NARRATIVES[currentIndex];

    // Design Archetype Components
    const renderHeroContent = () => {
        const motionProps = {
            initial: { opacity: 0, x: -20, filter: 'blur(10px)' },
            animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, x: 20, filter: 'blur(10px)' },
            transition: { duration: 0.8, ease: "circOut" }
        };

        switch (archetype) {
            case 1: // THE BLUEPRINT SPLIT
                return (
                    <div className="h-full flex items-center px-6 md:px-24">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-4xl space-y-8 md:space-y-10">
                                <Badge variant="outline" className="bg-white/90 border-zinc-300 text-zinc-500 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full shadow-sm ring-1 ring-black/5">
                                    {active.badge}
                                </Badge>
                                <h1 className="text-5xl md:text-[8.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                    {active.titleWhite} <br/> 
                                    <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                </h1>
                                <div className="flex gap-8 pt-4">
                                    <div className="w-2 rounded-full self-stretch" style={{ backgroundColor: active.accentColor }} />
                                    <p className="text-xl md:text-4xl font-bold italic max-w-2xl leading-[1.1] text-zinc-800">{active.subtitle}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 2: // THE CINEMATIC GLASS
                return (
                    <div className="h-full flex items-center justify-center px-6">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-5xl w-full bg-white/40 backdrop-blur-3xl border border-white/20 p-12 md:p-24 rounded-[3rem] shadow-2xl text-center space-y-10">
                                <Badge className="bg-zinc-950 text-white uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-full mx-auto">
                                    {active.badge}
                                </Badge>
                                <h1 className="text-5xl md:text-[7rem] font-black font-headline tracking-tighter leading-[0.9] uppercase italic text-zinc-950">
                                    {active.titleWhite} <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                </h1>
                                <p className="text-xl md:text-3xl font-bold italic text-zinc-800 max-w-2xl mx-auto leading-tight">{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 3: // THE EXECUTIVE HUD
                return (
                    <div className="h-full flex items-center px-6 md:px-32">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-6xl space-y-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-px bg-zinc-300" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-400">{active.badge}</span>
                                </div>
                                <h1 className="text-6xl md:text-[10rem] font-black font-headline tracking-[calc(-0.05em)] leading-[0.75] uppercase italic text-zinc-950 drop-shadow-2xl">
                                    {active.titleWhite}<br/>
                                    <span className="text-zinc-300/40 outline-text">{active.titleColor}</span>
                                </h1>
                                <p className="text-2xl md:text-5xl font-black italic max-w-3xl leading-[1.0] text-zinc-900 border-l-[12px] pl-12" style={{ borderColor: active.accentColor }}>{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-zinc-100 selection:bg-primary/20 overflow-hidden">
            <SiteHeader />

            <main className="flex-1">
                {/* Archetype Selector (Floating Control) */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b mb-1">ARCHETYPE</span>
                    {[1, 2, 3].map((num) => (
                        <button 
                            key={num} 
                            onClick={() => setArchetype(num)}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-xs transition-all",
                                archetype === num ? "bg-zinc-950 text-white" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{num}
                        </button>
                    ))}
                </div>

                <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-zinc-100">
                    
                    {/* STATIC BACKGROUND LAYER */}
                    <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            preload="auto"
                            className="w-full h-full object-cover opacity-60 grayscale-[0.1] will-change-transform" 
                            style={{ transform: 'translate3d(0,0,0)' }}
                        />
                        {/* EXEC SPLIT MASK */}
                        <div className={cn(
                            "absolute inset-0 transition-all duration-1000",
                            archetype === 1 ? "bg-gradient-to-r from-zinc-100 via-zinc-100/95 to-transparent" : "bg-zinc-100/40"
                        )} />
                        {archetype === 1 && <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />}
                    </div>

                    {/* DYNAMIC NARRATIVE LAYER */}
                    <div className="relative z-20 flex-1 flex flex-col pt-16">
                        {renderHeroContent()}
                    </div>

                    {/* STATIC FOUNDATION LAYER */}
                    <div className="relative z-30 w-full mt-auto">
                        <div className="max-w-7xl mx-auto flex justify-between items-end px-12 pb-4">
                            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-zinc-200 shadow-sm">
                                <div className="w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_10px_rgba(46,184,107,0.5)] bg-primary" />
                                <span className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-[0.6em] italic font-headline">
                                    LOOK WHAT'S IN FOR YOUR BUSINESS
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-3 text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                                <Activity className="w-3.5 h-3.5 text-primary/40" /> SYSTEM_OS_V73.0_STABLE
                            </div>
                        </div>

                        <SectorNavigator />
                        <ValueStrip />
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx global>{`
                .outline-text {
                    -webkit-text-stroke: 2px #000;
                    text-shadow: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
