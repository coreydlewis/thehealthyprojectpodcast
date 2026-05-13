import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, L as LINKS, S as SITE } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
import { $ as $$PlatformLinks } from '../chunks/PlatformLinks_208W2KsA.mjs';
/* empty css                                 */
import { g as getAllEpisodes, $ as $$EpisodeCard } from '../chunks/episodes_yNC0jt3r.mjs';
import { $ as $$NewsletterCTA } from '../chunks/NewsletterCTA_BJWmrhZY.mjs';
import { $ as $$ReviewCTA } from '../chunks/ReviewCTA_DqjpzEQ4.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$EpisodePlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EpisodePlayer;
  const { episode, showPlatforms = true, compact = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["episode-player", { compact }], "class:list")} data-astro-cid-idjyc4ad> <div class="ep-artwork" data-astro-cid-idjyc4ad> ${episode.imageUrl && renderTemplate`<img${addAttribute(episode.imageUrl, "src")}${addAttribute(`Artwork for ${episode.title}`, "alt")} width="320" height="320" loading="lazy" data-astro-cid-idjyc4ad>`} </div> <div class="ep-body" data-astro-cid-idjyc4ad> <div class="ep-meta" data-astro-cid-idjyc4ad> ${episode.number && renderTemplate`<span class="ep-number" data-astro-cid-idjyc4ad>Episode ${episode.number}</span>`} <span class="ep-date" data-astro-cid-idjyc4ad>${episode.pubDateDisplay}</span> ${episode.durationDisplay && renderTemplate`<span class="ep-duration" data-astro-cid-idjyc4ad>${episode.durationDisplay}</span>`} </div> <h3 class="ep-title" data-astro-cid-idjyc4ad>${episode.title}</h3> <p class="ep-excerpt" data-astro-cid-idjyc4ad>${episode.excerpt}</p> ${episode.audioUrl ? renderTemplate`<audio controls preload="none" class="ep-audio"${addAttribute(episode.audioUrl, "src")} data-astro-cid-idjyc4ad>
Your browser does not support the audio element.
<a${addAttribute(episode.audioUrl, "href")} data-astro-cid-idjyc4ad>Download the audio</a> </audio>` : renderTemplate`<p class="muted" data-astro-cid-idjyc4ad>Audio is loading… check back shortly.</p>`} <div class="ep-cta" data-astro-cid-idjyc4ad> <a${addAttribute(episode.url, "href")} class="btn btn-ghost" data-astro-cid-idjyc4ad>View Show Notes</a> </div> ${showPlatforms && renderTemplate`<div class="ep-platforms" data-astro-cid-idjyc4ad> ${renderComponent($$result, "PlatformLinks", $$PlatformLinks, { "variant": "compact", "data-astro-cid-idjyc4ad": true })} </div>`} </div> </article> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/EpisodePlayer.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const all = await getAllEpisodes();
  const latest = all[0] || null;
  const featured = all.slice(1, 5);
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: SITE.title,
    description: SITE.tagline,
    url: SITE.url,
    author: { "@type": "Person", name: SITE.host },
    webFeed: LINKS.rss
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Public Health, Health Equity & Community Stories", "description": "A documentary-style audio archive of how communities confront structural health inequities. Hosted by Corey Dion Lewis.", "schema": podcastSchema, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="hero section-dark" data-astro-cid-j7pv25f6> <div class="container hero-inner" data-astro-cid-j7pv25f6> <div class="hero-text" data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>The Healthy Project Podcast</span> <h1 data-astro-cid-j7pv25f6>Public health, told through the people doing the work.</h1> <p class="hero-tagline" data-astro-cid-j7pv25f6>
A documentary-style audio archive of how communities confront structural health inequities.
</p> <p class="hero-body" data-astro-cid-j7pv25f6>
Hosted by Corey Dion Lewis, the show shares conversations with public health leaders,
          community advocates, researchers, clinicians, and everyday changemakers working to
          build healthier communities. This is where public health meets storytelling, culture,
          prevention, and lived experience.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> ${latest ? renderTemplate`<a${addAttribute(latest.url, "href")} class="btn btn-accent" data-astro-cid-j7pv25f6>Listen to Latest Episode</a>` : renderTemplate`<a href="/episodes" class="btn btn-accent" data-astro-cid-j7pv25f6>Browse Episodes</a>`} <a href="/episodes" class="btn btn-ghost-light" data-astro-cid-j7pv25f6>Browse Episodes</a> <a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" class="btn btn-ghost-light" data-astro-cid-j7pv25f6>Leave a Review</a> <a href="/partner" class="btn btn-ghost-light" data-astro-cid-j7pv25f6>Partner With Us</a> </div> <div class="hero-platforms" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PlatformLinks", $$PlatformLinks, { "dark": true, "label": "Listen on:", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="hero-visual" aria-hidden="true" data-astro-cid-j7pv25f6> ${latest?.imageUrl && renderTemplate`<img${addAttribute(latest.imageUrl, "src")} alt="" width="500" height="500" data-astro-cid-j7pv25f6>`} <div class="hero-visual-stamp" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Documentary-style</span> <span data-astro-cid-j7pv25f6>Public health</span> <span data-astro-cid-j7pv25f6>Community voice</span> </div> </div> </div> </section>  ${latest && renderTemplate`<section class="section" id="latest" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>Latest Episode</span> <h2 data-astro-cid-j7pv25f6>Listen to the latest episode</h2> <p data-astro-cid-j7pv25f6>Press play and hear the newest conversation from The Healthy Project Podcast.</p> </div> ${renderComponent($$result2, "EpisodePlayer", $$EpisodePlayer, { "episode": latest, "data-astro-cid-j7pv25f6": true })} </div> </section>`} <section class="section section-alt" data-astro-cid-j7pv25f6> <div class="container about-grid" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>About the show</span> <h2 data-astro-cid-j7pv25f6>Stories that make public health human.</h2> </div> <div data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
The Healthy Project Podcast explores the people, policies, systems, and community
          efforts shaping health outcomes. Each episode goes beyond surface-level wellness talk.
          We look at the conditions that impact how people live, work, heal, and access care.
</p> <p data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Topics include:</strong></p> <ul class="topics-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Health equity</li> <li data-astro-cid-j7pv25f6>Social determinants of health</li> <li data-astro-cid-j7pv25f6>Community health</li> <li data-astro-cid-j7pv25f6>Prevention</li> <li data-astro-cid-j7pv25f6>Mental health</li> <li data-astro-cid-j7pv25f6>Chronic disease</li> <li data-astro-cid-j7pv25f6>Food access</li> <li data-astro-cid-j7pv25f6>Public health leadership</li> <li data-astro-cid-j7pv25f6>Culture and storytelling</li> </ul> <a href="/about" class="btn btn-primary" data-astro-cid-j7pv25f6>Learn More About the Show</a> </div> </div> </section>  <section class="section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-head center" data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>What we talk about</span> <h2 data-astro-cid-j7pv25f6>Four threads that run through the show.</h2> </div> <div class="topics-grid" data-astro-cid-j7pv25f6> <article class="topic-card" data-astro-cid-j7pv25f6> <div class="topic-num" data-astro-cid-j7pv25f6>01</div> <h3 data-astro-cid-j7pv25f6>Health Equity</h3> <p data-astro-cid-j7pv25f6>Conversations about justice, access, and the systems that shape health.</p> </article> <article class="topic-card" data-astro-cid-j7pv25f6> <div class="topic-num" data-astro-cid-j7pv25f6>02</div> <h3 data-astro-cid-j7pv25f6>Community Health</h3> <p data-astro-cid-j7pv25f6>Stories from the people doing the work inside neighborhoods, clinics, nonprofits, and public health organizations.</p> </article> <article class="topic-card" data-astro-cid-j7pv25f6> <div class="topic-num" data-astro-cid-j7pv25f6>03</div> <h3 data-astro-cid-j7pv25f6>Prevention</h3> <p data-astro-cid-j7pv25f6>Practical conversations about helping people live healthier lives before a crisis happens.</p> </article> <article class="topic-card" data-astro-cid-j7pv25f6> <div class="topic-num" data-astro-cid-j7pv25f6>04</div> <h3 data-astro-cid-j7pv25f6>Culture &amp; Storytelling</h3> <p data-astro-cid-j7pv25f6>Public health told through lived experience, creativity, identity, and community voice.</p> </article> </div> </div> </section>  ${featured.length > 0 && renderTemplate`<section class="section section-alt" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>Recent conversations</span> <h2 data-astro-cid-j7pv25f6>More from the archive</h2> </div> <div class="ep-grid" data-astro-cid-j7pv25f6> ${featured.map((ep) => renderTemplate`${renderComponent($$result2, "EpisodeCard", $$EpisodeCard, { "episode": ep, "data-astro-cid-j7pv25f6": true })}`)} </div> <div class="section-cta" data-astro-cid-j7pv25f6> <a href="/episodes" class="btn btn-ghost" data-astro-cid-j7pv25f6>Browse All Episodes</a> </div> </div> </section>`} <section class="section section-dark" data-astro-cid-j7pv25f6> <div class="container social-proof" data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>A trusted voice in public health media</span> <h2 data-astro-cid-j7pv25f6>Featured conversations with leaders across public health and community.</h2> <p data-astro-cid-j7pv25f6>
The Healthy Project Podcast has featured conversations with national public health
        leaders, healthcare executives, community advocates, researchers, and storytellers
        working to improve health outcomes.
</p> <ul class="proof-stats" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Top 200</strong> <span data-astro-cid-j7pv25f6>US Medicine — Apple Podcasts</span> </li> <li data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Top 5</strong> <span data-astro-cid-j7pv25f6>Health Policy</span> </li> <li data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Top 2</strong> <span data-astro-cid-j7pv25f6>Global Health</span> </li> <li data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>194+</strong> <span data-astro-cid-j7pv25f6>Episodes published</span> </li> </ul> <div class="proof-cta" data-astro-cid-j7pv25f6> <a href="/invite-corey" class="btn btn-accent" data-astro-cid-j7pv25f6>Invite Corey to Speak</a> </div> </div> </section>  ${renderComponent($$result2, "ReviewCTA", $$ReviewCTA, { "data-astro-cid-j7pv25f6": true })}  <section class="section partner-cta" data-astro-cid-j7pv25f6> <div class="container partner-inner" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <span class="eyebrow" data-astro-cid-j7pv25f6>Partner with us</span> <h2 data-astro-cid-j7pv25f6>Reach an audience that cares about health, equity, and community.</h2> <p data-astro-cid-j7pv25f6>
The Healthy Project Podcast connects with public health professionals, healthcare leaders,
          community advocates, nonprofits, educators, and students working to improve health outcomes.
</p> </div> <div class="partner-actions" data-astro-cid-j7pv25f6> <a href="/partner" class="btn btn-primary" data-astro-cid-j7pv25f6>Explore Partnerships</a> <a href="/contact" class="btn btn-ghost" data-astro-cid-j7pv25f6>Send a Message</a> </div> </div> </section>  ${renderComponent($$result2, "NewsletterCTA", $$NewsletterCTA, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/index.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
