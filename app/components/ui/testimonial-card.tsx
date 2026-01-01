
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  stars: number;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, stars }) => {
  return (
    <Card className="flex h-full flex-col p-6">
      <CardContent className="flex-1 p-0">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < stars ? 'text-accent fill-accent' : 'text-gray-300 dark:text-gray-600'
              )}
            />
          ))}
        </div>
        <p className="font-quote text-base text-muted-foreground">"{quote}"</p>
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <div>
          <p className="font-semibold font-headline">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
