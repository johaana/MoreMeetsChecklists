
'use client';

import { useParams } from 'next/navigation';
import { premiumPacks } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, CreditCard } from 'lucide-react';
import { Logo } from '@/components/icons';

export default function PackageDetailsPage() {
  const params = useParams();
  const { id } = params;

  const pack = premiumPacks.find(p => p.id === id);

  if (!pack) {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Package not found</h1>
            <p className="text-muted-foreground mb-8">The checklist package you're looking for doesn't exist.</p>
            <Button asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Button asChild variant="outline">
                <Link href="/#packs">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Packages
                </Link>
            </Button>
        </nav>
      </header>

      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-2xl rounded-2xl border-2 border-primary/20">
                <CardHeader className="p-8 text-center bg-secondary/30 rounded-t-2xl">
                    <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4 border border-primary/20">
                        {pack.icon}
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl font-headline">{pack.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mt-2">{pack.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="text-center mb-8">
                        <p className="text-4xl font-bold text-primary">
                            {`₹${pack.priceINR} / $${pack.priceUSD}`}
                        </p>
                        <p className="text-muted-foreground">One-Time Purchase, Lifetime Access</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-headline text-center mb-6">What's Included?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {pack.items.map((section, idx) => (
                                <div key={idx} className="p-4 bg-secondary/50 rounded-lg border">
                                    <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                                    <ul className="space-y-1.5">
                                        {section.tasks.map((task, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/80" />
                                                <span className="text-muted-foreground">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button size="lg" className="w-full text-lg py-7">
                        <CreditCard className="mr-3 h-5 w-5" />
                        Purchase Now
                    </Button>
                </CardContent>
            </Card>
        </div>
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

