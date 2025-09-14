
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Checklist } from '@/lib/types';
import { getAISuggestions } from '@/app/actions/checklists';
import { Sparkles, Loader2, PlusCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AISuggestionsProps {
  checklist: Checklist;
  onAddTask: (taskText: string) => void;
}

export function AITaskSuggester({ checklist, onAddTask }: AISuggestionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSuggest = async () => {
    setIsOpen(true);
    setIsLoading(true);
    setSuggestions([]);

    const existingTasks = checklist.items.map((t) => t.task);
    const result = await getAISuggestions({
      checklistType: checklist.name,
      existingTasks,
    });

    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "AI Suggestion Failed",
        description: result.error,
      });
      setIsOpen(false);
    } else if (result.suggestions && result.suggestions.length > 0) {
      setSuggestions(result.suggestions);
    } else {
        setSuggestions([]); // No suggestions found
    }
  };

  const handleAddTask = (suggestion: string) => {
    onAddTask(suggestion);
    setSuggestions((prev) => prev.filter((s) => s !== suggestion));
    toast({
      title: "Task Added",
      description: `"${suggestion}" has been added to your checklist.`,
    });
  };

  return (
    <>
      <Button onClick={handleSuggest} disabled={isLoading}>
        <Sparkles className="mr-2 h-4 w-4" />
        {isLoading ? 'Thinking...' : 'AI Suggest Tasks'}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>AI Task Suggestions</DialogTitle>
            <DialogDescription>
              Here are some tasks you might be missing from your '{checklist.name}' checklist.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-24">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : suggestions.length > 0 ? (
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-center justify-between gap-2 p-2 rounded-md bg-muted/50">
                    <span className="text-sm">{suggestion}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleAddTask(suggestion)}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Add
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
                <div className="text-center text-sm text-muted-foreground py-8">
                    <p>No new suggestions at the moment.</p>
                    <p>Your checklist looks complete!</p>
                </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
