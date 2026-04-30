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
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const LabSection = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => (
    <div className="w-full py-20 border-b border-white/5 space-y-12">
        <div className="container px-6 mx-auto">
            <div className="space-y-2 pl-4 border-l-4 border-primary">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-primary-text">{title}</h2>
                <p className="text-sm text-secondary-text italic font-medium">{subtitle}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
            {children}
        </div>
    </div>
);

const DesktopCTA = ({ price = "₹2,999", className }: { price?: string, className?: string }) => (
    <div className={cn("flex flex-col md:flex-row items-center gap-6", className)}>
        <button className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-[0_0_50px_-5px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all border-none group flex items-center justify-center gap-3">
            DEPLOY MASTER ENGINE → {price} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <div className="flex flex-col text-left space-y-0.5 opacity-40">
            <p className="text-[10px] font-black uppercase tracking-widest leading-none">ONE-TIME PAYMENT</p>
            <p className="text-[9px] font-bold uppercase tracking-widest leading-none">OWN FOREVER • NO SaaS</p>
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans">
            
            <div className="container px-6 pt-32 pb-20 mx-auto text-center space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-2 rounded-none bg-primary/5">
                    SOVEREIGN DESIGN LAB V1.0
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">Institutional <br/> <span className="text-primary">Archetypes.</span></h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                    Testing 5 strategic visual directions for the MoreMeets™ Institutional Standard. Each design is engineered for high-gravity professional conversion.
                </p>
            </div>

            {/* --- ARCHETYPE 1: THE SOVEREIGN SPLIT --- */}
            <LabSection 
                title="1. The Sovereign Split" 
                subtitle="High-density 50/50 industrial contrast. Pure black narrative on the left, cinematic action on the right."
            >
                <div className="flex h-full flex-col md:flex-row">
                    <div className="w-full md:w-[45%] bg-black h-full flex flex-col justify-center px-12 md:px-24 space-y-10 relative z-20">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                STOP<br />CHASING.
                            </h1>
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-primary">
                                START<br />SEEING.
                            </h1>
                            <p className="text-xl text-zinc-400 italic font-medium border-l-2 border-primary/20 pl-6 max-w-sm leading-relaxed">
                                Institutional memory is an asset. Anything else is just luck.
                            </p>
                        </div>
                        <DesktopCTA />
                    </div>
                    <div className="flex-1 relative overflow-hidden h-full">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 contrast-125" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
                        
                        {/* HUD Elements */}
                        <div className="absolute top-10 right-10 z-20 flex flex-col items-end gap-1 opacity-20">
                            <span className="text-[8px] font-mono tracking-widest text-white">OS_VERSION_V85.0</span>
                            <div className="w-24 h-px bg-white" />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 2: THE BLUEPRINT HUD --- */}
            <LabSection 
                title="2. The Blueprint HUD" 
                subtitle="Technical focus. High-contrast line art and circular framing. Prestigious and scientific."
            >
                <div className="h-full bg-zinc-100 flex items-center justify-center p-6 md:p-20 relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center relative z-20">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">ENGINEERED FOR SCALE</span>
                                <h1 className="text-6xl md:text-[5.5rem] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-zinc-950">
                                    Systems are <br/> <span className="text-zinc-400">infrastructure.</span>
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {["120+ Pre-built technical protocols", "Live group-wide dashboard", "No software required"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-base font-bold italic text-zinc-500 uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="text-zinc-950" />
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute -inset-10 border border-zinc-200 rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
                            <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 saturate-0" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </div>
                            <div className="absolute top-0 right-0 bg-white p-4 shadow-xl border border-zinc-100 rounded-2xl">
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2">
                                    <Activity className="w-3 h-3" /> SHIFT LIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 3: THE MIDNIGHT CONSOLE --- */}
            <LabSection 
                title="3. The Midnight Console" 
                subtitle="Deep immersive dark mode. Typography 'glows' out of the cinematic industrial loop."
            >
                <div className="h-full relative flex items-center">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.25] saturate-0" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                    
                    <div className="container px-12 md:px-24 mx-auto relative z-20">
                        <div className="max-w-5xl space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-6xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white drop-shadow-2xl">
                                    CAPTURE<br /><span className="text-primary animate-pulse">MEMORY.</span>
                                </h1>
                                <p className="text-2xl md:text-4xl font-bold italic text-white/50 max-w-3xl leading-tight pt-4">
                                    Don't let your best secrets leave when staff resign. Own your standards forever.
                                </p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row items-center gap-12 pt-8">
                                <DesktopCTA />
                                <div className="flex items-center gap-10 opacity-30">
                                    {["ISO 9001", "HACCP", "OSHA"].map(std => (
                                        <span key={std} className="text-[12px] font-black tracking-[0.4em] uppercase">{std}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE HIGH HORIZON --- */}
            <LabSection 
                title="4. The High Horizon" 
                subtitle="Ultra-wide layout with vertical labels. Prestigious enterprise standard."
            >
                <div className="h-full bg-zinc-950 flex flex-col justify-center relative px-12 md:px-32">
                    <div className="absolute inset-0 opacity-20">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale saturate-0" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>

                    <div className="relative z-20 grid grid-cols-[1fr,400px] gap-20 items-center">
                        <div className="space-y-20">
                            <div className="space-y-8">
                                <h1 className="text-8xl md:text-[11rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white">
                                    DEPLOY<br />SYSTEMS.
                                </h1>
                                <div className="h-px w-[300px] bg-primary/40" />
                                <p className="text-2xl text-zinc-400 italic font-medium max-w-xl leading-relaxed">
                                    Memory is not a system. Serious operations deserve more than improvisation.
                                </p>
                            </div>
                            <DesktopCTA />
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] space-y-6 shadow-2xl">
                             <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SELECT VERTICAL</span>
                             <div className="flex flex-col gap-4">
                                {["RESTAURANTS", "HOTELS", "HEALTHCARE", "FRANCHISE"].map((ind) => (
                                    <div key={ind} className="flex items-center justify-between py-4 border-b border-white/5 group hover:border-primary/40 transition-colors">
                                        <span className="text-lg font-black italic uppercase text-white/40 group-hover:text-white transition-colors">{ind}</span>
                                        <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary transition-all group-hover:translate-x-1" />
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                    
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] opacity-10">
                        <span className="text-[10px] font-black tracking-[1em] uppercase text-white">SOVEREIGN_INFRASTRUCTURE_COMMAND</span>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE MINIMALIST MANDATE --- */}
            <LabSection 
                title="5. The Minimalist Mandate" 
                subtitle="Clean authoritative look. Bold desaturated typography over raw industrial grain."
            >
                <div className="h-full bg-white flex flex-col items-center justify-center p-6 text-center space-y-12 relative overflow-hidden">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.04]" />
                    
                    <div className="relative z-10 space-y-10 max-w-5xl">
                         <div className="space-y-4">
                            <h1 className="text-6xl md:text-[9rem] font-black font-headline tracking-tight leading-[0.85] uppercase italic text-zinc-950">
                                STOP <span className="text-zinc-300">CHASING.</span><br />
                                START <span className="text-primary">SEEING.</span>
                            </h1>
                         </div>
                         
                         <p className="text-xl md:text-3xl text-zinc-500 font-bold italic max-w-2xl mx-auto leading-tight">
                            Run your group daily without dependency on memory or key staff presence.
                         </p>

                         <div className="flex justify-center pt-6">
                            <DesktopCTA className="text-zinc-950" />
                         </div>

                         <div className="pt-20 grid grid-cols-4 gap-12 opacity-40">
                             {["RETAIL", "HOSPITALS", "FACTORIES", "SCHOOLS"].map(t => (
                                 <span key={t} className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-400">{t}</span>
                             ))}
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
