
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    ShieldCheck, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    Lock,
    ChevronRight,
    Activity,
    ClipboardCheck,
    FileSpreadsheet,
    LayoutGrid,
    Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const CONTENT = {
    h1: <>CAPTURE<br/><span className="text-primary">MEMORY.</span></>,
    p: "Institutional memory is an asset. Anything else is just luck.",
    cta: "GO LIVE IN 10 MINUTES: ₹999",
    bottomLine: "WORKS ON EXCEL & SHEETS • OWN FOREVER • NO SaaS"
};

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-4 w-full">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border-primary/20">{title}</Badge>
            {subtitle && <p className="text-[10px] text-zinc-500 italic font-medium uppercase tracking-widest">{subtitle}</p>}
        </div>
        <div className="w-full max-w-[375px] h-[812px] border-[10px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

const MobileHeroBase = ({ variant = 1 }: { variant?: number }) => {
    return (
        <div className="flex flex-col h-full bg-black">
            {/* 1. Visual Layer */}
            <div className={cn(
                "relative overflow-hidden shrink-0 transition-all duration-700",
                variant === 4 ? "h-[25vh]" : "h-[32vh]"
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
                        variant === 2 && "opacity-60",
                        variant === 3 && "opacity-30 grayscale",
                        variant === 4 && "opacity-20 grayscale",
                        variant === 5 && "opacity-40 grayscale"
                    )}
                />
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent",
                    variant === 3 && "bg-primary/5"
                )} />
                
                {variant === 5 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] opacity-80 scale-90">
                         <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-lg py-1.5 px-3 flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-red-500/20" />
                                <div className="w-1 h-1 rounded-full bg-amber-500/20" />
                                <div className="w-1 h-1 rounded-full bg-green-500/20" />
                            </div>
                            <div className="flex-1 text-center text-[6px] font-black text-white/20 uppercase tracking-widest">SOVEREIGN_V11.9</div>
                        </div>
                        <div className="bg-zinc-900 border border-white/10 rounded-b-lg p-1 aspect-video">
                            <img src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" alt="Dash" className="w-full h-full object-cover grayscale-[0.2]" />
                        </div>
                    </div>
                )}

                <div className="absolute bottom-4 left-6 right-6">
                    <h1 className={cn(
                        "text-[2.2rem] font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter",
                        variant === 4 && "text-4xl tracking-tight"
                    )}>
                        {CONTENT.h1}
                    </h1>
                </div>
            </div>

            {/* 2. Command Deck */}
            <div className={cn(
                "flex-1 px-6 pt-6 pb-8 flex flex-col justify-between overflow-y-auto no-scrollbar",
                variant === 2 && "bg-gradient-to-b from-zinc-900 to-black",
                variant === 3 && "border-l-4 border-primary/20",
                variant === 4 && "bg-black"
            )}>
                <div className="space-y-8">
                    {/* Narrative Block */}
                    <div className="space-y-4">
                        <p className={cn(
                            "text-sm text-white/40 italic font-medium leading-relaxed",
                            variant !== 4 && "border-l-2 border-primary/20 pl-4"
                        )}>
                            {CONTENT.p}
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
                                { t: "WORKS ON EXCEL AND GOOGLE SHEETS", i: FileSpreadsheet },
                                { t: "LIVE DASHBOARD TELEMETRY", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    {variant === 4 ? (
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    ) : (
                                        <item.i className="w-3.5 h-3.5 text-primary/60" />
                                    )}
                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] italic group-hover:text-primary transition-colors">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sector Selector */}
                    <div className="space-y-3">
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] font-headline">SELECT VERTICAL</span>
                        <div className="grid grid-cols-2 gap-2">
                            {ELITE_INDUSTRIES.map((ind, i) => (
                                <div 
                                    key={ind.id} 
                                    className={cn(
                                        "flex items-center gap-2.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5 transition-all",
                                        i === ELITE_INDUSTRIES.length - 1 && "col-span-2",
                                        variant === 4 && "rounded-none border-x-0 border-t-0"
                                    )}
                                >
                                    <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                    <span className="text-[9px] font-bold uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Conversion */}
                <div className="space-y-4 pt-6 mt-4 border-t border-white/5">
                    <Button className={cn(
                        "w-full h-14 font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all",
                        variant === 4 ? "bg-white text-black rounded-none" : "bg-primary text-black"
                    )}>
                        {CONTENT.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <div className="flex justify-between items-center px-1">
                        {[
                            { t: "EXCEL READY", i: FileSpreadsheet },
                            { t: "OWN FOREVER", i: Zap },
                            { t: "AUDIT READY", i: ShieldCheck }
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <point.i className="w-2.5 h-2.5 text-primary/60" />
                                <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
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
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            {/* Header Mock with Logo Standard */}
            <header className="px-4 h-16 flex items-center bg-black border-b border-white/5 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 text-primary flex items-center justify-center">
                        <LayoutGrid size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-headline text-lg font-bold leading-none tracking-tight text-white">MoreMeets™</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] leading-none mt-1 text-white/40">LESS MISSES.</span>
                    </div>
                </div>
            </header>
            
            <main className="flex-1 py-20 px-4 bg-zinc-900 space-y-32 flex flex-col items-center">
                
                <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Sovereign Mobile Lab v3.0</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">Visual Flow Mastery</h1>
                    <p className="text-secondary-text italic font-medium">Testing 5 visual archetypes for the "Capture Memory" mandate.</p>
                </div>

                {/* VARIATION 1: THE BASELINE COMMAND */}
                <PreviewFrame title="Var 1: The Baseline Command" subtitle="Standard Desaturated / Black Deck">
                    <MobileHeroBase variant={1} />
                </PreviewFrame>

                {/* VARIATION 2: THE GLASS NARRATIVE */}
                <PreviewFrame title="Var 2: The Glass Narrative" subtitle="Vivid Color / Gradient Deck">
                    <MobileHeroBase variant={2} />
                </PreviewFrame>

                {/* VARIATION 3: THE INDUSTRIAL SPLIT */}
                <PreviewFrame title="Var 3: The Industrial Split" subtitle="Heavy Borders / Tactical Grid">
                    <MobileHeroBase variant={3} />
                </PreviewFrame>

                {/* VARIATION 4: THE MINIMALIST ELITE */}
                <PreviewFrame title="Var 4: The Minimalist Elite" subtitle="High Contrast / Prestigious Line-Art">
                    <MobileHeroBase variant={4} />
                </PreviewFrame>

                {/* VARIATION 5: THE TACTICAL DASHBOARD */}
                <PreviewFrame title="Var 5: The Tactical Dashboard" subtitle="Direct Product Evidence / Interface Focus">
                    <MobileHeroBase variant={5} />
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
