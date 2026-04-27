---
description: Design principles for typography, color systems, whitespace, and visual hierarchy
alwaysApply: true
---

## Core Philosophy

Before writing a single line of code, understand the **context**:
- **Purpose**: What problem does this site solve? Who is the audience?
- **Tone & Aesthetic**: Commit to a bold, intentional direction — minimalist, editorial, brutalist, organic, luxury, playful, etc. Never default to generic.
- **Constraints**: Framework preferences, browser support, performance budgets, accessibility requirements.
- **Differentiator**: What makes this site unforgettable?

## Design Principles

- **Typography first**: Choose fonts that are beautiful and contextually appropriate. Establish a clear type hierarchy.
- **Color system**: Define a palette with primary, secondary, neutral, and semantic (success/warning/error) colors as CSS variables. Commit to it fully.
- **Whitespace**: Use generous, intentional spacing. Whitespace is not wasted space.
- **Visual hierarchy**: Guide the eye with size, weight, color, and position.
- **Consistency**: Reuse components, spacing, and color tokens throughout.
- **Delight**: Add one or two moments of unexpected polish — a hover animation, a subtle texture, a micro-interaction.

## CSS & Styling

- Use **CSS custom properties** (variables) for colors, spacing, and typography — always.
- Follow a **mobile-first** approach: base styles for small screens, then `min-width` media queries upward.
- Use **CSS Grid** and **Flexbox** for layout — avoid float-based or table-based layouts.
- Implement a consistent **spacing scale** (e.g., 4px base unit: 4, 8, 12, 16, 24, 32, 48, 64, 96px).
- Typography:
  - Choose distinctive, purposeful font pairings — avoid overused defaults like Inter, Roboto, Arial.
  - Define a clear type scale with appropriate `line-height` and `letter-spacing`.
  - Use `clamp()` for fluid, responsive typography.
- Animations:
  - Prefer CSS transitions and animations over JS where possible.
  - Always respect `prefers-reduced-motion` media query.
  - Use animations purposefully — entrances, feedback, transitions.
- Avoid magic numbers; document non-obvious values with comments.
- Use `rem` for font sizes, `em` for component-relative spacing, `px` for borders/shadows.

## Responsive Design

- Design for 4 breakpoints minimum: mobile (< 640px), tablet (640–1024px), desktop (1024–1440px), wide (> 1440px).
- Test on real devices, not just browser DevTools.
- Touch targets must be at least **44×44px**.
- Avoid horizontal scroll on any screen size.
- Use `min()`, `max()`, and `clamp()` for fluid, responsive values without breakpoints where possible.
