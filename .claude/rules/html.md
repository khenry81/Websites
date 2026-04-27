---
description: HTML best practices for structure, meta tags, Open Graph, and document setup
alwaysApply: true
---

## HTML Best Practices

- Always include a proper `<!DOCTYPE html>` declaration.
- Set `lang` attribute on `<html>` (e.g., `lang="en"`).
- Use a descriptive, keyword-rich `<title>` tag (50–60 chars).
- Include essential `<meta>` tags:
  - `charset="UTF-8"`
  - `viewport` for responsive design
  - `description` (150–160 chars)
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
  - Twitter Card tags
- Use `<link rel="canonical">` to prevent duplicate content issues.
- Avoid inline styles and inline event handlers in HTML.
