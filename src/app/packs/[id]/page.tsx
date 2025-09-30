
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { premiumPacks } from '@/lib/premium-packs';
import { ArrowLeft, FileCheck2 } from 'lucide-react';
import React from 'react';
import PricingClient from './pricing-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata, ResolvingMetadata } from 'next';
import { painPointsContent } from '@/lib/pain-points-content';
import { Footer } from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SiteHeader } from '@/components/layout/header';

type Props = {
  params: { id: string }
}

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
  
  const title = `${pack.title} Pack | MoreMeets`;
  const description = `Download the complete ${pack.title} checklist pack. Includes ${pack.checklists.length} expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`;

  const categoryImageMap: Record<string, string | undefined> = {
    "Hospitality": PlaceHolderImages.find(img => img.id === 'for-hospitality')?.imageUrl,
    "Corporate": PlaceHolderImages.find(img => img.id === 'break-facility')?.imageUrl,
    "Retail": PlaceHolderImages.find(img => img.id === 'for-startups')?.imageUrl,
    "Healthcare": PlaceHolderImages.find(img => img.id === 'testimonial-elena')?.imageUrl,
    "Education": PlaceHolderImages.find(img => img.id === 'testimonial-marcus')?.imageUrl,
    "Manufacturing": PlaceHolderImages.find(img => img.id === 'for-sustainability')?.imageUrl,
    "Events": PlaceHolderImages.find(img => img.id === 'for-event-planners')?.imageUrl,
    "Personal": PlaceHolderImages.find(img => img.id === 'hero-wedding')?.imageUrl,
    "Automotive": PlaceHolderImages.find(img => img.id === 'break-chauffeur')?.imageUrl,
    "Real Estate": PlaceHolderImages.find(img => img.id === 'showcase-hotel-exterior')?.imageUrl,
    "Compliance": PlaceHolderImages.find(img => img.id === 'showcase-corporate-hospitality')?.imageUrl,
    "Wellness": PlaceHolderImages.find(img => img.id === 'showcase-food')?.imageUrl,
  };
  
  const ogImageUrl = categoryImageMap[pack.category] || (await parent).openGraph?.images?.[0]?.url;

  const openGraphImages = ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: `${pack.title} Preview` }] : [];

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

const PainPoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-6 rounded-lg border bg-background p-6 transition-shadow hover:shadow-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-1">
            {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
        </div>
        <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

const PainPointsSection = ({ category }: { category: string }) => {
    const selected = painPointsContent[category as keyof typeof painPointsContent] || painPointsContent.Hospitality;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        {selected.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {selected.points.map((point, index) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Page({ params }: { params: { id: string } }) {
  const pack = premiumPacks.find((p) => p.id === params.id);

  if (!pack) {
    notFound();
  }
  
  const whoIsItForMap: Record<string, string[]> = {
    "Hospitality": ["Hotel Owners", "General Managers", "COOs", "Heads of Security", "Restaurant Owners", "and their teams"],
    "Corporate": ["Founders", "COOs", "VPs of Operations", "Head of Administration", "Head of Facilities", "Chief Engineers"],
    "Retail": ["Store Owners", "Retail COOs/VPs", "Heads of Loss Prevention", "Heads of Retail Operations", "District/Area Heads"],
    "Healthcare": ["Hospital Owners", "COOs", "Heads of Quality & Compliance", "Lab Owners", "and their teams"],
    "Education": ["School Owners", "Trustees", "Principals", "Head of Administration", "and their teams"],
    "Manufacturing": ["Plant Heads", "COOs", "VPs of Production", "Heads of Safety"],
    "Events": ["Event Company Owners", "and their teams"],
    "Personal": ["Frequent Travelers", "Pet Owners"],
    "Automotive": ["Dealership Owners", "Workshop Owners", "Service Directors"],
    "Real Estate": ["Property Firm Owners", "Landlords", "Heads of Operations (REITs)"],
    "Compliance": ["Chief Compliance Officers (CCOs)", "Heads of ESG", "Heads of Quality (ISO)"],
    "Wellness": ["Gym/Spa Chain Owners", "Wellness Directors"]
  };

  const audience = whoIsItForMap[pack.category] || ["Industry Professionals"];

  const categoryImageMap: Record<string, string | undefined> = {
    "Hospitality": PlaceHolderImages.find(img => img.id === 'for-hospitality')?.imageUrl,
    "Corporate": PlaceHolderImages.find(img => img.id === 'break-facility')?.imageUrl,
    "Retail": PlaceHolderImages.find(img => img.id === 'for-startups')?.imageUrl,
    "Healthcare": PlaceHolderImages.find(img => img.id === 'testimonial-elena')?.imageUrl,
    "Education": PlaceHolderImages.find(img => img.id === 'testimonial-marcus')?.imageUrl,
    "Manufacturing": PlaceHolderImages.find(img => img.id === 'for-sustainability')?.imageUrl,
  };
  const packImage = categoryImageMap[pack.category];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pack.title,
    description: pack.description,
    image: packImage,
    offers: {
      '@type': 'Offer',
      price: pack.priceINR.toString(),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    brand: {
      '@type': 'Brand',
      name: 'MoreMeets',
    },
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <SiteHeader />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                <ArrowLeft className="w-4 h-4 mr-1 inline-block" />
                All Packages
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full bg-secondary/30 py-12 md:py-16">
            <div className="container px-4 md:px-6">
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

        <PricingClient pack={pack} />

        <PainPointsSection category={pack.category} />

        <section id="checklists" className="w-full py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        What's Included: A Complete Operational Toolkit
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        This pack contains {pack.checklists.length} professional checklists, covering every aspect of your operation.
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {pack.checklists.map((checklist, index) => (
                        <Card key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="bg-muted/30">
                                <CardTitle className="flex items-center gap-3">
                                    <FileCheck2 className="w-6 h-6 text-primary"/>
                                    {checklist.title}
                                </CardTitle>
                                <CardDescription>
                                    <strong>Department:</strong> {checklist.department} | <strong>Frequency:</strong> {checklist.frequency} | <strong>Role:</strong> {checklist.role}
                                </CardDescription>
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


      </main>
       <Footer />
    </div>
  );
}
