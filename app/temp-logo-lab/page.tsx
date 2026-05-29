'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ShieldCheck,
    CheckSquare,
    Search,
    Activity,
    Layers,
    Target,
    Cpu,
    Lock,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

// --- INSTITUTIONAL PALETTE ---
const BRAND_GREEN = "#1F3A34"; // Deep Forest Green
const BRAND_GOLD = "#B89B5E";  // Muted Institutional Gold

interface ConceptCardProps {
    title: string;
    description: string;
    variant: string;
    children: React.ReactNode;
    bg?: string;
    isDark?: boolean;
}

const ConceptCard = ({ title, description, variant, children, bg = "bg-white", isDark = false }: ConceptCardProps) => (
    <div className={cn(
        "flex flex-col gap-6 p-8 rounded-[2.5rem] border transition-all duration-500 group",
        isDark ? "border-white/10 shadow-2xl" : "border-zinc-100 shadow-sm hover:shadow-xl",
        bg
    )}>
        <div className="space-y-1 text-left">
            <div className="flex items-center justify-between">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em]", isDark ? "text-white/40" : "text-zinc-300")}>{variant}</span>
                <Badge variant="outline" className={cn("text-[8px] font-black uppercase tracking-widest", isDark ? "border-white/10 text-white/60" : "border-zinc-200 text-zinc-500")}>PROPOSED</Badge>
            </div>
            <h3 className={cn("text-xl font-black uppercase italic tracking-tighter", isDark ? "text-white" : "text-zinc-950")}>{title}</h3>
            <p className={cn("text-xs font-medium italic leading-relaxed", isDark ? "text-white/60" : "text-zinc-500")}>{description}</p>
        </div>
        <div className={cn(
            "h-56 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-700",
            isDark ? "bg-[#142823] group-hover:bg-[#1a332d]" : "bg-zinc-50 group-hover:bg-zinc-100"
        )}>
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:20px_20px]" />
             {children}
        </div>
    </div>
);

export default function LogoLabPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#FBFBFB] text-zinc-950 font-sans">
            <SiteHeader />
            
            <main className="flex-1 py-32 px-6">
                <div className="container mx-auto max-w-6xl space-y-32">
                    
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-none bg-white shadow-sm italic">
                            IDENTITY IMPLEMENTATION LAB V9.0
                        </Badge>
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.85]">
                                Combined <span style={{ color: BRAND_GOLD }}>Standard.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto pt-4 leading-tight">
                                Merging Concept A's Icon with Concept B's Typography.
                            </p>
                        </div>
                    </div>

                    {/* PRIMARY COMBINATION SECTION */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">THE MERGED MARK (ICON A + TEXT B)</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            {/* Version 1: Merged on White */}
                            <ConceptCard 
                                variant="VARIANT 1"
                                title="Merged Standard (Daylight)"
                                description="Deep Green Shield + Split Typography. Optimized for clean white interfaces."
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#1F3A34] text-[#B89B5E] shadow-2xl transition-transform group-hover:scale-105 duration-500">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl font-black italic tracking-tighter uppercase text-[#1F3A34] flex items-center leading-none">
                                            MORE<span style={{ color: BRAND_GOLD }} className="ml-1">MEETS</span>
                                        </h2>
                                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.35em] italic mt-2 leading-none">WHERE SOPs MEET EXECUTION</span>
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Version 2: Merged on Forest Green */}
                            <ConceptCard 
                                variant="VARIANT 2"
                                title="Merged Standard (Command)"
                                description="Gold Shield + White/Gold Typography on Deep Green. High authority."
                                bg="bg-[#1F3A34]"
                                isDark={true}
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-[#B89B5E] shadow-2xl backdrop-blur-md transition-transform group-hover:scale-105 duration-500">
                                        <ShieldCheck className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white flex items-center leading-none">
                                            MORE<span style={{ color: BRAND_GOLD }} className="ml-1">MEETS</span>
                                        </h2>
                                        <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.35em] italic mt-2 leading-none">WHERE SOPs MEET EXECUTION</span>
                                    </div>
                                </div>
                            </ConceptCard>

                        </div>
                    </div>

                    {/* PREVIOUS CONCEPTS FOR REFERENCE */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">INDIVIDUAL CONCEPTS REFERENCE</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                            {/* Concept A Reference */}
                            <ConceptCard 
                                variant="CONCEPT A"
                                title="The Shield"
                                description="Deep Green shield with Muted Gold check. High authority."
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#1F3A34] text-[#B89B5E] shadow-xl">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-[#1F3A34] leading-none">MoreMeets™</h2>
                                </div>
                            </ConceptCard>

                            {/* Concept B Reference */}
                            <ConceptCard 
                                variant="CONCEPT B"
                                title="Modern Executive"
                                description="Typographic focus using the Forest Green and Gold split."
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-[#1F3A34] flex items-center">
                                        MORE<span style={{ color: BRAND_GOLD }} className="ml-1">MEETS</span>
                                    </h2>
                                </div>
                            </ConceptCard>
                        </div>
                    </div>

                    {/* Branding Footer */}
                    <div className="pt-20 border-t border-zinc-100 flex flex-col items-center gap-10">
                        <div className="space-y-4 text-center">
                            <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[1em] italic">SOVEREIGN_SYSTEM_DESIGN_2025</p>
                            <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-900">Finalizing the <span style={{ color: BRAND_GOLD }}>Institutional Identity.</span></h3>
                        </div>
                        
                        <div className="flex gap-6">
                            <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-zinc-950 text-white font-black uppercase italic text-lg tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all group flex items-center gap-5">
                                <Link href="/library" className="flex items-center gap-5">
                                    DEPLOY SYSTEM <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
