
'use server';

import { premiumPacks } from "@/lib/premium-packs";

export async function addContact(data: { name: string, email: string, company: string, designation: string, packId: string }): Promise<{ success: boolean, error?: string }> {
  const { name, email, company, designation, packId } = data;
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error("Brevo key not configured.");
    return { success: false, error: "Server configuration error. Please contact support." };
  }

  // Find the list ID based on the pack ID
  const pack = premiumPacks.find(p => p.id === packId);
  const listId = pack?.listId;

  if (!listId) {
    console.error(`No list ID found for pack ID: ${packId}`);
    return { success: false, error: "Configuration error: Could not find mailing list for this pack." };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name,
          COMPANY: company,
          ROLE: designation,
        },
        listIds: [listId],
        updateEnabled: true
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorBody = await response.json();
      console.error("Brevo API Error:", errorBody);
      return { success: false, error: errorBody.message || 'Failed to subscribe.' };
    }
  } catch (error) {
    console.error("Error adding contact to Brevo:", error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
