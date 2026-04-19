
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
    CheckCircle2
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';
import { cn } from '@/lib/utils';

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
        { t: "120+ Pre-built SOPs (Ready to use)", i: ClipboardCheck },
        { t: "Live Dashboard (Track work instantly)", i: Activity },
        { t: "Trainer notes for faster training", i: GraduationCap },
        { t: "Admin controls (Lock structure)", i: Lock },
        { t: "Multi-location architecture", i: LayoutGrid },
        { t: "Fully editable Sovereign .XLSX", i: FileSpreadsheet }
    ];

    const BRAND_GREEN = "#2EB86B";
    const CONVERSION_AMBER = "#F59E0B";

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-16 md:py-24 bg-[#0B0F14]" id="pricing">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#0B0F14] to-[#0E1621] text-white overflow-hidden border-t border-white/5" id="pricing">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-center">
                    
                    {/* LEFT: VALUE ANCHOR */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.3em] font-black text-[10px] rounded-none px-4 py-1">DEPLOYMENT PROTOCOL</Badge>
                            <h2 className="text-4xl md:text-5xl font-black font-headline text-white italic tracking-tighter uppercase leading-tight">
                                Sovereign <br />
                                <span className="text-primary">Master Engine.</span>
                            </h2>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-lg font-medium text-zinc-500 line-through italic tracking-tight leading-none">
                                    {region === 'INDIA' ? `₹${pack.anchorPriceINR}` : `$${pack.anchorPriceUSD}`}
                                </span>
                                <h3 className="text-6xl font-black text-white italic tracking-tighter leading-none pt-2" style={{ textShadow: `0 0 20px ${BRAND_GREEN}30` }}>
                                    {region === 'INDIA' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                                </h3>
                            </div>
                            <div className="w-px h-16 bg-white/10 hidden md:block" />
                            <div className="space-y-1">
                                <p className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: CONVERSION_AMBER }}>LIMITED TIME OFFER</p>
                                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest italic">One-time payment • Own forever</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                            {VALUE_ITEMS.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 group">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-primary/10">
                                        <item.i className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm font-bold italic text-zinc-300 group-hover:text-white transition-colors leading-tight">
                                        {item.t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DECISION BOX */}
                    <div className="relative">
                        {/* Decorative glow behind card */}
                        <div className="absolute -inset-4 bg-primary/5 blur-3xl opacity-50" />
                        
                        <div className="relative bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col items-center gap-8">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B1A] border border-[#F59E0B30] text-[#F59E0B] px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                                Recommended deployment
                            </div>

                            <div className="text-center space-y-4 w-full">
                                <div className="space-y-1">
                                    <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">SELECT REGION</p>
                                    <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-full">
                                        <TabsList className="bg-black/40 border border-white/5 h-10 p-1 rounded-xl w-full grid grid-cols-2">
                                            <TabsTrigger value="INDIA" className="text-[9px] font-black uppercase rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black transition-all">INDIA</TabsTrigger>
                                            <TabsTrigger value="GLOBAL" className="text-[9px] font-black uppercase rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black transition-all">GLOBAL</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                <div className="pt-2">
                                    <p className="text-sm font-medium text-zinc-400 italic">Start using your system today</p>
                                    <p className="text-3xl font-black text-white italic tracking-tighter pt-1">
                                        {region === 'INDIA' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center gap-5">
                                {region === 'INDIA' && hasINR ? (
                                    <div className="w-full group/rzp relative">
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover/rzp:opacity-100 transition-opacity rounded-xl" />
                                        <RazorpayButton 
                                            paymentId={pack.paymentId} 
                                            className="w-full flex justify-center min-h-[60px] relative z-10" 
                                        />
                                    </div>
                                ) : (
                                    <button className="w-full h-16 text-[#0B0F14] font-black text-base rounded-xl border-none uppercase italic tracking-widest shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 group hover:scale-[1.02]" style={{ backgroundColor: CONVERSION_AMBER }}>
                                        <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} className="flex items-center gap-3">
                                            Deploy Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                                        </Link>
                                    </button>
                                )}
                                
                                <div className="space-y-2.5">
                                    {[
                                        "Secure payment via " + (region === 'INDIA' ? "Razorpay" : "Lemon Squeezy"),
                                        "Instant download after payment",
                                        "No login or SaaS account required"
                                    ].map((line, i) => (
                                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 italic">
                                            <CheckCircle2 className="w-3 h-3 text-primary/60" /> {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 text-center border-t border-white/5">
                    <p className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">
                        Immediate Deployment. Institutional Grade Engineering.
                    </p>
                </div>
            </div>
        </section>
    );
}
