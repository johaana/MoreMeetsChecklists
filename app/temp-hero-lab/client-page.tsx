'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Check,
    Activity,
    Lock,
    ClipboardCheck,
    Smartphone,
    ShieldCheck,
    Target,
    Zap,
    Cpu,
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
    <div id={id} className="w-full py-20 border-b border-white/5 space-y-12 bg-black">
        <div className="container px-8 mx-auto">
            <div className="space-y-2 border-l-4 border-primary pl-8">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-sm">{description}</p>
            </div>
        </div>
        <div className="w-full h-[85svh] relative overflow-hidden bg-[#050505]">
            {children}
        </div>
    </div>
);

const AnxietyTag = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div 
        className={cn(
            "px-4 py-2 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-2xl border border-red-500/40 flex items-center gap-2.5 animate-in fade-in zoom-in duration-700",
            className
        )}
        style={{ animationDelay: delay }}
    >
        <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
        </span>
        {text}
    </div>
);

const OneGlanceSpecs = ({ className, dark = true }: { className?: string, dark?: boolean }) => (
    <div className={cn("grid grid-cols-2 gap-x-8 gap-y-3", className)}>
        {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className={cn("w-1 h-1 rounded-full shrink-0", dark ? "bg-[#FACC15]" : "bg-zinc-900")} />
                <span className={cn("text-[14px] font-black uppercase tracking-widest italic leading-none whitespace-nowrap", dark ? "text-white/40" : "text-zinc-500")}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const HighStakesCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-3", className)}>
        <Button className="h-14 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-base shadow-[0_15px_35px_-5px_rgba(250,204,21,0.4)] hover:bg-white hover:scale-[1.02] transition-all border-none group">
            {NARRATIVE.cta} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
        </Button>
        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] pl-1">{NARRATIVE.meta}</p>
    </div>
);

