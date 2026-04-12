
'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
    Activity,
    SearchCheck,
    ShieldCheck,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: THE ELITE NARRATIVES ---
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

// Force high-performance stream
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * STATIC VIDEO LAYER
 * Memoized to prevent re-renders during text transitions (Fixes stuttering).
 */
const StaticVideo = React.memo(() => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
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
    </div>
));
StaticVideo.displayName = 'StaticVideo';

/**
 * STATIONARY FOUNDATION HUB
 * Locked outside the animation logic.
 */
const StationaryFoundation = ({ accentColor }: { accentColor: string }) => {
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
        <div className="relative z-40 w-full mt-auto">
            {/* Status Pulse Bridge */}
            <div className="max-w-7xl mx-auto flex justify-between items-end px-12 pb-4">
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-xl border border-zinc-200 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" style={{ backgroundColor: accentColor }} />
                    <span className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-[0.6em] italic font-headline">
                        LOOK WHAT'S IN FOR YOUR BUSINESS
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-3 text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                    <Activity className="w-3.5 h-3.5 text-primary/40" /> SYSTEM_OS_V74.0_STABLE
                </div>
            </div>

            {/* Industry Dock */}
            <div className="bg-white/95 backdrop-blur-2xl border-y border-zinc-200 flex flex-col md:flex-row items-center shadow-2xl">
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

            {/* Technical Payload Strip */}
            <div className="w-full flex items-center justify-center gap-4 md:gap-16 py-4 px-4 bg-zinc-950 border-t border-white/5">
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
        </div>
    );
};

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

    const motionProps = {
        initial: { opacity: 0, x: -30, filter: 'blur(10px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 30, filter: 'blur(10px)' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easeOutCirc
    };

    const renderHeroContent = () => {
        switch (archetype) {
            case 1: // THE BLUEPRINT COMMAND
                return (
                    <div className="h-full grid grid-cols-[1.2fr,1fr] items-center">
                        <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-zinc-100 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                            <AnimatePresence mode="wait">
                                <motion.div key={currentIndex} {...motionProps} className="space-y-8 md:space-y-10 relative z-10">
                                    <Badge variant="outline" className="bg-white border-zinc-200 text-zinc-400 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-none shadow-sm">
                                        {active.badge}
                                    </Badge>
                                    <h1 className="text-5xl md:text-[8rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                        {active.titleWhite} <br/> 
                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                    </h1>
                                    <div className="flex gap-8 pt-4">
                                        <div className="w-2 rounded-full self-stretch shadow-sm" style={{ backgroundColor: active.accentColor }} />
                                        <p className="text-xl md:text-4xl font-bold italic max-w-xl leading-[1.1] text-zinc-800">{active.subtitle}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="h-full bg-transparent" />
                    </div>
                );
            case 2: // THE FLOATING SLAB
                return (
                    <div className="h-full flex items-center justify-center px-6">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-5xl w-full bg-white/90 backdrop-blur-3xl border border-white p-12 md:p-24 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] text-center space-y-10">
                                <Badge className="bg-zinc-950 text-white uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-full mx-auto">
                                    {active.badge}
                                </Badge>
                                <h1 className="text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.9] uppercase italic text-zinc-950">
                                    {active.titleWhite} <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                </h1>
                                <p className="text-xl md:text-3xl font-bold italic text-zinc-800 max-w-2xl mx-auto leading-tight">{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 3: // THE INDUSTRIAL GRID
                return (
                    <div className="h-full flex items-center px-12 md:px-32 relative">
                        <div className="absolute inset-y-0 left-[32rem] w-px bg-zinc-200/50 hidden md:block" />
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-4xl space-y-12">
                                <div className="space-y-4">
                                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-400 block">{active.badge}</span>
                                    <h1 className="text-6xl md:text-[10rem] font-black font-headline tracking-tight leading-[0.75] uppercase italic text-zinc-950">
                                        {active.titleWhite}<br/>
                                        <span className="text-transparent stroke-text" style={{ WebkitTextStroke: `2px ${active.accentColor}` }}>{active.titleColor}</span>
                                    </h1>
                                </div>
                                <p className="text-2xl md:text-5xl font-black italic max-w-2xl leading-[1.0] text-zinc-900 border-l-[16px] pl-12" style={{ borderColor: active.accentColor }}>{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 4: // THE PERIMETER HUD
                return (
                    <div className="h-full flex items-center px-12 md:px-24">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-6xl w-full grid md:grid-cols-[1fr,300px] gap-20 items-center">
                                <div className="space-y-10">
                                    <Badge variant="outline" className="bg-white/40 border-white text-zinc-500 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full shadow-sm ring-1 ring-black/5">
                                        {active.badge}
                                    </Badge>
                                    <h1 className="text-5xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                        {active.titleWhite} <br/> 
                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                    </h1>
                                    <p className="text-xl md:text-4xl font-bold italic max-w-xl leading-[1.1] text-zinc-800">{active.subtitle}</p>
                                </div>
                                <div className="hidden md:flex flex-col gap-6 p-10 bg-zinc-950 rounded-[2.5rem] border border-white/10 shadow-2xl">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">METADATA_STREAM</span>
                                    {[
                                        { l: "ENGINE", v: "SOVEREIGN_V74" },
                                        { l: "STATUS", v: "STABLE_BUILD" },
                                        { l: "PAYLOAD", v: "120+_SOPs" }
                                    ].map((m, i) => (
                                        <div key={i} className="space-y-1 border-b border-white/5 pb-4 last:border-0">
                                            <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{m.l}</span>
                                            <p className="text-xs font-mono text-white/60 font-bold">{m.v}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 5: // THE ELITE MINIMALIST
                return (
                    <div className="h-full flex flex-col justify-center bg-white px-12 md:px-32">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="space-y-16">
                                <h1 className="text-6xl md:text-[12rem] font-black font-headline tracking-tighter leading-[0.7] uppercase italic text-zinc-950">
                                    {active.titleWhite}<br/>
                                    <span style={{ color: active.accentColor }}>{active.titleColor}</span>
                                </h1>
                                <div className="w-full h-40 relative rounded-[2rem] overflow-hidden group">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" />
                                    <div className="absolute inset-0 flex items-center px-12">
                                        <p className="text-xl md:text-4xl font-black italic text-white leading-none">{active.subtitle}</p>
                                    </div>
                                </div>
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
                {/* Archetype Selector */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b mb-1">ARCHETYPE</span>
                    {[1, 2, 3, 4, 5].map((num) => (
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

                <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden">
                    
                    {/* VIDEO BACKGROUND (STATIC) */}
                    <StaticVideo />

                    {/* MASKING LAYER */}
                    <div className={cn(
                        "absolute inset-0 z-10 transition-all duration-1000 pointer-events-none",
                        archetype === 1 ? "bg-gradient-to-r from-zinc-100 via-zinc-100/95 to-transparent" :
                        archetype === 5 ? "bg-white" : "bg-transparent"
                    )} />

                    {/* HERO TRANSITION LAYER */}
                    <div className="relative z-20 flex-1 flex flex-col pt-16 h-full">
                        {renderHeroContent()}
                    </div>

                    {/* STATIONARY FOUNDATION HUB */}
                    <StationaryFoundation accentColor={active.accentColor} />
                </section>
            </main>

            <Footer />
            <style jsx global>{`
                .stroke-text {
                    paint-order: stroke fill;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
