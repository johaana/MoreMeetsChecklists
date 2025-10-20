
import type { Metadata } from 'next';
import HomeClientPage from './home-client';

const heroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';
const siteTitle = 'MoreMeets: Professional Operational Checklists & SOPs';
const siteDescription = 'Downloadable, expert-crafted operational checklists for hotels, retail, healthcare, and more. Achieve compliance and excellence with our one-time purchase SOP templates.';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: 'MoreMeets Hero Image: Operational Excellence Checklists',
      },
    ],
  },
  twitter: {
    images: [heroImageUrl],
  },
};

export default function Home() {
  return <HomeClientPage />;
}
