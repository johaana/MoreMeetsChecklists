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
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE."
};

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

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

const SpecsGrid = ({ color = SOVEREIGN_GREEN }) => (
    <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "LIVE DASHBOARD", i: Activity },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: Smartphone }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
                <item.i className="w-8 h-8" style={{ color }} />
                <span className="text-sm md:text-xl font-black uppercase tracking-[0.25em] italic font-headline text-white/80">{item.t}</span>
            </div>
        ))}
    </div>
);

const HeroCTA = ({ className, accent = SOVEREIGN_GREEN }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-12", className)}>
        <button 
            className="h-20 md:h-24 px-16 rounded-2xl font-black uppercase italic text-lg md:text-2xl transition-all border-none group flex items-center justify-center gap-6 active:scale-95 shadow-[0_0_60px_-10px_rgba(0,0,0,0.6)]"
            style={{ backgroundColor: accent, color: (accent === SOVEREIGN_YELLOW) ? 'black' : 'white' }}
        >
            DEPLOY MASTER ENGINE → ₹2,999 <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
        </button>
        <div className="flex flex-col text-left space-y-2">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em] leading-none text-white/60">ONE-TIME PAYMENT</p>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] leading-none text-white/30">OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-600/90", delay = "0s", pulse = true }: { children: React.ReactNode, icon: any, className: string, color?: string, delay?: string, pulse?: boolean }) => (
    <div className={cn(
        "absolute p-2 md:p-2.5 rounded-lg shadow-2xl backdrop-blur-xl border border-white/5 z-30 flex flex-col gap-1 transition-all hover:scale-105 animate-in fade-in zoom-in duration-1000", 
        color, 
        className
    )} style={{ animationDelay: delay }}>
        <div className="flex items-center gap-2">
             <Icon className="w-3 h-3 text-white" />
             {pulse && (
                <span className="relative flex h-1 w-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1 w-1 bg-white"></span>
                </span>
             )}
        </div>
        <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.1em] leading-tight text-white whitespace-nowrap">{children}</p>
    </div>
);

const LabSection = ({ children, id, title, subtitle, className }: { children: React.ReactNode, id: string, title: string, subtitle: string, className?: string }) => (
    <div id={id} className={cn("w-full py-24 md:py-40 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-8 border-l-4 border-primary">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-base text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[100svh] relative overflow-hidden bg-black shadow-inner">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            
            <div className="container px-8 pt-40 pb-24 mx-auto text-center space-y-10">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[12px] px-12 py-4 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V15.0
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black font-headline italic uppercase tracking-tighter leading-none">The <span className="text-primary">Operational Standard.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-3xl mx-auto text-2xl leading-relaxed">
                    Surgically re-engineered for one-glance authority. Restored full-color immersion, massive typography, and high-stakes Risk Red HUD architecture.
                </p>
            </div>

            {/* --- 1. THE IMMERSIVE COMMAND (YELLOW EDITION) --- */}
            <LabSection id="opt-1" title="1. The Immersive Command (Yellow)" subtitle="Full-screen immersion. Line 2 hardened in Sovereign Yellow. Massive typography.">
                <div className="h-full relative flex items-center px-8 md:px-24">
                    <VideoBackground opacity={0.65} maskGradient="from-black/95 via-black/30 to-black/80" />
                    <div className="relative z-20 space-y-16 w-full">
                         <div className="space-y-4">
                            <h1 className="text-4xl md:text-[8rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-4xl md:text-[8rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                         </div>
                         <div className="flex flex-col lg:flex-row items-end justify-between gap-16 pt-12">
                            <p className="text-2xl md:text-4xl text-white/60 italic font-bold max-w-2xl leading-tight">
                                Even when you’re not there.
                            </p>
                            <div className="space-y-12">
                                <SpecsGrid color={SOVEREIGN_YELLOW} />
                                <HeroCTA accent={SOVEREIGN_YELLOW} />
                            </div>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE GHOST HUD --- */}
            <LabSection id="opt-2" title="2. The Ghost HUD (Red Alerts)" subtitle="Framed color video with smaller, realistic red alerts.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1.1fr,1.3fr] gap-12 md:gap-32 items-center relative z-20 w-full">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h1 className="text-[2.2rem] md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-4">
                                    Even when you’re not there.
                                </p>
                            </div>
                            <SpecsGrid color={SOVEREIGN_GREEN} />
                            <HeroCTA accent={SOVEREIGN_GREEN} />
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

            {/* --- 3. THE MULTI-TONE MONITOR --- */}
            <LabSection id="opt-3" title="3. The Multi-Tone Monitor (Red)" subtitle="High-contrast Yellow Line 2 with small-scale red technical HUD.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.6fr] gap-12 md:gap-32 items-center relative z-20 w-full">
                        <div className="space-y-16">
                             <div className="space-y-6">
                                <h1 className="text-[2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-4">Even when you’re not there.</p>
                            </div>
                            <SpecsGrid color={SOVEREIGN_YELLOW} />
                            <HeroCTA accent={SOVEREIGN_YELLOW} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={Target} color="bg-red-600/90" className="-top-4 left-20">
                                AUDIT EXPOSURE ALERT
                            </Annotation>
                            <Annotation icon={ShieldCheck} color="bg-zinc-800/95" className="bottom-10 -right-8" pulse={false}>
                                SYSTEM_SOVEREIGNTY_V4.4
                            </Annotation>
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border-[10px] border-white/10 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover brightness-90" title="Monitor Red" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE ANXIETY GUARD --- */}
            <LabSection id="opt-5" title="5. The Anxiety Guard (Red Questions)" subtitle="Simple, realistic red-themed anxiety questions surrounding a large video frame.">
                <div className="h-full bg-black flex items-center justify-center relative px-8 md:px-24 overflow-hidden">
                    <div className="grid md:grid-cols-[1fr,1.8fr] gap-12 md:gap-32 items-center relative z-20 w-full">
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
                            <SpecsGrid color={SOVEREIGN_GREEN} />
                            <HeroCTA accent={SOVEREIGN_GREEN} />
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
            <LabSection id="opt-7" title="7. The Pure Split (Amber/Yellow)" subtitle="Pristine institutional standard. Zero labels. Yellow narrative mandate.">
                <div className="h-full relative flex items-stretch">
                    <div className="w-1/2 bg-black flex flex-col justify-center px-12 md:px-32 space-y-20 z-20 border-r border-white/5">
                        <div className="space-y-10">
                            <h1 className="text-3xl md:text-[6rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-3xl md:text-[6rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                            <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-8 border-l-4 border-white/10 pl-10">
                                Even when you’re not there.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <SpecsGrid color={SOVEREIGN_YELLOW} />
                            <HeroCTA accent={SOVEREIGN_YELLOW} />
                        </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
                        <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.4] opacity-90" title="Split Color" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                    </div>
                </div>
            </LabSection>

            <div className="py-40 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[14px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">Sovereign Lab v15.0 Deployment Complete.</p>
                 <Button asChild variant="link" className="mt-12 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
