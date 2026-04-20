
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from '@/lib/utils';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import { LayoutScript } from '@/components/layout/layout-script';
import Script from 'next/script';

const siteUrl = 'https://www.moremeets.com';
const siteTitle = 'MoreMeets™ | Sovereign Operational Infrastructure';
const siteDescription = 'Stop managing manually. MoreMeets™ converts SOPs into live operating infrastructure for restaurants, hotels, hospitals, retail stores, facilities and franchises. Own your data. Works on Excel & Google Sheets.';
const socialImage = 'https://i.postimg.cc/rsHq85yn/Screenshot-2026-04-09-091611.png';

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
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'MoreMeets™ Sovereign Master Engine Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
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
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZE6F71Y2CM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZE6F71Y2CM');
          `}
        </Script>
      </head>
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
