
'use client';

import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Users, Bot, Zap, Rocket, Search, Edit, BarChart, FileText, Star } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const benefits = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Cross-Industry Expertise",
        description: "Proven success in SaaS, retail, hospitality, manufacturing, banking, and more."
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "AI-Driven Sales Optimization",
        description: "Leveraging top-tier AI tools to streamline your sales process and maximize efficiency."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Proven Frameworks",
        description: "Implementing battle-tested frameworks for cold calling and demos that convert."
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Scalable Sales Automation",
        description: "Saving you time and resources while scaling your outreach and follow-up efforts."
    }
];

const processSteps = [
    {
        step: "01",
        title: "Discovery & Audit",
        description: "We start with a deep dive into your current sales process, team structure, and tech stack to identify key bottlenecks and opportunities."
    },
    {
        step: "02",
        title: "Strategy & Playbook Design",
        description: "We co-create a tailored sales playbook, defining your ideal customer profile, value proposition, and a step-by-step execution plan."
    },
    {
        step: "03",
        title: "Implementation & Coaching",
        description: "We work directly with your team, providing hands-on coaching for prospecting, demoing, negotiating, and closing."
    },
    {
        step: "04",
        title: "Optimization & Scale",
        description: "Using data and feedback, we continuously refine the process, optimize your tech stack, and build a system for predictable revenue growth."
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
                        We build scalable sales engines for ambitious B2B companies, driving predictable revenue growth.
                    </p>
                    <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
                        <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                            Book a Free Discovery Call
                        </Link>
                    </Button>
                </div>
                 <div className="flex justify-center">
                    <Image
                      src="https://i.postimg.cc/3RjXwFvd/corporate-dfl-epitome.jpg"
                      alt="A professional sales consultant in a modern office"
                      width={600}
                      height={400}
                      className="rounded-3xl object-cover shadow-2xl"
                      data-ai-hint="modern office"
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
                            src="https://i.postimg.cc/6q9d44rV/cold-call1.jpg"
                            alt="A smiling sales professional on a call"
                            width={600}
                            height={400}
                            className="rounded-3xl object-cover shadow-2xl"
                            data-ai-hint="sales professional"
                        />
                    </div>
                 </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                        Our Proven Process for Growth
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        We follow a structured, four-step process to transform your sales function from a cost center to a revenue driver.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
                    {processSteps.map((step) => (
                        <div key={step.step} className="text-center">
                            <div className="text-5xl font-bold text-accent mb-2">{step.step}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
             <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                  What You Get
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                  We don't just advise. We build and deliver the assets you need to succeed.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <Card className="text-center p-6">
                      <FileText className="w-12 h-12 text-accent mx-auto mb-4"/>
                      <h3 className="text-lg font-bold">Custom Sales Playbook</h3>
                      <p className="text-muted-foreground text-sm">A comprehensive guide covering your scripts, objection handling, email templates, and closing sequences.</p>
                  </Card>
                   <Card className="text-center p-6">
                      <Users className="w-12 h-12 text-accent mx-auto mb-4"/>
                      <h3 className="text-lg font-bold">Hands-On Team Coaching</h3>
                      <p className="text-muted-foreground text-sm">Live call reviews, role-playing sessions, and 1-on-1 coaching to upskill your entire sales team.</p>
                  </Card>
                   <Card className="text-center p-6">
                      <BarChart className="w-12 h-12 text-accent mx-auto mb-4"/>
                      <h3 className="text-lg font-bold">Performance Dashboard</h3>
                      <p className="text-muted-foreground text-sm">A customized dashboard to track key sales KPIs, from lead velocity to close rate, giving you full visibility.</p>
                  </Card>
              </div>
          </div>
        </section>
        
        <section id="pricing" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                        Consultancy Packages
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        Choose the engagement model that's right for your stage of growth.
                    </p>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Sales Audit & Strategy</CardTitle>
                            <CardDescription>A one-time deep dive to give you a clear, actionable roadmap.</CardDescription>
                            <p className="text-4xl font-bold pt-4">₹24,999</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Full sales process audit</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Custom Sales Playbook delivery</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Tech stack recommendation</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Final strategy presentation</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="secondary"><Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">Book a Call</Link></Button>
                        </CardFooter>
                    </Card>
                     <Card className="flex flex-col border-2 border-accent shadow-lg">
                        <CardHeader>
                            <CardTitle>Team Coaching Intensive</CardTitle>
                            <CardDescription>A 3-month program to upskill your entire sales team.</CardDescription>
                             <p className="text-4xl font-bold pt-4">₹59,999<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                        </CardHeader>
                        <CardContent className="flex-1">
                             <p className="font-semibold mb-3">Everything in Strategy, plus:</p>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Weekly team training sessions</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Live call reviews and feedback</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>1-on-1 coaching for team leads</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Performance dashboard setup</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="accent"><Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">Book a Call</Link></Button>
                        </CardFooter>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Dedicated Sales Partner</CardTitle>
                            <CardDescription>Fractional sales leadership to build and run your sales engine.</CardDescription>
                            <p className="text-4xl font-bold pt-4">Custom</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                             <p className="font-semibold mb-3">Everything in Intensive, plus:</p>
                             <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Direct involvement in hiring</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Management of sales operations</span></li>
                                <li className="flex items-start_"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Leadership reporting & forecasting</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Direct support via Slack</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="secondary"><Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">Book a Call</Link></Button>
                        </CardFooter>
                    </Card>
                 </div>
            </div>
        </section>

         <section className="w-full py-12 md:py-24 bg-secondary">
             <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                 <div className="text-center">
                    <Image src="https://i.postimg.cc/BbqxPPTK/pie-chart-for-sales-script.webp" alt="Testimonial" width={100} height={100} className="mx-auto rounded-full mb-4" data-ai-hint="male ceo headshot"/>
                    <p className="text-lg italic text-muted-foreground">"Working with MoreMeets was a game-changer. They didn't just give us a plan; they rolled up their sleeves and helped us execute. Our meeting bookings are up 300% in just one quarter."</p>
                    <p className="font-bold mt-4 font-headline">Sameer Shah</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO, TechMinds Inc.</p>
                 </div>
             </div>
        </section>


        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-8 md:p-12 bg-background rounded-2xl shadow-lg border-2">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                             <h2 className="text-3xl font-bold font-headline text-primary mb-4">
                                Ready to Grow?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                In a complimentary 30-minute call, we'll discuss your current challenges and provide immediate, actionable insights you can apply to your sales process. Let's explore if we're the right fit to help you scale.
                            </p>
                             <Button size="lg" asChild className="group" variant="accent">
                                  <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                      Schedule Your Free Call
                                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                  </Link>
                              </Button>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">What to expect on our call:</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>A brief review of your current sales model.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>Identification of 1-2 immediate growth levers.</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-1 shrink-0 text-green-500"/><span>A no-pressure discussion about our services.</span></li>
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
