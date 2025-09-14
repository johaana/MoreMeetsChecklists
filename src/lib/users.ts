

export const roles = ['Client', 'Team Member', 'Vendor', 'Manager'] as const;

export type User = {
    id: string;
    name: string;
    avatar: string;
    role: typeof roles[number];
    email: string;
};

export const users: User[] = [
    { id: 'user-1', name: 'Alex Robinson', avatar: 'https://picsum.photos/seed/1/100/100', role: 'Manager', email: 'alex@example.com' },
    { id: 'user-2', name: 'Priya Singh', avatar: 'https://picsum.photos/seed/priya/100/100', role: 'Team Member', email: 'priya@example.com' },
    { id: 'user-3', name: 'Chen Wei', avatar: 'https://picsum.photos/seed/chen/100/100', role: 'Vendor', email: 'chen@example.com' },
    { id: 'user-4', name: 'Sarah Miller', avatar: 'https://picsum.photos/seed/sarah/100/100', role: 'Client', email: 'sarah@example.com' },
    { id: 'user-5', name: 'David Kim', avatar: 'https://picsum.photos/seed/david/100/100', role: 'Team Member', email: 'david@example.com' },
];
