'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Activity,
    Lock,
    ClipboardCheck,
    CheckCircle2,
    Check
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
    meta: "ONE-TIME PAYMENT • OWN FOREVER • NO SaaS"
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

const DiagnosticRisk = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn(
        "flex items-center gap-2 px-3 py-1.5 bg-red-600/90 border border-red-500/50 rounded-lg backdrop-blur-3xl shadow-[0_10px_30px_-5px_rgba(220,38,38,0.5)] animate-in fade-in zoom-in duration-700", 
        className
    )} style={{ animationDelay: delay }}>
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-black text-white uppercase tracking-widest italic">{text}</span>
    </div>
);

const OneGlanceSpecs = ({ className, dark = true }: { className?: string, dark?: boolean }) => (
    <div className={cn("grid grid-cols-2 gap-x-6 gap-y-3", className)}>
        {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", dark ? "bg-[#FACC15]" : "bg-zinc-900")} />
                <span className={cn("text-[14px] font-black uppercase tracking-widest italic leading-none whitespace-nowrap", dark ? "text-white/60" : "text-zinc-500")}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const HighStakesCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-3", className)}>
        <Button className="h-16 px-10 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-sm shadow-[0_15px_40px_-5px_rgba(250,204,21,0.5)] hover:bg-white hover:scale-[1.02] transition-all border-none group">
            {NARRATIVE.cta} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] pl-1">
            {NARRATIVE.meta}
        </p>
    </div>
);

const PureConsole = ({ className }: { className?: string }) => (
    <div className={cn("relative group w-full max-w-4xl", className)}>
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] bg-zinc-900 border border-white/10 relative aspect-[16/10]">
            <BackgroundVideo opacity={0.8} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
            
            {/* ANXIETY TAGS ANCHORED TO CHAOS - POSITIONED FOR IMPACT */}
            <DiagnosticRisk text="Follow ups?" className="absolute top-[15%] left-[10%]" delay="0.2s" />
            <DiagnosticRisk text="Memory gaps?" className="absolute top-[40%] left-[15%]" delay="0.4s" />
            <DiagnosticRisk text="Missed steps?" className="absolute top-[55%] right-[10%]" delay="0.6s" />
            <DiagnosticRisk text="Training calls?" className="absolute bottom-[15%] right-[15%]" delay="0.8s" />
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-primary/5">
                    DIAGNOSTIC ONE-GLANCE LAB V36.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Problem <span className="text-primary">&</span> Solution.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Anchoring the anxiety to the chaos. The narrative column is for resolution; the video window is for the identified operational faults.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SURGICAL STRIKE --- */}
            <LabSection id="opt-1" title="01. The Surgical Strike" description="Problem anchored to video. Resolution column is surgically focused on the engine.">
                <div className="relative h-full flex items-center px-24">
                    <BackgroundVideo opacity={0.15} grayscale />
                    <div className="grid grid-cols-[1.1fr,1fr] gap-20 items-center w-full max-w-7xl relative z-10 mx-auto">
                        <div className="space-y-10">
                             <div className="space-y-4">
                                <h1 className="font-headline font-black text-[64px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-lg font-bold text-zinc-400 italic leading-tight max-w-md">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <div className="bg-white/[0.03] border-y border-white/5 py-8">
                                <OneGlanceSpecs className="max-w-md" />
                             </div>

                             <HighStakesCTA />
                        </div>
                        <PureConsole />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE TECHNICAL COMMAND --- */}
            <LabSection id="opt-2" title="02. The Technical Command" description="A 50/50 split where the problem (Anxiety) is strictly isolated on the right.">
                <div className="relative h-full flex items-center px-24">
                     <BackgroundVideo opacity={0.12} />
                     <div className="grid grid-cols-[1fr,1.2fr] gap-20 items-center w-full relative z-10 mx-auto max-w-7xl">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-7xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                    CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                                </h1>
                                <p className="text-xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    {NARRATIVE.support}
                                </p>
                            </div>
                            
                            <OneGlanceSpecs />

                            <HighStakesCTA />
                        </div>

                        <PureConsole />
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE SOVEREIGN MONOLITH --- */}
            <LabSection id="opt-3" title="03. The Sovereign Monolith" description="Centered gravity. Anxiety tags float outside the monolith, attacking the margins.">
                <BackgroundVideo opacity={0.4} grayscale />
                <div className="absolute inset-0 bg-black/50" />
                
                {/* FLOATING ANXIETY TAGS */}
                <DiagnosticRisk text="Follow ups?" className="absolute top-[20%] right-[10%] z-20 scale-125" delay="0.1s" />
                <DiagnosticRisk text="Missed steps?" className="absolute top-[40%] left-[5%] z-20 scale-125" delay="0.3s" />
                <DiagnosticRisk text="Daily chaos?" className="absolute bottom-[20%] right-[15%] z-20 scale-125" delay="0.5s" />

                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3.5rem] p-16 md:p-20 shadow-[0_0_120px_-20px_rgba(250,204,21,0.15)] text-center space-y-12 border-t-white/20">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-8 py-2 uppercase font-black tracking-[0.6em] text-[10px]">SOVEREIGN INSTITUTIONAL ENGINE</Badge>
                            <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                SYSTEMS <br/> <span style={{ color: YELLOW }}>OVER LUCK.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 font-bold italic leading-tight max-w-lg mx-auto">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex justify-center py-8 border-y border-white/5">
                            <OneGlanceSpecs />
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Button className="h-20 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 transition-all border-none">
                                DEPLOY MASTER ENGINE
                            </Button>
                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em]">ONE-TIME PAYMENT • OWN FOREVER</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE DATA ENGINE --- */}
            <LabSection id="opt-4" title="04. The Data Engine" description="Anxiety factors used as a 'Diagnostic Header' for the video console.">
                <div className="absolute inset-0 bg-[#050505] opacity-20 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:32px_32px]" />
                <BackgroundVideo opacity={0.3} />
                
                <div className="relative z-10 h-full container px-24 mx-auto grid grid-cols-[1.2fr,1fr] gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-7xl md:text-[8.5rem] font-black font-headline leading-[0.75] tracking-tighter uppercase italic text-white">
                                DEPLOY <br/> <span className="text-zinc-800">ORDER.</span>
                            </h1>
                            <p className="text-2xl text-zinc-600 font-black italic uppercase tracking-widest leading-none pt-4">{NARRATIVE.subline}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {BULLETS.map((item, i) => (
                                <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl font-mono text-[11px] text-zinc-500 group hover:border-[#FACC15]/40 transition-all hover:bg-white/[0.05]">
                                    <span className="block text-[#FACC15] mb-4 text-[10px] font-black tracking-widest">PROTOCOL_LEDGER_0{i+1}</span>
                                    {item.t.toUpperCase()}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-12 pt-4">
                            <Button className="h-16 px-12 rounded-none bg-[#FACC15] text-black font-black uppercase text-base tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
                                INITIALIZE_DEPLOYMENT
                            </Button>
                            <div className="space-y-1">
                                <span className="text-2xl font-black italic text-white leading-none block">₹2,999</span>
                                <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic">OWN FOREVER • NO SaaS</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative space-y-6">
                        <div className="flex gap-2 justify-center">
                            <DiagnosticRisk text="Follow ups?" />
                            <DiagnosticRisk text="Missed steps?" />
                        </div>
                        <PureConsole />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE PURE SPLIT --- */}
            <LabSection id="opt-5" title="05. The Pure Split" description="The ultimate distinction. Left is 100% Solution. Right is 100% Problem (Chaos + Anxiety).">
                 <div className="h-full flex overflow-hidden">
                    <div className="w-1/2 bg-black h-full flex flex-col justify-center px-24 space-y-12 border-r border-white/5">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-[0.6em] text-[11px] py-1.5 px-6">SOVEREIGN V36.0</Badge>
                                <h1 className="text-7xl md:text-[76px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter">
                                    STOP <br/> <span style={{ color: YELLOW }}>CHAOS.</span>
                                </h1>
                                <p className="text-xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    {NARRATIVE.support}
                                </p>
                            </div>
                        </div>
                        
                        <OneGlanceSpecs />

                        <HighStakesCTA />
                    </div>
                    <div className="w-1/2 relative h-full flex items-center justify-center bg-zinc-950 overflow-hidden">
                        <BackgroundVideo opacity={0.9} />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
                        
                        {/* ANXIETY CALLOUTS ANCHORED TO CHAOS - INCREASED SCALE FOR THE SPLIT */}
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <DiagnosticRisk text="Follow ups?" className="scale-150 shadow-2xl" delay="0.2s" />
                            <DiagnosticRisk text="Missed steps?" className="scale-150 shadow-2xl" delay="0.4s" />
                            <DiagnosticRisk text="Training calls?" className="scale-150 shadow-2xl" delay="0.6s" />
                            <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 mt-8">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">SOURCE_PROBLEM_IDENTIFIED</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[12px] font-black text-zinc-700 uppercase tracking-[0.8em] italic">ONE-GLANCE TECHNICAL FRAMEWORK ACTIVE.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
