'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    CheckCircle2,
    Play,
    Activity,
    Lock,
    Zap,
    ClipboardCheck,
    Smartphone,
    Check,
    Monitor,
    ShieldAlert,
    Target,
    Layers,
    Command,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- CONFIGURATION ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subline: "Without follow-ups. Without confusion. Without depending on memory.",
    support: "Memory is not a system. Serious operations deserve more.",
    cta: "Start Using Your System → ₹2,999",
    meta: "One-time payment • Runs on Excel / Google Sheets"
};

const BULLETS = [
    { t: "120+ Pre-built technical protocols", i: ClipboardCheck },
    { t: "Live dashboard for group visibility", i: Activity },
    { t: "No SaaS dependency. Own your data.", i: Lock },
    { t: "Built-in Trainer's Notes for staff", i: Smartphone }
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
                "absolute inset-0 h-full w-full object-cover scale-[1.15]",
                grayscale && "saturate-0 brightness-75 contrast-110"
            )}
            style={{ opacity }}
            title="Sovereign Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const LabSection = ({ children, title, description, id, dark = true }: { children: React.ReactNode, title: string, description: string, id: string, dark?: boolean }) => (
    <div id={id} className={cn("w-full py-24 md:py-32 border-b border-white/5 space-y-12", dark ? "bg-black" : "bg-zinc-100")}>
        <div className="container px-8 mx-auto">
            <div className={cn("space-y-2 border-l-4 pl-8", dark ? "border-primary" : "border-zinc-900")}>
                <h2 className={cn("text-3xl font-black uppercase italic tracking-tighter font-headline", dark ? "text-white" : "text-zinc-900")}>{title}</h2>
                <p className="text-zinc-500 italic font-medium">{description}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-[#0B0F1A]">
            {children}
        </div>
    </div>
);

const Tag = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div 
        className={cn(
            "px-5 py-2 rounded-full bg-red-600/90 text-white text-[11px] font-black uppercase tracking-widest shadow-2xl backdrop-blur-xl border border-red-500/30 flex items-center gap-3 animate-in fade-in zoom-in duration-700",
            className
        )}
        style={{ animationDelay: delay }}
    >
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        {text}
    </div>
);

