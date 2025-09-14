
export type Subtask = {
  id: string;
  text: string;
  completed: boolean;
};

export type Item = {
  id: string;
  text: string;
  completed: boolean;
  subtasks?: Subtask[];
};

export type ChecklistCategory = 'Events' | 'Hospitality' | 'Training' | 'Sustainability';

export type Checklist = {
  id: string;
  title: string;
  category: ChecklistCategory;
  items: Item[];
  type: string; // e.g., 'Wedding - Haldi'
  pricing?: {
    free: string;
    premium: string;
  }
};
