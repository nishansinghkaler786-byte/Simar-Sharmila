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
        gap: '1.6rem',
        background: '#0a0908',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-geist-mono, monospace)',
          fontSize: 12,
          letterSpacing: '0.18em',
          color: '#ff5c38',
        }}
      >
        [ 404 — NOT FOUND ]
      </p>
      <h1
        style={{
          fontSize: 'clamp(3.5rem, 11vw, 10rem)',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          margin: 0,
        }}
      >
        Lost, <em style={{ fontStyle: 'italic', color: '#ff5c38' }}>gracefully.</em>
      </h1>
      <p style={{ color: 'var(--ink-dim)', fontSize: 14 }}>
        This page doesn&apos;t exist — but the way back is effortless.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#ff5c38',
          color: '#16100d',
          fontWeight: 600,
          fontSize: 14,
          padding: '12px 22px',
          borderRadius: 10,
          textDecoration: 'none',
        }}
      >
        Back home →
      </Link>
    </div>
  );
}
