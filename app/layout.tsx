
import type { Metadata } from 'next';
import { Toaster } from "./components/ui/toaster";
import "./globals.css";
import { cn } from './lib/utils';
import { Inter, Poppins } from 'next/font/google';
import { LayoutScript } from './components/layout/layout-script';


const siteUrl = 'https://www.moremeets.com';
const siteTitle = 'MoreMeets: Professional Operational Checklists & SOPs';
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
  weight: ['400', '700'],
  variable: '--font-body'
});

const headlineFont = Poppins({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-headline'
});

const faviconSvg = `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22currentColor%22><rect width=%2220%22 height=%2220%22 x=%222%22 y=%222%22 rx=%224%22 fill=%22url(%23grad)%22/><path d=%22M8 7l-1.41 1.41L8 9.83l4.59-4.58L11.17 4 8 7.17z%22 fill=%22%23fff%22/><path d=%22M8 13l-1.41 1.41L8 15.83l4.59-4.58L11.17 10 8 13.17z%22 fill=%22%23fff%22/><rect x=%2214%22 y=%226%22 width=%226%22 height=%222%22 fill=%22%23fff%22/><rect x=%2214%22 y=%2212%22 width=%226%22 height=%222%22 fill=%22%23fff%22/><defs><linearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:rgb(255,165,0);stop-opacity:1%22 /><stop offset=%22100%25%22 style=%22stop-color:rgb(220,20,60);stop-opacity:1%22 /></linearGradient></defs></svg>`;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`data:image/svg+xml,${faviconSvg}`} sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body antialiased",
        mainFont.variable,
        headlineFont.variable,
      )}>
        {children}
        <Toaster />
        <LayoutScript />
      </body>
    </html>
  );
}
