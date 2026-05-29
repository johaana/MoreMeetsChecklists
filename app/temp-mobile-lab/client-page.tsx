'use client';

import React from 'react';
import { 
    Check, 
    ArrowRight, 
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
    MoreHorizontal,
    GraduationCap,
    Camera
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/icons';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const BRAND_GREEN = "#1F3A34";
const BRAND_GOLD = "#B89B5E";

const PrototypeFrame = ({ children, id, label, description }: { children: React.ReactNode, id: string, label: string, description: string }) => (
    <div className="w-full py-16 border-b border-zinc-200">
        <div className="container px-6 mx-auto mb-10">
            <div className="space-y-1 pl-4 border-l-4" style={{ borderColor: BRAND_GOLD }}>
                <h2 className="text-sm font-black uppercase tracking-tighter text-zinc-950">Variation {id}: {label}</h2>
                <p className="text-xs text-zinc-700 italic font-bold leading-relaxed">{description}</p>
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
    <header className="px-5 h-[64px] flex items-center bg-white/90 backdrop-blur-md border-b border-black/5 sticky top-0 z-50">
        <Logo className="scale-75 origin-left" />
        <div className="ml-auto">
            <Menu className="w-5 h-5 text-zinc-900" />
        </div>
    </header>
);

const InstitutionalEyebrow = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
        <div className="w-6 h-px bg-[#B89B5E] opacity-60 shrink-0" />
        <span className="text-[7.5px] font-black uppercase tracking-[0.15em] text-[#B89B5E] font-headline whitespace-nowrap">
            SPREADSHEET-NATIVE OPERATIONAL INFRASTRUCTURE
        </span>
    </div>
);

const Headline = ({ className }: { className?: string }) => (
    <h1 className={cn("text-[2.2rem] font-bold font-headline leading-[0.9] uppercase italic tracking-tighter", className)} style={{ color: BRAND_GREEN }}>
        CAPTURE <br />
        <span className="relative inline-block mt-1">
            MEMORY.
            <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#B89B5E]/30 rounded-full" />
        </span>
    </h1>
);

const BodyText = ({ className }: { className?: string }) => (
    <p className={cn("text-[13px] font-medium leading-[1.5] text-zinc-800 italic", className)}>
        MoreMeets provides pre-built, industry-specific, fully editable SOP systems with daily tasks, built-in instructions, photo verification, and timestamped proof of execution - so standards are followed even when managers are absent.
    </p>
);

const TrustLine = ({ className }: { className?: string }) => (
    <div className={cn("flex flex-col gap-2", className)}>
        {[
            "Works directly on Google Sheets.",
            "No app-adoption battle.",
            "Works during internet disruptions."
        ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-[#2E7D5A]" />
                </div>
                <span className="text-[10px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
            </div>
        ))}
    </div>
);

const PrimaryCTA = ({ className }: { className?: string }) => (
    <button className={cn("h-14 px-8 rounded-2xl text-black font-black uppercase italic text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] active:scale-95 transition-all w-full", className)} style={{ backgroundColor: BRAND_GOLD }}>
        DEPLOY IN 10 MINUTES • ₹2,499
    </button>
);

