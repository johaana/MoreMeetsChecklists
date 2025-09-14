
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Checklist, ChecklistCategory } from '@/lib/types';
import { PartyPopper, Hotel, BookOpen, Leaf, ArrowRight, Lock, ShieldCheck, Factory, Plane } from 'lucide-react';
import { useMemo, useContext } from 'react';
import { PremiumPacksContext } from '@/contexts/premium-packs-context';

const categoryIcons: Record<ChecklistCategory, React.ReactNode> = {
  "Events": <PartyPopper className="w-6 h-6 text-sky-500" />,
  "Hospitality": <Hotel className="w-6 h-6 text-blue-800" />,
  "Training": <BookOpen className="w-6 h-6 text-purple-600" />,
  "Sustainability": <Leaf className="w-6 h-6 text-green-600" />,
  "Airport": <Plane className="w-6 h-6 text-gray-500" />,
  "Manufacturing": <Factory className="w-6 h-6 text-indigo-500" />,
  "Security": <ShieldCheck className="w-6 h-6 text-red-500" />,
  "Compliance": <ShieldCheck className="w-6 h-6 text-orange-500" />,
};


export function ChecklistCard({ checklist }: { checklist: Checklist }) {
  const { purchasedPacks } = useContext(PremiumPacksContext);

  const isUnlocked = useMemo(() => {
    if (checklist.visibility === 'free') {
      return true;
    }
    // For paid checklists, check if the required pack is in the purchased list
    if (checklist.premiumPack) {
      return purchasedPacks.includes(checklist.premiumPack);
    }
    // Default to locked if it's a paid checklist without a specific pack
    return false;
  }, [checklist, purchasedPacks]);

  const isPremiumAndLocked = checklist.visibility === 'paid' && !isUnlocked;
  
  const linkHref = isPremiumAndLocked ? '/dashboard/premium-packs' : `/dashboard/checklists/${checklist.id}`;
  const buttonText = isPremiumAndLocked ? 'Unlock Premium' : 'View Checklist';
  const buttonVariant = isPremiumAndLocked ? "outline" : "default";

  return (
    <Card className='flex flex-col h-full'>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg flex-1">{checklist.name}</CardTitle>
          <div className='flex items-center gap-2'>
            {isPremiumAndLocked && <Lock className="w-4 h-4 text-accent" />}
            {categoryIcons[checklist.category] || <BookOpen className="w-6 h-6 text-gray-500" />}
          </div>
        </div>
        <CardDescription>{checklist.category} - {checklist.items.length} tasks</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
         <p className="text-sm text-muted-foreground line-clamp-3">{checklist.importance}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant={buttonVariant} className="w-full">
          <Link href={linkHref}>
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
