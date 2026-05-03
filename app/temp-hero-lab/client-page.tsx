'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock,
    ClipboardCheck,
    Activity,
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- PRODUCTION CONTENT CONSTANTS ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "See daily work getting done. Even when you aren't there.",
    cta: "Deploy the system",
    meta: "SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE"
};

const TECH_SPECS = [
    { t: "120+ Pre-built Industry SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
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

const SimpleVideo = ({ opacity = 1, grayscale = false }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className={cn(
                "absolute top-0 left-0 w-full h-full scale-[1.01]",
                grayscale && "saturate-0 brightness-75 contrast-110"
            )}
            style={{ opacity, border: 'none' }}
            title="Framed Video"
        />
    </div>
);

const LabSection = ({ children, title, description, id, fullScreen = false }: { children: React.ReactNode, title: string, description: string, id: string, fullScreen?: boolean }) => (
    <div id={id} className="w-full py-16 md:py-24 border-b border-white/5 space-y-12 bg-black">
        <div className="container px-4 md:px-8 mx-auto">
            <div className="space-y-1 border-l-2 border-primary pl-4 md:pl-6">
                <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-[10px] uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className={cn(
            "w-full relative overflow-hidden bg-[#050505] flex flex-col justify-center",
            fullScreen ? "min-h-screen" : "min-h-[80svh] md:min-h-[90svh]"
        )}>
            {children}
        </div>
    </div>
);

const RiskTag = ({ text, className, delay = "0s", variant = "tactical" }: { text: string, className?: string, delay?: string, variant?: "tactical" | "editorial" }) => (
    <div className={cn(
        variant === "tactical" 
            ? "flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-red-950/40 border border-red-900/30 rounded-lg backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in duration-1000"
            : "flex items-center gap-3 px-4 py-1.5 bg-[#991B1B]/40 border border-red-900/10 rounded-full backdrop-blur-md animate-in fade-in slide-in-from-left-2 duration-1000",
        className
    )} style={{ transitionDelay: delay }}>
        <div className={cn("w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]")} />
        <span className="text-[9px] md:text-[11px] font-black text-red-100 uppercase tracking-widest italic leading-none whitespace-nowrap opacity-70">{text}</span>
    </div>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[14px] md:text-[22px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.4)] whitespace-nowrap">
            {text}
        </span>
    </div>
);

const CommandGrid = ({ className, textColor = "text-white/50" }: { className?: string, textColor?: string }) => (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 md:gap-y-5", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                </div>
                <span className={cn("text-[12px] md:text-[14px] font-bold uppercase tracking-[0.05em] italic leading-tight group-hover:text-[#22C55E] transition-colors", textColor)}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-4 md:space-y-6", className)}>
        <button className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#FACC15] transition-transform group-hover:translate-x-1" />
        </button>
        <div className="space-y-1 pl-1 text-center sm:text-left">
             <p className="text-[8px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                {NARRATIVE.meta}
            </p>
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-emerald-500/30 pb-40">
            
            <div className="container px-6 pt-24 md:pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB
                </Badge>
                <h1 className="text-3xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-tight text-white">
                    Final Candidate <span className="text-emerald-500">Benchmark</span>.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-sm md:text-base leading-tight">
                    Optimized mobile placement with production-locked content logic.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE HINGED DIAGNOSIS --- */}
            <LabSection id="opt-1" title="01. The Hinged Risk Tabs" description="Narrative -> Risks -> Specs -> CTA. Maintaining tactical red badges on mobile.">
                <div className="relative h-full flex flex-col justify-center items-center px-6 md:px-24 max-w-[1440px] mx-auto py-12 md:py-0">
                    <BackgroundVideo opacity={0.1} grayscale />
                    
                    {/* MOBILE VIEW (Strict Sequence) */}
                    <div className="md:hidden flex flex-col space-y-8 w-full relative z-10">
                        <div className="space-y-4">
                            <h1 className="font-headline font-black text-4xl leading-[1.1] tracking-tighter text-white uppercase italic">
                                {NARRATIVE.line1}<br />
                                <span className="text-emerald-500">{NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-base font-bold text-zinc-400 italic leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        {/* RISKS (DNA: Tactical Badges) */}
                        <div className="space-y-3">
                            <p className="text-[9px] font-black text-red-500 uppercase tracking-[0.4em] italic">WHY TEAMS STRUGGLE</p>
                            <div className="flex flex-wrap gap-2">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <RiskTag key={i} text={item} delay={`${i * 0.1}s`} />
                                ))}
                            </div>
                        </div>

                        <CommandGrid textColor="text-white/60" />
                        <SovereignCTA />
                    </div>

                    {/* DESKTOP VIEW (Original Layout) */}
                    <div className="hidden md:grid md:grid-cols-[1.1fr,1fr] gap-24 items-center w-full relative z-10">
                        <div className="space-y-10">
                             <div className="space-y-3">
                                <h1 className="font-headline font-black md:text-[84px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br />
                                    <span className="text-emerald-500">{NARRATIVE.line2}</span>
                                </h1>
                                <p className="md:text-[26px] font-bold text-zinc-400 italic leading-tight">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             <CommandGrid className="max-w-xl" />
                             <SovereignCTA />
                        </div>
                        <div className="relative flex items-center group">
                            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video bg-black ring-1 ring-white/5">
                                <SimpleVideo opacity={1} />
                            </div>
                            <div className="flex flex-col gap-2 relative z-20 -ml-3">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <RiskTag key={i} text={item} delay={`${i * 0.1}s`} className="rounded-l-none border-l-0" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 13: THE TACTICAL SCAN --- */}
            <LabSection id="opt-13" title="13. The Tactical Scan" description="Diagnostic pointers overlay. Narrative -> Risks -> Specs -> CTA sequence.">
                <div className="absolute inset-0 z-0">
                    <BackgroundVideo opacity={0.6} grayscale />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                
                {/* Desktop Absolute Pointers */}
                <div className="hidden md:block">
                    {ANXIETY_ITEMS.map((text, i) => {
                        const positions = [
                            { top: '20%', right: '25%' },
                            { top: '45%', right: '15%' },
                            { bottom: '30%', right: '30%' },
                            { bottom: '15%', right: '10%' }
                        ];
                        return (
                            <div key={i} className="absolute group z-20" style={positions[i]}>
                                <div className="flex items-center gap-4 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className="w-12 h-px bg-red-500/40" />
                                    <RiskTag text={text} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-24 py-16 md:py-0">
                     <div className="max-w-4xl space-y-8 md:space-y-12">
                         <div className="space-y-4">
                            <h1 className="text-4xl md:text-[100px] font-black font-headline leading-[1.1] md:leading-[0.8] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1}<br className="hidden md:block" />
                                <span className="text-emerald-500"> {NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-base md:text-[32px] font-bold italic text-zinc-400 leading-tight">{NARRATIVE.subline}</p>
                         </div>

                         {/* MOBILE RISKS (DNA: Tactical Badges) */}
                         <div className="md:hidden space-y-4 pt-2">
                             <p className="text-[9px] font-black text-red-500 uppercase tracking-[0.5em] italic">WHY TEAMS STRUGGLE</p>
                             <div className="flex flex-col gap-3">
                                {ANXIETY_ITEMS.map((text, i) => (
                                    <RiskTag key={i} text={text} delay={`${i * 0.1}s`} />
                                ))}
                             </div>
                         </div>

                         <div className="space-y-8">
                            <CommandGrid className="max-w-xl" />
                            <SovereignCTA />
                         </div>
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 17: THE WINNING CINEMATIC HUD --- */}
            <LabSection id="opt-17" title="17. The Cinematic HUD (Selection)" description="Production standard. Sequence: See Work -> Why Teams Struggle -> Solution -> CTA.">
                <div className="absolute inset-0 z-0">
                    <BackgroundVideo opacity={0.5} grayscale />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/60 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 lg:px-32 py-16 md:py-0">
                    <div className="max-w-5xl space-y-10 md:space-y-16">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-4xl md:text-[110px] font-black font-headline leading-[1.1] md:leading-[0.82] uppercase italic tracking-tighter drop-shadow-2xl">
                                {NARRATIVE.line1}<br className="hidden md:block" />
                                <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-base md:text-[32px] leading-[1.2] italic font-medium text-zinc-400 max-w-xl">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-start md:items-center">
                            {/* RISKS (DNA: Cinematic Ledger with Pulsar Dots) */}
                            <div className="space-y-6 border-l-2 border-red-500/20 pl-6 md:pl-10">
                                <p className="text-[9px] md:text-[10px] font-black text-red-500/60 uppercase tracking-[0.5em] italic">WHY TEAMS STRUGGLE</p>
                                <div className="flex flex-col gap-3 md:gap-4">
                                    {ANXIETY_ITEMS.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 md:gap-4 text-white/40 font-bold italic text-sm md:text-base group">
                                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:scale-150 transition-transform" />
                                            <span className="uppercase tracking-tight whitespace-nowrap">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-32 md:h-40 w-px bg-white/10 hidden md:block" />

                            <div className="space-y-8 md:space-y-10 w-full sm:w-auto">
                                <CommandGrid className="max-w-lg" textColor="text-white/60" />
                                <SovereignCTA />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 18: THE RIGHT-ALIGNED STRESS STACK --- */}
            <LabSection id="opt-18" title="18. The Right-Aligned Stress Stack" description="DNA: Raw pulsating crimson text. Sequence: Narrative -> Pulsating Risks -> Solution -> CTA.">
                <div className="absolute inset-0 z-0">
                    <BackgroundVideo opacity={0.4} grayscale />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/40 to-transparent pointer-events-none" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 py-16 md:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-20 items-center">
                        <div className="space-y-8 md:space-y-12">
                            <div className="space-y-4 md:space-y-6">
                                <h1 className="text-4xl md:text-[100px] font-black font-headline leading-[1.1] md:leading-[0.82] uppercase italic tracking-tighter text-white">
                                    {NARRATIVE.line1}<br className="hidden md:block" />
                                    <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-base md:text-[30px] leading-[1.2] italic font-medium text-zinc-400 max-w-xl">
                                    {NARRATIVE.subline}
                                </p>
                            </div>

                            {/* MOBILE RISKS (DNA: Raw Pulsating Text) */}
                            <div className="lg:hidden space-y-4 pt-2">
                                <p className="text-[9px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">WHY TEAMS STRUGGLE</p>
                                <div className="flex flex-col gap-4">
                                    {ANXIETY_ITEMS.map((item, i) => (
                                        <PulsatingStressText key={i} text={item} delay={`${i * 0.4}s`} />
                                    ))}
                                </div>
                            </div>

                            <CommandGrid className="max-w-lg" textColor="text-white/40" />
                            <SovereignCTA />
                        </div>

                        {/* DESKTOP RISKS */}
                        <div className="hidden lg:flex flex-col items-end gap-12 pr-4 pt-0">
                             <p className="text-[10px] font-black text-red-500/40 uppercase tracking-[0.6em] italic text-right mb-2">WHY TEAMS STRUGGLE</p>
                             {ANXIETY_ITEMS.map((item, i) => (
                                <PulsatingStressText key={i} text={item} delay={`${i * 0.4}s`} className="text-right" />
                             ))}
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 19: THE SCATTERED STRESS CLUSTER --- */}
            <LabSection id="opt-19" title="19. The Scattered Stress Cluster" description="DNA: Variable pulsars. Narrative -> Pulsating Risks -> Solution -> CTA sequence.">
                <div className="absolute inset-0 z-0">
                    <BackgroundVideo opacity={0.4} grayscale />
                    <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
                </div>

                {/* Desktop Scattered Pointers */}
                <div className="hidden lg:block">
                    {[
                        { t: ANXIETY_ITEMS[0], top: '22%', right: '8%' },
                        { t: ANXIETY_ITEMS[1], top: '42%', right: '15%' },
                        { t: ANXIETY_ITEMS[2], top: '62%', right: '10%' },
                        { t: ANXIETY_ITEMS[3], top: '82%', right: '18%' }
                    ].map((item, i) => (
                        <div key={i} className="absolute z-20" style={{ top: item.top, right: item.right }}>
                            <PulsatingStressText text={item.t} delay={`${i * 0.3}s`} />
                        </div>
                    ))}
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 py-16 md:py-0">
                     <div className="max-w-4xl space-y-8 md:space-y-12">
                         <div className="space-y-4 md:space-y-6">
                            <h1 className="text-4xl md:text-[100px] font-black font-headline leading-[1.1] md:leading-[0.82] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1}<br className="hidden md:block" />
                                <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-base md:text-[30px] leading-[1.2] italic font-medium text-zinc-400 max-w-xl">
                                {NARRATIVE.subline}
                            </p>
                         </div>

                         {/* MOBILE RISKS (DNA: Pulsating Text List) */}
                         <div className="lg:hidden space-y-4 pt-2">
                             <p className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.5em] italic">WHY TEAMS STRUGGLE</p>
                             <div className="flex flex-col gap-6">
                                 {ANXIETY_ITEMS.map((text, i) => (
                                    <PulsatingStressText key={i} text={text} delay={`${i * 0.2}s`} />
                                 ))}
                             </div>
                         </div>

                         <div className="space-y-8 md:space-y-10">
                            <CommandGrid className="max-w-lg" textColor="text-white/40" />
                            <SovereignCTA />
                         </div>
                     </div>
                </div>
            </LabSection>

            <div className="py-24 md:py-32 text-center bg-zinc-950 border-t border-white/5">
                 <Button asChild variant="link" className="text-emerald-500 font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
