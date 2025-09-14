
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checklist } from '@/lib/types';
import { PartyPopper, Hotel, Users, Leaf, ListChecks, Check } from 'lucide-react';
import { useMemo } from 'react';

const categoryIcons: Record<Checklist['category'], React.ReactNode> = {
  Events: <PartyPopper className="w-5 h-5 text-sky-500" />,
  Hospitality: <Hotel className="w-5 h-5 text-blue-800" />,
  Training: <Users className="w-5 h-5 text-purple-600" />,
  Sustainability: <Leaf className="w-6 h-6 text-green-600" />,
};

export function HomepageChecklistCard({ checklist }: { checklist: Checklist }) {

  const totalTasks = useMemo(() => {
    return checklist.items.reduce((acc, item) => acc + 1 + (item.subtasks?.length || 0), 0);
  }, [checklist.items]);


  return (
    <Link href="/signup" className="block h-full">
      <Card className='hover:shadow-md hover:-translate-y-1 transition-transform h-full flex flex-col'>
          <CardHeader>
              <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-base font-semibold">{checklist.title}</CardTitle>
                  {categoryIcons[checklist.category]}
              </div>
              <CardDescription className='flex items-center gap-2 text-xs'>
                  <ListChecks className='h-3 w-3' />
                  <span>{totalTasks} items</span>
              </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
              <ul className='space-y-1.5'>
                  {checklist.items.slice(0, 3).map(item => (
                      <li key={item.id} className='flex items-start gap-2'>
                          <Check className='h-4 w-4 mt-0.5 text-muted-foreground shrink-0' />
                          <span className='text-sm text-muted-foreground truncate'>{item.text}</span>
                      </li>
                  ))}
                  {checklist.items.length > 3 && (
                       <li className='flex items-start gap-2'>
                          <Check className='h-4 w-4 mt-0.5 text-muted-foreground shrink-0' />
                          <span className='text-sm text-muted-foreground'>and {checklist.items.length - 3} more...</span>
                      </li>
                  )}
              </ul>
          </CardContent>
      </Card>
    </Link>
  );
}
