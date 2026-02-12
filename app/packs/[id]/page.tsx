import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import PricingClient from "../pricing-client";
import { FaqSection } from "@/components/layout/faq-section";
import { Footer } from "@/components/layout/footer";

type Props = {
  params: Promise<{ id: string }>
}

const defaultHeroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';

const packImageMap: Record<string, string> = {
  'film_production_pack': 'https://i.postimg.cc/zvqmVdT5/movie-production-1.jpg',
  'ott_platform_pack': 'https://i.postimg.cc/90c3rxyh/ott-platforms.webp',
  'sports_clubs_stadium_operations_pack': 'https://i.postimg.cc/WpYSfqRk/sports-club-management.jpg',
  'fitness_centers_gyms_pack': 'https://i.postimg.cc/mDyrvM7x/gym-2.jpg',
  'cinema_operations_pack': 'https://i.postimg.cc/nrn8Cdqj/cinema-hall-1.jpg',
  'pharmacy_ops_pack': 'https://i.postimg.cc/MHzkvsV4/pharmacy.jpg',
  'healthcare_and_hospital_operations': 'https://i.postimg.cc/Gtb0HMvR/hospital1.webp',
  'facility_management_blueprint': 'https://i.postimg.cc/9fnbtT36/facility-management.webp',
  'animal_shelter_pack': 'https://i.postimg.cc/hPrThfgt/animal-shelter-1.jpg',
  'hotels_and_resorts': defaultHeroImageUrl,
  'restaurants': 'https://i.postimg.cc/9QRtnf3Z/food1.jpg',
  'jewelry_and_luxury_retail': 'https://i.postimg.cc/LX3xVv9R/jewelry-retail2.jpg',
  'fashion_and_apparel_retail': 'https://i.postimg.cc/L5MzcDw7/fashion-retail.webp',
  'school_operations_pack': 'https://i.postimg.cc/hGC6S2JD/school1.jpg',
  'university_college_ops': 'https://i.postimg.cc/FKP89TYW/college.jpg',
  'logistics_warehouse_pack': 'https://i.postimg.cc/6qQ1FnWm/logistics.webp',
  'manufacturing_operations_ehs_pack': 'https://i.postimg.cc/kGhhCGDM/manufacturing.jpg',
  'food_manufacturing_ops': 'https://i.postimg.cc/kGhhCGDM/manufacturing.jpg',
  'supermarket_grocery_retail_pack': 'https://i.postimg.cc/L63xxv8M/supermarket-main.webp',
  'electronics_showroom_pack': 'https://i.postimg.cc/X7xzsFzy/retail-electronic.jpg',
  'theme_park_ops_pack': 'https://i.postimg.cc/Wz6MTrcB/theme-park.jpg',
  'corporate_legal_compliance_starter_kit': 'https://i.postimg.cc/3RjXwFvd/corporate-dfl-epitome.jpg',
  'enterprise_risk_cybersecurity_pack': 'https://i.postimg.cc/3wY7sR3Z/cybersecurity.webp',
  'bakery_confectionery_pack': 'https://i.postimg.cc/pXGcVm5p/bakery.jpg',
  'franchise_operations_pack': 'https://i.postimg.cc/5N18qf3p/franchise-business.webp'
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const pack = premiumPacks.find((p) => p.id === id);

  if (!pack) {
    return {
      title: 'Package Not Found | MoreMeets™',
      description: 'The requested checklist package could not be found.',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const title = `${pack.title} - Excel SOP Templates | MoreMeets™`;
  const description = `Download the complete ${pack.title} checklist pack. Expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`;
  
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'pack');
  ogUrl.searchParams.set('id', pack.id);

  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [{ url: ogUrl.toString(), width: 1200, height: 630, alt: title }],
    },
     twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams() {
  return premiumPacks.map((pack) => ({
    id: pack.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const pack = premiumPacks.find((p) => p.id === id);

  if (!pack) {
    notFound();
  }
  
  const heroImageUrl = packImageMap[id] || defaultHeroImageUrl;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'pack');
  ogUrl.searchParams.set('id', pack.id);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pack.title,
    description: `Download the complete ${pack.title} checklist pack. One-time purchase.`,
    image: ogUrl.toString(),
    brand: {
      '@type': 'Brand',
      name: 'MoreMeets™',
    },
    offers: {
        '@type': 'Offer',
        price: pack.priceINR.toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
  };
  
  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackClientPage pack={pack} heroImageUrl={heroImageUrl} />
      <PricingClient pack={pack} />
      <FaqSection />
      <Footer />
    </>
  );
}