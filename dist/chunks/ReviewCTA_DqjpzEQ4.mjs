import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import 'clsx';
import { L as LINKS } from './BaseLayout_Cf86Ed6W.mjs';
/* empty css                         */

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$ReviewCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReviewCTA;
  const {
    variant = "default",
    headline = "Enjoying the podcast?",
    copy = "Your review helps more people discover these conversations. Take 60 seconds to rate and review The Healthy Project Podcast on Apple Podcasts."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["review-cta", variant], "class:list")} data-astro-cid-pib3pbbl> <div class="container review-inner" data-astro-cid-pib3pbbl> <div data-astro-cid-pib3pbbl> <span class="eyebrow" data-astro-cid-pib3pbbl>Show some love</span> <h2 data-astro-cid-pib3pbbl>${headline}</h2> <p data-astro-cid-pib3pbbl>${copy}</p> </div> <div class="review-actions" data-astro-cid-pib3pbbl> <a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" class="btn btn-accent" data-astro-cid-pib3pbbl>
Leave a Review on Apple Podcasts
</a> <a href="/reviews" class="btn btn-ghost" data-astro-cid-pib3pbbl>How to Review</a> </div> </div> </section> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/ReviewCTA.astro", void 0);

export { $$ReviewCTA as $ };
