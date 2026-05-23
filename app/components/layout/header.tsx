
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IconComponent } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown, Check } from "lucide-react";
import React from 'react';
import { premiumPacks } from "@/lib/premium-packs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { getDisplayTitle } from "@/lib/ui-mappings";

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

const packs = Array.isArray(premiumPacks) ? premiumPacks : [];
const visiblePacks = packs.filter(p => ELITE_PACK_IDS.includes(p.id));

const allPacksByCategory = visiblePacks.reduce((acc, pack) => {
    const category = pack.category || "Uncategorized";
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(pack);
    return acc;
}, {} as Record<string, typeof premiumPacks>);

const SolutionsList = () => (
    <div className="flex flex-col gap-y-6">
        <div className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-4 flex flex-col">
        {Object.entries(allPacksByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
            <div key={category} className="flex flex-col mb-4 md:mb-0 break-inside-avoid">
                <h5 className="font-black text-slate-900 mb-2 px-2 uppercase tracking-[0.3em] text-[9px] font-headline">{category}</h5>
                <ul className="space-y-1">
                    {packs.map(pack => (
                        <li key={pack.id}>
                            <Link href={`/packs/${pack.id}`} className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-black/5">
                                <span className="shrink-0 w-4 h-4 flex items-center justify-center">
                                    <IconComponent name={pack.icon} className="w-3.5 h-3.5" />
                                </span>
                                <span className="flex-1 leading-snug">{getDisplayTitle(pack.id, pack.title)}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    </div>
);

const BrandLogo = ({ forceTheme }: { forceTheme?: 'light' | 'dark' }) => (
     <Link href="/" className="flex items-center justify-center gap-2.5 group" prefetch={false}>
        <div className="w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#2E7D5A' }}>
            <Check className="w-4 h-4" strokeWidth={3} />
        </div>
        <div className="flex flex-col">
            <span className={cn(
                "font-headline text-lg font-bold leading-none tracking-tight",
                forceTheme === 'dark' ? "text-white" : "text-[#111111]"
            )}>MoreMeets™</span>
            <span className={cn(
                "text-[9px] font-bold uppercase tracking-[0.1em] leading-none mt-1",
                forceTheme === 'dark' ? "text-white/40" : "text-[#6B7280]"
            )}>Operational Standards</span>
        </div>
    </Link>
);

export function SiteHeader({ forceTheme }: { forceTheme?: 'light' | 'dark' }) {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        setIsSheetOpen(false);
        setIsDropdownOpen(false);
    }, [pathname]);

    const navLinkClass = cn(
        "text-[13px] font-medium transition-all",
        (isScrolled || forceTheme === 'dark') ? "text-white/85 hover:text-white" : "text-[#2A2A2A]/85 hover:text-[#111111]"
    );

    return (
        <header className={cn(
            "px-8 lg:px-12 h-[72px] flex items-center fixed top-0 w-full z-[100] transition-all duration-500",
            (isScrolled || forceTheme === 'dark') ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-white/80 backdrop-blur-md border-b border-black/5"
        )} style={!(isScrolled || forceTheme === 'dark') ? {
            background: 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.18) 100%)',
            backdropFilter: 'blur(14px)'
        } : {}}>
            <div className="flex items-center">
                <BrandLogo forceTheme={(isScrolled || forceTheme === 'dark') ? 'dark' : 'light'} />
            </div>

            <nav className="ml-auto hidden md:flex gap-10 items-center">
                <div 
                    className="group static"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className={cn(navLinkClass, "flex items-center gap-1.5 py-6")}>
                        Solutions <ChevronDown className={cn("w-3 h-3 transition-transform group-hover:rotate-180", (isScrolled || forceTheme === 'dark') ? "text-white/40" : "text-zinc-400")} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl opacity-100 visible transition-all duration-300 pt-2 z-20">
                            <div className="bg-white rounded-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-black/10 flex flex-col overflow-hidden">
                                    <ScrollArea className="max-h-[75vh] overflow-y-auto">
                                    <div className="p-10">
                                        <SolutionsList />
                                    </div>
                                </ScrollArea>
                                <div className="bg-black/[0.02] p-4 border-t border-black/5 flex items-center justify-between px-10">
                                    <Link href="/library" className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 hover:text-emerald-700 transition-colors p-2 rounded-md hover:bg-black/5">
                                        View All Systems &rarr;
                                    </Link>
                                    <Link href="/packs/animal_shelter_pack" className="text-[9px] font-black text-emerald-600 hover:text-emerald-700 transition-colors p-2 rounded-md hover:bg-black/5 flex items-center gap-2 uppercase tracking-[0.3em]">
                                        Social Impact (Free)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/#how-it-works" className={navLinkClass} prefetch={false}>Methodology</Link>
                <Link href="/blog" className={navLinkClass} prefetch={false}>Intelligence</Link>
                <Link href="/contact" className={navLinkClass} prefetch={false}>Contact</Link>
                
                <button className={cn(
                    "h-11 px-7 rounded-full font-bold uppercase text-[11px] tracking-widest shadow-lg hover:translate-y-[-1px] transition-all active:scale-95 ml-4",
                    (isScrolled || forceTheme === 'dark') ? "bg-white text-black" : "bg-[#111111] text-white"
                )}>
                    <Link href="/library">Get System</Link>
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-auto flex items-center">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={cn("mr-[-12px]", (isScrolled || forceTheme === 'dark') ? "text-white/80 hover:bg-white/10" : "text-slate-900 hover:bg-black/5")}>
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm flex flex-col p-0 bg-white border-l-black/5 shadow-2xl">
                         <SheetHeader className="p-4 border-b border-black/5">
                            <SheetTitle>
                                <BrandLogo forceTheme="light" />
                            </SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="flex-1">
                            <div className="flex flex-col p-4">
                                <Accordion type="multiple" className="w-full">
                                    <AccordionItem value="packs" className="border-b border-black/5">
                                        <AccordionTrigger className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 hover:no-underline py-5">
                                            Operational Systems
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4">
                                            {Object.entries(allPacksByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
                                                <div key={category} className="ml-4 pl-4 border-l border-black/5 mb-4">
                                                    <h5 className="font-black text-[9px] uppercase tracking-[0.3em] text-emerald-600 mt-2 mb-2 font-headline">{category}</h5>
                                                    <div className="flex flex-col gap-1">
                                                        {packs.map(pack => (
                                                            <Link key={pack.id} href={`/packs/${pack.id}`} className="text-[11px] font-bold uppercase tracking-tight text-slate-600 hover:text-slate-900 transition-colors py-2 px-2 rounded-md hover:bg-black/5 flex items-center gap-2">
                                                                <IconComponent name={pack.icon} className="w-3.5 h-3.5 shrink-0" />
                                                                <span>{getDisplayTitle(pack.id, pack.title)}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <div className="border-b border-black/5">
                                        <Link href="/#how-it-works" className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors py-5 flex" prefetch={false}>
                                            Methodology
                                        </Link>
                                    </div>
                                    <div className="border-b border-black/5">
                                        <Link href="/blog" className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors py-5 flex" prefetch={false}>
                                            Intelligence
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/contact" className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors py-5 flex" prefetch={false}>
                                            Contact
                                        </Link>
                                    </div>
                                </Accordion>
                            </div>
                         </ScrollArea>
                         <div className="p-4 bg-zinc-50 border-t">
                            <Button asChild className="w-full h-14 rounded-xl bg-[#111111] text-white font-bold uppercase text-xs tracking-widest">
                                <Link href="/library">Get Your System</Link>
                            </Button>
                         </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

