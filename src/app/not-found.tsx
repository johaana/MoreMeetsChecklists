'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold font-headline text-primary">404</h1>
          <p className="text-2xl sm:text-3xl font-semibold mt-4">Page Not Found</p>
          <p className="mt-4 text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
