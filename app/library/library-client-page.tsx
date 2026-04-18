'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, X, ChevronDown, Sparkles, LayoutGrid, Target, FileSpreadsheet } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { IconComponent } from '@/components/icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

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

const PackCard = ({ pack }: { pack: PremiumPack }) => {
    const totalTasks = pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0);

    return (
        <Card key={pack.id} className="flex flex-col h-full overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-white/5 bg-black/40 backdrop-blur-xl relative group">
            {pack.bestseller && (
                <div className="absolute top-6 right-6 z-10">
                    <Badge variant="accent" className="uppercase font-black tracking-widest text-[8px] px-3 py-1 shadow-xl rounded-none">Bestseller</Badge>
                </div>
            )}
            <CardHeader className="p-8 md:p-12 space-y-6">
                <div className='flex justify-between items-start'>
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-black transition-all shadow-inner">
                        <IconComponent name={pack.icon} className="h-8 w-8" />
                    </div>
                    {pack.badgeText && <Badge variant={pack.badgeVariant || 'outline'} className="uppercase tracking-widest text-[8px] font-black border-primary/20 text-primary px-3">{pack.badgeText}</Badge>}
                </div>
                <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60">/ {pack.category.toUpperCase()}</p>
                    <CardTitle className="text-2xl md:text-3xl font-black font-headline italic uppercase tracking-tighter text-primary-text leading-[0.9] group-hover:text-primary transition-colors">
                        <Link href={`/packs/${pack.id}`}>{pack.title}</Link>
                    </CardTitle>
                </div>
                <CardDescription className="text-sm md:text-base text-secondary-text leading-relaxed font-medium italic line-clamp-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {pack.description}
                </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 md:px-12 py-0 flex-1">
                <div className="grid grid-cols-2 gap-4 text-[9px] font-black text-white/20 uppercase tracking-[0.2em] border-y border-white/5 py-6">
                    <span className="flex items-center gap-2"><LayoutGrid className="w-3.5 h-3.5 text-primary/40" /> {pack.checklists.length} MODULES</span>
                    <span className="flex items-center gap-2"><Target className="w-3.5 h-3.5 text-primary/40" /> {totalTasks}+ POINTS</span>
                </div>
            </CardContent>

            <CardFooter className="p-8 md:p-12 flex flex-col gap-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest line-through italic">₹1,999</span>
                        <span className="text-xl font-black text-primary-text italic font-headline leading-none">₹999</span>
                    </div>
                    <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] italic">DEPLOYMENT RATE</span>
                </div>
                <button className="w-full h-16 rounded-xl bg-white/5 border border-white/10 text-white font-black uppercase italic text-xs tracking-widest transition-all hover:bg-primary hover:text-black hover:border-transparent active:scale-95 group/btn">
                    <Link href={`/packs/${pack.id}`} className="flex items-center justify-center gap-3">
                        CONFIGURE SYSTEM <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </button>
            </CardFooter>
        </Card>
    );
};

const BespokeCard = () => (
    <Card className="flex flex-col h-full overflow-hidden rounded-[2rem] shadow-2xl border border-dashed border-primary/20 bg-primary/5 relative group p-8 md:p-12">
        <CardHeader className="p-0 space-y-6">
            <div className='flex justify-between items-start'>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <Sparkles className="h-8 w-8" />
                </div>
                <Badge variant="outline" className="uppercase tracking-widest text-[8px] font-black border-accent/30 text-accent px-4 py-1.5 rounded-none">Sovereign Build</Badge>
            </div>
            <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-accent/60">/ CUSTOM ENGINEERING</p>
                <CardTitle className="text-2xl md:text-3xl font-black font-headline italic uppercase tracking-tighter text-primary-text leading-[0.9]">
                    Bespoke Operational Engines
                </CardTitle>
            </div>
            <CardDescription className="text-sm md:text-base text-secondary-text leading-relaxed font-medium italic opacity-60">
                Can't find your specific sector? We build custom institutional operating systems for specialized high-stakes industries.
            </CardDescription>
        </CardHeader>
        <CardFooter className="p-0 mt-auto pt-10">
            <button className="w-full h-16 rounded-xl bg-accent text-black font-black uppercase italic text-xs tracking-widest transition-all hover:brightness-110 shadow-2xl border-none">
                <Link href="/bespoke" className="flex items-center justify-center gap-3">
                    REQUEST CUSTOM SYSTEM <ArrowRight className="w-4 h-4" />
                </Link>
            </button>
        </CardFooter>
    </Card>
);

