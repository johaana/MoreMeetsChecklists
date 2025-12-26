
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown, Smile, CheckCircle, BrainCircuit, FileText, Users, ShieldCheck, X, Server, UserCheck, HardHat, Hospital, Building2, Store, Check, Zap, BookOpen } from "lucide-react";
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { philosophyCards as rawPhilosophyCards } from "@/lib/homepage-content";
import { IconComponent } from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ReactSlider from 'react-slider';
import { Switch } from "@/components/ui/switch";

const philosophyCards = rawPhilosophyCards.map(card => ({...card, icon: <IconComponent name={card.icon} className="w-8 h-8 text-accent" />}));


const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white text-center overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 container px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter text-white drop-shadow-2xl">
                    Stop Running Your Operations on Hope.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                    Turn your manual, person-dependent processes into a standardized, audit-ready system that drives consistency and protects your brand.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild className="group text-lg py-7 px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/library">
                            Explore The SOP Library
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left h-full">
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


const radialChartData = [
  { name: 'Compliance Gaps', value: 85, fill: 'hsl(var(--destructive))' },
  { name: 'Onboarding Time', value: 70, fill: 'hsl(var(--destructive))' },
  { name: 'Incident Rate', value: 60, fill: 'hsl(var(--destructive))' },
];

