'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
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

const VideoBackground = ({ opacity = 0.4, grayscale = 0, maskGradient = "from-black/90 via-black/30 to-black/70" }) => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full object-cover scale-[1.3]"
            style={{ 
                opacity: opacity, 
                filter: `grayscale(${grayscale})`,
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

const SpecsGrid = ({ color = SOVEREIGN_GREEN, textOpacity = "text-white/70" }) => (
    <div className="grid grid-cols-2 gap-x-12 gap-y-5">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "LIVE DASHBOARD", i: Activity },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: Smartphone }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
                <item.i className="w-5 h-5" style={{ color }} />
                <span className={cn("text-xs md:text-sm font-black uppercase tracking-[0.2em] italic font-headline", textOpacity)}>{item.t}</span>
            </div>
        ))}
    </div>
);

const HeroCTA = ({ className, accent = SOVEREIGN_GREEN }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-8", className)}>
        <button 
            className="h-16 md:h-20 px-12 rounded-xl font-black uppercase italic text-sm md:text-lg transition-all border-none group flex items-center justify-center gap-4 active:scale-95 shadow-[0_0_50px_-5px_rgba(0,0,0,0.5)]"
            style={{ backgroundColor: accent, color: (accent === SOVEREIGN_YELLOW) ? 'black' : 'white' }}
        >
            DEPLOY MASTER ENGINE → ₹2,999 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
        </button>
        <div className="flex flex-col text-left space-y-1">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] leading-none text-white/60">ONE-TIME PAYMENT</p>
            <p className="text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] leading-none text-white/30">OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-600/90", delay = "0s", pulse = true }: { children: React.ReactNode, icon: any, className: string, color?: string, delay?: string, pulse?: boolean }) => (
    <div className={cn(
        "absolute p-2.5 md:p-3 rounded-lg shadow-[0_15px_40px_-5px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-white/5 z-30 flex flex-col gap-1 md:gap-1.5 transition-all hover:scale-105 animate-in fade-in zoom-in duration-1000", 
        color, 
        className
    )} style={{ animationDelay: delay }}>
        <div className="flex items-center gap-2.5">
             <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
             {pulse && (
                <span className="relative flex h-1 w-1 md:h-1.5 md:w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1 w-1 md:h-1.5 md:w-1.5 bg-white"></span>
                </span>
             )}
        </div>
        <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.1em] leading-tight text-white whitespace-nowrap drop-shadow-md">{children}</p>
    </div>
);

