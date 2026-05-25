'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckSquare,
    Shield,
    Infinity,
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
    Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BRAND_GREEN = "#22C55E";

const SheetsLandscapeSimulation = () => (
    <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
        {/* Google Sheets Header */}
        <div className="bg-[#22C55E] text-white py-1.5 px-4 flex items-center gap-3 shrink-0">
             <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
                <span className="text-[10px] font-bold truncate max-w-[120px]">DAILY_OPERATIONS_LEDGER</span>
             </div>
             <div className="ml-auto flex items-center gap-3">
                <Search className="w-3 h-3 opacity-80" />
                <Share2 className="w-3 h-3 opacity-80" />
                <MoreVertical className="w-3 h-3 opacity-80" />
             </div>
        </div>

        {/* The Grid - High Density Landscape */}
        <div className="flex-1 overflow-hidden bg-[#F8F9FA]">
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr className="bg-zinc-100 border-b border-zinc-300">
                        {["A", "B", "C", "D", "E", "F", "G"].map(col => (
                            <th key={col} className="px-1 py-0.5 text-[6px] font-bold text-zinc-400 border-r border-zinc-300 text-center">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                         { a: "BRANCH", b: "ROLE", c: "TECHNICAL TASK", d: "DONE BY", e: "STAMP", isHeader: true },
                         { a: "Bandra", b: "Manager", c: "Revenue Reconcile", d: "AK", e: "2026-05-23 19:53", active: true },
                         { a: "Bandra", b: "Chef", c: "Thaw-temp Audit", d: "", e: "---", input: true },
                         { a: "Bandra", b: "Security", c: "Egress Sweep", d: "SM", e: "2026-05-23 08:15", active: true },
                         { a: "Bandra", b: "HK", c: "Bathroom 60-min", d: "PD", e: "2026-05-23 10:12", active: true },
                         { a: "Bandra", b: "Admin", c: "Compliance Log", d: "", e: "---", input: true },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-zinc-200">
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "text-zinc-500")}>{row.a}</td>
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-bold text-zinc-900")}>{row.b}</td>
                             <td className={cn("px-1.5 py-1.5 border-r border-zinc-200 text-[7px]", row.isHeader ? "bg-[#0F172A] text-white font-black" : "font-black text-zinc-950 uppercase truncate")}>{row.c}</td>
                             <td className={cn(
                                "px-1.5 py-1.5 border-r border-zinc-200 text-[8px] text-center font-black",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.input ? "bg-[#FEFCE8]" : "bg-white text-zinc-900")
                             )}>{row.d}</td>
                             <td className={cn(
                                "px-1.5 py-1.5 text-[6.5px] font-mono text-center",
                                row.isHeader ? "bg-[#0F172A] text-white font-black" : (row.active ? "text-emerald-600 font-bold bg-emerald-50" : "text-zinc-300")
                             )}>{row.e}</td>
                             <td className="bg-zinc-50 border-r border-zinc-200"></td>
                             <td className="bg-zinc-50"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Sheets Tab Bar (Bottom) */}
        <div className="bg-white border-t border-zinc-200 h-7 flex items-center px-4 overflow-hidden shrink-0">
             <span className="text-[8px] font-black text-[#22C55E] border-t-2 border-[#22C55E] h-full flex items-center px-3 whitespace-nowrap">MISSION_LEDGER</span>
             <span className="text-[8px] font-bold text-zinc-300 h-full flex items-center px-3 whitespace-nowrap">SOP_LIBRARY</span>
             <span className="text-[8px] font-bold text-zinc-300 h-full flex items-center px-3 whitespace-nowrap">DASHBOARD</span>
        </div>
    </div>
);

