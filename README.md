# EUKERIT website

Static site — three pages, no build step, no dependencies.

```
index.html      Home (hero + contact form)
kerala-it.html  Kerala IT
about.html      About
style.css       All styles
script.js       Language toggle (EN | NL) + mobile nav
```

The only external asset is the Inter font, loaded from Google Fonts, and one
hero background image hotlinked from Unsplash. If you'd rather use a
different photo (Kerala backwaters, a coastal bridge, two coastlines meeting),
swap the `background-image` URL in `style.css` under `.hero` — the layout
degrades gracefully to a plain navy background if the image doesn't load.

## Language toggle

Translatable text carries `data-en` / `data-nl` attributes; `script.js` swaps
`textContent` on load and on click, and remembers the choice in
`localStorage` so it persists across pages. No page reload or server logic
involved.

## Contact form

The form posts via `mailto:anoop@eukerit.com` (`enctype="text/plain"`), so it
opens the visitor's email client with the fields pre-filled — no backend,
no form service, no JavaScript required for it to work.

## Deploy to GitHub Pages

1. Push these files to a GitHub repository (root of the repo, or a `/docs`
   folder — either works).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, pick the branch and folder the files live in (e.g.
   `main` / `/root`).
4. Save. GitHub Pages will publish at `https://<username>.github.io/<repo>/`.
5. Optional: add a custom domain (`eukerit.com`) under the same Pages
   settings, and create a `CNAME` file in the repo root containing just the
   domain name. Point your domain's DNS at GitHub Pages per their docs.

## Deploy to Netlify

1. Drag the folder containing these files onto
   [app.netlify.com/drop](https://app.netlify.com/drop), **or** connect the
   GitHub repo via **Add new site → Import an existing project**.
2. No build command and no publish directory override needed — the site is
   already static at the root.
3. Once deployed, add `eukerit.com` / `eukerit.nl` under
   **Site settings → Domain management** and follow Netlify's DNS
   instructions.

No environment variables, no build step, no package manager involved either
way.
