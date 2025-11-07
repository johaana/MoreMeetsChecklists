
import { notFound } from 'next/navigation';
import { premiumPacks } from '@/lib/premium-packs';
import type { Metadata, ResolvingMetadata } from 'next';
import PackClientPage from './pack-client-page';


type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const pack = premiumPacks.find((p) => p.id === id);

  if (!pack) {
    return {
      title: 'Package Not Found | MoreMeets',
      description: 'The requested checklist package could not be found.',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const title = `${pack.title} - Excel SOP Templates | MoreMeets`;
  const description = `Download the complete ${pack.title}. Includes ${pack.checklists.length} expert-crafted SOP checklists in Excel for ${pack.category} professionals. One-time purchase, instant download.`;
  
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


export default function Page({ params }: { params: { id: string } }) {
  const pack = premiumPacks.find((p) => p.id === params.id);

  if (!pack) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'pack');
  ogUrl.searchParams.set('id', pack.id);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pack.title,
    description: `Download the complete ${pack.title} checklist pack. Includes ${pack.checklists.length} expert-crafted SOPs for ${pack.category} professionals. One-time purchase.`,
    image: ogUrl.toString(),
    brand: {
      '@type': 'Brand',
      name: 'MoreMeets',
    },
    offers: {
        '@type': 'Offer',
        price: pack.priceINR.toString(),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
  };
  
  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackClientPage pack={pack} />
    </>
  );
}
