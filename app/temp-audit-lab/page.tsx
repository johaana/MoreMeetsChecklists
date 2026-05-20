
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
    Smartphone
} from 'lucide-react';
import { handleDownloadAuditPrototype } from './download-audit-prototype';
import { APPS_SCRIPT_SOURCE } from './apps-script-source';

export default function AuditLabPage() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Script copied to clipboard.");
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto max-w-5xl space-y-16">
                    
                    {/* HEADER */}
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Research & Development</Badge>
                        <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white">
                            Sovereign V2: <span className="text-primary">Audit Engine</span>
                        </h1>
                        <p className="text-secondary-text text-lg italic max-w-2xl mx-auto">
                            Testing permanent historical records, auto-timestamping, and date-driven task visibility.
                        </p>
                    </div>

                    {/* PROTOTYPE DOWNLOAD */}
                    <Card className="p-10 border-white/10 bg-zinc-900/50 space-y-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Database className="w-48 h-48 text-primary" />
                        </div>
                        <div className="space-y-2 relative z-10">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">Download V2.0 Prototype</h3>
                            <p className="text-sm text-zinc-500 font-medium">Built with the new 11-sheet architecture and hidden RECORDS vault.</p>
                        </div>
                        <Button 
                            size="lg" 
                            onClick={() => handleDownloadAuditPrototype()}
                            className="h-16 px-10 bg-primary text-black font-black uppercase italic tracking-widest rounded-xl hover:scale-105 transition-all"
                        >
                            <Download className="mr-3 w-6 h-6" /> Generate Audit-Safe Workbook
                        </Button>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                             {[
                                { t: "Pre-Dated Rows", i: Clock },
                                { t: "Hidden Records", i: ShieldCheck },
                                { t: "Audit Filter", i: FileText },
                                { t: "V2 Schema", i: Database }
                             ].map((feat, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                                    <feat.i className="w-3 h-3" /> {feat.t}
                                </div>
                             ))}
                        </div>
                    </Card>

                    {/* ARCHITECTURE STUDY */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary flex items-center gap-2">
                                <Zap className="w-5 h-5" /> The Visibility Logic
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>We recommend **Option A (Dated Ledger)** for universal compatibility. The workbook pre-populates 30 days of tasks.</p>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                                    <p className="text-white font-black uppercase text-[10px] tracking-widest">STAFF WORKFLOW:</p>
                                    <p>1. Open Google Sheets app.</p>
                                    <p>2. Tap Filter Icon -> Select 'Today'.</p>
                                    <p>3. Only 5-10 rows remain visible. Zero clutter.</p>
                                </div>
                                <p>This avoids the "Script Dependency" trap, where Excel users find a broken system.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary flex items-center gap-2">
                                <History className="w-5 h-5" /> The Recording Logic
                            </h3>
                            <div className="space-y-4 text-sm text-zinc-400 font-medium italic leading-relaxed">
                                <p>To ensure **Static, Audit-Safe Timestamps**, we use a lightweight Google Apps Script. When a user fills "DONE BY", the script locks the current date into a hidden column.</p>
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                                    <p className="text-[11px] text-red-200">Formula-based timestamps (=NOW()) are volatile and will overwrite themselves tomorrow. They are invalid for audits.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SCRIPT LAYER */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-primary" /> Optional Automation Script
                            </h3>
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(APPS_SCRIPT_SOURCE)} className="text-[10px] font-black uppercase italic tracking-widest">
                                Copy Source Code
                            </Button>
                        </div>
                        <pre className="p-8 bg-zinc-950 border border-white/5 rounded-2xl overflow-x-auto text-[11px] text-emerald-500/80 font-mono leading-relaxed max-h-[300px]">
                            {APPS_SCRIPT_SOURCE}
                        </pre>
                        <p className="text-center text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em]">PASTE INTO: EXTENSIONS > APPS SCRIPT</p>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
}
