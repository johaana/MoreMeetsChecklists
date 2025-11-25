
import React from 'react';
import TempDesignClientPage from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TempDesignPreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                 <TempDesignClientPage />
            </main>
            <Footer />
        </div>
    );
}
