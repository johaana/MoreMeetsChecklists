
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
    Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

// --- CONFIGURATION: V128.0 THE INDUSTRIAL MANDATE ---
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
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </div>
));
StaticVideo.displayName = 'StaticVideo';

export default function DesignLabPage() {
    const [archetypeId, setArchetypeId] = useState(1); 

    const renderLayout = () => {
        switch (archetypeId) {
            case 2: return <TerminalConsole />;
            case 3: return <ExecutiveMinimal />;
            case 4: return <ModularBento />;
            case 5: return <SidebarCommand />;
            case 6: return <DepthStack />;
            default: return <ClassicHUD />;
        }
    };

    // --- ARCHETYPE 1: CLASSIC HUD ---
    const ClassicHUD = () => (
        <div className="max-w-4xl w-full p-10 md:p-14 rounded-[3rem] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/40" />
            <div className="space-y-10">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 border-white/10 px-6 py-1 rounded-full">
                        INSTITUTIONAL OPERATING STANDARD
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black font-headline text-white leading-[0.85] tracking-tighter uppercase italic drop-shadow-2xl">
                        {HEADLINE}
                    </h1>
                </div>
                
                <div className="bg-primary py-4 -mx-14 px-14 border-y border-white/10 shadow-xl">
                    <p className="text-lg md:text-xl font-black uppercase tracking-[0.2em] font-headline italic text-black text-center">
                        {BRIDGE}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="space-y-2">
                            <h4 className="text-sm md:text-base font-black text-white uppercase italic leading-tight">{f.title}</h4>
                            <p className="text-xs font-bold text-white/60 italic">{f.text}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/10 space-y-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {TRUST_POINTS.map(tp => (
                            <span key={tp} className="text-[10px] font-black text-primary flex items-center gap-2 tracking-widest italic">
                                <CheckCircle2 className="w-3.5 h-3.5" /> {tp}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <p className="text-sm font-bold text-white/60 italic border-l-4 border-primary pl-6 max-w-sm">
                            {VALUE_LINE}
                        </p>
                        <Button size="lg" className="h-20 px-12 rounded-2xl bg-primary text-black font-black uppercase italic text-sm tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(46,184,107,0.4)] border-none">
                            DEPLOY YOUR SYSTEM → ₹999
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 2: TERMINAL CONSOLE ---
    const TerminalConsole = () => (
        <div className="max-w-5xl w-full bg-black/80 backdrop-blur-md border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_50px_-10px_rgba(46,184,107,0.2)]">
            <div className="bg-primary/10 px-6 py-2 border-b border-primary/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-black">SOVEREIGN_TERMINAL_V128 // STABLE</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary/20" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
            </div>
            <div className="p-12 space-y-12">
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-[5.5rem] font-black font-headline text-white leading-none tracking-tighter uppercase italic">
                        {HEADLINE}
                    </h1>
                    <div className="inline-block px-6 py-2 bg-primary text-black text-sm font-black uppercase italic tracking-widest">
                        {BRIDGE}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/20 border border-primary/20">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="bg-black p-10 space-y-3 group hover:bg-primary/5 transition-colors">
                            <h4 className="text-xl font-black text-white uppercase italic leading-tight">{f.title}</h4>
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">{f.text}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
                    <div className="space-y-4">
                        <p className="text-xs font-mono text-primary/60 max-w-xs">{VALUE_LINE}</p>
                        <div className="flex gap-6">
                            {TRUST_POINTS.map(tp => (
                                <span key={tp} className="text-[10px] font-mono text-primary flex items-center gap-3">
                                    <div className="w-1 h-1 bg-primary" /> {tp}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Button className="h-24 px-16 rounded-none bg-primary text-black font-black uppercase italic text-xl tracking-widest hover:brightness-110 transition-all border-l-8 border-b-8 border-black/20 shadow-2xl border-none">
                        EXECUTE DEPLOYMENT →
                    </Button>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 3: EXECUTIVE MINIMAL ---
    const ExecutiveMinimal = () => (
        <div className="max-w-4xl w-full p-16 rounded-[4rem] bg-white/95 backdrop-blur-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] text-center space-y-12">
            <div className="space-y-6">
                <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400 border-zinc-200 px-10 py-2 rounded-full">
                    ESTABLISHED 2025
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black font-headline text-zinc-900 leading-[0.9] tracking-tighter uppercase italic">
                    {HEADLINE}
                </h1>
                <p className="text-xl md:text-2xl font-black text-primary italic uppercase tracking-widest pt-4">
                    {BRIDGE}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-12 py-10 border-y border-zinc-100">
                {FEATURES.map((f, i) => (
                    <div key={i} className="space-y-3 text-center">
                        <h4 className="text-sm font-black text-zinc-900 uppercase leading-tight">{f.title}</h4>
                        <p className="text-[10px] text-zinc-400 font-bold italic tracking-wide">{f.text}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-10">
                <p className="text-zinc-500 font-medium italic max-w-xl mx-auto">{VALUE_LINE}</p>
                <div className="flex justify-center gap-10">
                    {TRUST_POINTS.map(tp => (
                        <span key={tp} className="text-[9px] font-black text-zinc-300 tracking-[0.4em] uppercase">{tp}</span>
                    ))}
                </div>
                <Button size="lg" className="h-24 px-20 rounded-full bg-zinc-950 text-white font-black uppercase italic text-lg tracking-widest hover:scale-105 transition-all shadow-2xl border-none">
                    DEPLOY YOUR SYSTEM → ₹999
                </Button>
            </div>
        </div>
    );

    // --- ARCHETYPE 4: MODULAR BENTO ---
    const ModularBento = () => (
        <div className="max-w-6xl w-full grid grid-cols-12 gap-4 auto-rows-[140px]">
            {/* Main Hook Tile */}
            <div className="col-span-8 row-span-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-12 flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-primary text-black font-black uppercase tracking-widest text-[10px] px-6">SOVEREIGN V128</Badge>
                <h1 className="text-6xl md:text-[5.5rem] font-black font-headline text-white leading-[0.8] tracking-tighter uppercase italic">
                    {HEADLINE}
                </h1>
                <p className="text-2xl font-bold text-primary italic uppercase tracking-widest">{BRIDGE}</p>
            </div>
            {/* Feature Tiles */}
            {FEATURES.map((f, i) => (
                <div key={i} className="col-span-4 row-span-1 bg-black/40 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center space-y-1 group hover:border-primary/40 transition-all">
                    <h4 className="text-sm font-black text-white uppercase italic leading-tight group-hover:text-primary transition-colors">{f.title}</h4>
                    <p className="text-[10px] font-bold text-white/40 uppercase italic tracking-tighter">{f.text}</p>
                </div>
            ))}
            {/* Proof Tile */}
            <div className="col-span-4 row-span-2 bg-primary rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl shadow-primary/20">
                <div className="space-y-6">
                    {TRUST_POINTS.map(tp => (
                        <div key={tp} className="flex items-center gap-4 text-black">
                            <Check className="w-4 h-4 text-black stroke-[4px]" />
                            <span className="text-[11px] font-black uppercase tracking-widest">{tp}</span>
                        </div>
                    ))}
                </div>
                <Activity className="w-16 h-16 text-black/10" />
            </div>
            {/* CTA Tile */}
            <div className="col-span-8 row-span-2 bg-zinc-900 border border-white/10 rounded-[3rem] p-12 flex items-center justify-between group cursor-pointer hover:bg-zinc-800 transition-all">
                <div className="space-y-4">
                    <p className="text-2xl font-black text-white italic uppercase tracking-tighter">Ready to take control?</p>
                    <p className="text-sm text-zinc-500 font-bold italic max-w-sm">{VALUE_LINE}</p>
                </div>
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)]">
                    <ArrowRight className="w-10 h-10" />
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 5: SIDEBAR COMMAND ---
    const SidebarCommand = () => (
        <div className="max-w-6xl w-full flex bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl">
            <div className="w-[38%] bg-primary p-16 flex flex-col justify-between border-r border-white/10">
                <div className="space-y-12">
                    <Badge className="bg-black text-white font-black uppercase tracking-widest text-[11px] py-2 px-6 rounded-none">MANDATE_01</Badge>
                    <h1 className="text-6xl font-black font-headline text-black leading-[0.85] tracking-tighter uppercase italic">
                        {HEADLINE}
                    </h1>
                </div>
                <div className="p-8 bg-black rounded-[2rem] shadow-2xl">
                    <p className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-6 font-headline">SYSTEM VITALS</p>
                    <div className="space-y-4">
                        {TRUST_POINTS.map(tp => (
                            <div key={tp} className="flex items-center gap-4">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">{tp}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-1 p-20 flex flex-col justify-center space-y-16 bg-black/20">
                <p className="text-4xl font-black text-white italic uppercase tracking-tighter leading-tight border-l-8 border-primary pl-12 max-w-lg">
                    {BRIDGE}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-12">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="space-y-2">
                            <h4 className="text-xl font-black text-white uppercase italic leading-tight">{f.title}</h4>
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">{f.text}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-8 pl-12 space-y-8">
                    <p className="text-sm text-white/40 italic font-medium max-w-sm">{VALUE_LINE}</p>
                    <Button size="lg" className="h-24 px-16 rounded-3xl bg-primary text-black font-black uppercase italic text-xl tracking-widest hover:scale-105 transition-all shadow-[0_30px_60px_-15px_rgba(46,184,107,0.5)] border-none">
                        DEPLOY SYSTEM NOW →
                    </Button>
                </div>
            </div>
        </div>
    );

    // --- ARCHETYPE 6: DEPTH STACK ---
    const DepthStack = () => (
        <div className="relative w-full max-w-4xl h-[650px] flex items-center justify-center">
            {/* Background Panel */}
            <div className="absolute top-0 left-0 w-[95%] h-[85%] bg-white/5 backdrop-blur-md border border-white/10 rounded-[4rem] -rotate-3" />
            {/* Mid Panel */}
            <div className="absolute bottom-0 right-0 w-[98%] h-[90%] bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-[4rem] rotate-2" />
            {/* Main Command Panel */}
            <div className="relative z-10 w-full p-16 rounded-[4.5rem] bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl space-y-12">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.6em] font-black text-[11px] px-8 py-2 rounded-full bg-primary/5">SOVEREIGN ENGINE</Badge>
                    <h1 className="text-7xl md:text-[6.5rem] font-black font-headline text-white leading-[0.8] tracking-tighter uppercase italic drop-shadow-2xl">
                        {HEADLINE}
                    </h1>
                </div>
                
                <div className="flex gap-16 items-center">
                    <div className="flex-1 space-y-10">
                        <p className="text-2xl font-black text-white italic uppercase tracking-widest leading-tight border-l-4 border-primary pl-8">{BRIDGE}</p>
                        <div className="space-y-4">
                            <p className="text-sm text-white/60 font-bold italic">{VALUE_LINE}</p>
                            <div className="flex gap-10">
                                {TRUST_POINTS.map(tp => (
                                    <span key={tp} className="text-[9px] font-black text-primary uppercase tracking-widest">{tp}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Button size="lg" className="h-32 w-32 rounded-full bg-primary text-black flex flex-col items-center justify-center hover:scale-110 transition-all shadow-[0_0_70px_rgba(46,184,107,0.6)] border-none group">
                        <span className="text-[10px] font-black uppercase tracking-widest mb-1">DEPLOY</span>
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
                    <span className="text-[8px] font-black text-center text-white/20 uppercase tracking-widest pb-1 border-b border-white/5 mb-1">ARCHITECT V128</span>
                    {[1, 2, 3, 4, 5, 6].map((id) => (
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
                            <span className="flex items-center gap-3"><SearchCheck className="w-4 h-4" /> AUDIT_SHIELD_V128</span>
                            <span className="flex items-center gap-3"><Lock className="w-4 h-4" /> ZERO_SaaS_LOCK_IN</span>
                            <span className="flex items-center gap-3"><Cpu className="w-4 h-4" /> 60FPS_CORE_RESTORED</span>
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
