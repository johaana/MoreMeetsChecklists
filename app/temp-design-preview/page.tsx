
import ClientPage from './client-page';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Design Lab v61.0 | MoreMeets™',
  description: 'Rotating Sovereign Hero Prototypes.',
};

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-100">
            <SiteHeader />
            <main className="flex-1">
                <ClientPage />
            </main>
            <Footer />
        </div>
    );
}
