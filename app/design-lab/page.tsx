
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    CheckCircle2,
    Cpu,
    ShieldCheck,
    FileSpreadsheet,
    Zap,
    History,
    Activity,
    SearchCheck,
    GraduationCap,
    AlertTriangle,
    Clock,
    LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: REFINED NARRATIVES ---
const ROTATING_NARRATIVES = [
    {
        badge: "INSTITUTIONAL INFRASTRUCTURE",
        titleWhite: "REPLACE CHAOS WITH",
        titleColor: "ORDER.",
        subtitle: "Standardize every task across every branch. Capture tribal knowledge into a permanent digital asset that stays when staff leave.",
        accentColor: "hsl(var(--primary))", // Brand Green
    },
    {
        badge: "OPERATIONAL INSURANCE",
        titleWhite: "CONSISTENCY IS",
        titleColor: "ENGINEERED.",
        subtitle: "Don't depend on memory. Our pre-built SOPs and Trainer Notes ensure every shift runs with surgical precision—with or without you.",
        accentColor: "#3b82f6", // Azure Pastel
    },
    {
        badge: "FINANCIAL COMMAND",
        titleWhite: "ELIMINATE THE",
        titleColor: "GUESSWORK TAX.",
        subtitle: "Stop losing profit to unmonitored waste and safety lapses. Turn tribal knowledge into auditable data streams.",
        accentColor: "#f59e0b", // Gold Pastel
    }
];

const TECHNICAL_PILLARS = [
    { t: "PRE-BUILT SOPs", i: ShieldCheck },
    { t: "TRAINER NOTES", i: GraduationCap },
    { t: "CONSEQUENCES OF FAILURE", i: AlertTriangle },
    { t: "WORKS ON EXCEL / SHEETS", i: FileSpreadsheet },
    { t: "AUTO REPORTING", i: Activity },
    { t: "FASTER TRAINING", i: Zap },
    { t: "NO KEY DEPENDENCY", i: Cpu }
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ISOLATED VIDEO ---
const StaticVideo = React.memo(({ opacity = 0.6 }: { opacity?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-900" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover bill-change-transform"
            style={{ opacity, transform: 'translate3d(0,0,0)', filter: 'grayscale(0.2)' }}
        />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- COMPONENT: STATIONARY COMMAND FLOOR ---
const StationaryFoundation = ({ lightMode = false }: { lightMode?: boolean }) => (
    <div className="space-y-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {TECHNICAL_PILLARS.slice(0, 4).map((pillar, i) => (
                <div key={i} className="flex items-center gap-3">
                    <pillar.i className="w-4 h-4 text-primary" />
                    <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest italic",
                        lightMode ? "text-zinc-400" : "text-white/40"
                    )}>{pillar.t}</span>
                </div>
            ))}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest bg-primary text-black shadow-2xl hover:scale-105 transition-all border-none group/btn">
                <a href="/library" className="flex items-center">
                    DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            <div className="flex flex-col">
                <span className={cn("text-[9px] font-black uppercase tracking-[0.3em]", lightMode ? "text-primary" : "text-primary")}>7 Technical Pillars Included</span>
                <span className={cn("text-[10px] font-bold italic", lightMode ? "text-zinc-400" : "text-white/30")}>Audit-Ready • Compliance • All Industries</span>
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

    const motionProps = {
        initial: { opacity: 0, x: -10, filter: 'blur(10px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 10, filter: 'blur(10px)' },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    };

    const renderHeroContent = () => {
        switch (archetype) {
            case 1: // ARCHETYPE 01: THE EXECUTIVE SPLIT
                return (
                    <div className="h-full grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] items-stretch">
                        <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-white relative overflow-hidden">
                            <div className="max-w-xl space-y-12">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-8">
                                        <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary uppercase tracking-[0.5em] font-black text-[10px] px-6 py-2 rounded-none">
                                            {active.badge}
                                        </Badge>
                                        <h1 className="text-5xl md:text-[5.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-zinc-950">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-2xl font-bold italic leading-tight text-zinc-800 border-l-4 pl-6" style={{ borderColor: active.accentColor }}>
                                            {active.subtitle}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                                <StationaryFoundation lightMode={true} />
                            </div>
                        </div>
                        <div className="h-full relative overflow-hidden hidden lg:block bg-zinc-950">
                            <StaticVideo opacity={1} />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
                        </div>
                    </div>
                );
            case 2: // ARCHETYPE 02: THE IMMERSIVE HUD
                return (
                    <div className="h-full relative flex items-center px-12 md:px-24 bg-zinc-950 overflow-hidden">
                        <StaticVideo opacity={0.4} />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
                        
                        <div className="relative z-10 max-w-4xl space-y-12">
                            <div className="p-12 md:p-20 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl space-y-10">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-6">
                                        <Badge className="bg-primary text-black font-black uppercase tracking-[0.4em] text-[9px] rounded-none px-4 py-1">
                                            {active.badge}
                                        </Badge>
                                        <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                        </h1>
                                        <p className="text-lg md:text-3xl font-bold italic text-white/60 leading-tight border-l-2 border-white/20 pl-8">{active.subtitle}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="pt-4 border-t border-white/10">
                                    <StationaryFoundation lightMode={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3: // ARCHETYPE 03: THE MINIMALIST CANVAS
                return (
                    <div className="h-full flex flex-col bg-zinc-50 relative overflow-hidden">
                        <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
                            <div className="max-w-5xl space-y-12">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-8">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.6em] font-headline">COMMAND_OS_V80.0</span>
                                        <h1 className="text-6xl md:text-[7rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                            {active.titleWhite} <br/> <span style={{ color: active.accentColor }}>{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-4xl font-black text-zinc-800 italic uppercase tracking-tight max-w-3xl leading-[1.1]">{active.subtitle}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <StationaryFoundation lightMode={true} />
                            </div>
                        </div>
                        <div className="h-64 relative bg-zinc-900 border-t border-zinc-200">
                            <StaticVideo opacity={1} />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[8px] font-black text-white/40 uppercase tracking-[1em] italic">PANORAMIC_OPERATIONAL_VIEW</span>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white selection:bg-primary/20 overflow-hidden">
            <SiteHeader />

            <main className="flex-1">
                {/* Archetype Selector */}
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

                <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden">
                    <div className="relative z-20 flex-1 flex flex-col h-full">
                        {renderHeroContent()}
                    </div>

                    {/* ABSOLUTE STATIONARY FOUNDATION BAR */}
                    <div className="relative z-40 w-full bg-zinc-950 py-4 px-12 border-t border-white/5">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.6em] italic font-headline">
                                    STATIONARY_COMMAND_OS_V80.0
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
