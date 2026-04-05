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
import { Search, ArrowRight, X, ChevronDown } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { IconComponent } from '@/components/icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// --- CONFIGURATION: THE ELITE 7 ---
const ELITE_PACK_IDS = [
    'restaurants',
    'hotels_and_resorts',
    'healthcare_and_hospital_operations',
    'school_operations_pack',
    'franchise_operations_pack',
    'facility_management_blueprint',
    'cinema_operations_pack'
];

const allPacksByCategory = (packs: PremiumPack[]) => {
    return packs.reduce((acc, pack) => {
        const category = pack.category || "Uncategorized";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(pack);
        return acc;
    }, {} as Record<string, typeof packs>);
};

const PackCard = ({ pack }: { pack: PremiumPack }) => (
    <Card key={pack.id} className="flex flex-col h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-black/40 backdrop-blur-sm relative group">
        {pack.bestseller && (
            <div className="absolute top-0 right-0 p-4 z-10">
                <Badge variant="accent" className="uppercase font-black tracking-widest text-[8px] px-3 py-1 shadow-xl">Bestseller</Badge>
            </div>
        )}
        <CardHeader>
            <div className='flex justify-between items-start'>
                <IconComponent name={pack.icon} className="h-8 w-8 text-accent mb-2" />
                {pack.badgeText && <Badge variant={pack.badgeVariant || 'default'} className="uppercase tracking-widest text-[8px] font-black">{pack.badgeText}</Badge>}
            </div>
            <CardTitle className="text-xl font-headline italic uppercase tracking-tighter text-primary-text">
                <Link href={`/packs/${pack.id}`} className="hover:text-primary transition-colors">{pack.title}</Link>
            </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
            <CardDescription className="text-secondary-text leading-relaxed font-medium italic">{pack.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3 w-full">
                <span className="text-[10px] font-bold text-white/20 line-through">₹1,999</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">Launch Deployment Offer</span>
            </div>
            <Button asChild className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-black font-black uppercase italic text-xs tracking-widest transition-all border-none h-14" variant="secondary">
                <Link href={`/packs/${pack.id}`}>
                    DEPLOY SYSTEM: ₹999 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </CardFooter>
    </Card>
);

export default function LibraryClientPage({ packs }: { packs: PremiumPack[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // FILTER FOR ELITE ONLY
    const elitePacks = React.useMemo(() => packs.filter(p => ELITE_PACK_IDS.includes(p.id)), [packs]);

    const packsByCategory = React.useMemo(() => allPacksByCategory(elitePacks), [elitePacks]);
    const categories = Object.keys(packsByCategory).sort();

    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
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
        return elitePacks.filter(pack => {
            const categoryMatch = activeCategory === 'All' || pack.category === activeCategory;
            const searchMatch = searchTerm === '' || 
                                pack.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                pack.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                pack.category.toLowerCase().includes(searchTerm.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [elitePacks, activeCategory, searchTerm]);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-20 pb-12 md:pb-24 lg:pb-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.3em] font-black text-[10px]">Operational Infrastructure</Badge>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter font-headline text-primary-text leading-tight uppercase italic">
                                Systems Hub
                            </h1>
                            <p className="max-w-[750px] text-secondary-text text-lg md:text-xl font-medium leading-relaxed mx-auto italic border-l-2 border-primary/20 pl-6">
                                Stop managing manually. Deploy forensically engineered data engines to run your daily operations without chaos.
                            </p>
                        </div>
                        
                        <div className="max-w-4xl mx-auto mb-16 p-4 rounded-2xl border border-white/5 bg-white/[0.02] shadow-2xl">
                             <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="relative w-full md:flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input 
                                        type="search" 
                                        placeholder="Search Elite Systems..." 
                                        className="pl-10 w-full bg-black/40 border-white/10"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="w-full md:w-[240px] justify-between border-white/10 font-bold uppercase text-[10px] tracking-widest">
                                                {activeCategory === 'All' ? 'Select Sector' : activeCategory}
                                                <ChevronDown className="w-4 h-4 ml-2" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto bg-alternate-background border-white/10">
                                            <DropdownMenuItem onSelect={() => handleCategoryChange('All')} className="uppercase text-[10px] font-bold tracking-widest">All Sectors</DropdownMenuItem>
                                            {categories.map(category => (
                                                <DropdownMenuItem key={category} onSelect={() => handleCategoryChange(category)} className="uppercase text-[10px] font-bold tracking-widest">
                                                    {category}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                {(searchTerm || activeCategory !== 'All') && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={clearFilters}
                                        className="w-full md:w-auto text-primary uppercase font-black text-[10px] tracking-widest"
                                    >
                                        <X className="h-4 w-4 mr-2" />
                                        Reset
                                    </Button>
                                )}
                            </div>
                        </div>

                        {filteredPacks.length === 0 ? (
                            <div className="text-center py-24 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
                                <p className="text-lg font-bold text-primary-text uppercase tracking-widest">No matching systems found.</p>
                                <p className="text-secondary-text mt-2">Adjust your criteria or reset filters.</p>
                                <Button onClick={clearFilters} variant="link" className="mt-6 text-primary">Clear all filters</Button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-lg font-black tracking-[0.3em] uppercase text-white/30 mb-10 text-center">
                                    {activeCategory === 'All' ? 'Operations Library' : `${activeCategory} Systems`}
                                </h2>
                                
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
