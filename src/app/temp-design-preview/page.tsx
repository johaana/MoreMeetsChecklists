
'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Users, Bot, Zap, Rocket, Search, Edit, BarChart, FileText, Star, BrainCircuit, Shield, FileCheck, LifeBuoy, Frown, Smile, XCircle, CheckCircle, Package } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';


const SectionWrapper = ({ title, description, children, bg = "bg-background" }: { title: string, description: string, children: React.ReactNode, bg?: string }) => (
    <section className={cn("w-full py-16 md:py-24 border-t", bg)}>
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">{title}</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">{description}</p>
            </div>
            {children}
        </div>
    </section>
);

// Option 1: The Anatomy of Failure (Importance of SOPs)
const AnatomyOfFailure = () => (
    <SectionWrapper 
        title="Why Most SOPs Fail (And Ours Don't)" 
        description="The problem isn't having SOPs; it's having SOPs that are incomplete, unactionable, and disconnected from your daily workflow. Here's the difference."
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <Card className="border-destructive/30 h-full">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Typical (Broken) SOP</CardTitle>
                    <CardDescription>A document that lives in a folder, forgotten and unused.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Vague & Incomplete:</strong> "Check equipment regularly." What equipment? How? What defines 'good'?</span></p>
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>No Accountability:</strong> Tasks are forgotten because there's no clear owner, frequency, or proof of completion required.</span></p>
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Not Audit-Ready:</strong> Lacks the structure and detail needed to satisfy a real compliance or safety auditor.</span></p>
                </CardContent>
            </Card>
            <Card className="border-primary/30 bg-background shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The MoreMeets Standard</CardTitle>
                    <CardDescription>A complete operational system designed for execution.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Globally Compliant System:</strong> A researched, actionable framework that your team can adapt and follow from day one.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Built-in Accountability:</strong> Every task has a defined `Role`, `Frequency`, and `Proof of Completion`.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Audit-Ready Framework:</strong> Built on ISO, OSHA, and HACCP principles to be audit-ready from day one.</span></p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

// Option 2: The "What-If" Playbook (Variation)
const WhatIfPlaybook = () => (
    <SectionWrapper 
        title="Your Playbook for What-If"
        description="Operations don't fail on good days. They fail when something unexpected happens. MoreMeets gives your team a globally-compliant plan for the worst days."
    >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-2 border-dashed border-primary/20">
                <CardHeader className="p-0">
                    <h3 className="font-bold font-headline text-primary">What if your best manager quits?</h3>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground text-sm">Our checklists provide a globally compliant system, turning operational best practices into a repeatable process your new hires can follow and adapt from day one. Your resilience is no longer tied to one person.</p>
                </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-dashed border-primary/20">
                 <CardHeader className="p-0">
                    <h3 className="font-bold font-headline text-primary">What if an auditor shows up?</h3>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground text-sm">Our audit-ready SOPs provide a clear, timestamped, and verifiable record of your compliance activities. You're not just compliant; you can prove it instantly.</p>
                </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-dashed border-primary/20">
                 <CardHeader className="p-0">
                    <h3 className="font-bold font-headline text-primary">What if a crisis hits at 2 AM?</h3>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground text-sm">Our emergency protocols give your team the exact, step-by-step instructions to follow for fires, medical emergencies, or security incidents, ensuring a calm and correct response.</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

// Option 3: Stop the Leaks (Dashboard Variation)
const StopTheLeaks = () => (
    <SectionWrapper
        title="Your Business Is Leaking Value. We Plug the Holes."
        description="Every un-systematized process is a leak in your profitability and reputation. MoreMeets turns these vulnerabilities into strengths."
        bg="bg-secondary/30"
    >
        <div className="max-w-4xl mx-auto p-6 bg-background rounded-2xl shadow-lg border">
            <h3 className="text-center font-bold font-headline text-lg mb-6">Operational Health Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex justify-between items-center p-3 rounded-md bg-destructive/10">
                    <span className="font-medium text-destructive">Wasted Time (Rework)</span>
                    <span className="text-destructive font-bold">HIGH</span>
                </div>
                 <div className="flex justify-between items-center p-3 rounded-md bg-green-600/10">
                    <span className="font-medium text-green-700">✓ MoreMeets: Standardized Process</span>
                    <span className="text-green-700 font-bold">OPTIMAL</span>
                </div>
                 <div className="flex justify-between items-center p-3 rounded-md bg-destructive/10">
                    <span className="font-medium text-destructive">Compliance Fines</span>
                    <span className="text-destructive font-bold">RISK</span>
                </div>
                 <div className="flex justify-between items-center p-3 rounded-md bg-green-600/10">
                    <span className="font-medium text-green-700">✓ MoreMeets: Audit-Ready Logs</span>
                    <span className="text-green-700 font-bold">MITIGATED</span>
                </div>
                 <div className="flex justify-between items-center p-3 rounded-md bg-destructive/10">
                    <span className="font-medium text-destructive">Knowledge Loss</span>
                    <span className="text-destructive font-bold">CRITICAL</span>
                </div>
                 <div className="flex justify-between items-center p-3 rounded-md bg-green-600/10">
                    <span className="font-medium text-green-700">✓ MoreMeets: Systematized Expertise</span>
                    <span className="text-green-700 font-bold">SECURE</span>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

// Option 4: The Blueprint for Excellence
const Blueprint = () => (
    <SectionWrapper
        title="Don't Wing It. Build on a Blueprint."
        description="You wouldn't build a skyscraper without architectural plans. Why build your operations on memory and guesswork? Our checklists are the professional blueprint for a world-class operation."
    >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
             <Card className="flex flex-col items-center p-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20">
                    <Shield className="w-10 h-10" />
                </div>
                <h3 className="font-bold font-headline text-lg">Foundation: Compliance</h3>
                <p className="text-sm text-muted-foreground mt-2">Meet global standards (ISO, OSHA, HACCP) and stay audit-ready from day one.</p>
            </Card>
             <Card className="flex flex-col items-center p-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20">
                    <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="font-bold font-headline text-lg">Pillars: Efficiency</h3>
                <p className="text-sm text-muted-foreground mt-2">Standardize tasks, eliminate rework, and onboard new staff faster with a clear, actionable playbook.</p>
            </Card>
             <Card className="flex flex-col items-center p-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20">
                    <LifeBuoy className="w-10 h-10" />
                </div>
                <h3 className="font-bold font-headline text-lg">Roof: Resilience</h3>
                <p className="text-sm text-muted-foreground mt-2">Capture expert knowledge and build emergency protocols so your business runs smoothly, no matter what.</p>
            </Card>
        </div>
    </SectionWrapper>
);

// Option 5: The MoreMeets System
const TheSystem = () => (
    <SectionWrapper 
        title="More Than a Template. It's a System."
        description="Generic templates are vague. A MoreMeets pack is a complete, interconnected system for operational control, built on four key components."
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3">
                        <FileCheck className="w-8 h-8 text-accent shrink-0" />
                        <CardTitle className="text-lg">Task-Level Detail</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                    <p className="text-muted-foreground text-sm">Every high-level goal is broken down into specific, unambiguous tasks that leave no room for interpretation.</p>
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="p-0">
                     <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-accent shrink-0" />
                        <CardTitle className="text-lg">Built-in Accountability</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                    <p className="text-muted-foreground text-sm">Includes columns for `Role`, `Frequency`, and `Proof of Completion` to ensure every task has a clear owner and a verifiable outcome.</p>
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8 text-accent shrink-0" />
                         <CardTitle className="text-lg">Risk Intelligence</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                    <p className="text-muted-foreground text-sm">The "Consequence of Failure" column explains *why* a task is critical, turning your team from task-doers into risk managers.</p>
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3">
                        <Star className="w-8 h-8 text-accent shrink-0" />
                        <CardTitle className="text-lg">Audit-Ready Framework</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                    <p className="text-muted-foreground text-sm">Designed from the ground up to meet the rigorous demands of internal teams and external compliance auditors.</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

// New Section for "Trainer's Notes"
const ManagerAsCoachSection = () => (
    <SectionWrapper 
        title="Turn Every Manager into an Expert Coach"
        description="Our checklists go beyond simple tasks. They include a 'Trainer's Notes' column that empowers your managers to turn every check into a powerful on-the-job training moment."
    >
        <Card className="max-w-4xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center bg-secondary/30 shadow-lg border">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">From 'What' to 'Why'</h2>
                <p className="text-muted-foreground">The 'Trainer's Notes' provide your managers with talking points, real-world examples, and coaching questions for critical tasks. This transforms routine supervision into powerful, context-rich training that builds a smarter, more resilient team.</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Learn More About This Feature <ArrowRight className="w-4 h-4 ml-2" /></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle className="font-headline text-2xl">The Manager's Coaching Playbook</DialogTitle>
                            <DialogDescription>
                            Go beyond compliance. Build a culture of excellence.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="prose prose-sm max-w-none text-foreground dark:text-foreground">
                            <p>The standard MoreMeets packs ensure tasks are done correctly. The optional **'Manager's Edition'** checklists ensure your team understands *why* they're doing them. This is a force multiplier for your leadership team.</p>
                            <h4>How it Works: The "Trainer's Notes" Column</h4>
                            <p>For each critical task, we've added a "Trainer's Notes" column visible only in the Manager's master file. This column contains: </p>
                            <ul>
                            <li><strong>Coaching Questions:</strong> Instead of asking "Did you do it?", your manager can ask "What's the biggest risk if we forget this step?" This promotes critical thinking.</li>
                            <li><strong>Real-World Examples:</strong> We link tasks to real, costly business disasters. For a food safety check, the note might say: *"Explain the Chipotle E. coli outbreak to reinforce why this isn't just bureaucracy."*</li>
                            <li><strong>Best Practice Demos:</strong> Notes on what "good" looks like, helping managers train for excellence, not just completion.</li>
                            </ul>
                            <h4>The Result:</h4>
                            <p>You're not just buying a checklist; you're investing in a scalable training system. You turn every routine check into a micro-training session, create more engaged employees, and build a more resilient, intelligent operation.</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="rounded-lg bg-background p-4 border border-dashed">
                <p className="text-sm font-semibold">Example: "Trainer's Notes"</p>
                <div className="mt-2 space-y-2">
                    <div className="bg-secondary/50 p-3 rounded-md">
                        <p className="font-mono text-xs">**Task:** Check for allergen cross-contamination.</p>
                        <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Trainer's Note:** "Show the new hire the separate color-coded boards. Explain the Pret a Manger case study to reinforce why a simple mistake here can be fatal and business-ending."</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-md">
                        <p className="font-mono text-xs">**Task:** Verify LOTO on machine #3.</p>
                        <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Trainer's Note:** "Ask the employee: 'What is the biggest risk if we forget this step?' Ensure they understand this prevents someone from being crushed."</p>
                    </div>
                </div>
            </div>
        </Card>
    </SectionWrapper>
);


export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
            <p>⚠️ This is a temporary design preview page with new options. ⚠️</p>
        </div>

        <AnatomyOfFailure />
        <WhatIfPlaybook />
        <StopTheLeaks />
        <ManagerAsCoachSection />
        <Blueprint />
        <TheSystem />

      </main>
      <Footer />
    </div>
  );
}
