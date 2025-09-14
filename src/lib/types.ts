
export type Status = 'pending' | 'in-progress' | 'completed';

export type Task = {
  text: string;
  status: Status;
};

export type Visibility = 'free' | 'paid';

export type ChecklistCategory =
  | 'Events'
  | 'Hospitality'
  | 'Training'
  | 'Sustainability'
  | 'Airport'
  | 'Manufacturing'
  | 'Security'
  | 'Compliance';

export type Checklist = {
  id: string;
  category: ChecklistCategory;
  name: string;
  visibility: Visibility;
  importance: string;
  items: string[];
  premiumPack?: string;
};
