
'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, Zap, BrainCircuit, Users, FileText, Shield, LifeBuoy, Frown, Smile, XCircle, CheckCircle, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

const SectionWrapper = ({ title, description, children, bg = "bg-background", id }: { id: string, title: string, description: string, children: React.ReactNode, bg?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-t", bg)}>
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">{title}</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">{description}</p>
            </div>
            {children}
        </div>
    </section>
);


/* 
--- OPTION 1 (Consolidated): The Anatomy of Operational Failure ---
Merges the "Anatomy" and "System" sections into one cohesive story.
It starts with the problem (the "before") and flows directly into the solution (the "after"), detailing *why* the MoreMeets standard is superior.
*/
const AnatomyOfFailure = () => (
    <SectionWrapper 
        id="option-1"
        title="Why Most SOPs Are Just Documents. Ours Are Systems." 
        description="The difference between an SOP that collects dust and one that drives excellence is in the details. Here’s a breakdown of the typical, broken approach versus the MoreMeets standard."
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <Card className="border-destructive/30 h-full">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Typical (Broken) SOP</CardTitle>
                    <CardDescription>A document that lives in a folder, forgotten and unused.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Vague & Incomplete:</strong> "Check equipment regularly." What equipment? How? What defines 'good'?</span></p>
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>No Accountability:</strong> Tasks are forgotten because there's no clear owner or verifiable proof of completion.</span></p>
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Not Audit-Ready:</strong> Lacks the structure, evidence logs, and version control to satisfy a real compliance or safety auditor.</span></p>
                     <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>No Training Value:</strong> It's a list of instructions with no context, offering zero value for onboarding or coaching.</span></p>
                </CardContent>
            </Card>
            <Card className="border-primary/30 bg-background shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The MoreMeets System</CardTitle>
                    <CardDescription>A complete operational system designed for execution.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Globally Compliant Framework:</strong> A researched, actionable system built on ISO, OSHA, and HACCP principles that your team can adapt from day one.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Built-in Accountability:</strong> Every task has a defined `Role`, `Frequency`, `Proof of Completion`, and `Risk Level`.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Risk Intelligence Included:</strong> The "Consequence of Failure" column explains *why* a task is critical, turning your team from task-doers into risk managers.</span></p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

/*
--- OPTION 2: The "What-If" Playbook ---
This section is designed to create an emotional connection by tapping into the anxieties of a business owner or manager. It poses common "what-if" scenarios and presents MoreMeets as the answer.
*/
const WhatIfPlaybook = () => (
    <SectionWrapper 
        id="option-2"
        title="Your Playbook for What-If"
        description="Operations don't fail on good days. They fail when something unexpected happens. MoreMeets provides a researched, globally compliant system your team can adapt and follow from day one."
    >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-2 border-dashed border-primary/20">
                <CardHeader className="p-0">
                    <h3 className="font-bold font-headline text-primary">What if your best manager quits?</h3>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground text-sm">Our checklists convert expert knowledge into a repeatable process. Your operational resilience is no longer tied to one person.</p>
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
                    <p className="text-muted-foreground text-sm">Our emergency protocols give your team the exact, step-by-step instructions to follow, ensuring a calm and correct response even when you're not there.</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

/*
--- OPTION 3: The Feature Spotlight Frame (Manager as Coach) ---
This section highlights the unique, tangible feature—the "Trainer's Notes" and "Consequence of Failure" columns. It's designed to showcase a specific product differentiator.
*/
const ManagerAsCoachSection = () => (
    <SectionWrapper 
        id="option-3"
        title="Turn Every Manager into an Expert Coach"
        description="Our checklists go beyond simple tasks. They include a 'Trainer's Notes' column that explains the 'why' behind the 'what', empowering your managers to turn every check into a powerful on-the-job training moment."
        bg="bg-secondary/30"
    >
        <Card className="max-w-4xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center bg-background shadow-lg">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">From 'What' to 'Why'</h2>
                <p className="text-muted-foreground">The "Trainer's Notes" and "Consequence of Failure" columns provide your managers with talking points, real-world examples, and coaching questions. This transforms routine supervision into powerful, context-rich training that builds a smarter, more resilient team.</p>
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
                            <p>Standard checklists ensure tasks are done. A MoreMeets pack ensures your team understands *why* they're doing them. This is a force multiplier for your leadership.</p>
                            <h4>How it Works: The "Consequence of Failure" Column</h4>
                            <p>For each critical task, we've added context that explains the real-world impact of a missed step. This column contains: </p>
                            <ul>
                            <li><strong>Coaching Questions:</strong> Instead of asking "Did you do it?", your manager can ask "What's the biggest risk if we forget this step?" This promotes critical thinking.</li>
                            <li><strong>Real-World Examples:</strong> We link tasks to real, costly business disasters. For a food safety check, the note might say: *"Explain the Chipotle E. coli outbreak to reinforce why this isn't just bureaucracy."*</li>
                            <li><strong>Risk Intelligence:</strong> It turns every employee into a risk manager by making them aware of the consequences.</li>
                            </ul>
                            <h4>The Result:</h4>
                            <p>You're not just buying a checklist; you're investing in a scalable training system. You create more engaged employees and build a more resilient, intelligent operation.</p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="rounded-lg bg-background p-4 border border-dashed">
                <p className="text-sm font-semibold">Example: Excel Checklist Snippet</p>
                <div className="mt-2 space-y-2">
                    <div className="bg-secondary/50 p-3 rounded-md">
                        <p className="font-mono text-xs">**Task:** Check for allergen cross-contamination.</p>
                        <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Consequence of Failure:** "A simple mistake here can be fatal to a guest and business-ending for us (e.g., the Pret a Manger case study)."</p>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-md">
                        <p className="font-mono text-xs">**Task:** Verify LOTO on machine #3.</p>
                        <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Consequence of Failure:** "Prevents someone from being crushed. Non-negotiable safety step."</p>
                    </div>
                </div>
            </div>
        </Card>
    </SectionWrapper>
);

/*
--- OPTION 4: The "Blueprint" Metaphor ---
This redesigned section uses the powerful and easily understood metaphor of a "blueprint" to position your SOPs as the essential, foundational plan for building a stable operation.
*/
const Blueprint = () => (
    <SectionWrapper
        id="option-4"
        title="Your Blueprint for a Resilient Business"
        description="You wouldn't build a skyscraper without architectural plans. Why build your operations on memory and guesswork? Our checklists are the professional blueprint for a world-class operation."
        bg="bg-primary text-primary-foreground"
    >
        <div className="max-w-4xl mx-auto p-4 md:p-8 rounded-lg border-2 border-primary-foreground/20">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
                <div className="space-y-6">
                    <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-accent">FOUNDATION: Compliance</h3>
                        <p className="text-sm text-primary-foreground/80 mt-1">Meet global standards (ISO, OSHA, HACCP) and stay audit-ready from day one.</p>
                    </div>
                     <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-accent">PILLARS: Efficiency</h3>
                        <p className="text-sm text-primary-foreground/80 mt-1">Standardize tasks, eliminate rework, and onboard new staff faster with a clear, actionable playbook.</p>
                    </div>
                     <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-accent">ROOF: Resilience</h3>
                        <p className="text-sm text-primary-foreground/80 mt-1">Capture expert knowledge and build emergency protocols so your business runs smoothly, no matter what happens.</p>
                    </div>
                </div>
                <div className="hidden md:block">
                     <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* <!-- Foundation --> */}
                        <rect x="20" y="250" width="360" height="30" fill="hsla(var(--accent)/0.3)" />
                        <text x="200" y="270" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" className="font-headline">FOUNDATION</text>

                        {/* <!-- Pillars --> */}
                        <rect x="70" y="100" width="40" height="150" fill="hsla(var(--accent)/0.3)" />
                        <text x="90" y="180" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" className="font-headline" transform="rotate(-90 90 180)">PILLARS</text>
                        <rect x="290" y="100" width="40" height="150" fill="hsla(var(--accent)/0.3)" />
                        <text x="310" y="180" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" className="font-headline" transform="rotate(-90 310 180)">PILLARS</text>
                        
                        {/* <!-- Roof --> */}
                        <polygon points="10,100 200,30 390,100" fill="hsla(var(--accent)/0.3)" />
                        <text x="200" y="80" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" className="font-headline">ROOF</text>

                        {/* <!-- Dashed lines --> */}
                        <line x1="150" y1="250" x2="150" y2="100" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="250" y1="250" x2="250" y2="100" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="4 4" />

                        {/* <!-- Labels --> */}
                        <text x="200" y="190" textAnchor="middle" fill="hsl(var(--accent))" fontSize="14" className="font-bold font-headline">OPERATIONAL</text>
                        <text x="200" y="210" textAnchor="middle" fill="hsl(var(--accent))" fontSize="14" className="font-bold font-headline">EXCELLENCE</text>
                    </svg>
                </div>
            </div>
        </div>
    </SectionWrapper>
);


export default function TempDesignPreviewPage() {
  const sections = [
    { id: "option-1", title: "Anatomy of Failure", component: <AnatomyOfFailure /> },
    { id: "option-2", title: "The 'What-If' Playbook", component: <WhatIfPlaybook /> },
    { id: "option-3", title: "Manager as Coach", component: <ManagerAsCoachSection /> },
    { id: "option-4", title: "Blueprint Metaphor", component: <Blueprint /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold sticky top-16 z-40 border-b border-yellow-400">
            <p className='font-headline'>⚠️ Design Preview Page ⚠️</p>
            <div className='flex justify-center gap-4 text-xs mt-1'>
                {sections.map(section => (
                    <a key={section.id} href={`#${section.id}`} className='underline hover:text-yellow-700'>{section.title}</a>
                ))}
            </div>
        </div>

        {sections.map(section => (
            <React.Fragment key={section.id}>
                {section.component}
            </React.Fragment>
        ))}

      </main>
      <Footer />
    </div>
  );
}
