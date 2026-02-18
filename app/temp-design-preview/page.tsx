
import TempDesignClientPage from "./client-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resolution CTA - Layout Lab | MoreMeets™',
  robots: { index: false, follow: false }
};

export default function TempDesignPreviewPage() {
  return <TempDesignClientPage />;
}
