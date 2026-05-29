'use client';

import React, { useState } from 'react';
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
    Smartphone,
    Share2,
    Mail,
    Link as LinkIcon,
    MessageSquare,
    X,
    MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const PrototypeFrame = ({ children, id, label, description }: { children: React.ReactNode, id: string, label: string, description: string }) => (
    <div className="w-full py-12 border-b border-zinc-200">
        <div className="container px-6 mx-auto mb-10">
            <div className="space-y-1 pl-4 border-l-4 border-emerald-500">
                <h2 className="text-sm font-black uppercase tracking-tighter text-zinc-950">Variation {id}: {label}</h2>
                <p className="text-xs text-zinc-700 italic font-bold">{description}</p>
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
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#1F3A34' }}>
                <CheckSquare className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
            <div className="flex flex-col">
                <span className="font-headline text-xs font-bold leading-none tracking-tight text-[#111111]">MoreMeets™</span>
                <span className="text-[7px] font-bold uppercase tracking-[0.1em] text-zinc-800 leading-none mt-0.5">Sovereign Pro</span>
            </div>
        </div>
        <div className="ml-auto">
            <Menu className="w-5 h-5 text-zinc-600" />
        </div>
    </header>
);

const BronzeEyebrow = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
        <div className="w-6 h-px bg-[#8B6B3F] opacity-60 shrink-0" />
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
    <p className={cn("text-[14px] font-bold leading-[1.6] text-zinc-800", className)}>
        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking — so work gets done properly, even during busy shifts.
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

const ShareSheet = () => (
    <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[2.5rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)] p-8 pt-6 space-y-8 animate-in slide-in-from-bottom-full duration-500">
        <div className="flex justify-center mb-2">
            <div className="w-12 h-1.5 rounded-full bg-zinc-100" />
        </div>
        <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Institutional Share</h4>
            <X className="w-4 h-4 text-zinc-400" />
        </div>
        
        <div className="grid grid-cols-4 gap-4">
            {[
                { label: "WhatsApp", icon: MessageSquare, color: "bg-emerald-50 text-emerald-600" },
                { label: "Email", icon: Mail, color: "bg-blue-50 text-blue-600" },
                { label: "Copy Link", icon: LinkIcon, color: "bg-zinc-100 text-zinc-900" },
                { label: "More", icon: MoreHorizontal, color: "bg-zinc-50 text-zinc-400" }
            ].map((option, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform active:scale-90 shadow-sm", option.color)}>
                        <option.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{option.label}</span>
                </div>
            ))}
        </div>

        <div className="space-y-3 pt-2">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">RECIPIENT ACCESS</p>
            <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-zinc-500" />
                    <span className="text-[10px] font-bold uppercase italic text-zinc-900">Mobile Ledger v18.5</span>
                </div>
                <Badge variant="outline" className="text-[8px] font-black uppercase border-emerald-500/20 text-emerald-600 bg-emerald-50 px-2 py-0.5">READ-ONLY</Badge>
            </div>
        </div>
    </div>
);

export default function MobileLabClient() {
    return (
        <div className="bg-[#F8F6F2] pb-40">
            
            <div className="container px-6 pt-16 pb-8 mx-auto text-center space-y-4">
                <h1 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-[#111111]">
                    Mobile <span className="text-[#1F3A34]">Sync Lab</span>
                </h1>
                <p className="text-zinc-800 italic font-bold text-sm">Testing institutional archetypes and visibility protocols.</p>
            </div>

            {/* 1.6 THE SHARE PROTOCOL */}
            <PrototypeFrame 
                id="1.6" 
                label="The Share Protocol" 
                description="Institutional distribution layer. Optimized for peer-to-peer operational transfers."
            >
                <div className="flex flex-col h-full bg-zinc-100/50 relative overflow-hidden">
                    <MobileHeader />
                    
                    <div className="p-8 space-y-8 blur-[2px] opacity-30 pointer-events-none">
                        <div className="space-y-4">
                            <BronzeEyebrow />
                            <Headline />
                        </div>
                        <div className="p-6 bg-white rounded-[2rem] shadow-sm border border-black/5">
                            <TrustLine />
                        </div>
                    </div>

                    {/* Dark Overlay for Active Sheet */}
                    <div className="absolute inset-0 bg-black/40 z-40 transition-opacity duration-500" />
                    
                    <div className="relative z-50 h-full flex flex-col justify-end">
                        <ShareSheet />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.1 THE SOVEREIGN STANDARD */}
            <PrototypeFrame 
                id="1.1" 
                label="Sovereign Standard" 
                description="Magazine-style stack. High-contrast hardened grey text."
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
                            <button className="w-full mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 flex items-center justify-center gap-2 group">
                                Watch Teams Use It <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-auto py-2 flex justify-center">
                        <div className="w-32 h-1 rounded-full bg-black/10" />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.4 THE CINEMATIC MERGE */}
            <PrototypeFrame 
                id="1.4" 
                label="The Cinematic Merge" 
                description="Gradient dissolve with legible high-density grey narratives."
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
                            <BodyText className="text-[13px] italic text-zinc-900" />
                        </div>
                        
                        <div className="bg-white/60 backdrop-blur-xl border border-black/5 p-6 rounded-[2rem] space-y-4 shadow-sm">
                            <TrustLine />
                            <PrimaryCTA />
                        </div>
                        
                        <div className="flex justify-center">
                            <button className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-800 flex items-center gap-2">
                                <Smartphone className="w-3 h-3" /> MOBILE_ENGINE_ACTIVE
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-auto py-2 flex justify-center">
                        <div className="w-32 h-1 rounded-full bg-black/10" />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.5 THE COMMAND HUB */}
            <PrototypeFrame 
                id="1.5" 
                label="The Command Hub" 
                description="Software-first layout with high-visibility status telemetry."
            >
                <div className="flex flex-col h-full bg-[#F8F6F2] relative">
                    <div className="px-8 h-8 flex items-center justify-between text-[8px] font-black text-zinc-800 uppercase tracking-widest bg-zinc-950/5">
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
                                <p className="text-xs font-bold italic leading-relaxed relative z-10 text-white/90">
                                    Deploy a live operational system your team can actually use. Built in Excel. Powered by Sheets.
                                </p>
                                <button className="h-12 bg-emerald-500 text-black font-black uppercase text-[9px] tracking-widest rounded-xl w-full relative z-10">
                                    SEE SYSTEM INTERFACE
                                </button>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] italic">TRUST PROTOCOL</p>
                                <TrustLine />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/5 px-8 pt-4 pb-8 flex justify-between items-center z-50">
                        <div className="flex flex-col items-center gap-1">
                            <LayoutGrid className="w-5 h-5 text-emerald-600" />
                            <span className="text-[7px] font-black text-zinc-800 uppercase">TASKS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                            <Activity className="w-5 h-5 text-zinc-600" />
                            <span className="text-[7px] font-black text-zinc-800 uppercase">VITALS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-40">
                            <ClipboardCheck className="w-5 h-5 text-zinc-600" />
                            <span className="text-[7px] font-black text-zinc-800 uppercase">AUDIT</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <Share2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-[7px] font-black text-zinc-800 uppercase">SHARE</span>
                        </div>
                    </div>
                </div>
            </PrototypeFrame>
        </div>
    );
}
