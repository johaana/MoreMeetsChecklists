
'use client';

import Link from "next/link";
import * as React from "react";
import { individualChecklists } from "@/lib/individual-checklists";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

const categoryColors: { [key: string]: string } = {
    "Hospitality": "bg-blue-100 text-blue-800 border-blue-200",
    "Corporate": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Retail": "bg-pink-100 text-pink-800 border-pink-200",
    "Healthcare": "bg-red-100 text-red-800 border-red-200",
    "Education": "bg-green-100 text-green-800 border-green-200",
    "Manufacturing": "bg-gray-100 text-gray-800 border-gray-200",
    "Events": "bg-purple-100 text-purple-800 border-purple-200",
    "Personal": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Automotive": "bg-orange-100 text-orange-800 border-orange-200",
    "Real Estate": "bg-teal-100 text-teal-800 border-teal-200",
    "Compliance": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "Wellness": "bg-lime-100 text-lime-800 border-lime-200",
};

export default function AllIndividualChecklistsPage() {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', ...Array.from(new Set(individualChecklists.map(p => p.category)))];

  const filteredChecklists = filter === 'All' ? individualChecklists : individualChecklists.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />
      <main>
        <section id="checklists" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Individual Checklists for Critical Tasks
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Solve a specific operational problem today. These are our most requested, high-impact checklists, perfect for starting your journey towards operational excellence.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'outline'}
                            onClick={() => setFilter(category)}
                            className="rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredChecklists.map((checklist) => (
                        <Card key={checklist.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            <CardHeader className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                                        {React.cloneElement(checklist.icon, { className: "w-8 h-8 text-primary" })}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{checklist.title}</CardTitle>
                                         <Badge className={`mt-2 ${categoryColors[checklist.category] || 'bg-gray-100 text-gray-800'}`}>
                                            {checklist.category}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <p className="text-sm text-muted-foreground">{checklist.description}</p>
                            </CardContent>
                             <CardFooter className="p-6 pt-2 mt-auto flex flex-col items-start gap-4">
                                <p className="text-3xl font-bold">₹{checklist.priceINR}</p>
                                <Button asChild className="w-full font-bold group">
                                    <Link href={`/checklists/${checklist.id}`}>
                                        Learn More &amp; Buy
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                 <div className="max-w-4xl mx-auto mt-20 text-center bg-secondary/50 p-8 rounded-2xl border">
                    <h2 className="text-2xl font-bold font-headline text-primary mb-4">Looking for a Complete System?</h2>
                    <p className="text-muted-foreground mb-6">
                        While individual checklists solve specific problems, our full packs provide a comprehensive, integrated operational system for your entire department or business. Get dozens of checklists bundled together for maximum value.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/packs">
                            Explore Full Packages
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
       <Footer />
    </div>
  );
}

