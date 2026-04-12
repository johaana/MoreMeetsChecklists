
'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
    Lock,
    SearchCheck,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: ELITE NARRATIVES ---
const ROTATING_NARRATIVES = [
    {
        titleWhite: "CAPTURE",
        titleColor: "MEMORY.",
        subtitle: "Don't let your best secrets leave when staff resign. Convert tribal knowledge into an institutional asset.",
        accentColor: "#2eb86b", // Institutional Green
    },
    {
        titleWhite: "SYSTEMS",
        titleColor: "OVER LUCK.",
        subtitle: "Stop the daily firefighting. Make sure every task is done right, every shift, even when you aren't there.",
        accentColor: "#3b82f6", // Azure
    },
    {
        titleWhite: "CHAOS IS",
        titleColor: "EXPENSIVE.",
        subtitle: "Turn tribal knowledge into data. Reclaim lost profit from waste and unmonitored safety lapses.",
        accentColor: "#f59e0b", // Gold
    },
    {
        titleWhite: "OWN THE",
        titleColor: "INFRASTRUCTURE.",
        subtitle: "Systems are not suggestions. They are the backbone of a professional operation. Scale without the stress.",
        accentColor: "#ef4444", // Risk Red
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
// Isolated from React re-renders to prevent "checks" or stuttering.
const StaticVideo = React.memo(({ opacity = 0.5, grayscale = 0.2 }: { opacity?: number, grayscale?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-100" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover will-change-transform"
            style={{ opacity, filter: `grayscale(${grayscale})`, transform: 'translate3d(0,0,0)' }}
        />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- COMPONENT: STATIONARY COMMAND FLOOR ---
// Physically decoupled from the animation cycle.
const StationaryCommandFloor = ({ accentColor, theme = 'light' }: { accentColor: string, theme?: 'dark' | 'light' }) => (
    <div className="w-full space-y-10 pt-12 relative z-30">
        {/* Action Block - Absolute Stationary */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest shadow-2xl transition-all border-none group/btn text-black hover:scale-105 active:scale-95" style={{ backgroundColor: accentColor }}>
                <a href="/library" className="flex items-center">
                    DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">INSTITUTIONAL_OS_V85.0</span>
                <span className="text-[11px] font-bold italic text-zinc-500">Audit-Ready • Global Compliance • All Industries</span>
            </div>
        </div>

        {/* Technical Pillars - Absolute Stationary */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 border-t border-zinc-200/50 pt-8">
            {TECHNICAL_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-center gap-2 group">
                    <pillar.i className="w-3.5 h-3.5 shrink-0 opacity-40 transition-colors" style={{ color: accentColor }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] italic whitespace-nowrap text-zinc-400">{pillar.t}</span>
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

    const transitionProps = {
        initial: { opacity: 0, x: -10, filter: 'blur(10px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 10, filter: 'blur(10px)' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 selection:bg-primary/20 overflow-hidden font-body">
            <SiteHeader />

            <main className="flex-1">
                {/* Archetype Selector */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">ARCHETYPE</span>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                            key={num} 
                            onClick={() => setArchetype(num)}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all",
                                archetype === num ? "bg-zinc-900 text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{num}
                        </button>
                    ))}
                </div>

                <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden">
                    {/* LAYER 0: Hardware-Isolated Smooth Video */}
                    <StaticVideo opacity={archetype === 4 ? 0.3 : 0.6} grayscale={0.1} />

                    {/* LAYER 1: The Immersive Interface */}
                    <div className={cn(
                        "relative z-20 flex-1 flex flex-col h-full transition-all duration-1000 px-6 md:px-24 justify-center",
                        archetype === 1 ? "bg-gradient-to-r from-zinc-100 via-zinc-100/80 to-transparent" :
                        archetype === 2 ? "items-start" :
                        archetype === 3 ? "items-center text-center" :
                        archetype === 4 ? "bg-white" :
                        "bg-zinc-50/40 backdrop-blur-[2px]"
                    )}>
                        
                        {/* THE NARRATIVE CONTAINER (Floating, no boxes) */}
                        <div className={cn(
                            "w-full max-w-7xl space-y-12 transition-all duration-1000",
                            archetype === 3 && "flex flex-col items-center"
                        )}>
                            
                            {/* Rim Light / Halo */}
                            <div 
                                className="absolute -z-10 blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000 rounded-full w-[600px] h-[600px]" 
                                style={{ backgroundColor: active.accentColor, top: '20%', left: archetype === 3 ? '50%' : '10%', transform: archetype === 3 ? 'translateX(-50%)' : 'none' }} 
                            />

                            <Badge variant="outline" className="w-fit text-[10px] font-black uppercase tracking-[0.5em] px-8 py-2 rounded-none border-zinc-300 text-zinc-400 bg-white shadow-sm">
                                SOVEREIGN_ENGINE_V85
                            </Badge>

                            {/* ROTATING CONTENT */}
                            <div className="min-h-[250px] flex flex-col justify-center relative z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...transitionProps} className="space-y-8">
                                        <h1 className="text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-zinc-950">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">
                                                {active.titleColor}
                                            </span>
                                        </h1>
                                        <div className={cn("flex gap-8 items-start", archetype === 3 && "justify-center")}>
                                            <div className="w-2 rounded-full h-16 shrink-0 transition-colors duration-1000 bg-zinc-200" style={{ backgroundColor: active.accentColor }} />
                                            <p className="text-xl md:text-3xl font-bold italic leading-[1.1] max-w-2xl text-zinc-600">
                                                {active.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* STATIONARY FOUNDATION (Decoupled from rotation) */}
                            <StationaryCommandFloor accentColor={active.accentColor} />
                        </div>
                    </div>

                    {/* ABSOLUTE STATIONARY STATUS STRIP */}
                    <div className="relative z-40 w-full bg-white/90 backdrop-blur-md py-4 px-12 border-t border-zinc-200 shadow-2xl">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                    ELITE_COMMAND_OS_STABLE
                                </span>
                            </div>
                            <div className="hidden md:flex items-center gap-10 text-[8px] font-black text-zinc-300 uppercase tracking-[0.4em] italic">
                                <span className="flex items-center gap-2"><SearchCheck className="w-3.5 h-3.5" /> AUDIT_READY_PROTOCOLS</span>
                                <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_ENCRYPTION_LAYER_01</span>
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
    
