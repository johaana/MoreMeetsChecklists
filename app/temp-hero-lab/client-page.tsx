'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Shield,
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
    Infinity as InfinityIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SheetsLandscapeSimulation = () => (
    <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden scale-[1.1] origin-top">
        {/* Google Sheets Header */}
        <div className="bg-[#22C55E] text-white py-1.5 px-6 flex items-center gap-4 shrink-0">
             <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" strokeWidth={4} />
                </div>
                <span className="text-[9px] font-bold tracking-tight">DAILY_TASKS_SOVEREIGN_V11.9</span>
             </div>
             <div className="ml-auto flex items-center gap-4">
                <Search className="w-3 h-3 opacity-80" />
                <Share2 className="w-3 h-3 opacity-80" />
                <MoreVertical className="w-3 h-3 opacity-80" />
             </div>
        </div>

        {/* The Grid - High Density Ultra-Landscape */}
        <div className="flex-1 overflow-hidden bg-[#F8F9FA]">
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr className="bg-zinc-100 border-b border-zinc-300">
                        {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"].map(col => (
                            <th key={col} className="px-0.5 py-0.5 text-[6px] font-bold text-zinc-400 border-r border-zinc-200 text-center">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                         { a: "BRANCH", b: "ROLE", c: "TECHNICAL TASK", d: "ASSIGNED", e: "DONE BY", f: "VERIFIED", g: "STATUS", h: "RISK", i: "STAMP", isHeader: true },
                         { a: "Bandra", b: "Manager", c: "Revenue Reconcile", d: "Aditi K.", e: "AK", f: "AK", g: "COMPLETE", h: "Theft", i: "2026-05-23 19:53", active: true },
                         { a: "Bandra", b: "Chef", c: "Thaw-temp Audit", d: "Vikram S.", e: "VS", f: "", g: "COMPLETE", h: "Sepsis", i: "2026-05-23 08:45", active: true },
                         { a: "Bandra", b: "Security", c: "Egress Sweep", d: "Suresh P.", e: "", f: "", g: "OPEN", h: "Entrap", i: "", input: true },
                         { a: "Bandra", b: "HK Lead", c: "Washroom 30-min", d: "Priya D.", e: "PD", f: "", g: "COMPLETE", h: "Hygiene", i: "2026-05-23 10:45", active: true },
                         { a: "Bandra", b: "Compliance", c: "FSSAI Board Audit", d: "Anjali M.", e: "", f: "", g: "OPEN", h: "Fine", i: "", input: true },
                         { a: "Bandra", b: "Bar Lead", c: "Bottle Count", d: "Rohan D.", e: "RD", f: "AK", g: "COMPLETE", h: "Leakage", i: "2026-05-23 18:30", active: true },
                         { a: "Bandra", b: "Eng. Lead", c: "DG Load Test", d: "Anil K.", e: "AK", f: "", g: "COMPLETE", h: "Blackout", i: "2026-05-23 07:15", active: true },
                         { a: "Bandra", b: "Host", c: "VIP Arrival Prep", d: "Sarah K.", e: "", f: "", g: "OPEN", h: "Loyalty", i: "", input: true },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-zinc-100">
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px] truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "text-zinc-500")}>{row.a}</td>
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px] truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-bold text-zinc-900")}>{row.b}</td>
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px] truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-black text-zinc-950 uppercase")}>{row.c}</td>
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[6.5px] truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "text-zinc-400 font-medium")}>{row.d}</td>
                             <td className={cn(
                                "px-1 py-1.5 border-r border-zinc-200 text-[8px] text-center font-black",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.input ? "bg-[#FEFCE8]" : "bg-white text-zinc-900")
                             )}>{row.e}</td>
                             <td className={cn("px-1 py-1.5 border-r border-zinc-200 text-[8px] text-center font-black", row.isHeader ? "bg-[#0F172A] text-white font-black" : "bg-zinc-50")}>{row.f}</td>
                             <td className={cn(
                                "px-1 py-1.5 border-r border-zinc-200 text-[7px] font-black text-center",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.g === "COMPLETE" ? "text-emerald-600" : "text-zinc-300")
                             )}>{row.g}</td>
                             <td className={cn("px-1 py-1.5 border-r border-zinc-200 text-[6px] italic text-red-700 font-medium truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "")}>{row.h}</td>
                             <td className={cn(
                                "px-1 py-1.5 text-[6px] font-mono text-center border-r border-zinc-200",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.active ? "text-emerald-500 font-bold" : "text-zinc-300")
                             )}>{row.i}</td>
                             <td className="bg-zinc-50 border-r border-zinc-100"></td>
                             <td className="bg-zinc-50"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Sheets Tab Bar (Bottom) */}
        <div className="bg-white border-t border-zinc-200 h-6 flex items-center px-4 overflow-hidden shrink-0">
             <span className="text-[7.5px] font-black text-[#22C55E] border-t-2 border-[#22C55E] h-full flex items-center px-3 whitespace-nowrap">MISSION_LEDGER</span>
             <span className="text-[7.5px] font-bold text-zinc-300 h-full flex items-center px-3 whitespace-nowrap">SOP_LIBRARY</span>
             <span className="text-[7.5px] font-bold text-zinc-300 h-full flex items-center px-3 whitespace-nowrap">DASHBOARD</span>
        </div>
    </div>
);

