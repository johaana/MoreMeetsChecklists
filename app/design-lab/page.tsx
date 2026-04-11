
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    FileSpreadsheet, 
    Lock, 
    GraduationCap,
    Target,
    Zap,
    CheckCircle2,
    Activity,
    SearchCheck,
    ShieldAlert,
    Cpu,
    Scale,
    LayoutGrid,
    ChevronRight,
    Binary,
    Network
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * SOVEREIGN TECHNICAL DOCK v45.0
 * Optimized for: ABSOLUTE CLARITY. Zero truncation.
 * Content: Intellectual Product Briefing.
 */
const TechnicalDock = ({ accentColor, variant = "default" }: { accentColor: string, variant?: "default" | "glass" | "bento" }) => {
    const dataPoints = [
        { label: "ASSET CLASS", val: "INSTITUTIONAL MEMORY", icon: Target },
        { label: "COMPLIANCE", val: "ISO/HACCP READY", icon: ShieldCheck },
        { label: "CORE ENGINE", val: "EXCEL & GOOGLE SHEETS", icon: FileSpreadsheet },
        { label: "DATA SOVEREIGNTY", val: "100% OWNERSHIP", icon: Lock },
        { label: "TRAINING LOGIC", val: "ACTION NOTES", icon: GraduationCap },
        { label: "DEPLOYMENT", val: "< 10 MIN GO-LIVE", icon: Zap }
    ];

    if (variant === "glass") {
        return (
            <div className="max-w-7xl mx-auto backdrop-blur-3xl bg-white/10 border border-white/20 p-2 md:p-4 flex flex-col md:flex-row items-center gap-6 rounded-[2.5rem] md:rounded-full shadow-2xl">
                <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-4 w-full px-6">
                    {dataPoints.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-4 first:border-0">
                                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">{item.label}</span>
                                <div className="flex items-center gap-2">
                                    <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: accentColor }} />
                                    <span className="text-[9px] font-black uppercase italic text-white whitespace-nowrap leading-none">{item.val}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Button className="h-14 md:h-16 px-10 rounded-full font-black uppercase italic text-xs tracking-widest transition-all hover:scale-105 border-none bg-white text-black shrink-0 group/btn">
                    DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto bg-white border border-zinc-200 p-2 md:p-4 flex flex-col md:flex-row items-center gap-6 rounded-[2.5rem] md:rounded-full shadow-2xl">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-4 w-full px-6">
                {dataPoints.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="flex flex-col gap-1 border-l border-zinc-100 pl-4 first:border-0">
                            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">{item.label}</span>
                            <div className="flex items-center gap-2">
                                <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: accentColor }} />
                                <span className="text-[9px] font-black uppercase italic text-zinc-900 whitespace-nowrap leading-none">{item.val}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Button className="h-14 md:h-16 px-10 rounded-full font-black uppercase italic text-xs tracking-widest transition-all hover:scale-105 border-none bg-zinc-950 text-white shrink-0 group/btn">
                DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
        </div>
    );
};

