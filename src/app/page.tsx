
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, BrainCircuit, Users, FileText, CheckCircle, BookOpen, ShieldCheck, Frown, Smile } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';


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
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const [isClient, setIsClient] = useState(false);
    const content = painPoints[activePainPoint];

     useEffect(() => {
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

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);

const PhilosophySection = () => (
    <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter font-headline text-primary">Our Unshakeable Philosophy</h2>
                <p className="text-muted-foreground text-lg">
                   We believe world-class safety and compliance standards shouldn't be reserved for corporations with five-figure software budgets. We exist to break that lock.
                </p>
            </div>
             <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <ValueCard icon={<Zap className="w-8 h-8 text-accent"/>} title="One-Time Purchase, Lifetime Value">
                    No subscriptions. No recurring fees. You buy a pack once and own it forever, including all future updates. We believe in empowering you, not trapping you in a billing cycle.
                </ValueCard>
                 <ValueCard icon={<BookOpen className="w-8 h-8 text-accent"/>} title="Excel-Ready, Not SaaS-Locked">
                    We deliver our toolkits in universally accessible, fully editable Excel files. You have complete control to adapt them to your needs without being locked into proprietary software.
                </ValueCard>
                 <ValueCard icon={<ShieldCheck className="w-8 h-8 text-accent"/>} title="Globally Compliant, Locally Relevant">
                    Every checklist is mapped to global standards like ISO, HACCP, and OSHA, but built with a practical understanding of the challenges real businesses face on the ground.
                </ValueCard>
                  <ValueCard icon={<CheckCircle className="w-8 h-8 text-accent"/>} title="More Than Templates, They're Systems">
                    Free templates are generic. Our packs are comprehensive operational systems, including Trainer's Notes for on-the-job coaching, turning checklists into powerful training tools.
                </ValueCard>
             </div>
        </div>
    </section>
);


const ChaosToControlSection = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  const front = (
    <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-br from-destructive/50 via-gray-800 to-gray-900 group-hover:from-destructive/70 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_25px_theme(colors.destructive)]">
         <div className="relative w-full h-full bg-slate-900/80 rounded-[15px] p-6 flex flex-col text-white backdrop-blur-lg">
            <CardHeader className="text-center items-center p-0">
                <div className="text-red-400 group-hover:text-red-300 transition-colors"><Frown className="h-20 w-20 mb-2"/></div>
                <CardTitle className="text-red-400 font-headline text-3xl group-hover:text-red-300 transition-colors">The Old Way: Chaos</CardTitle>
                <CardDescription className="text-gray-400 text-sm mt-1">Relying on memory, verbal instructions, and hope.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-300 flex-1 mt-4 p-0">
                <p className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>Forgotten safety checks</span></p>
                <p className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>Costly new hire mistakes</span></p>
                <p className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>Knowledge walks out the door</span></p>
                 <p className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>No proof of compliance</span></p>
            </CardContent>
            <div className="p-2 text-center text-xs text-slate-400 font-semibold opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              Flip for Solution
            </div>
        </div>
    </div>
  );

   const back = (
     <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-br from-green-500/50 via-blue-900 to-slate-900 group-hover:from-green-500/70 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_25px_theme(colors.green.500)]">
         <div className="relative w-full h-full bg-slate-900/80 rounded-[15px] p-6 flex flex-col text-white backdrop-blur-lg">
            <CardHeader className="text-center items-center p-0">
                <div className="text-green-400 group-hover:text-green-300 transition-colors"><Smile className="h-20 w-20 mb-2"/></div>
                <CardTitle className="text-green-400 font-headline text-3xl group-hover:text-green-300 transition-colors">The New Way: Control</CardTitle>
                <CardDescription className="text-gray-300 text-sm mt-1">A system of record that ensures excellence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-200 flex-1 mt-4 p-0">
                <p className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>Verifiable safety logs</span></p>
                <p className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>Day-one productivity</span></p>
                <p className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>System-retained knowledge</span></p>
                <p className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>Instant audit trail</span></p>
            </CardContent>
             <div className="p-2 text-center text-xs text-slate-400 font-semibold opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              Flip Back
            </div>
        </div>
    </div>
  );


  return (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">From Chaotic Memory to Structured System</h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</p>
        </div>
         <div 
          className="group max-w-sm mx-auto cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: '1200px' }}
        >
          <motion.div
            className="relative h-full w-full"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d', height: '28rem' }}
          >
            <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden' }}>{front}</div>
            <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>{back}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">
                    Answering your key questions about how MoreMeets works.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What format are the checklists in?</AccordionTrigger>
                        <AccordionContent>
                            All our checklists are provided as fully editable Microsoft Excel (.xlsx) files. This allows you to easily customize them, add your company logo, and integrate them into your existing operational workflow without needing any special software.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is this a one-time purchase or a subscription?</AccordionTrigger>
                        <AccordionContent>
                            It is a one-time purchase. You pay once and own the checklist pack forever, including access to all future updates for that specific pack at no extra cost. There are no recurring fees or subscriptions.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-6">
                        <AccordionTrigger>We don’t need SOPs. We already have them.</AccordionTrigger>
                        <AccordionContent>
                            Internal SOPs often miss global compliance and new safety mandates. MoreMeets gives you audit-ready, professionally structured SOPs that eliminate gaps and protect you from operational and regulatory risk, no matter how good your current SOPs are.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                        <AccordionContent>
                            Due to the instant, digital nature of our products, all sales are final once the purchase is completed. We provide detailed descriptions and sample items on every pack page to help you make an informed decision. If you have any issues with your download, our support team is ready to assist immediately.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I request a checklist or pack that isn't listed?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We are constantly expanding our library based on customer needs. Please visit our Contact Us page to send your suggestion to our content team. We also offer custom SOP development services.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger>What if I have trouble with my download?</AccordionTrigger>
                        <AccordionContent>
                            Your purchase confirmation email contains your download link. If you face any issues, please contact us immediately at `more@moremeets.com` or chat with us on WhatsApp for instant support. We'll make sure you get your files.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);


export default function Home() {
  return (
     <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RefinedHeroSection />
        <PhilosophySection />
        <ChaosToControlSection />
        <ExpertiseExtractorSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
