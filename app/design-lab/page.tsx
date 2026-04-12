
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
    Check,
    Clock,
    Lock,
    Smartphone,
    SearchCheck,
    ChevronRight,
    LayoutGrid,
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: HIGH-CONVERSION NARRATIVE ---
const STATIC_HEADLINE = "Run Your Operations Without Chasing People.";

const ROTATING_LINES = [
    "Track Daily Tasks. See What’s Done.",
    "Pre-Built SOPs Your Team Actually Follows.",
    "Live Dashboard for Every Shift & Location.",
    "No Apps. No SaaS. Runs on Excel & Sheets.",
    "Train Staff Automatically. No Follow-Ups Needed."
];

const SUBTEXT = "A ready-to-use operating system for restaurants, hotels, retail, healthcare, and multi-location teams. Know what’s done, missed, or at risk — in real time.";

const INDUSTRIES = [
    "Restaurants", "Hotels & Resorts", "Retail Stores", "Healthcare", 
    "Schools", "Facilities", "Cinemas", "Franchise Networks"
];

const TECHNICAL_BOOSTERS = [
    "120+ Pre-built SOPs",
    "Audit-ready logs",
    "Works without internet",
    "No training required"
];

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ISOLATED VIDEO (GPU ACCELERATED) ---
const StaticVideo = React.memo(({ opacity = 1, blur = 0, variant = 1 }: { opacity?: number, blur?: number, variant?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F8FAFC]" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className={cn(
                "w-full h-full object-cover will-change-transform",
                variant === 1 ? "grayscale-0" : "grayscale-[0.2]"
            )} 
            style={{ opacity, filter: `blur(${blur}px)`, transform: 'translate3d(0,0,0)' }}
        />
        {/* Layered Overlay System for specific variants */}
        {variant === 5 && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent z-10" />
        )}
        {variant === 2 && (
            <div className="absolute inset-0 bg-black/40 z-10" />
        )}
    </div>
));
StaticVideo.displayName = 'StaticVideo';

