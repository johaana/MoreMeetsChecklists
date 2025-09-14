import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Leaf, Hotel, PartyPopper } from "lucide-react";
import { Logo } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Sign Up
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900/20">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                More Meets. More Organized.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The smart AI-driven checklist platform for events, hospitality, training, and sustainability. Never miss a detail again.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/signup" prefetch={false}>
                    Get Started for Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything you need to be successful</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered suggestions to seamless collaboration, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI suggests missing tasks so you don't have to. Never forget a detail.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold">Custom Checklists</h3>
                <p className="text-sm text-muted-foreground">
                  Use our templates or create your own checklists from scratch. Tailor everything to your needs.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Share checklists with your team and guests. Assign tasks and track progress together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">For Every Industry</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We have pre-built templates for a wide range of needs. Get started in seconds.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <PartyPopper className="w-8 h-8 text-primary" />
                  <CardTitle>Events</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <Hotel className="w-8 h-8 text-primary" />
                  <CardTitle>Hospitality</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle>Training</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-col items-center gap-2">
                  <Leaf className="w-8 h-8 text-primary" />
                  <CardTitle>Sustainability</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 MoreMeets. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
