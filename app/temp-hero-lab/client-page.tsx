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
    CheckCircle2,
    AlertCircle,
    HelpCircle,
    UserX,
    ShieldAlert,
    Clock,
    Zap,
    Scale,
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const CONTENT = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subheadline: "Even when you’re not there.",
    proofLine: "No follow-ups • No confusion • No memory gaps",
    price: "₹2,999",
    specs: [
        { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
        { t: "LIVE DASHBOARD", i: Activity },
        { t: "NO SaaS LOCK-IN", i: Lock },
        { t: "TRAINER NOTES INCLUDED", i: Smartphone }
    ]
};

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

const SpecsGrid = ({ color = "#2EB86B", textOpacity = "text-white/40" }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4" style={{ color }} />
                <span className={cn("text-[9px] font-black uppercase tracking-widest", textOpacity)}>{item.t}</span>
            </div>
        ))}
    </div>
);

const HeroCTA = ({ className, dark = false, accent = "#2EB86B" }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button 
            className={cn(
                "h-14 px-10 rounded-xl font-black uppercase italic text-xs transition-all border-none group flex items-center justify-center gap-3 active:scale-95 shadow-2xl",
                dark ? "bg-zinc-950 text-white" : "bg-primary text-black"
            )}
            style={!dark ? { backgroundColor: accent } : {}}
        >
            DEPLOY MASTER ENGINE → {CONTENT.price} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className={cn("text-[9px] font-black uppercase tracking-widest leading-none", dark ? "text-black" : "text-white")}>ONE-TIME PAYMENT</p>
            <p className={cn("text-[8px] font-bold uppercase tracking-widest leading-none", dark ? "text-black/60" : "text-white/40")}>OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const Annotation = ({ children, icon: Icon, className, color = "bg-red-500/90" }: { children: React.ReactNode, icon: any, className: string, color?: string }) => (
    <div className={cn("absolute p-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 z-30 flex flex-col gap-1.5 transition-all hover:scale-105", color, className)}>
        <Icon className="w-5 h-5 text-white" />
        <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-white">{children}</p>
    </div>
);

const LabSection = ({ children, title, subtitle, className }: { children: React.ReactNode, title: string, subtitle: string, className?: string }) => (
    <div className={cn("w-full py-20 md:py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-6 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-zinc-500 italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[85svh] relative overflow-hidden bg-black shadow-2xl">
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
                    SOVEREIGN HERO LAB V6.0
                </Badge>
                <h1 className="text-6xl md:text-[9rem] font-black font-headline italic uppercase tracking-tighter leading-none">Hero <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                    Full-screen immersion vs. the "Anxious Leadership" annotated frame.
                </p>
            </div>

            {/* --- 1. THE IMMERSIVE COMMAND (NO SPLIT) --- */}
            <LabSection title="1. The Immersive Command" subtitle="Full-screen video, two-line overlapping massive text. No wrapping.">
                <div className="h-full relative flex items-center px-8 md:px-24">
                    <VideoBackground opacity={0.6} grayscale={0.5} maskGradient="from-black/90 via-black/30 to-black/80" />
                    
                    <div className="relative z-20 space-y-12 w-full">
                         <div className="space-y-6">
                            <h1 className="text-5xl md:text-[8rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white whitespace-nowrap">
                                {CONTENT.line1}
                            </h1>
                            <h1 className="text-5xl md:text-[8rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-primary whitespace-nowrap">
                                {CONTENT.line2}
                            </h1>
                            <p className="text-xl md:text-4xl text-white/60 italic font-bold border-l-8 border-primary pl-8 mt-12">{CONTENT.subheadline}</p>
                         </div>
                         <div className="pt-10 space-y-10">
                            <SpecsGrid />
                            <HeroCTA className="scale-110 origin-left" />
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE FRUSTRATED BOSS (ORIGINAL) --- */}
            <LabSection title="2. The Frustrated Boss" subtitle="Narrative + Framed video with red anxiety annotations.">
                <div className="h-full bg-[#0A0F19] flex items-center justify-center relative px-8 md:px-24">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[3.5rem] md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.line1} <br/>
                                    <span className="text-primary">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid />
                            <HeroCTA />
                        </div>
                        
                        <div className="relative">
                            {/* Annotations */}
                            <Annotation icon={HelpCircle} className="-top-12 -left-12 animate-pulse">
                                Follow ups done?
                            </Annotation>
                            <Annotation icon={ShieldAlert} className="top-1/3 -right-20">
                                Missed steps in <br/> emergency?
                            </Annotation>
                            <Annotation icon={UserX} className="-bottom-12 left-1/4">
                                Frequent training <br/> calls?
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[12px] border-zinc-800/50 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.1]" title="Boss Video" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE EXECUTIVE MONITOR (NAVY/GOLD) --- */}
            <LabSection title="3. The Executive Monitor" subtitle="Variation of Boss Frame with Deep Navy and Executive Gold tones.">
                <div className="h-full bg-[#050B15] flex items-center justify-center relative px-24">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                             <div className="space-y-6">
                                <h1 className="text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.line1} <br/>
                                    <span className="text-[#FACC15]">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-2xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid color="#FACC15" />
                            <HeroCTA accent="#FACC15" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={Clock} color="bg-zinc-900/90 border-accent/20" className="-top-12 -left-8">
                                Why is it taking <br/> so long?
                            </Annotation>
                            <Annotation icon={AlertCircle} color="bg-zinc-900/90 border-accent/20" className="bottom-0 -right-16">
                                Did they check <br/> the freezer?
                            </Annotation>

                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[12px] border-[#FACC15]/20 shadow-2xl bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover grayscale brightness-75" title="Exec Video" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 4. THE INDUSTRIAL BLUEPRINT --- */}
            <LabSection title="4. The Industrial Blueprint" subtitle="Variation with blueprint grid, technical line-art, and mono fonts.">
                <div className="h-full bg-[#0A0F19] relative flex items-center justify-center px-24">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    <div className="grid md:grid-cols-[1.2fr,1fr] gap-24 items-center relative z-20 w-full">
                        <div className="relative">
                             <Annotation icon={Zap} color="bg-primary" className="-top-10 left-10">
                                SYSTEM_ACTIVE
                            </Annotation>
                            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 p-1 bg-zinc-900/50 relative">
                                 <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover scale-110 saturate-0" />
                                 <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-[4rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.line1} <br/>
                                    <span className="text-primary">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-xl text-zinc-500 font-mono tracking-tight">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid />
                            <HeroCTA />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE RISK CENTER (RED ALERT) --- */}
            <LabSection title="5. The Risk Center" subtitle="High urgency variation. Uses Risk Red as the primary driver.">
                <div className="h-full bg-black flex items-center justify-center relative px-24 overflow-hidden">
                    <div className="absolute -inset-20 bg-red-600/5 blur-[120px] rounded-full" />
                    
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <h1 className="text-[4.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-red-600">{CONTENT.line2}</span>
                            </h1>
                            <HeroCTA accent="#DC2626" />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={ShieldAlert} color="bg-red-600" className="-top-10 -left-10 animate-pulse">
                                POTENTIAL_LIABILITY
                            </Annotation>
                            <div className="aspect-video rounded-3xl overflow-hidden border-[8px] border-red-600/20 shadow-[0_0_100px_-20px_rgba(220,38,38,0.4)]">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover grayscale saturate-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 6. THE MINIMALIST INSTITUTION (IVORY) --- */}
            <LabSection title="6. The Minimalist Institution" subtitle="Variation of Boss Frame with light prestigious theme." className="bg-[#FDFDFB]">
                <div className="h-full flex items-center justify-center px-24">
                    <div className="grid md:grid-cols-[1fr,1.1fr] gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                             <div className="space-y-6">
                                <h1 className="text-[4rem] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-[#1A1A1A]">
                                    {CONTENT.line1} <br/>
                                    <span className="text-primary">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-2xl text-zinc-400 italic font-medium">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid color="#1A1A1A" textOpacity="text-zinc-400" />
                            <HeroCTA dark />
                        </div>
                        
                        <div className="relative">
                            <Annotation icon={CheckCircle2} color="bg-zinc-100 border-zinc-200 text-zinc-900" className="-top-8 -left-8">
                                <span className="text-zinc-900">VERIFIED_PROTOCOL</span>
                            </Annotation>
                            <div className="aspect-[16/11] rounded-[3rem] overflow-hidden border-[1px] border-zinc-200 shadow-2xl">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover grayscale opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 7. THE DATA TERMINAL (GREEN/MONO) --- */}
            <LabSection title="7. The Data Terminal" subtitle="Variation with high technical density and monospaced accents.">
                <div className="h-full bg-zinc-950 flex items-center justify-center px-24">
                    <div className="grid md:grid-cols-[1.1fr,1fr] gap-20 items-center relative z-20 w-full">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
                            <div className="aspect-square rounded-full border border-primary/20 p-8 flex items-center justify-center">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_-10px_rgba(46,184,107,0.4)]">
                                     <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover scale-150 grayscale" />
                                </div>
                            </div>
                            <Annotation icon={Target} color="bg-primary/90" className="top-10 -right-4">
                                MISSION_PULSE_LIVE
                            </Annotation>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-[4.2rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                    {CONTENT.line1} <br/>
                                    <span className="text-primary">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-lg font-mono text-primary/60 uppercase tracking-widest">{CONTENT.subheadline}</p>
                            </div>
                            <HeroCTA />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 8. THE DIRECTOR'S PRESTIGE (SERIF) --- */}
            <LabSection title="8. The Director's Prestige" subtitle="Variation using prestigious Serif typography and high-contrast B&W visuals.">
                <div className="h-full bg-white flex items-center justify-center px-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-100/50 -skew-x-12 translate-x-20" />
                    
                    <div className="grid md:grid-cols-[1fr,1.1fr] gap-24 items-center relative z-20 w-full">
                        <div className="space-y-12">
                             <div className="space-y-6">
                                <h1 className="text-[4.5rem] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                                    {CONTENT.line1} <br/>
                                    <span className="text-[#C88A4A]">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-3xl text-zinc-600 font-medium italic tracking-tight">{CONTENT.subheadline}</p>
                            </div>
                            <HeroCTA accent="#C88A4A" />
                        </div>
                        
                        <div className="relative">
                            <div className="aspect-video rounded-none border-[1px] border-zinc-200 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                                <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover grayscale saturate-0" />
                            </div>
                            <Annotation icon={ShieldCheck} color="bg-[#C88A4A]" className="-bottom-8 -right-8">
                                INSTITUTIONAL_LEGACY_SECURED
                            </Annotation>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-sm font-bold text-zinc-600 uppercase tracking-[0.4em] italic">Strategic Lab v6.0 Concluded. Choose archetype for production deployment.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
