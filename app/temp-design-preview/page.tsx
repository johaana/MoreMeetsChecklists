
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import DesignPreviewClient from './client-page';

export default function DesignPreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1 py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">
                            Resolution Protocol <br />
                            <span className="text-primary">Design Audit</span>
                        </h1>
                        <p className="text-secondary-text text-lg">
                            Comparing color strategies for the "Aligned" standards line to maximize "Expert Pro" authority.
                        </p>
                    </div>
                    
                    <DesignPreviewClient />
                </div>
            </main>
            <Footer />
        </div>
    );
}
