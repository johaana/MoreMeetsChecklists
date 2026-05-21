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
    Lock,
    Scale,
    Cpu,
    Smartphone
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
                            Validating tiered verification logic, generation-time freeze panes, and append-only vault security.
                        </p>
                    </div>

                    {/* PROTOTYPE DOWNLOAD */}
                    <Card className="p-10 border-emerald-500/20 bg-emerald-500/[0.02] space-y-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Scale className="w-64 h-64 text-emerald-500" />
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">V2.2 Hardened Master</h3>
                            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">P0 SECURITY FIXES APPLIED • MOBILE UX OPTIMIZED</p>
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
                                { t: "Tiered Verification", i: SearchCheck },
                                { t: "Generation Freeze", i: Smartphone },
                                { t: "Hidden Audit Vault", i: Lock },
                                { t: "Auto-Filters Applied", i: FileText }
                             ].map((feat, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 text-[9px] font-black text-emerald-500/60 uppercase tracking-widest">
                                    <feat.i className="w-5 h-5" /> {feat.t}
                                </div>
                             ))}
                        </div>
                    </Card>

                    {/* PILLARS OF EVIDENCE */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-emerald-500 flex items-center gap-2">
                                <SearchCheck className="w-6 h-6" /> Tiered Verification
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>Reinstated the critical distinction between routine and high-risk tasks. High-risk tasks now require a secondary signature before they reach **COMPLETE** status.</p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-2">
                                    <p className="text-emerald-500 font-black">LOGIC FLOW:</p>
                                    <p>1. Done By → [IN PROGRESS] (Yellow)</p>
                                    <p>2. Verified By → [COMPLETE] (Green)</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 p-8 bg-zinc-900/50 rounded-[2rem] border border-white/5">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-emerald-500 flex items-center gap-2">
                                <Smartphone className="w-6 h-6" /> Mobile UX Persistence
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>Header rows and task identities are now frozen at the moment of file creation, preventing disorientation on small screens during high-speed scrolls.</p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-2">
                                    <p className="text-emerald-500 font-black">ZERO CONFIG:</p>
                                    <p>Freeze panes and auto-filters exist out-of-the-box, no user intervention required.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SCRIPT LAYER */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-emerald-500" /> Hardened Script (v2.2)
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
