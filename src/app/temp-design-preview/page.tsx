
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import TempDesignClientPage from './client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Preview | MoreMeets',
  description: 'A temporary page to preview new design concepts.',
  robots: {
    index: false,
    follow: false,
  }
};


export default function TempDesignPreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <div className="text-center py-8 bg-secondary/50 border-b">
                <h1 className="text-2xl font-bold font-headline">Design Previews</h1>
                <p className="text-muted-foreground">View the concepts on a mobile device.</p>
            </div>
            <TempDesignClientPage />
            <Footer />
        </div>
    )
}
