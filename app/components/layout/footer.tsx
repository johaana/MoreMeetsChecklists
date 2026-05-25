import Link from "next/link";
import { Logo, WhatsAppIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-100 bg-zinc-50 text-zinc-600 pb-24 md:pb-12">
            <div className="container grid items-start justify-center gap-12 px-4 py-12 text-center md:py-20 md:grid-cols-3 md:text-left mx-auto max-w-6xl">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <div className="flex flex-col">
                            <span className="font-headline text-lg font-bold text-zinc-950 leading-none tracking-tight">MoreMeets™</span>
                            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500 leading-none mt-1">Operational Infrastructure</span>
                        </div>
                    </Link>
                    <p className="text-xs text-zinc-500 max-w-xs pt-4 font-bold italic leading-relaxed">
                        Spreadsheet-native operational infrastructure for real-world businesses. 
                        Because memory is not a system.
                    </p>
                    <div className="pt-6 hidden md:block">
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Operational Manifesto:</p>
                        <p className="text-[10px] italic font-medium text-zinc-500 mt-1">Systems serve people. People run systems. Luck is not a strategy.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center text-xs md:items-start md:mx-auto font-black uppercase tracking-widest">
                    <h3 className="font-black mb-2 text-zinc-950 text-[10px] tracking-[0.3em]">RESOURCES</h3>
                    <Link href="/library" className="hover:text-primary transition-colors" prefetch={false}>SOP Library</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors" prefetch={false}>Intelligence Hub</Link>
                    <Link href="/#pricing" className="hover:text-primary transition-colors" prefetch={false}>Pricing</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
                    <a href="https://calendly.com/more-moremeets/30min" target="_blank" className="text-primary">Book Discovery Session</a>
                </div>
                <div className="flex flex-col gap-3 items-center md:items-start text-xs font-black uppercase tracking-widest">
                    <h3 className="font-black mb-2 text-zinc-950 text-[10px] tracking-[0.3em]">CONTACT & LEGAL</h3>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                        <WhatsAppIcon className="w-4 h-4" />
                        <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp
                        </a>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:more@moremeets.com">
                            more@moremeets.com
                        </a>
                    </div>
                     <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[9px] text-zinc-400">
                        <Link href="/terms" className="hover:text-zinc-600">Terms</Link>
                        <Link href="/privacy" className="hover:text-zinc-600">Privacy</Link>
                        <Link href="/refund" className="hover:text-zinc-600">Refund Policy</Link>
                    </div>
                </div>
            </div>
            <div className="container max-w-6xl mx-auto px-4 py-8 border-t border-zinc-100 text-center">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] italic">
                    Daily operational execution your team can actually use.
                </p>
            </div>
             <div className="border-t border-zinc-100 py-6">
                <p className="text-[9px] text-zinc-400 text-center uppercase tracking-[0.5em] font-black">&copy; 2025 MoreMeets™. All rights reserved.</p>
            </div>
        </footer>
    );
}
