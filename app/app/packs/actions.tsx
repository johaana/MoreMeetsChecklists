
'use client';

import * as React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Download, Loader2, Banknote, Landmark, Globe, Award, Star, HardHat, HeartPulse, Trophy, Utensils, Film, FerrisWheel, BriefcaseBusiness, Package, Truck, Wrench, FileCheck, CircleDollarSign, Recycle, Library, MonitorPlay, Clapperboard, AnchorIcon, Ship, Pill, Store, Rabbit, Gamepad, Guitar, GalleryVertical, Computer, CakeSlice, Anchor, Sailboat, Aperture, Lamp, Ticket, Popcorn, Syringe, Bot, BrainCircuit, Link as LinkIcon, Wifi, ShoppingBasket, Sprout, School, GraduationCap, Factory, Gem, Shirt, Tv, Waves, ShoppingCart, Dumbbell, PersonStanding, PawPrint, Wind, Building2, KeyRound, UserCheck, HandPlatter, ScanFace, Code, UserRound as DramaIcon, Map, HelpingHand, ClipboardList, CalendarDays, Route, Cog, Drama, Watch, Barcode, UserCog2, Key, Router, Thermometer, DoorClosed, Ambulance, FileWarning, Microscope, Stethoscope, Megaphone, SprayCan, Drill, Car, BookOpen, Bus, Siren, Bug, Zap, Shield, Lock, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast.tsx';
import { addContact } from '@/app/packs/actions';
import { RazorpayButton } from '@/components/ui/razorpay-button';


// --- FAST FIX PLACEHOLDERS ---
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
  />
);
const Tabs = ({ children, defaultValue, onValueChange, className }: { children: React.ReactNode, defaultValue: string, onValueChange: (value: string) => void, className?:string }) => {
    // Basic Tabs implementation for FAST mode
    const [activeTab, setActiveTab] = React.useState(defaultValue);

    const handleTabClick = (value: string) => {
        setActiveTab(value);
        onValueChange(value);
    };

    return (
        <div className={className}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === TabsList) {
                    return React.cloneElement(child, {
                        // @ts-ignore
                        activeTab,
                        onTabClick: handleTabClick
                    });
                }
                return child;
            })}
        </div>
    );
};

const TabsList = ({ children, className, activeTab, onTabClick }: { children: React.ReactNode, className?:string, activeTab?: string, onTabClick?: (value: string) => void }) => (
  <div className={`flex gap-1 rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === TabsTrigger) {
              return React.cloneElement(child, {
                  // @ts-ignore
                  isActive: child.props.value === activeTab,
                  onClick: () => onTabClick?.(child.props.value)
              });
          }
          return child;
      })}
  </div>
);

const TabsTrigger = ({ children, value, isActive, onClick, className }: { children: React.ReactNode, value: string, isActive?: boolean, onClick?: () => void, className?: string }) => (
  <button 
    value={value} 
    onClick={onClick}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-background text-foreground shadow-sm' : ''} ${className}`}
  >
    {children}
  </button>
);

const ValueProposition = ({ ourPrice, competitorPrice, valueStatement }: { ourPrice: string; competitorPrice: string; valueStatement: string }) => (
  <div className="rounded-lg bg-secondary/50 p-4 text-center border-2 border-dashed border-primary/20">
    <h4 className="text-sm font-semibold mb-2">THE MOREMEETS ADVANTAGE</h4>
    <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col items-center p-2 rounded-md bg-background/50">
            <p className="text-xs text-muted-foreground">Their Price</p>
            <p className="text-lg font-bold text-destructive line-through">{competitorPrice}</p>
        </div>
        <div className="flex flex-col items-center p-2 rounded-md bg-green-100 dark:bg-green-900/50">
             <p className="text-xs text-green-800 dark:text-green-200">Our Price</p>
            <p className="text-lg font-bold text-green-700 dark:text-green-300">{ourPrice}</p>
        </div>
    </div>
     <p className="text-xs text-muted-foreground mt-2">{valueStatement}</p>
  </div>
);

const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement> & { id: string, onCheckedChange: (checked: boolean) => void }) => {
  const { onCheckedChange, ...rest } = props;
  return (
    <input 
      type="checkbox" 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckedChange(e.target.checked)} 
      {...rest} 
      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" 
    />
  );
};

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label {...props} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" />
);

