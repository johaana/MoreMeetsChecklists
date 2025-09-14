import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { checklistTemplates } from "@/lib/templates";
import { ChecklistCard } from "@/components/dashboard/checklist-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DashboardPage() {
  const events = checklistTemplates.filter((c) => c.category === 'Events');
  const hospitality = checklistTemplates.filter((c) => c.category === 'Hospitality');
  const training = checklistTemplates.filter((c) => c.category === 'Training');
  const sustainability = checklistTemplates.filter((c) => c.category === 'Sustainability');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-semibold md:text-3xl font-headline">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex!</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Checklist
        </Button>
      </div>

       <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>What's New at MoreMeets?</AlertTitle>
          <AlertDescription>
            We've just launched our <a href="/dashboard/premium-packs" className="font-semibold underline">Premium Packs</a>! Get access to expertly crafted checklists for complex projects.
          </AlertDescription>
        </Alert>

      <Card>
        <CardHeader>
            <CardTitle>My Checklists</CardTitle>
            <CardDescription>All your checklists organized by category.</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
