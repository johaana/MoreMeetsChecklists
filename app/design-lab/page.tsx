
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck,
    FileSpreadsheet,
    Zap,
    Activity,
    GraduationCap,
    AlertTriangle,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: REFINED NARRATIVES ---
const ROTATING_NARRATIVES = [
    {
        titleWhite: "CAPTURE",
        titleColor: "MEMORY.",
        subtitle: "Capture tribal knowledge into a permanent digital asset that stays when staff leave.",
        accentColor: "hsl(var(--primary))", // Brand Green
    },
    {
        titleWhite: "SYSTEMS",
        titleColor: "OVER LUCK.",
        subtitle: "Make sure every task is done right, every shift, even when you aren't there.",
        accentColor: "#3b82f6", // Azure Pastel
    },
    {
        titleWhite: "CHAOS IS",
        titleColor: "EXPENSIVE.",
        subtitle: "Stop losing profit to unmonitored waste and safety lapses. Turn tribal knowledge into data.",
        accentColor: "#f59e0b", // Gold Pastel
    }
];

const TECHNICAL_PILLARS = [
    { t: "PRE-BUILT SOPs", i: ShieldCheck },
    { t: "TRAINER NOTES", i: GraduationCap },
    { t: "CONSEQUENCES", i: AlertTriangle },
    { t: "EXCEL / SHEETS", i: FileSpreadsheet },
    { t: "AUTO REPORTING", i: Activity },
    { t: "FASTER TRAINING", i: Zap },
    { t: "NO KEY DEPENDENCY", i: Cpu }
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ISOLATED VIDEO ---
const StaticVideo = React.memo(({ opacity = 0.6 }: { opacity?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover will-change-transform"
            style={{ opacity, transform: 'translate3d(0,0,0)' }}
        />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- COMPONENT: ABSOLUTE STATIONARY COMMAND FLOOR ---
// This sits OUTSIDE the rotation logic to ensure zero movement during transitions.
const StationaryCommandFloor = ({ lightMode = false, accentColor = "hsl(var(--primary))" }: { lightMode?: boolean, accentColor?: string }) => (
    <div className="space-y-10 w-full">
        {/* Technical Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {TECHNICAL_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 group">
                    <pillar.i className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: accentColor }} />
                    <span className={cn(
                        "text-[9px] md:text-[10px] font-black uppercase tracking-widest italic whitespace-nowrap",
                        lightMode ? "text-zinc-400" : "text-white/40"
                    )}>{pillar.t}</span>
                </div>
            ))}
        </div>

        {/* Deploy Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-4 border-t border-zinc-100/10">
            <Button asChild className="h-16 md:h-20 px-10 md:px-16 rounded-2xl font-black uppercase italic text-sm md:text-lg tracking-widest shadow-2xl hover:scale-105 transition-all border-none group/btn" style={{ backgroundColor: 'hsl(var(--primary))', color: 'white' }}>
                <a href="/library" className="flex items-center">
                    DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 md:h-7 md:w-7 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">INSTITUTIONAL_OS_V82.0</span>
                <span className={cn("text-[11px] font-bold italic", lightMode ? "text-zinc-400" : "text-white/30")}>Audit-Ready • Global Compliance</span>
            </div>
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

    const transitionProps = {
        initial: { opacity: 0, x: -5, filter: 'blur(8px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 5, filter: 'blur(8px)' },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white selection:bg-primary/20 overflow-hidden">
            <SiteHeader />

            <main className="flex-1">
                {/* Archetype Selector */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b mb-1">DESIGN</span>
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
                    {/* LAYER 0: Hardware-Isolated Video */}
                    <StaticVideo opacity={archetype === 1 ? 1 : 0.5} />

                    {/* LAYER 1: Layout Containers */}
                    <div className="relative z-20 flex-1 flex flex-col h-full">
                        
                        {archetype === 1 && (
                            /* ARCHETYPE 01: THE EXECUTIVE SPLIT */
                            <div className="h-full grid grid-cols-1 lg:grid-cols-[1.2fr,1.8fr] items-stretch">
                                <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-white relative">
                                    <div className="max-w-xl flex flex-col h-full justify-center space-y-12">
                                        {/* Rotating Content: ONLY text rotates */}
                                        <div className="min-h-[300px] flex flex-col justify-center">
                                            <AnimatePresence mode="wait">
                                                <motion.div key={currentIndex} {...transitionProps} className="space-y-6">
                                                    <h1 className="text-5xl md:text-[6.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-zinc-950">
                                                        {active.titleWhite} <br/> 
                                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                                    </h1>
                                                    <p className="text-xl md:text-3xl font-bold italic leading-tight text-zinc-800 border-l-4 pl-6" style={{ borderColor: active.accentColor }}>
                                                        {active.subtitle}
                                                    </p>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Stationary Block: Button and Pillars remain rock-solid */}
                                        <StationaryCommandFloor lightMode={true} accentColor={active.accentColor} />
                                    </div>
                                </div>
                                <div className="h-full relative overflow-hidden hidden lg:block bg-zinc-950">
                                    {/* The Right half is just clear video window */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
                                </div>
                            </div>
                        )}

                        {archetype === 2 && (
                            /* ARCHETYPE 02: THE IMMERSIVE HUD */
                            <div className="h-full relative flex items-center px-12 md:px-24 overflow-hidden bg-zinc-950">
                                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none z-10" />
                                
                                <div className="relative z-20 max-w-4xl w-full">
                                    <div className="p-12 md:p-20 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl space-y-12">
                                        {/* Rotating Content */}
                                        <div className="min-h-[250px] flex flex-col justify-center">
                                            <AnimatePresence mode="wait">
                                                <motion.div key={currentIndex} {...transitionProps} className="space-y-6">
                                                    <h1 className="text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white">
                                                        {active.titleWhite} <br/> 
                                                        <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                                    </h1>
                                                    <p className="text-lg md:text-3xl font-bold italic text-white/60 leading-tight border-l-2 border-white/20 pl-8">{active.subtitle}</p>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>

                                        {/* Stationary Block */}
                                        <div className="pt-8 border-t border-white/10">
                                            <StationaryCommandFloor lightMode={false} accentColor={active.accentColor} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ABSOLUTE STATIONARY STATUS BAR */}
                    <div className="relative z-40 w-full bg-zinc-950 py-4 px-12 border-t border-white/5">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.6em] italic font-headline">
                                    STATIONARY_COMMAND_OS_V82.0
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-8 text-[8px] font-black text-white/20 uppercase tracking-[0.4em] italic">
                                <span className="flex items-center gap-2"><Cpu className="w-3 h-3 text-primary/40" /> HARDWARE_ACCELERATED_FLUIDITY</span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/40" /> INSTITUTIONAL_ENCRYPTION_ACTIVE</span>
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

    