
'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { premiumPacks } from '@/lib/premium-packs';
import { ArrowLeft, FileCheck2, CheckCircle, Landmark, Globe, Check, Download, Eye, Sparkles, Siren, Bug, TrendingUp, Lock, FileLock, Users, Banknote, Bus, TestTube, BriefcaseBusiness, ShieldCheck, Handshake, BookOpen, Car, Drill, SprayCan, Megaphone, Stethoscope, Microscope, FileWarning, Ambulance, DoorClosed, CircleDollarSign, Watch, Barcode, Wrench, LifeBuoy, DollarSign, Thermometer, UserCog2, Key, Router, Package, Drama, Cog, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Code, ScanFace, HandPlatter, Scissors, Fish, Cloud, Theater, PackageCheck, UserCheck, KeyRound, Building2, Wind, PawPrint, PersonStanding, Dumbbell, ShoppingCart, Waves, Utensils, Building, MonitorPlay, Film, Tv, Shirt, Gem, Factory, HardHat, GraduationCap, School, Sprout, ShoppingBasket, Wifi, Link as LinkIcon, BrainCircuit, Bot, Syringe, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, AnchorIcon, Clapperboard, Library, Recycle, FileCheck, Truck, ClipboardCheck, UserPlus, Scale, Projector, Award, HeartPulse, Star } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { Metadata, ResolvingMetadata } from 'next';
import { painPointsContent } from '@/lib/pain-points-content';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { individualChecklists } from '@/lib/individual-checklists';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from '@/hooks/use-mobile';
import { PainPoint } from '@/components/ui/pain-point';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { writeFile, utils } from 'xlsx-js-style';
import type { Checklist as PackChecklist, PremiumPack } from "@/lib/premium-packs";
import Image from 'next/image';
import PricingClient from './pricing-client';

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-2 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">
                        {content.title}
                    </h2>
                     <p className="mt-4 text-xs text-muted-foreground italic">{content.disclaimer}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point, index) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ComplianceIcon = ({ standard }: { standard: string }) => {
    const s = standard.toUpperCase();
    if (s.includes('NABH')) return <Star className="w-4 h-4 text-green-600" />;
    if (s.includes('JCI')) return <Globe className="w-4 h-4 text-blue-600" />;
    if (s.includes('WHO')) return <HeartPulse className="w-4 h-4 text-cyan-600" />;
    if (s.includes('ISO 9001')) return <Award className="w-4 h-4 text-yellow-600" />;
    if (s.includes('ISO 45001')) return <HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('ISO 27001')) return <ShieldCheck className="w-4 h-4 text-purple-600" />;
    if (s.includes('ISO 22000')) return <Utensils className="w-4 h-4 text-blue-500" />;
    if (s.includes('HACCP')) return <ShieldCheck className="w-4 h-4 text-red-600" />;
    if (s.includes('OSHA')) return <HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('PGA')) return <Film className="w-4 h-4 text-yellow-500" />;
    if (s.includes('FIA')) return <Award className="w-4 h-4 text-blue-500" />;
    if (s.includes('IAAPA')) return <FerrisWheel className="w-4 h-4 text-purple-500" />;
    if (s.includes('NIST')) return <BriefcaseBusiness className="w-4 h-4 text-gray-600" />;
    return <Landmark className="w-4 h-4 text-gray-500" />;
};


