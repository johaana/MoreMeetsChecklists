'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    X,
    ArrowRight, 
    Download,
    LayoutGrid,
    ClipboardCheck,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Building2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Popcorn,
    Zap,
    GraduationCap,
    Smartphone,
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-12 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const AnimatedAnnotation = ({ children, className, delay = "0s", color = "green" }: { children: React.ReactNode, className?: string, delay?: string, color?: "green" | "red" | "blue" }) => {
    const pingColors = {
        green: "bg-emerald-500",
        red: "bg-red-500",
        blue: "bg-blue-500"
    };

    return (
        <div className={cn(
            "absolute z-30 bg-white/95 backdrop-blur-md px-1.5 py-0.5 md:px-2 md:py-1 rounded md:rounded-lg shadow-xl flex items-center gap-1.5 border border-[#E6E8EC] animate-in fade-in zoom-in duration-700 whitespace-nowrap",
            className
        )} style={{ animationDelay: delay }}>
            <span className="relative flex h-1 w-1">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-100 scale-[4]", pingColors[color as keyof typeof pingColors])}></span>
                <span className={cn("relative inline-block rounded-full h-1 w-1", pingColors[color as keyof typeof pingColors])}></span>
            </span>
            <span className="text-[6px] md:text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none">{children}</span>
        </div>
    );
};

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const TechnicalProof = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={cn("relative group", isMobile ? "block md:hidden mt-4 mb-2 w-[95%] mx-auto" : "hidden md:block w-full")}>
            <AnimatedAnnotation className="top-[25%] left-[10%]" color="red" delay="0.5s">Misses</AnimatedAnnotation>
            <AnimatedAnnotation className="top-[10%] right-[10%]" color="green" delay="1s">Completed</AnimatedAnnotation>
            <AnimatedAnnotation className="bottom-[20%] left-[15%]" color="blue" delay="1.5s">Console</AnimatedAnnotation>
            
            <div className="bg-[#111] h-6 md:h-9 w-full rounded-t-lg md:rounded-t-[14px] flex items-center px-4 gap-1.5 border border-white/10">
                <div className="flex gap-1 md:gap-1.5">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-500/30" />
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-500/30" />
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500/30" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/5 rounded px-4 py-0.5 text-[6px] md:text-[8px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                        SOVEREIGN_MASTER_CONSOLE.xlsx
                    </div>
                </div>
            </div>

            <div className="rounded-b-lg md:rounded-b-[14px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] bg-white border border-[#E6E8EC] border-t-0 relative">
                <img 
                    src={DASHBOARD_IMAGE} 
                    alt="Sovereign Dashboard" 
                    className="w-full h-auto object-cover aspect-[16/7] md:aspect-[16/10] grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
                />
            </div>
            
            <div className="mt-2 text-center">
                <p className="text-[7px] md:text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                    sample of restaurant operational dashboard
                </p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                <section className="w-full bg-[#F7F8FA] pt-24 pb-12 md:pt-24 md:pb-24 overflow-hidden min-h-[90svh] flex flex-col justify-center">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-6 lg:gap-16 items-center">
                            
                            <div className="flex flex-col items-start space-y-3 md:space-y-8 relative z-20">
                                <div className="space-y-1 md:space-y-2">
                                    <h1 className="text-[30px] md:text-[50px] lg:text-[64px] font-black text-[#0B0F14] leading-[1] md:leading-[1.05] tracking-tighter uppercase italic lg:whitespace-nowrap">
                                        STOP CHASING YOUR TEAM.
                                    </h1>
                                    <h1 className="text-[30px] md:text-[50px] lg:text-[64px] font-black text-[#0F3D2E] leading-[1] md:leading-[1.05] tracking-tighter uppercase italic lg:whitespace-nowrap">
                                        SEE DAILY WORK GETTING DONE.
                                    </h1>
                                    <p className="text-base md:text-[24px] text-[#5B6670] italic font-medium leading-tight pt-1 md:pt-4">
                                        Even when you’re not there.
                                    </p>
                                </div>

                                <TechnicalProof isMobile />

                                <div className="border-l-[3px] border-[#0F3D2E] pl-4 md:pl-[16px] space-y-0.5 py-0.5">
                                    <p className="text-[15px] md:text-[18px] font-black leading-tight text-[#0B0F14] italic">No follow-ups • No confusion</p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
                                    {[
                                        "Pre-built SOPs",
                                        "Daily Tracking",
                                        "Trainer Notes",
                                        "Live Dashboard"
                                    ].map((item, i) => (
                                        <div className="flex items-center gap-2 group" key={i}>
                                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#0F3D2E]/10 flex items-center justify-center shrink-0">
                                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#0F3D2E]" />
                                            </div>
                                            <span className="text-[13px] md:text-base font-bold text-[#0B0F14]">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 w-full pt-2">
                                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-8">
                                        <button className="h-12 md:h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-sm md:text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group w-full sm:w-auto">
                                            <Link href="/library" className="flex items-center gap-3">
                                                Deploy System → ₹2,999 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </button>
                                        <div className="flex flex-col items-center sm:items-start space-y-0.5">
                                            <p className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none italic">ONE-TIME PAYMENT</p>
                                            <p className="text-[8px] font-black text-[#5B6670] uppercase tracking-widest leading-none">OWN THE ENGINE FOREVER</p>
                                        </div>
                                    </div>

                                    <p className="text-[10px] md:text-[13px] text-[#5B6670] font-bold uppercase tracking-[0.1em] border-t border-[#E6E8EC] pt-2 leading-relaxed text-center sm:text-left">
                                        Built on Excel • Runs on Google Sheets <br/>
                                        No software required • Universal accessibility
                                    </p>
                                </div>
                            </div>

                            <div className="relative lg:-ml-44 lg:pt-16 hidden md:block">
                                <div className="relative mx-auto w-fit scale-110 lg:scale-125 transition-all duration-1000">
                                    <AnimatedAnnotation className="top-[32%] -left-2" color="red" delay="0.5s">Missed tasks</AnimatedAnnotation>
                                    <AnimatedAnnotation className="top-[12%] -right-2" color="green" delay="1s">Completed tasks</AnimatedAnnotation>
                                    <AnimatedAnnotation className="bottom-[18%] -left-6" color="blue" delay="1.5s">Live dashboard</AnimatedAnnotation>

                                    <div className="rounded-[24px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] bg-white border border-[#E6E8EC] relative max-w-lg">
                                        <div className="bg-[#0B0F14] h-10 w-full flex items-center px-4 gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                                <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                                                <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                                            </div>
                                            <div className="flex-1 flex justify-center">
                                                <div className="bg-white/10 px-6 py-1 rounded text-[8px] font-black text-white/40 uppercase tracking-widest italic">
                                                    MASTER_OPERATIONAL_SYSTEM_CONSOLE
                                                </div>
                                            </div>
                                        </div>
                                        <img src={DASHBOARD_IMAGE} alt="Master Operational System" className="w-full h-auto object-cover grayscale-[0.05]" />
                                    </div>
                                    
                                    <div className="mt-8 text-center">
                                        <p className="text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                                            sample of restaurant operational dashboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="space-y-10 md:space-y-12">
                        <div className="text-center space-y-3 md:space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[9px] md:text-[10px] rounded-full px-4">Strategic Inventory</Badge>
                            <h2 className="text-[26px] md:text-[44px] font-black text-[#0B0F14] uppercase italic tracking-tight">Select Your Vertical</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels", id: "hotels_and_resorts", icon: Building },
                                { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
                            ].map((sector) => (
                                <Link key={sector.id} href={`/packs/${sector.id}`} className="group flex flex-col items-center gap-3 md:gap-4 p-5 md:p-6 rounded-2xl border border-zinc-100 bg-[#F7F8FA] hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all text-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                                        <sector.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-900 leading-tight italic">{sector.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[800px] mx-auto text-center space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-[28px] md:text-[44px] font-bold text-[#0B0F14] leading-tight tracking-tight uppercase italic">Why operations break</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
                            <div className="space-y-4 md:space-y-6">
                                <h4 className="text-[10px] md:text-[11px] font-black text-[#5B6670] uppercase tracking-[0.3em]">Common Pitfalls</h4>
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        "Work depends on memory of key people",
                                        "Tasks get skipped during busy shifts",
                                        "Staff executes steps differently every time"
                                    ].map((p, i) => (
                                        <li className="flex items-start gap-4 text-[#5B6670] text-sm font-medium italic" key={i}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4 md:space-y-6 p-6 md:p-8 rounded-2xl bg-[#FFF5F5] border border-red-100">
                                <h4 className="text-[10px] md:text-[11px] font-black text-red-600 uppercase tracking-[0.3em]">The Consequence</h4>
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        "Managers keep following up manually",
                                        "No real-time visibility into completion",
                                        "No proper records for audits"
                                    ].map((p, i) => (
                                        <li className="flex items-start gap-3 text-red-900 font-bold text-sm" key={i}>
                                            <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-xl md:text-[22px] font-black text-[#0B0F14] pt-4 uppercase italic">
                            Small misses. Every day. <br/>
                            <span className="text-red-500">That’s where control is lost.</span>
                        </p>
                    </div>
                </Section>

                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="space-y-8 md:space-y-10">
                            <h2 className="text-[28px] md:text-[44px] font-bold text-[#0B0F14] leading-tight tracking-tight uppercase italic">This changes everything.</h2>
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex gap-4 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base md:text-[18px] font-black text-[#0B0F14] uppercase italic">Tasks are already defined</h4>
                                        <p className="text-[#5B6670] text-xs md:text-sm font-medium leading-snug">Over 120+ industry standard SOPs built-in.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <Activity className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base md:text-[18px] font-black text-[#0B0F14] uppercase italic">Work is updated daily</h4>
                                        <p className="text-[#5B6670] text-xs md:text-sm font-medium leading-snug">Team updates progress in seconds, not meetings.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base md:text-[18px] font-black text-[#0B0F14] uppercase italic">Full visibility instantly</h4>
                                        <p className="text-[#5B6670] text-xs md:text-sm font-medium leading-snug">One glance shows you exactly what’s done vs missed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E6E8EC] bg-black p-1.5 md:p-2">
                                 <img src="https://i.postimg.cc/G278vKh8/Screenshot-2026-04-18-004329.png" alt="Cinema Daily Tasks" className="w-full h-auto rounded-xl" />
                            </div>
                            <p className="text-[7px] md:text-[8px] font-bold text-[#5B6670] uppercase tracking-[0.4em] italic text-center">sample daily tasks cinema product</p>
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-16">
                        <div className="text-center space-y-2">
                            <h2 className="text-[28px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { t: "Download system", d: "Get your industry file with pre-built SOPs — ready to use.", i: Download },
                                { t: "Open in Sheets", d: "Upload once. Access from phone or desktop instantly.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Assign roles. Lock structure so nothing breaks.", i: Lock },
                                { t: "See everything live", d: "Track tasks as they get done. Know what’s missed.", i: Activity }
                            ].map((step, i) => (
                                <div className="bg-white border border-[#E6E8EC] p-6 md:p-8 rounded-2xl space-y-4 md:space-y-6 hover:shadow-lg transition-all group" key={i}>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F7F8FA] border border-[#E6E8EC] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-[#0F3D2E] group-hover:text-white transition-all text-lg md:text-xl italic">
                                        {i+1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-base md:text-lg uppercase italic leading-tight">{step.t}</h4>
                                        <p className="text-xs md:text-sm text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-4 md:pt-8">
                            <p className="text-lg md:text-[24px] font-black text-[#0B0F14] uppercase italic tracking-tighter">👉 That’s it. Your operations are now structured.</p>
                        </div>
                    </div>
                </Section>

                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                        <div className="text-center space-y-3 md:space-y-4">
                            <h2 className="text-[28px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">System Sovereignty</h2>
                            <p className="text-[#5B6670] text-sm md:text-base font-medium italic">Why Elite groups choose MoreMeets over standard SaaS.</p>
                        </div>
                        <div className="overflow-x-auto no-scrollbar rounded-2xl md:rounded-3xl border border-zinc-100 shadow-2xl">
                            <table className="w-full text-left min-w-[500px] md:min-w-0">
                                <thead className="bg-[#0B0F14] text-white">
                                    <tr>
                                        <th className="p-4 md:p-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Feature</th>
                                        <th className="p-4 md:p-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] bg-primary/20">MoreMeets™ OS</th>
                                        <th className="p-4 md:p-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Typical SaaS App</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-100 text-xs md:sm">
                                    {[
                                        { f: "Ownership", mm: "One-time buy. Own it forever.", app: "Monthly lease. Pay forever." },
                                        { f: "Customization", mm: "100% Unlocked Excel logic.", app: "Locked features. Request changes." },
                                        { f: "Onboarding", mm: "Zero training. Use Sheets/Excel.", app: "New app learning curve." },
                                        { f: "Data Security", mm: "Sovereign. Stays in your Drive.", app: "Stored on vendor servers." },
                                        { f: "Deployment", mm: "Instant. Live in 10 minutes.", app: "Weeks of setup & integration." }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-4 md:p-6 font-black uppercase italic text-zinc-400 text-[10px] md:text-[11px]">{row.f}</td>
                                            <td className="p-4 md:p-6 font-bold text-[#0F3D2E] bg-primary/5">{row.mm}</td>
                                            <td className="p-4 md:p-6 text-zinc-500 italic">{row.app}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                <TestimonialsSection />
                <FaqSection />

                <Section className="bg-[#0F3D2E] text-white text-center py-24 md:py-32">
                    <div className="max-w-[800px] mx-auto space-y-10 md:space-y-12">
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="text-[32px] md:text-[64px] font-bold leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic">Start running your system today</h2>
                            <p className="text-base md:text-[18px] text-white/60 font-medium italic">Setup takes less than 10 minutes</p>
                        </div>
                        <div className="flex flex-col items-center gap-6 md:gap-8">
                            <button className="h-70 md:h-[80px] px-10 md:px-12 rounded-[16px] bg-[#F4A261] text-white font-black uppercase italic text-xl md:text-2xl shadow-[0_20px_50px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-sm sm:w-auto">
                                <Link href="/library" className="flex items-center gap-4 justify-center">Get Your System <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" /></Link>
                            </button>
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-3">
                                    <p className="text-[32px] md:text-[40px] font-black italic">₹2,999</p>
                                    <span className="text-lg md:text-xl font-bold text-white/30 italic">/ $29</span>
                                </div>
                                <p className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-white/40">One-time payment • Own forever</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}