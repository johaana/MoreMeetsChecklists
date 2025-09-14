'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { checklistTemplates } from '@/lib/templates';
import type { Checklist, Task } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2, Edit, ChevronLeft } from 'lucide-react';
import { TaskItem } from '@/components/dashboard/task-item';
import { AITaskSuggester } from '@/components/dashboard/ai-task-suggester';
import { Progress } from '@/components/ui/progress';

export default function ChecklistDetailPage({ params }: { params: { id: string } }) {
  const [checklist, setChecklist] = useState<Checklist | null>(null);

  useEffect(() => {
    const foundChecklist = checklistTemplates.find((c) => c.id === params.id);
    if (foundChecklist) {
      // Deep copy to prevent modifying the original template
      setChecklist(JSON.parse(JSON.stringify(foundChecklist)));
    }
  }, [params.id]);

  if (!checklist) {
    // This will be caught by useEffect on the client,
    // but in a real app with server-side fetching, this would handle not found cases.
    // For now, let's show a loading state until the checklist is found.
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading checklist...</p>
      </div>
    );
  }

  const handleAddTask = (taskText: string) => {
    const newTask: Task = {
      id: `${checklist.tasks.length + 1}-${Date.now()}`,
      text: taskText,
      completed: false,
    };
    setChecklist((prev) => {
      if (!prev) return null;
      return { ...prev, tasks: [...prev.tasks, newTask] };
    });
  };

  const completedTasks = checklist.tasks.filter(t => t.completed).length;
  const progress = (completedTasks / checklist.tasks.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Checklists</Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className='flex-1'>
            <h1 className="text-2xl md:text-3xl font-bold font-headline">{checklist.title}</h1>
            <p className="text-muted-foreground">{checklist.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <AITaskSuggester checklist={checklist} onAddTask={handleAddTask} />
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit Checklist</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{completedTasks} / {checklist.tasks.length} tasks</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="space-y-3">
        {checklist.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
