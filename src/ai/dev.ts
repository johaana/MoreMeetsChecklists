'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-missing-tasks.ts';
import '@/ai/flows/personalize-profile.ts';
