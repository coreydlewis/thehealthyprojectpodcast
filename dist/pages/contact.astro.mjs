import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, S as SITE, L as LINKS } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Have a guest idea, partnership inquiry, speaking request, or message about The Healthy Project Podcast? Get in touch.", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact-hero section-dark" data-astro-cid-uw5kdbxl> <div class="container container-narrow" data-astro-cid-uw5kdbxl> <span class="eyebrow" data-astro-cid-uw5kdbxl>Contact</span> <h1 data-astro-cid-uw5kdbxl>Contact The Healthy Project Podcast</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-uw5kdbxl>
Have a guest idea, partnership inquiry, speaking request, or message about the show? Send it here.
</p> </div> </section> <section class="section" data-astro-cid-uw5kdbxl> <div class="container container-narrow contact-grid" data-astro-cid-uw5kdbxl> <div class="contact-info" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Get in touch</h2> <p data-astro-cid-uw5kdbxl>
Use the form to reach Corey directly. If you'd prefer email, we read everything sent to
<a${addAttribute(`mailto:${SITE.email}`, "href")} data-astro-cid-uw5kdbxl>${SITE.email}</a>.
</p> <h4 data-astro-cid-uw5kdbxl>Looking for something specific?</h4> <ul class="contact-links" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl><a href="/partner" data-astro-cid-uw5kdbxl>Partnership &amp; sponsorship inquiries →</a></li> <li data-astro-cid-uw5kdbxl><a href="/invite-corey" data-astro-cid-uw5kdbxl>Speaking inquiries →</a></li> <li data-astro-cid-uw5kdbxl><a href="/guest" data-astro-cid-uw5kdbxl>Pitch yourself as a guest →</a></li> <li data-astro-cid-uw5kdbxl><a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" data-astro-cid-uw5kdbxl>Leave an Apple Podcasts review →</a></li> </ul> </div> <form class="form-grid contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks/?form=contact" data-astro-cid-uw5kdbxl> <input type="hidden" name="form-name" value="contact" data-astro-cid-uw5kdbxl> <p class="hp-field" data-astro-cid-uw5kdbxl><label data-astro-cid-uw5kdbxl>Don't fill this out: <input name="bot-field" data-astro-cid-uw5kdbxl></label></p> <div class="form-row" data-astro-cid-uw5kdbxl> <div class="field" data-astro-cid-uw5kdbxl> <label for="c-name" data-astro-cid-uw5kdbxl>Name</label> <input id="c-name" type="text" name="name" required data-astro-cid-uw5kdbxl> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="c-email" data-astro-cid-uw5kdbxl>Email</label> <input id="c-email" type="email" name="email" required data-astro-cid-uw5kdbxl> </div> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="c-reason" data-astro-cid-uw5kdbxl>Reason for reaching out</label> <select id="c-reason" name="reason" required data-astro-cid-uw5kdbxl> <option value="" data-astro-cid-uw5kdbxl>Choose a reason</option> <option data-astro-cid-uw5kdbxl>Guest suggestion</option> <option data-astro-cid-uw5kdbxl>Sponsorship</option> <option data-astro-cid-uw5kdbxl>Speaking</option> <option data-astro-cid-uw5kdbxl>Media inquiry</option> <option data-astro-cid-uw5kdbxl>General message</option> </select> </div> <div class="field" data-astro-cid-uw5kdbxl> <label for="c-msg" data-astro-cid-uw5kdbxl>Message</label> <textarea id="c-msg" name="message" required data-astro-cid-uw5kdbxl></textarea> </div> <div data-astro-cid-uw5kdbxl> <button type="submit" class="btn btn-primary" data-astro-cid-uw5kdbxl>Send Message</button> </div> <p class="form-note" data-astro-cid-uw5kdbxl>We'll respond as soon as we can — usually within a few business days.</p> </form> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/contact.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
