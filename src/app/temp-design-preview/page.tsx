
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
import { AnimatePresence, motion } from 'framer-motion';

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
--- OPTION 1: The "Anatomy of Failure" Frame ---
This section directly contrasts the common state of SOPs (chaotic, forgotten documents) with the MoreMeets solution (a living, actionable system). It's a classic marketing approach that clearly establishes the problem before presenting your product as the definitive solution.

--- HEADLINE OPTIONS FOR THIS SECTION ---
// 1. (Problem/Solution Focus): Why Most SOPs Fail (And Ours Don't)
// 2. (Value Focus): The Anatomy of Operational Excellence
// 3. (Direct/Authoritative): The Difference Between a Document and a System
// 4. (Fear/Risk Focus): Is Your SOP Library a Liability in Disguise?
// 5. (Metaphorical Focus): Stop Collecting Dust: Build a Living Operations Playbook
*/
const AnatomyOfFailure = () => (
    <SectionWrapper 
        id="option-1"
        title="Why Most SOPs Fail (And Ours Don't)" 
        description="The problem isn't having SOPs; it's having SOPs that are incomplete, unactionable, and disconnected from daily execution. Here's the difference."
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
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>No Accountability:</strong> Tasks are forgotten because there's no clear owner or proof of completion required.</span></p>
                    <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Not Audit-Ready:</strong> Lacks the structure needed to satisfy a real compliance or safety auditor.</span></p>
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

/*
--- OPTION 2: The "What-If" Playbook Frame ---
This section is designed to create an emotional connection by tapping into the anxieties of a business owner or manager. It poses common "what-if" scenarios and presents MoreMeets as the answer, providing peace of mind.

--- HEADLINE OPTIONS FOR THIS SECTION ---
// 1. (Fear/Risk Focus): What's Your Plan for the Inevitable?
// 2. (Value Focus): Your Playbook for Operational Resilience
// 3. (Problem/Solution Focus): From 'What if?' to 'What's Next?'
// 4. (Direct/Authoritative Focus): The Three Scenarios That Sink Businesses
// 5. (Metaphorical Focus): Your Insurance Policy Against Chaos
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
--- OPTION 3: The "Feature Spotlight" Frame (Manager as Coach) ---
This section highlights a unique, tangible feature—the "Trainer's Notes" and "Consequence of Failure" columns. It's designed to showcase a specific product differentiator that competitors likely don't have.

--- HEADLINE OPTIONS FOR THIS SECTION ---
// 1. (Value Focus): Turn Every Manager into an Expert Coach
// 2. (Problem/Solution Focus): Stop Asking 'If'. Start Asking 'Why'.
// 3. (Direct/Authoritative Focus): The Feature That Builds a Culture of Ownership
// 4. (Fear/Risk Focus): Your Team Follows the Checklist. But Do They Understand the Risk?
// 5. (Metaphorical Focus): Beyond the Checkbox: Building Operational Intelligence
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
--- OPTION 4: The "Metaphor" Frame (Blueprint) ---
This section uses the powerful and easily understood metaphor of a "blueprint" to position your SOPs as the essential, foundational plan for building a successful and stable operation.

--- HEADLINE OPTIONS FOR THIS SECTION ---
// 1. (Metaphorical Focus): Your Blueprint for a Resilient Business
// 2. (Direct/Authoritative Focus): Build Your Operation on a Professional Framework
// 3. (Value Focus): The Architecture of Operational Excellence
// 4. (Problem/Solution Focus): Stop Guessing. Start Building with a Plan.
// 5. (Fear/Risk Focus): Are You Building on a Foundation of Sand?
*/
const Blueprint = () => (
    <SectionWrapper
        id="option-4"
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
                    <Zap className="w-10 h-10" />
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


/*
--- OPTION 5: The "System Breakdown" Frame ---
This section is for the detail-oriented buyer. It breaks down the components of a MoreMeets checklist, explaining exactly *what* makes it a superior system compared to a simple list of tasks.

--- HEADLINE OPTIONS FOR THIS SECTION ---
// 1. (Value Focus): Engineered for Execution
// 2. (Direct/Authoritative Focus): The MoreMeets System: A Breakdown
// 3. (Problem/Solution Focus): From Vague Idea to Verifiable Action
// 4. (Fear/Risk Focus): Is Your SOP Missing These Critical Components?
// 5. (Metaphorical Focus): More Than a Checklist. It's a Control Panel.
*/
const TheSystem = () => (
    <SectionWrapper 
        id="option-5"
        title="More Than a Template. It's a System."
        description="Generic templates are vague. A MoreMeets pack is a complete, interconnected system for operational control, built on four key components."
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-accent shrink-0" />
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
                        <BrainCircuit className="w-8 h-8 text-accent shrink-0" />
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
                        <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
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


export default function TempDesignPreviewPage() {
  const sections = [
    { id: "option-1", title: "Option 1: Problem/Solution", component: <AnatomyOfFailure /> },
    { id: "option-2", title: "Option 2: 'What-If' Playbook", component: <WhatIfPlaybook /> },
    { id: "option-3", title: "Option 3: Feature Spotlight", component: <ManagerAsCoachSection /> },
    { id: "option-4", title: "Option 4: 'Blueprint' Metaphor", component: <Blueprint /> },
    { id: "option-5", title: "Option 5: System Breakdown", component: <TheSystem /> },
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

