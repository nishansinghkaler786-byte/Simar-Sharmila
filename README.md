# Nishan Singh — UX Portfolio

Fresh portfolio website: **Next.js 16 + Three.js WebGL hero**, infra-tech design language (near-black canvas, coral accent, monospace labels).

- Animated WebGL hero — particle terrain + wireframe torus knot, mouse parallax, `prefers-reduced-motion` fallback
- Animated proof metrics, case studies (Lumen · Pocial · eBinaa), experience timeline, services, review marquee

## Develop

```bash
npm install
npm run dev   # http://localhost:3000
```

## How this repo was assembled

The site shares its asset library and case-study pages with [nishanspace](https://github.com/nishansinghkaler786-byte/nishanspace); the one-shot GitHub Actions workflow `.github/workflows/import-site.yml` imports that base and overlays the redesign. After it has run once, the workflow file can be deleted.
