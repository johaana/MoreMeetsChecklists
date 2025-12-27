

'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronsRight, ShieldAlert, FileX, Ban, Handshake, CloudIcon, User, FileText, CheckCircle, BrainCircuit } from "lucide-react";
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const SectionBody = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("max-w-3xl mx-auto text-secondary-text md:text-lg lg:text-xl", className)}>
        {children}
    </div>
);

const HeroSection = () => (
    <section className="relative w-full flex items-center text-white overflow-hidden min-h-[100svh] max-h-[100svh] pt-[clamp(96px,10vh,140px)] pb-[clamp(64px,8vh,120px)]">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto:good/v1722204938/8572189-uhd_4096_2160_25fps_lvu6c4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/80 to-transparent z-10" />
        
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[680px] space-y-4">
                <div className="text-sm font-semibold tracking-wider uppercase text-muted-text">
                   A NEW CATEGORY OF AUDIT-READY OPERATIONAL STANDARDS
                </div>
                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter font-headline" style={{ lineHeight: 1.1 }}>
                    When people forget,
                    <br/>
                    <span className="text-authority-green">operations fail.</span>
                 </h1>

                <p className="max-w-2xl text-secondary-text text-lg md:text-xl !leading-relaxed">
                   MoreMeets Standards™ is a fixed operational framework that defines what must be done, how often, and by whom — so nothing depends on memory, luck, or experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
                    <div>
                        <Button size="lg" asChild className="text-base h-12 px-8 rounded-lg bg-high-contrast-green text-accent-foreground hover:bg-high-contrast-green/90 font-semibold">
                            <Link href="/library">View the Standards</Link>
                        </Button>
                        <p className="text-xs text-muted-text mt-2">One-time purchase • Offline • Built for real audits</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const WhatItIsSection = () => (
    <Section id="what-it-is" className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="max-w-3xl mx-auto">
                <SectionHeadline>This is not a checklist pack. It’s an operational system.</SectionHeadline>
                <SectionBody className="mt-6 space-y-6">
                    <div>Most teams fail not because they don’t work hard — but because critical work lives in people’s heads.</div>
                    <div>MoreMeets Standards™ converts expert knowledge into a clear, repeatable system so nothing important is missed, forgotten, or improvised.</div>
                </SectionBody>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto text-left items-center">
                <div className="space-y-4 rounded-xl border border-border bg-background/50 p-6">
                    <h3 className="font-bold text-xl text-primary-text">What You Receive</h3>
                    <ul className="space-y-3">
                        {[
                            "Industry-specific SOP packs",
                            "Role-based operational checklists",
                            "Daily, weekly, monthly task structures",
                            "Clearly defined responsibilities",
                            "Built-in frequencies and escalation logic",
                            "Trainer notes explaining why each step matters"
                        ].map(item => (
                             <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-authority-green shrink-0 mt-1" />
                                <span className="text-secondary-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-xl border border-border bg-background p-1.5 shadow-2xl">
                     <img
                        src='https://i.postimg.cc/7LLnXzpt/Screenshot-2025-12-26-221106.png'
                        alt="MoreMeets Excel Checklist System"
                        className="rounded-lg object-cover w-full h-auto blur-sm"
                    />
                </div>
            </div>
        </div>
    </Section>
);

const NotPeopleDependentSection = () => (
     <Section>
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <SectionHeadline className="text-left">Designed to work even when people change.</SectionHeadline>
                    <div className="space-y-4 text-secondary-text text-lg max-w-xl">
                        <p>People resign. Teams rotate. Experience gets lost.</p>
                        <p>MoreMeets Standards™ ensures operations do not collapse when individuals leave.</p>
                        <p>Every task, frequency, responsibility, and expectation is documented and visible — not remembered.</p>
                    </div>
                    <p className="text-xl font-semibold text-authority-green !mt-8">Your operation becomes system-driven, not people-dependent.</p>
                </div>
                 <div className="flex flex-col items-center justify-center gap-4">
                     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <Card className="flex items-center gap-4 p-4 w-full max-w-sm bg-alternate-background border-border">
                            <User className="w-8 h-8 text-secondary-text"/>
                            <div>
                                <p className="font-bold text-primary-text">Expert Knowledge</p>
                                <p className="text-sm text-muted-text">Trapped in one person's head.</p>
                            </div>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                      <ArrowRight className="w-8 h-8 text-muted-text rotate-90 md:rotate-0" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <Card className="flex items-center gap-4 p-4 w-full max-w-sm border-authority-green/50 bg-authority-green/10">
                            <FileText className="w-8 h-8 text-authority-green"/>
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
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>So teams always know what to do — and when.</SectionHeadline>
            <SectionBody>
                <div>Each standard clearly defines the core components of operational discipline. This removes hesitation, second-guessing, and dependency on supervisors.</div>
            </SectionBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {[
                    "What needs to be done", 
                    "Who is responsible", 
                    "How often (daily / weekly / monthly)", 
                    "Why the task exists (trainer notes)", 
                    "What happens if it’s missed"
                ].map((item, index) => (
                    <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <Card className="p-6 text-center h-full border-border bg-background flex items-center justify-center">
                            <p className="font-bold text-secondary-text">{item}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
);

const GuidanceSection = () => (
    <Section>
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <SectionHeadline className="text-left">With built-in guidance, so anyone can execute like an expert.</SectionHeadline>
                    <div className="space-y-4 text-secondary-text text-lg max-w-xl">
                        <p>Our standards include "Trainer Notes" that explain the *why* behind critical tasks. This turns a simple checklist into a powerful, on-the-job training tool.</p>
                        <p className="font-semibold text-authority-green">Your team doesn't just follow instructions; they understand the consequences, building a culture of ownership and safety.</p>
                    </div>
                </div>
                 <div className="rounded-xl border border-border bg-background p-1.5 shadow-2xl">
                     <img
                        src='https://i.postimg.cc/43VBF0sT/Screenshot-2025-12-27-023236.png'
                        alt="MoreMeets Trainer Notes for team guidance"
                        className="rounded-lg object-cover w-full h-auto blur-sm"
                    />
                </div>
            </div>
        </div>
    </Section>
);

const AuditProofSection = () => (
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Your Data is Your Property. Period.</SectionHeadline>
            <div className="max-w-3xl mx-auto">
                <Card className="p-6 md:p-8 bg-background border-border shadow-lg">
                     <h3 className="font-bold text-lg text-authority-green mb-4">IMPORTANT CLARIFICATION</h3>
                    <div className="space-y-4 text-secondary-text text-base md:text-lg">
                        <p>MoreMeets does not track or monitor execution digitally. Our framework is **offline by design**.</p>
                        <p className="font-semibold text-primary-text">We never have access to your operational data. Your data is your property, completely private and secure, under your control.</p>
                        <p>Instead, the system provides a standardised structure that makes evidence possible, consistent, and audit-acceptable.</p>
                    </div>
                </Card>
            </div>
            <div className="max-w-4xl mx-auto text-center space-y-6 pt-8">
                 <SectionBody>
                    <div>When tasks are Defined, Scheduled, Assigned, and Documented... they naturally produce repeatable proof of work.</div>
                </SectionBody>
                <p className="text-primary-text font-semibold text-2xl md:text-3xl !leading-tight">
                    Auditors don’t ask “Which software did you use?”
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 items-center justify-center font-semibold text-lg text-muted-text">
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.2}} className="text-center"><p>Missed task</p></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}} className="text-center"><ArrowRight className="w-8 h-8 mx-auto" /></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.4}} className="text-center col-span-2 md:col-span-1"><p>No evidence</p></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.5}} className="text-center hidden md:block"><ArrowRight className="w-8 h-8 mx-auto" /></motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.6}} className="text-center mt-4 md:mt-0 col-span-full md:col-span-1 bg-risk-accent/10 text-risk-accent p-3 rounded-lg border border-risk-accent/20"><p>Penalty / shutdown</p></motion.div>
                </div>
            </div>
             <SectionBody>
                <div className="space-y-4">
                    <p>Compliance failures rarely come from big negligence. They come from small tasks no one realised were critical.</p>
                    <p>MoreMeets highlights which tasks are high-risk, which ones auditors care about, and which steps cannot be skipped — so teams understand consequences before mistakes happen.</p>
                </div>
            </SectionBody>
        </div>
    </Section>
);

