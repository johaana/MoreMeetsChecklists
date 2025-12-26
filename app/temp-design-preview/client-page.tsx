
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Users, Shield, Factory, Hospital, Building, CheckCircle } from "lucide-react";
import React from 'react';
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
    <section className="relative w-full h-screen min-h-[700px] flex items-center">
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
                    MoreMeets Standards™ is the world’s first offline, audit-ready operational standard for businesses that cannot afford missed tasks, unclear ownership, or failed audits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="text-base">
                        <Link href="/library">Explore the Standard</Link>
                    </Button>
                    <Button size="lg" variant="ghost" asChild className="text-base">
                        <Link href="#how-it-works">See how audit readiness actually works <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
                Compliance breakdowns rarely come from big mistakes. They come from small, daily tasks that were not clearly defined, not enforced by frequency, not trained consistently, and not verifiable later. Emails, WhatsApp messages, and shared folders do not create proof. Auditors don’t ask who remembers. They ask what evidence exists.
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
                MoreMeets Standards™ is a complete operational framework delivered offline, built to turn everyday work into structured, auditable proof. No subscriptions. No dashboards. No lock-in.
                <br/>
                Just disciplined execution, captured once, usable forever.
            </SectionBody>
            <div className="inline-block">
                <div className="border rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
                    World’s first offline, audit-ready operational standard
                </div>
            </div>
        </div>
    </Section>
);

const SystemSection = () => {
    const annotations = [
        { label: "Task Definition", description: "Clarity, no ambiguity." },
        { label: "Frequency Enforced", description: "Daily, weekly, monthly discipline." },
        { label: "Trainer Notes Embedded", description: "Knowledge travels, not people." },
        { label: "Status Tracking", description: "Visibility without follow-ups." },
        { label: "Last Completed + Next Due", description: "Proof and prevention." },
        { label: "Audit Trail by Default", description: "No reconstruction later." },
    ];
    return (
        <Section id="how-it-works" className="bg-secondary">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="text-center">
                    <SectionHeadline>What “audit-ready” actually looks like.</SectionHeadline>
                </div>
                <div className="max-w-6xl mx-auto bg-background p-4 rounded-lg shadow-lg border">
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-6 min-w-[1200px] text-xs font-mono">
                            {annotations.map((item) => (
                                <div key={item.label} className="p-2 border-r last:border-r-0">
                                    <div className="font-bold text-muted-foreground">{item.label.toUpperCase()}</div>
                                    <div className="mt-1 text-foreground bg-primary/10 p-2 rounded-md h-12 flex items-center">{item.description}</div>
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
                    <CardHeader>
                        <CardTitle>Consultants</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p>High cost</p>
                        <p>Knowledge leaves with people</p>
                        <p>No living system</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>SaaS Platforms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p>Ongoing fees</p>
                        <p>Internet & access dependency</p>
                        <p>Data trapped</p>
                    </CardContent>
                </Card>
                <Card className="border-2 border-primary bg-secondary">
                    <CardHeader>
                        <CardTitle className="text-primary">MoreMeets Standards™</CardTitle>
                    </CardHeader>
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

const ComplianceSection = () => (
    <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Built for real-world compliance environments.</SectionHeadline>
            <SectionBody>
                MoreMeets Standards™ aligns with how global frameworks actually operate — through repeatable controls, documented execution, and verifiable records.
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
    <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Train once. Execute forever.</SectionHeadline>
            <SectionBody>
               Every task in the MoreMeets Standard™ includes context, instructions, trainer notes, and expected outcomes. New hires don’t “shadow.” They follow the standard. When people leave, the system stays.
            </SectionBody>
        </div>
    </Section>
);

const ConsequenceSection = () => (
    <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-8">
            <SectionHeadline>One missed task is all it takes.</SectionHeadline>
             <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                 <p className="text-lg"><span className="font-bold text-destructive">A missed check</span> → failed audit</p>
                 <p className="text-lg"><span className="font-bold text-destructive">A skipped frequency</span> → safety incident</p>
                 <p className="text-lg"><span className="font-bold text-destructive">An undocumented action</span> → legal exposure</p>
            </div>
            <p className="text-center font-semibold text-lg text-primary">Standards exist to make sure nothing depends on memory.</p>
        </div>
    </Section>
);

const DeliverablesSection = () => (
     <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>What you receive.</SectionHeadline>
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-foreground">
                <div className="font-semibold">Industry-specific operational standards</div>
                <div className="font-semibold">Structured task frameworks</div>
                <div className="font-semibold">Embedded training logic</div>
                <div className="font-semibold">Audit-ready execution format</div>
                <div className="font-semibold col-span-2 md:col-span-1">Lifetime access to updates</div>
            </div>
             <p className="text-center font-semibold text-lg text-primary pt-8">This is not content. This is operational infrastructure.</p>
        </div>
    </Section>
);

const PricingPositioningSection = () => (
     <Section className="bg-secondary">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Priced for ownership, not dependency.</SectionHeadline>
             <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 font-semibold">
                <p>One-time access.</p>
                <p>No renewals.</p>
                <p>No usage limits.</p>
            </div>
            <SectionBody>
                Designed to replace consultant engagements, fragmented SOPs, and tool sprawl.
            </SectionBody>
        </div>
    </Section>
);

const FinalCTASection = () => (
     <Section>
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Adopt the standard.
            <br/>Run your operation with proof.</SectionHeadline>
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
      <ComparisonSection />
      <ComplianceSection />
      <TrainingSection />
      <ConsequenceSection />
      <DeliverablesSection />
      <PricingPositioningSection />
      <FinalCTASection />
    </main>
  );
}
