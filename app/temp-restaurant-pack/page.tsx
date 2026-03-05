
import { restaurants } from '@/lib/packs/restaurants_pack';
import TempRestaurantClient from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Temp: Restaurant Pack Demo | MoreMeets™',
  robots: { index: false, follow: false },
};

export default function TempRestaurantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <TempRestaurantClient pack={restaurants} />
      </main>
      <Footer />
    </div>
  );
}
