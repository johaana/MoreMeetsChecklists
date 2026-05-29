'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight,
    Search,
    Maximize,
    ZoomIn,
    Crop,
    Monitor,
    Check,
    ShieldCheck,
    CheckSquare,
    Command,
    Fingerprint
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const MASTER_LOGO_URL = "https://i.postimg.cc/L55mTYQP/Whats-App-Image-2026-05-29-at-15-05-10.jpg";

interface LogoOptionProps {
    id: string;
    title: string;
    description: string;
    className: string;
    imgClassName?: string;
}

const LogoOption = ({ id, title, description, className, imgClassName }: LogoOptionProps) => (
    <div className="flex flex-col gap-6 p-8 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group">
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">OPTION {id}</span>
                <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-zinc-200">EXISTING ASSET</Badge>
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{title}</h3>
            <p className="text-xs text-zinc-500 font-medium italic leading-relaxed">{description}</p>
        </div>

        <div className="h-48 bg-[#F8F6F2] rounded-2xl border border-zinc-100 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-200/50" />
            <div className={cn("overflow-hidden flex items-center justify-center transition-all duration-500", className)}>
                <img 
                    src={MASTER_LOGO_URL} 
                    alt="MoreMeets Logo" 
                    className={cn("h-full w-auto object-contain transition-all duration-500", imgClassName)} 
                />
            </div>
        </div>
    </div>
);

