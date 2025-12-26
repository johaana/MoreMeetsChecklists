
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Siren, Shield, TrendingUp, X } from "lucide-react";
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";


const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const SectionBody = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <p className={cn("max-w-3xl mx-auto text-secondary-text text-base md:text-lg lg:text-xl", className)}>
        {children}
    </p>
);

const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[700px] flex items-center text-primary-text">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto:eco,w_1920/v1762692289/production_id_4763866_1080p_qagzgh.mp4"
            autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div 
            className="absolute inset-0 z-10"
            style={{
                background: `linear-gradient(90deg, rgba(11,15,20,0.92) 0%, rgba(11,15,20,0.75) 50%, rgba(11,15,20,0.4) 100%)`
            }}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[640px] space-y-6">
                <div className="text-sm font-semibold tracking-wider uppercase text-muted-text">
                    MoreMeets Standards™
                    <br />
                    A new category of audit-ready operational standards
                </div>
                <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl !leading-tight text-primary-text">
                    Audit-Ready Operational Standards
                    <br />
                    for <span className="text-authority-green">Daily, Weekly & Monthly Work</span>
                </h1>
                <p className="max-w-2xl text-secondary-text text-lg md:text-xl lg:text-2xl">
                   Industry-specific SOPs, checklists, and task frameworks that ensure teams never forget what to do — even during chaos, audits, or staff changes.
                </p>
                 <p className="text-sm text-muted-text !mt-4">
                    Built from global best practices and compliance expectations — designed to work without software, subscriptions, or people dependency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild className="text-base bg-high-contrast-green text-background hover:bg-high-contrast-green/90 h-12 px-8 rounded-xl">
                        <Link href="/library">Get the Standard</Link>
                    </Button>
                    <Button size="lg" variant="link" asChild className="text-base text-secondary-text hover:text-primary-text">
                        <Link href="#system">See how the system works <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const WhatItIsSection = () => (
    <Section id="system">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>This is not a checklist pack.
            <br/>It’s an operational framework.</SectionHeadline>
            <SectionBody className="space-y-6">
                <p>Most teams fail not because they don’t work hard — but because critical work lives in people’s heads.</p>
                <p>MoreMeets Standards™ converts expert knowledge into a clear, repeatable system so nothing important is missed, forgotten, or improvised.</p>
            </SectionBody>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto text-left items-start">
                <div className="space-y-4 rounded-xl border border-border bg-alternate-background p-6">
                    <h3 className="font-bold text-xl text-primary-text">What You Receive</h3>
                    <ul className="space-y-3">
                        {["Industry-specific SOP packs", "Role-based operational checklists", "Daily, weekly, monthly task structures", "Clearly defined responsibilities", "Built-in frequencies and escalation logic", "Trainer notes explaining why each step matters"].map(item => (
                             <li key={item} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-authority-green shrink-0 mt-1" />
                                <span className="text-secondary-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4 rounded-xl border border-border bg-alternate-background p-6">
                    <h3 className="font-bold text-xl text-primary-text">What It Solves</h3>
                     <ul className="space-y-3">
                        {["People forgetting steps during busy periods", "New hires not knowing “how things are really done”", "Teams working inconsistently across locations", "Audits depending on memory or last-minute scrambling"].map(item => (
                             <li key={item} className="flex items-start gap-3">
                                <X className="w-5 h-5 text-risk-accent shrink-0 mt-1" />
                                <span className="text-secondary-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const NotPeopleDependentSection = () => (
     <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-4">
                    <SectionHeadline className="text-left">Designed to work even when people change.</SectionHeadline>
                    <div className="space-y-6 text-secondary-text text-lg max-w-xl">
                        <p>People resign. Teams rotate. Experience gets lost.</p>
                        <p>MoreMeets Standards™ ensures operations do not collapse when individuals leave.</p>
                        <p>Every task, frequency, responsibility, and expectation is documented and visible — not remembered.</p>
                    </div>
                    <p className="text-xl font-semibold text-authority-green !mt-8">Your operation becomes system-driven, not people-dependent.</p>
                </div>
                 <div className="flex flex-col items-center justify-center gap-4">
                     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <Card className="flex items-center gap-4 p-4 w-full max-w-sm">
                            <Users className="w-8 h-8 text-secondary-text"/>
                            <div>
                                <p className="font-bold">Expert Knowledge</p>
                                <p className="text-sm text-muted-text">Trapped in one person's head.</p>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                      <ArrowRight className="w-8 h-8 text-muted-text rotate-90 md:rotate-0" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <Card className="flex items-center gap-4 p-4 w-full max-w-sm border-authority-green/50 bg-authority-green/10">
                            <TrendingUp className="w-8 h-8 text-authority-green"/>
                             <div>
                                <p className="font-bold text-authority-green">System Knowledge</p>
                                <p className="text-sm text-muted-text">Embedded in the operation, accessible to all.</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    </Section>
);

const DailyExecutionSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>So teams always know what to do — and when.</SectionHeadline>
            <SectionBody>
                Each standard clearly defines the core components of operational discipline. This removes hesitation, second-guessing, and dependency on supervisors.
            </SectionBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {["What needs to be done", "Who is responsible", "How often", "Why the task exists", "Consequence of failure"].map((item, index) => (
                    <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <Card className="p-6 text-center h-full border-border/50 hover:bg-alternate-background transition-colors flex items-center justify-center">
                            <p className="font-bold text-secondary-text">{item}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
);

const AuditProofSection = () => (
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Audit-ready by structure — not surveillance.</SectionHeadline>
            <div className="max-w-3xl mx-auto">
                <Card className="p-6 md:p-8 bg-background border-border shadow-lg">
                    <p className="font-bold text-lg text-authority-green mb-4">Important Clarification</p>
                    <div className="space-y-4 text-secondary-text text-base md:text-lg">
                        <p>MoreMeets does not track or monitor execution digitally.</p>
                        <p>Instead, it provides a standardised structure that makes evidence possible, consistent, and audit-acceptable.</p>
                    </div>
                </Card>
            </div>
            <div className="max-w-4xl mx-auto text-center space-y-6 pt-8">
                 <p className="text-secondary-text text-lg md:text-xl">When tasks are defined, scheduled, assigned, and documented... they naturally produce repeatable proof of work.</p>
                <p className="text-primary-text font-semibold text-2xl md:text-3xl !leading-tight">Auditors don’t ask “Which software did you use?”
                <br/>
                They ask “Show me how this work is controlled.”
                </p>
                <p className="text-authority-green font-bold text-2xl">MoreMeets Standards™ answers that question.</p>
            </div>
        </div>
    </Section>
);

const ConsequencesSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Most failures start with one missed step.</SectionHeadline>
             <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-5 gap-2 md:gap-4 items-center justify-center font-semibold text-lg text-muted-text">
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.2}} className="text-center">Missed task</motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}} className="text-center"><ArrowRight className="w-8 h-8 mx-auto" /></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.4}} className="text-center">No evidence</motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.5}} className="text-center"><ArrowRight className="w-8 h-8 mx-auto" /></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.6}} className="text-center bg-risk-accent/10 text-risk-accent p-3 rounded-lg border border-risk-accent/20"><p>Penalty / Loss</p></motion.div>
                </div>
            </div>
             <SectionBody>
                Compliance failures rarely come from big negligence. They come from small tasks no one realised were critical. MoreMeets highlights which tasks are high-risk, which ones auditors care about, and which steps cannot be skipped — so teams understand consequences before mistakes happen.
            </SectionBody>
        </div>
    </Section>
);

