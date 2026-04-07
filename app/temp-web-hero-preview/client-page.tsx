'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Lock,
    ChevronRight,
    Activity,
    ClipboardCheck,
    Smartphone,
    ShieldCheck,
    Target,
    Zap,
    Scale,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_7 = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const TECHNICAL_PAYLOAD = [
    { t: "120+ Pre-built SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for staff", i: Smartphone }
];

const PreviewFrame = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => (
    <div className="flex flex-col space-y-6 w-full max-w-7xl mx-auto">
        <div className="space-y-1 pl-4 border-l-4 border-primary">
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary-text">{title}</h3>
            {description && <p className="text-sm text-secondary-text italic font-medium">{description}</p>}
        </div>
        <div className="w-full aspect-[16/8] min-h-[800px] border border-white/10 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative">
            {children}
        </div>
    </div>
);

const DesktopCTA = ({ price = "₹999", className }: { price?: string, className?: string }) => (
    <button className={cn("h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none flex items-center justify-center", className)}>
        GO LIVE IN 10 MINUTES: {price} <ArrowRight className="ml-2 h-5 w-5" />
    </button>
);

const IndustrySelector = ({ className }: { className?: string }) => (
    <div className={cn("bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6 shadow-2xl", className)}>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
        <div className="grid grid-cols-1 gap-2">
            {ELITE_7.map((ind) => (
                <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-primary/5 transition-all group">
                    <div className="flex items-center gap-4">
                        <ind.icon className="w-5 h-5 text-primary/60 group-hover:text-primary" />
                        <span className="text-sm font-bold uppercase italic text-white/70">{ind.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary" />
                </Link>
            ))}
        </div>
    </div>
);

const OperationalWindow = ({ src, alt }: { src: string, alt: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        {/* Browser Frame Header */}
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                    sovereign_v11.9_master_engine.xlsx
                </div>
            </div>
        </div>
        <div className="relative rounded-b-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

export default function WebHeroPreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-6 space-y-40 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Sovereign Web Lab v6.0</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">The Right-Aligned Mandate</h1>
                    <p className="text-secondary-text italic font-medium">Standardizing visual flow across all strategic archetypes.</p>
                </div>

                {/* VARIANT 1: THE BASELINE COMMAND */}
                <PreviewFrame title="1. The Baseline Command" description="The proven formula: Left-aligned narrative, right-aligned glass card. Desaturated video.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6 max-w-lg leading-relaxed">
                                    Know what's done. What's missed. What's delayed. <br />
                                    Across your entire operation.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-4 h-4 text-primary" />
                                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA />
                        </div>
                        <IndustrySelector />
                    </div>
                </PreviewFrame>

                {/* VARIANT 2: THE VIVID NARRATIVE */}
                <PreviewFrame title="2. The Vivid Narrative" description="Full-color cinematic visuals. Narrative focus on 'Capture Memory'. Right-aligned selector.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-xl text-white/60 italic font-medium border-l-2 border-primary/20 pl-6 max-w-lg leading-relaxed">
                                    Institutional memory is an asset. Anything else is just luck. <br />
                                    Own your standards forever.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-4 h-4 text-primary" />
                                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-white text-black shadow-white/10" />
                        </div>
                        <IndustrySelector />
                    </div>
                </PreviewFrame>

                {/* VARIANT 3: THE INDUSTRIAL SPLIT */}
                <PreviewFrame title="3. The Industrial Split" description="Hard 50/50 division. Left side commands attention on black. Right side frames the video.">
                    <div className="h-full flex overflow-hidden">
                        <div className="w-1/2 bg-black h-full flex flex-col justify-center px-20 space-y-12">
                            <div className="space-y-6">
                                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit uppercase font-black tracking-widest text-[10px]">SOVEREIGN V11.9</Badge>
                                <h1 className="text-6xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span className="text-primary">INFRASTRUCTURE.</span>
                                </h1>
                                <p className="text-lg text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6 max-w-sm">
                                    Systems are not suggestions. <br />
                                    They are infrastructure.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-4 h-4 text-primary/60" />
                                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="w-full" />
                        </div>
                        <div className="w-1/2 relative h-full flex items-center justify-center">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                            <IndustrySelector className="relative z-10 w-[80%] max-w-md bg-black/60 border-white/5" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 4: THE ELITE REFINEMENT */}
                <PreviewFrame title="4. The Elite Refinement" description="Format 5 styling (prestigious line-art) with Variant 2 content. Right-aligned selector.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center px-32 gap-32">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                        </div>
                        <div className="p-1 border-l border-white/10 space-y-12 pl-20">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-6">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:translate-x-3">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 5: THE MINIMALIST ELITE */}
                <PreviewFrame title="5. The Minimalist Elite" description="The selected prestigious standard. Focus on line-art, whitespace, and vertical typography.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center px-32 gap-32">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span className="text-primary">SYSTEMS.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                                    Memory is not a system. Serious operations deserve more than improvisation.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                        </div>
                        <div className="p-1 border-l border-white/10 space-y-12 pl-20">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-6">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:translate-x-3">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                <div className="mt-20">
                    <OperationalWindow 
                        src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" 
                        alt="High Res Dashboard Preview" 
                    />
                </div>

            </main>
            
            <Footer />
        </div>
    );
}
