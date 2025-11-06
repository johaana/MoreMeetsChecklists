
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, ArrowRight, FileText, DownloadCloud, Layers, HandCoins, Shield, TrendingUp, AlertTriangle, Users, GitBranch, Search, Lock, Award, Briefcase, BarChart, HardHat, CookingPot, Hospital, Factory, ShieldCheck, FileQuestion, Recycle, Leaf, Globe, BadgeCheck, Repeat, Download, History, BadgePercent, Mail, Loader2, CheckCircle, GraduationCap, Gem, Building as BuildingIcon, XCircle, CheckCircleIcon } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from 'react';
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { premiumPacks, type PremiumPack } from "@/lib/premium-packs";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { useIsMobile } from "@/hooks/use-mobile";
import { individualChecklists } from "@/lib/individual-checklists";
import { blogPosts } from "@/lib/blog-posts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { RotatingText } from "@/components/ui/rotating-text";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { subscribeToBlog } from "@/app/packs/actions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const heroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';

function SubscriptionForm() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await subscribeToBlog({ email });

    if (result.success) {
      setSubmitted(true);
       toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to the debrief.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: result.message,
      });
    }
    setLoading(false);
  };

  if (submitted) {
    return (
        <div className="flex items-center justify-center p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 dark:bg-green-900/50 dark:text-green-200 dark:border-green-800">
            <CheckCircle className="w-5 h-5 mr-3" />
            <p className="font-semibold">Thank you for subscribing!</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Subscribe Now
      </Button>
    </form>
  );
}


