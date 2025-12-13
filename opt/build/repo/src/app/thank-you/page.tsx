

import ThankYouContent from './actions';
import React from 'react';

// This page is wrapped in a Suspense boundary to handle loading states gracefully.
// The actual logic is in the client component.
export default function ThankYouPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </React.Suspense>
  );
}
