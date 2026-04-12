
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
    ShieldCheck,
    FileSpreadsheet,
    Zap,
    Clock,
    UserMinus,
    CheckCircle2,
    SearchCheck,
    LayoutGrid,
    Cpu
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
        subtitle: "Don't let your best secrets leave when staff resign. Capture tribal knowledge into infrastructure.",
        accentColor: "#38bdf8", // Azure
    },
    {
        badge: "OPERATIONAL ORDER",
        titleWhite: "SYSTEMS",
        titleColor: "OVER LUCK.",
        subtitle: "Make sure every task is done right, even when you aren't there. Consistency is engineered.",
        accentColor: "#fbbf24", // Gold
    },
    {
        badge: "FINANCIAL COMMAND",
        titleWhite: "CHAOS IS",
        titleColor: "EXPENSIVE.",
        subtitle: "Stop the daily stress. Make your business run itself. Eliminate management gaps and profit leaks.",
        accentColor: "#10b981", // Emerald
    },
    {
        badge: "SOVEREIGN ENGINE",
        titleWhite: "OWN THE",
        titleColor: "INFRASTRUCTURE.",
        subtitle: "No monthly fees. No SaaS lock-in. Buy it once, own your system and your data forever.",
        accentColor: "#f97316", // Sunset
    }
];

// --- THE CLARIFIED TECHNICAL PAYLOAD ---
const TECHNICAL_PAYLOAD = [
    { t: "PRE-BUILT SOPs", i: ClipboardCheck },
    { t: "TRAINER NOTES", i: GraduationCap },
    { t: "CONSEQUENCES OF FAILURE", i: AlertTriangle },
    { t: "EXCEL & GOOGLE SHEETS", i: FileSpreadsheet },
    { t: "AUTO REPORTING", i: Activity },
    { t: "FASTER TRAINING", i: Zap },
    { t: "NO KEY DEPENDENCY", i: UserMinus }
];

