'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Frown, Smile, CheckCircle, Users, ShieldCheck, Factory, Handshake } from "lucide-react";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Section = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <section className={`w-full py-20 md:py-28 lg:py-32 ${className}`} {...props} />
);

const SectionHeadline = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl lg:text-6xl !leading-tight">
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
        />
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-4xl space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter font-headline sm:text-6xl md:text-7xl lg:text-8xl !leading-tight text-foreground">
                    Operational Standards.
                    <br />
                    <span className="text-primary">Audit-Ready by Design.</span>
                </h1>
                <p className="max-w-2xl text-muted-foreground text-base md:text-lg lg:text-xl">
                   A one-time operational system that turns daily work into permanent audit proof — without tools, subscriptions, or dependence on people.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="text-base">
                        <Link href="/library">Get the Standard</Link>
                    </Button>
                    <Button size="lg" variant="ghost" asChild className="text-base">
                        <Link href="#audit-structure">See the Audit Structure <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">Used across safety-critical, regulated, and people-dependent operations.</p>
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
                Compliance doesn’t break because of one big mistake. It breaks because tasks weren’t defined clearly, enforced by frequency, trained consistently, or provable later.
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
            <br/><span className="text-primary">This is a standard.</span></SectionHeadline>
            <SectionBody>
                MoreMeets Standards™ is a complete operational framework delivered offline, built to turn everyday work into structured, auditable proof. No subscriptions. No dashboards. No lock-in. Just disciplined execution, captured once, usable forever.
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
        { label: "Control clarity", description: "Clear task definition" },
        { label: "Preventive control", description: "Frequency enforced" },
        { label: "Knowledge continuity", description: "Trainer notes embedded" },
        { label: "Objective evidence", description: "Audit trail by default" },
        { label: "Proof and prevention", description: "Last completed + next due" },
    ];
    return (
        <Section id="audit-structure" className="bg-secondary">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="text-center">
                    <SectionHeadline>What “audit-ready” actually looks like.</SectionHeadline>
                </div>
                <div className="max-w-6xl mx-auto bg-background p-4 rounded-lg shadow-lg border">
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-5 min-w-[1200px] font-mono">
                            {annotations.map((item) => (
                                <div key={item.label} className="p-2 border-r last:border-r-0">
                                    <div className="text-xs font-semibold text-muted-foreground">{item.label.toUpperCase()}</div>
                                    <div className="mt-1 text-sm text-foreground bg-primary/10 p-2 rounded-md h-12 flex items-center">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center font-semibold text-lg text-primary">If it isn’t structured like this, it isn’t audit-ready.</p>
            </div>
        </Section>
    )
};

const ComparisonSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-12">
            <SectionHeadline>Why serious operations choose standards over tools.</SectionHeadline>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card>
                    <CardHeader><CardTitle>Consultants</CardTitle></CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p>High cost</p>
                        <p>Knowledge leaves with people</p>
                        <p>No living system</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>SaaS Platforms</CardTitle></CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p>Ongoing fees & version drift</p>
                        <p>Internet & feature churn</p>
                        <p>Evidence scattered & data trapped</p>
                    </CardContent>
                </Card>
                <Card className="border-2 border-primary bg-secondary">
                    <CardHeader><CardTitle className="text-primary">MoreMeets Standards™</CardTitle></CardHeader>
                    <CardContent className="space-y-2 text-foreground">
                        <p>One-time ownership</p>
                        <p>Offline & universal</p>
                        <p>Training + tasks + proof in one place</p>
                    </CardContent>
                </Card>
            </div>
            <p className="text-center font-semibold text-lg text-primary">Standards don’t expire. Tools do.</p>
        </div>
    </Section>
);

const WhoIsThisForSection = () => {
    const roles = [
        { icon: <Factory className="w-8 h-8"/>, title: "Safety-critical operations", description: "Manufacturing, Healthcare, Logistics" },
        { icon: <Users className="w-8 h-8"/>, title: "Multi-location businesses", description: "Retail, Hospitality, Franchise Chains" },
        { icon: <ShieldCheck className="w-8 h-8"/>, title: "Regulated industries", description: "Finance, Pharma, Education" },
        { icon: <Handshake className="w-8 h-8"/>, title: "Founder-led companies", description: "Scaling beyond memory and individual heroes" },
    ];
    return (
        <Section>
            <div className="container px-4 md:px-6 text-center space-y-12">
                <SectionHeadline>Who adopts MoreMeets Standards™?</SectionHeadline>
                <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {roles.map(role => (
                        <div key={role.title} className="flex flex-col items-center">
                            <div className="text-primary mb-4">{role.icon}</div>
                            <h3 className="font-bold">{role.title}</h3>
                            <p className="text-sm text-muted-foreground">{role.description}</p>
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
                <p className="line-through">SOP PDFs no one follows</p>
                <p className="line-through">Excel trackers with no proof</p>
                <p className="line-through">WhatsApp instructions</p>
                <p className="line-through">Consultant documents that rot</p>
                <p className="line-through">Re-training every time someone leaves</p>
            </div>
            <p className="text-center font-semibold text-lg text-primary">Priced lower than one failed audit. Owned for life.</p>
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
                 <p className="text-sm font-semibold text-primary pt-4">Not a certification. A system that helps you meet them.</p>
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
               <span className="text-foreground font-semibold">When people leave, risk doesn’t increase.</span>
            </SectionBody>
        </div>
    </Section>
);

const ConsequenceSection = () => (
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>One missed task is all it takes.</SectionHeadline>
             <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg">
                 <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}}><span className="font-bold text-destructive">A missed check</span> → failed audit</motion.p>
                 <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}}><span className="font-bold text-destructive">A skipped frequency</span> → safety incident</motion.p>
                 <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}}><span className="font-bold text-destructive">An undocumented action</span> → legal exposure</motion.p>
            </div>
            <p className="text-center font-semibold text-lg text-primary">Standards exist to make sure nothing depends on memory.</p>
        </div>
    </Section>
);

const DeliverablesSection = () => (
     <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>What you receive.</SectionHeadline>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-foreground">
                <div className="font-semibold">Industry-specific operational standards</div>
                <div className="font-semibold">Structured task frameworks</div>
                <div className="font-semibold">Embedded training logic</div>
                <div className="font-semibold">Audit-ready execution format</div>
                <div className="font-semibold col-span-2 md:col-span-1">Lifetime access to updates</div>
            </div>
             <p className="text-center font-semibold text-lg text-primary pt-8">This is not content. This is how your operation runs when no one is watching.</p>
        </div>
    </Section>
);


const FinalCTASection = () => (
     <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Adopt the standard.
            <br/>Run your operation with proof.</SectionHeadline>
            <p className="text-muted-foreground text-lg">Once adopted, teams rarely go back.</p>
            <Button size="lg" asChild className="text-base mt-4">
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
      <FinalCTASection />
    </main>
  );
}
