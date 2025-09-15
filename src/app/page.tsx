
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard } from "lucide-react";
import { Logo } from "@/components/icons";
import { premiumPacks } from "@/lib/premium-packs";
import { checklistTemplates } from "@/lib/templates";
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
          <Button asChild>
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
                  Smart Compliance & Event Ops Checklists
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto drop-shadow-sm">
                  The simplest way for businesses and professionals to ensure quality, compliance, and perfection. One-time purchase, lifetime access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {premiumPacks.map((pack) => {
                    const packChecklists = checklistTemplates.filter(c => c.premiumPack === pack.title);
                    return (
                        <Card key={pack.title} className={`flex flex-col border-2 ${pack.color} shadow-lg hover:shadow-xl transition-shadow`}>
                            <CardHeader className="items-center text-center">
                                <div className="p-4 bg-background rounded-full mb-2 border">
                                    {pack.icon}
                                </div>
                                <CardTitle className="text-2xl font-headline">{pack.title}</CardTitle>
                                <p className="text-4xl font-bold">
                                    {pack.price_inr} / {pack.price_usd}
                                </p>
                                <CardDescription>One-Time Purchase</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Why It's Important</h3>
                                    <p className="text-muted-foreground">{pack.description}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {packChecklists.map(checklist => (
                                            <Badge key={checklist.id} variant="secondary">{checklist.name}</Badge>
                                        ))}
                                    </div>
                                </div>
                                 <div>
                                    <h3 className="font-semibold text-lg mb-2">Sample Items</h3>
                                    <ul className="space-y-2 text-sm">
                                        {pack.sampleItems.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" size="lg">
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    Purchase Pack
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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
