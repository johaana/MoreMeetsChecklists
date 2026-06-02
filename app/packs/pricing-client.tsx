'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { 
    Download, 
    Loader2, 
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
            <div className="text-center p-5 bg-primary/10 text-primary rounded-2xl border border-primary/20">
                <p className="font-black uppercase italic tracking-widest text-xs md:text-sm">TRANSMISSION SECURED. CHECK INBOX.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <Input type="email" placeholder="Enter institutional email..." value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black/40 border-white/10 h-14 text-sm rounded-xl italic text-white" />
            <button type="submit" className="w-full h-14 md:h-16 rounded-xl bg-[#2EB86B] text-[#0B0F14] font-black uppercase italic text-sm tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all border-none flex items-center justify-center gap-3" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download Toolkit
            </button>
        </form>
    )
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>(hasINR ? 'INDIA' : 'GLOBAL');
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);
    
    const rawCount = pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0);
    const displayTasks = Math.floor(rawCount / 10) * 10;

    const VALUE_ITEMS = [
        { t: `${displayTasks}+ Pre-built SOPs`, i: ClipboardCheck },
        { t: "Live Operational Dashboard", i: Activity },
        { t: "Trainer notes for teams", i: GraduationCap },
        { t: "Admin security controls", i: Lock },
        { t: "Multi-branch architecture", i: LayoutGrid },
        { t: "Editable .XLSX format", i: FileSpreadsheet }
    ];

    const BRAND_GREEN = "#2EB86B";

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-12 md:py-24 bg-[#0B0F14]" id="pricing">
                <div className="container px-4 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="bg-black border border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden text-center">
                            <div className="bg-white/[0.01] p-8 md:p-12 space-y-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                                    <Download className="w-7 h-7 md:w-8 md:h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-black uppercase italic font-headline tracking-tighter text-white">Instant Access</h2>
                                    <p className="text-sm md:text-base text-secondary-text italic font-medium">Sovereign Social Impact Pack</p>
                                </div>
                                <p className="text-4xl md:text-5xl font-black pt-2 md:pt-4" style={{ color: BRAND_GREEN }}>FREE</p>
                            </div>
                            <div className="p-8 md:p-12 pt-0">
                                <FreeDownloadForm pack={pack} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-10 md:py-20 bg-gradient-to-b from-[#0B0F14] to-[#0E1621] text-white border-t border-white/5" id="pricing">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="grid lg:grid-cols-[1fr,400px] gap-8 md:gap-12 items-center">
                    
                    {/* LEFT: VALUE ANCHOR */}
                    <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                        <div className="space-y-2 md:space-y-4">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.3em] font-black text-[9px] md:text-[11px] rounded-none px-4 py-1">DEPLOYMENT PROTOCOL</Badge>
                            <h2 className="text-[32px] md:text-5xl font-black font-headline text-white italic tracking-tighter uppercase leading-tight">
                                Professional <br />
                                <span style={{ color: BRAND_GREEN }}>Access Pricing.</span>
                            </h2>
                            <p className="text-sm md:text-lg text-zinc-400 font-medium italic max-w-md mx-auto lg:mx-0">
                                Institutional-grade operational systems, intentionally priced for everyday operators.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
                            <div className="flex flex-col">
                                <h3 className="text-[48px] md:text-6xl font-black text-white italic tracking-tighter leading-none pt-1">
                                    {region === 'INDIA' ? `₹2,499` : `$29`}
                                </h3>
                            </div>
                            <div className="hidden md:block w-px h-16 bg-white/10" />
                            <div className="space-y-0.5">
                                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary">ONE-TIME PAYMENT</p>
                                <p className="text-[9px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest italic">OWN FOREVER • NO SUBSCRIPTIONS</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-5 max-w-lg mx-auto lg:mx-0">
                            {VALUE_ITEMS.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-3 group">
                                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${BRAND_GREEN}1A` }}>
                                        <item.i className="w-2.5 md:w-3 md:h-3" style={{ color: BRAND_GREEN }} />
                                    </div>
                                    <span className="text-[10px] md:text-sm font-bold italic text-zinc-400 group-hover:text-white transition-colors leading-tight">
                                        {item.t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: DECISION BOX */}
                    <div className="relative pt-4 lg:pt-0">
                        <div className="absolute -inset-4 blur-3xl opacity-20" style={{ backgroundColor: BRAND_GREEN }} />
                        
                        <div className="relative bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-[2rem] p-6 md:p-10 shadow-2xl flex flex-col items-center gap-6">
                            <div className="text-center space-y-4 w-full">
                                <div className="space-y-2">
                                    <p className="text-[9px] md:text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">SELECT REGION</p>
                                    <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-full">
                                        <TabsList className="bg-black/40 border border-white/5 h-10 p-1 rounded-xl w-full grid grid-cols-2">
                                            <TabsTrigger value="INDIA" className="text-[9px] font-black uppercase rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black">INDIA</TabsTrigger>
                                            <TabsTrigger value="GLOBAL" className="text-[9px] font-black uppercase rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black">GLOBAL</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                <div className="pt-2">
                                    <p className="text-[12px] md:text-sm font-medium text-zinc-400 italic">Full system deployment</p>
                                    <p className="text-2xl md:text-3xl font-black text-white italic tracking-tighter pt-0.5">
                                        {region === 'INDIA' ? `₹2,499` : `$29`}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center gap-6">
                                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 w-full">
                                    <input 
                                        type="checkbox" 
                                        id="agree-terms" 
                                        className="w-4 h-4 rounded border-white/20 bg-black/40 text-primary focus:ring-primary/20"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    />
                                    <label htmlFor="agree-terms" className="text-[10px] text-zinc-400 font-medium leading-none">
                                        I agree to the <Link href="/terms" target="_blank" className="underline hover:text-white">Terms</Link> & <Link href="/refund" target="_blank" className="underline hover:text-white">Refund Policy</Link>
                                    </label>
                                </div>

                                {region === 'INDIA' && hasINR ? (
                                    <div className={cn("w-full relative max-w-[320px] flex justify-center", !agreedToTerms && "opacity-40 pointer-events-none")}>
                                        <RazorpayButton 
                                            paymentId={pack.paymentId} 
                                            className="w-full flex justify-center min-h-[60px]" 
                                        />
                                    </div>
                                ) : (
                                    <Button asChild size="lg" className="w-full h-16 text-[#0B0F14] font-black text-sm rounded-xl border-none uppercase italic tracking-widest shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 group max-w-[320px] bg-primary" disabled={!agreedToTerms}>
                                        <Link 
                                            href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3"
                                        >
                                            Deploy Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                                        </Link>
                                    </Button>
                                )}
                                
                                <div className="space-y-1.5 text-center">
                                    {[
                                        "Secure payment gateway",
                                        "Instant download after payment",
                                        "No login required"
                                    ].map((line, i) => (
                                        <div key={i} className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] font-bold text-zinc-500 italic">
                                            <CheckCircle2 className="w-2.5 h-2.5" style={{ color: `${BRAND_GREEN}99` }} /> {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 text-center border-t border-white/5 space-y-2">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">
                        Current access pricing applies to all standard packs.
                    </p>
                    <p className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em] italic">
                        Pricing subject to revision with future system upgrades.
                    </p>
                </div>
            </div>
        </section>
    );
}
