'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckSquare,
    Shield,
    Infinity as InfinityIcon,
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
    History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SheetsLandscapeSimulation = () => (
    <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
        {/* Google Sheets Header */}
        <div className="bg-[#22C55E] text-white py-2 px-6 flex items-center gap-4 shrink-0">
             <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" strokeWidth={4} />
                </div>
                <span className="text-[11px] font-bold tracking-tight">DAILY_OPERATIONS_LEDGER_V11.9</span>
             </div>
             <div className="ml-auto flex items-center gap-5">
                <Search className="w-3.5 h-3.5 opacity-80" />
                <Share2 className="w-3.5 h-3.5 opacity-80" />
                <MoreVertical className="w-3.5 h-3.5 opacity-80" />
             </div>
        </div>

        {/* The Grid - High Density Ultra-Landscape */}
        <div className="flex-1 overflow-hidden bg-[#F8F9FA]">
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr className="bg-zinc-100 border-b border-zinc-300">
                        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map(col => (
                            <th key={col} className="px-1 py-1 text-[7px] font-bold text-zinc-400 border-r border-zinc-300 text-center">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                         { a: "BRANCH", b: "ROLE", c: "TECHNICAL TASK", d: "ASSIGNED", e: "DONE BY", f: "STAMP", isHeader: true },
                         { a: "Bandra", b: "Manager", c: "Revenue Reconcile", d: "Aditi K.", e: "AK", f: "2026-05-23 19:53", active: true },
                         { a: "Bandra", b: "Chef", c: "Thaw-temp Audit", d: "Vikram S.", e: "", f: "---", input: true },
                         { a: "Bandra", b: "Security", c: "Egress Sweep", d: "Suresh P.", e: "SP", f: "2026-05-23 08:15", active: true },
                         { a: "Bandra", b: "Housekeeping", c: "Washroom 30-min", d: "Priya D.", e: "PD", f: "2026-05-23 10:45", active: true },
                         { a: "Bandra", b: "Compliance", c: "FSSAI Board Audit", d: "Anjali M.", e: "", f: "---", input: true },
                         { a: "Bandra", b: "Bar Lead", c: "Blind Bottle Count", d: "Rohan D.", e: "RD", f: "2026-05-23 18:30", active: true },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-zinc-200">
                             <td className={cn("px-2 py-2 border-r border-zinc-200 text-[8px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "text-zinc-500")}>{row.a}</td>
                             <td className={cn("px-2 py-2 border-r border-zinc-200 text-[8px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-bold text-zinc-900")}>{row.b}</td>
                             <td className={cn("px-2 py-2 border-r border-zinc-200 text-[8px] truncate", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-black text-zinc-950 uppercase")}>{row.c}</td>
                             <td className={cn("px-2 py-2 border-r border-zinc-200 text-[7.5px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "text-zinc-400 font-medium")}>{row.d}</td>
                             <td className={cn(
                                "px-2 py-2 border-r border-zinc-200 text-[9px] text-center font-black",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.input ? "bg-[#FEFCE8]" : "bg-white text-zinc-900")
                             )}>{row.e}</td>
                             <td className={cn(
                                "px-2 py-2 text-[7px] font-mono text-center border-r border-zinc-200",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.active ? "text-emerald-600 font-bold bg-emerald-50" : "text-zinc-300")
                             )}>{row.f}</td>
                             <td className="bg-zinc-50 border-r border-zinc-200"></td>
                             <td className="bg-zinc-50"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Sheets Tab Bar (Bottom) */}
        <div className="bg-white border-t border-zinc-200 h-8 flex items-center px-6 overflow-hidden shrink-0">
             <span className="text-[9px] font-black text-[#22C55E] border-t-2 border-[#22C55E] h-full flex items-center px-4 whitespace-nowrap">MISSION_LEDGER</span>
             <span className="text-[9px] font-bold text-zinc-300 h-full flex items-center px-4 whitespace-nowrap">SOP_LIBRARY</span>
             <span className="text-[9px] font-bold text-zinc-300 h-full flex items-center px-4 whitespace-nowrap">DASHBOARD</span>
             <span className="text-[9px] font-bold text-zinc-300 h-full flex items-center px-4 whitespace-nowrap">TEAM_HUB</span>
        </div>
    </div>
);

const HandheldLandscapePrototype = () => (
    <div className="relative w-full max-w-[850px] mx-auto py-12">
        <div className="relative group">
            {/* The Ultra-Wide Phone Frame */}
            <div className="relative z-10 w-full aspect-[2.1/1] bg-zinc-900 rounded-[2.5rem] border-[10px] border-zinc-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center ring-1 ring-white/10">
                <SheetsLandscapeSimulation />
            </div>

            {/* Hand Interaction Lighting */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-80 bg-gradient-to-l from-emerald-500/10 to-transparent blur-[80px] pointer-events-none" />
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-80 bg-gradient-to-r from-emerald-500/10 to-transparent blur-[80px] pointer-events-none" />
            
            {/* Context Labels */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-[0.4em] italic">LIVE_PRO_MAX_MODE</span>
                </div>
            </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="space-y-2 pl-6 border-l-2 border-emerald-500/20">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">SYMMETRIC SPINE</p>
                <p className="text-xs text-zinc-500 italic font-medium leading-relaxed">No-clipping architecture ensures Branch, Role, and Task descriptions remain 100% legible in landscape view.</p>
            </div>
            <div className="space-y-2 pl-6 border-l-2 border-emerald-500/20">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">AUTO_FORENSICS</p>
                <p className="text-xs text-zinc-500 italic font-medium leading-relaxed">Status-triggered heartbeat (Column F) generates permanent completion records without manual timestamping.</p>
            </div>
            <div className="space-y-2 pl-6 border-l-2 border-emerald-500/20">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">NATIVE ADOPTION</p>
                <p className="text-xs text-zinc-500 italic font-medium leading-relaxed">Zero training required. Staff operate inside the familiar Google Sheets app using their existing accounts.</p>
            </div>
        </div>
    </div>
);

interface IdentityMarkProps {
    title: string;
    tagline: string;
    icon: any;
    color: string;
    bg?: string;
    border?: string;
}

const IdentityMark = ({ title, tagline, icon: IconComponent, color, bg = "bg-white/[0.02]", border = "border-white/5" }: IdentityMarkProps) => (
    <div className={cn(
        "p-10 rounded-[3rem] border transition-all duration-700 flex flex-col items-center text-center gap-8 group hover:scale-[1.02]",
        bg, border
    )}>
        <div className="relative">
            <div className="absolute -inset-8 blur-3xl opacity-10 group-hover:opacity-40 rounded-full transition-all duration-1000" style={{ backgroundColor: color }} />
            <IconComponent className="w-16 h-16 relative z-10 transition-transform duration-700 group-hover:scale-110" style={{ color: color }} />
        </div>
        <div className="space-y-4">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-black font-headline tracking-tighter uppercase italic leading-none text-white">{title}™</span>
                <div className="h-1 w-12 rounded-full mt-5 mb-3 transition-all duration-1000 group-hover:w-32" style={{ backgroundColor: color }} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] leading-tight block pt-2" style={{ color: color }}>
                    {tagline}
                </span>
            </div>
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const UNIFORM_TAGLINE = "WHERE SOPs MEET EXECUTION";

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-primary/30 pb-60">
            
            {/* --- LAB HEADER --- */}
            <div className="container px-6 pt-32 pb-16 mx-auto text-center space-y-8">
                <div className="flex justify-center">
                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.6em] font-black text-[11px] px-12 py-4 rounded-none bg-emerald-500/5 backdrop-blur-md">
                        SOVEREIGN INFRASTRUCTURE LAB v28.2
                    </Badge>
                </div>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter text-white leading-none">
                    Identity <br/> & <span className="text-emerald-500">Realism</span>
                </h1>
                <p className="text-zinc-500 text-lg md:text-2xl italic font-medium max-w-3xl mx-auto border-l-2 border-emerald-500/20 pl-10">
                    Standardizing the visual mandate: Prototyping the transition from boardroom branding to the ultra-wide handheld ledger.
                </p>
            </div>

            {/* --- BRAND IDENTITY LAB --- */}
            <div className="container px-6 py-40 mx-auto space-y-24 border-y border-white/5">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">IDENTITY AUDIT</Badge>
                    <h2 className="text-4xl font-black font-headline italic uppercase tracking-tighter text-white">The Sovereign Marks</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* OPTION 1: THE MANDATE (Gilded Standard) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={CheckCircle2} 
                        color="#D6A85F"
                        bg="bg-zinc-900"
                        border="border-white/10"
                    />

                    {/* OPTION 2: THE DEFENDER (Sovereign Blue) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={Shield} 
                        color="#38BDF8" 
                    />

                    {/* OPTION 3: THE HEARTBEAT (Authority Green) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={Activity} 
                        color="#2EB86B" 
                    />

                    {/* OPTION 4: THE CONTINUITY (Amber Alert) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={History} 
                        color="#F5A623" 
                    />

                    {/* OPTION 5: THE TARGET (Red Protocol) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline={UNIFORM_TAGLINE} 
                        icon={Target} 
                        color="#E11D48" 
                    />
                </div>
            </div>

            {/* --- HANDHELD REALISM LAB --- */}
            <div className="container px-6 py-40 mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px]">REAL-WORLD VIEWPORT</Badge>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter text-white">
                        Ultra-Wide <br/> <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-[12px]">Handheld.</span>
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl italic font-medium max-w-2xl mx-auto">
                        Visualizing the "Pro Max" landscape transition. Proving that 11-column operational density fits perfectly in a single handheld view.
                    </p>
                </div>

                <div className="relative">
                    {/* Background Ambient Glow */}
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
                    
                    {/* The Simulation */}
                    <HandheldLandscapePrototype />

                    {/* Technical Moat Callout */}
                    <div className="max-w-2xl mx-auto mt-24 p-12 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl space-y-8 text-center shadow-2xl">
                        <div className="flex justify-center">
                            <Smartphone className="w-10 h-10 text-emerald-500" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter">Adoptability matters more than code.</h3>
                            <p className="text-sm md:text-base text-zinc-400 font-bold italic leading-relaxed px-4">
                                "Complex SaaS projects fail when front-line staff refuse to learn a new app. MoreMeets succeeds because it uses the tools they already use every day."
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["No New Logins", "No App Installs", "No Training Cycle", "Zero Friction"].map((moat) => (
                                <Badge key={moat} variant="outline" className="text-[9px] font-black uppercase tracking-widest text-zinc-500 border-white/10 px-4 py-1.5">{moat}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FINAL LAB HUD --- */}
            <div className="container px-6 py-24 mx-auto text-center border-t border-white/5">
                <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[1em] italic mb-12">SOVEREIGN_SYSTEM_DESIGN_STABLE_V28.2</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-[#2EB86B] text-black font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all border-none group">
                        <Link href="/library" className="flex items-center gap-5">
                            DEPLOY SYSTEM <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    );
}
