
import type { Metadata } from 'next';
import WebHeroPreviewClient from './client-page';

export const metadata: Metadata = {
  title: 'Web Hero Lab | MoreMeets™',
  robots: { index: false, follow: false },
};

export default function WebHeroPreviewPage() {
    return <WebHeroPreviewClient />;
}
