'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    X,
    ArrowRight, 
    Download,
    LayoutGrid,
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
    Lock,
    Target,
    ShoppingBag,
    History
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import Script from 'next/script';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-32", className)}>
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

const TechnicalProof = ({ className }: { className?: string }) => (
    <div className={cn("relative group w-full", className)}>
        <AnimatedAnnotation className="top-[25%] left-[5%]" color="red" delay="0.5s">Missed tasks</AnimatedAnnotation>
        <AnimatedAnnotation className="top-[10%] right-[5%]" color="green" delay="1s">Completed</AnimatedAnnotation>
        <AnimatedAnnotation className="bottom-[20%] left-[10%]" color="blue" delay="1.5s">Live Console</AnimatedAnnotation>
        
        <div className="bg-[#111] h-6 md:h-10 w-full rounded-t-lg md:rounded-t-[20px] flex items-center px-4 md:px-6 gap-1.5 border border-white/10">
            <div className="flex gap-1 md:gap-1.5">
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-red-500/30" />
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-amber-500/30" />
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500/30" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-4 md:px-12 py-1 text-[6px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                    SOVEREIGN_MASTER_CONSOLE.xlsx
                </div>
            </div>
        </div>

        <div className="rounded-b-lg md:rounded-b-[20px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.25)] bg-white border border-[#E6E8EC] border-t-0 relative">
            <img 
                src={DASHBOARD_IMAGE} 
                alt="Sovereign Dashboard" 
                className="w-full h-auto object-contain grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
            />
        </div>
        
        <div className="mt-8 text-center space-y-2">
            <p className="text-[8px] md:text-[11px] font-black text-[#5B6670] uppercase tracking-[0.5em] italic opacity-60">
                Sample of restaurant operations system dashboard
            </p>
            <p className="text-[10px] md:text-[14px] font-bold text-primary uppercase tracking-[0.3em] italic">
                One glance shows what's done across your entire group.
            </p>
        </div>
    </div>
);

