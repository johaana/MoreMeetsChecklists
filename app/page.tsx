'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Zap, 
    ShieldCheck,
    GraduationCap,
    AlertTriangle,
    Users,
    ClipboardCheck,
    BarChart3,
    Settings2,
    Target,
    Activity,
    XCircle,
    CheckCircle2,
    Clock,
    LayoutGrid,
    Repeat,
    Smartphone,
    Globe,
    History,
    Search
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/layout/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Section = ({ className, id, children, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-32", className)} {...props}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-black font-headline sm:text-5xl md:text-6xl tracking-tighter !leading-[1.05] text-primary-text uppercase italic", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src, alt }: { src: string, alt: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        {/* Browser/Window Frame Header */}
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                    sovereign_v11.9_master_engine.xlsx
                </div>
            </div>
        </div>
        {/* Content with glow effect */}
        <div className="relative rounded-b-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

const TheShiftSection = () => (
    <Section className="bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl md:rounded-[2.5rem] overflow-hidden">
                <div className="space-y-8 p-10 md:p-16 bg-black">
                    <h3 className="text-red-500/60 font-black uppercase tracking-[0.4em] text-[10px] italic">WHY OPERATIONS BREAK</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks depend on memory",
                            "SOPs sit in folders",
                            "Managers keep following up",
                            "No real visibility",
                            "Every branch runs differently"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium">
                                <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 p-10 md:p-16 bg-primary/[0.02]">
                    <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic">WHAT THIS CHANGES</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks are already defined",
                            "Responsibility is assigned by role",
                            "Execution is recorded as work happens",
                            "Dashboard shows reality live",
                            "Every location runs the same standard"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-primary-text font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center pt-8">
                <p className="text-xl md:text-3xl font-black text-primary-text uppercase italic tracking-tighter">
                    THIS IS NOT A TOOL. <br />
                    <span className="text-primary">THIS IS YOUR CONTROL SYSTEM.</span>
                </p>
            </div>
        </div>
    </Section>
);

const OperatingLoopSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-6xl mx-auto space-y-20">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Daily Sequence</Badge>
                <SectionHeadline>HOW YOUR BUSINESS RUNS DAILY</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
                {[
                    { t: "SETUP", d: "Add branches and assign team to roles. One time only.", i: Settings2 },
                    { t: "TEAM OPENS TASKS", d: "They see what to do, how to do it, and why it matters.", i: Smartphone },
                    { t: "THEY EXECUTE", d: "Names entered as work happens. Logs build live.", i: Target },
                    { t: "TASKS RUN ON SCHEDULE", d: "Daily, Weekly, Monthly cycles trigger automatically.", i: Clock },
                    { t: "COMMAND", d: "Run one unit perfectly. Scale without chaos.", i: Activity }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 group">
                        <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all shadow-xl">
                            {i + 1}
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight">{step.t}</h4>
                            <p className="text-[11px] text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-12 border-t border-white/5">
                <p className="text-lg md:text-xl text-secondary-text italic font-medium">
                    This repeats every day. Without follow-ups. Without supervision.
                </p>
            </div>
        </div>
    </Section>
);

const ClaritySection = () => (
    <Section className="bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">The Differentiator</Badge>
                <SectionHeadline>EVERY TASK IS BUILT FOR CLARITY</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { t: "WHAT TO DO", d: "Clear, unambiguous instructions. No room for guessing.", i: ClipboardCheck },
                    { t: "HOW TO DO IT", d: "Trainer Notes in plain language. No training curve required.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Specific consequences of failure defined to drive intentionality.", i: AlertTriangle }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6 hover:border-primary/20 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                            <item.i className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter">{item.t}</h4>
                        <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
                {[
                    "No misinterpretation",
                    "Same execution across teams",
                    "Faster onboarding",
                    "No hero dependency"
                ].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] text-center justify-center border-l border-white/10 px-4 italic">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const RealWorldExamplesSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Field Evidence</Badge>
                <SectionHeadline>REAL TASK EXAMPLES</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { 
                        cat: "🍽 RESTAURANT", 
                        title: "Cold-Chain Check", 
                        what: "Ensure fridge is 1°C to 4°C", 
                        how: "Check display and log reading", 
                        why: "Prevents spoilage and recall" 
                    },
                    { 
                        cat: "🏥 HOSPITAL", 
                        title: "Crash Cart Readiness", 
                        what: "Verify cart seal and O2 level", 
                        how: "Check lock seal + pressure", 
                        why: "Emergency response failure" 
                    },
                    { 
                        cat: "🏫 SCHOOL", 
                        title: "Bus Safety Check", 
                        what: "No child left in bus", 
                        how: "Walk to the last seat", 
                        why: "Critical safety never-event" 
                    },
                    { 
                        cat: "🎬 CINEMA", 
                        title: "Auditorium Comfort", 
                        what: "Verify temperature in show", 
                        how: "Check AC output load", 
                        why: "Guest complaints and exits" 
                    }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-2xl bg-black border border-white/5 space-y-8 hover:border-primary/30 transition-colors">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{item.cat}</span>
                            <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter leading-tight">{item.title}</h4>
                        </div>
                        <div className="space-y-5 text-[11px] font-medium italic text-secondary-text">
                            <p className="leading-relaxed"><strong className="text-primary-text uppercase not-italic font-black text-[9px] tracking-[0.2em] mr-2 block mb-1">What:</strong> {item.what}</p>
                            <p className="leading-relaxed"><strong className="text-primary-text uppercase not-italic font-black text-[9px] tracking-[0.2em] mr-2 block mb-1">How:</strong> {item.how}</p>
                            <p className="leading-relaxed"><strong className="text-red-500 uppercase not-italic font-black text-[9px] tracking-[0.2em] mr-2 block mb-1">Why:</strong> {item.why}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-8">
                <p className="text-xl md:text-2xl font-black text-primary uppercase italic tracking-tighter">
                    THIS IS NOT A CHECKLIST. <br />
                    <span className="text-primary-text">THIS IS DAILY OPERATIONAL CONTROL.</span>
                </p>
            </div>
        </div>
    </Section>
);

const LiveDashboardSection = () => (
    <Section className="bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">Live Visibility</Badge>
                <SectionHeadline>SEE YOUR BUSINESS LIVE</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium">No reports. No calls. No follow-ups.</p>
            </div>

            <OperationalWindow 
                src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png"
                alt="Sovereign Dashboard Interface"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto pt-12">
                {[
                    "Live Completion (Green/Pending)",
                    "Unit & Group Performance Grid",
                    "High-Risk Alert Signals",
                    "Audit-Ready Execution Logs"
                ].map(item => (
                    <div key={item} className="flex items-center justify-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight italic">{item}</span>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <p className="text-2xl md:text-4xl font-black text-primary-text uppercase italic tracking-tighter leading-tight">
                    YOU DON'T ASK. <br />
                    <span className="text-primary">YOU ALREADY KNOW.</span>
                </p>
            </div>
        </div>
    </Section>
);

const WhyExistsSection = () => (
    <Section className="bg-primary/5 border-y border-primary/10 text-center py-32">
        <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-7xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9]">
                SYSTEMS DON'T FORGET. <br />
                <span className="text-primary">PEOPLE DO.</span>
            </h2>
            <div className="space-y-4">
                <p className="text-xl md:text-2xl text-secondary-text font-medium italic">
                    When a manager leaves, your standards shouldn't leave.
                </p>
                <p className="text-sm md:text-lg text-white/40 font-bold uppercase tracking-[0.4em]">
                    THIS SYSTEM TURNS DAILY OPERATIONS INTO A STRUCTURE THAT STAYS.
                </p>
            </div>
        </div>
    </Section>
);

const WhatYouGetSection = () => (
    <Section className="bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Institutional Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    "Pre-built, industry-grade SOPs",
                    "Daily, weekly, monthly execution system",
                    "Trainer Notes for every task",
                    "Consequences of failure defined",
                    "Multi-branch visibility",
                    "Fully editable standalone system"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all shadow-inner">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <p className="text-[13px] font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const PricingSection = () => (
    <Section id="pricing" className="bg-alternate-background text-center py-32">
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Limited Deployment Offer</Badge>
                <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-primary-text">
                    ONE-TIME DEPLOYMENT
                </h2>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-baseline gap-4">
                        <span className="text-7xl md:text-9xl font-black text-primary italic drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">₹999</span>
                        <span className="text-2xl md:text-4xl font-black text-white/20 italic">/ $12</span>
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">NO SUBSCRIPTIONS • NO LOCK-IN</span>
                </div>
            </div>

            <div className="space-y-8">
                <p className="text-lg text-secondary-text font-medium italic">Single unit or multi-branch. One system for any scale.</p>
                <Button size="lg" asChild className="group h-24 px-16 rounded-2xl bg-primary text-black font-black uppercase text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                    <Link href="/library" className="flex items-center">DEPLOY YOUR SYSTEM <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-2" /></Link>
                </Button>
            </div>
        </div>
    </Section>
);

const FinalCtaSection = () => (
    <Section className="bg-black border-t border-white/5 text-center py-32 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(46,184,107,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <div className="space-y-4">
                <SectionHeadline>STOP CHASING. <br /> START SEEING.</SectionHeadline>
                <p className="text-xl md:text-3xl text-primary font-black uppercase italic tracking-tighter -mt-6">DEPLOY YOUR SYSTEM: ₹999 / $12</p>
            </div>
            
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center">
                    <Button size="lg" asChild className="group h-24 px-16 rounded-2xl bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                        <Link href="/library" className="flex flex-col items-center justify-center gap-1">
                            START SEEING <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </Button>
                    <p className="text-[11px] font-black text-white/20 mt-10 uppercase tracking-[0.5em]">OWN IT. RUN IT. NO DEPENDENCE.</p>
                </div>
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
        
        <Section id="operational-logic" className="bg-black border-b border-white/5 py-16 md:py-20">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">OPERATIONAL LOGIC</Badge>
                <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8">
                    {[
                        { from: "MEMORY", to: "INFRASTRUCTURE" },
                        { from: "GUESSWORK", to: "TELEMETRY" },
                        { from: "HEROES", to: "SYSTEMS" },
                        { from: "DOCUMENTATION", to: "EXECUTION" }
                    ].map((shift, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4">
                            <span className="text-sm md:text-xl font-black text-white/20 uppercase tracking-[0.2em] italic">{shift.from}</span>
                            <ArrowRight className="w-4 h-4 text-primary/40" />
                            <span className="text-sm md:text-xl font-black text-primary uppercase tracking-[0.2em] italic">{shift.to}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        <TheShiftSection />
        <OperatingLoopSection />
        <ClaritySection />
        <RealWorldExamplesSection />
        <LiveDashboardSection />
        <WhyExistsSection />
        <WhatYouGetSection />
        <PricingSection />
        
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
