
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Frown, Smile, CheckCircle, Users, ShieldCheck, Factory, Handshake, X } from "lucide-react";
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Section = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <section className={`w-full py-20 md:py-28 lg:py-32 ${className}`} {...props} />
);

const SectionHeadline = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl lg:text-6xl !leading-tight text-foreground">
        {children}
    </h2>
);

const SectionBody = ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg lg:text-xl">
        {children}
    </p>
);

const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[700px] flex items-center text-foreground">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
            autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ filter: 'brightness(0.7)' }}
        />
        <div 
            className="absolute inset-0 z-10"
            style={{
                background: `linear-gradient(
                    90deg,
                    rgba(7,11,16,0.92) 0%,
                    rgba(7,11,16,0.75) 45%,
                    rgba(7,11,16,0.55) 70%,
                    rgba(7,11,16,0.35) 100%
                  )`
            }}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[680px] space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl lg:text-8xl !leading-tight text-primary-foreground">
                    Operational Standards.<br/>
                    <span className="text-authority-green">Audit-Ready by Design.</span>
                </h1>
                <p className="max-w-2xl text-muted-foreground text-lg md:text-xl lg:text-2xl">
                   A one-time operational system that turns daily work into permanent audit proof — without tools, subscriptions, or people dependency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="text-base bg-high-contrast-green text-background hover:bg-high-contrast-green/90">
                        <Link href="/library">Get the Standard</Link>
                    </Button>
                    <Button size="lg" variant="ghost" asChild className="text-base text-muted-foreground hover:text-primary-foreground">
                        <Link href="#audit-structure">See the Audit Structure <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground/80">Used to run operations that must pass audits every time — globally.</p>
            </div>
        </div>
    </section>
);

const ProblemSection = () => (
    <Section className="bg-secondary text-center">
        <div className="container px-4 md:px-6 space-y-6">
            <SectionHeadline>Most businesses don’t fail audits.
            <br/>They fail daily discipline.</SectionHeadline>
            <SectionBody>
                Compliance breakdowns rarely come from big mistakes. They come from small tasks that were not clearly defined, enforced by frequency, trained consistently, or provable later.
                 <br/><br/>
                <span className="text-foreground font-semibold">Auditors don’t ask who remembers. They ask what evidence exists.</span>
            </SectionBody>
        </div>
    </Section>
);

const CategoryDeclarationSection = () => (
    <Section className="text-center">
        <div className="container px-4 md:px-6 space-y-6">
            <SectionHeadline>This is not software.
            <br/><span className="text-authority-green">This is a standard.</span></SectionHeadline>
            <SectionBody>
                MoreMeets Standards™ is a complete operational framework delivered offline, built to turn everyday work into structured, auditable proof. No subscriptions. No dashboards. No lock-in.
                <br/><br/>
                 <span className="font-semibold text-foreground">Software tracks activity. Standards prevent failure.</span>
            </SectionBody>
            <div className="inline-block">
                <div className="border rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
                     The first operational standard designed to be offline, audit-ready, and ownership-based by default.
                </div>
            </div>
        </div>
    </Section>
);

const SystemSection = () => {
    const annotations = [
        { label: "Control clarity", description: "Task Definition" },
        { label: "Preventive control", description: "Frequency Enforced" },
        { label: "Knowledge continuity", description: "Trainer Notes Embedded" },
        { label: "Objective evidence", description: "Audit Trail by Default" },
        { label: "Proof and prevention", description: "Last Completed + Next Due" },
    ];
    return (
        <Section id="audit-structure" className="bg-secondary">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="text-center">
                    <SectionHeadline>What “audit-ready” actually looks like.</SectionHeadline>
                </div>
                 <div className="max-w-6xl mx-auto bg-background p-4 rounded-lg shadow-lg border overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-5 min-w-[1200px] font-mono">
                            {annotations.map((item) => (
                                <div key={item.label} className="p-2 border-r last:border-r-0">
                                    <div className="text-xs font-semibold text-muted-foreground">{item.label.toUpperCase()}</div>
                                    <div className="mt-1 text-sm text-foreground bg-primary/5 p-2 rounded-md h-12 flex items-center">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center font-semibold text-lg text-authority-green">If it isn’t structured like this, it isn’t audit-ready.</p>
            </div>
        </Section>
    )
};

const ComparisonSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Why serious operations choose standards—not tools.</SectionHeadline>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                 {/* Problem Cards */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <Card className="h-full bg-secondary/50 border-risk-accent/20">
                        <CardHeader>
                            <CardTitle className="text-risk-accent/80">Consultants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left">
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>High cost. Short-term fixes</span></p>
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Knowledge walks out with people</span></p>
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>No living operational system</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                     <Card className="h-full bg-secondary/50 border-risk-accent/20">
                        <CardHeader>
                            <CardTitle className="text-risk-accent/80">SaaS Platforms</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left">
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Subscription lock-in & version drift</span></p>
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Internet dependency</span></p>
                            <p className="flex items-start gap-2 text-muted-foreground"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Evidence scattered, data trapped</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                {/* Solution Card */}
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:col-span-1 md:col-span-2">
                    <Card className="h-full border-2 border-authority-green/80 bg-authority-green/5 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-authority-green">MoreMeets Standards™</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left">
                            <p className="flex items-start gap-2 text-foreground"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>One-time ownership. Lifetime use.</span></p>
                            <p className="flex items-start gap-2 text-foreground"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Offline, universal, fully customisable.</span></p>
                            <p className="flex items-start gap-2 text-foreground"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Training, tasks & proof — one system.</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            <p className="text-center font-semibold text-lg text-authority-green pt-8">Standards don’t expire. Tools do.</p>
        </div>
    </Section>
);

const WhoIsThisForSection = () => {
    const roles = [
        { icon: <Factory className="w-8 h-8"/>, title: "Safety-Critical Operations" },
        { icon: <Users className="w-8 h-8"/>, title: "Multi-Location Businesses" },
        { icon: <ShieldCheck className="w-8 h-8"/>, title: "Regulated Industries" },
        { icon: <Handshake className="w-8 h-8"/>, title: "Founder-Led Companies" },
    ];
    return (
        <Section>
            <div className="container px-4 md:px-6 text-center space-y-12">
                <SectionHeadline>Who adopts MoreMeets Standards™?</SectionHeadline>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {roles.map(role => (
                        <div key={role.title} className="flex flex-col items-center">
                            <div className="text-authority-green mb-4">{role.icon}</div>
                            <h3 className="font-bold">{role.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

const ReplacesSection = () => (
    <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>What This Replaces</SectionHeadline>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground">
                <motion.p initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1}} className="line-through">SOP PDFs no one follows</motion.p>
                <motion.p initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.2}} className="line-through">Excel trackers with no proof</motion.p>
                <motion.p initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3}} className="line-through">WhatsApp instructions</motion.p>
                <motion.p initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.4}} className="line-through">Consultant documents that rot</motion.p>
                <motion.p initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.5}} className="line-through">Re-training every time someone leaves</motion.p>
            </div>
             <p className="text-center font-semibold text-lg text-authority-green pt-8">Priced lower than one failed audit. Owned for life.</p>
        </div>
    </Section>
);

const ComplianceSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Built for real-world compliance environments.</SectionHeadline>
            <SectionBody>
                Designed using the same control logic auditors use to evaluate compliance, MoreMeets Standards™ aligns with how global frameworks actually operate — through repeatable controls, documented execution, and verifiable records.
            </SectionBody>
            <div className="max-w-4xl mx-auto space-y-4">
                <p className="font-semibold text-muted-foreground">USED ACROSS OPERATIONS INFLUENCED BY:</p>
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 font-medium text-foreground">
                    <span>ISO</span><span>OSHA</span><span>WHO</span><span>NABH</span><span>FSSAI</span><span>Local Regulators</span>
                </div>
                 <p className="text-sm font-semibold text-authority-green pt-4">Not a certification. A system that helps you meet them.</p>
            </div>
        </div>
    </Section>
);

const TrainingSection = () => (
    <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Train once. Execute forever.</SectionHeadline>
            <SectionBody>
               Every task in the MoreMeets Standard™ includes context, instructions, trainer notes, and expected outcomes. New hires don’t “shadow.” They follow the standard.
               <br/><br/>
               <span className="text-foreground font-semibold">When people leave, the system stays.</span>
            </SectionBody>
        </div>
    </Section>
);

const ConsequenceSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>What happens when one task is missed?</SectionHeadline>
             <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg text-muted-foreground">
                 <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}}><span className="font-bold text-risk-accent">A missed checklist</span> → audit failure</motion.div>
                 <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4}}><span className="font-bold text-risk-accent">A skipped frequency</span> → safety incident</motion.div>
                 <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6}}><span className="font-bold text-risk-accent">An undocumented action</span> → legal exposure</motion.div>
            </div>
            <p className="text-center font-semibold text-lg text-muted-foreground pt-8 max-w-3xl mx-auto">Most failures aren’t dramatic. They’re quiet. Missed. Unrecorded. Until an auditor asks. MoreMeets ensures nothing critical relies on memory, mood, or motivation.</p>
        </div>
    </Section>
);

const DeliverablesSection = () => (
     <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>What you actually get.</SectionHeadline>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-foreground font-semibold">
                <div>Role-based SOPs</div>
                <div>Daily / weekly / event-driven checklists</div>
                <div>Embedded trainer notes</div>
                <div>Frequency logic</div>
                <div>Built-in audit trail</div>
                <div>Proof capture</div>
            </div>
             <p className="text-center font-semibold text-lg text-authority-green pt-8">This is not content. This is how your operation runs when no one is watching.</p>
        </div>
    </Section>
);

const PricingPositioningSection = () => (
     <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Priced for ownership, not dependency.</SectionHeadline>
             <div className="max-w-2xl mx-auto space-y-2 text-lg text-muted-foreground">
                <p>One-time access.</p>
                <p>No renewals.</p>
                <p>No usage limits.</p>
            </div>
        </div>
    </Section>
);


const FinalCTASection = () => (
     <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Adopt the standard.
            <br/>Run your operation with proof.</SectionHeadline>
            <p className="text-lg text-muted-foreground">Once adopted, teams rarely go back.</p>
            <Button size="lg" asChild className="text-base mt-4 bg-high-contrast-green text-background hover:bg-high-contrast-green/90">
                <Link href="/library">View Available Standards <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
        </div>
    </Section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProblemSection />
      <CategoryDeclarationSection />
      <SystemSection />
      <WhoIsThisForSection />
      <ComparisonSection />
      <ReplacesSection />
      <ComplianceSection />
      <TrainingSection />
      <ConsequenceSection />
      <DeliverablesSection />
      <PricingPositioningSection />
      <FinalCTASection />
    </main>
  );
}
