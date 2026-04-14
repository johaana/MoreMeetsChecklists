
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    Activity,
    Lock,
    Target,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ARCHETYPES = [
    { id: 1, name: "SOVEREIGN GREEN", color: "#2EB86B", text: "#0F172A", layout: 'glass' },
    { id: 2, name: "SOVEREIGN GOLD", color: "#F5A623", text: "#0F172A", layout: 'glass' },
    { id: 3, name: "WHITE SPLIT (FRAMELESS)", color: "#2EB86B", text: "#0F172A", layout: 'split' },
    { id: 4, name: "LEMON YELLOW", color: "#FACC15", text: "#0F172A", layout: 'glass' },
    { id: 5, name: "MODERN PINK", color: "#EC4899", text: "#0F172A", layout: 'glass' },
    { id: 6, name: "GHOST COMMAND", color: "#2EB86B", text: "#FFFFFF", layout: 'ghost' },
    { id: 7, name: "IVORY PRESTIGE", color: "#00AE8D", text: "#0F172A", layout: 'glass_ivory' },
    { id: 8, name: "CARBON TECHNICAL", color: "#F97316", text: "#FFFFFF", layout: 'carbon' },
    { id: 9, name: "SaaS MODERN", color: "#3B82F6", text: "#0F172A", layout: 'glass_light' }
];

const FEATURES = [
    "PRE-BUILT EDITABLE SOPs",
    "LIVE TRACKING & DASHBOARD",
    "AUDIT-READY PROTOCOLS"
];

const StaticVideo = ({ layout }: { layout: string }) => {
    const isSplit = layout === 'split' || layout === 'ghost';
    
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-100">
            <video 
                src={VIDEO_URL} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-1000 will-change-transform",
                    isSplit ? "opacity-100" : "opacity-70"
                )} 
            />
            {/* Intelligent Masking System */}
            {layout === 'split' && (
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 w-full" />
            )}
            {layout === 'ghost' && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 w-full" />
            )}
            {layout === 'carbon' && (
                <div className="absolute inset-0 bg-black/60 z-10" />
            )}
            {(!isSplit && layout !== 'carbon') && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10" />
            )}
        </div>
    );
};

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1);
    const active = ARCHETYPES.find(a => a.id === archetypeId) || ARCHETYPES[0];

    const SovereignSlab = () => {
        const themeColor = active.color;
        const textColor = active.text;
        const layout = active.layout;

        const containerClasses = cn(
            "w-full transition-all duration-700 relative z-20",
            layout === 'glass' && "max-w-2xl p-10 md:p-12 rounded-[3.5rem] border border-white/30 backdrop-blur-3xl shadow-2xl bg-white/40",
            layout === 'glass_ivory' && "max-w-2xl p-10 md:p-12 rounded-[3.5rem] border border-zinc-200 backdrop-blur-3xl shadow-2xl bg-zinc-50/80",
            layout === 'glass_light' && "max-w-2xl p-10 md:p-12 rounded-[3.5rem] border border-white/50 backdrop-blur-2xl shadow-xl bg-white/90",
            layout === 'carbon' && "max-w-xl p-10 md:p-12 rounded-2xl border border-zinc-800 backdrop-blur-md shadow-2xl bg-zinc-950/90",
            (layout === 'split' || layout === 'ghost') && "max-w-2xl bg-transparent border-none shadow-none p-0"
        );

        return (
            <div className={containerClasses}>
                {(layout === 'glass' || layout === 'glass_ivory') && (
                    <div className="absolute top-0 left-0 w-3/4 h-[3px] opacity-60 rounded-full" style={{ backgroundColor: themeColor }} />
                )}
                
                <div className="space-y-8 relative z-10">
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-[4rem] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm" style={{ color: textColor }}>
                            STOP RELYING <br /> ON MEMORY.
                        </h1>
                        <h2 className="text-2xl md:text-[2.2rem] font-black font-headline leading-[0.9] tracking-tighter uppercase italic" style={{ color: themeColor }}>
                            Run pre-built SOPs. <br />
                            <span className="text-[0.8em] opacity-80">Done right. Every day.</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl font-bold italic leading-tight max-w-lg" style={{ color: textColor }}>
                                This is how operations should run. <br />
                                <span style={{ color: themeColor }}>Operations on autopilot. Without SaaS.</span>
                            </p>
                            <p className="text-[11px] md:text-sm font-medium italic opacity-70 leading-relaxed max-w-md" style={{ color: textColor }}>
                                No follow-ups. No reporting chaos. Everything updates as work happens. 
                                Includes trainer notes for faster training. Audit-ready.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 pt-2">
                            <Button 
                                size="lg" 
                                className="h-16 md:h-18 px-10 rounded-2xl font-black uppercase italic text-sm md:text-lg tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl border-none w-fit"
                                style={{ backgroundColor: themeColor, color: layout.includes('glass') || layout === 'split' ? '#0F172A' : '#FFFFFF' }}
                            >
                                DEPLOY YOUR SYSTEM → ₹999
                            </Button>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 px-2" style={{ color: textColor }}>
                                ONE-TIME PURCHASE • OWN FOREVER
                            </span>
                        </div>
                    </div>

                    <div className={cn("pt-8 flex flex-col gap-6", layout !== 'split' && layout !== 'ghost' && "border-t border-black/5")}>
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {FEATURES.map(feat => (
                                <div key={feat} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 stroke-[4px]" style={{ color: themeColor }} />
                                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest italic opacity-70" style={{ color: textColor }}>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-zinc-100">
            <SiteHeader />

            <main className="flex-1 relative flex flex-col justify-center items-center h-[100dvh]">
                <StaticVideo layout={active.layout} />

                {/* ARCHETYPE SELECTOR - DENSE PILL STYLE */}
                <div className="fixed top-1/2 -translate-y-1/2 right-6 md:right-10 z-50 flex flex-col gap-2 p-4 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <span className="text-[7px] font-black text-center text-zinc-400 uppercase tracking-widest pb-2 border-b border-zinc-100 mb-2">DESIGN HUB</span>
                    <div className="grid grid-cols-1 gap-3">
                        {ARCHETYPES.map((arch) => (
                            <button 
                                key={arch.id} 
                                onClick={() => setArchetypeId(arch.id)}
                                className={cn(
                                    "w-10 h-10 rounded-full font-black text-[10px] transition-all flex items-center justify-center border border-transparent",
                                    archetypeId === arch.id 
                                        ? "bg-zinc-950 text-white shadow-lg scale-110" 
                                        : "text-zinc-400 hover:bg-zinc-50"
                                )}
                            >
                                0{arch.id}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                    <div className={cn(
                        "w-full flex transition-all duration-1000",
                        active.layout === 'split' || active.layout === 'ghost' ? "justify-start lg:pl-12" : "justify-center lg:pl-0"
                    )}>
                        <SovereignSlab />
                    </div>
                </div>

                {/* BOTTOM STATUS STRIP */}
                <div className="absolute bottom-0 w-full py-4 px-12 border-t bg-white/40 backdrop-blur-sm border-zinc-200 z-30">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: active.color }} />
                                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] italic text-zinc-500 font-headline">
                                    SYSTEM_ACTIVE // {active.name}
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] italic text-zinc-400 font-headline">
                            <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5" /> ZERO_SCROLL_MANDATE</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_IP_LOCKED</span>
                            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> AUDIT_SHIELD_V116</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
