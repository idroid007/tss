# Cloudflare Pages Deployment

This site is a **fully static Next.js 14 (App Router)** export deployed to **Cloudflare Pages** via Git integration. There is no server runtime — no API routes, no SSR, no server actions. The contact form submits client-side through EmailJS.

## How it's wired

- `next.config.js` sets `output: 'export'` → `npm run build` emits a static site into `out/`.
- `trailingSlash: true` and `images.unoptimized: true` are required for static export and must stay.
- `.node-version` pins Node 20 for Cloudflare's build environment.
- `public/_headers` sets long-cache headers on hashed `_next/static` assets.

## Dashboard settings

Cloudflare → Workers & Pages → Create → Pages → Connect to Git → `idroid007/tss`:

| Setting                 | Value                              |
| ----------------------- | ---------------------------------- |
| Framework preset        | Next.js (Static HTML Export)       |
| Build command           | `npm run build`                    |
| Build output directory  | `out`                              |
| Production branch        | `main`                             |
| Node version            | 20 (from `.node-version`)          |

Every push to `main` triggers a production deploy. Pull requests get preview deploys automatically.

## Environment variables

Set these under **Settings → Environment variables** for **both Production and Preview**.
They are public-by-design (baked into the client bundle) — without them the contact form silently fails.

| Variable                          | Source        |
| --------------------------------- | ------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS dashboard |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS dashboard |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS dashboard |

For local development, place the same three vars in a `.env.local` file (gitignored).

## Local build check

```bash
npm install
npm run build      # outputs to out/
```

All routes prerender as static: `/`, `/about/`, `/services/`, `/projects/`, `/contact/`.

## Post-deploy smoke test

1. Load `/about/`, `/services/`, `/projects/`, `/contact/` (note trailing slashes).
2. Confirm the logo and WebGL/animation components render.
3. Submit the contact form once to verify EmailJS delivery.

## Alternative: direct upload via Wrangler

If not using Git integration:

```bash
npm run build
wrangler pages deploy out
```
