
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import React from 'react';
import { premiumPacks } from "@/lib/premium-packs";
import { cn } from "@/lib/utils";

const mainNavLinks = [
    { href: "/checklists", label: "Bestselling Checklists" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

const packsByCategory: Record<string, typeof premiumPacks> = premiumPacks.reduce((acc, pack) => {
    if (!acc[pack.category]) {
        acc[pack.category] = [];
    }
    acc[pack.category].push(pack);
    return acc;
}, {} as Record<string, typeof premiumPacks>);


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

    if (pathname === '/sales-consultancy') {
        return (
             <header className="px-4 lg:px-6 h-16 flex items-center bg-background sticky top-0 z-50 border-b">
                <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold text-primary">MoreMeets</span>
                </Link>
                <nav className="ml-auto">
                    <Button variant="ghost" asChild>
                        <Link href="/" prefetch={false}>
                            Back to Main Site
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </nav>
            </header>
        );
    }
    
    // All other pages get the standard header
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
            <div className="mr-6">
                <BrandLogo />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
                 <div className="group relative">
                    <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                        Browse by Industry <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full -left-8 w-screen max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                        <div className="bg-background rounded-lg shadow-2xl border p-6 grid grid-cols-3 gap-6">
                            {Object.entries(packsByCategory).map(([category, packs]) => (
                                <div key={category}>
                                    <h3 className="font-headline text-base font-bold text-primary mb-3">{category}</h3>
                                    <ul className="space-y-2">
                                        {packs.map(pack => (
                                            <li key={pack.id}>
                                                <Link href={`/packs/${pack.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group/item">
                                                   <span className="shrink-0">{pack.icon}</span> 
                                                   <span className="flex-1">{pack.title}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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
            </nav>

            {/* Mobile Navigation */}
            <div className="ml-auto md:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 p-4">
                            <div className="mb-4">
                                <BrandLogo />
                            </div>
                            <nav className="flex flex-col gap-3">
                                 <Link href="/packs" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                                    All Packages
                                </Link>
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
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

    