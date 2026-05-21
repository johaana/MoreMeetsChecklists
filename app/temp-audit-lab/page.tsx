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
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

const V3_BLUEPRINT = [
    {
        title: "Perpetual 365-Day Ledger",
        desc: "One workbook operates for a full year. Static date values replace monthly regeneration cycles, ensuring permanent institutional records in one file.",
        icon: CalendarDays
    },
    {
        title: "Intelligent Cadence Logic",
        desc: "Daily tasks appear every day. Weekly/Monthly/Quarterly tasks only generate rows on their specific trigger dates, keeping the ledger clean and relevant.",
        icon: Cpu
    },
    {
        title: "Today-First Operational UX",
        desc: "Automated 'onOpen' filtering jumps staff directly to today's mission. Past and future tasks are preserved but hidden from daily frontline use.",
        icon: Target
    },
    {
        title: "Immutable Evidence Vault",
        desc: "Hidden RECORDS sheet creates a strictly append-only history. Every completion writes a static, non-volatile string timestamp for audit defensibility.",
        icon: ShieldCheck
    }
];

export default function AuditLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Hardened Sovereign V3 Script copied to clipboard.");
    };

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px] bg-emerald-500/5 px-6 py-2">Architecture Blueprint: Sovereign V3</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white leading-tight">
                            The Perpetual <span className="text-emerald-500">Audit Engine</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Moving from 30-day missions to long-life institutional infrastructure.
                        </p>
                    </div>

                    {/* V3 BLUEPRINT PILLARS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {V3_BLUEPRINT.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5 group hover:border-emerald-500/20 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{item.title}</h3>
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
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V3 Prototype Generator</h3>
                            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">365-DAY LEDGER • INTELLIGENT CADENCE • HIDDEN VAULT</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <Button 
                                size="lg" 
                                onClick={() => handleDownloadAuditPrototype()}
                                className="h-16 px-10 bg-emerald-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(46,184,107,0.5)]"
                            >
                                <Download className="mr-3 w-6 h-6" /> Generate V3 Hardened Workbook
                            </Button>
                            
                            <div className="p-6 bg-zinc-950/50 rounded-2xl border border-white/5 text-left max-w-2xl space-y-3">
                                <div className="flex items-center gap-3 text-emerald-500">
                                    <Zap className="w-5 h-5" />
                                    <p className="text-[10px] font-black uppercase tracking-widest">Stress Test Decision: 12 Months</p>
                                </div>
                                <p className="text-xs text-zinc-400 font-medium italic leading-relaxed">
                                    This prototype generates a full 12-month operational window (~4,500 rows for 4 test tasks). We are testing mobile scroll performance and script execution at this scale before applying to 200-task production packs.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* CONCURRENCY & SCRIPTS */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-emerald-500" /> Sovereign V3 Automation Script
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-black">
                                Copy V3 Source
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[300px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                    </div>

                    {/* MANAGER WORKFLOW */}
                    <div className="p-10 bg-zinc-900/50 rounded-[3rem] border border-white/5 space-y-8">
                         <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white text-center">Manager Year-End Protocol</h3>
                         <div className="grid md:grid-cols-3 gap-8">
                             {[
                                { t: "VERIFY", d: "Unhide RECORDS sheet and verify total annual compliance evidence.", i: SearchCheck },
                                { t: "ARCHIVE", d: "Save a 'Permanent Archive' copy of the workbook to long-term storage.", i: Lock },
                                { t: "RENEW", d: "Download a fresh Yearly Sovereign Pack to start the new cycle.", i: Download }
                             ].map((step, i) => (
                                <div key={i} className="space-y-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto">
                                        <step.i className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-black uppercase italic text-white">{step.t}</h4>
                                    <p className="text-xs text-zinc-500 font-bold italic leading-relaxed">{step.d}</p>
                                </div>
                             ))}
                         </div>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
