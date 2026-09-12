# Hollydaff — website

A professional shop website for **Hollydaff** ([@hollydaff.co](https://www.instagram.com/hollydaff.co/)), a handmade
pipe-cleaner (chenille) flower studio from Ranchi. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and Motion.

All product photos and videos come from the Hollydaff Instagram account — frames were cropped from reels, clips were
trimmed and **muted** (Instagram music isn't licensed for re-use), and customer reviews come from the "Reviews" highlight
with names removed.

## What's inside

| Page | What it does |
| --- | --- |
| `/` | Hero with reel montage, bestsellers, collections, bouquet-builder teaser, reels with real view counts, occasions, bulk orders, how to order, reviews, meet the maker, Instagram grid, FAQ |
| `/shop`, `/collections/[category]` | Full catalogue (22 products, 6 collections) with hover-to-play videos |
| `/products/[slug]` | Gallery + reel, options, personal note, add to gift bag, order on Instagram |
| `/custom-bouquet` | Interactive **Design-a-bouquet** tool with a live illustrated preview |
| `/bulk-orders` | Return gifts, stalls, corporate & reseller packs, bulk quote form |
| `/about`, `/reviews`, `/faq`, `/contact` | Story, real reviews, FAQ (with FAQ schema), contact options |

**How ordering works:** Instagram doesn't allow pre-filled DMs, so the gift bag, product pages, builder and forms turn the
order into a neat message, copy it, and open the Instagram chat — the customer just pastes and sends. If a WhatsApp number
is configured, a "Send on WhatsApp" button (pre-filled) appears everywhere too.

**The flowers:** every illustrated flower (sunflower, rose, tulip, lily, daisy, gerbera) is hand-drawn SVG in
`src/components/flowers/heads.tsx`, drawn once as a symbol and reused across the hero bouquet, footer meadow, icons and the
bouquet builder. A subtle "fuzz" filter gives them a chenille texture.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run lint
```

## Things to update before launch

1. **`.env.local`** — set `NEXT_PUBLIC_SITE_URL` to the real domain; add a WhatsApp number / email if you want those buttons.
2. **Prices** — products show "Price on request" by default. Add `price: 499` (INR) to any product in `src/data/products.ts`
   and it will appear on cards, product pages and in structured data.
3. **Business details** — founder name, city, stats and shipping cities live in `src/data/site.ts`.
4. **Copy** — the "Meet the maker" and "Our story" text are drafts written from the Instagram content; personalise them in
   `src/components/home/MeetMaker.tsx` and `src/app/about/page.tsx`.

## Editing content

- Products & categories: `src/data/products.ts`, `src/data/categories.ts`
- Reviews: `src/data/testimonials.ts` · FAQ: `src/data/faqs.ts` · Reels section: `src/data/reels.ts`
- Media manifest (sizes + blur placeholders): `src/data/media.ts`, files in `public/media/`
- Brand colours & fonts: `src/app/globals.css` (`@theme` block)

To add a new photo, drop a 1080×1350 JPG in `public/media/img/`, add an entry to `images` in `src/data/media.ts`
(for `blurDataURL` you can reuse the value from a similar photo), and reference it from a product.

## Deploying

The site is fully static (all 43 routes are prerendered), so it deploys as-is to Vercel, Netlify or any Node host.
On Vercel: import the repo, add the environment variables above, deploy, then connect the domain.
# hollydaff
