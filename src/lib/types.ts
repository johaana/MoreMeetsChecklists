
export type Status = 'pending' | 'in-progress' | 'completed';
export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  task: string;
  status: Status;
  subtasks: string[];
  assignedTo?: string | null;
  dueDate?: string;
  priority?: Priority;
};

export type ChecklistCategory = 'Events' | 'Hospitality' | 'Restaurants' | 'Training' | 'Sustainability';

export type Checklist = {
  id: string;
  name: string;
  category: ChecklistCategory;
  subcategory: string;
  premium: boolean;
  tasks: Task[];
};
