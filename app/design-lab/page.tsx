
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
    CheckCircle2,
    Clock,
    SearchCheck,
    Lock,
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION: THE 5 ORIGINAL NARRATIVES ---
const ORIGINAL_NARRATIVES = [
    {
        badge: "INSTITUTIONAL INFRASTRUCTURE",
        titleWhite: "NO MORE",
        titleColor: "FOLLOW UPS.",
        subtitle: "Stop chasing staff for updates. The system records execution in real-time, across every branch, automatically.",
        accentColor: "#2eb86b", 
    },
    {
        badge: "OPERATIONAL VISIBILITY",
        titleWhite: "SEE LIVE",
        titleColor: "REPORTING.",
        subtitle: "One dashboard. Total clarity. Know what's done, what's missed, and what's delayed—before it becomes a crisis.",
        accentColor: "#3b82f6", 
    },
    {
        badge: "SOVEREIGN DATA CONTROL",
        titleWhite: "NO SaaS",
        titleColor: "LOCK-IN.",
        subtitle: "No monthly fees. No proprietary apps. You buy the engine once and own your data forever on Excel or Google Sheets.",
        accentColor: "#f59e0b", 
    },
    {
        badge: "ZERO LEARNING CURVE",
        titleWhite: "WORKS ON",
        titleColor: "EXCEL.",
        subtitle: "Deploy in 10 minutes. Your team already knows how to use it. Capture institutional memory without the tech friction.",
        accentColor: "#ef4444", 
    }
];

// --- CONFIGURATION: ARCHETYPE 06 (HIGH CONVERSION) ---
const ARCHETYPE_6_ROTATION = [
    "Track Daily Tasks. See What’s Done.",
    "Pre-Built SOPs Your Team Actually Follows.",
    "Live Dashboard for Every Shift & Location.",
    "No Apps. No SaaS. Runs on Excel & Sheets.",
    "Train Staff Automatically. No Follow-Ups Needed."
];

