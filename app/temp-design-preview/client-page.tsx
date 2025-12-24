
'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BrainCircuit, FileText, Users, Zap, Frown, Smile, Mail, MessageSquare, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { premiumPacks } from '@/lib/premium-packs';
import { IconComponent } from '../components/icons';

const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[700px] flex items-center text-white overflow-hidden">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        
        <div className="container px-4 md:px-6 relative z-20">
            <motion.div 
                className="max-w-3xl space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-white drop-shadow-lg">
                    The Professional Standard for Audit-Ready Operations.
                </h1>
                <p className="text-lg text-white/90 max-w-2xl drop-shadow-md">
                    MoreMeets Standards™ is the world's first offline, audit-ready operational framework. It converts daily work into a verifiable system—independent of people, tools, or software.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/80 pt-2">
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Global Compliance</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Offline & Owned</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> One-Time Purchase</span>
                </div>
                <div className="pt-6">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" variant="accent">
                        <Link href="/library">
                           Adopt the Standard
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);

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
                    <p className="text-lg text-muted-foreground mt-4">Your team knows what to do. But when an auditor asks, “Show me proof”—the answers are scattered across unreliable systems.</p>
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
                            <div className="text-destructive mb-3 p-3 bg-destructive/10 rounded-full">{item.icon}</div>
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
    return (
      <section className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">From High Risk to High Confidence</h2>
            <p className="text-muted-foreground mt-2 text-base md:text-lg">MoreMeets Standards™ systematically reduce your operational risks by converting ambiguous processes into structured, verifiable tasks.</p>
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
