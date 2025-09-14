'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { checklistTemplates } from '@/lib/templates';
import type { Checklist, Subtask, Task } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2, Edit, ChevronLeft } from 'lucide-react';
import { TaskItem } from '@/components/dashboard/task-item';
import { AITaskSuggester } from '@/components/dashboard/ai-task-suggester';
import { Progress } from '@/components/ui/progress';

export default function ChecklistDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [checklist, setChecklist] = useState<Checklist | null>(null);

  useEffect(() => {
    const foundChecklist = checklistTemplates.find((c) => c.id === id);
    if (foundChecklist) {
      setChecklist(JSON.parse(JSON.stringify(foundChecklist)));
    } else {
      console.error(`Checklist with id ${id} not found.`);
    }
  }, [id]);

  const handleTaskToggle = (taskId: string) => {
    setChecklist((prev) => {
      if (!prev) return null;
      const newTasks = prev.tasks.map((task) => {
        if (task.id === taskId) {
          const newCompleted = !task.completed;
          const newSubtasks = task.subtasks?.map(sub => ({...sub, completed: newCompleted}));
          return { ...task, completed: newCompleted, subtasks: newSubtasks };
        }
        return task;
      });
      return { ...prev, tasks: newTasks };
    });
  };

  const handleSubtaskToggle = (taskId: string, subtaskId: string) => {
    setChecklist(prev => {
        if (!prev) return null;
        const newTasks = prev.tasks.map(task => {
            if (task.id === taskId && task.subtasks) {
                const newSubtasks = task.subtasks.map(sub => 
                    sub.id === subtaskId ? { ...sub, completed: !sub.completed } : sub
                );
                const allSubtasksCompleted = newSubtasks.every(sub => sub.completed);
                return { ...task, subtasks: newSubtasks, completed: allSubtasksCompleted };
            }
            return task;
        });
        return { ...prev, tasks: newTasks };
    });
  };

  const handleAddTask = (taskText: string) => {
    if (!checklist) return;
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

  if (!checklist) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading checklist...</p>
      </div>
    );
  }
  
  const totalTasks = checklist.tasks.reduce((acc, task) => acc + (task.subtasks?.length || 1), 0);
  const completedTasks = checklist.tasks.reduce((acc, task) => {
    if (task.subtasks && task.subtasks.length > 0) {
      return acc + task.subtasks.filter(st => st.completed).length;
    }
    return acc + (task.completed ? 1 : 0);
  }, 0);
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

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
            <span>{completedTasks} / {totalTasks} tasks</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="space-y-3">
        {checklist.tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task}
            onTaskToggle={handleTaskToggle}
            onSubtaskToggle={handleSubtaskToggle}
            />
        ))}
      </div>
    </div>
  );
}
