
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
    Lock,
    Terminal,
    LayoutGrid,
    Maximize2,
    Check,
    ClipboardCheck,
    Clock,
    Zap,
    Cpu,
    Smartphone,
    GraduationCap,
    ChevronRight,
    Play
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
            preload="auto"
            className="w-full h-full object-cover opacity-70 grayscale-[0.1]" 
        />
        {/* Intelligence Mask - High Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1); 

    const renderLayout = () => {
        switch (archetypeId) {
            case 2: return <CommandPillar />;
            case 3: return <BlueprintOverlay />;
            case 4: return <StrategicSidebar />;
            case 5: return <InstitutionalStack />;
            default: return <IntegratedSlab />;
        }
    };

    // --- ARCHETYPE 1: THE INTEGRATED SLAB (Refined 1) ---
    const IntegratedSlab = () => (
        <div className="max-w-5xl w-full p-10 md:p-12 rounded-[3.5rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
            <div className="space-y-10">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 border-zinc-200/20 px-6 py-1.5 rounded-full bg-white/5">
                        INSTITUTIONAL OPERATING STANDARD
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black font-headline text-[#0F172A] leading-[0.85] tracking-tighter uppercase italic">
                        {HEADLINE}
                    </h1>
                </div>
                
                <div className="bg-primary py-4 -mx-12 px-12 border-y border-black/5 shadow-inner">
                    <p className="text-lg md:text-xl font-black uppercase tracking-[0.15em] font-headline italic text-black text-center">
                        {BRIDGE}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-12">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="space-y-2 border-l-2 border-primary/20 pl-6">
                            <h4 className="text-base font-black text-[#0F172A] uppercase italic leading-tight">{f.title}</h4>
                            <p className="text-xs font-bold text-zinc-600 italic">{f.text}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 max-w-sm">
                        <div className="flex gap-4">
                            {TRUST_POINTS.map(tp => (
                                <span key={tp} className="text-[9px] font-black text-primary flex items-center gap-1.5 tracking-widest italic">
                                    <Check className="w-3 h-3 stroke-[4px]" /> {tp}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm font-bold text-zinc-500 italic leading-relaxed">
                            {VALUE_LINE}
                        </p>
                    </div>
                    <Button size="lg" className="h-20 px-12 rounded-2xl bg-primary text-black font-black uppercase italic text-sm tracking-widest hover:scale-105 transition-all shadow-xl border-none">
                        DEPLOY YOUR SYSTEM → ₹999
                    </Button>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 2: THE COMMAND PILLAR (New Creation) ---
    const CommandPillar = () => (
        <div className="w-full max-w-7xl grid grid-cols-[450px,1fr] items-center gap-20">
            <div className="bg-white p-12 rounded-[4rem] shadow-2xl space-y-12 border border-zinc-200">
                <div className="space-y-6">
                    <div className="w-12 h-1 bg-primary" />
                    <h1 className="text-5xl font-black font-headline text-[#0F172A] leading-none tracking-tighter uppercase italic">
                        {HEADLINE}
                    </h1>
                    <p className="text-base font-black text-primary uppercase italic tracking-widest leading-tight border-l-4 border-primary pl-6">
                        {BRIDGE}
                    </p>
                </div>

                <div className="space-y-8">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-primary font-black text-xs shrink-0 group-hover:bg-primary group-hover:text-black transition-all">0{i+1}</div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-black text-[#0F172A] uppercase italic">{f.title}</h4>
                                <p className="text-xs text-zinc-400 font-bold italic">{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-zinc-100 space-y-6">
                    <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">{VALUE_LINE}</p>
                    <Button className="w-full h-16 rounded-xl bg-primary text-black font-black uppercase italic text-xs tracking-widest border-none">
                        DEPLOY YOUR SYSTEM →
                    </Button>
                </div>
            </div>
            
            <div className="space-y-6 hidden md:block">
                <div className="p-8 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 w-fit">
                    <div className="flex items-center gap-4 text-primary">
                        <Activity className="w-6 h-6 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] italic text-white">LIVE_OPERATIONAL_FEED_ACTIVE</span>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 3: THE BLUEPRINT OVERLAY (New Creation) ---
    const BlueprintOverlay = () => (
        <div className="max-w-6xl w-full space-y-12">
            <div className="text-center space-y-6">
                <h1 className="text-7xl md:text-[9rem] font-black font-headline text-white leading-none tracking-tighter uppercase italic drop-shadow-2xl">
                    {HEADLINE}
                </h1>
                <div className="inline-block px-10 py-3 bg-primary text-black text-xl font-black uppercase italic tracking-[0.2em] shadow-2xl">
                    {BRIDGE}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FEATURES.map((f, i) => (
                    <div key={i} className="bg-black/60 backdrop-blur-md p-10 border border-white/10 rounded-2xl space-y-4 group hover:border-primary/40 transition-all">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-primary">SYS_MNDT_0{i+1}</span>
                            <Zap className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black text-white uppercase italic leading-tight">{f.title}</h4>
                            <p className="text-xs text-white/40 font-bold italic">{f.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-8">
                    <div className="flex gap-4">
                        {TRUST_POINTS.map(tp => (
                            <div key={tp} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">{tp}</span>
                            </div>
                        ))}
                    </div>
                    <Separator orientation="vertical" className="h-8 bg-zinc-200" />
                    <p className="text-[11px] font-bold text-zinc-400 italic max-w-xs">{VALUE_LINE}</p>
                </div>
                <Button className="h-16 px-12 rounded-xl bg-zinc-950 text-white font-black uppercase italic text-xs tracking-widest hover:scale-105 transition-all border-none">
                    DEPLOY SYSTEM → ₹999
                </Button>
            </div>
        </div>
    );

    // --- ARCHETYPE 4: STRATEGIC SIDEBAR (Refined 5) ---
    const StrategicSidebar = () => (
        <div className="max-w-6xl w-full flex bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-zinc-200 h-[600px]">
            <div className="w-[45%] bg-[#0F172A] p-16 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)]" />
                <div className="space-y-8 relative z-10">
                    <Badge className="bg-primary text-black font-black uppercase tracking-widest text-[10px] py-1.5 px-6 rounded-full">THE MANDATE</Badge>
                    <h1 className="text-6xl font-black font-headline text-white leading-[0.85] tracking-tighter uppercase italic">
                        {HEADLINE}
                    </h1>
                    <p className="text-xl font-bold text-primary italic uppercase tracking-tighter leading-tight border-l-4 border-primary pl-8">
                        {BRIDGE}
                    </p>
                </div>
                <div className="pt-8 border-t border-white/10">
                    <Button size="lg" className="w-full h-20 rounded-2xl bg-primary text-black font-black uppercase italic text-lg tracking-widest hover:scale-105 transition-all border-none">
                        DEPLOY NOW
                    </Button>
                </div>
            </div>
            <div className="flex-1 p-16 flex flex-col justify-center space-y-12 bg-zinc-50 relative">
                <div className="space-y-8">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="flex gap-6 items-center">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0F172A] shadow-sm">
                                <Activity className="w-5 h-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-lg font-black text-[#0F172A] uppercase italic leading-none">{f.title}</h4>
                                <p className="text-sm text-zinc-400 font-bold italic">{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-8 border-t border-zinc-200">
                    <div className="flex flex-wrap gap-6 mb-6">
                        {TRUST_POINTS.map(tp => (
                            <span key={tp} className="text-[9px] font-black text-zinc-400 tracking-widest uppercase flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3 text-primary" /> {tp}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs font-bold text-zinc-400 italic leading-relaxed border-l-2 border-zinc-200 pl-6">{VALUE_LINE}</p>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 5: INSTITUTIONAL STACK (Refined 6) ---
    const InstitutionalStack = () => (
        <div className="relative w-full max-w-4xl h-[650px] flex items-center justify-center">
            {/* Structural Layers */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[4rem] translate-y-4 translate-x-4" />
            
            {/* Main Command Panel */}
            <div className="relative z-10 w-full p-12 md:p-16 rounded-[4.5rem] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] space-y-12 border border-zinc-200">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-6 flex-1">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.6em] font-black text-[11px] px-8 py-2 rounded-full bg-primary/5">SOVEREIGN ENGINE</Badge>
                        <h1 className="text-6xl md:text-[5.5rem] font-black font-headline text-[#0F172A] leading-[0.8] tracking-tighter uppercase italic">
                            {HEADLINE}
                        </h1>
                    </div>
                    <div className="w-32 h-32 rounded-full bg-primary flex flex-col items-center justify-center text-black shadow-2xl hover:scale-110 transition-all cursor-pointer group">
                        <Smartphone className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                        <span className="text-[8px] font-black mt-1">MOBILE READY</span>
                    </div>
                </div>
                
                <div className="p-8 bg-zinc-950 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <p className="text-xl font-black text-primary italic uppercase tracking-widest leading-tight">{BRIDGE}</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {FEATURES.slice(0, 2).map((f, i) => (
                                <div key={i} className="space-y-1">
                                    <h4 className="text-[11px] font-black text-white uppercase italic">{f.title}</h4>
                                    <p className="text-[9px] text-zinc-500 font-bold italic">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button size="lg" className="h-20 px-12 rounded-2xl bg-primary text-black font-black uppercase italic text-sm tracking-widest shadow-xl border-none">
                        DEPLOY SYSTEM → ₹999
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-10 pt-4">
                    {TRUST_POINTS.map(tp => (
                        <span key={tp} className="text-[9px] font-black text-zinc-300 tracking-[0.4em] uppercase">{tp}</span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 overflow-hidden font-body bg-black">
            <SiteHeader />

            <main className="flex-1 relative">
                {/* ARCHETYPE SELECTOR */}
                <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                    <span className="text-[8px] font-black text-center text-white/20 uppercase tracking-widest pb-1 border-b border-white/5 mb-1">ARCHITECT V130</span>
                    {[1, 2, 3, 4, 5].map((id) => (
                        <button 
                            key={id} 
                            onClick={() => setArchetypeId(id)}
                            className={cn(
                                "w-12 h-12 rounded-xl font-black text-xs transition-all font-headline",
                                archetypeId === id ? "bg-primary text-black shadow-lg" : "hover:bg-white/5 text-white/40"
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

                {/* ABSOLUTE STATIONARY STATUS STRIP */}
                <div className="relative z-40 w-full py-5 px-6 md:px-12 border-t bg-black border-white/5">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-primary shadow-[0_0_10px_rgba(46,184,107,0.8)]" />
                                <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em] italic font-headline">
                                    SOVEREIGN_COMMAND_OS_ACTIVE
                                </span>
                            </div>
                            <Separator orientation="vertical" className="h-4 bg-white/10" />
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic font-headline">
                                SYSTEM_STATUS: ARCHETYPE_0{archetypeId} // STABLE
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-12 text-[9px] font-black uppercase tracking-[0.5em] italic text-white/10 font-headline">
                            <span className="flex items-center gap-3"><SearchCheck className="w-4 h-4" /> AUDIT_SHIELD_V130</span>
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

const Separator = ({ className, orientation = 'horizontal' }: { className?: string, orientation?: 'horizontal' | 'vertical' }) => (
    <div className={cn(
        "bg-border shrink-0",
        orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]",
        className
    )} />
);
