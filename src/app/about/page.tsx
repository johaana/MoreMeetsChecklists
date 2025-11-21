
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, HandCoins, Building, CheckCircle, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MoreMeets | Our Mission & Philosophy',
  description: 'Learn why MoreMeets was founded: to make world-class operational compliance and safety standards accessible and affordable for every business, not just large enterprises.',
};

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
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
                We believe world-class safety and compliance standards shouldn't be reserved for corporations with five-figure software budgets. We make excellence accessible.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="grid gap-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter text-center font-headline text-primary">Our Mission: Your Playbook for Success</h2>
                        <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
                           MoreMeets was born from a simple observation: the tools for operational excellence were locked away, priced for giant enterprises and delivered through complex software or expensive consultants. We exist to break that lock. We create audit-ready, expert-crafted operational playbooks in instantly downloadable Excel files, making world-class standards radically affordable and accessible to everyone.
                        </p>
                    </div>

                    <div className="space-y-8">
                         <h2 className="text-3xl font-bold tracking-tighter text-center font-headline text-primary">Our Unshakeable Philosophy</h2>
                         <div className="grid md:grid-cols-2 gap-6">
                            <ValueCard icon={<Zap className="w-8 h-8 text-accent"/>} title="One-Time Purchase, Lifetime Value">
                                No subscriptions. No recurring fees. You buy a pack once and own it forever, including all future updates. We believe in empowering you, not trapping you in a billing cycle.
                            </ValueCard>
                             <ValueCard icon={<BookOpen className="w-8 h-8 text-accent"/>} title="Excel-Ready, Not SaaS-Locked">
                                We deliver our toolkits in universally accessible, fully editable Excel files. You have complete control to adapt them to your needs without being locked into proprietary software.
                            </ValueCard>
                             <ValueCard icon={<ShieldCheck className="w-8 h-8 text-accent"/>} title="Globally Compliant, Locally Relevant">
                                Every checklist is mapped to global standards like ISO, HACCP, and OSHA, but built with a practical understanding of the challenges real businesses face on the ground.
                            </ValueCard>
                              <ValueCard icon={<CheckCircle className="w-8 h-8 text-accent"/>} title="More Than Templates, They're Systems">
                                Free templates are generic. Our packs are comprehensive operational systems, including Trainer's Notes for on-the-job coaching, turning checklists into powerful training tools.
                            </ValueCard>
                         </div>
                    </div>

                    <div className="text-center pt-10">
                        <h3 className="text-2xl font-bold tracking-tighter font-headline mb-4">Ready to Build a More Resilient Business?</h3>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                            Explore our library of operational playbooks and find the exact toolkit you need to solve your biggest challenges.
                        </p>
                        <Button size="lg" asChild className="group">
                             <Link href="/library">
                                Explore The Full SOP Library
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
