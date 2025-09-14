'use client';

import { useState } from "react";
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
import { Check } from "lucide-react";


export default function PremiumPacksPage() {
    const [selectedPack, setSelectedPack] = useState<PremiumPack | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();

    const handlePurchaseClick = (pack: PremiumPack) => {
        setSelectedPack(pack);
        setIsDialogOpen(true);
    };

    const handleConfirmPurchase = () => {
        setIsDialogOpen(false);
        toast({
            title: "Purchase Successful!",
            description: `Thank you for purchasing the ${selectedPack?.title}. The checklists are now available in your dashboard.`,
        });
        setSelectedPack(null);
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Premium Checklist Packs</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Upgrade your planning with our expertly crafted, comprehensive checklist packs designed for professionals.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {premiumPacks.map((pack) => (
                    <Card key={pack.title} className={`flex flex-col border-2 ${pack.color}`}>
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-background rounded-full mb-2">
                                {pack.icon}
                            </div>
                            <CardTitle className="text-xl">{pack.title}</CardTitle>
                             <p className="text-4xl font-bold">${pack.price}</p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <CardDescription className="text-center mb-6">{pack.description}</CardDescription>
                            <ul className="space-y-3 text-sm flex-1">
                                {pack.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="w-4 h-4 mr-2 mt-1 shrink-0 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={() => handlePurchaseClick(pack)}>Purchase Pack</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Your Purchase</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are about to purchase the <strong>{selectedPack?.title}</strong> for <strong>${selectedPack?.price}</strong>.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirmPurchase}>
                        Confirm & Pay
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
