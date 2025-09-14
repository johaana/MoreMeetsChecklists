
'use client';

import { Task, Status } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { MoreVertical, ChevronDown, CheckCircle, Circle, Radio, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';


interface TaskItemProps {
    task: Task;
    onStatusChange: (taskTitle: string, status: Status) => void;
}

const statusConfig: Record<Status, { icon: React.ReactNode; label: string; color: string; badgeVariant: "default" | "secondary" | "destructive" | "outline" }> = {
    pending: { icon: <Circle className="h-4 w-4 text-muted-foreground" />, label: 'Pending', color: 'text-muted-foreground', badgeVariant: 'outline' },
    'in-progress': { icon: <Radio className="h-4 w-4 text-blue-500" />, label: 'In Progress', color: 'text-blue-500', badgeVariant: 'secondary' },
    completed: { icon: <CheckCircle className="h-4 w-4 text-green-500" />, label: 'Completed', color: 'text-green-500', badgeVariant: 'default' },
};


export function TaskItem({ task, onStatusChange }: TaskItemProps) {
  const [open, setOpen] = useState(true);
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;
  const currentStatus = statusConfig[task.status];
  
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="bg-card rounded-lg border">
        <div className="flex items-center gap-4 p-3 hover:bg-muted/50 transition-colors rounded-t-lg">
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                  {currentStatus.icon}
                  <span className="sr-only">Change status</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Set Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={task.status}
                  onValueChange={(value) => onStatusChange(task.task, value as Status)}
                >
                  <DropdownMenuRadioItem value="pending">Pending</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="in-progress">In Progress</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div
                className={cn('flex-1 text-sm font-medium', task.status === 'completed' && 'line-through text-muted-foreground')}
            >
                {task.task}
            </div>
            
            <Badge variant={currentStatus.badgeVariant} className="hidden md:inline-flex">{currentStatus.label}</Badge>
             
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
            <div className="border-t py-2 px-4 pl-16 space-y-2">
                {task.subtasks?.map((subtask, index) => (
                    <div key={index} className="flex items-center gap-3">
                         <Checkbox id={`subtask-${task.task}-${index}`} />
                        <Label
                            htmlFor={`subtask-${task.task}-${index}`}
                            className={cn('text-sm flex-1')}
                        >
                            {subtask}
                        </Label>
                    </div>
                ))}
            </div>
         </CollapsibleContent>
       )}
    </Collapsible>
  );
}
