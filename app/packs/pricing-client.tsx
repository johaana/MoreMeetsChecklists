
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { 
    Check, 
    Download, 
    Loader2, 
    Globe, 
    Landmark, 
    ArrowRight,
    ShieldCheck,
    Lock,
    Infinity,
    FileSpreadsheet,
    Zap
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
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900/50 dark:text-green-200">
                <p className="font-semibold text-xs">Thank you! Your pack is on its way.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
             <Input type="email" placeholder="Institutional email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-background/50 border-white/10 h-10 text-xs" />
            <Button size="lg" type="submit" className="w-full font-black uppercase italic tracking-widest text-[10px] h-12" disabled={loading} variant="accent">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Download Toolkit
            </Button>
        </form>
    )
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    const [region, setRegion] = React.useState<'INDIA' | 'GLOBAL'>('INDIA');
    
    const totalChecklists = 12; 
    const totalTasks = 120; 

    const PROOFS = [
        { label: 'Audit-Ready', icon: ShieldCheck },
        { label: 'Editable .xlsx', icon: FileSpreadsheet },
        { label: 'Lifetime Updates', icon: Infinity },
        { label: 'No SaaS lock-in', icon: Lock }
    ];

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-8 md:py-16" id="pricing">
                <div className="container px-4">
                    <div className="max-w-md mx-auto">
                        <Card className="bg-black border-white/10 shadow-2xl rounded-2xl overflow-hidden text-center">
                            <CardHeader className="bg-white/[0.01] p-6">
                                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                                <CardTitle className="text-xl font-black uppercase italic font-headline">Instant Access</CardTitle>
                                <p className="text-4xl font-black pt-2 text-primary italic font-headline">Free</p>
                            </CardHeader>
                            <CardFooter className="p-6">
                                <FreeDownloadForm pack={pack} />
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-8 md:py-24" id="pricing">
            <div className="container px-4">
                <div className="flex justify-center">
                    <Card className="w-full max-w-[550px] bg-black border-white/10 shadow-2xl flex flex-col h-full overflow-hidden rounded-2xl">
                        <CardHeader className="pb-4 border-b border-white/5 bg-white/[0.01] flex flex-col items-center pt-6 px-6">
                            <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="mb-6">
                                <TabsList className="bg-white/5 border border-white/10 h-8 p-0.5 rounded-full px-1">
                                    <TabsTrigger value="INDIA" className="text-[8px] font-black uppercase px-4 h-7 rounded-full tracking-widest flex items-center gap-1.5"><Landmark className="w-3 h-3" /> INDIA (₹)</TabsTrigger>
                                    <TabsTrigger value="GLOBAL" className="text-[8px] font-black uppercase px-4 h-7 rounded-full tracking-widest flex items-center gap-1.5"><Globe className="w-3 h-3" /> GLOBAL ($)</TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <Badge variant="outline" className="text-accent border-accent/30 text-accent uppercase tracking-widest px-3 py-0.5 font-black text-[8px]">SOVEREIGN V11.9</Badge>
                                <h2 className="text-2xl md:text-5xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-none">OPERATIONAL CERTAINTY</h2>
                            </div>
                        </CardHeader>

                        <CardContent className="p-6 md:p-12 flex flex-col text-center space-y-6">
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-base md:text-2xl font-black text-primary-text uppercase leading-tight italic font-headline">{totalChecklists} Modules • {totalTasks}+ Points</p>
                                <p className="text-[9px] text-secondary-text italic font-medium">Consistency is either engineered, or it is non-existent.</p>
                            </div>

                            <div className="flex items-center justify-center gap-4 py-2 border-y border-white/5">
                                <div className="text-left">
                                    <p className="text-[7px] font-black uppercase text-white/20 tracking-widest">Rate</p>
                                    <p className="text-[10px] font-bold text-white/40 line-through">{region === 'INDIA' ? '₹1,999' : '$25'}</p>
                                </div>
                                <div className="w-px h-6 bg-white/5" />
                                <div className="text-left">
                                    <p className="text-[7px] font-black uppercase text-primary tracking-widest">Price</p>
                                    <p className="text-2xl font-black text-primary-text italic font-headline">{region === 'INDIA' ? `₹999` : `$12`}</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                <div className="w-full max-w-xs">
                                    {region === 'INDIA' && hasINR ? (
                                        <RazorpayButton paymentId={pack.paymentId} className="w-full" />
                                    ) : (
                                        <Button asChild size="lg" className="w-full h-12 bg-primary text-black font-black text-sm rounded-xl border-none uppercase italic tracking-widest">
                                            <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`}>DEPLOY SYSTEM: ${pack.priceUSD}</Link>
                                        </Button>
                                    )}
                                </div>
                                
                                <div className="mt-6 pt-4 border-t border-white/5 w-full flex flex-col gap-3">
                                    <p className="text-[8px] font-black tracking-widest uppercase text-white/30 italic">OWN THE FULL TECHNICAL LIBRARY FOREVER</p>
                                    <Button asChild variant="link" className="h-auto p-0 text-[8px] font-black uppercase text-accent/60 tracking-widest hover:text-accent">
                                        <Link href="https://calendly.com/more-moremeets/30min" target="_blank">BESPOKE BUILD? SCHEDULE CALL</Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>

                        <div className="bg-white/[0.03] border-t border-white/5 py-4 px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {PROOFS.map(item => (
                                <div key={item.label} className="flex items-center gap-1 text-[7px] font-black uppercase text-white/30 tracking-widest italic font-headline">
                                    <item.icon className="w-2.5 h-2.5 text-primary/40" /> {item.label}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
