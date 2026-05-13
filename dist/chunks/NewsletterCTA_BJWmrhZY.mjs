import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import 'clsx';
import { L as LINKS } from './BaseLayout_Cf86Ed6W.mjs';
/* empty css                         */

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$NewsletterCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsletterCTA;
  const { variant = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["newsletter-cta", variant], "class:list")} data-astro-cid-6zkp5hrb> <div class="container nl-inner" data-astro-cid-6zkp5hrb> <div class="nl-copy" data-astro-cid-6zkp5hrb> <span class="eyebrow" data-astro-cid-6zkp5hrb>Newsletter</span> <h2 data-astro-cid-6zkp5hrb>Get new episodes and public health stories in your inbox.</h2> <p data-astro-cid-6zkp5hrb>
Join the Healthy Project email list for new episodes, reflections,
        resources, and stories about health equity, prevention, and community health.
</p> </div> <form class="nl-form" name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks/?form=newsletter" data-astro-cid-6zkp5hrb> <input type="hidden" name="form-name" value="newsletter" data-astro-cid-6zkp5hrb> <p class="hp-field" data-astro-cid-6zkp5hrb><label data-astro-cid-6zkp5hrb>Don't fill this out: <input name="bot-field" data-astro-cid-6zkp5hrb></label></p> <div class="form-row" data-astro-cid-6zkp5hrb> <div class="field" data-astro-cid-6zkp5hrb> <label for="nl-first" data-astro-cid-6zkp5hrb>First Name</label> <input id="nl-first" type="text" name="first_name" autocomplete="given-name" required data-astro-cid-6zkp5hrb> </div> <div class="field" data-astro-cid-6zkp5hrb> <label for="nl-email" data-astro-cid-6zkp5hrb>Email Address</label> <input id="nl-email" type="email" name="email" autocomplete="email" required data-astro-cid-6zkp5hrb> </div> </div> <div class="nl-actions" data-astro-cid-6zkp5hrb> <button type="submit" class="btn btn-accent" data-astro-cid-6zkp5hrb>Join the List</button> <a${addAttribute(LINKS.substack, "href")} target="_blank" rel="noopener" class="nl-substack" data-astro-cid-6zkp5hrb>
Or subscribe on Substack →
</a> </div> <p class="form-note" data-astro-cid-6zkp5hrb>No spam. Unsubscribe anytime.</p> </form> </div> </section> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/NewsletterCTA.astro", void 0);

export { $$NewsletterCTA as $ };
