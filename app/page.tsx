'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    Timer, 
    ShieldCheck,
    ShieldAlert,
    History,
    GraduationCap,
    FileSpreadsheet,
    Database,
    Eye,
    AlertTriangle,
    LayoutGrid,
    Lock,
    Users,
    ClipboardCheck,
    Target,
    BarChart3,
    UserCheck,
    ChevronRight,
    XCircle,
    FileText,
    TrendingUp,
    Settings2,
    BookOpen
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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

const HeroSection = () => {
    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-[calc(100dvh-64px)] md:min-h-[850px] overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover contrast-[1.1] opacity-40 md:opacity-60"
                />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.98)_25%,rgba(10,15,25,0.85)_50%,rgba(10,15,25,0.2)_85%,rgba(10,15,25,0.05)_100%)]" />
            </div>

            <div className="container px-4 md:px-6 relative z-20 flex flex-col md:flex-row items-center gap-12 py-12 md:py-0">
                <div className="max-w-3xl space-y-6 md:space-y-8 text-left flex-1">
                    <div className="space-y-1">
                        <p className="text-primary/60 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs italic mb-2">MoreMeets™ Sovereign Operating System</p>
                        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black font-headline tracking-tighter !leading-[0.85] text-primary-text drop-shadow-2xl uppercase italic">
                            STOP CHASING. <br />
                            <span className="text-primary text-[1.1em]">START SEEING.</span>
                        </h1>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-lg md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                            Run your operations on <br />
                            <span className="text-primary">pre-built, world-class SOPs.</span>
                        </p>
                        
                        <div className="flex flex-col gap-0.5 border-l-2 border-primary/20 pl-6 mt-4">
                            <p className="text-xs md:text-lg font-bold text-white/40 uppercase tracking-widest italic leading-tight">
                                SEE EVERYTHING LIVE. NO FOLLOW-UPS.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <p className="text-[9px] md:text-xs font-black text-primary uppercase tracking-[0.2em]">Live Operations Dashboard Active</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <Button size="lg" asChild className="group h-16 px-8 rounded-xl shadow-xl transition-all active:scale-95 bg-primary text-black hover:brightness-105 border-none font-black uppercase italic tracking-widest">
                            <Link href="/library">
                                Get Your System <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="h-16 px-8 rounded-xl border-white/10 text-white font-black uppercase italic tracking-widest hover:bg-white/5">
                            <Link href="#how-it-works">See How It Works</Link>
                        </Button>
                    </div>
                </div>

                <div className="w-full md:w-[380px] shrink-0">
                    <Card className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="w-32 h-32 text-primary" />
                        </div>
                        
                        <div className="relative z-10 space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">BUILT FOR REAL OPERATIONS</h3>
                                <div className="space-y-1">
                                    {["Restaurants", "Hotels", "Hospitals", "Facilities", "Cinemas", "Franchise Networks"].map(item => (
                                        <div key={item} className="flex items-center gap-2 text-sm font-bold text-primary-text uppercase italic tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                                            <ChevronRight className="w-3 h-3 text-primary" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 space-y-3">
                                {[
                                    "Pre-built Technical SOPs",
                                    "Built-in Trainer Notes",
                                    "Consequence Mapping",
                                    "No SaaS Subscriptions"
                                ].map(point => (
                                    <div key={point} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <Check className="w-2.5 h-2.5 text-primary" />
                                        </div>
                                        <span className="text-[11px] font-black uppercase text-white/40 tracking-wider">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

const CoreValueSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-2">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Sovereignty Layer</Badge>
                <SectionHeadline>NOT JUST TASK TRACKING.</SectionHeadline>
                <p className="text-xl md:text-2xl text-secondary-text italic font-medium">A complete operating system for your business.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                    { t: "PRE-BUILT SOPs", d: "Standardize instantly with world-class technical protocols.", i: FileText },
                    { t: "TRAINER NOTES", d: "On-the-job coaching for every task. No senior dependency.", i: GraduationCap },
                    { id: "audit", t: "AUDIT-READY", d: "Hardened workflows designed for compliance & safety.", i: ShieldCheck }
                ].map((item, i) => (
                    <div key={i} className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <item.i className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-sm">{item.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed italic font-medium">{item.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const PowerfulSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Structural Advantages</Badge>
                <SectionHeadline>WHAT MAKES THIS POWERFUL</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { 
                        t: "PRE-BUILT SOPs", 
                        d: "Ready-to-use workflows. No research. No setup. Just deployment.", 
                        i: BookOpen 
                    },
                    { 
                        t: "TRAINER NOTES", 
                        d: "Built-in guidance for every task. Your team knows exactly what to do.", 
                        i: UserCheck 
                    },
                    { 
                        t: "CONSEQUENCES", 
                        d: "Every task defines what happens if missed. No ambiguity. No excuses.", 
                        i: AlertTriangle 
                    },
                    { 
                        t: "AUDIT LANGUAGE", 
                        d: "Structured for high-stakes compliance. Always inspection-ready.", 
                        i: FileSpreadsheet 
                    }
                ].map((item, i) => (
                    <Card key={i} className="p-8 bg-white/[0.02] border-white/5 flex flex-col gap-4 hover:border-primary/20 transition-all">
                        <item.i className="w-8 h-8 text-primary" />
                        <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tight">{item.t}</h4>
                        <p className="text-sm text-secondary-text leading-relaxed italic font-medium">{item.d}</p>
                    </Card>
                ))}
            </div>
        </div>
    </Section>
);

const HowItWorksSection = () => (
    <Section id="how-it-works" className="bg-black">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Seamless Implementation</Badge>
                <SectionHeadline>HOW IT WORKS</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { 
                        s: "Step 1", 
                        t: "USE PRE-BUILT SOPs", 
                        d: "Download the complete technical database for your industry. Use them as-is or customize in minutes.", 
                        i: Settings2 
                    },
                    { 
                        s: "Step 2", 
                        t: "TEAM UPDATES TASKS", 
                        d: "Your staff marks tasks as done in real-time. Simple, familiar Excel/Sheets language. No training needed.", 
                        i: ClipboardCheck 
                    },
                    { 
                        s: "Step 3", 
                        t: "YOU SEE EVERYTHING LIVE", 
                        d: "The dashboard updates automatically. Monitor execution across teams and locations from anywhere.", 
                        i: BarChart3 
                    }
                ].map((step, i) => (
                    <div key={i} className="relative space-y-6">
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{step.s}</div>
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary">
                            <step.i className="w-8 h-8" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter">{step.t}</h4>
                        <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const ProblemSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.3em] font-black text-[10px]">Operational Diagnosis</Badge>
                <SectionHeadline>THE REAL PROBLEM</SectionHeadline>
                <p className="text-lg md:text-xl text-secondary-text italic font-medium">Operations don't break because of effort. They break because:</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    "No clear, pre-built SOPs",
                    "Poor on-the-job training",
                    "Missed critical tasks",
                    "Zero real-time accountability",
                    "Dependency on 'hero' individuals"
                ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-6 rounded-2xl bg-red-500/5 border border-red-500/10 font-black text-xs uppercase tracking-tight italic text-primary-text">
                        <XCircle className="w-5 h-5 text-red-500/50" /> {item}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhyMoreMeetsSection = () => (
    <Section className="bg-black overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <SectionHeadline>WHY MOREMEETS™</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                
                <div className="space-y-8">
                    <h3 className="text-white/20 font-black uppercase tracking-widest text-xs text-center">WITHOUT MOREMEETS™</h3>
                    <div className="space-y-6">
                        {[
                            "SOPs missing or outdated",
                            "Training is inconsistent",
                            "Follow-ups required everywhere",
                            "Zero operational visibility",
                            "System fails if key person leaves"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-4 text-sm text-secondary-text italic opacity-50">
                                <XCircle className="w-4 h-4 text-red-500/50" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-primary font-black uppercase tracking-widest text-xs text-center">WITH MOREMEETS™</h3>
                    <div className="space-y-6">
                        {[
                            "Pre-built, structured SOPs",
                            "Built-in training guidance",
                            "Live task visibility dashboard",
                            "Clear, binary accountability",
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

const RealTeamsSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Human-Centric Engineering</Badge>
                <SectionHeadline>DESIGNED FOR REAL TEAMS</SectionHeadline>
                <p className="text-lg md:text-xl text-secondary-text italic font-medium">Simple language. No complexity. Anyone can use it.</p>
            </div>

            <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 space-y-8">
                <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
                    <div className="space-y-2">
                        <FileSpreadsheet className="w-10 h-10 text-primary mx-auto" />
                        <p className="text-xs font-black text-white/40 uppercase tracking-widest">WORKS ON EXCEL / GOOGLE SHEETS</p>
                    </div>
                    <div className="space-y-2">
                        <Lock className="w-10 h-10 text-primary mx-auto" />
                        <p className="text-xs font-black text-white/40 uppercase tracking-widest">NO LOGINS. NO APPS.</p>
                    </div>
                    <div className="space-y-2">
                        <Timer className="w-10 h-10 text-primary mx-auto" />
                        <p className="text-xs font-black text-white/40 uppercase tracking-widest">ZERO LEARNING CURVE</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const OutcomeSection = () => (
    <Section className="bg-black">
        <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-primary/5 border border-primary/20 space-y-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><TrendingUp className="w-64 h-64 text-primary" /></div>
            
            <div className="space-y-6 relative z-10">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Result</Badge>
                <SectionHeadline>CONSISTENT EXECUTION.</SectionHeadline>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-black text-white/40 uppercase tracking-widest italic pt-4 border-t border-white/5">
                    <span>EVERY DAY.</span>
                    <span>EVERY LOCATION.</span>
                    <span>EVERY TEAM.</span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                    { t: "WHAT'S DONE", d: "Verifiable proof of work." },
                    { t: "WHAT'S MISSED", d: "Immediate risk detection." },
                    { t: "WHAT NEEDS ATTENTION", d: "Proactive management focus." }
                ].map((item, i) => (
                    <div key={i} className="space-y-2">
                        <h4 className="font-black text-primary-text uppercase italic text-sm">{item.t}</h4>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">{item.d}</p>
                    </div>
                ))}
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
        <CoreValueSection />
        <PowerfulSection />
        <HowItWorksSection />
        <ProblemSection />
        <WhyMoreMeetsSection />
        <RealTeamsSection />
        <OutcomeSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        <Section id="offer" className="bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4">
                    <SectionHeadline>DEPLOY YOUR OPERATING SYSTEM.</SectionHeadline>
                    <p className="text-xl md:text-2xl text-primary font-black uppercase italic tracking-tighter -mt-6">NOT JUST SOFTWARE.</p>
                </div>
                
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center">
                        <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                            <Link href="/library" className="flex flex-col items-center justify-center gap-1">
                                <div className="flex items-center">
                                    START SEEING <ArrowRight className="ml-4 h-8 w-8" />
                                </div>
                                <div className="text-xs font-bold opacity-60">~ Pre-built. Editable. Ready to run. ~</div>
                            </Link>
                        </Button>
                        <p className="text-[10px] font-black text-white/20 mt-8 uppercase tracking-[0.3em]">ONE-TIME DEPLOYMENT OFFER: ₹999</p>
                    </div>
                    
                    <div className="pt-12 border-t border-white/5 w-full">
                        <SectionHeadline className="text-primary-text/40 text-2xl sm:text-3xl">STOP DEPENDING ON PEOPLE.</SectionHeadline>
                        <SectionHeadline className="text-primary text-2xl sm:text-3xl">START DEPENDING ON SYSTEMS.</SectionHeadline>
                    </div>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
