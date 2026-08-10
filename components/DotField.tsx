'use client';

import { useEffect, useRef } from 'react';

/**
 * Calm dot-grid field for the hero: small ink/teal dots on paper,
 * breathing in a slow sine swell. 2D canvas, no dependencies.
 */
export default function DotField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    host.appendChild(canvas);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0, H = 0, cols = 0, rows = 0, gap = 34;

    function build() {
      W = host!.clientWidth; H = host!.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      gap = W < 700 ? 26 : 34;
      cols = Math.ceil(W / gap) + 1;
      rows = Math.ceil(H / gap) + 1;
    }
    build();

    const mouse = { x: -9e3, y: -9e3 };
    const onMove = (e: MouseEvent) => {
      const r = host!.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9e3; mouse.y = -9e3; };
    window.addEventListener('mousemove', onMove, { passive: true });
    host.addEventListener('mouseleave', onLeave);

    let raf = 0, t = 0, rt = 0;
    const onResize = () => { clearTimeout(rt); rt = window.setTimeout(build, 150); };
    window.addEventListener('resize', onResize);

    function frame() {
      t += reduced ? 0 : 0.014;
      ctx!.clearRect(0, 0, W, H);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap, y = r * gap;
          const swell = Math.sin(x * 0.012 + t) * Math.cos(y * 0.011 - t * 0.7);
          const dx = x - mouse.x, dy = y - mouse.y;
          const md = Math.sqrt(dx * dx + dy * dy);
          const near = Math.max(0, 1 - md / 170);
          const size = 1.1 + swell * 0.55 + near * 1.6;
          const alpha = 0.16 + swell * 0.08 + near * 0.5;
          ctx!.beginPath();
          ctx!.arc(x, y, Math.max(0.4, size), 0, 6.283);
          ctx!.fillStyle = near > 0.05
            ? `rgba(14, 124, 102, ${alpha.toFixed(3)})`
            : `rgba(26, 31, 29, ${(alpha * 0.7).toFixed(3)})`;
          ctx!.fill();
        }
      }
      raf = requestAnimationFrame(frame);
    }
    frame();
    if (reduced) { cancelAnimationFrame(raf); }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      host.removeEventListener('mouseleave', onLeave);
      host.removeChild(canvas);
    };
  }, []);

  return <div ref={ref} className="pf-hero__dots" aria-hidden="true" />;
}
