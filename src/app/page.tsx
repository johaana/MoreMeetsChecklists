
'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Briefcase, Leaf, Shield } from "lucide-react";
import { Logo } from "@/components/icons";
import { premiumPacks, PremiumPack } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { writeFile, utils, WorkSheet } from 'xlsx-js-style';


const heroImage = PlaceHolderImages.find(img => img.id === "showcase-emirates-palace");

const FaqSection = () => (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                    Everything you need to know before you buy.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold">What format do the checklists come in?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            All our checklist packs are delivered as professionally formatted Microsoft Excel files (.xlsx). This makes them universally accessible, easy to use, and fully customizable to fit your specific operational needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold">Is this a one-time purchase?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, absolutely. Every purchase is a one-time payment that grants you lifetime access to the checklist pack and all future updates. There are no recurring subscriptions, hidden fees, or user limits. Buy it once, own it forever.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold">How do I receive the files after purchase?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Instantly. Once your payment is successfully processed, you will be able to download the files immediately from the purchase confirmation page.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold">Can I edit and customize the checklists?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes. They are fully editable. You can add, remove, or modify any tasks, change department names, and tailor the entire pack to match your organization's unique workflow and branding. We also offer a personalization service for an additional fee.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold">Who creates these checklists?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Our checklists are not created by academics; they are forged by experience. Each pack is meticulously curated and vetted by a panel of over 200 seasoned industry professionals, including veteran general managers, compliance officers, and heads of security from world-leading organizations.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);


export default function Home() {
  const whyUsData = [
    {
      title: "Prevent Costly Failures",
      description: "One missed step—a forgotten permit, an uncalibrated machine—can lead to catastrophic financial and reputational damage.",
      imageId: "for-startups"
    },
    {
      title: "Standardize Excellence",
      description: "Our checklists are expert-written SOPs that empower your team to perform flawlessly, every single time, delighting customers and clients.",
      imageId: "for-hospitality"
    },
     {
      title: "Build Unshakeable Trust",
      description: "Demonstrating perfect execution and attention to detail is the ultimate way to build lasting trust with clients and customers.",
      imageId: "showcase-corporate-hospitality"
    },
    {
      title: "Forged by Experience",
      description: "Our packs are codified knowledge from 200+ industry veterans—not academics. Distilled experience you can use today.",
      imageId: "for-event-planners"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="#packs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Packages
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Why Us
            </Link>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#packs" prefetch={false}>
                    Get Started
                </Link>
            </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full relative">
            <div className="absolute inset-0 z-10 bg-black/50" />
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt="Luxury Hotel"
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="container px-4 md:px-6 relative z-20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center min-h-[60vh] lg:min-h-[80vh]">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
                            The Professional Standard for Compliance & Operations Checklists
                        </h1>
                        <p className="max-w-[700px] text-white/90 md:text-xl/relaxed mx-auto drop-shadow-sm">
                           Meet More Standards & Compliance. Cover every base—daily tasks, security protocols, compliance audits—with checklists created from the distilled knowledge of 200+ industry experts.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-10">
                                <Link href="#packs">Browse Packages</Link>
                            </Button>
                            <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-1">
                                <p className="text-xs text-white/80">
                                    Forged by veteran GMs, NABH/JCI consultants, and Fortune 500 facility managers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Ready-to-Use, Downloadable Checklist Packs
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Get instant access to expert-crafted operational SOPs. One-time purchase, lifetime updates. Downloadable in Excel.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {premiumPacks.map((pack) => (
                        <Card key={pack.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 border-transparent hover:border-primary">
                             {pack.mostPopular && (
                                <Badge className="absolute top-4 right-4 py-1 px-3 bg-accent text-accent-foreground font-bold z-10">
                                   <Star className="w-4 h-4 mr-2" /> Most Popular
                                </Badge>
                             )}
                            <CardHeader className="p-6">
                                <div className="flex items-start gap-4 mb-2">
                                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shrink-0">
                                        {pack.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <p className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</p>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {pack.sampleItems.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/80"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter className="p-6 pt-2">
                                <Button asChild className="w-full font-bold bg-accent/20 text-accent hover:bg-accent/30" variant="secondary">
                                    <Link href={`/packs/${pack.id}`}>
                                        View Full Checklist & Purchase
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Why Every Detail Matters
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Our checklists are more than just lists. They are operational frameworks forged by real-world experience to protect and grow your business.
              </p>
            </div>
            <div className="grid gap-12 max-w-6xl mx-auto">
              {whyUsData.map((item, index) => {
                const image = PlaceHolderImages.find(img => img.id === item.imageId);
                return (
                  <div key={item.title} className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <h3 className="text-2xl font-bold font-headline mb-4">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="rounded-xl object-cover shadow-lg"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Loved by Professionals Worldwide
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Join over 5,000+ users who plan and operate with MoreMeets.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                         <Card key={testimonial.name} className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl">
                             <div className="mb-4 rounded-full overflow-hidden w-24 h-24">
                                {testimonial.imageId && (
                                    <Image
                                      src={PlaceHolderImages.find(img => img.id === testimonial.imageId)?.imageUrl || ''}
                                      alt={testimonial.name}
                                      width={100}
                                      height={100}
                                      className="object-cover"
                                      data-ai-hint={PlaceHolderImages.find(img => img.id === testimonial.imageId)?.imageHint || ''}
                                    />
                                )}
                             </div>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>                            
                            </CardContent>
                             <CardFooter className="p-0 mt-4 flex-col">
                                 <p className="font-bold font-headline">{testimonial.name}</p>
                                 <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                             </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <FaqSection />

      </main>
       <footer className="w-full border-t bg-secondary/50 mt-12">
            <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                     <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The Professional Standard for Compliance & Operations Checklists.
                    </p>
                </div>
                 <div className="flex flex-col gap-2 items-center text-sm">
                    <p className="font-semibold">Quick Links</p>
                    <Link href="#packs" className="text-muted-foreground hover:text-foreground">Packages</Link>
                    <Link href="#why-us" className="text-muted-foreground hover:text-foreground">Why Us</Link>
                    <Link href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                     <p className="font-semibold">Legal</p>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                     <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

    