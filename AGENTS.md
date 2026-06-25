# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static, client-side marketing website** ("UltimateCSS"). It is plain HTML/CSS/vanilla JS with **no build step, no package manager, no backend, and no dependencies to install**. The pages are the root-level `*.html` files (`index.html`, `about.html`, `case-studies.html`, `case-study-detail.html`, `contact.html`, `resources.html`).

### Running it (the only "service")

Serve the repo root over HTTP and open `index.html`:

```
python3 -m http.server 8000
```

Then browse `http://localhost:8000/index.html`. Relative links and `<link rel="prefetch">` work correctly when served over `http://`.

### Non-obvious notes

- **External CDNs at runtime:** Styling/icons/fonts are loaded from CDNs (`cdn.tailwindcss.com`, `code.iconify.design`, `api.fontshare.com`). The pages will load without internet, but will appear unstyled / missing icons & fonts. Full visual fidelity requires outbound HTTPS access.
- **No backend:** Forms (e.g. the contact form on `contact.html`) are front-end only. Submitting performs a plain GET reload (URL gains a trailing `?` and fields reset); there is no server to receive the data. This is expected behavior, not a bug.
- **No lint/test/build tooling** exists in this repo. There is nothing to lint, no automated test suite, and no build artifacts to produce.
