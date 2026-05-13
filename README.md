# The Healthy Project Podcast — Website

A modern, editorial podcast website for **The Healthy Project Podcast**, hosted by Corey Dion Lewis.
Built with [Astro](https://astro.build), deployed to [Netlify](https://www.netlify.com/), and powered by your existing podcast RSS feed.

The site is a static-site generator project — every page is pre-built as plain HTML at deploy time, so it loads fast and ranks well in search. When you publish a new episode in Transistor, Netlify rebuilds the site and the new episode appears automatically.

---

## What's included

10 pages, fully wired up to your RSS feed:

- **Home** — hero, latest episode player, about, featured topics, recent episodes, social proof, review CTA, partner CTA, newsletter signup
- **Episodes** — searchable, filterable archive of every episode
- **Episode detail** (`/episodes/[slug]`) — auto-generated for every episode in your feed, with player, show notes, share buttons, related episodes, and prev/next navigation
- **About** — show mission and host bio
- **Reviews** — instructions for Apple Podcasts review + optional on-site testimonial form
- **Partner** — sponsorship options and partnership inquiry form
- **Invite Corey** — speaking topics and booking form
- **Contact** — general inquiry form
- **Guest** — guest pitch form
- **Newsletter** — Substack-aware signup form
- **Thank you / 404 / Privacy** — supporting pages

All 6 forms (contact, partner, speaking, guest, reviews-note, newsletter) submit to **Netlify Forms** — submissions appear in your Netlify dashboard and a copy is emailed to you.

---

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:4321> in your browser.

The dev server reads your RSS feed (`https://feeds.transistor.fm/the-healthy-project-podcast`) every time you load a page in dev. If you're offline, the site still builds — episode pages will just be empty until the feed loads.

To produce the production build:

```bash
npm run build
```

The output goes to `dist/`.

---

## Deploy to Netlify

You can deploy two ways:

### Option A — Git-based (recommended)

1. Push this folder to a GitHub / GitLab / Bitbucket repo.
2. In Netlify, click **Add new site → Import an existing project**.
3. Pick your repo. Netlify will autodetect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`
4. Click **Deploy**. The first build will take ~1 minute.
5. In **Site settings → Domain management**, point your custom domain at the site.

### Option B — Drag and drop

1. Run `npm run build` locally.
2. Drag the resulting `dist/` folder onto <https://app.netlify.com/drop>.

(Drag-and-drop won't auto-rebuild when you publish a new episode — use Option A for that.)

---

## How "new episode" auto-updates work

Static sites are pre-built, so they don't naturally pick up new RSS items. To get the latest episode showing up automatically when you publish, set up a **build hook**:

1. In Netlify → **Site settings → Build & deploy → Build hooks** → click **Add build hook**.
2. Name it "Transistor publish", give it the `main` branch.
3. Copy the URL it gives you.
4. In Transistor → **Settings → Integrations** (or **Webhooks**), add a webhook that pings that URL when an episode publishes.

If you don't want to wire up a webhook, you can also just trigger **Deploys → Trigger deploy** in Netlify whenever you want a refresh. Or set up a daily scheduled rebuild from Netlify's **Scheduled builds** feature.

---

## Forms (Netlify Forms)

Each form has `data-netlify="true"` and is also pre-declared in `/public/__forms.html` (Netlify's bot scanner picks them up from there even when Astro compiles them at build time).

In Netlify → **Site → Forms**, you'll see incoming submissions for:

- `contact`
- `newsletter`
- `partner`
- `speaking`
- `guest`
- `reviews-note`

To get email notifications: **Site settings → Forms → Notifications → Add notification → Email notification**.

Free Netlify accounts include 100 submissions/month. Above that, forms are a paid add-on.

---

## Customization guide

### Update the host photo

Replace `public/images/corey-placeholder.svg` with a real portrait photo. Save it as `corey.jpg` (or whatever extension) at a roughly 4:5 aspect ratio, then update the `src` in `src/pages/about.astro` to point to the new file.

### Update the Open Graph (social share) image

Replace `public/og-image.svg` with a 1200×630 PNG of your design. PNG is preferred for compatibility with LinkedIn / Facebook / X. If you keep PNG, also update the reference in `src/layouts/BaseLayout.astro` from `og-image.svg` to `og-image.png`.

### Update social/platform links

Edit `src/lib/links.ts`. Everything else in the site reads from there.

### Update colors / fonts

Edit the CSS variables at the top of `src/styles/global.css`. The palette is currently:

| Token | Value | Where it shows |
|---|---|---|
| `--bg` | `#F5F0E6` | Cream page background |
| `--bg-alt` | `#EDE5D5` | Alternate section background |
| `--bg-deep` | `#1F1814` | Dark hero / footer |
| `--ink` | `#1A1410` | Body text & primary buttons |
| `--gold` | `#C8932B` | Accents, eyebrows, CTAs |
| `--clay` | `#B8543A` | Hover state, secondary accent |
| `--green` | `#2D4A3E` | Optional secondary |

Fonts are loaded from Google Fonts in `src/layouts/BaseLayout.astro`. Currently:
- **Display**: Fraunces (editorial serif)
- **Body**: Inter (clean sans)

### Edit page copy

Each page lives at `src/pages/*.astro`. The HTML and copy are right there — edit freely.

### Adjust episode topic categories

Episode tags ("Health Equity", "Community Health", etc.) are inferred from your iTunes keywords and episode content. The mapping lives in `src/lib/episodes.ts` under `TOPIC_MAP`. Add a new topic or change the matching keywords there.

---

## SEO

- Each episode page generates **PodcastEpisode JSON-LD schema** with title, audio URL, duration, date, and image.
- The home page generates **PodcastSeries** schema.
- Each page has a unique `<title>`, meta description, Open Graph tags, and canonical URL.
- The RSS feed is linked from `<head>` so feed readers can discover it.

To add a sitemap, install `@astrojs/sitemap`:

```bash
npm install @astrojs/sitemap
```

Then in `astro.config.mjs`:

```js
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://thehealthyprojectpodcast.com',
  integrations: [sitemap()]
});
```

---

## Project layout

```
.
├── astro.config.mjs           Astro config (site URL, output mode)
├── netlify.toml               Netlify build & header config
├── package.json
├── public/                    Static assets served as-is at site root
│   ├── __forms.html           Netlify Forms detection
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/
└── src/
    ├── components/            Reusable UI
    │   ├── EpisodeCard.astro
    │   ├── EpisodePlayer.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── NewsletterCTA.astro
    │   ├── PlatformLinks.astro
    │   ├── ReviewCTA.astro
    │   └── ShareRow.astro
    ├── layouts/
    │   └── BaseLayout.astro   HTML shell, fonts, SEO meta
    ├── lib/
    │   ├── episodes.ts        RSS feed loader + parser
    │   └── links.ts           Centralized external links
    ├── pages/                 Each .astro file = a route
    │   ├── 404.astro
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── episodes/
    │   │   ├── [slug].astro   Dynamic — one page per episode
    │   │   └── index.astro
    │   ├── guest.astro
    │   ├── index.astro        Home
    │   ├── invite-corey.astro
    │   ├── newsletter.astro
    │   ├── partner.astro
    │   ├── privacy.astro
    │   ├── reviews.astro
    │   └── thanks.astro
    └── styles/
        └── global.css         Design tokens, layout, components
```

---

## License & credits

© Healthy Project Media. Site built with Astro. Audio hosted by Transistor.fm.
