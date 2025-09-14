import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { checklistTemplates } from "@/lib/templates";
import { ChecklistCard } from "@/components/dashboard/checklist-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { groupByCategoryAndSubcategory } from "@/lib/utils";


export default function DashboardPage() {
  const groupedChecklists = groupByCategoryAndSubcategory(checklistTemplates);

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
           <Tabs defaultValue={Object.keys(groupedChecklists)[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {Object.keys(groupedChecklists).map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(groupedChecklists).map(([category, subcategories]) => (
                <TabsContent key={category} value={category} className="mt-6">
                    <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={Object.keys(subcategories)[0]}>
                        {Object.entries(subcategories).map(([subcategory, checklists]) => (
                            <AccordionItem key={subcategory} value={subcategory} className="border rounded-lg">
                                <AccordionTrigger className="text-lg font-semibold px-6 py-4 hover:no-underline">
                                    {subcategory}
                                </AccordionTrigger>
                                <AccordionContent className="p-6 pt-0">
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {checklists.map((checklist) => (
                                        <ChecklistCard key={checklist.id} checklist={checklist} />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </TabsContent>
            ))}

          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
