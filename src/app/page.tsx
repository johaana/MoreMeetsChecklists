
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight } from "lucide-react";
import { Logo } from "@/components/icons";
import { premiumPacks } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from 'react';
import { Footer } from "@/components/layout/footer";

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
            <div className="max-w-4xl mx-auto">
                 <div className="bg-background/80 p-6 rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-bold font-headline text-primary mb-2">Q: There are many SOP platforms out there — how is MoreMeets different?</h3>
                    <p className="text-muted-foreground">A: Most SOP platforms sell software subscriptions that help you manage or automate SOPs — but they <strong>don’t actually provide the SOP checklists themselves</strong>. You still have to create the content on your own.</p>
                    <p className="text-muted-foreground mt-2">MoreMeets is different. We provide <strong>ready-to-use, expert-written checklists</strong> built from years of research, industry consulting, and real-world operational experience. Instead of a costly recurring subscription, you get a <strong>one-time purchase with lifetime updates</strong>.</p>
                    <p className="text-muted-foreground mt-2 font-medium">In short: <strong>we don’t sell software. We sell the actual operational checklists</strong> that managers and teams can start using from day one.</p>
                </div>
                
                <h3 className="text-2xl font-bold font-headline mb-4 mt-12 text-center">The Details That Matter</h3>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold">How will I receive the checklists after purchase?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Instantly. You’ll get access to download the Excel file directly from the confirmation page after payment. A copy of the download link is also sent to your email for safekeeping.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold">Are these checklists editable?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, completely. All checklists come in a standard Microsoft Excel file (.xlsx), so you can fully customize them to fit your organization’s specific needs, branding, and workflow.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold">Do I need any special software to use these?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            No. The files open in Microsoft Excel, Google Sheets, Apple Numbers, or any compatible spreadsheet software.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold">Will I get future updates?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. Each purchase includes lifetime updates. Whenever we improve or add new SOPs to a pack you've purchased, you’ll receive the updated version for free.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold">Is my payment secure?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, 100%. We use Razorpay, one of India’s most trusted payment gateways, which is fully PCI-DSS compliant. Your financial data is encrypted and is never stored on our servers.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-ai">
                        <AccordionTrigger className="text-lg font-semibold">What makes these checklists different from what a generative AI could produce?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                           While AI tools are great for generating generic lists, they lack real-world, high-stakes operational experience. Our checklists are not generated by AI. They are curated and vetted by a panel of over 200 seasoned industry professionals—veteran GMs, compliance officers, and heads of security. They are forged from decades of experience in solving real problems, preventing costly errors, and navigating complex compliance, which is a nuance that AI cannot replicate.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-lg font-semibold">Who creates these checklists?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Our checklists have been curated and vetted by a panel of over 200 seasoned industry professionals, including veteran general managers, compliance officers (NABH, JCI, ISO), and heads of security from world-leading organizations. They are forged by experience, not theory.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-lg font-semibold">Can I share the checklists with my team or across multiple locations?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes. Your one-time purchase grants you a license to use and replicate the checklists across all teams, branches, and locations within your single organization.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-lg font-semibold">Can I use these for client projects if I am a consultant?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, consultants often use our packs as a foundational framework for their client engagements. However, the license does not permit reselling, rebranding for resale, or public redistribution of the files.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-10">
                        <AccordionTrigger className="text-lg font-semibold">What is your refund policy?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                           Due to the nature of instantly downloadable digital products, all sales are final and we do not offer refunds. However, if you face any technical issues with accessing or downloading your files, our support team will resolve it for you immediately.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-11">
                        <AccordionTrigger className="text-lg font-semibold">Can I request a custom checklist for my business?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. We provide custom checklist and SOP creation services. Please <a href="https://calendly.com/aditi-imran-khan/30min" target="_blank" rel="noopener noreferrer" className="text-primary underline">contact us with your requirements</a>, and our experts will tailor a package specifically for you.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-12">
                        <AccordionTrigger className="text-lg font-semibold">How can I get support if I have an issue?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            You can reach us anytime at `more@moremeets.com` or via the chat link on our website. We are committed to helping you and typically respond within 24 hours.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

