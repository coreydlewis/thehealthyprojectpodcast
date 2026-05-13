import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, L as LINKS } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Join The Healthy Project Email List", "description": "Get new episodes, public health stories, reflections, and resources sent to your inbox.", "data-astro-cid-og54zrcn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="nl-hero section-dark" data-astro-cid-og54zrcn> <div class="container container-narrow" data-astro-cid-og54zrcn> <span class="eyebrow" data-astro-cid-og54zrcn>Newsletter</span> <h1 data-astro-cid-og54zrcn>Join The Healthy Project email list</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-og54zrcn>
Get new episodes, public health stories, reflections, and resources sent to your inbox.
</p> </div> </section> <section class="section" data-astro-cid-og54zrcn> <div class="container container-narrow prose" data-astro-cid-og54zrcn> <p data-astro-cid-og54zrcn>
The Healthy Project email list is for people who care about health equity, prevention,
        community health, and the stories behind the data.
</p> <p data-astro-cid-og54zrcn>
You'll receive updates on new podcast episodes, featured conversations, resources,
        and ideas you can use in your work.
</p> </div> </section> <section class="section section-alt" data-astro-cid-og54zrcn> <div class="container container-narrow" data-astro-cid-og54zrcn> <form class="form-grid nl-page-form" name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks/?form=newsletter" data-astro-cid-og54zrcn> <input type="hidden" name="form-name" value="newsletter" data-astro-cid-og54zrcn> <p class="hp-field" data-astro-cid-og54zrcn><label data-astro-cid-og54zrcn>Don't fill this out: <input name="bot-field" data-astro-cid-og54zrcn></label></p> <div class="form-row" data-astro-cid-og54zrcn> <div class="field" data-astro-cid-og54zrcn> <label for="np-first" data-astro-cid-og54zrcn>First Name</label> <input id="np-first" type="text" name="first_name" autocomplete="given-name" required data-astro-cid-og54zrcn> </div> <div class="field" data-astro-cid-og54zrcn> <label for="np-email" data-astro-cid-og54zrcn>Email Address</label> <input id="np-email" type="email" name="email" autocomplete="email" required data-astro-cid-og54zrcn> </div> </div> <div data-astro-cid-og54zrcn> <button type="submit" class="btn btn-accent" data-astro-cid-og54zrcn>Join the List</button> </div> <p class="form-note" data-astro-cid-og54zrcn>
Already on Substack? <a${addAttribute(LINKS.substack, "href")} target="_blank" rel="noopener" data-astro-cid-og54zrcn>Subscribe over there</a> instead.
</p> </form> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/newsletter.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/newsletter.astro";
const $$url = "/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newsletter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
