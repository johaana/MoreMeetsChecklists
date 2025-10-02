
import MasterAccessClientPage from './master-access-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function MasterAccessPage() {
    return <MasterAccessClientPage />;
}
