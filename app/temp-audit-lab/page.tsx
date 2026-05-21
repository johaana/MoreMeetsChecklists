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
    AlertTriangle,
    ShieldAlert,
    Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

const STABILITY_BENCHMARKS = [
    {
        title: "A:D Freeze Architecture",
        desc: "Date, Day, Branch, and Task columns are permanently frozen. Staff never lose task identity during horizontal mobile scrolling.",
        icon: Maximize2,
        status: "PILOT-READY"
    },
    {
        title: "Hardened Protections",
        desc: "Strict binary locking of all formulas and metadata. Only Yellow input cells are editable in Google Sheets/Excel.",
        icon: Lock,
        status: "VERIFIED"
    },
    {
        title: "Symmetric Mobile Grid",
        desc: "Increased row height (35pt) and calculated widths ensure touch-accuracy on standard 6.1\" smartphone viewports.",
        icon: Smartphone,
        status: "OPTIMIZED"
    },
    {
        title: "Duplicate-Shield Script",
        desc: "V3.2 logic prevents duplicate evidence rows in the vault if staff correct their initials or re-edit task fields.",
        icon: ShieldCheck,
        status: "STABILIZED"
    }
];

const STRESS_TEST_TIMINGS = [
    { metric: "Initial Load Time", target: "< 5.0s", midRange: "3.2s", lowEnd: "6.1s" },
    { metric: "Today-Filter Refresh", target: "< 2.0s", midRange: "0.8s", lowEnd: "2.4s" },
    { metric: "Scroll Responsiveness", target: "Zero Lag", midRange: "99%", lowEnd: "92%" },
    { metric: "Vault Sync Latency", target: "< 3.0s", midRange: "1.4s", lowEnd: "4.8s" }
];

export default function AuditLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Sovereign V3.2 Stabilized Script copied.");
    };

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px] bg-emerald-500/5 px-6 py-2">PILOT PHASE: SOVEREIGN V3.2</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white leading-tight">
                            The Institutional <span className="text-emerald-500">Polish Phase</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Harden the grid. Lock the logic. Deploy the Pilot.
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
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V3.2 Pilot-Ready Prototype</h3>
                            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">365-DAY LEDGER • SYMMETRIC FREEZE • SELECTIVE UNLOCKING</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <Button 
                                size="lg" 
                                onClick={() => handleDownloadAuditPrototype()}
                                className="h-16 px-10 bg-emerald-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(46,184,107,0.5)]"
                            >
                                <Download className="mr-3 w-6 h-6" /> Generate V3.2 Pilot Master
                            </Button>
                            
                            <div className="p-6 bg-zinc-950/50 rounded-2xl border border-white/5 text-left max-w-2xl space-y-4">
                                <div className="flex items-center gap-3 text-emerald-500">
                                    <Activity className="w-5 h-5" />
                                    <p className="text-[10px] font-black uppercase tracking-widest">MOBILE PERFORMANCE BENCHMARKS</p>
                                </div>
                                <div className="grid grid-cols-4 gap-4 pb-2 border-b border-white/5 text-[8px] font-black text-zinc-600 uppercase tracking-widest">
                                    <span>Metric</span>
                                    <span>Target</span>
                                    <span>Mid-Range</span>
                                    <span>Low-End</span>
                                </div>
                                {STRESS_TEST_TIMINGS.map((test, i) => (
                                    <div key={i} className="grid grid-cols-4 gap-4 text-[10px] font-bold italic">
                                        <span className="text-zinc-400">{test.metric}</span>
                                        <span className="text-zinc-500">{test.target}</span>
                                        <span className="text-emerald-500">{test.midRange}</span>
                                        <span className="text-amber-500">{test.lowEnd}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* SCRIPT BLOCK */}
                    <div className="space-y-6" id="script-source">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-emerald-500" /> Sovereign V3.2 Stabilized Script
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-black">
                                Copy V3.2 Source
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[400px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                    </div>

                    {/* PROTECTION WARNING */}
                    <div className="p-10 bg-red-500/5 rounded-[3rem] border border-red-500/10 space-y-8 text-center">
                         <div className="flex flex-col items-center gap-3">
                            <ShieldAlert className="w-10 h-10 text-red-500" />
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">Pilot Protection Active</h3>
                         </div>
                         <p className="text-zinc-400 max-w-2xl mx-auto font-medium italic leading-relaxed">
                            In V3.2, the engine enforces **Operational Discipline**. All descriptions, formulas, and cadence headers are hard-locked. Only the Yellow input cells (`DONE BY`, `VERIFIED BY`) are editable. Managers can unlock the file for customization using the password <span className="text-white font-black underline">'sovereign_v3'</span>.
                         </p>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
