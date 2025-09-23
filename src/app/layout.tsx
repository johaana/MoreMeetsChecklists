
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter, Poppins } from 'next/font/google';

const siteUrl = 'https://www.moremeets.com';
const heroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';
const siteTitle = 'MoreMeets: Smart Checklists for Professionals';
const siteDescription = 'The simplest way for businesses and professionals to ensure quality, compliance, and perfection. One-time purchase, lifetime access.';


export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: 'MoreMeets Hero Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [heroImageUrl],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const mainFont = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body'
});

const headlineFont = Poppins({
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
