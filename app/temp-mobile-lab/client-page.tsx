'use client';

import React from 'react';
import { 
    Check, 
    ArrowRight, 
    CheckSquare, 
    Activity, 
    ShieldCheck, 
    History, 
    LayoutGrid, 
    ClipboardCheck, 
    Menu,
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const PrototypeFrame = ({ children, id, label, description }: { children: React.ReactNode, id: string, label: string, description: string }) => (
    <div className="w-full py-12 border-b border-zinc-200">
        <div className="container px-6 mx-auto mb-10">
            <div className="space-y-1 pl-4 border-l-4 border-emerald-500">
                <h2 className="text-sm font-black uppercase tracking-tighter text-zinc-950">Variation {id}: {label}</h2>
                <p className="text-xs text-zinc-500 italic font-medium">{description}</p>
            </div>
        </div>
        {/* Device Frame Simulation */}
        <div className="flex justify-center px-4">
            <div className="w-full max-w-[375px] h-[812px] rounded-[3.5rem] border-[12px] border-zinc-900 bg-[#F8F6F2] overflow-hidden shadow-2xl relative ring-1 ring-black/5">
                {children}
            </div>
        </div>
    </div>
);

const MobileHeader = () => (
    <header className="px-6 h-[60px] flex items-center bg-[#F8F6F2]/80 backdrop-blur-md border-b border-black/5 sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#2E7D5A' }}>
                <CheckSquare className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
            <div className="flex flex-col">
                <span className="font-headline text-xs font-bold leading-none tracking-tight text-[#111111]">MoreMeets™</span>
                <span className="text-[7px] font-bold uppercase tracking-[0.1em] text-[#6B7280] leading-none mt-0.5">Sovereign Pro</span>
            </div>
        </div>
        <div className="ml-auto">
            <Menu className="w-5 h-5 text-zinc-400" />
        </div>
    </header>
);

const BronzeEyebrow = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
        <div className="w-6 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
        <span className="text-[7.5px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
            LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
        </span>
    </div>
);

const Headline = ({ className }: { className?: string }) => (
    <h1 className={cn("text-[26px] font-extrabold font-headline leading-[0.95] uppercase italic tracking-tighter text-[#121212]", className)}>
        YOUR BUSINESS SHOULD NOT <br />
        <span className="relative inline-block mt-1">
            DEPEND ON MEMORY.
            <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#D6A85F]/30 rounded-full" />
        </span>
    </h1>
);

const BodyText = ({ className }: { className?: string }) => (
    <p className={cn("text-[14px] font-normal leading-[1.6] text-[#4B5563]", className)}>
        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking — so work gets done properly, even during busy shifts, staff changes, or manager absence.
    </p>
);

const TrustLine = ({ className }: { className?: string }) => (
    <div className={cn("flex flex-col gap-1.5", className)}>
        {[
            "Works directly on Google Sheets.",
            "No new apps to learn."
        ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2 h-2 text-[#2E7D5A]" />
                </div>
                <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wide">{text}</span>
            </div>
        ))}
    </div>
);

const PrimaryCTA = ({ className }: { className?: string }) => (
    <button className={cn("h-14 px-8 rounded-2xl bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] active:scale-95 transition-all w-full", className)}>
        See the system
    </button>
);

