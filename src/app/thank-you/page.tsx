
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
            All Packages
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <section className="w-full max-w-2xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                    Thank You for Your Purchase!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                    Your download should begin automatically. Please check your downloads folder. An email confirmation has also been sent to you.
                </p>
            </div>
            <Button size="lg" asChild className="group mt-4 text-lg py-7 px-10" variant="accent">
              <Link href="/packs">
                Explore More Packages
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-secondary/50 mt-auto">
        <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
              <Logo className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">MoreMeets</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The Professional Standard for Compliance & Operations Checklists.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-sm">
            <p className="font-semibold">Quick Links</p>
            <Link href="/packs" className="text-muted-foreground hover:text-foreground">Packages</Link>
            <Link href="/#why-us" className="text-muted-foreground hover:text-foreground">Why Us</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-end text-sm">
            <p className="font-semibold">Legal</p>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Refund Policy
            </Link>
            <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
