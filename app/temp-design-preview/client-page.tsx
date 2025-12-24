
'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Frown, Smile, BrainCircuit, FileText, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { IconComponent } from '../components/icons';


const HeroSection = () => (
    <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center bg-background text-foreground overflow-hidden">
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-primary">
                    The Professional Standard for Audit-Ready Operations.
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    MoreMeets Standards™ helps organizations run compliant, repeatable operations—without SaaS, consultants, or people-dependence.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground pt-2">
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Offline</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Audit-ready</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> One-time access</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Industry-grade</span>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10">
                        <Link href="/library">
                            See the Standard
                        </Link>
                    </Button>
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10" variant="secondary">
                        <Link href="/library">
                            Browse Industry Standards
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const RealProblemSection = () => (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Most Operations Aren’t Broken. They’re Unprovable.</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                        Your team knows what to do. But when an auditor asks “Show me proof”—the answers live in WhatsApp, memory, spreadsheets, or people who’ve left.
                    </p>
                    <p className="text-xl font-semibold text-primary mt-6 border-t border-b border-primary/20 border-dashed py-4">
                        Compliance fails not because work isn’t done—but because it isn’t standardized.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const ChaosVsStandardSection = () => (
    <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                <Card className="border-destructive/30 border-2 bg-destructive/5 dark:bg-destructive/10">
                    <CardHeader>
                        <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> Without Standards</CardTitle>
                        <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Ad-hoc SOPs in Word docs and PDFs.</span></p>
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Execution depends entirely on your best manager's memory.</span></p>
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>No verifiable audit trail for inspections.</span></p>
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>You have to re-train new hires from scratch every time.</span></p>
                    </CardContent>
                </Card>
                <Card className="border-primary/30 border-2 bg-background shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-5 h-5"/> With MoreMeets Standards™</CardTitle>
                        <CardDescription>A system of record that ensures excellence every time.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-foreground">
                        <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Codified tasks and SOPs in a structured system.</span></p>
                        <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Time-stamped execution creates a verifiable audit trail.</span></p>
                        <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Designed for audit-readiness from day one.</span></p>
                        <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires become compliant and productive immediately.</span></p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);


const SystemSection = () => (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Introducing MoreMeets Standards™</h2>
                <p className="text-lg text-muted-foreground mt-4">A library of offline, audit-ready operational standards that convert daily work into verifiable proof.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle>1. Codified Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Knowledge doesn’t live in people—it lives in standards. We turn undocumented processes into a permanent, scalable asset.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle>2. Audit-Ready by Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Proof is generated automatically through execution. Every task is structured to create a traceable, verifiable audit trail.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle>3. Offline & Owned</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Excel-based for universal access. No subscriptions, no vendor lock-in. You own and control the system, forever.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle>4. People-Independent</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Train faster, scale safely, and reduce risk. Our standards ensure consistent execution, regardless of who is on duty.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

const StandardsSection = () => (
    <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Choose Your Operational Standard</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card>
                    <CardHeader>
                        <IconComponent name="Building" className="w-8 h-8 text-accent mb-2" />
                        <CardTitle>Hotels & Resorts Standard</CardTitle>
                        <CardDescription>Safety, housekeeping, audits, training & daily ops.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>✔ Audit-ready</p>
                        <p>✔ Offline</p>
                        <p>✔ One-time purchase</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary" className="w-full" asChild><Link href="/packs/hotels_and_resorts">View Standard</Link></Button>
                    </CardFooter>
                </Card>
                 <Card>
                    <CardHeader>
                        <IconComponent name="Factory" className="w-8 h-8 text-accent mb-2" />
                        <CardTitle>Manufacturing & EHS Standard</CardTitle>
                        <CardDescription>Safety, quality control, maintenance & compliance.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>✔ Audit-ready</p>
                        <p>✔ Offline</p>
                        <p>✔ One-time purchase</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="secondary" className="w-full" asChild><Link href="/packs/manufacturing_operations_ehs_pack">View Standard</Link></Button>
                    </CardFooter>
                </Card>
                 <Card>
                    <CardHeader>
                        <IconComponent name="Popcorn" className="w-8 h-8 text-accent mb-2" />
                        <CardTitle>Cinema & Multiplex Standard</CardTitle>
                        <CardDescription>Operations, safety, staff readiness & daily controls.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>✔ Audit-ready</p>
                        <p>✔ Offline</p>
                        <p>✔ One-time purchase</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="secondary" className="w-full" asChild><Link href="/packs/cinema_operations_pack">View Standard</Link></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </section>
);

const TrustSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Professionals Choose Standards Over Software</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">No Recurring Cost</h3>
          <p className="text-muted-foreground text-sm">Buy it once, own it forever. Escape the endless cycle of SaaS subscriptions and per-user fees.</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">No Implementation Delay</h3>
          <p className="text-muted-foreground text-sm">Our standards are built in Excel—a tool your team already knows. Deploy on day one without complex training or IT overhead.</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">No Vendor Dependency</h3>
          <p className="text-muted-foreground text-sm">You control the system. Adapt it, modify it, and scale it without being locked into a proprietary platform or vendor roadmap.</p>
        </div>
      </div>
    </div>
  </section>
);

const FinalCtaSection = () => (
    <section className="w-full py-20 md:py-32">
        <div className="container text-center">
            <h2 className="text-3xl font-bold font-headline">Adopt the Standard. Run with Confidence.</h2>
            <div className="flex justify-center gap-4 mt-8">
                 <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10">
                    <Link href="/library">
                        Browse Standards
                    </Link>
                </Button>
                <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10" variant="outline">
                    <Link href="/contact">
                        Talk to Us
                    </Link>
                </Button>
            </div>
        </div>
    </section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <RealProblemSection />
      <ChaosVsStandardSection />
      <SystemSection />
      <StandardsSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  );
}
