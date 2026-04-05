
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    ShieldCheck,
    GraduationCap,
    FileSpreadsheet,
    AlertTriangle,
    Lock,
    Users,
    ClipboardCheck,
    BarChart3,
    UserCheck,
    ChevronRight,
    XCircle,
    FileText,
    TrendingUp,
    Settings2,
    BookOpen,
    Target,
    Activity
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/layout/hero-section";

const Section = ({ className, id, children, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-24 md:py-32", className)} {...props}>
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

const WhatYouGetSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Industrial Payload</Badge>
                <SectionHeadline>THE MASTER ENGINE</SectionHeadline>
                <p className="text-xl md:text-2xl text-secondary-text italic font-medium max-w-2xl mx-auto">One standalone Operating System file. <br />Pre-configured for your vertical.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { t: "DAILY TASK LEDGER", d: "Automatic status triggers for every shift. No manual logging required.", i: ClipboardCheck },
                    { t: "8-ROLE ADMIN MATRIX", d: "Assign names to roles; the entire ledger updates responsibility instantly.", i: Users },
                    { t: "MULTI-BRANCH DASHBOARD", d: "Live telemetry across 1 to 10 locations in a single view.", i: BarChart3 },
                    { t: "TRAINER NOTES", d: "Instructional guidance embedded into every task to automate coaching.", i: GraduationCap },
                    { t: "INCIDENT & RISK TRACKER", d: "Document deviations, profit leaks, and safety threats as they happen.", i: AlertTriangle },
                    { t: "AUDIT-READY PROTOCOLS", d: "Forensically vetted language aligned with ISO / HACCP standards.", i: ShieldCheck }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-5 hover:border-primary/20 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <item.i className="w-24 h-24" />
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                            <item.i className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight">{item.t}</h4>
                            <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(46,184,107,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                <p className="text-sm md:text-lg font-black text-primary uppercase tracking-[0.3em] italic relative z-10">
                    WORKS ON EXCEL / GOOGLE SHEETS • SINGLE OR MULTI-BRANCH READY
                </p>
            </div>
        </div>
    </Section>
);

const HowItWorksSection = () => (
    <Section id="how-it-works" className="bg-alternate-background relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20 relative z-10">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Seamless Implementation</Badge>
                <SectionHeadline>SYSTEM BOOT SEQUENCE</SectionHeadline>
            </div>

            <div className="relative grid md:grid-cols-5 gap-8 lg:gap-12">
                {/* Visual Connection Line (Desktop) */}
                <div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block z-0" />
                
                {[
                    { s: "01", t: "DOWNLOAD", d: "Get your industrial file instantly.", i: Settings2 },
                    { s: "02", t: "CONFIGURE", d: "Add your branches and assign the team.", i: Users },
                    { s: "03", t: "OPERATE", d: "Team marks missions as done on the floor.", i: Target },
                    { s: "04", t: "TELEMETRY", d: "Executive dashboard updates live.", i: Activity },
                    { s: "05", t: "COMMAND", d: "See what's missed and control the standard.", i: CrownIcon }
                ].map((step, i) => (
                    <div key={i} className="relative space-y-6 group z-10">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            {/* The Improved Number Indicator */}
                            <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center relative transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_20px_-5px_rgba(46,184,107,0.5)]">
                                <span className="text-xs font-black text-primary font-mono tracking-tighter transition-all group-hover:scale-110">{step.s}</span>
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-soft opacity-0 group-hover:opacity-100" />
                            </div>
                            
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter leading-none">{step.t}</h4>
                                <p className="text-[11px] text-secondary-text leading-relaxed font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">{step.d}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col items-center gap-4">
                <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">NO TRAINING • NO ONBOARDING • NO DELAY</p>
                <div className="h-px w-24 bg-primary/20" />
            </div>
        </div>
    </Section>
);

const WhyTeamFollowsSection = () => (
    <Section className="bg-alternate-background border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Human-Centric Design</Badge>
                <SectionHeadline>WHY YOUR TEAM WILL <br/> ACTUALLY FOLLOW THIS</SectionHeadline>
                <p className="text-secondary-text italic font-medium">Complexity is the enemy of execution. We built for clarity.</p>
            </div>

            <div className="grid gap-6">
                {[
                    { l: "THE PROTOCOL", t: "WHAT TO DO", d: "Technical standards mapped to global requirements, translated into plain English.", i: FileText },
                    { l: "THE METHOD", t: "HOW TO DO IT", d: "Trainer Notes built into every task—removes dependency on senior staff availability.", i: GraduationCap },
                    { l: "THE GRAVITY", t: "WHY IT MATTERS", d: "Specific consequences of failure defined for every control point to drive intentionality.", i: AlertTriangle }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-10 rounded-[3rem] bg-black border border-white/5 group hover:border-primary/20 transition-all">
                        <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/10 transition-colors">
                            <item.i className="w-10 h-10" />
                        </div>
                        <div className="space-y-1 flex-1 text-center md:text-left">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.l}</span>
                            <h4 className="font-black text-primary-text uppercase italic text-2xl tracking-tighter">{item.t}</h4>
                            <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhyMoreMeetsSection = () => (
    <Section className="bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Structural Moat</Badge>
                <SectionHeadline>WHY THIS WORKS</SectionHeadline>
                <p className="text-secondary-text italic font-medium">Most systems fail because they are "Suggestions." MoreMeets is "Infrastructure."</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                
                <div className="space-y-8 p-8 rounded-[2rem] bg-red-500/[0.02] border border-red-500/5">
                    <h3 className="text-red-500/40 font-black uppercase tracking-widest text-[10px] text-center italic">SYSTEMS THAT FAIL</h3>
                    <div className="space-y-6">
                        {[
                            "People forget critical steps",
                            "Managers don't have time to follow up",
                            "SOPs are documents that gather dust",
                            "Operational data is invisible",
                            "The standard leaves when the hero leaves"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-4 text-sm text-secondary-text italic opacity-50">
                                <XCircle className="w-4 h-4 text-red-500/30" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 p-8 rounded-[2rem] bg-primary/[0.02] border border-primary/10">
                    <h3 className="text-primary font-black uppercase tracking-widest text-[10px] text-center italic">THE MOREMEETS WAY</h3>
                    <div className="space-y-6">
                        {[
                            "Missions are pre-defined & binary",
                            "Ownership is assigned by role",
                            "Execution is timestamped & logged",
                            "Live visibility across every branch",
                            "The system is permanent infrastructure"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-4 text-sm text-primary-text font-bold uppercase italic tracking-tight">
                                <ShieldCheck className="w-4 h-4 text-primary" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCtaSection = () => (
    <Section className="bg-black border-t border-white/5 text-center py-32 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(46,184,107,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <div className="space-y-4">
                <SectionHeadline>DEPLOY YOUR OPERATING SYSTEM.</SectionHeadline>
                <p className="text-xl md:text-3xl text-primary font-black uppercase italic tracking-tighter -mt-6">STOP MANAGING PEOPLE. START COMMANDING SYSTEMS.</p>
            </div>
            
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center">
                    <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                        <Link href="/library" className="flex flex-col items-center justify-center gap-1">
                            <div className="flex items-center">
                                START SEEING <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-2" />
                            </div>
                            <div className="text-[10px] font-bold opacity-60">~ PRE-BUILT. EDITABLE. READY TO RUN. ~</div>
                        </Link>
                    </Button>
                    <p className="text-[10px] font-black text-white/20 mt-10 uppercase tracking-[0.4em]">ONE-TIME DEPLOYMENT OFFER: ₹999 (LAUNCH PRICING)</p>
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
        
        <Section id="built-for" className="bg-black border-b border-white/5 py-16 md:py-20">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <Badge variant="outline" className="text-white/20 border-white/10 uppercase tracking-[0.3em] font-black text-[10px]">Strategic Alignment</Badge>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {[
                        "MULTI-BRANCH OWNERS",
                        "HOSPITALITY GROUPS",
                        "INDUSTRIAL PLANTS",
                        "AUDIT-READY TEAMS",
                        "FRANCHISE NETWORKS"
                    ].map(item => (
                        <span key={item} className="text-xs md:text-sm font-black text-white/40 uppercase tracking-widest italic">{item}</span>
                    ))}
                </div>
            </div>
        </Section>

        <WhatYouGetSection />
        <HowItWorksSection />
        <WhyTeamFollowsSection />
        <WhyMoreMeetsSection />
        
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

// Icons
const CrownIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
);
