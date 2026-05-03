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
    "Always chasing staff?",
    "Work gets missed?",
    "The team is confused?",
    "Memories fade?"
];

const BRAND_GREEN = "#22C55E";

// --- REUSABLE COMPONENTS ---

const BackgroundVideo = ({ opacity = 0.3, grayscale = false }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full min-h-[56.25vw] scale-[1.05]",
                grayscale && "saturate-0 brightness-75 contrast-110"
            )}
            style={{ opacity, border: 'none' }}
            title="Sovereign Background"
        />
    </div>
);

const LabSection = ({ children, title, description, id, fullScreen = false }: { children: React.ReactNode, title: string, description: string, id: string, fullScreen?: boolean }) => (
    <div id={id} className="w-full py-24 border-b border-white/5 space-y-12 bg-black">
        <div className="container px-8 mx-auto">
            <div className="space-y-1 border-l-2 border-primary pl-6">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-xs uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className={cn(
            "w-full relative overflow-hidden bg-[#050505] flex flex-col justify-center",
            fullScreen ? "h-[100svh]" : "h-[90svh]"
        )}>
            {children}
        </div>
    </div>
);

const RiskTag = ({ text, className, delay = "0s", variant = "tactical" }: { text: string, className?: string, delay?: string, variant?: "tactical" | "editorial" }) => (
    <div className={cn(
        variant === "tactical" 
            ? "flex items-center gap-3 px-4 py-2 bg-red-950/40 border border-red-900/30 rounded-lg backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in duration-1000"
            : "flex items-center gap-3 px-4 py-1.5 bg-[#991B1B]/40 border border-red-900/10 rounded-full backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-1000",
        className
    )} style={{ delay }}>
        <div className={cn("w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]")} />
        <span className="text-[10px] md:text-[11px] font-black text-red-100 uppercase tracking-widest italic leading-none whitespace-nowrap opacity-70">{text}</span>
    </div>
);

const CommandGrid = ({ className, textColor = "text-white/50" }: { className?: string, textColor?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-10 gap-y-5", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                </div>
                <span className={cn("text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] italic leading-tight group-hover:text-[#22C55E] transition-colors", textColor)}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className, showExtraMeta = true }: { className?: string, showExtraMeta?: boolean }) => (
    <div className={cn("space-y-6", className)}>
        <button className="h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#FACC15] transition-transform group-hover:translate-x-1" />
        </button>
        <div className="space-y-1 pl-1">
             <p className="text-[9px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                {NARRATIVE.meta}
            </p>
            {showExtraMeta && (
                <p className="text-[8px] text-emerald-500/40 font-black uppercase tracking-[0.3em]">
                    SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE
                </p>
            )}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-emerald-500/30 pb-40">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Category <span className="text-emerald-500">Defining</span> Authority.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Optimized Cinematic Full-Screen Logic. All versioning and meta-tags sterilized.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE HINGED DIAGNOSIS --- */}
            <LabSection id="opt-1" title="01. The Hinged Risk Tabs" description="Original tactical layout. Borderless frame.">
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

            {/* --- ARCHETYPE 13: THE TACTICAL SCAN --- */}
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

            {/* --- ARCHETYPE 17: THE REFINED CINEMATIC HUD --- */}
            <LabSection id="opt-17" title="17. Refined Cinematic HUD" description="Absolute full-screen cover logic. Layman vocabulary applied." fullScreen>
                {/* Fixed Background Video Engine - Optimized for True Cover */}
                <div className="absolute inset-0 z-0">
                    <BackgroundVideo opacity={0.5} grayscale />
                    {/* Directional Hardware Gradient for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 lg:px-32">
                    <div className="max-w-5xl space-y-16">
                        {/* Narrative Command */}
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-[110px] font-black font-headline leading-[0.82] uppercase italic tracking-tighter drop-shadow-2xl">
                                {NARRATIVE.line1}<br/>
                                <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-[20px] md:text-[32px] leading-[1.2] italic font-medium text-zinc-400 max-w-xl">
                                See daily work getting done. <br/> Even when you aren't there.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start md:items-center">
                            {/* Diagnostic Ledger (The Layman Problems) */}
                            <div className="space-y-6 border-l-2 border-red-500/20 pl-8 md:pl-10">
                                <p className="text-[10px] font-black text-red-500/60 uppercase tracking-[0.5em] italic">WHY TEAMS STRUGGLE</p>
                                <div className="flex flex-col gap-4">
                                    {ANXIETY_ITEMS.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-white/40 font-bold italic text-sm md:text-base group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:scale-150 transition-transform" />
                                            <span className="uppercase tracking-tight whitespace-nowrap">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Separator Line */}
                            <div className="h-40 w-px bg-white/10 hidden md:block" />

                            {/* Sovereign Engine (The Solution) */}
                            <div className="space-y-10">
                                <CommandGrid className="max-w-lg" textColor="text-white/60" />
                                <SovereignCTA showExtraMeta={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-32 text-center bg-zinc-950 border-t border-white/5">
                 <Button asChild variant="link" className="text-emerald-500 font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
