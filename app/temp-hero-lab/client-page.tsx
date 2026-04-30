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
    UserX,
    ShieldAlert,
    ShieldCheck,
    AlertCircle,
    CheckCircle2,
    Target,
    HelpCircle,
    Clock,
    LayoutGrid,
    GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE."
};

const SOVEREIGN_GREEN = "#1E8E5A";
const SOVEREIGN_YELLOW = "#FACC15";
const RISK_RED = "#DC2626";

const VideoBackground = ({ opacity = 0.6, maskGradient = "from-black/90 via-black/20 to-black/70" }) => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full object-cover scale-[1.3]"
            style={{ 
                opacity: opacity, 
                width: '100vw',
                height: '100vh',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.3)'
            }}
            title="Operations Hero Video"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r", maskGradient)} />
    </div>
);

const SpecsColumn = ({ color = SOVEREIGN_GREEN, size = "text-xl" }) => (
    <div className="flex flex-col gap-5">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "LIVE DASHBOARD", i: Activity },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: GraduationCap }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
                <item.i className="w-6 h-6 shrink-0" style={{ color }} />
                <span className={cn("font-black uppercase tracking-[0.2em] italic font-headline text-white/70 group-hover:text-white transition-colors", size)}>{item.t}</span>
            </div>
        ))}
    </div>
);

const OneGlanceCTA = ({ accent = SOVEREIGN_GREEN }) => (
    <div className="flex flex-col gap-6 w-full max-w-xl">
        <Button 
            className="h-24 px-12 rounded-2xl font-black uppercase italic text-2xl md:text-3xl transition-all border-none group flex items-center justify-center gap-6 active:scale-95 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]"
            style={{ backgroundColor: accent, color: (accent === SOVEREIGN_YELLOW) ? 'black' : 'white' }}
        >
            DEPLOY MASTER ENGINE → ₹2,999 <ArrowRight className="w-10 h-10 transition-transform group-hover:translate-x-3" />
        </Button>
        <div className="flex items-center justify-between px-2">
            <div className="space-y-1">
                <p className="text-sm font-black uppercase tracking-[0.4em] leading-none text-white/60">ONE-TIME PAYMENT</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] leading-none text-white/30 italic">OWN FOREVER • NO SaaS</p>
            </div>
            <div className="flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-white/20" />
                 <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">SOVEREIGN_V11.9</span>
            </div>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-600/90", delay = "0s", pulse = true }: { children: React.ReactNode, icon: any, className: string, color?: string, delay?: string, pulse?: boolean }) => (
    <div className={cn(
        "absolute p-2.5 rounded-lg shadow-2xl backdrop-blur-xl border border-white/5 z-30 flex flex-col gap-1 transition-all hover:scale-110 animate-in fade-in zoom-in duration-1000", 
        color, 
        className
    )} style={{ animationDelay: delay }}>
        <div className="flex items-center gap-2">
             <Icon className="w-3.5 h-3.5 text-white" />
             {pulse && (
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
             )}
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.1em] leading-tight text-white whitespace-nowrap">{children}</p>
    </div>
);

