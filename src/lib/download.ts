
'use client';

/**
 * @fileOverview Redundant download path neutralized to favor app/lib/download.ts.
 * The primary engine logic is located at app/lib/download.ts.
 */
import { handleDownload as primaryDownload } from '@/lib/download';
export const handleDownload = primaryDownload;
