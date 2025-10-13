
'use client';

import Link from 'next/link';
import { ArrowLeft, Check, FileCheck2, Sparkles, AlertTriangle, AlertCircle, Layers } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { premiumPacks } from '@/lib/premium-packs';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import type { IndividualChecklist } from '@/lib/individual-checklists';
import { individualChecklists } from '@/lib/individual-checklists';
import { RazorpayButton } from '@/components/ui/razorpay-button';


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

    const relatedIndividualChecklists = individualChecklists.filter(ic => ic.relatedPackId === packId);
    
    const representativeIndividualPrice = relatedIndividualChecklists[0]?.priceINR || 1299;
    
    const totalValue = pack.checklists.length * representativeIndividualPrice;
    const savings = totalValue - pack.priceINR;

    if (savings <= 0) {
         return (
             <div className="bg-secondary/50 border border-dashed border-accent/50 p-8 rounded-2xl my-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shrink-0">
                    <Layers className="w-8 h-8" />
                </div>
                <div className='text-center md:text-left flex-1'>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-1">Loved this checklist?</h3>
                    <p className="text-muted-foreground">Get this checklist plus <strong>{pack.checklists.length - 1} more</strong> in the full <strong>{pack.title}</strong>!</p>
                </div>
                <Button asChild size="lg" className="shrink-0 mt-4 md:mt-0">
                    <Link href={`/packs/${pack.id}`}>Explore The Full Pack</Link>
                </Button>
            </div>
         )
    }

    const savingsPercentage = Math.floor((savings / totalValue) * 100);

    return (
        <div className="bg-secondary/50 border border-dashed border-accent/50 p-8 rounded-2xl my-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shrink-0">
                <Layers className="w-8 h-8" />
            </div>
            <div className='text-center md:text-left flex-1'>
                 <h3 className="text-2xl font-bold font-headline text-primary mb-1">Loved this checklist?</h3>
                 <p className="text-muted-foreground">Get this checklist plus <strong>{pack.checklists.length -1} more</strong> in the full <strong>{pack.title}</strong> and <strong className="text-primary">save over {savingsPercentage}%</strong>!</p>
            </div>
            <Button asChild size="lg" className="shrink-0 mt-4 md:mt-0">
                <Link href={`/packs/${pack.id}`}>Explore The Full Pack</Link>
            </Button>
        </div>
    );
};

export default function ChecklistClientPage({ checklist }: { checklist: IndividualChecklist }) {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
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
                        <CardContent className="text-center">
                           <p className="text-4xl font-extrabold mb-4">₹{checklist.priceINR}</p>
                           <div className="[&_form]:w-full [&_.razorpay-payment-button]:h-auto [&_.razorpay-payment-button]:py-3 [&_.razorpay-payment-button]:px-8 [&_.razorpay-payment-button]:text-lg [&_.razorpay-payment-button]:font-bold [&_.razorpay-payment-button]:w-full [&_.razorpay-payment-button]:bg-accent [&_.razorpay-payment-button]:text-accent-foreground [&_.razorpay-payment-button]:hover:bg-accent/90">
                                <RazorpayButton 
                                    paymentId={checklist.paymentId} 
                                    params={{ checklist_id: checklist.id }}
                                />
                           </div>
                        </CardContent>
                         <CardFooter className="flex-col gap-2 pt-2 items-center">
                            <p className="text-xs text-muted-foreground">Secure payment via Razorpay</p>
                         </CardFooter>
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
