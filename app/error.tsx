"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <div style={{ padding: 20 }}>
          <h1>Application Error</h1>
          <p>We're sorry, something went wrong.</p>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', marginTop: '20px', background: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
            {error.message}
          </pre>
        </div>
      </body>
    </html>
  );
}