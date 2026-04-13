
'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    Activity,
    SearchCheck,
    Lock,
    Zap,
    Cpu,
    Smartphone,
    ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const HEADLINE = "STOP RELYING ON MEMORY.";
const BRIDGE = "THIS IS WHAT OPERATIONAL CONTROL LOOKS LIKE.";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const FEATURES = [
    { title: "Run pre-built SOPs.", text: "Done right. Every day." },
    { title: "Operations on autopilot.", text: "Without SaaS." },
    { title: "Everything updates", text: "as work happens." }
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
            className="w-full h-full object-cover opacity-70 grayscale-[0.1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1); 

    const renderLayout = () => {
        switch (archetypeId) {
            case 2: return <SovereignSlab variant="gold" />;
            case 3: return <SovereignSlab variant="obsidian" />;
            case 4: return <SovereignSlab variant="apple" />;
            case 5: return <SovereignSlab variant="wireframe" />;
            default: return <SovereignSlab variant="standard" />;
        }
    };

    // --- REUSABLE INTEGRATED SLAB COMPONENT ---
    const SovereignSlab = ({ variant }: { variant: 'standard' | 'gold' | 'obsidian' | 'apple' | 'wireframe' }) => {
        const isGold = variant === 'gold';
        const isObsidian = variant === 'obsidian';
        const isApple = variant === 'apple';
        const isWireframe = variant === 'wireframe';

        const themeColor = isGold ? "#F5A623" : "#2EB86B"; // Gold vs Asego Teal
        const bridgeBg = isWireframe ? "bg-transparent border-y border-white/10" : (isGold ? "bg-[#F5A623]" : "bg-primary");
        const bridgeText = isWireframe ? (isGold ? "text-[#F5A623]" : "text-primary") : "text-[#0F172A]";
        const glassBg = isObsidian ? "bg-black/40" : (isApple ? "bg-white/65" : "bg-white/10");
        const textMain = isObsidian ? "text-white" : "text-[#0F172A]";
        const textSub = isObsidian ? "text-white/60" : "text-zinc-600";

        return (
            <div className={cn(
                "max-w-5xl w-full p-10 md:p-14 rounded-[3.5rem] border backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-700",
                glassBg,
                isObsidian ? "border-white/10" : "border-white/20"
            )}>
                {/* Top Rim Light */}
                <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: themeColor }} />
                
                <div className="space-y-10 md:space-y-14">
                    <div className="space-y-4">
                        <Badge variant="outline" className={cn(
                            "text-[10px] font-black uppercase tracking-[0.5em] px-6 py-1.5 rounded-full bg-white/5",
                            isObsidian ? "text-white/40 border-white/10" : "text-zinc-400 border-zinc-200/20"
                        )}>
                            INSTITUTIONAL OPERATING STANDARD
                        </Badge>
                        <h1 className={cn(
                            "text-5xl md:text-7xl font-black font-headline leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm",
                            textMain
                        )}>
                            {HEADLINE}
                        </h1>
                    </div>
                    
                    <div className={cn("py-5 -mx-14 px-14 shadow-inner border-y border-black/5", bridgeBg)}>
                        <p className={cn("text-lg md:text-2xl font-black uppercase tracking-[0.15em] font-headline italic text-center", bridgeText)}>
                            {BRIDGE}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="space-y-2 border-l-2 pl-6" style={{ borderColor: `${themeColor}40` }}>
                                <h4 className={cn("text-base md:text-lg font-black uppercase italic leading-tight", textMain)}>{f.title}</h4>
                                <p className={cn("text-xs md:text-sm font-bold italic", textSub)}>{f.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className={cn("pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-10", isObsidian ? "border-white/10" : "border-black/5")}>
                        <div className="space-y-5 max-w-md text-left w-full">
                            <div className="flex flex-wrap gap-4">
                                {TRUST_POINTS.map(tp => (
                                    <span key={tp} className="text-[10px] font-black flex items-center gap-1.5 tracking-widest italic" style={{ color: themeColor }}>
                                        <Check className="w-3.5 h-3.5 stroke-[4px]" /> {tp}
                                    </span>
                                ))}
                            </div>
                            <div className="border-l-4 pl-6" style={{ borderColor: themeColor }}>
                                <p className={cn("text-sm md:text-base font-bold italic leading-relaxed", textMain)}>
                                    {VALUE_LINE}
                                </p>
                            </div>
                        </div>
                        <Button 
                            size="lg" 
                            className="h-20 px-12 rounded-2xl text-black font-black uppercase italic text-sm md:text-base tracking-widest hover:scale-105 transition-all shadow-2xl border-none shrink-0"
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
                    <span className="text-[8px] font-black text-center text-white/20 uppercase tracking-widest pb-1 border-b border-white/5 mb-1">SOVEREIGN V131</span>
                    {[1, 2, 3, 4, 5].map((id) => (
                        <button 
                            key={id} 
                            onClick={() => setArchetypeId(id)}
                            className={cn(
                                "w-12 h-12 rounded-xl font-black text-xs transition-all font-headline",
                                archetypeId === id 
                                    ? (id === 2 ? "bg-[#F5A623] text-black" : "bg-primary text-black") 
                                    : "hover:bg-white/5 text-white/40"
                            )}
                        >
                            0{id}
                        </button>
                    ))}
                </div>

                {/* --- HERO SECTION --- */}
                <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                    <StaticVideo />
                    
                    <div className="container relative z-20 flex h-full px-6 md:px-24 mx-auto items-center justify-center">
                        <div className="w-full flex justify-center translate-y-[-5%]">
                            {renderLayout()}
                        </div>
                    </div>
                </section>

                {/* STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-5 px-6 md:px-12 border-t bg-black border-white/5">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-primary shadow-[0_0_10px_rgba(46,184,107,0.8)]" />
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em] italic font-headline">
                                    SOVEREIGN_COMMAND_OS_ACTIVE
                                </span>
                            </div>
                            <div className="hidden sm:block h-4 w-px bg-white/10 mx-2" />
                            <span className="hidden sm:block text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic font-headline">
                                SYSTEM_STATUS: ARCHETYPE_0{archetypeId} // STABLE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-12 text-[9px] font-black uppercase tracking-[0.5em] italic text-white/10 font-headline">
                            <span className="flex items-center gap-3"><SearchCheck className="w-4 h-4" /> AUDIT_SHIELD_V131</span>
                            <span className="flex items-center gap-3"><Lock className="w-4 h-4" /> ZERO_SaaS_LOCK_IN</span>
                            <span className="flex items-center gap-3"><Cpu className="w-4 h-4" /> HARDWARE_ACCELERATED</span>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
