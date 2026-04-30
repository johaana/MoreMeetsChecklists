'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock, 
    Activity, 
    ClipboardCheck,
    Smartphone,
    UserX,
    ShieldAlert,
    Scale,
    ShieldCheck,
    TriangleAlert,
    Fingerprint,
    AlertCircle,
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const CONTENT = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subheadline: "Even when you’re not there.",
    proofLine: "No follow-ups • No confusion • No memory gaps",
    price: "₹2,999",
    specs: [
        { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
        { t: "LIVE DASHBOARD", i: Activity },
        { t: "NO SaaS LOCK-IN", i: Lock },
        { t: "TRAINER NOTES INCLUDED", i: Smartphone }
    ]
};

const VideoBackground = ({ opacity = 0.3, grayscale = 1, maskGradient = "from-black via-black/60 to-transparent" }) => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full object-cover scale-[1.3]"
            style={{ 
                opacity: opacity, 
                filter: `grayscale(${grayscale})`,
                width: '100vw',
                height: '100vh',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.3)'
            }}
            title="Operations Hero Video"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r", maskGradient)} />
    </div>
);

const SpecsGrid = ({ color = "#2EB86B", textOpacity = "text-white/40" }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4" style={{ color }} />
                <span className={cn("text-[9px] font-black uppercase tracking-widest", textOpacity)}>{item.t}</span>
            </div>
        ))}
    </div>
);

const HeroCTA = ({ className, dark = false, accent = "#2EB86B" }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button 
            className={cn(
                "h-14 px-10 rounded-xl font-black uppercase italic text-xs transition-all border-none group flex items-center justify-center gap-3 active:scale-95 shadow-2xl",
                dark ? "bg-zinc-950 text-white" : "bg-primary text-black"
            )}
            style={!dark ? { backgroundColor: accent } : {}}
        >
            DEPLOY MASTER ENGINE → {CONTENT.price} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className={cn("text-[9px] font-black uppercase tracking-widest leading-none", dark ? "text-black" : "text-white")}>ONE-TIME PAYMENT</p>
            <p className={cn("text-[8px] font-bold uppercase tracking-widest leading-none", dark ? "text-black/60" : "text-white/40")}>OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-600/95", delay = "0s" }: { children: React.ReactNode, icon: any, className: string, color?: string, delay?: string }) => (
    <div className={cn(
        "absolute p-4 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/10 z-30 flex flex-col gap-2 transition-all hover:scale-105 animate-in fade-in zoom-in duration-1000", 
        color, 
        className
    )} style={{ animationDelay: delay }}>
        <Icon className="w-6 h-6 text-white" />
        <p className="text-[11px] font-black uppercase tracking-[0.1em] leading-tight text-white whitespace-nowrap">{children}</p>
        <div className="w-8 h-0.5 bg-white/20 rounded-full" />
    </div>
);

