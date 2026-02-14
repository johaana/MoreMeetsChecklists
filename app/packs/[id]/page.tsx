
import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PricingClient from "../pricing-client";
import { FaqSection } from "@/components/layout/faq-section";
import { Footer } from "@/components/layout/footer";

type Props = {
  params: Promise<{ id: string }>
}

const defaultHeroImageUrl = 'https://picsum.photos/seed/compliance-standard/1200/800';

// Operational-focused images for each industry
const packImageMap: Record<string, string> = {
  'film_production_pack': 'https://picsum.photos/seed/movie-set-ops/1200/800',
  'ott_platform_pack': 'https://picsum.photos/seed/streaming-server-ops/1200/800',
  'sports_clubs_stadium_operations_pack': 'https://picsum.photos/seed/stadium-crowd-mgmt/1200/800',
  'cinema_operations_pack': 'https://picsum.photos/seed/cinema-projection-ops/1200/800',
  'pharmacy_ops_pack': 'https://picsum.photos/seed/pharmacy-dispensing-standard/1200/800',
  'healthcare_and_hospital_operations': 'https://picsum.photos/seed/hospital-clinical-ops/1200/800',
  'facility_management_blueprint': 'https://picsum.photos/seed/building-facility-mgmt/1200/800',
  'animal_shelter_pack': 'https://picsum.photos/seed/animal-welfare-ops/1200/800',
  'hotels_and_resorts': 'https://picsum.photos/seed/hotel-housekeeping-ops/1200/800',
  'restaurants': 'https://picsum.photos/seed/restaurant-kitchen-haccp/1200/800',
  'jewelry_and_luxury_retail': 'https://picsum.photos/seed/luxury-vault-security/1200/800',
  'fashion_and_apparel_retail': 'https://picsum.photos/seed/fashion-retail-inventory/1200/800',
  'school_operations_pack': 'https://picsum.photos/seed/school-bus-safety-ops/1200/800',
  'university_college_ops': 'https://picsum.photos/seed/university-campus-mgmt/1200/800',
  'logistics_warehouse_pack': 'https://picsum.photos/seed/warehouse-logistics-ops/1200/800',
  'manufacturing_operations_ehs_pack': 'https://picsum.photos/seed/factory-safety-loto/1200/800',
  'food_manufacturing_ops': 'https://picsum.photos/seed/food-factory-hygiene/1200/800',
  'supermarket_grocery_retail_pack': 'https://picsum.photos/seed/supermarket-cold-chain/1200/800',
  'electronics_showroom_pack': 'https://picsum.photos/seed/electronics-store-safety/1200/800',
  'theme_park_ops_pack': 'https://picsum.photos/seed/theme-park-ride-safety/1200/800',
  'corporate_legal_compliance_starter_kit': 'https://picsum.photos/seed/corporate-legal-compliance/1200/800',
  'enterprise_risk_cybersecurity_pack': 'https://picsum.photos/seed/enterprise-it-security/1200/800',
  'bakery_confectionery_pack': 'https://picsum.photos/seed/bakery-production-hygiene/1200/800',
  'franchise_operations_pack': 'https://picsum.photos/seed/franchise-store-audit/1200/800'
};

export async function generateMetadata(
  { params }: Props
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

  return (
    <>
      <PackClientPage pack={pack} heroImageUrl={heroImageUrl} />
      <PricingClient pack={pack} />
      <FaqSection />
      <Footer />
    </>
  );
}
