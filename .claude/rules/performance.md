---
description: Performance optimization for images, fonts, CSS/JS bundles, and Core Web Vitals targets
alwaysApply: true
---

## Performance

### Images
- Use modern formats: WebP or AVIF with fallbacks.
- Always set explicit `width` and `height` attributes to prevent layout shift (CLS).
- Use `loading="lazy"` for below-the-fold images.
- Use `srcset` and `sizes` for responsive images.

### Fonts
- Use `font-display: swap`.
- Subset fonts to only needed characters when possible.
- Preload critical fonts: `<link rel="preload" as="font">`.

### CSS/JS
- Minify and bundle for production.
- Remove unused CSS (PurgeCSS or equivalent).
- Code-split large JS bundles.

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

### Other
- Use a CDN for static assets where possible.
- Set proper cache headers for static resources.
