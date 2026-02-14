
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

const defaultHeroImageUrl = 'https://picsum.photos/seed/operational_pro_1/1200/800';

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
  
  // Single source of truth for imagery
  const imageData = images.find(img => img.id === `pack-${id}`);
  const heroImageUrl = imageData?.imageUrl || defaultHeroImageUrl;
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
