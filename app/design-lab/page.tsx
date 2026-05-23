'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Target,
    Activity,
    CheckCircle2,
    Users,
    History,
    ShieldCheck,
    Smartphone,
    LayoutGrid,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-24 md:py-40 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const LocalHeader = () => (
    <header className="px-8 lg:px-12 h-[72px] flex items-center fixed top-0 w-full z-[100] transition-all duration-500" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.18) 100%)',
        backdropFilter: 'blur(14px)'
    }}>
        <div className="flex items-center gap-2.5">
             <div className="w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#2E7D5A' }}>
                <Check className="w-4 h-4" strokeWidth={3} />
             </div>
             <div className="flex flex-col">
                <span className="font-headline text-lg font-bold leading-none tracking-tight text-[#111111]">MoreMeets™</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B7280] leading-none mt-1">Operational Standards</span>
             </div>
        </div>
        <nav className="ml-auto hidden md:flex gap-10 items-center">
            {['Solutions', 'Methodology', 'Intelligence', 'Contact'].map((item) => (
                <Link key={item} href="#" className="text-[13px] font-medium text-[#2A2A2A]/85 hover:text-[#111111] transition-colors">
                    {item}
                </Link>
            ))}
            <button className="h-10 px-6 rounded-full bg-[#111111] text-white text-[11px] font-bold uppercase tracking-widest shadow-lg hover:translate-y-[-1px] transition-all">
                Get System
            </button>
        </nav>
    </header>
);