const GlobalStandardsSection = ({ pack }: { pack: (typeof premiumPacks)[0] }) => {
    if (!pack.globalStandards || !pack.globalStandards.standards) {
        return null;
    }

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline">
                        Audit-Ready. Globally Compliant.
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4">
                        Our checklists are built upon globally recognized standards to ensure you're operating at a world-class level.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto items-start justify-center">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <Card key={index} className="flex flex-col text-center p-4 md:p-6 bg-background">
                            <CardHeader className="p-0">
                                <div className="text-accent mx-auto mb-2"><ComplianceIcon standard={standard.name} /></div>
                                <CardTitle className="text-sm md:text-lg font-headline">{standard.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2 flex-1">
                                <p className="text-xs text-muted-foreground">{standard.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const IndividualChecklistsTeaser = ({ packId }: { packId: string }) => {
    const relatedChecklists = individualChecklists.filter(ic => ic.relatedPackId === packId);

    if (relatedChecklists.length === 0) {
        return null;
    }
    
    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary">
                        Just Need a Specific Solution?
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4">
                        This pack is the best value, but you can also start with one of our high-impact individual checklists.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-center">
                    {relatedChecklists.map((checklist) => (
                        <Card key={checklist.id} className="flex flex-col text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                             <CardHeader>
                                {React.cloneElement(checklist.icon, { className: "w-8 h-8 text-accent mx-auto mb-2" })}
                                <CardTitle className="text-base font-headline leading-snug">{checklist.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground">{checklist.description}</p>
                            </CardContent>
                             <CardFooter className="flex-col items-center gap-2 pt-4">
                                <Button asChild variant="secondary" className="w-full font-bold flex-col h-auto py-2 text-base">
                                    <Link href={`/checklists/${checklist.id}`}>
                                        <span className="text-sm font-medium">Own It Forever</span>
                                        <span className="text-2xl font-bold">₹{checklist.priceINR}</span>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
  const pricingSectionRef = React.useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = React.useState(false);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    if (!isMobile) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when the pricing section is NOT visible
        setShowStickyBar(!entry.isIntersecting);
      },
      // When the top of the pricing section is 100% off the top of the screen
      { rootMargin: "0px 0px -100% 0px", threshold: 0 }
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
  }, [isMobile]);

  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists.length;
  const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />

        <main className="flex-1">
          <section className="w-full pt-12 pb-6 md:pt-20 md:pb-10 bg-secondary/30">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:gap-16 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-primary">
                    {pack.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl">
                    {pack.description}
                  </p>
                   <div className="text-sm text-muted-foreground font-semibold">
                    Includes <span className="text-primary font-bold">{totalChecklists} checklists</span> with over <span className="text-primary font-bold">{totalTasks} individual tasks</span>.
                  </div>
                  <div className="mt-4 bg-background/50 border p-4 rounded-lg">
                    <h2 className="text-sm font-semibold text-primary mb-2">PERFECT FOR:</h2>
                    <p className="text-sm text-muted-foreground">{audience.join(' • ')}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={heroImageUrl}
                    alt={pack.title}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl object-cover aspect-[3/2]"
                  />
                </div>
              </div>
            </div>
          </section>

          <PainPointsSection packId={pack.id} />

          <section id="checklists" className="w-full py-12 md:py-16">
              <div className="container px-2 md:px-6">
                  <div className="max-w-4xl mx-auto text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">
                          A Complete System for Operational Excellence
                      </h2>
                      <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4">
                          This pack contains {totalChecklists} checklists and over {totalTasks} individual tasks, giving you a comprehensive framework to:
                      </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-2">
                      {pack.sampleItems.map((item, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-background/50 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 shrink-0">
                                  <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                  <p className="font-semibold text-foreground/90" dangerouslySetInnerHTML={{ __html: item.text.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          
          <div ref={pricingSectionRef}>
            <PricingClient pack={pack} />
          </div>

          <GlobalStandardsSection pack={pack} />

          <IndividualChecklistsTeaser packId={pack.id} />


        </main>
         <Footer />
      </div>
      {pack.priceINR > 0 && (
         <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='flex items-center justify-between gap-4'>
                 <div className='flex-1'>
                    <p className='font-bold text-sm truncate'>{pack.title}</p>
                    <p className='text-lg font-extrabold'>₹{pack.priceINR}</p>
                </div>
                <div className="flex-shrink-0">
                     <Button asChild>
                        <Link href="#pricing">View Pricing</Link>
                    </Button>
                </div>
            </div>
        </div>
      )}
    </>
  );
}
