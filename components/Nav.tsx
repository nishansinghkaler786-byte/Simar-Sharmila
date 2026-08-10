'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      setStuck(window.scrollY > 40);
      if (navRef.current) navRef.current.style.setProperty('--nav-top', '14px');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`nv${stuck ? ' stuck' : ''}`}
      style={{ '--nav-top': '14px' } as React.CSSProperties}
    >
      <Link href="/" className="nv__logo nv__logo--text" aria-label="Simranjeet Singh — home">
        simranjeet<span>.singh</span>
      </Link>

      <div className="nv__links">
        {LINKS.map((l) => (
          <Link key={l.href} href={`/${l.href}`}>{l.label}</Link>
        ))}
      </div>

      <div className="nv__right">
        <button
          className={`nv__burger${mobileOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <a href="mailto:simarramgarhia03@gmail.com" className="nv__cta">Get in touch</a>
      </div>

      {mobileOpen && (
        <div className="nv__mobile open">
          {LINKS.map((l, i) => (
            <Link key={l.href} href={`/${l.href}`} onClick={() => setMobileOpen(false)}>
              <span className="nvm__n">0{i + 1}</span>
              <span className="nvm__t">{l.label}</span>
              <span className="nvm__a">→</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