const ConceptCard = ({ title, color, children, description, variant }: { title: string, color: string, children: React.ReactNode, description: string, variant: string }) => (
    <div className="flex flex-col gap-6 p-8 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group">
        <div className="space-y-1 text-left">
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">{variant}</span>
                <Badge className="text-[8px] font-black uppercase tracking-widest rounded-none" style={{ backgroundColor: color }}>PROPOSED CONCEPT</Badge>
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{title}</h3>
            <p className="text-xs text-zinc-500 font-medium italic leading-relaxed">{description}</p>
        </div>
        <div className="h-56 bg-zinc-950 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-black transition-colors duration-700">
             {/* Background Detail */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
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
                            IDENTITY IMPLEMENTATION LAB V7.0
                        </Badge>
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.85]">
                                Brand <span className="text-zinc-300">Evolution.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto pt-4">
                                Testing crops of existing assets and exploring new institutional concepts.
                            </p>
                        </div>
                    </div>

                    {/* SECTION 1: EXISTING ASSET REFINEMENTS */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">ASSET REFINEMENT</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <LogoOption 
                                id="01"
                                title="Standard 1.4x Zoom"
                                description="Balanced framing for secondary navigation pages."
                                className="h-11 w-32 bg-zinc-950 rounded-full shadow-lg"
                                imgClassName="scale-[1.4]"
                            />
                            <LogoOption 
                                id="05"
                                title="REFINED FLOATING BLOCK (PRO)"
                                description="2.4x aggressive zoom with high-contrast filter for maximum legibility."
                                className="h-14 w-32 bg-zinc-950 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
                                imgClassName="scale-[2.4] brightness-125 contrast-125"
                            />
                            <LogoOption 
                                id="04"
                                title="Ultra Edge-to-Edge"
                                description="Extreme 2.8x zoom focusing purely on the wordmark."
                                className="h-12 w-40"
                                imgClassName="scale-[2.8]"
                            />
                        </div>
                    </div>

                    {/* SECTION 2: NEW DESIGN CONCEPTS (CODE-BASED) */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="h-px flex-1 bg-zinc-200" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">NEW CONCEPTS (GOLD)</span>
                            <div className="h-px flex-1 bg-zinc-200" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {/* Concept 1: The Sovereign Shield */}
                            <ConceptCard 
                                title="The Sovereign Shield"
                                color="#D4AF37"
                                variant="CONCEPT A"
                                description="Focuses on the 'Governance' aspect. A minimal shield with integrated checkmark."
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-[#D4AF37] text-[#D4AF37]">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1">
                                                <span className="text-xl font-normal text-white/40 tracking-tighter">More</span>
                                                <span className="text-xl font-black text-white tracking-tighter uppercase italic">Meets™</span>
                                            </div>
                                            <span className="text-[6px] font-black text-[#D4AF37] uppercase tracking-[0.4em] mt-0.5 leading-none">WHERE SOPs MEET EXECUTION</span>
                                        </div>
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Concept 2: The Modern Executive */}
                            <ConceptCard 
                                title="Modern Executive"
                                color="#C5A059"
                                variant="CONCEPT B"
                                description="A clean, typographic approach using Champagne Gold and a thin 'Logic' divider."
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white flex items-center">
                                        MORE<span className="text-[#C5A059] ml-1">MEETS</span>
                                    </h2>
                                    <div className="w-full flex items-center gap-3">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="text-[7px] font-black text-zinc-500 uppercase tracking-[0.5em] italic whitespace-nowrap">WHERE SOPs MEET EXECUTION</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Concept 3: The Technical Grid */}
                            <ConceptCard 
                                title="The Technical Grid"
                                color="#B89B5E"
                                variant="CONCEPT C"
                                description="Emphasizes 'Spreadsheet-Native' origins using a square grid motif."
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="grid grid-cols-2 gap-1 mb-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#B89B5E]" />
                                        <div className="w-3 h-3 rounded-sm bg-[#B89B5E]/40" />
                                        <div className="w-3 h-3 rounded-sm bg-[#B89B5E]/40" />
                                        <div className="w-3 h-3 rounded-sm bg-[#B89B5E]/40" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-black uppercase tracking-[-0.05em] italic text-white leading-none">MoreMeets™</span>
                                        <span className="text-[8px] font-bold text-[#B89B5E] uppercase tracking-[0.2em] mt-2">WHERE SOPs MEET EXECUTION</span>
                                    </div>
                                </div>
                            </ConceptCard>

                            {/* Concept 4: The Minimalist Sans */}
                            <ConceptCard 
                                title="Minimalist Sans"
                                color="#E3B448"
                                variant="CONCEPT D"
                                description="A luxury-grade typographic mark focusing on the contrast of heavy vs light weights."
                            >
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center gap-1">
                                        <span className="text-3xl font-black italic uppercase tracking-tighter text-white">MORE</span>
                                        <span className="text-3xl font-light italic uppercase tracking-tighter text-[#E3B448]">MEETS</span>
                                    </div>
                                    <span className="text-[7px] font-black text-white/20 uppercase tracking-[0.6em] mt-3 border-t border-white/10 pt-2">OPERATIONAL INFRASTRUCTURE</span>
                                </div>
                            </ConceptCard>

                             {/* Concept 5: The Command Dot */}
                             <ConceptCard 
                                title="The Command Dot"
                                color="#D6A85F"
                                variant="CONCEPT E"
                                description="Uses a 'Live Status' pulse motif. Simple, bold, and high-impact."
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#D6A85F] shadow-[0_0_10px_rgba(214,168,95,0.5)]" />
                                        <span className="text-4xl font-black font-headline text-white uppercase italic tracking-tighter">MoreMeets</span>
                                    </div>
                                    <span className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.4em] italic mt-2">WHERE SOPs MEET EXECUTION</span>
                                </div>
                            </ConceptCard>

                            {/* Concept 6: The Forensic Mark */}
                            <ConceptCard 
                                title="The Forensic Mark"
                                color="#A5915F"
                                variant="CONCEPT F"
                                description="Monospace technical look, mimicking operational ledgers and print-outs."
                            >
                                <div className="flex flex-col items-start bg-white/[0.03] p-6 border border-white/5 rounded-xl">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-black font-mono uppercase text-white leading-none tracking-tighter">MORE_MEETS_V1.0</span>
                                        <div className="h-1 w-full bg-[#A5915F] mt-1" />
                                    </div>
                                    <span className="text-[8px] font-mono text-white/40 mt-4 leading-none">[STATUS: VERIFIED_EXECUTION]</span>
                                    <span className="text-[8px] font-mono text-[#A5915F] mt-1 leading-none">WHERE_SOPs_MEET_EXECUTION</span>
                                </div>
                            </ConceptCard>

                        </div>
                    </div>

                    {/* Branding Footer */}
                    <div className="pt-20 border-t border-zinc-100 flex flex-col items-center gap-10">
                        <div className="space-y-4 text-center">
                            <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[1em] italic">SOVEREIGN_SYSTEM_MARKS_2025</p>
                            <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-900">Which identity commands most <span className="text-emerald-600">Authority?</span></h3>
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
