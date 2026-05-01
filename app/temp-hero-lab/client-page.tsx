'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Smartphone,
    Lock,
    ClipboardCheck,
    History,
    AlertTriangle,
    Target,
    Activity,
    ShieldAlert,
    LayoutGrid,
    Check,
    SearchCheck,
    Phone,
    X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "See daily work getting done. Even when you aren't there.",
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
    "ALWAYS FOLLOWING UP?",
    "TASKS FORGOTTEN?",
    "STAFF CONFUSED?",
    "MEMORY GAPS?"
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
        "flex items-center gap-2.5 px-3 py-1.5 bg-red-600/90 border border-red-500/50 rounded-lg backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in duration-700", 
        className
    )} style={{ animationDelay: delay }}>
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest italic leading-none whitespace-nowrap">{text}</span>
    </div>
);

const CommandGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-10 gap-y-4", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/70">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-5", className)}>
        <button className="h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(250,204,21,0.5)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="space-y-1 pl-1">
             <p className="text-[9px] md:text-[10px] text-zinc-500 font-black uppercase tracking-[0.4em]">
                {NARRATIVE.meta}
            </p>
            <p className="text-[8px] text-primary/60 font-black uppercase tracking-[0.3em]">
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
                    SOVEREIGN HERO LAB V45.0
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Risk <span className="text-primary">&</span> Resolution.
                </h1>
                <p className="text-zinc-600 italic font-medium max-w-lg mx-auto text-base leading-tight">
                    Refining the technical placement of identified faults. Testing the full cinematic background mandate.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE HINGED DIAGNOSIS --- */}
            <LabSection id="opt-1" title="01. The Hinged Risk Tabs" description="Risks attached to the right border of the video like tactical monitor tabs.">
                <div className="relative h-full flex items-center px-6 md:px-24 max-w-[1440px] mx-auto">
                    <BackgroundVideo opacity={0.1} grayscale />
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-24 items-center w-full relative z-10">
                        
                        <div className="space-y-8">
                             <div className="space-y-3">
                                <h1 className="font-headline font-black text-[40px] md:text-[76px] leading-[0.88] tracking-tighter text-white uppercase italic">
                                    {NARRATIVE.line1}<br/>
                                    <span style={{ color: YELLOW }}>{NARRATIVE.line2}</span>
                                </h1>
                                <p className="text-[18px] md:text-[24px] font-bold text-zinc-400 italic leading-tight">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <CommandGrid className="max-w-xl" />

                             <SovereignCTA />
                        </div>

                        <div className="relative flex items-center group">
                            <div className="relative flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/11] bg-zinc-900">
                                <BackgroundVideo opacity={1} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                            </div>
                            
                            {/* THE HINGED TABS */}
                            <div className="flex flex-col gap-2 -ml-3 relative z-20">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <RiskTag key={i} text={item} delay={`${i * 0.1}s`} className="rounded-l-none border-l-0 shadow-2xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE BORDER PERIMETER --- */}
            <LabSection id="opt-2" title="02. The Perimeter Anchors" description="Anxiety factors anchored as tactical corner markers on the border of the operational window.">
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

                        {/* VIDEO CONSOLE WITH PERIMETER MARKERS */}
                        <div className="relative p-8 md:p-12">
                            <div className="absolute top-0 right-0"><RiskTag text={ANXIETY_ITEMS[0]} /></div>
                            <div className="absolute top-1/2 -right-4 -translate-y-1/2"><RiskTag text={ANXIETY_ITEMS[1]} /></div>
                            <div className="absolute bottom-4 -left-4"><RiskTag text={ANXIETY_ITEMS[3]} /></div>
                            <div className="absolute top-4 -left-8"><RiskTag text={ANXIETY_ITEMS[2]} /></div>

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.2)] aspect-[4/3] border border-white/10 bg-zinc-950">
                                <BackgroundVideo opacity={0.9} />
                            </div>
                        </div>
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE FAULT HEADER --- */}
            <LabSection id="opt-3" title="03. The Fault Discovery Triage" description="Identified risks grouped at the top of the monolith as an 'Error Check'.">
                <BackgroundVideo opacity={0.2} grayscale />
                <div className="absolute inset-0 bg-black/60" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full text-center space-y-10">
                        
                        {/* THE TRIAGE BLOCK */}
                        <div className="space-y-3 bg-red-600/5 border border-red-500/20 p-6 rounded-[2rem] backdrop-blur-xl">
                            <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.5em] italic">IDENTIFIED_OPERATIONAL_FAULT_DETECTION</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {ANXIETY_ITEMS.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-600 text-white font-black uppercase italic text-[10px] tracking-widest">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-[50px] md:text-[100px] font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-bold italic leading-tight max-w-2xl mx-auto">
                                {NARRATIVE.line2} {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex justify-center py-6 border-y border-white/5">
                            <CommandGrid className="text-center" />
                        </div>

                        <SovereignCTA className="items-center" />
                    </div>
                </div>
            </LabSection>

            {/* --- NEW ARCHETYPE 6: FULL-SCREEN OBSIDIAN GLASS --- */}
            <LabSection id="opt-6" title="06. Full Cinematic Centered" description="A centered high-density glass card floating over a blurred industrial loop.">
                <div className="absolute inset-0 z-0">
                     <BackgroundVideo opacity={0.4} />
                     <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-20 text-center space-y-10 shadow-[0_0_120px_-20px_rgba(250,204,21,0.15)] relative">
                        
                        {/* Orbiting Risk Satellites */}
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10"><RiskTag text={ANXIETY_ITEMS[0]} /></div>
                        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10"><RiskTag text={ANXIETY_ITEMS[1]} /></div>

                        <div className="space-y-6">
                            <Badge className="bg-primary text-black w-fit uppercase font-black tracking-widest text-[11px] py-1.5 px-6 rounded-none">INSTITUTIONAL GRADE</Badge>
                            <h1 className="text-[44px] md:text-[92px] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                OWN THE <br/> <span style={{ color: YELLOW }}>ENGINE.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/60 italic font-bold max-w-2xl mx-auto leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto py-8 border-y border-white/10">
                             {TECH_SPECS.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 justify-center">
                                    <item.i className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-[11px] font-black uppercase text-white/40 tracking-widest italic">{item.t}</span>
                                </div>
                             ))}
                        </div>

                        <SovereignCTA className="items-center" />
                    </div>
                </div>
            </LabSection>

            {/* --- NEW ARCHETYPE 7: THE CINEMATIC HORIZON --- */}
            <LabSection id="opt-7" title="07. Cinematic Horizon Split" description="60/40 split with a deep horizontal gradient. Risk factors anchored to action zones.">
                <div className="absolute inset-0 z-0">
                     <BackgroundVideo opacity={0.5} />
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>
                
                <div className="relative z-10 h-full grid lg:grid-cols-[1.2fr,1fr] items-center px-8 md:px-24 max-w-[1440px] mx-auto">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-px bg-primary" />
                                <span className="text-[11px] font-black uppercase text-primary tracking-[0.5em]">OPERATIONAL_SOVEREIGNTY</span>
                            </div>
                            <h1 className="text-6xl md:text-[100px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                START <br/> <span style={{ color: YELLOW }}>SEEING.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-white/50 italic font-bold max-w-md leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="space-y-8 pl-2">
                             <div className="flex flex-col gap-4">
                                {TECH_SPECS.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[13px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{item.t}</span>
                                    </div>
                                ))}
                             </div>
                             <SovereignCTA />
                        </div>
                    </div>

                    {/* SCATTERED RISK PINS IN THE VIDEO ZONE */}
                    <div className="relative h-full hidden lg:block">
                        <div className="absolute top-[20%] right-[10%] scale-110"><RiskTag text={ANXIETY_ITEMS[0]} /></div>
                        <div className="absolute top-[45%] right-[25%] scale-110"><RiskTag text={ANXIETY_ITEMS[1]} /></div>
                        <div className="absolute bottom-[30%] right-[15%] scale-110"><RiskTag text={ANXIETY_ITEMS[2]} /></div>
                    </div>
                </div>
            </LabSection>

            {/* --- NEW ARCHETYPE 8: THE COMMAND HUD --- */}
            <LabSection id="opt-8" title="08. Industrial HUD" description="Full background video with a data-centric overlay. Risks integrated into a status ledger.">
                <div className="absolute inset-0 z-0">
                     <BackgroundVideo opacity={0.6} grayscale />
                     <div className="absolute inset-0 bg-black/40" />
                </div>
                
                <div className="relative z-10 h-full flex overflow-hidden">
                    {/* LEFT PANEL: NARRATIVE */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 space-y-12">
                         <div className="space-y-6">
                            <h1 className="text-6xl md:text-[84px] font-black font-headline leading-[0.88] uppercase italic tracking-tighter text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 italic font-bold max-w-sm leading-tight border-l-4 border-primary pl-8">
                                {NARRATIVE.support}
                            </p>
                         </div>
                         
                         <CommandGrid className="max-w-md" />

                         <SovereignCTA />
                    </div>

                    {/* RIGHT PANEL: RISK LEDGER */}
                    <div className="hidden lg:flex w-1/2 flex-col justify-center items-end pr-24 space-y-4">
                        <div className="bg-black/80 backdrop-blur-xl border border-red-500/20 rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl">
                            <div className="space-y-1 mb-8">
                                <p className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px]">DIAGNOSTIC_RISK_FACTORS</p>
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
                            <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-widest italic">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <span>DETECTED_IN_DAILY_SHIFTS</span>
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
