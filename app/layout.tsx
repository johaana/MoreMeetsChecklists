import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from '@/lib/utils';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import { LayoutScript } from '@/components/layout/layout-script';
import Script from 'next/script';

const siteUrl = 'https://www.moremeets.com';
const siteTitle = 'Where SOPs Meet Execution | MoreMeets™';
const siteDescription = 'Industry-specific SOP systems with daily tasks, built-in instructions, accountability tracking, and proof of completion.';
const ogImageUrl = 'https://i.postimg.cc/NfGGj9nC/pexels-pavel-danilyuk-7519003.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
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
        alt: 'MoreMeets - Where SOPs Meet Execution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },
};

const mainFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const headlineFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x0vv97nur7");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MoreMeets Operational SOP Systems",
              "operatingSystem": "Windows, MacOS, Android, iOS",
              "applicationCategory": "BusinessApplication",
              "publisher": {
                "@type": "Organization",
                "name": "MoreMeets",
                "url": "https://www.moremeets.com",
                "logo": "https://www.moremeets.com/api/og"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MoreMeets",
              "url": "https://www.moremeets.com"
            })
          }}
        />
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
