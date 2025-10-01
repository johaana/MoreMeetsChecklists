
'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import React from 'react';

const mainNavLinks = [
    { href: "/home-preview", label: "Home Preview", isPreview: true },
    { href: "/packs", label: "All Packages" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        setIsSheetOpen(false);
    }, [pathname]);


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
            <Link href="/" className="flex items-center justify-center gap-2 mr-6" prefetch={false}>
                <Logo className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold">MoreMeets</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
                {mainNavLinks.map(link => (
                     <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`text-sm font-medium transition-colors ${link.isPreview ? 'text-accent hover:text-accent/80' : 'text-muted-foreground hover:text-foreground'}`}
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
                            <Link href="/" className="flex items-center justify-center gap-2 mb-4" prefetch={false}>
                                <Logo className="h-6 w-6 text-primary" />
                                <span className="font-headline text-lg font-bold">MoreMeets</span>
                            </Link>
                            <nav className="flex flex-col gap-3">
                                {mainNavLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-lg font-medium transition-colors ${link.isPreview ? 'text-accent hover:text-accent/80' : 'text-muted-foreground hover:text-foreground'}`}
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

