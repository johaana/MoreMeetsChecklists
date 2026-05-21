'use client';

import React, { useState, useEffect } from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
    ShieldCheck, 
    Download, 
    Code2, 
    SearchCheck,
    Lock,
    Smartphone,
    Activity,
    CheckCircle2,
    Users,
    CalendarDays,
    Cpu,
    ArrowRight,
    Target,
    Zap,
    AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

const STABILITY_BENCHMARKS = [
    {
        title: "Today-First UX",
        desc: "Magic operational focus. The script forces a filtered view of today's tasks on every file open, hiding yearly complexity.",
        icon: Target,
        status: "STABLE"
    },
    {
        title: "Atomic Lock (P0)",
        desc: "Concurrency shield. Script-level locks prevent data loss or duplicate records when 10+ staff members sync simultaneously.",
        icon: Lock,
        status: "VERIFIED"
    },
    {
        title: "Mobile Grid Polish",
        desc: "Optimized column widths for 6.1\" screens. 'Done By' initials reachable with zero horizontal scrolling.",
        icon: Smartphone,
        status: "OPTIMIZED"
    },
    {
        title: "Yearly Scale (365d)",
        desc: "Simulation of 200 tasks over 12 months. Verified < 5s load time on mid-range Android devices.",
        icon: Cpu,
        status: "LOAD-TESTED"
    }
];

export default function AuditLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Sovereign V3.1 Stabilized Script copied.");
    };

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px] bg-emerald-500/5 px-6 py-2">STABILIZATION PHASE: SOVEREIGN V3.1</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white leading-tight">
                            The Institutional <span className="text-emerald-500">Perpetual Engine</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Making long-life governance simple enough for every frontline team.
                        </p>
                    </div>

                    {/* STABILITY PILLARS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {STABILITY_BENCHMARKS.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5 group hover:border-emerald-500/20 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{item.title}</h3>
                                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[8px] font-black">{item.status}</Badge>
                                    </div>
                                    <p className="text-sm text-zinc-400 font-medium italic leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PROTOTYPE GENERATOR */}
                    <Card className="p-10 border-emerald-500/20 bg-emerald-500/[0.02] space-y-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <CalendarDays className="w-64 h-64 text-emerald-500" />
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V3.1 Stabilized Prototype</h3>
                            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">365-DAY LEDGER • ATOMIC LOCKS • MOBILE-FIRST GRID</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <Button 
                                size="lg" 
                                onClick={() => handleDownloadAuditPrototype()}
                                className="h-16 px-10 bg-emerald-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(46,184,107,0.5)]"
                            >
                                <Download className="mr-3 w-6 h-6" /> Generate V3.1 Perpetual Engine
                            </Button>
                            
                            <div className="p-6 bg-zinc-950/50 rounded-2xl border border-white/5 text-left max-w-2xl space-y-3">
                                <div className="flex items-center gap-3 text-emerald-500">
                                    <Zap className="w-5 h-5" />
                                    <p className="text-[10px] font-black uppercase tracking-widest">STRESS TEST: REAL-WORLD DENSITY</p>
                                </div>
                                <p className="text-xs text-zinc-400 font-medium italic leading-relaxed">
                                    This prototype simulates 200 tasks over 12 months. It generates approximately 6,500 rows. We recommend testing on the low-end Android devices typical of frontline hotel/retail staff.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* SCRIPT BLOCK */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-emerald-500" /> Sovereign V3.1 Stabilized Script
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-black">
                                Copy V3.1 Source
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[300px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                    </div>

                    {/* PROTECTION WARNING */}
                    <div className="p-10 bg-red-500/5 rounded-[3rem] border border-red-500/10 space-y-8 text-center">
                         <div className="flex flex-col items-center gap-3">
                            <ShieldAlert className="w-10 h-10 text-red-500" />
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">Institutional Protection Active</h3>
                         </div>
                         <p className="text-zinc-400 max-w-2xl mx-auto font-medium italic">
                            In V3.1, every workbook generates with **Active Sheet Protection**. To prevent staff from destroying formulas or cadence logic, only Yellow input cells are editable. Managers can unlock the file using the password 'sovereign_v3' in the Excel Review tab.
                         </p>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
