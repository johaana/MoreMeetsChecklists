
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Frown, Smile, CheckCircle, Users, ShieldCheck, Factory, Handshake, X } from "lucide-react";
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="relative w-full h-screen min-h-[700px] flex items-center text-primary-foreground">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920,ac_none/v1762692289/production_id_4763866_1080p_qagzgh.mp4"
            autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ filter: 'grayscale(50%)' }}
        />
        <div 
            className="absolute inset-0 z-10"
            style={{
                background: `linear-gradient(90deg, rgba(11,15,20,0.92) 0%, rgba(11,15,20,0.75) 50%, rgba(11,15,20,0.4) 100%)`
            }}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[680px] space-y-6">
                <div className="text-sm font-semibold tracking-wider uppercase text-authority-green">
                    MoreMeets Standards™
                    <br/>
                    The world’s first offline, audit-ready operational standards system
                </div>
                <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl !leading-tight text-primary-foreground">
                    Operational Standards.
                    <br/>
                    <span className="text-authority-green">Audit-Ready by Design.</span>
                </h1>
                <p className="max-w-2xl text-muted-foreground text-lg md:text-xl lg:text-2xl">
                   Turn daily work into permanent audit proof —
                   without tools, subscriptions, or people dependency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="text-base bg-high-contrast-green text-background hover:bg-high-contrast-green/90 h-12 px-8 rounded-xl">
                        <Link href="/library">Get the Standard</Link>
                    </Button>
                    <Button size="lg" variant="link" asChild className="text-base text-muted-foreground hover:text-primary-foreground">
                        <Link href="#audit-structure">See how the system works <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground/80">Used across safety-critical, regulated, and people-dependent operations.</p>
            </div>
        </div>
    </section>
);


const ProblemSection = () => (
    <Section className="bg-secondary text-center">
        <div className="container px-4 md:px-6 space-y-6">
            <SectionHeadline>
                Most businesses don’t fail audits.
                <br/>
                They fail daily discipline.
            </SectionHeadline>
            <SectionBody>
                Compliance breaks not because of big mistakes, but because small, daily tasks were not clearly defined, enforced by frequency, trained consistently, or provable later.
                <br/><br/>
                <span className="text-foreground font-semibold">Auditors don’t ask who remembers. They ask what evidence exists.</span>
            </SectionBody>
        </div>
    </Section>
);

const CategoryDeclarationSection = () => (
    <Section className="text-center">
        <div className="container px-4 md:px-6 space-y-6">
            <SectionHeadline>
                This is not software.
                <br/>
                <span className="text-authority-green">This is a standard.</span>
            </SectionHeadline>
            <SectionBody>
                MoreMeets Standards™ is a complete operational framework delivered offline, built to turn everyday work into structured, auditable proof. No subscriptions. No dashboards. No lock-in. Just disciplined execution, captured once, usable forever.
            </SectionBody>
            <div className="inline-block mt-4">
                <div className="border border-border rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
                    The world’s first offline, audit-ready operational standard.
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
                                <div key={item.label} className="p-2 border-r last:border-r-0 border-border">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                    <Card className="h-full bg-secondary/50 border-risk-accent/20">
                        <CardHeader>
                            <CardTitle className="text-risk-accent/80">Consultants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left text-muted-foreground">
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>High cost. Short-term fixes</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Knowledge walks out with people</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>No living operational system</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                     <Card className="h-full bg-secondary/50 border-risk-accent/20">
                        <CardHeader>
                            <CardTitle className="text-risk-accent/80">SaaS Platforms</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left text-muted-foreground">
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Subscription lock-in & version drift</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Internet dependency & data trapped</span></p>
                            <p className="flex items-start gap-2"><X className="w-4 h-4 text-risk-accent/80 shrink-0 mt-1"/><span>Evidence scattered across systems</span></p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:col-span-1 md:col-span-2">
                    <Card className="h-full border-2 border-authority-green/80 bg-authority-green/5 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-authority-green">MoreMeets Standards™</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-left text-foreground">
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>One-time ownership. Lifetime use.</span></p>
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Offline & universal</span></p>
                            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Training, execution & audit in one place.</span></p>
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
                <p className="text-center font-semibold text-lg text-muted-foreground pt-8 max-w-3xl mx-auto">If failure creates risk, fines, or shutdowns — this system is for you.</p>
            </div>
        </Section>
    )
}

const ReplacesSection = () => (
    <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>What This Replaces</SectionHeadline>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground">
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.1}} className="line-through">SOP PDFs no one follows</motion.p>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.2}} className="line-through">Excel trackers with no proof</motion.p>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}} className="line-through">WhatsApp instructions</motion.p>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.4}} className="line-through">Consultant documents that rot</motion.p>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.5}} className="line-through">Re-training every time someone leaves</motion.p>
            </div>
             <p className="text-center font-semibold text-lg text-authority-green pt-8">Priced lower than one failed audit. Owned for life.</p>
        </div>
    </Section>
);

const ConsequenceSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>Most failures start with one missed step.</SectionHeadline>
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 items-center justify-center font-semibold text-lg text-muted-foreground">
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{delay: 0.2}} className="text-center"><span className="font-bold text-risk-accent">Missed task</span></motion.div>
                    <div className="text-center hidden md:block"><ArrowRight className="w-8 h-8 mx-auto" /></div>
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{delay: 0.4}} className="text-center"><span className="font-bold text-risk-accent">No evidence</span></motion.div>
                    <div className="text-center hidden md:block"><ArrowRight className="w-8 h-8 mx-auto" /></div>
                    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{ once: true }} transition={{delay: 0.6}} className="text-center"><span className="font-bold text-risk-accent">Non-conformance, penalty, or loss</span></motion.div>
                </div>
            </div>
            <p className="text-center font-semibold text-lg text-muted-foreground pt-8 max-w-3xl mx-auto">MoreMeets Standards™ ensures nothing critical relies on memory, mood, or motivation.</p>
        </div>
    </Section>
);


const FinalCTASection = () => (
     <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Make audit-readiness the default.</SectionHeadline>
            <Button size="lg" asChild className="text-base mt-4 bg-high-contrast-green text-background hover:bg-high-contrast-green/90 h-12 px-8 rounded-xl">
                <Link href="/library">Get the Standards <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
      <ConsequenceSection />
      <FinalCTASection />
    </main>
  );
}
