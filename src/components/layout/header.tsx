'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import React from 'react';
import { premiumPacks } from "@/lib/premium-packs";
import { individualChecklists } from "@/lib/individual-checklists";

const mainNavLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const packsByCategory: Record<string, typeof premiumPacks> = premiumPacks.reduce((acc, pack) => {
    if (!acc[pack.category]) {
        acc[pack.category] = [];
    }
    acc[pack.category].push(pack);
    return acc;
}, {} as Record<string, typeof premiumPacks>);

const checklistsByCategory: Record<string, (typeof individualChecklists)> = individualChecklists.reduce((acc, checklist) => {
    if (!acc[checklist.category]) {
        acc[checklist.category] = [];
    }
    acc[checklist.category].push(checklist);
    return acc;
}, {} as Record<string, (typeof individualChecklists)>);


export function SiteHeader() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setIsSheetOpen(false);
    }, [pathname]);


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
            <Link href="/" className="mr-6 hidden md:flex items-center gap-2" prefetch={false}>
                <Logo className="h-6 w-6 text-primary" />
                <div className="flex flex-col">
                    <span className="font-headline text-lg font-bold leading-tight">MoreMeets</span>
                    <span className="text-xs text-muted-foreground leading-tight -mt-0.5">Less misses.</span>
                </div>
            </Link>
            <div className="md:hidden mr-auto">
                <BrandLogo />
            </div>

            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
                {!isSalesPage && (
                    <>
                        <div className="group relative">
                            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                Explore Solutions <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-5xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2 z-20">
                                <div className="bg-background rounded-lg shadow-2xl border">
                                    <div className="max-h-[60vh] overflow-y-auto">
                                        <div className="grid grid-cols-12 gap-x-6 p-6">
                                            <div className="col-span-4 space-y-4">
                                                <h4 className="font-semibold text-sm text-muted-foreground px-2">Our Bestselling Individual Checklists</h4>
                                                <ul className="space-y-1">
                                                    {individualChecklists.slice(0, 8).map(checklist => (
                                                        <li key={checklist.id}>
                                                            <Link href={`/checklists/${checklist.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-secondary">
                                                                <span className="shrink-0 w-5 h-5 flex items-center justify-center">{React.cloneElement(checklist.icon, { className: "w-4 h-4" })}</span>
                                                                <span className="flex-1 leading-snug">{checklist.title}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-span-8">
                                                <h4 className="font-semibold text-sm text-muted-foreground px-2">Premium Packs by Industry</h4>
                                                <div className="columns-3 mt-2">
                                                    {Object.entries(packsByCategory).map(([category, packs]) => (
                                                        <div key={category} className="break-inside-avoid mb-4">
                                                            <h5 className="font-semibold text-sm text-primary/80 mb-1 px-2">{category}</h5>
                                                            <ul className="space-y-1">
                                                                {packs.map(pack => (
                                                                    <li key={pack.id}>
                                                                        <Link href={`/packs/${pack.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item p-2 rounded-md hover:bg-secondary">
                                                                        <span className="shrink-0 w-5 h-5 flex items-center justify-center">{React.cloneElement(pack.icon, { className: "w-4 h-4" })}</span> 
                                                                        <span className="flex-1 leading-snug">{pack.title}</span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-secondary/50 p-3 border-t grid grid-cols-2 gap-4">
                                        <Link href="/checklists" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-background/50">
                                            View All Bestselling Checklists &rarr;
                                        </Link>
                                        <Link href="/packs" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors p-2 rounded-md hover:bg-background/50">
                                            View All Premium Packs &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {mainNavLinks.map(link => (
                             <Link 
                                key={link.href} 
                                href={link.href} 
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                prefetch={false}
                             >
                                {link.label}
                            </Link>
                        ))}
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
            <div className="md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm">
                        <div className="flex flex-col gap-4 p-4">
                            <div className="mb-4">
                                <BrandLogo />
                            </div>
                             <div className="flex flex-col gap-3">
                                {isSalesPage ? (
                                    <Link href="/" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Back to Main Site</Link>
                                ) : (
                                <>
                                    <Link href="/packs" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">All Packages</Link>
                                    <Link href="/checklists" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">Bestselling Checklists</Link>
                                    {mainNavLinks.map(link => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                                            prefetch={false}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
