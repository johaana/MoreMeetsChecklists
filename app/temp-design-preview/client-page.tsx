
'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BrainCircuit, FileText, Users, Zap, Frown, Smile, Mail, MessageSquare, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { motion, AnimatePresence } from "framer-motion";
import { premiumPacks } from '@/lib/premium-packs';
import { IconComponent } from '../components/icons';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { cn } from '@/lib/utils';


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

const HeroSection = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const [isClient, setIsClient] = useState(false);

     useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            setActivePainPoint(prev => {
                const currentIndex = painPointKeys.indexOf(prev);
                const nextIndex = (currentIndex + 1) % painPointKeys.length;
                return painPointKeys[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!isClient) {
      return <section className="w-full bg-background h-screen min-h-[700px]"></section>;
    }
    
    const content = painPoints[activePainPoint];

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
                            onClick={() => setActivePainPoint(key as PainPointKey)}
                        >
                            <span>{painPoints[key as PainPointKey].buttonText}</span>
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
                                onClick={() => setActivePainPoint(key as PainPointKey)}
                            >
                                <span>{painPoints[key as PainPointKey].mobileButtonText}</span>
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

const ProblemSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };
    
    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div 
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">The Anatomy of a Broken Audit Trail</h2>
                    <p className="text-lg text-muted-foreground mt-4">Your team works hard, but their efforts are invisible. Important updates and approvals are scattered across unreliable systems.</p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        { icon: <MessageSquare className="w-8 h-8" />, label: "WhatsApp & Verbal", description: "Critical updates are informal, untracked, and impossible to audit." },
                        { icon: <FileText className="w-8 h-8" />, label: "Spreadsheets", description: "Data is outdated, prone to error, and locked in disparate, hard-to-find files." },
                        { icon: <Brain className="w-8 h-8" />, label: "Institutional Memory", description: "Your best practices are unwritten, inconsistent, and walk out the door with your key people." },
                        { icon: <Mail className="w-8 h-8" />, label: "Email Chains", description: "Important decisions and approvals are buried in endless threads, creating zero visibility." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 border rounded-lg bg-secondary/50 flex flex-col items-center justify-start text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className="text-accent mb-3 p-3 bg-accent/10 rounded-full">{item.icon}</div>
                            <p className="font-bold text-base text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                 <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                 >
                     <p className="text-xl font-semibold text-primary mt-6 border-t border-b border-dashed py-4 max-w-3xl mx-auto">
                        This isn't an audit trail. It's a series of disconnected liabilities.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ChaosToControlSection = () => {
    const chartData = [
        { area: "Auditability", "The Old Way": 20, "The New Way": 95 },
        { area: "Resilience", "The Old Way": 30, "The New Way": 90 },
        { area: "Efficiency", "The Old Way": 40, "The New Way": 85 },
        { area: "Compliance", "The Old Way": 25, "The New Way": 98 },
    ];

    const chartConfig = {
        "The Old Way": {
            label: "The Old Way",
            color: "hsl(var(--destructive))",
        },
        "The New Way": {
            label: "The New Way",
            color: "hsl(var(--primary))",
        },
    } satisfies ChartConfig;

    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 px-0 sm:px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">From High Risk to High Confidence</h2>
                    <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    {/* Before */}
                    <Card className="border-destructive/50 border-2 flex flex-col bg-background/50">
                        <CardHeader>
                            <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
                            <CardDescription>Relying on memory, verbal instructions, and hope.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
                            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?" is a question of memory, not a provable fact.</span></p>
                            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire is trained by a B-player, creating another B-player.</span></p>
                            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
                            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>An auditor asks for proof, and you spend days digging through emails.</span></p>
                        </CardContent>
                    </Card>
                    {/* After */}
                    <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-5 h-5"/> The New Way: Control</CardTitle>
                            <CardDescription>A system of record that ensures excellence every time.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-foreground flex-1">
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log #4A."</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Your best performer's process is now the standard training for everyone.</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Produce a complete, verifiable audit trail for any task in seconds.</span></p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};


const SystemSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Introducing MoreMeets Standards™</h2>
        <p className="text-lg font-semibold text-muted-foreground mt-4">A library of offline, audit-ready operational standards that convert daily work into verifiable proof.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { icon: <BrainCircuit className="w-10 h-10" />, title: "Codified Expertise", description: "Knowledge doesn’t live in people—it lives in the standard." },
          { icon: <FileText className="w-10 h-10" />, title: "Audit-Ready by Design", description: "Every task is structured to create a traceable, verifiable audit trail." },
          { icon: <Zap className="w-10 h-10" />, title: "Offline & Owned", description: "Excel-based. No subscriptions, no vendor lock-in. You control the system." },
          { icon: <Users className="w-10 h-10" />, title: "People-Independent", description: "Train faster, scale safely, and reduce dependency on key individuals." }
        ].map((pillar, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <Card className="text-center p-6 h-full bg-background hover:bg-secondary/50 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-2">
                    <CardHeader className="p-0 items-center">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4 border-2 border-accent/20">
                            {pillar.icon}
                        </div>
                        <CardTitle className="text-lg font-headline">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                        <p className="text-muted-foreground text-sm">{pillar.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const StandardsSection = () => {
    const packsToShow = premiumPacks.filter(p => ['manufacturing_operations_ehs_pack', 'hotels_and_resorts', 'jewelry_and_luxury_retail'].includes(p.id));
    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Choose Your Operational Standard</h2>
                    <p className="text-lg font-semibold text-muted-foreground mt-4">Select an industry-specific implementation of MoreMeets Standards™ to get started.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {packsToShow.map(pack => (
                        <Card key={pack.id} className="flex flex-col border-2 border-primary/10 shadow-lg">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-md"><IconComponent name={pack.icon} className="w-6 h-6 text-accent" /></div>
                                    <CardTitle className="font-headline">{pack.title}</CardTitle>
                                </div>
                                <CardDescription className="pt-2">{pack.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1"></CardContent>
                            <CardFooter className="mt-auto">
                                <Button variant="default" className="w-full" asChild><Link href={`/packs/${pack.id}`}>View Standard</Link></Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button size="lg" asChild className="group" variant="link">
                        <Link href="/library">
                            Browse All Industry Standards
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

const TrustSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Professionals Choose Standards Over Software</h2>
        <p className="text-lg font-semibold text-muted-foreground mt-4">Control, ownership, and simplicity. No recurring costs, no vendor lock-in, no complex implementation.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center p-4">
          <h3 className="font-bold text-2xl font-headline mb-2 text-primary">No Recurring Cost</h3>
          <p className="text-muted-foreground">Buy it once, own it forever. Escape the endless cycle of SaaS subscriptions and per-user fees that penalize growth.</p>
        </div>
        <div className="text-center p-4 border-l border-r">
          <h3 className="font-bold text-2xl font-headline mb-2 text-primary">No Implementation Delay</h3>
          <p className="text-muted-foreground">Our standards are built in Excel—a tool your team already knows. Deploy on day one without complex training or IT overhead.</p>
        </div>
        <div className="text-center p-4">
          <h3 className="font-bold text-2xl font-headline mb-2 text-primary">No Vendor Dependency</h3>
          <p className="text-muted-foreground">You control the system. Adapt it, modify it, and scale it without being locked into a proprietary platform or vendor roadmap.</p>
        </div>
      </div>
    </div>
  </section>
);


const FinalCtaSection = () => (
    <section className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline text-primary">Adopt the Standard. Run with Confidence.</h2>
            <p className="text-muted-foreground mt-4 text-lg">Stop managing chaos. Start running a verifiable, audit-ready operation today.</p>
            <div className="flex justify-center gap-4 mt-8">
                 <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10" variant="accent">
                    <Link href="/library">
                        Browse All Standards
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
      <ProblemSection />
      <ChaosToControlSection />
      <SystemSection />
      <StandardsSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  );
}

    