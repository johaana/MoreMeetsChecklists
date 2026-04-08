
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    ShieldCheck, 
    Zap, 
    Activity, 
    ClipboardCheck, 
    FileSpreadsheet,
    LayoutGrid,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants" },
    { name: "Hotels & Resorts", id: "hotels_and_resorts" },
    { name: "Healthcare", id: "healthcare_and_hospital_operations" },
    { name: "Schools", id: "school_operations_pack" },
    { name: "Franchise Networks", id: "franchise_operations_pack" },
    { name: "Facilities", id: "facility_management_blueprint" },
    { name: "Cinemas", id: "cinema_operations_pack" }
];

const CONTENT = {
    h1: <>CAPTURE<br/><span className="text-primary">MEMORY.</span></>,
    p: "Institutional memory is an asset. Anything else is just luck.",
    cta: "GO LIVE IN 10 MINUTES: ₹999",
    bottomLine: "WORKS ON EXCEL & SHEETS • OWN FOREVER"
};

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-6 w-full mb-32">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary border-primary/30 py-1.5 px-6 rounded-full bg-primary/5">
                {title}
            </Badge>
            {subtitle && <p className="text-[9px] text-zinc-500 italic font-black uppercase tracking-[0.4em] pt-2">{subtitle}</p>}
        </div>
        <div className="w-full max-w-[375px] h-[812px] border-[12px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.2)] relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

