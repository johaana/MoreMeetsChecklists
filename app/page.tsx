
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown, Smile, CheckCircle } from "lucide-react";
import React from 'react';
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaqSection } from "@/components/layout/faq-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { philosophyCards } from "@/lib/homepage-content";
import { IconComponent } from "@/components/icons";


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
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActivePainPoint(prev => {
                const currentIndex = painPointKeys.indexOf(prev);
                const nextIndex = (currentIndex + 1) % painPointKeys.length;
                return painPointKeys[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
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

const ValueCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left h-full">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
            <IconComponent name={icon} className="w-8 h-8 text-accent"/>
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
             <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {philosophyCards.map((card, index) => (
                    <ValueCard key={index} icon={card.icon} title={card.title}>
                        {card.children}
                    </ValueCard>
                ))}
             </div>
             <div className="md:hidden">
                 <Carousel
                    plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                    className="w-full max-w-xs sm:max-w-sm mx-auto"
                >
                  <CarouselContent>
                    {philosophyCards.map((card, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1 h-full">
                           <ValueCard icon={card.icon} title={card.title}>
                                {card.children}
                           </ValueCard>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 bg-primary/80 text-primary-foreground hover:bg-primary/90" />
                  <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 bg-primary/80 text-primary-foreground hover:bg-primary/90" />
                </Carousel>
             </div>
        </div>
    </section>
);

const ChaosToControlSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 px-0 sm:px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From High Risk to High Confidence</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* Before */}
        <Card className="border-destructive/50 border-2 flex flex-col">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
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

export default function Home() {
  return (
     <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RefinedHeroSection />
        <PhilosophySection />
        <ChaosToControlSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
