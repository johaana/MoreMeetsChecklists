import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
    return (
        <footer className="w-full border-t bg-secondary/50 mt-12">
            <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The Professional Standard for Compliance &amp; Operations Checklists.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center text-sm">
                    <p className="font-semibold">Quick Links</p>
                    <Link href="/packs" className="text-muted-foreground hover:text-foreground" prefetch={false}>Packages</Link>
                    <Link href="/#why-us" className="text-muted-foreground hover:text-foreground" prefetch={false}>Why Us</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>Contact Us</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                    <p className="font-semibold">Legal</p>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/refund" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Refund Policy
                    </Link>
                     <Link href="/sitemap.xml" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Sitemap
                    </Link>
                    <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
