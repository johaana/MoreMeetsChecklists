'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE."
};

const SOVEREIGN_GOLD = "#FACC15";
const SOVEREIGN_GREEN = "#1E8E5A";

const VideoBackground = ({ opacity = 0.4 }) => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full object-cover scale-[1.3]"
            style={{ 
                opacity: opacity, 
                width: '100vw',
                height: '100vh',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.3)'
            }}
            title="Operations Hero Video"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
    </div>
);

/**
 * 2x2 COMMAND GRID
 * Re-engineered for maximum vertical space efficiency.
 */
const SpecsGrid = ({ color = SOVEREIGN_GOLD }) => (
    <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:gap-y-5 w-fit">
        {[
            "120+ PRE-BUILT SOPs",
            "LIVE DASHBOARD",
            "NO SaaS LOCK-IN",
            "TRAINER NOTES INCLUDED"
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="font-black uppercase tracking-[0.2em] italic font-headline text-white/50 text-[10px] md:text-sm group-hover:text-white transition-colors whitespace-nowrap">{item}</span>
            </div>
        ))}
    </div>
);

const CommandCTA = ({ accent = SOVEREIGN_GOLD }) => (
    <div className="flex flex-col gap-4 w-full max-w-xl">
        <div className="flex flex-col items-center md:items-start gap-4">
            <Button 
                asChild
                className="h-20 px-10 rounded-xl font-black uppercase italic text-lg md:text-xl transition-all border-none group flex items-center justify-center gap-4 active:scale-95 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]"
                style={{ backgroundColor: accent, color: 'black' }}
            >
                <Link href="/library">
                    DEPLOY MASTER ENGINE → ₹2,999 <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </Link>
            </Button>
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full px-2 gap-4">
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] leading-none text-white/50">ONE-TIME PAYMENT</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] leading-none text-white/20 italic">OWN FOREVER • NO SaaS</p>
                </div>
                <div className="hidden md:flex items-center gap-3">
                     <ShieldCheck className="w-4 h-4 text-white/10" />
                     <span className="text-[8px] font-mono text-white/10 uppercase tracking-widest">SECURE_BUILD_V21.0</span>
                </div>
            </div>
        </div>
    </div>
);

/**
 * HARDENED HUD ANNOTATION
 * Risk-Red, Icon-free, glassmorphic.
 */
const HUDAnnotation = ({ children, className, delay = "0s" }: { children: React.ReactNode, className: string, delay?: string }) => (
    <div className={cn(
        "absolute px-3 py-2 rounded-lg shadow-[0_30px_60px_-12px_rgba(220,38,38,0.3)] backdrop-blur-3xl border border-red-500/30 z-30 flex items-center gap-2.5 transition-all hover:scale-110 animate-in fade-in zoom-in duration-1000 bg-red-600/90", 
        className
    )} style={{ animationDelay: delay }}>
        <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-block rounded-full h-1.5 w-1.5 bg-white"></span>
        </span>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-tight text-white whitespace-nowrap italic">{children}</p>
    </div>
);

const LabSection = ({ children, id, title, subtitle, className }: { children: React.ReactNode, id: string, title: string, subtitle: string, className?: string }) => (
    <div id={id} className={cn("w-full py-24 md:py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-8 border-l-4 border-primary">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-base text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full min-h-[90svh] relative overflow-hidden bg-black flex flex-col justify-center">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden pb-40">
            
            <div className="container px-8 pt-40 pb-24 mx-auto text-center space-y-10">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-10 py-3 rounded-none bg-primary/5">
                    SOVEREIGN ONE-GLANCE LAB V21.0
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black font-headline italic uppercase tracking-tighter leading-none">Market <span className="text-primary">Command.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
                    Options 2, 3, 7 Finalists. 2x2 Command Grid Active.
                </p>
            </div>

            {/* --- ARCHETYPE 2: THE GHOST HUD --- */}
            <LabSection id="opt-2" title="Archetype 2: The Ghost HUD" subtitle="Framed video haunted by Risk-Red alerts. Compact 2x2 command unit.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24 py-20">
                    <div className="grid lg:grid-cols-[1fr,1.4fr] gap-12 lg:gap-20 items-center relative z-20 w-full max-w-7xl">
                        <div className="space-y-12">
                            <div className="space-y-3">
                                <h1 className="text-[1.8rem] md:text-[4rem] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[1.8rem] md:text-[4rem] font-black font-headline leading-[0.95] uppercase italic tracking-tighter" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                            </div>
                            <SpecsGrid color={SOVEREIGN_GREEN} />
                            <CommandCTA accent={SOVEREIGN_GREEN} />
                        </div>
                        
                        <div className="relative group">
                            <HUDAnnotation className="top-8 -left-4" delay="0.5s">Follow ups?</HUDAnnotation>
                            <HUDAnnotation className="top-1/2 -right-8" delay="1s">Missed steps?</HUDAnnotation>
                            <HUDAnnotation className="bottom-8 -left-2" delay="1.5s">Daily chaos?</HUDAnnotation>

                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.1]" title="Ghost Video" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE MULTI-TONE MONITOR --- */}
            <LabSection id="opt-3" title="Archetype 3: The Multi-Tone Monitor" subtitle="High-density monitoring architecture. Sovereign Gold mandate.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-8 md:px-24 py-20">
                    <div className="grid lg:grid-cols-[1fr,1.6fr] gap-12 lg:gap-32 items-center relative z-20 w-full max-w-[1440px]">
                        <div className="space-y-12">
                             <div className="space-y-4">
                                <h1 className="text-[1.8rem] md:text-[4.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[1.8rem] md:text-[4.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter" style={{ color: SOVEREIGN_GOLD }}>
                                    {NARRATIVE.line2}
                                </h1>
                            </div>
                            <SpecsGrid color={SOVEREIGN_GOLD} />
                            <CommandCTA accent={SOVEREIGN_GOLD} />
                        </div>
                        
                        <div className="relative">
                            <HUDAnnotation className="-top-4 left-10">Training calls?</HUDAnnotation>
                            <HUDAnnotation className="bottom-10 -right-4">Memory gaps?</HUDAnnotation>
                            <HUDAnnotation className="top-1/2 -right-10">Missed steps?</HUDAnnotation>
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border-[6px] border-white/5 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover" title="Monitor Red" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 7: THE PURE SPLIT --- */}
            <LabSection id="opt-7" title="Archetype 7: The Pure Split" subtitle="Symmetric 50/50 division. Standardized 2x2 grid. Zero clutter.">
                <div className="h-full relative flex flex-col md:flex-row items-stretch">
                    <div className="w-full md:w-1/2 bg-black flex flex-col justify-center px-12 md:px-24 space-y-12 z-20 border-r border-white/5 py-24">
                        <div className="space-y-8">
                            <h1 className="text-[2.2rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-[2.2rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GOLD }}>
                                {NARRATIVE.line2}
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-500 italic font-bold pt-4 border-l-4 border-white/10 pl-8 max-w-md leading-tight">
                                Memory is not a system. <br/> Serious operations deserve more.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <SpecsGrid color={SOVEREIGN_GOLD} />
                            <CommandCTA accent={SOVEREIGN_GOLD} />
                        </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-[#0A0A0A] min-h-[500px]">
                        <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.3]" title="Split Color" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </LabSection>

            <div className="py-40 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[14px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">Consolidated Finalists v21.0 Active.</p>
                 <Button asChild variant="link" className="mt-12 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
