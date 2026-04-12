
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
    ChevronRight,
    Clock,
    CheckCircle2,
    Database,
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: CUSTOMER-CENTRIC NARRATIVES ---
const ROTATING_NARRATIVES = [
    {
        badge: "INSTITUTIONAL INFRASTRUCTURE",
        titleWhite: "NO MORE",
        titleColor: "FOLLOW UPS.",
        subtitle: "Stop chasing staff for updates. The system records execution in real-time, across every branch, automatically.",
        accentColor: "#2eb86b", // Institutional Green
    },
    {
        badge: "OPERATIONAL VISIBILITY",
        titleWhite: "SEE LIVE",
        titleColor: "REPORTING.",
        subtitle: "One dashboard. Total clarity. Know what's done, what's missed, and what's delayed—before it becomes a crisis.",
        accentColor: "#3b82f6", // Azure
    },
    {
        badge: "SOVEREIGN DATA CONTROL",
        titleWhite: "NO SaaS",
        titleColor: "LOCK-IN.",
        subtitle: "No monthly fees. No proprietary apps. You buy the engine once and own your data forever on Excel or Google Sheets.",
        accentColor: "#f59e0b", // Gold
    },
    {
        badge: "ZERO LEARNING CURVE",
        titleWhite: "WORKS ON",
        titleColor: "EXCEL.",
        subtitle: "Deploy in 10 minutes. Your team already knows how to use it. Capture institutional memory without the tech friction.",
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
const StaticVideo = React.memo(({ opacity = 0.5, grayscale = 0.2, isDark = false }: { opacity?: number, grayscale?: number, isDark?: boolean }) => (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", isDark ? "bg-black" : "bg-zinc-100")} style={{ transform: 'translate3d(0,0,0)' }}>
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
// Physically decoupled from the animation cycle to ensure absolute stability.
const StationaryCommandFloor = ({ accentColor, isDark = false }: { accentColor: string, isDark?: boolean }) => (
    <div className="w-full space-y-10 pt-12 relative z-30">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest shadow-2xl transition-all border-none group/btn text-black hover:scale-105 active:scale-95" style={{ backgroundColor: accentColor }}>
                <a href="/library" className="flex items-center">
                    DEPLOY SYSTEM: ₹999 <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            <div className="flex flex-col">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.4em]", isDark ? "text-white/20" : "text-zinc-400")}>SOVEREIGN_V11.9_MASTER</span>
                <span className={cn("text-[11px] font-bold italic", isDark ? "text-white/40" : "text-zinc-500")}>Audit-Ready • No Subscriptions • Lifetime Access</span>
            </div>
        </div>

        <div className={cn("grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 border-t pt-8", isDark ? "border-white/10" : "border-zinc-200/50")}>
            {TECHNICAL_PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-center gap-2 group">
                    <pillar.i className="w-3.5 h-3.5 shrink-0 opacity-40 transition-colors" style={{ color: accentColor }} />
                    <span className={cn("text-[9px] font-black uppercase tracking-[0.2em] italic whitespace-nowrap", isDark ? "text-white/30" : "text-zinc-400")}>{pillar.t}</span>
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
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body">
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

                <section className={cn(
                    "relative w-full h-[100dvh] flex flex-col overflow-hidden transition-colors duration-1000",
                    archetype === 1 ? "bg-black" : "bg-zinc-50"
                )}>
                    
                    {/* --- BACKGROUND LAYERS --- */}
                    {archetype === 1 && (
                        <>
                            <StaticVideo opacity={0.3} grayscale={0.5} isDark={true} />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10" />
                        </>
                    )}
                    {archetype === 2 && (
                        <>
                            <StaticVideo opacity={0.6} grayscale={0.1} />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10" />
                        </>
                    )}
                    {archetype === 3 && (
                        <div className="absolute inset-0 z-0">
                            <img src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" className="w-full h-full object-cover opacity-10 grayscale" alt="Dashboard Texture" />
                            <div className="absolute inset-0 bg-white/90" />
                        </div>
                    )}
                    {archetype === 4 && (
                        <>
                            <StaticVideo opacity={0.4} grayscale={0.2} />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />
                        </>
                    )}
                    {archetype === 5 && (
                        <div className="absolute inset-0 z-0 bg-zinc-50">
                            <div className="h-1/2 w-full mt-[25vh] overflow-hidden relative border-y border-zinc-200">
                                <StaticVideo opacity={0.8} grayscale={0} />
                            </div>
                        </div>
                    )}

                    {/* --- CONTENT LAYER --- */}
                    <div className={cn(
                        "relative z-20 flex-1 flex flex-col h-full px-6 md:px-24 justify-center",
                        archetype === 3 && "items-center text-center"
                    )}>
                        
                        <div className={cn(
                            "w-full max-w-7xl space-y-12",
                            archetype === 3 && "flex flex-col items-center"
                        )}>
                            
                            {/* Rim Light / Halo */}
                            <div 
                                className="absolute -z-10 blur-[150px] opacity-20 pointer-events-none transition-colors duration-1000 rounded-full w-[600px] h-[600px]" 
                                style={{ backgroundColor: active.accentColor, top: '20%', left: archetype === 3 ? '50%' : '10%', transform: archetype === 3 ? 'translateX(-50%)' : 'none' }} 
                            />

                            <Badge variant="outline" className={cn(
                                "w-fit text-[10px] font-black uppercase tracking-[0.5em] px-8 py-2 rounded-none",
                                archetype === 1 ? "border-white/20 text-white/40 bg-white/5" : "border-zinc-300 text-zinc-400 bg-white shadow-sm"
                            )}>
                                {active.badge}
                            </Badge>

                            {/* ROTATING NARRATIVE (Only this transitions) */}
                            <div className="min-h-[250px] flex flex-col justify-center relative z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...transitionProps} className="space-y-8">
                                        <h1 className={cn(
                                            "text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic",
                                            archetype === 1 ? "text-white" : "text-zinc-950"
                                        )}>
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">
                                                {active.titleColor}
                                            </span>
                                        </h1>
                                        <div className={cn("flex gap-8 items-start", archetype === 3 && "justify-center")}>
                                            <div className="w-2 rounded-full h-16 shrink-0 transition-colors duration-1000" style={{ backgroundColor: active.accentColor }} />
                                            <p className={cn(
                                                "text-xl md:text-3xl font-bold italic leading-[1.1] max-w-2xl",
                                                archetype === 1 ? "text-white/60" : "text-zinc-600"
                                            )}>
                                                {active.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* STATIONARY FLOOR (Locked outside rotation) */}
                            <StationaryCommandFloor accentColor={active.accentColor} isDark={archetype === 1} />
                        </div>
                    </div>

                    {/* ABSOLUTE STATIONARY STATUS STRIP */}
                    <div className={cn(
                        "relative z-40 w-full py-4 px-12 border-t shadow-2xl transition-colors duration-1000",
                        archetype === 1 ? "bg-zinc-900 border-white/5" : "bg-white/90 backdrop-blur-md border-zinc-200"
                    )}>
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_8px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className={cn("text-[10px] font-black uppercase tracking-[0.6em] italic font-headline", archetype === 1 ? "text-white/20" : "text-zinc-400")}>
                                    ELITE_COMMAND_OS_STABLE
                                </span>
                            </div>
                            <div className={cn("hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic", archetype === 1 ? "text-white/10" : "text-zinc-300")}>
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

    