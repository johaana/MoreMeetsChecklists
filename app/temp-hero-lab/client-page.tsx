'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock,
    ClipboardCheck,
    History,
    AlertTriangle,
    Activity,
    Check,
    ShieldCheck as ShieldCheckIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "See daily work getting done. Even when you aren't there.",
    cta: "Deploy the system",
    meta: "ONE-TIME PAYMENT • OWN FOREVER • NO SaaS"
};

const TECH_SPECS = [
    { t: "120+ Pre-built Industry SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
    { t: "Trainer Notes included", i: History },
    { t: "No SaaS. Own your data.", i: Lock }
];

const ANXIETY_ITEMS = [
    "Always following up?",
    "Tasks forgotten?",
    "Staff confused?",
    "Memory gaps?"
];

const BRAND_GREEN = "#22C55E";
const MUTED_RED = "rgba(153, 27, 27, 0.4)"; // Muted Editorial Crimson

// --- REUSABLE COMPONENTS ---

const BackgroundVideo = ({ opacity = 0.3, grayscale = false }) => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className={cn(
                "absolute inset-0 h-full w-full object-cover scale-[1.1]",
                grayscale && "saturate-0 brightness-75 contrast-110"
            )}
            style={{ opacity, border: 'none' }}
            title="Sovereign Background"
        />
    </div>
);

const LabSection = ({ children, title, description, id }: { children: React.ReactNode, title: string, description: string, id: string }) => (
    <div id={id} className="w-full py-24 border-b border-white/5 space-y-12 bg-black">
        <div className="container px-8 mx-auto">
            <div className="space-y-1 border-l-2 border-primary pl-6">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-xs uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-[#050505] flex flex-col justify-center">
            {children}
        </div>
    </div>
);

const RiskTag = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn(
        "flex items-center gap-3 px-4 py-2 bg-red-950/40 border border-red-900/30 rounded-lg backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in duration-1000", 
        className
    )} style={{ animationDelay: delay }}>
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
        <span className="text-[10px] md:text-[11px] font-black text-red-100 uppercase tracking-widest italic leading-none whitespace-nowrap opacity-70">{text}</span>
    </div>
);

const CommandGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-10 gap-y-5", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                </div>
                <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/50 group-hover:text-[#22C55E] transition-colors">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-6", className)}>
        <button className="h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#FACC15] transition-transform group-hover:translate-x-1" />
        </button>
        <div className="space-y-1 pl-1">
             <p className="text-[9px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                {NARRATIVE.meta}
            </p>
            <p className="text-[8px] text-emerald-500/40 font-black uppercase tracking-[0.3em]">
                SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE
            </p>
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-emerald-500/30 pb-40">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB V64.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Absolute <span className="text-emerald-500">Command</span> & Elite Precision.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Refined Archetype 14: The Sovereign Elite. Stripped borders, editorial diagnostic column, and prestigious palette.
                </p>
            </div>

            {/* --- ARCHETYPE 14: THE SOVEREIGN ELITE (FINAL HARDENING) --- */}
            <LabSection id="opt-14" title="14. The Sovereign Elite" description="Diagnostic ledger moved to the left of the borderless video. Refined editorial palette.">
                <div className="relative h-full flex items-center px-6 md:px-24 max-w-[1440px] mx-auto">
                    {/* Portrait Background - Atmospheric */}
                    <div className="absolute inset-0 z-0 opacity-[0.02] grayscale pointer-events-none flex items-center justify-center">
                        <ShieldCheckIcon className="w-[800px] h-[800px] text-white" />
                    </div>
                    
                    <BackgroundVideo opacity={0.08} grayscale />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-24 items-center w-full relative z-10">
                        {/* Narrative Resolution Column */}
                        <div className="space-y-12">
                             <div className="space-y-4">
                                <h1 className="font-headline font-black text-[40px] md:text-[88px] leading-[0.85] tracking-tighter text-[#F5F5F2] uppercase italic">
                                    STOP CHASING.<br/>
                                    <span style={{ color: BRAND_GREEN }}>START SEEING.</span>
                                </h1>
                                <p className="text-[18px] md:text-[28px] font-bold text-[#A1A1AA] italic leading-tight max-w-xl">
                                    {NARRATIVE.subline}
                                </p>
                             </div>

                             <CommandGrid className="max-w-xl" />

                             <SovereignCTA />
                        </div>

                        {/* Diagnostic Evidence Column */}
                        <div className="relative flex items-center">
                            {/* The Diagnostic Ledger (Shifted Left) */}
                            <div className="flex flex-col gap-2.5 -mr-4 relative z-20">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <div key={i} className={cn(
                                        "flex items-center gap-3 px-4 py-2 bg-red-950/30 border border-red-900/20 rounded-l-2xl backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in duration-1000",
                                        "border-r-0"
                                    )} style={{ animationDelay: `${i * 0.1}s` }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[10px] md:text-[11px] font-black text-red-100 uppercase tracking-widest italic leading-none whitespace-nowrap opacity-60">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Borderless Video Evidence Window */}
                            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] aspect-[16/11] bg-black ring-1 ring-white/5 group">
                                <BackgroundVideo opacity={1} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 right-8 text-[9px] font-black text-white/20 uppercase tracking-widest italic">
                                    OPERATIONAL_LOG_ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 1: THE HINGED DIAGNOSIS (Retained) --- */}
            <LabSection id="opt-1" title="01. The Hinged Risk Tabs" description="Original tactical version. Borderless frame.">
                <div className="relative h-full flex items-center px-6 md:px-24 max-w-[1440px] mx-auto">
                    <BackgroundVideo opacity={0.1} grayscale />
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-24 items-center w-full relative z-10">
                        <div className="space-y-10">
                             <div className="space-y-3">
                                <h1 className="font-headline font-black text-[40px] md:text-[84px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    STOP CHASING.<br/>
                                    <span className="text-emerald-500">START SEEING.</span>
                                </h1>
                                <p className="text-[18px] md:text-[26px] font-bold text-zinc-400 italic leading-tight">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             <CommandGrid className="max-w-xl" />
                             <SovereignCTA />
                        </div>
                        <div className="relative flex items-center group">
                            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/11] bg-black ring-1 ring-white/5">
                                <BackgroundVideo opacity={1} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <div className="flex flex-col gap-2 -ml-3 relative z-20">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <RiskTag key={i} text={item} delay={`${i * 0.1}s`} className="rounded-l-none border-l-0" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 8: THE COMMAND HUD (Retained) --- */}
            <LabSection id="opt-8" title="08. Industrial HUD" description="Full background video with a data-centric overlay.">
                <div className="absolute inset-0 z-0">
                     <BackgroundVideo opacity={0.6} grayscale />
                     <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 h-full flex overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 space-y-12">
                         <div className="space-y-6">
                            <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-white">
                                CAPTURE <br/> <span className="text-emerald-500">MEMORY.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-emerald-500 pl-8">
                                Institutional memory is an asset. Anything else is just luck.
                            </p>
                         </div>
                         <CommandGrid className="max-w-md" />
                         <SovereignCTA />
                    </div>
                    <div className="hidden lg:flex w-1/2 flex-col justify-center items-end pr-24 space-y-4">
                        <div className="bg-black/80 backdrop-blur-xl border border-red-500/10 rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl">
                            <div className="space-y-1 mb-8">
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Operational Gaps</h3>
                            </div>
                            <div className="space-y-4">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-red-600/5 border border-red-500/10 rounded-xl">
                                        <span className="text-[12px] font-black uppercase italic text-white/70">{item}</span>
                                        <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- VARIANT 9: THE STATUS GUTTER --- */}
            <LabSection id="opt-9" title="09. The Status Gutter" description="Splits the layout with a surgical red risk bar in the center.">
                <div className="relative h-full flex items-center max-w-[1440px] mx-auto px-10">
                    <BackgroundVideo opacity={0.1} />
                    <div className="grid grid-cols-[1fr,80px,1.2fr] items-center w-full relative z-10 gap-0">
                        <div className="space-y-10 pr-12">
                             <h1 className="text-7xl font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                OWN THE <br/> <span className="text-emerald-500">ENGINE.</span>
                             </h1>
                             <CommandGrid className="grid-cols-1 gap-y-4" />
                             <SovereignCTA />
                        </div>
                        <div className="h-[80%] flex flex-col justify-center items-center gap-6 border-x border-white/10 bg-white/[0.02] py-10 relative overflow-hidden">
                             <div className="absolute inset-0 bg-red-600/5" />
                             {ANXIETY_ITEMS.map((item, i) => (
                                <div key={i} className="vertical-text text-[10px] font-black text-red-500 uppercase tracking-[0.3em] whitespace-nowrap origin-center rotate-90 py-10">
                                    {item}
                                </div>
                             ))}
                        </div>
                        <div className="pl-12">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-black relative ring-1 ring-white/5">
                                <BackgroundVideo opacity={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- VARIANT 10: THE BEZEL ALERTS --- */}
            <LabSection id="opt-10" title="10. The Bezel Alerts" description="Risks integrated as technical status chips on the border of the operational console.">
                <div className="relative h-full flex items-center px-16 max-w-7xl mx-auto">
                    <BackgroundVideo opacity={0.05} />
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-20 items-center w-full relative z-10">
                        <div className="space-y-10">
                            <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-white">
                                STOP <br/> <span className="text-emerald-500">CHAOS.</span>
                            </h1>
                            <p className="text-2xl text-zinc-500 italic font-bold leading-tight">
                                Run daily operations properly.
                            </p>
                            <SovereignCTA />
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-10 -left-16 w-32 flex flex-col justify-center gap-3 z-20">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-black/90 border-l-4 border-l-red-500 border-y border-r border-white/5 text-[10px] font-black text-white uppercase italic tracking-widest backdrop-blur-xl">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-[3rem] overflow-hidden border-4 border-[#111] shadow-2xl aspect-[4/3] bg-black relative">
                                <BackgroundVideo opacity={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- VARIANT 11: THE WINGED COMMAND --- */}
            <LabSection id="opt-11" title="11. The Winged Command" description="Centered glass card with a dedicated 'Diagnostic Wing'.">
                 <div className="absolute inset-0">
                    <BackgroundVideo opacity={0.3} grayscale />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                 </div>
                 <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="flex items-stretch max-w-5xl w-full">
                        <div className="flex-1 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-l-[3rem] p-16 space-y-10 shadow-2xl">
                             <h1 className="text-5xl md:text-7xl font-black font-headline uppercase italic leading-[0.85] tracking-tighter">
                                CAPTURE <br/> <span className="text-emerald-500">MEMORY.</span>
                             </h1>
                             <CommandGrid className="grid-cols-2 gap-x-8" />
                             <SovereignCTA />
                        </div>
                        <div className="w-80 bg-red-600/10 backdrop-blur-3xl border border-white/10 border-l-0 rounded-r-[3rem] p-12 flex flex-col justify-center gap-8">
                             <div className="space-y-4">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-red-500/60 font-bold italic text-sm">
                                        <AlertTriangle className="w-4 h-4 shrink-0" />
                                        <span className="uppercase tracking-tight leading-none">{item}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                 </div>
            </LabSection>

            {/* --- VARIANT 12: THE PERIMETER HUD --- */}
            <LabSection id="opt-12" title="12. The Perimeter HUD" description="Full-screen video with risks anchored to absolute corners.">
                <BackgroundVideo opacity={0.5} />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-black/80 pointer-events-none" />
                <div className="absolute top-10 left-10"><RiskTag text={ANXIETY_ITEMS[0]} /></div>
                <div className="absolute top-10 right-10"><RiskTag text={ANXIETY_ITEMS[1]} /></div>
                <div className="absolute bottom-10 left-10"><RiskTag text={ANXIETY_ITEMS[2]} /></div>
                <div className="absolute bottom-10 right-10"><RiskTag text={ANXIETY_ITEMS[3]} /></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center space-y-12 max-w-4xl px-6">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-[110px] font-black font-headline text-white leading-[0.8] tracking-tighter uppercase italic drop-shadow-2xl">
                                DEPLOY <br/> <span className="text-emerald-500">SYSTEMS.</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/50 italic font-bold max-w-2xl mx-auto">
                                Memory is not a system. Serious operations deserve more than improvisation.
                            </p>
                        </div>
                        <div className="flex justify-center border-y border-white/10 py-8">
                             <CommandGrid />
                        </div>
                        <SovereignCTA className="items-center" />
                    </div>
                </div>
            </LabSection>

            {/* --- VARIANT 13: THE TACTICAL SCAN --- */}
            <LabSection id="opt-13" title="13. The Tactical Scan" description="Full-screen industrial loop where risks appear as target markers.">
                <BackgroundVideo opacity={0.6} grayscale />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-[25%] right-[20%] group">
                     <div className="flex items-center gap-4 animate-pulse">
                        <div className="w-10 h-px bg-red-500" />
                        <RiskTag text={ANXIETY_ITEMS[0]} />
                     </div>
                </div>
                <div className="absolute bottom-[35%] right-[15%]">
                     <div className="flex items-center gap-4">
                        <div className="w-20 h-px bg-red-500" />
                        <RiskTag text={ANXIETY_ITEMS[1]} />
                     </div>
                </div>
                <div className="relative z-10 h-full grid grid-cols-2 items-center px-24">
                     <div className="space-y-12">
                         <div className="space-y-4">
                            <h1 className="text-7xl md:text-[100px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                START <br/> <span className="text-emerald-500">SEEING.</span>
                            </h1>
                         </div>
                         <div className="space-y-8">
                            <div className="flex flex-col gap-4">
                                {TECH_SPECS.slice(0,3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white/40 group cursor-default">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-sm font-black uppercase tracking-[0.2em] group-hover:text-emerald-500 transition-colors">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <SovereignCTA />
                         </div>
                     </div>
                </div>
            </LabSection>

            <div className="py-32 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[12px] font-black text-zinc-700 uppercase tracking-[0.8em] italic">SOVEREIGN ONE-GLANCE FRAMEWORK ACTIVE.</p>
                 <Button asChild variant="link" className="mt-10 text-emerald-500 font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