const OperationalDragSection = () => {
    const [isClient, setIsClient] = React.useState(false);
    React.useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
             <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">The Anatomy of Operational Drag</h2>
                        <p className="text-muted-foreground mt-2 text-base md:text-lg">Unseen risks in your daily workflow are actively slowing you down and costing you money. Your operation is likely exposed to:</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                        {[...Array(3)].map((_, index) => (
                             <Card key={index} className="text-center flex flex-col items-center justify-start p-4 border-2 h-[250px]">
                                <div className="w-full h-[140px] bg-secondary/50 animate-pulse rounded-md" />
                                <div className="h-6 w-3/4 bg-secondary/50 animate-pulse rounded-md mt-4" />
                                <div className="h-4 w-1/2 bg-secondary/50 animate-pulse rounded-md mt-2" />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
    return (
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">The Anatomy of Operational Drag</h2>
            <p className="text-muted-foreground mt-2 text-base md:text-lg">Unseen risks in your daily workflow are actively slowing you down and costing you money. Your operation is likely exposed to:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {radialChartData.map((item, index) => (
              <Card key={index} className="text-center flex flex-col items-center justify-start p-4 border-2">
                 <ResponsiveContainer width="100%" height={140}>
                    <RadialBarChart 
                        innerRadius="70%" 
                        outerRadius="90%" 
                        data={[item]} 
                        startAngle={90} 
                        endAngle={-270}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                        <RadialBar background dataKey='value' cornerRadius={10} angleAxisId={0} className="fill-destructive/80" />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">
                            {item.value}%
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
                <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">High probability of errors & inconsistencies.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
};


const barChartData = [
  { name: 'Auditability', 'The Old Way': 20, 'The New Way': 95 },
  { name: 'Resilience', 'The Old Way': 30, 'The New Way': 90 },
  { name: 'Efficiency', 'The Old Way': 40, 'The New Way': 85 },
  { name: 'Compliance', 'The Old Way': 25, 'The New Way': 98 },
];

const BeforeAfterChartSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From Unstructured & Unauditable to Compliant & Controlled</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">Our system delivers a quantifiable leap in operational confidence and control across your most critical business functions.</p>
      </div>
      <div className="max-w-4xl mx-auto h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barChartData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Bar dataKey="The Old Way" fill="hsl(var(--destructive) / 0.6)" radius={[4, 4, 0, 0]}>
                 <LabelList dataKey="The Old Way" position="top" fill="hsl(var(--destructive))" fontSize={12} />
            </Bar>
            <Bar dataKey="The New Way" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="The New Way" position="top" fill="hsl(var(--primary))" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

const ExpertiseExtractorSection = () => (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">From Checklist to Control System</h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">We help you create a new category of operational asset: a living, breathing system that turns tribal knowledge into a scalable, competitive advantage.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          <Card className="text-center p-6 border-2 h-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 mx-auto border-2 border-primary/20">
              <BrainCircuit className="w-10 h-10" />
            </div>
            <h3 className="font-bold font-headline text-lg">1. Codify Expertise</h3>
            <p className="text-sm text-muted-foreground mt-2">We capture the unwritten, best-in-class processes of your top performers and structure them into an actionable, digital framework.</p>
          </Card>
          <Card className="text-center p-6 border-2 border-accent/80 shadow-lg h-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4 mx-auto border-2 border-accent/20">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="font-bold font-headline text-lg text-accent">2. Distribute the Playbook</h3>
            <p className="text-sm text-muted-foreground mt-2">This knowledge becomes a "MoreMeets Pack"—a verifiable system of record, instantly accessible to everyone in your organization.</p>
          </Card>
          <Card className="text-center p-6 border-2 h-full">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-600 mb-4 mx-auto border-2 border-green-500/20">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-bold font-headline text-lg text-green-600">3. Empower the Team</h3>
            <p className="text-sm text-muted-foreground mt-2">Your entire team can now execute critical tasks with the consistency of your best expert, reducing onboarding time and eliminating costly errors.</p>
          </Card>
        </div>
      </div>
    </section>
  );

const WhoIsThisForSection = () => {
    const personas = [
        { name: "The COO / Head of Ops", icon: <Server className="w-8 h-8" />, description: "Seeking to standardize processes and gain a single source of truth across all business units." },
        { name: "The Plant / Factory Head", icon: <HardHat className="w-8 h-8" />, description: "Focused on EHS compliance, production uptime, and shop floor safety." },
        { name: "The Hotel General Manager", icon: <Building2 className="w-8 h-8" />, description: "Striving for 5-star guest experiences through flawless housekeeping, F&B, and security." },
        { name: "The Hospital Administrator", icon: <Hospital className="w-8 h-8" />, description: "Responsible for patient safety, NABH/JCI compliance, and clinical quality." },
        { name: "The Head of Retail", icon: <Store className="w-8 h-8" />, description: "Tasked with reducing shrinkage, ensuring brand consistency, and improving the customer journey." },
        { name: "The Founder / CEO", icon: <UserCheck className="w-8 h-8" />, description: "Looking to build a scalable, resilient operation that doesn't depend on any single person." }
    ]

    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Built for Leaders Who Value Control</h2>
                    <p className="text-muted-foreground mt-2 text-base md:text-lg">Our system is designed for decision-makers who understand that operational excellence is a competitive advantage.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {personas.map(persona => (
                        <Card key={persona.name} className="p-4">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    {persona.icon}
                                </div>
                                <CardTitle className="text-lg">{persona.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{persona.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


const CompetitorComparisonSection = () => {
    const comparisonData = [
        { feature: "Instant Usability", generic: true, moremeets: true, enterprise: false },
        { feature: "Audit-Ready & Compliant", generic: false, moremeets: true, enterprise: true },
        { feature: "Lifetime Updates", generic: false, moremeets: true, enterprise: false },
        { feature: "Fully Customizable (Excel)", generic: true, moremeets: true, enterprise: false },
        { feature: "No Recurring Subscription", generic: true, moremeets: true, enterprise: false },
        { feature: "Low Initial Cost", generic: true, moremeets: true, enterprise: false },
        { feature: "Industry-Specific Expertise", generic: false, moremeets: true, enterprise: true },
        { feature: "Global Compliance Mapping", generic: false, moremeets: true, enterprise: true },
    ];
    return (
        <section className="w-full py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">The Unfair Advantage</h2>
                    <p className="text-muted-foreground mt-2 text-base md:text-lg">See how MoreMeets stacks up against your other options.</p>
                </div>
                <Card className="max-w-5xl mx-auto overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[34%] text-base">Feature</TableHead>
                                <TableHead className="text-center text-base">Free Templates</TableHead>
                                <TableHead className="text-center text-base bg-accent/10">MoreMeets</TableHead>
                                <TableHead className="text-center text-base">Enterprise SaaS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((item) => (
                                <TableRow key={item.feature}>
                                    <TableCell className="font-medium">{item.feature}</TableCell>
                                    <TableCell className="text-center">{item.generic ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                    <TableCell className="text-center bg-accent/10">{item.moremeets ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                    <TableCell className="text-center">{item.enterprise ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                </TableRow>
                            ))}
                              <TableRow className="bg-secondary/50">
                                    <TableCell className="font-bold">Best For</TableCell>
                                    <TableCell className="text-center text-xs text-muted-foreground">Basic, non-critical tasks</TableCell>
                                    <TableCell className="text-center font-bold text-primary bg-accent/10">Scaling businesses needing compliance & control without the cost</TableCell>
                                    <TableCell className="text-center text-xs text-muted-foreground">Large corporations with dedicated budgets</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </section>
    );
};


const TrademarkSection = () => (
    <section className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
         <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
               <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Brand is Your Most Valuable Asset. Protect It.</h2>
                <p className="text-muted-foreground text-base md:text-lg">Inconsistent operations don't just cost money—they dilute your brand promise. Our system creates a verifiable framework to ensure your standards are met, every single day, at every single location.</p>
                <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Brand Standard Audits</h4><p className="text-sm text-muted-foreground">Ensure visual merchandising, service quality, and brand voice are consistent.</p></div></li>
                    <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Franchise Compliance</h4><p className="text-sm text-muted-foreground">Verify that all franchisees are upholding the core promises of your brand.</p></div></li>
                    <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Intellectual Property Protection</h4><p className="text-sm text-muted-foreground">Create auditable trails for handling sensitive marketing materials and proprietary information.</p></div></li>
                </ul>
            </div>
             <div className="grid grid-cols-2 gap-4">
                <img src="https://i.postimg.cc/x8f3xyY1/best-7-star-hotels-in-the-world.png" alt="Luxury Hotel" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="luxury hotel" />
                <img src="https://i.postimg.cc/X7xzsFzy/retail-electronic.jpg" alt="Retail Store" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="retail store" />
                <img src="https://i.postimg.cc/gJPDRbTR/Best-Corporate-Photographer-India-Samsung-Product-Launch-Event-Photographer-Delhi-NCR-24-jpg.webp" alt="Corporate Event" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="corporate event" />
                <img src="https://i.postimg.cc/kGhhCGDM/manufacturing.jpg" alt="Manufacturing Plant" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="manufacturing plant" />
             </div>
         </div>
      </div>
    </section>
  );

// --- Chaos to Control Section Implementations ---

const oldWayPoints = [
    { icon: <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/>, text: `"Did anyone check the fire exits?" is a question of memory, not a provable fact.` },
    { icon: <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/>, text: `A new hire is trained by a B-player, creating another B-player.` },
    { icon: <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/>, text: `Your best manager quits, taking critical knowledge with them.` },
    { icon: <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/>, text: `An auditor asks for proof, and you spend days digging through emails.` },
];

const newWayPoints = [
    { icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/>, text: `"Fire exit check completed daily at 9:05 AM. See log #4A."` },
    { icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/>, text: `Your best performer's process is now the standard training for everyone.` },
    { icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/>, text: `Knowledge is retained in the system, making your operation resilient.` },
    { icon: <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/>, text: `Produce a complete, verifiable audit trail for any task in seconds.` },
];

const ChaosToControlSlider = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Interactive Slider: From Chaos to Control</h2>
                </div>
                <div ref={containerRef} className="relative max-w-4xl mx-auto w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <AnimatePresence>
                        <motion.div 
                            className="absolute inset-0 z-10 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent"
                            style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                            initial={{opacity: 0}} animate={{opacity: 1}}
                        >
                            <h3 className="text-2xl font-bold text-white font-headline">Control</h3>
                             <div className="mt-4 space-y-2 text-white/90">
                                {newWayPoints.map((item, index) => (
                                    <p key={index} className="flex items-start gap-2 text-sm">{React.cloneElement(item.icon, {className: "w-4 h-4 text-green-400 shrink-0 mt-1"})}<span>{item.text}</span></p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 z-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-bold text-white/70 font-headline">Chaos</h3>
                        <div className="mt-4 space-y-2 text-white/60">
                            {oldWayPoints.map((item, index) => (
                                <p key={index} className="flex items-start gap-2 text-sm">{React.cloneElement(item.icon, {className: "w-4 h-4 text-red-400 shrink-0 mt-1"})}<span>{item.text}</span></p>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="absolute inset-0 z-10 w-full h-full"
                        style={{
                            backgroundImage: "url('https://i.postimg.cc/4ydP4Msr/pexels-olly-3778966.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`
                        }}
                        initial={{opacity: 0}} animate={{opacity: 1}}
                    />
                    <div
                        className="absolute inset-0 z-0 w-full h-full"
                        style={{
                            backgroundImage: "url('https://i.postimg.cc/d10rGypZ/pexels-khwanchai-12885861.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(80%)'
                        }}
                    />
                    <div className="absolute inset-x-0 bottom-4 z-20 px-4">
                         <ReactSlider
                            className="h-8 w-full flex items-center cursor-grab"
                            thumbClassName="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center cursor-grab focus:outline-none"
                            trackClassName="h-1 bg-white/30 rounded-full"
                            value={sliderValue}
                            onChange={(value) => setSliderValue(value)}
                            renderThumb={(props, state) => <div {...props}><div className="w-3 h-3 rounded-full bg-primary/50" /></div>}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChaosToControlTimeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30" ref={ref}>
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Scrolling Timeline: Your Journey to Control</h2>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <svg width="2" height="100%" className="absolute left-1/2 -translate-x-1/2 h-full" style={{ height: "100%" }}>
                      <motion.path
                        d="M 1 0 V 1000"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        style={{ pathLength }}
                        />
                    </svg>
                    <div className="space-y-16">
                       {oldWayPoints.map((item, index) => (
                           <div key={index} className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.8}} transition={{delay: 0.2}} className="text-right">
                                    <h4 className="font-bold text-destructive">The Old Way</h4>
                                    <p className="text-muted-foreground text-sm">{item.text}</p>
                                </motion.div>
                                <motion.div initial={{scale:0}} whileInView={{scale:1}} viewport={{once: true, amount: 0.8}} className="w-12 h-12 rounded-full bg-background border-2 border-primary/20 shadow-md flex items-center justify-center z-10">
                                   <IconComponent name="Zap" className="w-6 h-6 text-accent"/>
                                </motion.div>
                                <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.8}} transition={{delay: 0.2}}>
                                    <h4 className="font-bold text-primary">The New Way</h4>
                                    <p className="text-foreground text-sm">{newWayPoints[index].text}</p>
                                </motion.div>
                           </div>
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChaosToControlToggle = () => {
    const [isControl, setIsControl] = useState(false);
    const points = isControl ? newWayPoints : oldWayPoints;

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Toggle Switch: Choose Your State</h2>
                </div>
                <div className="max-w-md mx-auto">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className={isControl ? 'text-primary' : 'text-destructive'}>
                                    {isControl ? "Controlled State" : "Chaos State"}
                                </CardTitle>
                                <Switch checked={isControl} onCheckedChange={setIsControl} aria-label="Toggle between Chaos and Control states"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                             <AnimatePresence mode="wait">
                                <motion.div
                                    key={isControl ? "control" : "chaos"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-3 text-sm"
                                >
                                    {points.map((item, index) => (
                                        <p key={index} className="flex items-start gap-2 text-muted-foreground">{item.icon}<span>{item.text}</span></p>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <PhilosophySection />

      {/* Design Option 1: Interactive Slider */}
      <ChaosToControlSlider />

      {/* Design Option 2: Scrolling Timeline */}
      <ChaosToControlTimeline />

      {/* Design Option 3: Toggle Switch */}
      <ChaosToControlToggle />

      <OperationalDragSection />
      <BeforeAfterChartSection />
      <WhoIsThisForSection />
      <CompetitorComparisonSection />
      <ExpertiseExtractorSection />
      <TrademarkSection />
    </main>
  );
}

