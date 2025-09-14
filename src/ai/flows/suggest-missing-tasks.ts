'use server';

/**
 * @fileOverview This file defines a Genkit flow that suggests missing tasks for a checklist.
 *
 * The flow takes a checklist type (e.g., 'Wedding - Haldi') and a list of existing tasks as input,
 * and returns a list of suggested tasks that are likely missing from the checklist.
 *
 * @exports {
 *   suggestMissingTasks,
 *   SuggestMissingTasksInput,
 *   SuggestMissingTasksOutput,
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMissingTasksInputSchema = z.object({
  checklistType: z
    .string()
    .describe(
      'The type of checklist (e.g., Wedding - Haldi, Hotel Daily Housekeeping)'
    ),
  existingTasks: z
    .array(z.string())
    .describe('A list of existing tasks in the checklist.'),
});
export type SuggestMissingTasksInput = z.infer<
  typeof SuggestMissingTasksInputSchema
>;

const SuggestMissingTasksOutputSchema = z.object({
  suggestedTasks: z
    .array(z.string())
    .describe('A list of suggested tasks that are likely missing.'),
});
export type SuggestMissingTasksOutput = z.infer<
  typeof SuggestMissingTasksOutputSchema
>;

export async function suggestMissingTasks(
  input: SuggestMissingTasksInput
): Promise<SuggestMissingTasksOutput> {
  return suggestMissingTasksFlow(input);
}

const suggestMissingTasksPrompt = ai.definePrompt({
  name: 'suggestMissingTasksPrompt',
  input: {schema: SuggestMissingTasksInputSchema},
  output: {schema: SuggestMissingTasksOutputSchema},
  prompt: `You are an AI assistant designed to suggest missing tasks for checklists.

  Given the type of checklist and the existing tasks, identify any important tasks that are likely missing.
  Be concise and only suggest tasks that are highly relevant to the checklist type.

  Checklist Type: {{{checklistType}}}
  Existing Tasks:
  {{#each existingTasks}}- {{{this}}}\n{{/each}}

  Suggested Missing Tasks:`,
});

const suggestMissingTasksFlow = ai.defineFlow(
  {
    name: 'suggestMissingTasksFlow',
    inputSchema: SuggestMissingTasksInputSchema,
    outputSchema: SuggestMissingTasksOutputSchema,
  },
  async input => {
    const {output} = await suggestMissingTasksPrompt(input);
    return output!;
  }
);