const LabSection = ({ children, id, title, subtitle, className }: { children: React.ReactNode, id: string, title: string, subtitle: string, className?: string }) => (
    <div id={id} className={cn("w-full py-20 md:py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-6 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[95svh] relative overflow-hidden bg-black shadow-2xl">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            
            <div className="container px-8 pt-32 pb-20 mx-auto text-center space-y-8">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-10 py-3 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V15.0
                </Badge>
                <h1 className="text-6xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">The <span className="text-primary">Hardened Standard.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                    Surgically re-engineered for one-glance authority. Restored color videos, red-themed HUD architecture, and aggressive conversion content.
                </p>
            </div>

            {/* --- 1. THE IMMERSIVE COMMAND (YELLOW EDITION) --- */}
            <LabSection id="opt-1" title="1. The Immersive Command (Yellow)" subtitle="Standardized 2-line narrative. Line 2 hardened in Sovereign Yellow. Massive typography.">
                <div className="h-full relative flex items-center px-8 md:px-24">
                    <VideoBackground opacity={0.6} grayscale={0} maskGradient="from-black/90 via-black/20 to-black/70" />
                    <div className="relative z-20 space-y-12 w-full">
                         <div className="space-y-4">
                            <h1 className="text-4xl md:text-[7.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-4xl md:text-[7.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                         </div>
                         <div className="flex flex-col md:flex-row items-end justify-between gap-12 pt-8">
                            <p className="text-xl md:text-3xl text-white/60 italic font-bold max-w-xl leading-tight">
                                Even when you’re not there.
                            </p>
                            <div className="space-y-10">
                                <SpecsGrid color={SOVEREIGN_YELLOW} />
                                <HeroCTA accent={SOVEREIGN_YELLOW} />
                            </div>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE GHOST HUD --- */}
            <LabSection id="opt-2" title="2. The Ghost HUD (Red Alerts)" subtitle="Framed color video haunted by smaller, realistic red alerts.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1.1fr,1.3fr] gap-12 md:gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-[2.2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-lg md:text-2xl text-zinc-500 italic font-bold pt-2">
                                    Even when you’re not there.
                                </p>
                            </div>
                            <SpecsGrid color={SOVEREIGN_GREEN} textOpacity="text-white/60" />
                            <HeroCTA accent={SOVEREIGN_GREEN} />
                        </div>
                        
                        <div className="relative group">
                            <Annotation icon={ShieldAlert} className="-top-4 -left-4 bg-red-600/90" delay="0.5s">
                                UNVERIFIED EXECUTION
                            </Annotation>
                            <Annotation icon={UserX} className="top-1/3 -right-6 bg-red-600/90" delay="1s">
                                TRIBAL KNOWLEDGE LEAK
                            </Annotation>
                            <Annotation icon={CheckCircle2} className="-bottom-6 left-1/4 bg-emerald-600/90" delay="1.5s" pulse={false}>
                                SYSTEM_SOVEREIGNTY_V11.9
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[10px] border-zinc-900 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.15]" title="Ghost Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE MULTI-TONE MONITOR --- */}
            <LabSection id="opt-3" title="3. The Multi-Tone Monitor" subtitle="Sovereign Yellow Line 2 with high-density red technical HUDs.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.6fr] gap-12 md:gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                             <div className="space-y-4">
                                <h1 className="text-[2rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[2rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-lg md:text-2xl text-zinc-500 italic font-bold pt-2">Even when you’re not there.</p>
                            </div>
                            <SpecsGrid color={SOVEREIGN_YELLOW} />
                            <HeroCTA accent={SOVEREIGN_YELLOW} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={Target} color="bg-red-600/90" className="-top-6 left-10">
                                AUDIT EXPOSURE DETECTED
                            </Annotation>
                            <Annotation icon={ShieldCheck} color="bg-zinc-800/95" className="bottom-0 -right-4" pulse={false}>
                                GOVERNANCE_PROTOCOLS_V4.4
                            </Annotation>
                            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border-[8px] border-white/10 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover brightness-75" title="Monitor Red" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE ANXIETY GUARD --- */}
            <LabSection id="opt-5" title="5. The Anxiety Guard" subtitle="Real-world 'Boss' questions surrounding a larger video frame.">
                <div className="h-full bg-black flex items-center justify-center relative px-8 md:px-24 overflow-hidden">
                    <div className="grid md:grid-cols-[1fr,1.8fr] gap-12 md:gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-[1.8rem] md:text-[4rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {NARRATIVE.line1}
                                </h1>
                                <h1 className="text-[1.8rem] md:text-[4rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_GREEN }}>
                                    {NARRATIVE.line2}
                                </h1>
                                <p className="text-lg md:text-2xl text-zinc-600 italic font-bold pt-2">Deploy immediate relief.</p>
                            </div>
                            <SpecsGrid color={SOVEREIGN_GREEN} />
                            <HeroCTA accent={SOVEREIGN_GREEN} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={HelpCircle} color="bg-red-600/90" className="-top-6 left-0">Follow ups?</Annotation>
                            <Annotation icon={AlertCircle} color="bg-red-600/90" className="top-12 -right-8">Missed steps?</Annotation>
                            <Annotation icon={Smartphone} color="bg-red-600/90" className="bottom-1/3 -right-10">Training calls?</Annotation>
                            <Annotation icon={ShieldAlert} color="bg-red-600/90" className="-bottom-6 left-1/3">Shift handover?</Annotation>
                            <Annotation icon={ShieldAlert} color="bg-red-600/90" className="top-1/2 -left-10">Safety gaps?</Annotation>
                            
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border-[6px] border-white/5 shadow-2xl">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover saturate-[1.2]" title="Anxiety Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 7. THE PURE SPLIT --- */}
            <LabSection id="opt-7" title="7. The Pure Split" description="Pristine institutional standard. Zero annotations. Massive non-wrapping narrative.">
                <div className="h-full relative flex items-stretch">
                    <div className="w-1/2 bg-black flex flex-col justify-center px-12 md:px-24 space-y-16 z-20 border-r border-white/5">
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {NARRATIVE.line1}
                            </h1>
                            <h1 className="text-3xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: SOVEREIGN_YELLOW }}>
                                {NARRATIVE.line2}
                            </h1>
                            <p className="text-lg md:text-2xl text-zinc-500 italic font-bold pt-4">
                                Even when you’re not there.
                            </p>
                        </div>
                        <SpecsGrid color={SOVEREIGN_YELLOW} />
                        <HeroCTA accent={SOVEREIGN_YELLOW} />
                    </div>
                    <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
                        <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.4] opacity-80" title="Split Color" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">Sovereign Lab v15.0 Complete. Selection locked.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
