import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { checklistTemplates } from "@/lib/templates";
import { ChecklistCard } from "@/components/dashboard/checklist-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  const events = checklistTemplates.filter((c) => c.category === 'Events');
  const hospitality = checklistTemplates.filter((c) => c.category === 'Hospitality');
  const training = checklistTemplates.filter((c) => c.category === 'Training');
  const sustainability = checklistTemplates.filter((c) => c.category === 'Sustainability');

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">My Checklists</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Checklist
        </Button>
      </div>
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>
        <TabsContent value="events" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((checklist) => (
              <ChecklistCard key={checklist.id} checklist={checklist} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="hospitality" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hospitality.map((checklist) => (
              <ChecklistCard key={checklist.id} checklist={checklist} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="training" className="mt-6">
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {training.map((checklist) => (
              <ChecklistCard key={checklist.id} checklist={checklist} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sustainability" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sustainability.map((checklist) => (
              <ChecklistCard key={checklist.id} checklist={checklist} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
