
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
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
                    Get comprehensive, expert-crafted checklists for your specific needs.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {premiumPacks.map((pack) => {
                    return (
                        <Card key={pack.id} className="flex flex-col border-2 border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl bg-card">
                            <CardHeader className="items-start text-left p-6">
                                <div className="p-3 bg-primary/10 rounded-full mb-4 border border-primary/20">
                                    {pack.icon}
                                </div>
                                <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                <CardDescription>{pack.description}</CardDescription>
                                
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col space-y-4 px-6">
                                <p className="text-3xl font-bold text-primary">
                                    {`$${pack.priceUSD} / ₹${pack.priceINR}`}
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {pack.items.slice(0, 3).map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2 shrink-0 text-primary" />
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 mr-2 shrink-0 text-primary" />
                                        <span>And much more...</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter className="p-6 mt-4">
                                <Button className="w-full" size="lg" asChild>
                                    <Link href={`/package/${pack.id}`}>
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        View Details & Purchase
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
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
