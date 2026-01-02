
import type { Metadata } from 'next';
import BlogClientPage from './blog-client-page';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Black Box Debrief | MoreMeets™',
  description: 'Deconstructing the world\'s most costly operational disasters to build more resilient organizations. An insights hub by MoreMeets™.',
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClientPage />
    </Suspense>
  );
}
