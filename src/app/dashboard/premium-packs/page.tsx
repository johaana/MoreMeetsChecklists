
'use client';

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { premiumPacks } from "@/lib/premium-packs";
import type { PremiumPack } from "@/lib/premium-packs";
import { Check, CreditCard, PartyPopper, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PremiumPacksContext } from "@/contexts/premium-packs-context";


export default function PremiumPacksPage() {
    const [selectedPack, setSelectedPack] = useState<PremiumPack | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();
    const { addPurchasedPack } = useContext(PremiumPacksContext);

    const handlePurchaseClick = (pack: PremiumPack) => {
        setSelectedPack(pack);
        setIsDialogOpen(true);
    };

    const handleConfirmPurchase = () => {
        if (!selectedPack) return;
        
        addPurchasedPack(selectedPack.title);

        setIsDialogOpen(false);
        // In a real application, you would handle the Stripe checkout flow here.
        // For this demo, we'll just show a success toast.
        toast({
          title: "Purchase Successful!",
          description: `You've unlocked the ${selectedPack.title}.`,
          action: (
            <div className="p-2 bg-primary/20 rounded-full">
                <PartyPopper className="h-5 w-5 text-primary" />
            </div>
          )
        });
        setSelectedPack(null);
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Premium Checklist Packs</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Upgrade your planning with our expertly crafted, comprehensive checklist packs. One-time purchase, lifetime access.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {premiumPacks.map((pack) => (
                    <Card key={pack.title} className={`flex flex-col border-2 ${pack.color}`}>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-background rounded-full mb-2">
                                {pack.icon}
                            </div>
                            <CardTitle className="text-xl">{pack.title}</CardTitle>
                             <p className="text-4xl font-bold">
                                ₹{pack.price_inr} / ${pack.price_usd}
                             </p>
                             <CardDescription>One-time purchase</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <p className="text-center mb-6 text-muted-foreground">{pack.description}</p>
                            <ul className="space-y-3 text-sm flex-1">
                                {pack.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                         <div className="p-6 pt-0">
                            <h4 className="text-sm font-semibold mb-2">Related Free Templates:</h4>
                            <div className="flex gap-2 flex-wrap">
                            {pack.relatedFreeTemplates.map(templateName => (
                                <Button asChild variant="outline" size="sm" key={templateName}>
                                    <Link href="/dashboard">{templateName}</Link>
                                </Button>
                            ))}
                            </div>
                        </div>
                        <CardFooter>
                            <Button className="w-full" onClick={() => handlePurchaseClick(pack)}>
                                <CreditCard className="mr-2 h-4 w-4" />
                                Purchase Pack
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Your Purchase</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are about to purchase the <strong>{selectedPack?.title}</strong> for <strong>₹{selectedPack?.price_inr} / ${selectedPack?.price_usd}</strong>.
                        <br/><br/>
                        This is a one-time purchase for lifetime access. In a real application, this would redirect you to a secure payment gateway. For this demo, clicking "Confirm" will simulate a successful purchase.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setSelectedPack(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirmPurchase}>
                        Confirm Purchase
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}