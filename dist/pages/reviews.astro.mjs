import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, L as LINKS } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rate & Review The Healthy Project Podcast", "description": "Leave a rating and review on Apple Podcasts to help more people discover conversations about health equity, prevention, and community health.", "data-astro-cid-alfx3e2m": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="rev-hero section-dark" data-astro-cid-alfx3e2m> <div class="container container-narrow" data-astro-cid-alfx3e2m> <span class="eyebrow" data-astro-cid-alfx3e2m>Reviews</span> <h1 data-astro-cid-alfx3e2m>Rate &amp; review The Healthy Project Podcast</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-alfx3e2m>
Your review helps more people discover conversations about health equity,
        prevention, and community health.
</p> <a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" class="btn btn-accent" style="margin-top: 1rem;" data-astro-cid-alfx3e2m>
Leave a Review on Apple Podcasts
</a> </div> </section> <section class="section" data-astro-cid-alfx3e2m> <div class="container container-narrow prose" data-astro-cid-alfx3e2m> <p data-astro-cid-alfx3e2m>
Thank you for listening to The Healthy Project Podcast.
</p> <p data-astro-cid-alfx3e2m>
If an episode made you think differently, helped you in your work, or gave you
        language for something you care about, take a moment to leave a rating and review
        on Apple Podcasts.
</p> <p data-astro-cid-alfx3e2m>
Your support helps the show reach more public health professionals, community
        advocates, students, healthcare leaders, and people working to build healthier
        communities.
</p> </div> </section> <section class="section section-alt" data-astro-cid-alfx3e2m> <div class="container container-narrow" data-astro-cid-alfx3e2m> <span class="eyebrow" data-astro-cid-alfx3e2m>How to leave a review</span> <h2 data-astro-cid-alfx3e2m>It takes about 60 seconds.</h2> <ol class="how-steps" data-astro-cid-alfx3e2m> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>1</span><div data-astro-cid-alfx3e2m>Click the button below.</div></li> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>2</span><div data-astro-cid-alfx3e2m>Open The Healthy Project Podcast in Apple Podcasts.</div></li> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>3</span><div data-astro-cid-alfx3e2m>Tap the rating section.</div></li> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>4</span><div data-astro-cid-alfx3e2m>Choose your star rating.</div></li> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>5</span><div data-astro-cid-alfx3e2m>Write a short review.</div></li> <li data-astro-cid-alfx3e2m><span data-astro-cid-alfx3e2m>6</span><div data-astro-cid-alfx3e2m>Submit. That's it.</div></li> </ol> <a${addAttribute(LINKS.applePodcasts, "href")} target="_blank" rel="noopener" class="btn btn-primary" data-astro-cid-alfx3e2m>
Leave a Review on Apple Podcasts
</a> <p class="form-note" style="margin-top: 1rem;" data-astro-cid-alfx3e2m>
Apple Podcasts ratings and reviews are managed through Apple and are visible to creators in
        Apple Podcasts Connect.
</p> </div> </section> <section class="section testimonial-form-section" data-astro-cid-alfx3e2m> <div class="container container-narrow" data-astro-cid-alfx3e2m> <span class="eyebrow" data-astro-cid-alfx3e2m>Optional</span> <h2 data-astro-cid-alfx3e2m>Want to share a note with Corey too?</h2> <p data-astro-cid-alfx3e2m>
You can also send a short message about what the podcast means to you. This does not
        replace your Apple Podcasts review, but it helps us understand what conversations are
        connecting with listeners.
</p> <form class="form-grid" name="reviews-note" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks/?form=reviews-note" data-astro-cid-alfx3e2m> <input type="hidden" name="form-name" value="reviews-note" data-astro-cid-alfx3e2m> <p class="hp-field" data-astro-cid-alfx3e2m><label data-astro-cid-alfx3e2m>Don't fill this out: <input name="bot-field" data-astro-cid-alfx3e2m></label></p> <div class="form-row" data-astro-cid-alfx3e2m> <div class="field" data-astro-cid-alfx3e2m> <label for="r-name" data-astro-cid-alfx3e2m>Name</label> <input id="r-name" type="text" name="name" required data-astro-cid-alfx3e2m> </div> <div class="field" data-astro-cid-alfx3e2m> <label for="r-email" data-astro-cid-alfx3e2m>Email</label> <input id="r-email" type="email" name="email" required data-astro-cid-alfx3e2m> </div> </div> <div class="form-row" data-astro-cid-alfx3e2m> <div class="field" data-astro-cid-alfx3e2m> <label for="r-rating" data-astro-cid-alfx3e2m>Star Rating</label> <select id="r-rating" name="rating" data-astro-cid-alfx3e2m> <option value="" data-astro-cid-alfx3e2m>Choose a rating</option> <option value="5" data-astro-cid-alfx3e2m>★★★★★ — 5 stars</option> <option value="4" data-astro-cid-alfx3e2m>★★★★☆ — 4 stars</option> <option value="3" data-astro-cid-alfx3e2m>★★★☆☆ — 3 stars</option> <option value="2" data-astro-cid-alfx3e2m>★★☆☆☆ — 2 stars</option> <option value="1" data-astro-cid-alfx3e2m>★☆☆☆☆ — 1 star</option> </select> </div> <div class="field" data-astro-cid-alfx3e2m> <label for="r-fav" data-astro-cid-alfx3e2m>Favorite Episode</label> <input id="r-fav" type="text" name="favorite_episode" placeholder="Optional" data-astro-cid-alfx3e2m> </div> </div> <div class="field" data-astro-cid-alfx3e2m> <label for="r-msg" data-astro-cid-alfx3e2m>Your Message</label> <textarea id="r-msg" name="message" required data-astro-cid-alfx3e2m></textarea> </div> <div data-astro-cid-alfx3e2m> <button type="submit" class="btn btn-primary" data-astro-cid-alfx3e2m>Send My Note</button> </div> <p class="form-note" data-astro-cid-alfx3e2m>After you send this, we'd love for you to leave a public review on Apple Podcasts too.</p> </form> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/reviews.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/reviews.astro";
const $$url = "/reviews";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reviews,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
