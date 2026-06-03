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
  'fashion_and_apparel_retail': "Specialized operational system for fashion retail. Control inventory velocity, size-curve balancing, trial-room conversion, and return-fraud prevention with forensic SOPs.",
  'electronics_showroom_pack': "Sovereign electronics operations system. Control unique ID (IMEI/Serial) integrity, monitor demo asset safety, stop warranty fraud, and manage e-waste compliance.",
  'supermarket_grocery_retail_pack': "Sovereign grocery operations system. Command cold chain integrity, monitor expiry sweeps, stop checkout variance, and manage high-volume FMCG logistics.",
};

const assetMap: Record<string, { bg: string, squircle: string }> = {
    'restaurants': {
        bg: "https://i.postimg.cc/wxF6Cpdx/restaurant-backoffice.jpg",
        squircle: "https://i.postimg.cc/Kj54VkD2/chef-preparing-recipe.jpg"
    },
    'hotels_and_resorts': {
        bg: "https://i.postimg.cc/7hPq5BSy/hotel-ops.webp",
        squircle: "https://i.postimg.cc/2yjC1Hnm/hotel-manager-operation.webp"
    },
    'healthcare_and_hospital_operations': {
        bg: "https://i.postimg.cc/zvDqydKt/healthcare.jpg",
        squircle: "https://i.postimg.cc/2885y5xp/doctors-pushing-emergency-stretcher-bed-corridor.jpg"
    },
    'school_operations_pack': {
        bg: "https://i.postimg.cc/pXGLFt00/school-safety.webp",
        squircle: "https://i.postimg.cc/g2xkyBQY/Schools-school-safety.jpg"
    },
    'franchise_operations_pack': {
        bg: "https://i.postimg.cc/pd8W45PK/franchise-2.jpg",
        squircle: "https://i.postimg.cc/vBsYs8mS/Franchise-operations.jpg"
    },
    'facility_management_blueprint': {
        bg: "https://i.postimg.cc/9MhmhXMR/facilities-management1.png",
        squircle: "https://i.postimg.cc/gjy6WBdD/mid-adult-engineer-male-worker-wearing-face-masks-while-examining-paperwork-woodworking-factory.jpg"
    },
    'cinema_operations_pack': {
        bg: "https://i.postimg.cc/VsXtn5MJ/view-3d-cinema-theatre-room.jpg",
        squircle: "https://i.postimg.cc/g0fw6P0G/3d-rendering-cinema-movie-theater.jpg"
    },
    'retail_operations_system': {
        bg: "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg",
        squircle: "https://i.postimg.cc/J4pcqBfQ/fashion-retail.webp"
    },
    'fashion_and_apparel_retail': {
        bg: "https://i.postimg.cc/J4pcqBfQ/fashion-retail.webp",
        squircle: "https://i.postimg.cc/tg1ZTgp4/cinema-interval.avif"
    },
    'electronics_showroom_pack': {
        bg: "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg",
        squircle: "https://i.postimg.cc/Hx9psGc2/multiplex2.avif"
    },
    'supermarket_grocery_retail_pack': {
        bg: "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg",
        squircle: "https://i.postimg.cc/66z9kXNJ/Back-of-House-BOH-Operations-restaurant.png"
    }
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
  
  // CLEAN TITLE FOR METADATA: Strips version numbers (e.g., v19.2) and marketing suffixes for cleaner SEO
  const cleanTitle = pack.title.split(/v\d+/)[0].trim();
  const title = `${cleanTitle} | MoreMeets™`;
  
  const description = descriptions[id] || `Pre-built ${pack.category} operational SOPs with live dashboard visibility and audit-ready daily execution tracking. Own your data forever.`;
  
  // DYNAMIC IMAGE LOGIC: Pull correct hero background from assetMap
  const fallbackImage = "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg";
  const ogImage = assetMap[id]?.bg || fallbackImage;

  return {
    metadataBase: new URL(siteUrl),
    title: title,
    description: description,
    alternates: {
      canonical: `${siteUrl}/packs/${pack.id}`,
    },
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

  const assets = assetMap[id] || { 
      bg: "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg",
      squircle: "https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg"
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2]">
      <SiteHeader forceTheme="light" />
      <main className="flex-1">
        <PackClientPage pack={pack} backgroundUrl={assets.bg} squircleUrl={assets.squircle} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
