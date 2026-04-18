
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
  let description = `Deploy the Sovereign v11.9 engine for ${pack.category}. Professional, audit-ready SOPs for elite leaders. Own your data forever.`;
  
  const imageData = images.find(img => img.id === `pack-${id}`);
  const fallbackImage = 'https://i.postimg.cc/rsHq85yn/Screenshot-2026-04-09-091611.png';
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <PackClientPage pack={pack} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
