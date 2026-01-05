
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import TempDesignClientPage from './client-page';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'MoreMeets Standards™ | Audit-Ready Operational Frameworks',
  description: 'MoreMeets Standards™ is the world’s first offline, audit-ready operational standard for businesses that cannot afford missed tasks, unclear ownership, or failed audits.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background temp-design-page" style={{'--bg-primary': 'hsl(212 40% 4%)'} as React.CSSProperties}>
      <SiteHeader />
       <Suspense fallback={
        <main className="flex-1 flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
            <h1 className="text-2xl font-bold tracking-tighter font-headline">
                Loading Preview...
            </h1>
            </div>
        </main>
      }>
        <TempDesignClientPage />
      </Suspense>
      <Footer />
    </div>
  );
}
