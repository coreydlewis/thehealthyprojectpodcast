import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
import { $ as $$ReviewCTA } from '../chunks/ReviewCTA_DqjpzEQ4.mjs';
import { $ as $$NewsletterCTA } from '../chunks/NewsletterCTA_BJWmrhZY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About The Healthy Project Podcast", "description": "The Healthy Project Podcast is a public health show rooted in storytelling, culture, and community. Hosted by Corey Dion Lewis.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="about-hero section-dark" data-astro-cid-kh7btl4r> <div class="container container-narrow" data-astro-cid-kh7btl4r> <span class="eyebrow" data-astro-cid-kh7btl4r>About</span> <h1 data-astro-cid-kh7btl4r>About The Healthy Project Podcast</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-kh7btl4r>
Public health conversations rooted in storytelling, culture, and community.
</p> </div> </section> <section class="about-body section" data-astro-cid-kh7btl4r> <div class="container container-narrow prose" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
The Healthy Project Podcast was created to make public health more human.
</p> <p data-astro-cid-kh7btl4r>
Hosted by Corey Dion Lewis, the show brings together leaders, advocates, clinicians,
        researchers, creators, and community voices to talk about the real factors that shape health.
</p> <p data-astro-cid-kh7btl4r>
The podcast explores more than health advice. It looks at the systems, stories,
        and lived experiences behind health outcomes.
</p> <p data-astro-cid-kh7btl4r>
From social determinants of health to prevention, mental health, chronic disease,
        food access, policy, and culture — each episode helps listeners better understand
        what it takes to build healthier communities.
</p> </div> </section> <section class="mission section-alt" data-astro-cid-kh7btl4r> <div class="container container-narrow" data-astro-cid-kh7btl4r> <span class="eyebrow" data-astro-cid-kh7btl4r>Our mission</span> <h2 data-astro-cid-kh7btl4r>To use storytelling to move public health forward.</h2> <p class="lead" data-astro-cid-kh7btl4r>
To use storytelling and public health conversations to educate, inspire,
        and equip people working to create healthier communities.
</p> </div> </section> <section class="host section" data-astro-cid-kh7btl4r> <div class="container host-grid" data-astro-cid-kh7btl4r> <div class="host-photo" data-astro-cid-kh7btl4r> <img src="/images/corey-placeholder.svg" alt="Corey Dion Lewis" width="540" height="640" data-astro-cid-kh7btl4r> </div> <div class="host-text" data-astro-cid-kh7btl4r> <span class="eyebrow" data-astro-cid-kh7btl4r>Meet the host</span> <h2 data-astro-cid-kh7btl4r>Corey Dion Lewis</h2> <p data-astro-cid-kh7btl4r>
Corey Dion Lewis is a public health storyteller, podcast host, health equity
          advocate, and founder of The Healthy Project.
</p> <p data-astro-cid-kh7btl4r>
Through podcasts, documentary-style content, writing, and community-centered media,
          Corey helps make public health more accessible, practical, and culturally relevant.
</p> <p data-astro-cid-kh7btl4r>
His work sits at the intersection of prevention, storytelling, community health,
          and health equity.
</p> <div class="host-actions" data-astro-cid-kh7btl4r> <a href="/invite-corey" class="btn btn-primary" data-astro-cid-kh7btl4r>Invite Corey to Speak</a> <a href="/contact" class="btn btn-ghost" data-astro-cid-kh7btl4r>Get in Touch</a> </div> </div> </div> </section> <section class="why section section-dark" data-astro-cid-kh7btl4r> <div class="container container-narrow" data-astro-cid-kh7btl4r> <span class="eyebrow" data-astro-cid-kh7btl4r>Why this work matters</span> <h2 data-astro-cid-kh7btl4r>Health is shaped by more than individual choices.</h2> <p data-astro-cid-kh7btl4r>
It's shaped by access, income, housing, food, transportation, stress, safety,
        education, and the systems people interact with every day.
</p> <p data-astro-cid-kh7btl4r>
The Healthy Project Podcast exists to tell those stories clearly, honestly,
        and in a way that moves people toward action.
</p> </div> </section> ${renderComponent($$result2, "ReviewCTA", $$ReviewCTA, { "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "NewsletterCTA", $$NewsletterCTA, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/about.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
