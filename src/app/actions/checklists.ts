'use server';

import { suggestMissingTasks, SuggestMissingTasksInput } from '@/ai/flows/suggest-missing-tasks';
import { z } from 'zod';

const suggestTasksSchema = z.object({
    checklistType: z.string(),
    existingTasks: z.array(z.string()),
});

export async function getAISuggestions(input: SuggestMissingTasksInput) {
    const parsedInput = suggestTasksSchema.safeParse(input);

    if (!parsedInput.success) {
        return { error: 'Invalid input.' };
    }

    try {
        const result = await suggestMissingTasks(parsedInput.data);
        return { suggestions: result.suggestedTasks };
    } catch (error) {
        console.error('Error getting AI suggestions:', error);
        return { error: 'Failed to get suggestions from AI.' };
    }
}
