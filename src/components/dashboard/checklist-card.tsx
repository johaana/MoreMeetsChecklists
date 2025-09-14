
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checklist } from '@/lib/types';
import { PartyPopper, Hotel, Users, Leaf, ArrowRight, Lock, BookOpen, HeartPulse } from 'lucide-react';
import { useMemo, useContext } from 'react';
import { PremiumPacksContext } from '@/contexts/premium-packs-context';

const categoryIcons: Record<Checklist['category'], React.ReactNode> = {
  "Events": <PartyPopper className="w-6 h-6 text-sky-500" />,
  "Hospitality": <Hotel className="w-6 h-6 text-blue-800" />,
  "Restaurants": <HeartPulse className="w-6 h-6 text-rose-600" />,
  "Training": <BookOpen className="w-6 h-6 text-purple-600" />,
  "Sustainability": <Leaf className="w-6 h-6 text-green-600" />,
};

export function ChecklistCard({ checklist }: { checklist: Checklist }) {
  const { purchasedPacks } = useContext(PremiumPacksContext);

  const isUnlocked = useMemo(() => {
    if (!checklist.premium) {
        return true; // Free checklists are always unlocked
    }
    // Premium checklists are unlocked if their pack title is in the purchasedPacks array
    return purchasedPacks.includes(checklist.premiumPack);
  }, [checklist, purchasedPacks]);

  const completionPercentage = useMemo(() => {
    if (checklist.tasks.length === 0) return 0;
    const completedItems = checklist.tasks.filter((item) => item.status === 'completed').length;
    return (completedItems / checklist.tasks.length) * 100;
  }, [checklist.tasks]);

  const isPremiumAndLocked = checklist.premium && !isUnlocked;
  
  const linkHref = isPremiumAndLocked ? '/dashboard/premium-packs' : `/dashboard/checklists/${checklist.id}`;
  const buttonText = isPremiumAndLocked ? 'Unlock Premium' : 'View Checklist';
  const buttonVariant = isPremiumAndLocked ? "outline" : "default";

  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg flex-1">{checklist.name}</CardTitle>
          <div className='flex items-center gap-2'>
            {isPremiumAndLocked && <Lock className="w-4 h-4 text-accent" />}
            {categoryIcons[checklist.category]}
          </div>
        </div>
        <CardDescription>{checklist.subcategory} - {checklist.tasks.length} tasks</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{Math.round(completionPercentage)}%</span>
          </div>
          <Progress value={completionPercentage} aria-label={`${Math.round(completionPercentage)}% completed`} />
        </div>
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
