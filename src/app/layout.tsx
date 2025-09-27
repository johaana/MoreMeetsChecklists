
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter, Poppins } from 'next/font/google';


const siteUrl = 'https://www.moremeets.com';
const heroImageUrl = 'https://i.postimg.cc/L6yNW7JK/Emirates-Palace-Abu-Dhabi.jpg';
const siteTitle = 'MoreMeets: Professional Operational Checklists & SOPs';
const siteDescription = 'Downloadable, expert-crafted operational checklists for hotels, retail, healthcare, and more. Achieve compliance and excellence with our one-time purchase SOP templates.';


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
        alt: 'MoreMeets Hero Image: Operational Excellence Checklists',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
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
