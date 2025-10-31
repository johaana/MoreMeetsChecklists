

import { notFound } from 'next/navigation';
import { premiumPacks } from '@/lib/premium-packs';
import Page from '../[id]/page';

export default function TempPackPreviewPage() {
  const packId = 'hotels_and_resorts';
  const pack = premiumPacks.find((p) => p.id === packId);

  if (!pack) {
    notFound();
  }

  return <Page params={{ id: packId }} />;
}
