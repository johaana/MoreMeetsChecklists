

import React from 'react';
import BlogClientPage from './blog-client-page';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
const title = 'Black Box Debrief | MoreMeets Blog';
const description = 'Deconstructing the world\'s most costly operational disasters to build more resilient organizations. An insights hub by MoreMeets.';
const ogImageUrl = `${siteUrl}/api/og?type=blog`;

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        url: `${siteUrl}/blog`,
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [ogImageUrl],
    }
};

// This page now uses Suspense to handle the initial loading state while the client component mounts.
// This is a best practice for using client components that fetch data or have state.
export default function BlogListPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BlogClientPage />
        </React.Suspense>
    )
}
