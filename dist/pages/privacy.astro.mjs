import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, S as SITE } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const updated = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy", "description": "How The Healthy Project Podcast handles your information.", "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="legal-hero section-dark" data-astro-cid-fb3qbcs3> <div class="container container-narrow" data-astro-cid-fb3qbcs3> <span class="eyebrow" data-astro-cid-fb3qbcs3>Legal</span> <h1 data-astro-cid-fb3qbcs3>Privacy Policy</h1> <p style="color: rgba(255,255,255,.7);" data-astro-cid-fb3qbcs3>Last updated: ${updated}</p> </div> </section> <section class="section" data-astro-cid-fb3qbcs3> <div class="container container-narrow prose" data-astro-cid-fb3qbcs3> <p data-astro-cid-fb3qbcs3>
This site is operated by Healthy Project Media on behalf of The Healthy Project Podcast.
        We respect your privacy and only collect information that helps us communicate with you
        about the podcast, our newsletter, and partnership inquiries.
</p> <h2 data-astro-cid-fb3qbcs3>What we collect</h2> <p data-astro-cid-fb3qbcs3>
When you submit one of the forms on this site — contact, partner, speaking, guest, newsletter,
        or reviews note — we collect the information you provide (such as name, email, organization,
        and your message). Submissions are processed through Netlify Forms.
</p> <p data-astro-cid-fb3qbcs3>
We don't sell your information, and we don't share it with third parties except as needed
        to deliver the newsletter or respond to your inquiry.
</p> <h2 data-astro-cid-fb3qbcs3>Newsletter</h2> <p data-astro-cid-fb3qbcs3>
If you join the newsletter, we'll send you new episodes and occasional reflections.
        You can unsubscribe at any time using the link at the bottom of any email.
</p> <h2 data-astro-cid-fb3qbcs3>Cookies and analytics</h2> <p data-astro-cid-fb3qbcs3>
This site uses minimal cookies for essential functionality. If we add analytics in the
        future, we'll disclose what we use here.
</p> <h2 data-astro-cid-fb3qbcs3>Embedded media</h2> <p data-astro-cid-fb3qbcs3>
Audio is delivered via our podcast host (Transistor). Visiting episode pages and pressing
        play may transfer information to Transistor or your podcast platform of choice.
</p> <h2 data-astro-cid-fb3qbcs3>Contact</h2> <p data-astro-cid-fb3qbcs3>
Questions about this policy can be sent to
<a${addAttribute(`mailto:${SITE.email}`, "href")} data-astro-cid-fb3qbcs3>${SITE.email}</a>.
</p> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/privacy.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