const WhyDetailMatters = () => {
  const points = [
    {
      problem: "Reliance on memory and individual 'heroes' for critical tasks.",
      solution: "A verifiable system that democratizes expertise and ensures consistency, regardless of who is on duty.",
      icon: <Users />
    },
    {
      problem: "Inconsistent quality and service that damages your brand reputation.",
      solution: "Standardized, actionable steps that translate your high standards into daily habits for every team member.",
      icon: <Award />
    },
    {
      problem: "Reactive 'firefighting' that consumes management time and resources.",
      solution: "A proactive framework that reduces operational friction, freeing your team to focus on growth and innovation.",
      icon: <BarChart />
    },
    {
      problem: "Panic during audits and inspections due to a lack of documented proof.",
      solution: "An audit-ready system with a clear, documented trail of diligence for every task, making you compliant by default.",
      icon: <ShieldCheck />
    },
    {
      problem: "The overwhelming task of creating professional SOPs from scratch.",
      solution: "An expert-built foundation that is 90% of the way there, saving you weeks of work.",
      icon: <FileText />
    },
    {
      problem: "Preventable errors leading to safety incidents, compliance fines, or revenue loss.",
      solution: "A system built on global standards (ISO, JCI, HACCP) to prevent failures before they happen.",
      icon: <AlertTriangle />
    },
  ];

  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Stop Firefighting. Start Building Excellence.
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
            In any professional operation, the difference between chaos and control lies in the system. Overlooking details doesn't just lead to mistakes—it creates risk.
          </p>
        </div>
        
        <Card className="w-full max-w-5xl mx-auto shadow-2xl">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 text-lg font-headline text-destructive text-center">The Risk (Without a System)</TableHead>
                  <TableHead className="w-1/2 text-lg font-headline text-green-600 text-center">The Solution (With MoreMeets)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {points.map((point, index) => (
                  <TableRow key={index} className="[&_td]:p-4 [&_td]:md:p-6">
                    <TableCell className="border-r">
                      <div className="flex items-start gap-3">
                         <XCircle className="w-5 h-5 text-destructive shrink-0 mt-1" />
                         <p className="text-sm md:text-base text-muted-foreground">{point.problem}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                       <div className="flex items-start gap-3">
                         <CheckCircleIcon className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                         <p className="text-sm md:text-base text-muted-foreground">{point.solution}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};


const HowWeAreDifferentSection = () => (
    <section id="how-we-are-different" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-2 md:px-6">
            <div className="max-w-4xl mx-auto p-8 md:p-12 bg-secondary/30 rounded-2xl shadow-sm border">
                <div className="text-center mb-8">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        We Don't Sell Software. We Sell The System.
                    </h2>
                </div>
                <div className="space-y-6 text-center text-muted-foreground text-base md:text-lg">
                    <p>
                        Most SOP platforms sell software subscriptions that help you manage or automate SOPs—but <strong>they don’t actually provide the SOP checklists themselves.</strong> You still have to create the content on your own.
                    </p>
                    <p>
                        MoreMeets is different. We provide <strong>ready-to-use, expert-written checklists</strong> built from years of research, industry consulting, and real-world operational experience. Instead of a costly recurring subscription, you get a <strong>one-time purchase with lifetime updates.</strong>
                    </p>
                     <p className="text-foreground font-semibold italic">
                        From Ensuring Compliance to Unlocking Excellence, Our Checklists Turn Best Practices into Daily Habits.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const GlobalStandardsSection = () => {
    const standards = [
        { name: "ISO 9001", description: "Quality Management" },
        { name: "HACCP / FSSAI", description: "Food Safety" },
        { name: "JCI & NABH", description: "Healthcare Quality" },
        { name: "OSHA / ISO 45001", description: "Workplace Safety" },
        { name: "ISO 14001 & ESG", description: "Sustainability" },
        { name: "ISPS / IATA", description: "Maritime & Aviation" },
        { name: "PCI DSS / GDPR", description: "Data & Payment Security" },
        { name: "SOX", description: "Financial Governance" }
    ];

    return (
        <section className="w-full py-12 md:py-24">
            <div className="container px-2 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        Audit-Ready. Globally Compliant. Operationally Excellent.
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-xl/relaxed">
                        Our checklists are more than just best practices; they are frameworks built upon the globally recognized standards that govern your industry. This ensures you're not just organized, but compliant and operating at a world-class level.
                    </p>
                </div>
                 <div className="max-w-5xl mx-auto mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {standards.map(standard => (
                            <div key={standard.name} className="flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg border border-primary/10 text-center">
                                <p className="font-bold text-sm md:text-lg text-primary">{standard.name}</p>
                                <p className="text-xs text-muted-foreground">{standard.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const FaqSection = () => (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-2 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                    Everything you need to know before you buy.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-expertise">
                        <AccordionTrigger className="text-lg font-semibold text-left">What's the expertise behind your checklists?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                           Our checklists have been curated and vetted by a core panel of over 30 globally experienced industry consultants and veteran leaders—GMs, compliance officers, and heads of security from world-leading organizations. This real-world knowledge is our core difference, ensuring you get proven, field-tested operational wisdom.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-free-comparison">
                        <AccordionTrigger className="text-lg font-semibold text-left">How are your checklists different from the free templates I find online?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground space-y-4">
                           <p>That's a crucial question. Free templates are typically simple lists of what to check, designed as lead magnets for expensive software. They give you a starting point, but the hard work of building an operational system is still on you.</p>
                           <p className="font-semibold text-foreground">MoreMeets is different. We sell the system itself.</p>
                           <p>Our blueprints are not just lists; they are complete, expert-built operational plans in an editable Excel format. Each task is structured with the critical details free templates miss:</p>
                           <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Who is responsible</strong> (Role & Department)</li>
                                <li><strong>When it needs to be done</strong> (Frequency)</li>
                                <li><strong>How important it is</strong> (Priority & Risk Level)</li>
                                <li><strong>How to prove it's done</strong> (Proof & Audit Trail)</li>
                           </ul>
                            <p>In short, free templates ask the questions. Our blueprints give your team the actionable answers. You're not buying a document; you're buying a ready-to-deploy system that saves you weeks of work and gives you the confidence that every detail is covered from day one.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-ai-alt">
                        <AccordionTrigger className="text-lg font-semibold text-left">Why choose these checklists over free templates or automated tools?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                           Because in professional operations, generic advice is dangerous. A single missed step—a detail you won't find in an automated template—can lead to compliance failures, safety incidents, or revenue loss. Our checklists are different. They have been meticulously built and pressure-tested by a panel of over 30 industry veterans who have managed these high-stakes environments.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold text-left">How will I receive the checklists after purchase?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Instantly. You’ll get access to download the Excel file directly from the confirmation page after payment. A copy of the download link is also sent to your email for safekeeping.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold text-left">Are these checklists editable?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, completely. All checklists come in a standard Microsoft Excel file (.xlsx), so you can fully customize them to fit your organization’s specific needs, branding, and workflow.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold text-left">Do I need any special software to use these?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            No. The files open in Microsoft Excel, Google Sheets, Apple Numbers, or any compatible spreadsheet software.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold text-left">Will I get future updates?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. Each purchase includes lifetime updates. Whenever we improve or add new SOPs to a pack you've purchased, you’ll receive the updated version for free.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold text-left">Is my payment secure?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, 100%. We use Razorpay, one of India’s most trusted payment gateways, which is fully PCI-DSS compliant. Your financial data is encrypted and is never stored on our servers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-lg font-semibold text-left">Can I share the checklists with my team or across multiple locations?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes. Your one-time purchase grants you a license to use and replicate the checklists across all teams, branches, and locations within your single organization.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-lg font-semibold text-left">Can I use these for client projects if I am a consultant?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Yes, consultants often use our packs as a foundational framework for their client engagements. However, the license does not permit reselling, rebranding for resale, or public redistribution of the files.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-10">
                        <AccordionTrigger className="text-lg font-semibold text-left">What is your refund policy?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                           Due to the nature of instantly downloadable digital products, all sales are final and we do not offer refunds. However, if you face any technical issues with accessing or downloading your files, our support team will resolve it for you immediately.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-11">
                        <AccordionTrigger className="text-lg font-semibold text-left">Can I request a custom checklist for my business?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Absolutely. We provide custom checklist and SOP creation services. Please <a href="https://calendly.com/aditi-imran-khan/30min" target="_blank" rel="noopener noreferrer" className="text-primary underline">contact us with your requirements</a>, and our experts will tailor a package specifically for you.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-12">
                        <AccordionTrigger className="text-lg font-semibold text-left">How can I get support if I have an issue?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            You can reach us anytime at `more@moremeets.com` or via the <Link href="/contact" className="text-primary underline">contact page</Link> on our website. We are committed to helping you and typically respond within 24 hours.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

function PackList({ packs, title, description }: { packs: PremiumPack[], title: string, description: string }) {
    const isMobile = useIsMobile();
    
    const PackCard = ({ pack }: { pack: PremiumPack }) => {
        const totalChecklists = pack.checklists.length;
        const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);

        return (
            <Card className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardHeader className="p-6 relative">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {pack.badgeText && (
                            <Badge variant={pack.badgeVariant || 'default'} className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 w-fit">
                                <Star className="w-4 h-4" /> {pack.badgeText}
                            </Badge>
                        )}
                        <Badge variant="secondary">{totalChecklists} Checklists</Badge>
                        <Badge variant="secondary">{totalTasks}+ Tasks</Badge>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                            {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                        </div>
                        <div className="flex-1">
                            <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                            <CardDescription className="mt-1 text-sm md:text-base">{pack.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 flex-1">
                    <h3 className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        {pack.sampleItems.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="h-4 w-4 mr-2 mt-1 shrink-0 text-accent">{item.icon}</span>
                                <span dangerouslySetInnerHTML={{ __html: item.text.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="p-6 pt-2 mt-auto">
                    <Button asChild className="w-full font-bold" variant="default">
                        <Link href={`/packs/${pack.id}`}>
                            View Full Checklist & Purchase
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        );
    };

    return (
        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        {title}
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        {description}
                    </p>
                </div>

                {isMobile ? (
                    <Carousel 
                        opts={{ align: "start", loop: true }}
                        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
                        className="w-full max-w-[calc(100%-2rem)] mx-auto"
                    >
                        <CarouselContent>
                            {packs.map((pack) => (
                                <CarouselItem key={pack.id} className="p-2">
                                    <div className="p-1 h-full">
                                        <PackCard pack={pack} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-accent border-accent -left-4" />
                        <CarouselNext className="text-accent border-accent -right-4" />
                    </Carousel>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {packs.map((pack) => (
                            <PackCard key={pack.id} pack={pack} />
                        ))}
                    </div>
                )}
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

const IndividualChecklistsSection = () => {
    const isMobile = useIsMobile();
    const bestsellers = individualChecklists.slice(0, 3);

    const ChecklistCard = ({ checklist }: { checklist: (typeof bestsellers)[0] }) => (
         <Card className="flex flex-col text-center rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border h-full">
            <CardHeader className="p-6">
                {React.cloneElement(checklist.icon, { className: "w-10 h-10 text-accent mx-auto mb-3" })}
                <CardTitle className="text-lg font-headline">{checklist.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 flex-1">
                <p className="text-sm text-muted-foreground">{checklist.description}</p>
            </CardContent>
                <CardFooter className="p-6 pt-4 mt-auto flex-col items-center gap-4">
                <Button asChild className="w-full font-bold flex-col h-auto" variant="secondary">
                    <Link href={`/checklists/${checklist.id}`}>
                        <span>Own It Forever</span>
                        <span className="text-xl font-bold">₹{checklist.priceINR}</span>
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );

    return (
        <section id="individual-checklists" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        Solve a Specific Problem, Instantly
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        Not ready for a full pack? Start with one of our most popular, high-impact checklists. The perfect way to see the MoreMeets standard in action.
                    </p>
                </div>

                 {isMobile ? (
                     <Carousel 
                        opts={{ align: "start", loop: true }}
                        plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
                        className="w-full max-w-[calc(100%-2rem)] mx-auto"
                    >
                        <CarouselContent>
                            {bestsellers.map((checklist) => (
                                <CarouselItem key={checklist.id} className="p-2">
                                    <div className="p-1 h-full">
                                       <ChecklistCard checklist={checklist} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-accent border-accent -left-4" />
                        <CarouselNext className="text-accent border-accent -right-4" />
                    </Carousel>
                 ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {bestsellers.map((checklist) => (
                           <ChecklistCard key={checklist.id} checklist={checklist} />
                        ))}
                    </div>
                 )}


                 <div className="text-center mt-16">
                    <Button asChild size="lg" className="group">
                        <Link href="/checklists">
                            View All Bestselling Checklists
                             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};




const FeaturedBlogPostsSection = () => {
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Decoding the Black Box
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
            Recovering the critical data from catastrophic failures to make your business safer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestPosts.map(post => (
            <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                    {post.imageUrl && (
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            width={600}
                            height={340}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    )}
                </Link>
                <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0,2).map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <CardTitle className="text-xl font-headline">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="secondary" size="sm">
                      <Link href={`/blog/${post.slug}`}>Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="group">
                <Link href="/blog">
                    Read All Articles
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};


export default function HomeClientPage() {
  const featuredPacks = premiumPacks.filter(p => p.bestseller);
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImageUrl})`,
            }}
          />
            <div className="container relative z-10 px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter font-headline text-white drop-shadow-md">
                            The Professional Standard for Compliance & Operations Checklists.
                        </h1>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-white/90 text-xl md:text-2xl/relaxed mx-auto [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)] font-semibold tracking-wide">
                            <span className="flex items-center gap-2">
                                <Check className="w-6 h-6 text-accent" />
                                <span>Instant SOPs</span>
                            </span>
                             <span className="hidden sm:inline-block">•</span>
                            <span className="flex items-center gap-2">
                                <Check className="w-6 h-6 text-accent" />
                                <span>Total Compliance</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 pt-4">
                        <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
                            <Link href="/packs">
                            Browse All Packages
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-1">
                             <p className="text-xs text-white/80">
                                International Standards Integrated: ISO, JCI, HACCP, OSHA & More
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="w-full py-12 bg-background">
            <div className="container px-2 md:px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline text-primary">
                    Meet More <RotatingText words={["Standards.", "Compliance.", "Consistency."]} />
                </h2>
            </div>
        </section>

        <ValuePropositionSection />

        <WhoIsItForSection />
        
        <WhyDetailMatters />

        <HowWeAreDifferentSection />

        <GlobalStandardsSection />

        <React.Suspense fallback={<div>Loading packs...</div>}>
            <PackList 
                packs={featuredPacks}
                title="Bestselling Checklist Packs"
                description="Get instant access to expert-crafted operational SOPs trusted by industry leaders. One-time purchase, lifetime updates."
            />
        </React.Suspense>
        
        <IndividualChecklistsSection />
        
        <FeaturedBlogPostsSection />

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py32">
          <div className="container px-2 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font.bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Loved by Professionals Worldwide
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                Trusted by managers from world-leading organizations.
              </p>
            </div>
            <Carousel 
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => {
                  const image = PlaceHolderImages.find(img => img.id === testimonial.imageId);
                  return (
                    <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3 p-4">
                      <Card className="p-6 flex flex-col items-center text-center shadow-lg rounded-2xl h-full">
                        <div className="mb-4 rounded-full overflow-hidden w-24 h-24 border-2 border-primary/10">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={testimonial.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                        <CardContent className="p-0 flex-1">
                          <p className="text-muted-foreground italic text-sm md:text-base">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardFooter className="p-0 mt-4 flex-col">
                          <p className="font-bold font-headline">{testimonial.name}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="text-accent border-accent -left-4" />
              <CarouselNext className="text-accent border-accent -right-4" />
            </Carousel>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
            <div className="container px-2 md:px-6">
                 <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 p-8 border rounded-2xl bg-secondary/50">
                    <h3 className="font-bold text-center text-2xl font-headline text-primary">The Most Valuable Newsletter in Operations.</h3>
                    <p className="text-center text-muted-foreground">One insight per edition that could save your company millions. Straight to your inbox.</p>
                    <SubscriptionForm />
                </div>
            </div>
        </section>

        <FaqSection />

      </main>
      <Footer />
    </div>
  );
}

    

    
