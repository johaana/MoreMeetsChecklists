'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    ShieldCheck, 
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
        <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{title}</span>
        </div>
        <div className="w-[375px] h-[667px] bg-background border-[8px] border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-50" />
            <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar bg-black">
                {children}
            </div>
        </div>
    </div>
);

const HeroContent = ({ variant }: { variant: number | string }) => {
    const videoUrl = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";
    const headline = <>People forget.<br/>Your business<br/>shouldn’t pay for it.</>;
    const subtext = "When work depends on memory or judgment, execution changes with people. Audits, shift changes, and emergencies expose the gaps.";
    const urgency = "Consistency can’t depend on memory.";

    if (variant === 1) { // Standard Overlay (Original Refined)
        return (
            <div className="h-full relative flex flex-col justify-end">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="relative z-20 p-8 pb-12 space-y-6">
                    <h1 className="text-3xl font-black text-white leading-tight tracking-tighter uppercase">{headline}</h1>
                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest">{urgency}</p>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-xl shadow-lg">
                        VIEW STANDARDS <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === '1.1') { // V1 Variant: Smaller Text + Red Highlight
        return (
            <div className="h-full relative flex flex-col justify-end">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                <div className="relative z-20 p-8 pb-12 space-y-4">
                    <div className="px-2 py-1 bg-red-600 w-fit rounded-sm mb-2">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">SYSTEMS OVER MEMORY</span>
                    </div>
                    <h1 className="text-2xl font-black text-white leading-tight tracking-tight uppercase">{headline}</h1>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">{urgency}</p>
                    <Button className="w-full h-12 bg-white text-black font-black uppercase text-xs rounded-none mt-4">
                        PROCURE ASSET <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 4) { // Split Screen (Original Refined)
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="h-1/2 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                </div>
                <div className="flex-1 p-8 pt-4 space-y-6">
                    <h1 className="text-3xl font-black text-white leading-tight tracking-tighter">{headline}</h1>
                    <p className="text-sm text-zinc-400 leading-relaxed">{subtext}</p>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-none tracking-widest">
                        PROCURE ASSET
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === '4.1') { // V7: V4 + Split Gradient (Light Top)
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="h-[50%] relative overflow-hidden">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover contrast-110 brightness-110" />
                    {/* Smoother, more gradual gradient transition */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950" />
                </div>
                <div className="flex-1 p-8 pt-6 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black text-white leading-tight tracking-tighter uppercase">{headline}</h1>
                        <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">{urgency}</p>
                    </div>
                    {/* text-sm matches v4 text size */}
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">{subtext}</p>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase rounded-lg shadow-xl shadow-primary/10">
                        SECURE COMPLIANCE <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === '4.2') { // V4 Variant: Catchy Button (Procurement Focus)
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="h-1/2 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
                </div>
                <div className="flex-1 p-8 pt-4 flex flex-col justify-between pb-10">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black text-white leading-tight tracking-tighter uppercase">{headline}</h1>
                        <p className="text-sm text-zinc-400 leading-relaxed italic border-l-2 border-primary pl-4">"Because consistency cannot depend on human memory."</p>
                    </div>
                    <Button className="w-full h-16 bg-white text-black font-black uppercase text-base rounded-none tracking-tighter hover:bg-primary transition-colors">
                        DEPLOY BLUEPRINT <ArrowRight className="ml-2 w-5 h-5" />
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

    return null;
}

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20 bg-zinc-950">
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <SectionHeadline>Refined Mobile Hero Variations</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4 text-zinc-400 font-medium">
                       Focused iteration on the V1 and V4 directions based on legibility, impact, and procurement psychology.
                    </p>
                </div>
            </Section>

            {/* MOBILE HERO VARIATIONS */}
            <Section id="mobile-heroes" className="bg-zinc-900/30 border-none">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                        <MobileFrame title="V1: Visual Overlay"><HeroContent variant={1} /></MobileFrame>
                        <MobileFrame title="V6: V1 + Red Highlight (High Impact)"><HeroContent variant="1.1" /></MobileFrame>
                        <MobileFrame title="V4: Clean Split"><HeroContent variant={4} /></MobileFrame>
                        <MobileFrame title="V7: V4 + Split Gradient (Light Top)"><HeroContent variant="4.1" /></MobileFrame>
                        <MobileFrame title="V8: V4 + Catchy Action Button"><HeroContent variant="4.2" /></MobileFrame>
                        <MobileFrame title="V5: Content-First List"><HeroContent variant={5} /></MobileFrame>
                    </div>
                </div>
            </Section>
        </main>
    );
}
