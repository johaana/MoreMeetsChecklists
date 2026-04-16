
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    ArrowRight, 
    ShieldCheck, 
    Activity, 
    Lock,
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ARCHETYPES = [
    { id: 1, name: "ROYAL VIOLET", color: "#8B5CF6", text: "#0F172A", layout: 'solar' },
    { id: 2, name: "VIVID PURPLE", color: "#A855F7", text: "#0F172A", layout: 'solar' },
    { id: 3, name: "DEEP ORCHID", color: "#9333EA", text: "#0F172A", layout: 'solar' },
    { id: 4, name: "MAGENTA GLOW", color: "#D946EF", text: "#FFFFFF", layout: 'glow' },
    { id: 5, name: "MODERN PINK", color: "#EC4899", text: "#0F172A", layout: 'solar' },
    { id: 6, name: "ROSE COMMAND", color: "#F43F5E", text: "#FFFFFF", layout: 'glow' },
    { id: 7, name: "ELECTRIC PURPLE", color: "#7C3AED", text: "#FFFFFF", layout: 'glow' },
    { id: 8, name: "FUCHSIA HUD", color: "#C026D3", text: "#0F172A", layout: 'solar' },
    { id: 9, name: "AMETHYST SOVEREIGN", color: "#6D28D9", text: "#FFFFFF", layout: 'glow' },
    { id: 10, name: "CHERRY COMMAND", color: "#E11D48", text: "#0F172A", layout: 'solar' },
    { id: 11, name: "NEON PINK", color: "#F472B6", text: "#0F172A", layout: 'solar' },
    { id: 12, name: "MIDNIGHT VIOLET", color: "#4C1D95", text: "#FFFFFF", layout: 'glow' }
];

const FEATURES = [
    "120+ PRE-BUILT SOPs",
    "LIVE DASHBOARD",
    "AUDIT-READY COMPLIANCE"
];

