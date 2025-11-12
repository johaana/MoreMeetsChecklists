
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, HandCoins, Building, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MoreMeets | Our Mission & Philosophy',
  description: 'Learn why MoreMeets was founded: to make world-class operational compliance and safety standards accessible and affordable for every business, not just large enterprises.',
};

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col">
        <CardHeader className="flex flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                Democratizing Operational Excellence
              </h1>
              <p className="max-w-[800px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                We believe world-class safety and compliance standards shouldn't be reserved for corporations with five-figure budgets.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="grid gap-10">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline text-primary">Our Mission</h2>
                        <p className="text-muted-foreground text-lg">
                            MoreMeets was born in India and built for the world. We saw brilliant businesses held back by operational gaps and global compliance toolkits priced for a different hemisphere. The tools for excellence were locked away, accessible only to the largest enterprises.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Our mission is to break that lock. We create audit-ready, expert-crafted operational checklists that are not only world-class but also radically affordable. We turn complex global standards into simple, actionable SOPs that anyone can use, every single day.
                        </p>
                    </div>

                    <div className="space-y-8">
                         <h2 className="text-3xl font-bold tracking-tighter font-headline text-primary">Our Philosophy</h2>
                         <div className="grid md:grid-cols-2 gap-6">
                            <ValueCard icon={<Zap className="w-8 h-8 text-accent"/>} title="From Audit to Action">
                                Most toolkits help you pass an audit once a year. Our checklists are designed to be used by your team on the ground, every single day. We don't just make you compliant; we make your operations better, safer, and more efficient.
                            </ValueCard>
                             <ValueCard icon={<HandCoins className="w-8 h-8 text-accent"/>} title="Radically Affordable">
                                We've built a lean, efficient model that cuts out the unnecessary overhead of traditional consulting. This allows us to offer our expert-built toolkits for up to 80% less than competitors, passing the savings directly to you.
                            </ValueCard>
                             <ValueCard icon={<Building className="w-8 h-8 text-accent"/>} title="Built for the Real World">
                                Our founder has over 15 years of experience managing high-stakes operations for global 7-star hospitality brands and large-scale events. Our checklists aren't theoretical; they are battle-tested and designed for the realities of your business.
                            </ValueCard>
                              <ValueCard icon={<CheckCircle className="w-8 h-8 text-accent"/>} title="Globally Compliant, Locally Relevant">
                                Every pack is built on a foundation of globally recognized standards (like ISO and OSHA) but is crafted with a practical understanding of the challenges and opportunities in the Indian and global markets.
                            </ValueCard>
                         </div>
                    </div>

                    <div className="text-center pt-10">
                        <h3 className="text-2xl font-bold tracking-tighter font-headline mb-4">Ready to Build a More Resilient Business?</h3>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                            Explore our library of operational playbooks and find the exact toolkit you need to solve your biggest challenges.
                        </p>
                        <Button size="lg" asChild className="group">
                             <Link href="/packs">
                                Explore All Packages
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
