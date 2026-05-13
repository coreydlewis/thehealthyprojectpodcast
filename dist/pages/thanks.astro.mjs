import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, L as LINKS } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$Thanks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  const url = new URL(Astro2.request.url);
  const form = url.searchParams.get("form") || "";
  const messages = {
    contact: {
      headline: "Thanks for reaching out.",
      copy: "Your message has been received. We'll respond as soon as we can \u2014 usually within a few business days."
    },
    newsletter: {
      headline: "You're on the list.",
      copy: "Thanks for being part of The Healthy Project community. Look out for the next episode in your inbox."
    },
    partner: {
      headline: "Partnership inquiry received.",
      copy: "Thanks for your interest in partnering with The Healthy Project Podcast. We'll be in touch about next steps."
    },
    speaking: {
      headline: "Speaking inquiry received.",
      copy: "Thanks for considering Corey for your event. We'll review the details and respond shortly."
    },
    guest: {
      headline: "Guest pitch received.",
      copy: "Thanks for sharing this. We read every pitch and will be in touch if it's a fit for an upcoming episode."
    },
    "reviews-note": {
      headline: "Thank you for sharing this.",
      copy: "Your words help shape future episodes. Now if you have a minute, leave a public review on Apple Podcasts.",
      cta: { href: LINKS.applePodcasts, label: "Leave a Review on Apple Podcasts", ext: true }
    }
  };
  const m = messages[form] || {
    headline: "Thanks!",
    copy: "Your submission has been received."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank you", "description": "Thanks for getting in touch with The Healthy Project Podcast.", "data-astro-cid-pxt24rmx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="thanks section-dark" data-astro-cid-pxt24rmx> <div class="container container-narrow" data-astro-cid-pxt24rmx> <span class="eyebrow" data-astro-cid-pxt24rmx>Thank you</span> <h1 data-astro-cid-pxt24rmx>${m.headline}</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-pxt24rmx>${m.copy}</p> <div class="thanks-actions" data-astro-cid-pxt24rmx> ${m.cta ? m.cta.ext ? renderTemplate`<a${addAttribute(m.cta.href, "href")} target="_blank" rel="noopener" class="btn btn-accent" data-astro-cid-pxt24rmx>${m.cta.label}</a>` : renderTemplate`<a${addAttribute(m.cta.href, "href")} class="btn btn-accent" data-astro-cid-pxt24rmx>${m.cta.label}</a>` : null} <a href="/" class="btn btn-ghost-light" data-astro-cid-pxt24rmx>Return Home</a> <a href="/episodes" class="btn btn-ghost-light" data-astro-cid-pxt24rmx>Browse Episodes</a> </div> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/thanks.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/thanks.astro";
const $$url = "/thanks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Thanks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
