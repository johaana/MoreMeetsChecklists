'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight,
    ShieldCheck,
    CheckSquare,
    Command,
    Fingerprint,
    Search,
    Activity,
    Layers,
    Target,
    Cpu,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const MASTER_LOGO_URL = "https://i.postimg.cc/L55mTYQP/Whats-App-Image-2026-05-29-at-15-05-10.jpg";

// --- INSTITUTIONAL PALETTE ---
const BRAND_GREEN = "#1F3A34"; // Deep Forest Green from reference
const BRAND_GOLD = "#B89B5E";  // Muted Institutional Gold
const LIGHT_BG = "#F8F6F2";    // Cream/Ivory for Daylight Mode

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
             {/* Subtle Texture */}
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
                            IDENTITY IMPLEMENTATION LAB V8.0
                        </Badge>
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.85]">
                                Palette <span style={{ color: BRAND_GOLD }}>Control.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto pt-4 leading-tight">
                                Testing Forest Green & Muted Gold across Institutional environments.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 1: DAYLIGHT MODE (WHITE BACKGROUNDS) */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">DAYLIGHT MODE (ON WHITE)</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* Variation 1: The Sovereign Shield */}
                            <ConceptCard 
                                variant="CONCEPT A"
                                title="The Shield"
                                description="Deep Green shield with Muted Gold check. High authority, audit-grade visual."
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#1F3A34] text-[#B89B5E] shadow-xl">
                                            <ShieldCheck className="w-7 h-7" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-[#1F3A34] leading-none">MoreMeets™</h2>
                                            <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.4em] mt-1.5 leading-none">SPREADSHEET-NATIVE INFRASTRUCTURE</span>
                                        </div>
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Variation 2: Modern Executive */}
                            <ConceptCard 
                                variant="CONCEPT B"
                                title="Modern Executive"
                                description="Typographic focus using the Forest Green for the wordmark and Gold for the logic divider."
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-[#1F3A34] flex items-center">
                                        MORE<span style={{ color: BRAND_GOLD }} className="ml-1">MEETS</span>
                                    </h2>
                                    <div className="w-full flex items-center gap-3 px-4">
                                        <div className="h-px flex-1 bg-zinc-200" />
                                        <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.3em] italic whitespace-nowrap">WHERE SOPs MEET EXECUTION</span>
                                        <div className="h-px flex-1 bg-zinc-200" />
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Variation 3: The Technical Grid */}
                            <ConceptCard 
                                variant="CONCEPT C"
                                title="Technical Grid"
                                description="Emphasis on 'Spreadsheet-Native' origins using a 2x2 grid in primary Green."
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="grid grid-cols-2 gap-1.5">
                                        <div className="w-3.5 h-3.5 rounded-sm bg-[#1F3A34]" />
                                        <div className="w-3.5 h-3.5 rounded-sm bg-[#B89B5E]" />
                                        <div className="w-3.5 h-3.5 rounded-sm bg-[#B89B5E]/30" />
                                        <div className="w-3.5 h-3.5 rounded-sm bg-[#1F3A34]" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black uppercase tracking-[-0.05em] italic text-[#1F3A34] leading-none">MoreMeets™</span>
                                        <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-2">OPERATIONAL INFRASTRUCTURE</span>
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Variation 4: Minimalist Sans */}
                            <ConceptCard 
                                variant="CONCEPT D"
                                title="Minimalist Green"
                                description="Clean, high-end sans typography using Green for 'More' and Gold for 'Meets'."
                            >
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-1">
                                        <span className="text-3xl font-black italic uppercase tracking-tighter text-[#1F3A34]">MORE</span>
                                        <span className="text-3xl font-light italic uppercase tracking-tighter text-[#B89B5E]">MEETS</span>
                                    </div>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="w-8 h-px bg-zinc-200" />
                                        <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.5em] leading-none">INSTITUTIONAL GRADE</span>
                                        <div className="w-8 h-px bg-zinc-200" />
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Variation 5: The Command Dot */}
                            <ConceptCard 
                                variant="CONCEPT E"
                                title="Command Pulse"
                                description="Forest Green wordmark with a Muted Gold 'Live Status' pulse. Simple and iconic."
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#B89B5E] shadow-[0_0_15px_rgba(184,155,94,0.5)] animate-pulse" />
                                        <span className="text-4xl font-black font-headline text-[#1F3A34] uppercase italic tracking-tighter">MoreMeets</span>
                                    </div>
                                    <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em] italic mt-2">SPREADSHEET-NATIVE</span>
                                </div>
                            </ConceptCard>

                        </div>
                    </div>

                    {/* SECTION 2: COMMAND MODE (DARK GREEN BACKGROUND) */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">COMMAND MODE (ON FOREST GREEN)</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        
                        <div className="max-w-3xl mx-auto">
                            <ConceptCard 
                                variant="SOVEREIGN PRIMARY"
                                title="The Institutional Standard"
                                description="Optimized for dark-theme hero sections. White/Gold on Deep Forest Green."
                                bg="bg-[#1F3A34]"
                                isDark={true}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white shadow-2xl backdrop-blur-md">
                                            <CheckSquare className="w-8 h-8" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-4xl font-black font-headline italic uppercase tracking-tighter text-white leading-none">MoreMeets<span className="text-[#B89B5E]">™</span></h2>
                                            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.6em] mt-3 leading-none">OPERATIONAL INFRASTRUCTURE</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/5 w-full flex justify-center">
                                         <p className="text-[8px] font-mono text-[#B89B5E] uppercase tracking-[0.2em]">[ SYSTEM_STATUS: VERIFIED_EXECUTION ]</p>
                                    </div>
                                </div>
                            </ConceptCard>
                        </div>
                    </div>

                    {/* Branding Footer */}
                    <div className="pt-20 border-t border-zinc-100 flex flex-col items-center gap-10">
                        <div className="space-y-4 text-center">
                            <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[1em] italic">SOVEREIGN_SYSTEM_DESIGN_2025</p>
                            <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-900">Which identity commands most <span style={{ color: BRAND_GOLD }}>Authority?</span></h3>
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