const SECTORS = [
    { label: "HOSPITALITY", val: "RESTAURANTS", icon: Utensils, href: "/packs/restaurants" },
    { label: "HOSPITALITY", val: "HOTELS & RESORTS", icon: Building, href: "/packs/hotels_and_resorts" },
    { label: "HEALTHCARE", val: "HOSPITALS", icon: Hospital, href: "/packs/healthcare_and_hospital_operations" },
    { label: "EDUCATION", val: "SCHOOLS", icon: School, href: "/packs/school_operations_pack" },
    { label: "FRANCHISE", val: "NETWORKS", icon: Store, href: "/packs/franchise_operations_pack" },
    { label: "FACILITIES", val: "MGMT", icon: Building2, href: "/packs/facility_management_blueprint" },
    { label: "ENTERTAINMENT", val: "CINEMAS", icon: Popcorn, href: "/packs/cinema_operations_pack" }
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * HARDWARE-ISOLATED VIDEO LAYER (Master Smoothness)
 * Memoized to ensure the video never "checks" during text state updates.
 */
const StaticVideo = React.memo(({ opacity = 0.6 }: { opacity?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover grayscale-[0.1] will-change-transform"
            style={{ opacity, transform: 'translate3d(0,0,0)' }}
        />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

/**
 * STATIONARY FOUNDATION: THE SECTOR DOCK
 * High-refraction glassmorphism.
 */
const SectorDock = () => (
    <div className="bg-white/95 backdrop-blur-3xl border-y border-zinc-200 shadow-2xl relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-7 gap-px bg-zinc-200/50 w-full">
                {SECTORS.map((s, i) => (
                    <Link key={i} href={s.href} className="group/item bg-white hover:bg-zinc-50 transition-all duration-500 py-6 px-6 border-r border-zinc-100 last:border-0">
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
    </div>
);

/**
 * STATIONARY FOUNDATION: THE TECHNICAL PAYLOAD
 * Deep Zinc Anchor.
 */
const PayloadStrip = () => (
    <div className="w-full bg-zinc-950 border-t border-white/5 py-4 px-4 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-12 overflow-x-auto no-scrollbar">
            {TECHNICAL_PAYLOAD.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 shrink-0 group">
                    <item.i className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary transition-colors" />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 italic whitespace-nowrap group-hover:text-zinc-300 transition-colors">
                        {item.t}
                    </span>
                </div>
            ))}
        </div>
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

    const motionProps = {
        initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -10, filter: 'blur(10px)' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const renderHeroContent = () => {
        switch (archetype) {
            case 1: // THE EXECUTIVE CONSOLE (Symmetric Split)
                return (
                    <div className="h-full grid grid-cols-[1.2fr,1fr] items-center">
                        <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-zinc-100 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                            <AnimatePresence mode="wait">
                                <motion.div key={currentIndex} {...motionProps} className="space-y-8 relative z-10">
                                    <Badge variant="outline" className="bg-white border-zinc-200 text-zinc-400 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-none shadow-sm">
                                        {active.badge}
                                    </Badge>
                                    <h1 className="text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                        {active.titleWhite} <br/> 
                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                    </h1>
                                    <div className="flex gap-8 pt-4">
                                        <div className="w-2 rounded-full self-stretch shadow-sm" style={{ backgroundColor: active.accentColor }} />
                                        <p className="text-xl md:text-3xl font-bold italic max-w-xl leading-[1.1] text-zinc-800">{active.subtitle}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="h-full relative overflow-hidden">
                            <StaticVideo opacity={1} />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-transparent to-transparent" />
                        </div>
                    </div>
                );
            case 2: // THE FLOATING SLAB
                return (
                    <div className="h-full flex items-center justify-center px-6 relative">
                        <StaticVideo opacity={0.8} />
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="max-w-5xl w-full bg-white/90 backdrop-blur-3xl border border-white p-12 md:p-24 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] text-center space-y-10 relative z-10">
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
            case 3: // THE INDUSTRIAL BLUEPRINT
                return (
                    <div className="h-full grid grid-cols-[1fr,400px] items-center px-12 md:px-24 gap-20 relative">
                        <StaticVideo opacity={0.4} />
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="space-y-12 relative z-10">
                                <div className="space-y-4">
                                    <span className="text-[11px] font-black uppercase tracking-[0.8em] text-zinc-400 block">{active.badge}</span>
                                    <h1 className="text-6xl md:text-[9rem] font-black font-headline tracking-tight leading-[0.75] uppercase italic text-zinc-950">
                                        {active.titleWhite}<br/>
                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                    </h1>
                                </div>
                                <p className="text-2xl md:text-5xl font-black italic max-w-2xl leading-[1.0] text-zinc-900 border-l-[16px] pl-12" style={{ borderColor: active.accentColor }}>{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                        
                        <div className="hidden lg:flex flex-col gap-4 p-10 bg-zinc-950 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">SECTOR_METADATA</span>
                            <div className="space-y-4 pt-4">
                                {SECTORS.slice(0, 5).map((s, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-3">
                                        <span className="text-[8px] font-black text-white/20 uppercase">{s.val}</span>
                                        <Activity className="w-3 h-3 text-primary/40" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 4: // THE PERIMETER HUD
                return (
                    <div className="h-full flex flex-col justify-center px-12 md:px-32 relative">
                        <StaticVideo opacity={0.3} />
                        <div className="absolute top-24 left-32 flex items-center gap-4 bg-zinc-950/90 px-6 py-2 rounded-full border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">SYSTEM_STATUS: STABLE_BUILD_V76</span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} {...motionProps} className="space-y-16 relative z-10">
                                <h1 className="text-6xl md:text-[11rem] font-black font-headline tracking-tighter leading-[0.7] uppercase italic text-zinc-950">
                                    {active.titleWhite}<br/>
                                    <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                </h1>
                                <p className="text-2xl md:text-5xl font-black italic text-zinc-800 leading-none max-w-4xl">{active.subtitle}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                );
            case 5: // THE PORTAL
                return (
                    <div className="h-full flex items-center justify-center px-12">
                        <div className="w-full max-w-7xl aspect-[16/8] bg-zinc-950 rounded-[3rem] border border-white/10 shadow-[0_0_100px_-20px_rgba(46,184,107,0.3)] overflow-hidden relative flex flex-col">
                            <div className="h-14 bg-zinc-900 border-b border-white/5 flex items-center px-8 gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] italic">SOVEREIGN_OPERATING_SYSTEM_V76.XLSX</span>
                                </div>
                            </div>
                            <div className="flex-1 relative flex items-center px-20">
                                <StaticVideo opacity={0.5} />
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-6 relative z-10 max-w-3xl">
                                        <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-3xl font-bold italic text-white/60 leading-tight">{active.subtitle}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
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
                    {/* HERO TRANSITION LAYER */}
                    <div className="relative z-20 flex-1 flex flex-col pt-16 h-full">
                        {renderHeroContent()}
                    </div>

                    {/* ABSOLUTE STATIONARY FOUNDATIONS */}
                    <div className="relative z-40">
                        <div className="max-w-7xl mx-auto flex justify-between items-end px-12 pb-4">
                            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-zinc-200 shadow-sm">
                                <div 
                                    className="w-2.5 h-2.5 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-[0.6em] italic font-headline">
                                    LOOK WHAT'S IN FOR YOUR BUSINESS
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-3 text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                                <Activity className="w-3.5 h-3.5 text-primary/40" /> SYSTEM_OS_V76.0_STABLE
                            </div>
                        </div>
                        <SectorDock />
                        <PayloadStrip />
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
