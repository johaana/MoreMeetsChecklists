'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    ShieldCheck, 
    Shield, 
    Landmark, 
    FileCheck,
    Download,
    Lock,
    Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-b border-white/5", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const MobileFrame = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{title}</span>
        <div className="w-[375px] h-[667px] bg-background border-[8px] border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-50" />
            <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar bg-black">
                {children}
            </div>
        </div>
    </div>
);

const HeroContent = ({ variant }: { variant: number }) => {
    const videoUrl = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";
    const headline = <>People forget.<br/>Your business<br/>shouldn’t pay for it.</>;
    const subtext = "When work depends on memory or judgment, execution changes with people. Audits, shift changes, and emergencies expose the gaps.";
    const urgency = "Consistency can’t depend on memory.";

    if (variant === 1) { // Standard Overlay (Bottom-weighted)
        return (
            <div className="h-full relative flex flex-col justify-end">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="relative z-20 p-8 pb-12 space-y-4">
                    <h1 className="text-3xl font-black text-white leading-tight tracking-tighter uppercase">{headline}</h1>
                    <p className="text-sm text-zinc-300 leading-relaxed">{subtext}</p>
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">{urgency}</p>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-xl shadow-lg">
                        VIEW STANDARDS <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 2) { // Glassmorphism Floating Card
        return (
            <div className="h-full relative flex flex-col justify-center p-6">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] space-y-6 shadow-2xl">
                    <div className="flex justify-between items-center">
                        <Badge className="bg-primary text-black font-black text-[9px]">AUDIT READY</Badge>
                        <Shield className="w-5 h-5 text-white/40" />
                    </div>
                    <h1 className="text-2xl font-black text-white leading-tight tracking-tight">{headline}</h1>
                    <p className="text-xs text-zinc-200 leading-relaxed">{subtext}</p>
                    <Button className="w-full h-12 bg-white text-black font-black uppercase rounded-2xl">
                        EXPLORE LIBRARY
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 3) { // High Contrast Editorial (White/Black Split)
        return (
            <div className="h-full bg-white flex flex-col">
                <div className="h-[45%] relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-black leading-[0.85] tracking-tighter uppercase italic">People <br/> Forget.</h1>
                        <div className="h-1 w-12 bg-black" />
                        <p className="text-sm text-zinc-600 font-medium leading-snug">{subtext}</p>
                    </div>
                    <Button className="w-full h-16 bg-black text-white font-black uppercase text-lg rounded-none">
                        GET THE STANDARD
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 4) { // Split Screen (Top Focus)
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="h-1/2 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                </div>
                <div className="flex-1 p-8 pt-0 space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Operational Blueprint</span>
                    </div>
                    <h1 className="text-3xl font-black text-white leading-tight tracking-tighter">{headline}</h1>
                    <p className="text-sm text-zinc-400 leading-relaxed">{subtext}</p>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-none tracking-widest">
                        PROCURE ASSET
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 5) { // Dark List Focus
        return (
            <div className="h-full relative p-8 flex flex-col justify-center gap-10">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 space-y-8">
                    <h1 className="text-4xl font-black text-white tracking-tighter leading-[0.9] uppercase">{headline}</h1>
                    <div className="space-y-4">
                        {[
                            "Reduce Operational Error",
                            "Guarantee Audit Compliance",
                            "Eliminate Person-Dependency"
                        ].map(t => (
                            <div key={t} className="flex items-center gap-3 text-xs font-bold text-zinc-100">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/40">
                                    <ShieldCheck className="w-3 h-3 text-primary" />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase text-sm rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        START BUILDING <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 6) { // Narrative Centered (Blur)
        return (
            <div className="h-full relative flex flex-col items-center justify-center p-8 text-center">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <div className="relative z-20 space-y-8">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20">
                        <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">{headline}</h1>
                    <p className="text-sm text-zinc-300 px-4 leading-relaxed">{subtext}</p>
                    <div className="pt-4 space-y-4">
                        <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-full shadow-2xl">
                            VIEW STANDARDS
                        </Button>
                        <p className="text-[9px] text-white/40 uppercase font-black tracking-[0.3em]">Licensed Institutional IP</p>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 7) { // Technical Dashboard
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="p-4 bg-zinc-900/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center mt-10">
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">Standard ID: 091-MM</span>
                    <Badge variant="outline" className="text-primary border-primary bg-primary/5 text-[9px] font-black">2025 VERIFIED</Badge>
                </div>
                <div className="flex-1 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                    <div className="absolute bottom-0 left-0 w-full p-8 space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-black text-white leading-none tracking-tighter uppercase">{headline}</h1>
                            <div className="flex gap-2">
                                <span className="text-[8px] bg-white/10 text-white px-2 py-0.5 rounded uppercase font-black">ISO ALIGNED</span>
                                <span className="text-[8px] bg-white/10 text-white px-2 py-0.5 rounded uppercase font-black">AUDIT READY</span>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-400 font-medium leading-relaxed italic border-l border-primary/50 pl-4">{subtext}</p>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <Button className="h-14 bg-primary text-black font-black rounded-lg">PROCURE</Button>
                            <Button variant="outline" className="h-14 text-white border-white/20 font-black rounded-lg backdrop-blur-sm">SAMPLES</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 8) { // The Executive Brief (Premium minimal)
        return (
            <div className="h-full bg-black p-8 flex flex-col justify-between border-x border-white/5">
                <div className="mt-12 flex items-center justify-between opacity-40">
                    <Landmark className="w-6 h-6 text-white" />
                    <div className="text-right">
                        <span className="block text-[10px] font-black text-white uppercase">MoreMeets™</span>
                        <span className="block text-[8px] text-white/60 uppercase">Operational Asset</span>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="h-0.5 w-12 bg-primary" />
                    <h1 className="text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase">{headline}</h1>
                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                        {subtext}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Acquisition Authorized
                    </div>
                </div>
                <Button className="w-full h-16 bg-white text-black font-black uppercase text-lg rounded-xl shadow-2xl shadow-white/5">
                    ACQUIRE LICENSE
                </Button>
            </div>
        );
    }

    return null;
}

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20 bg-zinc-950">
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <SectionHeadline>Mobile Hero Standards V1.0</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4 text-zinc-400">
                       A production-ready comparison of 8 mobile hierarchies using your hero video and core value proposition.
                    </p>
                </div>
            </Section>

            {/* MOBILE HERO VARIATIONS */}
            <Section id="mobile-heroes" className="bg-zinc-900/30 border-none">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-items-center">
                        <MobileFrame title="V1: Standard Overlay"><HeroContent variant={1} /></MobileFrame>
                        <MobileFrame title="V2: Glass Card"><HeroContent variant={2} /></MobileFrame>
                        <MobileFrame title="V3: High Contrast Split"><HeroContent variant={3} /></MobileFrame>
                        <MobileFrame title="V4: Gradient Split"><HeroContent variant={4} /></MobileFrame>
                        <MobileFrame title="V5: List Focus"><HeroContent variant={5} /></MobileFrame>
                        <MobileFrame title="V6: Blurred Narrative"><HeroContent variant={6} /></MobileFrame>
                        <MobileFrame title="V7: Technical Dashboard"><HeroContent variant={7} /></MobileFrame>
                        <MobileFrame title="V8: The Executive Brief"><HeroContent variant={8} /></MobileFrame>
                    </div>
                </div>
            </Section>
        </main>
    );
}