const StaticVideo = ({ layout }: { layout: string }) => {
    const isDark = layout === 'glow';
    
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            <video 
                src={VIDEO_URL} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 transition-opacity duration-1000 will-change-transform" 
            />
            {/* THE INDUSTRIAL BLADE MASK: High-gravity gradient for absolute legibility on the extreme left */}
            <div className={cn(
                "absolute inset-0 z-10 w-full transition-all duration-1000",
                isDark 
                    ? "bg-gradient-to-r from-black via-black/80 to-transparent" 
                    : "bg-gradient-to-r from-white via-white/80 to-transparent"
            )} />
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
        const isDark = layout === 'glow';

        return (
            <div className="w-full transition-all duration-700 relative z-20 max-w-xl bg-transparent border-none p-0 flex flex-col justify-center">
                <div className="space-y-4 md:space-y-8 relative z-10">
                    
                    {/* NARRATIVE HOOK */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-[5.5rem] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm" style={{ color: textColor }}>
                            STOP RELYING <br /> ON MEMORY.
                        </h1>
                        <h2 className="text-xl md:text-[2.2rem] font-black font-headline leading-[0.9] tracking-tighter uppercase italic" style={{ color: themeColor }}>
                            RUN PRE-BUILT SOPs. <br />
                            <span className="text-[0.8em] opacity-80">DONE RIGHT. EVERY DAY.</span>
                        </h2>
                    </div>

                    {/* EXECUTIVE ANCHOR - AUTOPILOT BLOCK */}
                    <div className="space-y-6">
                        <div className="space-y-2 border-l-4 pl-8" style={{ borderColor: `${themeColor}` }}>
                            <p className="text-2xl md:text-4xl font-black italic tracking-tight leading-tight" style={{ color: textColor }}>
                                Operations on autopilot. <br />
                                <span style={{ color: themeColor }}>Without SaaS.</span>
                            </p>
                            <p className="text-sm md:text-base font-bold italic opacity-70 leading-relaxed max-w-md" style={{ color: textColor }}>
                                No follow-ups. No reporting chaos. <br /> Everything updates as work happens. 
                            </p>
                        </div>

                        {/* CTA + PRICE */}
                        <div className="flex flex-col gap-4 pt-2">
                            <Button 
                                size="lg" 
                                className="h-16 md:h-20 px-10 md:px-14 rounded-xl font-black uppercase italic text-sm md:text-xl tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl border-none w-fit group"
                                style={{ backgroundColor: themeColor, color: isDark ? '#FFFFFF' : '#FFFFFF' }}
                            >
                                DEPLOY SYSTEM <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-1.5" />
                            </Button>
                            <div className="flex items-center gap-4 px-1">
                                <span className="text-xs font-black uppercase tracking-[0.4em] opacity-40" style={{ color: textColor }}>
                                    ONE-TIME: ₹999
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20" style={{ color: textColor }} />
                                <span className="text-xs font-black uppercase tracking-[0.4em] opacity-40" style={{ color: textColor }}>
                                    OWN FOREVER
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE MAPPING */}
                    <div className="pt-2 flex flex-col gap-6">
                        <p className="text-sm md:text-base font-bold italic opacity-60 leading-relaxed max-w-md" style={{ color: textColor }}>
                            Pre-built, editable SOPs with live tracking and dashboard. Includes trainer notes for faster training. Audit-ready.
                        </p>
                        <div className="flex flex-wrap gap-x-10 gap-y-3">
                            {FEATURES.map(feat => (
                                <div key={feat} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center bg-current opacity-10" style={{ color: themeColor }}>
                                        <Check className="w-2.5 h-2.5 stroke-[4px]" style={{ color: themeColor }} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest italic opacity-70" style={{ color: textColor }}>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-black">
            <SiteHeader forceTheme={active.layout === 'glow' ? 'dark' : 'light'} />

            <main className="flex-1 relative flex flex-col h-[100dvh]">
                <StaticVideo layout={active.layout} />

                {/* DYNAMIC SELECTOR PILL - FLOATING RIGHT */}
                <div className="fixed top-1/2 -translate-y-1/2 right-6 md:right-12 z-50 flex flex-col gap-3 p-4 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <div className="flex flex-col items-center gap-1 border-b border-zinc-100 pb-3 mb-1">
                        <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.2em]">LAB</span>
                        <span className="text-[10px] font-black text-zinc-900 uppercase tracking-tighter italic">V135</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                        {ARCHETYPES.map((arch) => (
                            <button 
                                key={arch.id} 
                                onClick={() => setArchetypeId(arch.id)}
                                title={arch.name}
                                className={cn(
                                    "w-9 h-9 rounded-full font-black text-[9px] transition-all flex items-center justify-center border-2",
                                    archetypeId === arch.id 
                                        ? "bg-zinc-950 text-white border-zinc-950 shadow-xl scale-110" 
                                        : "text-zinc-400 border-transparent hover:bg-zinc-100 hover:text-zinc-600"
                                )}
                            >
                                {arch.id < 10 ? `0${arch.id}` : arch.id}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EXTREME LEFT CONTAINER with proper offset for Header safety */}
                <div className="container relative z-20 h-full px-6 lg:pl-16 mx-auto pt-24 pb-16">
                    <div className="w-full flex transition-all duration-1000 justify-start h-full items-center">
                        <SovereignSlab />
                    </div>
                </div>

                {/* REFINED TRANSPARENT BOTTOM STATUS STRIP */}
                <div className={cn(
                    "absolute bottom-0 w-full py-5 px-12 border-t z-30 transition-all duration-1000",
                    active.layout === 'glow' 
                        ? "bg-black/20 backdrop-blur-md border-white/5" 
                        : "bg-white/10 backdrop-blur-md border-zinc-200"
                )}>
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: active.color }} />
                                <span className={cn(
                                    "text-xs font-black uppercase tracking-[0.5em] italic font-headline",
                                    active.layout === 'glow' ? "text-white/40" : "text-zinc-600"
                                )}>
                                    SOVEREIGN_SYSTEM // ACTIVE_NODE: {active.name}
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-[0.4em] italic font-headline">
                            <span className="flex items-center gap-2 opacity-40"><Activity className="w-4 h-4" /> ZERO_SCROLL_MANDATE</span>
                            <span className="flex items-center gap-2 opacity-40"><ShieldCheck className="w-4 h-4" /> AUDIT_READY_V135</span>
                            <span className="flex items-center gap-2 opacity-40"><Lock className="w-4 h-4" /> SOVEREIGN_IP_SECURED</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
