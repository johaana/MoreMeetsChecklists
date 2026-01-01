
'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, X } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { IconComponent } from '@/components/icons';


export default function LibraryClientPage({ packs }: { packs: PremiumPack[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const categories = Array.from(new Set(packs.map(p => p.category))).sort();
    
    const initialSearch = searchParams.get('q') || '';
    const initialCategory = searchParams.get('category') || 'All';
    
    const [searchTerm, setSearchTerm] = React.useState(initialSearch);
    const [activeCategory, setActiveCategory] = React.useState(initialCategory);

    React.useEffect(() => {
      setSearchTerm(searchParams.get('q') || '');
      setActiveCategory(searchParams.get('category') || 'All');
    }, [searchParams]);

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === 'All') {
            params.delete('category');
        } else {
            params.set('category', category);
        }
        router.push(`/library?${params.toString()}`, { scroll: false });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        const params = new URLSearchParams(searchParams.toString());
        if (newSearchTerm) {
            params.set('q', newSearchTerm);
        } else {
            params.delete('q');
        }
        router.push(`/library?${params.toString()}`, { scroll: false });
    };

    const clearFilters = () => {
        router.push('/library', { scroll: false });
    };


    const filteredPacks = React.useMemo(() => {
        return packs.filter(pack => {
            const categoryMatch = activeCategory === 'All' || pack.category === activeCategory;
            const searchMatch = searchTerm === '' || 
                                pack.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                pack.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                pack.category.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [packs, activeCategory, searchTerm]);

    const Bestsellers = ({ packs }: { packs: PremiumPack[] }) => {
        const bestsellerPacks = packs.filter(p => p.bestseller);
        if (bestsellerPacks.length === 0) return null;

        return (
            <div className="mb-16">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline text-primary mb-6 text-center">Bestsellers</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {bestsellerPacks.map(pack => <PackCard key={pack.id} pack={pack} />)}
                </div>
                <hr className="my-12 border-dashed" />
            </div>
        )
    }

    const PackCard = ({ pack }: { pack: PremiumPack }) => (
        <Card key={pack.id} className="flex flex-col h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            <CardHeader>
                <div className='flex justify-between items-start'>
                    <IconComponent name={pack.icon} className="h-8 w-8 text-accent mb-2" />
                    {pack.badgeText && <Badge variant={pack.badgeVariant || 'default'}>{pack.badgeText}</Badge>}
                </div>
                <CardTitle className="text-xl font-headline">
                    <Link href={`/packs/${pack.id}`} className="hover:text-primary transition-colors">{pack.title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription>{pack.description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full" variant="secondary">
                    <Link href={`/packs/${pack.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-20 pb-12 md:pb-24 lg:pb-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                                SOP & Checklist Library
                            </h1>
                            <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                                Browse our complete library of professional operational checklists and SOP packs. Find toolkits for hospitality, healthcare, manufacturing, retail, and more.
                            </p>
                        </div>
                        
                        {/* Filters */}
                        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-lg border shadow-sm bg-background">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input 
                                        type="search" 
                                        placeholder="Search by title, industry, or keyword..." 
                                        className="pl-10 w-full"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap justify-center">
                                    <Button
                                        variant={activeCategory === 'All' ? 'default' : 'outline'}
                                        onClick={() => handleCategoryChange('All')}
                                        className="rounded-full flex-shrink-0"
                                    >
                                        All
                                    </Button>
                                    {categories.map(category => (
                                        <Button
                                            key={category}
                                            variant={activeCategory === category ? 'default' : 'outline'}
                                            onClick={() => handleCategoryChange(category)}
                                            className="rounded-full flex-shrink-0"
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                    {(searchTerm || activeCategory !== 'All') && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={clearFilters}
                                            className="rounded-full flex-shrink-0"
                                            aria-label="Clear filters"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {filteredPacks.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-lg font-semibold">No packs found.</p>
                                <p className="text-muted-foreground">Try adjusting your search or filter.</p>
                                <Button onClick={clearFilters} variant="link" className="mt-4">Clear all filters</Button>
                            </div>
                        ) : (
                            <>
                                {activeCategory === 'All' && searchTerm === '' && <Bestsellers packs={packs} />}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                                    {filteredPacks.map(pack => <PackCard key={pack.id} pack={pack} />)}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
