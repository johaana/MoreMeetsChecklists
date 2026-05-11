import Link from "next/link";
import { Logo, WhatsAppIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-alternate-background text-secondary-text pb-24 md:pb-12">
            <div className="container grid items-start justify-center gap-8 px-4 py-12 text-center md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <div className="flex flex-col">
                            <span className="font-headline text-lg font-bold text-primary-text leading-none tracking-tight">MoreMeets™</span>
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 leading-none mt-1">LESS MISSES.</span>
                        </div>
                    </Link>
                    <p className="text-xs md:text-sm text-muted-text max-w-xs pt-2">
                        Audit-Ready Operational Standards for modern teams. Built in Excel. Shared through Google Sheets for live operations.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center text-sm md:items-start md:mx-auto">
                    <h3 className="font-semibold mb-2 text-primary-text">Navigation</h3>
                    <Link href="/about" className="text-secondary-text hover:text-primary-text" prefetch={false}>About Us</Link>
                    <Link href="/library" className="text-secondary-text hover:text-primary-text" prefetch={false}>Operational Systems</Link>
                    <Link href="/blog" className="text-secondary-text hover:text-primary-text" prefetch={false}>Intelligence Hub</Link>
                    <Link href="/contact" className="text-secondary-text hover:text-primary-text" prefetch={false}>Contact</Link>
                    <a href="https://calendly.com/more-moremeets/30min" target="_blank" className="text-secondary-text hover:text-primary-text">Book a Consultation</a>
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
                         <Link href="/sitemap.xml" className="text-secondary-text hover:text-primary-text" prefetch={false}>
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
             <div className="border-t border-white/5 py-4">
                <p className="text-xs text-white/20 text-center uppercase tracking-widest font-black">&copy; 2025 MoreMeets™. All rights reserved.</p>
            </div>
        </footer>
    );
}
