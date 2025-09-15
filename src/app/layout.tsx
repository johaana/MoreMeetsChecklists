import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';
import { PT_Sans, Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'MoreMeets: Smart Checklists for Professionals',
  description: 'The simplest way for businesses and professionals to ensure quality, compliance, and perfection. One-time purchase, lifetime access.',
};

const mainFont = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body'
});

const headlineFont = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-headline'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        mainFont.variable,
        headlineFont.variable,
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
