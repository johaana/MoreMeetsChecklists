
'use server';

import { z } from 'zod';
import { premiumPacks } from '@/lib/premium-packs';

const ContactFormSchema = z.object({
  email: z.string().email(),
  packId: z.string(),
});

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function addContact(data: ContactFormInputs) {
    const { email, packId } = data;
    
    const pack = premiumPacks.find(p => p.id === packId);
    const listId = pack?.listId;
    
    if (!listId) {
        return { success: false, message: 'Invalid pack ID or no list associated.' };
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
        console.error('Brevo API key is not configured.');
        return { success: false, message: 'Server configuration error.' };
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true,
            }),
        });

        if (response.ok) {
            return { success: true, message: 'Contact added successfully.' };
        } else {
            const errorData = await response.json();
            console.error('Failed to add contact to Brevo:', errorData);
            return { success: false, message: 'Failed to subscribe. Please try again.' };
        }
    } catch (error) {
        console.error('Error contacting Brevo API:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
