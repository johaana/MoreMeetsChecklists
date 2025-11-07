
import { notFound } from 'next/navigation';
import { individualChecklists } from '@/lib/individual-checklists';
import type { Metadata } from 'next';
import ChecklistClientPage from '@/app/checklists/[id]/checklist-client-page';

type Props = {
  params: { id: string }
}

const defaultHeroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';
const checklistImageMap: Record<string, string> = {
  'corporate-office-security': 'https://i.postimg.cc/sQHHL4nm/office1.jpg',
  'new-employee-onboarding-legal': 'https://i.postimg.cc/3RjXwFvd/corporate-dfl-epitome.jpg',
  'esg-sustainability-audit': 'https://i.postimg.cc/PrfS2hrQ/Laucala-Island-Fiji.jpg',
  'surgical-safety': 'https://i.postimg.cc/Gtb0HMvR/hospital1.webp'
};


export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = params.id;
  const checklist = individualChecklists.find((c) => c.id === id);

  if (!checklist) {
    return {
      title: 'Checklist Not Found | MoreMeets',
      description: 'The requested checklist could not be found.',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const title = `${checklist.title} Template (Excel) | MoreMeets`;
  const description = `Download the ${checklist.title}. This expert-crafted SOP checklist for ${checklist.category} professionals helps you solve specific operational challenges.`;
  
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'checklist');
  ogUrl.searchParams.set('id', checklist.id);

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
  const checklist = individualChecklists.find((c) => c.id === params.id);

  if (!checklist) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'checklist');
  ogUrl.searchParams.set('id', checklist.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: checklist.title,
    description: checklist.description,
    image: ogUrl.toString(),
    brand: {
      '@type': 'Brand',
      name: 'MoreMeets',
    },
    offers: {
        '@type': 'Offer',
        price: checklist.priceINR.toString(),
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
      <ChecklistClientPage checklist={checklist} />
    </>
  );
}
