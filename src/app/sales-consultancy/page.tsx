
'use client';

import * as React from 'react';
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Users } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';

// Although 'use client' is used, metadata can be defined in a parent layout.
// For this standalone page, we will manage title/description via the Head tag if needed,
// but for simplicity, we let the root layout handle defaults.

export default function SalesConsultancyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto">
             <Button variant="ghost" asChild className="hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/" prefetch={false}>
                    Back to Main Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Premium Sales Execution & Coaching
              </h1>
              <p className="md:text-xl/relaxed">
                Unlock your team's potential. We help B2B companies build scalable sales processes that drive predictable revenue growth.
              </p>
               <Button size="lg" asChild className="group text-lg py-7 px-10" variant="secondary">
                  <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                      Book a Free Discovery Call
                  </Link>
              </Button>
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
                    <Card className="text-center">
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
                     <Card className="text-center">
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
                     <Card className="text-center">
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

        <section className="w-full py-12 md:py-24 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-8 md:p-12 bg-background rounded-2xl shadow-lg border">
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

    