const HeroSection = () => {
    return (
      <>
        <section className="relative w-full bg-[#F7F7F4] overflow-hidden border-b border-[#E8E7E2]">
          <div className="mx-auto max-w-[1440px] px-[20px] md:px-[72px] pt-[80px] md:pt-[60px] pb-[60px]">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 min-h-[780px] items-center">
              {/* LEFT: NARRATIVE COMMAND */}
              <div className="lg:col-span-7">
                <div className="max-w-[740px]">
                  <h1 className="font-headline text-[44px] md:text-[92px] leading-[0.92] font-black tracking-[-0.04em] italic text-[#0E1420] uppercase">
                    STOP CHASING YOUR
                    <br />
                    TEAM.
                  </h1>
  
                  <h1 className="mt-4 font-headline text-[44px] md:text-[92px] leading-[0.92] font-black tracking-[-0.04em] italic text-[#1E8E5A] uppercase">
                    SEE DAILY WORK
                    <br />
                    GETTING DONE.
                  </h1>
                </div>
  
                <p className="mt-10 text-[22px] md:text-[32px] leading-[1.2] italic font-medium text-[#5F6672] max-w-xl">
                  Even when you’re not there.
                </p>
  
                <div className="mt-12 flex items-center gap-6">
                  <div className="h-[44px] w-[5px] bg-[#1E8E5A]" />
                  <p className="font-headline text-[18px] md:text-[24px] font-bold italic text-[#0E1420] tracking-[-0.02em]">
                    No follow-ups • No confusion • No memory gaps
                  </p>
                </div>
  
                <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
                  <Link
                    href="/library"
                    className="group inline-flex h-[84px] w-full md:w-[440px] items-center justify-center rounded-[20px] bg-[#C88A4A] px-10 shadow-[0_15px_30px_rgba(200,138,74,0.2)] transition-all duration-300 hover:bg-[#B97A39] hover:scale-[1.02] active:scale-95"
                  >
                    <span className="font-headline text-[22px] md:text-[30px] font-black italic text-white uppercase tracking-tight">
                      DEPLOY SYSTEM → ₹2,999
                    </span>
                  </Link>
  
                  <div className="leading-[1.3] text-center md:text-left">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#0E1420]">
                      One-time Payment
                    </p>
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#5F6672]">
                      Own the Engine Forever
                    </p>
                  </div>
                </div>
  
                <div className="mt-12 border-t border-[#E8E7E2] pt-8">
                  <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#5F6672] leading-[1.8] italic">
                    Built on Excel • Runs on Google Sheets
                    <br />
                    No Software Required • Universal Accessibility
                  </p>
                </div>
              </div>
  
              {/* RIGHT: CINEMATIC PROOF */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <div className="relative h-[340px] w-[340px] md:h-[680px] md:w-[680px] overflow-hidden rounded-[40px] bg-[#111827] shadow-[0_32px_80px_rgba(17,24,39,0.25)] border-8 border-white">
                  <div className="absolute inset-0 scale-[1.15] saturate-0 brightness-[0.75] contrast-110">
                    <div className="relative w-full h-full">
                      <iframe
                        src="https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="absolute inset-0 h-full w-full object-cover"
                        title="Operations Hero Video"
                      />
                    </div>
                  </div>
  
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0E1420]/40 to-transparent" />
  
                  {/* Floating Status Cards */}
                  <div className="absolute left-6 top-6 md:left-10 md:top-10 rounded-[18px] bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E8E5A] opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#1E8E5A]" />
                      </span>
                      <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] text-[#0E1420]">
                        SHIFT LIVE
                      </p>
                    </div>
                  </div>
  
                  <div className="absolute right-6 top-[180px] md:right-10 md:top-[280px] rounded-[18px] bg-white/95 px-6 py-4 shadow-2xl backdrop-blur-xl border border-white/20">
                    <p className="font-headline text-[13px] md:text-[16px] font-black text-[#0E1420] tracking-tighter italic">
                      126 TASKS CLOSED
                    </p>
                  </div>
  
                  <div className="absolute bottom-6 left-6 md:bottom-12 md:left-10 rounded-[18px] bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-xl border border-white/20">
                    <p className="font-headline text-[13px] md:text-[16px] font-black text-[#B45309] tracking-tighter italic">
                      3 RISKS FLAGGED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="w-full border-b border-[#E8E7E2] bg-[#F7F7F4]">
          <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-center px-[20px] md:px-[72px]">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-center">
              {["ISO 9001", "HACCP", "FSSAI", "OSHA", "NABH", "JCI", "AUDIT-READY"].map((item) => (
                <span
                  key={item}
                  className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.35em] text-[#B0B4BC]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
  
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </>
    );
};

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                <HeroSection />

                {/* THE INSTEAD OF MANDATE */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-0 border border-[#E8E7E2] rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="p-10 md:p-20 bg-[#F7F8FA] space-y-8">
                            <h3 className="text-[14px] font-black text-red-500 uppercase tracking-[0.5em]">THE FRICTION</h3>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">Instead of...</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Hiring consultants at ₹50,000+ per unit.",
                                        "Spending 100+ hours building SOPs from scratch.",
                                        "Managing through unsearchable chat groups.",
                                        "Chasing staff manually for basic daily tasks."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[#5B6670] text-lg font-bold italic leading-snug">
                                            <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="p-10 md:p-20 bg-primary/5 space-y-8">
                            <h3 className="text-[14px] font-black text-primary uppercase tracking-[0.5em]">THE SOVEREIGN SOLUTION</h3>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">You deploy...</h2>
                                <p className="text-xl md:text-2xl text-primary font-bold italic leading-snug">
                                    A complete institutional data engine. What usually takes weeks to build—now runs in 10 minutes.
                                </p>
                                <ul className="space-y-6 pt-4">
                                    {[
                                        "120+ Pre-built technical protocols.",
                                        "Live dashboard for one-glance visibility.",
                                        "Built-in Trainer's Notes for staff.",
                                        "Binary 'Done/Missed' verification."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[#0B0F14] text-lg font-bold italic leading-snug">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* PITFALLS & CONSEQUENCES */}
                <Section className="bg-[#F7F8FA] border-y border-[#E8E7E2]">
                    <div className="max-w-[1000px] mx-auto text-center space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-[36px] md:text-[64px] font-black text-[#0E1420] leading-[0.95] tracking-tight uppercase italic font-headline">Why operations break</h2>
                            <p className="text-xl md:text-2xl text-[#5F6672] italic font-medium">Systems fail slowly before they fail catastrophically.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div className="space-y-8">
                                <h4 className="text-[12px] font-black text-[#5F6672] uppercase tracking-[0.5em]">COMMON PITFALLS</h4>
                                <ul className="space-y-8">
                                    {[
                                        "Work depends on the memory of key individuals.",
                                        "Standard steps become 'suggestions' during busy shifts.",
                                        "New staff require weeks of learning tribal knowledge.",
                                        "Minor near-misses go unrecorded, creating hidden liability.",
                                        "Managers spend 40% of their day following up basic work."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                                            <span className="text-[#5F6672] text-lg md:text-[20px] font-bold italic leading-tight">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8 p-10 md:p-14 rounded-[3rem] bg-white border border-[#E8E7E2] shadow-2xl">
                                <h4 className="text-[12px] font-black text-red-600 uppercase tracking-[0.5em]">THE CONSEQUENCE</h4>
                                <ul className="space-y-8">
                                    {[
                                        "Managers trapped in a loop of constant manual checking.",
                                        "SOPs sit in dusty folders while chaos runs the floor.",
                                        "Zero auditable trail for insurance or legal defense.",
                                        "Standards leave the building when a key person resigns.",
                                        "Inconsistency destroys brand trust and guest loyalty."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-red-950 font-black text-lg md:text-[20px] leading-tight italic uppercase">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="pt-12">
                            <p className="text-[28px] md:text-[44px] font-black text-[#0B0F14] uppercase italic tracking-tighter leading-none font-headline">
                                Small misses. Every day. <br/>
                                <span className="text-red-500">That’s where control is lost.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* HOW IT WORKS & VISUAL PAYOFF */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <h2 className="text-[36px] md:text-[64px] font-black text-[#0B0F14] uppercase italic tracking-tight font-headline">Start in minutes</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { t: "Download system", d: "Get your industry-specific file with 120+ pre-built protocols.", i: Download },
                                { t: "Open in Sheets", d: "Upload once. Access from phone or desktop instantly.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Assign roles. Lock formulas so nothing breaks.", i: Lock },
                                { t: "See everything live", d: "Track tasks as they get done. Know what’s missed instantly.", i: Activity }
                            ].map((step, i) => (
                                <div className="bg-[#F7F8FA] border border-[#E8E7E2] p-10 md:p-12 rounded-[2.5rem] space-y-8 hover:shadow-2xl hover:bg-white hover:border-primary/30 transition-all group" key={i}>
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E7E2] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-primary group-hover:text-white transition-all text-2xl italic shadow-sm">
                                        {i+1}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-xl md:text-2xl uppercase italic leading-tight font-headline">{step.t}</h4>
                                        <p className="text-base text-[#5F6672] font-bold italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TECHNICAL PROOF: FULL DASHBOARD VISIBILITY */}
                        <div className="space-y-16">
                            <TechnicalProof className="max-w-6xl mx-auto" />
                            
                            <div className="text-center pt-8">
                                <p className="text-2xl md:text-[40px] font-black text-[#0B0F14] uppercase italic tracking-tighter font-headline">
                                    👉 That’s it. Your operations are now structured.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#0E1420] border-y border-white/5">
                    <div className="space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-[36px] md:text-[64px] font-black text-white uppercase italic tracking-tight font-headline">Select Your Vertical</h2>
                            <p className="text-white/40 text-xl md:text-2xl font-bold italic">Engineered for single units and multi-unit groups.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels", id: "hotels_and_resorts", icon: Building },
                                { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
                            ].map((sector) => (
                                <Link key={sector.id} href={`/packs/${sector.id}`} className="group flex flex-col items-center gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/50 transition-all text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:scale-110 transition-all shadow-inner">
                                        <sector.icon className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] text-white/40 group-hover:text-white leading-tight italic">{sector.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* COMPARISON TABLE */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-[32px] md:text-[56px] font-black text-[#0B0F14] uppercase italic tracking-tight font-headline">System Sovereignty</h2>
                            <p className="text-[#5F6672] text-xl font-bold italic">Why elite groups choose MoreMeets over standard SaaS.</p>
                        </div>
                        <div className="overflow-x-auto no-scrollbar rounded-[3rem] border border-[#E8E7E2] shadow-2xl">
                            <table className="w-full text-left min-w-[600px]">
                                <thead className="bg-[#0B0F14] text-white">
                                    <tr>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">ENGINE PARAMETER</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em] bg-primary/20">MOREMEETS™ OS</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">TYPICAL SaaS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E8E7E2] text-base md:text-lg font-bold italic">
                                    {[
                                        { f: "Data Ownership", mm: "One-time buy. Own it forever.", app: "Monthly lease. Pay forever." },
                                        { f: "Customization", mm: "100% Unlocked Excel logic.", app: "Locked features. Requests needed." },
                                        { f: "Onboarding", mm: "Zero training. Uses existing skills.", app: "Weeks of learning a new app." },
                                        { f: "Infrastructure", mm: "Sovereign. Stays in your local Drive.", app: "Stored on third-party servers." },
                                        { f: "Deployment", mm: "Instant. Live in 10 minutes.", app: "Weeks of setup & integration." }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-8 md:p-10 font-black uppercase text-zinc-400 text-[12px] tracking-[0.3em]">{row.f}</td>
                                            <td className="p-8 md:p-10 text-primary bg-primary/5">{row.mm}</td>
                                            <td className="p-8 md:p-10 text-[#5F6672]">{row.app}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                <TestimonialsSection />
                <FaqSection />

                <Section className="bg-primary text-white text-center py-32 md:py-64 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="max-w-[1000px] mx-auto space-y-16 md:space-y-24 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-[48px] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-[#0E1420]">Start running properly today</h2>
                            <p className="text-xl md:text-[36px] text-[#0E1420]/70 font-bold italic">Deployment takes less than 10 minutes.</p>
                        </div>
                        <div className="flex flex-col items-center gap-10 md:gap-14">
                            <button className="h-[90px] md:h-[120px] px-16 md:px-24 rounded-[30px] bg-[#C88A4A] text-white font-black uppercase italic text-2xl md:text-5xl shadow-[0_30px_60px_-15px_rgba(200,138,74,0.6)] hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-2xl mx-auto flex items-center justify-center">
                                <Link href="/library" className="flex items-center gap-8 justify-center">Get Your System <ArrowRight className="w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-4" /></Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[56px] md:text-[84px] font-black italic text-[#0E1420]">₹2,999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-[#0E1420]/40 italic">/ $29</span>
                                </div>
                                <p className="text-[14px] font-black uppercase tracking-[0.5em] text-[#0E1420]/60">One-time payment • Own forever</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
