'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const ComparisonSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-6 py-12 border-b border-zinc-200">
        <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400 pl-4 border-l-4 border-emerald-500">{title}</h2>
        <div className="grid gap-12">
            {children}
        </div>
    </div>
);

const ViewportSim = ({ width, label, children }: { width: string, label: string, children: React.ReactNode }) => (
    <div className="space-y-2">
        <p className="text-[10px] font-bold text-zinc-500 uppercase">{label} ({width})</p>
        <div className="border border-zinc-200 bg-white overflow-hidden shadow-xl" style={{ width: width, height: '500px' }}>
            {children}
        </div>
    </div>
);

const MobileSim = ({ label, offset }: { label: string, offset: string }) => (
    <div className="space-y-4">
        <p className="text-[10px] font-bold text-zinc-500 uppercase text-center">{label}</p>
        <div className="w-[320px] h-[568px] border-[8px] border-zinc-900 rounded-[2.5rem] bg-black overflow-hidden shadow-2xl relative mx-auto">
             <div className="absolute inset-0 z-0">
                <iframe 
                    src={VIMEO_URL} 
                    className={cn("absolute inset-0 w-full h-full scale-[1.5] brightness-[0.7]")} 
                    style={{ transform: `scale(1.5) translateY(${offset})` }}
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                />
            </div>
            <div className="relative z-10 p-6 pt-12">
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[8px]">OFFSET: {offset}</Badge>
            </div>
        </div>
    </div>
);

export default function HeroLab() {
    return (
        <div className="min-h-screen bg-zinc-50 p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-20">
                
                <div className="space-y-2">
                    <h1 className="text-3xl font-black italic uppercase tracking-tighter">Sovereign Visual Lab</h1>
                    <p className="text-sm text-zinc-500 font-medium">Verify hero typography and video framing before live deployment.</p>
                </div>

                {/* 1. TYPOGRAPHY COMPARISON */}
                <ComparisonSection title="1. Desktop Hero Typography (H1 Only)">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* CURRENT VERSION */}
                        <ViewportSim width="100%" label="CURRENT: CAPTURE MEMORY (Italic/8xl)">
                            <div className="h-full flex items-center px-12 bg-black">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br /><span className="text-[#B89B5E]">MEMORY.</span>
                                </h1>
                            </div>
                        </ViewportSim>

                        {/* PROPOSED VERSION */}
                        <ViewportSim width="100%" label="PROPOSED: IMPERATIVE (Normal/7xl)">
                            <div className="h-full flex items-center px-12 bg-black">
                                <h1 className="text-5xl md:text-7xl font-black font-headline text-white leading-[1.0] uppercase tracking-tighter max-w-4xl">
                                    YOUR BUSINESS SHOULD NOT <br />
                                    <span className="text-[#B89B5E]">DEPEND ON MEMORY.</span>
                                </h1>
                            </div>
                        </ViewportSim>
                    </div>
                </ComparisonSection>

                {/* 2. MOBILE FRAMING COMPARISON */}
                <ComparisonSection title="2. Mobile Video Framing (translate-y test)">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <MobileSim label="CURRENT (-10%)" offset="-10%" />
                        <MobileSim label="NEUTRAL (0%)" offset="0%" />
                        <MobileSim label="TILT UP (+5%)" offset="5%" />
                        <MobileSim label="TILT UP (+10%)" offset="10%" />
                    </div>
                    <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <p className="text-xs text-emerald-800 font-bold italic">
                            Recommendation: +10% offset (Right) captures faces and hand-interactions, which are the emotional anchor of the service narrative.
                        </p>
                    </div>
                </ComparisonSection>

            </div>
        </div>
    );
}