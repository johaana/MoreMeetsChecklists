
'use client';

import * as React from 'react';
import type { PremiumPack } from '../lib/premium-packs';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { 
    Check, 
    Download, 
    Loader2, 
    Globe, 
    Landmark, 
    Shield, 
    ArrowRight,
    QrCode,
    CreditCard as CardIcon,
    ShieldCheck,
    Lock,
    Gift,
    Infinity,
    FileSpreadsheet
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
            toast({
                title: "Check Your Inbox!",
                description: `Your free checklist pack for "${pack.title}" has been sent.`,
            });
        } else {
            toast({
                variant: "destructive",
                title: "Something went wrong",
                description: result.message || "Could not process your request.",
            });
        }

        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-md dark:bg-green-900/50 dark:text-green-200">
                <p className="font-semibold">Thank you! Your pack is on its way.</p>
                <p className="text-sm">Please check your email inbox (and spam folder).</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
             <Input
                type="email"
                placeholder="Enter your email to download"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-background/50"
            />
            <Button size="lg" type="submit" className="w-full font-black uppercase" disabled={loading} variant="accent">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Get Your Free Toolkit
            </Button>
        </form>
    )
}

function getIndustryWording(packId: string): string {
    const map: Record<string, string> = {
        'hotels_and_resorts': 'Hospitality Operations Checklists',
        'restaurants': 'Restaurant Operations Checklists',
        'fashion_and_apparel_retail': 'Apparel Retail Checklists',
        'jewelry_and_luxury_retail': 'High-Value Retail Checklists',
        'electronics_showroom_pack': 'Showroom & Asset Protection Checklists',
        'supermarket_grocery_retail_pack': 'Grocery Retail Checklists',
        'facility_management_blueprint': 'Facility Control Framework',
        'corporate_legal_compliance_starter_kit': 'Corporate Governance Framework',
        'enterprise_risk_cybersecurity_pack': 'Risk & Security Checklists',
        'healthcare_and_hospital_operations': 'Clinical & Safety Checklists',
        'school_operations_pack': 'School Safety & Operations Checklists',
        'university_college_ops': 'Higher-Ed Operations Checklists',
        'manufacturing_operations_ehs_pack': 'Safety & EHS Checklists',
        'food_manufacturing_ops': 'Food Safety & Manufacturing Checklists',
        'logistics_warehouse_pack': 'Warehouse & Logistics Checklists',
        'franchise_operations_pack': 'Franchise Performance Checklists',
        'film_production_pack': 'Film & Production Checklists',
        'ott_platform_pack': 'Streaming & Platform Control Checklists',
        'sports_clubs_stadium_operations_pack': 'Sports & Stadium Operations Checklists',
        'cinema_operations_pack': 'Cinema Operations Checklists',
        'theme_park_ops_pack': 'Theme Park Safety Checklists',
        'bakery_confectionery_pack': 'Bakery & Confectionery Checklists',
        'animal_shelter_pack': 'Animal Welfare & Operations Checklists',
    };
    return map[packId] || 'Operational Checklists';
}

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    
    const [region, setRegion] = React.useState<'GLOBAL' | 'INDIA'>(hasUSD ? 'GLOBAL' : 'INDIA');
    
    const totalChecklists = pack.checklists?.length || 0;
    const totalTasks = pack.checklists?.reduce((acc, c) => acc + c.tasks.length, 0) || 0;
    const industryWording = getIndustryWording(pack.id);

    const PROOFS = [
        { label: 'Audit-Ready', icon: ShieldCheck },
        { label: 'Editable .xlsx', icon: FileSpreadsheet },
        { label: 'Lifetime Updates', icon: Infinity },
        { label: 'No SaaS lock-in', icon: Lock }
    ];

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                        <h2 className="text-3xl font-black font-headline mb-2 text-primary uppercase italic">Institutional Access</h2>
                        <p className="text-foreground/80 text-base md:text-lg italic font-medium">As part of our commitment to social impact, this entire pack is available as a free, instant download.</p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex flex-col max-w-md w-full bg-surface-card border-white/10 shadow-2xl">
                            <CardHeader className="text-center border-b border-white/5 bg-white/[0.01]">
                                <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                                <CardTitle className="text-2xl font-black uppercase italic">Instant Download</CardTitle>
                                <CardDescription>Get the complete, fully-editable Excel file for the {pack.title}.</CardDescription>
                                <p className="text-5xl font-black pt-4 text-primary">Free</p>
                            </CardHeader>
                            <CardContent className="flex-1 p-6 text-center">
                                <ul className="space-y-4 text-muted-foreground text-sm flex flex-col items-center">
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-primary"/><span>Complete pack with all {totalChecklists} checklists.</span></li>
                                    <li className="flex items-start"><Check className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-primary"/><span>Fully editable Excel format.</span></li>
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto flex flex-col justify-center w-full gap-4 p-6 pt-0">
                                <FreeDownloadForm pack={pack} />
                                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest font-black">PRO BONO PUBLICO LICENSE</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-16 md:py-24" id="pricing">
            <div className="container px-4 md:px-6">
                <div className="flex justify-center">
                    <Card 
                        className="w-full max-w-[650px] bg-surface-card border-white/10 shadow-[0_0_60px_-12px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden relative"
                    >
                        <div className="absolute top-6 right-6 z-20">
                            <div className="bg-accent/10 border border-accent/20 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                                <ShieldCheck className="w-3 h-3 text-accent" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-accent">Audit Ready</span>
                            </div>
                        </div>

                        <CardHeader className="pb-6 border-b border-white/5 bg-white/[0.01] relative flex flex-col items-center pt-10">
                            <div className="flex justify-center mb-8">
                                <Tabs value={region} onValueChange={(v) => setRegion(v as any)} className="w-fit">
                                    <TabsList className="bg-white/5 border border-white/10 h-9 p-0.5 rounded-full px-1">
                                        <TabsTrigger 
                                            value="GLOBAL" 
                                            className="text-[10px] font-black uppercase px-5 h-8 rounded-full data-[state=active]:bg-white/10 data-[state=active]:text-primary flex items-center gap-2"
                                        >
                                            <Globe className="w-4 h-4" /> GLOBAL ($)
                                        </TabsTrigger>
                                        <TabsTrigger 
                                            value="INDIA" 
                                            className="text-[10px] font-black uppercase px-5 h-8 rounded-full data-[state=active]:bg-white/10 data-[state=active]:text-primary flex items-center gap-2"
                                        >
                                            <Landmark className="w-4 h-4" /> INDIA (₹)
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                            </div>
                            
                            <div className="w-full flex flex-col items-center gap-4">
                                <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                                <h2 className="text-[1.3rem] sm:text-3xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[1.1]">
                                    ELIMINATE OPERATIONAL RISK
                                </h2>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-white/40" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">INSTITUTIONAL COMPLIANCE GRADE</span>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1 p-8 md:p-12 flex flex-col space-y-10 text-center">
                            <div className="space-y-8">
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-xl md:text-2xl font-black text-primary-text tracking-tight uppercase leading-tight">
                                        {totalChecklists} {industryWording} · {totalTasks}+ Tasks
                                    </p>
                                    <p className="text-xs text-secondary-text italic font-medium">Complete Operational Payload</p>
                                </div>
                                
                                <div className="flex items-center justify-center gap-2 opacity-100">
                                    <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic text-center">
                                        ALIGNED: ISO · HACCP · OSHA · Industry Standards
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="space-y-2 mb-8">
                                    {pack.pricingUrgency && (
                                        <p className="text-sm font-bold text-accent italic">
                                            "{pack.pricingUrgency}"
                                        </p>
                                    )}
                                    <p className="text-xs text-muted-foreground line-through opacity-50 font-bold uppercase tracking-widest">
                                        Equivalent consulting cost: {region === 'INDIA' ? '₹4,00,000+' : `$${pack.consultingAnchor || 5000}+`}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 w-fit mx-auto transition-none">
                                    <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                                </div>

                                <div className="w-full flex flex-col items-center pt-8">
                                    <div className="w-full md:w-96">
                                        {region === 'INDIA' && hasINR ? (
                                            <div className="w-full">
                                                <RazorpayButton paymentId={pack.paymentId} className="w-full" />
                                            </div>
                                        ) : (
                                            <Button 
                                                asChild 
                                                size="lg" 
                                                className="w-full h-14 bg-primary text-black font-black text-base rounded-[10px] shadow-md hover:shadow-xl hover:brightness-105 transition-all border-none relative z-10 px-8"
                                            >
                                                <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`} className="flex items-center justify-center">
                                                    Buy Full Pack: ${pack.priceUSD} <ArrowRight className="ml-2 h-5 w-5"/>
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                    
                                    <div className="mt-1.5 flex items-center justify-center gap-2 opacity-40 grayscale">
                                        <Lock className="w-3 h-3" />
                                        <span className="text-[11px] font-black tracking-widest uppercase">
                                            {region === 'INDIA' ? 'Secure Payment' : 'Secure International Checkout'}
                                        </span>
                                    </div>

                                    <div className="mt-3 flex items-center justify-center gap-2 tracking-tight">
                                        <Check className="w-3.5 h-3.5 text-primary opacity-80" /> 
                                        <span className="text-[13px] text-muted-foreground font-bold uppercase tracking-tight text-center">
                                            Instant Digital Delivery · 100% Alignment Guarantee
                                        </span>
                                    </div>

                                    <p className="mt-6 text-[10px] text-white/20 font-black uppercase tracking-widest">
                                        By purchasing, you agree to our <Link href="/terms" target="_blank" className="underline underline-offset-2 hover:text-white/40">Terms</Link> & <Link href="/refund" target="_blank" className="underline underline-offset-2 hover:text-white/40">Refund Policy</Link>
                                    </p>
                                </div>
                            </div>
                        </CardContent>

                        <div className="bg-white/[0.03] border-t border-white/5 py-6 px-4 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                            {PROOFS.map(item => (
                                <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                                    <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
