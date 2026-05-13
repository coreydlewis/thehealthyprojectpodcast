import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, u as unescapeHTML, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_D57DNOQO.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro("https://thehealthyprojectpodcast.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname;
  const isActive = (href) => {
    if (href === "/") return path === "/" || path === "";
    return path === href || path.startsWith(href + "/") || path === href.replace(/\/$/, "");
  };
  const nav = [
    { href: "/", label: "Home" },
    { href: "/episodes", label: "Episodes" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/partner", label: "Partner" },
    { href: "/invite-corey", label: "Invite Corey" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <a href="/" class="brand" aria-label="The Healthy Project Podcast — home" data-astro-cid-3ef6ksr2> <span class="brand-mark" aria-hidden="true" data-astro-cid-3ef6ksr2>THP</span> <span class="brand-text" data-astro-cid-3ef6ksr2> <span class="brand-line-1" data-astro-cid-3ef6ksr2>The Healthy Project</span> <span class="brand-line-2" data-astro-cid-3ef6ksr2>Podcast</span> </span> </a> <button id="navToggle" class="nav-toggle" aria-expanded="false" aria-controls="primaryNav" aria-label="Toggle navigation" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span><span data-astro-cid-3ef6ksr2></span><span data-astro-cid-3ef6ksr2></span> </button> <nav id="primaryNav" class="primary-nav" aria-label="Primary" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${nav.map((item) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(item.href, "href")}${addAttribute(["nav-link", { active: isActive(item.href) }], "class:list")} data-astro-cid-3ef6ksr2> ${item.label} </a> </li>`)} </ul> </nav> </div> </header>  `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/Header.astro", void 0);

const LINKS = {
  applePodcasts: "https://podcasts.apple.com/us/podcast/the-healthy-project-podcast/id1511576357",
  spotify: "https://open.spotify.com/show/0vMmxPMyUp5a8WzUwYyWMy",
  youtube: "https://www.youtube.com/channel/UCpPV68YUvIpo4q2-vvBK7Pw",
  rss: "https://feeds.transistor.fm/the-healthy-project-podcast",
  substack: "https://substack.com/@coreydionlewis",
  linkedin: "https://www.linkedin.com/company/the-healthy-project/?viewAsMember=true",
  instagram: "https://www.instagram.com/healthyprojectpod/"
};
const SITE = {
  title: "The Healthy Project Podcast",
  url: "https://thehealthyprojectpodcast.com",
  host: "Corey Dion Lewis",
  tagline: "A documentary-style audio archive of how communities confront structural health inequities.",
  description: "Hosted by Corey Dion Lewis, The Healthy Project Podcast shares conversations with public health leaders, community advocates, researchers, clinicians, and everyday changemakers working to build healthier communities.",
  email: "corey@healthyprojectmedia.com"
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>The Healthy Project Podcast</h3> <p data-astro-cid-sz7xmlte>${SITE.tagline}</p> <p class="footer-host" data-astro-cid-sz7xmlte>Hosted by Corey Dion Lewis</p> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Listen</h4> <ul class="footer-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Apple Podcasts</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.spotify, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Spotify</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.youtube, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>YouTube</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.rss, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>RSS Feed</a></li> </ul> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Follow</h4> <ul class="footer-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.linkedin, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>LinkedIn</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.instagram, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Instagram</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(LINKS.substack, "href")} target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Substack Newsletter</a></li> </ul> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Connect</h4> <ul class="footer-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/contact" data-astro-cid-sz7xmlte>Contact</a></li> <li data-astro-cid-sz7xmlte><a href="/partner" data-astro-cid-sz7xmlte>Partner With Us</a></li> <li data-astro-cid-sz7xmlte><a href="/invite-corey" data-astro-cid-sz7xmlte>Invite Corey to Speak</a></li> <li data-astro-cid-sz7xmlte><a href="/guest" data-astro-cid-sz7xmlte>Be a Guest</a></li> <li data-astro-cid-sz7xmlte><a href="/newsletter" data-astro-cid-sz7xmlte>Newsletter</a></li> <li data-astro-cid-sz7xmlte><a href="/privacy" data-astro-cid-sz7xmlte>Privacy Policy</a></li> </ul> </div> </div> <div class="footer-meta" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>© ${year} Healthy Project Media. All rights reserved.</span> <span data-astro-cid-sz7xmlte>Made with care in Des Moines, Iowa.</span> </div> </div> </footer> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = SITE.description,
    ogImage = "/og-image.svg",
    canonical,
    schema
  } = Astro2.props;
  const pageTitle = title ? `${title} | ${SITE.title}` : SITE.title;
  const canonicalUrl = canonical || new URL(Astro2.url.pathname, SITE.url).toString();
  const schemaJson = schema ? JSON.stringify(Array.isArray(schema) ? schema : [schema]) : null;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(new URL(ogImage, SITE.url).toString(), "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(new URL(ogImage, SITE.url).toString(), "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate" type="application/rss+xml" title="The Healthy Project Podcast" href="https://feeds.transistor.fm/the-healthy-project-podcast"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap">${schemaJson && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson))}${renderHead()}</head> <body> <a href="#main" class="skip-link">Skip to content</a> ${renderComponent($$result, "Header", $$Header, {})} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, LINKS as L, SITE as S };
