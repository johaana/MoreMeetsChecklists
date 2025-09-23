
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { premiumPacks } from '@/lib/premium-packs';
import { Logo } from '@/components/icons';
import { ArrowLeft, FileCheck2, Hand, LifeBuoy, Zap, Users, Shield, TrendingUp, HandCoins } from 'lucide-react';
import React from 'react';
import PricingClient from './pricing-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PainPoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-6 rounded-lg border bg-background p-6 transition-shadow hover:shadow-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-1">
            {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
        </div>
        <div>
            <h4 className="text-lg font-bold text-primary">{title}</h4>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

const PainPointsSection = ({ category }: { category: string }) => {
    const content = {
        Hospitality: {
            title: "The Business Case for Operational Excellence",
            points: [
                { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
                { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
                { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
                { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
            ]
        },
        Corporate: {
            title: "Why This Checklist Is Your New Strategic Asset",
            points: [
                { icon: <TrendingUp />, title: "Inefficient Use of Company Resources", description: "Our facility management checklists optimize everything from energy consumption to vendor contracts, cutting operational costs and improving your bottom line." },
                { icon: <HandCoins />, title: "Unproductive Meetings & Wasted Time", description: "Standardize your meeting prep, from board meetings to AGMs, ensuring every session is focused, productive, and achieves its objectives." },
                { icon: <Users />, title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
                { icon: <Shield />, title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
            ]
        },
        Retail: {
            title: "Why This Checklist Is Your Key to Retail Dominance",
            points: [
                { icon: <Shield />, title: "Inventory Shrinkage & Theft", description: "Implement ironclad security protocols for high-value items, from dual-control vault procedures to fitting room management, directly protecting your bottom line." },
                { icon: <Users />, title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and customer service to ensure every shopper receives the same high-quality experience, building brand loyalty." },
                { icon: <TrendingUp />, title: "Lost Sales Due to Stockouts", description: "Streamline your inventory management, from receiving and stocking to daily audits, ensuring popular items are always available and reducing lost sales opportunities." },
                { icon: <HandCoins />, title: "Poor Staff Performance & Product Knowledge", description: "Use our checklists for regular staff training on product features, sales techniques, and operational procedures, turning your team into expert brand ambassadors." }
            ]
        },
        Healthcare: {
             title: "Why This Checklist is Critical for Patient Safety & Compliance",
             points: [
                { icon: <Shield />, title: "Risk of Medication Errors", description: "Our pharmacy checklists enforce the 'Five Rights' of medication dispensing and include strict verification protocols to minimize the risk of dangerous errors and protect your patients." },
                { icon: <TrendingUp />, title: "Compliance & Audit Failures", description: "Navigate complex healthcare regulations with confidence. Our checklists for hospitals and labs ensure you are always prepared for audits from bodies like NABH, JCI, and NABL, covering everything from infection control to documentation." },
                { icon: <Users />, title: "Patient Data & Confidentiality Breaches", description: "Implement robust protocols for handling patient information, from admission to billing, ensuring HIPAA/data privacy compliance and building patient trust." },
                { icon: <HandCoins />, title: "Operational Inefficiencies & Delays in Care", description: "Standardize critical workflows in your ER, OT, and diagnostic labs. This reduces bottlenecks, minimizes errors, and ensures patients receive timely, high-quality care." }
             ]
        },
         Education: {
             title: "Why This Checklist is Essential for a Safe & Modern Campus",
             points: [
                { icon: <Shield />, title: "Student Safety & Security Risks", description: "Implement a robust safety framework covering everything from daily campus patrols and visitor verification to student dismissal and emergency drills, ensuring a secure environment for students and staff." },
                { icon: <TrendingUp />, title: "Liability & Compliance Issues", description: "Proactively manage risks by ensuring all safety equipment is functional, playgrounds are hazard-free, and emergency procedures are regularly practiced, protecting your institution from legal and financial liability." },
                { icon: <HandCoins />, title: "Operational Chaos & Inefficiency", description: "Standardize daily operations, from opening procedures to classroom safety checks, freeing up administrative time to focus on educational outcomes rather than firefighting daily issues." },
                { icon: <Users />, title: "Negative Parent Perception", description: "Demonstrate a clear commitment to safety and organization. A well-run, secure campus builds trust and confidence with parents, a key factor in school choice and reputation." }
             ]
        },
    };

    const selected = content[category as keyof typeof content] || content.Hospitality;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        {selected.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {selected.points.map((point, index) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Page({ params }: { params: { id: string } }) {
  const resolvedParams = React.use(params);
  const pack = premiumPacks.find((p) => p.id === resolvedParams.id);

  if (!pack) {
    notFound();
  }
  
  const whoIsItForMap: Record<string, string[]> = {
    "Hospitality": ["Hotel Owners", "General Managers", "COOs", "Heads of Security", "Restaurant Owners", "and their teams"],
    "Corporate": ["Founders", "COOs", "VPs of Operations", "Head of Administration", "Head of Facilities", "Chief Engineers"],
    "Retail": ["Store Owners", "Retail COOs/VPs", "Heads of Loss Prevention", "Heads of Retail Operations", "District/Area Heads"],
    "Healthcare": ["Hospital Owners", "COOs", "Heads of Quality & Compliance", "Lab Owners", "and their teams"],
    "Education": ["School Owners", "Trustees", "Principals", "Head of Administration", "and their teams"],
    "Manufacturing": ["Plant Heads", "COOs", "VPs of Production", "Heads of Safety"],
    "Events": ["Event Company Owners", "and their teams"],
    "Personal": ["Frequent Travelers", "Pet Owners"],
    "Automotive": ["Dealership Owners", "Workshop Owners", "Service Directors"],
    "Real Estate": ["Property Firm Owners", "Landlords", "Heads of Operations (REITs)"],
    "Compliance": ["Chief Compliance Officers (CCOs)", "Heads of ESG", "Heads of Quality (ISO)"],
    "Wellness": ["Gym/Spa Chain Owners", "Wellness Directors"]
  };

  const audience = whoIsItForMap[pack.category] || ["Industry Professionals"];
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/#packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                <ArrowLeft className="w-4 h-4 mr-1 inline-block" />
                All Packages
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full bg-secondary/30 py-8">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-[auto_1fr] items-start gap-4 md:gap-x-8 max-w-5xl mx-auto">
                     <div className="row-start-1 md:col-start-1 flex items-center md:items-start gap-4">
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20 shrink-0">
                           {React.cloneElement(pack.icon, { className: "w-8 h-8 md:w-12 md:h-12 text-primary" })}
                       </div>
                     </div>
                    <div className="row-start-2 md:row-start-1 md:col-start-2 space-y-2">
                        <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                            {pack.title}
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            {pack.description}
                        </p>
                         <div className="mt-4 bg-background/50 border p-4 rounded-lg">
                            <p className="text-sm font-semibold text-primary mb-2">Perfect For:</p>
                            <p className="text-sm text-foreground/80">{audience.join(' • ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <PricingClient pack={pack} />

        <PainPointsSection category={pack.category} />

        <section id="checklists" className="w-full py-12">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        What's Included: A Complete Operational Toolkit
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        This pack contains {pack.checklists.length} professional checklists, covering every aspect of your operation.
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {pack.checklists.map((checklist, index) => (
                        <Card key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="bg-muted/30">
                                <CardTitle className="flex items-center gap-3">
                                    <FileCheck2 className="w-6 h-6 text-primary"/>
                                    <span>{checklist.title}</span>
                                </CardTitle>
                                <CardDescription>
                                    <strong>Department:</strong> {checklist.department} | <strong>Frequency:</strong> {checklist.frequency} | <strong>Role:</strong> {checklist.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                                <p className="text-muted-foreground">{checklist.summary}</p>
                                <p className="font-semibold text-primary/80 mt-2">Contains {checklist.tasks.length} detailed tasks.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


      </main>
       <footer className="w-full border-t bg-secondary/50 mt-12">
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
                    <Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
                    <Link href="#checklists" className="text-muted-foreground hover:text-foreground">What's Included</Link>
                    <Link href="#why" className="text-muted-foreground hover:text-foreground">Why Us</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                     <p className="font-semibold">Legal</p>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                     <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  );
}
