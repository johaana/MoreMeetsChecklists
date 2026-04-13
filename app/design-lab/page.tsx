
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    CheckCircle2,
    ShieldCheck,
    Activity,
    Smartphone,
    History,
    Zap,
    Lock,
    SearchCheck,
    AlertTriangle,
    LayoutGrid,
    ClipboardCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// --- CONFIGURATION: V118.0 THE FULL MANDATE ---
const HEADLINE = "STOP RELYING ON MEMORY.";
const BRIDGE = "This is how operations should run.";

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ACCELERATED 60FPS BACKDROP ---
const StaticVideo = React.memo(({ opacity = 0.85 }: { opacity?: number }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white" style={{ transform: 'translate3d(0,0,0)' }}>
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover will-change-transform" 
            style={{ opacity, transform: 'translate3d(0,0,0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent z-10" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1); 

    const archetypes = [
        { id: 1, label: "ASEGO TEAL", accent: "#00AE8D", textColor: "#006D5B" },   
        { id: 2, label: "COBALT TECH", accent: "#2563EB", textColor: "#1E40AF" },  
        { id: 3, label: "RUBY PERFORMANCE", accent: "#E11D48", textColor: "#9F1239" },    
        { id: 4, label: "ROYAL INDIGO", accent: "#4F46E5", textColor: "#3730A3" }, 
        { id: 5, label: "EXECUTIVE GOLD", accent: "#F59E0B", textColor: "#92400E" }    
    ];

    const currentArchetype = archetypes.find(a => a.id === archetypeId) || archetypes[0];

    return (
        <div className="flex flex-col min-h-screen selection:bg-black/10 overflow-hidden font-body bg-white">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">SOVEREIGN V118</span>
                    {archetypes.map((arch) => (
                        <button 
                            key={arch.id} 
                            onClick={() => setArchetypeId(arch.id)}
                            className={cn(
                                "w-10 h-10 rounded-xl font-black text-[10px] transition-all font-headline",
                                archetypeId === arch.id ? "bg-zinc-900 text-white shadow-lg" : "hover:bg-zinc-100 text-zinc-400"
                            )}
                        >
                            0{arch.id}
                        </button>
                    ))}
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-screen flex items-center overflow-hidden">
                    <StaticVideo opacity={0.85} />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center">
                        {/* THE FULL MANDATE COMMAND SLAB */}
                        <div className={cn(
                            "max-w-4xl w-full p-8 md:p-12 rounded-[3rem] border border-white/40 shadow-2xl relative overflow-hidden group translate-y-4",
                            "bg-white/10 backdrop-blur-[20px] transition-all duration-700" 
                        )}>
                            {/* Rim Lighting Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 opacity-40 transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            
                            {/* Tier 1: Primary Headline */}
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <Badge variant="outline" className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0F172A]/40 border-black/10 px-4 py-1 rounded-full">
                                        Institutional Standard
                                    </Badge>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-[#0F172A] leading-[0.85] tracking-tighter uppercase italic">
                                        {HEADLINE}
                                    </h1>
                                </div>

                                {/* Tier 2: The Structural Bridge */}
                                <div className="bg-black/5 border-y border-black/5 -mx-12 px-12 py-3">
                                    <p className="text-sm md:text-base font-black uppercase tracking-[0.3em] font-headline italic" style={{ color: currentArchetype.textColor }}>
                                        {BRIDGE}
                                    </p>
                                </div>

                                {/* Tier 3: The Technical Action Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                                    <div className="space-y-2">
                                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">/ SOP_EXECUTION</span>
                                        <p className="text-sm font-bold text-[#0F172A]/80 leading-snug">Run pre-built SOPs.<br/>Done right. Every day.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">/ COMMAND_MODE</span>
                                        <p className="text-sm font-bold text-[#0F172A]/80 leading-snug">Operations on autopilot.<br/>Without SaaS dependency.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">/ DATA_FLOW</span>
                                        <p className="text-sm font-bold text-[#0F172A]/80 leading-snug">Everything updates<br/>as work happens.</p>
                                    </div>
                                </div>

                                {/* Tier 4: The Operational Reality & Payload */}
                                <div className="pt-6 border-t border-black/5 space-y-6">
                                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                                        {[
                                            { t: "NO FOLLOW-UPS", i: CheckCircle2 },
                                            { t: "NO REPORTING CHAOS", i: ShieldCheck },
                                            { t: "AUDIT-READY", i: Activity }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <item.i className="w-3.5 h-3.5" style={{ color: currentArchetype.accent }} />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A] font-headline">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center gap-6">
                                        <Button asChild size="lg" style={{ background: currentArchetype.accent }} className={cn(
                                            "h-16 px-10 rounded-2xl text-white font-black uppercase italic text-sm tracking-widest transition-all border-none group/btn w-full md:w-fit font-headline",
                                            "hover:brightness-110 hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
                                        )}>
                                            <a href="/library" className="flex items-center gap-3">
                                                Deploy System → ₹999
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1.5" />
                                            </a>
                                        </Button>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-[9px] font-bold text-[#0F172A]/60 italic leading-tight">
                                                Pre-built, editable SOPs with live tracking and dashboard. <br/>
                                                Includes trainer notes for faster training.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABSOLUTE STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-4 px-6 md:px-12 border-t bg-white/90 backdrop-blur-md border-zinc-200">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-colors duration-1000" style={{ background: currentArchetype.accent }} />
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                SYSTEM_COMMAND_V118_STABLE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-10 text-[8px] font-black uppercase tracking-[0.4em] italic text-zinc-300 font-headline">
                            <span className="flex items-center gap-2"><SearchCheck className="w-3.5 h-3.5" /> BENCHMARK_PROTOCOL</span>
                            <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> ZERO_SaaS_LOCK_IN</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
