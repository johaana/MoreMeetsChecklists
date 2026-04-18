
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { 
    Download, 
    Loader2, 
    ShieldCheck,
    Lock,
    FileSpreadsheet,
    ArrowRight,
    GraduationCap,
    LayoutGrid,
    ClipboardCheck,
    Activity,
    FileDown,
    Ban
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';

/**
 * Sovereign Pricing Engine v14.0 - BRAND SYNCED & FIGMA-READY
 * Hierarchy: Price Anchor -> 2-Column Value Stack -> Centered Trust Resolve
 * Colors: Hardened Executive Green (#2EB86B)
 */
function FreeDownloadForm({ pack }: { pack: PremiumPack }) {
    const { toast } = useToast();
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await addContact({ email, packId: pack.id });
        if (result.success) {
            setSubmitted(true);
            toast({ title: "Protocol Accepted", description: "The Sovereign Toolkit has been sent to your inbox." });
        } else {
            toast({ variant: "destructive", title: "Transmission Failed", description: result.message || "Could not process your request." });
        }
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="text-center p-6 bg-primary/10 text-primary rounded-2xl border border-primary/20">
                <p className="font-black uppercase italic tracking-widest text-sm">TRANSMISSION SECURED. CHECK INBOX.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <Input type="email" placeholder="Enter institutional email..." value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black/40 border-white/10 h-14 text-sm rounded-xl italic text-white focus-visible:ring-primary/40" />
            <button type="submit" className="w-full h-16 rounded-xl bg-[#2EB86B] text-[#0B0F14] font-black uppercase italic text-sm tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all border-none flex items-center justify-center gap-3" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download Sovereign Toolkit
            </button>
        </form>
    )
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>(hasINR ? 'INDIA' : 'GLOBAL');
    
    const VALUE_ITEMS = [
        { t: "Pre-built SOPs (ready to use)", i: ClipboardCheck },
        { t: "Live dashboard (track work instantly)", i: Activity },
        { t: "Trainer notes (faster staff training)", i: GraduationCap },
        { t: "Admin controls (lock system, prevent changes)", i: Lock },
        { t: "Multi-location ready", i: LayoutGrid },
        { t: "Fully editable Excel system", i: FileSpreadsheet }
    ];

    const TRUST_BADGES = [
        { t: region === 'INDIA' ? "Razorpay Secure" : "Lemon Squeezy Secure", i: ShieldCheck },
        { t: "Instant Download", i: FileDown },
        { t: "Works on Excel", i: FileSpreadsheet },
        { t: "No subscription", i: Ban }
    ];

    const BRAND_GREEN = "#2EB86B";

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-24 md:py-32 bg-[#0B0F14]" id="pricing">
                <div className="container px-4 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-black border border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden text-center">
                            <div className="bg-white/[0.01] p-12 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                                    <Download className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black uppercase italic font-headline tracking-tighter text-white">Instant Access</h2>
                                    <p className="text-secondary-text italic font-medium">Sovereign Social Impact Pack</p>
                                </div>
                                <p className="text-6xl font-black pt-4 text-primary italic font-headline tracking-tighter">FREE</p>
                            </div>
                            <div className="p-12 pt-0">
                                <FreeDownloadForm pack={pack} />
                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    {TRUST_BADGES.slice(1, 3).map(item => (
                                        <div key={item.t} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <item.i className="w-3.5 h-3.5 opacity-40" style={{ color: BRAND_GREEN }} />
                                            <span className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-24 md:py-32 bg-gradient-to-b from-[#0B0F14] to-[#0E1621] text-white" id="pricing">
            <div className="container px-4 mx-auto max-w-[1100px]">
                
                {/* 1. TOP — PRICE ANCHOR */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <span className="text-[12px] font-black uppercase tracking-[1.5px] text-[#7B8794] font-headline">
                        DEPLOY YOUR SYSTEM
                    </span>
                    
                    <div className="flex flex-col items-center space-y-4">
                         <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-fit mb-4">
                            <TabsList className="bg-white/5 border border-white/10 h-9 p-0.5 rounded-full px-1 w-full max-w-[200px] grid grid-cols-2">
                                <TabsTrigger value="INDIA" className="text-[8px] font-black uppercase h-8 rounded-full tracking-widest data-[state=active]:bg-[#2EB86B] data-[state=active]:text-[#0B0F14] transition-all">
                                    INDIA
                                </TabsTrigger>
                                <TabsTrigger value="GLOBAL" className="text-[8px] font-black uppercase h-8 rounded-full tracking-widest data-[state=active]:bg-[#2EB86B] data-[state=active]:text-[#0B0F14] transition-all">
                                    GLOBAL
                                </TabsTrigger>
                            </TabsList>
                         </Tabs>

                        <div className="flex items-center gap-8 md:gap-12">
                            <span className="text-[28px] font-medium text-[#5B6670] line-through italic tracking-tight">
                                {region === 'INDIA' ? `₹${pack.anchorPriceINR}` : `$${pack.anchorPriceUSD}`}
                            </span>
                            <h2 className="text-[64px] md:text-[84px] font-bold text-white italic tracking-tighter leading-none">
                                {region === 'INDIA' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[14px] font-bold text-[#8A94A6] uppercase tracking-widest italic">
                            One-time payment • Own forever • No subscription
                        </p>
                        <p className="text-[13px] font-black uppercase tracking-[0.2em] animate-pulse" style={{ color: BRAND_GREEN }}>
                            LIMITED TIME OFFER
                        </p>
                    </div>
                </div>

                {/* 2. MIDDLE — VALUE STACK */}
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-20 bg-white/[0.02] border border-white/5 p-12 rounded-[2.5rem] backdrop-blur-sm shadow-inner">
                    {VALUE_ITEMS.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors" style={{ backgroundColor: `${BRAND_GREEN}1A` }}>
                                <item.i className="w-3.5 h-3.5" style={{ color: BRAND_GREEN }} />
                            </div>
                            <span className="text-[15px] font-bold italic text-[#C9D1D9] leading-tight group-hover:text-white transition-colors">
                                {item.t}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 3. BOTTOM — CTA BLOCK */}
                <div className="flex flex-col items-center space-y-8">
                    <div className="w-full max-w-[360px] flex flex-col items-center gap-4">
                        {region === 'INDIA' && hasINR ? (
                            <div className="w-full flex justify-center hover:scale-[1.02] transition-transform duration-500">
                                <RazorpayButton 
                                    paymentId={pack.paymentId} 
                                    className="w-full flex justify-center min-h-[60px] shadow-[0_30px_60px_-15px_rgba(46,184,107,0.3)]" 
                                />
                            </div>
                        ) : (
                            <button className="w-full h-[56px] text-[#0B0F14] font-black text-sm rounded-[12px] border-none uppercase italic tracking-[0.15em] shadow-[0_20px_50px_-10px_rgba(46,184,107,0.4)] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 group" style={{ backgroundColor: BRAND_GREEN }}>
                                <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} className="flex items-center gap-3">
                                    Start using your system <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </button>
                        )}
                        <p className="text-[13px] font-bold text-[#7B8794] uppercase tracking-widest italic text-center">
                            Secure payment • Instant access • No login required
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8 border-t border-white/5 w-full">
                        {TRUST_BADGES.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] font-black text-[#5B6670] uppercase tracking-widest italic">
                                <badge.i className="w-4 h-4 opacity-40" style={{ color: BRAND_GREEN }} />
                                {badge.t}
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 text-center">
                        <p className="text-[11px] font-bold text-[#5B6670] uppercase tracking-widest italic">
                            Immediate Deployment. Institutional Grade.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
