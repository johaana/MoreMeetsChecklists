'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Activity,
    Lock,
    ClipboardCheck,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subline: "Without follow-ups. Without confusion. Without depending on memory.",
    support: "Memory is not a system. Serious operations deserve more than improvisation.",
    cta: "Start Using Your System → ₹2,999",
    meta: "One-time payment • Own the engine forever"
};

const BULLETS = [
    { t: "120+ Technical SOPs", i: ClipboardCheck },
    { t: "Daily Execution Logs", i: Activity },
    { t: "Manager Approval Engine", i: CheckCircle2 },
    { t: "No SaaS. Own your data.", i: Lock }
];

const YELLOW = "#FACC15";

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
            style={{ opacity }}
            title="Sovereign Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const LabSection = ({ children, title, description, id }: { children: React.ReactNode, title: string, description: string, id: string }) => (
    <div id={id} className="w-full py-20 border-b border-white/5 space-y-8 bg-black">
        <div className="container px-8 mx-auto">
            <div className="space-y-1 border-l-2 border-primary pl-6">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-xs">{description}</p>
            </div>
        </div>
        <div className="w-full h-[85svh] relative overflow-hidden bg-[#050505]">
            {children}
        </div>
    </div>
);

const RiskFactor = ({ text, className }: { text: string, className?: string }) => (
    <div className={cn("flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full", className)}>
        <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest italic">{text}</span>
    </div>
);

const OneGlanceSpecs = ({ className, dark = true }: { className?: string, dark?: boolean }) => (
    <div className={cn("grid grid-cols-2 gap-x-6 gap-y-2", className)}>
        {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-2 group">
                <div className={cn("w-1 h-1 rounded-full shrink-0", dark ? "bg-[#FACC15]" : "bg-zinc-900")} />
                <span className={cn("text-[13px] font-black uppercase tracking-widest italic leading-none whitespace-nowrap", dark ? "text-white/40" : "text-zinc-500")}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const HighStakesCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-3", className)}>
        <Button className="h-14 px-10 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-sm shadow-[0_15px_30px_-5px_rgba(250,204,21,0.4)] hover:bg-white hover:scale-[1.02] transition-all border-none group">
            {NARRATIVE.cta} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.3em] pl-1">{NARRATIVE.meta}</p>
    </div>
);

