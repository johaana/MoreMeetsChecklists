
export type Status = 'pending' | 'in-progress' | 'completed';

export type Task = {
  text: string;
  status: Status;
};

export type Visibility = 'free' | 'paid';
