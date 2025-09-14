
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { checklistTemplates } from '@/lib/templates';
import type { Checklist, Task, Status } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2, ChevronLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function ChecklistDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [checklist, setChecklist] = useState<Checklist | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundChecklist = checklistTemplates.find((c) => c.id === id);
      if (foundChecklist) {
        setChecklist(foundChecklist);
        // Initialize tasks with status
        setTasks(foundChecklist.items.map(item => ({ text: item, status: 'pending' })));
      } else {
        console.error(`Checklist with id ${id} not found.`);
      }
    }
  }, [id]);

  const handleTaskStatusChange = (taskText: string) => {
    setTasks(currentTasks => 
      currentTasks.map(task => {
        if (task.text === taskText) {
          return { ...task, status: task.status === 'completed' ? 'pending' : 'completed' };
        }
        return task;
      })
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Checklist: ${checklist?.name}`,
          text: `Check out the "${checklist?.name}" checklist on MoreMeets!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: 'Link Copied!',
          description: 'The checklist link has been copied to your clipboard.',
        });
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        toast({
          variant: 'destructive',
          title: 'Failed to Copy',
          description: 'Could not copy the link to your clipboard.',
        });
      }
    }
  };

  if (!checklist) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading checklist...</p>
      </div>
    );
  }
  
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard</Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className='flex-1'>
            <h1 className="text-2xl md:text-3xl font-bold font-headline">{checklist.name}</h1>
            <p className="text-muted-foreground">{checklist.category}</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-prose">{checklist.importance}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{completedTasks} / {totalTasks} tasks</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="space-y-3 border rounded-lg p-4">
        {tasks.map((task, index) => (
          <div key={`${task.text}-${index}`} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50">
            <Checkbox 
              id={`task-${index}`} 
              checked={task.status === 'completed'}
              onCheckedChange={() => handleTaskStatusChange(task.text)}
            />
            <Label 
              htmlFor={`task-${index}`}
              className={`flex-1 text-sm font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}
            >
              {task.text}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
