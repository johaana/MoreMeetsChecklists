
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import MasterAccessClient from './master-access-client';
import type { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Admin Access | MoreMeets™',
  description: 'Internal administrative access.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function MasterAccessPage() {
    const pack = premiumPacks.find(p => p.id === 'master_access');
    if (!pack) {
        notFound();
    }
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 py-12">
           <Suspense fallback={<div>Loading...</div>}>
            <MasterAccessClient />
          </Suspense>
        </main>
        <Footer />
      </div>
    )
}
