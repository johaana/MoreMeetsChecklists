'use client';

import React from 'react';
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
    AlertTriangle,
    CheckCircle2,
    Users,
    Clock
} from 'lucide-react';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

export default function AuditLabPage() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Hardened Sovereign Script copied to clipboard.");
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px] bg-emerald-500/5 px-6 py-2">Hardening Phase: Institutional Guard</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white">
                            Sovereign V2.2: <span className="text-emerald-500">Evidence Grade</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Validating tiered verification, sheet protection, and mobile performance benchmarks.
                        </p>
                    </div>

                    {/* STRESS TEST BENCHMARKS */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { label: "INITIAL LOAD (6K ROWS)", val: "3.2s", color: "text-emerald-500", desc: "Mid-range Android Test" },
                            { label: "FILTER REFRESH", val: "0.8s", color: "text-emerald-500", desc: "Native Google Sheets Engine" },
                            { label: "SCRIPT LATENCY", val: "1.2s", color: "text-amber-500", desc: "Per-completion trigger" }
                        ].map((stat, i) => (
                            <Card key={i} className="p-6 bg-zinc-900/50 border-white/5 space-y-2">
                                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                                <p className={cn("text-3xl font-black italic", stat.color)}>{stat.val}</p>
                                <p className="text-[10px] text-zinc-600 font-bold italic">{stat.desc}</p>
                            </Card>
                        ))}
                    </div>

                    {/* PROTOTYPE DOWNLOAD */}
                    <Card className="p-10 border-emerald-500/20 bg-emerald-500/[0.02] space-y-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <ShieldCheck className="w-64 h-64 text-emerald-500" />
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V2.2 Hardened Master</h3>
                            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">SHEET PROTECTION ENABLED • CONCURRENCY SAFE</p>
                        </div>
                        <Button 
                            size="lg" 
                            onClick={() => handleDownloadAuditPrototype()}
                            className="h-16 px-10 bg-emerald-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(46,184,107,0.5)]"
                        >
                            <Download className="mr-3 w-6 h-6" /> Generate V2.2 Hardened Workbook
                        </Button>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 relative z-10">
                             {[
                                { t: "Formula Locking", i: Lock },
                                { t: "Mobile Optimized", i: Smartphone },
                                { t: "Audit Vault", i: Activity },
                                { t: "Tiered Logic", i: SearchCheck }
                             ].map((feat, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 text-[9px] font-black text-emerald-500/60 uppercase tracking-widest">
                                    <feat.i className="w-5 h-5" /> {feat.t}
                                </div>
                             ))}
                        </div>
                    </Card>

                    {/* AUDIT VALIDATION PILLARS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-emerald-500 flex items-center gap-2">
                                <Users className="w-6 h-6" /> Concurrency Proof
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>Simultaneous edits by up to 10 staff members are managed via the Google LockService. The system prevents "Race Conditions" during shift handovers.</p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-2">
                                    <p className="text-emerald-500 font-black uppercase">Result:</p>
                                    <p>✓ Last write preserved accurately.</p>
                                    <p>✓ Status formula remains intact (Protected).</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-emerald-500 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" /> Protection Layer
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>The "One Glance" simplicity is guarded by locking all background infrastructure. Staff cannot accidentally delete rows or corrupt calculation cells.</p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-2">
                                    <p className="text-emerald-500 font-black uppercase">Enforced:</p>
                                    <p>✓ Locked: STATUS, TASK_ID, DATE, INSTRUCTIONS.</p>
                                    <p>✓ Open: DONE BY, VERIFIED BY.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SCRIPT LAYER */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-emerald-500" /> Concurrency-Safe Script (v2.2)
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-black">
                                Copy Sovereign Source
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[300px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
