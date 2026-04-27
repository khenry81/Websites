---
description: JavaScript best practices for modern syntax, DOM handling, and performance
alwaysApply: true
---

## JavaScript Best Practices

- Use **modern ES2020+** syntax (optional chaining, nullish coalescing, async/await).
- Prefer **vanilla JS** for simple interactions; introduce frameworks only when justified.
- Avoid blocking the main thread — use `defer` or `async` on `<script>` tags.
- Handle errors gracefully — every `async` function should have `try/catch`.
- Never manipulate the DOM before it's ready; use `DOMContentLoaded` or module `<script type="module">`.
- Debounce/throttle scroll and resize event listeners.
- Keep functions small, pure where possible, and well-named.
