import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Cf86Ed6W.mjs';
import { g as getAllEpisodes, A as ALL_TOPICS, $ as $$EpisodeCard } from '../chunks/episodes_yNC0jt3r.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const episodes = await getAllEpisodes();
  const usedTopics = /* @__PURE__ */ new Set();
  for (const ep of episodes) {
    for (const c of ep.categories) usedTopics.add(c);
  }
  const filterTopics = ALL_TOPICS.filter((t) => usedTopics.has(t));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Podcast Episodes", "description": "Listen to every episode of The Healthy Project Podcast. Conversations with public health leaders, community advocates, and storytellers.", "data-astro-cid-qakc6c7h": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="ep-header section-dark" data-astro-cid-qakc6c7h> <div class="container" data-astro-cid-qakc6c7h> <span class="eyebrow" data-astro-cid-qakc6c7h>All episodes</span> <h1 data-astro-cid-qakc6c7h>Explore episodes</h1> <p class="lead" style="color: rgba(255,255,255,.8); max-width: 60ch;" data-astro-cid-qakc6c7h>
Listen to conversations with public health leaders, community advocates, clinicians,
        researchers, and storytellers working to build healthier communities.
</p> </div> </section> <section class="ep-controls" data-astro-cid-qakc6c7h> <div class="container" data-astro-cid-qakc6c7h> <div class="search-row" data-astro-cid-qakc6c7h> <label class="search-field" data-astro-cid-qakc6c7h> <span class="visually-hidden" data-astro-cid-qakc6c7h>Search episodes</span> <input id="epSearch" type="search" placeholder="Search by guest, topic, or keyword" autocomplete="off" aria-label="Search episodes" data-astro-cid-qakc6c7h> </label> <div class="search-meta" data-astro-cid-qakc6c7h> <span id="epCount" data-astro-cid-qakc6c7h>${episodes.length} episode${episodes.length === 1 ? "" : "s"}</span> <button type="button" id="clearFilters" class="link-btn" hidden data-astro-cid-qakc6c7h>Clear filters</button> </div> </div> <div class="filter-row" role="group" aria-label="Filter by topic" data-astro-cid-qakc6c7h> <button type="button" class="filter-chip active" data-filter="all" data-astro-cid-qakc6c7h>All Topics</button> ${filterTopics.map((t) => renderTemplate`<button type="button" class="filter-chip"${addAttribute(t, "data-filter")} data-astro-cid-qakc6c7h>${t}</button>`)} </div> </div> </section> <section class="ep-list-section" data-astro-cid-qakc6c7h> <div class="container" data-astro-cid-qakc6c7h> <div id="epList" class="ep-grid" data-astro-cid-qakc6c7h> ${episodes.map((ep) => renderTemplate`${renderComponent($$result2, "EpisodeCard", $$EpisodeCard, { "episode": ep, "data-astro-cid-qakc6c7h": true })}`)} </div> <div id="epEmpty" class="ep-empty" hidden data-astro-cid-qakc6c7h> <h3 data-astro-cid-qakc6c7h>No episodes match those filters.</h3> <p data-astro-cid-qakc6c7h>Try a different search term, or clear the filters to see all episodes.</p> <button type="button" id="clearEmpty" class="btn btn-ghost" data-astro-cid-qakc6c7h>Reset filters</button> </div> </div> </section> ` })}  `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/episodes/index.astro", void 0);

const $$file = "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/pages/episodes/index.astro";
const $$url = "/episodes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
