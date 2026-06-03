'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Search, ArrowRight, X, ChevronDown, LayoutGrid, Target, Camera } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { IconComponent } from '@/components/icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getDisplayTitle } from '@/lib/ui-mappings';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

// --- CONFIGURATION: THE SOVEREIGN ELITE ---
const ELITE_PACK_IDS = [
    'restaurants',
    'hotels_and_resorts',
    'healthcare_and_hospital_operations',
    'school_operations_pack',
    'franchise_operations_pack',
    'facility_management_blueprint',
    'cinema_operations_pack',
    'fashion_and_apparel_retail',
    'electronics_showroom_pack',
    'supermarket_grocery_retail_pack',
    'retail_jewellery_operations_pack'
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
        <Card key={pack.id} className="flex flex-col h-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl hover:shadow-[#B89B5E]/5 transition-all duration-500 border border-white/5 bg-[#1F3A34]/10 backdrop-blur-xl relative group">
            {pack.bestseller && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                    <Badge variant="accent" className="bg-[#B89B5E] text-black uppercase font-black tracking-widest text-[7px] md:text-[8px] px-2 md:px-3 py-1 shadow-xl rounded-none border-none">Bestseller</Badge>
                </div>
            )}
            <CardHeader className="p-6 md:p-12 space-y-4 md:space-y-6">
                <div className='flex justify-between items-start'>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#1F3A34]/30 flex items-center justify-center text-[#B89B5E] group-hover:bg-[#B89B5E] group-hover:text-black transition-all shadow-inner">
                        <IconComponent name={pack.icon} className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    {pack.badgeText && <Badge variant={pack.badgeVariant || 'outline'} className="uppercase tracking-widest text-[7px] md:text-[8px] font-black border-[#B89B5E]/30 text-[#B89B5E] px-2 md:px-3 bg-[#1F3A34]">{pack.badgeText}</Badge>}
                </div>
                <div className="space-y-1 md:space-y-2">
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-[#B89B5E]/60">{pack.category.toUpperCase()}</p>
                    <CardTitle className="text-xl md:text-3xl font-black font-headline italic uppercase tracking-tighter text-white leading-[0.9] group-hover:text-[#B89B5E] transition-colors">
                        <Link href={`/packs/${pack.id}`}>{getDisplayTitle(pack.id, pack.title)}</Link>
                    </CardTitle>
                </div>
                <CardDescription className="text-xs md:text-base text-zinc-200 leading-relaxed font-medium italic transition-opacity opacity-100">
                    {pack.description}
                </CardDescription>
            </CardHeader>
            
            <CardContent className="px-6 md:px-12 py-0 flex-1">
                <div className="grid grid-cols-2 gap-4 text-[7px] md:text-[9px] font-black text-[#B89B5E]/60 uppercase tracking-[0.2em] border-y border-white/5 py-4 md:py-6">
                    <span className="flex items-center gap-2"><LayoutGrid className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#B89B5E]/40" /> {pack.checklists.length} DIVISIONS</span>
                    <span className="flex items-center gap-2"><Camera className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#B89B5E]/40" /> EVIDENCE-READY</span>
                </div>
            </CardContent>

            <CardFooter className="p-6 md:p-12 flex flex-col gap-4 md:gap-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-black text-white italic font-headline leading-none">₹{pack.priceINR}</span>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-black text-[#B89B5E] uppercase tracking-[0.3em] italic">ACCESS RATE</span>
                </div>
                <button className="w-full h-14 md:h-16 rounded-xl bg-[#B89B5E] text-black font-black uppercase italic text-[10px] md:text-xs tracking-widest transition-all hover:bg-[#B89B5E]/90 active:scale-[0.98] group/btn border-none">
                    <Link href={`/packs/${pack.id}`} className="flex items-center justify-center gap-2 md:gap-3">
                        CONFIGURE SYSTEM <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </button>
            </CardFooter>
        </Card>
    );
};

