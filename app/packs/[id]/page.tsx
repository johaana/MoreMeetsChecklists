
import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import images from '@/lib/placeholder-images.json';

type Props = {
  params: Promise<{ id: string }>
}

const descriptions: Record<string, string> = {
  'restaurants': "Stop margin leakage, HACCP misses, and shift inconsistency with pre-built restaurant operational SOPs, live dashboards, trainer notes, and audit-ready daily execution tracking.",
  'hotels_and_resorts': "Pre-built hotel operational SOPs for housekeeping, front office, engineering, guest experience, and operational continuity. Built for real-time visibility and audit-ready execution.",
  'healthcare_and_hospital_operations': "Operational SOPs for hospitals and clinics covering nursing workflows, safety checks, compliance readiness, medication handling, and departmental accountability.",
  'retail_operations_system': "Retail operational SOPs for floor readiness, inventory discipline, visual merchandising, opening/closing checks, and multi-store operational consistency.",
  'school_operations_pack': "Operational SOPs for schools covering transport safety, campus readiness, hygiene checks, staff accountability, emergency preparedness, and daily operational visibility.",
  'franchise_operations_pack': "Standardize multi-location operations with franchise operational SOPs for audit readiness, brand consistency, onboarding, reporting discipline, and operational continuity.",
  'facility_management_blueprint': "Operational SOPs for facilities management covering MEP systems, vendor SLAs, energy tracking, life safety, preventive maintenance, and infrastructure visibility.",
  'cinema_operations_pack': "Cinema operational SOPs for show readiness, concession control, crowd flow, projection checks, emergency readiness, and multi-screen operational consistency.",
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
  
  const siteUrl = 'https://www.moremeets.com';
  const title = `MoreMeets™ | ${pack.title}`;
  const description = descriptions[id] || `Pre-built ${pack.category} operational SOPs with live dashboard visibility and audit-ready daily execution tracking. Own your data forever.`;
  
  // Use the high-gravity master dashboard as the OG image
  const ogImage = "https://i.postimg.cc/VkkdrySK/Screenshot-2026-05-11-170211.png";

  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `${siteUrl}/packs/${pack.id}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
     twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImage],
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

  // Map packs to specific technical assets to keep the UI sharp and consistent
  const assetMap: Record<string, string> = {
      'restaurants': images.find(i => i.id === 'sovereign-dashboard')?.imageUrl!,
      'hotels_and_resorts': images.find(i => i.id === 'sovereign-ledger')?.imageUrl!,
      'healthcare_and_hospital_operations': images.find(i => i.id === 'sovereign-vitals')?.imageUrl!,
      'school_operations_pack': images.find(i => i.id === 'sovereign-dashboard')?.imageUrl!,
      'franchise_operations_pack': images.find(i => i.id === 'sovereign-finance')?.imageUrl!,
      'facility_management_blueprint': images.find(i => i.id === 'sovereign-ledger')?.imageUrl!,
      'cinema_operations_pack': images.find(i => i.id === 'sovereign-vitals')?.imageUrl!,
      'retail_operations_system': images.find(i => i.id === 'sovereign-dashboard')?.imageUrl!,
  };

  const heroImageUrl = assetMap[id] || "https://i.postimg.cc/VkkdrySK/Screenshot-2026-05-11-170211.png";

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <PackClientPage pack={pack} heroImageUrl={heroImageUrl} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