const HandheldLandscapePrototype = () => (
    <div className="relative w-full max-w-[950px] mx-auto py-12">
        <div className="relative group">
            {/* The Ultra-Wide Phone Frame */}
            <div className="relative z-10 w-full aspect-[2.3/1] bg-zinc-950 rounded-[3rem] border-[12px] border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center ring-1 ring-white/10">
                <SheetsLandscapeSimulation />
            </div>

            {/* Hand Interaction Lighting */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-l from-emerald-500/10 to-transparent blur-[100px] pointer-events-none" />
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-r from-emerald-500/10 to-transparent blur-[100px] pointer-events-none" />
            
            {/* Context Labels */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.5em] italic">SOVEREIGN_ENGINE_STABLE</span>
                </div>
            </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left px-4">
            <div className="space-y-3 pl-8 border-l border-emerald-500/30">
                <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">ZERO-CLIPPING GRID</p>
                <p className="text-sm text-zinc-500 italic font-medium leading-relaxed">Calculated column widths ensure all critical operational strings fit perfectly in a 16:9 handheld view.</p>
            </div>
            <div className="space-y-3 pl-8 border-l border-emerald-500/30">
                <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">FORENSIC_HEARTBEAT</p>
                <p className="text-sm text-zinc-500 italic font-medium leading-relaxed">Status-triggered completion stamps (Column I) generate permanent audit trails without manual entry.</p>
            </div>
            <div className="space-y-3 pl-8 border-l border-emerald-500/30">
                <p className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">ADOPTION_MOAT</p>
                <p className="text-sm text-zinc-500 italic font-medium leading-relaxed">Staff operate inside the native Google Sheets app. Zero onboarding friction, zero new apps to learn.</p>
            </div>
        </div>
    </div>
);

interface IdentityMarkProps {
    title: string;
    tagline: string;
    icon: any;
    color: string;
    isHighlighted?: boolean;
}

const IdentityMark = ({ title, tagline, icon: IconComponent, color, isHighlighted = false }: IdentityMarkProps) => (
    <div className={cn(
        "p-12 md:p-16 rounded-[2.5rem] border transition-all duration-700 flex flex-col items-center text-center gap-10 group relative overflow-hidden",
        isHighlighted ? "bg-zinc-900 border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]" : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
    )}>
        {/* The Glow */}
        <div 
            className={cn(
                "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 blur-[80px] opacity-20 transition-all duration-1000",
                isHighlighted ? "opacity-40 scale-125" : "group-hover:opacity-30 group-hover:scale-110"
            )} 
            style={{ backgroundColor: color }} 
        />

        <div className="relative">
            <IconComponent 
                className={cn(
                    "w-20 h-20 relative z-10 transition-all duration-700",
                    isHighlighted ? "scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "group-hover:scale-110"
                )} 
                style={{ color: color }} 
            />
        </div>

        <div className="space-y-6 relative z-10">
            <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase italic leading-none text-white">{title}™</span>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] leading-tight block pt-6 italic opacity-80" style={{ color: color }}>
                    {tagline}
                </span>
            </div>
            {isHighlighted && (
                <div className="flex gap-2 justify-center pt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
            )}
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const UNIFORM_TAGLINE = "WHERE SOPs MEET EXECUTION";

    return (
        <div className="bg-[#0A0A0A] text-white font-sans selection:bg-primary/30 pb-60">
            
            {/* --- LAB HEADER --- */}
            <div className="container px-6 pt-32 pb-24 mx-auto text-center space-y-8">
                <div className="flex justify-center">
                    <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.6em] font-black text-[11px] px-10 py-3 rounded-none bg-white/5">
                        THE IDENTITY PROTOCOL
                    </Badge>
                </div>
                <h1 className="text-4xl md:text-[5.5rem] font-black font-headline italic uppercase tracking-tighter text-white leading-none">
                    SELECT YOUR MARK
                </h1>
            </div>

            {/* --- BRAND IDENTITY LAB --- */}
            <div className="container px-6 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={CheckSquare} 
                        color="#2EB86B"
                    />

                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={Shield} 
                        color="#38BDF8" 
                    />

                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={CheckCircle2} 
                        color="#FACC15" 
                        isHighlighted={true}
                    />

                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={InfinityIcon} 
                        color="#F97316" 
                    />

                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={Target} 
                        color="#E11D48" 
                    />
                </div>
            </div>

            {/* --- HANDHELD REALISM LAB --- */}
            <div className="container px-6 py-60 mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 uppercase tracking-[0.5em] font-black text-[10px] px-10 py-3 rounded-none bg-emerald-500/5 italic">REAL-WORLD VIEWPORT</Badge>
                    </div>
                    <h2 className="text-4xl md:text-8xl font-black font-headline italic uppercase tracking-tighter text-white">
                        Ultra-Wide <br/> <span className="text-emerald-500">Handheld.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Simulation */}
                    <HandheldLandscapePrototype />
                </div>
            </div>

            {/* --- FINAL LAB HUD --- */}
            <div className="container px-6 py-24 mx-auto text-center border-t border-white/5">
                <p className="text-[10px] font-black text-zinc-800 uppercase tracking-[1em] italic mb-12">SOVEREIGN_SYSTEM_DESIGN_STABLE_V28.3</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-white text-black font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all border-none group">
                        <Link href="/library" className="flex items-center gap-5">
                            DEPLOY SYSTEM <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    );
}
