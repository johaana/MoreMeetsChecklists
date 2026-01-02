
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import MasterAccessClient from './master-access-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Access | MoreMeets™',
  description: 'Get lifetime access to all current and future operational checklists with a single purchase.',
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
    return <MasterAccessClient pack={pack} />;
}
