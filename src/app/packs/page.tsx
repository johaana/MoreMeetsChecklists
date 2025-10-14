
'use client';

import Link from "next/link";
import * as React from "react";
import { premiumPacks } from "@/lib/premium-packs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Download } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

const categoryColors: { [key: string]: string } = {
    "Hospitality": "bg-blue-100 text-blue-800 border-blue-200",
    "Corporate & Tech": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Retail": "bg-pink-100 text-pink-800 border-pink-200",
    "Healthcare": "bg-red-100 text-red-800 border-red-200",
    "Education": "bg-green-100 text-green-800 border-green-200",
    "Industrial & Transport": "bg-gray-100 text-gray-800 border-gray-200",
    "Entertainment & Events": "bg-purple-100 text-purple-800 border-purple-200",
    "Social Cause": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Automotive": "bg-orange-100 text-orange-800 border-orange-200",
    "Real Estate": "bg-teal-100 text-teal-800 border-teal-200",
    "Compliance": "bg-cyan-100 text-cyan-800 border-cyan-200",
    "Wellness & Beauty": "bg-lime-100 text-lime-800 border-lime-200",
    "E-commerce": "bg-sky-100 text-sky-800 border-sky-200",
    "Agency": "bg-amber-100 text-amber-800 border-amber-200",
    "Logistics": "bg-gray-100 text-gray-800 border-gray-200",
    "Maritime": "bg-blue-100 text-blue-800 border-blue-200",
    "Aviation": "bg-sky-100 text-sky-800 border-sky-200",
};

export default function AllPacksPage() {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', ...Array.from(new Set(premiumPacks.map(p => p.category)))];

  const filteredPacks = filter === 'All' ? premiumPacks : premiumPacks.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />
      <main>
        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Professional Checklist Packs
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Get instant access to expert-crafted operational SOPs. One-time purchase, lifetime updates. Downloadable in Excel.
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
                    {filteredPacks.map((pack) => (
                        <Card key={pack.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            <CardHeader className="p-6 relative">
                                <div className="flex flex-wrap gap-2 mb-4">
                                     <Badge className={`${categoryColors[pack.category] || 'bg-gray-100 text-gray-800'}`}>
                                        {pack.category}
                                    </Badge>
                                    {pack.badgeText && (
                                        <Badge variant={pack.badgeVariant || 'default'} className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 w-fit">
                                        <Star className="w-4 h-4" /> {pack.badgeText}
                                        </Badge>
                                    )}
                                     {pack.priceINR === 0 && (
                                        <Badge variant="accent" className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 w-fit">
                                            Free
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                                        {React.cloneElement(pack.icon, { className: "w-8 h-8 text-primary" })}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <h2 className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</h2>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {pack.sampleItems.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-accent"/>
                                            <span dangerouslySetInnerHTML={{ __html: item.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter className="p-6 pt-2 mt-auto">
                                {pack.priceINR > 0 ? (
                                    <Button asChild className="w-full font-bold" variant="default">
                                        <Link href={`/packs/${pack.id}`}>
                                            View Full Checklist &amp; Purchase
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button asChild className="w-full font-bold" variant="accent">
                                        <Link href={`/packs/${pack.id}`}>
                                            <Download className="mr-2 h-4 w-4"/>
                                            Free Download
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
       <Footer />
    </div>
  );
}
