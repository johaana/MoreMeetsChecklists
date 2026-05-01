'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Smartphone,
    Lock,
    ClipboardCheck,
    CheckCircle2,
    History,
    SearchCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR STAFF.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subline: "Even when you aren't there. No more guessing.",
    cta: "Start Your System Now → ₹2,999",
    meta: "ONE-TIME PAYMENT • OWN FOREVER • NO MONTHLY FEES"
};

const BULLETS = [
    { t: "120+ Daily Checklists", i: ClipboardCheck },
    { t: "See work on your phone", i: Smartphone },
    { t: "Staff instructions included", i: History },
    { t: "One-time buy. Own forever.", i: Lock }
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
    <div id={id} className="w-full py-24 border-b border-white/5 space-y-12 bg-black">
        <div className="container px-8 mx-auto">
            <div className="space-y-1 border-l-2 border-primary pl-6">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-xs uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className="w-full h-[85svh] relative overflow-hidden bg-[#050505]">
            {children}
        </div>
    </div>
);

const AnxietyAlert = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn(
        "flex items-center gap-2 px-3 py-1.5 bg-red-600/90 border border-red-500/50 rounded-lg backdrop-blur-3xl shadow-[0_15px_30px_-5px_rgba(220,38,38,0.6)] animate-in fade-in zoom-in duration-1000", 
        className
    )} style={{ animationDelay: delay }}>
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-widest italic">{text}</span>
    </div>
);

