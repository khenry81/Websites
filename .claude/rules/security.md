---
description: Security rules for HTTPS, CSP headers, input sanitization, and dependency hygiene
alwaysApply: true
---

## Security

- Always use **HTTPS**.
- Set security headers:
  - `Content-Security-Policy`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
- Sanitize all user inputs — never trust client-side data.
- Avoid `innerHTML` with user-supplied content; use `textContent` or DOM APIs.
- Use `rel="noopener noreferrer"` on all `target="_blank"` links.
- Keep dependencies up to date and audit for vulnerabilities (`npm audit`).
