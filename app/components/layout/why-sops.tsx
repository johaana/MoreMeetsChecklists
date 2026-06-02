
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    X, 
    Check, 
    Zap, 
    History, 
    Target,
    ShieldCheck,
    Smartphone,
    LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PainPoint = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <X className="w-5 h-5 text-red-500 shrink-0" />
        <span className="text-sm md:text-base font-black uppercase italic tracking-tighter text-zinc-900">{text}</span>
    </div>
);

const OutcomeItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 group">
        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
            <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
        </div>
        <span className="text-[12px] font-bold text-[#111111] uppercase tracking-wide">{text}</span>
    </div>
);

export const WhySopsSection = () => {
    return (
        <section id="why-sops" className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.03] z-0 hidden lg:block" />
            
            <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
                    
                    {/* THE PROBLEM */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-3xl text-zinc-900 font-bold leading-tight italic">
                                Most businesses already have SOPs. <br/>
                                <span className="text-zinc-400">The real problem is that daily operations still depend on memory, verbal follow-ups, and whether a manager is physically present.</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4">
                                <PainPoint text="Tasks get missed." />
                                <PainPoint text="Instructions change between shifts." />
                                <PainPoint text="Managers keep calling teams for updates." />
                                <PainPoint text="New staff take weeks to train." />
                                <PainPoint text="Nobody knows what was actually completed." />
                            </div>
                        </div>
                    </div>

                    {/* THE BRIDGE */}
                    <div className="space-y-12 pt-12 border-t border-zinc-100">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-4xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                MoreMeets fixes this using a system your team already understands.
                            </h3>
                            <p className="text-lg text-zinc-600 font-medium italic leading-relaxed">
                                We provide pre-built operational systems with ready SOPs, daily task ledgers, built-in instructions, photo verification, and timestamps — all running directly through Google Sheets.
                            </p>
                        </div>

                        <div className="p-8 md:p-12 bg-zinc-950 text-white rounded-[2rem] space-y-10 shadow-2xl w-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                <LayoutGrid className="w-64 h-64" />
                            </div>
                            
                            <div className="space-y-3 relative z-10">
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic">DEPLOYMENT ADVANTAGE</p>
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase text-white">NO APP-ADOPTION BATTLE.</h4>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-12 relative z-10">
                                <div className="space-y-6">
                                    <p className="text-sm md:text-base font-medium text-zinc-400 italic">
                                        Staff simply open the sheet on their phone and complete tasks step-by-step.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            "No new software.",
                                            "No app downloads.",
                                            "No complicated training."
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-emerald-500" />
                                                <span className="text-[11px] font-black uppercase italic tracking-widest text-zinc-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4 border-l border-white/10 pl-8 md:pl-12">
                                    <p className="text-[10px] font-black text-[#B89B5E] uppercase tracking-[0.4em] italic">MANAGERS CAN:</p>
                                    <ul className="space-y-2">
                                        {[
                                            "see live progress",
                                            "request photo proof",
                                            "attach reference images",
                                            "verify execution timestamps",
                                            "standardize across branches"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-bold italic text-white/80 uppercase">
                                                <div className="w-1 h-1 rounded-full bg-[#B89B5E]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THE PHILOSOPHY */}
                    <div className="space-y-8 pt-12 border-t border-zinc-100 text-center">
                        <p className="text-xl md:text-2xl text-zinc-900 font-bold leading-relaxed max-w-2xl mx-auto italic">
                            The formulas, tracking logic, and audit structure are already built and ready.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "100% EDITABLE", icon: Zap },
                                { label: "OWN FOREVER", icon: History },
                                { label: "NO SAAS TAX", icon: ShieldCheck },
                                { label: "AUDIT READY", icon: ShieldCheck }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center gap-3">
                                    <item.icon className="w-5 h-5 text-[#B89B5E]" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
