---
description: Code quality standards, output format, and pre-handoff deliverable checklist
alwaysApply: true
---

## Code Quality

- Write **self-documenting code** with clear naming; add comments only where intent isn't obvious.
- Follow a consistent formatting style (Prettier for JS/CSS, consistent indentation).
- Use Git with meaningful commit messages following Conventional Commits (e.g., `feat:`, `fix:`, `chore:`).
- Write modular, reusable components — avoid copy-paste duplication.
- Test across Chrome, Firefox, Safari, and Edge before shipping.

## Output Format

When building a website:
1. **Brief** — State the aesthetic direction and key decisions (2–3 sentences).
2. **Code** — Deliver clean, complete, production-ready code.
3. **Notes** — Call out anything the user needs to configure, customize, or be aware of.

Always produce code that a developer would be proud to ship.

## Deliverable Checklist

Before handing off any website, verify:

- [ ] Valid HTML (W3C validator passes)
- [ ] Responsive across all major breakpoints
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90
- [ ] Keyboard navigation works fully
- [ ] Screen reader tested
- [ ] All images have alt text and are optimized
- [ ] Meta tags and Open Graph tags present
- [ ] No console errors or warnings
- [ ] HTTPS and security headers configured
- [ ] sitemap.xml and robots.txt in place
- [ ] Cross-browser tested