// ===== END FAST UI PLACEHOLDERS =====


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
                description: "Your free checklist pack has been sent to your email.",
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
                className="w-full"
            />
            <Button size="lg" type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                Get Your Free Pack
            </Button>
        </form>
    )
}

const ComplianceIcon = ({ standard }: { standard: string }) => {
    const s = standard.toUpperCase();
    if (s.includes('NABH')) return <Star className="w-4 h-4 text-green-600" />;
    if (s.includes('JCI')) return <Globe className="w-4 h-4 text-blue-600" />;
    if (s.includes('WHO')) return <HeartPulse className="w-4 h-4 text-cyan-600" />;
    if (s.includes('ISO 9001')) return <Award className="w-4 h-4 text-yellow-600" />;
    if (s.includes('ISO 45001')) return <HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('ISO 27001')) return <ShieldCheck className="w-4 h-4 text-purple-600" />;
    if (s.includes('ISO 22000')) return <Utensils className="w-4 h-4 text-blue-500" />;
    if (s.includes('HACCP')) return <ShieldCheck className="w-4 h-4 text-red-600" />;
    if (s.includes('OSHA')) return <HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('PGA')) return <Film className="w-4 h-4 text-yellow-500" />;
    if (s.includes('FIA')) return <Award className="w-4 h-4 text-blue-500" />;
    if (s.includes('IAAPA')) return <FerrisWheel className="w-4 h-4 text-purple-500" />;
    if (s.includes('NIST')) return <BriefcaseBusiness className="w-4 h-4 text-gray-600" />;
    return <Landmark className="w-4 h-4 text-gray-500" />;
};

