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
    Scale,
    ShieldCheck,
    TriangleAlert,
    Fingerprint,
    AlertCircle,
    Zap,
    CheckCircle2,
    Target,
    SearchCheck,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const CONTENT = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subheadline: "Even when you’re not there.",
    price: "₹2,999",
    specs: [
        { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
        { t: "LIVE DASHBOARD", i: Activity },
        { t: "NO SaaS LOCK-IN", i: Lock },
        { t: "TRAINER NOTES INCLUDED", i: Smartphone }
    ]
};

const ELITE_7 = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

// Darker Sovereign Green for the second line
const DARK_GREEN = "#1E8E5A";

const VideoBackground = ({ opacity = 0.3, grayscale = 1, maskGradient = "from-black via-black/60 to-transparent" }) => (
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

const SpecsGrid = ({ color = "#1E8E5A", textOpacity = "text-white/40" }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4" style={{ color }} />
                <span className={cn("text-[9px] font-black uppercase tracking-widest", textOpacity)}>{item.t}</span>
            </div>
        ))}
    </div>
);

const HeroCTA = ({ className, dark = false, accent = "#1E8E5A" }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button 
            className={cn(
                "h-14 px-10 rounded-xl font-black uppercase italic text-xs transition-all border-none group flex items-center justify-center gap-3 active:scale-95 shadow-2xl",
                dark ? "bg-zinc-950 text-white" : "bg-primary text-black"
            )}
            style={!dark ? { backgroundColor: accent, color: 'white' } : {}}
        >
            DEPLOY MASTER ENGINE → {CONTENT.price} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className={cn("text-[9px] font-black uppercase tracking-widest leading-none", dark ? "text-black" : "text-white")}>ONE-TIME PAYMENT</p>
            <p className={cn("text-[8px] font-bold uppercase tracking-widest leading-none", dark ? "text-black/60" : "text-white/40")}>OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-600/90", delay = "0s", pulse = true }: { children: React.ReactNode, icon: any, className: string, color?: string, delay?: string, pulse?: boolean }) => (
    <div className={cn(
        "absolute p-3 md:p-4 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] backdrop-blur-2xl border border-white/10 z-30 flex flex-col gap-1.5 md:gap-2 transition-all hover:scale-105 animate-in fade-in zoom-in duration-1000", 
        color, 
        className
    )} style={{ animationDelay: delay }}>
        <div className="flex items-center gap-3">
             <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
             {pulse && (
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-white"></span>
                </span>
             )}
        </div>
        <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.1em] leading-tight text-white whitespace-nowrap drop-shadow-md">{children}</p>
        <div className="w-8 md:w-10 h-0.5 bg-white/20 rounded-full mt-0.5 md:mt-1" />
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
        <div className="w-full h-[90svh] relative overflow-hidden bg-black shadow-2xl">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            
            <div className="container px-8 pt-32 pb-20 mx-auto text-center space-y-8">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-10 py-3 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V11.0
                </Badge>
                <h1 className="text-6xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">The <span className="text-primary">Master Selection.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                    Refined archetypes focused on prestigious typography, expanded video presence, and realistic anxiety callouts.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {[1, 2, 3, 5, 7, 8].map(num => (
                        <Button key={num} asChild variant="outline" className="rounded-full font-black uppercase text-[10px] tracking-widest h-10 px-8">
                            <Link href={`#opt-${num}`}>Option {num}</Link>
                        </Button>
                    ))}
                </div>
            </div>

            {/* --- 1. THE IMMERSIVE OVERLAP --- */}
            <LabSection id="opt-1" title="1. The Immersive Overlap" subtitle="Massive two-line typography spanning the width. Reduced scale for prestige.">
                <div className="h-full relative flex items-center px-8 md:px-24">
                    <VideoBackground opacity={0.5} grayscale={0.3} maskGradient="from-black/90 via-black/30 to-black/70" />
                    
                    <div className="relative z-20 space-y-12 w-full">
                         <div className="space-y-4">
                            <h1 className="text-4xl md:text-[4.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {CONTENT.line1}
                            </h1>
                            <h1 className="text-4xl md:text-[4.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                {CONTENT.line2}
                            </h1>
                         </div>
                         <div className="flex flex-col md:flex-row items-end justify-between gap-12 pt-8">
                            <p className="text-xl md:text-2xl text-white/60 italic font-bold max-w-xl leading-tight">
                                {CONTENT.subheadline}
                            </p>
                            <div className="space-y-8">
                                <SpecsGrid color={DARK_GREEN} />
                                <HeroCTA className="scale-110 origin-right" accent={DARK_GREEN} />
                            </div>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE SOVEREIGN GHOST --- */}
            <LabSection id="opt-2" title="2. The Sovereign Ghost" subtitle="The standard frame archetype with realistic risk callouts.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[2.5rem] md:text-[3.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {CONTENT.line1}
                                </h1>
                                <h1 className="text-[2.5rem] md:text-[3.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                    {CONTENT.line2}
                                </h1>
                                <p className="text-lg md:text-xl text-zinc-500 italic font-bold leading-tight">
                                    {CONTENT.subheadline}
                                </p>
                            </div>
                            <SpecsGrid color={DARK_GREEN} />
                            <HeroCTA accent={DARK_GREEN} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldAlert} className="-top-12 -left-12 bg-red-600/95" delay="0.5s">
                                UNVERIFIED EXECUTION
                            </Annotation>
                            <Annotation icon={UserX} className="top-1/4 -right-16 bg-red-600/95" delay="1s">
                                TRIBAL KNOWLEDGE LEAK
                            </Annotation>
                            <Annotation icon={Fingerprint} className="-bottom-12 left-1/4 bg-red-600/95" delay="1.5s">
                                FATAL PROTOCOL LAPSE
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[3rem] overflow-hidden border-[12px] border-zinc-800/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.15] saturate-0 brightness-75" title="Ghost Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE EXECUTIVE MONITOR (RED) --- */}
            <LabSection id="opt-3" title="3. The Executive Monitor (Red)" subtitle="Expanded video frame with high-urgency red annotations.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-24 items-center relative z-20 w-full">
                        <div className="space-y-10">
                             <div className="space-y-4">
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {CONTENT.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                    {CONTENT.line2}
                                </h1>
                                <p className="text-xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid color="#FACC15" textOpacity="text-white/20" />
                            <HeroCTA accent="#FACC15" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={TriangleAlert} color="bg-red-600/90" className="-top-12 left-10">
                                AUDIT EXPOSURE DETECTED
                            </Annotation>
                            <Annotation icon={Scale} color="bg-red-600/90" className="bottom-0 -right-12">
                                COMPLIANCE DRIFT
                            </Annotation>
                            <Annotation icon={AlertCircle} color="bg-red-600/90" className="top-1/3 -right-16">
                                UNMONITORED RISK
                            </Annotation>

                            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border-[10px] border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50" title="Monitor Red" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

             {/* --- 3B. THE EXECUTIVE MONITOR (GREY) --- */}
             <LabSection id="opt-3-grey" title="3B. The Executive Monitor (Grey)" subtitle="Expanded video frame with sophisticated institutional grey annotations.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-24">
                    <div className="grid md:grid-cols-[1fr,1.5fr] gap-24 items-center relative z-20 w-full">
                        <div className="space-y-10">
                             <div className="space-y-4">
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {CONTENT.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                    {CONTENT.line2}
                                </h1>
                                <p className="text-xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid color="#FACC15" textOpacity="text-white/20" />
                            <HeroCTA accent="#FACC15" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldCheck} color="bg-zinc-800/90 border-white/10" className="-top-12 left-10" pulse={false}>
                                SYSTEM_GOVERNANCE_ACTIVE
                            </Annotation>
                            <Annotation icon={Target} color="bg-zinc-800/90 border-white/10" className="bottom-0 -right-12" pulse={false}>
                                AUDIT_READY_FRAMEWORK
                            </Annotation>
                            <Annotation icon={Lock} color="bg-zinc-800/90 border-white/10" className="top-1/3 -right-16" pulse={false}>
                                IP_SOVEREIGNTY_SECURED
                            </Annotation>

                            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden border-[10px] border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50" title="Monitor Grey" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE ANXIETY GUARD --- */}
            <LabSection id="opt-5" title="5. The Anxiety Guard" subtitle="Bigger video, smaller text, high-density cluster of Boss Anxiety questions.">
                <div className="h-full bg-black flex items-center justify-center relative px-8 md:px-24 overflow-hidden">
                    <div className="absolute -inset-20 bg-red-600/5 blur-[120px] rounded-full" />
                    
                    <div className="grid md:grid-cols-[1fr,1.6fr] gap-12 md:gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {CONTENT.line1}
                                </h1>
                                <h1 className="text-[2.2rem] md:text-[3.2rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                    {CONTENT.line2}
                                </h1>
                                <p className="text-xl text-zinc-600 italic font-bold">Deploy immediate relief.</p>
                            </div>
                            <SpecsGrid color={DARK_GREEN} />
                            <HeroCTA accent={DARK_GREEN} />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={TriangleAlert} color="bg-red-600/95" className="-top-8 left-10">Follow ups?</Annotation>
                            <Annotation icon={AlertCircle} color="bg-red-700/95" className="top-1/4 -right-12">Missed steps?</Annotation>
                            <Annotation icon={Smartphone} color="bg-red-800/95" className="bottom-1/4 -right-16">Training calls?</Annotation>
                            <Annotation icon={UserX} color="bg-red-600/95" className="bottom-0 left-1/2">Standard kept?</Annotation>
                            <Annotation icon={ShieldAlert} color="bg-red-700/95" className="top-10 -right-4">Shift handover?</Annotation>
                            
                            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border-[10px] border-red-600/20 shadow-[0_0_120px_-20px_rgba(220,38,38,0.3)]">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover grayscale saturate-200" title="Anxiety Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 7. THE CLEAN SLATE --- */}
            <LabSection id="opt-7" title="7. The Clean Slate" subtitle="Pure 50/50 division. No glass, no annotations. Narrative in straight lines.">
                <div className="h-full relative flex items-stretch">
                    <div className="w-1/2 bg-black flex flex-col justify-center px-12 md:px-24 space-y-12 z-20 border-r border-white/5">
                        <div className="space-y-10">
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-[3.8rem] font-black font-headline leading-[1] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                    {CONTENT.line1}
                                </h1>
                                <h1 className="text-3xl md:text-[3.8rem] font-black font-headline leading-[1] uppercase italic tracking-tighter whitespace-nowrap" style={{ color: DARK_GREEN }}>
                                    {CONTENT.line2}
                                </h1>
                            </div>
                            <p className="text-xl text-zinc-500 italic font-bold border-l-4 border-primary pl-6 max-w-sm">
                                {CONTENT.subheadline}
                            </p>
                        </div>
                        <SpecsGrid color={DARK_GREEN} />
                        <HeroCTA accent={DARK_GREEN} />
                    </div>
                    
                    <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
                        <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.4] opacity-80" title="Clean Slate Video" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20" />
                    </div>
                </div>
            </LabSection>

            {/* --- 8. THE SECTOR NAVIGATOR --- */}
            <LabSection id="opt-8" title="8. The Sector Navigator" subtitle="Narrative command with hyperlinked direct entry points to sectors.">
                <div className="h-full relative flex flex-col items-center justify-center text-center px-8 md:px-24">
                     <VideoBackground opacity={0.4} grayscale={1} maskGradient="from-black via-black/80 to-black" />
                     
                     <div className="relative z-20 space-y-12 max-w-6xl w-full">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-7xl font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1}
                            </h1>
                            <h1 className="text-4xl md:text-7xl font-black font-headline leading-[0.9] uppercase italic tracking-tighter" style={{ color: DARK_GREEN }}>
                                {CONTENT.line2}
                            </h1>
                            <p className="text-xl md:text-3xl text-zinc-500 italic font-bold pt-4">SEE HOW IT WORKS FOR YOUR BUSINESS</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full">
                            {ELITE_7.map((ind) => (
                                <Link key={ind.id} href={`/packs/${ind.id}`} className="group p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/50 transition-all flex flex-col items-center gap-3">
                                    <ind.icon className="w-6 h-6 md:w-8 md:h-8 text-white/20 group-hover:text-primary group-hover:scale-110 transition-all" />
                                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white leading-tight italic">
                                        {ind.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="pt-8">
                             <HeroCTA accent={DARK_GREEN} className="justify-center" />
                        </div>
                     </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">Sovereign Lab v11.0 Concluded. Select archetype for final integration.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
