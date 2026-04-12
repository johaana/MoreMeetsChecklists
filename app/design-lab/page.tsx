
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Check,
    ChevronRight,
    SearchCheck,
    Lock,
    ShieldCheck,
    LayoutGrid,
    Activity,
    ClipboardCheck,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: MINIMAL HIGH-CONVERSION NARRATIVE (V95.0) ---
const STATIC_HEADLINE = "Run Operations Without Follow-Ups.";

const ROTATING_LINES = [
    "Pre-Built SOPs & Checklists",
    "Live, Audit-Ready Reporting",
    "Works on Excel & Google Sheets",
    "No SaaS. Own It Forever"
];

const SUBTEXT = "A ready system to manage daily tasks across your team — with full visibility.";

const INDUSTRIES = [
    "Restaurants", "Hotels & Resorts", "Retail Stores", "Healthcare", 
    "Schools", "Facilities", "Cinemas", "Franchise Networks"
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ISOLATED VIDEO (GPU ACCELERATED) ---
const StaticVideo = React.memo(({ opacity = 0.1, blur = 0, variant = 1 }: { opacity?: number, blur?: number, variant?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover will-change-transform grayscale-[0.2]" 
            style={{ opacity, filter: `blur(${blur}px)`, transform: 'translate3d(0,0,0)' }}
        />
        {/* Asego-Style Linear Gradient Mask: Solid Left, Clear Right */}
        <div className="absolute inset-0 z-10" style={{ 
            background: 'linear-gradient(90deg, rgba(248,250,252,0.98) 0%, rgba(248,250,252,0.9) 40%, rgba(248,250,252,0.6) 65%, rgba(248,250,252,0.2) 85%, rgba(248,250,252,0) 100%)' 
        }} />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- SUB-COMPONENT: ABSOLUTE STATIONARY COMMAND FLOOR ---
// Physically decoupled from AnimatePresence to ensure zero movement.
const FixedCommandFloor = () => (
    <div className="space-y-10 pt-8 relative z-30">
        {/* 1. Subtext */}
        <p className="text-lg md:text-xl font-medium leading-relaxed text-[#475569] border-l-2 border-[#00AE8D]/30 pl-6 max-w-lg italic">
            {SUBTEXT}
        </p>

        {/* 2. Primary CTA Anchor */}
        <div className="space-y-5">
            <Button asChild size="lg" className={cn(
                "h-16 md:h-20 px-10 md:px-14 rounded-xl text-white font-black uppercase italic text-sm md:text-lg tracking-widest shadow-2xl transition-all border-none group/btn w-fit",
                "bg-gradient-to-br from-[#00AE8D] to-[#0EA5A4] hover:shadow-[0_20px_40px_-10px_rgba(0,174,141,0.4)] hover:-translate-y-1 active:scale-95"
            )}>
                <a href="/library" className="flex items-center gap-3">
                    Deploy Your System → ₹999
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            
            {/* 3. Micro-Boosters */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#475569]/60 pl-2">
                <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#00AE8D]" /> Works on Excel & Sheets</span>
                <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#00AE8D]" /> No SaaS</span>
                <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#00AE8D]" /> Own Forever</span>
            </div>
        </div>

        {/* 4. Micro Strip: Minimal Sector Support */}
        <div className="pt-8 border-t border-[#0F172A]/5 w-fit">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#475569]/40 italic">
                For hospitality, retail, healthcare, education & more
            </span>
        </div>
    </div>
);

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetype, setArchetype] = useState(6); // Default to newest

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    const transitionProps = {
        initial: { opacity: 0, x: -10, filter: 'blur(8px)' },
        animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, x: 10, filter: 'blur(8px)' },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-[#00AE8D]/20 overflow-hidden font-body bg-[#F8FAFC]">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">SOVEREIGN V95</span>
                    {[6, 1, 2, 3, 4, 5].map((num) => (
                        <button 
                            key={num} 
                            onClick={() => { setArchetype(num); setCurrentIndex(0); }}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all",
                                archetype === num ? "bg-[#00AE8D] text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{num}
                        </button>
                    ))}
                </div>

                {/* --- ARCHETYPE 06: THE ASEGO COMMAND (High-Conversion Default) --- */}
                {archetype === 6 && (
                    <section className="relative w-full h-screen flex overflow-hidden">
                        <StaticVideo opacity={0.12} variant={6} />
                        
                        <div className="container relative z-20 flex items-center h-full px-6 md:px-24 mx-auto">
                            <div className="max-w-4xl w-full">
                                {/* Narrative Sky: This rotates */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[50px] flex items-center">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Fixed Command Floor: This stays perfectly stationary */}
                                <FixedCommandFloor />
                            </div>
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 01: THE STRATEGIC SPLIT (Light Standard) --- */}
                {archetype === 1 && (
                    <section className="relative w-full h-screen flex overflow-hidden bg-white">
                        <div className="w-[50%] h-full flex flex-col justify-center px-12 md:px-24 z-20 bg-white">
                            <div className="max-w-xl space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[40px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-3xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <FixedCommandFloor />
                            </div>
                        </div>
                        <div className="w-[50%] h-full relative border-l border-zinc-100">
                            <StaticVideo opacity={1} variant={1} />
                            {/* Remove the white fade for full clarity on the right */}
                            <div className="absolute inset-0 bg-transparent z-20" />
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 02: THE GLASS SLAB (Full Video) --- */}
                {archetype === 2 && (
                    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
                        <StaticVideo opacity={0.8} blur={4} />
                        <div className="container px-6 md:px-24 relative z-20 mx-auto">
                            <div className="bg-white/80 backdrop-blur-2xl border border-white p-12 md:p-20 rounded-[3rem] max-w-3xl space-y-6 shadow-2xl">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[40px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <FixedCommandFloor />
                            </div>
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 03: THE MINIMALIST PORTAL --- */}
                {archetype === 3 && (
                    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#F8FAFC]">
                        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 z-20">
                            <div className="max-w-4xl space-y-10">
                                <div className="space-y-6">
                                    <h1 className="text-5xl md:text-8xl font-black font-headline text-[#0F172A] leading-[1] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[50px] flex justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <div className="flex justify-center text-left">
                                    <FixedCommandFloor />
                                </div>
                            </div>
                        </div>
                        {/* Cinematic Slit Window at base */}
                        <div className="h-[25vh] w-full relative border-t border-zinc-200">
                            <StaticVideo opacity={0.6} variant={3} />
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 04: THE TECHNICAL BLUEPRINT --- */}
                {archetype === 4 && (
                    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFC]">
                        {/* Engineering Grid Texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
                        <StaticVideo opacity={0.1} blur={10} variant={4} />
                        
                        <div className="relative z-20 container px-6 md:px-24 mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-20 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="border-[#00AE8D]/30 text-[#00AE8D] uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-none">SOVEREIGN V95</Badge>
                                    <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[40px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-3xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <FixedCommandFloor />
                            </div>
                            <div className="hidden lg:block relative aspect-video rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl">
                                <StaticVideo opacity={1} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 05: THE INDUSTRY STRIP --- */}
                {archetype === 5 && (
                    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
                        <StaticVideo opacity={0.1} variant={5} />
                        <div className="container relative z-20 px-6 md:px-24 mx-auto grid lg:grid-cols-[1.3fr,1fr] gap-24 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[40px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#00AE8D] italic tracking-tight leading-none uppercase">
                                                {ROTATING_LINES[currentIndex]}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <FixedCommandFloor />
                            </div>

                            <div className="hidden lg:flex flex-col gap-3">
                                <span className="text-[11px] font-black text-[#00AE8D] uppercase tracking-[0.5em] block mb-4">USED ACROSS</span>
                                {INDUSTRIES.map((ind) => (
                                    <div key={ind} className="group/item flex items-center justify-between p-4 rounded-xl border border-zinc-200/50 bg-white/50 backdrop-blur-sm hover:border-[#00AE8D]/30 transition-all hover:translate-x-2">
                                        <span className="text-sm font-black uppercase italic text-[#0F172A]/40 group-hover/item:text-[#0F172A] transition-colors">{ind}</span>
                                        <ChevronRight className="w-4 h-4 text-zinc-200 group-hover/item:text-[#00AE8D]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ABSOLUTE STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-4 px-6 md:px-12 border-t bg-white/90 backdrop-blur-md border-zinc-200">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#00AE8D] animate-pulse shadow-[0_0_8px_rgba(0,174,141,0.5)]" />
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                SYSTEM_STATUS_V95_ONLINE
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
