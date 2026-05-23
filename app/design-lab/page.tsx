'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    ShieldCheck,
    Smartphone,
    History,
    CheckCircle2,
    ChevronRight,
    Users,
    Zap,
    LayoutGrid,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-24 md:py-40 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BenefitItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Check className="w-2.5 h-2.5 text-[#22C55E]" />
        </div>
        <span className="text-[11px] md:text-[13px] font-black text-white/70 uppercase tracking-[0.1em] italic">
            {text}
        </span>
    </div>
);

export default function DesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#0F1720] text-[#F8FAFC] font-sans antialiased selection:bg-[#D6A85F]/20">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. THE ONE-GLANCE HERO: CINEMATIC ADVERTISING COMPOSITION --- */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center overflow-hidden bg-black">
                    {/* Background Cinematic Video (Vimeo) */}
                    <div className="absolute inset-0 z-0">
                        <iframe 
                            src={VIMEO_URL} 
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[1.35] pointer-events-none"
                            frameBorder="0" 
                            allow="autoplay; fullscreen; picture-in-picture" 
                            title="Operational Energy"
                        />
                        {/* Split-Gradient Mask: Deep Navy Charcoal to Transparent */}
                        <div 
                            className="absolute inset-0 z-10" 
                            style={{ 
                                background: 'linear-gradient(90deg, #0F1720 0%, rgba(15,23,32,0.9) 45%, rgba(15,23,32,0) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1200px] px-6 flex items-center h-full pt-16">
                        <div className="max-w-4xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                            
                            {/* Eyebrow */}
                            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-[#D6A85F] italic">
                                LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                            </p>

                            {/* Tighter 2-Line Headline */}
                            <h1 className="text-[38px] md:text-[54px] lg:text-[68px] font-black tracking-[-0.06em] leading-[0.92] uppercase text-[#F8FAFC] font-headline">
                                YOUR BUSINESS SHOULD <span className="text-red-500">NOT</span> <br className="hidden md:block" /> DEPEND ON MEMORY.
                            </h1>
                            
                            {/* Benefit-Driven Subtext */}
                            <div className="space-y-6 max-w-[620px]">
                                <div className="space-y-4">
                                    <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#CBD5E1] italic">
                                        MoreMeets gives your team ready-to-use live SOP systems with daily tasks, simple step-by-step instructions, risks involved, timestamps, and accountability built in.
                                    </p>
                                    <p className="text-[16px] md:text-[18px] font-medium leading-[1.6] text-[#CBD5E1] italic">
                                        So work gets done properly — even when managers are away, staff change, or operations get busy.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-2.5 pt-2">
                                    <BenefitItem text="No new apps to learn." />
                                    <BenefitItem text="No training headaches." />
                                    <BenefitItem text="Works directly on Google Sheets." />
                                </div>
                            </div>

                            {/* Premium Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                                <button className="h-14 md:h-16 px-8 md:px-10 rounded-[16px] bg-[#D6A85F] text-[#111827] font-bold uppercase text-[10px] md:text-xs tracking-widest shadow-[0_10px_30px_-5px_rgba(214,168,95,0.4)] transition-all hover:-translate-y-0.5 hover:bg-[#eec08a] border-none group">
                                    <Link href="/library" className="flex items-center gap-3">
                                        See the system <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                                <button className="h-14 md:h-16 px-8 md:px-10 rounded-[16px] border border-white/12 bg-white/5 backdrop-blur-[10px] text-white font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all hover:bg-white/10">
                                    <Link href="#how-it-works">Watch How Teams Use It</Link>
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- 2. TRUST STRIP --- */}
                <div className="w-full bg-[#111827] py-10 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">Used for daily operations in</span>
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-30">
                                {["Restaurants", "Hotels", "Multiplexes", "Retail", "Hospitals", "Schools"].map((ind) => (
                                    <span key={ind} className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.1em] italic">{ind}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. THE PATH TO CLARITY --- */}
                <Section id="how-it-works" className="bg-[#0F1720]">
                    <div className="max-w-5xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-[#D6A85F] border-[#D6A85F]/20 uppercase tracking-[0.5em] font-black text-[10px]">DEPLOYMENT PROTOCOL</Badge>
                            <h2 className="text-[38px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9] text-[#F8FAFC]">The Path to Clarity.</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                { n: "01", t: "Select Your Pack", d: "Choose from specialized industry operational systems pre-built by experts." },
                                { n: "02", t: "Assign Responsibilities", d: "Map staff names to specific roles in the master hub. No IT required." },
                                { n: "03", t: "Track Live", d: "Watch tasks turn green across your business from any mobile device." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 relative group">
                                    <span className="text-[80px] font-black text-white/5 absolute -top-12 -left-4 leading-none select-none transition-colors group-hover:text-[#D6A85F]/10">
                                        {step.n}
                                    </span>
                                    <div className="relative z-10 space-y-3">
                                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter italic text-white">{step.t}</h3>
                                        <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed font-medium italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 4. REAL INTERFACE --- */}
                <Section className="bg-[#111827]">
                    <div className="space-y-20">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-[38px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9] text-white text-center">The product is the system.</h2>
                            <p className="text-[#CBD5E1] text-base md:text-lg italic text-center mx-auto max-w-xl">Your team doesn't need to learn a new app. If they can use Google Sheets on a phone, they can operate MoreMeets.</p>
                        </div>

                        <div className="relative max-w-6xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] group bg-zinc-950">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720] via-transparent to-transparent pointer-events-none z-10" />
                             <img 
                                src="https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png" 
                                alt="Real Operational Ledger" 
                                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100"
                             />
                        </div>
                    </div>
                </Section>

                {/* --- 5. BENEFITS --- */}
                <Section className="bg-[#0F1720]">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
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
                            <div key={i} className="flex gap-6 md:gap-8 p-8 md:p-10 bg-white/[0.02] rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-[#D6A85F]/20 transition-all duration-700 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#D6A85F] shrink-0 shadow-sm group-hover:bg-[#D6A85F] group-hover:text-black transition-colors">
                                    <item.i className="w-6 h-6 md:w-7 md:h-7" />
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter italic text-white leading-none">{item.t}</h3>
                                    <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed italic">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* --- 6. FINAL MANDATE --- */}
                <Section className="bg-black text-white text-center py-32 md:py-60" noSpine>
                    <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[38px] md:text-[88px] font-black leading-[0.85] tracking-tighter uppercase italic font-headline text-center">
                                STOP CHASING. <br/> START RUNNING.
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#A7B0BE] font-medium italic leading-tight text-center mx-auto max-w-2xl">
                                Deploy operational excellence across your business today.
                            </p>
                        </div>
                        <div className="pt-6">
                            <button className="h-16 md:h-20 px-12 md:px-16 rounded-full bg-[#D6A85F] text-black font-black uppercase text-[10px] md:text-sm tracking-widest hover:scale-[1.05] transition-all shadow-2xl border-none">
                                <Link href="/library">Get Your System</Link>
                            </button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
