'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * WebGL hero: a flowing particle terrain + a slowly tumbling wireframe
 * torus-knot, pushed right-of-center so the headline column stays clear.
 * Colors: coral accent over near-black, additive blending for glow.
 */
export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0908, 0.028);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.set(0, 3.4, 15);

    /* ── particle terrain ─────────────────────────── */
    const COLS = 130, ROWS = 56, SPX = 0.62, SPZ = 0.62;
    const count = COLS * ROWS;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const base = new Float32Array(count * 2); // x,z base per point
    const cA = new THREE.Color('#ff5c38'); // coral
    const cB = new THREE.Color('#8a8578'); // warm grey
    let i3 = 0, i2 = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - COLS / 2) * SPX;
        const z = -r * SPZ + 6;
        pos[i3] = x; pos[i3 + 1] = 0; pos[i3 + 2] = z;
        base[i2] = x; base[i2 + 1] = z;
        const t = r / ROWS;
        const cc = cB.clone().lerp(cA, Math.pow(1 - t, 2.2) * 0.9);
        col[i3] = cc.r; col[i3 + 1] = cc.g; col[i3 + 2] = cc.b;
        i3 += 3; i2 += 2;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const terrain = new THREE.Points(geo, mat);
    terrain.position.y = -2.2;
    scene.add(terrain);

    /* ── wireframe knot, right of center ──────────── */
    const knotGeo = new THREE.TorusKnotGeometry(2.6, 0.72, 220, 28);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xff5c38,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    knot.position.set(6.4, 2.2, 2);
    scene.add(knot);

    const knotGlowGeo = new THREE.TorusKnotGeometry(2.6, 0.72, 80, 10);
    const knotGlow = new THREE.Points(
      knotGlowGeo,
      new THREE.PointsMaterial({
        color: 0xffb49e,
        size: 0.05,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    knotGlow.position.copy(knot.position);
    scene.add(knotGlow);

    /* ── layout / responsiveness ──────────────────── */
    let mobile = false;
    function layout() {
      const w = host.clientWidth, h = host.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      mobile = w < 760;
      // keep the knot clear of the text column
      knot.position.x = mobile ? 0 : Math.min(7.2, w / 210);
      knot.position.y = mobile ? 4.6 : 2.2;
      const s = mobile ? 0.6 : 1;
      knot.scale.setScalar(s);
      knotGlow.scale.setScalar(s);
      knotGlow.position.copy(knot.position);
      knotMat.opacity = mobile ? 0.1 : 0.16;
    }
    layout();

    /* ── mouse parallax ───────────────────────────── */
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let rt = 0;
    const onResize = () => { clearTimeout(rt); rt = window.setTimeout(layout, 150); };
    window.addEventListener('resize', onResize);

    /* ── animation loop ───────────────────────────── */
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;
    let t = 0, raf = 0;
    function frame() {
      t += reduced ? 0 : 0.016;
      const arr = posAttr.array as Float32Array;
      let j3 = 0, j2 = 0;
      for (let k = 0; k < count; k++) {
        const x = base[j2], z = base[j2 + 1];
        arr[j3 + 1] =
          Math.sin(x * 0.32 + t * 0.9) * 0.55 +
          Math.cos(z * 0.24 - t * 0.6) * 0.75 +
          Math.sin((x + z) * 0.12 + t * 0.35) * 0.5;
        j3 += 3; j2 += 2;
      }
      posAttr.needsUpdate = true;

      knot.rotation.x += reduced ? 0 : 0.0016;
      knot.rotation.y += reduced ? 0 : 0.0022;
      knotGlow.rotation.copy(knot.rotation);

      camera.position.x += ((mouse.x * 0.9) - camera.position.x) * 0.03;
      camera.position.y += ((3.4 - mouse.y * 0.7) - camera.position.y) * 0.03;
      camera.lookAt(0, 1.2, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    frame();
    if (reduced) {
      // render a single static frame's worth then stop the loop
      cancelAnimationFrame(raf);
      renderer.render(scene, camera);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose(); mat.dispose();
      knotGeo.dispose(); knotMat.dispose(); knotGlowGeo.dispose();
      (knotGlow.material as THREE.Material).dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} className="cbx__gl" aria-hidden="true" />;
}
