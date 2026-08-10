import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.4rem',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--f-mono)',
          fontSize: 11.5,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--teal)',
        }}
      >
        404 — Not found
      </p>
      <h1
        style={{
          fontFamily: 'var(--f-display)',
          fontWeight: 300,
          fontSize: 'clamp(3.2rem, 10vw, 8.5rem)',
          lineHeight: 1.02,
          letterSpacing: '-0.025em',
          margin: 0,
        }}
      >
        Lost, <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>gracefully.</em>
      </h1>
      <p style={{ color: 'var(--ink-dim)', fontSize: 15 }}>
        This page doesn&apos;t exist — but the way back is effortless.
      </p>
      <Link href="/" className="pf-btn" style={{ marginTop: 8 }}>
        Back home
      </Link>
    </div>
  );
}
