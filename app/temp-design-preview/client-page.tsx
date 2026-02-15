
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    Globe, 
    ArrowRight, 
    Landmark, 
    ShieldCheck, 
    Zap, 
    Award,
    QrCode,
    CreditCard as CardIcon,
    Shield,
    Trophy,
    Search,
    Lock,
    Scale,
    AlertTriangle,
    FileCheck,
    Download
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
            <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
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

    if (variant === 1) { // Standard Overlay
        return (
            <div className="h-full relative bg-slate-950">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-8 pb-16 z-20 space-y-4">
                    <h1 className="text-3xl font-black text-white leading-tight tracking-tighter">{headline}</h1>
                    <p className="text-sm text-slate-300 leading-relaxed">{subtext}</p>
                    <p className="text-sm font-bold text-red-500 uppercase tracking-wider">{urgency}</p>
                    <Button className="w-full h-14 bg-primary text-slate-950 font-black uppercase rounded-xl">
                        VIEW STANDARDS <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 2) { // Glassmorphism Card
        return (
            <div className="h-full relative bg-slate-950 flex flex-col justify-end p-6">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] space-y-4 shadow-2xl mb-10">
                    <Badge className="bg-primary text-slate-950">AUDIT READY</Badge>
                    <h1 className="text-2xl font-black text-white leading-tight">{headline}</h1>
                    <p className="text-xs text-slate-200">{subtext}</p>
                    <Button className="w-full h-12 bg-white text-slate-950 font-black uppercase rounded-xl">
                        PROCURE ASSET
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 3) { // Typographic Minimalist (White background block)
        return (
            <div className="h-full bg-white flex flex-col">
                <div className="h-1/2 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic">People <br/> Forget.</h1>
                        <p className="text-sm text-slate-600 font-medium">{subtext}</p>
                    </div>
                    <Button className="w-full h-16 bg-slate-950 text-white font-black uppercase text-lg">
                        GET THE STANDARD
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 4) { // Split Focus (Top Video)
        return (
            <div className="h-full bg-slate-950 flex flex-col">
                <div className="h-[40%] relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/20" />
                </div>
                <div className="flex-1 p-8 space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Operational Blueprint</span>
                    </div>
                    <h1 className="text-3xl font-black text-white leading-tight">{headline}</h1>
                    <p className="text-sm text-slate-400">{subtext}</p>
                    <Button className="w-full h-14 bg-primary text-slate-950 font-black uppercase rounded-none">
                        VIEW STANDARDS
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 5) { // Dark Impact (Vertical List)
        return (
            <div className="h-full relative bg-black p-8 flex flex-col justify-center gap-8">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
                <div className="relative z-10 space-y-6">
                    <h1 className="text-4xl font-black text-white tracking-tighter leading-none">{headline}</h1>
                    <div className="space-y-3">
                        {["Reduce Human Error", "Pass Every Audit", "Scale Consistent Teams"].map(t => (
                            <div key={t} className="flex items-center gap-3 text-xs font-bold text-white/80">
                                <ShieldCheck className="w-4 h-4 text-primary" /> {t}
                            </div>
                        ))}
                    </div>
                    <Button className="w-full h-14 bg-primary text-black font-black uppercase text-sm shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                        PROCURE NOW
                    </Button>
                </div>
            </div>
        );
    }

    if (variant === 6) { // Narrative Scroll (Centered Content)
        return (
            <div className="h-full relative bg-slate-950 flex flex-col items-center justify-center p-8 text-center">
                <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
                <div className="relative z-10 space-y-8">
                    <Shield className="w-12 h-12 text-primary mx-auto" />
                    <h1 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">{headline}</h1>
                    <p className="text-sm text-slate-300 px-2">{subtext}</p>
                    <div className="pt-4">
                        <Button className="px-10 h-14 bg-primary text-slate-950 font-black uppercase rounded-full">
                            EXPLORE LIBRARY
                        </Button>
                        <p className="text-[10px] text-white/40 mt-4 uppercase font-black tracking-widest">Licensed Institutional Asset</p>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 7) { // High Density Info
        return (
            <div className="h-full bg-zinc-950 flex flex-col">
                <div className="p-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center mt-10">
                    <span className="text-[10px] font-black text-white tracking-tighter">MOREMEETS™ STANDARDS</span>
                    <Badge variant="outline" className="text-primary border-primary">2025 VERIFIED</Badge>
                </div>
                <div className="flex-1 relative">
                    <video src={videoUrl} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
                    <div className="absolute bottom-0 left-0 w-full p-8 space-y-6">
                        <h1 className="text-3xl font-black text-white leading-none tracking-tighter italic">{headline}</h1>
                        <p className="text-sm text-zinc-400 font-medium">{subtext}</p>
                        <div className="grid grid-cols-2 gap-2">
                            <Button className="h-14 bg-primary text-zinc-950 font-black">PROCURE</Button>
                            <Button variant="outline" className="h-14 text-white border-white/20 font-black">SAMPLE</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 8) { // The Executive Brief
        return (
            <div className="h-full bg-slate-950 p-8 flex flex-col justify-between">
                <div className="mt-12 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs font-black text-primary uppercase">Asset ID: 091-MM</span>
                        <span className="text-[9px] text-white/40 uppercase">Revision 9.7</span>
                    </div>
                    <Landmark className="w-6 h-6 text-white/20" />
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-black text-white leading-[0.9] tracking-tighter">{headline}</h1>
                    <div className="h-1 w-12 bg-primary" />
                    <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-white/10 pl-4">
                        "{subtext}"
                    </p>
                </div>
                <Button className="w-full h-16 bg-white text-slate-950 font-black uppercase text-lg shadow-2xl shadow-white/10">
                    ACQUIRE LICENSE
                </Button>
            </div>
        );
    }

    return null;
}

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <SectionHeadline>Mobile Hero Standard V1.0</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                       A side-by-side comparison of 8 mobile layouts using the production headline, video, and CTA.
                    </p>
                </div>
            </Section>

            {/* MOBILE HERO VARIATIONS */}
            <Section id="mobile-heroes" className="bg-alternate-background/20 border-none">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                        <MobileFrame title="V1: Standard Overlay"><HeroContent variant={1} /></MobileFrame>
                        <MobileFrame title="V2: Glass Card"><HeroContent variant={2} /></MobileFrame>
                        <MobileFrame title="V3: Typographic Heavy"><HeroContent variant={3} /></MobileFrame>
                        <MobileFrame title="V4: Split Screen"><HeroContent variant={4} /></MobileFrame>
                        <MobileFrame title="V5: List Focus"><HeroContent variant={5} /></MobileFrame>
                        <MobileFrame title="V6: Blurred Narrative"><HeroContent variant={6} /></MobileFrame>
                        <MobileFrame title="V7: Technical Dashboard"><HeroContent variant={7} /></MobileFrame>
                        <MobileFrame title="V8: The Exec Brief"><HeroContent variant={8} /></MobileFrame>
                    </div>
                </div>
            </Section>
        </main>
    );
}
