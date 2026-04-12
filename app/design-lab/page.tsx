
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Activity,
    MonitorPlay,
    ShieldCheck,
    FileSpreadsheet,
    Zap,
    LayoutGrid,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
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

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * HARDWARE-ISOLATED VIDEO LAYER (Absolute Smoothness)
 * Memoized to bypass React's render cycle during text rotations.
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
        initial: { opacity: 0, y: 15, filter: 'blur(12px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -15, filter: 'blur(12px)' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const renderHeroContent = () => {
        switch (archetype) {
            case 1: // THE EXECUTIVE CONSOLE (Surgical Split - Clean)
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
                                    <div className="pt-8">
                                        <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest bg-zinc-950 text-white shadow-2xl hover:scale-105 transition-all border-none group/btn">
                                            <a href="/library">
                                                DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                                            </a>
                                        </Button>
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
            case 2: // THE PORTAL (Software Shell - Enhanced Metadata)
                return (
                    <div className="h-full flex items-center justify-center px-12 bg-zinc-50 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                        <div className="w-full max-w-7xl aspect-[16/8.5] bg-zinc-950 rounded-[3rem] border border-white/10 shadow-[0_50px_150px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col group">
                            {/* Browser Top Bar */}
                            <div className="h-14 bg-zinc-900/80 backdrop-blur-md border-b border-white/5 flex items-center px-8 gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] italic">SOVEREIGN_OPERATING_SYSTEM_V77.0.XLSX</span>
                                </div>
                            </div>

                            <div className="flex-1 relative flex items-center px-20">
                                <StaticVideo opacity={0.4} />
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-6 relative z-10 max-w-3xl">
                                        <Badge variant="outline" className="bg-white/5 border-white/10 text-white/40 uppercase tracking-[0.4em] font-black text-[9px] px-6 py-1.5 rounded-none mb-2">
                                            {active.badge}
                                        </Badge>
                                        <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-2xl font-bold italic text-white/60 leading-tight border-l border-white/20 pl-8">{active.subtitle}</p>
                                        <div className="pt-6">
                                            <Button asChild className="h-14 px-10 rounded-xl font-black uppercase italic text-xs tracking-widest bg-primary text-black shadow-2xl hover:scale-105 transition-all border-none">
                                                <a href="/library">RECLAIM CONTROL</a>
                                            </Button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Semi-transparent Institutional Metadata */}
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-white/[0.02] border-t border-white/5 backdrop-blur-xl flex items-center justify-center px-12 overflow-hidden">
                                <div className="flex items-center gap-8 md:gap-12 opacity-40 whitespace-nowrap">
                                    {[
                                        "PRE-BUILT SOPs", 
                                        "TRAINER NOTES", 
                                        "CONSEQUENCES", 
                                        "AUDIT READY", 
                                        "COMPLIANCE", 
                                        "ALL INDUSTRIES"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 shrink-0">
                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white italic">{text}</span>
                                        </div>
                                    ))}
                                </div>
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
                    {[1, 2].map((num) => (
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
                    <div className="relative z-20 flex-1 flex flex-col h-full">
                        {renderHeroContent()}
                    </div>

                    {/* ABSOLUTE STATIONARY FOUNDATION (STATUS BAR) */}
                    <div className="relative z-40 w-full bg-zinc-950/5 py-3 px-12 border-t border-zinc-200/50 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.6em] italic font-headline">
                                    SYSTEM_OS_V77.0_STABLE_BUILD
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-6 text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em] italic">
                                <span className="flex items-center gap-2"><Cpu className="w-3 h-3 text-primary/40" /> HARDWARE_ACCELERATED</span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/40" /> INSTITUTIONAL_ENCRYPTION</span>
                            </div>
                        </div>
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
