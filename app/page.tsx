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
    Globe,
    FileSpreadsheet,
    Database,
    Eye,
    PackageCheck,
    AlertTriangle,
    LayoutGrid,
    Lock,
    Users,
    ClipboardCheck,
    Target,
    MousePointer2,
    BarChart3,
    Download,
    Building2,
    UserCheck,
    Search,
    ChevronRight
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
                {/* LEFT SIDE: EMOTIONAL HOOK & COMMAND */}
                <div className="max-w-3xl space-y-6 md:space-y-8 text-left flex-1">
                    <div className="space-y-1">
                        <p className="text-primary/60 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs italic mb-2">MoreMeets™ Sovereign Operating System</p>
                        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6rem] font-black font-headline tracking-tighter !leading-[0.85] text-primary-text drop-shadow-2xl uppercase italic">
                            STOP CHASING. <br />
                            <span className="text-primary text-[1.1em]">START SEEING.</span>
                        </h1>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-lg md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                            YOUR TEAM UPDATES TASKS. <br />
                            <span className="text-primary">YOU SEE EVERYTHING LIVE.</span>
                        </p>
                        
                        <div className="flex flex-col gap-0.5 border-l-2 border-white/10 pl-6 mt-4">
                            <p className="text-xs md:text-lg font-bold text-white/40 uppercase tracking-widest italic leading-tight">
                                KNOW WHAT'S DONE. WHAT'S MISSED. WHAT'S DELAYED.
                            </p>
                            <p className="text-[9px] md:text-xs font-black text-primary/60 uppercase tracking-[0.2em]">ACROSS YOUR ENTIRE OPERATION</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-start">
                        <div className="space-y-4 w-full">
                            <div className="pt-2">
                                <Button size="lg" asChild className="group h-20 md:h-24 w-full sm:w-auto px-10 md:px-12 rounded-2xl shadow-[0_0_50px_-10px_rgba(46,184,107,0.4)] transition-all active:scale-95 bg-primary text-black hover:brightness-105 border-none">
                                    <Link href="/library" className="flex flex-col items-center justify-center gap-0.5">
                                        <div className="flex items-center font-black uppercase text-lg md:text-xl tracking-widest">
                                            DEPLOY YOUR SYSTEM: ₹999
                                            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold opacity-70">
                                            <span className="line-through">Professional Grade: ₹1,999</span>
                                            <span className="uppercase tracking-widest italic">Launch Offer</span>
                                        </div>
                                    </Link>
                                </Button>
                                <div className="flex items-center gap-4 mt-4 ml-1">
                                    <p className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] italic flex items-center gap-2">
                                        <Timer className="w-3 h-3" /> LIVE IN MINUTES. OWN IT FOREVER.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: LOGICAL VALIDATION CARD */}
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
                                    "Works on Excel / Sheets",
                                    "No logins required",
                                    "No subscriptions",
                                    "Multi-branch ready"
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

const RealLifeSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Real-World Execution</Badge>
                <SectionHeadline>HOW IT WORKS IN REAL LIFE</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { t: "TEAM OPENS SHEET", d: "Your staff opens the Excel/Google sheet at the start of their shift.", i: MousePointer2 },
                    { t: "EXECUTION LOGGED", d: "They mark their specific tasks as 'Done' in seconds. No paperwork.", i: ClipboardCheck },
                    { t: "DASHBOARD SYNC", d: "The executive dashboard updates instantly with live completion scores.", i: BarChart3 },
                    { t: "TOTAL VISIBILITY", d: "You see what's done, what's missed, and where risk is building.", i: Eye }
                ].map((step, i) => (
                    <div key={i} className="space-y-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative group hover:border-primary/20 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                            <step.i className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-widest">{step.t}</h4>
                        <p className="text-xs text-secondary-text font-medium italic leading-relaxed">{step.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhatYouGetSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technical Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
                <p className="text-secondary-text italic font-medium">1 Complete Operating System File (Standalone Asset)</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { t: "Daily Task Engine", d: "Dynamic ledger for routine discipline.", i: Timer },
                    { t: "8-Role Admin Matrix", d: "Assign clear accountability in seconds.", i: Users },
                    { t: "Multi-Branch Tracker", d: "Compare performance across 10 units.", i: LayoutGrid },
                    { t: "Incident Logbook", d: "Track liability and near-misses.", i: ShieldAlert },
                    { t: "Audit-Ready Logs", d: "ISO, HACCP, and OSHA aligned.", i: ShieldCheck },
                    { t: "Trainer Notes", d: "On-the-job coaching built into every task.", i: GraduationCap },
                    { t: "Consequence Mapping", d: "Staff see why failure is not an option.", i: AlertTriangle },
                    { t: "Financial Visibility", d: "Track CoGS and contribution margins.", i: BarChart3 },
                    { t: "Fully Editable", d: "Add your logo and custom tasks.", i: FileSpreadsheet }
                ].map((item) => (
                    <div key={item.t} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 items-start group hover:border-primary/20 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/20">
                            <item.i className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-black text-primary-text uppercase italic text-xs tracking-tight">{item.t}</h4>
                            <p className="text-[11px] text-secondary-text italic leading-relaxed">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhyThisWorksSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Structural Difference</Badge>
                <SectionHeadline>WHY THIS WORKS WHEN OTHERS FAIL</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8">
                    <h3 className="text-white/20 font-black uppercase tracking-widest text-xs">Traditional Failure Points</h3>
                    <div className="space-y-6">
                        {[
                            { t: "People Forget", d: "Verbal instructions decay in 48 hours." },
                            { t: "No Follow-up", d: "Managers too busy to check every task." },
                            { t: "Dead Documents", d: "SOPs sit in folders, never used." },
                            { t: "Blind Operations", d: "You guess if the standard is being met." }
                        ].map(item => (
                            <div key={item.t} className="space-y-1 opacity-50">
                                <div className="flex items-center gap-3">
                                    <X className="w-4 h-4 text-red-500" />
                                    <span className="font-black text-primary-text text-sm uppercase italic">{item.t}</span>
                                </div>
                                <p className="text-xs text-secondary-text italic pl-7">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-10 rounded-[3rem] bg-primary/5 border border-primary/20 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5"><ShieldCheck className="w-48 h-48 text-primary" /></div>
                    <h3 className="text-primary font-black uppercase tracking-widest text-xs relative z-10">The MoreMeets Solution</h3>
                    <div className="space-y-6 relative z-10">
                        {[
                            { t: "Pre-defined Tasks", d: "Digital pulse ensures zero ambiguity." },
                            { t: "Assigned Ownership", d: "Every mission has a defined role." },
                            { t: "Logged Execution", d: "Staff type names to confirm completion." },
                            { t: "Automatic Visibility", d: "Owner Dashboard updates instantly." }
                        ].map(item => (
                            <div key={item.t} className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-primary" />
                                    <span className="font-black text-primary-text text-sm uppercase italic">{item.t}</span>
                                </div>
                                <p className="text-xs text-secondary-text italic pl-7">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const BuiltForSection = () => (
    <Section className="bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <SectionHeadline>BUILT FOR:</SectionHeadline>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    "Owners running multiple branches",
                    "Operators tired of chasing updates",
                    "Teams with inconsistent execution",
                    "Businesses dependent on key managers",
                    "Companies preparing for audits"
                ].map(item => (
                    <div key={item} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 font-black text-xs uppercase tracking-tight italic text-primary-text">
                        <Target className="w-5 h-5 text-primary" /> {item}
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const TeamFollowSection = () => (
    <Section className="bg-alternate-background border-y border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/[0.02] space-y-16 relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Database className="w-64 h-64 text-primary" /></div>
            
            <div className="text-center space-y-6 relative z-10">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Staff Accountability</Badge>
                <SectionHeadline>WHY YOUR TEAM WILL <br /> ACTUALLY FOLLOW THIS</SectionHeadline>
                <p className="text-lg text-secondary-text italic font-medium max-w-2xl mx-auto">We replace "mechanical ticking" with intentional execution. Every task includes:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10 text-center">
                {[
                    { t: "WHAT TO DO", d: "Clear instruction mapped to audit standards.", i: Target },
                    { t: "HOW TO DO IT", d: "Trainer Notes for on-the-job coaching.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Consequences of failure clearly defined.", i: AlertTriangle }
                ].map(item => (
                    <div key={item.t} className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto"><item.i className="w-6 h-6 text-primary" /></div>
                        <h4 className="font-black uppercase text-primary-text italic text-lg">{item.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-white/5 text-center relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO INTERPRETATION.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO EXCUSES.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO HERO DEPENDENCY.</p>
            </div>
        </div>
    </Section>
);

const RiskSection = () => (
    <Section className="bg-black">
        <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-red-500/5 border border-red-500/20 space-y-12 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-10 opacity-10 -rotate-12"><AlertTriangle className="w-64 h-64 text-red-500" /></div>
            <div className="space-y-6 relative z-10">
                <Badge variant="destructive" className="uppercase font-black tracking-[0.3em] text-[10px] px-6 py-1">Critical Exposure Warning</Badge>
                <SectionHeadline>ONE MISSED STEP CAN COST EVERYTHING</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                    { t: "Missed temp log", d: "Stock loss & poisoning risk" },
                    { t: "Missed safety check", d: "Facility shutdown" },
                    { t: "Missed protocol", d: "Legal exposure & lawsuits" }
                ].map(item => (
                    <div key={item.t} className="space-y-2">
                        <p className="text-lg font-black text-primary-text italic uppercase tracking-tighter leading-tight">{item.t}</p>
                        <ArrowRight className="w-4 h-4 text-red-500 mx-auto" />
                        <p className="text-xs text-white/40 font-black uppercase tracking-widest">{item.d}</p>
                    </div>
                ))}
            </div>

            <p className="text-2xl md:text-3xl font-black text-red-500 uppercase italic tracking-tighter relative z-10 pt-8 border-t border-white/5 w-fit mx-auto">
                THIS SYSTEM PREVENTS THAT.
            </p>
        </div>
    </Section>
);

const X = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <RealLifeSection />
        <WhatYouGetSection />
        <WhyThisWorksSection />
        <BuiltForSection />
        <TeamFollowSection />
        <RiskSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        <Section id="final-cta" className="bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4">
                    <SectionHeadline>STOP CHASING.</SectionHeadline>
                    <SectionHeadline className="text-primary -mt-6">START SEEING.</SectionHeadline>
                </div>
                
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center">
                        <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                            <Link href="/library" className="flex flex-col items-center justify-center gap-1">
                                <div className="flex items-center">
                                    DEPLOY YOUR SYSTEM: ₹999 <ArrowRight className="ml-4 h-8 w-8" />
                                </div>
                                <div className="text-xs font-bold opacity-60">~ Professional Grade: ₹1,999 ~</div>
                            </Link>
                        </Button>
                        <p className="text-xs font-black text-accent mt-6 uppercase tracking-widest italic">
                            Launch pricing valid for early deployments only.
                        </p>
                    </div>
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter">
                        OWN IT. RUN IT. NO DEPENDENCE.
                    </p>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
