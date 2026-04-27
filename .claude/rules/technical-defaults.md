---
description: Default technical setup for website builds — Tailwind CDN, placeholder images, file structure
alwaysApply: true
---

## Technical Defaults

- Use Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use placeholder images from `https://placehold.co/` when source images aren't provided
- Mobile-first responsive design
- Single `index.html` file unless the user requests otherwise

## Architecture & Project Structure

- Use **semantic HTML5** elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- Organize files logically: `/assets`, `/components`, `/styles`, `/scripts`, `/pages`.
- Prefer **component-based architecture** (React, Vue, Svelte, or Web Components) for anything beyond static pages.
- Keep HTML, CSS, and JS concerns separated unless using a component framework.
- Use **environment variables** for API keys and config — never hardcode secrets.
