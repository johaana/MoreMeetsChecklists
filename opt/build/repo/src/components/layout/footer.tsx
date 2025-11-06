
import Link from "next/link";
import { Logo, WhatsAppIcon } from "@/components/icons";
import { Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-secondary/50 mt-12">
            <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                    <p className="text-xs md:text-sm text-muted-foreground max-w-xs">
                        The Professional Standard for Compliance &amp; Operations Checklists.
                    </p>
                     <div className="flex flex-col items-center md:items-start gap-2 mt-4 text-sm">
                         <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                            <WhatsAppIcon className="w-4 h-4" />
                            <span>Chat on WhatsApp</span>
                        </a>
                        <a href="mailto:more@moremeets.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                            <Mail className="w-4 h-4" />
                            more@moremeets.com
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center text-xs md:text-sm">
                    <h3 className="font-semibold">Quick Links</h3>
                    <Link href="/packs" className="text-muted-foreground hover:text-foreground" prefetch={false}>All Packages</Link>
                    <Link href="/checklists" className="text-muted-foreground hover:text-foreground" prefetch={false}>Bestselling Checklists</Link>
                    <Link href="/#faq" className="text-muted-foreground hover:text-foreground" prefetch={false}>FAQ</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>Contact Us</Link>
                    <Link href="/packs/animal_shelter_pack" className="text-muted-foreground hover:text-foreground" prefetch={false}>Social Impact (Free Resources)</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-xs md:text-sm">
                    <h3 className="font-semibold">Legal</h3>
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
                    <p className="text-xs text-muted-foreground mt-4">&copy; 2025 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

    