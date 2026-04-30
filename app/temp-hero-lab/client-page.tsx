'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    CheckCircle2,
    Play,
    Activity,
    Lock,
    Zap,
    ClipboardCheck,
    Smartphone,
    Check,
    Monitor,
    ShieldAlert,
    Target,
    Layers,
    Command
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const NARRATIVE = {
    line1: "STOP CHASING YOUR TEAM.",
    line2: "SEE DAILY WORK GETTING DONE.",
    subline: "Without follow-ups. Without confusion. Without depending on memory.",
    support: "Memory is not a system. Serious operations deserve more.",
    cta: "Start Using Your System → ₹2,999",
    meta: "One-time payment • Runs on Excel / Google Sheets"
};

const BULLETS = [
    "120+ Pre-built technical protocols",
    "Live dashboard for group visibility",
    "No SaaS dependency. Own your data.",
    "Built-in Trainer's Notes for staff"
];

const YELLOW = "#FACC15";
const RED = "#EF4444";

const LabSection = ({ children, title, description, id }: { children: React.ReactNode, title: string, description: string, id: string }) => (
    <div id={id} className="w-full py-24 md:py-32 border-b border-white/5 bg-black space-y-12">
        <div className="container px-8 mx-auto">
            <div className="space-y-2 border-l-4 border-primary pl-8">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white font-headline">{title}</h2>
                <p className="text-zinc-500 italic font-medium">{description}</p>
            </div>
        </div>
        <div className="w-full h-[90svh] relative overflow-hidden bg-[#0B0F1A]">
            {children}
        </div>
    </div>
);

const BulletList = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4", className)}>
        {BULLETS.map((bullet, i) => (
            <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0" />
                <span className="text-[15px] font-medium text-[#F5F7FA]">{bullet}</span>
            </div>
        ))}
    </div>
);

