'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    Target,
    Lock,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ARCHETYPES = [
    { id: 1, name: "EXECUTIVE GREEN", color: "#2EB86B", text: "#0F172A", layout: 'solar' },
    { id: 2, name: "PRESTIGE GOLD", color: "#F5A623", text: "#0F172A", layout: 'solar' },
    { id: 3, name: "SAFETY RED", color: "#E11D48", text: "#0F172A", layout: 'solar' },
    { id: 4, name: "LEMON SAFETY", color: "#FACC15", text: "#0F172A", layout: 'solar' },
    { id: 5, name: "MODERN PINK", color: "#EC4899", text: "#0F172A", layout: 'solar' },
    { id: 6, name: "AZURE SKY", color: "#3B82F6", text: "#0F172A", layout: 'solar' },
    { id: 7, name: "VIVID PURPLE", color: "#8B5CF6", text: "#FFFFFF", layout: 'glow' },
    { id: 8, name: "EMERALD HUD", color: "#10B981", text: "#FFFFFF", layout: 'glow' },
    { id: 9, name: "GOLDEN GLOW", color: "#F5A623", text: "#FFFFFF", layout: 'glow' },
    { id: 10, name: "SOLAR MINIMAL", color: "#F97316", text: "#0F172A", layout: 'solar' },
    { id: 11, name: "ROYAL INDIGO", color: "#6366F1", text: "#FFFFFF", layout: 'glow' },
    { id: 12, name: "ROSE COMMAND", color: "#F43F5E", text: "#FFFFFF", layout: 'glow' }
];

const FEATURES = [
    "PRE-BUILT SOPs",
    "LIVE DASHBOARD",
    "AUDIT-READY"
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
            {/* 
                THE INDUSTRIAL BLADE MASK: 
                High-gravity linear gradient column on the far left.
                Provides a rock-solid bed for the Site Header, Logo, and Headlines.
            */}
            <div className={cn(
                "absolute inset-0 z-10 w-full transition-all duration-1000",
                isDark 
                    ? "bg-gradient-to-r from-black via-black/70 to-transparent" 
                    : "bg-gradient-to-r from-white via-white/85 to-transparent"
            )} />
        </div>
    );
};

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(9);
    const active = ARCHETYPES.find(a => a.id === archetypeId) || ARCHETYPES[0];

    const SovereignSlab = () => {
        const themeColor = active.color;
        const textColor = active.text;
        const layout = active.layout;
        const isDark = layout === 'glow';

        return (
            <div className="w-full transition-all duration-700 relative z-20 max-w-lg bg-transparent border-none shadow-none p-0">
                <div className="space-y-6 relative z-10 max-h-[80vh] flex flex-col justify-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-[4rem] font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm" style={{ color: textColor }}>
                            STOP RELYING <br /> ON MEMORY.
                        </h1>
                        <h2 className="text-xl md:text-[1.6rem] font-black font-headline leading-[0.9] tracking-tighter uppercase italic" style={{ color: themeColor }}>
                            Run pre-built SOPs. <br />
                            <span className="text-[0.8em] opacity-80">Done right. Every day.</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1 border-l-4 pl-6" style={{ borderColor: `${themeColor}40` }}>
                            <p className="text-lg md:text-xl font-bold italic leading-tight" style={{ color: textColor }}>
                                Operations on autopilot. <br />
                                <span style={{ color: themeColor }}>Without SaaS.</span>
                            </p>
                            <p className="text-[10px] md:text-xs font-medium italic opacity-70 leading-relaxed max-w-[280px]" style={{ color: textColor }}>
                                No follow-ups. No reporting chaos. <br /> Everything updates as work happens. 
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-1">
                            <Button 
                                size="lg" 
                                className="h-14 md:h-16 px-8 md:px-10 rounded-xl font-black uppercase italic text-xs md:text-lg tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl border-none w-fit group"
                                style={{ backgroundColor: themeColor, color: isDark ? '#0F172A' : '#FFFFFF' }}
                            >
                                DEPLOY SYSTEM <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <div className="flex items-center gap-3 px-1">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40" style={{ color: textColor }}>
                                    ONE-TIME: ₹999
                                </span>
                                <div className="w-1 h-1 rounded-full bg-current opacity-20" style={{ color: textColor }} />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40" style={{ color: textColor }}>
                                    OWN FOREVER
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-4">
                        <p className="text-[10px] md:text-[11px] font-bold italic opacity-60 leading-relaxed max-w-sm" style={{ color: textColor }}>
                            Pre-built, editable SOPs with live tracking and dashboard. Includes trainer notes for faster training. Audit-ready.
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {FEATURES.map(feat => (
                                <div key={feat} className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center bg-current opacity-10" style={{ color: themeColor }}>
                                        <Check className="w-2 h-2 stroke-[4px]" style={{ color: themeColor }} />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest italic opacity-70" style={{ color: textColor }}>{feat}</span>
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

                {/* EXTREME LEFT CONTAINER with pt-24 for Logo Safety */}
                <div className="container relative z-20 h-full px-6 lg:pl-16 mx-auto pt-24">
                    <div className="w-full flex transition-all duration-1000 justify-start h-full items-center">
                        <SovereignSlab />
                    </div>
                </div>

                {/* BOTTOM STATUS STRIP */}
                <div className="absolute bottom-0 w-full py-4 px-12 border-t bg-white/40 backdrop-blur-md border-zinc-200 z-30">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: active.color }} />
                                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] italic text-zinc-600 font-headline">
                                    SOVEREIGN_SYSTEM // ACTIVE_NODE: {active.name}
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] italic text-zinc-400 font-headline">
                            <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5" /> ZERO_SCROLL_MANDATE</span>
                            <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> AUDIT_READY_V135</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_IP_SECURED</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
