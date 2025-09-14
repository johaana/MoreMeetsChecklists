
'use client';

import { useState } from 'react';
import { checklistTemplates } from "@/lib/templates";
import { ChecklistCard } from "@/components/dashboard/checklist-card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import type { Checklist } from '@/lib/types';


// Helper to group checklists by category
function groupByCategory(checklists: Checklist[]): { [category: string]: Checklist[] } {
  return checklists.reduce((acc, checklist) => {
    const { category } = checklist;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(checklist);
    return acc;
  }, {} as { [category: string]: Checklist[] });
}


export default function DashboardPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleCreateChecklist = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // This functionality is for creating custom checklists, which is a future feature.
    // For now, we show a toast message.
    setIsCreateOpen(false);
    toast({
        title: 'Feature Coming Soon!',
        description: `Custom checklist creation is on our roadmap. For now, enjoy our templates!`,
    });
  };

  const freeChecklists = checklistTemplates.filter(c => c.visibility === 'free');
  const premiumChecklists = checklistTemplates.filter(c => c.visibility === 'paid');
  const groupedPremiumChecklists = groupByCategory(premiumChecklists);

  return (
    <div className="space-y-8">
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

      {/* Free Checklists Section */}
      <Card>
        <CardHeader>
            <CardTitle>Free Checklists</CardTitle>
            <CardDescription>Your personal checklists for events and daily life.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {freeChecklists.map((checklist) => (
                <ChecklistCard key={checklist.id} checklist={checklist} />
              ))}
            </div>
        </CardContent>
      </Card>

      {/* Premium Checklists Section */}
      <Card>
        <CardHeader>
            <CardTitle>Premium B2B Checklists</CardTitle>
            <CardDescription>Industry-standard checklists for professional operations and compliance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {Object.entries(groupedPremiumChecklists).map(([category, checklists]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 font-headline">{category}</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {checklists.map((checklist) => (
                    <ChecklistCard key={checklist.id} checklist={checklist} />
                  ))}
                </div>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
