import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'MoreMeets: Smart Checklists',
  description: 'More Meets. More Organized.',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const headlineFont = Inter({ subsets: ['latin'], weight: ['700'], variable: '--font-headline' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        inter.variable,
        headlineFont.variable,
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
