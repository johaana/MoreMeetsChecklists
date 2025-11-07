
import type { Metadata } from 'next';
import HomeClientPage from './home-client';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
const siteTitle = 'MoreMeets: Professional Operational Checklists & SOPs';
const siteDescription = 'Downloadable, expert-crafted operational checklists for hotels, retail, healthcare, and more. Achieve compliance and excellence with our one-time purchase SOP templates.';
const ogImageUrl = `${siteUrl}/api/og`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    images: [ogImageUrl],
  },
};

export default function Home() {
  return <HomeClientPage />;
}
