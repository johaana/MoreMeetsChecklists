
import React from 'react';
import type { Metadata } from 'next';
import TempDesignClientPage from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: 'Design Preview | MoreMeets',
    description: 'A temporary page to showcase UI/UX design concepts.',
    robots: 'noindex, nofollow', // Prevents search engines from indexing this page
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
