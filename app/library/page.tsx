
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import LibraryClientPage from './library-client-page';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'SOP & Checklist Library | MoreMeets',
  description: 'Browse our complete library of professional operational checklists and SOP packs. Find toolkits for hospitality, healthcare, manufacturing, retail, and more.',
};

export default function LibraryPage() {
    const packs = premiumPacks.filter(p => 
        p.id !== 'master_access' &&
        ((p.paymentId && p.priceINR >= 0) || (p.lemonSqueezyUrl && p.priceUSD && p.priceUSD >= 0)) &&
        p.checklists && p.checklists.length > 0
    );

    if (!packs) {
        notFound();
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LibraryClientPage packs={packs} />
      </Suspense>
    );
}