const Tag = ({ text, className }: { text: string, className?: string }) => (
    <div className={cn("px-4 py-1.5 rounded-full bg-[#EF4444] text-white text-[12px] font-black uppercase tracking-widest shadow-2xl animate-pulse backdrop-blur-md border border-white/10", className)}>
        {text}
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500/30">
            
            <div className="container px-8 pt-40 pb-20 mx-auto text-center space-y-8">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[11px] px-8 py-3 rounded-none bg-primary/5">
                    SOVEREIGN HERO LAB V27.0
                </Badge>
                <h1 className="text-6xl md:text-8xl font-black font-headline italic uppercase tracking-tighter leading-none">
                    Cinematic <span className="text-primary">Command.</span>
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-2xl mx-auto text-lg">
                    Archetypes A-C preserved. New Cinematic Glass variants added for maximum institutional authority.
                </p>
            </div>

            {/* --- ARCHEPTYPE A: THE BLUEPRINT (Literal FIGMA Spec) --- */}
            <LabSection id="opt-a" title="Archetype A: The Blueprint" description="1440px Figma-Ready Master Spec. Pure Spacing + Hierarchy.">
                <div className="w-full h-full bg-[#0B0F1A] flex items-center px-[120px]">
                    <div className="grid grid-cols-2 gap-20 w-full max-w-[1200px]">
                        <div className="space-y-[28px]">
                             <div className="space-y-[16px]">
                                <h1 className="font-headline font-extrabold text-[52px] leading-[60px] tracking-[-1px] text-[#F5F7FA] uppercase">
                                    STOP CHASING YOUR TEAM.<br/>
                                    <span style={{ color: YELLOW }}>SEE DAILY WORK GETTING DONE.</span>
                                </h1>
                                <p className="text-[18px] font-normal text-[#9CA3AF] leading-[28px]">
                                    {NARRATIVE.subline}
                                </p>
                             </div>
                             
                             <div className="space-y-[12px]">
                                <p className="text-[16px] font-medium text-[#9CA3AF] italic">
                                    {NARRATIVE.support}
                                </p>
                             </div>

                             <div className="space-y-4 pt-4">
                                {BULLETS.map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0" />
                                        <span className="text-[15px] font-medium text-[#F5F7FA]">{bullet}</span>
                                    </div>
                                ))}
                             </div>

                             <div className="pt-[28px] relative">
                                <div className="absolute -inset-10 bg-[#FACC15]/20 blur-[40px] rounded-full pointer-events-none" />
                                <Button className="h-[56px] px-[28px] rounded-[10px] bg-[#FACC15] text-[#0B0F1A] font-semibold text-[16px] hover:bg-[#EAB308] hover:scale-[1.02] transition-all border-none relative z-10">
                                    {NARRATIVE.cta}
                                </Button>
                                <p className="mt-[12px] text-[12px] text-[#6B7280]">
                                    {NARRATIVE.meta}
                                </p>
                             </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-[620px] h-[420px] rounded-[16px] overflow-hidden relative shadow-2xl border border-white/5 bg-black">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-transparent to-transparent opacity-85" />
                                
                                <Tag text="Missed tasks?" className="absolute top-8 right-8" />
                                <Tag text="Constant follow-ups?" className="absolute bottom-12 right-8" />
                                <div className="absolute bottom-8 left-10 text-[12px] font-semibold text-[#FACC15]">Live tracking</div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHEPTYPE B: THE HORIZON --- */}
            <LabSection id="opt-b" title="Archetype B: The Horizon" description="60/40 Split. Deep gradient immersion. High-density meta tags.">
                 <div className="w-full h-full bg-[#0B0F1A] flex items-center relative">
                    <div className="absolute inset-0 z-0 flex justify-end">
                        <div className="w-[60%] h-full relative">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
                        </div>
                    </div>

                    <div className="container px-24 relative z-10 grid grid-cols-[1.2fr,1fr] gap-20 items-center">
                        <div className="space-y-10">
                            <h1 className="font-headline font-extrabold text-[64px] leading-[0.9] tracking-[-2px] text-white uppercase italic">
                                CHAOS IS <br/> <span style={{ color: YELLOW }}>EXPENSIVE.</span>
                            </h1>
                            <p className="text-[20px] text-zinc-400 italic font-medium leading-relaxed max-w-lg">
                                Stop the daily stress. Make your business run itself. No more management gaps.
                            </p>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {BULLETS.map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0" />
                                        <span className="text-[14px] font-medium text-white/70">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <Button className="h-20 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-2xl hover:bg-white transition-all border-none">
                                    DEPLOY MASTER ENGINE → ₹2,999
                                </Button>
                            </div>
                        </div>
                    </div>
                 </div>
            </LabSection>

            {/* --- ARCHEPTYPE C: THE COMMAND CENTER --- */}
            <LabSection id="opt-c" title="Archetype C: The Command Center" description="Aggressive center-aligned messaging. Strong industrial presence.">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" />
                <div className="absolute inset-0 bg-[#0B0F1A]/90" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-12 px-6">
                    <div className="space-y-4">
                        <Badge className="bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/20 px-6 py-2 uppercase font-black tracking-widest text-[10px]">SOVEREIGN ENGINE PRO</Badge>
                        <h1 className="text-5xl md:text-8xl font-black font-headline leading-[0.85] tracking-tight uppercase italic text-white">
                            SYSTEMS <br/> OVER LUCK.
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-zinc-400 italic font-bold max-w-2xl mx-auto leading-tight">
                        {NARRATIVE.subline}
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <Button className="h-20 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 transition-all border-none">
                            GET STARTED NOW
                        </Button>
                        <div className="flex items-center gap-12 text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FACC15]" /> ONE-TIME BUY</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#FACC15]" /> NO SaaS FEES</span>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 4: THE OBSIDIAN GLASS --- */}
            <LabSection id="opt-4" title="Archetype 4: The Obsidian Glass" description="Centered massive glass monolith. Deep blur. Floating over full-screen industrial visuals.">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]" />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl w-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 md:p-20 shadow-[0_0_100px_-20px_rgba(250,204,21,0.15)] text-center space-y-10 border-t-white/20">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-7xl font-black font-headline leading-[0.9] tracking-tighter uppercase italic text-white">
                                STOP CHASING.<br/>
                                <span style={{ color: YELLOW }}>START SEEING.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-bold italic leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 py-4 border-y border-white/5">
                            {BULLETS.map((b, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{b}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Button className="h-20 px-16 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 transition-all border-none group">
                                {NARRATIVE.cta} <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                            </Button>
                            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em]">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 5: THE WIDE-ANGLE COMMANDER --- */}
            <LabSection id="opt-5" title="Archetype 5: The Wide-Angle Commander" description="Cinematic full-color video with a sharp 90-degree dark gradient mask.">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-transparent" />
                
                <div className="relative z-10 h-full container px-24 mx-auto grid lg:grid-cols-[1.2fr,1fr] items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-white">
                                CAPTURE<br/>
                                <span style={{ color: YELLOW }}>MEMORY.</span>
                            </h1>
                            <p className="text-2xl text-zinc-400 italic font-medium max-w-lg leading-relaxed border-l-4 border-[#FACC15] pl-8">
                                Institutional memory is an asset. <br/>Anything else is just luck.
                            </p>
                        </div>
                        <BulletList className="max-w-lg" />
                        <div className="pt-4">
                            <Button className="h-20 px-12 rounded-xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-2xl hover:bg-yellow-400 transition-all border-none">
                                DEPLOY SYSTEM → ₹2,999
                            </Button>
                            <p className="mt-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest pl-2">{NARRATIVE.meta}</p>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end pr-20">
                         <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center animate-pulse">
                            <Play className="w-10 h-10 text-[#FACC15] fill-[#FACC15]" />
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 6: THE MONOSPACE AUDIT --- */}
            <LabSection id="opt-6" title="Archetype 6: The Monospace Audit" description="Monospace technical meta-tags. Very clean, high-density professional audit style.">
                <div className="absolute inset-0 bg-[#0B0F1A] opacity-20 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="relative z-10 h-full container px-24 mx-auto flex flex-col justify-center max-w-5xl space-y-12">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-[#FACC15] uppercase tracking-[0.5em] bg-[#FACC15]/10 px-4 py-1">BUILD: SOVEREIGN_V27.0_STABLE</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                    
                    <div className="space-y-6">
                        <h1 className="text-7xl md:text-9xl font-black font-headline leading-[0.8] tracking-tighter uppercase italic text-[#F5F7FA]">
                            SYSTEMS<br/>
                            <span className="text-zinc-700">OVER LUCK.</span>
                        </h1>
                        <p className="text-2xl text-zinc-500 font-medium italic">{NARRATIVE.subline}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["120+ SOPs", "LIVE CONSOLE", "NO SaaS", "TRAINER NOTES"].map((item, i) => (
                            <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-[10px] text-zinc-400 group hover:border-[#FACC15]/30 transition-all">
                                <span className="block text-[#FACC15] mb-2">0{i+1}</span>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-8">
                        <Button className="h-16 px-12 rounded-none bg-[#FACC15] text-black font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-all">
                            INITIALIZE DEPLOYMENT
                        </Button>
                        <span className="text-xl font-black italic text-white/20">₹2,999 ONE-TIME</span>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 7: THE ETHEREAL PORTAL --- */}
            <LabSection id="opt-7" title="Archetype 7: The Ethereal Portal" description="Centered video portal with narrative wrapping around it. High-end modern.">
                <div className="h-full flex flex-col items-center justify-center space-y-16 px-4">
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl md:text-8xl font-black font-headline leading-none tracking-tight uppercase italic">
                            MEMORY IS NOT <br/> <span className="text-zinc-800">A SYSTEM.</span>
                        </h1>
                    </div>

                    <div className="relative group max-w-4xl w-full">
                        <Tag text="Missed tasks?" className="absolute -top-6 -left-6 z-20" />
                        <Tag text="Constant follow-ups?" className="absolute -bottom-6 -right-6 z-20" />
                        
                        <div className="aspect-video rounded-[3rem] overflow-hidden border-[12px] border-zinc-900 shadow-2xl relative bg-black">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
                            <div className="absolute bottom-6 left-10 text-[12px] font-black text-[#FACC15] uppercase tracking-[0.5em] italic">LIVE_TRACKING_ACTIVE</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <p className="text-zinc-500 font-bold italic text-lg text-center max-w-lg">{NARRATIVE.support}</p>
                        <Button className="h-20 px-16 rounded-full bg-white text-black font-black uppercase italic text-xl hover:bg-[#FACC15] transition-all">
                            DEPLOY ENGINE → ₹2,999
                        </Button>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 8: THE INDUSTRIAL HUD --- */}
            <LabSection id="opt-8" title="Archetype 8: The Industrial HUD" description="Tactical cockpit style. Floating glass panels for technical specifications.">
                 <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                 <div className="absolute inset-0 bg-black/60" />
                 
                 <div className="relative z-10 h-full container px-8 md:px-24 mx-auto flex items-center justify-between gap-12">
                    <div className="max-w-2xl space-y-10">
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-[7rem] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-[#FACC15]">
                                OBSERVE.<br/>
                                <span className="text-white">COMMAND.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 font-bold italic leading-snug">
                                {NARRATIVE.subline}
                            </p>
                        </div>
                        <Button className="h-20 px-12 rounded-2xl bg-[#FACC15] text-black font-black uppercase italic text-lg shadow-2xl hover:scale-105 transition-all border-none">
                            GET THE SOVEREIGN V11.9
                        </Button>
                    </div>

                    <div className="hidden lg:grid grid-cols-2 gap-6 w-[500px]">
                        {[
                            { t: "120+ SOPs", i: ClipboardCheck, d: "Technical protocols" },
                            { t: "Live Stats", i: Activity, d: "One-glance health" },
                            { t: "Sovereign IP", i: Lock, d: "Own your data" },
                            { t: "Trainer Notes", i: Smartphone, d: "Zero-friction training" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] space-y-4 hover:border-[#FACC15]/50 transition-all group">
                                <item.i className="w-8 h-8 text-[#FACC15]" />
                                <div className="space-y-1">
                                    <h4 className="font-black uppercase italic text-lg leading-none">{item.t}</h4>
                                    <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </LabSection>

            <div className="py-40 text-center bg-zinc-950 border-t border-white/5">
                 <p className="text-[14px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">Full Cinematic Lab Collection v27.0 Active.</p>
                 <Button asChild variant="link" className="mt-12 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                    <Link href="/">RETURN TO PRODUCTION SITE</Link>
                 </Button>
            </div>

        </div>
    );
}
