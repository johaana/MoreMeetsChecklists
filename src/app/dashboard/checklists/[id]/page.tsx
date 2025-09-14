
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { checklistTemplates } from '@/lib/templates';
import type { Checklist, Task, Status } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2, Edit, ChevronLeft } from 'lucide-react';
import { TaskItem } from '@/components/dashboard/task-item';
import { AITaskSuggester } from '@/components/dashboard/ai-task-suggester';
import { Progress } from '@/components/ui/progress';

export default function ChecklistDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [checklist, setChecklist] = useState<Checklist | null>(null);

  useEffect(() => {
    if (id) {
      const foundChecklist = checklistTemplates.find((c) => c.id === id);
      if (foundChecklist) {
        setChecklist(JSON.parse(JSON.stringify(foundChecklist)));
      } else {
        console.error(`Checklist with id ${id} not found.`);
      }
    }
  }, [id]);

  const handleTaskStatusChange = (taskTitle: string, status: Status) => {
    setChecklist((prev) => {
      if (!prev) return null;
      const newTasks = prev.tasks.map((task) => {
        if (task.task === taskTitle) {
          return { ...task, status: status };
        }
        return task;
      });
      return { ...prev, tasks: newTasks };
    });
  };

  const handleAddTask = (taskText: string) => {
    if (!checklist) return;
    const newTask: Task = {
      task: taskText,
      status: 'pending',
      subtasks: [],
    };
    setChecklist((prev) => {
      if (!prev) return null;
      return { ...prev, tasks: [...prev.tasks, newTask] };
    });
  };

  if (!checklist) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading checklist...</p>
      </div>
    );
  }
  
  const totalTasks = checklist.tasks.length;
  const completedTasks = checklist.tasks.filter(task => task.status === 'completed').length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard"><ChevronLeft className="mr-2 h-4 w-4" /> Back to Checklists</Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className='flex-1'>
            <h1 className="text-2xl md:text-3xl font-bold font-headline">{checklist.name}</h1>
            <p className="text-muted-foreground">{checklist.category} / {checklist.subcategory}</p>
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
            <span>{completedTasks} / {totalTasks} tasks</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="space-y-3">
        {checklist.tasks.map((task, index) => (
          <TaskItem 
            key={`${task.task}-${index}`} 
            task={task}
            onStatusChange={handleTaskStatusChange}
            />
        ))}
      </div>
    </div>
  );
}