const CleanConsole = ({ className }: { className?: string }) => (
    <div className={cn("relative group w-full max-w-4xl", className)}>
        <div className="rounded-3xl overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] bg-zinc-900 border border-white/5 relative aspect-video">
            <BackgroundVideo opacity={0.7} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.5em] italic">LIVE_TECHNICAL_RECORDING</span>
            </div>
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN "ONE-GLANCE" LAB V33.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Hardened <span className="text-primary">Control.</span>
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Surgically removed clutter. Anxiety repositioned as a structural signal. Achieving 100% value-capture in a single fixation.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE IMMEDIATE RESOLUTION --- */}
            <LabSection id="opt-1" title="01. The Immediate Resolution" description="Anxiety signals placed as a 'Risk Strip' at the absolute top. Zero-clutter video console.">
                <div className="relative h-full flex items-center px-24">
                    <BackgroundVideo opacity={0.1} grayscale />
                    <div className="grid grid-cols-[1fr,1.1fr] gap-16 items-center w-full max-w-7xl relative z-10 mx-auto">
                        <div className="space-y-6">
                             <div className="flex gap-2">
                                <RiskFactor text="Follow ups?" />
                                <RiskFactor text="Missed steps?" />
                                <RiskFactor text="Memory gaps?" />
                             </div>
                             
                             <div className="space-y-3">
                                <h1 className="font-headline font-black text-[54px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-base font-bold text-zinc-400 italic leading-tight max-w-md">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <div className="bg-white/[0.02] border-y border-white/5 py-4">
                                <OneGlanceSpecs className="max-w-sm" />
                             </div>

                             <HighStakesCTA />
                        </div>
                        <CleanConsole />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE TECHNICAL COMMAND --- */}
            <LabSection id="opt-2" title="02. The Technical Command" description="Anxiety signals integrated into the left narrative column as mission-critical warnings.">
                <div className="relative h-full flex items-center px-24">
                     <BackgroundVideo opacity={0.12} />
                     <div className="grid grid-cols-[1fr,1.2fr] gap-20 items-center w-full relative z-10 mx-auto max-w-7xl">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <RiskFactor text="UNCHECKED_PROTOCOL_DRIFT" className="w-fit" />
                                    <h1 className="text-6xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                        OWN THE <br/> <span style={{ color: YELLOW }}>INFRASTRUCTURE.</span>
                                    </h1>
                                </div>
                                <p className="text-lg text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    {NARRATIVE.support}
                                </p>
                            </div>
                            
                            <OneGlanceSpecs />
                            <HighStakesCTA />
                        </div>

                        <CleanConsole />
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE SOVEREIGN MONOLITH --- */}
            <LabSection id="opt-3" title="03. The Sovereign Monolith" description="Centered high-gravity card. Anxiety pings float alongside the specs grid.">
                <BackgroundVideo opacity={0.4} grayscale />
                <div className="absolute inset-0 bg-black/50" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 shadow-[0_0_120px_-20px_rgba(250,204,21,0.15)] text-center space-y-8 border-t-white/20">
                        <div className="space-y-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-1.5 uppercase font-black tracking-widest text-[9px]">TECHNICAL GOVERNANCE V33.0</Badge>
                            <h1 className="text-5xl md:text-[72px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-base md:text-lg text-zinc-400 font-bold italic leading-tight max-w-lg mx-auto">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6 py-4 border-y border-white/5">
                            <div className="flex gap-4">
                                <RiskFactor text="Daily chaos?" />
                                <RiskFactor text="Missed steps?" />
                            </div>
                            <OneGlanceSpecs />
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Button className="h-16 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-2xl hover:scale-105 transition-all border-none">
                                DEPLOY SYSTEM NOW
                            </Button>
                            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE DATA ENGINE --- */}
            <LabSection id="opt-4" title="04. The Data Engine" description="Monospace heavy. Positioning as a technical asset. Anxiety signals as 'Fault Detected' pings.">
                <div className="absolute inset-0 bg-[#050505] opacity-20 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:32px_32px]" />
                <BackgroundVideo opacity={0.25} />
                
                <div className="relative z-10 h-full container px-24 mx-auto flex flex-col justify-center space-y-10">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-[#FACC15] uppercase tracking-[0.5em] bg-[#FACC15]/10 px-5 py-1.5 border border-[#FACC15]/30">ENCRYPTED_SOVEREIGN_V33.0</span>
                        <div className="flex-1 h-px bg-white/10" />
                        <RiskFactor text="DETECTED: MEMORY_GAP" />
                    </div>
                    
                    <div className="space-y-3 max-w-5xl">
                        <h1 className="text-7xl md:text-[8rem] font-black font-headline leading-[0.75] tracking-tighter uppercase italic text-white">
                            SYSTEMS <br/> <span className="text-zinc-800">OVER LUCK.</span>
                        </h1>
                        <p className="text-xl text-zinc-600 font-black italic uppercase tracking-widest leading-none pt-2">{NARRATIVE.subline}</p>
                    </div>

                    <div className="grid grid-cols-4 gap-4 max-w-6xl">
                        {BULLETS.map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-[9px] text-zinc-500 group hover:border-[#FACC15]/40 transition-all hover:bg-white/[0.05] relative overflow-hidden">
                                <span className="block text-[#FACC15] mb-4 text-[9px] font-black tracking-widest">TECHNICAL_LOG_0{i+1}</span>
                                {item.t.toUpperCase()}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-10 pt-2">
                        <Button className="h-14 px-10 rounded-none bg-[#FACC15] text-black font-black uppercase text-sm tracking-[0.3em] hover:scale-105 transition-all shadow-xl">
                            INITIALIZE_DEPLOYMENT
                        </Button>
                        <div className="space-y-0.5">
                            <span className="text-xl font-black italic text-white leading-none block">₹2,999</span>
                            <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest">ONE-TIME_LICENSE_FEE</span>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE PURE RAZOR --- */}
            <LabSection id="opt-5" title="05. The Pure Razor" description="High-contrast minimalist elite. Narrative focus with anxiety signals as technical footnotes.">
                 <div className="h-full flex overflow-hidden">
                    <div className="w-1/2 bg-black h-full flex flex-col justify-center px-24 space-y-8 border-r border-white/5">
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center">
                                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-[0.5em] text-[9px] py-1 px-4">SOVEREIGN V33.0</Badge>
                                <span className="text-[9px] font-mono text-red-500 uppercase tracking-widest italic animate-pulse">! FAULT_DETECTED: FOLLOW_UPS</span>
                            </div>
                            <h1 className="text-6xl md:text-[68px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter">
                                DEPLOY <br/> <span style={{ color: YELLOW }}>ORDER.</span>
                            </h1>
                            <p className="text-lg text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                {NARRATIVE.support}
                            </p>
                        </div>
                        
                        <div className="space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                             <OneGlanceSpecs />
                        </div>

                        <HighStakesCTA />
                    </div>
                    <div className="w-1/2 relative h-full flex items-center justify-center bg-zinc-950">
                        <BackgroundVideo opacity={0.6} />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
                    </div>
                 </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.6em] italic">One-Glance Technical Framework v33.0 Active.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}

