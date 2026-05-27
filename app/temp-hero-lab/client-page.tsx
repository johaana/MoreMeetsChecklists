'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Shield,
    ShieldCheck,
    Smartphone,
    Target,
    Activity,
    GraduationCap,
    CheckCircle2,
    Share2,
    MoreVertical,
    Lock,
    Search,
    ChevronRight,
    History,
    CheckSquare,
    Infinity as InfinityIcon,
    AlertTriangle,
    ShieldAlert,
    Scale,
    Zap,
    Cpu,
    Crown,
    Layers,
    BarChart3,
    Gem,
    Box
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const UNIFORM_TAGLINE = "WHERE SOPs MEET EXECUTION";
const HOSPITALITY_GOLD = "#B89B5E";

const LOGO_VARIATIONS = [
    // --- CATEGORY: THE CORE STANDARD (CheckSquare) ---
    { title: "Standard Green", icon: CheckSquare, color: "#2E7D5A", luxuryMode: false, category: "CORE" },
    { title: "Enterprise Blue", icon: CheckSquare, color: "#0284C7", luxuryMode: false, category: "CORE" },
    { title: "Premium Gold", icon: CheckSquare, color: "#B45309", luxuryMode: false, category: "CORE", isHighlighted: true },
    { title: "Institutional Slate", icon: CheckSquare, color: "#475569", luxuryMode: true, category: "CORE" },
    { title: "Luxury Hospitality", icon: CheckSquare, color: HOSPITALITY_GOLD, luxuryMode: true, category: "CORE", isHighlighted: true },

    // --- CATEGORY: THE COMPLIANCE SHIELD ---
    { title: "Security Blue", icon: Shield, color: "#0284C7", luxuryMode: false, category: "COMPLIANCE" },
    { title: "Active Defense", icon: ShieldCheck, color: "#2E7D5A", luxuryMode: false, category: "COMPLIANCE" },
    { title: "Sovereign Shield", icon: Shield, color: HOSPITALITY_GOLD, luxuryMode: true, category: "COMPLIANCE", isHighlighted: true },
    { title: "Audit Ruby", icon: ShieldAlert, color: "#BE123C", luxuryMode: false, category: "COMPLIANCE" },
    { title: "Hardened Gold", icon: ShieldCheck, color: HOSPITALITY_GOLD, luxuryMode: true, category: "COMPLIANCE" },

    // --- CATEGORY: THE EXECUTION CIRCLE ---
    { title: "Verified Green", icon: CheckCircle2, color: "#2E7D5A", luxuryMode: false, category: "EXECUTION" },
    { title: "Momentum Amber", icon: Zap, color: "#D97706", luxuryMode: false, category: "EXECUTION" },
    { title: "Execution Gold", icon: CheckCircle2, color: HOSPITALITY_GOLD, luxuryMode: true, category: "EXECUTION", isHighlighted: true },
    { title: "Outcome Emerald", icon: Target, color: "#065F46", luxuryMode: false, category: "EXECUTION" },
    { title: "Vitals Cyan", icon: Activity, color: "#0891B2", luxuryMode: true, category: "EXECUTION" },

    // --- CATEGORY: THE SOVEREIGN ENGINE ---
    { title: "Infrastructure", icon: Layers, color: "#475569", luxuryMode: false, category: "ENGINE" },
    { title: "Engine Gold", icon: Cpu, color: HOSPITALITY_GOLD, luxuryMode: true, category: "ENGINE", isHighlighted: true },
    { title: "Leadership Crown", icon: Crown, color: "#B45309", luxuryMode: true, category: "ENGINE" },
    { title: "Data Intelligence", icon: BarChart3, color: "#0284C7", luxuryMode: false, category: "ENGINE" },
    { title: "Asset Vault", icon: Lock, color: HOSPITALITY_GOLD, luxuryMode: true, category: "ENGINE" }
];

interface IdentityMarkProps {
    title: string;
    icon: any;
    color: string;
    isHighlighted?: boolean;
    luxuryMode?: boolean;
}

