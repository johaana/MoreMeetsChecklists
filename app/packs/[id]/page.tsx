
import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FaqSection } from "@/components/layout/faq-section";
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

  /**
   * SOVEREIGN ASSET MAPPING v11.9
   * Strategy: Background (Atmospheric/Architectural) + Squircle (Operational Evidence)
   */
  const assetMap: Record<string, { bg: string, squircle: string }> = {
      'restaurants': {
          bg: "https://i.postimg.cc/SK4G7tXq/chef-preparing-recipe.jpg",
          squircle: "https://i.postimg.cc/NFNPhCzy/concession-area-cinema.jpg" // Placeholder for restaurant ops
      },
      'hotels_and_resorts': {
          bg: "https://i.postimg.cc/HkX2MCLY/Whats-App-Image-2026-05-06-at-14-19-42.jpg",
          squircle: "https://i.postimg.cc/SNqtPnBm/facilities-management-2.jpg"
      },
      'healthcare_and_hospital_operations': {
          bg: "https://i.postimg.cc/TPxcqHym/doctors-pushing-emergency-stretcher-bed-corridor.jpg",
          squircle: "https://i.postimg.cc/TPxcqHym/doctors-pushing-emergency-stretcher-bed-corridor.jpg"
      },
      'school_operations_pack': {
          bg: "https://i.postimg.cc/hPg3YXkg/Schools-school-safety.jpg",
          squircle: "https://i.postimg.cc/hPg3YXkg/Schools-school-safety.jpg"
      },
      'franchise_operations_pack': {
          bg: "https://i.postimg.cc/mrSydNMq/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg",
          squircle: "https://i.postimg.cc/mrSydNMq/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg"
      },
      'facility_management_blueprint': {
          bg: "https://i.postimg.cc/SNqtPnBm/facilities-management-2.jpg",
          squircle: "https://i.postimg.cc/SNqtPnBm/facilities-management-2.jpg"
      },
      'cinema_operations_pack': {
          bg: "https://i.postimg.cc/SsfvdxLv/view-3d-cinema-theatre-room.jpg",
          squircle: "https://i.postimg.cc/NFNPhCzy/concession-area-cinema.jpg"
      },
      'retail_operations_system': {
          bg: "https://i.postimg.cc/mrSydNMq/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg",
          squircle: "https://i.postimg.cc/mrSydNMq/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg"
      },
  };

  const assets = assetMap[id] || { 
      bg: "https://i.postimg.cc/BvKyg8vX/ceo-engages-phone-call-briefing-with-investor-sharing-insight.jpg",
      squircle: "https://i.postimg.cc/BvKyg8vX/ceo-engages-phone-call-briefing-with-investor-sharing-insight.jpg"
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <PackClientPage pack={pack} backgroundUrl={assets.bg} squircleUrl={assets.squircle} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
