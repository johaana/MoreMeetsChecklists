'use client';

import React from 'react';
import { demoMasterData } from '@/lib/demo-master-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
    ShieldCheck, 
    Lock, 
    Activity, 
    CheckCircle2, 
    AlertTriangle, 
    History,
    Smartphone,
    Monitor,
    LayoutGrid,
    Check,
    Clock,
    UserCheck,
    Target,
    ChevronRight,
    Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LiveDemoPreview() {
    const d = demoMasterData;

    return (
        <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] p-4 md:p-12 space-y-32 pb-40">
            
            {/* 1. DASHBOARD VIEW */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">01. EXECUTIVE DASHBOARD (78% COMPLETE)</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "COMPLETION", val: "78%", color: "text-emerald-600", i: CheckCircle2 },
                        { label: "PENDING", val: "12", color: "text-amber-500", i: Clock },
                        { label: "ESCALATIONS", val: "03", color: "text-red-600", i: AlertTriangle },
                        { label: "VERIFICATIONS", val: "02", color: "text-blue-600", i: ShieldCheck }
                    ].map((stat, i) => (
                        <Card key={i} className="p-6 bg-white border-zinc-200 shadow-sm flex flex-col gap-2">
                            <stat.i className={cn("w-5 h-5", stat.color)} />
                            <p className="text-3xl font-black italic">{stat.val}</p>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* 2. THE SOVEREIGN LEDGER (SCREENSHOT REPLICA) */}
            <section className="max-w-[1400px] mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">02. THE SOVEREIGN LEDGER (SYMMETRIC GRID)</h2>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-zinc-300 shadow-2xl bg-[#f8f9fa] font-sans">
                    {/* Mission Header */}
                    <div className="bg-[#22C55E] text-white py-2 px-4 flex items-center justify-center gap-2 text-[11px] font-bold">
                        <span>📋</span>
                        <span>DAILY TASKS – Update 'Done By' to complete daily work.</span>
                    </div>

                    {/* Ledger Body */}
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[1200px]">
                            <thead>
                                <tr className="bg-[#0F172A] text-white">
                                    {["BRANCH", "ROLE", "TECHNICAL TASK", "ASSIGNED TO", "DONE BY", "VERIFIED BY", "STATUS", "CONSEQUENCE / RISK", "FLOOR INSTRUCTIONS"].map((h, i) => (
                                        <th key={i} className="px-3 py-2 text-[10px] font-black uppercase tracking-tight border-r border-white/10 last:border-0">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { b: "Bandra", r: "Theatre Operations Manager", t: "Ticketing Revenue Reconcile", a: "Anil K.", db: "AK", vb: "SM", s: "COMPLETE", c: "Undetected internal till fraud.", i: "Match POS ticket settlements against physical bank credit reports.", isV: true },
                                    { b: "Bandra", r: "Theatre Operations Manager", t: "Statutory License Audit", a: "Anil K.", db: "AK", vb: "", s: "COMPLETE", c: "Government theater sealing.", i: "Verify valid Fire NOC and Operating License is active for all screens." },
                                    { b: "Bandra", r: "Theatre Operations Manager", t: "Show Cancellation Triage", a: "Anil K.", db: "", vb: "", s: "OPEN", c: "Reputational damage and refund liability.", i: "Review incident log for any technical halts > 5 mins." },
                                    { b: "Bandra", r: "Theatre Operations Manager", t: "CPH Margin Pulse", a: "Anil K.", db: "", vb: "", s: "OPEN", c: "Underperforming secondary revenue stream.", i: "Review Concession-Per-Head spend against weekly targets." },
                                    { b: "Bandra", r: "Duty Manager", t: "Ambiance Sensory Audit", a: "Sarah M.", db: "SM", vb: "", s: "COMPLETE", c: "Poor guest first-impression.", i: "Check Lobby scent, music volume, and temp (Target 23°C).", isAlt: true },
                                    { b: "Bandra", r: "Duty Manager", t: "Zero-Gap Handover", a: "Sarah M.", db: "SM", vb: "", s: "VERIFICATION PENDING", c: "Lost instructions / Gridlock.", i: "Verify digital sign-off between AM/PM shift managers.", isAlt: true, isV: true },
                                    { b: "Bandra", r: "Duty Manager", t: "MOD Floor Presence", a: "Sarah M.", db: "", vb: "", s: "OPEN", c: "Service chaos during rush.", i: "Conduct 15-min sweep of lobbies during peak interval surge.", isAlt: true }
                                ].map((row, idx) => (
                                    <tr key={idx} className={cn("border-b border-zinc-200 text-[11px]", row.isAlt ? "bg-[#f8f9fa]" : "bg-white")}>
                                        <td className="px-3 py-3 border-r border-zinc-200 text-zinc-500">{row.b}</td>
                                        <td className="px-3 py-3 border-r border-zinc-200 font-bold text-zinc-900">{row.r}</td>
                                        <td className="px-3 py-3 border-r border-zinc-200 font-black text-zinc-950">{row.t}</td>
                                        <td className="px-3 py-3 border-r border-zinc-200 text-zinc-400">{row.a}</td>
                                        <td className="px-3 py-3 border-r border-zinc-200 bg-[#FEFCE8] font-black text-center">{row.db}</td>
                                        <td className={cn("px-3 py-3 border-r border-zinc-200 font-black text-center", row.isV ? "bg-[#EFF6FF]" : "bg-[#f1f5f9]")}>{row.vb}</td>
                                        <td className={cn(
                                            "px-3 py-3 border-r border-zinc-200 font-black text-center",
                                            row.s === "COMPLETE" ? "text-emerald-600" : row.s === "VERIFICATION PENDING" ? "text-amber-600" : "text-zinc-400"
                                        )}>{row.s}</td>
                                        <td className="px-3 py-3 border-r border-zinc-200 italic text-red-700 font-medium leading-tight max-w-[180px]">{row.c}</td>
                                        <td className="px-3 py-3 text-emerald-700 font-medium leading-tight max-w-[300px]">{row.i}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tab Navigation Footer (Sheet Style) */}
                    <div className="bg-white border-t border-zinc-200 px-4 py-1.5 flex items-center gap-1 overflow-hidden">
                        <div className="flex items-center gap-1 pr-4 border-r border-zinc-200">
                             <div className="w-5 h-5 rounded hover:bg-zinc-100 flex items-center justify-center text-zinc-400">＋</div>
                             <div className="w-5 h-5 rounded hover:bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs">≡</div>
                        </div>
                        {[
                            { n: "START", active: false },
                            { n: "DASHBOARD", active: false },
                            { n: "DAILY_TASKS", active: true },
                            { n: "SOP_LIB", active: false },
                            { n: "BRANCH_SETUP", active: false },
                            { n: "TEAM_HUB", active: false },
                            { n: "CUSTOMIZATION_GUIDE", active: false }
                        ].map((tab, i) => (
                            <div key={i} className={cn(
                                "px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap rounded-t-lg transition-colors cursor-pointer",
                                tab.active ? "bg-white border-x border-t border-zinc-200 text-blue-600 -mb-[7px] pb-[8px] z-10" : "text-zinc-500 hover:bg-zinc-100"
                            )}>
                                {tab.n}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DEEP TASK EXPLORATION (THE HOOK) */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">03. EXPANDED TASK PROTOCOL (THE HOOK)</h2>
                </div>
                <Card className="p-10 border-zinc-200 shadow-2xl bg-white space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldCheck className="w-48 h-48" />
                    </div>
                    <div className="space-y-2">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase font-black tracking-widest text-[10px]">{d.deepTask.id} • CRITICAL NODE</Badge>
                        <h3 className="text-4xl font-black font-headline italic uppercase tracking-tighter text-zinc-950">{d.deepTask.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">HOW TO PERFORM</p>
                                <p className="text-sm font-bold italic leading-relaxed text-zinc-600">{d.deepTask.howTo}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">WHY IT MATTERS</p>
                                <p className="text-sm font-bold italic leading-relaxed text-zinc-600">{d.deepTask.whyItMatters}</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-red-600" />
                                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">RISK IF MISSED</p>
                                </div>
                                <p className="text-sm font-black italic text-red-950 leading-tight uppercase">{d.deepTask.risk}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">ESCALATION PATH</p>
                                <p className="text-sm font-black text-zinc-900 uppercase italic">{d.deepTask.escalation}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

        </div>
    );
}