export default function MobileLabClient() {
    return (
        <div className="bg-[#F8F6F2] pb-40">
            
            <div className="container px-6 pt-16 pb-8 mx-auto text-center space-y-4">
                <h1 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-[#111111]">
                    Mobile <span className="text-[#2E7D5A]">Sync Lab</span>
                </h1>
                <p className="text-zinc-500 italic font-medium text-sm">All variations synchronized with Design Lab web content.</p>
            </div>

            {/* 1.1 THE SOVEREIGN STANDARD */}
            <PrototypeFrame 
                id="1.1" 
                label="Sovereign Standard" 
                description="Magazine-style stack. Solid separation between motion and mandate."
            >
                <div className="flex flex-col h-full bg-[#F8F6F2] overflow-y-auto no-scrollbar">
                    <MobileHeader />
                    <div className="w-full aspect-[4/5] bg-zinc-200 relative overflow-hidden">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5]" frameBorder="0" allow="autoplay; fullscreen" />
                        <div className="absolute inset-0 bg-black/5" />
                    </div>
                    <div className="p-8 space-y-6 flex flex-col justify-start">
                        <BronzeEyebrow />
                        <Headline />
                        <BodyText />
                        <TrustLine />
                        <div className="pt-2">
                            <PrimaryCTA />
                            <button className="w-full mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5F6368] flex items-center justify-center gap-2 group">
                                Watch Teams Use It <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-auto py-2 flex justify-center">
                        <div className="w-32 h-1 rounded-full bg-black/10" />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.4 THE CINEMATIC MERGE (ONE GLANCE) */}
            <PrototypeFrame 
                id="1.4" 
                label="The Cinematic Merge" 
                description="Gradient dissolve blending the café motion into the editorial narrative."
            >
                <div className="flex flex-col h-full bg-[#F8F6F2] overflow-hidden">
                    <MobileHeader />
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.6] opacity-80" frameBorder="0" allow="autoplay; fullscreen" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F6F2]" />
                    </div>
                    
                    <div className="px-8 pb-10 space-y-7 -mt-6 relative z-10">
                        <div className="space-y-3">
                            <BronzeEyebrow />
                            <Headline className="text-[28px]" />
                            <BodyText className="text-[13px] italic" />
                        </div>
                        
                        <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-6 rounded-[2rem] space-y-4 shadow-sm">
                            <TrustLine />
                            <PrimaryCTA />
                        </div>
                        
                        <div className="flex justify-center">
                            <button className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                                <Smartphone className="w-3 h-3" /> MOBILE_ENGINE_ACTIVE
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-auto py-2 flex justify-center">
                        <div className="w-32 h-1 rounded-full bg-black/10" />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.5 THE COMMAND HUB (APP FEEL) */}
            <PrototypeFrame 
                id="1.5" 
                label="The Command Hub" 
                description="Software-first layout with bottom navigation tray and system status pulse."
            >
                <div className="flex flex-col h-full bg-[#F8F6F2] relative">
                    <div className="px-8 h-8 flex items-center justify-between text-[8px] font-black text-zinc-500 uppercase tracking-widest bg-zinc-950/5">
                        <span>9:41 AM</span>
                        <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             <span>SYNC_SECURED</span>
                        </div>
                    </div>
                    
                    <MobileHeader />

                    <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
                        <div className="w-full aspect-[4/3] bg-zinc-200 relative overflow-hidden">
                            <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5] brightness-[0.8]" frameBorder="0" allow="autoplay; fullscreen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        
                        <div className="p-8 space-y-7">
                            <div className="space-y-2">
                                <BronzeEyebrow />
                                <Headline />
                            </div>
                            
                            <div className="p-6 bg-[#111111] text-white rounded-3xl space-y-5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck className="w-16 h-16" />
                                </div>
                                <p className="text-xs font-bold italic leading-relaxed relative z-10 text-white/70">
                                    Deploy a live operational system your team can actually use. Built in Excel. Powered by Sheets.
                                </p>
                                <button className="h-12 bg-emerald-500 text-black font-black uppercase text-[9px] tracking-widest rounded-xl w-full relative z-10">
                                    SEE SYSTEM INTERFACE
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em] italic">TRUST PROTOCOL</p>
                                <TrustLine />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/5 px-8 pt-4 pb-8 flex justify-between items-center z-50">
                        <div className="flex flex-col items-center gap-1">
                            <LayoutGrid className="w-5 h-5 text-emerald-600" />
                            <span className="text-[7px] font-black text-zinc-400 uppercase">TASKS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-20">
                            <Activity className="w-5 h-5 text-zinc-400" />
                            <span className="text-[7px] font-black text-zinc-400 uppercase">VITALS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-20">
                            <ClipboardCheck className="w-5 h-5 text-zinc-400" />
                            <span className="text-[7px] font-black text-zinc-400 uppercase">AUDIT</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-20">
                            <History className="w-5 h-5 text-zinc-400" />
                            <span className="text-[7px] font-black text-zinc-400 uppercase">VAULT</span>
                        </div>
                    </div>
                </div>
            </PrototypeFrame>
        </div>
    );
}
