
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown, PawPrint } from "lucide-react";
import React from 'react';
import { premiumPacks } from "@/lib/premium-packs";
import { individualChecklists } from "@/lib/individual-checklists";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- DATA PREPARATION (Computed once at top-level) ---
const visiblePacks = premiumPacks.filter(p => p.category !== "Social Cause");

const allPacksByCategory = visiblePacks.reduce((acc, pack) => {
    if (!acc[pack.category]) {
        acc[pack.category] = [];
    }
    acc[pack.category].push(pack);
    return acc;
}, {} as Record<string, typeof premiumPacks>);

const allChecklistsByCategory = individualChecklists.reduce((acc, checklist) => {
    if (!acc[checklist.category]) {
        acc[checklist.category] = [];
    }
    acc[checklist.category].push(checklist);
    return acc;
}, {} as Record<string, typeof individualChecklists>);


// Reusable component to render the list of solutions
const SolutionsList = () => (
    <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-start md:gap-x-6 md:gap-y-4">
        {Object.entries(allPacksByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
            <div key={category} className="flex flex-col mb-4 md:mb-0">
                <h5 className="font-bold text-sm text-primary/90 mb-2 px-2">{category}</h5>
                <ul className="space-y-1">
                    {packs.map(pack => (
                        <li key={pack.id}>
                            <Link href={`/packs/${pack.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-secondary/70">
                                <span className="shrink-0 w-5 h-5 flex items-center justify-center">{React.cloneElement(pack.icon, { className: "w-4 h-4" })}</span>
                                <span className="flex-1 leading-snug">{pack.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        </div>
        
        <Separator className="my-4"/>

        <div>
            <h4 className="font-bold text-sm text-primary/90 px-2 mb-2">Popular Individual Checklists</h4>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1">
                {individualChecklists.slice(0, 8).map(checklist => (
                <li key={checklist.id}>
                    <Link href={`/checklists/${checklist.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-secondary/70">
                    <span className="shrink-0 w-5 h-5 flex items-center justify-center">{React.cloneElement(checklist.icon, { className: "w-4 h-4" })}</span>
                    <span className="flex-1 leading-snug">{checklist.title}</span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
);

export function SiteHeader() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setIsSheetOpen(false);
        setIsDropdownOpen(false);
    }, [pathname]);

    React.useEffect(() => {
        if (isDropdownOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isDropdownOpen]);


    const BrandLogo = () => (
         <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
            <Logo className="h-6 w-6 text-primary" />
            <div className="flex flex-col">
                <span className="font-headline text-lg font-bold leading-tight">MoreMeets</span>
                <span className="text-xs text-muted-foreground leading-tight -mt-0.5">Less misses.</span>
            </div>
        </Link>
    );

    const isSalesPage = pathname === '/sales-consultancy';
    
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
            <div className="flex items-center">
                <Link href="/" className="mr-6 hidden md:flex items-center gap-2" prefetch={false}>
                    <Logo className="h-6 w-6 text-primary" />
                    <div className="flex flex-col">
                        <span className="font-headline text-lg font-bold leading-tight">MoreMeets</span>
                        <span className="text-xs text-muted-foreground leading-tight -mt-0.5">Less misses.</span>
                    </div>
                </Link>
            </div>
            
            <div className="md:hidden flex-1">
                 <BrandLogo />
            </div>

            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
                {!isSalesPage && (
                    <>
                        <div 
                            className="group relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                Explore Solutions <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full right-0 w-screen max-w-7xl opacity-100 visible transition-all duration-300 pt-2 z-20">
                                    <div className="bg-background rounded-lg shadow-2xl border flex flex-col">
                                         <ScrollArea className="max-h-[75vh] overflow-y-auto">
                                            <div className="p-6">
                                                <SolutionsList />
                                            </div>
                                        </ScrollArea>
                                        <div className="bg-secondary/50 p-3 border-t grid grid-cols-2 gap-4">
                                            <Link href="/packs" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-background/50">
                                                View All Premium Packs &rarr;
                                            </Link>
                                            <Link href="/checklists" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-background/50">
                                                View All Bestselling Checklists &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>Blog</Link>
                        <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>Contact</Link>
                    </>
                )}
                 {isSalesPage && (
                    <Button variant="ghost" asChild>
                        <Link href="/" prefetch={false}>
                            Back to Main Site
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                 )}
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-auto">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm flex flex-col p-0">
                         <SheetHeader className="p-4 border-b">
                            <SheetTitle>
                                <BrandLogo />
                            </SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="flex-1">
                            <div className="flex flex-col p-2">
                                {isSalesPage ? (
                                    <Link href="/" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors p-2">Back to Main Site</Link>
                                ) : (
                                <Accordion type="multiple" className="w-full">
                                    <AccordionItem value="packs" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium text-muted-foreground hover:text-foreground hover:no-underline p-2">
                                            All Premium Packs
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-2">
                                            {Object.entries(allPacksByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, packs]) => (
                                                <div key={category} className="ml-4 pl-4 border-l">
                                                    <h5 className="font-semibold text-base text-primary/90 mt-2 mb-1">{category}</h5>
                                                    <div className="flex flex-col gap-1">
                                                        {packs.map(pack => (
                                                            <Link key={pack.id} href={`/packs/${pack.id}`} className="text-base text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-secondary flex items-center gap-2">
                                                                {React.cloneElement(pack.icon, { className: "w-4 h-4 shrink-0" })}
                                                                <span>{pack.title}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                             <div className="ml-4 pl-4 border-l">
                                                <h5 className="font-semibold text-base text-primary/90 mt-2 mb-1">Social Cause</h5>
                                                <div className="flex flex-col gap-1">
                                                    <Link href="/packs/animal_shelter_pack" className="text-base text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-secondary flex items-center gap-2">
                                                        <span className="w-4 h-4 shrink-0"><PawPrint /></span>
                                                        <span>Animal Shelter (Free)</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                     <AccordionItem value="checklists" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium text-muted-foreground hover:text-foreground hover:no-underline p-2">
                                            All Individual Checklists
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-2">
                                            {Object.entries(allChecklistsByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, checklists]) => (
                                                <div key={category} className="ml-4 pl-4 border-l">
                                                     <h5 className="font-semibold text-base text-primary/90 mt-2 mb-1">{category}</h5>
                                                     <div className="flex flex-col gap-1">
                                                        {checklists.map(checklist => (
                                                             <Link key={checklist.id} href={`/checklists/${checklist.id}`} className="text-base text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-secondary flex items-center gap-2">
                                                                 {React.cloneElement(checklist.icon, { className: "w-4 h-4 shrink-0" })}
                                                                 <span>{checklist.title}</span>
                                                            </Link>
                                                        ))}
                                                     </div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <div className="border-b">
                                        <Link href="/blog" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors p-2 flex" prefetch={false}>
                                            Blog
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors p-2 flex" prefetch={false}>
                                            Contact
                                        </Link>
                                    </div>
                                </Accordion>
                                )}
                            </div>
                         </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
