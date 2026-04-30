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
import Script from 'next/script';
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

const TechnicalProof = ({ className }: { className?: string }) => (
    <div className={cn("relative group w-full", className)}>
        <AnimatedAnnotation className="top-[25%] left-[5%]" color="red" delay="0.5s">Missed tasks</AnimatedAnnotation>
        <AnimatedAnnotation className="top-[10%] right-[5%]" color="green" delay="1s">Completed</AnimatedAnnotation>
        <AnimatedAnnotation className="bottom-[20%] left-[10%]" color="blue" delay="1.5s">Live Console</AnimatedAnnotation>
        
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
                className="w-full h-auto object-contain grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
            />
        </div>
        
        <div className="mt-4 text-center space-y-1">
            <p className="text-[7px] md:text-[9px] font-black text-[#5B6670] uppercase tracking-[0.4em] italic opacity-60">
                Sample of restaurant operations system dashboard
            </p>
            <p className="text-[8px] md:text-[11px] font-bold text-primary uppercase tracking-[0.2em] italic">
                One glance shows what's done across your entire group.
            </p>
        </div>
    </div>
);

const HeroSection = () => {
    return (
      <>
        <section className="relative w-full bg-[#F7F7F4] overflow-hidden border-b border-[#E8E7E2]">
          <div className="mx-auto max-w-[1440px] px-[20px] md:px-[72px] pt-[80px] md:pt-[36px] pb-[40px]">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 min-h-[820px] items-center">
              {/* LEFT */}
              <div className="lg:col-span-6 pt-[48px]">
                {/* Eyebrow */}
                <div className="mb-7">
                  <p className="text-[12px] font-bold tracking-[0.28em] text-[#5F6672] uppercase">
                    Institutional Operations System
                  </p>
                </div>
  
                {/* Headline */}
                <div className="max-w-[640px]">
                  <h1 className="font-headline text-[48px] md:text-[88px] leading-[0.94] font-extrabold tracking-[-0.045em] italic text-[#0E1420] uppercase">
                    STOP CHASING YOUR
                    <br />
                    TEAM.
                  </h1>
  
                  <h1 className="mt-4 font-headline text-[48px] md:text-[88px] leading-[0.94] font-extrabold tracking-[-0.045em] italic text-[#1E8E5A] uppercase">
                    SEE DAILY WORK
                    <br />
                    GETTING DONE.
                  </h1>
                </div>
  
                {/* Subhead */}
                <p className="mt-8 text-[20px] md:text-[28px] leading-[1.3] italic font-medium text-[#5F6672]">
                  Even when you’re not there.
                </p>
  
                {/* Proof line */}
                <div className="mt-10 flex items-center gap-5">
                  <div className="h-[38px] w-[4px] bg-[#1E8E5A]" />
                  <p className="font-headline text-[18px] md:text-[22px] font-bold italic text-[#0E1420] tracking-[-0.02em]">
                    No follow-ups • No confusion • No memory gaps
                  </p>
                </div>
  
                {/* CTA Row */}
                <div className="mt-12 flex flex-col md:flex-row items-center gap-7">
                  <Link
                    href="/library"
                    className="group inline-flex h-[76px] w-full md:w-[410px] items-center justify-center rounded-[18px] bg-[#C88A4A] px-8 shadow-[0_12px_24px_rgba(200,138,74,0.18)] transition-all duration-300 hover:bg-[#B97A39]"
                  >
                    <span className="font-headline text-[22px] md:text-[28px] font-bold italic text-white uppercase">
                      DEPLOY SYSTEM → ₹2,999
                    </span>
                  </Link>
  
                  <div className="leading-[1.25] text-center md:text-left">
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0E1420]">
                      One-time Payment
                    </p>
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0E1420]">
                      Own the Engine Forever
                    </p>
                  </div>
                </div>
  
                {/* Utility Strip */}
                <div className="mt-8 border-t border-[#E8E7E2] pt-6">
                  <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#5F6672] leading-[1.9]">
                    Built on Excel • Runs on Google Sheets
                    <br />
                    No Software Required • Universal Accessibility
                  </p>
                </div>
              </div>
  
              {/* RIGHT */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
                <div className="relative h-[340px] w-[340px] md:h-[620px] md:w-[620px] overflow-hidden rounded-[28px] bg-[#111827] shadow-[0_24px_60px_rgba(17,24,39,0.18)]">
                  {/* Video */}
                  <div className="absolute inset-0 scale-[1.12] saturate-0 brightness-[0.72] contrast-105">
                    <div
                      style={{
                        padding: "56.25% 0 0 0",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="absolute inset-0 h-full w-full object-cover"
                        title="Operations Hero Video"
                      />
                    </div>
                  </div>
  
                  {/* Overlay tint */}
                  <div className="absolute inset-0 bg-[rgba(10,18,28,0.28)]" />
  
                  {/* Floating Cards */}
                  <div className="absolute left-4 top-4 md:left-7 md:top-7 rounded-[14px] bg-[rgba(255,255,255,0.92)] px-4 py-3 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E8E5A] opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1E8E5A]" />
                      </span>
                      <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.18em] text-[#0E1420]">
                        Shift Live
                      </p>
                    </div>
                  </div>
  
                  <div className="absolute right-4 top-[150px] md:right-7 md:top-[262px] rounded-[14px] bg-[rgba(255,255,255,0.92)] px-[18px] py-[14px] shadow-sm backdrop-blur-md">
                    <p className="font-headline text-[12px] md:text-[14px] font-bold text-[#0E1420] tracking-[-0.01em]">
                      126 TASKS CLOSED
                    </p>
                  </div>
  
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 rounded-[14px] bg-[rgba(255,255,255,0.92)] px-4 py-3 shadow-sm backdrop-blur-md">
                    <p className="font-headline text-[12px] md:text-[14px] font-bold text-[#B45309] tracking-[-0.01em]">
                      3 RISKS FLAGGED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Trust Strip */}
        <section className="w-full border-b border-[#E8E7E2] bg-[#F7F7F4]">
          <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-center px-[20px] md:px-[72px]">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-center">
              {["ISO 9001", "HACCP", "FSSAI", "OSHA", "NABH", "JCI", "AUDIT-READY"].map((item) => (
                <span
                  key={item}
                  className="text-[10px] md:text-[13px] font-bold uppercase tracking-[0.28em] text-[#B0B4BC]"
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

                {/* PITFALLS & CONSEQUENCES */}
                <Section className="bg-[#F7F8FA]">
                    <div className="max-w-[1000px] mx-auto text-center space-y-12 md:space-y-20">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50 px-6 py-1 font-black uppercase tracking-[0.3em] text-[10px]">Forensic Finding</Badge>
                            <h2 className="text-[32px] md:text-[56px] font-bold text-[#0B0F14] leading-[0.95] tracking-tight uppercase italic font-headline">Why operations break</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-left">
                            <div className="space-y-6 md:space-y-10">
                                <h4 className="text-[11px] font-black text-[#5F6672] uppercase tracking-[0.4em]">COMMON PITFALLS</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Work depends on the memory of key people.",
                                        "Standard steps become suggestions during busy shifts.",
                                        "Weeks of learning required for new staff due to 'tribal' training.",
                                        "Minor near-misses go unrecorded, creating hidden liability.",
                                        "Managers spend hours manually checking basic tasks."
                                    ].map((p, i) => (
                                        <li className="flex items-start gap-4 text-[#5F6672] text-sm md:text-[18px] font-medium italic leading-snug" key={i}>
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6 md:space-y-10 p-8 md:p-12 rounded-[2.5rem] bg-[#FFF5F5] border border-red-100 shadow-2xl">
                                <h4 className="text-[11px] font-black text-red-600 uppercase tracking-[0.4em]">THE CONSEQUENCE</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Managers are trapped in a loop of manual follow-ups.",
                                        "SOPs sit in dusty folders while chaos runs the floor.",
                                        "Zero auditable trail for insurance or regulatory inspections.",
                                        "Inconsistency destroys brand trust and guest loyalty.",
                                        "Standards leave the building when a key manager resigns."
                                    ].map((p, i) => (
                                        <li className="flex items-start gap-4 text-red-950 font-bold text-sm md:text-[18px] leading-snug" key={i}>
                                            <X className="w-6 h-6 text-red-500 mt-0.5 shrink-0" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="pt-8">
                            <p className="text-[24px] md:text-[36px] font-black text-[#0B0F14] uppercase italic tracking-tighter leading-none font-headline">
                                Small misses. Every day. <br/>
                                <span className="text-red-500">That’s where control is lost.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* HOW IT WORKS & VISUAL PAYOFF */}
                <Section className="bg-white border-y border-[#E6E8EC]">
                    <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 px-6 py-1 font-black uppercase tracking-[0.3em] text-[10px]">Rapid Deployment</Badge>
                            <h2 className="text-[32px] md:text-[56px] font-bold text-[#0B0F14] uppercase italic tracking-tight font-headline">Start in minutes</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { t: "Download system", d: "Get your industry file with 120+ pre-built SOPs — ready to use.", i: Download },
                                { t: "Open in Sheets", d: "Upload once. Access from phone or desktop instantly.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Assign roles. Lock structure so nothing breaks.", i: Lock },
                                { t: "See everything live", d: "Track tasks as they get done. Know what’s missed.", i: Activity }
                            ].map((step, i) => (
                                <div className="bg-[#F7F8FA] border border-[#E6E8EC] p-8 md:p-10 rounded-[2rem] space-y-6 hover:shadow-xl hover:bg-white hover:border-primary/20 transition-all group" key={i}>
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6E8EC] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-primary group-hover:text-black transition-all text-xl italic shadow-sm">
                                        {i+1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-black text-lg md:text-xl uppercase italic leading-tight font-headline">{step.t}</h4>
                                        <p className="text-sm text-[#5F6672] font-medium italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TECHNICAL PROOF: FULL DASHBOARD VISIBILITY */}
                        <div className="space-y-12">
                            <TechnicalProof className="max-w-5xl mx-auto" />
                            
                            <div className="text-center pt-4">
                                <p className="text-xl md:text-[32px] font-black text-[#0B0F14] uppercase italic tracking-tighter font-headline">
                                    👉 That’s it. Your operations are now structured.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-white border-b border-[#E6E8EC]">
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px] rounded-full px-6 py-1.5 bg-primary/5">Strategic Inventory</Badge>
                            <h2 className="text-[28px] md:text-[48px] font-black text-[#0B0F14] uppercase italic tracking-tight font-headline">Select Your Vertical</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels", id: "hotels_and_resorts", icon: Building },
                                { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
                            ].map((sector) => (
                                <Link key={sector.id} href={`/packs/${sector.id}`} className="group flex flex-col items-center gap-4 p-6 rounded-[2rem] border border-zinc-100 bg-[#F7F8FA] hover:bg-white hover:shadow-2xl hover:border-primary/30 transition-all text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                                        <sector.icon className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900 leading-tight italic">{sector.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* COMPARISON TABLE */}
                <Section className="bg-white border-b border-[#E6E8EC]">
                    <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-[28px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight font-headline">System Sovereignty</h2>
                            <p className="text-[#5F6672] text-sm md:text-base font-medium italic">Why Elite groups choose MoreMeets over standard SaaS.</p>
                        </div>
                        <div className="overflow-x-auto no-scrollbar rounded-[2rem] border border-zinc-100 shadow-2xl">
                            <table className="w-full text-left min-w-[500px] md:min-w-0">
                                <thead className="bg-[#0B0F14] text-white">
                                    <tr>
                                        <th className="p-6 md:p-8 text-[10px] font-black uppercase tracking-[0.4em]">Feature</th>
                                        <th className="p-6 md:p-8 text-[10px] font-black uppercase tracking-[0.4em] bg-primary/20">MoreMeets™ OS</th>
                                        <th className="p-6 md:p-8 text-[10px] font-black uppercase tracking-[0.4em]">Typical SaaS App</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-100 text-sm md:text-base">
                                    {[
                                        { f: "Ownership", mm: "One-time buy. Own it forever.", app: "Monthly lease. Pay forever." },
                                        { f: "Customization", mm: "100% Unlocked Excel logic.", app: "Locked features. Request changes." },
                                        { f: "Onboarding", mm: "Zero training. Use Sheets/Excel.", app: "New app learning curve." },
                                        { f: "Data Security", mm: "Sovereign. Stays in your Drive.", app: "Stored on vendor servers." },
                                        { f: "Deployment", mm: "Instant. Live in 10 minutes.", app: "Weeks of setup & integration." }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-6 md:p-8 font-black uppercase italic text-zinc-400 text-[11px] tracking-widest">{row.f}</td>
                                            <td className="p-6 md:p-8 font-bold text-primary bg-primary/5">{row.mm}</td>
                                            <td className="p-6 md:p-8 text-zinc-500 italic">{row.app}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                <TestimonialsSection />
                <FaqSection />

                <Section className="bg-[#0F3D2E] text-white text-center py-24 md:py-48">
                    <div className="max-w-[1000px] mx-auto space-y-12 md:space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-[40px] md:text-[80px] font-bold leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic font-headline">Start running your system today</h2>
                            <p className="text-xl md:text-[28px] text-white/60 font-medium italic">Setup takes less than 10 minutes</p>
                        </div>
                        <div className="flex flex-col items-center gap-8 md:gap-10">
                            <button className="h-[70px] md:h-[90px] px-12 md:px-20 rounded-[20px] bg-[#F4A261] text-white font-black uppercase italic text-xl md:text-3xl shadow-[0_20px_60px_-10px_rgba(244,162,97,0.6)] hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-lg mx-auto flex items-center justify-center">
                                <Link href="/library" className="flex items-center gap-5 justify-center">Get Your System <ArrowRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-3" /></Link>
                            </button>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-baseline gap-4">
                                    <p className="text-[40px] md:text-[56px] font-black italic">₹2,999</p>
                                    <span className="text-xl md:text-2xl font-bold text-white/30 italic">/ $29</span>
                                </div>
                                <p className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40">One-time payment • Own forever</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