export default function LibraryClientPage({ packs }: { packs: PremiumPack[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();

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
                <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-black overflow-hidden border-b border-white/5">
                    {/* Cinematic Backdrop */}
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                    </div>

                    <div className="container px-4 md:px-6 relative z-10 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
                            <Badge variant="outline" className="text-primary border-primary/30 py-1.5 px-8 uppercase tracking-[0.5em] font-black text-[11px] rounded-none bg-primary/5 backdrop-blur-md">Operational Infrastructure</Badge>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter font-headline text-primary-text leading-[0.9] uppercase italic drop-shadow-2xl">
                                SYSTEMS <br/> <span className="text-primary">HUB.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary-text font-medium leading-relaxed italic border-l-2 border-primary/20 pl-10 mx-auto max-w-3xl">
                                Stop managing manually. Deploy forensically engineered data engines to run your daily operations without chaos.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-16 md:py-24 bg-[#0B0F14]">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-4xl mx-auto mb-20 p-2 rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-3xl">
                             <div className="flex flex-col md:flex-row gap-2 items-center">
                                <div className="relative w-full md:flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/20" />
                                    <Input 
                                        type="search" 
                                        placeholder="SEARCH MASTER ENGINES..." 
                                        className="pl-12 w-full h-14 bg-black/40 border-transparent text-white font-black uppercase italic tracking-widest text-xs rounded-xl focus-visible:ring-primary/40"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="w-[240px] h-14 rounded-xl border border-white/5 bg-white/5 px-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:bg-white/10 transition-all">
                                                {activeCategory === 'All' ? 'SELECT SECTOR' : activeCategory}
                                                <ChevronDown className="w-4 h-4 ml-2 text-primary" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto bg-black border-white/10 backdrop-blur-3xl">
                                            <DropdownMenuItem onSelect={() => handleCategoryChange('All')} className="uppercase text-[9px] font-black tracking-widest p-4 text-white/40 focus:bg-primary focus:text-black">ALL SECTORS</DropdownMenuItem>
                                            {categories.map(category => (
                                                <DropdownMenuItem key={category} onSelect={() => handleCategoryChange(category)} className="uppercase text-[9px] font-black tracking-widest p-4 text-white/40 focus:bg-primary focus:text-black">
                                                    {category}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                {(searchTerm || activeCategory !== 'All') && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 h-14 text-primary uppercase font-black text-[9px] tracking-widest hover:text-white transition-colors"
                                    >
                                        <X className="h-4 w-4 inline-block mr-2" />
                                        RESET
                                    </button>
                                )}
                            </div>
                        </div>

                        {filteredPacks.length === 0 ? (
                            <div className="text-center py-32 bg-white/[0.01] rounded-[3rem] border border-dashed border-white/5">
                                <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter">NO SIGNAL DETECTED.</p>
                                <p className="text-secondary-text mt-4 italic font-medium">Adjust your technical parameters or reset filters.</p>
                                <button onClick={clearFilters} className="mt-10 text-primary font-black uppercase tracking-widest text-[10px] underline hover:text-white">CLEAR ALL PARAMETERS</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {filteredPacks.map(pack => <PackCard key={pack.id} pack={pack} />)}
                                {activeCategory === 'All' && searchTerm === '' && <BespokeCard />}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
