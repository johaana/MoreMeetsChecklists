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
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';

const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

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

const VideoBackground = ({ opacity = 0.3, grayscale = 1 }) => (
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
    </div>
);

const LabSection = ({ children, title, subtitle, className }: { children: React.ReactNode, title: string, subtitle: string, className?: string }) => (
    <div className={cn("w-full py-24 border-b border-white/5 space-y-12 bg-black", className)}>
        <div className="container px-6 mx-auto">
            <div className="space-y-2 pl-4 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text font-headline">{title}</h2>
                <p className="text-sm text-secondary-text italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-black shadow-2xl">
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
            <p className="text-[10px] font-black uppercase tracking-widest leading-none text-white">ONE-TIME PAYMENT</p>
            <p className="text-[9px] font-bold uppercase tracking-widest leading-none text-white">OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

const SpecsGrid = () => (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {CONTENT.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans overflow-x-hidden">
            <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            
            <div className="container px-6 pt-32 pb-20 mx-auto text-center space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V3.0
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">Visual <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                    Testing 5 high-gravity industrial frameworks. All options use the working Vimeo engine and standardized technical content.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SOVEREIGN SPLIT --- */}
            <LabSection 
                title="1. The Sovereign Split" 
                subtitle="Clean 50/50 division. Hard narrative on the left, cinematic focus on the right."
            >
                <div className="flex h-full flex-col md:flex-row">
                    <div className="w-full md:w-[45%] bg-black h-full flex flex-col justify-center px-12 md:px-24 space-y-12 relative z-20 border-r border-white/5">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-[5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                    {CONTENT.headlineWhite}
                                </h1>
                                <h1 className="text-5xl md:text-[5rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-primary">
                                    {CONTENT.headlineGreen}
                                </h1>
                            </div>
                            <p className="text-xl text-zinc-400 italic font-medium border-l-2 border-primary/20 pl-6 max-w-sm">
                                {CONTENT.subheadline}
                            </p>
                            <p className="text-sm font-bold text-white/20 uppercase tracking-widest italic">{CONTENT.proofLine}</p>
                        </div>
                        <SpecsGrid />
                        <DesktopCTA />
                    </div>
                    <div className="flex-1 relative h-full bg-zinc-900">
                        <VideoBackground opacity={0.6} grayscale={0.5} />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE GLASS COMMAND --- */}
            <LabSection 
                title="2. The Glass Command" 
                subtitle="Full-bleed cinematic immersion with a centered, translucent governance box."
            >
                <div className="h-full relative flex items-center justify-center">
                    <VideoBackground opacity={0.4} grayscale={1} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                    
                    <div className="relative z-20 w-full max-w-5xl px-6">
                        <div className="bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-20 space-y-12 shadow-2xl text-center">
                             <div className="space-y-6">
                                <h1 className="text-4xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {CONTENT.headlineWhite} <br/>
                                    <span className="text-primary">{CONTENT.headlineGreen}</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-zinc-400 italic font-medium">{CONTENT.subheadline}</p>
                             </div>
                             
                             <div className="flex flex-col items-center gap-8">
                                <DesktopCTA />
                                <div className="flex items-center gap-6 opacity-30">
                                    {["ISO 9001", "HACCP", "OSHA", "FSSAI"].map(std => (
                                        <span key={std} className="text-[11px] font-black tracking-[0.4em] uppercase">{std}</span>
                                    ))}
                                </div>
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] italic">{CONTENT.proofLine}</p>
                             </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE HIGH HORIZON --- */}
            <LabSection 
                title="3. The High Horizon" 
                subtitle="Ultra-wide spread. Minimalist vertical accents. Positions the product as a massive global asset."
            >
                <div className="h-full relative flex flex-col justify-center px-12 md:px-32">
                    <VideoBackground opacity={0.2} grayscale={1} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
                    
                    <div className="relative z-20 space-y-16">
                        <div className="space-y-12">
                            <div className="space-y-2">
                                <h1 className="text-6xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white">
                                    STOP CHASING.
                                </h1>
                                <h1 className="text-6xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-primary">
                                    START SEEING.
                                </h1>
                            </div>
                            <div className="flex gap-10 items-center">
                                <div className="w-1.5 h-24 bg-primary/20 rounded-full" />
                                <p className="text-2xl md:text-3xl font-bold italic text-zinc-400 max-w-2xl leading-tight">
                                    {CONTENT.subheadline} <br/> 
                                    <span className="text-white/20 text-lg uppercase not-italic tracking-[0.2em]">{CONTENT.proofLine}</span>
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <DesktopCTA />
                            <div className="flex gap-12">
                                {CONTENT.specs.slice(0,2).map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{item.t.split(' ')[0]}</span>
                                        <span className="text-sm font-bold text-white/30 uppercase tracking-widest italic">{item.t.split(' ').slice(1).join(' ')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE STRATEGIC BLUEPRINT --- */}
            <LabSection 
                title="4. The Strategic Blueprint" 
                subtitle="Light-industrial framing. Focuses on the engineering aspect of operations."
                className="bg-zinc-100"
            >
                <div className="h-full bg-white flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <VideoBackground opacity={0.1} grayscale={1} />
                    
                    <div className="container mx-auto grid md:grid-cols-[1fr,1.2fr] gap-12 items-center relative z-20 px-12">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-[4.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-zinc-950">
                                    {CONTENT.headlineWhite} <br/>
                                    <span className="text-primary">{CONTENT.headlineGreen}</span>
                                </h1>
                                <p className="text-2xl text-zinc-500 font-bold italic">{CONTENT.subheadline}</p>
                            </div>
                            <div className="space-y-4">
                                {CONTENT.specs.map((s, i) => (
                                    <div key={i} className="flex items-center gap-3 text-zinc-400">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-black uppercase tracking-widest">{s.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA />
                        </div>
                        
                        <div className="relative group p-4 bg-zinc-100 rounded-[3rem] border border-zinc-200 shadow-inner">
                            <div className="aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative bg-black">
                                <iframe
                                    src={VIMEO_URL}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    className="absolute inset-0 h-full w-full object-cover scale-[1.1] grayscale contrast-125"
                                    title="Ops Video"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 bg-primary text-black px-6 py-2 rounded-full font-black uppercase italic text-xs tracking-widest shadow-xl">
                                SHIFT_LIVE
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE IMMERSIVE VOID --- */}
            <LabSection 
                title="5. The Immersive Void" 
                subtitle="Deep immersive dark mode. Floating glowing command over a high-density industrial loop."
            >
                <div className="h-full relative flex items-center justify-center text-center">
                    <VideoBackground opacity={0.25} grayscale={1} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                    
                    <div className="relative z-20 space-y-12 max-w-6xl px-6">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-[8rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white">
                                STOP <span className="text-white/10">CHASING.</span><br />
                                <span className="text-primary drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">START SEEING.</span>
                            </h1>
                            <p className="text-xl md:text-3xl font-bold italic text-white/40 max-w-3xl mx-auto leading-tight">
                                {CONTENT.subheadline}
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-10 pt-8">
                            <DesktopCTA />
                            <div className="flex items-center gap-12 opacity-10">
                                {CONTENT.specs.map((item, i) => (
                                    <span key={i} className="text-[9px] font-black tracking-[0.5em] uppercase">{item.t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            <div className="py-24 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-sm font-bold text-zinc-600 uppercase tracking-[0.4em] italic">End of Strategic Lab v3.0. Select archetype for primary implementation.</p>
                 <Button asChild variant="link" className="mt-8 text-primary font-black uppercase tracking-widest text-xs">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
