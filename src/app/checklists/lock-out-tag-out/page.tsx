
import { notFound } from 'next/navigation';
import { individualChecklists } from '@/lib/individual-checklists';
import ChecklistClientPage from '../[id]/checklist-client-page';

const checklistId = 'lock-out-tag-out';

export default function Page() {
  const checklist = individualChecklists.find((c) => c.id === checklistId);

  if (!checklist) {
    notFound();
  }
  
  return <ChecklistClientPage checklist={checklist} />;
}
