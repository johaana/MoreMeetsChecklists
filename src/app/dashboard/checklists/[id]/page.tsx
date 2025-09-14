
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { checklistTemplates } from '@/lib/templates';
import type { Checklist, Task, Status, Priority } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Share2, Edit, ChevronLeft, Save } from 'lucide-react';
import { TaskItem } from '@/components/dashboard/task-item';
import { AITaskSuggester } from '@/components/dashboard/ai-task-suggester';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import type { User } from '@/lib/users';
import { users as initialUsers } from '@/lib/users';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@/components/ui/input';

export default function ChecklistDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [checklist, setChecklist] = useState<Checklist | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const foundChecklist = checklistTemplates.find((c) => c.id === id);
      if (foundChecklist) {
        const checklistCopy = JSON.parse(JSON.stringify(foundChecklist));
        setChecklist(checklistCopy);
        setNewTitle(checklistCopy.name);
      } else {
        console.error(`Checklist with id ${id} not found.`);
      }
    }
  }, [id]);

  const updateTask = useCallback((taskTitle: string, updatedProperties: Partial<Task>) => {
    setChecklist((prev) => {
      if (!prev) return null;
      const newTasks = prev.tasks.map((task) => {
        if (task.task === taskTitle) {
          return { ...task, ...updatedProperties };
        }
        return task;
      });
      return { ...prev, tasks: newTasks };
    });
  }, []);

  const handleTaskStatusChange = (taskTitle: string, status: Status) => {
    updateTask(taskTitle, { status });
  };
  
  const handleAssignUser = (taskTitle: string, user: User | null) => {
    updateTask(taskTitle, { assignedTo: user?.id || null });
  };

  const handleSetDueDate = (taskTitle: string, dueDate: Date | undefined) => {
    updateTask(taskTitle, { dueDate: dueDate ? dueDate.toISOString() : undefined });
  };
  
  const handleSetPriority = (taskTitle: string, priority: Priority) => {
    updateTask(taskTitle, { priority });
  };

  const handleDeleteTask = (taskTitle: string) => {
    setChecklist((prev) => {
      if (!prev) return null;
      const newTasks = prev.tasks.filter((task) => task.task !== taskTitle);
      return { ...prev, tasks: newTasks };
    });
    toast({
        title: "Task Deleted",
        description: `"${taskTitle}" has been removed from your checklist.`,
    });
  };

  const handleAddTask = (taskText: string) => {
    if (!checklist) return;
    const newTask: Task = {
      task: taskText,
      status: 'pending',
      subtasks: [],
      assignedTo: null,
      priority: 'low',
    };
    setChecklist((prev) => {
      if (!prev) return null;
      return { ...prev, tasks: [...prev.tasks, newTask] };
    });
  };
  
  const handleAddUser = (userData: Omit<User, 'id' | 'avatar'>) => {
    const newUser: User = {
        ...userData,
        id: uuidv4(),
        avatar: `https://picsum.photos/seed/${Math.random()}/100/100`,
    };
    setUsers(prev => [...prev, newUser]);
    return newUser;
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

  const handleTitleSave = () => {
    if (newTitle.trim() === '') {
        toast({ variant: 'destructive', title: 'Title cannot be empty.' });
        return;
    }
    setChecklist(prev => prev ? { ...prev, name: newTitle } : null);
    setIsEditingTitle(false);
    toast({ title: "Checklist renamed", description: `Your checklist is now named "${newTitle}".` });
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
            {isEditingTitle ? (
              <div className='flex items-center gap-2'>
                <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="text-2xl md:text-3xl font-bold font-headline h-auto p-0 border-0 shadow-none focus-visible:ring-0"/>
                <Button size="icon" onClick={handleTitleSave}><Save className="h-4 w-4"/></Button>
              </div>
            ) : (
                <h1 className="text-2xl md:text-3xl font-bold font-headline">{checklist.name}</h1>
            )}
            <p className="text-muted-foreground">{checklist.category} / {checklist.subcategory}</p>
          </div>
          <div className="flex items-center gap-2">
            <AITaskSuggester checklist={checklist} onAddTask={handleAddTask} />
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIsEditingTitle(prev => !prev)}>
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
            users={users}
            onStatusChange={handleTaskStatusChange}
            onAssignUser={handleAssignUser}
            onSetDueDate={handleSetDueDate}
            onSetPriority={handleSetPriority}
            onDeleteTask={handleDeleteTask}
            onAddUser={handleAddUser}
            />
        ))}
      </div>
    </div>
  );
}
