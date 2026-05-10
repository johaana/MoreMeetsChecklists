import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FaqSection } from "@/components/layout/faq-section";
import images from '@/lib/placeholder-images.json';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  
  const imageData = images.find(img => img.id === `pack-${id}`);
  const fallbackImage = 'https://i.postimg.cc/qRkj0Z4R/Screenshot-2026-05-08-055107.png';
  const ogImage = imageData?.imageUrl || fallbackImage;

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

  // Find the specific technical asset for this pack
  const imageData = images.find(img => img.id === `pack-${id}`);
  const heroImageUrl = imageData?.imageUrl || "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

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
