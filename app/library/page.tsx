
import Link from 'next/link';
import { premiumPacks } from '@/lib/premium-packs';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import * as LucideIcons from "lucide-react";

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) {
        return <LucideIcons.Package className={className} />;
    }
    return <Icon className={className} />;
};


export const metadata: Metadata = {
    title: 'SOP Checklist Library | MoreMeets',
    description: 'Explore our complete library of professional SOP checklists and operational playbooks for various industries. Find the perfect toolkit to improve safety, compliance, and efficiency.',
};

const categoryColors: { [key: string]: string } = {
    "Hospitality": "bg-blue-100 text-blue-800 border-blue-200",
    "Corporate & Tech": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "Retail": "bg-pink-100 text-pink-800 border-pink-200",
    "Healthcare": "bg-red-100 text-red-800 border-red-200",
    "Education": "bg-green-100 text-green-800 border-green-200",
    "Industrial & Transport": "bg-gray-100 text-gray-800 border-gray-200",
    "Entertainment & Events": "bg-purple-100 text-purple-800 border-purple-200",
    "Social Cause": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "Food & Beverage": "bg-orange-100 text-orange-800 border-orange-200",
    "Franchise": "bg-amber-100 text-amber-800 border-amber-200",
};

export default function LibraryPage() {
    const packsWithLinks = premiumPacks.filter(p => (p.paymentId && p.priceINR >= 0) || (p.lemonSqueezyUrl && p.priceUSD && p.priceUSD >= 0));

    const packsByCategory = packsWithLinks.reduce((acc, pack) => {
        const { category } = pack;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(pack);
        return acc;
    }, {} as Record<string, typeof premiumPacks>);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                                SOP Checklist Library
                            </h1>
                            <p className="max-w-[800px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                                The professional standard for operational excellence. Browse our complete library of expert-built, instantly downloadable SOP checklists and playbooks, designed to help you improve safety, ensure compliance, and boost efficiency across your entire organization.
                            </p>
                        </div>

                        <div className="space-y-16">
                            {Object.entries(packsByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
                                <div key={category}>
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline mb-8 text-primary">
                                        {category}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {packs.map((pack) => (
                                            <Link href={`/packs/${pack.id}`} key={pack.id} className="group">
                                                <Card className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                                                    <CardHeader>
                                                        <div className="flex items-start gap-4">
                                                            <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                                                                <IconComponent name={pack.icon} className="w-8 h-8 text-primary" />
                                                            </div>
                                                            <div>
                                                                <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">{pack.title}</CardTitle>
                                                                <CardDescription className="mt-1 text-sm">{pack.description}</CardDescription>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className="flex-1 mt-auto">
                                                        <div className="flex flex-wrap gap-2">
                                                            {pack.badgeText && (
                                                                <Badge variant={pack.badgeVariant || 'default'}>{pack.badgeText}</Badge>
                                                            )}
                                                            <Badge className={`${categoryColors[pack.category] || 'bg-gray-100 text-gray-800'}`}>
                                                                {pack.category}
                                                            </Badge>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
