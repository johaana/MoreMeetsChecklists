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

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1740391216/32823021-uhd_3840_2160_25fps_moxg0j.mp4";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-24 md:py-40 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const GlassPanel = ({ children, className, delay = "0s" }: { children: React.ReactNode, className?: string, delay?: string }) => (
    <div 
        className={cn(
            "bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-bottom-8 duration-1000",
            className
        )}
        style={{ animationDelay: delay }}
    >
        {children}
    </div>
);

export default function DesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F6F3EE] text-[#111111] font-sans antialiased selection:bg-[#1F6B52]/10">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. MINIMAL HERO: CINEMATIC MANDATE --- */}
                <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-black">
                    {/* Background Cinematic Video */}
                    <div className="absolute inset-0 z-0">
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover scale-[1.05] opacity-90"
                        />
                        {/* Dark Split-Gradient Overlay */}
                        <div 
                            className="absolute inset-0 z-10" 
                            style={{ 
                                background: 'linear-gradient(90deg, rgba(5,7,10,0.96) 0%, rgba(5,7,10,0.85) 45%, rgba(5,7,10,0.25) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1300px] px-6 flex items-center h-full pt-16">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center w-full">
                            
                            {/* Left: Emotional Narrative */}
                            <div className="space-y-12">
                                <div className="space-y-8">
                                    <h1 className="text-[56px] md:text-[88px] lg:text-[104px] font-black tracking-[-0.06em] leading-[0.9] uppercase text-white font-headline">
                                        YOUR BUSINESS <br/> <span className="text-[#22C55E]">SHOULD</span> <span className="text-red-500">NOT</span> <br/> DEPEND <br/> ON MEMORY.
                                    </h1>
                                    <div className="space-y-6 max-w-[580px]">
                                        <p className="text-[18px] md:text-[22px] font-normal leading-[1.5] text-zinc-400 italic">
                                            Ready-to-use live operational systems with daily tasks, built-in instructions, and accountability.
                                        </p>
                                        <div className="flex flex-col gap-2 pt-2">
                                            <p className="text-[11px] font-black text-[#22C55E] uppercase tracking-[0.25em]">No new apps to learn • Works on Google Sheets</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-8">
                                    <Button asChild className="h-16 px-12 rounded-2xl bg-white text-black font-bold uppercase text-xs tracking-widest shadow-2xl transition-all hover:-translate-y-1 hover:bg-zinc-100">
                                        <Link href="/library">See the system</Link>
                                    </Button>
                                    <Link href="#how-it-works" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                                        Watch How Teams Use It
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side Empty to show clear video */}
                            <div className="hidden lg:block"></div>

                        </div>
                    </div>
                </section>

                {/* --- 2. TRUST BAR: MINIMALIST --- */}
                <div className="w-full bg-white py-12 border-y border-[#F6F3EE]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                            <span className="text-[10px] font-black text-[#5F6368] uppercase tracking-[0.4em]">Deployed in</span>
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30">
                                {["Restaurants", "Hotels", "Multiplexes", "Retail", "Hospitals"].map((ind) => (
                                    <span key={ind} className="text-sm font-bold text-black uppercase tracking-[0.1em] italic">{ind}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. SYSTEM HEARTBEAT: THE PROOF OF LIFE --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="space-y-8">
                            <Badge variant="outline" className="text-[#1F6B52] border-[#1F6B52]/20 bg-[#1F6B52]/5 px-6 py-2 uppercase font-black tracking-widest text-[10px]">Technical Proof</Badge>
                            <h2 className="text-[44px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9]">
                                Real-time <br/> Accountability.
                            </h2>
                            <p className="text-lg text-[#5F6368] italic max-w-md leading-relaxed">
                                Every action is timestamped, verified, and visible. No more "I forgot" or "I'll do it later." The system anchors the standard.
                            </p>
                            <div className="flex flex-col gap-6 pt-4">
                                {[
                                    { t: "Verification required for critical nodes", i: ShieldCheck },
                                    { t: "Mobile-first initials logging", i: Smartphone },
                                    { t: "Permanent audit history vault", i: History }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-xl bg-[#F6F3EE] flex items-center justify-center text-[#1F6B52]">
                                            <item.i className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-bold uppercase italic tracking-tight">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 items-center lg:items-end">
                            {/* Activity Pulse Panel */}
                            <GlassPanel className="w-full max-w-[420px] bg-white shadow-2xl border-zinc-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1F6B52]">Daily Heartbeat</span>
                                        <div className="w-2 h-2 rounded-full bg-[#1F6B52] animate-pulse" />
                                    </div>
                                    <div className="space-y-5">
                                        {[
                                            { t: "Opening Audit Verified", time: "08:14 AM", status: "ok" },
                                            { t: "Cold Storage Temperature Logged", time: "09:02 AM", status: "ok" },
                                            { t: "Fire Exit Inspection Pending", time: "Due in 12 mins", status: "warn" },
                                            { t: "Kitchen Hygiene Sweep Complete", time: "11:27 AM", status: "ok" },
                                            { t: "Shift Handover Signed", time: "12:01 PM", status: "ok" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start pb-4 border-b border-black/5 last:border-0 last:pb-0">
                                                <div className={cn(
                                                    "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                                                    item.status === 'ok' ? "bg-[#1F6B52]/10 text-[#1F6B52]" : "bg-[#C28B2C]/10 text-[#C28B2C]"
                                                )}>
                                                    {item.status === 'ok' ? <Check className="w-2.5 h-2.5" /> : <Clock className="w-2.5 h-2.5" />}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[14px] font-black leading-tight uppercase italic">{item.t}</p>
                                                    <p className="text-[10px] font-bold text-[#5F6368] uppercase tracking-widest">{item.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </GlassPanel>
                        </div>
                    </div>
                </Section>

                {/* --- 4. HOW IT WORKS: 3 STEPS --- */}
                <Section id="how-it-works" className="bg-[#F6F3EE]">
                    <div className="max-w-5xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <h2 className="text-[44px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9]">The Path to Clarity.</h2>
                            <p className="text-[#5F6368] text-lg italic">No complex rollout. Just operations in order.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                { n: "01", t: "Select Your Pack", d: "Choose from 12 specialized industry operational systems." },
                                { n: "02", t: "Assign Ownership", d: "Map staff names to specific roles in the master hub." },
                                { n: "03", t: "Track Live", d: "Watch tasks turn green across your business from any device." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 relative">
                                    <span className="text-[80px] font-black text-white absolute -top-12 -left-4 leading-none select-none opacity-50">
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

                {/* --- 5. REAL INTERFACE: THE MOAT --- */}
                <Section className="bg-white">
                    <div className="space-y-20">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-[44px] md:text-[64px] font-black font-headline tracking-tighter uppercase italic leading-[0.9]">The tool they already know.</h2>
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

                {/* --- 6. BENEFITS: PREMIUM CARDS --- */}
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

                {/* --- 7. FINAL CTA --- */}
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
