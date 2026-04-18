'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
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
    Zap,
    Scale,
    Activity
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { addContact } from './actions';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { RazorpayButton } from '../components/ui/razorpay-button';

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
            toast({ title: "Check Your Inbox!", description: `Your free toolkit for "${pack.title}" has been sent.` });
        } else {
            toast({ variant: "destructive", title: "Something went wrong", description: result.message || "Could not process your request." });
        }
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="text-center p-6 bg-primary/10 text-primary rounded-2xl border border-primary/20">
                <p className="font-black uppercase italic tracking-widest text-sm">Protocol Accepted. Check Inbox.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <Input type="email" placeholder="Institutional email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-black/40 border-white/10 h-14 text-sm rounded-xl italic" />
            <button type="submit" className="w-full h-16 rounded-xl bg-accent text-black font-black uppercase italic text-sm tracking-widest shadow-xl hover:scale-[1.02] active:scale-95 transition-all border-none" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download Sovereign Toolkit
            </button>
        </form>
    )
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>('INDIA');
    
    const totalChecklists = pack.checklists.length; 
    const totalTasks = pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0); 

    const PROOFS = [
        { label: 'Audit-Ready', icon: ShieldCheck },
        { label: 'Editable .xlsx', icon: FileSpreadsheet },
        { label: 'Lifetime Updates', icon: Infinity },
        { label: 'No SaaS lock-in', icon: Lock }
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
                                    <CardTitle className="text-3xl font-black uppercase italic font-headline tracking-tighter">Instant Access</CardTitle>
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
        <section className="w-full py-24 md:py-40 bg-[#0B0F14]" id="pricing">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-center mb-16 text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] rounded-none px-8 py-2">Deployment scale</Badge>
                    <h2 className="text-4xl md:text-6xl font-black font-headline text-white italic uppercase tracking-tighter">Secure Your System.</h2>
                </div>

                <div className="flex justify-center">
                    <Card className="w-full max-w-2xl bg-black border-white/10 shadow-[0_60px_120px_-15px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden rounded-[3rem]">
                        <CardHeader className="pb-10 border-b border-white/5 bg-white/[0.01] flex flex-col items-center pt-12 px-8">
                            <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="mb-10">
                                <TabsList className="bg-white/5 border border-white/10 h-12 p-1 rounded-full px-2">
                                    <TabsTrigger value="INDIA" className="text-[10px] font-black uppercase px-8 h-10 rounded-full tracking-widest flex items-center gap-3 data-[state=active]:bg-primary data-[state=active]:text-black transition-all">
                                        <Landmark className="w-4 h-4" /> INDIA (₹)
                                    </TabsTrigger>
                                    <TabsTrigger value="GLOBAL" className="text-[10px] font-black uppercase px-8 h-10 rounded-full tracking-widest flex items-center gap-3 data-[state=active]:bg-primary data-[state=active]:text-black transition-all">
                                        <Globe className="w-4 h-4" /> GLOBAL ($)
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <div className="flex flex-col items-center gap-4 text-center">
                                <Badge variant="outline" className="text-accent border-accent/40 text-accent uppercase tracking-[0.4em] px-6 py-1.5 font-black text-[11px] rounded-none bg-accent/5 backdrop-blur-md">SOVEREIGN V11.9 ACTIVE</Badge>
                                <h2 className="text-3xl md:text-6xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[0.9]">OPERATIONAL <br/> CERTAINTY</h2>
                            </div>
                        </CardHeader>

                        <CardContent className="p-8 md:p-20 flex flex-col text-center space-y-10">
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-xl md:text-3xl font-black text-primary-text uppercase leading-tight italic font-headline tracking-tighter">{totalChecklists} Modules • {totalTasks}+ Control Points</p>
                                <p className="text-sm text-secondary-text italic font-medium max-w-sm leading-relaxed border-l border-primary/20 pl-6">"Consistency is either engineered, or it is non-existent."</p>
                            </div>

                            <div className="flex items-center justify-center gap-8 py-8 border-y border-white/5">
                                <div className="text-left space-y-1">
                                    <p className="text-[9px] font-black uppercase text-white/20 tracking-[0.4em]">Institutional Rate</p>
                                    <p className="text-xl md:text-2xl font-bold text-white/30 line-through leading-none">{region === 'INDIA' ? '₹1,999' : '$25'}</p>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="text-left space-y-1">
                                    <p className="text-[9px] font-black uppercase text-primary tracking-[0.4em]">Deployment Price</p>
                                    <p className="text-4xl md:text-6xl font-black text-primary-text italic font-headline leading-none">{region === 'INDIA' ? `₹999` : `$12`}</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center space-y-8">
                                <div className="w-full max-w-md">
                                    {region === 'INDIA' && hasINR ? (
                                        <div className="hover:scale-[1.02] transition-transform">
                                            <RazorpayButton paymentId={pack.paymentId} className="w-full shadow-2xl" />
                                        </div>
                                    ) : (
                                        <button className="w-full h-20 bg-primary text-black font-black text-xl rounded-2xl border-none uppercase italic tracking-widest shadow-[0_20px_50px_-10px_rgba(46,184,107,0.4)] hover:scale-[1.02] transition-all active:scale-95">
                                            <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} className="flex items-center justify-center gap-3">
                                                DEPLOY SYSTEM: ${pack.priceUSD} <ArrowRight className="w-6 h-6" />
                                            </Link>
                                        </button>
                                    )}
                                </div>
                                
                                <div className="pt-8 border-t border-white/5 w-full flex flex-col gap-4">
                                    <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 italic">FULL OWNERSHIP • NO SaaS LOCK-IN • 100% UNLOCKED</p>
                                    <Link href="https://calendly.com/more-moremeets/30min" target="_blank" className="text-[10px] font-black uppercase text-accent/60 tracking-widest hover:text-accent transition-colors">
                                        BESPOKE BUILD? SCHEDULE DISCOVERY CALL →
                                    </Link>
                                </div>
                            </div>
                        </CardContent>

                        <div className="bg-white/[0.03] border-t border-white/5 py-8 px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                            {PROOFS.map(item => (
                                <div key={item.label} className="flex items-center gap-3 text-[10px] font-black uppercase text-white/30 tracking-[0.2em] italic font-headline">
                                    <item.icon className="w-4 h-4 text-primary/40" /> {item.label}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