const HandheldLandscapePrototype = () => (
    <div className="relative w-full max-w-[600px] mx-auto py-12">
        <div className="relative group">
            {/* The Hand & Phone Container (Visualizing the user's provided reference) */}
            <div className="relative z-10 w-full aspect-[16/9] bg-zinc-900 rounded-[2rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center">
                <SheetsLandscapeSimulation />
            </div>

            {/* Simulated Hand Overlay Elements (Abstracted for UI) */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-l from-white/10 to-transparent blur-3xl pointer-events-none" />
            
            {/* Context Labels */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">SOVEREIGN_LANDSCAPE_MODE</span>
            </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">ZERO-CLIPPING GRID</p>
                <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">Symmetric column architecture ensures task names and person initials never get truncated on mobile viewports.</p>
            </div>
            <div className="space-y-2">
                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">FORENSIC HEARTBEAT</p>
                <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">Automated timestamps (Column E) lock in the moment of completion, preventing retrospective data manipulation.</p>
            </div>
        </div>
    </div>
);

const IdentityMark = ({ title, tagline, icon: Icon, color, bg = "bg-white/[0.02]", border = "border-white/5", secondary = "text-zinc-600" }: any) => (
    <div className={cn(
        "p-10 rounded-[2.5rem] border transition-all duration-700 flex flex-col items-center text-center gap-8 group hover:scale-[1.02]",
        bg, border
    )}>
        <div className="relative">
            <div className="absolute -inset-6 blur-2xl opacity-10 group-hover:opacity-30 rounded-full transition-opacity duration-1000" style={{ backgroundColor: color }} />
            <Icon className="w-16 h-16 relative z-10 transition-transform duration-700 group-hover:scale-110" style={{ color: color }} />
        </div>
        <div className="space-y-3">
            <div className="flex flex-col items-center">
                <span className="text-3xl font-black font-headline tracking-tighter uppercase italic leading-none text-white">{title}™</span>
                <div className="h-1 w-12 rounded-full mt-4 mb-2 transition-all duration-700 group-hover:w-24" style={{ backgroundColor: color }} />
                {tagline && (
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] leading-tight block pt-2" style={{ color: color }}>
                        {tagline}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-primary/30 pb-60">
            
            {/* --- LAB HEADER --- */}
            <div className="container px-6 pt-32 pb-16 mx-auto text-center space-y-6">
                <div className="flex justify-center">
                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-none bg-emerald-500/5 backdrop-blur-md">
                        SOVEREIGN INFRASTRUCTURE LAB v28.0
                    </Badge>
                </div>
                <h1 className="text-5xl md:text-8xl font-black font-headline italic uppercase tracking-tighter text-white leading-none">
                    Identity <br/> & <span className="text-emerald-500">Realism</span>
                </h1>
                <p className="text-zinc-500 text-lg md:text-xl italic font-medium max-w-2xl mx-auto border-l-2 border-emerald-500/20 pl-8">
                    Standardizing the visual mandate: From boardroom branding to the frontline handheld ledger.
                </p>
            </div>

            {/* --- BRAND IDENTITY LAB --- */}
            <div className="container px-6 py-32 mx-auto space-y-24 border-y border-white/5">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">IDENTITY SELECTION</Badge>
                    <h2 className="text-4xl font-black font-headline italic uppercase tracking-tighter text-white">The Sovereign Marks</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* OPTION 1: THE MANDATE (Gilded Standard) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline="WHERE SOPs MEET EXECUTION" 
                        icon={CheckCircle2} 
                        color="#D6A85F"
                        bg="bg-zinc-900"
                        border="border-white/10"
                    />

                    {/* OPTION 2: THE DEFENDER (Sovereign Blue) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline="THE OPERATIONAL INFRASTRUCTURE" 
                        icon={Shield} 
                        color="#38BDF8" 
                    />

                    {/* OPTION 3: THE HEARTBEAT (Authority Green) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline="LESS MISSES. MORE STANDARDS." 
                        icon={Activity} 
                        color="#2EB86B" 
                    />

                    {/* OPTION 4: THE CONTINUITY (Amber Alert) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline="SYSTEMS OVER LUCK." 
                        icon={History} 
                        color="#F5A623" 
                    />

                    {/* OPTION 5: THE TARGET (Red Protocol) */}
                    <IdentityMark 
                        title="MoreMeets" 
                        tagline="INSTITUTIONAL DISCIPLINE" 
                        icon={Target} 
                        color="#E11D48" 
                    />
                </div>
            </div>

            {/* --- HANDHELD REALISM LAB --- */}
            <div className="container px-6 py-32 mx-auto space-y-24">
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px]">OPERATIONAL REALISM</Badge>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white">
                        Handheld <br/> <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">Execution.</span>
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl italic font-medium max-w-2xl mx-auto">
                        Visualizing the landscape transition. Proving that complex operational logic fits comfortably in the palm of a staff member's hand.
                    </p>
                </div>

                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
                    
                    {/* The Simulation */}
                    <HandheldLandscapePrototype />

                    {/* Technical Moat Callout */}
                    <div className="max-w-xl mx-auto mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6 text-center">
                        <div className="flex justify-center">
                            <Smartphone className="w-8 h-8 text-emerald-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter">Adoptability is the only metric.</h3>
                            <p className="text-sm text-zinc-400 font-bold italic leading-relaxed">
                                "SaaS fails when teams refuse to log in. MoreMeets succeeds because it runs on infrastructure your team already uses every day."
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["No New Logins", "No App Installs", "No Training Needed", "Zero Friction"].map((moat) => (
                                <Badge key={moat} variant="outline" className="text-[8px] font-black uppercase tracking-widest text-zinc-500 border-white/5">{moat}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA HUD --- */}
            <div className="container px-6 py-20 mx-auto text-center border-t border-white/5">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.8em] italic mb-10">SOVEREIGN_SYSTEM_DESIGN_STABLE</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-[#2EB86B] text-black font-black uppercase italic text-sm tracking-widest shadow-2xl hover:scale-105 transition-all border-none group">
                        <Link href="/library" className="flex items-center gap-4">
                            DEPLOY SYSTEM <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    );
}