// --- SUB-COMPONENT: STATIONARY COMMAND FLOOR ---
const CommandFloor = ({ variant }: { variant: number }) => (
    <div className="space-y-8 pt-8">
        <div className="space-y-4">
            <Button asChild size="lg" className={cn(
                "h-16 md:h-20 px-10 md:px-14 rounded-2xl text-white font-black uppercase italic text-sm md:text-lg tracking-widest shadow-2xl transition-all border-none group/btn w-fit",
                variant === 2 ? "bg-white text-black hover:bg-zinc-100" : "bg-gradient-to-br from-[#22C55E] to-[#15803D] hover:shadow-[0_20px_40px_-10px_rgba(22,163,74,0.4)]"
            )}>
                <a href="/library" className="flex items-center gap-3">
                    Deploy Your System → ₹999
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1.5" />
                </a>
            </Button>
            <p className={cn(
                "text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] pl-4 italic",
                variant === 2 ? "text-white/40" : "text-[#475569]/50"
            )}>
                Works on Excel & Google Sheets • No SaaS • Own Forever
            </p>
        </div>

        <div className={cn(
            "grid grid-cols-2 gap-x-8 gap-y-4 pt-8 border-t max-w-xl",
            variant === 2 ? "border-white/10" : "border-[#0F172A]/5"
        )}>
            {TECHNICAL_BOOSTERS.map((boost) => (
                <div key={boost} className="flex items-center gap-3 group/item">
                    <div className="w-4 h-4 rounded-full bg-[#16A34A]/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#16A34A]" />
                    </div>
                    <span className={cn(
                        "text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] italic transition-colors",
                        variant === 2 ? "text-white/60" : "text-[#0F172A]/60"
                    )}>{boost}</span>
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
            setCurrentIndex((prev) => (prev + 1) % ROTATING_LINES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const activeLine = ROTATING_LINES[currentIndex];

    const transitionProps = {
        initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -10, filter: 'blur(8px)' },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-background">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">ARCHETYPE</span>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                            key={num} 
                            onClick={() => { setArchetype(num); setCurrentIndex(0); }}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all",
                                archetype === num ? "bg-zinc-900 text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{num}
                        </button>
                    ))}
                </div>

                {/* --- ARCHETYPE 01: THE STRATEGIC SPLIT --- */}
                {archetype === 1 && (
                    <section className="relative w-full h-screen flex overflow-hidden bg-white">
                        <div className="w-[45%] h-full flex flex-col justify-center px-12 md:px-24 z-20">
                            <div className="max-w-xl space-y-6">
                                <h1 className="text-4xl md:text-6xl font-black font-headline text-[#0F172A] leading-[1.02] tracking-tighter uppercase italic">
                                    {STATIC_HEADLINE}
                                </h1>
                                <div className="min-h-[50px]">
                                    <AnimatePresence mode="wait">
                                        <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#16A34A] italic tracking-tight leading-none">
                                            {activeLine}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                                <p className="text-lg text-[#475569] font-medium leading-relaxed italic border-l-2 border-[#16A34A]/20 pl-6">
                                    {SUBTEXT}
                                </p>
                                <CommandFloor variant={1} />
                            </div>
                        </div>
                        <div className="w-[55%] h-full relative">
                            <StaticVideo opacity={1} variant={1} />
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 02: THE IMMERSIVE HUD --- */}
                {archetype === 2 && (
                    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-black">
                        <StaticVideo opacity={0.7} variant={2} />
                        <div className="container px-6 md:px-24 relative z-20 mx-auto">
                            <div className="bg-black/40 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[3.5rem] max-w-3xl space-y-8 shadow-2xl">
                                <h1 className="text-4xl md:text-7xl font-black font-headline text-white leading-[1.02] tracking-tighter uppercase italic">
                                    {STATIC_HEADLINE}
                                </h1>
                                <div className="min-h-[50px]">
                                    <AnimatePresence mode="wait">
                                        <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#22C55E] italic tracking-tight leading-none">
                                            {activeLine}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                                <p className="text-lg text-white/60 font-medium leading-relaxed italic">
                                    {SUBTEXT}
                                </p>
                                <CommandFloor variant={2} />
                            </div>
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 03: THE BOARDROOM MINIMALIST --- */}
                {archetype === 3 && (
                    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#F8FAFC]">
                        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 z-20">
                            <div className="max-w-4xl space-y-10">
                                <div className="space-y-4">
                                    <h1 className="text-5xl md:text-8xl font-black font-headline text-[#0F172A] leading-[0.9] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[60px] flex justify-center">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-5xl font-black text-[#16A34A] italic tracking-tight leading-none">
                                                {activeLine}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <p className="text-xl md:text-2xl text-[#475569] font-medium leading-relaxed italic max-w-2xl mx-auto">
                                    {SUBTEXT}
                                </p>
                                <div className="flex justify-center">
                                    <CommandFloor variant={3} />
                                </div>
                            </div>
                        </div>
                        <div className="h-[25vh] w-full relative border-t border-black/5">
                            <StaticVideo opacity={0.4} blur={2} variant={3} />
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 04: THE TECHNICAL BLUEPRINT --- */}
                {archetype === 4 && (
                    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFC]">
                        {/* Background Grid Texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
                        <StaticVideo opacity={0.1} blur={10} variant={4} />
                        
                        <div className="relative z-20 container px-6 md:px-24 mx-auto grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="border-[#16A34A]/30 text-[#16A34A] uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-none">SOVEREIGN V11.9</Badge>
                                    <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[50px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black text-[#16A34A] italic tracking-tight leading-none">
                                                {activeLine}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <p className="text-lg text-[#475569] font-medium leading-relaxed italic border-l-4 border-[#16A34A] pl-8">
                                    {SUBTEXT}
                                </p>
                                <CommandFloor variant={4} />
                            </div>
                            <div className="hidden lg:block">
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl">
                                    <StaticVideo opacity={1} variant={1} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-8 left-8 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">LIVE_SIGNAL_ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* --- ARCHETYPE 05: THE HIGH-CONVERSION PORTAL --- */}
                {archetype === 5 && (
                    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-[#F8FAFC]">
                        <StaticVideo opacity={0.15} blur={4} variant={5} />
                        
                        <div className="relative z-20 container px-6 md:px-24 mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-24 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.02] tracking-tighter uppercase italic">
                                        {STATIC_HEADLINE}
                                    </h1>
                                    <div className="min-h-[60px]">
                                        <AnimatePresence mode="wait">
                                            <motion.p key={currentIndex} {...transitionProps} className="text-2xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#22C55E] to-[#15803D] italic tracking-tight leading-none">
                                                {activeLine}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>
                                    <div className="flex gap-8 items-start max-w-xl">
                                        <div className="w-[3px] h-full self-stretch bg-[#16A34A]/40 rounded-full shrink-0" />
                                        <p className="text-lg md:text-xl text-[#475569] font-medium leading-[1.7] italic">
                                            {SUBTEXT}
                                        </p>
                                    </div>
                                </div>
                                <CommandFloor variant={5} />
                            </div>

                            {/* GLASS COMMAND CONSOLE */}
                            <div className="hidden lg:flex justify-end">
                                <div className="bg-white/75 border border-black/[0.05] backdrop-blur-2xl p-12 rounded-[3.5rem] space-y-10 shadow-[0_30px_60px_rgba(0,0,0,0.1)] max-w-sm w-full relative z-10 overflow-hidden ring-1 ring-white/20">
                                    <div className="space-y-3">
                                        <span className="text-[11px] font-black text-[#16A34A] uppercase tracking-[0.5em] font-headline block">USED ACROSS</span>
                                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#16A34A] to-transparent rounded-full" />
                                    </div>
                                    <div className="space-y-1">
                                        {INDUSTRIES.map((ind) => (
                                            <div key={ind} className="group/industry cursor-default py-3 border-b border-black/[0.03] last:border-0">
                                                <div className="flex items-center justify-between transition-all duration-300 group-hover/industry:translate-x-2">
                                                    <span className="text-xl font-black font-headline uppercase italic tracking-tight text-[#0F172A]/25 group-hover/industry:text-[#0F172A] transition-all duration-300">
                                                        {ind}
                                                    </span>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/industry:bg-[#16A34A] group-hover/industry:scale-125 transition-all duration-300" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-6">
                                        <span className="text-[9px] font-black text-black/25 uppercase tracking-[0.4em] italic leading-relaxed">
                                            Single unit → multi-location scale
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ABSOLUTE STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-4 px-12 border-t bg-white/90 backdrop-blur-md border-zinc-200 shadow-2xl">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                ELITE_COMMAND_OS_STABLE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-zinc-300">
                            <span className="flex items-center gap-2"><SearchCheck className="w-3.5 h-3.5" /> AUDIT_READY_PROTOCOLS</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_ENCRYPTION_V11</span>
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
