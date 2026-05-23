'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    ChevronRight,
    Smartphone,
    Activity,
    ShieldCheck,
    History,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const PrototypeFrame = ({ children, id, label, description }: { children: React.ReactNode, id: string, label: string, description: string }) => (
    <div className="w-full py-12 border-b border-zinc-200">
        <div className="container px-6 mx-auto mb-10">
            <div className="space-y-1 pl-4 border-l-4 border-emerald-500">
                <h2 className="text-sm font-black uppercase tracking-tighter text-zinc-950">Prototype {id}: {label}</h2>
                <p className="text-xs text-zinc-500 italic font-medium">{description}</p>
            </div>
        </div>
        {/* Device Frame Simulation */}
        <div className="flex justify-center px-4">
            <div className="w-full max-w-[375px] h-[780px] rounded-[3rem] border-[8px] border-zinc-900 bg-white overflow-hidden shadow-2xl relative ring-1 ring-black/5">
                {children}
            </div>
        </div>
    </div>
);

const Headline = ({ className }: { className?: string }) => (
    <h1 className={cn("text-[32px] font-extrabold font-headline leading-[0.95] uppercase italic tracking-tighter text-[#121212]", className)}>
        YOUR BUSINESS <br />
        SHOULD NOT <br />
        <span className="relative inline-block">
            DEPEND ON MEMORY.
            <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#D6A85F]/30 rounded-full" />
        </span>
    </h1>
);

const BodyText = ({ className }: { className?: string }) => (
    <p className={cn("text-[14px] font-normal leading-[1.6] text-[#4B5563]", className)}>
        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking.
    </p>
);

const TrustLine = ({ className }: { className?: string }) => (
    <div className={cn("flex flex-col gap-1.5", className)}>
        {[
            "Works directly on Google Sheets.",
            "No new apps. No training headaches."
        ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                </div>
                <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wide">{text}</span>
            </div>
        ))}
    </div>
);

const PrimaryCTA = ({ className }: { className?: string }) => (
    <button className={cn("h-14 px-8 rounded-2xl bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-lg active:scale-95 transition-all w-full", className)}>
        See the system
    </button>
);

export default function MobileLabClient() {
    return (
        <div className="bg-[#F6F1E8] pb-40">
            {/* 1. THE EDITORIAL STACK */}
            <PrototypeFrame 
                id="01" 
                label="The Editorial Stack" 
                description="Magazine-style: Top video anchor, bottom white field for 100% clarity."
            >
                <div className="flex flex-col h-full bg-[#F6F1E8]">
                    <div className="w-full aspect-[4/5] bg-zinc-200 relative overflow-hidden">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5]" frameBorder="0" allow="autoplay; fullscreen" />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="flex-1 p-8 space-y-6 flex flex-col justify-start">
                        <div className="space-y-4">
                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8B6B3F] font-headline block">── RETAIL & HOSPITALITY</span>
                            <Headline />
                            <BodyText />
                        </div>
                        <TrustLine />
                        <div className="pt-2">
                            <PrimaryCTA />
                            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-4 block text-center">Watch Teams Use It →</Link>
                        </div>
                    </div>
                </div>
            </PrototypeFrame>

            {/* 2. THE IMMERSIVE HUD */}
            <PrototypeFrame 
                id="02" 
                label="The Immersive HUD" 
                description="Full-screen video, floating bottom CTA. Tech-luxury feel."
            >
                <div className="relative h-full bg-black">
                    <div className="absolute inset-0 z-0">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5]" frameBorder="0" allow="autoplay; fullscreen" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent h-[60%]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col p-8 pt-12">
                        <div className="space-y-4">
                             <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8B6B3F] font-headline block">── SYSTEM MANDATE</span>
                             <Headline />
                             <BodyText className="text-zinc-700" />
                        </div>
                        <div className="mt-auto space-y-6">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl">
                                <TrustLine />
                            </div>
                            <PrimaryCTA className="shadow-[0_20px_40px_rgba(0,0,0,0.4)]" />
                        </div>
                    </div>
                </div>
            </PrototypeFrame>

            {/* 3. THE SOVEREIGN CARD */}
            <PrototypeFrame 
                id="03" 
                label="The Sovereign Card" 
                description="Information contained in a single floating unit. Premium depth."
            >
                <div className="relative h-full bg-zinc-950">
                    <div className="absolute inset-0 z-0">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5] blur-[2px] opacity-40" frameBorder="0" allow="autoplay; fullscreen" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end p-4 pb-8">
                         <div className="bg-[#F6F1E8] rounded-[2.5rem] p-8 space-y-6 shadow-2xl border border-white/20">
                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8B6B3F] font-headline block">── SOVEREIGN BUILD</span>
                            <Headline />
                            <BodyText />
                            <TrustLine />
                            <div className="pt-2">
                                <PrimaryCTA />
                            </div>
                         </div>
                    </div>
                </div>
            </PrototypeFrame>
        </div>
    );
}
