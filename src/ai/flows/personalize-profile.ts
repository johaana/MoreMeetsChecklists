'use server';

/**
 * @fileOverview This file defines a Genkit flow that personalizes recommendations for a user.
 *
 * The flow takes a user's role and bio as input and suggests relevant checklists,
 * premium packs, and community topics.
 *
 * @exports {
 *   personalizeProfile,
 *   PersonalizeProfileInput,
 *   PersonalizeProfileOutput,
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeProfileInputSchema = z.object({
  role: z.string().describe('The user\'s professional role (e.g., Event Planner, Hotel Manager).'),
  bio: z.string().describe('A short biography describing the user\'s work and interests.'),
});
export type PersonalizeProfileInput = z.infer<typeof PersonalizeProfileInputSchema>;

const PersonalizeProfileOutputSchema = z.object({
  suggestedChecklists: z
    .array(z.string())
    .describe('A list of 2-3 specific, relevant free checklist template titles from the provided list.'),
  suggestedPremiumPacks: z
    .array(z.string())
    .describe('A list of 1-2 relevant premium pack titles from the provided list that would be a great fit.'),
  suggestedCommunityTopics: z
    .array(z.string())
    .describe('A list of 2-3 discussion topics for the community forum that the user might be interested in.'),
});
export type PersonalizeProfileOutput = z.infer<typeof PersonalizeProfileOutputSchema>;

export async function personalizeProfile(
  input: PersonalizeProfileInput
): Promise<PersonalizeProfileOutput> {
  return personalizeProfileFlow(input);
}

const personalizeProfilePrompt = ai.definePrompt({
  name: 'personalizeProfilePrompt',
  input: {schema: PersonalizeProfileInputSchema},
  output: {schema: PersonalizeProfileOutputSchema},
  prompt: `You are an AI assistant for "MoreMeets", a smart checklist platform. Your goal is to provide personalized recommendations to users based on their profile.

Analyze the user's role and bio to understand their needs and interests.
Based on this analysis, suggest a few relevant items from the lists provided below.

User Role: {{{role}}}
User Bio: {{{bio}}}

AVAILABLE FREE TEMPLATES:
- Wedding - Haldi Ceremony
- Wedding - Mehndi Night
- Wedding - Sangeet
- South Indian Wedding
- Sikh Wedding (Anand Karaj)
- Product Launch Event
- Startup Launch Party
- Kids Birthday Party
- Destination Wedding Planning
- Corporate Awards Night
- Major Award Show Production
- Hotel Daily Housekeeping
- Restaurant Daily Opening
- Restaurant Daily Closing
- Catering Event Management
- New Hotel Staff Onboarding
- Hotel Energy Efficiency

AVAILABLE PREMIUM PACKS:
- The Ultimate Wedding Planner Pack
- Hospitality Excellence Suite
- Corporate & Startup Launchkit
- Sustainability Starter Kit

EXISTING COMMUNITY TOPICS:
- Wedding Planning Tips & Tricks
- Hotel Management Best Practices
- Startup Launch Stories
- Sustainable Event Ideas

Please be very specific and only recommend items from the lists above.
Choose the most relevant items for each category. Be concise.
`,
});

const personalizeProfileFlow = ai.defineFlow(
  {
    name: 'personalizeProfileFlow',
    inputSchema: PersonalizeProfileInputSchema,
    outputSchema: PersonalizeProfileOutputSchema,
  },
  async input => {
    const {output} = await personalizeProfilePrompt(input);
    return output!;
  }
);
