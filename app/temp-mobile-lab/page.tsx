import { Metadata } from 'next';
import MobileLabClient from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Mobile Prototype Lab | MoreMeets™',
  description: 'Testing the 3 Sovereign Mobile Archetypes.',
};

export default function MobileLabPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F1E8]">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <MobileLabClient />
      </main>
      <Footer />
    </div>
  );
}