const LabSection = ({ children, title, subtitle, className }: { children: React.ReactNode, title: string, subtitle: string, className?: string }) => (
    <div className={cn("w-full py-20 md:py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-6 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[85svh] relative overflow-hidden bg-black shadow-2xl">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            
            <div className="container px-8 pt-32 pb-20 mx-auto text-center space-y-8">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-10 py-3 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V7.0
                </Badge>
                <h1 className="text-6xl md:text-[9rem] font-black font-headline italic uppercase tracking-tighter leading-none">Hardened <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                    Consolidated collection (1, 2, 3, 5). Refined for technical gravity and one-glance impact.
                </p>
            </div>

            {/* --- 1. THE IMMERSIVE COMMAND (OVERLAP) --- */}
            <LabSection title="1. The Immersive Command" subtitle="Massive typography overlapping cinematic video. Direct visual impact.">
                <div className="h-full relative flex items-center px-8 md:px-24">
                    <VideoBackground opacity={0.5} grayscale={0.3} maskGradient="from-black/90 via-black/30 to-black/70" />
                    
                    <div className="relative z-20 space-y-16 w-full">
                         <div className="space-y-2">
                            <h1 className="text-5xl md:text-[9.5rem] font-black font-headline leading-[0.75] uppercase italic tracking-tighter text-white whitespace-nowrap drop-shadow-2xl">
                                STOP CHASING.
                            </h1>
                            <h1 className="text-5xl md:text-[9.5rem] font-black font-headline leading-[0.75] uppercase italic tracking-tighter text-primary whitespace-nowrap drop-shadow-2xl">
                                START SEEING.
                            </h1>
                         </div>
                         <div className="flex flex-col md:flex-row items-end justify-between gap-12 pt-8">
                            <p className="text-xl md:text-4xl text-white/60 italic font-bold max-w-xl leading-[1.1]">
                                See daily work getting done. <br/> Even when you aren’t there.
                            </p>
                            <div className="space-y-8">
                                <SpecsGrid />
                                <HeroCTA className="scale-110 origin-right" />
                            </div>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE SOVEREIGN GHOST (HARDENED RISKS) --- */}
            <LabSection title="2. The Sovereign Ghost" subtitle="The Boss Frame archetype with hardened operational risk callouts.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[4rem] md:text-[5.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                    STOP CHASING <br/>
                                    <span className="text-primary">YOUR TEAM.</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-500 italic font-bold leading-tight">
                                    No more manual follow-up loops. <br/> Capture institutional memory.
                                </p>
                            </div>
                            <SpecsGrid />
                            <HeroCTA />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldAlert} className="-top-16 -left-16 bg-red-600/90" delay="0.5s">
                                UNVERIFIED EXECUTION
                            </Annotation>
                            <Annotation icon={UserX} className="top-1/4 -right-24 bg-red-600/90" delay="1s">
                                TRIBAL KNOWLEDGE LEAKS
                            </Annotation>
                            <Annotation icon={Fingerprint} className="-bottom-16 left-1/4 bg-red-600/90" delay="1.5s">
                                UNTRACKED NEAR-MISSES
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden border-[16px] border-zinc-800/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black relative group">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.15] saturate-0 brightness-75" title="Ghost Video" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE GOVERNANCE MONITOR (NAVY/GOLD) --- */}
            <LabSection title="3. The Executive Monitor" subtitle="Sovereign Navy/Gold palette. Focusing on Audit & Compliance risks.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-24">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                             <div className="space-y-6">
                                <h1 className="text-[5.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                    SYSTEMS OVER<br />
                                    <span className="text-accent">MORTALITY.</span>
                                </h1>
                                <p className="text-2xl md:text-3xl text-zinc-500 italic font-bold">People move on. The system must stay.</p>
                            </div>
                            <SpecsGrid color="#FACC15" textOpacity="text-white/20" />
                            <HeroCTA accent="#FACC15" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldCheck} color="bg-[#1E293B]/95 border-accent/30" className="-top-12 -left-12">
                                AUDIT EXPOSURE DETECTED
                            </Annotation>
                            <Annotation icon={Scale} color="bg-[#1E293B]/95 border-accent/30" className="bottom-0 -right-24">
                                COMPLIANCE DRIFT
                            </Annotation>
                            <Annotation icon={AlertCircle} color="bg-[#1E293B]/95 border-accent/30" className="top-1/3 -right-20">
                                PROCEDURAL BLINDSPOTS
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden border-[16px] border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50" title="Exec Video" />
                                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE CRITICAL DEFENSE (RISK RED) --- */}
            <LabSection title="5. The Risk Center" subtitle="High-urgency archetype. Exposing fatal protocol lapses.">
                <div className="h-full bg-black flex items-center justify-center relative px-24 overflow-hidden">
                    <div className="absolute -inset-20 bg-red-600/10 blur-[120px] rounded-full" />
                    
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <h1 className="text-[5.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                CHAOS IS<br />
                                <span className="text-red-600">EXPENSIVE.</span>
                            </h1>
                            <div className="space-y-4">
                                <p className="text-xl font-mono text-red-600/60 uppercase tracking-[0.3em] font-black">CRITICAL_VULNERABILITY_FIX</p>
                                <SpecsGrid color="#DC2626" />
                            </div>
                            <HeroCTA accent="#DC2626" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldAlert} color="bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)]" className="-top-12 -left-12 animate-pulse">
                                FATAL PROTOCOL LAPSE
                            </Annotation>
                            <Annotation icon={TriangleAlert} color="bg-red-800" className="bottom-0 -right-20">
                                UNMITIGATED RISK LOAD
                            </Annotation>
                            <Annotation icon={Zap} color="bg-red-700" className="top-1/2 -right-24">
                                MARGIN EROSION
                            </Annotation>
                            <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden border-[12px] border-red-600/30 shadow-[0_0_120px_-20px_rgba(220,38,38,0.5)]">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover grayscale saturate-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">Sovereign Lab v7.0 Concluded. Choose archetype for final implementation.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
