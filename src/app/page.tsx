
'use client';

import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Zap, Users, Leaf, Hotel, PartyPopper, ArrowRight, Rocket } from "lucide-react";
import { Logo } from "@/components/icons";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { checklistTemplates } from "@/lib/templates";
import { HomepageChecklistCard } from "@/components/homepage-checklist-card";
import { premiumPacks } from "@/lib/premium-packs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { groupByCategoryAndSubcategory } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type RoleInfo = {
  title: string;
  icon: React.ReactNode;
  image: (typeof PlaceHolderImages)[0] | undefined;
  description: string;
};

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<RoleInfo | null>(null);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-wedding');
  const featureImage = PlaceHolderImages.find(p => p.id === 'feature-ai');
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial2');
  const testimonialAvatar3 = PlaceHolderImages.find(p => p.id === 'testimonial3');

  const groupedChecklists = groupByCategoryAndSubcategory(checklistTemplates);

  const forEventPlannersImg = PlaceHolderImages.find(p => p.id === 'for-event-planners');
  const forHospitalityImg = PlaceHolderImages.find(p => p.id === 'for-hospitality');
  const forStartupsImg = PlaceHolderImages.find(p => p.id === 'for-startups');
  const forSustainabilityImg = PlaceHolderImages.find(p => p.id === 'for-sustainability');

  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'showcase-award-ceremony'),
    PlaceHolderImages.find(p => p.id === 'showcase-umaid-bhawan'),
    PlaceHolderImages.find(p => p.id === 'showcase-product-launch-speaker'),
    PlaceHolderImages.find(p => p.id === 'showcase-taj-mahal-palace'),
    PlaceHolderImages.find(p => p.id === 'showcase-wedding-ritual'),
    PlaceHolderImages.find(p => p.id === 'showcase-oberoi-udaivilas'),
    PlaceHolderImages.find(p => p.id === 'showcase-food'),
  ].filter(Boolean) as typeof PlaceHolderImages;

  const roles: RoleInfo[] = [
    {
      title: "Event Planners",
      icon: <PartyPopper />,
      image: forEventPlannersImg,
      description: "From grand weddings to corporate launches, MoreMeets ensures every detail is perfect. Use our templates for Haldi, Sangeet, corporate conferences, and more to coordinate vendors, manage timelines, and execute flawless events that leave a lasting impression."
    },
    {
      title: "Hospitality Managers",
      icon: <Hotel />,
      image: forHospitalityImg,
      description: "Standardize excellence across your property. MoreMeets provides checklists for daily hotel operations, housekeeping, guest check-in/out procedures, and even emergency preparedness, helping you deliver a consistent 5-star experience."
    },
    {
      title: "Startup Founders",
      icon: <Rocket />,
      image: forStartupsImg,
      description: "Move fast without breaking things. Our checklists for product launches, investor pitches, and new office setups help you stay organized and professional. Focus on growth while we handle the operational details."
    },
    {
      title: "Sustainability Officers",
      icon: <Leaf />,
      image: forSustainabilityImg,
      description: "Drive your green initiatives forward. Use our checklists to implement energy efficiency programs, manage waste, conserve water, and organize eco-friendly events. Turn sustainability goals into actionable, trackable steps."
    },
  ];

  const handleRoleClick = (role: RoleInfo) => {
    setSelectedRole(role);
    setIsRoleDialogOpen(true);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Features
          </Link>
           <Link
            href="#templates"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Templates
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Sign Up Free
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center brightness-50"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="relative z-10 container px-4 md:px-6 space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
              Stop Forgetting. Start Finishing.
            </h1>
            <p className="max-w-[600px] text-primary-foreground/90 md:text-xl mx-auto drop-shadow-sm">
              The smart AI-driven checklist platform for events, hospitality, training, and sustainability. Never miss a detail again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/signup" prefetch={false}>
                  Get Started for Free
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                 <Link href="#templates" prefetch={false}>
                  Explore Templates
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="for-who" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">The Professional's Choice for Perfection</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                      MoreMeets is built for professionals who can't afford to miss a single detail.
                    </p>
                </div>
            </div>
             <div className="mx-auto grid max-w-7xl items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
                {roles.map((role) => (
                  role.image && (
                      <Card key={role.title} className="overflow-hidden group h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleRoleClick(role)}>
                        <div className="relative h-48">
                          <Image src={role.image.imageUrl} alt={role.image.description} data-ai-hint={role.image.imageHint} fill className="object-cover"/>
                        </div>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            {role.icon} {role.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                  )
                ))}
            </div>
          </div>
        </section>
        
        <section id="why" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why MoreMeets is Essential</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                      In any complex project, a single forgotten task can cause delays, budget overruns, and damage your reputation. MoreMeets is your insurance against oversight.
                    </p>
                </div>
            </div>
             <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
                <div className="grid gap-2 text-center p-4 rounded-lg hover:bg-muted/50 transition-all">
                    <h3 className="text-lg font-bold">Reduce Stress</h3>
                    <p className="text-sm text-muted-foreground">Offload your mental checklist into a reliable system. Focus on execution, not on trying to remember every detail.</p>
                </div>
                <div className="grid gap-2 text-center p-4 rounded-lg hover:bg-muted/50 transition-all">
                    <h3 className="text-lg font-bold">Ensure Quality</h3>
                    <p className="text-sm text-muted-foreground">Standardize your processes. Ensure every task is completed to the highest standard, every single time.</p>
                </div>
                <div className="grid gap-2 text-center p-4 rounded-lg hover:bg-muted/50 transition-all">
                    <h3 className="text-lg font-bold">Save Money</h3>
                    <p className="text-sm text-muted-foreground">Prevent costly mistakes and last-minute emergencies that arise from missed details and poor planning.</p>
                </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Smarter Way to Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  From AI-powered suggestions to seamless collaboration, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20 mt-16">
               {featureImage && <Image
                src={featureImage.imageUrl}
                width={600}
                height={400}
                alt={featureImage.description}
                data-ai-hint={featureImage.imageHint}
                className="rounded-xl shadow-lg mx-auto"
              />}
              <div className="space-y-8">
                  <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/20 text-primary">
                          <Zap className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">AI Task Suggester</h3>
                          <p className="text-muted-foreground mt-1">Our intelligent assistant analyzes your checklist and suggests crucial tasks you might have missed. It's like having a seasoned expert looking over your shoulder.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/20 text-primary">
                          <Check className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Detailed Subtasks</h3>
                          <p className="text-muted-foreground mt-1">Break down large, complex tasks into small, manageable subtasks. Track progress with precision and ensure nothing falls through the cracks.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/20 text-primary">
                          <Users className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Team Collaboration</h3>
                          <p className="text-muted-foreground mt-1">Assign tasks, share checklists, and track progress with your team in real-time. Keep everyone on the same page, effortlessly.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  image && (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={600}
                              height={400}
                              className="aspect-video w-full object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>


        <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Free Templates</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Start with a Solid Foundation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Browse our free checklist templates. Every template is fully customizable to fit your exact needs.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Tabs defaultValue={Object.keys(groupedChecklists)[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  {Object.keys(groupedChecklists).map(category => (
                     <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(groupedChecklists).map(([category, subcategories]) => (
                    <TabsContent key={category} value={category} className="mt-6">
                         <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={Object.keys(subcategories)[0]}>
                            {Object.entries(subcategories).map(([subcategory, checklists]) => (
                                <AccordionItem key={subcategory} value={subcategory} className="border-b-0">
                                    <AccordionTrigger className="text-xl font-semibold py-4 hover:no-underline">{subcategory}</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                            {checklists.map((checklist) => (
                                                <HomepageChecklistCard key={checklist.id} checklist={checklist} />
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Premium Packs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Go Pro with Premium Packs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  One-time purchases for industry-specific, expert-level plans. Get comprehensive, multi-stage checklists for your most critical projects.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
                {premiumPacks.map((pack) => (
                    <Card key={pack.title} className={`flex flex-col border-2 ${pack.color} hover:shadow-xl hover:-translate-y-1 transition-all`}>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-background rounded-full mb-2">
                                {pack.icon}
                            </div>
                            <CardTitle className="text-xl">{pack.title}</CardTitle>
                             <p className="text-4xl font-bold">${pack.price}</p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <CardDescription className="text-center mb-6">{pack.description}</CardDescription>
                            <ul className="space-y-3 text-sm flex-1">
                                {pack.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                              <Link href="/dashboard/premium-packs">Purchase Pack</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link href="/dashboard/premium-packs">
                    View All Premium Packs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
             </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Loved by Professionals Worldwide</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See how MoreMeets is transforming how teams get work done.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        {testimonialAvatar1 && <Avatar>
                            <AvatarImage src={testimonialAvatar1.imageUrl} data-ai-hint={testimonialAvatar1.imageHint}/>
                            <AvatarFallback>SP</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Sarah P.</p>
                            <p className="text-sm text-muted-foreground">Lead Event Coordinator</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"MoreMeets has been a game-changer for our event planning. The AI suggestions are surprisingly smart and have saved us from missing critical steps."</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                         {testimonialAvatar2 && <Avatar>
                            <AvatarImage src={testimonialAvatar2.imageUrl} data-ai-hint={testimonialAvatar2.imageHint}/>
                            <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Michael J.</p>
                            <p className="text-sm text-muted-foreground">Hotel Operations Manager</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"The subtask feature is brilliant for our housekeeping audits. It has dramatically improved accountability and our quality standards across the team."</p>
                  </div>
                </CardContent>
              </Card>
               <Card className="hover-shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        {testimonialAvatar3 && <Avatar>
                            <AvatarImage src={testimonialAvatar3.imageUrl} data-ai-hint={testimonialAvatar3.imageHint}/>
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Anika D.</p>
                            <p className="text-sm text-muted-foreground">Startup Founder</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"As a startup, we have to move fast. The pre-built templates for launch events saved us so much time and made sure we looked professional from day one."</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">FAQs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Frequently Asked Questions</h2>
                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Have questions? We've got answers.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is there a free plan?</AccordionTrigger>
                  <AccordionContent>
                    Yes, absolutely. Our free plan is designed for individuals and small teams to use for as long as they like. It includes a limited selection of our free templates to get you started.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What exactly are Premium Packs?</AccordionTrigger>
                  <AccordionContent>
                    Premium Packs are comprehensive, expert-level checklist bundles available for a one-time purchase. They are crafted by industry veterans for complex projects (like a multi-day wedding or a hotel grand opening) and save you hundreds of hours of research and planning. They are much more detailed than our free templates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How does the AI Task Suggester work?</AccordionTrigger>
                  <AccordionContent>
                    Our AI analyzes the type of checklist you're building and the tasks you've already added. It then compares your list against a vast database of common and critical tasks for that specific project type to suggest important items you may have overlooked. The custom AI Generator for Pro users can even build entire checklists from a simple prompt.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger>Can I share checklists with people who don't have a MoreMeets account?</AccordionTrigger>
                  <AccordionContent>
                    Currently, collaboration requires all users to have a MoreMeets account (even a free one). We are working on a public, view-only sharing feature that will be available in a future update.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Organize Your Success?</h2>
                    <p className="text-muted-foreground md:text-xl">
                        Sign up today and experience a new level of clarity and control in your projects.
                    </p>
                    <div className="space-x-4">
                        <Button asChild size="lg">
                        <Link href="/signup" prefetch={false}>
                            Get Started for Free <ArrowRight className="ml-2" />
                        </Link>
                        </Button>
                    </div>
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

      <AlertDialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {selectedRole?.icon} For {selectedRole?.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {selectedRole?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction onClick={() => setIsRoleDialogOpen(false)}>
            Got it
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
