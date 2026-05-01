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
    AlertTriangle,
    Target,
    Activity,
    ShieldAlert,
    LayoutGrid,
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subline: "Even when you aren't there.",
    support: "Memory is not a system. Serious operations deserve more than improvisation.",
    cta: "Start Your System Now → ₹2,999",
    meta: "ONE-TIME PAYMENT • OWN FOREVER • NO MONTHLY FEES"
};

const TECH_SPECS = [
    { t: "120+ Pre-built Industry SOPs", i: ClipboardCheck },
    { t: "Live Dashboard (See work on phone)", i: Activity },
    { t: "Trainer Notes included", i: History },
    { t: "No SaaS. Own your data.", i: Lock }
];

const ANXIETY_ITEMS = [
    "Always following up?",
    "Tasks forgotten?",
    "Staff confused?",
    "Memory gaps?"
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
        <div className="w-full h-[90svh] relative overflow-hidden bg-[#050505] flex flex-col justify-center">
            {children}
        </div>
    </div>
);

const RiskTag = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn(
        "flex items-center gap-3 px-4 py-2 bg-red-600/90 border border-red-500/50 rounded-xl backdrop-blur-3xl shadow-[0_15px_30px_-5px_rgba(220,38,38,0.4)] animate-in fade-in slide-in-from-right-4 duration-1000", 
        className
    )} style={{ animationDelay: delay }}>
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-[11px] md:text-[13px] font-black text-white uppercase tracking-widest italic leading-none whitespace-nowrap">{text}</span>
    </div>
);

const CommandGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-10 gap-y-5", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/80">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-5", className)}>
        <button className="h-16 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(250,204,21,0.5)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="space-y-1 pl-1">
             <p className="text-[10px] md:text-[11px] text-zinc-500 font-black uppercase tracking-[0.4em]">
                {NARRATIVE.meta}
            </p>
            <p className="text-[9px] text-primary/60 font-black uppercase tracking-[0.3em]">
                SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE
            </p>
        </div>
    </div>
);

