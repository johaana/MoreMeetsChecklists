'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Zap,
    Activity,
    ClipboardCheck,
    CheckCircle2,
    Shield,
    Clock,
    LayoutGrid,
    SearchCheck,
    ShieldAlert,
    Smartphone,
    Download,
    Utensils,
    Hospital,
    School,
    Popcorn
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * SOVEREIGN COMMAND HERO
 * Re-implemented based on the user's favorite "Design Success" screenshot.
 * Features: Bottom-aligned White Command Dock, Aggressive Italic Typography, Deep Text Shadows.
 */
const CommandHero = ({ 
    title, 
    accentText, 
    subtitle, 
    accentColor, 
    badge,
    bgType = 'video',
    bgUrl = VIDEO_URL
}: { 
    title: string, 
    accentText: string, 
    subtitle: string, 
    accentColor: string, 
    badge: string,
    bgType?: 'video' | 'image',
    bgUrl?: string
}) => (
    <section className="relative w-full h-[90vh] md:h-screen flex flex-col overflow-hidden bg-zinc-900 border-b">
        {/* RAW BACKGROUND (NO FILTERS AS REQUESTED) */}
        <div className="absolute inset-0 z-0">
            {bgType === 'video' ? (
                <video src={bgUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
                <img src={bgUrl} alt="Premium Backdrop" className="w-full h-full object-cover" />
            )}
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 pt-20">
            <div className="max-w-6xl space-y-4">
                <Badge variant="outline" className="bg-white/90 backdrop-blur-md text-zinc-500 border-white/50 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-full mb-4 shadow-xl">
                    {badge}
                </Badge>
                
                {/* HIGH-GRAVITY TYPOGRAPHY WITH OCULAR SHADOWS */}
                <h1 className="text-5xl md:text-[8rem] font-black font-headline tracking-tighter leading-[0.85] uppercase italic text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
                    {title} <br />
                    <span style={{ color: accentColor }}>{accentText}</span>
                </h1>
                
                <p className="text-xl md:text-3xl text-white font-medium italic max-w-2xl pt-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] opacity-90">
                    {subtitle}
                </p>
            </div>
        </div>

        {/* THE COMMAND DOCK (AS PER SCREENSHOT) */}
        <div className="relative z-20 w-full px-6 md:px-20 pb-10 md:pb-16">
            <div className="max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 ring-1 ring-black/5">
                <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 px-6">
                    {[
                        { t: "120+ SOPS", i: ClipboardCheck },
                        { t: "AUDIT READY", i: Shield },
                        { t: "LIVE LOGS", i: Activity }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                            <item.i className="w-5 h-5 transition-colors" style={{ color: accentColor }} />
                            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">{item.t}</span>
                        </div>
                    ))}
                </div>
                <Button 
                    className="h-16 px-12 md:px-16 rounded-[2rem] font-black uppercase italic text-sm md:text-lg tracking-widest shadow-2xl transition-all hover:scale-105 border-none bg-zinc-950 text-white"
                >
                    DEPLOY NOW: ₹999 <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
            </div>
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
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. PINK FAVORITE (DESIGN SUCCESS) */}
                <CommandHero 
                    badge="ARCHETYPE 01: DESIGN SUCCESS"
                    title="THE VIEW FROM"
                    accentText="THE TOP."
                    accentColor="#f472b6"
                    subtitle="Premium workflows for premium brands. Soft on the eyes, hard on the errors."
                />

                {/* 02. AZURE BLUE (PURE ORDER) */}
                <CommandHero 
                    badge="ARCHETYPE 02: PURE ORDER"
                    title="CAPTURE"
                    accentText="MEMORY."
                    accentColor="#38bdf8"
                    subtitle="Institutional memory is an asset. Anything else is just luck. Build your legacy."
                />

                {/* 03. EXCEL GREEN (EXECUTIVE STANDARD) */}
                <CommandHero 
                    badge="ARCHETYPE 03: EXCEL EXECUTIVE"
                    title="STANDARDIZE"
                    accentText="EVERYTHING."
                    accentColor="#217346"
                    subtitle="The definitive institutional standard. Trust built on Excel architecture."
                />

                {/* 04. MINT MOMENTUM (FLOW STUDIO) */}
                <CommandHero 
                    badge="ARCHETYPE 04: FLOW STUDIO"
                    title="BETTER DAYS,"
                    accentText="BUILT-IN."
                    accentColor="#34d399"
                    subtitle="We've made elite standards simple enough for everyone. Clarity for your team."
                />

                {/* 05. ELECTRIC ORCHID (MODERN TECH) */}
                <CommandHero 
                    badge="ARCHETYPE 05: ELECTRIC ORCHID"
                    title="OPERATE"
                    accentText="SMARTER."
                    accentColor="#a855f7"
                    subtitle="Remove the human variable from high-stakes operations. Innovation focused."
                />

                {/* 06. PRESTIGE GOLD (SOVEREIGN PEAK) */}
                <CommandHero 
                    badge="ARCHETYPE 06: PRESTIGE GOLD"
                    title="ELITE"
                    accentText="STANDARDS."
                    accentColor="#fbbf24"
                    subtitle="The benchmark for high-net-worth operational control. Sophisticated depth."
                />

                {/* TECHNICAL COMPONENTS SECTION */}
                <section className="py-32 bg-zinc-50 border-t">
                    <div className="container px-6 mx-auto">
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

                        <div className="mt-24 p-16 rounded-[4rem] bg-white shadow-2xl shadow-zinc-900/5 border border-zinc-100 text-center space-y-10">
                            <div className="grid md:grid-cols-3 gap-12">
                                {[
                                    { t: "Step 1: Download", d: "Instantly get your master file.", i: Download },
                                    { t: "Step 2: Assign", d: "Type in your team's names.", i: Smartphone },
                                    { t: "Step 3: Deploy", d: "Start running like an elite group.", i: CheckCircle2 }
                                ].map((step, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="w-16 h-16 rounded-3xl bg-zinc-50 flex items-center justify-center mx-auto text-zinc-300 shadow-inner">
                                            <step.i className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-black uppercase tracking-widest text-zinc-900">{step.t}</h4>
                                        <p className="text-sm text-zinc-400 italic font-medium">{step.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
