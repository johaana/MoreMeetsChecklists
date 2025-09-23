
'use server';
/**
 * @fileOverview A flow for handling enterprise inquiries.
 * - handleInquiry: A function that takes inquiry data and processes it.
 * - Inquiry: The Zod schema for the inquiry form data.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const InquirySchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string().email(),
  locations: z.string(),
  needs: z.string().optional(),
});

export type Inquiry = z.infer<typeof InquirySchema>;

export const handleInquiry = ai.defineFlow(
  {
    name: 'handleInquiry',
    inputSchema: InquirySchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (inquiry) => {
    console.log('New Enterprise Inquiry Received:', inquiry);

    // This section integrates with Google Sheets.
    // Ensure you have set up the following environment variables:
    // GOOGLE_SHEET_ID: The ID of your Google Sheet.
    // GOOGLE_SERVICE_ACCOUNT_EMAIL: The email of your Google Cloud service account.
    // GOOGLE_PRIVATE_KEY: The private key for your service account.
    
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
        try {
            const serviceAccountAuth = new JWT({
                email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
            await doc.loadInfo();
            
            const sheet = doc.sheetsByIndex[0];
            
            await sheet.addRow({
                Timestamp: new Date().toISOString(),
                Name: inquiry.name,
                Company: inquiry.company,
                Email: inquiry.email,
                Locations: inquiry.locations,
                Needs: inquiry.needs,
            });
             console.log('Inquiry successfully written to Google Sheet.');
        } catch (e) {
            console.error('Error writing to Google Sheet:', e);
            // If writing to the sheet fails, the flow will still succeed,
            // as the inquiry has been logged to the console.
        }
    } else {
        console.warn('Google Sheets environment variables not set. Skipping sheet integration.');
    }
    
    return { success: true };
  }
);
