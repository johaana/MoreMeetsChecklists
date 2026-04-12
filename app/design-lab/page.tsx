
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck,
    Cpu,
    CheckCircle2,
    FileSpreadsheet,
    Zap,
    History,
    AlertTriangle,
    Target,
    Activity,
    Lock
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
        accentColor: "hsl(var(--primary))", 
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
        subtitle: "Stop the daily stress. Make your business run itself. Eliminate management gaps.",
        accentColor: "hsl(var(--primary))",
    },
    {
        badge: "SOVEREIGN ENGINE",
        titleWhite: "OWN THE",
        titleColor: "INFRASTRUCTURE.",
        subtitle: "No monthly fees. No SaaS lock-in. Buy it once, own your system and your data forever.",
        accentColor: "#f97316", // Sunset
    }
];

const TECHNICAL_PILLARS = [
    "PRE-BUILT SOPs",
    "TRAINER NOTES",
    "CONSEQUENCES OF FAILURE",
    "WORKS ON EXCEL / SHEETS",
    "AUTO REPORTING",
    "FASTER TRAINING",
    "NO KEY DEPENDENCY"
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const STATIC_IMAGES = [
    "https://i.postimg.cc/YSHYrHTr/hotel-ops.webp",
    "https://i.postimg.cc/CKgkhg9S/facilities-management1.png",
    "https://i.postimg.cc/rpkxVk7c/Hospital-Levels-of-Care.jpg"
];

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
            case 1: // THE EXECUTIVE CONSOLE (Refined Split)
                return (
                    <div className="h-full grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] items-center">
                        <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-white relative overflow-hidden">
                            <div className="space-y-12 relative z-10">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-8">
                                        <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-none">
                                            {active.badge}
                                        </Badge>
                                        <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-zinc-950">
                                            {active.titleWhite} <br/> 
                                            <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-2xl font-bold italic max-w-xl leading-[1.1] text-zinc-800 border-l-4 pl-6" style={{ borderColor: active.accentColor }}>
                                            {active.subtitle}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="pt-8 border-t border-zinc-100">
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8">
                                        {TECHNICAL_PILLARS.slice(0, 4).map((pillar, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest italic">{pillar}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest bg-primary text-black shadow-2xl hover:scale-105 transition-all border-none group/btn">
                                        <a href="/library" className="flex items-center">
                                            DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="h-full relative overflow-hidden hidden lg:block">
                            <StaticVideo opacity={1} />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
                        </div>
                    </div>
                );
            case 2: // THE PRODUCT PORTAL (Full Screen Desktop View)
                return (
                    <div className="h-full flex items-center justify-center p-6 md:p-12 bg-zinc-50 relative overflow-hidden">
                        <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] border border-white/10 shadow-[0_50px_150px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col group">
                            {/* Browser Top Bar */}
                            <div className="h-12 bg-zinc-900 border-b border-white/5 flex items-center px-8 gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em] italic">SOVEREIGN_OPERATING_SYSTEM_V79.0.XLSX</span>
                                </div>
                            </div>

                            <div className="flex-1 relative flex items-center px-12 md:px-24">
                                <StaticVideo opacity={0.3} />
                                <div className="space-y-10 relative z-10 max-w-4xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div key={currentIndex} {...motionProps} className="space-y-6">
                                            <Badge variant="outline" className="bg-white/5 border-white/10 text-white/40 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-none">
                                                {active.badge}
                                            </Badge>
                                            <h1 className="text-5xl md:text-9xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white drop-shadow-2xl">
                                                {active.titleWhite} <br/> 
                                                <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                                            </h1>
                                            <p className="text-xl md:text-3xl font-bold italic text-white/60 leading-tight border-l border-white/20 pl-8 max-w-2xl">{active.subtitle}</p>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="pt-4">
                                        <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest bg-primary text-black shadow-2xl hover:scale-105 transition-all border-none">
                                            <a href="/library">RECLAIM CONTROL &rarr;</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Institutional Metadata Footbar */}
                            <div className="h-16 bg-white/[0.02] border-t border-white/5 flex items-center justify-center px-12">
                                <div className="flex items-center gap-12 opacity-30 overflow-hidden whitespace-nowrap">
                                    {TECHNICAL_PILLARS.map((text, i) => (
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
            case 3: // THE FORENSIC VIEW (Static Image + High Density Callouts)
                return (
                    <div className="h-full flex flex-col md:flex-row bg-white overflow-hidden">
                        <div className="w-full md:w-[45%] h-full p-12 md:p-24 flex flex-col justify-center space-y-12">
                            <AnimatePresence mode="wait">
                                <motion.div key={currentIndex} {...motionProps} className="space-y-8">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">SOVEREIGN V79.0</span>
                                    <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-zinc-950">
                                        {active.titleWhite} <br/> <span style={{ color: active.accentColor }}>{active.titleColor}</span>
                                    </h1>
                                    <p className="text-lg md:text-xl font-medium text-zinc-500 italic leading-relaxed border-l-2 pl-6">{active.subtitle}</p>
                                </motion.div>
                            </AnimatePresence>
                            
                            <div className="space-y-6 pt-12 border-t">
                                <div className="flex flex-wrap gap-4">
                                    {TECHNICAL_PILLARS.map((p, i) => (
                                        <Badge key={i} variant="outline" className="text-[8px] font-black uppercase tracking-widest border-zinc-200 text-zinc-400 py-1.5 px-4 rounded-none">{p}</Badge>
                                    ))}
                                </div>
                                <Button asChild className="h-14 w-fit px-10 bg-zinc-950 text-white rounded-xl font-black uppercase italic text-xs tracking-widest">
                                    <a href="/library">START DEPLOYMENT</a>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:block flex-1 relative">
                            <img src={STATIC_IMAGES[0]} className="absolute inset-0 w-full h-full object-cover" alt="Institutional Ops" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent" />
                            {/* Forensic Callout Tags */}
                            <div className="absolute top-1/4 right-1/4 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl text-white space-y-1 shadow-2xl">
                                <span className="text-[8px] font-black uppercase tracking-widest text-primary">AUDIT POINT</span>
                                <p className="text-xs font-bold italic">ZERO-FAIL PROTOCOL ACTIVE</p>
                            </div>
                        </div>
                    </div>
                );
            case 4: // THE BOARDROOM MINIMALIST (Static Center Focus)
                return (
                    <div className="h-full relative flex items-center justify-center bg-zinc-100 overflow-hidden">
                        <img src={STATIC_IMAGES[1]} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.9]" alt="Boardroom" />
                        <div className="absolute inset-0 bg-white/80" />
                        
                        <div className="relative z-10 max-w-4xl text-center space-y-12 px-6">
                            <AnimatePresence mode="wait">
                                <motion.div key={currentIndex} {...motionProps} className="space-y-6">
                                    <h1 className="text-6xl md:text-[8rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950">
                                        {active.titleWhite} <br/> <span style={{ color: active.accentColor }}>{active.titleColor}</span>
                                    </h1>
                                    <p className="text-2xl md:text-4xl font-black text-zinc-800 italic uppercase tracking-tight">{active.subtitle}</p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex flex-col items-center gap-8">
                                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                                    <span>PRE-BUILT SOPs</span>
                                    <span>TRAINER NOTES</span>
                                    <span>WORKS ON EXCEL</span>
                                </div>
                                <Button asChild className="h-20 px-16 bg-primary text-black rounded-none font-black uppercase italic text-xl tracking-tighter shadow-2xl hover:scale-105 transition-all">
                                    <a href="/library">DEPLOY SYSTEM NOW</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            case 5: // THE BLUEPRINT (Industrial Aesthetic)
                return (
                    <div className="h-full flex bg-[#0a0a0a] overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
                        
                        <div className="relative z-10 flex-1 grid lg:grid-cols-2 items-center gap-20 px-12 md:px-24">
                            <div className="space-y-12">
                                <AnimatePresence mode="wait">
                                    <motion.div key={currentIndex} {...motionProps} className="space-y-8">
                                        <Badge variant="outline" className="border-primary text-primary font-black uppercase tracking-[0.5em] rounded-none py-2 px-6">{active.badge}</Badge>
                                        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white">
                                            {active.titleWhite} <br/> <span style={{ color: active.accentColor }}>{active.titleColor}</span>
                                        </h1>
                                        <p className="text-xl md:text-3xl font-bold italic text-white/40 leading-tight border-l-4 border-primary pl-8">{active.subtitle}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex gap-4">
                                    <Button asChild className="h-16 px-12 bg-white text-black font-black uppercase italic rounded-none hover:bg-primary transition-all">
                                        <a href="/library">RECLAIM CONTROL</a>
                                    </Button>
                                </div>
                            </div>
                            
                            <div className="hidden lg:grid grid-cols-2 gap-4">
                                {TECHNICAL_PILLARS.map((p, i) => (
                                    <div key={i} className="p-8 border border-white/5 bg-white/[0.02] flex flex-col gap-4 group hover:border-primary/20 transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">MODULE_0{i+1}</p>
                                            <p className="text-sm font-bold text-white uppercase italic">{p}</p>
                                        </div>
                                    </div>
                                ))}
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
                    <div className="relative z-20 flex-1 flex flex-col h-full">
                        {renderHeroContent()}
                    </div>

                    {/* ABSOLUTE STATIONARY FOUNDATION */}
                    <div className="relative z-40 w-full bg-zinc-950/5 py-3 px-12 border-t border-zinc-200/50 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000 shadow-[0_0_10px_rgba(46,184,107,0.5)]" 
                                    style={{ backgroundColor: active.accentColor }} 
                                />
                                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.6em] italic font-headline">
                                    STATIONARY_COMMAND_OS_V79.0
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
