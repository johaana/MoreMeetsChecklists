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
    Hospital,
    Utensils
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * SOVEREIGN INTELLIGENCE DOCK
 * A high-density data strip that explains the product depth surgically.
 */
const TechnicalDock = ({ accentColor, variant = 1 }: { accentColor: string, variant?: number }) => {
    const dataPoints = [
        { label: "ASSET CLASS", val: "Institutional Memory", icon: Target },
        { label: "COMPLIANCE", val: "ISO/HACCP Ready", icon: ShieldCheck },
        { label: "CORE ENGINE", val: "Excel & Google Sheets", icon: FileSpreadsheet },
        { label: "OWNERSHIP", val: "100% Data Sovereignty", icon: Lock },
        { label: "TRAINING", val: "Built-in Action Notes", icon: GraduationCap },
        { label: "DEPLOYMENT", val: "< 10 Min Go-Live", icon: Zap }
    ];

    if (variant === 4) { // Bento Style for variant 4
        return (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 2, 4].map((idx) => {
                    const PointIcon = dataPoints[idx].icon;
                    return (
                        <div key={idx} className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
                            <div className="flex items-center gap-3 border-b border-zinc-100 pb-3">
                                <PointIcon className="w-5 h-5" style={{ color: accentColor }} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{dataPoints[idx].label}</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-black text-zinc-900 uppercase italic">{dataPoints[idx].val}</p>
                                <p className="text-[9px] text-zinc-400 font-bold uppercase italic">Sovereign Standard</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={cn(
            "max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white p-4 flex flex-col md:flex-row items-center gap-8 md:gap-4 ring-1 ring-black/5",
            variant === 6 ? "rounded-full px-12" : "rounded-[2.5rem] md:rounded-[4rem]"
        )}>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-4 px-6">
                {dataPoints.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                        <div key={i} className="flex flex-col gap-1 border-l border-zinc-100 pl-4 first:border-0">
                            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400">{item.label}</span>
                            <div className="flex items-center gap-2">
                                <ItemIcon className="w-3.5 h-3.5 shrink-0" style={{ color: accentColor }} />
                                <span className="text-[10px] font-black uppercase italic text-zinc-900 leading-none truncate">{item.val}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Button 
                className="h-16 px-12 rounded-full font-black uppercase italic text-sm tracking-widest shadow-2xl transition-all hover:scale-105 border-none bg-zinc-950 text-white shrink-0"
            >
                DEPLOY NOW: ₹999 <ArrowRight className="ml-2 h-4 w-4" />
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
    variant = 1,
    bgUrl = VIDEO_URL,
    gradientClass
}: { 
    title: string, 
    accentText: string, 
    subtitle: string, 
    accentColor: string, 
    badge: string,
    variant?: number,
    bgUrl?: string,
    gradientClass?: string
}) => (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-zinc-900 border-b">
        {/* RAW BACKGROUND (UNFILTERED) */}
        <div className="absolute inset-0 z-0">
            <video src={bgUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>

        {/* CONTENT LAYER */}
        <div className={cn(
            "relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 pt-20",
            variant === 6 && "items-center text-center"
        )}>
            <div className={cn("max-w-6xl space-y-4", variant === 6 && "flex flex-col items-center")}>
                <Badge variant="outline" className="bg-white/90 backdrop-blur-md text-zinc-500 border-white/50 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-full mb-4 shadow-xl">
                    {badge}
                </Badge>
                
                <h1 className="text-5xl md:text-[8.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                    {title} <br />
                    <span className={cn(gradientClass ? "bg-gradient-to-r bg-clip-text text-transparent" : "")} style={gradientClass ? {} : { color: accentColor }}>
                        {accentText}
                    </span>
                </h1>
                
                <div className={cn("flex gap-6 pt-4", variant === 6 && "justify-center")}>
                    <div className="w-1.5 bg-white/20 rounded-full h-auto self-stretch shadow-lg" style={{ backgroundColor: accentColor + '40' }} />
                    <p className="text-xl md:text-3xl text-white font-medium italic max-w-2xl drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] opacity-95 leading-tight">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* THE TECHNICAL BRIEFING DOCK */}
        <div className="relative z-20 w-full px-6 md:px-20 pb-10 md:pb-16">
            <TechnicalDock accentColor={accentColor} variant={variant} />
        </div>
    </section>
);

const TaskCard = ({ title, audit, action, risk, color, icon: Icon }: any) => (
    <div className="p-10 rounded-[3rem] border border-zinc-100 bg-white shadow-xl shadow-zinc-900/5 space-y-10 hover:shadow-2xl transition-all group relative overflow-hidden">
        <div className="space-y-8 relative z-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className="p-4 rounded-2xl bg-zinc-50 shadow-inner" style={{ color: color }}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-3xl font-black uppercase italic tracking-tighter font-headline leading-none text-zinc-950">{title}</h4>
                </div>
                <span className="text-[10px] font-black text-zinc-200 uppercase tracking-widest">TECHNICAL_ASSET</span>
            </div>
            
            <div className="space-y-8">
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300">TECHNICAL AUDIT</span>
                    <p className="text-xl font-bold italic leading-tight text-zinc-950">{audit}</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300">ACTION STEPS</span>
                    <p className="text-lg font-medium italic text-zinc-500 leading-relaxed">{action}</p>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-zinc-50 relative z-10">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.4em]">RISK</span>
                    <p className="text-sm text-red-500 font-bold uppercase italic">{risk}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-200 group-hover:text-emerald-500 transition-colors shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    const SHARED_SUBTITLE = "Institutional memory is an asset. Anything else is just luck.";

    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. PINK SUCCESS */}
                <CommandHero 
                    variant={1}
                    badge="ARCHETYPE 01: PINK SUCCESS"
                    title="CAPTURE"
                    accentText="MEMORY."
                    accentColor="#f472b6"
                    gradientClass="from-pink-400 to-violet-500"
                    subtitle={SHARED_SUBTITLE}
                />

                {/* 02. AZURE ORDER */}
                <CommandHero 
                    variant={2}
                    badge="ARCHETYPE 02: PURE ORDER"
                    title="DEPLOY"
                    accentText="STRUCTURE."
                    accentColor="#38bdf8"
                    gradientClass="from-sky-400 to-blue-600"
                    subtitle="Because memory is not a system. Serious operations deserve more."
                />

                {/* 03. EXCEL EXECUTIVE */}
                <CommandHero 
                    variant={3}
                    badge="ARCHETYPE 03: EXCEL EXECUTIVE"
                    title="STANDARDIZE"
                    accentText="EVERYTHING."
                    accentColor="#217346"
                    gradientClass="from-emerald-500 to-teal-700"
                    subtitle="The definitive institutional standard. Trust built on Excel architecture."
                />

                {/* 04. MINT MOMENTUM */}
                <CommandHero 
                    variant={4}
                    badge="ARCHETYPE 04: MINT FLOW"
                    title="BETTER DAYS,"
                    accentText="BUILT-IN."
                    accentColor="#34d399"
                    gradientClass="from-mint-400 to-emerald-500"
                    subtitle="We've made elite standards simple enough for everyone. Clarity for your team."
                />

                {/* 05. ELECTRIC ORCHID */}
                <CommandHero 
                    variant={5}
                    badge="ARCHETYPE 05: CREATIVE PULSE"
                    title="OPERATE"
                    accentText="SMARTER."
                    accentColor="#a855f7"
                    gradientClass="from-purple-400 to-indigo-600"
                    subtitle="Remove the human variable from high-stakes operations. Innovation focused."
                />

                {/* 06. PRESTIGE GOLD */}
                <CommandHero 
                    variant={6}
                    badge="ARCHETYPE 06: GOLDEN SOVEREIGN"
                    title="ELITE"
                    accentText="STANDARDS."
                    accentColor="#fbbf24"
                    gradientClass="from-amber-400 to-orange-600"
                    subtitle="The benchmark for high-net-worth operational control. Sophisticated depth."
                />

                {/* TECHNICAL COMPONENTS SECTION */}
                <section className="py-32 bg-zinc-50 border-t relative overflow-hidden">
                    {/* Blueprint Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    <div className="container px-6 mx-auto relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-10 mb-24">
                            <Badge variant="outline" className="uppercase tracking-[0.6em] font-black text-[11px] border-zinc-200 text-zinc-400 px-8 py-2 rounded-full bg-white shadow-sm">
                                The Infrastructure
                            </Badge>
                            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase italic tracking-tighter text-zinc-950 leading-tight">Expert results. <br /> Simple methods.</h2>
                            <p className="text-xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                                We've translated complex global compliance standards into everyday checklists that your team will actually enjoy using.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <TaskCard 
                                color="#38bdf8"
                                icon={Hospital}
                                title="Crash Cart"
                                audit="Life-Support Readiness (NABH)"
                                action="Verify crash cart seal integrity and O2 cylinder level."
                                risk="Rescue failure during cardiac arrest."
                            />
                            <TaskCard 
                                color="#217346"
                                icon={Utensils}
                                title="Cold Chain"
                                audit="Thermal Audit (HACCP)"
                                action="Check and log fridge temps: must be between 1°C and 4°C."
                                risk="Stock spoilage and safety fines."
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
