
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo, IconComponent } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown, PawPrint } from "lucide-react";
import React from 'react';
import { premiumPacks } from "@/lib/premium-packs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
                <h5 className="font-black text-primary/90 mb-2 px-2 uppercase tracking-[0.3em] text-[9px] font-headline">/ {category}</h5>
                <ul className="space-y-1">
                    {packs.map(pack => (
                        <li key={pack.id}>
                            <Link href={`/packs/${pack.id}`} className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-white/5">
                                <span className="shrink-0 w-4 h-4 flex items-center justify-center">
                                    <IconComponent name={pack.icon} className="w-3.5 h-3.5" />
                                </span>
                                <span className="flex-1 leading-snug">{pack.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
    </div>
);

const BrandLogo = ({ isScrolled, isDarkText }: { isScrolled: boolean, isDarkText?: boolean }) => (
     <Link href="/" className="flex items-center justify-center gap-2 group" prefetch={false}>
        <Logo className={cn("h-5 w-5 md:h-6 md:w-6 text-primary")} />
        <div className="flex flex-col">
            <span className={cn("font-headline text-base md:text-lg font-bold leading-none tracking-tight", (isScrolled || isDarkText) ? "text-foreground" : "text-white")}>MoreMeets™</span>
            <span className={cn("text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] leading-none mt-1", (isScrolled || isDarkText) ? "text-muted-foreground/60" : "text-white/40")}>LESS MISSES.</span>
        </div>
    </Link>
);

export function SiteHeader() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    const isDesignLab = pathname === '/design-lab';

    React.useEffect(() => {
        setIsSheetOpen(false);
        setIsDropdownOpen(false);
    }, [pathname]);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClass = cn(
        "text-[10px] font-headline font-black uppercase tracking-[0.3em] transition-colors",
        (isScrolled || isDesignLab) ? "text-muted-foreground hover:text-foreground" : "text-white/60 hover:text-white"
    );

    return (
        <header className={cn(
            "px-6 lg:px-12 h-16 flex items-center fixed top-0 w-full z-50 transition-all duration-500",
            isScrolled 
                ? "bg-background/95 backdrop-blur-md border-b border-white/5 shadow-sm" 
                : "bg-transparent border-b border-transparent"
        )}>
            <div className="flex items-center">
                <BrandLogo isScrolled={isScrolled} isDarkText={isDesignLab} />
            </div>

            <nav className="ml-auto hidden md:flex gap-10 items-center">
                <Link href="/about" className={navLinkClass} prefetch={false}>About Us</Link>
                <div 
                    className="group relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className={cn(navLinkClass, "flex items-center gap-1.5")}>
                        Systems <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 w-screen max-w-7xl opacity-100 visible transition-all duration-300 pt-2 z-20">
                            <div className="bg-background rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
                                    <ScrollArea className="max-h-[75vh] overflow-y-auto">
                                    <div className="p-10">
                                        <SolutionsList />
                                    </div>
                                </ScrollArea>
                                <div className="bg-white/[0.02] p-4 border-t border-white/5 flex items-center justify-between px-10">
                                    <Link href="/library" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-white/5">
                                        View Systems Hub &rarr;
                                    </Link>
                                    <Link href="/packs/animal_shelter_pack" className="text-[9px] font-black text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-white/5 flex items-center gap-2 uppercase tracking-[0.3em]">
                                        <PawPrint className="w-3.5 h-3.5" /> Social Impact (Free)
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Link href="/blog" className={navLinkClass} prefetch={false}>Intelligence</Link>
                <Link href="/contact" className={navLinkClass} prefetch={false}>Contact</Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-auto flex items-center">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={cn("mr-[-12px]", (isScrolled || isDesignLab) ? "text-foreground" : "text-white/60 hover:bg-white/10")}>
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm flex flex-col p-0 bg-background border-l-white/5 shadow-2xl">
                         <SheetHeader className="p-4 border-b border-white/5">
                            <SheetTitle>
                                <BrandLogo isScrolled={true} />
                            </SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="flex-1">
                            <div className="flex flex-col p-4">
                                <Accordion type="multiple" className="w-full">
                                    <div className="border-b border-white/5">
                                        <Link href="/about" className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors py-5 flex" prefetch={false}>
                                            About Us
                                        </Link>
                                    </div>
                                    <div className="border-b border-white/5">
                                        <Link href="/library" className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors py-5 flex" prefetch={false}>
                                            Systems Hub
                                        </Link>
                                    </div>
                                    <AccordionItem value="packs" className="border-b border-white/5">
                                        <AccordionTrigger className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground hover:no-underline py-5">
                                            Elite Industry Systems
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4">
                                            {Object.entries(allPacksByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
                                                <div key={category} className="ml-4 pl-4 border-l border-white/5 mb-4">
                                                    <h5 className="font-black text-[9px] uppercase tracking-[0.3em] text-primary/90 mt-2 mb-2 font-headline">/ {category}</h5>
                                                    <div className="flex flex-col gap-1">
                                                        {packs.map(pack => (
                                                            <Link key={pack.id} href={`/packs/${pack.id}`} className="text-[11px] font-bold uppercase tracking-tight text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-white/5 flex items-center gap-2">
                                                                <IconComponent name={pack.icon} className="w-3.5 h-3.5 shrink-0" />
                                                                <span>{pack.title}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <div className="border-b border-white/5">
                                        <Link href="/blog" className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors py-5 flex" prefetch={false}>
                                            Intelligence Hub
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/contact" className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors py-5 flex" prefetch={false}>
                                            Contact
                                        </Link>
                                    </div>
                                </Accordion>
                            </div>
                         </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
