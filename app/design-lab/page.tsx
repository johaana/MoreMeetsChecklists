'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
    CheckCircle2, 
    ShieldAlert, 
    FileSpreadsheet, 
    ArrowRight, 
    Utensils,
    ClipboardCheck,
    GraduationCap,
    Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ConceptSection = ({ title, description, bgClass, textClass, children }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode }) => (
    <section className={cn("w-full py-20 border-b border-zinc-200", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
                <Badge variant="outline" className="uppercase tracking-[0.3em] font-black text-[10px] border-zinc-300 text-zinc-500">Design Prototype</Badge>
                <h2 className={cn("text-4xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className="text-zinc-500 italic font-medium">{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskExample = ({ title, audit, action, risk, colorClass }: any) => (
    <div className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm space-y-6">
        <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-zinc-50", colorClass)}>
                <Utensils className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-black text-zinc-900 uppercase italic tracking-tighter font-headline">{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="space-y-1">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">AUDIT (TECHNICAL)</span>
                <p className="text-sm text-zinc-800 font-bold italic">{audit}</p>
            </div>
            <div className="space-y-1">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">ACTION (TRAINER)</span>
                <p className="text-sm text-zinc-600 font-medium italic">{action}</p>
            </div>
            <div className="pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-black text-red-500/60 uppercase tracking-[0.3em]">RISK (CONSEQUENCE)</span>
                <p className="text-xs text-red-600 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return ( concept: any
        <div className="flex flex-col min-h-screen bg-white text-zinc-900">
            {/* We force a light-mode header for this preview */}
            <header className="px-6 h-16 flex items-center bg-white border-b border-zinc-200 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold text-zinc-900">MoreMeets™</span>
                </div>
                <nav className="ml-auto hidden md:flex gap-8 items-center">
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Readability Prototype v1.0</span>
                </nav>
            </header>

            <main className="flex-1">
                {/* CONCEPT 1: THE ACADEMIC STANDARD */}
                <ConceptSection 
                    title="1. Paper White" 
                    description="Maximum contrast. High-trust professional aesthetic. Familiar to Excel users."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <TaskExample 
                            title="Cold-Chain Integrity"
                            audit="Thermal Integrity Verification (CCP-1)"
                            action="Check and log fridge temps: must be 1°C to 4°C."
                            risk="Pathogen growth and total stock loss."
                            colorClass="text-emerald-600"
                        />
                        <div className="p-10 rounded-[2.5rem] border-2 border-zinc-900 bg-white flex flex-col justify-center text-center space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-5xl font-black font-headline italic tracking-tighter uppercase">₹999</h3>
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">ONE-TIME DEPLOYMENT</p>
                            </div>
                            <Button className="h-16 rounded-xl bg-zinc-900 text-white font-black uppercase italic border-none shadow-xl hover:bg-zinc-800">
                                Deploy System Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 2: INDUSTRIAL SLATE */}
                <ConceptSection 
                    title="2. Soft Slate" 
                    description="Reduces glare. Uses off-white tones to feel more like a premium software tool."
                    bgClass="bg-slate-50"
                    textClass="text-slate-900"
                >
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                        {[
                            { t: "120+ SOPs", i: ClipboardCheck },
                            { t: "Daily Logs", i: Clock },
                            { t: "Risk Mapping", i: ShieldAlert }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <h4 className="font-black text-slate-800 uppercase italic text-sm tracking-tight font-headline">{item.t}</h4>
                            </div>
                        ))}
                    </div>
                </ConceptSection>

                {/* CONCEPT 3: THE BLUEPRINT LIGHT */}
                <ConceptSection 
                    title="3. Blueprint Standard" 
                    description="Technical and engineered. Uses a subtle grid background to imply structured data."
                    bgClass="bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_24px]"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="p-1 border-l-4 border-emerald-500 pl-8 space-y-4">
                            <h3 className="text-3xl font-black font-headline uppercase italic tracking-tighter">Institutional Memory.</h3>
                            <p className="text-lg text-zinc-500 italic leading-relaxed">
                                Systems are not suggestions. They are infrastructure. We convert verbal brilliance into permanent organizational data.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-sm">
                                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">BENCHMARK</span>
                                <p className="text-sm font-bold text-zinc-800 mt-1">Aligned with ISO 9001 & HACCP</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-sm">
                                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">FORMAT</span>
                                <p className="text-sm font-bold text-zinc-800 mt-1">Editable .xlsx & Google Sheets</p>
                            </div>
                        </div>
                    </div>
                </ConceptSection>

                <section className="py-24 text-center bg-white">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-2xl font-bold italic text-zinc-400">Which standard fits the mission?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="outline" className="border-zinc-200 text-zinc-900 uppercase font-black italic text-xs h-12 px-8">Concept 1</Button>
                            <Button variant="outline" className="border-zinc-200 text-zinc-900 uppercase font-black italic text-xs h-12 px-8">Concept 2</Button>
                            <Button variant="outline" className="border-zinc-200 text-zinc-900 uppercase font-black italic text-xs h-12 px-8">Concept 3</Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full py-12 border-t border-zinc-200 bg-zinc-50">
                <div className="container px-4 mx-auto text-center">
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.5em]">&copy; 2025 MoreMeets™ Sovereign Design Lab</p>
                </div>
            </footer>
        </div>
    );
}
