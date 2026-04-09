'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    CheckCircle2, 
    ArrowRight, 
    Utensils,
    ClipboardCheck,
    Clock,
    ShieldAlert,
    LayoutGrid,
    SearchCheck,
    GraduationCap,
    Maximize2,
    Database,
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ConceptSection = ({ title, description, bgClass, textClass, children }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode }) => (
    <section className={cn("w-full py-20 border-b border-zinc-200", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
                <Badge variant="outline" className="uppercase tracking-[0.3em] font-black text-[10px] border-zinc-300 text-zinc-500">Archetype</Badge>
                <h2 className={cn("text-4xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className="text-zinc-500 italic font-medium">{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, colorClass, bgCard = "bg-white", borderClass = "border-zinc-200" }: any) => (
    <div className={cn("p-8 rounded-2xl border shadow-sm space-y-6", bgCard, borderClass)}>
        <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-zinc-50", colorClass)}>
                <Utensils className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-black text-zinc-900 uppercase italic tracking-tighter font-headline leading-none">{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="space-y-1">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2"><SearchCheck className="w-3 h-3"/> AUDIT (TECHNICAL)</span>
                <p className="text-sm text-zinc-800 font-bold italic leading-tight">{audit}</p>
            </div>
            <div className="space-y-1">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2"><GraduationCap className="w-3 h-3"/> ACTION (TRAINER)</span>
                <p className="text-sm text-zinc-600 font-medium italic">{action}</p>
            </div>
            <div className="pt-4 border-t border-zinc-100">
                <span className="text-[10px] font-black text-red-500/60 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3 h-3"/> RISK (CONSEQUENCE)</span>
                <p className="text-xs text-red-600 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-zinc-900">
            {/* STICKY PREVIEW HEADER */}
            <header className="px-6 h-16 flex items-center bg-white border-b border-zinc-200 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold text-zinc-900">MoreMeets™ <span className="text-[10px] text-zinc-400 font-black uppercase tracking-widest ml-2">Light Standard v2.0</span></span>
                </div>
                <nav className="ml-auto hidden md:flex gap-8 items-center">
                    <Button variant="outline" size="sm" className="rounded-full text-[10px] font-black uppercase border-zinc-300 h-8 px-4">Exit Lab</Button>
                </nav>
            </header>

            <main className="flex-1">
                
                {/* 0. HERO PREVIEW: THE LIGHT HOMEPAGE */}
                <section className="w-full py-24 md:py-40 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
                    {/* Blueprint Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
                    
                    <div className="container px-4 mx-auto relative z-10">
                        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px] px-4 py-1.5 rounded-none bg-primary/5">Sovereign v11.9 Infrastructure</Badge>
                                    <h1 className="text-6xl md:text-8xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                        CAPTURE <br/><span className="text-primary">MEMORY.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-zinc-500 italic font-medium leading-relaxed border-l-4 border-primary/20 pl-8 max-w-md">
                                        Institutional memory is an asset. <br /> Anything else is just luck.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button size="lg" className="h-20 px-10 bg-zinc-900 text-white font-black uppercase italic text-lg rounded-xl shadow-2xl hover:bg-zinc-800 border-none transition-all">
                                        Deploy System Now <ArrowRight className="ml-2 h-6 w-6" />
                                    </Button>
                                    <div className="flex items-center gap-3 pl-4">
                                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 border border-zinc-200">
                                            <Database className="w-5 h-5" />
                                        </div>
                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-tight">EXCEL-READY<br/>NO SaaS LOCK-IN</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="hidden lg:block relative">
                                <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-4 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                                    <div className="bg-zinc-950 rounded-[2rem] aspect-[16/10] overflow-hidden relative">
                                        <img src="https://i.postimg.cc/rsHq85yn/Screenshot-2026-04-09-091611.png" alt="Sovereign Dashboard" className="w-full h-full object-cover grayscale-[0.2]" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCEPT 1: PAPER WHITE */}
                <ConceptSection 
                    title="1. Paper White" 
                    description="Maximum contrast. High-trust academic standard. Feels like a physical document."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <TaskSnippet 
                            title="Thermal Integrity"
                            audit="Cold-Chain Validation (CCP-1)"
                            action="Log fridge temps: Target 1°C to 4°C."
                            risk="Pathogen growth and stock loss."
                            colorClass="text-primary"
                        />
                        <div className="p-10 rounded-[2.5rem] border-2 border-zinc-900 bg-white flex flex-col justify-center text-center space-y-8">
                            <h3 className="text-5xl font-black font-headline italic uppercase">₹999</h3>
                            <Button className="h-16 rounded-xl bg-zinc-900 text-white font-black uppercase italic border-none shadow-xl">
                                GO LIVE IN 10 MINS <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 2: INDUSTRIAL SLATE */}
                <ConceptSection 
                    title="2. Soft Slate" 
                    description="Premium SaaS aesthetic. Reduces ocular fatigue with soft grey-blue tones."
                    bgClass="bg-slate-50"
                    textClass="text-slate-900"
                >
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                        {[
                            { t: "120+ TECHNICAL SOPs", i: ClipboardCheck },
                            { t: "DAILY EXECUTION LOGS", i: Clock },
                            { t: "SYSTEMIC RISK MAPPING", i: ShieldAlert }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-primary/40 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <h4 className="font-black text-slate-800 uppercase italic text-sm tracking-tight font-headline">{item.t}</h4>
                            </div>
                        ))}
                    </div>
                </ConceptSection>

                {/* CONCEPT 3: IVORY EXECUTIVE */}
                <ConceptSection 
                    title="3. Ivory Executive" 
                    description="The Luxury Standard. Warm beige tones for a prestigious, high-end hotel feel."
                    bgClass="bg-[#fdfcf7]"
                    textClass="text-[#2d2a26]"
                >
                    <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-white border border-[#e8e4d9] shadow-xl space-y-8">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <Badge className="bg-[#c2a378] text-white border-none uppercase text-[9px] font-black tracking-widest">Global Protocol</Badge>
                                <h3 className="text-4xl font-black font-headline uppercase italic text-[#2d2a26]">The Concierge Hub</h3>
                            </div>
                            <Maximize2 className="text-[#c2a378] w-10 h-10" />
                        </div>
                        <p className="text-lg text-zinc-500 italic leading-relaxed">Sophisticated, warm, and highly readable. Best for luxury hospitality and high-end residential sectors.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-[#fdfcf7] rounded-xl border border-[#e8e4d9] text-center">
                                <span className="text-3xl font-black text-[#c2a378] font-headline italic">100%</span>
                                <p className="text-[10px] font-bold uppercase text-zinc-400">Audit Parity</p>
                            </div>
                            <div className="p-6 bg-[#fdfcf7] rounded-xl border border-[#e8e4d9] text-center">
                                <span className="text-3xl font-black text-[#c2a378] font-headline italic">ZERO</span>
                                <p className="text-[10px] font-bold uppercase text-zinc-400">Memory Bias</p>
                            </div>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 4: CLINICAL MINIMAL */}
                <ConceptSection 
                    title="4. Clinical Minimal" 
                    description="High-trust and sterile. Uses cool mint tones to signal safety and hygiene."
                    bgClass="bg-[#f0f9f6]"
                    textClass="text-[#064e3b]"
                >
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm"><Zap className="w-6 h-6"/></div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black uppercase italic text-emerald-900 font-headline">Zero-Fail OT</h4>
                                    <p className="text-sm text-emerald-700/70 italic">Surgical safety aligned with WHO standards.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm"><CheckCircle2 className="w-6 h-6"/></div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black uppercase italic text-emerald-900 font-headline">Nurse Command</h4>
                                    <p className="text-sm text-emerald-700/70 italic">Standardized bedside handover protocols.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-white border border-emerald-100 shadow-sm space-y-4">
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Medical Compliance</span>
                            <p className="text-xl font-bold text-emerald-950 italic">"In healthcare, systems are the only constant."</p>
                            <hr className="border-emerald-50" />
                            <p className="text-sm text-emerald-700 italic">Deploy the Sovereign v11.9 clinical engine for zero-risk operations.</p>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 5: THE COMMAND SPLIT */}
                <ConceptSection 
                    title="5. The Command Split" 
                    description="A hybrid of dark authority and light readability. Dark headers anchor the page."
                    bgClass="bg-zinc-100"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-2xl">
                        <div className="bg-zinc-950 p-10 flex justify-between items-center">
                            <div className="space-y-1">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Section 05</span>
                                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter font-headline">The Payload</h3>
                            </div>
                            <LayoutGrid className="text-primary w-10 h-10 opacity-50" />
                        </div>
                        <div className="bg-white p-12 space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="font-black uppercase text-zinc-900 italic tracking-tighter">120+ Protocols</h4>
                                    <p className="text-sm text-zinc-500 italic">Pre-built, audit-ready data points.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black uppercase text-zinc-900 italic tracking-tighter">Live Logbook</h4>
                                    <p className="text-sm text-zinc-500 italic">Verifiable daily execution engine.</p>
                                </div>
                            </div>
                            <Button className="w-full h-16 bg-primary text-black font-black uppercase italic tracking-widest rounded-xl border-none">Review Full Inventory</Button>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 6: THE SPREADSHEET HYBRID */}
                <ConceptSection 
                    title="6. Sheet Utility" 
                    description="Tool-first aesthetic. High-density grids and sharp borders. Familiar to data users."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-5xl mx-auto border border-zinc-200 rounded-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-zinc-50 border-b border-zinc-200">
                                <tr>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">ID</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">TECHNICAL PROTOCOL</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-zinc-100">
                                    <td className="p-4 text-xs font-mono text-zinc-400">RES-KIT-01</td>
                                    <td className="p-4 text-sm font-bold italic text-zinc-800">Cold-Chain Verification (CCP-1)</td>
                                    <td className="p-4"><Badge className="bg-emerald-100 text-emerald-700 border-none uppercase text-[8px] font-black tracking-widest">Completed</Badge></td>
                                </tr>
                                <tr className="border-b border-zinc-100">
                                    <td className="p-4 text-xs font-mono text-zinc-400">H-NUR-02</td>
                                    <td className="p-4 text-sm font-bold italic text-zinc-800">Crash Cart Validation (CCP)</td>
                                    <td className="p-4"><Badge className="bg-red-100 text-red-700 border-none uppercase text-[8px] font-black tracking-widest">Pending</Badge></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="bg-zinc-50 p-4 text-center">
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Institutional Data Engine v11.9</p>
                        </div>
                    </div>
                </ConceptSection>

                {/* CONCEPT 7: ZINC BRUTALIST */}
                <ConceptSection 
                    title="7. Zinc Brutalist" 
                    description="Bold, efficient, and direct. Focus on large typography and industrial borders."
                    bgClass="bg-zinc-50"
                    textClass="text-zinc-950"
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="p-10 bg-white border-[3px] border-zinc-950 space-y-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-5xl font-black font-headline uppercase italic tracking-tighter">STOP CHASING.</h3>
                            <p className="text-xl text-zinc-600 font-bold italic leading-tight">"Systems are not suggestions. They are infrastructure."</p>
                            <div className="flex gap-4">
                                <Button className="h-14 px-8 bg-zinc-950 text-white font-black uppercase italic tracking-widest rounded-none border-none">Get Started</Button>
                                <Button variant="outline" className="h-14 px-8 border-[3px] border-zinc-950 font-black uppercase italic tracking-widest rounded-none">View Hub</Button>
                            </div>
                        </div>
                    </div>
                </ConceptSection>

                {/* FINAL POLL */}
                <section className="py-24 text-center bg-white">
                    <div className="max-w-2xl mx-auto space-y-8 px-4">
                        <h2 className="text-3xl font-black font-headline italic text-zinc-400 uppercase tracking-tighter">Which standard fits the mission?</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[1,2,3,4,5,6,7].map(n => (
                                <Button key={n} variant="outline" className="border-zinc-200 text-zinc-900 uppercase font-black italic text-xs h-12 px-6 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all">Concept {n}</Button>
                            ))}
                        </div>
                        <p className="text-sm text-zinc-400 italic pt-8">Audit complete. Awaiting feedback from the board.</p>
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
