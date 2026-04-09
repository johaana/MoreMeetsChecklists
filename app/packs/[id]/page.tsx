import PackClientPage from "./pack-client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PricingClient from "../pricing-client";
import { FaqSection } from "@/components/layout/faq-section";
import images from '@/lib/placeholder-images.json';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  let title = `${pack.title} - Operational System | MoreMeets™`;
  let description = `Download the complete ${pack.title} system. Professional SOPs for ${pack.category} leaders. One-time purchase.`;
  
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
  
  const imageData = images.find(img => img.id === `pack-${id}`);
  const heroImageUrl = imageData?.imageUrl || null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PackClientPage pack={pack} heroImageUrl={heroImageUrl} />
        <PricingClient pack={pack} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
