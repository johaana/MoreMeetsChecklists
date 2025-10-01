
'use client';

import Link from 'next/link';
import { ArrowLeft, Check, FileCheck2, Sparkles, AlertTriangle, AlertCircle } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { premiumPacks } from '@/lib/premium-packs';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import type { IndividualChecklist } from '@/lib/individual-checklists';


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
    
    const individualChecklist = pack.checklists.find(ic => ic.relatedPackId === packId);
    if (!individualChecklist) return null;

    const totalValue = (pack.checklists.length * individualChecklist.priceINR); 
    const savingsPercentage = Math.floor(100 - (pack.priceINR / totalValue) * 100);


    return (
        <div className="bg-accent/10 border-2 border-dashed border-accent/50 p-8 rounded-2xl text-center my-12 max-w-4xl mx-auto">
            <Badge variant="accent" className="mb-4 flex items-center gap-1.5 w-fit mx-auto">
                <Sparkles className="w-4 h-4" /> Best Value
            </Badge>
            <h3 className="text-3xl font-bold font-headline text-primary mb-2">Get The Complete System</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">This is a powerful checklist. But true operational excellence comes from an integrated system. Get this checklist plus <strong>{pack.checklists.length -1} more</strong> in the full <strong>{pack.title}</strong>.</p>
            <p className="text-xl font-bold text-primary mb-1">
                Save over <span className="underline">{savingsPercentage}%</span> by bundling!
            </p>
            <p className="text-muted-foreground mb-6">Total Individual Value: <span className="line-through">₹{totalValue.toLocaleString()}</span>. Pack Price: ₹{pack.priceINR.toLocaleString()}</p>
            <Button asChild size="lg">
                <Link href={`/packs/${pack.id}`}>Explore The Full Pack</Link>
            </Button>
        </div>
    );
};

const PaymentDisclaimerDialog = () => (
    <AlertDialog>
        <AlertDialogTrigger asChild>
             <Button variant="link" className="text-xs text-accent h-auto p-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Read Before Paying
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2"><AlertCircle className="text-accent" /> Important: Before You Pay</AlertDialogTitle>
                <AlertDialogDescription asChild>
                    <div className="space-y-4 pt-4 text-sm text-muted-foreground">
                        <div>
                            <strong>1. Note Your Payment ID:</strong> After paying, you'll get a Payment ID from Razorpay. You will need this on the thank you page to download your checklist.
                        </div>
                        <div>
                            <strong>2. Beneficiary Name:</strong> The beneficiary name may appear as MoreMeets or our Founder's name due to banking compliance. Both are verified.
                        </div>
                        <div>
                            <strong>3. Thank You Page:</strong> After successful payment, you will be redirected to the Thank You page to verify your payment ID and download your file.
                        </div>
                    </div>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

const RazorpayButton = ({ paymentId, checklistId }: { paymentId: string, checklistId: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (ref.current && ref.current.children.length === 0) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
            script.async = true;
            script.setAttribute('data-payment_button_id', paymentId);
            
            const form = document.createElement('form');
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'checklist_id';
            input.value = checklistId;
            form.appendChild(input);
            form.appendChild(script);

            ref.current.appendChild(form);
        }
    }, [paymentId, checklistId]);

    return <div ref={ref} className="hidden"></div>;
};

export default function ChecklistClientPage({ checklist }: { checklist: IndividualChecklist }) {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <SiteHeader />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/checklists" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                <ArrowLeft className="w-4 h-4 mr-1 inline-block" />
                All Bestselling Individual Checklists
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
                        <CardContent className="text-center">
                            <RazorpayButton paymentId={checklist.paymentId} checklistId={checklist.id} />
                            <Button
                                onClick={() => {
                                    const rzpForm = document.querySelector(`form input[name='checklist_id'][value='${checklist.id}']`)?.parentElement;
                                    if (rzpForm && rzpForm.firstChild instanceof HTMLElement) {
                                      rzpForm.firstChild.click();
                                    } else {
                                        console.error("Razorpay button or form not found to click.");
                                        alert("Could not initiate payment. Please contact support.");
                                    }
                                }}
                                className="w-full font-bold group flex-col h-auto py-3 text-lg"
                                size="lg"
                            >
                                <span className="group-hover:scale-105 transition-transform">Own It Forever</span>
                                <span className="text-3xl font-bold group-hover:scale-110 transition-transform">₹{checklist.priceINR}</span>
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">Secure payment via Razorpay</p>
                        </CardContent>
                         <CardFooter className="flex-col gap-2 pt-2 items-center">
                            <PaymentDisclaimerDialog />
                         </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
        
        <div className="container">
            <UpsellBanner packId={checklist.relatedPackId} />
        </div>
        
        <div className="container max-w-4xl mx-auto mt-16">
            <div className="bg-destructive/10 border-l-4 border-destructive text-destructive-foreground p-6 rounded-r-lg">
                 <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-destructive mt-1 shrink-0"/>
                    <div>
                        <h3 className="font-bold text-lg">Important Disclaimer</h3>
                        <p className="text-sm opacity-90 mt-1">
                            The documents and checklists provided by MoreMeets are intended for informational and guidance purposes only. They are not a substitute for professional legal, financial, medical, or safety advice. You should consult with a qualified and certified professional for your specific needs to ensure compliance with all applicable laws and regulations. Use of these materials is at your own risk.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </main>
       <Footer />
    </div>
  );
}
