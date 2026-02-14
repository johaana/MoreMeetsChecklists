import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from '@/lib/utils';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import { LayoutScript } from '@/components/layout/layout-script';

const siteUrl = 'https://www.moremeets.com';
const siteTitle = 'MoreMeets™: Professional Operational Checklists & SOPs';
const siteDescription = 'Downloadable, expert-crafted operational checklists for hotels, retail, healthcare, and more. Achieve compliance and excellence with our one-time purchase SOP templates.';
const ogImageUrl = `${siteUrl}/api/og`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const mainFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

const headlineFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-headline'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme: 'dark'}} suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        mainFont.variable,
        headlineFont.variable
      )}>
        {children}
        <Toaster />
        <LayoutScript />
      </body>
    </html>
  );
}
