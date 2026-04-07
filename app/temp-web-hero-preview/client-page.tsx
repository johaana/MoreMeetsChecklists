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
    Cpu
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
    <Button asChild size="lg" className={cn("h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none", className)}>
        <Link href="/library">GO LIVE IN 10 MINUTES: {price} <ArrowRight className="ml-2 h-5 w-5" /></Link>
    </Button>
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

export default function WebHeroPreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-6 space-y-40 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Sovereign Web Improv Lab v4.0</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">The "Command" Archetype Variations</h1>
                    <p className="text-secondary-text italic font-medium">Testing creative improvisations of the successful side-by-side strategy.</p>
                </div>

                {/* VARIANT 1: THE BASELINE COMMAND */}
                <PreviewFrame title="1. The Baseline Command" description="The proven side-by-side formula: Desaturated video, high-blur glass, vertical list.">
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

                {/* VARIANT 2: THE VIVID AUTHORITY */}
                <PreviewFrame title="2. The Vivid Authority" description="Full color video loop with deeper blurs and enhanced typographic weight.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">SOVEREIGN V11.9 ACCESS</Badge>
                                <h1 className="text-7xl lg:text-[5.5rem] font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-2xl text-white/60 italic font-medium max-w-lg leading-snug">
                                    Stop managing by individual effort. <br />
                                    Start seeing by institutional system.
                                </p>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-md inline-block">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                                    {TECHNICAL_PAYLOAD.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <item.i className="w-4 h-4 text-primary" />
                                            <span className="text-[11px] font-black text-white/80 uppercase tracking-widest">{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <DesktopCTA className="h-20 text-lg shadow-[0_0_50px_-5px_rgba(46,184,107,0.4)]" />
                        </div>
                        <IndustrySelector className="bg-black/40 border-primary/20 p-12" />
                    </div>
                </PreviewFrame>

                {/* VARIANT 3: THE TELEMETRY BLUEPRINT */}
                <PreviewFrame title="3. The Telemetry Blueprint" description="Creative: Forensic engineering feel with a digital grid and technical callouts.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                        {/* Digital Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary">
                                    <Cpu className="w-5 h-5 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono">SPEC: SOVEREIGN_V11.9</span>
                                </div>
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    SYSTEMS ARE <br />
                                    <span className="text-primary">INFRASTRUCTURE.</span>
                                </h1>
                                <p className="text-lg text-zinc-500 font-mono italic leading-relaxed max-w-lg border-l border-white/10 pl-8">
                                    [PROCESS_ID: MM_OS_2025] // Capturing the institutional memory of your top performers into an editable data engine.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-primary group-hover:border-primary/50 transition-all"><item.i className="w-5 h-5" /></div>
                                        <div className="space-y-0.5">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">MODULE_{i+1}</span>
                                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest font-mono">{item.t}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="rounded-none font-mono" />
                        </div>
                        <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent">
                            <IndustrySelector className="bg-black/90 border-none rounded-[2.4rem] p-12" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 4: THE ATMOSPHERIC COMMAND */}
                <PreviewFrame title="4. The Atmospheric Command" description="Creative: Multi-layer gradients and 'Floating Data Chips' for a cinematic brand story.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" />
                        {/* Background Watermark */}
                        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] uppercase italic select-none pointer-events-none">
                            SOVEREIGN
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.95)_100%)]" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-24 gap-24">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    STOP <br />
                                    <span className="text-primary">CHASING.</span>
                                </h1>
                                <p className="text-2xl text-secondary-text font-medium italic max-w-md leading-snug drop-shadow-lg">
                                    "Consistency is either engineered, or it is non-existent."
                                </p>
                            </div>
                            
                            {/* Floating Data Chips */}
                            <div className="flex flex-wrap gap-3">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl hover:bg-primary/10 transition-colors cursor-default">
                                        <item.i className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <DesktopCTA className="w-fit px-16 h-20 rounded-[2rem]" />
                                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] pl-8 border-l border-primary/30">NO APPS. NO SAAS. OWN FOREVER.</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-primary/20 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <IndustrySelector className="bg-black/60 border-white/10 backdrop-blur-3xl relative" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 5: THE MINIMALIST ELITE */}
                <PreviewFrame title="5. The Minimalist Elite" description="High-end refinement applied to the side-by-side layout. Focus on line-art and whitespace.">
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

            </main>
            
            <Footer />
        </div>
    );
}
