
import { restaurants } from '@/lib/packs/restaurants_pack';
import TempRestaurantProClient from './client-page';

export const metadata = {
  title: 'Temp: Restaurant PRO Edition | MoreMeets™',
  robots: { index: false, follow: false },
};

export default function TempRestaurantProPage() {
  return <TempRestaurantProClient pack={restaurants} />;
}
