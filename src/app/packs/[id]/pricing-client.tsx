
'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Repeat, DollarSign, Sparkles, ShieldCheck, Eye, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';


function ScenarioPreviewDialog({ scenario }: { scenario: PremiumPack['previewScenario'] }) {
    if (!scenario) return null;

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full mt-4">
                    <Eye className="w-4 h-4 mr-2" />
                    See a Sample
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-4xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-headline">Scenario: {scenario.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {scenario.description} The full download is a fully editable Excel file.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <ScrollArea className="max-h-[60vh] pr-6">
                    <Table className="mt-4 border rounded-lg">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Task Description</TableHead>
                                <TableHead>Source Checklist</TableHead>
                                <TableHead>Priority</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {scenario.tasks.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell>{task.description}</TableCell>
                                    <TableCell className="text-muted-foreground">{task.sourceChecklist}</TableCell>
                                    <TableCell>
                                        <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
                                            {task.priority}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close Preview</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const basePrice = pack.priceINR || 0;
    const personalizedPackPrice = 10999;
    const enterprisePriceINR = 49999;
    const personalizedPaymentId = 'pl_RLWZWUcvyLCF1a';


    React.useEffect(() => {
        const buttons = [
          { id: "professional-pack-button-desktop", paymentId: pack.paymentId },
          { id: "personalized-pack-button-desktop", paymentId: personalizedPaymentId },
          { id: "professional-pack-button-mobile", paymentId: pack.paymentId },
          { id: "personalized-pack-button-mobile", paymentId: personalizedPaymentId },
        ];

        buttons.forEach(({ id, paymentId }) => {
          const form = document.getElementById(id);
          if (form && !form.querySelector("script")) {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.async = true;
            script.dataset.payment_button_id = paymentId;
            form.appendChild(script);
          }
        });
      }, [pack.paymentId]);


    const pricingCards = [
            <Card key="professional" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/80 relative">
                <CardHeader className="p-6 pt-8">
                    <CardTitle className="font-headline text-2xl">Professional Pack</CardTitle>
                    <p className="text-4xl font-bold text-foreground">₹{basePrice}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Complete, expert-curated checklist pack with {pack.checklists.length} checklists.</span></p>
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Instant download, immediate impact.</span></p>
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Fully editable & brandable Excel files.</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                   <div className="w-full">
                     <form id="professional-pack-button-desktop" className="w-full"></form>
                   </div>
                </CardFooter>
            </Card>,

            <Card key="personalized" className="flex flex-col text-left rounded-2xl shadow-lg hover*shadow-2xl transition-shadow duration-300 border-2 border-accent relative">
                <Badge variant="accent" className="absolute top-0 -translate-y-1/2 left-6 py-1 px-3 font-bold z-10 border-2 border-background">Best Value</Badge>
                <CardHeader className="p-6">
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl pt-4">
                        Personalized Pack
                    </CardTitle>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold text-foreground">
                            ₹{personalizedPackPrice}
                        </p>
                         <p className="text-xl font-medium text-muted-foreground line-through">
                           ₹{personalizedPackPrice + 4000}
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                        <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Professional, plus:</span></p>
                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Custom Priority Action Plan tailored for you.</span></p>
                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Your branding automatically added.</span></p>
                        <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Priority support (faster response time).</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                    <div className="w-full">
                       <form id="personalized-pack-button-desktop" className="w-full"></form>
                    </div>
                </CardFooter>
            </Card>,

             <Card key="enterprise" className="flex flex-col text-left rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/10 relative">
                <CardHeader className="p-6 pt-8">
                     <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <Building className="w-6 h-6 text-primary" />
                        Enterprise
                    </CardTitle>
                    <p className="text-4xl font-bold text-foreground">₹{enterprisePriceINR}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm p-6 pt-0">
                    <p className="flex items-start gap-2 font-semibold text-primary"><Sparkles className="w-5 h-5 mt-0.5 text-accent shrink-0" /> <span>Everything in Personalized, plus:</span></p>
                    <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Full SOP manual creation from checklists.</span></p>
                    <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Dedicated account manager for support.</span></p>
                    <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Training for your team.</span></p>
                     <p className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5 text-green-500 shrink-0" /> <span>Bespoke checklist creation for your unique needs.</span></p>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                    <Button asChild className="w-full font-bold" variant="secondary" size="lg">
                      <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">Book a Discovery Call</Link>
                    </Button>
                </CardFooter>
            </Card>
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-secondary/30" id="pricing">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto mb-10 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Special Launch Offer: Lock In Your Lifetime Price</h2>
                    <p className="text-foreground/80 md:text-lg">One-time payment, forever yours. Select the pack that's right for you.</p>
                </div>
                
                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                   {pricingCards}
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm mx-auto"
                    >
                        <CarouselContent>
                             {React.Children.map(pricingCards, (child, index) => {
                                const card = child as React.ReactElement;
                                if (card.key === 'professional') {
                                    return (
                                        <CarouselItem key={index} className="basis-full">
                                            <div className="p-1">
                                                {React.cloneElement(card, {
                                                     children: [
                                                        ...React.Children.toArray(card.props.children).filter((c: any) => c.type !== CardFooter),
                                                        <CardFooter key="footer" className="p-6 mt-auto">
                                                            <div className="w-full">
                                                                <form id="professional-pack-button-mobile" className="w-full"></form>
                                                            </div>
                                                        </CardFooter>
                                                    ]
                                                })}
                                            </div>
                                        </CarouselItem>
                                    );
                                }
                                if (card.key === 'personalized') {
                                     return (
                                        <CarouselItem key={index} className="basis-full">
                                            <div className="p-1">
                                                {React.cloneElement(card, {
                                                     children: [
                                                        ...React.Children.toArray(card.props.children).filter((c: any) => c.type !== CardFooter),
                                                        <CardFooter key="footer" className="p-6 mt-auto">
                                                            <div className="w-full">
                                                                <form id="personalized-pack-button-mobile" className="w-full"></form>
                                                            </div>
                                                        </CardFooter>
                                                    ]
                                                })}
                                            </div>
                                        </CarouselItem>
                                    );
                                }
                                return (
                                    <CarouselItem key={index} className="basis-full">
                                        <div className="p-1">{child}</div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                         <CarouselPrevious className="left-[-1.5rem]" />
                        <CarouselNext className="right-[-1.5rem]" />
                    </Carousel>
                </div>


                {pack.previewScenario && <ScenarioPreviewDialog scenario={pack.previewScenario} />}

                <div className="mt-16 bg-primary/5 p-8 rounded-2xl max-w-5xl mx-auto border-2 border-primary/10">
                    <h3 className="text-center font-headline text-2xl font-bold mb-6 text-primary flex items-center justify-center gap-2">Buy Once, Own It Forever.</h3>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">This is a one-time payment. No subscriptions. No hidden fees. You get lifetime access to your checklist pack and all future updates, guaranteed.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <DollarSign className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">One-Time Payment</p>
                            <p className="text-xs text-muted-foreground">No recurring subscriptions. Ever. Your single purchase is valid for life.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <Repeat className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Lifetime Updates</p>
                            <p className="text-xs text-muted-foreground">Receive all future enhancements and additions to your pack, for free.</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="w-6 h-6"/>
                            </div>
                            <p className="font-semibold">Secure Checkout</p>
                            <p className="text-xs text-muted-foreground">Your payment is processed securely. Download your files instantly after purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

    