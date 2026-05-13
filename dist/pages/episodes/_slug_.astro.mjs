import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout, L as LINKS } from '../../chunks/BaseLayout_Cf86Ed6W.mjs';
import { $ as $$PlatformLinks } from '../../chunks/PlatformLinks_208W2KsA.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$ReviewCTA } from '../../chunks/ReviewCTA_DqjpzEQ4.mjs';
import { g as getAllEpisodes, $ as $$EpisodeCard } from '../../chunks/episodes_yNC0jt3r.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://thehealthyprojectpodcast.com");
const $$ShareRow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShareRow;
  const { title, url } = Astro2.props;
  const fullUrl = url.startsWith("http") ? url : new URL(url, SITE.url).toString();
  const enc = (s) => encodeURIComponent(s);
  return renderTemplate`${maybeRenderHead()}<div class="share-row"${addAttribute(fullUrl, "data-url")} data-astro-cid-mvunddqi> <a target="_blank" rel="noopener" class="share-btn"${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${enc(fullUrl)}`, "href")} data-astro-cid-mvunddqi>LinkedIn</a> <a target="_blank" rel="noopener" class="share-btn"${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${enc(fullUrl)}`, "href")} data-astro-cid-mvunddqi>Facebook</a> <a target="_blank" rel="noopener" class="share-btn"${addAttribute(`https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(fullUrl)}`, "href")} data-astro-cid-mvunddqi>X (Twitter)</a> <button type="button" class="share-btn copy-link"${addAttribute(fullUrl, "data-copy")} data-astro-cid-mvunddqi>Copy Link</button> </div>  `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/ShareRow.astro", void 0);

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
async function getStaticPaths() {
  const episodes = await getAllEpisodes();
  return episodes.map((ep, i) => ({
    params: { slug: ep.slug },
    props: { episode: ep, index: i, total: episodes.length }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { episode, index, total } = Astro2.props;
  const all = await getAllEpisodes();
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < total - 1 ? all[index + 1] : null;
  const related = all.filter((e) => e.slug !== episode.slug && e.categories.some((c) => episode.categories.includes(c))).slice(0, 3);
  const metaDesc = episode.excerpt.length > 30 ? episode.excerpt.substring(0, 200) : `${episode.title} \u2014 The Healthy Project Podcast with Corey Dion Lewis.`;
  const episodeSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    url: new URL(episode.url, SITE.url).toString(),
    name: episode.title,
    datePublished: episode.pubDate.toISOString(),
    description: metaDesc,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: SITE.title,
      url: SITE.url
    }
  };
  if (episode.audioUrl) {
    episodeSchema.associatedMedia = {
      "@type": "MediaObject",
      contentUrl: episode.audioUrl
    };
  }
  if (episode.durationSeconds) {
    const mins = Math.round(episode.durationSeconds / 60);
    episodeSchema.duration = `PT${mins}M`;
  }
  if (episode.imageUrl) episodeSchema.image = episode.imageUrl;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": episode.title, "description": metaDesc, "ogImage": episode.imageUrl || "/og-image.png", "schema": episodeSchema, "data-astro-cid-enwiotqv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="episode-page" data-astro-cid-enwiotqv> <!-- Header --> <header class="ep-hero section-dark" data-astro-cid-enwiotqv> <div class="container ep-hero-inner" data-astro-cid-enwiotqv> <div class="ep-hero-text" data-astro-cid-enwiotqv> <a href="/episodes" class="back-link" data-astro-cid-enwiotqv>← All Episodes</a> <div class="ep-meta-row" data-astro-cid-enwiotqv> ${episode.number && renderTemplate`<span class="ep-num" data-astro-cid-enwiotqv>Episode ${episode.number}</span>`} <span data-astro-cid-enwiotqv>${episode.pubDateDisplay}</span> ${episode.durationDisplay && renderTemplate`<span data-astro-cid-enwiotqv>${episode.durationDisplay}</span>`} </div> <h1 data-astro-cid-enwiotqv>${episode.title}</h1> ${episode.guest && renderTemplate`<p class="ep-guest-line" data-astro-cid-enwiotqv>A conversation with ${episode.guest}</p>`} ${episode.categories.length > 0 && renderTemplate`<div class="ep-categories" data-astro-cid-enwiotqv> ${episode.categories.map((c) => renderTemplate`<span class="tag tag-on" data-astro-cid-enwiotqv>${c}</span>`)} </div>`} </div> ${episode.imageUrl && renderTemplate`<div class="ep-hero-art" data-astro-cid-enwiotqv> <img${addAttribute(episode.imageUrl, "src")}${addAttribute(`Artwork for ${episode.title}`, "alt")} width="500" height="500" data-astro-cid-enwiotqv> </div>`} </div> </header> <!-- Player --> <section class="ep-player-section" data-astro-cid-enwiotqv> <div class="container" data-astro-cid-enwiotqv> <p class="player-label" data-astro-cid-enwiotqv>Listen to the full conversation below.</p> ${episode.audioUrl ? renderTemplate`<audio controls preload="none" class="full-audio"${addAttribute(episode.audioUrl, "src")} data-astro-cid-enwiotqv>
Your browser does not support the audio element.
<a${addAttribute(episode.audioUrl, "href")} data-astro-cid-enwiotqv>Download the audio</a> </audio>` : renderTemplate`<p class="muted" data-astro-cid-enwiotqv>Audio link unavailable. <a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" data-astro-cid-enwiotqv>Listen on Apple Podcasts →</a></p>`} <div class="player-platforms" data-astro-cid-enwiotqv> ${renderComponent($$result2, "PlatformLinks", $$PlatformLinks, { "label": "Or listen on:", "data-astro-cid-enwiotqv": true })} </div> </div> </section> <!-- Show notes --> <section class="ep-notes" data-astro-cid-enwiotqv> <div class="container-narrow" data-astro-cid-enwiotqv> <h2 data-astro-cid-enwiotqv>About this episode</h2> <hr class="divider-rule" data-astro-cid-enwiotqv> <div class="prose" data-astro-cid-enwiotqv>${unescapeHTML(episode.contentHtml)}</div> </div> </section> <!-- Share --> <section class="ep-share section-alt" data-astro-cid-enwiotqv> <div class="container-narrow" data-astro-cid-enwiotqv> <h2 data-astro-cid-enwiotqv>Share this episode</h2> <p data-astro-cid-enwiotqv>Know someone who cares about this topic? Send them this conversation.</p> ${renderComponent($$result2, "ShareRow", $$ShareRow, { "title": episode.title, "url": episode.url, "data-astro-cid-enwiotqv": true })} </div> </section> <!-- Related --> ${related.length > 0 && renderTemplate`<section class="ep-related" data-astro-cid-enwiotqv> <div class="container" data-astro-cid-enwiotqv> <h2 data-astro-cid-enwiotqv>Related episodes</h2> <hr class="divider-rule" data-astro-cid-enwiotqv> <div class="related-grid" data-astro-cid-enwiotqv> ${related.map((r) => renderTemplate`${renderComponent($$result2, "EpisodeCard", $$EpisodeCard, { "episode": r, "data-astro-cid-enwiotqv": true })}`)} </div> </div> </section>`} <!-- Prev / next --> <nav class="ep-nav" aria-label="Episode navigation" data-astro-cid-enwiotqv> <div class="container ep-nav-inner" data-astro-cid-enwiotqv> ${prev ? renderTemplate`<a${addAttribute(prev.url, "href")} class="ep-nav-link" data-astro-cid-enwiotqv> <span class="ep-nav-label" data-astro-cid-enwiotqv>← Newer episode</span> <span class="ep-nav-title" data-astro-cid-enwiotqv>${prev.title}</span> </a>` : renderTemplate`<span data-astro-cid-enwiotqv></span>`} ${next ? renderTemplate`<a${addAttribute(next.url, "href")} class="ep-nav-link right" data-astro-cid-enwiotqv> <span class="ep-nav-label" data-astro-cid-enwiotqv>Older episode →</span> <span class="ep-nav-title" data-astro-cid-enwiotqv>${next.title}</span> </a>` : renderTemplate`<span data-astro-cid-enwiotqv></span>`} </div> </nav> <!-- Review CTA --> ${renderComponent($$result2, "ReviewCTA", $$ReviewCTA, { "variant": "dark", "headline": "Help more people find these conversations", "copy": "Your rating and review helps The Healthy Project Podcast reach more listeners who care about health equity and community change.", "data-astro-cid-enwiotqv": true })} </article> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/episodes/[slug].astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/episodes/[slug].astro";
const $$url = "/episodes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
