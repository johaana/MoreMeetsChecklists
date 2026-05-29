'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight,
    Check,
    Monitor,
    Smartphone,
    Layout,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const MASTER_LOGO_URL = "https://i.postimg.cc/L55mTYQP/Whats-App-Image-2026-05-29-at-15-05-10.jpg";
const DESCRIPTOR = "SPREADSHEET-NATIVE OPERATIONAL INFRASTRUCTURE";

interface LogoOptionProps {
    id: string;
    title: string;
    description: string;
    className: string;
    imgClassName?: string;
    showDescriptor?: boolean;
}

const LogoOption = ({ id, title, description, className, imgClassName, showDescriptor = true }: LogoOptionProps) => (
    <div className="flex flex-col gap-6 p-8 rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group">
        <div className="space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">OPTION {id}</span>
                <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-zinc-200">PROTOTYPE</Badge>
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{title}</h3>
            <p className="text-xs text-zinc-500 font-medium italic leading-relaxed">{description}</p>
        </div>

        {/* PREVIEW AREA (Simulating Header context) */}
        <div className="h-40 bg-[#F8F6F2] rounded-2xl border border-zinc-100 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-200/50" />
            
            <div className="flex flex-col items-center gap-2">
                <div className={cn("overflow-hidden transition-all duration-500", className)}>
                    <img 
                        src={MASTER_LOGO_URL} 
                        alt="MoreMeets Logo" 
                        className={cn("h-full w-auto object-contain", imgClassName)} 
                    />
                </div>
                {showDescriptor && (
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 leading-none">
                        {DESCRIPTOR}
                    </span>
                )}
            </div>
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
                <div className="container mx-auto max-w-6xl space-y-20">
                    
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.6em] font-black text-[10px] px-10 py-3 rounded-none bg-white shadow-sm italic">
                            IDENTITY IMPLEMENTATION LAB V4.0
                        </Badge>
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-[6rem] font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.85]">
                                Framing <span className="text-zinc-300">Options.</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto pt-4">
                                Testing how to best house the master asset in the daylight header.
                            </p>
                        </div>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <LogoOption 
                            id="01"
                            title="The Matte Capsule"
                            description="A dark container that blends the logo's black background, creating a unified 'button' feel."
                            className="h-10 px-6 bg-zinc-950 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105"
                            imgClassName="scale-125"
                        />

                        <LogoOption 
                            id="02"
                            title="The Refined Pill"
                            description="An evolution of your current design. Larger padding and a subtle border to make it feel more intentional."
                            className="h-12 px-8 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm group-hover:bg-zinc-50"
                            imgClassName="scale-110"
                        />

                        <LogoOption 
                            id="03"
                            title="The Gold Stamp"
                            description="Adding a hairline gold border to anchor the logo and connect it to the brand's primary accent color."
                            className="h-11 px-6 bg-zinc-950 rounded-xl border border-[#B89B5E]/30 flex items-center justify-center shadow-xl"
                            imgClassName="scale-125"
                        />

                        <LogoOption 
                            id="04"
                            title="The Edge-to-Edge"
                            description="Minimalist approach. Removing the container entirely and using a larger scale to emphasize the built-in tagline."
                            className="h-10 flex items-center justify-center"
                            imgClassName="scale-[1.75]"
                            showDescriptor={false}
                        />

                        <LogoOption 
                            id="05"
                            title="The Floating Block"
                            description="A modern square-rounded block with a high-contrast shadow. Good for tech-heavy positioning."
                            className="h-14 w-32 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                            imgClassName="scale-150"
                        />

                        <LogoOption 
                            id="06"
                            title="The Glass Vault"
                            description="A semi-transparent blur container. Best for headers that scroll over imagery or varied content."
                            className="h-11 px-8 bg-zinc-950/90 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center"
                            imgClassName="scale-110"
                        />

                    </div>

                    {/* Branding Footer */}
                    <div className="pt-20 border-t border-zinc-100 flex flex-col items-center gap-10">
                        <div className="space-y-4 text-center">
                            <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[1em] italic">SOVEREIGN_SYSTEM_MARKS_2025</p>
                            <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-900">Which framing commands most <span className="text-emerald-600">Authority?</span></h3>
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