const GlobalComplianceSection = () => (
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>Built for global operations. Adaptable locally.</SectionHeadline>
            <SectionBody className="space-y-4">
                <p>Each standard is researched against global compliance expectations, aligned with industry best practices, and designed to be locally customisable.</p>
                <p>Whether you operate in one location or many, the structure remains consistent, even if regulations differ.</p>
            </SectionBody>
             <p className="font-semibold text-xl text-authority-green">One system. Many industries. Global thinking.</p>
        </div>
    </Section>
);

const OneTimePurchaseSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>Buy once. Build forever.</SectionHeadline>
            <SectionBody className="space-y-4">
                <p>MoreMeets Standards™ is a one-time purchase.</p>
                <p>You receive lifetime ownership and free future updates to the standards.</p>
            </SectionBody>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-primary-text font-semibold">
                <p>No subscriptions.</p>
                <p>No vendor lock-in.</p>
                <p>No recurring fees.</p>
            </div>
             <p className="text-lg text-secondary-text">As regulations evolve, your standards library evolves with you.</p>
        </div>
    </Section>
);

const ComparisonSection = () => (
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Why standards outperform tools and consultants.</SectionHeadline>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <Card className="h-full bg-background border-border/50 text-left">
                        <CardHeader>
                            <CardTitle className="text-secondary-text">Consultants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-text">
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>High cost. Short-term fixes</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Knowledge walks out with people</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>No living operational system</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                     <Card className="h-full bg-background border-border/50 text-left">
                        <CardHeader>
                            <CardTitle className="text-secondary-text">SaaS Platforms</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-text">
                             <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Subscription lock-in & version drift</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Internet dependency</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Evidence scattered, data trapped</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:col-span-1 md:col-span-2">
                    <Card className="h-full border-2 border-authority-green/80 bg-authority-green/10 shadow-2xl text-left">
                        <CardHeader>
                            <CardTitle className="text-authority-green">MoreMeets Standards™</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-primary-text">
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>One-time ownership. Lifetime use.</span></p>
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Offline, universal, fully customisable</span></p>
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Training, tasks & proof — one system</span></p>
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
        "Operations Leaders",
        "Compliance & Audit Teams",
        "Multi-Location Businesses",
        "Regulated Industries",
        "Founder-led Growing Companies",
    ];
    return (
        <Section>
            <div className="container px-4 md:px-6 text-center space-y-12">
                <SectionHeadline>Built for operations where mistakes are costly.</SectionHeadline>
                 <div className="flex flex-wrap justify-center gap-3">
                    {roles.map(role => (
                        <div key={role} className="py-2 px-4 border border-border rounded-full bg-alternate-background text-secondary-text">
                            <h3 className="font-semibold">{role}</h3>
                        </div>
                    ))}
                </div>
                <p className="text-center font-semibold text-lg text-muted-text pt-8 max-w-3xl mx-auto">If failure creates risk, fines, or shutdowns — this system is for you.</p>
            </div>
        </Section>
    )
}

const FinalCTASection = () => (
     <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Make audit-readiness the default.</SectionHeadline>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" asChild className="text-base bg-high-contrast-green text-background hover:bg-high-contrast-green/90 h-12 px-8 rounded-xl">
                    <Link href="/library">Get the Standards</Link>
                </Button>
                <Button size="lg" asChild variant="secondary" className="text-base h-12 px-8 rounded-xl bg-background/80 text-secondary-text border-border">
                    <Link href="/library">Explore the SOP Library</Link>
                </Button>
            </div>
        </div>
    </Section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhatItIsSection />
      <NotPeopleDependentSection />
      <DailyExecutionSection />
      <AuditProofSection />
      <ConsequencesSection />
      <GlobalComplianceSection />
      <OneTimePurchaseSection />
      <ComparisonSection />
      <WhoIsThisForSection />
      <FinalCTASection />
    </main>
  );
}

    