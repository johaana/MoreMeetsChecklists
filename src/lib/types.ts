export type Subtask = {
  id: string;
  text: string;
  completed: boolean;
};

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string;
  assignee?: string;
  priority?: 'Low' | 'Medium' | 'High';
  requiresPhoto?: boolean;
  photoUrl?: string;
  subtasks?: Subtask[];
};

export type ChecklistCategory = 'Events' | 'Hospitality' | 'Training' | 'Sustainability';

export type Checklist = {
  id: string;
  title: string;
  category: ChecklistCategory;
  tasks: Task[];
  type: string; // e.g., 'Wedding - Haldi'
};