const CommandHero = ({ 
    title,
    accentText,
    subtitle,
    accentColor, 
    badge,
    layout = "centered",
    dockVariant = "default",
    isSplit = false
}: { 
    title: string,
    accentText: string,
    subtitle: string,
    accentColor: string, 
    badge: string,
    layout?: "centered" | "left" | "split",
    dockVariant?: "default" | "glass",
    isSplit?: boolean
}) => (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-black border-b border-white/5">
        {/* RAW BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.2]" />
            {layout === "split" && <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />}
            {layout !== "split" && <div className="absolute inset-0 bg-black/20 z-10" />}
        </div>

        {/* CONTENT LAYER */}
        <div className={cn(
            "relative z-20 flex-1 flex flex-col px-6 md:px-24 pt-20",
            layout === "centered" ? "justify-center items-center text-center" : "justify-center"
        )}>
            <div className={cn("max-w-6xl space-y-8", layout === "centered" && "flex flex-col items-center")}>
                <Badge variant="outline" className={cn(
                    "backdrop-blur-md border-white/50 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-full mb-2 shadow-2xl",
                    layout === "split" ? "bg-zinc-100 text-zinc-400" : "bg-white/10 text-white/60"
                )}>
                    {badge}
                </Badge>
                
                <div className="relative group">
                    {/* RETINA RIM-LIGHTING EFFECT */}
                    <div className="absolute -inset-10 bg-radial-gradient blur-[100px] opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40" style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }} />
                    
                    <h1 className={cn(
                        "text-5xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic relative z-10",
                        layout === "split" ? "text-zinc-950" : "text-white drop-shadow-[0_15px_35px_rgba(0,0,0,1)]"
                    )}>
                        {title} <br />
                        <span style={{ color: accentColor }}>
                            {accentText}
                        </span>
                    </h1>
                </div>
                
                <div className={cn("flex gap-6 pt-4", layout === "centered" ? "justify-center" : "")}>
                    <div className="w-2 rounded-full h-auto self-stretch shadow-2xl" style={{ backgroundColor: accentColor }} />
                    <p className={cn(
                        "text-xl md:text-4xl font-medium italic max-w-2xl leading-[1.1] relative z-10",
                        layout === "split" ? "text-zinc-500" : "text-white/90 drop-shadow-[0_15px_35px_rgba(0,0,0,1)]"
                    )}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* THE TECHNICAL BRIEFING DOCK */}
        <div className="relative z-30 w-full px-6 md:px-24 pb-10 md:pb-16">
            <TechnicalDock accentColor={accentColor} variant={dockVariant} />
        </div>
    </section>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. AZURE MONOLITH - INTELLECTUAL CENTERED */}
                <CommandHero 
                    badge="ARCHETYPE 01: AZURE MONOLITH"
                    title="SOVEREIGN"
                    accentText="ORDER."
                    subtitle="Institutional memory is an asset. Anything else is just luck."
                    accentColor="#38bdf8"
                    layout="centered"
                />

                {/* 02. AZURE RAIL - COMMAND PANEL */}
                <CommandHero 
                    badge="ARCHETYPE 02: AZURE RAIL"
                    title="CAPTURE"
                    accentText="INTELLECT."
                    subtitle="Convert tribal knowledge into permanent organizational infrastructure."
                    accentColor="#38bdf8"
                    layout="left"
                />

                {/* 03. AZURE HUD - REFRACTIVE GLASS */}
                <CommandHero 
                    badge="ARCHETYPE 03: AZURE GLASS HUD"
                    title="ENGINEERED"
                    accentText="CONSISTENCY."
                    subtitle="Consistency is either engineered, or it is non-existent."
                    accentColor="#38bdf8"
                    layout="centered"
                    dockVariant="glass"
                />

                {/* 04. GOLDEN SOVEREIGN - PEAK LUXURY */}
                <CommandHero 
                    badge="ARCHETYPE 04: GOLDEN SOVEREIGN"
                    title="INSTITUTIONAL"
                    accentText="CONTINUITY."
                    subtitle="Ownership of standard is the ultimate operational insurance."
                    accentColor="#fbbf24"
                    layout="centered"
                />

                {/* 05. GOLDEN SPLIT - EXECUTIVE PRESTIGE */}
                <CommandHero 
                    badge="ARCHETYPE 05: PRESTIGE SPLIT"
                    title="OPERATIONAL"
                    accentText="PERMANENCE."
                    subtitle="Build systems that stay when people move on."
                    accentColor="#fbbf24"
                    layout="split"
                />

                {/* 06. GOLDEN COCKPIT - INDUSTRIAL POWER */}
                <CommandHero 
                    badge="ARCHETYPE 06: GOLDEN COCKPIT"
                    title="ASSET"
                    accentText="SOVEREIGNTY."
                    subtitle="100% Data ownership. No SaaS. Total operational control."
                    accentColor="#fbbf24"
                    layout="left"
                    dockVariant="glass"
                />

                {/* TECHNICAL ASSETS SECTION */}
                <section className="py-32 bg-zinc-50 border-t relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-10 mb-24">
                            <Badge variant="outline" className="uppercase tracking-[0.6em] font-black text-[11px] border-zinc-200 text-zinc-400 px-8 py-2 rounded-full bg-white shadow-sm">
                                System Infrastructure
                            </Badge>
                            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-tight">Elite results. <br /> Simple methods.</h2>
                            <p className="text-xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                                We've translated complex global compliance standards into everyday data engines that your team will actually use.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Blue Card */}
                            <div className="p-10 rounded-[3rem] border border-zinc-100 bg-white shadow-xl space-y-10 group transition-all hover:shadow-2xl">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="p-4 rounded-2xl bg-sky-50 text-sky-500 shadow-inner">
                                                <ShieldCheck className="w-8 h-8" />
                                            </div>
                                            <h4 className="text-3xl font-black uppercase italic tracking-tighter font-headline text-zinc-950">Mission Ledger</h4>
                                        </div>
                                        <span className="text-[10px] font-black text-zinc-200 uppercase tracking-widest">BLUE_STANDARD</span>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">TECHNICAL AUDIT</span>
                                            <p className="text-lg font-bold italic text-zinc-900">Digital Execution Tracking & Evidence Logs</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">ACTION STEPS</span>
                                            <p className="text-base text-zinc-500 italic">Assign roles, log tasks, and verify standards in real-time.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full h-14 rounded-2xl bg-sky-500 text-white font-black uppercase italic tracking-widest border-none">
                                    Explore Azure System <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>

                            {/* Gold Card */}
                            <div className="p-10 rounded-[3rem] border border-zinc-100 bg-white shadow-xl space-y-10 group transition-all hover:shadow-2xl">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-5">
                                            <div className="p-4 rounded-2xl bg-amber-50 text-amber-500 shadow-inner">
                                                <CrownIcon className="w-8 h-8" />
                                            </div>
                                            <h4 className="text-3xl font-black uppercase italic tracking-tighter font-headline text-zinc-950">Prestige Vitals</h4>
                                        </div>
                                        <span className="text-[10px] font-black text-zinc-200 uppercase tracking-widest">GOLD_STANDARD</span>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">EXECUTIVE ANALYTICS</span>
                                            <p className="text-lg font-bold italic text-zinc-900">Institutional Memory & Asset Protection</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">ACTION STEPS</span>
                                            <p className="text-base text-zinc-500 italic">Capture tribal knowledge and build a permanent sovereign engine.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full h-14 rounded-2xl bg-amber-500 text-black font-black uppercase italic tracking-widest border-none">
                                    Deploy Gold System <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Fixed Icon Component to avoid constructor errors
function CrownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  )
}
