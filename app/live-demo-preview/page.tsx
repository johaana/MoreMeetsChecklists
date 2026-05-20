
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
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LiveDemoPreview() {
    const d = demoMasterData;

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-4 md:p-12 space-y-24">
            
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

            {/* 2. LEDGER VIEW (DESKTOP) */}
            <section className="max-w-6xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">02. MISSION EXECUTION LEDGER</h2>
                </div>
                <Card className="overflow-hidden border-zinc-200 shadow-xl bg-white">
                    <div className="bg-zinc-950 px-6 py-3 flex items-center justify-between">
                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">SOVEREIGN_V11.9_MASTER</span>
                        <div className="flex gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">SYSTEM LIVE</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-100">
                                    {["ID", "ROLE", "TECHNICAL TASK", "DONE BY", "VERIFIED", "STATUS"].map((h) => (
                                        <th key={h} className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {d.tasks.map((t, i) => (
                                    <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                                        <td className="px-6 py-4 text-[11px] font-bold font-mono text-zinc-400">{t.id}</td>
                                        <td className="px-6 py-4 text-[12px] font-black uppercase italic text-zinc-900">{t.role}</td>
                                        <td className="px-6 py-4 text-[12px] font-bold text-zinc-600">{t.task}</td>
                                        <td className="px-6 py-4 text-[12px] font-black text-emerald-700">{t.doneBy || "---"}</td>
                                        <td className="px-6 py-4 text-[12px] font-black text-blue-700">{t.verifiedBy || "---"}</td>
                                        <td className="px-6 py-4">
                                            <Badge className={cn(
                                                "uppercase font-black tracking-widest text-[8px] rounded-none",
                                                t.status === 'COMPLETE' ? "bg-emerald-500" : 
                                                t.status === 'ESCALATED' ? "bg-red-600" : "bg-zinc-100 text-zinc-400"
                                            )}>{t.status}</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>

            {/* 3. DEEP TASK EXPLORATION (THE HOOK) */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">03. EXPANDED TASK PROTOCOL</h2>
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

            {/* 4. MOBILE VIEW STAGING */}
            <section className="max-w-2xl mx-auto space-y-8 flex flex-col items-center">
                <div className="flex items-center gap-3 w-full">
                    <div className="w-1.5 h-6 bg-primary" />
                    <h2 className="text-xl font-black uppercase italic tracking-tighter">04. MOBILE EXECUTION HUB</h2>
                </div>
                <div className="w-[375px] h-[750px] border-[12px] border-zinc-900 rounded-[3rem] bg-white overflow-hidden shadow-2xl relative flex flex-col">
                    <div className="bg-zinc-950 text-white p-6 pt-12 space-y-1">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">MUMBAI_PHOENIX</p>
                        <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter">DAILY MISSIONS</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {d.tasks.slice(0, 6).map((t, i) => (
                            <div key={i} className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 flex items-center justify-between group">
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">{t.role}</p>
                                    <p className="text-xs font-black text-zinc-900 italic uppercase leading-tight">{t.task}</p>
                                </div>
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                    t.doneBy ? "bg-emerald-500 text-white" : "bg-white border-2 border-zinc-100 text-zinc-200"
                                )}>
                                    {t.doneBy ? <Check className="w-5 h-5 stroke-[4]" /> : <div className="w-1.5 h-1.5 rounded-full bg-zinc-100" />}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-6 bg-white border-t border-zinc-100">
                        <div className="h-1 w-20 bg-zinc-200 rounded-full mx-auto" />
                    </div>
                </div>
            </section>

        </div>
    );
}
