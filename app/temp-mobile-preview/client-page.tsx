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
    ChevronRight,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Lock
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
    h1: "CAPTURE MEMORY.",
    p: "Institutional memory is an asset. Anything else is just luck.",
    cta: "GO LIVE IN 10 MINUTES: ₹999",
    bottomLine: "WORKS ON EXCEL & SHEETS • OWN FOREVER",
    payload: [
        { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
        { t: "AUDIT-READY COMPLIANCE", i: ShieldCheck },
        { t: "LIVE DASHBOARD", i: Activity }
    ]
};

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-6 w-full mb-32 px-4">
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
    // VARIANT 1: THE BASELINE
    if (variant === 1) {
        return (
            <div className="flex flex-col h-full bg-black relative">
                <div className="relative h-[32vh] overflow-hidden shrink-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8">
                        <h1 className="font-black font-headline text-white uppercase italic tracking-tighter text-[2.2rem] leading-[0.85]">
                            CAPTURE<br/><span className="text-primary">MEMORY.</span>
                        </h1>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between p-8 relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-sm text-white/40 italic font-medium leading-relaxed border-l-2 border-primary/20 pl-4">
                                {CONTENT.p}
                            </p>
                            <div className="flex flex-col gap-3">
                                {CONTENT.payload.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.35em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.5em] font-headline block">SELECT VERTICAL</span>
                            <div className="grid grid-cols-2 gap-2">
                                {ELITE_INDUSTRIES.map((ind, i) => (
                                    <div key={ind.id} className={cn("flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5 transition-all", i === ELITE_INDUSTRIES.length - 1 && "col-span-2")}>
                                        <div className="flex items-center gap-3">
                                            <ind.icon className="w-3.5 h-3.5 text-primary/40" />
                                            <span className="text-[9px] font-bold uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 text-white/10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 pt-6 border-t border-white/5">
                        <Button className="w-full h-14 font-black uppercase italic text-[10px] tracking-[0.2em] rounded-xl shadow-2xl bg-primary text-black transition-all active:scale-95 border-none">
                            {CONTENT.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="flex justify-between items-center px-2">
                            {[{ t: "EXCEL & SHEETS", i: ShieldCheck }, { t: "OWN FOREVER", i: Zap }].map((point, i) => (
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
    }

    // VERTICAL ARCHETYPES (2 & 3)
    const isHardened = variant === 3;
    const currentPayload = isHardened 
        ? [...CONTENT.payload, { t: "NO SaaS. OWN YOUR DATA.", i: Lock }]
        : CONTENT.payload;

    return (
        <div className="flex flex-col h-full bg-black relative">
            <div className="absolute inset-0 z-0">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col pt-20 pb-10">
                <div className="flex-1 grid grid-cols-[50px,1fr] gap-0">
                    
                    {/* Left: The Structural Divider */}
                    <div className="relative h-full flex flex-col items-center">
                        <div className="absolute inset-y-0 w-px bg-primary/20" />
                        {/* 120 SOPs Text REMOVED as requested */}
                    </div>

                    {/* Right: The Content Stack */}
                    <div className="flex flex-col space-y-10 pr-8 overflow-y-auto no-scrollbar">
                        
                        {/* 1. Narrative Block */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-xs text-white/40 italic font-medium leading-relaxed max-w-[220px]">
                                {CONTENT.p}
                            </p>
                        </div>

                        {/* 2. Technical Payload */}
                        <div className="space-y-3">
                            <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM SPECIFICATIONS</span>
                            <div className="space-y-2.5">
                                {currentPayload.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className={cn("w-3 h-3", (isHardened && item.t.includes("NO SaaS")) || item.t.includes("AUDIT-READY") ? "text-primary" : "text-primary/40")} />
                                        <span className={cn(
                                            "text-[8px] font-bold uppercase tracking-[0.2em] italic",
                                            (isHardened && item.t.includes("NO SaaS")) || item.t.includes("AUDIT-READY") ? "text-primary" : "text-white/30"
                                        )}>{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Industry Vertical Stack */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] font-headline">SELECT VERTICAL</span>
                                <div className="w-12 h-px bg-primary/20" />
                            </div>
                            
                            <div className="flex flex-col space-y-4">
                                {ELITE_INDUSTRIES.map((ind) => (
                                    <div key={ind.id} className="group flex items-center gap-2">
                                        <span className="text-xl font-black font-headline text-white/20 uppercase italic tracking-tighter group-hover:text-primary transition-all duration-300">
                                            {ind.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conversion Footer */}
                <div className="px-10 mt-8 space-y-5 border-t border-white/5 pt-8">
                    <Button className="w-full h-14 font-black uppercase italic text-[10px] tracking-[0.2em] rounded-none bg-primary text-black transition-all active:scale-95 border-none shadow-[0_0_30px_-5px_rgba(46,184,107,0.3)]">
                        {CONTENT.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-[7px] text-white/20 font-black text-center uppercase tracking-[0.4em] italic">
                        {CONTENT.bottomLine}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function MobilePreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-foreground">
            <header className="px-6 h-16 flex items-center bg-black/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
                <div className="flex items-center gap-2.5">
                    <div className="flex flex-col">
                        <span className="font-headline text-lg font-bold leading-none tracking-tight text-white">MoreMeets™</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] leading-none mt-1 text-white/40 italic">LESS MISSES.</span>
                    </div>
                </div>
            </header>
            
            <main className="flex-1 py-20 bg-zinc-950 flex flex-col items-center">
                
                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 px-4">
                    <div className="space-y-3">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-6 py-1.5 rounded-none bg-primary/5">
                            Sovereign Mobile Lab v7.5
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white font-headline">The Narrative Shield</h1>
                    </div>
                    <p className="text-zinc-500 italic font-medium max-w-sm mx-auto">Hardening the "Capture Memory" standard with technical mandates and Audit-Ready payloads.</p>
                </div>

                <PreviewFrame title="Archetype 1: Standard" subtitle="Existing layout standard">
                    <MobileHeroBase variant={1} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 2: Vertical Narrative" subtitle="Green MEMORY + Audit Payload">
                    <MobileHeroBase variant={2} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 3: Narrative Hardening" subtitle="Green MEMORY + NO SaaS + Audit Payload">
                    <MobileHeroBase variant={3} />
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