const GlobalComplianceSection = () => (
    <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>Built for global operations. Adaptable locally.</SectionHeadline>
            <SectionBody>
                <div className="space-y-4">
                    <p>Each standard is researched against global compliance expectations, aligned with industry best practices, and designed to be locally customisable.</p>
                    <p>Whether you operate in one location or many, the structure remains consistent, even if regulations differ.</p>
                </div>
            </SectionBody>
             <p className="font-semibold text-xl text-authority-green">One system. Many industries. Global thinking.</p>
        </div>
    </Section>
);


const OneTimePurchaseSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>Buy once. Build forever.</SectionHeadline>
            <SectionBody>
                <div className="space-y-4">
                    <p>MoreMeets Standards™ is a one-time purchase.</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-primary-text font-semibold">
                        <p className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-authority-green"/>Lifetime ownership</p>
                        <p className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-authority-green"/>Free future updates</p>
                        <p className="flex items-center gap-2"><Ban className="w-5 h-5 text-risk-accent"/>No subscriptions</p>
                        <p className="flex items-center gap-2"><Ban className="w-5 h-5 text-risk-accent"/>No vendor lock-in</p>
                    </div>
                </div>
            </SectionBody>
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
                    <Card className="h-full bg-background border-border text-left p-6">
                        <CardHeader className="p-0">
                            <CardTitle className="text-secondary-text flex items-center gap-2"><Handshake className="text-muted-text" /> Consultants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-text mt-4 p-0">
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Expensive, time-bound</span></p>
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Knowledge leaves with them</span></p>
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>No daily execution system</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                     <Card className="h-full bg-background border-border text-left p-6">
                        <CardHeader className="p-0">
                            <CardTitle className="text-secondary-text flex items-center gap-2"><CloudIcon className="text-muted-text" /> SaaS Platforms</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-muted-text mt-4 p-0">
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Subscriptions & dependencies</span></p>
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Internet & tool reliance</span></p>
                            <p className="flex items-start gap-2"><FileX className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Evidence scattered</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:col-span-1 md:col-span-2">
                    <Card className="h-full border-2 border-authority-green/80 bg-authority-green/10 shadow-2xl text-left p-6">
                        <CardHeader className="p-0">
                             <CardTitle className="text-authority-green flex items-center gap-2"><CheckCircle className="text-high-contrast-green" /> MoreMeets Standards™</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-primary-text mt-4 p-0">
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>One-time ownership</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Offline & universal</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Training, execution & audit structure in one place</span></p>
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
        <Section id="who-is-this-for">
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
                 <Button size="lg" asChild className="text-base h-12 px-8 rounded-lg bg-high-contrast-green text-accent-foreground font-semibold hover:bg-high-contrast-green/90">
                    <Link href="/library">Get the Standards</Link>
                </Button>
                <Button size="lg" asChild variant="link" className="text-base text-secondary-text hover:text-primary-text">
                    <Link href="#what-it-is">See what’s included →</Link>
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
      <GuidanceSection />
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
