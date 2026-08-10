'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#beyond', label: 'Beyond' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setStuck(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  return (
    <nav ref={navRef} className={`pf-nav${stuck ? ' stuck' : ''}`}>
      <Link href="/" className="pf-nav__logo" aria-label="Simranjeet Singh — home">
        Simranjeet <i>Singh</i>
      </Link>

      <div className="pf-nav__links">
        {LINKS.map((l) => (
          <Link key={l.href} href={`/${l.href}`}>{l.label}</Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          className={`pf-nav__burger${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <a href="mailto:simarramgarhia03@gmail.com" className="pf-nav__cta">Get in touch</a>
      </div>

      {open && (
        <div className="pf-nav__sheet">
          {LINKS.map((l) => (
            <Link key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
