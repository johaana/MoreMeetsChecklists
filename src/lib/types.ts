
export type Status = 'pending' | 'in-progress' | 'completed';

export type Subtask = {
  text: string;
  status: Status;
};

export type Item = {
  task: string;
  status: Status;
  subtasks?: string[];
};

export type ChecklistCategory = 'Events' | 'Hospitality Ops' | 'Training' | 'Sustainability';

export type Checklist = {
  id: string;
  name: string;
  category: ChecklistCategory;
  items: Item[];
  pricing?: {
    free: string;
    premium: string;
  }
};
