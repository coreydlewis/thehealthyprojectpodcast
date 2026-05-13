import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found", "description": "That page doesn't exist.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="nf section-dark" data-astro-cid-zetdm5md> <div class="container container-narrow center" data-astro-cid-zetdm5md> <span class="eyebrow" data-astro-cid-zetdm5md>404</span> <h1 data-astro-cid-zetdm5md>That episode wandered off.</h1> <p class="lead" style="color: rgba(255,255,255,.82);" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist — or hasn't been recorded yet.
</p> <div class="nf-actions" data-astro-cid-zetdm5md> <a href="/" class="btn btn-accent" data-astro-cid-zetdm5md>Return Home</a> <a href="/episodes" class="btn btn-ghost-light" data-astro-cid-zetdm5md>Browse Episodes</a> </div> </div> </section> ` })} `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/404.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
