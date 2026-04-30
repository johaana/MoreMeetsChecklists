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
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const CONTENT = {
    headlineWhite: "STOP CHASING YOUR TEAM.",
    headlineGreen: "SEE DAILY WORK GETTING DONE.",
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

const BRAND_GREEN = "#2EB86B";
const DEEP_BLACK = "#0A0F19";

const VideoBackground = ({ opacity = 0.3, grayscale = 1 }) => (
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
    </div>
);

const LabSection = ({ children, title, subtitle, className }: { children: React.ReactNode, title: string, subtitle: string, className?: string }) => (
    <div className={cn("w-full py-24 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-6 mx-auto">
            <div className="space-y-2 pl-4 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-secondary-text italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-black shadow-2xl">
            {children}
        </div>
    </div>
);

const DesktopCTA = ({ className, dark = false }: { className?: string, dark?: boolean }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button className={cn(
            "h-16 px-12 rounded-xl font-black uppercase italic text-sm transition-all border-none group flex items-center justify-center gap-3 active:scale-95",
            dark 
                ? "bg-zinc-950 text-white shadow-xl hover:bg-black" 
                : "bg-primary text-black shadow-[0_12px_40px_-5px_rgba(46,184,107,0.4)] hover:scale-105"
        )}>
            DEPLOY MASTER ENGINE → {CONTENT.price} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className={cn("text-[10px] font-black uppercase tracking-widest leading-none", dark ? "text-black" : "text-white")}>ONE-TIME PAYMENT</p>
            <p className={cn("text-[9px] font-bold uppercase tracking-widest leading-none", dark ? "text-black/60" : "text-white/40")}>OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const SpecsGrid = ({ color = BRAND_GREEN, textOpacity = "text-white/40" }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4" style={{ color }} />
                <span className={cn("text-[10px] font-black uppercase tracking-widest", textOpacity)}>{item.t}</span>
            </div>
        ))}
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            
            <div className="container px-6 pt-32 pb-20 mx-auto text-center space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V4.0
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">Hardened <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                    Refining 1 & 4 with Heavy Italic IBM Plex Sans and high-gravity institutional spacing.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SOVEREIGN SPLIT (IMPROVED) --- */}
            <LabSection 
                title="1. The Sovereign Split (Hardened)" 
                subtitle="Maximum contrast. Massive typography. One-glance logic command."
            >
                <div className="flex h-full flex-col md:flex-row">
                    <div className="w-full md:w-[50%] bg-[#0A0F19] h-full flex flex-col justify-center px-12 md:px-24 space-y-12 relative z-20 border-r border-white/5 shadow-[20px_0_100px_-10px_rgba(0,0,0,0.5)]">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-white">
                                    STOP CHASING <br/> YOUR TEAM.
                                </h1>
                                <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-primary">
                                    SEE DAILY WORK <br/> GETTING DONE.
                                </h1>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-medium border-l-4 border-primary pl-6">
                                    {CONTENT.subheadline}
                                </p>
                                <p className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] pl-7 italic">{CONTENT.proofLine}</p>
                            </div>
                        </div>
                        <SpecsGrid />
                        <DesktopCTA />
                    </div>
                    <div className="flex-1 relative h-full bg-zinc-900">
                        <VideoBackground opacity={0.7} grayscale={0.5} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F19] via-transparent to-transparent z-10" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE STRATEGIC BLUEPRINT (IMPROVED) --- */}
            <LabSection 
                title="4. The Strategic Blueprint (Hardened)" 
                subtitle="Institutional grid. Industrial framing. Technical accuracy at a glance."
                className="bg-[#F7F8FA]"
            >
                <div className="h-full bg-white flex items-center justify-center relative overflow-hidden">
                    {/* The Blueprint Grid */}
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_80%)]" />
                    
                    <VideoBackground opacity={0.1} grayscale={1} />
                    
                    <div className="container mx-auto grid md:grid-cols-[1fr,1.1fr] gap-12 items-center relative z-20 px-12 lg:px-24">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-[#0B0F14]">
                                        STOP CHASING <br/> YOUR TEAM.
                                    </h1>
                                    <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-primary">
                                        SEE DAILY WORK <br/> GETTING DONE.
                                    </h1>
                                </div>
                                <p className="text-2xl md:text-3xl text-zinc-500 font-bold italic leading-tight">{CONTENT.subheadline}</p>
                            </div>
                            
                            <div className="space-y-5">
                                {CONTENT.specs.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#0B0F14]/60 group-hover:text-primary transition-colors">{s.t}</span>
                                    </div>
                                ))}
                            </div>

                            <DesktopCTA dark />
                        </div>
                        
                        <div className="relative group p-4 bg-zinc-100/50 backdrop-blur-sm rounded-[3rem] border border-zinc-200 shadow-2xl">
                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl relative bg-black">
                                <iframe
                                    src={VIMEO_URL}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    className="absolute inset-0 h-full w-full object-cover scale-[1.15] grayscale contrast-125 saturate-0"
                                    title="Ops Video"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                            
                            {/* Floating High-Gravity Badge */}
                            <div className="absolute -top-6 -right-6 bg-primary text-black px-10 py-3 rounded-full font-black uppercase italic text-sm tracking-[0.3em] shadow-[0_10px_40px_-5px_rgba(46,184,107,0.6)] animate-pulse">
                                SHIFT_LIVE
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- PREVIOUS OPTIONS (MODIFIED TO MATCH V4.0 STANDARDS) --- */}
            <LabSection title="2. The Glass Command" subtitle="Standardized with V4.0 typography.">
                <div className="h-full relative flex items-center justify-center">
                    <VideoBackground opacity={0.4} grayscale={1} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                    
                    <div className="relative z-20 w-full max-w-5xl px-6">
                        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-20 space-y-12 shadow-2xl text-center">
                             <div className="space-y-6">
                                <h1 className="text-4xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.headlineWhite} <br/>
                                    <span className="text-primary">{CONTENT.headlineGreen}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-medium">{CONTENT.subheadline}</p>
                             </div>
                             
                             <div className="flex flex-col items-center gap-8">
                                <DesktopCTA />
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] italic">{CONTENT.proofLine}</p>
                             </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-sm font-bold text-zinc-600 uppercase tracking-[0.4em] italic">End of Strategic Lab v4.0. Select archetype for primary implementation.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