function PackList() {
    const featuredPacks = premiumPacks.filter(p => p.badgeText);
    const title = "Featured Checklist Packs";
    const description = "Get instant access to expert-crafted operational SOPs. One-time purchase, lifetime updates. Downloadable in Excel.";

    return (
         <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        {title}
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {featuredPacks.map((pack) => (
                        <Card key={pack.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            <CardHeader className="p-6 relative">
                                {pack.badgeText && (
                                    <Badge variant={pack.badgeVariant || 'default'} className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 mb-4 w-fit">
                                    <Star className="w-4 h-4" /> {pack.badgeText}
                                    </Badge>
                                )}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                                        {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <h3 className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</h3>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {pack.sampleItems.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-accent"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter className="p-6 pt-2 mt-auto">
                                <Button asChild className="w-full font-bold">
                                    <Link href={`/packs/${pack.id}`}>
                                        View Full Checklist &amp; Purchase
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <Button asChild size="lg" variant="outline" className="group border-primary/50">
                        <Link href="/packs">
                            View All Packages
                             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default function Home() {
  const whyUsData = [
    {
      title: "Prevent Costly Failures",
      description: "One missed step—a forgotten permit, an uncalibrated machine—can lead to catastrophic financial and reputational damage.",
      imageId: "showcase-product-launch-event"
    },
    {
      title: "Standardize Excellence",
      description: "Our checklists are expert-written SOPs that empower your team to perform flawlessly, every single time, delighting customers and clients.",
      imageId: "showcase-award-ceremony"
    },
     {
      title: "Build Unshakeable Trust",
      description: "Demonstrating perfect execution and attention to detail is the ultimate way to build lasting trust with clients and customers.",
      imageId: "showcase-leela-palace"
    },
     {
      title: "Drive Sustainability",
      description: "Implement checklists for waste reduction, energy efficiency, and responsible sourcing to meet your ESG goals and build a sustainable brand.",
      imageId: "for-sustainability"
    },
    {
      title: "Forged by Experience",
      description: "Our packs are built on the codified knowledge of over 200 industry veterans, translating real-world experience into checklists you can use today.",
      imageId: "showcase-chauffeur"
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
            <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                All Packages
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                Why Us
            </Link>
             <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                Contact
            </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section 
          className="w-full relative bg-cover bg-center"
           style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage?.imageUrl})`,
          }}
        >
            <div className="container px-4 md:px-6">
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center min-h-[60vh] lg:min-h-[80vh]">
                  <div className="space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
                      The Professional Standard for Compliance &amp; Operations Checklists.
                    </h1>
                    <p className="max-w-[700px] text-white/90 md:text-xl/relaxed mx-auto drop-shadow-sm">
                      Instantly download expert-crafted, fully-editable operational checklists for your hotel, restaurant, or facility. One-time purchase, lifetime updates.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
                        <Link href="/packs">
                          Browse All Packages
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
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

        <React.Suspense fallback={<div>Loading packs...</div>}>
            <PackList />
        </React.Suspense>
        
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
                         <div
                          className="w-full h-64 md:h-80 bg-cover bg-center rounded-xl shadow-lg"
                          style={{ backgroundImage: `url(${image.imageUrl})` }}
                          data-ai-hint={image.imageHint}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py32">
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
                    {testimonials.map((testimonial) => {
                        const image = PlaceHolderImages.find(img => img.id === testimonial.imageId);
                        return (
                         <Card key={testimonial.name} className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl">
                             <div className="mb-4 rounded-full overflow-hidden w-24 h-24">
                                {image && (
                                    <div
                                      className="w-full h-full bg-cover bg-center"
                                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                                      data-ai-hint={image.imageHint}
                                    ></div>
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
                    )})}
                </div>
            </div>
        </section>

        <FaqSection />

      </main>
      <Footer />
    </div>
  );
}