const LabSection = ({ children, id, title, subtitle, className }: { children: React.ReactNode, id: string, title: string, subtitle: string, className?: string }) => (
    <div id={id} className={cn("w-full py-24 md:py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-8 border-l-4 border-primary">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-base text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full min-h-[90svh] relative overflow-hidden bg-black shadow-inner flex flex-col justify-center">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden pb-40">
            
            <div className="container px-8 pt-40 pb-24 mx-auto text-center space-y-10">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[12px] px-12 py-4 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V16.0
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black font-headline italic uppercase tracking-tighter leading-none">One <span className="text-primary">Glance.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-3xl mx-auto text-2xl leading-relaxed">
                    Surgically re-engineered for zero-scrolling authority. Standardized non-wrapping narratives and aggressive conversion scaling.
                </p>
            </div>

            {/* --- 1. THE IMMERSIVE COMMAND (YELLOW) --- */}
            <LabSection id="opt-1" title="1. The Immersive Command (Yellow)" subtitle="Full-screen cinematic color. Typography overlaps the video in two perfect lines.">
                <div className="h-full relative flex items-center px-8 md:px-24 py-20">
                    <VideoBackground opacity={0.6} maskGradient="from-black/95 via-black/30 to-black/80" />
                    <div className="relative z-20 space-y-20 w-full max-w-7xl mx-auto">
                         <div className="space-y-4">
                            <h1 className="text-4xl md:text-[7.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-4xl md:text-[7.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                         </div>
                         <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-20">
                            <div className="space-y-10">
                                <p className="text-2xl md:text-4xl text-white/50 italic font-bold leading-tight max-w-xl">
                                    Stop the daily stress. <br/> Make your business run itself.
                                </p>
                                <SpecsColumn color={SOVEREIGN_YELLOW} size="text-2xl" />
                            </div>
                            <div className="w-full flex justify-end items-end h-full">
                                <OneGlanceCTA accent={SOVEREIGN_YELLOW} />
                            </div>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE GHOST HUD (GREEN) --- */}
            <LabSection id="opt-2" title="2. The Ghost HUD (Green)" subtitle="Framed color video with Risk Red alerting HUD. Tight vertical grouping.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24 py-20">
                    <div className="grid md:grid-cols-[1.1fr,1.3fr] gap-12 md:gap-32 items-center relative z-20 w-full max-w-7xl">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h1 className="text-[2.2rem] md:text-[5.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[5.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                            </div>
                            <SpecsColumn color={SOVEREIGN_GREEN} size="text-xl" />
                            <OneGlanceCTA accent={SOVEREIGN_GREEN} />
                        </div>
                        
                        <div className="relative group">
                            <Annotation icon={ShieldAlert} className="top-10 -left-6 bg-red-600/90" delay="0.5s">
                                UNVERIFIED EXECUTION
                            </Annotation>
                            <Annotation icon={UserX} className="top-1/2 -right-8 bg-red-600/90" delay="1s">
                                TRIBAL LEAK DETECTED
                            </Annotation>
                            <Annotation icon={CheckCircle2} className="bottom-12 -left-4 bg-emerald-600/90" delay="1.5s" pulse={false}>
                                MISSION_PULSE_V11.9
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[3rem] overflow-hidden border-[12px] border-zinc-900 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.15]" title="Ghost Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE MULTI-TONE MONITOR (YELLOW) --- */}
            <LabSection id="opt-3" title="3. The Multi-Tone Monitor (Yellow)" subtitle="Large scale video presence with urgent red technical HUD alerts.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-8 md:px-24 py-20">
                    <div className="grid md:grid-cols-[1fr,1.6fr] gap-12 md:gap-32 items-center relative z-20 w-full max-w-[1400px]">
                        <div className="space-y-16">
                             <div className="space-y-6">
                                <h1 className="text-[2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-4">One system. Zero follow-ups.</p>
                            </div>
                            <SpecsColumn color={SOVEREIGN_YELLOW} size="text-xl" />
                            <OneGlanceCTA accent={SOVEREIGN_YELLOW} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={Target} color="bg-red-600/90" className="-top-4 left-20">
                                AUDIT EXPOSURE ALERT
                            </Annotation>
                            <Annotation icon={ShieldCheck} color="bg-zinc-800/95" className="bottom-10 -right-8" pulse={false}>
                                SYSTEM_SOVEREIGNTY_V4.4
                            </Annotation>
                            <Annotation icon={Clock} color="bg-red-600/90" className="top-1/2 -right-12">
                                MISSED PROTOCOL
                            </Annotation>
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border-[10px] border-white/10 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover" title="Monitor Red" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE ANXIETY GUARD (RED) --- */}
            <LabSection id="opt-5" title="5. The Anxiety Guard (Red Questions)" subtitle="Smaller hero text, larger video. Realistic 'Boss' anxiety pings.">
                <div className="h-full bg-black flex items-center justify-center relative px-8 md:px-24 overflow-hidden py-20">
                    <div className="grid md:grid-cols-[1fr,1.8fr] gap-12 md:gap-32 items-center relative z-20 w-full max-w-[1500px]">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h1 className="text-[1.8rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[1.8rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-600 italic font-bold pt-4">Deploy immediate relief.</p>
                            </div>
                            <SpecsColumn color={SOVEREIGN_GREEN} size="text-xl" />
                            <OneGlanceCTA accent={SOVEREIGN_GREEN} />
                        </div>
                        
                        <div className="relative scale-110">
                            <Annotation icon={HelpCircle} color="bg-red-600/90" className="-top-8 left-10">Follow ups?</Annotation>
                            <Annotation icon={AlertCircle} color="bg-red-600/90" className="top-16 -right-12">Missed steps?</Annotation>
                            <Annotation icon={Smartphone} color="bg-red-600/90" className="bottom-1/4 -right-16">Training calls?</Annotation>
                            <Annotation icon={ShieldAlert} color="bg-red-600/90" className="-bottom-8 left-1/4">Shift handover?</Annotation>
                            <Annotation icon={ShieldAlert} color="bg-red-600/90" className="top-1/2 -left-12">Safety gaps?</Annotation>
                            
                            <div className="aspect-[16/9] rounded-[4rem] overflow-hidden border-[8px] border-white/5 shadow-2xl">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover saturate-[1.1]" title="Anxiety Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 7. THE PURE SPLIT (AMBER) --- */}
            <LabSection id="opt-7" title="7. The Pure Split (Amber)" subtitle="Hard 50/50 division. Narrative command on left; live mission on right.">
                <div className="h-full relative flex items-stretch">
                    <div className="w-1/2 bg-black flex flex-col justify-center px-12 md:px-24 space-y-20 z-20 border-r border-white/5 py-20">
                        <div className="space-y-10">
                            <h1 className="text-3xl md:text-[6rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-3xl md:text-[6rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                            <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-8 border-l-4 border-white/10 pl-10 max-w-lg leading-tight">
                                Memory is not a system. <br/> Serious operations deserve better.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <SpecsColumn color={SOVEREIGN_YELLOW} size="text-2xl" />
                            <OneGlanceCTA accent={SOVEREIGN_YELLOW} />
                        </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
                        <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.4] opacity-90 saturate-[1.1]" title="Split Color" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                        
                        <Annotation icon={CheckCircle2} color="bg-emerald-600/90" className="top-12 left-12" pulse={false}>
                            SOVEREIGN_ENGINE_LIVE
                        </Annotation>
                        <Annotation icon={ShieldCheck} color="bg-white/10" className="bottom-12 right-12 backdrop-blur-3xl border-white/20" pulse={false}>
                            AUDIT_STATE: COMPLIANT
                        </Annotation>
                    </div>
                </div>
            </LabSection>

            <div className="py-40 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[14px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">Sovereign Lab v16.0 Deployment Complete.</p>
                 <Button asChild variant="link" className="mt-12 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