export default function LibraryClientPage({ packs }: { packs: PremiumPack[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const elitePacks = React.useMemo(() => packs.filter(p => ELITE_PACK_IDS.includes(p.id)), [packs]);
    const packsByCategory = React.useMemo(() => allPacksByCategory(elitePacks), [elitePacks]);
    const categories = React.useMemo(() => Object.keys(packsByCategory).sort(), [packsByCategory]);

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
        <div className="flex flex-col min-h-screen bg-[#0a1210]">
            <SiteHeader />
            <main className="flex-1">
                <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 bg-black overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a1210]/40 to-[#0a1210]" />
                    </div>

                    <div className="container px-4 md:px-6 relative z-10 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center max-w-4xl mx-auto">
                            <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 py-1 md:py-1.5 px-4 md:px-8 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-[9px] md:text-[11px] rounded-none bg-[#1F3A34]/40 backdrop-blur-md">Operational Infrastructure</Badge>
                            <h1 className="text-4xl md:text-8xl font-black tracking-tighter font-headline text-white leading-[0.95] md:leading-[0.9] uppercase italic drop-shadow-2xl">
                                SYSTEMS <br/> <span className="text-[#B89B5E]">HUB.</span>
                            </h1>
                            <p className="text-base md:text-2xl text-zinc-100 font-medium leading-relaxed italic border-l-2 border-[#B89B5E]/20 pl-6 md:pl-10 mx-auto max-w-3xl">
                                Stop managing manually. Deploy forensically engineered data engines to run your daily operations without chaos.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-12 md:py-24 bg-[#0a1210]">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 md:mb-20 p-2 rounded-2xl border border-white/10 bg-[#1F3A34]/10 shadow-2xl backdrop-blur-3xl">
                             <div className="flex flex-col md:flex-row gap-2 items-center">
                                <div className="relative w-full md:flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#B89B5E]/40" />
                                    <Input 
                                        type="search" 
                                        placeholder="SEARCH MASTER ENGINES..." 
                                        className="pl-12 w-full h-12 md:h-14 bg-black/40 border-transparent text-white font-black uppercase italic tracking-widest text-[10px] md:text-xs rounded-xl focus-visible:ring-[#B89B5E]/40"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="w-[240px] h-14 rounded-xl border border-white/5 bg-[#1F3A34]/30 px-6 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#B89B5E]/60 hover:bg-[#1F3A34]/50 transition-all">
                                                {activeCategory === 'All' ? 'SELECT SECTOR' : activeCategory}
                                                <ChevronDown className="w-4 h-4 ml-2 text-[#B89B5E]" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 max-h-96 overflow-y-auto bg-[#0a1210] border-white/10 backdrop-blur-3xl">
                                            <DropdownMenuItem onSelect={() => handleCategoryChange('All')} className="uppercase text-[9px] font-black tracking-widest p-4 text-white/40 focus:bg-[#B89B5E] focus:text-black">ALL SECTORS</DropdownMenuItem>
                                            {categories.map(category => (
                                                <DropdownMenuItem key={category} onSelect={() => handleCategoryChange(category)} className="uppercase text-[9px] font-black tracking-widest p-4 text-white/40 focus:bg-[#B89B5E] focus:text-black">
                                                    {category}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                {(searchTerm || activeCategory !== 'All') && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 h-12 md:h-14 text-[#B89B5E] uppercase font-black text-[9px] tracking-widest hover:text-white transition-colors"
                                    >
                                        <X className="h-4 w-4 inline-block mr-2" />
                                        RESET
                                    </button>
                                )}
                            </div>
                        </div>

                        {filteredPacks.length === 0 ? (
                            <div className="text-center py-24 md:py-32 bg-white/[0.01] rounded-[2rem] md:rounded-[3rem] border border-dashed border-white/5">
                                <p className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">NO SIGNAL DETECTED.</p>
                                <p className="text-zinc-400 mt-3 md:mt-4 italic font-medium text-sm md:text-base">Adjust your technical parameters or reset filters.</p>
                                <button onClick={clearFilters} className="mt-8 md:mt-10 text-[#B89B5E] font-black uppercase tracking-widest text-[9px] md:text-[10px] underline hover:text-white">CLEAR ALL PARAMETERS</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                                {filteredPacks.map(pack => <PackCard key={pack.id} pack={pack} />)}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

import { cn } from '@/lib/utils';
