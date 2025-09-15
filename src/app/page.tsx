
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CheckCircle, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/icons";
import { premiumPacks } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Button asChild variant="ghost">
            <Link href="#packs" prefetch={false}>
              Get Started
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground drop-shadow-md">
                  Smart Checklists for Professionals
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto drop-shadow-sm">
                  The simplest way for businesses and professionals to ensure quality, compliance, and perfection. One-time purchase, lifetime access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <Badge variant="outline" className="py-2 px-4 rounded-full text-sm font-semibold border-accent/50 text-accent-foreground bg-accent/10">
                    <Sparkles className="w-4 h-4 mr-2 text-accent" />
                    One-Time Purchase. Lifetime Access.
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Industry-Ready Checklist Packages
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                    Get comprehensive, expert-crafted checklists for your specific needs. Click any package to see what's inside.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
              {premiumPacks.map((pack) => (
                <AccordionItem value={pack.id} key={pack.id} className="border-2 border-primary/20 rounded-2xl mb-4 bg-card shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-6 w-full">
                      <div className="p-3 bg-primary/10 rounded-full border border-primary/20 hidden sm:block">
                          {pack.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary whitespace-nowrap">
                            {`$${pack.priceUSD} / ₹${pack.priceINR}`}
                        </p>
                        <p className="text-xs text-muted-foreground">One-Time Purchase</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-secondary/20">
                    <div className="p-6">
                      <h3 className="text-xl font-headline text-center mb-6">What's Included?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                          {pack.checklists.map((checklist, idx) => (
                              <div key={idx} className="p-4 bg-background/50 rounded-lg border">
                                  <h4 className="font-semibold text-lg mb-2">{checklist.title}</h4>
                                  <ul className="space-y-1.5">
                                      {checklist.tasks.map((task, i) => (
                                          <li key={i} className="flex items-start">
                                              <CheckCircle className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/80" />
                                              <span className="text-muted-foreground">{task}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          ))}
                      </div>
                      <Button size="lg" className="w-full text-lg py-7 bg-accent text-accent-foreground hover:bg-accent/90">
                          <CreditCard className="mr-3 h-5 w-5" />
                          Purchase Now
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-16">
        <p className="text-xs text-muted-foreground">&copy; 2024 MoreMeets. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
