
import type { Metadata } from 'next';
import HeroLabClient from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Sovereign Hero Lab v1.0 | MoreMeets™',
  description: 'Prototyping high-gravity institutional hero sections.',
};

export default function HeroLabPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <HeroLabClient />
      </main>
      <Footer />
    </div>
  );
}
