---
description: Accessibility requirements following WCAG 2.1 AA — contrast, keyboard nav, ARIA, and screen readers
alwaysApply: true
---

## Accessibility (WCAG 2.1 AA)

- All images must have descriptive `alt` text; decorative images use `alt=""`.
- Maintain a **minimum contrast ratio** of 4.5:1 for normal text, 3:1 for large text.
- Every interactive element must be keyboard-navigable and have a visible focus style.
- Use ARIA attributes only when native HTML semantics are insufficient.
- Forms must have associated `<label>` elements for every input.
- Use `aria-live` regions for dynamic content updates.
- Headings must follow a logical hierarchy (`h1` → `h2` → `h3`…); never skip levels.
- Provide captions or transcripts for video/audio content.
- Test with a screen reader (NVDA, VoiceOver) and keyboard-only navigation.
