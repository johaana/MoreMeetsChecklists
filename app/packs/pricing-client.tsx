
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { 
    Download, 
    Loader2, 
    Globe, 
    Landmark, 
    ShieldCheck,
    Lock,
    Infinity,
    FileSpreadsheet,
    ArrowRight,
    Check,
    GraduationCap,
    LayoutGrid,
    ClipboardCheck,
    Activity,
    Target,
    Waves
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
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
            toast({ variant: "destructive", title: "Transmission Failed", description: result.message || "Could not process request." });
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
            <button type="submit" className="w-full h-16 rounded-xl bg-[#F4A261] text-white font-black uppercase italic text-sm tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all border-none flex items-center justify-center gap-3" disabled={loading}>
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
    
    const totalChecklists = pack.checklists.length; 
    const totalTasks = pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0); 

    const PROOFS = [
        { label: 'Audit-Ready', icon: ShieldCheck },
        { label: 'Editable .xlsx', icon: FileSpreadsheet },
        { label: 'Lifetime Updates', icon: Infinity },
        { label: 'No SaaS lock-in', icon: Lock }
    ];

    const SPECS = [
        { t: "PRE-BUILT SOPs", i: ClipboardCheck },
        { t: "AUTO DASHBOARD", i: Activity },
        { t: "TRAINER NOTES", i: GraduationCap },
        { t: "ADMIN CONTROLS", i: Lock },
        { t: "MULTI-BRANCH READY", i: LayoutGrid },
        { t: "100% UNLOCKED EXCEL", i: FileSpreadsheet }
    ];

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-24 md:py-32 bg-[#0B0F14]" id="pricing">
                <div className="container px-4 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <Card className="bg-black border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] overflow-hidden text-center">
                            <CardHeader className="bg-white/[0.01] p-12 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                                    <Download className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <CardTitle className="text-3xl font-black uppercase italic font-headline tracking-tighter text-white">Instant Access</CardTitle>
                                    <p className="text-secondary-text italic font-medium">Sovereign Social Impact Pack</p>
                                </div>
                                <p className="text-6xl font-black pt-4 text-primary italic font-headline tracking-tighter">FREE</p>
                            </CardHeader>
                            <CardContent className="p-12 pt-0">
                                <FreeDownloadForm pack={pack} />
                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    {PROOFS.slice(0, 2).map(item => (
                                        <div key={item.label} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <item.icon className="w-3.5 h-3.5 text-primary/40" />
                                            <span className="text-[8px] font-black text-white/30 uppercase tracking-widest italic">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-24 md:py-40 bg-[#0B0F14] text-white" id="pricing">
            <div className="container px-4 mx-auto max-w-[1000px]">
                
                {/* 1. NARRATIVE HEADER */}
                <div className="flex flex-col items-center text-center space-y-12 mb-20">
                    <div className="space-y-6">
                        <h2 className="text-[36px] md:text-[64px] font-black font-headline tracking-tighter leading-none uppercase italic">
                            {totalChecklists} MODULES • {totalTasks}+ POINTS
                        </h2>
                        <div className="flex justify-center">
                            <p className="text-xl md:text-2xl text-secondary-text italic font-medium border-l-2 border-primary pl-6 py-1">
                                "Consistency is either engineered, or it is non-existent."
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-sm h-px bg-white/5" />

                    <div className="w-full flex justify-center">
                         <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-full max-w-xs">
                            <TabsList className="bg-white/5 border border-white/10 h-12 p-1 rounded-full px-2 w-full grid grid-cols-2">
                                <TabsTrigger value="INDIA" className="text-[9px] font-black uppercase h-10 rounded-full tracking-widest flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-black transition-all">
                                    <Landmark className="w-3.5 h-3.5" /> INDIA (₹)
                                </TabsTrigger>
                                <TabsTrigger value="GLOBAL" className="text-[9px] font-black uppercase h-10 rounded-full tracking-widest flex items-center justify-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-black transition-all">
                                    <Globe className="w-3.5 h-3.5" /> GLOBAL ($)
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                {/* 2. PRICE COMPARISON ENGINE */}
                <div className="flex items-center justify-center gap-16 md:gap-24 mb-20">
                    {/* Institutional Rate */}
                    <div className="text-center space-y-1">
                        <span className="text-[10px] font-black uppercase text-zinc-500 tracking-[0.4em]">INSTITUTIONAL RATE</span>
                        <p className="text-4xl md:text-5xl font-black text-zinc-700 line-through italic tracking-tighter">
                            {region === 'INDIA' ? '₹1,999' : '$25'}
                        </p>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-px h-24 bg-white/5" />

                    {/* Deployment Price */}
                    <div className="text-center space-y-1">
                        <span className="text-[10px] font-black uppercase text-primary tracking-[0.4em]">DEPLOYMENT PRICE</span>
                        <p className="text-6xl md:text-8xl font-black text-white italic tracking-tighter">
                            {region === 'INDIA' ? '₹999' : '$12'}
                        </p>
                    </div>
                </div>

                {/* 3. SYSTEM SPECS GRID */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-2xl mx-auto mb-20">
                    {SPECS.map((spec, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                <spec.i className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-black uppercase italic tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                                {spec.t}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4. CONVERSION ANCHOR */}
                <div className="flex flex-col items-center space-y-12">
                    <div className="w-full max-w-md">
                        {region === 'INDIA' && hasINR ? (
                            <div className="hover:scale-[1.02] transition-transform duration-500">
                                <RazorpayButton paymentId={pack.paymentId} className="w-full shadow-[0_30px_60px_-15px_rgba(46,184,107,0.3)]" />
                            </div>
                        ) : (
                            <button className="w-full h-20 bg-[#F4A261] text-white font-black text-2xl rounded-2xl border-none uppercase italic tracking-widest shadow-[0_25px_50px_-10px_rgba(244,162,97,0.4)] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-4 group">
                                <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} className="flex items-center gap-4">
                                    BUY NOW <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                                </Link>
                            </button>
                        )}
                    </div>
                    
                    <div className="text-center space-y-4">
                        <p className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-600 italic">
                            FULL OWNERSHIP • NO SaaS LOCK-IN • 100% UNLOCKED
                        </p>
                        <Link href="https://calendly.com/more-moremeets/30min" target="_blank" className="text-[9px] font-black uppercase text-accent/40 tracking-[0.3em] hover:text-accent transition-colors block">
                            BESPOKE BUILD? SCHEDULE DISCOVERY CALL →
                        </Link>
                    </div>
                </div>

                {/* 5. TECHNICAL PROOF FOOTER */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
                    {PROOFS.map(item => (
                        <div key={item.label} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em] italic">
                            <item.icon className="w-4 h-4 text-primary/40" /> {item.label}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