const OneGlanceSpecs = ({ className, dark = true }: { className?: string, dark?: boolean }) => (
    <div className={cn("grid grid-cols-2 gap-x-8 gap-y-4", className)}>
        {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className={cn("w-2 h-2 rounded-full shrink-0 shadow-sm", dark ? "bg-[#FACC15]" : "bg-zinc-900")} />
                <span className={cn("text-[15px] font-black uppercase tracking-[0.1em] italic leading-none whitespace-nowrap", dark ? "text-white/70" : "text-zinc-500")}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const FinalCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-4", className)}>
        <button className="h-16 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-sm md:text-base shadow-[0_15px_40px_-5px_rgba(250,204,21,0.6)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-[10px] md:text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em] pl-1">
            {NARRATIVE.meta}
        </p>
    </div>
);

const OperationalConsole = ({ className }: { className?: string }) => (
    <div className={cn("relative group w-full", className)}>
        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] bg-zinc-950 border border-white/5 relative aspect-[16/10]">
            <BackgroundVideo opacity={0.9} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
            
            {/* ANXIETY TAGS ANCHORED TO VISUAL TRIGGERS */}
            <AnxietyAlert text="Always following up?" className="absolute top-[12%] left-[8%]" delay="0.2s" />
            <AnxietyAlert text="Tasks forgotten?" className="absolute top-[35%] right-[10%]" delay="0.4s" />
            <AnxietyAlert text="Staff confused?" className="absolute bottom-[25%] left-[12%]" delay="0.6s" />
            <AnxietyAlert text="Memory gaps?" className="absolute bottom-[15%] right-[15%]" delay="0.8s" />
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-primary/5">
                    LAYMAN ONE-GLANCE LAB V37.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Simple <span className="text-primary">&</span> Direct.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Zero tech jargon. Anxiety tags are anchored to visual triggers. Spacing is locked for absolute one-glance capture.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SURGICAL STRIKE --- */}
            <LabSection id="opt-1" title="01. The Surgical Strike" description="Immediate problem/solution alignment. Dense, layman-friendly narrative.">
                <div className="relative h-full flex items-center px-6 md:px-24">
                    <BackgroundVideo opacity={0.15} grayscale />
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-24 items-center w-full max-w-7xl relative z-10 mx-auto">
                        <div className="space-y-8 md:space-y-12">
                             <div className="space-y-4">
                                <h1 className="font-headline font-black text-[38px] md:text-[72px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-base md:text-xl font-bold text-zinc-400 italic leading-tight max-w-md">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <div className="bg-white/[0.03] border-y border-white/5 py-8 md:py-10">
                                <OneGlanceSpecs className="max-w-md" />
                             </div>

                             <FinalCTA />
                        </div>
                        <OperationalConsole className="hidden lg:block" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE TECHNICAL COMMAND --- */}
            <LabSection id="opt-2" title="02. The Technical Command" description="A 50/50 division where the video of chaos is the primary problem source.">
                <div className="relative h-full flex items-center px-6 md:px-24">
                     <BackgroundVideo opacity={0.12} />
                     <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-24 items-center w-full relative z-10 mx-auto max-w-7xl">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[44px] md:text-8xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                    STOP <br/> <span style={{ color: YELLOW }}>CHAOS.</span>
                                </h1>
                                <p className="text-lg md:text-2xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    Stop chasing staff. See work getting done daily.
                                </p>
                            </div>
                            
                            <OneGlanceSpecs />

                            <FinalCTA />
                        </div>

                        <OperationalConsole className="hidden lg:block" />
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE SOVEREIGN MONOLITH --- */}
            <LabSection id="opt-3" title="03. The Sovereign Monolith" description="Centered gravity. Anxiety alerts attack the margins of the system.">
                <BackgroundVideo opacity={0.4} grayscale />
                <div className="absolute inset-0 bg-black/60" />
                
                {/* FLOATING ANXIETY ALERTS */}
                <AnxietyAlert text="Always following up?" className="absolute top-[20%] right-[10%] z-20 scale-125" delay="0.1s" />
                <AnxietyAlert text="Tasks forgotten?" className="absolute top-[40%] left-[5%] z-20 scale-125" delay="0.3s" />
                <AnxietyAlert text="Memory gaps?" className="absolute bottom-[20%] right-[15%] z-20 scale-125" delay="0.5s" />

                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 shadow-[0_0_120px_-20px_rgba(250,204,21,0.2)] text-center space-y-12 border-t-white/20">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-8 py-2 uppercase font-black tracking-[0.6em] text-[10px]">RESTAURANT & HOTEL ENGINE</Badge>
                            <h1 className="text-[44px] md:text-[96px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-zinc-400 font-bold italic leading-tight max-w-lg mx-auto">
                                Run your business daily without having to chase people.
                            </p>
                        </div>

                        <div className="flex justify-center py-8 border-y border-white/5">
                            <OneGlanceSpecs className="text-center" />
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <button className="h-20 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 transition-all border-none">
                                DEPLOY SYSTEM NOW
                            </button>
                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.5em]">ONE-TIME PAYMENT • NO MONTHLY FEES</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE DATA ENGINE --- */}
            <LabSection id="opt-4" title="04. The Pure Split" description="The ultimate distinction. Left is 100% relief. Right is 100% frustration.">
                 <div className="h-full flex overflow-hidden">
                    <div className="w-full lg:w-1/2 bg-black h-full flex flex-col justify-center px-8 md:px-24 space-y-12 border-r border-white/5">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-[0.6em] text-[11px] py-1.5 px-6">SOVEREIGN V37.0</Badge>
                                <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter">
                                    STOP <br/> <span style={{ color: YELLOW }}>CHASING.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    See daily work getting done. Even when you're away.
                                </p>
                            </div>
                        </div>
                        
                        <OneGlanceSpecs />

                        <FinalCTA />
                    </div>
                    <div className="hidden lg:flex w-1/2 relative h-full items-center justify-center bg-zinc-950 overflow-hidden">
                        <BackgroundVideo opacity={1} />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
                        
                        {/* ANXIETY CALLOUTS ANCHORED TO THE 'ANGRY BOSS' VISUALS */}
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            <AnxietyAlert text="Constantly following up?" className="scale-150 shadow-2xl" delay="0.2s" />
                            <AnxietyAlert text="Important tasks skipped?" className="scale-150 shadow-2xl" delay="0.4s" />
                            <AnxietyAlert text="Memory gaps?" className="scale-150 shadow-2xl" delay="0.6s" />
                            <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/5 mt-12">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] italic">IDENTIFIED_OPERATIONAL_FAULT</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </LabSection>

            <div className="py-32 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[12px] font-black text-zinc-700 uppercase tracking-[0.8em] italic">SOVEREIGN ONE-GLANCE FRAMEWORK ACTIVE.</p>
                 <Button asChild variant="link" className="mt-10 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
