
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold font-headline text-primary">404</h1>
          <p className="text-2xl sm:text-3xl font-semibold mt-4">
            Page Not Found
          </p>
          <p className="mt-4 text-muted-foreground">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Return to Homepage
          </a>
        </div>
      </main>
    </div>
  );
}
