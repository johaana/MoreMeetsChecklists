'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Activity,
    ShieldCheck,
    Clock,
    UserCheck,
    Smartphone,
    History,
    Users,
    ChevronRight,
    Search
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

export default function DesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F6F3EE] text-[#111111] font-sans antialiased selection:bg-[#D6A85F]/10">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. THE ONE-GLANCE HERO: CINEMATIC ADVERTISING COMPOSITION --- */}
                <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-black">
                    {/* Background Cinematic Video (Vimeo) */}
                    <div className="absolute inset-0 z-0">
                        <iframe 
                            src={VIMEO_URL} 
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[1.35] pointer-events-none"
                            frameBorder="0" 
                            allow="autoplay; fullscreen; picture-in-picture" 
                            title="Operational Energy"
                        />
                        {/* Split-Gradient Mask: Obsidian to Transparent */}
                        <div 
                            className="absolute inset-0 z-10" 
                            style={{ 
                                background: 'linear-gradient(90deg, rgba(5,7,10,0.96) 0%, rgba(5,7,10,0.85) 45%, rgba(5,7,10,0.25) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1250px] px-6 flex items-center h-full pt-16">
                        <div className="max-w-4xl space-y-8 md:space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
                            
                            {/* Eyebrow */}
                            <p className="text-[12px] font-black uppercase tracking-[0.4em] text-[#D6A85F] italic">
                                LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                            </p>

                            {/* Tighter 2-Line Headline */}
                            <h1 className="text-[44px] md:text-[68px] lg:text-[76px] font-black tracking-[-0.05em] leading-[0.9] uppercase text-white font-headline">
                                YOUR BUSINESS SHOULD <span className="text-red-500">NOT</span> <br/> DEPEND ON MEMORY.
                            </h1>
                            
                            {/* Benefit-Driven Subtext */}
                            <div className="space-y-6 max-w-[620px]">
                                <p className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-zinc-400 italic">
                                    MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, risks involved, timestamps, and accountability built in.
                                </p>
                                <p className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-zinc-400 italic">
                                    So work gets done properly — even when managers are away, staff change, or operations get busy.
                                </p>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[14px] md:text-[16px] font-black text-[#D6A85F] uppercase tracking-[0.1em] italic">
                                        No new apps to learn. No training headaches. <br className="hidden md:block" /> Works directly on Google Sheets.
                                    </p>
                                </div>
                            </div>

                            {/* Premium Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <Button asChild className="h-16 px-10 rounded-[16px] bg-[#D6A85F] text-[#111827] font-bold uppercase text-xs tracking-widest shadow-[0_20px_50px_-10px_rgba(214,168,95,0.4)] transition-all hover:-translate-y-1 hover:bg-[#eec08a] border-none group">
                                    <Link href="/library" className="flex items-center gap-3">
                                        See the system <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="h-16 px-10 rounded-[16px] border-white/12 bg-white/5 backdrop-blur-[10px] text-white font-bold uppercase text-xs tracking-widest transition-all hover:bg-white/10">
                                    <Link href="#how-it-works">Watch How Teams Use It</Link>
                                </Button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- 2. TRUST STRIP --- */}
                <div className="w-full bg-white py-12 border-y border-[#F6F3EE]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                            <span className="text-[10px] font-black text-[#5F6368] uppercase tracking-[0.4em]">Used for daily operations in</span>
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-30">
                                {["Restaurants", "Hotels", "Multiplexes", "Retail", "Hospitals", "Schools"].map((ind) => (
                                    <span key={ind} className="text-sm font-bold text-black uppercase tracking-[0.1em] italic">{ind}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. THE PATH TO CLARITY --- */}
                <Section id="how-it-works" className="bg-[#F6F3EE]">
                    <div className="max-w-5xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-[#D6A85F] border-[#D6A85F]/20 uppercase tracking-[0.5em] font-black text-[10px]">DEPLOYMENT PROTOCOL</Badge>
                            <h2 className="text-[44px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9]">The Path to Clarity.</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                { n: "01", t: "Select Your Pack", d: "Choose from specialized industry operational systems pre-built by experts." },
                                { n: "02", t: "Assign Responsibilities", d: "Map staff names to specific roles in the master hub. No IT required." },
                                { n: "03", t: "Track Live", d: "Watch tasks turn green across your business from any mobile device." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 relative group">
                                    <span className="text-[80px] font-black text-white absolute -top-12 -left-4 leading-none select-none opacity-50 transition-colors group-hover:text-[#D6A85F]/10">
                                        {step.n}
                                    </span>
                                    <div className="relative z-10 space-y-3">
                                        <h3 className="text-2xl font-bold uppercase tracking-tighter italic">{step.t}</h3>
                                        <p className="text-[#5F6368] leading-relaxed font-medium italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 4. REAL INTERFACE --- */}
                <Section className="bg-white">
                    <div className="space-y-20">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-[44px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9]">The product is the system.</h2>
                            <p className="text-[#5F6368] text-lg italic">Your team doesn't need to learn a new app. If they can use Google Sheets on a phone, they can operate MoreMeets.</p>
                        </div>

                        <div className="relative max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden border border-black/5 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] group">
                             <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none z-10" />
                             <img 
                                src="https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png" 
                                alt="Real Operational Ledger" 
                                className="w-full h-auto grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                             />
                        </div>
                    </div>
                </Section>

                {/* --- 5. BENEFITS --- */}
                <Section className="bg-[#F6F3EE]">
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
                                i: UserCheck
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
                            <div key={i} className="flex gap-8 p-10 bg-white rounded-[3rem] border border-black/5 hover:shadow-2xl transition-all duration-700 group">
                                <div className="w-16 h-16 rounded-2xl bg-[#F6F3EE] border border-black/5 flex items-center justify-center text-[#1F6B52] shrink-0 shadow-sm group-hover:bg-[#1F6B52] group-hover:text-white transition-colors">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold uppercase tracking-tighter italic">{item.t}</h3>
                                    <p className="text-[#5F6368] text-lg leading-relaxed italic">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* --- 6. FINAL MANDATE --- */}
                <Section className="bg-[#111111] text-white text-center py-40 md:py-60" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[44px] md:text-[88px] font-black leading-[0.85] tracking-tighter uppercase italic font-headline">
                                STOP CHASING. <br/> START RUNNING.
                            </h2>
                            <p className="text-xl md:text-[28px] text-zinc-500 font-medium italic leading-tight">
                                Deploy operational excellence across your business today.
                            </p>
                        </div>
                        <div className="pt-8">
                            <Button asChild size="lg" className="h-20 px-16 rounded-full bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-[#F6F3EE] hover:scale-[1.05] transition-all shadow-2xl border-none">
                                <Link href="/library">Get Your System</Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
