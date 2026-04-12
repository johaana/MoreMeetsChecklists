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
const STATIC_HEADLINE = "Run Operations Without Follow-Ups.";

const ROTATING_LINES = [
    "Pre-Built SOPs & Checklists",
    "Live, Audit-Ready Reporting",
    "Works on Excel & Google Sheets",
    "No SaaS. Own It Forever"
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent z-10" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- SUB-COMPONENT: ABSOLUTE STATIONARY COMMAND FLOOR ---
const FixedCommandFloor = ({ accentColor = "#00AE8D" }: { accentColor?: string }) => (
    <div className="space-y-8 pt-6 relative z-30">
        {/* 1. Subtext - Stationary */}
        <p className="text-base md:text-lg font-medium leading-relaxed text-[#0F172A]/80 italic max-w-md">
            {SUBTEXT}
        </p>

        {/* 2. Primary CTA Anchor - Stationary */}
        <div className="space-y-6">
            <div className="space-y-3">
                <Button asChild size="lg" style={{ background: accentColor }} className={cn(
                    "h-16 md:h-18 px-10 md:px-12 rounded-xl text-white font-black uppercase italic text-sm md:text-base tracking-widest shadow-2xl transition-all border-none group/btn w-fit",
                    "hover:brightness-110 hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                )}>
                    <a href="/library" className="flex items-center gap-3">
                        Deploy Your System → ₹999
                        <ArrowRight className="w-5 h-5 md:w-6 h-6 transition-transform group-hover/btn:translate-x-1.5" />
                    </a>
                </Button>
                <p className="text-[10px] font-black uppercase text-[#0F172A]/40 tracking-widest pl-2">
                    No SaaS • No monthly fees
                </p>
            </div>
            
            {/* 3. Micro-Boosters - Stationary */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-[#0F172A]/50">
                <span className="flex items-center gap-2"><Check className="w-3 h-3" style={{ color: accentColor }} /> Works on Excel & Sheets</span>
                <span className="flex items-center gap-2"><Check className="w-3 h-3" style={{ color: accentColor }} /> No SaaS</span>
                <span className="flex items-center gap-2"><Check className="Check w-3 h-3" style={{ color: accentColor }} /> Own Forever</span>
            </div>
        </div>

        {/* 4. Sector Support - Stationary */}
        <div className="pt-8 border-t border-black/10 w-fit">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A]/30 italic">
                For hospitality, retail, healthcare, education & more
            </span>
        </div>
    </div>
);

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetypeId, setArchetypeId] = useState(1); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    const archetypes = [
        { id: 1, label: "ASEGO TEAL", accent: "#00AE8D" },
        { id: 2, label: "VIOLET HUB", accent: "#8B5CF6" },
        { id: 3, label: "ROSE CRIMSON", accent: "#E11D48" },
        { id: 4, label: "MODERN INDIGO", accent: "#4F46E5" },
        { id: 5, label: "EXECUTIVE GOLD", accent: "#EAB308" }
    ];

    const currentArchetype = archetypes.find(a => a.id === archetypeId) || archetypes[0];

    const transitionProps = {
        initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-black/10 overflow-hidden font-body bg-white">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">SOVEREIGN V103</span>
                    {archetypes.map((arch) => (
                        <button 
                            key={arch.id} 
                            onClick={() => { setArchetypeId(arch.id); setCurrentIndex(0); }}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all",
                                archetypeId === arch.id ? "bg-zinc-900 text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{arch.id}
                        </button>
                    ))}
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-screen flex items-center overflow-hidden">
                    {/* Vivid Cinematic Backdrop (85% Opacity) */}
                    <StaticVideo opacity={0.85} />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                        {/* 
                            LEFT-ALIGNED GLASS COMMAND SLAB 
                            Added translate-y-16 to guarantee logo clearance.
                            Maintained substantial padding for "punch".
                        */}
                        <div className={cn(
                            "max-w-2xl w-full p-10 md:p-12 rounded-[2.5rem] border border-white/40 shadow-2xl relative overflow-hidden group translate-y-16",
                            "bg-white/10 backdrop-blur-[40px] transition-all duration-700" 
                        )}>
                            {/* Rim Lighting Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 opacity-40 transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            
                            {/* Narrative Block - Standardized height prevents frame jumping */}
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-black font-headline text-[#0F172A] leading-[1.1] tracking-tighter uppercase italic drop-shadow-sm">
                                    {STATIC_HEADLINE}
                                </h1>
                                <div className="min-h-[48px] flex items-center">
                                    <AnimatePresence mode="wait">
                                        <motion.p 
                                            key={`${archetypeId}-${currentIndex}`} 
                                            {...transitionProps} 
                                            style={{ color: currentArchetype.accent }}
                                            className="text-2xl md:text-3xl font-black italic tracking-tight leading-none uppercase transition-colors duration-1000"
                                        >
                                            {ROTATING_LINES[currentIndex]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Fixed Command Floor: 100% Stationary elements */}
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
                                SYSTEM_STATUS_V103_ONLINE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-zinc-300">
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
