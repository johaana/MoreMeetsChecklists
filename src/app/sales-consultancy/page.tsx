
'use client';

import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Users, Bot, Zap, Rocket } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const benefits = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Cross-industry expertise",
        description: "SaaS, retail, hospitality, manufacturing, airlines, banking, travel, credit ratings, fitness, call centres, student loans, and more."
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI-driven sales optimization",
        description: "Using top tools to streamline your sales process and maximize efficiency."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Proven frameworks",
        description: "For cold calling and demos that consistently convert prospects into customers."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Sales automation",
        description: "To save time and resources while scaling your outreach efforts."
    }
];

export default function SalesConsultancyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background sales-consultancy-page">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold text-primary">MoreMeets</span>
        </Link>
        <nav className="ml-auto">
             <Button variant="ghost" asChild>
                <Link href="/" prefetch={false}>
                    Back to Main Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                        More Meetings. More Sales. Less Hassle.
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        We help ambitious B2B companies build scalable sales engines that drive predictable revenue growth.
                    </p>
                    <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
                        <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                            Book a Free Discovery Call
                        </Link>
                    </Button>
                </div>
                 <div className="flex justify-center">
                    <Image
                      src="https://picsum.photos/seed/sales-team/600/400"
                      alt="Sales team celebrating success"
                      width={600}
                      height={400}
                      className="rounded-3xl object-cover shadow-2xl"
                      data-ai-hint="sales team success"
                    />
                </div>
            </div>
          </div>
        </section>

         <section className="w-full py-12 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
                 <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary mb-6">
                            Why Choose MoreMeets?
                        </h2>
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="flex justify-center">
                        <Image
                            src="https://picsum.photos/seed/modern-office/600/400"
                            alt="Modern office interior"
                            width={550}
                            height={550}
                            className="rounded-3xl object-cover shadow-2xl"
                            data-ai-hint="modern office"
                        />
                    </div>
                 </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                        How We Drive Your Sales Growth
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                    <Card className="text-center border-2">
                        <CardHeader>
                            <CardTitle className="flex flex-col items-center justify-center gap-3">
                                <Target className="w-10 h-10 text-accent"/>
                                Sales Process Auditing
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            We analyze your current sales cycle from lead to close, identifying bottlenecks and opportunities for efficiency.
                        </CardContent>
                    </Card>
                     <Card className="text-center border-2">
                        <CardHeader>
                            <CardTitle className="flex flex-col items-center justify-center gap-3">
                                <Users className="w-10 h-10 text-accent"/>
                                Team & Leadership Coaching
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                           We provide hands-on coaching for sales reps and leadership to improve forecasting, pipeline management, and closing skills.
                        </CardContent>
                    </Card>
                     <Card className="text-center border-2">
                        <CardHeader>
                            <CardTitle className="flex flex-col items-center justify-center gap-3">
                                <TrendingUp className="w-10 h-10 text-accent"/>
                                Playbook Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            We co-create a custom sales playbook for your team, standardizing best practices for prospecting, demos, and negotiation.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-8 md:p-12 bg-background rounded-2xl shadow-lg border-2">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                             <h2 className="text-3xl font-bold font-headline text-primary mb-4">
                                Book Your Free Consultation
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                In a complimentary 30-minute call, we'll discuss your current challenges and provide immediate, actionable insights you can apply to your sales process. Let's explore if we're the right fit to help you scale.
                            </p>
                             <Button size="lg" asChild className="group" variant="accent">
                                  <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                      Schedule Now
                                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                  </Link>
                              </Button>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Our consultancy packages typically include:</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Weekly 1-on-1 coaching calls with leadership.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Bi-weekly team training sessions.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Full access to our library of sales templates and scripts.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Direct support via Slack for real-time deal advice.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