const VideoConsole = ({ className, showOverlaySpecs = false }: { className?: string, showOverlaySpecs?: boolean }) => (
    <div className={cn("relative group w-full max-w-4xl", className)}>
        <AnxietyTag text="Follow ups?" className="absolute top-10 right-10 z-20" delay="0.5s" />
        <AnxietyTag text="Missed steps?" className="absolute bottom-16 right-10 z-20" delay="1s" />
        
        <div className="bg-[#111] h-8 w-full rounded-t-2xl flex items-center px-5 gap-1.5 border border-white/10">
            <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-10 py-1 text-[8px] font-black text-white/20 uppercase tracking-[0.4em] italic shadow-inner">
                    MASTER_OPERATIONAL_ENGINE.xlsx
                </div>
            </div>
        </div>

        <div className="rounded-b-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.5)] bg-zinc-900 border border-white/10 border-t-0 relative aspect-video">
            <BackgroundVideo opacity={0.7} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {showOverlaySpecs && (
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <OneGlanceSpecs />
                </div>
            )}

            {!showOverlaySpecs && (
                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">LIVE_TECHNICAL_RECORDING</span>
                </div>
            )}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-32 pb-16 mx-auto text-center space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-none bg-primary/5">
                    SOVEREIGN "ONE-GLANCE" LAB V32.0
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Absolute <span className="text-primary">Control.</span>
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-xl mx-auto text-lg leading-relaxed">
                    Surgically re-engineered for zero vertical drift. Capturing technical authority in a single cognitive fixation.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SURGICAL STRIKE --- */}
            <LabSection id="opt-1" title="01. The Surgical Strike" description="Extreme vertical compression. Technical engine locked directly under narrative. CTA anchored for immediate strike.">
                <div className="relative h-full flex items-center px-24">
                    <BackgroundVideo opacity={0.15} grayscale />
                    <div className="grid grid-cols-[1fr,1.1fr] gap-20 items-center w-full max-w-[1300px] relative z-10 mx-auto">
                        <div className="space-y-6">
                             <div className="space-y-2">
                                <h1 className="font-headline font-black text-[56px] leading-[0.85] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-lg font-bold text-zinc-400 italic leading-snug max-w-md">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <div className="bg-white/[0.03] border-y border-white/5 py-4">
                                <OneGlanceSpecs className="max-w-sm" />
                             </div>

                             <HighStakesCTA className="pt-2" />
                        </div>
                        <VideoConsole />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE INTEGRATED CONSOLE --- */}
            <LabSection id="opt-2" title="02. The Integrated Console" description="Technical points moved INSIDE the video frame. Narrative and proof merge into one action.">
                <div className="relative h-full flex items-center px-24">
                     <BackgroundVideo opacity={0.15} />
                     <div className="grid grid-cols-[1fr,1.2fr] gap-24 items-center w-full relative z-10 mx-auto max-w-7xl">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.6em]">TECHNICAL_SPEC_V32.0</span>
                                <h1 className="text-6xl font-black font-headline leading-[0.82] tracking-tighter uppercase italic text-white">
                                    OWN THE <br/> <span style={{ color: YELLOW }}>INFRASTRUCTURE.</span>
                                </h1>
                                <p className="text-xl text-zinc-400 italic font-bold max-w-sm leading-relaxed border-l-4 border-primary pl-8">
                                    {NARRATIVE.support}
                                </p>
                            </div>
                            <HighStakesCTA />
                        </div>

                        <VideoConsole showOverlaySpecs />
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE CENTERED MONOLITH --- */}
            <LabSection id="opt-3" title="03. The Centered Monolith" description="Prestigious centered command card. Ultra-low vertical profile using horizontal technical chips.">
                <BackgroundVideo opacity={0.4} grayscale />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-16 md:p-20 shadow-[0_0_120px_-20px_rgba(250,204,21,0.15)] text-center space-y-10 border-t-white/20 relative">
                        <AnxietyTag text="Daily chaos?" className="absolute -top-4 left-1/4" delay="0.2s" />
                        <AnxietyTag text="Memory gaps?" className="absolute -bottom-4 right-1/4" delay="0.6s" />

                        <div className="space-y-5">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase font-black tracking-widest text-[9px]">TECHNICAL GOVERNANCE V32.0</Badge>
                            <h1 className="text-5xl md:text-[72px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-bold italic leading-tight max-w-lg mx-auto">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex justify-center border-y border-white/5 py-6">
                            <div className="flex gap-10">
                                {BULLETS.map((b, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black uppercase text-white/40 tracking-widest italic">{b.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Button className="h-16 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-2xl hover:scale-105 transition-all border-none">
                                DEPLOY SYSTEM NOW
                            </Button>
                            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.4em]">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE TECHNICAL PULSE --- */}
            <LabSection id="opt-4" title="04. The Infrastructure Pulse" description="Data-first density. Monospace technical accents. Product positioning as mission-critical hardware.">
                <div className="absolute inset-0 bg-[#050505] opacity-20 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:32px_32px]" />
                <BackgroundVideo opacity={0.25} />
                
                <div className="relative z-10 h-full container px-24 mx-auto flex flex-col justify-center space-y-12">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-[#FACC15] uppercase tracking-[0.5em] bg-[#FACC15]/10 px-5 py-1.5 border border-[#FACC15]/30">ENCRYPTED_SOVEREIGN_ENGINE</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    
                    <div className="space-y-4 max-w-5xl">
                        <h1 className="text-7xl md:text-[8.5rem] font-black font-headline leading-[0.75] tracking-tighter uppercase italic text-white">
                            SYSTEMS <br/> <span className="text-zinc-800">OVER LUCK.</span>
                        </h1>
                        <p className="text-2xl text-zinc-500 font-black italic uppercase tracking-widest leading-none pt-2">{NARRATIVE.subline}</p>
                    </div>

                    <div className="grid grid-cols-4 gap-6 max-w-6xl">
                        {BULLETS.map((item, i) => (
                            <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl font-mono text-[10px] text-zinc-400 group hover:border-[#FACC15]/40 transition-all hover:bg-white/[0.05] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10">
                                    <item.i className="w-8 h-8 text-white" />
                                </div>
                                <span className="block text-[#FACC15] mb-4 text-[10px] font-black tracking-widest">TECHNICAL_LOG_0{i+1}</span>
                                {item.t.toUpperCase()}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-12 pt-4">
                        <Button className="h-16 px-12 rounded-none bg-[#FACC15] text-black font-black uppercase text-sm tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
                            INITIALIZE_DEPLOYMENT
                        </Button>
                        <div className="space-y-1">
                            <span className="text-2xl font-black italic text-white leading-none block">₹2,999</span>
                            <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest">ONE-TIME_LICENSE_FEE</span>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE PURE RAZOR --- */}
            <LabSection id="opt-5" title="05. The Pure Razor" description="High-contrast minimalist elite. Narrative focus with a high-density spec-sidebar for speed.">
                 <div className="h-full flex overflow-hidden">
                    <div className="w-1/2 bg-black h-full flex flex-col justify-center px-24 space-y-10 border-r border-white/5">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-[0.5em] text-[10px] py-1.5 px-6">SOVEREIGN V32.0</Badge>
                            <h1 className="text-6xl md:text-[72px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter">
                                DEPLOY <br/> <span style={{ color: YELLOW }}>ORDER.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 italic font-bold max-w-sm leading-relaxed border-l-4 border-primary pl-8">
                                {NARRATIVE.support}
                            </p>
                        </div>
                        
                        <div className="space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                             <OneGlanceSpecs />
                        </div>

                        <HighStakesCTA />
                    </div>
                    <div className="w-1/2 relative h-full flex items-center justify-center bg-zinc-950">
                        <div className="absolute inset-0 z-0">
                            <BackgroundVideo opacity={0.6} />
                        </div>
                        <div className="relative z-10 w-[85%] space-y-12">
                             <AnxietyTag text="Daily chaos?" delay="0.4s" />
                             <AnxietyTag text="Protocol drift?" className="translate-x-12" delay="0.8s" />
                             <AnxietyTag text="Memory gaps?" delay="1.2s" />
                        </div>
                    </div>
                 </div>
            </LabSection>

            <div className="py-32 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[13px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">One-Glance Technical Framework v32.0 Active.</p>
                 <Button asChild variant="link" className="mt-10 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