const INDUSTRIES = [
    "Restaurants", "Hotels & Resorts", "Retail Stores", "Healthcare", 
    "Schools", "Facilities", "Cinemas", "Franchise Networks"
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
const StaticVideo = React.memo(({ opacity = 0.5, grayscale = 0.2, isDark = false, blur = 0 }: { opacity?: number, grayscale?: number, isDark?: boolean, blur?: number }) => (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", isDark ? "bg-black" : "bg-zinc-100")} style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-20 grayscale will-change-transform" 
            style={{ opacity, filter: `grayscale(${grayscale}) blur(${blur}px)`, transform: 'translate3d(0,0,0)' }}
        />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [archetype, setArchetype] = useState(6);

    useEffect(() => {
        const interval = setInterval(() => {
            const limit = archetype === 6 ? ARCHETYPE_6_ROTATION.length : ORIGINAL_NARRATIVES.length;
            setCurrentIndex((prev) => (prev + 1) % limit);
        }, 5000);
        return () => clearInterval(interval);
    }, [archetype]);

    const activeOriginal = ORIGINAL_NARRATIVES[currentIndex] || ORIGINAL_NARRATIVES[0];
    const activeA6 = ARCHETYPE_6_ROTATION[currentIndex] || ARCHETYPE_6_ROTATION[0];

    const transitionProps = {
        initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: -10, filter: 'blur(10px)' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-background">
            <SiteHeader />

            <main className="flex-1">
                {/* Archetype Selector */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">ARCHETYPE</span>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
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

                <section className={cn(
                    "relative w-full h-[100dvh] flex flex-col overflow-hidden transition-colors duration-1000",
                    archetype === 6 ? "bg-[#F8FAFC]" : (archetype === 1 ? "bg-black" : "bg-zinc-50")
                )}>
                    
                    {/* --- BACKGROUND LAYERS --- */}
                    {archetype === 6 ? (
                        <>
                            <StaticVideo opacity={0.05} grayscale={0.5} blur={10} />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/5 via-transparent to-transparent z-10" />
                            {/* Radial Depth behind CTA area */}
                            <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-[#22C55E]/5 blur-[120px] rounded-full z-10 pointer-events-none" />
                        </>
                    ) : (
                        <>
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
                                <div className="absolute inset-0 z-0 bg-zinc-50">
                                    <StaticVideo opacity={0.4} grayscale={0.2} />
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
                        </>
                    )}

                    {/* --- CONTENT LAYER --- */}
                    <div className="relative z-20 flex-1 flex flex-col h-full px-6 md:px-24 justify-center">
                        <div className="w-full max-w-7xl mx-auto">
                            
                            {archetype === 6 ? (
                                /* ARCHETYPE 6: HIGH CONVERSION PREMIUM LIGHT */
                                <div className="grid lg:grid-cols-[1fr,450px] gap-20 items-center">
                                    <div className="space-y-12">
                                        <div className="space-y-6">
                                            <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[1.05] tracking-tighter uppercase italic">
                                                Run Your Operations <br />
                                                <span className="text-[#0F172A] opacity-90">Without Chasing People.</span>
                                            </h1>
                                            
                                            <div className="min-h-[100px] flex items-center">
                                                <AnimatePresence mode="wait">
                                                    <motion.p 
                                                        key={currentIndex} 
                                                        {...transitionProps} 
                                                        className="text-2xl md:text-4xl font-black text-[#22C55E] italic tracking-tight leading-none"
                                                    >
                                                        {activeA6}
                                                    </motion.p>
                                                </AnimatePresence>
                                            </div>

                                            <div className="flex gap-6 items-start max-w-xl">
                                                <div className="w-0.5 h-auto self-stretch bg-gradient-to-b from-[#22C55E] via-[#22C55E]/40 to-transparent shrink-0 opacity-60" />
                                                <p className="text-lg md:text-xl text-[#475569] font-medium leading-[1.7] italic">
                                                    A ready-to-use operating system for restaurants, hotels, retail, healthcare, and multi-location teams. <br />
                                                    Know what’s done, missed, or at risk — in real time.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <Button asChild size="lg" className="h-20 px-14 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white font-black uppercase italic text-lg tracking-widest shadow-[0_15px_30px_-10px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:scale-95 transition-all border-none group/btn w-fit">
                                                    <a href="/library" className="flex items-center gap-3">
                                                        Deploy Your System → ₹999
                                                        <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1.5" />
                                                    </a>
                                                </Button>
                                                <p className="text-[11px] font-black text-[#475569]/50 uppercase tracking-[0.4em] pl-4 italic">
                                                    Works on Excel & Google Sheets • No SaaS • Own Forever
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-12 gap-y-4 pt-6 border-t border-zinc-200 max-w-xl">
                                                {[
                                                    "Pre-built SOPs",
                                                    "Audit-ready logs",
                                                    "Works without internet",
                                                    "No training required"
                                                ].map((boost, i) => (
                                                    <div key={i} className="flex items-center gap-3 group/item">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]/20 group-hover/item:bg-[#22C55E] transition-colors" />
                                                        <span className="text-[11px] font-black text-[#0F172A]/60 uppercase tracking-widest group-hover/item:text-[#0F172A] transition-colors">{boost}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex justify-end relative">
                                        <div className="bg-white/60 border border-black/[0.08] backdrop-blur-2xl p-12 rounded-[3.5rem] space-y-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] max-w-sm w-full relative z-10 overflow-hidden">
                                            {/* Decorative glass highlight */}
                                            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                            
                                            <div className="space-y-2">
                                                <span className="text-[11px] font-black text-[#22C55E] uppercase tracking-[0.5em] font-headline block">USED ACROSS</span>
                                                <div className="w-12 h-0.5 bg-[#22C55E]/20" />
                                            </div>

                                            <div className="space-y-5">
                                                {INDUSTRIES.map((ind, i) => (
                                                    <div key={i} className="flex items-center gap-5 group/industry cursor-default">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/industry:bg-[#22C55E] group-hover/industry:scale-125 transition-all duration-300" />
                                                        <span className="text-xl font-black font-headline uppercase italic tracking-tight text-[#0F172A]/20 group-hover/industry:text-[#0F172A] group-hover/industry:translate-x-1.5 transition-all duration-300">
                                                            {ind}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-black/5">
                                                <span className="text-[9px] font-black text-black/20 uppercase tracking-[0.4em] italic">
                                                    Single unit → multi-location scale
                                                </span>
                                            </div>
                                        </div>
                                        {/* Background soft glow behind panel */}
                                        <div className="absolute -inset-10 bg-[#22C55E]/5 blur-[80px] rounded-full z-0" />
                                    </div>
                                </div>
                            ) : (
                                /* ORIGINAL ARCHETYPES 1-5 */
                                <div className="space-y-12">
                                    <div 
                                        className="absolute -z-10 blur-[150px] opacity-20 pointer-events-none transition-colors duration-1000 rounded-full w-[600px] h-[600px]" 
                                        style={{ backgroundColor: activeOriginal.accentColor, top: '20%', left: archetype === 3 ? '50%' : '10%', transform: archetype === 3 ? 'translateX(-50%)' : 'none' }} 
                                    />

                                    <Badge variant="outline" className={cn(
                                        "w-fit text-[10px] font-black uppercase tracking-[0.5em] px-8 py-2 rounded-none",
                                        archetype === 1 ? "border-white/20 text-white/40 bg-white/5" : "border-zinc-300 text-zinc-400 bg-white shadow-sm"
                                    )}>
                                        {activeOriginal.badge}
                                    </Badge>

                                    <div className="min-h-[250px] flex flex-col justify-center relative z-20">
                                        <AnimatePresence mode="wait">
                                            <motion.div key={currentIndex} {...transitionProps} className="space-y-8">
                                                <h1 className={cn(
                                                    "text-5xl md:text-[7.5rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic",
                                                    archetype === 1 ? "text-white" : "text-zinc-950"
                                                )}>
                                                    {activeOriginal.titleWhite} <br/> 
                                                    <span style={{ color: activeOriginal.accentColor }} className="transition-colors duration-1000">
                                                        {activeOriginal.titleColor}
                                                    </span>
                                                </h1>
                                                <div className={cn("flex gap-8 items-start", archetype === 3 && "justify-center")}>
                                                    <div className="w-2 rounded-full h-16 shrink-0 transition-colors duration-1000" style={{ backgroundColor: activeOriginal.accentColor }} />
                                                    <p className={cn(
                                                        "text-xl md:text-3xl font-bold italic leading-[1.1] max-w-2xl",
                                                        archetype === 1 ? "text-white/60" : "text-zinc-600"
                                                    )}>
                                                        {activeOriginal.subtitle}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Stationary Command Floor (Locked outside transition) */}
                                    <div className="w-full space-y-10 pt-12 relative z-30">
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                                            <Button asChild className="h-16 px-12 rounded-xl font-black uppercase italic text-sm tracking-widest shadow-2xl transition-all border-none group/btn text-black hover:scale-105 active:scale-95" style={{ backgroundColor: activeOriginal.accentColor }}>
                                                <a href="/library" className="flex items-center">
                                                    DEPLOY SYSTEM: ₹999 <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1.5" />
                                                </a>
                                            </Button>
                                            <div className="flex flex-col">
                                                <span className={cn("text-[10px] font-black uppercase tracking-[0.4em]", archetype === 1 ? "text-white/20" : "text-zinc-400")}>SOVEREIGN_V11.9_MASTER</span>
                                                <span className={cn("text-[11px] font-bold italic", archetype === 1 ? "text-white/40" : "text-zinc-500")}>Audit-Ready • No Subscriptions • Lifetime Access</span>
                                            </div>
                                        </div>

                                        <div className={cn("grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 border-t pt-8", archetype === 1 ? "border-white/10" : "border-zinc-200/50")}>
                                            {TECHNICAL_PILLARS.map((pillar, i) => (
                                                <div key={i} className="flex items-center gap-2 group">
                                                    <pillar.i className="w-3.5 h-3.5 shrink-0 opacity-40 transition-colors" style={{ color: activeOriginal.accentColor }} />
                                                    <span className={cn("text-[9px] font-black uppercase tracking-[0.2em] italic whitespace-nowrap", archetype === 1 ? "text-white/30" : "text-zinc-400")}>{pillar.t}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
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
                                    style={{ backgroundColor: archetype === 6 ? "#22C55E" : activeOriginal.accentColor }} 
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
