
'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, FileCheck2, Sparkles } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { individualChecklists } from '@/lib/individual-checklists';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { premiumPacks } from '@/lib/premium-packs';
import type { Metadata } from 'next';

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = params.id;
  const checklist = individualChecklists.find((c) => c.id === id);

  if (!checklist) {
    return {
      title: 'Checklist Not Found | MoreMeets',
      description: 'The requested checklist could not be found.',
    };
  }
  
  const title = `${checklist.title} | MoreMeets`;
  const description = checklist.description;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
     twitter: {
      card: 'summary',
      title: title,
      description: description,
    },
  }
}


const PainPoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-1">
            {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-primary" })}
        </div>
        <div>
            <h3 className="text-md font-bold">{title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
    </div>
);

const UpsellBanner = ({ packId }: { packId: string }) => {
    const pack = premiumPacks.find(p => p.id === packId);
    if (!pack) return null;

    const totalValue = pack.checklists.length * 1299; // Approximate value

    return (
        <div className="bg-accent/10 border-2 border-dashed border-accent/50 p-8 rounded-2xl text-center my-12 max-w-4xl mx-auto">
            <Badge variant="accent" className="mb-4 flex items-center gap-1.5 w-fit mx-auto">
                <Sparkles className="w-4 h-4" /> Best Value
            </Badge>
            <h3 className="text-3xl font-bold font-headline text-primary mb-2">Get The Complete System</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">This is a powerful checklist. But true operational excellence comes from an integrated system. Get this checklist plus <strong>{pack.checklists.length -1} more</strong> in the full <strong>{pack.title}</strong>.</p>
            <p className="text-xl font-bold text-primary mb-1">
                Save over <span className="underline">{(100 - (pack.priceINR / totalValue) * 100).toFixed(0)}%</span> by bundling!
            </p>
            <p className="text-muted-foreground mb-6">Total Individual Value: <span className="line-through">₹{totalValue.toLocaleString()}</span>. Pack Price: ₹{pack.priceINR.toLocaleString()}</p>
            <Button asChild size="lg">
                <Link href={`/packs/${pack.id}`}>Explore The Full Pack</Link>
            </Button>
        </div>
    );
};

const RazorpayButton = ({ paymentId, price }: { paymentId: string, price: number }) => {
    const ref = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        if (ref.current && ref.current.children.length === 0) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
            script.async = true;
            script.setAttribute('data-payment_button_id', paymentId);
            
            ref.current.appendChild(script);
        }
    }, [paymentId]);

    const buttonContainer = (
        <div className="w-full">
             <div ref={ref}></div>
        </div>
    );
    
    // The Razorpay script creates a button, but we want our own styled button.
    // So we render the Razorpay button off-screen and trigger it from our button.
    // This is a common workaround for custom styling.
    return (
        <div className="w-full">
            <Button 
                onClick={() => {
                    const rzpButton = ref.current?.querySelector('button');
                    rzpButton?.click();
                }}
                className="w-full font-bold group flex-col h-auto py-3 text-lg"
            >
                <span>Own It Forever</span>
                <span className="text-2xl font-bold">₹{price}</span>
            </Button>
            <div className="absolute opacity-0 pointer-events-none">
                 {buttonContainer}
            </div>
        </div>
    );
};


export default function Page({ params }: { params: { id: string } }) {
  const checklist = individualChecklists.find((c) => c.id === params.id);

  if (!checklist) {
    notFound();
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <SiteHeader />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/checklists" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                <ArrowLeft className="w-4 h-4 mr-1 inline-block" />
                All Bestselling Checklists
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full bg-secondary/30 py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-[auto_1fr] items-start gap-6 md:gap-x-8 max-w-4xl mx-auto">
                     <div className="row-start-1 md:col-start-1 flex items-center md:items-start gap-4">
                        <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-primary/10 border-2 border-primary/20 shrink-0">
                           {React.cloneElement(checklist.icon, { className: "w-12 h-12 text-primary" })}
                       </div>
                     </div>
                    <div className="row-start-2 md:row-start-1 md:col-start-2 space-y-3">
                        <Badge>{checklist.category}</Badge>
                        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl font-headline">
                            {checklist.title}
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            {checklist.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-16">
            <div className="container grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                <div className="space-y-8">
                     <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3">
                           <FileCheck2 className="w-7 h-7" />
                           Why This Checklist is Essential
                        </h2>
                        <p className="text-muted-foreground">{checklist.longDescription}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-6">Pain Points Solved</h2>
                        <div className="space-y-6">
                           {checklist.painPoints.map((point, index) => (
                                <PainPoint key={index} icon={<Check />} title={point.title} description={point.description} />
                           ))}
                        </div>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-4">Perfect For:</h2>
                        <p className="text-muted-foreground">{checklist.whoIsItFor.join(' • ')}</p>
                    </div>
                </div>
                 <div className="sticky top-24">
                     <Card className="shadow-2xl border-2 border-primary/20">
                        <CardHeader className="text-center pb-4">
                            <CardTitle className="text-2xl font-headline">Get Instant Access</CardTitle>
                            <CardDescription>One-time purchase. Lifetime updates.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center relative">
                             <RazorpayButton paymentId={checklist.paymentId} price={checklist.priceINR} />
                             <p className="text-xs text-muted-foreground mt-2">Secure payment via Razorpay</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <div className="container">
            <UpsellBanner packId={checklist.relatedPackId} />
        </div>

      </main>
       <Footer />
    </div>
  );
}
