
'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { premiumPacks } from '@/lib/premium-packs';
import type { IndividualChecklist } from '@/lib/individual-checklists';
import { individualChecklists } from '@/lib/individual-checklists';
import { PainPoint } from '@/components/ui/pain-point';
import { ValueProposition } from '@/components/ui/value-proposition';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

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
                    <p className="text-muted-foreground text-sm md:text-base">Get this checklist plus <strong>{pack.checklists.length - 1} more</strong> in the full <strong>{pack.title}</strong>!</p>
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
                 <p className="text-muted-foreground text-sm md:text-base">Get this checklist plus <strong>{pack.checklists.length -1} more</strong> in the full <strong>{pack.title}</strong> and <strong className="text-primary">save over {savingsPercentage}%</strong>!</p>
            </div>
            <Button asChild size="lg" className="shrink-0 mt-4 md:mt-0">
                <Link href={`/packs/${pack.id}`}>Explore The Full Pack</Link>
            </Button>
        </div>
    );
};

export default function ChecklistClientPage({ checklist }: { checklist: IndividualChecklist }) {

    const pricingSectionRef = React.useRef<HTMLDivElement>(null);
    const [showStickyBar, setShowStickyBar] = React.useState(false);

    const hasINR = !!(checklist.paymentId && checklist.paymentId.length > 0 && checklist.priceINR >= 0);
    const hasUSD = !!(checklist.lemonSqueezyUrl && checklist.lemonSqueezyUrl.length > 0 && checklist.priceUSD !== undefined && checklist.priceUSD >= 0);
    const [currency, setCurrency] = React.useState(hasUSD ? 'USD' : 'INR');
    
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowStickyBar(!entry.isIntersecting);
            },
            { rootMargin: "0px 0px -100% 0px" } 
        );

        const currentRef = pricingSectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const isSurgicalChecklist = checklist.id === 'surgical-safety';
    const razorpayFormHtml = `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="${checklist.paymentId}" async><\/script></form>`;

  return (
    <>
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full bg-secondary/30 py-12 md:py-16">
            <div className="container px-2 md:px-6">
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
                        {isSurgicalChecklist && (
                            <p className="text-lg font-semibold text-muted-foreground">(NABH & JCI Aligned)</p>
                        )}
                        <p className="text-muted-foreground text-base md:text-lg">
                            {checklist.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-16">
            <div className="container grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start px-2 md:px-6">
                <div className="space-y-8">
                     <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3">Why This Checklist is Essential</h2>
                        <p className="text-muted-foreground text-sm md:text-base">{checklist.longDescription}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-6">Pain Points Solved</h2>
                        <div className="space-y-6">
                           {checklist.painPoints.map((point, index) => (
                                <PainPoint key={index} icon={checklist.icon} title={point.title} description={point.description} />
                           ))}
                        </div>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline text-primary mb-4">Perfect For:</h2>
                        <p className="text-muted-foreground text-sm md:text-base">{checklist.whoIsItFor.join(' • ')}</p>
                    </div>
                </div>
                 <div ref={pricingSectionRef} className="sticky top-24">
                     <Card className="shadow-2xl border-2 border-primary/20">
                        <CardHeader className="text-center pb-4">
                            <CardTitle className="text-2xl font-headline">Get Instant Access</CardTitle>
                            <CardDescription>One-time purchase. Lifetime updates.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center flex flex-col items-center">
                            {hasINR && hasUSD && (
                               <div className="flex justify-center mb-4">
                                    <Tabs defaultValue={currency} onValueChange={setCurrency} className="w-full max-w-xs">
                                      <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="USD">Pay in USD ($)</TabsTrigger>
                                        <TabsTrigger value="INR">Pay in INR (₹)</TabsTrigger>
                                      </TabsList>
                                    </Tabs>
                                </div>
                            )}
                           <p className="text-4xl font-extrabold mb-4">
                                {currency === 'INR' ? `₹${checklist.priceINR}` : `$${checklist.priceUSD}`}
                            </p>
                            <div className={cn(currency === 'INR' ? 'block' : 'hidden', 'w-full flex justify-center')}>
                                {hasINR && checklist.paymentId && <div dangerouslySetInnerHTML={{ __html: razorpayFormHtml }} />}
                                {currency === 'INR' && (!hasINR || !checklist.paymentId) && <p className='text-destructive text-sm'>INR payments not yet available.</p>}
                            </div>

                            <div className={cn(currency === 'USD' ? 'block' : 'hidden', 'w-full flex justify-center')}>
                                {hasUSD ? (
                                    <Button asChild size="lg" className="w-full max-w-xs">
                                        <Link href={`${checklist.lemonSqueezyUrl}?checkout[custom][checklist_id]=${checklist.id}`}>
                                            Buy Now
                                        </Link>
                                    </Button>
                                ) : <p className='text-destructive text-sm'>USD payments not yet available.</p>}
                            </div>
                        </CardContent>
                         <CardFooter className="flex-col gap-4 pt-4 p-6 items-center border-t bg-secondary/50">
                            <ValueProposition
                                ourPrice={currency === 'INR' ? `₹${checklist.priceINR}` : `$${checklist.priceUSD}`}
                                competitorPrice={currency === 'INR' ? "₹12,000+" : "$149+"}
                                valueStatement="For a single, custom-written SOP."
                            />
                            <p className="text-xs text-muted-foreground mt-2">Secure payment via {currency === 'INR' ? 'Razorpay' : 'Lemon Squeezy'}</p>
                         </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
        
        <div className="container">
            {checklist.relatedPackId && <UpsellBanner packId={checklist.relatedPackId} />}
        </div>

      </main>
       <Footer />
    </div>
     <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className='flex items-center justify-between gap-4'>
             <div className='flex-1'>
                <p className='font-bold text-sm truncate'>{checklist.title}</p>
                 <div className="flex items-baseline gap-2">
                    {hasUSD && <p className='text-lg font-extrabold'>${checklist.priceUSD}</p>}
                    {hasINR && <p className='text-muted-foreground'>/ ₹{checklist.priceINR}</p>}
                 </div>
            </div>
            <div className="flex-shrink-0">
                 <Button asChild onClick={() => pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                    <Link href="#pricing">Buy Now</Link>
                 </Button>
            </div>
        </div>
    </div>
    </>
  );
}
