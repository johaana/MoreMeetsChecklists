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
        bg: "https://i.postimg.cc/d3DRJSmZ/restaurant-operations-1.png",
        squircle: "https://i.postimg.cc/d3DRJSmZ/restaurant-operations-1.png"
    },
    'hotels_and_resorts': {
        bg: "https://i.postimg.cc/N0wxRDBY/hotel-ops-1.webp",
        squircle: "https://i.postimg.cc/N0wxRDBY/hotel-ops-1.webp"
    },
    'healthcare_and_hospital_operations': {
        bg: "https://i.postimg.cc/RFw5XXnH/Hospital-Levels-of-Care.jpg",
        squircle: "https://i.postimg.cc/RFw5XXnH/Hospital-Levels-of-Care.jpg"
    },
    'school_operations_pack': {
        bg: "https://i.postimg.cc/zfcX9tv5/download.webp",
        squircle: "https://i.postimg.cc/zfcX9tv5/download.webp"
    },
    'franchise_operations_pack': {
        bg: "https://i.postimg.cc/MT12ddjp/Franchise-operations.jpg",
        squircle: "https://i.postimg.cc/MT12ddjp/Franchise-operations.jpg"
    },
    'facility_management_blueprint': {
        bg: "https://i.postimg.cc/4dpkBBhK/facilities-management1.png",
        squircle: "https://i.postimg.cc/4dpkBBhK/facilities-management1.png"
    },
    'cinema_operations_pack': {
        bg: "https://i.postimg.cc/KzTFCmCT/view-3d-cinema-theatre-room.jpg",
        squircle: "https://i.postimg.cc/KzTFCmCT/view-3d-cinema-theatre-room.jpg"
    },
    'fashion_and_apparel_retail': {
        bg: "https://i.postimg.cc/JnjVPPB3/fashion-retail.webp",
        squircle: "https://i.postimg.cc/JnjVPPB3/fashion-retail.webp"
    },
    'supermarket_grocery_retail_pack': {
        bg: "https://i.postimg.cc/KYHvdqzt/grocery-retail.jpg",
        squircle: "https://i.postimg.cc/KYHvdqzt/grocery-retail.jpg"
    },
    'electronics_showroom_pack': {
        bg: "https://i.postimg.cc/L5z9gmVW/electronics-retail.jpg",
        squircle: "https://i.postimg.cc/L5z9gmVW/electronics-retail.jpg"
    },
    'retail_jewellery_operations_pack': {
        bg: "https://i.postimg.cc/VL8LQbfL/jewelry-retail.jpg",
        squircle: "https://i.postimg.cc/VL8LQbfL/jewelry-retail.jpg"
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
  
  const cleanTitle = pack.title.split(/v\d+/)[0].trim();
  const title = `${cleanTitle} | MoreMeets™`;
  
  const description = descriptions[id] || `Pre-built ${pack.category} operational SOPs with live dashboard visibility and audit-ready daily execution tracking. Own your data forever.`;
  
  const fallbackImage = "https://i.postimg.cc/Px7pQfYk/businesspeople-having-problems-office.jpg";
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
      images: [
        { 
          url: ogImage, 
          width: 1200, 
          height: 630, 
          alt: title 
        }
      ],
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
      bg: "https://i.postimg.cc/Px7pQfYk/businesspeople-having-problems-office.jpg",
      squircle: "https://i.postimg.cc/Px7pQfYk/businesspeople-having-problems-office.jpg"
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
