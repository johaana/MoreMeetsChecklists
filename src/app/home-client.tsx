
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight, FileText, Layers, Shield, Users, Award, BarChart, Hospital, Factory, GraduationCap, Gem, CookingPot, Building as BuildingIcon, Zap, BrainCircuit, Mail, Loader2, CheckCircle, BadgePercent, History, Download, Globe, AlertTriangle } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { premiumPacks, type PremiumPack } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { useIsMobile } from "@/hooks/use-mobile";
import { blogPosts } from "@/lib/blog-posts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { subscribeToBlog } from "@/app/blog/actions";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";


const painPoints = {
  error: {
    title: `"Are our operations globally compliant & audit-ready?"`,
    description: 'Even your best people make mistakes under pressure. We provide globally compliant checklists that install a firewall against error and ensure you are audit-ready, every single day.',
    buttonText: 'Eliminate Errors',
    mobileButtonText: 'Errors'
  },
  resilience: {
    title: `"Is your team's knowledge a liability or a corporate asset?"`,
    description: "Your process isn't a process if it only exists in one person's head. We help you codify that expertise into a permanent, verifiable corporate asset, building true operational resilience.",
    buttonText: 'Build Resilience',
    mobileButtonText: 'Resilience'
  },
  onboarding: {
    title: `"How can new hires be productive & compliant from Day 1?"`,
    description: "Accelerate your onboarding with playbooks for faster training. Our system acts as a live training manual, making every new hire competent and compliant from Day 1.",
    buttonText: 'Onboard Faster',
    mobileButtonText: 'Train'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const RefinedHeroSection = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const isMobile = useIsMobile();
    const [isClient, setIsClient] = useState(false);
    const content = painPoints[activePainPoint];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
      return <section className="w-full bg-background h-screen min-h-[700px]"></section>;
    }

    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center text-white overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Desktop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent z-10" />

            {/* Mobile Content Block Wrapper */}
             <div className={cn(
              "container px-4 md:px-6 relative z-20 w-full h-full flex flex-col",
              "md:justify-center justify-end pb-12"
            )}>
              {/* Desktop Content */}
              <div className="hidden md:block max-w-2xl space-y-6">
                <div className="space-y-4 min-h-[14rem] flex flex-col justify-center [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
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
                  <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5">
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
                                "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                                "whitespace-normal leading-tight flex items-center text-center",
                                activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                            )}
                            onClick={() => setActivePainPoint(key)}
                        >
                            <span>{isMobile ? painPoints[key].mobileButtonText : painPoints[key].buttonText}</span>
                        </Button>
                        ))}
                    </div>
                </div>
                <div className="pt-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                    <h2 className="text-lg font-semibold text-accent">MoreMeets: Your Playbook for Operational Excellence.</h2>
                </div>
                <div className="pt-2">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/packs">
                        Explore All Packages
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </div>

              {/* Mobile Content Block */}
              <div className="md:hidden w-full bg-black/60 backdrop-blur-sm rounded-t-2xl p-4 border-t border-white/20 space-y-3 text-center items-center flex flex-col">
                <div className='max-w-md space-y-3'>
                    <AnimatePresence mode="wait">
                      <motion.div
                      key={activePainPoint}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      >
                      <h1 className="text-lg font-extrabold font-headline tracking-tighter text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                          {content.title}
                      </h1>
                      <p className="text-xs text-white/90 max-w-xl mt-1 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                          {content.description}
                      </p>
                      </motion.div>
                  </AnimatePresence>
                    <div className="relative flex flex-col rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1 w-full">
                        <div className="flex w-full">
                            <motion.div
                                className="absolute top-1 left-1 bottom-1 w-1/3 bg-white/90 rounded-lg shadow-sm"
                                initial={false}
                                animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                            {painPointKeys.map((key) => (
                            <Button
                                key={key}
                                variant="ghost"
                                className={cn(
                                    "relative z-10 flex-1 justify-center text-sm py-2 transition-colors duration-300 hover:bg-transparent px-1 h-10",
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
                     <div className="pt-1 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                        <h2 className="text-xs font-semibold text-accent">MoreMeets: Your Playbook for Operational Excellence.</h2>
                    </div>
                    <div className="pt-1">
                        <Button size="lg" asChild className="group text-base py-4 px-6 shadow-lg w-full" variant="accent">
                            <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
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
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From Chaotic Memory to a Structured System</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your fragile, person-dependent processes into a reliable, verifiable system of record.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Before */}
        <Card className="border-destructive/50 border-2">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2"><Zap className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription>Relying on memory, verbal instructions, and hope.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
             <div className="rounded-lg overflow-hidden mb-4">
              <Image 
                  src="https://i.postimg.cc/28RJCB3L/stressed-out-team-small.webp"
                  alt="Stressed team in a chaotic office"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
              />
            </div>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone remember to check the fire exits?"</span></p>
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
              <div className="rounded-lg overflow-hidden mb-4">
              <Image 
                  src="https://i.postimg.cc/T1X9vgQR/happy-male-entrepreneur-reading-email-laptop-while-working-office.jpg"
                  alt="Calm, happy professional in control of their work"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
              />
            </div>
             <p className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log."</span></p>
            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires are productive and compliant from day one.</span></p>
            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making the operation resilient.</span></p>
            <p className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span>A timestamped, verifiable audit trail for every critical task.</span></p>
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
      <Card className="max-w-4xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center bg-background shadow-lg border">
        <div className="space-y-4">
          <Badge variant="accent">FOR MANAGERS</Badge>
          <h2 className="text-2xl md:text-3xl font-bold font-headline">Turn Every Manager into an Expert Coach</h2>
          <p className="text-muted-foreground">
            Our 'Manager's Edition' packs can include an optional{' '}
            <strong className="text-foreground">"Trainer's Notes"</strong>{' '}
            column. It provides your managers with talking points, real-world examples, and coaching questions for every single task, transforming routine supervision into powerful on-the-job training.
          </p>
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
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>The standard MoreMeets packs ensure tasks are done correctly. The <strong>Manager's Coaching Edition</strong> ensures your team understands <em>why</em> they're doing them. This premium add-on is a force multiplier for your leadership team.</p>
                <h4 className="font-semibold text-foreground">How it Works: The "Trainer's Notes" Column</h4>
                <p>For each critical task in a checklist, we can add a "Trainer's Notes" column visible only in the Manager's master file. This column contains: </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span><strong>Coaching Questions:</strong> Instead of asking "Did you do it?", your manager can ask "What's the biggest risk if we forget this step?" This promotes critical thinking.</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span><strong>Real-World Examples:</strong> We link tasks to real, costly business disasters. For a food safety check, the note might say: *"Explain the Chipotle E. coli outbreak to reinforce why this isn't just bureaucracy."*</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-1"/><span><strong>Best Practice Demos:</strong> Notes on what "good" looks like, helping managers train for excellence, not just completion.</span></li>
                </ul>
                <h4 className="mt-4 font-semibold text-foreground">The Result:</h4>
                <p>You're not just buying a checklist; you're investing in a scalable training system. You turn every routine check into a micro-training session, create more engaged employees, and build a more resilient, intelligent operation.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="rounded-lg overflow-hidden h-64 md:h-full">
             <Image 
                src="https://i.postimg.cc/dVP6Kjf5/businessman-businesswoman-cafe-1157-14643.avif"
                alt="Manager coaching an employee in a modern cafe setting"
                width={500}
                height={400}
                className="object-cover w-full h-full"
            />
        </div>
      </Card>
    </div>
  </section>
);


function SubscriptionForm() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await subscribeToBlog({ email });

    if (result.success) {
      setSubmitted(true);
       toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to the debrief.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: result.message,
      });
    }
    setLoading(false);
  };

  if (!isClient) {
    return (
       <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md h-10">
          <div className="bg-gray-200 animate-pulse rounded-md w-2/3"></div>
          <div className="bg-gray-200 animate-pulse rounded-md w-1/3"></div>
      </div>
    )
  }

  if (submitted) {
    return (
        <div className="flex items-center justify-center p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 dark:bg-green-900/50 dark:text-green-200 dark:border-green-800">
            <CheckCircle className="w-5 h-5 mr-3" />
            <p className="font-semibold">Thank you for subscribing!</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Subscribe Now
      </Button>
    </form>
  );
}

