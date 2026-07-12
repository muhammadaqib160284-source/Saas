# Verdant — Premium SaaS Landing Page

A dark, green-accented, animation-heavy SaaS landing page for a fintech/AI
"live signal" product, built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, and Lenis.

## Design concept

- **Palette** — near-black `void` background (`#050B08`) with an
  emerald → teal → lime signal gradient as the single recurring accent.
- **Type** — Bricolage Grotesque (display headlines), Inter (body),
  JetBrains Mono (eyebrows, stats, data labels).
- **Signature motif** — an animated "pulse wave" (an ECG-style signal
  line) that recurs in the hero, the pinned product showcase, the final
  CTA, and the footer, tying the whole page back to the product's real-time
  monitoring pitch.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/                   Route, layout, metadata, sitemap/robots
components/
  layout/               Navbar, Footer
  sections/             One file per landing-page section
  ui/                   Reusable primitives (Button, GlowCard, GradientOrb, ...)
animations/
  variants.ts            Shared Framer Motion variants
  SplitText.tsx           GSAP word/char reveal component
  useCounter.ts           GSAP scroll-triggered count-up hook
  useParallax.ts          GSAP scroll-scrubbed parallax hook
  SmoothScrollProvider.tsx  Lenis <-> GSAP ScrollTrigger bridge
  CursorGlow.tsx           Mouse-following ambient glow
data/content.ts          All page copy in one place
lib/                    gsap registration, cn() helper
hooks/                  useIsomorphicLayoutEffect
```

## Animation approach

- **Framer Motion** drives UI-level interaction: staggered entrances,
  hover/tap states, the testimonial carousel, the FAQ accordion, and the
  magnetic/ripple button.
- **GSAP + ScrollTrigger** drives scroll storytelling: the split-text
  headline reveals, the pinned product showcase, the workflow timeline's
  drawing connector line, and the stat counters.
- **Lenis** provides the smooth-scroll feel and is synced into GSAP's
  ticker so `ScrollTrigger` stays accurate against the custom scroll
  physics.
- All animated properties are `transform`/`opacity` only, so nothing
  triggers layout/reflow, and no animation shifts surrounding content
  (bars, counters, and accordions size their containers up front).
- `prefers-reduced-motion` is respected globally (see `globals.css`) and
  individually in the heavier hooks (`SmoothScrollProvider`, `useCounter`,
  `useParallax`, `ParticleField`, `CursorGlow`, `ProductShowcase`,
  `WorkflowTimeline`), which fall back to static/native behavior.

## Notes

- Replace `https://verdant.example.com` in `app/layout.tsx`,
  `app/sitemap.ts`, and `app/robots.ts` with your real domain before
  deploying.
- Add a real `/public/og-image.png` (1200×630) for social previews.
- All copy lives in `data/content.ts` — update it there rather than in
  the section components.
