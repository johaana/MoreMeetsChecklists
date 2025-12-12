
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  ArrowRight,
  Frown,
  Smile,
  XCircle,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { TestimonialsSection } from '@/components/layout/testimonials-section';

const SectionWrapper = ({
  id,
  title,
  description,
  children,
  bg = 'bg-background',
}: {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  bg?: string;
}) => (
  <section id={id} className={cn('w-full py-16 md:py-24 border-t', bg)}>
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        {typeof title === 'string' ? (
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {title}
          </h2>
        ) : (
          title
        )}
        <div className="text-muted-foreground mt-4 text-base md:text-lg">
          {description}
        </div>
      </div>
      {children}
    </div>
  </section>
);

const HeroSection = () => (
    <section className="relative w-full py-20 md:py-32 text-center bg-secondary/30">
         <div
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{ backgroundImage: "url('https://i.postimg.cc/zvqmVdT5/movie-production-1.jpg')" }}
        />
        <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter text-primary">
                MoreMeets™ — Where Standards Meet Intelligence.
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-primary/80">
                The World’s First Industry Checklist Intelligence Platform™
            </p>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground text-base md:text-lg">
                Industry-crafted checklist systems that eliminate dependence on people, reduce operational risk, and bring consistency to every shift — across 30+ industries.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                 <Button size="lg" asChild className="group text-lg py-7 px-10" variant="default">
                    <Link href="/library">
                        Get Your Industry Pack
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button size="lg" asChild className="group text-lg py-7 px-10" variant="outline">
                    <Link href="#why-sops-matter">
                        Learn More
                    </Link>
                </Button>
            </div>
             <div className="mt-8 text-sm font-bold tracking-widest text-primary/70">
                MORE STANDARDS. LESS RISK.
            </div>
        </div>
    </section>
);

const ProblemSection = () => (
    <SectionWrapper
        id="the-problem"
        title="Your Business Doesn’t Fail at Big Things. It Fails at Small, Repeatedly Missed Tasks."
        description="A new employee forgets a critical step. A senior employee ignores the rule. Audits expose gaps you thought were covered. These small failures cost you money, reputation, and peace of mind."
    >
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl font-semibold text-destructive">The root cause? Your operations are <span className="underline">people-dependent</span>, not system-dependent.</p>
        </div>
    </SectionWrapper>
);

const SolutionSection = () => (
     <SectionWrapper
        id="the-solution"
        title="Introducing Industry Checklist Intelligence™"
        description="The first-ever structured intelligence system built from real industry operations, converted into audit-ready checklists you can use in minutes."
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="8-10 High-Impact Checklists" description="Covering every critical operation for your specific industry." />
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="80+ Industry-Specific Tasks" description="A comprehensive list of tasks to ensure nothing is missed." />
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="Built-in Trainer Notes" description="Step-by-step guidance for every task, perfect for new joinees." />
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="Consequences Highlighted" description="Every missed step shows the risk to life, finance, or compliance." />
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="Fully Editable Excel Files" description="No complicated software. Total control and customization." />
            <FeatureCard icon={<Zap className="w-6 h-6 text-primary"/>} title="Lifetime Updates Included" description="Stay current with industry best practices without any extra cost." />
        </div>
    </SectionWrapper>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="text-center p-6 bg-background">
        <div className="flex justify-center items-center mb-4">{icon}</div>
        <h3 className="text-lg font-bold font-headline">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </Card>
);

const AnatomyOfFailure = () => (
    <SectionWrapper
      id="why-sops-matter"
      title="Why Most SOPs Are Just Documents. Ours Are Systems."
      description="The difference between an SOP that collects dust and one that drives excellence is in the details."
      bg="bg-background"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        <Card className="border-destructive/30 h-full">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <Frown className="w-6 h-6" /> The Typical (Broken) SOP
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Vague & Incomplete:</strong> "Check equipment regularly." What equipment? How? What defines 'good'?</span></p>
            <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>No Accountability:</strong> Tasks are forgotten because there's no clear owner or verifiable proof of completion.</span></p>
            <p className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0 mt-1"/><span><strong>Not Audit-Ready:</strong> Lacks the structure and evidence logs to satisfy a real compliance auditor.</span></p>
          </CardContent>
        </Card>
        <Card className="border-primary/30 bg-secondary/30 shadow-lg h-full">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Smile className="w-6 h-6" /> The MoreMeets System
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
             <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Globally Compliant Framework:</strong> Built on ISO, OSHA, and HACCP principles, ready for immediate use.</span></p>
             <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Built-in Accountability:</strong> Every task has a defined `Role`, `Frequency`, and `Proof of Completion`.</span></p>
             <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Risk Intelligence Included:</strong> The "Consequence of Failure" column turns your team from task-doers into risk managers.</span></p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );

export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="text-center py-2 bg-yellow-200 text-yellow-900 font-bold text-sm">
          <p>⚠️ This is a temporary design preview page. ⚠️</p>
        </div>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AnatomyOfFailure />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