const SpecsGrid = ({ className, dark = true }: { className?: string, dark?: boolean }) => (
    <div className={cn("grid grid-cols-2 gap-x-8 gap-y-3", className)}>
        {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className={cn("w-1 h-1 rounded-full shrink-0", dark ? "bg-[#FACC15]" : "bg-zinc-900")} />
                <span className={cn("text-[14px] font-bold uppercase tracking-widest italic", dark ? "text-white/60" : "text-zinc-500")}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const DesktopCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-4", className)}>
        <Button className="h-[72px] px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-[0_20px_50px_-10px_rgba(250,204,21,0.4)] hover:bg-white hover:scale-[1.02] transition-all border-none group">
            {NARRATIVE.cta} <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
        </Button>
        <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.3em] pl-2">{NARRATIVE.meta}</p>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-40 pb-20 mx-auto text-center space-y-8">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-3 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V28.0
                </Badge>
                <h1 className="text-6xl md:text-9xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    One <span className="text-primary">Glance.</span>
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-xl">
                    Finalists preserved. 5 New Cinematic Glass variants added. <br/>All video backgrounds fixed with robust Vimeo engine.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" className="rounded-full px-8 border-white/10 text-white/40 hover:text-white">
                        <Link href="#opt-a">Archetype A</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full px-8 border-white/10 text-white/40 hover:text-white">
                        <Link href="#opt-4">New Cinematic</Link>
                    </Button>
                </div>
            </div>

            {/* --- ARCHEPTYPE A: THE BLUEPRINT --- */}
            <LabSection id="opt-a" title="Archetype A: The Blueprint" description="Finalist. 1440px Figma Spec. Exact Spacing + 2x2 Specs Grid.">
                <div className="w-full h-full bg-[#0B0F1A] flex items-center px-[120px]">
                    <div className="grid grid-cols-2 gap-20 w-full max-w-[1300px]">
                        <div className="space-y-[32px]">
                             <div className="space-y-[16px]">
                                <h1 className="font-headline font-black text-[64px] leading-[0.9] tracking-tighter text-white uppercase italic">
                                    STOP CHASING YOUR TEAM.<br/>
                                    <span style={{ color: YELLOW }}>SEE DAILY WORK DONE.</span>
                                </h1>
                                <p className="text-[20px] font-bold text-zinc-400 leading-[28px] italic">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <p className="text-[18px] font-medium text-zinc-500 italic border-l-2 border-primary/30 pl-6">
                                {NARRATIVE.support}
                             </p>

                             <SpecsGrid />

                             <DesktopCTA className="pt-6" />
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-[640px] h-[440px] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 bg-black">
                                <BackgroundVideo opacity={0.6} />
                                
                                <Tag text="Follow ups?" className="absolute top-10 right-10" delay="0.5s" />
                                <Tag text="Missed steps?" className="absolute bottom-16 right-10" delay="1s" />
                                <div className="absolute bottom-8 left-10 text-[11px] font-black text-[#FACC15] uppercase tracking-[0.5em] italic">LIVE_TRACKING_ACTIVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE MIDNIGHT MONOLITH --- */}
            <LabSection id="opt-4" title="Archetype 4: The Midnight Monolith" description="New Cinematic. Centered Glass Monolith. Deep Blur. Single Point of Truth.">
                <BackgroundVideo opacity={0.5} />
                <div className="absolute inset-0 bg-black/60" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 md:p-20 shadow-[0_0_100px_-20px_rgba(250,204,21,0.15)] text-center space-y-12 border-t-white/20">
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 uppercase font-black tracking-widest text-[10px]">SOVEREIGN MASTER ENGINE</Badge>
                            <h1 className="text-5xl md:text-8xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white">
                                CAPTURE <br/> <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-bold italic leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <SpecsGrid className="max-w-2xl" />
                        </div>

                        <div className="flex flex-col items-center gap-6 pt-4">
                            <Button className="h-24 px-20 rounded-[2rem] bg-[#FACC15] text-black font-black uppercase italic text-2xl shadow-2xl hover:scale-105 transition-all border-none group">
                                DEPLOY NOW →
                            </Button>
                            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.4em]">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE GLASS HORIZON --- */}
            <LabSection id="opt-5" title="Archetype 5: The Glass Horizon" description="New Cinematic. Wide 60/40 Split. 90-degree Gradient Mask. Elite Software feel.">
                <BackgroundVideo opacity={0.6} />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                
                <div className="relative z-10 h-full container px-24 mx-auto grid lg:grid-cols-[1.3fr,1fr] items-center gap-24">
                    <div className="space-y-12">
                        <div className="space-y-6">
                             <span className="text-[12px] font-black text-primary uppercase tracking-[0.6em]">BUILD_V28.0_STABLE</span>
                            <h1 className="text-7xl md:text-[8rem] font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-white">
                                CHAOS IS <br/> <span style={{ color: YELLOW }}>EXPENSIVE.</span>
                            </h1>
                            <p className="text-2xl text-zinc-400 italic font-bold max-w-lg leading-relaxed border-l-4 border-primary pl-8">
                                Stop the daily stress. <br/>Make your business run itself.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6 p-1 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
                            {BULLETS.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4">
                                    <item.i className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{item.t}</span>
                                </div>
                            ))}
                        </div>

                        <DesktopCTA />
                    </div>

                    <div className="space-y-6">
                        <Tag text="Training calls?" delay="0.5s" />
                        <Tag text="Daily chaos?" className="translate-x-12" delay="1s" />
                        <Tag text="Memory gaps?" delay="1.5s" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 6: THE TECHNICAL PULSE --- */}
            <LabSection id="opt-6" title="Archetype 6: The Technical Pulse" description="New Cinematic. Data-First Monospace accents. High-density audit grid.">
                <div className="absolute inset-0 bg-[#0B0F1A] opacity-10 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:40px_40px]" />
                <BackgroundVideo opacity={0.2} grayscale />
                
                <div className="relative z-10 h-full container px-24 mx-auto flex flex-col justify-center space-y-16">
                    <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono text-[#FACC15] uppercase tracking-[0.4em] bg-[#FACC15]/10 px-4 py-1 border border-[#FACC15]/20">ENCRYPTED_OPERATIONAL_INFRASTRUCTURE</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    
                    <div className="space-y-6 max-w-5xl">
                        <h1 className="text-8xl md:text-[10rem] font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-white">
                            SYSTEMS <br/> <span className="text-zinc-700">OVER LUCK.</span>
                        </h1>
                        <p className="text-3xl text-zinc-500 font-black italic uppercase tracking-tight">{NARRATIVE.subline}</p>
                    </div>

                    <div className="grid grid-cols-4 gap-4 max-w-6xl">
                        {BULLETS.map((item, i) => (
                            <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl font-mono text-[11px] text-zinc-400 group hover:border-[#FACC15]/40 transition-all hover:bg-white/[0.04]">
                                <span className="block text-[#FACC15] mb-4 text-xs font-black">PRO_MODULE_0{i+1}</span>
                                {item.t.toUpperCase()}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-12">
                        <Button className="h-20 px-16 rounded-none bg-[#FACC15] text-black font-black uppercase text-base tracking-[0.3em] hover:scale-105 transition-all">
                            INITIALIZE DEPLOYMENT
                        </Button>
                        <div className="space-y-1">
                            <span className="text-2xl font-black italic text-white">₹2,999</span>
                            <span className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest">ONE-TIME_LICENSE_FEE</span>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 7: THE ETHEREAL PORTAL --- */}
            <LabSection id="opt-7" title="Archetype 7: The Ethereal Portal" description="New Cinematic. Minimalist Portal. High-gravity center focus. Wrapping narrative.">
                <div className="h-full flex flex-col items-center justify-center space-y-16 px-4">
                    <div className="text-center space-y-4">
                        <h1 className="text-6xl md:text-9xl font-black font-headline leading-none tracking-tighter uppercase italic">
                            MEMORY IS NOT <br/> <span className="text-zinc-800">A SYSTEM.</span>
                        </h1>
                    </div>

                    <div className="relative group max-w-5xl w-full">
                        <Tag text="Follow ups?" className="absolute -top-6 -left-6 z-20" delay="0.2s" />
                        <Tag text="Missed steps?" className="absolute -bottom-6 -right-6 z-20" delay="0.6s" />
                        
                        <div className="aspect-video rounded-[4rem] overflow-hidden border-[16px] border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative bg-black">
                            <BackgroundVideo opacity={0.8} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-12 text-[12px] font-black text-[#FACC15] uppercase tracking-[0.5em] italic">LIVE_COMMAND_FEED</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10">
                        <p className="text-zinc-500 font-bold italic text-2xl text-center max-w-2xl leading-tight">{NARRATIVE.support}</p>
                        <div className="flex flex-col items-center gap-4">
                            <Button className="h-24 px-20 rounded-full bg-white text-black font-black uppercase italic text-2xl hover:bg-[#FACC15] transition-all shadow-2xl">
                                DEPLOY ENGINE →
                            </Button>
                            <p className="text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em]">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 8: THE INDUSTRIAL HUD --- */}
            <LabSection id="opt-8" title="Archetype 8: The Industrial HUD" description="New Cinematic. Tactical Tactical Glass. Information overlays. Cockpit style.">
                 <BackgroundVideo opacity={0.4} grayscale />
                 <div className="absolute inset-0 bg-black/70" />
                 
                 <div className="relative z-10 h-full container px-12 md:px-24 mx-auto flex items-center justify-between gap-16">
                    <div className="max-w-3xl space-y-12">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/40 px-6 py-2 rounded-none font-black tracking-widest text-[10px]">OPERATIONAL COMMAND V28.0</Badge>
                            <h1 className="text-7xl md:text-[9rem] font-black font-headline leading-[0.82] uppercase italic tracking-tighter text-[#FACC15]">
                                OBSERVE.<br/>
                                <span className="text-white">COMMAND.</span>
                            </h1>
                            <p className="text-2xl text-zinc-400 font-bold italic leading-tight max-w-xl">
                                {NARRATIVE.subline}
                            </p>
                        </div>
                        <Button className="h-20 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-xl shadow-[0_0_50px_-5px_rgba(250,204,21,0.5)] hover:scale-105 transition-all border-none">
                            ACQUIRE SOVEREIGN SYSTEM
                        </Button>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-6 w-[550px]">
                        {BULLETS.map((item, i) => (
                            <div key={i} className="p-10 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] space-y-6 hover:border-[#FACC15]/50 transition-all group shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <item.i className="w-20 h-20 text-white" />
                                </div>
                                <item.i className="w-10 h-10 text-[#FACC15]" />
                                <div className="space-y-1">
                                    <h4 className="font-black uppercase italic text-xl leading-none text-white">{item.t.split(' ')[0]}</h4>
                                    <p className="text-[11px] font-black uppercase text-zinc-500 tracking-widest leading-relaxed">{item.t.split(' ').slice(1).join(' ')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </LabSection>

            <div className="py-40 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[14px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">Full Cinematic Lab Collection v28.0 Active.</p>
                 <Button asChild variant="link" className="mt-12 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
