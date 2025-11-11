
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
     <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* The new content is being rendered from layout.tsx */}
      </main>
      <Footer />
    </div>
  );
}