function PackList({ packs, title, description }: { packs: PremiumPack[], title: string, description: string }) {
    const isMobile = useIsMobile();
    
    const PackCard = ({ pack }: { pack: PremiumPack }) => {
        const totalChecklists = pack.checklists.length;
        const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);

        return (
            <Card className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardHeader className="p-6 relative">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {pack.badgeText && (
                            <Badge variant={pack.badgeVariant || 'default'} className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 w-fit">
                                <Star className="w-4 h-4" /> {pack.badgeText}
                            </Badge>
                        )}
                        <Badge variant="secondary">{totalChecklists} Checklists</Badge>
                        <Badge variant="secondary">{totalTasks}+ Tasks</Badge>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                            {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                        </div>
                        <div className="flex-1">
                            <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                            <CardDescription className="mt-1 text-sm md:text-base">{pack.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 flex-1">
                    <h3 className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        {pack.sampleItems.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="h-4 w-4 mr-2 mt-1 shrink-0 text-accent">{item.icon}</span>
                                <span dangerouslySetInnerHTML={{ __html: item.text.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="p-6 pt-2 mt-auto">
                    <Button asChild className="w-full font-bold" variant="default">
                        <Link href={`/packs/${pack.id}`}>
                            View Full Checklist & Purchase
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        );
    };

    return (
        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        {title}
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        {description}
                    </p>
                </div>

                {isMobile ? (
                    <Carousel 
                        opts={{ align: "start", loop: true }}
                        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                        className="w-full max-w-[calc(100%-2rem)] mx-auto"
                    >
                        <CarouselContent>
                            {packs.map((pack) => (
                                <CarouselItem key={pack.id} className="p-2">
                                    <div className="p-1 h-full">
                                        <PackCard pack={pack} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-accent border-accent -left-4" />
                        <CarouselNext className="text-accent border-accent -right-4" />
                    </Carousel>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packs.map((pack) => (
                            <PackCard key={pack.id} pack={pack} />
                        ))}
                    </div>
                )}
                 <div className="text-center mt-16">
                    <Button asChild size="lg" variant="outline" className="group border-primary/50">
                        <Link href="/packs">
                            View All Packages
                             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

const FeaturedBlogPostsSection = () => {
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Decoding the Black Box
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
            Recovering the critical data from catastrophic failures to make your business safer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestPosts.map(post => (
            <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    {post.imageUrl && (
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={600}
                            height={340}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    )}
                </Link>
                <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0,2).map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <CardTitle className="text-xl font-headline">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="secondary" size="sm">
                      <Link href={`/blog/${post.slug}`}>Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="group">
                <Link href="/blog">
                    Read All Articles
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};


export default function HomeClientPage() {
  const featuredPacks = premiumPacks.filter(p => p.bestseller);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        
        <RefinedHeroSection />

         <section className="w-full py-12 border-y">
            <div className="container px-2 md:px-6 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground">MoreMeets: More Standards. More Compliance. More Consistency.</h3>
            </div>
        </section>

        <ChaosToControlSection />
        <ExpertiseExtractorSection />
        <ManagerAsCoachSection />

        <React.Suspense fallback={<div>Loading packs...</div>}>
            <PackList 
                packs={featuredPacks}
                title="Bestselling Checklist Packs"
                description="Get instant access to expert-crafted operational SOPs trusted by industry leaders. One-time purchase, lifetime updates."
            />
        </React.Suspense>
        
        <FeaturedBlogPostsSection />

         <section className="w-full py-12 md:py-24">
            <div className="container px-2 md:px-6">
                 <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 p-8 border rounded-2xl bg-secondary/50">
                    <h3 className="font-bold text-center text-2xl font-headline text-primary">The Most Valuable Newsletter in Operations.</h3>
                    <p className="text-center text-muted-foreground">One insight per edition that could save your company millions. Straight to your inbox.</p>
                    <SubscriptionForm />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
