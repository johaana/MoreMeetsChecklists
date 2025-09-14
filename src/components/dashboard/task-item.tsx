
'use client';

import { Task, Status, Priority } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { MoreVertical, ChevronDown, CheckCircle, Circle, Radio, Calendar as CalendarIcon, UserPlus, Trash2, SignalLow, SignalMedium, SignalHigh } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { User, users as allUsers } from '@/lib/users';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { format } from 'date-fns';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';


interface TaskItemProps {
    task: Task;
    users: User[];
    onStatusChange: (taskTitle: string, status: Status) => void;
    onAssignUser: (taskTitle: string, user: User | null) => void;
    onSetDueDate: (taskTitle: string, dueDate: Date | undefined) => void;
    onSetPriority: (taskTitle: string, priority: Priority) => void;
    onDeleteTask: (taskTitle: string) => void;
}

const statusConfig: Record<Status, { icon: React.ReactNode; label: string; color: string; badgeVariant: "default" | "secondary" | "destructive" | "outline" }> = {
    pending: { icon: <Circle className="h-4 w-4 text-muted-foreground" />, label: 'Pending', color: 'text-muted-foreground', badgeVariant: 'outline' },
    'in-progress': { icon: <Radio className="h-4 w-4 text-blue-500" />, label: 'In Progress', color: 'text-blue-500', badgeVariant: 'secondary' },
    completed: { icon: <CheckCircle className="h-4 w-4 text-green-500" />, label: 'Completed', color: 'text-green-500', badgeVariant: 'default' },
};

const priorityConfig: Record<Priority, { icon: React.ReactNode; label: string; color: string }> = {
    low: { icon: <SignalLow className="h-4 w-4" />, label: 'Low', color: 'text-green-500' },
    medium: { icon: <SignalMedium className="h-4 w-4" />, label: 'Medium', color: 'text-yellow-500' },
    high: { icon: <SignalHigh className="h-4 w-4" />, label: 'High', color: 'text-red-500' },
};


export function TaskItem({ task, users, onStatusChange, onAssignUser, onSetDueDate, onSetPriority, onDeleteTask }: TaskItemProps) {
  const [open, setOpen] = useState(true);
  const [isAssignUserOpen, setIsAssignUserOpen] = useState(false);
  
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;
  const currentStatus = statusConfig[task.status];
  const assignedUser = users.find(u => u.id === task.assignedTo);
  const currentPriority = priorityConfig[task.priority || 'low'];
  const [date, setDate] = useState<Date | undefined>(task.dueDate ? new Date(task.dueDate) : undefined)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onSetDueDate(task.task, selectedDate);
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="bg-card rounded-lg border">
        <div className="flex items-center gap-2 p-3 hover:bg-muted/50 transition-colors rounded-t-lg">
            
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
            
            {task.dueDate && (
              <Badge variant="outline" className="hidden sm:inline-flex items-center gap-1">
                <CalendarIcon className='h-3 w-3' />
                {format(new Date(task.dueDate), "MMM d")}
              </Badge>
            )}

            <Badge variant={currentStatus.badgeVariant} className="hidden md:inline-flex">{currentStatus.label}</Badge>

             <div className={cn("hidden md:flex items-center gap-1", currentPriority.color)}>
                {currentPriority.icon}
                <span className="sr-only">{currentPriority.label} priority</span>
            </div>
            
            {assignedUser ? (
                <Avatar className="h-6 w-6">
                    <AvatarImage src={assignedUser.avatar} alt={assignedUser.name} />
                    <AvatarFallback>{assignedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
            ) : (
                 <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 hidden md:inline-flex" onClick={() => setIsAssignUserOpen(true)}>
                    <UserPlus className="h-4 w-4 text-muted-foreground" />
                 </Button>
            )}
             
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
                  <DropdownMenuItem onClick={() => setIsAssignUserOpen(true)}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Assign User
                  </DropdownMenuItem>

                  <Popover>
                    <PopoverTrigger asChild>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Set Due Date
                      </DropdownMenuItem>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        {currentPriority.icon}
                        <span className="ml-2">Set Priority</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={task.priority || 'low'} onValueChange={(p) => onSetPriority(task.task, p as Priority)}>
                                <DropdownMenuRadioItem value="low"><SignalLow className="mr-2 h-4 w-4 text-green-500"/>Low</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="medium"><SignalMedium className="mr-2 h-4 w-4 text-yellow-500"/>Medium</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="high"><SignalHigh className="mr-2 h-4 w-4 text-red-500"/>High</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator />

                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem className="text-destructive" onSelect={(e) => e.preventDefault()}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Task
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                          <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete the task "{task.task}".
                              </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => onDeleteTask(task.task)} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                          </AlertDialogFooter>
                      </AlertDialogContent>
                  </AlertDialog>
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

      <Dialog open={isAssignUserOpen} onOpenChange={setIsAssignUserOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Assign User</DialogTitle>
                <DialogDescription>Select a user to assign this task to.</DialogDescription>
            </DialogHeader>
            <Command>
                <CommandInput placeholder="Filter users..." />
                <CommandList>
                    <CommandEmpty>No users found.</CommandEmpty>
                    <CommandGroup>
                        {users.map((user) => (
                            <CommandItem
                                key={user.id}
                                value={user.name}
                                onSelect={() => {
                                    onAssignUser(task.task, user);
                                    setIsAssignUserOpen(false);
                                }}
                            >
                                <Avatar className="h-6 w-6 mr-2">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                {user.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
            {assignedUser && (
                <DialogFooter>
                    <Button variant="outline" onClick={() => {
                        onAssignUser(task.task, null)
                        setIsAssignUserOpen(false)
                    }}>Unassign</Button>
                </DialogFooter>
            )}
        </DialogContent>
      </Dialog>
    </Collapsible>
  );
}
