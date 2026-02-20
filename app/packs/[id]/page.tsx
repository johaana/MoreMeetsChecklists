
import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PricingClient from "../pricing-client";
import { FaqSection } from "@/components/layout/faq-section";
import { Footer } from "@/components/layout/footer";
import images from '@/lib/placeholder-images.json';

type Props = {
  params: Promise<{ id: string }>
}

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
  
  // SEO Optimization for Animal Shelter specifically
  let title = `${pack.title} - Excel SOP Templates | MoreMeets™`;
  let description = `Download the complete ${pack.title} checklist pack. Expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`;
  
  if (id === 'animal_shelter_pack') {
      title = "Free Animal Shelter Operations Framework & SOPs | MoreMeets™";
      description = "Download our comprehensive, free operational framework for animal shelters. Includes hygiene, medical intake, and welfare SOPs in editable Excel format.";
  }
  
  // Single source of truth for imagery
  const imageData = images.find(img => img.id === `pack-${id}`);
  const ogImage = imageData?.imageUrl || `${siteUrl}/api/og?type=pack&id=${pack.id}`;

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
  
  // Single source of truth for imagery
  const imageData = images.find(img => img.id === `pack-${id}`);
  const heroImageUrl = imageData?.imageUrl || null;
  const imageHint = imageData?.imageHint || "operational checklist";

  return (
    <>
      <PackClientPage pack={pack} heroImageUrl={heroImageUrl} imageHint={imageHint} />
      <PricingClient pack={pack} />
      <FaqSection />
      <Footer />
    </>
  );
}
