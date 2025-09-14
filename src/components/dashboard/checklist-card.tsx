
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checklist } from '@/lib/types';
import { PartyPopper, Hotel, Users, Leaf, ArrowRight, Lock } from 'lucide-react';
import { useMemo } from 'react';

const categoryIcons: Record<Checklist['category'], React.ReactNode> = {
  "Events": <PartyPopper className="w-6 h-6 text-sky-500" />,
  "Hospitality Ops": <Hotel className="w-6 h-6 text-blue-800" />,
  "Training": <Users className="w-6 h-6 text-purple-600" />,
  "Sustainability": <Leaf className="w-6 h-6 text-green-600" />,
};

export function ChecklistCard({ checklist }: { checklist: Checklist }) {
  const completionPercentage = useMemo(() => {
    if (checklist.items.length === 0) return 0;
    const completedItems = checklist.items.filter((item) => item.status === 'completed').length;
    return (completedItems / checklist.items.length) * 100;
  }, [checklist.items]);

  const isPremium = checklist.pricing?.premium;

  return (
    <Card className='flex flex-col'>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg flex-1">{checklist.name}</CardTitle>
          <div className='flex items-center gap-2'>
            {isPremium && <Lock className="w-4 h-4 text-amber-500" />}
            {categoryIcons[checklist.category]}
          </div>
        </div>
        <CardDescription>{checklist.items.length} tasks</CardDescription>
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
        <Button asChild variant="outline" className="w-full" disabled={isPremium}>
          <Link href={`/dashboard/checklists/${checklist.id}`}>
            {isPremium ? 'Unlock Premium' : 'View Checklist'} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
