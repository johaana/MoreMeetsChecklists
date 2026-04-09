
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Zap, 
    ShieldCheck,
    GraduationCap,
    AlertTriangle,
    ClipboardCheck,
    Clock,
    LayoutGrid,
    FileSpreadsheet,
    XCircle,
    Utensils,
    Lock,
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
    <section id={id} className={cn("w-full py-12 md:py-32", className)} {...props}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-2xl sm:text-5xl md:text-6xl font-black font-headline tracking-tighter !leading-[1.05] text-primary-text uppercase italic", className)}>
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
            
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700 mt-[-0.8%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

const InstitutionalPayloadSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Institutional Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                    { t: "PRE-BUILT, INDUSTRY-GRADE SOPs", i: ClipboardCheck },
                    { t: "DAILY, WEEKLY, MONTHLY EXECUTION SYSTEM", i: Clock },
                    { t: "TRAINER NOTES FOR EVERY TASK", i: GraduationCap },
                    { t: "CONSEQUENCES OF FAILURE DEFINED", i: AlertTriangle },
                    { t: "SINGLE UNIT OR MULTI-BRANCH VISIBILITY", i: LayoutGrid },
                    { t: "WORKS ON EXCEL AND GOOGLE SHEETS", i: FileSpreadsheet }
                ].map((item, i) => (
                    <div key={i} className="p-6 md:p-10 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 md:gap-6 hover:border-primary/20 transition-all group">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-black">
                            <item.i className="w-5 h-5" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-xs md:text-sm tracking-tighter leading-tight font-headline">{item.t}</h4>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const TheDifferentiatorSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[10px]">The Differentiator</Badge>
                <h2 className="text-3xl md:text-7xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]">
                    EVERY TASK IS <br /> BUILT FOR CLARITY
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    { t: "WHAT TO DO", d: "Clear, unambiguous instructions. No room for guessing.", i: ClipboardCheck },
                    { t: "HOW TO DO IT", d: "Action-oriented notes in plain language. No training curve required.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Specific consequences of failure defined to drive intentionality.", i: AlertTriangle }
                ].map((card, i) => (
                    <div key={i} className="p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 space-y-6 md:space-y-8 group hover:border-primary/20 transition-all duration-500">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                            <card.i className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <h4 className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter font-headline leading-none">{card.t}</h4>
                            <p className="text-sm md:text-base text-secondary-text italic font-medium leading-relaxed">{card.d}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 max-w-5xl mx-auto">
                {[
                    "NO MISINTERPRETATION",
                    "SAME EXECUTION ACROSS TEAMS",
                    "FASTER ONBOARDING",
                    "NO HERO DEPENDENCY"
                ].map((proof, i) => (
                    <div key={i} className="flex items-center gap-4 md:gap-6">
                        <span className="text-[8px] md:text-[11px] font-black text-primary uppercase tracking-[0.3em] italic text-center leading-tight">{proof}</span>
                        {i % 2 === 0 && i < 3 && <div className="hidden md:block w-px h-4 bg-white/10" />}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const DailySequenceSection = () => (
    <Section className="bg-alternate-background border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Daily Sequence</Badge>
                <SectionHeadline>HOW YOUR BUSINESS RUNS DAILY</SectionHeadline>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                {[
                    { s: "1", t: "SETUP", d: "Download master file. Works on Excel and Google Sheets." },
                    { s: "2", t: "TEAM OPENS TASKS", d: "They see what to do, how to do it, and why it matters." },
                    { s: "3", t: "THEY EXECUTE", d: "Names entered as work happens. Logs build live." },
                    { s: "4", t: "TASKS RUN ON SCHEDULE", d: "Daily, Weekly, Monthly cycles trigger automatically." },
                    { s: "5", t: "COMMAND", d: "Run one unit perfectly. Scale without chaos." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-row md:flex-col items-start gap-4 md:space-y-6 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center text-primary font-black text-sm shrink-0">
                            {step.s}
                        </div>
                        <div className="space-y-1.5 md:space-y-3">
                            <h4 className="font-black text-primary-text uppercase italic tracking-tighter font-headline leading-tight">{step.t}</h4>
                            <p className="text-[10px] md:text-xs text-secondary-text italic font-medium leading-relaxed">{step.d}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-12 text-center border-t border-white/5">
                <p className="text-base md:text-xl text-white/40 italic font-medium">
                    This repeats every day. Without follow-ups. Without supervision.
                </p>
            </div>
        </div>
    </Section>
);

const LiveDashboardSection = () => (
    <Section className="bg-black overflow-hidden border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[10px]">Live Data</Badge>
                <SectionHeadline>SEE YOUR BUSINESS LIVE</SectionHeadline>
                <p className="text-base md:text-xl text-secondary-text italic font-medium">No reports. No calls. No follow-ups.</p>
            </div>

            <OperationalWindow 
                src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png"
                alt="Sovereign Dashboard Interface"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center max-w-5xl mx-auto pt-8 md:pt-12">
                {[
                    "Done vs. Pending Status",
                    "Single Unit / Multi-Branch Overview",
                    "Identified Operational Gaps",
                    "Permanent Activity Record"
                ].map(item => (
                    <div key={item} className="flex items-center justify-center gap-3 text-left">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-[9px] md:text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight italic">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const TaskCard = ({ ex, i }: { ex: any, i: number }) => (
    <div className="p-6 md:p-10 rounded-xl border border-white/5 bg-[#0a0a0a] flex flex-col space-y-6 md:space-y-8 hover:border-primary/20 transition-all group h-full">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
                <ex.icon className={cn("w-4 h-4", ex.color)} />
                <span className={cn("text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]", ex.color)}>{ex.industry}</span>
            </div>
            <span className="text-[7px] md:text-[8px] font-mono text-white/10 uppercase tracking-widest">[CP_0{i+1}]</span>
        </div>
        
        <h4 className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none font-headline">{ex.title}</h4>
        
        <div className="space-y-4 md:space-y-6">
            <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-widest">TECHNICAL PROTOCOL:</span>
                <p className="text-xs md:text-sm text-secondary-text italic font-medium leading-relaxed">{ex.what}</p>
            </div>
            <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-widest">FLOOR ACTION:</span>
                <p className="text-xs md:text-sm text-secondary-text italic font-medium leading-relaxed">{ex.how}</p>
            </div>
            <div className="space-y-1 p-3 md:p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <span className="text-[9px] md:text-[10px] font-black text-red-500/60 uppercase tracking-widest">CONSEQUENCE IF MISSED:</span>
                <p className="text-xs md:text-sm text-secondary-text italic font-medium leading-relaxed">{ex.why}</p>
            </div>
        </div>
    </div>
);

const RealTaskExamplesSection = () => {
    const examples = [
        {
            industry: "RESTAURANT",
            title: "COLD-CHAIN CHECK",
            icon: Utensils,
            color: "text-primary",
            what: "Ensure fridge is 1°C to 4°C",
            how: "Check display and log reading",
            why: "Prevents spoilage and recall"
        },
        {
            industry: "HOSPITAL",
            title: "CRASH CART READINESS",
            icon: Hospital,
            color: "text-pink-500",
            what: "Verify cart seal and O2 level",
            how: "Check lock seal + pressure",
            why: "Emergency response failure"
        },
        {
            industry: "SCHOOL",
            title: "BUS SAFETY CHECK",
            icon: School,
            color: "text-amber-500",
            what: "No child left in bus",
            how: "Walk to the last seat",
            why: "Critical safety never-event"
        },
        {
            industry: "CINEMA",
            title: "AUDITORIUM COMFORT",
            icon: Popcorn,
            color: "text-purple-500",
            what: "Verify temperature in show",
            how: "Check AC output load",
            why: "Guest complaints and exits"
        }
    ];

    return (
        <Section className="bg-black">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Field Evidence</Badge>
                    <SectionHeadline>REAL TASK EXAMPLES</SectionHeadline>
                </div>

                <div className="md:hidden">
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-4">
                            {examples.map((ex, i) => (
                                <CarouselItem key={i} className="pl-4 basis-[85%]">
                                    <TaskCard ex={ex} i={i} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-6">
                            {examples.map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
                            ))}
                        </div>
                    </Carousel>
                </div>

                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {examples.map((ex, i) => (
                        <TaskCard key={i} ex={ex} i={i} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

const TheShiftSection = () => (
    <Section className="bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Category Shift</Badge>
                <SectionHeadline>STOP LEAVING YOUR BRAND TO LUCK</SectionHeadline>
                <p className="text-base md:text-xl text-secondary-text italic font-medium max-w-2xl mx-auto leading-relaxed">
                    A good manager is a gift. A good system is an asset. <br /> Stop leaving your brand to luck.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="space-y-6 md:space-y-8 p-8 md:p-16 bg-black">
                    <h3 className="text-red-500/60 font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] italic">THE LUCK MODEL</h3>
                    <div className="space-y-4 md:space-y-6">
                        {[
                            "Tasks depend on memory",
                            "SOPs sit in folders",
                            "Managers keep following up",
                            "No real visibility",
                            "Standards leave when people do"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-3 md:gap-4 text-sm md:text-lg text-zinc-400 italic font-medium leading-tight">
                                <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500/40 shrink-0 mt-0.5" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8 p-8 md:p-16 bg-primary/[0.02]">
                    <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] italic">THE ASSET MODEL</h3>
                    <div className="space-y-4 md:space-y-6">
                        {[
                            "Tasks are already defined",
                            "Responsibility is assigned by role",
                            "Execution is recorded as work happens",
                            "Dashboard shows reality live",
                            "The system stays forever"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-3 md:gap-4 text-sm md:text-lg text-primary-text font-black uppercase italic tracking-tighter leading-tight">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const ResignationRiskSection = () => (
    <Section className="bg-black text-center py-20 md:py-40">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
                <h3 className="text-3xl md:text-7xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.9]">
                    SYSTEMS DON'T FORGET. <br /> <span className="text-primary">PEOPLE DO.</span>
                </h3>
                <p className="text-base md:text-2xl text-secondary-text italic font-medium">
                    When a manager leaves, your standards shouldn't leave.
                </p>
            </div>
            
            <div className="pt-4 md:pt-8">
                <p className="text-[10px] md:text-base font-black text-white/30 uppercase tracking-[0.6em] italic leading-relaxed px-4">
                    THIS SYSTEM TURNS DAILY OPERATIONS INTO A <br className="hidden md:block" /> STRUCTURE THAT STAYS.
                </p>
            </div>
        </div>
    </Section>
);

const PricingSection = () => (
    <Section id="pricing" className="bg-black text-center py-20 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Investment in Infrastructure</Badge>
                <h2 className="text-3xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-primary-text leading-tight">
                    OPERATIONAL CERTAINTY
                </h2>
                <p className="text-base md:text-xl text-secondary-text italic font-medium max-w-lg mx-auto">
                    Consistency shouldn't be a lucky outcome. Luck is not a strategy. Install a permanent operational asset.
                </p>
                <div className="flex flex-col items-center gap-2 pt-4 md:pt-6">
                    <div className="flex items-baseline gap-3 md:gap-4">
                        <span className="text-6xl md:text-9xl font-black text-primary italic drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">₹999</span>
                        <span className="text-xl md:text-4xl font-black text-white/20 italic">/ $12</span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.5em] px-4">WORKS ON EXCEL & GOOGLE SHEETS • OWN FOREVER</span>
                </div>
            </div>

            <div className="px-4">
                <Button size="lg" asChild className="group w-full md:w-auto h-20 md:h-24 px-8 md:px-16 rounded-xl bg-primary text-black font-black uppercase text-xl md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                    <Link href="/library" className="flex items-center justify-center">DEPLOY SYSTEM NOW <ArrowRight className="ml-3 h-6 w-6 md:ml-4 md:h-8 md:w-8 transition-transform group-hover:translate-x-2" /></Link>
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
        <TheShiftSection />
        <ResignationRiskSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
