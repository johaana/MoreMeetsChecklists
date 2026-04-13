
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Check,
    SearchCheck,
    Lock,
    ShieldAlert,
    Activity,
    Smartphone,
    History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: V117.0 INDUSTRIAL NARRATIVE ---
const ROTATING_LINES = [
    "Run pre-built SOPs.",
    "Done right. Every day.",
    "Operations on autopilot.",
    "Without SaaS dependency."
];

const HEADLINE = "STOP RELYING ON MEMORY.";
const BRIDGE_TEXT = "This is how operations should run.";
const SUB_NARRATIVE = "No follow-ups. No reporting chaos. Everything updates as work happens.";

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ACCELERATED 60FPS BACKDROP ---
const StaticVideo = React.memo(({ opacity = 0.85 }: { opacity?: number }) => (
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent z-10" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- SUB-COMPONENT: STATIONARY COMMAND FLOOR ---
const FixedCommandFloor = ({ accentColor = "#00AE8D" }: { accentColor?: string }) => (
    <div className="space-y-4 pt-4 relative z-30 border-t border-black/5">
        {/* 1. Bridge & Narrative */}
        <div className="space-y-1">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]/40 font-headline italic">
                {BRIDGE_TEXT}
            </p>
            <p className="text-sm font-medium leading-relaxed text-[#0F172A]/80 italic max-w-lg font-body">
                {SUB_NARRATIVE}
            </p>
        </div>

        {/* 2. Conversion Anchor */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" style={{ background: accentColor }} className={cn(
                    "h-14 md:h-16 px-8 md:px-10 rounded-xl text-white font-black uppercase italic text-xs md:text-sm tracking-widest transition-all border-none group/btn w-full sm:w-fit font-headline",
                    "hover:brightness-110 hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                )}>
                    <a href="/library" className="flex items-center gap-3">
                        Deploy Your System → ₹999
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                    </a>
                </Button>
                <div className="flex flex-col items-start gap-0.5 pl-2">
                    <p className="text-[10px] font-black uppercase text-[#0F172A] tracking-widest font-headline leading-none">
                        OWN THE INFRASTRUCTURE
                    </p>
                    <p className="text-[8px] font-bold text-[#0F172A]/30 uppercase tracking-[0.2em] font-headline">
                        No SaaS • No monthly fees
                    </p>
                </div>
            </div>
            
            {/* 3. Technical Proof Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-black/5">
                {[
                    { t: "AUDIT-READY", i: ShieldAlert },
                    { t: "LIVE DASHBOARD", i: Activity },
                    { t: "TRAINER NOTES", i: Smartphone },
                    { t: "EXCEL NATIVE", i: History }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <item.i className="w-3.5 h-3.5" style={{ color: accentColor }} />
                        <span className="text-[8px] font-black uppercase tracking-widest text-[#0F172A]/40 font-headline leading-none">
                            {item.t}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetypeId, setArchetypeId] = useState(1); 

    // Optimized Rotation: 2.5s High-Energy Pace
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    // PREMIUM PIGMENT SYSTEM: Deep shades for absolute legibility on glass
    const archetypes = [
        { id: 1, label: "ASEGO TEAL", accent: "#00AE8D", textColor: "#006D5B" },   
        { id: 2, label: "COBALT TECH", accent: "#2563EB", textColor: "#1E40AF" },  
        { id: 3, label: "RUBY PERFORMANCE", accent: "#E11D48", textColor: "#9F1239" },    
        { id: 4, label: "ROYAL INDIGO", accent: "#4F46E5", textColor: "#3730A3" }, 
        { id: 5, label: "EXECUTIVE GOLD", accent: "#F59E0B", textColor: "#92400E" }    
    ];

    const currentArchetype = archetypes.find(a => a.id === archetypeId) || archetypes[0];

    // High-Performance Vertical Shutter Transition
    const transitionProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-black/10 overflow-hidden font-body bg-white">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">SOVEREIGN V117</span>
                    {archetypes.map((arch) => (
                        <button 
                            key={arch.id} 
                            onClick={() => { setArchetypeId(arch.id); setCurrentIndex(0); }}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all font-headline",
                                archetypeId === arch.id ? "bg-zinc-900 text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{arch.id}
                        </button>
                    ))}
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-screen flex items-center overflow-hidden">
                    {/* CPU-Safe Backdrop: 20px blur allows smooth 60FPS video */}
                    <StaticVideo opacity={0.85} />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                        {/* COMPRESSED GLASS COMMAND SLAB */}
                        <div className={cn(
                            "max-w-3xl w-full p-8 md:p-12 rounded-[3rem] border border-white/40 shadow-2xl relative overflow-hidden group translate-y-8",
                            "bg-white/10 backdrop-blur-[20px] transition-all duration-700" 
                        )}>
                            {/* Rim Lighting Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 opacity-40 transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            
                            {/* Industrial Typography Block */}
                            <div className="space-y-2 pb-2">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-[#0F172A] leading-[0.9] tracking-tighter uppercase italic drop-shadow-sm">
                                    {HEADLINE}
                                </h1>
                                
                                {/* LOCKED NARRATIVE CONTAINER - Zero Resizing Jump */}
                                <div className="h-[60px] md:h-[80px] flex items-center overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={`${archetypeId}-${currentIndex}`} 
                                            {...transitionProps} 
                                            className="w-full"
                                        >
                                            <p 
                                                style={{ color: currentArchetype.textColor }}
                                                className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tight leading-tight uppercase font-headline"
                                            >
                                                {ROTATING_LINES[currentIndex]}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Fixed Command Floor: High-density stationary info */}
                            <FixedCommandFloor accentColor={currentArchetype.accent} />
                        </div>
                    </div>
                </section>

                {/* ABSOLUTE STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-4 px-6 md:px-12 border-t bg-white/90 backdrop-blur-md border-zinc-200">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                SYSTEM_COMMAND_V117_ACTIVE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-zinc-300 font-headline">
                            <span className="flex items-center gap-2"><SearchCheck className="w-3.5 h-3.5" /> BENCHMARK_PROTOCOL</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> ZERO_SaaS_LOCK_IN</span>
                        </div>
                    </div>
                </div>
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
