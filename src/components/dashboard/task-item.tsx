'use client';

import { useState } from 'react';
import { Task } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Camera, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function TaskItem({ task }: { task: Task }) {
  const [isChecked, setIsChecked] = useState(task.completed);

  return (
    <div className="flex items-center gap-4 p-3 bg-card rounded-lg border hover:bg-muted/50 transition-colors">
      <Checkbox
        id={`task-${task.id}`}
        checked={isChecked}
        onCheckedChange={() => setIsChecked(!isChecked)}
        aria-label={`Mark task "${task.text}" as ${isChecked ? 'incomplete' : 'complete'}`}
      />
      <Label
        htmlFor={`task-${task.id}`}
        className={cn('flex-1 text-sm cursor-pointer', isChecked && 'line-through text-muted-foreground')}
      >
        {task.text}
      </Label>
      {task.requiresPhoto && (
        <Button variant="outline" size="sm">
          <Camera className="mr-2 h-4 w-4" />
          Upload
        </Button>
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
  );
}
