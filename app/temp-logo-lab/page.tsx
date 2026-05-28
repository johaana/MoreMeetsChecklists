'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    CheckSquare, 
    Shield, 
    ShieldCheck, 
    Activity, 
    CheckCircle2, 
    Target, 
    Zap, 
    Layers, 
    Cpu, 
    Crown, 
    BarChart3, 
    Lock,
    ShieldAlert,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const TAGLINE = "WHERE SOPs MEET EXECUTION";
const CATEGORY = "Spreadsheet-Native Operational Infrastructure";

const LOGO_DESIGNS = [
    { 
        title: "The Institutional Standard", 
        desc: "A high-gravity, solid mark representing reliability.",
        icon: CheckSquare, 
        color: "#2E7D5A", 
        category: "CORE" 
    },
    { 
        title: "Sovereign Shield", 
        desc: "Focus on audit-readiness and verifiable proof.",
        icon: ShieldCheck, 
        color: "#1E293B", 
        category: "COMPLIANCE" 
    },
    { 
        title: "Hospitality Gold", 
        desc: "Minimalist luxury for high-end resorts and retail.",
        icon: Check, 
        color: "#B89B5E", 
        category: "LUXURY",
        isHighlighted: true 
    },
    { 
        title: "Execution Pulse", 
        desc: "Active motion representing live daily tasks.",
        icon: Activity, 
        color: "#D97706", 
        category: "EXECUTION" 
    },
    { 
        title: "System Engine", 
        desc: "Technical mark for spreadsheet-native logic.",
        icon: Cpu, 
        color: "#0284C7", 
        category: "ENGINE" 
    },
    { 
        title: "Outcome Emerald", 
        desc: "Focus on results and 'Less Misses'.",
        icon: Target, 
        color: "#059669", 
        category: "CORE" 
    },
    { 
        title: "Audit Ruby", 
        desc: "High-contrast mark for safety-critical sectors.",
        icon: ShieldAlert, 
        color: "#BE123C", 
        category: "COMPLIANCE" 
    },
    { 
        title: "Momentum Amber", 
        desc: "Energy and speed for high-volume restaurants.",
        icon: Zap, 
        color: "#F59E0B", 
        category: "EXECUTION" 
    }
];

const LogoCard = ({ design }: { design: typeof LOGO_DESIGNS[0] }) => (
    <div className={cn(
        "p-10 rounded-[3rem] border transition-all duration-700 flex flex-col items-center text-center gap-8 group relative overflow-hidden h-full bg-white",
        design.isHighlighted ? "border-zinc-200 shadow-xl" : "border-zinc-100 hover:border-zinc-200 hover:shadow-lg"
    )}>
        {/* Subdued Glow */}
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 blur-[80px] opacity-[0.03] transition-all duration-1000 group-hover:opacity-[0.06]" 
            style={{ backgroundColor: design.color }} 
        />

        <div className="relative">
            <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundColor: design.color }}
            >
                <design.icon className="w-9 h-9" strokeWidth={2.5} />
            </div>
        </div>

        <div className="space-y-4 relative z-10">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-headline tracking-tighter text-zinc-300 font-normal">More</span>
                    <span className="text-2xl font-black font-headline tracking-tighter text-zinc-950">Meets™</span>
                </div>
                <div className="mt-3 px-4 py-1 rounded-full border border-zinc-100 bg-zinc-50/50">
                    <span className="text-[7.5px] font-black uppercase tracking-[0.25em] leading-none block whitespace-nowrap text-zinc-400">
                        {TAGLINE}
                    </span>
                </div>
            </div>
            
            <div className="pt-4 space-y-1">
                <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">{design.title}</p>
                <p className="text-[10px] text-zinc-400 italic font-medium max-w-[200px] leading-tight">{design.desc}</p>
            </div>
        </div>

        <div className="mt-auto pt-6 border-t border-zinc-50 w-full">
            <span className="text-[8px] font-black text-zinc-300 uppercase tracking-[0.4em]">{design.category}</span>
        </div>
    </div>
);

export default function LogoLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#FBFBFB] text-zinc-950 font-sans">
            <SiteHeader />
            
            <main className="flex-1 py-32 px-6">
                <div className="container mx-auto max-w-6xl space-y-20">
                    
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-none bg-white shadow-sm italic">
                            IDENTITY LAB V3.0
                        </Badge>
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.85]">
                                Visual <span className="text-zinc-300">Anchors.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto pt-4">
                                {CATEGORY}
                            </p>
                        </div>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {LOGO_DESIGNS.map((design, i) => (
                            <LogoCard key={i} design={design} />
                        ))}
                    </div>

                    {/* Branding Footer */}
                    <div className="pt-20 border-t border-zinc-100 flex flex-col items-center gap-10">
                        <div className="space-y-4 text-center">
                            <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[1em] italic">STABLE_SYSTEM_MARKS_2025</p>
                            <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-900">Which direction feels most <span className="text-emerald-600">Institutional?</span></h3>
                        </div>
                        
                        <div className="flex gap-6">
                            <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-zinc-950 text-white font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all group flex items-center gap-5">
                                <Link href="/library" className="flex items-center gap-5">
                                    DEPLOY SYSTEM <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
