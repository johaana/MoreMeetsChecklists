
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    SearchCheck,
    Lock,
    Cpu,
    ArrowRight,
    ClipboardCheck,
    Activity,
    Smartphone,
    LayoutGrid,
    Target,
    Zap,
    GraduationCap,
    AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ARCHETYPES = [
    { id: 1, name: "ASEGO TEAL", color: "#2EB86B" },
    { id: 2, name: "SOVEREIGN GOLD", color: "#F5A623" },
    { id: 3, name: "OBSIDIAN NIGHT", color: "#2EB86B", dark: true },
    { id: 4, name: "INDUSTRIAL YELLOW", color: "#FACC15" },
    { id: 5, name: "INK BLUE COMMAND", color: "#1E40AF" },
    { id: 6, name: "RISK ALERT RED", color: "#E11D48" }
];

const FEATURES = [
    { title: "RUN PRE-BUILT SOPs.", text: "Done right. Every day." },
    { title: "OPERATIONS ON AUTOPILOT.", text: "Without SaaS." },
    { title: "EVERYTHING UPDATES", text: "as work happens." }
];

const TRUST_POINTS = ["NO FOLLOW-UPS", "NO REPORTING CHAOS", "AUDIT-READY"];
const VALUE_LINE = "Pre-built, editable SOPs with live tracking & dashboard. Includes trainer notes. Audit-ready.";

const StaticVideo = React.memo(() => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-900">
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50 grayscale-[0.1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1);
    const active = ARCHETYPES.find(a => a.id === archetypeId) || ARCHETYPES[0];

    const SovereignSlab = () => {
        const themeColor = active.color;
        const isDark = active.dark;

        return (
            <div className={cn(
                "max-w-5xl w-full p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-700",
                isDark ? "bg-black/60" : "bg-white/5"
            )}>
                {/* Top Rim Glow */}
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-50" style={{ backgroundColor: themeColor }} />
                
                <div className="space-y-8">
                    {/* 1. Technical Tag */}
                    <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 rounded-md px-6 py-1 text-[9px] font-black text-white/40 uppercase tracking-[0.4em] italic font-headline">
                            INSTITUTIONAL OPERATING STANDARD
                        </div>
                    </div>

                    {/* 2. Massive Headline */}
                    <h1 className="text-5xl md:text-[5.5rem] font-black font-headline leading-[0.85] tracking-tighter uppercase italic text-white drop-shadow-2xl">
                        STOP RELYING <br /> ON MEMORY.
                    </h1>
                    
                    {/* 3. The Structural Bridge Bar */}
                    <div className="py-4 -mx-10 px-10 shadow-inner border-y border-black/20" style={{ backgroundColor: themeColor }}>
                        <p className="text-base md:text-xl font-black uppercase tracking-[0.15em] font-headline italic text-center text-[#0F172A]">
                            THIS IS WHAT OPERATIONAL CONTROL LOOKS LIKE.
                        </p>
                    </div>

                    {/* 4. Three Blocks Technical Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="space-y-1 border-l-2 pl-6" style={{ borderColor: `${themeColor}40` }}>
                                <h4 className="text-sm md:text-base font-black uppercase italic leading-tight text-white">{f.title}</h4>
                                <p className="text-[10px] md:text-xs font-bold italic text-white/40">{f.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* 5. The Functional HUD Floor */}
                    <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4 max-w-lg text-left w-full">
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {TRUST_POINTS.map(tp => (
                                    <span key={tp} className="text-[9px] font-black flex items-center gap-2 tracking-widest italic" style={{ color: themeColor }}>
                                        <Check className="w-3.5 h-3.5 stroke-[4px]" /> {tp}
                                    </span>
                                ))}
                            </div>
                            <div className="border-l-4 pl-6" style={{ borderColor: themeColor }}>
                                <p className="text-xs md:text-sm font-bold italic leading-relaxed text-white/80">
                                    {VALUE_LINE}
                                </p>
                            </div>
                        </div>
                        <Button 
                            size="lg" 
                            className="h-16 md:h-20 px-10 md:px-14 rounded-2xl text-[#0F172A] font-black uppercase italic text-sm md:text-base tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border-none shrink-0"
                            style={{ backgroundColor: themeColor }}
                        >
                            DEPLOY YOUR SYSTEM → ₹999
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-black">
            <SiteHeader />

            <main className="flex-1 relative">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-white/20 uppercase tracking-widest pb-1 border-b border-white/5 mb-1">SOVEREIGN V132</span>
                    {ARCHETYPES.map((arch) => (
                        <button 
                            key={arch.id} 
                            onClick={() => setArchetypeId(arch.id)}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-xs transition-all font-headline flex items-center justify-center",
                                archetypeId === arch.id 
                                    ? "text-black" 
                                    : "hover:bg-white/5 text-white/40"
                            )}
                            style={{ backgroundColor: archetypeId === arch.id ? arch.color : 'transparent' }}
                        >
                            0{arch.id}
                        </button>
                    ))}
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
                    <StaticVideo />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center justify-center">
                        <div className="w-full flex justify-center -translate-y-4">
                            <SovereignSlab />
                        </div>
                    </div>
                </section>

                {/* STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-4 px-6 md:px-12 border-t bg-black border-white/5">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: active.color }} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] italic font-headline" style={{ color: active.color }}>
                                    SYSTEM_ACTIVE // {active.name}
                                </span>
                            </div>
                            <div className="hidden sm:block h-4 w-px bg-white/10 mx-2" />
                            <span className="hidden sm:block text-[9px] font-black text-white/20 uppercase tracking-[0.4em] italic font-headline">
                                ONE_GLANCE_PERFORMANCE: STABLE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-white/10 font-headline">
                            <span className="flex items-center gap-2"><SearchCheck className="w-3 h-3" /> AUDIT_SHIELD_V132</span>
                            <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> ZERO_SaaS_LOCK_IN</span>
                            <span className="flex items-center gap-2"><Cpu className="w-3 h-3" /> HARDWARE_ACCELERATED</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
