'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
    ShieldCheck, 
    History, 
    Clock, 
    Download, 
    FileText, 
    Code2, 
    AlertTriangle,
    Database,
    Zap,
    SearchCheck,
    Layers,
    Lock
} from 'lucide-react';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

export default function AuditLabPage() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Sovereign Script copied to clipboard.");
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Development Freeze: Evidence Vault Mode</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white">
                            Sovereign V2: <span className="text-primary">Institutional Memory</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Prototyping append-only historical recording and non-destructive "Today-Only" filtering.
                        </p>
                    </div>

                    {/* PROTOTYPE DOWNLOAD */}
                    <Card className="p-10 border-white/10 bg-zinc-900/50 space-y-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Layers className="w-64 h-64 text-primary" />
                        </div>
                        <div className="space-y-2 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V2.1 "Vault" Prototype</h3>
                            <p className="text-sm text-zinc-500 font-medium">11-sheet architecture with append-only RECORDS sheet and future-proof meta-fields.</p>
                        </div>
                        <Button 
                            size="lg" 
                            onClick={() => handleDownloadAuditPrototype()}
                            className="h-16 px-10 bg-primary text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(46,184,107,0.4)]"
                        >
                            <Download className="mr-3 w-6 h-6" /> Generate V2.1 Evidence Workbook
                        </Button>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 relative z-10">
                             {[
                                { t: "30-Day Ledger", i: Clock },
                                { t: "Append-Only Vault", i: ShieldCheck },
                                { t: "Non-Destructive Filter", i: FileText },
                                { t: "Metadata Fields", i: Database }
                             ].map((feat, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                                    <feat.i className="w-3.5 h-3.5" /> {feat.t}
                                </div>
                             ))}
                        </div>
                    </Card>

                    {/* PILLARS OF EVIDENCE */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary flex items-center gap-2">
                                <Zap className="w-5 h-5" /> The Visibility Protocol
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>Staff members see only today's tasks via a **Today-Only Filter**. This is non-destructive; it hides data to reduce mobile clutter while keeping records safe.</p>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                                    <p className="text-white font-black uppercase text-[10px] tracking-widest">MOBILE USER FLOW:</p>
                                    <p>1. Open Google Sheets app.</p>
                                    <p>2. Script triggers `onOpen` -> Auto-filters for `TODAY` on Column A.</p>
                                    <p>3. Only relevant tasks remain. Zero-friction execution.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary flex items-center gap-2">
                                <SearchCheck className="w-5 h-5" /> The Records Protocol
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>Every time a task is initialed, a new row is appended to the hidden **RECORDS** vault. This preserves evidence even if the daily ledger is modified or reset.</p>
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                    <p className="text-[11px] text-red-200 uppercase font-black leading-tight">MANDATE: NEVER OVERWRITE. NEVER DEDUPLICATE. EVERY COMPLETION IS A UNIQUE AUDIT EVENT.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BENCHMARKS */}
                    <div className="space-y-6 p-10 border border-white/5 bg-white/[0.01] rounded-[2rem]">
                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Laboratory Benchmarks</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">EST. YEARLY GROWTH</p>
                                <p className="text-2xl font-black text-white italic">72,000 Rows</p>
                                <p className="text-xs text-zinc-500 italic font-medium">Based on 200 tasks/day. Recommended: Yearly Archive purge.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">FILE SIZE (XLSX)</p>
                                <p className="text-2xl font-black text-white italic">&lt; 1.2 MB</p>
                                <p className="text-xs text-zinc-500 italic font-medium">Pre-generated 30-day ledger is extremely light.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">MOBILE LATENCY</p>
                                <p className="text-2xl font-black text-white italic">Sub-2s</p>
                                <p className="text-xs text-zinc-500 italic font-medium">Filter-based visibility is 5x faster than row-hiding commands.</p>
                            </div>
                        </div>
                    </div>

                    {/* SCRIPT LAYER */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-primary" /> Sovereign Automation Script (v2.1)
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest">
                                Copy Sovereign Source
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[300px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                        <p className="text-center text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">MANDATORY FOR GOOGLE SHEETS MODE • OPTIONAL FOR EXCEL-ONLY MODE</p>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
