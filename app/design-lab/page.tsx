'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    CheckCircle2,
    ShieldCheck,
    Activity,
    SearchCheck,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// --- CONFIGURATION: V121.0 THE DESIGN ARCHITECTURE MANDATE ---
const HEADLINE = "STOP RELYING ON MEMORY.";
const BRIDGE = "THIS IS WHAT OPERATIONAL CONTROL LOOKS LIKE.";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- COMPONENT: HARDWARE-ACCELERATED BACKDROP ---
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
        <div className="absolute inset-0 bg-black/5 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent z-10" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1); 

    const archetypes = [
        { 
            id: 1, 
            label: "01 CLASSIC TEAL", 
            accent: "#00AE8D", 
            textColor: "#006D5B", 
            glassOpacity: "bg-white/5", 
            blur: "backdrop-blur-[20px]",
            gradient: "bg-transparent",
            layout: "classic"
        },   
        { 
            id: 2, 
            label: "02 ROYAL INDIGO", 
            accent: "#4F46E5", 
            textColor: "#3730A3", 
            glassOpacity: "bg-white/60", 
            blur: "backdrop-blur-[15px]",
            gradient: "bg-gradient-to-b from-white/85 to-white/65",
            layout: "grid-heavy"
        },  
        { 
            id: 3, 
            label: "03 RUBY PERFORMANCE", 
            accent: "#E11D48", 
            textColor: "#9F1239", 
            glassOpacity: "bg-white/65", 
            blur: "backdrop-blur-[10px]",
            gradient: "bg-gradient-to-b from-white/90 to-white/70",
            layout: "minimal"
        },    
        { 
            id: 4, 
            label: "04 DEEP SEA", 
            accent: "#0EA5E9", 
            textColor: "#0C4A6E", 
            glassOpacity: "bg-white/55", 
            blur: "backdrop-blur-[30px]",
            gradient: "bg-gradient-to-br from-white/80 via-white/60 to-white/40",
            layout: "boxed"
        }, 
        { 
            id: 5, 
            label: "05 VIVID MAGENTA", 
            accent: "#D946EF", 
            textColor: "#701A75", 
            glassOpacity: "bg-white/60", 
            blur: "backdrop-blur-[20px]",
            gradient: "bg-gradient-to-b from-white/95 to-white/50",
            layout: "centered"
        },
        { 
            id: 6, 
            label: "06 EMERALD PRIDE", 
            accent: "#10B981", 
            textColor: "#064E3B", 
            glassOpacity: "bg-white/65", 
            blur: "backdrop-blur-[15px]",
            gradient: "bg-white/70",
            layout: "high-density"
        }    
    ];

    const current = archetypes.find(a => a.id === archetypeId) || archetypes[0];

    // Sub-component for technical feature blocks
    const FeaturesGrid = () => {
        const items = [
            { label: "/ SOP_EXECUTION", text: "Run pre-built SOPs. Done right. Every day." },
            { label: "/ COMMAND_MODE", text: "Operations on autopilot. Without SaaS." },
            { label: "/ DATA_FLOW", text: "Everything updates as work happens." }
        ];

        if (current.layout === "boxed") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 pb-2">
                    {items.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-black/5 border border-black/5 space-y-2">
                            <span className="text-[9px] font-black opacity-40 uppercase tracking-[0.4em]">{f.label}</span>
                            <p className="text-sm font-bold text-[#1F2937] leading-tight">{f.text}</p>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 pb-2",
                current.layout === "centered" && "text-center"
            )}>
                {items.map((f, i) => (
                    <div key={i} className="space-y-2">
                        <span className="text-[9px] font-black text-[#0F172A]/40 uppercase tracking-[0.4em]">{f.label}</span>
                        <p className="text-base md:text-lg font-bold text-[#1F2937] leading-snug">{f.text}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen selection:bg-black/10 overflow-hidden font-body bg-white">
            <SiteHeader />

            <main className="flex-1">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-zinc-200 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-zinc-400 uppercase tracking-widest pb-1 border-b border-zinc-100 mb-1">DESIGN ARCHITECT V121</span>
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
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center justify-center">
                        {/* THE CONVERSION COMMAND SLAB */}
                        <div className={cn(
                            "max-w-4xl w-full p-8 md:p-14 rounded-[3.5rem] border border-white/40 shadow-2xl relative overflow-hidden group translate-y-4",
                            current.glassOpacity, current.blur, current.gradient, "transition-all duration-700",
                            current.layout === "centered" && "text-center flex flex-col items-center" 
                        )}>
                            {/* Rim Lighting Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 opacity-40 transition-colors duration-1000" style={{ background: current.accent }} />
                            
                            <div className={cn("space-y-8 w-full", current.layout === "centered" && "flex flex-col items-center")}>
                                {/* Tier 1: Micro Tag & Headline */}
                                <div className="space-y-3">
                                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0F172A]/60 border-black/10 px-6 py-1.5 rounded-full">
                                        INSTITUTIONAL OPERATING STANDARD
                                    </Badge>
                                    <h1 className={cn(
                                        "font-black font-headline text-[#0F172A] leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm",
                                        current.layout === "minimal" ? "text-5xl md:text-8xl" : "text-4xl md:text-6xl lg:text-[5.5rem]"
                                    )}>
                                        {HEADLINE}
                                    </h1>
                                </div>

                                {/* Tier 2: The Category Spine */}
                                <div className={cn(
                                    "bg-black/5 border-y border-black/5 py-5 my-4",
                                    current.layout === "classic" ? "-mx-14 px-14" : "w-full rounded-xl"
                                )}>
                                    <p className="text-sm md:text-xl font-black uppercase tracking-[0.3em] font-headline italic" style={{ color: current.textColor }}>
                                        {BRIDGE}
                                    </p>
                                </div>

                                {/* Tier 3: Technical Feature Grid */}
                                <FeaturesGrid />

                                {/* Tier 4: Trust & Conversion Floor */}
                                <div className={cn(
                                    "pt-10 border-t border-black/5 space-y-10 w-full",
                                    current.layout === "centered" && "flex flex-col items-center"
                                )}>
                                    <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center">
                                        {[
                                            { t: "NO FOLLOW-UPS", i: CheckCircle2 },
                                            { t: "NO REPORTING CHAOS", i: ShieldCheck },
                                            { t: "AUDIT-READY", i: Activity }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2.5">
                                                <item.i className="w-4 h-4" style={{ color: current.accent }} />
                                                <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A] font-headline">
                                                    {item.t}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={cn(
                                        "flex flex-col md:flex-row items-center gap-10 w-full",
                                        current.layout === "centered" && "text-center"
                                    )}>
                                        <div className="flex-1 space-y-6">
                                            <div className={cn(
                                                "border-l-[3px] pl-6 space-y-1",
                                                current.layout === "centered" && "border-l-0 pl-0 border-t-[3px] pt-4"
                                            )} style={{ borderColor: current.accent }}>
                                                <p className="text-base md:text-lg font-bold text-[#0F172A] italic leading-relaxed">
                                                    Pre-built, editable SOPs with live tracking & dashboard. 
                                                </p>
                                                <p className="text-sm md:text-base font-bold text-[#0F172A]/60 italic">
                                                    Includes trainer notes for faster training. Audit-ready.
                                                </p>
                                            </div>
                                            
                                            <Button asChild size="lg" style={{ background: current.accent }} className={cn(
                                                "h-16 px-12 rounded-2xl text-white font-black uppercase italic text-base tracking-widest transition-all border-none group/btn w-full md:w-fit font-headline",
                                                "hover:brightness-110 hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
                                            )}>
                                                <a href="/library" className="flex items-center gap-3">
                                                    DEPLOY YOUR SYSTEM → ₹999
                                                    <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1.5" />
                                                </a>
                                            </Button>
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
                            <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-colors duration-1000" style={{ background: current.accent }} />
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em] italic font-headline">
                                ARCHETYPE_ID: 0{current.id} // DESIGN_LAB_STABLE
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
