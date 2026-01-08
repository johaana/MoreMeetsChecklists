"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', backgroundColor: '#fff', color: '#000', height: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '50px' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Application Error</h1>
        <p style={{ marginTop: '20px', fontSize: '1.2em' }}>We're sorry, something went wrong on our end.</p>
        <p style={{ marginTop: '10px' }}>We have been notified and are looking into it.</p>
        {error?.message && (
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', marginTop: '20px', background: '#f0f0f0', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}