export default function PricingClient({ pack }: { pack: PremiumPack }) {
    
    const hasINR = !!(pack.paymentId && pack.paymentId.length > 0 && pack.priceINR >= 0);
    const hasUSD = !!(pack.lemonSqueezyUrl && pack.lemonSqueezyUrl.length > 0 && pack.priceUSD !== undefined && pack.priceUSD >= 0);
    
    const [currency, setCurrency] = React.useState(hasUSD ? 'USD' : 'INR');
    const [agreedToTerms, setAgreedToTerms] = React.useState(false);
    
    const totalChecklists = pack.checklists.length;
    const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);
    const features = totalChecklists > 0 ? [
        { text: `<strong>${totalChecklists} Expert-Built Checklists</strong> (${totalTasks}+ total tasks)`},
        { text: "<strong>Audit-Ready & Globally Compliant</strong> framework."},
        { text: "<strong>Instant Download</strong> in fully editable Excel format."},
        { text: "<strong>Lifetime Access</strong> to all future updates for this pack."}
    ] : [
        { text: "This pack is currently under development. Purchase now at a special price and receive all updates as they are released."}
    ];

    if (pack.priceINR === 0 && (!pack.priceUSD || pack.priceUSD === 0)) {
        return (
             <section className="w-full py-12 md:py-16" id="pricing">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                        <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Get Your Free Toolkit</h2>
                        <p className="text-foreground/80 text-base md:text-lg">As part of our commitment to social impact, this entire pack is available as a free, instant download.</p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="flex flex-col max-w-md w-full">
                            <CardHeader className="text-center">
                                <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                                <CardTitle className="text-2xl font-headline">Instant Download</CardTitle>
                                <CardDescription>Get the complete, fully-editable Excel file for the {pack.title}.</CardDescription>
                                <p className="text-5xl font-extrabold pt-4">Free</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3 text-muted-foreground text-sm">
                                    {totalChecklists > 0 && (
                                    <>
                                        <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Complete pack with all {totalChecklists} checklists.</span></li>
                                        <li className="flex items-start"><Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/><span>Fully editable Excel format.</span></li>
                                    </>
                                    )}
                                </ul>
                            </CardContent>
                            <CardFooter className="mt-auto flex flex-col justify-center w-full gap-2 p-6">
                                <FreeDownloadForm pack={pack} />
                                <p className="text-xs text-muted-foreground text-center">By downloading, you agree to receive occasional updates from MoreMeets.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full py-12 md:py-16" id="pricing">
            <div className="container px-2 md:px-6">
                <div className="flex justify-center">
                    <Card className="flex flex-col max-w-2xl w-full border-2 border-accent shadow-2xl overflow-hidden rounded-2xl">
                        <CardHeader className="p-6 bg-secondary/30 text-center">
                             <div className="flex justify-center items-center gap-4">
                                <Banknote className="w-10 h-10 text-accent" />
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary text-left">
                                        Global Compliance Pack
                                    </h3>
                                    {pack.badgeText && (
                                        <Badge variant="accent" className="mt-1">{pack.badgeText}</Badge>
                                    )}
                                </div>
                            </div>
                             <p className="text-muted-foreground pt-2 text-sm md:text-base">{pack.description}</p>
                        </CardHeader>
                        <CardContent className="p-6 flex-1 flex flex-col gap-6">
                             {hasINR && hasUSD && (
                                <div className="flex justify-center">
                                    <Tabs defaultValue={currency} onValueChange={setCurrency} className="w-full max-w-xs">
                                      <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="USD">Pay in USD ($)</TabsTrigger>
                                        <TabsTrigger value="INR">Pay in INR (₹)</TabsTrigger>
                                      </TabsList>
                                    </Tabs>
                                </div>
                             )}

                            <div className="flex items-baseline justify-center gap-2">
                                <p className="text-5xl font-extrabold">
                                    {currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`}
                                </p>
                                <p className="text-sm text-muted-foreground">/ One-time payment</p>
                            </div>
                            {currency === 'USD' && <p className="text-xs text-center text-muted-foreground -mt-4">(inclusive of all taxes)</p>}
                           
                            <div className='space-y-4'>
                                <h4 className="font-semibold text-center text-primary/90">WHAT'S INCLUDED:</h4>
                                <ul className="space-y-3 text-sm text-foreground/90">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-green-500"/>
                                            <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             {pack.globalStandards && (
                                <div className="text-center">
                                    <h4 className="font-semibold text-center text-sm mb-3 text-primary/90">ALIGNED WITH:</h4>
                                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-2">
                                        {pack.globalStandards.standards.map(standard => (
                                            <div key={standard.name} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                                <ComplianceIcon standard={standard.name} />
                                                <span>{standard.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                             <ValueProposition 
                                ourPrice={currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD || 'N/A'}`}
                                competitorPrice={currency === 'INR' ? "₹50,000+" : `$${pack.competitorPriceUSD || 599}+`}
                                valueStatement="For a comparable enterprise compliance toolkit."
                            />

                        </CardContent>
                         <CardFooter className="bg-secondary/30 mt-auto p-6 flex flex-col gap-4 items-center">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)} />
                                <Label htmlFor="terms" className="text-xs text-muted-foreground">
                                    I have read and agree to the{" "}
                                    <Link href="/terms" target="_blank" className="underline hover:text-primary">
                                    Terms of Service
                                    </Link>{" "}
                                    &{" "}
                                    <Link href="/refund" target="_blank" className="underline hover:text-primary">
                                    Refund Policy
                                    </Link>.
                                </Label>
                            </div>
                           <div className="w-full flex justify-center">
                                {hasINR && pack.paymentId && (
                                    <div className={currency === 'INR' ? '' : 'hidden'}>
                                        <div className={!agreedToTerms ? 'pointer-events-none opacity-50' : ''}>
                                            <RazorpayButton paymentId={pack.paymentId} />
                                        </div>
                                    </div>
                                )}
                                {hasUSD && pack.lemonSqueezyUrl && (
                                     <div className={currency === 'USD' ? '' : 'hidden'}>
                                        <div className={!agreedToTerms ? 'pointer-events-none opacity-50' : ''}>
                                            <Button asChild size="lg" className="w-full max-w-xs" disabled={!agreedToTerms}>
                                                <Link href={`${pack.lemonSqueezyUrl}?checkout[custom][pack_id]=${pack.id}`}>
                                                    Buy Now
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                           </div>
                           <p className="text-xs text-muted-foreground">Secure payment via {currency === 'INR' ? 'Razorpay' : 'Lemon Squeezy'}</p>
                           <Button asChild variant="link" size="sm" className="w-full text-xs mt-2">
                                <Link href="https://calendly.com/aditi-imran-khan/30min" target="_blank">
                                    Need this pack tailored to your brand's specific needs? Schedule a call.
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
    

    
