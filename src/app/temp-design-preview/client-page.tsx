
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, Zap, Users, Shield, BrainCircuit, FileText, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from "framer-motion";

const painPoints = {
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    image: 'https://i.postimg.cc/DmmdFvSV/The-Oberoi-Udaivilas-Hotel-Udaipur.jpg'
  },
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
    image: 'https://i.postimg.cc/FRWPx2PW/hillsborough-disaster2.webp'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    image: 'https://i.postimg.cc/gJPDRbTR/Best-Corporate-Photographer-India-Samsung-Product-Launch-Event-Photographer-Delhi-NCR-24-jpg.webp'
  }
};

type PainPointKey = keyof typeof painPoints;

// --- Section 1: The Interactive "Pain Point" Hero ---
const InteractiveHeroSection = () => {
  const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('resilience');
  const content = painPoints[activePainPoint];

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover transition-all duration-500 ease-in-out transform scale-105"
          key={content.image}
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline drop-shadow-lg transition-all duration-300">
            {content.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
            {(Object.keys(painPoints) as PainPointKey[]).map((key) => (
              <Button
                key={key}
                variant={activePainPoint === key ? 'accent' : 'outline'}
                className={cn(
                  "bg-transparent border-2 text-white transition-all duration-300",
                   activePainPoint === key
                     ? 'border-accent bg-accent/20'
                     : 'border-white/50 hover:bg-white/10 hover:border-white'
                )}
                onClick={() => setActivePainPoint(key)}
              >
                {key === 'resilience' && 'Build Resilience'}
                {key === 'error' && 'Eliminate Errors'}
                {key === 'onboarding' && 'Accelerate Onboarding'}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Mobile Hero Demo Component ---
const MobileHeroDemo = () => {
  const rotatingWords = [
    "Operational Resilience.",
    "Error-Free Compliance.",
    "Accelerated Onboarding.",
  ];
  const [currentWord, setCurrentWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord(prev => {
        const currentIndex = rotatingWords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % rotatingWords.length;
        return rotatingWords[nextIndex];
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full relative text-white py-16 text-left min-h-[60vh] flex items-center">
       <div className="absolute inset-0 z-0">
        <Image
          src="https://i.postimg.cc/T1X9vgQR/happy-male-entrepreneur-reading-email-laptop-while-working-office.jpg"
          alt="Professional working in an office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="container px-4 relative z-10">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight">
          The Professional Standard for
          <br />
          <span className="text-accent inline-block h-12">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="text-lg text-white/90 max-w-xl mt-4">
          For leaders who can't be everywhere, we provide the framework to standardize operational excellence. Our checklists ensure global compliance and deliver auditable results at scale.
        </p>
        <div className="pt-8">
          <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
            <a href="/packs">
              Explore All Packages
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};


// --- Section 2: "From Chaos to Control" Visualization ---
const ChaosToControlSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From Chaotic Memory to Structured System</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Before */}
        <Card className="border-destructive/50 border-2">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2"><Zap className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?"</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire makes a costly mistake on their first day.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>No audit trail to prove compliance during an inspection.</span></p>
          </CardContent>
        </Card>
        {/* After */}
        <Card className="border-primary/50 border-2 bg-background shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2"><Shield className="w-5 h-5"/> The New Way: Control</CardTitle>
            <CardDescription>A system of record that ensures excellence every time.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground">
             <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log."</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires are productive and compliant from day one.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1"/><span>A timestamped, verifiable audit trail for every critical task.</span></p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// --- Section 3: "Expertise Extractor" Infographic ---
const ExpertiseExtractorSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Democratize Your Expertise</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">Our system extracts the wisdom of your best people and distributes it across your entire team, creating a consistent standard of excellence.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-center text-center max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center p-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20">
            <BrainCircuit className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline">1. Codify Expertise</h3>
          <p className="text-sm text-muted-foreground">The unwritten knowledge of your best manager is captured in a structured, actionable format.</p>
        </div>
        {/* Arrow */}
        <div className="flex justify-center">
            <ArrowRight className="w-12 h-12 text-primary/50 hidden md:block" />
             <ArrowRight className="w-12 h-12 text-primary/50 rotate-90 md:hidden" />
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center p-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4 border-2 border-accent/20">
            <FileText className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline text-accent">2. Distribute the Playbook</h3>
          <p className="text-sm text-muted-foreground">This knowledge becomes a "MoreMeets Pack"—an interactive system that's instantly available to everyone.</p>
        </div>
      </div>
        {/* Arrow Down */}
        <div className="flex justify-center my-4">
             <ArrowRight className="w-12 h-12 text-primary/50 rotate-90" />
        </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center p-4 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-600 mb-4 border-2 border-green-500/20">
            <Users className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline text-green-600">3. Empower the Entire Team</h3>
          <p className="text-sm text-muted-foreground">New hires and existing staff can now perform critical tasks with the consistency and rigor of your best expert, reducing onboarding time and eliminating errors.</p>
        </div>
    </div>
  </section>
);


// --- Section 4: "Manager as Coach" Feature Callout ---
const ManagerAsCoachSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <Card className="max-w-4xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center bg-background shadow-lg">
        <div className="space-y-4">
          <Badge variant="accent">FOR MANAGERS</Badge>
          <h2 className="text-2xl md:text-3xl font-bold font-headline">Turn Every Manager into an Expert Coach</h2>
          <p className="text-muted-foreground">Our 'Manager's Edition' packs include an optional **"Trainer's Notes"** column. It provides your managers with talking points, real-world examples, and coaching questions for every single task, transforming routine supervision into powerful on-the-job training.</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Learn More About Coaching Packs <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">The Manager's Coaching Playbook</DialogTitle>
                <DialogDescription>
                  Go beyond compliance. Build a culture of excellence.
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm max-w-none">
                <p>The standard MoreMeets packs ensure tasks are done correctly. The **Manager's Coaching Edition** ensures your team understands *why* they're doing them. This premium add-on is a force multiplier for your leadership team.</p>
                <h4>How it Works: The "Trainer's Notes" Column</h4>
                <p>For each critical task in a checklist, we've added a "Trainer's Notes" column visible only in the Manager's master file. This column contains: </p>
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
        <div className="rounded-lg bg-secondary/50 p-4 border border-dashed">
          <p className="text-sm font-semibold">Example: "Trainer's Notes" Column</p>
          <div className="mt-2 space-y-2">
            <div className="bg-background p-2 rounded-md">
                <p className="font-mono text-xs">**Task:** Check for allergen cross-contamination.</p>
                <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Trainer's Note:** "Show the new hire the separate color-coded boards. Explain the Pret a Manger case study to reinforce why a simple mistake here can be fatal and business-ending."</p>
            </div>
            <div className="bg-background p-2 rounded-md">
                <p className="font-mono text-xs">**Task:** Verify LOTO on machine #3.</p>
                <p className="font-mono text-xs mt-1 text-accent-foreground bg-accent/20 p-2 rounded">**Trainer's Note:** "Ask the employee: 'What is the biggest risk if we forget this step?' Ensure they understand this prevents someone from being crushed."</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);


export default function TempDesignClientPage() {
    return (
        <main className="flex-1">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                <p>⚠️ This is a temporary design preview page. ⚠️</p>
            </div>
            <div className="md:hidden">
                <MobileHeroDemo />
            </div>
             <div className="hidden md:block">
                <InteractiveHeroSection />
            </div>
            <ChaosToControlSection />
            <ExpertiseExtractorSection />
            <ManagerAsCoachSection />
        </main>
    );
}
