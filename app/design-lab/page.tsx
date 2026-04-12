
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Check,
    SearchCheck,
    Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: MINIMAL HIGH-CONVERSION NARRATIVE ---
const ROTATING_LINES = [
    "Pre-Built SOPs & Checklists",
    "Live, Audit-Ready Reporting",
    "No SaaS. Own It Forever",
    "Zero-Gap System Execution"
];

const SUBTEXT = "A ready system to manage daily tasks across your team — with full visibility.";

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ACCELERATED SMOOTH VIDEO ---
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

// --- SUB-COMPONENT: ABSOLUTE STATIONARY COMMAND FLOOR ---
const FixedCommandFloor = ({ accentColor = "#00AE8D" }: { accentColor?: string }) => (
    <div className="space-y-3 pt-3 relative z-30 border-t border-black/5">
        {/* 1. Subtext - Stationary */}
        <p className="text-xs md:text-sm font-medium leading-relaxed text-[#0F172A]/70 italic max-w-md font-body">
            {SUBTEXT}
        </p>

        {/* 2. Primary CTA Anchor - Stationary */}
        <div className="space-y-3">
            <div className="space-y-2">
                <Button asChild size="lg" style={{ background: accentColor }} className={cn(
                    "h-14 md:h-16 px-8 md:px-10 rounded-xl text-white font-black uppercase italic text-xs md:text-sm tracking-widest transition-all border-none group/btn w-fit font-headline",
                    "hover:brightness-110 hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                )}>
                    <a href="/library" className="flex items-center gap-3">
                        Deploy Your System → ₹999
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                    </a>
                </Button>
                <div className="flex items-center gap-4 pl-2">
                    <p className="text-[9px] font-black uppercase text-[#0F172A]/30 tracking-widest font-headline leading-none">
                        No SaaS • No monthly fees
                    </p>
                </div>
            </div>
            
            {/* 3. Micro-Boosters - Stationary */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#0F172A]/40 font-headline">
                <span className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: accentColor }} /> EXCEL & SHEETS NATIVE</span>
                <span className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: accentColor }} /> NO SaaS LOCK-IN</span>
                <span className="flex items-center gap-1.5"><Check className="w-3 h-3" style={{ color: accentColor }} /> OWN FOREVER</span>
            </div>
        </div>

        {/* 4. Sector Support - Stationary */}
        <div className="pt-2 border-t border-black/5 w-fit">
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#0F172A]/20 italic font-headline">
                For hospitality, retail, healthcare, education & more
            </span>
        </div>
    </div>
);

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetypeId, setArchetypeId] = useState(1); 

    // Rotation Engine: Optimized 2.5s snaps
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    // PREMIUM COLOR SYSTEM: Deep Pigments for absolute contrast on transparent glass
    const archetypes = [
        { id: 1, label: "ASEGO TEAL", accent: "#00AE8D", textColor: "#008D74" },   
        { id: 2, label: "COBALT TECH", accent: "#2563EB", textColor: "#1D4ED8" },  
        { id: 3, label: "RUBY PERF", accent: "#E11D48", textColor: "#BE123C" },    
        { id: 4, label: "ROYAL INDIGO", accent: "#4F46E5", textColor: "#3730A3" }, 
        { id: 5, label: "EXECUTIVE GOLD", accent: "#F59E0B", textColor: "#B45309" }    
    ];

    const currentArchetype = archetypes.find(a => a.id === archetypeId) || archetypes[0];

    // High-Performance Cinematic Transition: Snap and Pop
    const transitionProps = {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -20, scale: 0.98 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-black/10 overflow-hidden font-body bg-white">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">DESIGN LAB V116</span>
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
                    {/* Vivid Cinematic Backdrop: Fixed 85% opacity */}
                    <StaticVideo opacity={0.85} />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                        {/* COMPRESSED GLASS COMMAND SLAB: 20px blur for zero lag */}
                        <div className={cn(
                            "max-w-2xl w-full p-8 md:p-10 rounded-[3rem] border border-white/40 shadow-2xl relative overflow-hidden group translate-y-8",
                            "bg-white/10 backdrop-blur-[20px] transition-all duration-700" 
                        )}>
                            {/* Rim Lighting Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 opacity-40 transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            
                            {/* Narrative Block - High Contrast Dynamic Text */}
                            <div className="space-y-1 pb-4">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline text-[#0F172A] leading-[0.95] tracking-tighter uppercase italic drop-shadow-sm">
                                    Run Operations <span className="whitespace-nowrap">Without Follow-Ups.</span>
                                </h1>
                                
                                {/* STABILIZED NARRATIVE CONTAINER - Zero Resizing Height & Zero Clipping */}
                                <div className="h-[70px] md:h-[80px] flex items-center overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={`${archetypeId}-${currentIndex}`} 
                                            {...transitionProps} 
                                            className="w-full"
                                        >
                                            <p 
                                                style={{ color: currentArchetype.textColor }}
                                                className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tight leading-[1.1] uppercase font-headline"
                                            >
                                                {ROTATING_LINES[currentIndex]}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Fixed Command Floor: Absolute Stationary elements */}
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
                                SYSTEM_STATUS_V116_ONLINE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-zinc-300 font-headline">
                            <span className="flex items-center gap-2"><SearchCheck className="w-3.5 h-3.5" /> AUDIT_READY_PROTOCOL</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_OWNERSHIP</span>
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
