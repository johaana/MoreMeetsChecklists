
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CheckCircle, BrainCircuit, FileText, Users, ShieldCheck, X, Crown, File, Server } from "lucide-react";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, RadialBarChart, RadialBar, PolarAngleAxis, Legend } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white text-center overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 container px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter text-white drop-shadow-2xl">
                    Stop Running Your Operations on Hope.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
                    Turn your manual, person-dependent processes into a standardized, audit-ready system that drives consistency and protects your brand.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild className="group text-lg py-7 px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/library">
                            Explore The SOP Library
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

const radialChartData = [
  { name: 'Compliance Gaps', value: 85, fill: 'hsl(var(--destructive))' },
  { name: 'Onboarding Time', value: 70, fill: 'hsl(var(--destructive))' },
  { name: 'Incident Rate', value: 60, fill: 'hsl(var(--destructive))' },
];

const OperationalDragSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">The Anatomy of Operational Drag</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">Unseen risks in your daily workflow are actively slowing you down and costing you money. Your operation is likely exposed to:</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
        {radialChartData.map((item, index) => (
          <Card key={index} className="text-center flex flex-col items-center justify-start p-4 border-2">
             <ResponsiveContainer width="100%" height={140}>
                <RadialBarChart 
                    innerRadius="70%" 
                    outerRadius="90%" 
                    data={[item]} 
                    startAngle={90} 
                    endAngle={-270}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar background dataKey='value' cornerRadius={10} angleAxisId={0} className="fill-destructive/80" />
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-foreground">
                        {item.value}%
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-sm text-muted-foreground">High probability of errors & inconsistencies.</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);


const barChartData = [
  { name: 'Auditability', 'The Old Way': 20, 'The New Way': 95 },
  { name: 'Resilience', 'The Old Way': 30, 'The New Way': 90 },
  { name: 'Efficiency', 'The Old Way': 40, 'The New Way': 85 },
  { name: 'Compliance', 'The Old Way': 25, 'The New Way': 98 },
];

const BeforeAfterChartSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From Unstructured & Unauditable to Compliant & Controlled</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">Our system delivers a quantifiable leap in operational confidence and control across your most critical business functions.</p>
      </div>
      <div className="max-w-4xl mx-auto h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barChartData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
             <Legend wrapperStyle={{fontSize: "14px"}} />
            <Bar dataKey="The Old Way" fill="hsl(var(--destructive) / 0.6)" radius={[4, 4, 0, 0]}>
                 <LabelList dataKey="The Old Way" position="top" fill="hsl(var(--destructive))" fontSize={12} />
            </Bar>
            <Bar dataKey="The New Way" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="The New Way" position="top" fill="hsl(var(--primary))" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

const ExpertiseExtractorSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Your New System of Record</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">We provide a structured framework to capture, distribute, and enforce your best practices, turning tribal knowledge into a scalable asset.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        <Card className="text-center p-6 border-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 mx-auto border-2 border-primary/20">
            <BrainCircuit className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline text-lg">1. Codify Expertise</h3>
          <p className="text-sm text-muted-foreground mt-2">Capture the unwritten processes of your top performers in a structured, actionable format.</p>
        </Card>
        <Card className="text-center p-6 border-2 border-accent/80 shadow-lg">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4 mx-auto border-2 border-accent/20">
            <FileText className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline text-lg text-accent">2. Distribute the Playbook</h3>
          <p className="text-sm text-muted-foreground mt-2">This knowledge becomes a "MoreMeets Pack"—an interactive system available to everyone.</p>
        </Card>
        <Card className="text-center p-6 border-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-600 mb-4 mx-auto border-2 border-green-500/20">
            <Users className="w-10 h-10" />
          </div>
          <h3 className="font-bold font-headline text-lg text-green-600">3. Empower the Team</h3>
          <p className="text-sm text-muted-foreground mt-2">New and existing staff can now perform critical tasks with the rigor of your best expert.</p>
        </Card>
      </div>
    </div>
  </section>
);

const CompetitorComparisonSection = () => {
    const comparisonData = [
        { feature: "Instant Usability", generic: true, moremeets: true, enterprise: false },
        { feature: "Audit-Ready & Compliant", generic: false, moremeets: true, enterprise: true },
        { feature: "Lifetime Updates", generic: false, moremeets: true, enterprise: false },
        { feature: "Fully Customizable (Excel)", generic: true, moremeets: true, enterprise: false },
        { feature: "No Recurring Subscription", generic: true, moremeets: true, enterprise: false },
        { feature: "Enterprise-Grade Security", generic: false, moremeets: false, enterprise: true },
        { feature: "Initial Cost", generic: true, moremeets: true, enterprise: false },
    ];
    return (
        <section className="w-full py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">The Unfair Advantage</h2>
                    <p className="text-muted-foreground mt-2 text-base md:text-lg">See how MoreMeets stacks up against your other options.</p>
                </div>
                <Card className="max-w-5xl mx-auto overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40%] text-base">Feature</TableHead>
                                <TableHead className="text-center text-base">Free Templates</TableHead>
                                <TableHead className="text-center text-base bg-accent/10">MoreMeets</TableHead>
                                <TableHead className="text-center text-base">Enterprise SaaS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map((item) => (
                                <TableRow key={item.feature}>
                                    <TableCell className="font-medium">{item.feature}</TableCell>
                                    <TableCell className="text-center">{item.generic ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                    <TableCell className="text-center bg-accent/10">{item.moremeets ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                    <TableCell className="text-center">{item.enterprise ? <Check className="mx-auto w-5 h-5 text-green-500" /> : <X className="mx-auto w-5 h-5 text-destructive" />}</TableCell>
                                </TableRow>
                            ))}
                              <TableRow className="bg-secondary/50">
                                    <TableCell className="font-bold">Best For</TableCell>
                                    <TableCell className="text-center text-xs text-muted-foreground">Basic, non-critical tasks</TableCell>
                                    <TableCell className="text-center font-bold text-primary bg-accent/10">Scaling businesses needing compliance & control without the cost</TableCell>
                                    <TableCell className="text-center text-xs text-muted-foreground">Large corporations with dedicated budgets</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </section>
    );
};


const TrademarkSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
       <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold font-headline">Protect Your Brand at Every Level</h2>
              <p className="text-muted-foreground text-base md:text-lg">Inconsistent operations don't just cost money—they dilute your brand. Our system creates a verifiable framework to ensure your standards are met, every single day, at every single location.</p>
              <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Brand Standard Audits</h4><p className="text-sm text-muted-foreground">Ensure visual merchandising, service quality, and brand voice are consistent.</p></div></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Franchise Compliance</h4><p className="text-sm text-muted-foreground">Verify that all franchisees are upholding the core promises of your brand.</p></div></li>
                  <li className="flex items-start gap-3"><ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1"/><div><h4 className="font-semibold">Intellectual Property Protection</h4><p className="text-sm text-muted-foreground">Create auditable trails for handling sensitive marketing materials and proprietary information.</p></div></li>
              </ul>
          </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="https://i.postimg.cc/x8f3xyY1/best-7-star-hotels-in-the-world.png" alt="Luxury Hotel" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="luxury hotel" />
              <img src="https://i.postimg.cc/X7xzsFzy/retail-electronic.jpg" alt="Retail Store" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="retail store" />
              <img src="https://i.postimg.cc/gJPDRbTR/Best-Corporate-Photographer-India-Samsung-Product-Launch-Event-Photographer-Delhi-NCR-24-jpg.webp" alt="Corporate Event" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="corporate event" />
              <img src="https://i.postimg.cc/kGhhCGDM/manufacturing.jpg" alt="Manufacturing Plant" className="rounded-lg object-cover w-full h-full aspect-square shadow-lg" data-ai-hint="manufacturing plant" />
           </div>
       </div>
    </div>
  </section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <OperationalDragSection />
      <BeforeAfterChartSection />
      <CompetitorComparisonSection />
      <ExpertiseExtractorSection />
      <TrademarkSection />
    </main>
  );
}