// --- ARCHETYPES ---

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30 pb-40">
            
            <div className="container px-8 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V40.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Risk <span className="text-primary">&</span> Resolution.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Layman-friendly storytelling through diagnostic placement. Identified risks lead directly to the Sovereign resolution.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE DIAGNOSTIC SPLIT --- */}
            <LabSection id="opt-1" title="01. The Diagnostic Sidebar" description="Risks stacked as a surgical status bar next to the borderless video evidence.">
                <div className="relative h-full flex items-center px-6 md:px-24 max-w-[1440px] mx-auto">
                    <BackgroundVideo opacity={0.1} grayscale />
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-24 items-center w-full relative z-10">
                        
                        {/* LEFT: RESOLUTION */}
                        <div className="space-y-10">
                             <div className="space-y-4">
                                <h1 className="font-headline font-black text-[40px] md:text-[76px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-[20px] md:text-[28px] font-bold text-zinc-400 italic leading-tight">
                                    {NARRATIVE.subline}
                                </p>
                                <p className="text-sm md:text-base font-medium text-zinc-500 italic max-w-md">
                                    {NARRATIVE.support}
                                </p>
                             </div>
                             
                             <CommandGrid className="max-w-xl" />

                             <SovereignCTA />
                        </div>

                        {/* RIGHT: EVIDENCE & DIAGNOSIS */}
                        <div className="flex items-center gap-6 group">
                            <div className="relative flex-1 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/11] bg-zinc-900">
                                <BackgroundVideo opacity={1} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                            
                            {/* THE DIAGNOSTIC COLUMN */}
                            <div className="flex flex-col gap-4 shrink-0">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <RiskTag key={i} text={item} delay={`${i * 0.15}s`} />
                                ))}
                                <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-red-500/50" />
                                    <p className="text-[8px] font-black text-red-500/40 uppercase tracking-[0.3em] vertical-text transform rotate-180">RISK_DETECTED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE BORDER MARKERS --- */}
            <LabSection id="opt-2" title="02. The Frame Markers" description="Anxiety factors anchored as tactical markers on the border of the operational window.">
                <div className="relative h-full flex items-center px-6 md:px-24">
                     <BackgroundVideo opacity={0.15} />
                     <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-24 items-center w-full relative z-10 max-w-7xl mx-auto">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[44px] md:text-8xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                    STOP <br/> <span style={{ color: YELLOW }}>CHAOS.</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-400 italic font-bold max-w-md leading-tight border-l-4 border-primary pl-8">
                                    {NARRATIVE.line2} <br/> {NARRATIVE.subline}
                                </p>
                            </div>
                            
                            <CommandGrid />

                            <SovereignCTA />
                        </div>

                        {/* VIDEO CONSOLE WITH BORDER MARKERS */}
                        <div className="relative p-12">
                            <div className="absolute top-0 left-12"><RiskTag text={ANXIETY_ITEMS[0]} /></div>
                            <div className="absolute top-1/2 -right-8 -translate-y-1/2"><RiskTag text={ANXIETY_ITEMS[1]} /></div>
                            <div className="absolute -bottom-4 right-12"><RiskTag text={ANXIETY_ITEMS[3]} /></div>
                            <div className="absolute top-1/2 -left-8 -translate-y-1/2"><RiskTag text={ANXIETY_ITEMS[2]} /></div>

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.2)] aspect-[4/3] border border-white/5 bg-zinc-950">
                                <BackgroundVideo opacity={0.9} />
                            </div>
                        </div>
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE RISK TRIAGE --- */}
            <LabSection id="opt-3" title="03. The Risk Triage" description="Centred monolith where identified risks precede the Sovereign resolution.">
                <BackgroundVideo opacity={0.2} grayscale />
                <div className="absolute inset-0 bg-black/60" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full text-center space-y-12">
                        
                        {/* IDENTIFIED RISKS */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {ANXIETY_ITEMS.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 px-6 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 font-black uppercase italic text-[11px] tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                                    <AlertTriangle className="w-3 h-3" /> {item}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-[50px] md:text-[110px] font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-zinc-400 font-bold italic leading-tight max-w-2xl mx-auto">
                                {NARRATIVE.line2} <br/> {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex justify-center py-10 border-y border-white/5">
                            <CommandGrid className="text-center" />
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <SovereignCTA className="items-center" />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE INFRASTRUCTURE FRAME --- */}
            <LabSection id="opt-4" title="04. The Infrastructure Bezel" description="Risks positioned as external alerts to a hardened operational bezel.">
                <div className="relative h-full flex items-center px-6 md:px-24">
                     <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-24 items-center w-full relative z-10 max-w-7xl mx-auto">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-[0.6em] text-[11px] py-1.5 px-6">MASTER ENGINE</Badge>
                                <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span style={{ color: YELLOW }}>SYSTEMS.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-bold max-w-md leading-tight border-l-4 border-primary pl-8">
                                    {NARRATIVE.support}
                                </p>
                            </div>
                            
                            <CommandGrid />

                            <SovereignCTA />
                        </div>

                        <div className="relative group">
                            <div className="bg-[#0A0A0A] border-4 border-white/5 rounded-[3.5rem] p-6 shadow-2xl relative">
                                <div className="relative rounded-[2rem] overflow-hidden aspect-video bg-black">
                                    <BackgroundVideo opacity={0.8} />
                                </div>
                                <div className="mt-4 flex justify-between px-8 text-[8px] font-black text-white/20 uppercase tracking-[0.5em]">
                                    <span>OPERATIONAL_CONTROL_PORTAL</span>
                                    <span>STABLE_SIGNAL</span>
                                </div>
                            </div>
                            
                            {/* FLOATING RISK CALLOUTS */}
                            <div className="absolute top-1/2 -right-12 -translate-y-1/2 space-y-4">
                                <RiskTag text={ANXIETY_ITEMS[0]} />
                                <RiskTag text={ANXIETY_ITEMS[1]} />
                            </div>
                        </div>
                     </div>
                </div>
            </LabSection>

             {/* --- ARCHETYPE 5: THE PURE SPLIT --- */}
             <LabSection id="opt-5" title="05. The Direct Relief" description="High-contrast split. Identified faults on the right, perfect order on the left.">
                 <div className="h-full flex overflow-hidden">
                    <div className="w-full lg:w-1/2 bg-black h-full flex flex-col justify-center px-8 md:px-24 space-y-12 border-r border-white/5 relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-white">
                                    STOP <br/> <span style={{ color: YELLOW }}>CHASING.</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-6">
                                    {NARRATIVE.line2} <br/> {NARRATIVE.subline}
                                </p>
                            </div>
                        </div>
                        
                        <CommandGrid />

                        <SovereignCTA />
                    </div>
                    <div className="hidden lg:flex w-1/2 relative h-full items-center justify-center bg-zinc-950 overflow-hidden">
                        <BackgroundVideo opacity={1} />
                        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none" />
                        
                        {/* THE RISK DIAGNOSIS SIDE */}
                        <div className="relative z-10 flex flex-col items-end gap-12 pr-12 w-full">
                            <RiskTag text={ANXIETY_ITEMS[0]} className="scale-150" />
                            <RiskTag text={ANXIETY_ITEMS[1]} className="scale-150" />
                            <RiskTag text={ANXIETY_ITEMS[3]} className="scale-150" />
                            <div className="p-4 bg-red-600/10 border border-red-500/20 rounded-xl backdrop-blur-md mr-4">
                                <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.5em] italic">IDENTIFIED_OPERATIONAL_FAULT</p>
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
