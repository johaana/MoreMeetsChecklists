
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { checklistTemplates } from "@/lib/templates";
import { ChecklistCard } from "@/components/dashboard/checklist-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { groupByCategoryAndSubcategory } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


export default function DashboardPage() {
  const groupedChecklists = groupByCategoryAndSubcategory(checklistTemplates);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleCreateChecklist = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const checklistName = formData.get('checklistName') as string;
    const checklistItems = (formData.get('checklistItems') as string)
      .split('\n')
      .filter(item => item.trim() !== '');

    if (!checklistName || checklistItems.length === 0) {
        toast({
            variant: 'destructive',
            title: 'Incomplete Checklist',
            description: 'Please provide a name and at least one item.',
        });
        return;
    }
    
    // In a real app, you would save this to the database.
    // For this demo, we'll just show a success message.
    console.log({
        name: checklistName,
        items: checklistItems,
    });
    
    setIsCreateOpen(false);
    toast({
        title: 'Checklist Created!',
        description: `Your new checklist "${checklistName}" has been created.`,
    });

    // You could optionally redirect to a new page for the created checklist
    // router.push(`/dashboard/checklists/new-id`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-2xl font-semibold md:text-3xl font-headline">Your Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex! Let's get planning.</p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Checklist
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a New Checklist</DialogTitle>
                    <DialogDescription>
                        Start a new plan from scratch. You can add more details and collaborators later.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateChecklist} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="checklistName">Checklist Name</Label>
                        <Input id="checklistName" name="checklistName" placeholder="e.g., Surprise Birthday Party" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="checklistItems">Checklist Items</Label>
                        <Textarea id="checklistItems" name="checklistItems" placeholder="Add checklist items, one per line..." className="min-h-32" />
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
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
                    <Accordion type="multiple" className="w-full space-y-4" defaultValue={Object.keys(subcategories)}>
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
