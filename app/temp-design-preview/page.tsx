
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import TempDesignClientPage from './client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Preview | MoreMeets',
  description: 'A temporary page to preview new design and branding concepts.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <TempDesignClientPage />
      <Footer />
    </div>
  );
}
