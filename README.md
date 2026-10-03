# merlinlcb.com

Personal site for merlinlcb — built with Next.js + Tailwind, exported as a static site, and deployed to GitHub Pages automatically.

## Updating the site

**All content lives in [`content/site.ts`](content/site.ts)** — certifications, awards, bio, links.

### Add a new certification

1. Open `content/site.ts` (the pencil icon on GitHub works fine — no local setup needed).
2. Copy an existing entry in `certifications` and paste it at the top:
   ```ts
   {
     name: "CySA+",
     fullName: "CompTIA Cybersecurity Analyst",
     issuer: "CompTIA",
     url: "https://www.credly.com/badges/<id>/public_url",   // Credly → Share → copy link
     image: "https://images.credly.com/size/340x340/images/<...>",  // right-click badge → copy image address
   },
   ```
3. Commit to `master`. The **Deploy site** GitHub Action builds and publishes it in about a minute.

Counts in the hero/stats update automatically.

> **Badge images from somewhere other than Credly?** The site's Content-Security-Policy only allows images from known hosts. Add the new host to `img-src` in [`app/layout.tsx`](app/layout.tsx), or drop the image into `public/` and use `image: "/my-badge.png"`.

## GitHub stats

The "On GitHub" section (repo count, languages used, followers, and a top-languages breakdown — no links to individual repos) is pulled straight from the GitHub API when the site builds (`lib/github.ts`); there's no third-party stats service. The workflow rebuilds every Monday to keep it current, and you can trigger a refresh anytime from **Actions → Deploy site → Run workflow**. Only public, non-fork repos are counted. If the API is ever unreachable, the section is hidden for that build instead of breaking the site.

## Local development (optional)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output in ./out
```

## One-time setup

In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**. The custom domain comes from `public/CNAME`.
