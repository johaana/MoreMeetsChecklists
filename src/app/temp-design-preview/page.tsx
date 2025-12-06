

'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, Frown, Smile, XCircle, CheckCircle, LifeBuoy, BrainCircuit, FileText, Users, Zap, Shield, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { motion, AnimatePresence } from "framer-motion";
import { FaqSection } from '@/components/layout/faq-section';
import { TestimonialsSection } from '@/components/layout/testimonials-section';


// --- Section 0: The Hero (Copied from original homepage) ---
const painPoints = {
  error: {
      title: `"World-class compliance used to cost a fortune. We fixed that."`,
      description: "Achieve world-class compliance without the enterprise price tag. Our audit-ready, globally-compliant SOPs are available for instant download—no subscriptions, no hidden fees. We believe operational excellence is a right, not a luxury.",
      buttonText: 'Global Compliance',
      mobileButtonText: 'Compliance'
  },
  resilience: {
      title: `"Stop losing knowledge every time someone quits."`,
      description: 'Turn people-dependent processes into a permanent, scalable system.',
      buttonText: 'Build Resilience',
      mobileButtonText: 'Resilience'
  },
  onboarding: {
      title: `"Training shouldn’t depend on who’s available that day."`,
      description: 'Our digital playbooks onboard new hires faster — no babysitting required.',
      buttonText: 'Onboard Faster',
      mobileButtonText: 'Train'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const RefinedHeroSection = () => {
    const [activePainPoint, setActivePainPoint] = React.useState<PainPointKey>('error');
    const [isClient, setIsClient] = React.useState(false);
    const content = painPoints[activePainPoint];

     React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
      return <section className="w-full bg-background h-screen min-h-[700px]"></section>;
    }

    return (
        <section className="relative w-full h-screen min-h-[700px] flex text-white overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent z-10" />
            
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 md:hidden" />

            <div className={cn("container px-4 md:px-6 relative z-20 w-full h-full flex flex-col justify-end pb-12 md:justify-center md:pb-0")}>
              
              {/* Desktop View */}
              <div className="hidden md:block max-w-2xl">
                <div className="space-y-4 min-h-[20rem] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={activePainPoint}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-white">
                            {content.title}
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl mt-4">
                            {content.description}
                        </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                  <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 mt-6 max-w-lg">
                    <div className="flex w-full">
                          <motion.div
                            className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-white/90 rounded-lg shadow-sm"
                            initial={false}
                            animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        {painPointKeys.map((key) => (
                        <Button
                            key={key}
                            variant="ghost"
                            className={cn(
                                "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                                "whitespace-normal leading-tight flex items-center text-center",
                                activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                            )}
                            onClick={() => setActivePainPoint(key)}
                        >
                            <span>{painPoints[key].buttonText}</span>
                        </Button>
                        ))}
                    </div>
                </div>
                <div className="pt-6">
                    <h2 className="text-lg font-semibold text-accent">MoreMeets: Your Playbook for Operational Excellence.</h2>
                </div>
                <div className="pt-4">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/library">
                        Explore The SOP Library
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden text-left items-start flex flex-col relative z-10">
                 <div className="w-full max-w-xl space-y-6 relative z-10">
                    <div className="min-h-[14rem] flex items-end">
                       <AnimatePresence mode="wait">
                            <motion.div
                            key={activePainPoint}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                            >
                                <h1 className="text-3xl font-extrabold font-headline tracking-tighter text-white">
                                    {content.title}
                                </h1>
                                <p className="text-base text-white/90 max-w-xl mt-3">
                                    {content.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={cn("relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 w-full")}>
                        <div className="flex w-full">
                            <motion.div
                                className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-white/90 rounded-lg shadow-sm"
                                initial={false}
                                animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                            {painPointKeys.map((key) => (
                            <Button
                                key={key}
                                variant="ghost"
                                className={cn(
                                    "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-12",
                                    "whitespace-normal leading-tight flex items-center text-center",
                                    activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                                )}
                                onClick={() => setActivePainPoint(key)}
                            >
                                <span>{painPoints[key].mobileButtonText}</span>
                            </Button>
                            ))}
                        </div>
                    </div>
                    <div className="pt-2">
                        <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg w-full" variant="accent">
                            <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
              </div>
            </div>
        </section>
    );
};


const SectionWrapper = ({ title, description, children, bg = "bg-background", id }: { id: string, title: string | React.ReactNode, description: string, children: React.ReactNode, bg?: string }) => (
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


// --- Section 1: Anatomy of Failure ---
const AnatomyOfFailure = () => (
    <SectionWrapper 
        id="why-sops-matter"
        // --- HEADLINE OPTIONS ---
        // 1. Why Most SOPs Fail (And Ours Don't)
        // 2. The Anatomy of a Weak SOP vs. The MoreMeets Standard
        // 3. Your Checklists Are Broken. Here's the Fix.
        // 4. From a Dust-Covered Document to a Living System
        // 5. The Difference Between a Checklist and a System
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
                     <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Globally Compliant Framework:</strong> A researched, actionable system built on ISO, OSHA, and HACCP principles that your team can adapt and use from day one.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Built-in Accountability:</strong> Every task has a defined `Role`, `Frequency`, `Proof of Completion`, and `Risk Level`.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Risk Intelligence Included:</strong> The "Consequence of Failure" column explains *why* a task is critical, turning your team from task-doers into risk managers.</span></p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);


// --- Section 2: The "Blueprint" for Excellence ---
const Blueprint = () => (
    <SectionWrapper
        id="blueprint"
        // --- HEADLINE OPTIONS ---
        // 1. Your Blueprint for a Resilient Business
        // 2. Building a Bulletproof Operation, Block by Block
        // 3. The Architecture of Operational Excellence
        // 4. Stop Improvising. Start Building.
        // 5. The Three Pillars of a World-Class Operation
        title="Your Blueprint for Operational Excellence"
        description="You wouldn't build a skyscraper without architectural plans. Why build your operations on memory and guesswork? Our checklists are the professional blueprint for a world-class operation."
    >
        <div className="max-w-4xl mx-auto p-4 md:p-8 rounded-lg border-2 border-primary/20 bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                <div className="space-y-6">
                    <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-primary">The Foundation</h3>
                        <p className="text-sm text-muted-foreground mt-1">Meet global standards (ISO, OSHA, HACCP) and stay audit-ready from day one.</p>
                    </div>
                     <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-primary">The Pillars</h3>
                        <p className="text-sm text-muted-foreground mt-1">Standardize tasks to improve efficiency and use the checklists as a day-one playbook for new hires.</p>
                    </div>
                     <div className="p-4 border-l-4 border-accent">
                        <h3 className="font-bold font-headline text-lg text-primary">The Roof</h3>
                        <p className="text-sm text-muted-foreground mt-1">Capture expert knowledge and build emergency protocols so your business is resilient, no matter what happens.</p>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 flex items-center justify-center">
                     <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-sm">
                        {/* <!-- Foundation --> */}
                        <rect x="20" y="250" width="360" height="30" fill="hsla(var(--primary)/0.6)" />
                        <text x="200" y="270" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14" className="font-headline">Compliance</text>

                        {/* <!-- Pillars --> */}
                        <rect x="70" y="100" width="40" height="150" fill="hsla(var(--primary)/0.6)" />
                         <text x="90" y="180" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14" className="font-headline" transform="rotate(-90 90 180)">Efficiency</text>

                        <rect x="290" y="100" width="40" height="150" fill="hsla(var(--primary)/0.6)" />
                        <text x="310" y="180" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14" className="font-headline" transform="rotate(-90 310 180)">Training</text>
                        
                        {/* <!-- Roof --> */}
                        <polygon points="10,100 200,30 390,100" fill="hsla(var(--primary)/0.6)" />
                        <text x="200" y="80" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="14" className="font-headline">Resilience</text>

                        {/* <!-- Center text --> */}
                        <text x="200" y="180" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" className="font-bold font-headline">OPERATIONAL</text>
                        <text x="200" y="200" textAnchor="middle" fill="hsl(var(--primary))" fontSize="16" className="font-bold font-headline">EXCELLENCE</text>
                    </svg>
                </div>
            </div>
        </div>
    </SectionWrapper>
);


// --- Section 3: Manager as Coach ---
const ManagerAsCoachSection = () => (
    <SectionWrapper 
        id="manager-as-coach"
        // --- HEADLINE OPTIONS ---
        // 1. Turn Every Manager into an Expert Coach
        // 2. We Built Risk Intelligence Into Every Task
        // 3. From 'What to Do' to 'Why It Matters'
        // 4. The Difference Between a Task-Doer and a Risk Manager
        // 5. More Than Checklists: A Built-in Training System
        title="Turn Every Manager into an Expert Coach"
        description="Our checklists go beyond simple tasks. They include context that explains the 'why' behind the 'what', empowering your managers to turn every check into a powerful on-the-job training moment."
        bg="bg-secondary/30"
    >
        <Card className="max-w-4xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center bg-background shadow-lg">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">From 'What' to 'Why'</h2>
                <p className="text-muted-foreground">The "Consequence of Failure" column provides your managers with talking points and real-world examples. This transforms routine supervision into powerful, context-rich training that builds a smarter, more resilient team.</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>See an Example <ArrowRight className="w-4 h-4 ml-2" /></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle className="font-headline text-2xl">The Coaching Playbook</DialogTitle>
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


export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RefinedHeroSection />
        <AnatomyOfFailure />
        <Blueprint />
        <ManagerAsCoachSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
