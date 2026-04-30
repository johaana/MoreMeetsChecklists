'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    Lock, 
    LayoutGrid, 
    Activity, 
    Target,
    Zap,
    Scale,
    Cpu,
    ClipboardCheck,
    ChevronRight,
    CheckCircle2,
    FileSpreadsheet,
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const CONTENT = {
    headlineWhite: "STOP CHASING YOUR TEAM.",
    headlineGreen: "SEE DAILY WORK GETTING DONE.",
    subheadline: "Even when you’re not there.",
    proofLine: "No follow-ups • No confusion • No memory gaps",
    price: "₹2,999",
    specs: [
        { t: "120+ Pre-built SOPs", i: ClipboardCheck },
        { t: "Live Dashboard", i: Activity },
        { t: "No SaaS Lock-in", i: Lock },
        { t: "Trainer Notes Included", i: Smartphone }
    ]
};

const LabSection = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => (
    <div className="w-full py-20 border-b border-white/5 space-y-12">
        <div className="container px-6 mx-auto">
            <div className="space-y-2 pl-4 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-secondary-text italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
            {children}
        </div>
    </div>
);

const DesktopCTA = ({ className }: { className?: string }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-[0_0_50px_-5px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all border-none group flex items-center justify-center gap-3">
            DEPLOY MASTER ENGINE → {CONTENT.price} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className="text-[10px] font-black uppercase tracking-widest leading-none">ONE-TIME PAYMENT</p>
            <p className="text-[9px] font-bold uppercase tracking-widest leading-none">OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const SpecsGrid = ({ color = "primary" }: { color?: string }) => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className={cn("w-4 h-4", color === 'primary' ? 'text-primary' : 'text-zinc-400')} />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans">
            
            <div className="container px-6 pt-32 pb-20 mx-auto text-center space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN DESIGN LAB V2.0
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">The Right-Aligned <br/> <span className="text-primary">Mandate.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                    Testing 5 visual archetypes with standardized content. Every design uses the heavy-italic command typography and full industrial video integration.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SPLIT CONSOLE --- */}
            <LabSection 
                title="1. The Split Console" 
                subtitle="High-density 50/50 industrial contrast. Left narrative command, right cinematic focus."
            >
                <div className="flex h-full flex-col md:flex-row">
                    <div className="w-full md:w-[45%] bg-black h-full flex flex-col justify-center px-12 md:px-24 space-y-12 relative z-20">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                    {CONTENT.headlineWhite}
                                </h1>
                                <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-primary">
                                    {CONTENT.headlineGreen}
                                </h1>
                            </div>
                            <p className="text-xl text-zinc-400 italic font-medium border-l-2 border-primary/20 pl-6 max-w-sm leading-tight">
                                {CONTENT.subheadline}
                            </p>
                            <p className="text-base font-bold text-white/30 uppercase tracking-widest italic">{CONTENT.proofLine}</p>
                        </div>
                        <SpecsGrid />
                        <DesktopCTA />
                    </div>
                    <div className="flex-1 relative overflow-hidden h-full">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 contrast-125" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE GLASS COMMAND --- */}
            <LabSection 
                title="2. The Glass Command" 
                subtitle="Full-bleed video background with a centered, translucent governance box."
            >
                <div className="h-full relative flex items-center justify-center">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                    
                    <div className="relative z-10 w-full max-w-5xl px-6">
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 space-y-12 shadow-2xl">
                             <div className="space-y-6 text-center">
                                <h1 className="text-4xl md:text-7xl font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.headlineWhite} <br/>
                                    <span className="text-primary">{CONTENT.headlineGreen}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-medium">{CONTENT.subheadline}</p>
                             </div>
                             
                             <div className="flex flex-col items-center gap-10">
                                <div className="flex items-center gap-10 opacity-30">
                                    {["ISO 9001", "HACCP", "OSHA", "NABH"].map(std => (
                                        <span key={std} className="text-[12px] font-black tracking-[0.4em] uppercase">{std}</span>
                                    ))}
                                </div>
                                <DesktopCTA />
                                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest italic">{CONTENT.proofLine}</p>
                             </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE HIGH HORIZON --- */}
            <LabSection 
                title="3. The High Horizon" 
                subtitle="Ultra-wide spread. Positions the product as a massive global infrastructure asset."
            >
                <div className="h-full relative flex flex-col justify-center px-12 md:px-32">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale saturate-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                    
                    <div className="relative z-20 space-y-20">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h1 className="text-7xl md:text-[10rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white">
                                    STOP<br />CHASING.
                                </h1>
                                <h1 className="text-7xl md:text-[10rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-primary">
                                    START SEEING.
                                </h1>
                            </div>
                            <p className="text-2xl md:text-4xl font-bold italic text-zinc-400 max-w-3xl leading-tight border-l-4 border-primary pl-10">
                                {CONTENT.subheadline} <br/> {CONTENT.proofLine}
                            </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <DesktopCTA />
                            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                                {CONTENT.specs.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE BLUEPRINT PORTAL --- */}
            <LabSection 
                title="4. The Blueprint Portal" 
                subtitle="Circular portal framing. Technical, scientific, and prestigious engineering focus."
            >
                <div className="h-full bg-zinc-100 flex items-center justify-center p-6 md:p-20 relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center relative z-20">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-[5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-zinc-950">
                                    {CONTENT.headlineWhite.replace(' TEAM.', '')} <br/>
                                    <span className="text-primary">{CONTENT.headlineGreen}</span>
                                </h1>
                                <p className="text-2xl text-zinc-500 font-bold italic">{CONTENT.subheadline}</p>
                                <p className="text-sm font-black text-zinc-300 uppercase tracking-widest">{CONTENT.proofLine}</p>
                            </div>
                            <SpecsGrid color="zinc" />
                            <DesktopCTA />
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute -inset-10 border border-zinc-200 rounded-full animate-pulse pointer-events-none" />
                            <div className="w-[550px] h-[550px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 saturate-0" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </div>
                            <div className="absolute top-0 right-0 bg-white p-6 shadow-2xl border border-zinc-100 rounded-3xl">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    <span className="text-[12px] font-black text-zinc-950 uppercase tracking-widest">SHIFT LIVE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE IMMERSIVE VOID --- */}
            <LabSection 
                title="5. The Immersive Void" 
                subtitle="Deep immersive dark mode. Desaturated industrial loops with glowing neon-green command text."
            >
                <div className="h-full relative flex items-center justify-center text-center">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.2] grayscale contrast-150" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    
                    <div className="relative z-20 space-y-12 max-w-6xl px-6">
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-[9.5rem] font-black font-headline tracking-tight leading-[0.8] uppercase italic text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                                STOP <span className="text-white/20">CHASING.</span><br />
                                <span className="text-primary drop-shadow-[0_0_80px_rgba(46,184,107,0.4)]">START SEEING.</span>
                            </h1>
                            <p className="text-2xl md:text-4xl font-bold italic text-white/40 max-w-4xl mx-auto leading-tight pt-4">
                                {CONTENT.subheadline}
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-12 pt-8">
                            <DesktopCTA />
                            <div className="flex items-center gap-12 opacity-20">
                                {CONTENT.specs.map((item, i) => (
                                    <span key={i} className="text-[10px] font-black tracking-[0.4em] uppercase">{item.t}</span>
                                ))}
                            </div>
                            <p className="text-[11px] font-black text-white/10 uppercase tracking-[0.5em]">{CONTENT.proofLine}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-20 text-center bg-zinc-900 border-t border-white/5">
                 <p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.3em] italic">End of Prototypes. Select archetype for primary implementation.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