const IdentityMark = ({ title, icon: IconComponent, color, isHighlighted = false, luxuryMode = false }: IdentityMarkProps) => (
    <div className={cn(
        "p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 flex flex-col items-center text-center gap-6 group relative overflow-hidden h-full",
        isHighlighted ? "bg-white border-zinc-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]" : "bg-white/40 border-zinc-100 hover:bg-white hover:border-zinc-200"
    )}>
        {/* The Glow - Subtler on light background */}
        <div 
            className={cn(
                "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 blur-[60px] transition-all duration-1000",
                luxuryMode ? "opacity-[0.05]" : (isHighlighted ? "opacity-10 scale-125" : "opacity-[0.03] group-hover:opacity-5 group-hover:scale-110")
            )} 
            style={{ backgroundColor: color }} 
        />

        <div className="relative">
            <IconComponent 
                className={cn(
                    "w-12 h-12 relative z-10 transition-all duration-700",
                    isHighlighted ? "scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.05)]" : "group-hover:scale-110"
                )} 
                style={{ color: color }} 
            />
        </div>

        <div className="space-y-3 relative z-10 w-full">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                    <span className="text-xl md:text-2xl font-headline tracking-tighter text-zinc-300 font-normal">More</span>
                    <span className="text-xl md:text-2xl font-black font-headline tracking-tighter text-zinc-950">Meets™</span>
                </div>
                
                {luxuryMode ? (
                    <span className="mt-3 text-[7.5px] font-black uppercase tracking-[0.3em] leading-none block whitespace-nowrap opacity-40 font-headline" style={{ color: color }}>
                        {UNIFORM_TAGLINE}
                    </span>
                ) : (
                    <div className="mt-3 bg-zinc-100 border border-zinc-200/50 px-4 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-[7px] font-black uppercase tracking-[0.2em] masonry-inline block whitespace-nowrap" style={{ color: color }}>
                            {UNIFORM_TAGLINE}
                        </span>
                    </div>
                )}
            </div>
            <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest pt-2">{title}</p>
        </div>
    </div>
);

const CategoryHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-6 py-12">
        <div className="h-px flex-1 bg-zinc-200" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 whitespace-nowrap">{title}</span>
        <div className="h-px flex-1 bg-zinc-200" />
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const coreMarks = LOGO_VARIATIONS.filter(v => v.category === "CORE");
    const complianceMarks = LOGO_VARIATIONS.filter(v => v.category === "COMPLIANCE");
    const executionMarks = LOGO_VARIATIONS.filter(v => v.category === "EXECUTION");
    const engineMarks = LOGO_VARIATIONS.filter(v => v.category === "ENGINE");

    return (
        <div className="bg-[#F8F6F2] text-zinc-950 font-sans selection:bg-primary/10 pb-60">
            
            {/* --- LAB HEADER --- */}
            <div className="container px-6 pt-32 pb-12 mx-auto text-center space-y-8">
                <div className="flex justify-center">
                    <Badge variant="outline" className="text-[#8B6B3F] border-[#8B6B3F]/20 uppercase tracking-[0.6em] font-black text-[11px] px-10 py-3 rounded-none bg-white/50 backdrop-blur-md">
                        IDENTITY LAB V2.1 • DAYLIGHT MODE
                    </Badge>
                </div>
                <h1 className="text-4xl md:text-[5rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-none">
                    INSTITUTIONAL MARKS
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-xl mx-auto text-sm">
                    Visual anchors optimized for Ivory and White hero backgrounds. High-gravity marks for serious operations.
                </p>
            </div>

            {/* --- CORE LAB --- */}
            <div className="container px-6 mx-auto">
                <CategoryHeader title="THE CORE STANDARD" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {coreMarks.map((v, i) => (
                        <IdentityMark key={i} {...v} />
                    ))}
                </div>

                <CategoryHeader title="THE COMPLIANCE SHIELD" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {complianceMarks.map((v, i) => (
                        <IdentityMark key={i} {...v} />
                    ))}
                </div>

                <CategoryHeader title="THE EXECUTION CIRCLE" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {executionMarks.map((v, i) => (
                        <IdentityMark key={i} {...v} />
                    ))}
                </div>

                <CategoryHeader title="THE SOVEREIGN ENGINE" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {engineMarks.map((v, i) => (
                        <IdentityMark key={i} {...v} />
                    ))}
                </div>
            </div>

            {/* --- FINAL LAB HUD --- */}
            <div className="container px-6 py-32 mx-auto text-center border-t border-zinc-200 mt-40">
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[1em] italic mb-12">SOVEREIGN_SYSTEM_DESIGN_STABLE_V28.3</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <button className="h-20 px-16 rounded-2xl bg-zinc-950 text-white font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all border-none group flex items-center justify-center gap-5">
                        <Link href="/library" className="flex items-center gap-5">
                            DEPLOY SYSTEM <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    );
}
