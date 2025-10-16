

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { premiumPacks } from '@/lib/premium-packs';
import { ArrowLeft, FileCheck2, CheckCircle, Landmark, Globe } from 'lucide-react';
import React from 'react';
import PricingClient from './pricing-client';
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


type Props = {
  params: { id: string }
}

const defaultHeroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';

const packImageMap: Record<string, string> = {
  'film_production_pack': 'https://i.postimg.cc/zvqmVdT5/movie-production-1.jpg',
  'ott_platform_pack': 'https://i.postimg.cc/90c3rxyh/ott-platforms.webp',
  'sports_clubs_facilities_pack': 'https://i.postimg.cc/WpYSfqRk/sports-club-management.jpg',
  'fitness_centers_gyms_pack': 'https://i.postimg.cc/mDyrvM7x/gym-2.jpg',
  'cinema_operations_pack': 'https://i.postimg.cc/nrn8Cdqj/cinema-hall-1.jpg',
  'pharmacy_ops_pack': 'https://i.postimg.cc/MHzkvsV4/pharmacy.jpg',
  'healthcare_and_hospital_operations': 'https://i.postimg.cc/Gtb0HMvR/hospital1.webp',
  'facility_management_blueprint': 'https://i.postimg.cc/sQHHL4nm/office1.jpg',
  'animal_shelter_pack': 'https://i.postimg.cc/hPrThfgt/animal-shelter-1.jpg',
  'hotels_and_resorts': defaultHeroImageUrl,
  'restaurants': 'https://i.postimg.cc/9QRtnf3Z/food1.jpg',
  'jewelry_and_luxury_retail': 'https://i.postimg.cc/JnbXpSjM/luxury-retail-2.jpg',
  'fashion_and_apparel_retail': 'https://i.postimg.cc/d1G5M6T3/fashion-retail-1.jpg',
  'school_operations_pack': 'https://i.postimg.cc/hGC6S2JD/school1.jpg',
  'university_college_ops': 'https://i.postimg.cc/FKP89TYW/college.jpg',
  'logistics_warehouse_pack': 'https://i.postimg.cc/6qQ1FnWm/logistics.webp',
  'manufacturing_operations_ehs_pack': 'https://i.postimg.cc/kGhhCGDM/manufacturing.jpg',
  'food_manufacturing_ops': 'https://i.postimg.cc/kGhhCGDM/manufacturing.jpg',
  'supermarket_grocery_retail_pack': 'https://i.postimg.cc/L63xxv8M/supermarket-main.webp',
};


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const pack = premiumPacks.find((p) => p.id === id);

  if (!pack) {
    return {
      title: 'Package Not Found | MoreMeets',
      description: 'The requested checklist package could not be found.',
    };
  }
  
  const title = `${pack.title} | MoreMeets`;
  const description = `Download the complete ${pack.title} checklist pack. Includes ${pack.checklists.length} expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`;

  const heroImageUrl = packImageMap[id] || defaultHeroImageUrl;
  const openGraphImages = heroImageUrl ? [{ url: heroImageUrl, width: 1200, height: 630, alt: `${pack.title} Preview` }] : [];

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: openGraphImages,
    },
     twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: openGraphImages.map(img => img.url),
    },
  }
}

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-2 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        {content.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {content.points.map((point, index) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const GlobalStandardsSection = ({ pack }: { pack: (typeof premiumPacks)[0] }) => {
    if (!pack.globalStandards) {
        return null;
    }

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">
                        {pack.globalStandards.title}
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        Our checklists are built upon globally recognized standards to ensure you're operating at a world-class level.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <Card key={index} className="flex flex-col text-center p-6">
                            <CardHeader className="p-0">
                                <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
                                <CardTitle className="text-lg font-headline">{standard.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2 flex-1">
                                <p className="text-sm text-muted-foreground">{standard.description}</p>
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
    
    const individualPrice = relatedChecklists[0]?.priceINR || 0;
    const packPrice = premiumPacks.find(p => p.id === packId)?.priceINR || 0;
    const savings = (relatedChecklists.length * individualPrice) - packPrice;


    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline text-primary">
                        Just Need a Specific Solution?
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        This pack is the best value, but you can also start with one of our high-impact individual checklists.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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


export default function Page({ params }: { params: { id: string } }) {
  const pack = premiumPacks.find((p) => p.id === params.id);

  if (!pack) {
    notFound();
  }
  
  const heroImageUrl = packImageMap[params.id] || defaultHeroImageUrl;
  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pack.title,
    description: `Download the complete ${pack.title} checklist pack. Includes ${pack.checklists.length} expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`,
    image: heroImageUrl,
    brand: {
      '@type': 'Brand',
      name: 'MoreMeets',
    },
    offers: {
        '@type': 'Offer',
        price: pack.priceINR,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full bg-secondary/30 py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="grid md:grid-cols-[auto_1fr] items-start gap-6 md:gap-x-8 max-w-5xl mx-auto">
                     <div className="row-start-1 md:col-start-1 flex items-center md:items-start gap-4">
                        <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-2xl bg-primary/10 border-2 border-primary/20 shrink-0">
                           {React.cloneElement(pack.icon, { className: "w-10 h-10 md:w-14 md:h-14 text-primary" })}
                       </div>
                     </div>
                    <div className="row-start-2 md:row-start-1 md:col-start-2 space-y-2">
                        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                            {pack.title}
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            {pack.description}
                        </p>
                         <div className="mt-4 bg-background/50 border p-4 rounded-lg">
                            <h2 className="text-sm font-semibold text-primary mb-2">Perfect For:</h2>
                            <p className="text-sm text-foreground/80">{audience.join(' • ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <PainPointsSection packId={pack.id} />

        <section id="checklists" className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        What's Included: A Complete Operational Toolkit
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        This pack contains {pack.checklists.length} professional checklists, covering every aspect of your operation with over {totalTasks} detailed tasks.
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {pack.checklists.map((checklist, index) => (
                        <Card key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                           <CardHeader className="flex flex-row items-center gap-4 bg-muted/30 p-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                                   {React.cloneElement(checklist.icon, { className: "w-6 h-6 text-primary" })}
                                </div>
                                <div>
                                    <CardTitle>{checklist.title}</CardTitle>
                                    <CardDescription>
                                        <strong>Dept:</strong> {checklist.department} | <strong>Freq:</strong> {checklist.frequency}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                                <p className="text-muted-foreground">{checklist.summary}</p>
                                <h3 className="font-semibold text-primary/80 mt-2">Contains {checklist.tasks.length} detailed tasks.</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <PricingClient pack={pack} />

        <GlobalStandardsSection pack={pack} />

        <IndividualChecklistsTeaser packId={pack.id} />


      </main>
       <Footer />
    </div>
  );
}

  
