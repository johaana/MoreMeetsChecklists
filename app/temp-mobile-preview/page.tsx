
import type { Metadata } from 'next';
import MobilePreviewClient from './client-page';
import { premiumPacks } from '@/lib/premium-packs';

export const metadata: Metadata = {
  title: 'Mobile Preview Lab | MoreMeets™',
  robots: { index: false, follow: false },
};

export default function MobilePreviewPage() {
    const pack = premiumPacks.find(p => p.id === 'restaurants')!;
    return <MobilePreviewClient pack={pack} />;
}
