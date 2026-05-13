import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import 'clsx';
import { L as LINKS } from './BaseLayout_Cf86Ed6W.mjs';
/* empty css                         */

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$PlatformLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlatformLinks;
  const { label = "Listen on:", variant = "default", dark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["platform-links", variant, { dark }], "class:list")} data-astro-cid-srafodzh> <span class="platform-label" data-astro-cid-srafodzh>${label}</span> <ul data-astro-cid-srafodzh> <li data-astro-cid-srafodzh><a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" data-astro-cid-srafodzh>Apple Podcasts</a></li> <li data-astro-cid-srafodzh><a${addAttribute(LINKS.spotify, "href")} target="_blank" rel="noopener" data-astro-cid-srafodzh>Spotify</a></li> <li data-astro-cid-srafodzh><a${addAttribute(LINKS.youtube, "href")} target="_blank" rel="noopener" data-astro-cid-srafodzh>YouTube</a></li> <li data-astro-cid-srafodzh><a${addAttribute(LINKS.rss, "href")} target="_blank" rel="noopener" data-astro-cid-srafodzh>RSS</a></li> </ul> </div> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/PlatformLinks.astro", void 0);

export { $$PlatformLinks as $ };
