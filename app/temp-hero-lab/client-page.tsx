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
    ShieldAlert
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

const LabSection = ({ children, title, subtitle, className }: { children: React.ReactNode, title: string, subtitle: string, className?: string }) => (
    <div className={cn("w-full py-32 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-8 mx-auto">
            <div className="space-y-2 pl-6 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-secondary-text italic font-medium">{subtitle}</p>
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
                    SOVEREIGN HERO LAB V5.0
                </Badge>
                <h1 className="text-6xl md:text-[9rem] font-black font-headline italic uppercase tracking-tighter leading-none">Standardized <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                    8 Strategic variations. Standardized narrative. High-gravity industrial visibility.
                </p>
            </div>

            {/* --- 1. THE HARDENED SPLIT (STANDARD) --- */}
            <LabSection title="1. The Hardened Split" subtitle="The baseline authority. Deep contrast, left-aligned command.">
                <div className="flex h-full">
                    <div className="w-[45%] bg-[#0A0F19] h-full flex flex-col justify-center px-20 space-y-10 relative z-20 border-r border-white/5">
                        <div className="space-y-6">
                            <h1 className="text-[3.8rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-primary">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-xl text-zinc-400 italic font-medium border-l-4 border-primary pl-6 leading-tight">
                                {CONTENT.subheadline}
                            </p>
                        </div>
                        <SpecsGrid />
                        <HeroCTA />
                    </div>
                    <div className="flex-1 relative h-full">
                        <VideoBackground opacity={0.6} grayscale={0.4} maskGradient="from-[#0A0F19] via-transparent to-transparent" />
                    </div>
                </div>
            </LabSection>

            {/* --- 2. THE FRUSTRATED BOSS (ANNOTATIONS) --- */}
            <LabSection title="2. The Frustrated Boss" subtitle="Contextual annotations framing the video as a technical solution to human chaos.">
                <div className="h-full bg-zinc-900 flex items-center justify-center relative px-20">
                    <VideoBackground opacity={0.15} grayscale={1} maskGradient="from-black/80 via-black/40 to-black/80" />
                    
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-20 items-center relative z-20 w-full">
                        <div className="space-y-12">
                            <h1 className="text-[4rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-primary">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-2xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            <HeroCTA />
                        </div>
                        
                        <div className="relative group">
                            {/* Annotations */}
                            <div className="absolute -top-10 -left-10 bg-red-500/90 text-white p-4 rounded-xl shadow-2xl backdrop-blur-md border border-red-400 z-30 animate-bounce">
                                <HelpCircle className="w-5 h-5 mb-2" />
                                <p className="text-[10px] font-black uppercase tracking-widest">Follow ups done?</p>
                            </div>
                            <div className="absolute top-1/2 -right-16 bg-red-500/90 text-white p-4 rounded-xl shadow-2xl backdrop-blur-md border border-red-400 z-30">
                                <ShieldAlert className="w-5 h-5 mb-2" />
                                <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Missed steps in <br/> emergency?</p>
                            </div>
                            <div className="absolute -bottom-10 left-1/4 bg-red-500/90 text-white p-4 rounded-xl shadow-2xl backdrop-blur-md border border-red-400 z-30">
                                <UserX className="w-5 h-5 mb-2" />
                                <p className="text-[10px] font-black uppercase tracking-widest">Frequent training <br/> calls?</p>
                            </div>

                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[12px] border-zinc-800 shadow-[0_0_100px_-20px_rgba(46,184,107,0.3)] bg-black relative">
                                <iframe src={VIMEO_URL} frameBorder="0" className="absolute inset-0 h-full w-full object-cover scale-[1.1]" title="Boss Video" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 3. THE AZURE INTELLIGENCE --- */}
            <LabSection title="3. The Azure Intelligence" subtitle="Professional tech-blue palette. High-gravity data aesthetic.">
                <div className="h-full flex">
                    <div className="w-[45%] bg-[#050B15] h-full flex flex-col justify-center px-24 space-y-12 relative z-20 border-r border-[#38bdf8]/10">
                        <div className="space-y-6">
                            <h1 className="text-[4rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-[#38bdf8]">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-xl text-zinc-500 italic font-medium">{CONTENT.subheadline}</p>
                        </div>
                        <SpecsGrid color="#38bdf8" />
                        <HeroCTA accent="#38bdf8" />
                    </div>
                    <div className="flex-1 relative">
                        <VideoBackground opacity={0.5} grayscale={0.2} maskGradient="from-[#050B15] via-transparent to-transparent" />
                    </div>
                </div>
            </LabSection>

            {/* --- 4. THE MINIMALIST IVORY (LIGHT) --- */}
            <LabSection title="4. The Minimalist Ivory" subtitle="Clean, prestigious light theme. High whitespace gravity." className="bg-white">
                <div className="h-full flex bg-[#FDFDFB]">
                    <div className="w-[45%] h-full flex flex-col justify-center px-24 space-y-12 relative z-20 border-r border-zinc-100">
                        <div className="space-y-6">
                            <h1 className="text-[3.8rem] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-[#1A1A1A]">
                                {CONTENT.line1} <br/>
                                <span className="text-primary">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-xl text-zinc-500 italic font-medium border-l-4 border-zinc-200 pl-6 leading-tight">
                                {CONTENT.subheadline}
                            </p>
                        </div>
                        <SpecsGrid color="#1A1A1A" textOpacity="text-zinc-400" />
                        <HeroCTA dark />
                    </div>
                    <div className="flex-1 relative">
                        <VideoBackground opacity={0.8} grayscale={1} maskGradient="from-[#FDFDFB] via-transparent to-transparent" />
                    </div>
                </div>
            </LabSection>

            {/* --- 5. THE RISK SHIELD (RED) --- */}
            <LabSection title="5. The Risk Shield" subtitle="High urgency, red/black palette. Positions product as insurance.">
                <div className="h-full bg-black relative flex items-center justify-center overflow-hidden">
                    <VideoBackground opacity={0.4} grayscale={1} maskGradient="from-black/95 via-black/40 to-black/95" />
                    
                    <div className="relative z-20 container mx-auto text-center space-y-12 px-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-[6.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-red-600">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/50 italic font-bold max-w-3xl mx-auto leading-tight">{CONTENT.subheadline}</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-10">
                            <HeroCTA accent="#DC2626" />
                            <div className="flex gap-12 border-y border-white/5 py-6 px-12 bg-white/[0.02] rounded-full backdrop-blur-sm">
                                {CONTENT.specs.slice(0, 3).map((s, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <AlertCircle className="w-4 h-4 text-red-600" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{s.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 6. THE IMMERSIVE HORIZON --- */}
            <LabSection title="6. The Immersive Horizon" subtitle="Full-bleed cinematic narrative. Text integrated into atmosphere.">
                <div className="h-full relative flex items-center">
                    <VideoBackground opacity={0.6} grayscale={0.5} maskGradient="from-black/95 via-black/30 to-transparent" />
                    
                    <div className="relative z-20 px-24 space-y-12 max-w-5xl">
                         <div className="space-y-6">
                            <h1 className="text-7xl md:text-[8rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                {CONTENT.line1} <br/>
                                <span className="text-primary">{CONTENT.line2}</span>
                            </h1>
                            <p className="text-3xl text-white/60 italic font-bold border-l-8 border-primary pl-8">{CONTENT.subheadline}</p>
                         </div>
                         <HeroCTA className="scale-110 origin-left" />
                    </div>
                </div>
            </LabSection>

            {/* --- 7. THE INDUSTRIAL GRID --- */}
            <LabSection title="7. The Industrial Grid" subtitle="Technical blueprint grid. Focus on 'Engineering' and infrastructure.">
                <div className="h-full bg-[#0A0F19] relative flex items-center justify-center">
                     {/* The Blueprint Grid */}
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <VideoBackground opacity={0.1} grayscale={1} maskGradient="from-transparent via-transparent to-transparent" />
                    
                    <div className="relative z-20 grid md:grid-cols-2 items-center gap-24 px-24 container mx-auto">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.line1} <br/>
                                    <span className="text-primary">{CONTENT.line2}</span>
                                </h1>
                                <p className="text-2xl text-zinc-500 italic font-bold">{CONTENT.subheadline}</p>
                            </div>
                            <SpecsGrid />
                            <HeroCTA />
                        </div>
                        <div className="aspect-square bg-zinc-900/50 border border-white/10 rounded-[3rem] p-1 shadow-2xl relative overflow-hidden">
                             <iframe src={VIMEO_URL} frameBorder="0" className="w-full h-full object-cover scale-[1.2] grayscale saturate-0" />
                             <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                             {/* Technical Callout */}
                             <div className="absolute bottom-10 left-10 bg-black/90 border border-primary/30 p-6 rounded-2xl backdrop-blur-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Operational_Audit_Live</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- 8. THE LEGACY PRESTIGE --- */}
            <LabSection title="8. The Legacy Prestige" subtitle="Serif & Sans mix. Executive gold accents. Prestigious corporate feel.">
                <div className="h-full bg-zinc-100 flex items-center px-32 relative">
                    <VideoBackground opacity={0.3} grayscale={1} maskGradient="from-zinc-100/95 via-zinc-100/40 to-transparent" />
                    
                    <div className="relative z-20 space-y-12 max-w-5xl">
                         <div className="space-y-4">
                            <h1 className="text-8xl font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-zinc-950">
                                {CONTENT.line1}
                            </h1>
                            <h1 className="text-8xl font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-[#C88A4A]">
                                {CONTENT.line2}
                            </h1>
                         </div>
                         <p className="text-4xl text-zinc-600 font-medium italic serif tracking-tight">{CONTENT.subheadline}</p>
                         <div className="pt-8 flex flex-col gap-10">
                            <div className="flex gap-16">
                                {CONTENT.specs.map((s, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <s.i className="w-6 h-6 text-[#C88A4A]" />
                                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400">{s.t}</span>
                                    </div>
                                ))}
                            </div>
                            <HeroCTA accent="#C88A4A" />
                         </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-sm font-bold text-zinc-600 uppercase tracking-[0.4em] italic">Strategic Lab v5.0 Concluded. Choose archetype for production deployment.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
