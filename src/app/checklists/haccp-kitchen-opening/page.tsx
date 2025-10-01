
import { notFound } from 'next/navigation';
import { individualChecklists } from '@/lib/individual-checklists';
import ChecklistClientPage from '../[id]/checklist-client-page';

const checklistId = 'haccp-kitchen-opening';

export default function Page() {
  const checklist = individualChecklists.find((c) => c.id === checklistId);

  if (!checklist) {
    notFound();
  }
  
  return <ChecklistClientPage checklist={checklist} />;
}
