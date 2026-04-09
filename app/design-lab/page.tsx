
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Utensils,
    SearchCheck,
    GraduationCap,
    ShieldAlert,
    Zap,
    AlertTriangle,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ConceptSection = ({ title, description, bgClass, textClass, children, id }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode, id?: string }) => (
    <section id={id} className={cn("w-full py-16 border-b border-white/5", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
                <Badge variant="outline" className={cn("uppercase tracking-[0.3em] font-black text-[10px]", textClass === "text-zinc-900" ? "border-zinc-900/20" : "border-primary/20")}>Combo Archetype</Badge>
                <h2 className={cn("text-3xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className={cn("text-sm opacity-60 italic font-medium", textClass)}>{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, colorClass, bgCard = "bg-white/5", borderClass = "border-white/10", labelClass = "text-white/40", textMain = "text-white" }: any) => (
    <div className={cn("p-6 rounded-2xl border shadow-2xl space-y-5", bgCard, borderClass)}>
        <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-white/5", colorClass)}>
                <Utensils className="w-5 h-5" />
            </div>
            <h4 className={cn("text-xl font-black uppercase italic tracking-tighter font-headline leading-none", textMain)}>{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><SearchCheck className="w-3 h-3"/> AUDIT</span>
                <p className={cn("text-sm font-bold italic leading-tight", textMain)}>{audit}</p>
            </div>
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><GraduationCap className="w-3 h-3"/> ACTION</span>
                <p className={cn("text-sm font-medium italic opacity-80", textMain)}>{action}</p>
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
                
                {/* --- HERO A: HIGH-KEY COMMAND (Light Video + Dark Text) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-white overflow-hidden border-b border-zinc-200">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale brightness-150" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    </div>
                    <div className="container px-6 relative z-10 grid md:grid-cols-[1.2fr,1fr] items-center gap-12 py-20 mx-auto">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-zinc-900 border-zinc-900/30 uppercase tracking-[0.4em] font-black text-[10px]">Prototype A: High-Key</Badge>
                                <h1 className="text-6xl md:text-[6rem] font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                    CAPTURE <br/><span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-zinc-500 italic font-medium border-l-4 border-primary/40 pl-8 max-w-sm leading-relaxed">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <Button className="h-16 px-10 bg-zinc-900 text-white font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-105 transition-all">
                                    Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.4em] pl-2">EXCEL & SHEETS • OWN FOREVER</p>
                            </div>
                        </div>
                        <div className="hidden md:block p-1 border-l border-zinc-200 pl-16 space-y-8">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-5">
                                {["Restaurants", "Hotels & Resorts", "Healthcare", "Schools", "Franchise Networks"].map(v => (
                                    <p key={v} className="text-2xl font-black text-zinc-300 uppercase italic hover:text-primary transition-all hover:translate-x-3 cursor-pointer">{v}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- HERO B: ULTRA-BLACK COMMAND (Pure Black + White Text) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-black overflow-hidden border-b border-white/5">
                    <div className="container px-6 relative z-10 grid md:grid-cols-[1.2fr,1fr] items-center gap-12 py-20 mx-auto">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Prototype B: Ultra-Black</Badge>
                                <h1 className="text-6xl md:text-[6rem] font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                    CAPTURE <br/><span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-white/40 italic font-medium border-l-4 border-primary/20 pl-8 max-w-sm leading-relaxed">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <Button className="h-16 px-10 bg-primary text-black font-black uppercase italic rounded-xl border-none shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-105 transition-all">
                                    Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] pl-2">EXCEL & SHEETS • OWN FOREVER</p>
                            </div>
                        </div>
                        <div className="hidden md:block p-1 border-l border-white/10 pl-16 space-y-8">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-5">
                                {["Restaurants", "Hotels & Resorts", "Healthcare", "Schools", "Franchise Networks"].map(v => (
                                    <p key={v} className="text-2xl font-black text-white/20 uppercase italic hover:text-primary transition-all hover:translate-x-3 cursor-pointer">{v}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. PAPER WHITE */}
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
                            textMain="text-zinc-900"
                        />
                    </div>
                </ConceptSection>

                {/* 2. SOFT SLATE */}
                <ConceptSection 
                    title="2. Soft Slate" 
                    description="Premium SaaS aesthetic. Reduces ocular fatigue while maintaining high-trust."
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
                            textMain="text-slate-900"
                        />
                    </div>
                </ConceptSection>

                {/* 3. BLUEPRINT GRID */}
                <ConceptSection 
                    title="3. Blueprint Grid" 
                    description="White background, bold black borders, engineered technical precision."
                    bgClass="bg-white"
                    textClass="text-black"
                >
                    <div className="max-w-xl mx-auto border-[3px] border-black p-10 space-y-8 bg-zinc-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4">
                            <Zap className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl font-black uppercase italic font-headline text-black">Zero-Fail OT</h3>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Institutional Data Engine v11.9</p>
                        <Button className="w-full h-14 bg-black text-white font-black uppercase rounded-none">Verify Command</Button>
                    </div>
                </ConceptSection>

                {/* 4. MIDNIGHT SLATE */}
                <ConceptSection 
                    title="4. Midnight Slate" 
                    description="Deep Navy background with crisp white text. Professional depth and authority."
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

                {/* 5. INDUSTRIAL AMBER */}
                <ConceptSection 
                    title="5. Industrial Amber" 
                    description="Black background, Amber primary text. Inspired by high-viz safety monitors."
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
                                <span className="text-white/20">Ref: SAF-EXE-01</span>
                                <span className="text-amber-500">Status: URGENT</span>
                            </div>
                        </div>
                    </div>
                </ConceptSection>

                {/* 6. CLINICAL TEAL */}
                <ConceptSection 
                    title="6. Clinical Teal" 
                    description="Off-white with Deep Teal. High-trust, sterile palette for Healthcare."
                    bgClass="bg-[#f0f4f4]"
                    textClass="text-[#0d4d4d]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Patient ID Sync"
                            audit="Dual-Identifier Verification"
                            action="Cross-check Name and MRN before medication."
                            risk="Wrong-patient clinical never-event."
                            colorClass="text-[#0d4d4d]"
                            bgCard="bg-white"
                            borderClass="border-[#0d4d4d]/10"
                            labelClass="text-[#0d4d4d]/40"
                            textMain="text-[#0d4d4d]"
                        />
                    </div>
                </ConceptSection>

                {/* 7. IVORY EXECUTIVE */}
                <ConceptSection 
                    title="7. Ivory Executive" 
                    description="Warm Cream with Deep Espresso. Prestigious boardroom aesthetic."
                    bgClass="bg-[#faf7f2]"
                    textClass="text-[#2d1b10]"
                >
                    <div className="max-w-xl mx-auto p-10 rounded-[2rem] border border-[#2d1b10]/10 bg-white shadow-xl space-y-6">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter font-headline text-[#2d1b10]">Governance Protocol</h4>
                        <div className="h-px bg-[#2d1b10]/10" />
                        <p className="text-sm italic font-medium text-[#2d1b10]/70">Consistency is the luxury of the well-engineered.</p>
                        <Button className="bg-[#2d1b10] text-[#faf7f2] font-black uppercase rounded-xl h-14 w-full">Review Vitals</Button>
                    </div>
                </ConceptSection>

                {/* 8. OBSIDIAN EMERALD */}
                <ConceptSection 
                    title="8. Obsidian Emerald" 
                    description="Pure Black with High-Contrast Green. The hardened brand standard."
                    bgClass="bg-black"
                    textClass="text-primary"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Perimeter Lock"
                            audit="Institutional Lockdown Verification"
                            action="Verify 100% of external roof/alley gates locked."
                            risk="Unauthorized intrusion and asset theft."
                            colorClass="text-primary"
                            bgCard="bg-[#050505]"
                            borderClass="border-primary/20"
                            labelClass="text-primary/40"
                            textMain="text-white"
                        />
                    </div>
                </ConceptSection>

                {/* 9. STEEL HIGH-KEY */}
                <ConceptSection 
                    title="9. Steel High-Key" 
                    description="Pure Silver-Grey with Stark Black text. Modern industrial tech vibe."
                    bgClass="bg-[#e2e8f0]"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Load Capacity"
                            audit="Structural Pallet Racking Audit"
                            action="Inspect uprights for impact or deformation."
                            risk="Progressive collapse and total inventory loss."
                            colorClass="text-zinc-900"
                            bgCard="bg-[#f8fafc]"
                            borderClass="border-zinc-400"
                            labelClass="text-zinc-500"
                            textMain="text-zinc-900"
                        />
                    </div>
                </ConceptSection>

                {/* 10. SOLARISED COMMAND */}
                <ConceptSection 
                    title="10. Solarised Command" 
                    description="Deep Charcoal-Teal with Soft Yellow. Balanced for long-form review."
                    bgClass="bg-[#002b36]"
                    textClass="text-[#b58900]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Data Integrity"
                            audit="Night Audit Ledger Synthesis"
                            action="Reconcile POS sales against bank deposits."
                            risk="Undetected revenue leakage."
                            colorClass="text-[#859900]"
                            bgCard="bg-[#073642]"
                            borderClass="border-[#586e75]"
                            labelClass="text-[#93a1a1]"
                            textMain="text-[#eee8d5]"
                        />
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