export default function DesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-[#1F6B52]/10">
            <LocalHeader />

            <main className="flex-1">
                
                {/* --- 1. THE CINEMATIC HERO --- */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center overflow-hidden bg-[#F8F6F2]">
                    {/* Cinematic Video with Filter & Motion */}
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full scale-[1.01] animate-[zoom_20s_ease-in-out_infinite_alternate]">
                            <iframe 
                                src={VIMEO_URL} 
                                className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[1.4] pointer-events-none"
                                frameBorder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                title="Operational Energy"
                                style={{
                                    filter: 'brightness(0.88) saturate(0.92) contrast(1.02)'
                                }}
                            />
                        </div>
                        
                        {/* Film Grain Overlay */}
                        <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        
                        {/* Layered Gradient Architecture */}
                        <div 
                            className="absolute inset-0 z-20" 
                            style={{ 
                                background: 'linear-gradient(90deg, rgba(248,246,242,0.88) 0%, rgba(248,246,242,0.78) 38%, rgba(248,246,242,0.38) 58%, rgba(0,0,0,0.08) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-30 container mx-auto max-w-[1200px] px-6 h-full flex items-center pt-16">
                        <div className="max-w-[580px] space-y-10">
                            
                            {/* Premium Eyebrow */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-[#8B6B3F] opacity-40" />
                                <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#8B6B3F] font-headline">
                                    LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                                </span>
                            </div>

                            <h1 className="text-[48px] md:text-[68px] lg:text-[78px] font-extrabold tracking-[-0.04em] leading-[0.9] uppercase text-[#111111] font-headline">
                                YOUR BUSINESS SHOULD NOT DEPEND ON <br className="hidden lg:block" />
                                <span className="relative inline-block mt-2">
                                    MEMORY.
                                    <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-[#D6A85F]/30 rounded-full" />
                                </span>
                            </h1>
                            
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <p className="text-[17px] md:text-[19px] font-normal leading-[1.65] text-[#4B5563]">
                                        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, timestamps, and accountability.
                                    </p>
                                    <p className="text-[17px] md:text-[19px] font-normal leading-[1.65] text-[#4B5563]">
                                        So work gets done properly — even when managers are away, staff change, or operations get busy.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                        </div>
                                        <span className="text-sm font-semibold text-[#111111] uppercase tracking-wide">No new apps to learn.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                        </div>
                                        <span className="text-sm font-semibold text-[#111111] uppercase tracking-wide">Works directly on Google Sheets.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-10 pt-4">
                                <button className="h-16 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-xs tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                                    <Link href="/library" className="flex items-center gap-3">
                                        See the system <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                                <button className="group text-[#5F6368] font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:text-[#111111] flex items-center gap-3">
                                    <Link href="#how-it-works">Watch Teams Use It</Link>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- 2. TRUST STRIP --- */}
                <div className="w-full bg-[#FFFFFF] py-12 border-y border-black/5 relative z-40">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em] font-headline">OPERATIONAL VERTICALS</span>
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
                                {["Restaurants", "Hotels", "Retail", "Hospitals", "Schools", "Multiplexes"].map((ind) => (
                                    <span key={ind} className="text-xs md:text-sm font-bold text-[#111111] uppercase tracking-[0.1em] italic">{ind}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. THE PATH TO CLARITY --- */}
                <Section id="how-it-works" className="bg-[#FFFFFF]">
                    <div className="max-w-5xl mx-auto space-y-24 md:space-y-40">
                        <div className="text-center space-y-6">
                            <Badge variant="outline" className="text-[#1F6B52] border-[#1F6B52]/10 bg-[#1F6B52]/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2">METHODOLOGY</Badge>
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">The Path to Clarity.</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
                            {[
                                { n: "01", t: "Select Your Pack", d: "Choose from specialized industry operational systems pre-built by experts." },
                                { n: "02", t: "Assign Personnel", d: "Map staff names to specific roles in the master hub. No IT required." },
                                { n: "03", t: "Track Execution", d: "Watch tasks turn green across your business from any mobile device." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-8 relative group text-center md:text-left">
                                    <span className="text-[100px] font-black text-zinc-50 absolute -top-16 -left-4 leading-none select-none transition-colors group-hover:text-[#D6A85F]/5">
                                        {step.n}
                                    </span>
                                    <div className="relative z-10 space-y-4">
                                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter italic text-[#111111]">{step.t}</h3>
                                        <p className="text-[#5F6368] text-sm md:text-base leading-relaxed font-medium italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 4. REAL INTERFACE --- */}
                <Section className="bg-[#F9F9F7] border-y border-black/5">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">The system is the product.</h2>
                            <p className="text-[#5F6368] text-base md:text-lg italic leading-relaxed">Your team doesn't need to learn a new app. If they can use Google Sheets on a phone, they can operate MoreMeets.</p>
                        </div>

                        <div className="relative max-w-6xl mx-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] group bg-white">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/40 via-transparent to-transparent pointer-events-none z-10" />
                             <img 
                                src="https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png" 
                                alt="Real Operational Ledger" 
                                className="w-full h-auto grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100"
                             />
                        </div>
                    </div>
                </Section>

                {/* --- 5. BENEFITS --- */}
                <Section className="bg-[#FFFFFF]">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
                        {[
                            {
                                t: "No training needed",
                                d: "Eliminate the software learning curve. Zero friction for front-line teams.",
                                i: Smartphone
                            },
                            {
                                t: "Daily accountability",
                                d: "Know exactly who did what, when, and where. No more verbal guessing.",
                                i: CheckCircle2
                            },
                            {
                                t: "Institutional memory",
                                d: "Your best standards stay with the business, even if your best staff leave.",
                                i: History
                            },
                            {
                                t: "Audit-ready logs",
                                d: "Instant proof for inspectors and insurers without manual filing panic.",
                                i: ShieldCheck
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 p-10 bg-[#F8F6F2]/50 rounded-[3rem] border border-black/5 hover:bg-white hover:shadow-2xl transition-all duration-700 group">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#D6A85F] shrink-0 shadow-sm group-hover:bg-[#111111] group-hover:text-white transition-all">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter italic text-[#111111] leading-none">{item.t}</h3>
                                    <p className="text-[#5F6368] text-sm md:text-base leading-relaxed italic">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* --- 6. FINAL MANDATE --- */}
                <Section className="bg-[#111111] text-white text-center py-32 md:py-60" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-center">
                                STOP CHASING. <br/> START RUNNING.
                            </h2>
                            <p className="text-lg md:text-[28px] text-zinc-400 font-medium italic leading-tight text-center mx-auto max-w-2xl">
                                Deploy operational excellence across your business today.
                            </p>
                        </div>
                        <div className="pt-6">
                            <button className="h-16 md:h-20 px-12 md:px-20 rounded-full bg-[#D6A85F] text-[#111827] font-bold uppercase text-xs md:text-sm tracking-widest hover:scale-[1.05] transition-all shadow-[0_20px_60px_-10px_rgba(214,168,95,0.4)] border-none">
                                <Link href="/library">Get Your System</Link>
                            </button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />

            <style jsx global>{`
                @keyframes zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.06); }
                }
            `}</style>
        </div>
    );
}
