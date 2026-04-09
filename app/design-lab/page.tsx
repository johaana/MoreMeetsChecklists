
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
    Database,
    Zap,
    ShieldCheck,
    AlertTriangle,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ConceptSection = ({ title, description, bgClass, textClass, children }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode }) => (
    <section className={cn("w-full py-16 border-b border-white/5", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
                <Badge variant="outline" className="uppercase tracking-[0.3em] font-black text-[10px] border-primary/20 text-primary">Archetype</Badge>
                <h2 className={cn("text-3xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className="text-sm opacity-60 italic font-medium">{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, colorClass, bgCard = "bg-white/5", borderClass = "border-white/10", labelClass = "text-white/40" }: any) => (
    <div className={cn("p-6 rounded-2xl border shadow-2xl space-y-5", bgCard, borderClass)}>
        <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-white/5", colorClass)}>
                <Utensils className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-black uppercase italic tracking-tighter font-headline leading-none">{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><SearchCheck className="w-3 h-3"/> AUDIT</span>
                <p className="text-sm font-bold italic leading-tight">{audit}</p>
            </div>
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><GraduationCap className="w-3 h-3"/> ACTION</span>
                <p className="text-sm font-medium italic opacity-80">{action}</p>
            </div>
            <div className="pt-3 border-t border-white/5">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3 h-3"/> RISK</span>
                <p className="text-xs text-red-500 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <SiteHeader />

            <main className="flex-1">
                
                {/* --- HERO A: HIGH-KEY EXECUTIVE (LIGHT VIDEO) --- */}
                <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-white overflow-hidden border-b border-zinc-200">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale brightness-150" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    </div>
                    <div className="container px-6 relative z-10 grid md:grid-cols-2 items-center gap-12 py-20">
                        <div className="space-y-8">
                            <Badge variant="outline" className="text-zinc-900 border-zinc-900/30 uppercase tracking-[0.4em] font-black text-[10px]">Hero Option A: High-Key</Badge>
                            <h1 className="text-6xl md:text-8xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-500 italic font-medium border-l-4 border-primary/40 pl-8 max-w-sm leading-relaxed">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                            <Button className="h-16 px-10 bg-zinc-900 text-white font-black uppercase italic rounded-xl border-none">
                                Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="hidden md:block p-1 border-l border-zinc-200 pl-16 space-y-6">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">SELECT VERTICAL</span>
                            <div className="space-y-4">
                                {["Restaurants", "Hotels", "Healthcare", "Schools"].map(v => (
                                    <p key={v} className="text-2xl font-black text-zinc-300 uppercase italic hover:text-primary transition-colors cursor-pointer">{v}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- HERO B: DEEP SPACE COMMAND (ULTRA DARK) --- */}
                <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-black overflow-hidden border-b border-white/5">
                    <div className="container px-6 relative z-10 grid md:grid-cols-2 items-center gap-12 py-20">
                        <div className="space-y-8">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Hero Option B: Ultra-Black</Badge>
                            <h1 className="text-6xl md:text-8xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/40 italic font-medium border-l-4 border-primary/20 pl-8 max-w-sm leading-relaxed">
                                Institutional memory is an asset. <br /> Anything else is just luck.
                            </p>
                            <Button className="h-16 px-10 bg-primary text-black font-black uppercase italic rounded-xl border-none shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)]">
                                Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="hidden md:block p-1 border-l border-white/10 pl-16 space-y-6">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">SELECT VERTICAL</span>
                            <div className="space-y-4">
                                {["Restaurants", "Hotels", "Healthcare", "Schools"].map(v => (
                                    <p key={v} className="text-2xl font-black text-white/20 uppercase italic hover:text-primary transition-colors cursor-pointer">{v}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCEPT 1: PAPER WHITE */}
                <ConceptSection 
                    title="1. Paper White" 
                    description="Maximum contrast. High-trust academic standard. Pure readability."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Thermal Integrity"
                            audit="Cold-Chain Validation (CCP-1)"
                            action="Log fridge temps: Target 1°C to 4°C."
                            risk="Pathogen growth and stock loss."
                            colorClass="text-primary"
                            bgCard="bg-zinc-50"
                            borderClass="border-zinc-200"
                            labelClass="text-zinc-400"
                        />
                    </div>
                </ConceptSection>

                {/* CONCEPT 2: SOFT SLATE */}
                <ConceptSection 
                    title="2. Soft Slate" 
                    description="Premium SaaS aesthetic. Reduces ocular fatigue."
                    bgClass="bg-slate-50"
                    textClass="text-slate-900"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Narcotics Vault"
                            audit="Double-Blind Narcotics Count"
                            action="Dual-person count of all controlled units."
                            risk="Drug diversion and criminal charges."
                            colorClass="text-blue-600"
                            bgCard="bg-white"
                            borderClass="border-slate-200"
                            labelClass="text-slate-400"
                        />
                    </div>
                </ConceptSection>

                {/* CONCEPT 8: BLUEPRINT GRID (HIGH CONTRAST LIGHT) */}
                <ConceptSection 
                    title="3. Blueprint Grid" 
                    description="White background, bold black borders, engineered precision."
                    bgClass="bg-white"
                    textClass="text-black"
                >
                    <div className="max-w-xl mx-auto border-[3px] border-black p-10 space-y-8 bg-zinc-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4">
                            <Zap className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl font-black uppercase italic font-headline">Zero-Fail OT</h3>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Institutional Data Engine v11.9</p>
                        <Button className="w-full h-14 bg-black text-white font-black uppercase rounded-none">Verify Command</Button>
                    </div>
                </ConceptSection>

                {/* CONCEPT 9: MIDNIGHT SLATE (HIGH CONTRAST NAVY) */}
                <ConceptSection 
                    title="4. Midnight Slate" 
                    description="Deep Navy background with crisp white text. Professional depth."
                    bgClass="bg-[#0f172a]"
                    textClass="text-white"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Server Security"
                            audit="Physical Server Room Temp Check"
                            action="Log output temp (Target exactly 20°C)."
                            risk="Hardware failure and data loss."
                            colorClass="text-primary"
                            bgCard="bg-white/5"
                            borderClass="border-white/10"
                            labelClass="text-primary/60"
                        />
                    </div>
                </ConceptSection>

                {/* CONCEPT 10: INDUSTRIAL AMBER (ULTRA-HIGH VISIBILITY) */}
                <ConceptSection 
                    title="5. Industrial Amber" 
                    description="Black background, Amber primary text. Inspired by safety monitors."
                    bgClass="bg-black"
                    textClass="text-amber-500"
                >
                    <div className="max-w-xl mx-auto border-2 border-amber-500/20 p-8 rounded-3xl bg-[#0a0a0a] space-y-6">
                        <div className="flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            <h4 className="text-2xl font-black uppercase italic font-headline">Hazard Warning</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-bold text-amber-500/80 leading-relaxed italic">
                                Critical safety breach detected in Unit 04. All fire exits must be physically cleared within 10 minutes.
                            </p>
                            <hr className="border-amber-500/10" />
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                <span>Ref: SAF-EXE-01</span>
                                <span className="text-amber-500">Status: URGENT</span>
                            </div>
                        </div>
                    </div>
                </ConceptSection>

                {/* FINAL CTA PROTOTYPE */}
                <section className="py-24 text-center bg-zinc-950 border-t border-white/5">
                    <div className="max-w-2xl mx-auto space-y-10 px-4">
                        <h2 className="text-3xl font-black font-headline italic text-zinc-500 uppercase tracking-tighter">Testing High-Readability CTA</h2>
                        <div className="flex flex-col gap-4">
                            <Button className="h-20 bg-white text-black font-black uppercase text-lg rounded-xl shadow-2xl hover:bg-zinc-200 border-none transition-all">
                                Deploy (Black Text on White) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button className="h-20 bg-primary text-black font-black uppercase text-lg rounded-xl shadow-2xl hover:scale-[1.02] border-none transition-all">
                                Deploy (Black Text on Green) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
