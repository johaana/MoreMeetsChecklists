
'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const HeroSection = () => (
    <section className="relative w-full h-[80vh] min-h-[650px] flex items-center bg-background text-foreground overflow-hidden">
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-primary">
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
                        <CardTitle className="text-destructive">Without Standards (Chaos)</CardTitle>
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
                        <CardTitle className="text-primary">With MoreMeets Standards™ (Control)</CardTitle>
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


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <RealProblemSection />
      <ChaosVsStandardSection />
    </main>
  );
}
