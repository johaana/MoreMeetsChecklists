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
import { cn } from '@/lib/utils';

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
    return (
        <Card key={pack.id} className="flex flex-col h-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl hover:shadow-[#B89B5E]/20 transition-all duration-500 border border-white/10 bg-[#1F3A34]/20 backdrop-blur-xl relative group">
            {pack.bestseller && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                    <Badge variant="accent" className="bg-[#B89B5E] text-black uppercase font-black tracking-widest text-[8px] md:text-[9px] px-3 md:px-4 py-1.5 shadow-2xl rounded-none border-none">Bestseller</Badge>
                </div>
            )}
            <CardHeader className="p-8 md:p-12 space-y-4 md:space-y-8">
                <div className='flex justify-between items-start'>
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-[#1F3A34]/40 border border-white/5 flex items-center justify-center text-[#B89B5E] group-hover:bg-[#B89B5E] group-hover:text-black transition-all shadow-inner">
                        <IconComponent name={pack.icon} className="h-7 w-7 md:h-10 md:w-10" />
                    </div>
                    {pack.badgeText && <Badge variant={pack.badgeVariant || 'outline'} className="uppercase tracking-widest text-[8px] font-black border-[#B89B5E]/30 text-[#B89B5E] px-4 py-1 bg-[#1F3A34] shadow-lg">{pack.badgeText}</Badge>}
                </div>
                <div className="space-y-2 md:space-y-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B89B5E]">{pack.category.toUpperCase()}</p>
                    <CardTitle className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter text-white leading-[0.9] group-hover:text-[#B89B5E] transition-colors">
                        <Link href={`/packs/${pack.id}`}>{getDisplayTitle(pack.id, pack.title)}</Link>
                    </CardTitle>
                </div>
                <CardDescription className="text-sm md:text-lg text-zinc-100 leading-relaxed font-medium italic opacity-90">
                    {pack.description}
                </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 md:px-12 py-0 flex-1">
                <div className="grid grid-cols-2 gap-4 text-[9px] md:text-[11px] font-black text-[#B89B5E]/80 uppercase tracking-[0.2em] border-y border-white/5 py-6 md:py-8">
                    <span className="flex items-center gap-3"><LayoutGrid className="w-4 h-4 text-[#B89B5E]" /> {pack.checklists.length} DIVISIONS</span>
                    <span className="flex items-center gap-3"><Camera className="w-4 h-4 text-[#B89B5E]" /> EVIDENCE-READY</span>
                </div>
            </CardContent>

            <CardFooter className="p-8 md:p-12 flex flex-col gap-6 md:gap-8">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-black text-white italic font-headline leading-none">₹{pack.priceINR}</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black text-[#B89B5E]/60 uppercase tracking-[0.3em] italic">ACCESS RATE</span>
                </div>
                <button className="w-full h-16 md:h-20 rounded-2xl bg-[#B89B5E] text-black font-black uppercase italic text-xs md:text-sm tracking-widest transition-all hover:bg-[#B89B5E]/90 hover:scale-105 active:scale-95 group/btn border-none shadow-2xl">
                    <Link href={`/packs/${pack.id}`} className="flex items-center justify-center gap-3 md:gap-4">
                        CONFIGURE SYSTEM <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-2" />
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
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1F3A34]/20 to-[#0a1210]" />
                    </div>

                    <div className="container px-4 md:px-6 relative z-10 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center max-w-4xl mx-auto">
                            <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 py-1.5 px-8 uppercase tracking-[0.5em] font-black text-[10px] md:text-[12px] rounded-none bg-[#1F3A34]/60 backdrop-blur-md shadow-2xl">Operational Infrastructure</Badge>
                            <h1 className="text-4xl md:text-9xl font-black tracking-tighter font-headline text-white leading-[0.95] md:leading-[0.85] uppercase italic drop-shadow-2xl">
                                SYSTEMS <br/> <span className="text-[#B89B5E]">HUB.</span>
                            </h1>
                            <p className="text-base md:text-2xl text-zinc-100 font-medium leading-relaxed italic border-l-4 border-[#B89B5E] pl-8 md:pl-12 mx-auto max-w-3xl text-left bg-[#1F3A34]/10 py-6 rounded-r-3xl">
                                Stop managing manually. Deploy forensically engineered data engines to run your daily operations without chaos.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="w-full py-12 md:py-24 bg-[#0a1210]">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-4xl mx-auto mb-16 md:mb-24 p-3 rounded-2xl border border-white/10 bg-[#1F3A34]/20 shadow-2xl backdrop-blur-3xl">
                             <div className="flex flex-col md:flex-row gap-3 items-center">
                                <div className="relative w-full md:flex-1">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#B89B5E]/60" />
                                    <Input 
                                        type="search" 
                                        placeholder="SEARCH MASTER ENGINES..." 
                                        className="pl-14 w-full h-14 md:h-16 bg-black/60 border-transparent text-white font-black uppercase italic tracking-widest text-[11px] md:text-sm rounded-xl focus-visible:ring-[#B89B5E]/40 shadow-inner"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="w-[280px] h-16 rounded-xl border border-white/5 bg-[#1F3A34]/40 px-8 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-[#B89B5E] hover:bg-[#1F3A34]/60 transition-all shadow-lg">
                                                {activeCategory === 'All' ? 'SELECT SECTOR' : activeCategory}
                                                <ChevronDown className="w-5 h-5 ml-2 text-[#B89B5E]" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto bg-[#0a1210] border-white/10 backdrop-blur-3xl shadow-2xl">
                                            <DropdownMenuItem onSelect={() => handleCategoryChange('All')} className="uppercase text-[10px] font-black tracking-widest p-4 text-white/60 focus:bg-[#B89B5E] focus:text-black">ALL SECTORS</DropdownMenuItem>
                                            {categories.map(category => (
                                                <DropdownMenuItem key={category} onSelect={() => handleCategoryChange(category)} className="uppercase text-[10px] font-black tracking-widest p-4 text-white/60 focus:bg-[#B89B5E] focus:text-black">
                                                    {category}
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                {(searchTerm || activeCategory !== 'All') && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-8 h-14 md:h-16 text-[#B89B5E] uppercase font-black text-[10px] tracking-widest hover:text-white transition-colors"
                                    >
                                        <X className="h-5 w-5 inline-block mr-2" />
                                        RESET
                                    </button>
                                )}
                            </div>
                        </div>

                        {filteredPacks.length === 0 ? (
                            <div className="text-center py-24 md:py-40 bg-[#1F3A34]/5 rounded-[3rem] border border-dashed border-white/10 shadow-inner">
                                <p className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">NO SIGNAL DETECTED.</p>
                                <p className="text-zinc-400 mt-4 italic font-medium text-lg md:text-xl">Adjust your technical parameters or reset filters.</p>
                                <button onClick={clearFilters} className="mt-12 text-[#B89B5E] font-black uppercase tracking-[0.3em] text-[11px] underline hover:text-white underline-offset-8">CLEAR ALL PARAMETERS</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
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
