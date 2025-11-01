
import React from 'react';
import BlogClientPage from './blog-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Black Box Debrief | MoreMeets Blog',
    description: 'Deconstructing the world\'s most costly operational disasters to build more resilient organizations. An insights hub by MoreMeets.',
};

export default function BlogListPage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BlogClientPage />
        </React.Suspense>
    )
}
