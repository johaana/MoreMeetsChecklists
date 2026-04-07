
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
    Clock,
    LayoutGrid,
    History,
    Download,
    Cpu,
    CheckCircle2,
    Fingerprint,
    FileSpreadsheet,
    XCircle,
    Utensils,
    Lock,
    HeartPulse,
    ShieldAlert,
    Star,
    Flame,
    Hospital,
    School,
    Popcorn
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

const OperationalWindow = ({ src, alt, title = "MASTER_OPERATIONAL_ENGINE_V11.9" }: { src: string, alt: string, title?: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner font-headline">
                    {title}
                </div>
            </div>
        </div>
        <div className="relative rounded-b-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

const TheShiftSection = () => (
    <Section className="bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Category Shift</Badge>
                <SectionHeadline>STOP LEAVING YOUR BRAND TO LUCK</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium max-w-2xl mx-auto leading-relaxed">
                    A good manager is a gift. A good system is an asset. <br /> Stop leaving your brand to luck.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="space-y-8 p-10 md:p-16 bg-black">
                    <h3 className="text-red-500/60 font-black uppercase tracking-[0.4em] text-[10px] italic">THE LUCK MODEL</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks depend on memory",
                            "SOPs sit in folders",
                            "Managers keep following up",
                            "No real visibility",
                            "Standards leave when people do"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium leading-tight">
                                <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 p-10 md:p-16 bg-primary/[0.02]">
                    <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic">THE ASSET MODEL</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks are already defined",
                            "Responsibility is assigned by role",
                            "Execution is recorded as work happens",
                            "Dashboard shows reality live",
                            "The system stays forever"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-primary-text font-black uppercase italic tracking-tighter leading-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const InstitutionalPayloadSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Institutional Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { t: "PRE-BUILT, INDUSTRY-GRADE SOPs", i: ClipboardCheck },
                    { t: "DAILY, WEEKLY, MONTHLY EXECUTION SYSTEM", i: Clock },
                    { t: "TRAINER NOTES FOR EVERY TASK", i: GraduationCap },
                    { t: "CONSEQUENCES OF FAILURE DEFINED", i: AlertTriangle },
                    { t: "SINGLE UNIT OR MULTI-BRANCH VISIBILITY", i: LayoutGrid },
                    { t: "FULLY EDITABLE STANDALONE SYSTEM", i: FileSpreadsheet, highlighted: true }
                ].map((item, i) => (
                    <div key={i} className={cn(
                        "p-10 rounded-2xl border border-white/5 flex flex-col gap-6 hover:border-primary/20 transition-all group",
                        item.highlighted ? "bg-primary/10 border-primary/20 shadow-[0_0_40px_-10px_rgba(46,184,107,0.2)]" : "bg-white/[0.02]"
                    )}>
                        <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                            item.highlighted ? "bg-primary text-black" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black"
                        )}>
                            <item.i className="w-5 h-5" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tighter leading-tight">{item.t}</h4>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const DeploymentRoadmapSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Implementation</Badge>
                <SectionHeadline>DEPLOYMENT ROADMAP</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium">From acquisition to command in under 10 minutes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
                
                {[
                    { s: "01", t: "Institutional Acquisition", d: "Download the Sovereign v11.9 Master Engine. Upload to your secure Google Drive or local server.", i: Download },
                    { s: "02", t: "Role-Based Mapping", d: "Assign names to pre-defined industry roles in the Team Hub. The Mission Ledger updates instantly.", i: Users },
                    { s: "03", t: "Binary Command", d: "Staff log execution as it happens. You monitor the truth from the telemetry dashboard.", i: Cpu }
                ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-2xl">
                            <step.i className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">{step.s} / ROADMAP</span>
                            <h4 className="text-lg font-black text-primary-text uppercase italic tracking-tighter">{step.t}</h4>
                            <p className="text-sm text-secondary-text italic font-medium leading-relaxed">{step.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
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
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Field Evidence</Badge>
                    <SectionHeadline>REAL TASK EXAMPLES</SectionHeadline>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {examples.map((ex, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col space-y-8 hover:border-primary/20 transition-all group">
                            <div className="flex items-center gap-2">
                                <ex.icon className={cn("w-4 h-4", ex.color)} />
                                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em]", ex.color)}>{ex.industry}</span>
                            </div>
                            
                            <h4 className="text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none font-headline">{ex.title}</h4>
                            
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">WHAT:</span>
                                    <p className="text-sm text-secondary-text italic font-medium">{ex.what}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">HOW:</span>
                                    <p className="text-sm text-secondary-text italic font-medium">{ex.how}</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">WHY:</span>
                                    <p className="text-sm text-secondary-text italic font-medium">{ex.why}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const LiveDashboardSection = () => (
    <Section className="bg-black overflow-hidden border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Live Telemetry</Badge>
                <SectionHeadline>SEE YOUR BUSINESS LIVE</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium">No reports. No calls. No follow-ups.</p>
            </div>

            <OperationalWindow 
                src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png"
                alt="Sovereign Dashboard Interface"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto pt-12">
                {[
                    "Done vs. Pending Status",
                    "Single Unit or Multi-Branch Overview",
                    "Identified Operational Gaps",
                    "Permanent Activity Record"
                ].map(item => (
                    <div key={item} className="flex items-center justify-center gap-3 text-left">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight italic">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const ResignationRiskSection = () => (
    <Section className="bg-black text-center py-24 md:py-40">
        <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
                <h3 className="text-4xl md:text-7xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.9]">
                    SYSTEMS DON'T FORGET. <br /> <span className="text-primary">PEOPLE DO.</span>
                </h3>
                <p className="text-xl md:text-2xl text-secondary-text italic font-medium">
                    When a manager leaves, your standards shouldn't leave.
                </p>
            </div>
            
            <div className="pt-8">
                <p className="text-sm md:text-base font-black text-white/30 uppercase tracking-[0.6em] italic leading-relaxed">
                    THIS SYSTEM TURNS DAILY OPERATIONS INTO A <br className="hidden md:block" /> STRUCTURE THAT STAYS.
                </p>
            </div>
        </div>
    </Section>
);

const PricingSection = () => (
    <Section id="pricing" className="bg-black text-center py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Investment in Infrastructure</Badge>
                <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-primary-text">
                    OPERATIONAL CERTAINTY
                </h2>
                <p className="text-xl text-secondary-text italic font-medium max-w-lg mx-auto">
                    Consistency shouldn't be a lucky outcome. Luck is not a strategy. Install a permanent operational asset.
                </p>
                <div className="flex flex-col items-center gap-2 pt-6">
                    <div className="flex items-baseline gap-4">
                        <span className="text-7xl md:text-9xl font-black text-primary italic drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">₹999</span>
                        <span className="text-2xl md:text-4xl font-black text-white/20 italic">/ $12</span>
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">NO SUBSCRIPTIONS • NO LOCK-IN</span>
                </div>
            </div>

            <Button size="lg" asChild className="group h-24 px-16 rounded-xl bg-primary text-black font-black uppercase text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                <Link href="/library" className="flex items-center">DEPLOY SYSTEM NOW <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-2" /></Link>
            </Button>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        
        <TheShiftSection />
        <InstitutionalPayloadSection />
        <DeploymentRoadmapSection />
        <LiveDashboardSection />
        <RealTaskExamplesSection />
        <ResignationRiskSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
