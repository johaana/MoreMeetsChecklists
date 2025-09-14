
'use client';

import { Item } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { MoreVertical, ChevronDown, Camera } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TaskItemProps {
    task: Item;
    onTaskToggle: (taskId: string) => void;
    onSubtaskToggle: (taskId: string, subtaskId: string) => void;
}

export function TaskItem({ task, onTaskToggle, onSubtaskToggle }: TaskItemProps) {
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;

  return (
    <Collapsible defaultOpen className="bg-card rounded-lg border">
        <div className="flex items-center gap-4 p-3 hover:bg-muted/50 transition-colors rounded-t-lg">
            <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => onTaskToggle(task.id)}
                aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            <Label
                htmlFor={`task-${task.id}`}
                className={cn('flex-1 text-sm cursor-pointer', task.completed && 'line-through text-muted-foreground')}
            >
                {task.text}
            </Label>
             
            {hasSubtasks && (
                <CollapsibleTrigger asChild>
                     <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
                        <span className="sr-only">Toggle subtasks</span>
                    </Button>
                </CollapsibleTrigger>
            )}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Task options</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuItem>Assign User</DropdownMenuItem>
                <DropdownMenuItem>Set Due Date</DropdownMenuItem>
                <DropdownMenuItem>Set Priority</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete Task</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

       {hasSubtasks && (
         <CollapsibleContent>
            <div className="border-t py-2 px-4 pl-12 space-y-2">
                {task.subtasks?.map(subtask => (
                    <div key={subtask.id} className="flex items-center gap-3">
                         <Checkbox
                            id={`subtask-${subtask.id}`}
                            checked={subtask.completed}
                            onCheckedChange={() => onSubtaskToggle(task.id, subtask.id)}
                            aria-label={`Mark subtask "${subtask.text}" as ${subtask.completed ? 'incomplete' : 'complete'}`}
                        />
                        <Label
                             htmlFor={`subtask-${subtask.id}`}
                            className={cn('text-sm flex-1 cursor-pointer', subtask.completed && 'line-through text-muted-foreground')}
                        >
                            {subtask.text}
                        </Label>
                    </div>
                ))}
            </div>
         </CollapsibleContent>
       )}
    </Collapsible>
  );
}
