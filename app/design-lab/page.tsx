
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    Activity,
    Lock,
    Target,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ARCHETYPES = [
    { id: 1, name: "SOVEREIGN GREEN", color: "#2EB86B", text: "#0F172A" },
    { id: 2, name: "SOVEREIGN GOLD", color: "#F5A623", text: "#0F172A" },
    { id: 3, name: "OBSIDIAN NIGHT", color: "#2EB86B", text: "#FFFFFF", dark: true },
    { id: 4, name: "LEMON YELLOW", color: "#FACC15", text: "#0F172A" },
    { id: 5, name: "MODERN PINK", color: "#EC4899", text: "#0F172A" }
];

const FEATURES = [
    "PRE-BUILT EDITABLE SOPS",
    "LIVE TRACKING & DASHBOARD",
    "AUDIT-READY PROTOCOLS"
];

const StaticVideo = React.memo(() => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-100">
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-70 transition-opacity duration-1000 will-change-transform" 
        />
        {/* Left-weighted mask: Mutes the video behind the text on the left, clear on the right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(244,244,245,0.2)_0%,transparent_70%)] z-10" />
        {/* Subtle overall protection */}
        <div className="absolute inset-0 bg-white/5 z-0" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1);
    const active = ARCHETYPES.find(a => a.id === archetypeId) || ARCHETYPES[0];

    const SovereignSlab = () => {
        const themeColor = active.color;
        const isDark = active.dark;
        const textColor = active.text;

        return (
            <div className={cn(
                "max-w-2xl w-full p-10 md:p-12 rounded-[3.5rem] border border-white/30 backdrop-blur-3xl shadow-2xl relative overflow-hidden group transition-all duration-700",
                isDark ? "bg-black/60" : "bg-white/40"
            )}>
                {/* Top Rim Glow */}
                <div className="absolute top-0 left-0 w-3/4 h-[3px] opacity-60" style={{ backgroundColor: themeColor }} />
                
                <div className="space-y-8 relative z-10">
                    {/* 1. Primary Narrative Hook */}
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-[3.8rem] font-black font-headline leading-[0.9] tracking-tighter uppercase italic drop-shadow-sm" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
                            STOP RELYING <br /> ON MEMORY.
                        </h1>
                        <h2 className="text-2xl md:text-[2.2rem] font-black font-headline leading-[0.9] tracking-tighter uppercase italic" style={{ color: themeColor }}>
                            Run pre-built SOPs. <br />
                            <span className="text-[0.8em] opacity-80">Done right. Every day.</span>
                        </h2>
                    </div>

                    {/* 2. Mechanism & Value Bridge */}
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl font-bold italic leading-tight max-w-lg" style={{ color: textColor }}>
                            This is how operations should run. <br />
                            <span className="text-primary" style={{ color: themeColor }}>Operations on autopilot. Without SaaS.</span>
                        </p>
                        
                        <p className="text-xs md:text-sm font-medium italic opacity-70 leading-relaxed max-w-md" style={{ color: textColor }}>
                            No follow-ups. No reporting chaos. Everything updates as work happens. 
                            Includes trainer notes for faster training.
                        </p>

                        <div className="flex flex-col gap-4 pt-2">
                            <Button 
                                size="lg" 
                                className="h-16 md:h-18 px-10 rounded-2xl text-[#0F172A] font-black uppercase italic text-sm md:text-lg tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl border-none w-fit"
                                style={{ backgroundColor: themeColor }}
                            >
                                DEPLOY YOUR SYSTEM → ₹999
                            </Button>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 px-2" style={{ color: textColor }}>
                                ONE-TIME PURCHASE • OWN FOREVER
                            </span>
                        </div>
                    </div>

                    {/* 3. The Technical Payload Floor */}
                    <div className="pt-8 border-t border-black/5 flex flex-col gap-6">
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
                <StaticVideo />

                {/* ARCHETYPE SELECTOR - PILL STYLE */}
                <div className="fixed top-1/2 -translate-y-1/2 right-10 z-50 flex flex-col gap-4 p-6 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-3 border-b border-zinc-100">DESIGN LAB V116</span>
                    {ARCHETYPES.map((arch) => (
                        <button 
                            key={arch.id} 
                            onClick={() => setArchetypeId(arch.id)}
                            className={cn(
                                "w-12 h-12 rounded-full font-black text-xs transition-all flex items-center justify-center border border-transparent",
                                archetypeId === arch.id 
                                    ? "bg-zinc-950 text-white shadow-lg scale-110" 
                                    : "text-zinc-400 hover:bg-zinc-50"
                            )}
                        >
                            0{arch.id}
                        </button>
                    ))}
                </div>

                <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                    {/* Compact Slab Aligned to the Left */}
                    <div className="w-full flex justify-start lg:pl-20 -translate-y-4 max-h-[85vh]">
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
                        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] italic text-zinc-400 font-headline">
                            <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5" /> ZERO_SCROLL_MANDATE</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SOVEREIGN_IP_LOCKED</span>
                            <span className="flex items-center gap-2"><Activity className="w-3.5 h-3.5" /> PERFORMANCE_STABLE</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