const MobileHeroBase = ({ variant = 1 }: { variant?: number }) => {
    return (
        <div className="flex flex-col h-full bg-black relative">
            
            {/* VARIANT 2: KINETIC GLASS OVERLAY */}
            {variant === 2 && (
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                </div>
            )}

            {/* HEADER / VISUAL SECTION */}
            {variant !== 2 && (
                <div className={cn(
                    "relative overflow-hidden shrink-0 transition-all duration-700",
                    variant === 1 && "h-[32vh]",
                    variant === 3 && "h-[28vh] border-b border-white/10",
                    variant === 4 && "h-[25vh]",
                    variant === 5 && "h-[35vh]"
                )}>
                    <video
                        src={VIDEO_URL}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={cn(
                            "w-full h-full object-cover",
                            variant === 1 && "opacity-40 grayscale-[0.5]",
                            variant === 3 && "opacity-20 grayscale",
                            variant === 4 && "opacity-15 blur-sm",
                            variant === 5 && "opacity-30 grayscale"
                        )}
                    />
                    
                    {variant === 5 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] opacity-60">
                            <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-lg py-1 px-3 flex items-center justify-between">
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-red-500/40" />
                                    <div className="w-1 h-1 rounded-full bg-amber-500/40" />
                                    <div className="w-1 h-1 rounded-full bg-green-500/40" />
                                </div>
                                <span className="text-[6px] font-black text-white/20 tracking-widest uppercase italic">SOVEREIGN_V11.9</span>
                            </div>
                            <div className="bg-zinc-900 border border-white/10 rounded-b-lg p-1 aspect-video">
                                <img src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" alt="Dashboard" className="w-full h-full object-cover grayscale-[0.2]" />
                            </div>
                        </div>
                    )}

                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent",
                        variant === 3 && "bg-primary/5"
                    )} />
                    
                    <div className="absolute bottom-6 left-8 right-8">
                        <h1 className={cn(
                            "font-black font-headline text-white uppercase italic tracking-tighter",
                            variant === 1 && "text-[2.2rem] leading-[0.85]",
                            variant === 3 && "text-4xl leading-[0.9]",
                            variant === 4 && "text-5xl leading-[0.8] text-center",
                            variant === 5 && "text-3xl leading-none text-primary"
                        )}>
                            {CONTENT.h1}
                        </h1>
                    </div>
                </div>
            )}

            {/* COMMAND DECK (BODY) */}
            <div className={cn(
                "flex-1 flex flex-col justify-between p-8 relative z-10",
                variant === 2 && "bg-black/20 backdrop-blur-xl mt-[40vh] rounded-t-[3rem] border-t border-white/10",
                variant === 3 && "border-l-4 border-primary/20",
                variant === 4 && "items-center text-center px-10"
            )}>
                
                {/* Narrative & Stats */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <p className={cn(
                            "text-sm text-white/40 italic font-medium leading-relaxed",
                            variant === 1 && "border-l-2 border-primary/20 pl-4",
                            variant === 3 && "bg-white/[0.02] p-4 rounded-xl border border-white/5",
                            variant === 4 && "text-base text-white/60"
                        )}>
                            {CONTENT.p}
                        </p>
                        
                        <div className={cn(
                            "flex flex-col gap-4",
                            variant === 4 && "items-center"
                        )}>
                            {[
                                { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
                                { t: "WORKS ON EXCEL & GOOGLE SHEETS", i: FileSpreadsheet },
                                { t: "LIVE DASHBOARD TELEMETRY", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className={cn(
                                        "w-1.5 h-1.5 rounded-full bg-primary",
                                        variant === 3 && "w-4 h-4 rounded-md bg-primary/10 flex items-center justify-center"
                                    )}>
                                        {variant === 3 && <item.i className="w-2.5 h-2.5 text-primary" />}
                                    </div>
                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.35em] italic group-hover:text-primary transition-colors">
                                        {item.t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sector Selector */}
                    <div className="space-y-4">
                        <span className={cn(
                            "text-[8px] font-black text-white/20 uppercase tracking-[0.5em] font-headline block",
                            variant === 4 && "text-center"
                        )}>SELECT VERTICAL</span>
                        <div className={cn(
                            "grid grid-cols-2 gap-2",
                            variant === 4 && "grid-cols-1 w-full"
                        )}>
                            {ELITE_INDUSTRIES.slice(0, 4).map((ind, i) => (
                                <div key={ind.id} className={cn(
                                    "flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5 transition-all",
                                    variant === 4 && "rounded-none border-x-0 border-t-0 p-2 text-center justify-center"
                                )}>
                                    <span className="text-[9px] font-bold uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                    {variant !== 4 && <ChevronRight className="w-3 h-3 text-white/10" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Conversion Block */}
                <div className="space-y-5 pt-8 border-t border-white/5">
                    <Button className={cn(
                        "w-full h-16 font-black uppercase italic text-[11px] tracking-[0.2em] rounded-xl shadow-2xl transition-all active:scale-95 border-none",
                        variant === 4 ? "bg-white text-black rounded-none" : "bg-primary text-black"
                    )}>
                        {CONTENT.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <div className="flex justify-between items-center px-2">
                        {[
                            { t: "EXCEL READY", i: ShieldCheck },
                            { t: "OWN FOREVER", i: Zap }
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <point.i className="w-3 h-3 text-primary/60" />
                                <span className="text-[7.5px] font-black text-white/20 uppercase tracking-[0.3em] italic">{point.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-foreground">
            {/* Sovereign Mock Header */}
            <header className="px-6 h-16 flex items-center bg-black/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
                <div className="flex items-center gap-2.5">
                    <div className="h-6 w-6 text-primary flex items-center justify-center">
                        <LayoutGrid size={22} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-headline text-[1.1rem] font-bold leading-none tracking-tight text-white">MoreMeets™</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] leading-none mt-1.5 text-white/40 italic">LESS MISSES.</span>
                    </div>
                </div>
            </header>
            
            <main className="flex-1 py-20 px-4 bg-zinc-950 space-y-40 flex flex-col items-center">
                
                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <div className="space-y-3">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-6 py-1.5 rounded-none bg-primary/5">
                            Sovereign Mobile Lab v4.0
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white font-headline">Industrial Flow</h1>
                    </div>
                    <p className="text-zinc-500 italic font-medium max-w-sm mx-auto">Evaluating 5 executive visual archetypes for the mobile procurement mandate.</p>
                </div>

                {/* ARCHETYPES */}
                <PreviewFrame title="Archetype 1: The Baseline" subtitle="Standard Desaturated / Hard-Deck">
                    <MobileHeroBase variant={1} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 2: Kinetic Glass" subtitle="Depth / Overlap / Software Modernism">
                    <MobileHeroBase variant={2} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 3: The Blueprint" subtitle="Structural Grid / Precision Markers">
                    <MobileHeroBase variant={3} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 4: Minimalist Elite" subtitle="Whitespace / Vertical Type / Prestigious">
                    <MobileHeroBase variant={4} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 5: Tactical Pulse" subtitle="Product-Forward / HUD Interface">
                    <MobileHeroBase variant={5} />
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
