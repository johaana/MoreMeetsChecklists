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
    Layers,
    Database,
    ShieldAlert
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/layout/hero-section";

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

const WhatYouGetSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Industrial Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
                <p className="text-xl md:text-2xl text-secondary-text italic font-medium">1 Complete Operating System File. Pre-built for your industry.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { t: "DAILY TASK ENGINE", d: "Automatic status triggers for every shift.", i: ClipboardCheck },
                    { t: "8-ROLE RESPONSIBILITY MATRIX", d: "Assign names to roles; ledger updates instantly.", i: Users },
                    { t: "MULTI-BRANCH DASHBOARD", d: "Live visibility across 1 to 10 locations.", i: BarChart3 },
                    { t: "TRAINER NOTES", d: "Instructional guidance built into every task.", i: GraduationCap },
                    { t: "INCIDENT & RISK TRACKER", d: "Log deviations and safety threats live.", i: ShieldCheck },
                    { t: "AUDIT-READY LOGS", d: "ISO / HACCP aligned technical protocols.", i: FileText }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4 hover:border-primary/20 transition-all group">
                        <item.i className="w-10 h-10 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight">{item.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed italic font-medium">{item.d}</p>
                    </div>
                ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/20 text-center space-y-6">
                <p className="text-sm md:text-lg font-black text-primary-text uppercase tracking-widest italic">
                    WORKS ON EXCEL / GOOGLE SHEETS • SINGLE OR MULTI-BRANCH READY
                </p>
            </div>
        </div>
    </Section>
);

const HowItWorksSection = () => (
    <Section id="how-it-works" className="bg-alternate-background">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Seamless Implementation</Badge>
                <SectionHeadline>HOW IT WORKS</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
                {[
                    { s: "01", t: "DOWNLOAD", d: "Get your system instantly.", i: Settings2 },
                    { s: "02", t: "SETUP", d: "Add branches and team.", i: Users },
                    { s: "03", t: "OPERATE", d: "Team marks tasks as done.", i: Target },
                    { s: "04", t: "TRACK", d: "Dashboard updates live.", i: BarChart3 },
                    { s: "05", t: "CONTROL", d: "See what's missed instantly.", i: Crown }
                ].map((step, i) => (
                    <div key={i} className="relative space-y-4 text-center md:text-left">
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{step.s}</div>
                        <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter">{step.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                    </div>
                ))}
            </div>
            
            <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">NO TRAINING • NO ONBOARDING • NO DELAY</p>
        </div>
    </Section>
);

const BuiltForSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Self-Identification</Badge>
                <SectionHeadline>BUILT FOR</SectionHeadline>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    "Owners running multiple branches",
                    "Operators tired of chasing updates",
                    "Teams with inconsistent execution",
                    "Businesses dependent on key managers",
                    "Companies preparing for audits"
                ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 font-black text-xs uppercase tracking-tight italic text-primary-text">
                        <Check className="w-5 h-5 text-primary" /> {item}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhyTeamFollowsSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Human-Centric Design</Badge>
                <SectionHeadline>WHY YOUR TEAM WILL <br/> ACTUALLY FOLLOW THIS</SectionHeadline>
                <p className="text-secondary-text italic font-medium">We replaced complex software with intentional compliance.</p>
            </div>

            <div className="grid gap-8">
                {[
                    { t: "WHAT TO DO", d: "Clear, technical protocols mapped to industry standards.", i: FileText },
                    { t: "HOW TO DO IT", d: "Trainer Notes built into every task—zero dependency on seniors.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Consequences of failure defined for every control point.", i: AlertTriangle }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-8 p-10 rounded-[3rem] bg-black border border-white/5 group hover:border-primary/20 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <item.i className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter">{item.t}</h4>
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
                
                <div className="space-y-8">
                    <h3 className="text-white/20 font-black uppercase tracking-widest text-xs text-center italic">SYSTEMS THAT FAIL</h3>
                    <div className="space-y-6">
                        {[
                            "People forget tasks",
                            "Managers don't follow up",
                            "SOPs are never used",
                            "Data is never visible",
                            "Dependency on 'hero' managers"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-4 text-sm text-secondary-text italic opacity-50">
                                <XCircle className="w-4 h-4 text-red-500/50" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-primary font-black uppercase tracking-widest text-xs text-center italic">THE MOREMEETS WAY</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks are pre-defined",
                            "Responsibility is assigned",
                            "Execution is logged live",
                            "Visibility is automatic",
                            "The system stays if the person leaves"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-4 text-sm text-primary-text font-bold uppercase italic">
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
    <Section className="bg-black border-t border-white/5 text-center py-32">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
                <SectionHeadline>DEPLOY YOUR OPERATING SYSTEM.</SectionHeadline>
                <p className="text-xl md:text-3xl text-primary font-black uppercase italic tracking-tighter -mt-6">STOP DEPENDING ON PEOPLE. START DEPENDING ON SYSTEMS.</p>
            </div>
            
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center">
                    <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                        <Link href="/library" className="flex flex-col items-center justify-center gap-1">
                            <div className="flex items-center">
                                START SEEING <ArrowRight className="ml-4 h-8 w-8" />
                            </div>
                            <div className="text-[10px] font-bold opacity-60">~ Pre-built. Editable. Ready to run. ~</div>
                        </Link>
                    </Button>
                    <p className="text-[10px] font-black text-white/20 mt-8 uppercase tracking-[0.3em]">ONE-TIME DEPLOYMENT OFFER: ₹999 (LAUNCH PRICING)</p>
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
        <WhatYouGetSection />
        <HowItWorksSection />
        <BuiltForSection />
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
const Crown = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
);
