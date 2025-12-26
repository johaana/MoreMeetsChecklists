
import Link from "next/link";
import { Logo, WhatsAppIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-alternate-background text-secondary-text">
            <div className="container grid items-start justify-center gap-8 px-4 py-12 text-center md:py-16 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-authority-green" />
                        <span className="font-headline text-lg font-bold text-primary-text">MoreMeets</span>
                    </Link>
                    <p className="text-xs md:text-sm text-muted-text max-w-xs">
                        Audit-Ready Operational Standards for modern teams.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center text-sm md:items-start md:mx-auto">
                    <h3 className="font-semibold mb-2 text-primary-text">Navigation</h3>
                    <Link href="/library" className="text-secondary-text hover:text-primary-text" prefetch={false}>SOP Library</Link>
                    <Link href="/library" className="text-secondary-text hover:text-primary-text" prefetch={false}>Industries</Link>
                    <Link href="/#what-it-is" className="text-secondary-text hover:text-primary-text" prefetch={false}>How It Works</Link>
                    <Link href="/blog" className="text-secondary-text hover:text-primary-text" prefetch={false}>Blog</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start text-sm">
                    <h3 className="font-semibold mb-2 text-primary-text">Contact & Legal</h3>
                    <div className="flex items-center gap-2 text-secondary-text hover:text-primary-text">
                        <WhatsAppIcon className="w-4 h-4" />
                        <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-text hover:text-primary-text">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:more@moremeets.com">
                            more@moremeets.com
                        </a>
                    </div>
                     <div className="mt-4 flex flex-col gap-2 items-center md:items-start">
                        <Link href="/terms" className="text-secondary-text hover:text-primary-text" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="text-secondary-text hover:text-primary-text" prefetch={false}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
             <div className="border-t border-border py-4">
                <p className="text-xs text-muted-text text-center">&copy; 2025 MoreMeets. All rights reserved.</p>
            </div>
        </footer>
    );
}
