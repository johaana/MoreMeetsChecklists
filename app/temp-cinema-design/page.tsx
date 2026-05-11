import TempCinemaDesignClient from "./client-page";
import { premiumPacks } from '@/lib/premium-packs';
import { notFound } from 'next/navigation';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaqSection } from "@/components/layout/faq-section";

export default function Page() {
  const pack = premiumPacks.find((p) => p.id === 'cinema_operations_pack');

  if (!pack) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader forceTheme="dark" />
      <main className="flex-1">
        <TempCinemaDesignClient pack={pack} />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