const ShareSheet = () => (
    <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[2.5rem] shadow-[0_-20px_80px_-15px_rgba(0,0,0,0.2)] p-8 pt-6 space-y-8 animate-in slide-in-from-bottom-full duration-500 z-50">
        <div className="flex justify-center mb-2">
            <div className="w-12 h-1.5 rounded-full bg-zinc-100" />
        </div>
        <div className="flex items-center justify-between">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900">Institutional Share Protocol</h4>
            <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center">
                <X className="w-4 h-4 text-zinc-400" />
            </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
            {[
                { label: "WhatsApp", icon: MessageSquare, color: "bg-emerald-50 text-emerald-600" },
                { label: "Secure Email", icon: Mail, color: "bg-blue-50 text-blue-600" },
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
            <div className="flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">RECIPIENT ACCESS MODULE</p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-zinc-900" />
                    <span className="text-[10px] font-bold uppercase italic text-zinc-950">Mobile Ledger v18.5</span>
                </div>
                <Badge variant="outline" className="text-[8px] font-black uppercase border-emerald-500/20 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-none">READ-ONLY</Badge>
            </div>
        </div>
    </div>
);

export default function MobileLabClient() {
    return (
        <div className="bg-[#F8F6F2] pb-40 font-sans">
            
            <div className="container px-6 pt-24 pb-12 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-zinc-500 border-zinc-300 uppercase tracking-[0.4em] font-black text-[10px] px-8 py-2 rounded-none bg-white/50 backdrop-blur-md mb-2">
                    LABORATORY V2.5 • IDENTITY SYNC
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-zinc-950 leading-none">
                    MOBILE <span style={{ color: BRAND_GOLD }}>PROTO-LAB.</span>
                </h1>
                <p className="text-zinc-700 italic font-bold text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                    Testing high-gravity institutional archetypes with production color parity and hardened readability.
                </p>
            </div>

            {/* 1.6 THE SHARE PROTOCOL */}
            <PrototypeFrame 
                id="1.6" 
                label="The Share Protocol" 
                description="Deployment of institutional sharing sheet. Optimized for peer-to-peer operational distribution."
            >
                <div className="flex flex-col h-full bg-white relative overflow-hidden">
                    <MobileHeader />
                    
                    <div className="p-8 space-y-8 blur-[3px] opacity-40 pointer-events-none scale-[0.98]">
                        <div className="space-y-4">
                            <InstitutionalEyebrow />
                            <Headline />
                            <BodyText />
                        </div>
                        <div className="p-6 bg-zinc-50 rounded-[2rem] border border-black/5">
                            <TrustLine />
                        </div>
                        <PrimaryCTA />
                    </div>

                    {/* System Overlay */}
                    <div className="absolute inset-0 bg-zinc-900/60 z-40 transition-opacity duration-500" />
                    
                    <div className="relative z-50 h-full flex flex-col justify-end">
                        <ShareSheet />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.1 THE SOVEREIGN STANDARD */}
            <PrototypeFrame 
                id="1.1" 
                label="Sovereign Standard" 
                description="Production parity. Magazine-style stack with hardened high-contrast narrative."
            >
                <div className="flex flex-col h-full bg-white overflow-y-auto no-scrollbar">
                    <MobileHeader />
                    <div className="w-full aspect-[4/5] bg-zinc-900 relative overflow-hidden">
                        <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5] brightness-[0.9]" frameBorder="0" allow="autoplay; fullscreen" />
                        <div className="absolute inset-0 bg-black/5" />
                    </div>
                    <div className="p-8 space-y-7 flex flex-col justify-start">
                        <div className="space-y-3">
                            <InstitutionalEyebrow />
                            <Headline />
                        </div>
                        <BodyText />
                        <TrustLine />
                        <div className="pt-2 space-y-4">
                            <PrimaryCTA />
                            <button className="w-full text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950 flex items-center justify-center gap-3 group italic">
                                WATCH TEAMS OPERATE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-auto py-2 flex justify-center pb-6">
                        <div className="w-32 h-1 rounded-full bg-black/10" />
                    </div>
                </div>
            </PrototypeFrame>

            {/* 1.5 THE COMMAND HUB */}
            <PrototypeFrame 
                id="1.5" 
                label="The Command Hub" 
                description="Software-first layout with high-visibility status telemetry. Optimized for active field duty."
            >
                <div className="flex flex-col h-full bg-white relative">
                    <div className="px-8 h-8 flex items-center justify-between text-[8px] font-black text-zinc-900 uppercase tracking-widest bg-zinc-950/5">
                        <span>12:44 PM</span>
                        <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             <span>SYNC_SECURED_V18.5</span>
                        </div>
                    </div>
                    
                    <MobileHeader />

                    <div className="flex-1 overflow-y-auto no-scrollbar pb-24 bg-[#F8F6F2]">
                        <div className="w-full aspect-[4/3] bg-zinc-900 relative overflow-hidden">
                            <iframe src={VIMEO_URL} className="absolute inset-0 w-full h-full scale-[1.5] brightness-[0.7]" frameBorder="0" allow="autoplay; fullscreen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        
                        <div className="p-8 space-y-8">
                            <div className="space-y-3">
                                <InstitutionalEyebrow />
                                <Headline className="text-[28px]" />
                            </div>
                            
                            <div className="p-6 bg-[#1F3A34] text-white rounded-3xl space-y-5 shadow-2xl relative overflow-hidden border border-white/5">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck className="w-20 h-20 text-[#B89B5E]" />
                                </div>
                                <p className="text-xs font-bold italic leading-relaxed relative z-10 text-white/90">
                                    "Deploy a live operational system your team can actually use. Built in Excel. Powered by Sheets."
                                </p>
                                <button className="h-12 text-black font-black uppercase text-[10px] tracking-widest rounded-xl w-full relative z-10 shadow-lg" style={{ backgroundColor: BRAND_GOLD }}>
                                    SEE SYSTEM INTERFACE
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.5em] italic font-headline border-b border-zinc-200 pb-2">TRUST_PROTOCOL</p>
                                <TrustLine />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Navigation Dock */}
                    <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xl border-t border-black/5 px-8 pt-4 pb-10 flex justify-between items-center z-50">
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                            <LayoutGrid className="w-6 h-6 text-[#1F3A34]" />
                            <span className="text-[8px] font-black text-zinc-950 uppercase tracking-tighter">TASKS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 opacity-30 group cursor-pointer">
                            <Activity className="w-6 h-6 text-zinc-600" />
                            <span className="text-[8px] font-black text-zinc-950 uppercase tracking-tighter">VITALS</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 opacity-30 group cursor-pointer">
                            <ClipboardCheck className="w-6 h-6 text-zinc-600" />
                            <span className="text-[8px] font-black text-zinc-950 uppercase tracking-tighter">AUDIT</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                            <Share2 className="w-6 h-6 text-[#B89B5E]" />
                            <span className="text-[8px] font-black text-zinc-950 uppercase tracking-tighter">SHARE</span>
                        </div>
                    </div>
                </div>
            </PrototypeFrame>

            <div className="container px-6 py-20 mx-auto text-center">
                 <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[1em] italic mb-8">SOVEREIGN_SYSTEM_DESIGN_STABLE_V28.3</p>
                 <button className="h-16 px-10 rounded-2xl bg-zinc-950 text-white font-black uppercase italic text-[11px] tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                    Finalize Selected Archetype
                 </button>
            </div>
        </div>
    );
}