'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Zap, 
    GraduationCap,
    AlertTriangle,
    ClipboardCheck,
    Clock,
    LayoutGrid,
    FileSpreadsheet,
    XCircle,
    Utensils,
    Hospital,
    School,
    Popcorn,
    CheckCircle2,
    Activity,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/layout/hero-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Section = ({ className, id, children, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-10 md:py-32", className)} {...props}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-2xl md:text-6xl font-black font-headline tracking-tighter !leading-[1.05] text-primary-text uppercase italic", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src, alt, title = "MASTER_OPERATIONAL_ENGINE_V11.9" }: { src: string, alt: string, title?: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-xl py-2 px-4 md:py-3 md:px-5 flex items-center gap-4">
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                <div className="w-2 h-2 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-6 md:px-12 py-1 text-[7px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner font-headline truncate max-w-[150px] md:max-w-none">
                    {title}
                </div>
            </div>
        </div>
        <div className="relative rounded-b-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_60px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <div className="absolute top-0 left-0 w-full h-[12%] z-20 bg-black/90 backdrop-blur-3xl border-b border-white/10 flex items-center justify-center px-4 md:px-10">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(46,184,107,0.8)]" />
                    <span className="text-[8px] md:text-[11px] font-black text-primary uppercase tracking-[0.4em] italic font-headline text-center">
                        SOVEREIGN_COMMAND_OS_ACTIVE
                    </span>
                </div>
            </div>
            <img src={src} alt={alt} className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700 mt-[-0.8%]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

const InstitutionalPayloadSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
            <div className="text-center space-y-2 md:space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[9px]">Technical Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {[
                    { t: "120+ INDUSTRY SOPs", i: ClipboardCheck },
                    { t: "DAILY EXECUTION LOGS", i: Clock },
                    { t: "TRAINER NOTES", i: GraduationCap },
                    { t: "RISK MAPPING", i: AlertTriangle },
                    { t: "MULTI-BRANCH VIEWS", i: LayoutGrid },
                    { t: "EXCEL/SHEETS ENGINE", i: FileSpreadsheet }
                ].map((item, i) => (
                    <div key={i} className="p-4 md:p-10 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3 md:gap-6 hover:border-primary/20 transition-all group">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black">
                            <item.i className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-[9px] md:text-sm tracking-tight leading-tight font-headline">{item.t}</h4>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const TheDifferentiatorSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-20">
            <div className="text-center space-y-2">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[9px]">Industrial Clarity</Badge>
                <h2 className="text-2xl md:text-7xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]">CLARITY DRIVES <br /> EXECUTION</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { t: "WHAT TO DO", d: "Clear, unambiguous instructions.", i: ClipboardCheck },
                    { t: "HOW TO DO IT", d: "Action-oriented notes in plain language.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Consequences defined to drive intentionality.", i: AlertTriangle }
                ].map((card, i) => (
                    <div key={i} className="p-6 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 space-y-4 md:space-y-8 group hover:border-primary/20 transition-all">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black">
                            <card.i className="w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <div className="space-y-2 md:space-y-4">
                            <h4 className="text-lg md:text-2xl font-black text-primary-text uppercase italic tracking-tighter font-headline leading-none">{card.t}</h4>
                            <p className="text-xs md:text-base text-secondary-text italic font-medium leading-relaxed">{card.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const DailySequenceSection = () => (
    <Section className="bg-alternate-background border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-20">
            <div className="text-center space-y-2">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[9px]">Sovereign Workflow</Badge>
                <SectionHeadline>DAILY COMMAND</SectionHeadline>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
                {[
                    { s: "1", t: "SETUP", d: "Download master file." },
                    { s: "2", t: "TEAM OPENS", d: "They see what to do." },
                    { s: "3", t: "EXECUTE", d: "Names entered live." },
                    { s: "4", t: "SCHEDULE", d: "Cycles trigger auto." },
                    { s: "5", t: "COMMAND", d: "Scale without chaos." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-row md:flex-col items-center gap-4 md:space-y-6 group p-3 md:p-0 bg-white/5 md:bg-transparent rounded-xl border border-white/5 md:border-none">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center text-primary font-black text-xs shrink-0">
                            {step.s}
                        </div>
                        <div className="flex-1 md:text-center space-y-1">
                            <h4 className="text-[10px] md:text-sm font-black text-primary-text uppercase italic tracking-tighter font-headline">{step.t}</h4>
                            <p className="text-[8px] md:text-xs text-secondary-text italic font-medium">{step.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const LiveDashboardSection = () => (
    <Section className="bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="space-y-6 md:space-y-10">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[9px]">Operational Visibility</Badge>
                        <SectionHeadline>STOP CHASING. <br /><span className="text-primary">START SEEING.</span></SectionHeadline>
                        <p className="text-sm md:text-xl text-secondary-text italic font-medium leading-relaxed border-l-2 border-primary/20 pl-6">
                            One unified dashboard gives you high-gravity oversight of every task, across every branch, in real-time.
                        </p>
                    </div>
                    <ul className="space-y-3 md:space-y-6">
                        {[
                            { t: "BINARY STATUS", d: "Pending tasks stay RED. Completed turn GREEN.", i: CheckCircle2 },
                            { t: "TIME-STAMPED PROOF", d: "Verifiable audit trail for every action.", i: Clock },
                            { t: "EXECUTIVE ANALYTICS", d: "Completion % by role and location.", i: Activity }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 md:gap-6 group">
                                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                                    <item.i className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black text-primary-text uppercase italic text-[10px] md:text-sm tracking-tight font-headline">{item.t}</h4>
                                    <p className="text-[9px] md:text-sm text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <OperationalWindow 
                        src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" 
                        alt="MoreMeets Sovereign Master Engine Dashboard" 
                    />
                </div>
            </div>
        </div>
    </Section>
);

const RealTaskExamplesSection = () => {
    const examples = [
        { industry: "RESTAURANT", title: "COLD-CHAIN", icon: Utensils, color: "text-primary", what: "1°C to 4°C", how: "Check display", why: "Prevents recall" },
        { industry: "HOSPITAL", title: "CRASH CART", icon: Hospital, color: "text-pink-500", what: "Verify seal", how: "Check pressure", why: "Code Blue fail" },
        { industry: "SCHOOL", title: "BUS SAFETY", icon: School, color: "text-amber-500", what: "Empty bus", how: "Back-seat check", why: "Never-event" },
        { industry: "CINEMA", title: "AC COMFORT", icon: Popcorn, color: "text-purple-500", what: "Check show temp", how: "Verify load", why: "Guest exits" }
    ];
    return (
        <Section className="bg-black">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
                <div className="text-center space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[9px]">Field Evidence</Badge>
                    <SectionHeadline>REAL EXAMPLES</SectionHeadline>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {examples.map((ex, i) => (
                        <div key={i} className="p-4 md:p-8 rounded-xl border border-white/5 bg-[#0a0a0a] flex flex-col space-y-3 md:space-y-6 hover:border-primary/20 transition-all group">
                            <div className="flex items-center gap-2">
                                <ex.icon className={cn("w-3 h-3 md:w-4 md:h-4", ex.color)} />
                                <span className={cn("text-[7px] md:text-[9px] font-black uppercase tracking-widest", ex.color)}>{ex.industry}</span>
                            </div>
                            <h4 className="text-[10px] md:text-xl font-black text-primary-text uppercase italic tracking-tighter leading-none font-headline">{ex.title}</h4>
                            <p className="text-[8px] md:text-sm text-secondary-text italic font-medium leading-tight">WHY: {ex.why}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const PricingSection = () => (
    <Section id="pricing" className="bg-black text-center py-16 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[9px]">Investment in Infrastructure</Badge>
                <h2 className="text-3xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-primary-text leading-tight">OPERATIONAL CERTAINTY</h2>
                <div className="flex flex-col items-center gap-2 pt-2">
                    <div className="flex items-baseline gap-2 md:gap-4">
                        <span className="text-5xl md:text-9xl font-black text-primary italic drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">₹999</span>
                        <span className="text-lg md:text-4xl font-black text-white/20 italic">/ $12</span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">EXCEL & GOOGLE SHEETS • OWN FOREVER</span>
                </div>
            </div>
            <div className="px-4">
                <Button size="lg" asChild className="group w-full md:w-auto h-16 md:h-24 px-6 md:px-16 rounded-xl bg-primary text-black font-black uppercase text-base md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                    <Link href="/library" className="flex items-center justify-center">DEPLOY SYSTEM NOW <ArrowRight className="ml-2 h-5 w-5 md:ml-4 md:h-8 md:w-8 transition-transform group-hover:translate-x-2" /></Link>
                </Button>
            </div>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <InstitutionalPayloadSection />
        <TheDifferentiatorSection />
        <DailySequenceSection />
        <LiveDashboardSection />
        <RealTaskExamplesSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
