
'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users } from "lucide-react";
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
                            Yes, absolutely. Every purchase is a one-time payment that grants you lifetime access to the checklist pack. There are no recurring subscriptions, hidden fees, or user limits. Buy it once, own it forever.
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
                            Yes. They are fully editable. You can add, remove, or modify any tasks, change department names, and tailor the entire playbook to match your organization's unique workflow and branding.
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
                <div className="space-y-4">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Badge variant="outline" className="py-2 px-4 rounded-full text-sm font-semibold border-accent/50 text-accent-foreground bg-accent/20 backdrop-blur-sm">
                            Trusted by Professionals in 12+ Industries
                        </Badge>
                         <Badge variant="outline" className="py-2 px-4 rounded-full text-sm font-semibold border-primary/50 text-white bg-primary/20 backdrop-blur-sm">
                            Curated by 200+ Industry Experts
                        </Badge>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
                        The Professional Standard for Compliance & Operations Checklists
                    </h1>
                    <p className="max-w-[700px] text-white/90 md:text-xl/relaxed mx-auto drop-shadow-sm">
                        Meet More Standards & Compliance. Cover every base—daily tasks, security protocols, compliance audits—with checklists created from the distilled knowledge of 200+ industry experts.
                    </p>
                    <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-10">
                        <Link href="#packs">Browse Packages</Link>
                    </Button>
                </div>
                </div>
            </div>
        </section>

        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Ready-to-Use, Downloadable Checklists
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Get instant access to expert-crafted operational playbooks. One-time purchase, lifetime access. Downloadable in Excel.
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
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Prevent Costly Failures</h3>
                        <p className="text-muted-foreground">One missed step—a forgotten permit, an uncalibrated machine—can lead to catastrophic financial and reputational damage.</p>
                    </Card>
                     <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Standardize Excellence</h3>
                        <p className="text-muted-foreground">Our checklists are expert-written SOPs that empower your team to perform flawlessly, every single time.</p>
                    </Card>
                     <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Build Unshakeable Trust</h3>
                        <p className="text-muted-foreground">Demonstrating perfect execution and attention to detail is the ultimate way to build lasting trust with clients and customers.</p>
                    </Card>
                     <Card className="p-6 border-0 shadow-none bg-transparent">
                        <h3 className="text-xl font-bold font-headline mb-2">Forged by Experience</h3>
                        <p className="text-muted-foreground">Our playbooks are codified knowledge from 200+ industry veterans—not academics. Distilled experience you can use today.</p>
                    </Card>
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

    

    