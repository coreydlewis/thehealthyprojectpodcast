import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_D57DNOQO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { XMLParser } from 'fast-xml-parser';

const $$Astro = createAstro("https://thehealthyprojectpodcast.com");
const $$EpisodeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EpisodeCard;
  const { episode } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="ep-card"${addAttribute(episode.title.toLowerCase(), "data-title")}${addAttribute(episode.categories.join("|").toLowerCase(), "data-tags")}${addAttribute(episode.tags.join("|").toLowerCase(), "data-keywords")}${addAttribute((episode.guest || "").toLowerCase(), "data-guest")} data-astro-cid-7apkpmh7> <a${addAttribute(episode.url, "href")} class="ep-card-art" aria-hidden="true" tabindex="-1" data-astro-cid-7apkpmh7> ${episode.imageUrl && renderTemplate`<img${addAttribute(episode.imageUrl, "src")} alt="" loading="lazy" width="600" height="600" data-astro-cid-7apkpmh7>`} </a> <div class="ep-card-body" data-astro-cid-7apkpmh7> <div class="ep-card-meta" data-astro-cid-7apkpmh7> ${episode.number && renderTemplate`<span data-astro-cid-7apkpmh7>Ep. ${episode.number}</span>`} <span data-astro-cid-7apkpmh7>${episode.pubDateDisplay}</span> ${episode.durationDisplay && renderTemplate`<span data-astro-cid-7apkpmh7>${episode.durationDisplay}</span>`} </div> <h3 class="ep-card-title" data-astro-cid-7apkpmh7> <a${addAttribute(episode.url, "href")} data-astro-cid-7apkpmh7>${episode.title}</a> </h3> ${episode.guest && renderTemplate`<p class="ep-card-guest" data-astro-cid-7apkpmh7>with ${episode.guest}</p>`} <p class="ep-card-excerpt" data-astro-cid-7apkpmh7>${episode.excerpt}</p> ${episode.categories.length > 0 && renderTemplate`<div class="ep-card-tags" data-astro-cid-7apkpmh7> ${episode.categories.slice(0, 3).map((c) => renderTemplate`<span class="tag" data-astro-cid-7apkpmh7>${c}</span>`)} </div>`} <div class="ep-card-actions" data-astro-cid-7apkpmh7> <a${addAttribute(episode.url, "href")} class="btn btn-primary" data-astro-cid-7apkpmh7>Listen Now</a> <a${addAttribute(episode.url, "href")} class="btn btn-ghost" data-astro-cid-7apkpmh7>View Episode</a> </div> </div> </article> `;
}, "/sessions/charming-gifted-clarke/mnt/The Healthy Project Podcast Website/src/components/EpisodeCard.astro", void 0);

const FEED_URL = "https://feeds.transistor.fm/the-healthy-project-podcast";
const TOPIC_MAP = [
  {
    topic: "Health Equity",
    matches: ["health equity", "equity", "racism", "racial", "structural", "disparit", "systemic", "access"]
  },
  {
    topic: "Community Health",
    matches: ["community", "neighborhood", "grassroots", "local", "outreach", "organizing"]
  },
  {
    topic: "Mental Health",
    matches: ["mental health", "mental", "therapy", "counseling", "trauma", "anxiety", "depression", "wellbeing"]
  },
  {
    topic: "Chronic Disease",
    matches: ["chronic", "diabetes", "hypertension", "heart disease", "cancer", "obesity"]
  },
  {
    topic: "Public Health Leadership",
    matches: ["public health", "leadership", "executive", "director", "commissioner"]
  },
  {
    topic: "Prevention",
    matches: ["prevention", "preventive", "screening", "vaccin", "wellness"]
  },
  {
    topic: "Culture",
    matches: ["culture", "storytelling", "narrative", "media", "art", "creative", "identity"]
  },
  {
    topic: "Policy",
    matches: ["policy", "legislation", "government", "medicaid", "medicare", "aca"]
  },
  {
    topic: "Social Determinants of Health",
    matches: ["social determin", "food", "housing", "transportation", "education", "income", "employment", "poverty", "sdoh"]
  }
];
const ALL_TOPICS = TOPIC_MAP.map((t) => t.topic);
function slugify(text) {
  return text.toLowerCase().replace(/[‘’“”]/g, "").replace(/&amp;/g, "and").replace(/&[a-z]+;/gi, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").substring(0, 80);
}
function formatDate(d) {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return "";
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const mins = Math.round(total % 3600 / 60);
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins} min`;
}
function parseDurationToSeconds(raw) {
  if (raw == null) return 0;
  const s = String(raw).trim();
  if (!s) return 0;
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  const parts = s.split(":").map((p) => parseInt(p, 10));
  if (parts.some((n) => isNaN(n))) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return parts[0];
  return 0;
}
function stripHtml(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}
function firstParagraph(html) {
  const match = html.match(/<p>([\s\S]*?)<\/p>/i);
  const text = match ? stripHtml(match[1]) : stripHtml(html);
  return text.length > 280 ? text.substring(0, 277).trim() + "…" : text;
}
function parseGuestFromTitle(title) {
  let m = title.match(/\b(?:with|featuring|feat\.|ft\.)\s+([A-Z][A-Za-z.\-' ]+?)(?:\s+from\s+|\s+\||\s+-\s+|\s+–\s+|\s*\(|$)/);
  if (m) return m[1].trim();
  return void 0;
}
function inferCategories(tags, title, contentHtml) {
  const haystack = (tags.join(" ") + " " + title + " " + stripHtml(contentHtml)).toLowerCase();
  const found = /* @__PURE__ */ new Set();
  for (const { topic, matches } of TOPIC_MAP) {
    if (matches.some((m) => haystack.includes(m))) {
      found.add(topic);
    }
  }
  return [...found];
}
function pickImage(item, fallback) {
  const iTunesImage = item?.["itunes:image"]?.["@_href"] || item?.["itunes:image"]?.href;
  if (typeof iTunesImage === "string" && iTunesImage) return iTunesImage;
  return fallback;
}
let _cache = null;
async function loadFeed() {
  if (_cache) return _cache;
  let xml;
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "HealthyProjectPodcastSite/1.0" }
    });
    if (!res.ok) throw new Error(`Feed returned ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.error("[episodes] Failed to fetch RSS feed:", err);
    _cache = {
      show: {
        title: "The Healthy Project Podcast",
        description: "A documentary-style audio archive of how communities confront structural health inequities.",
        link: "https://thehealthyprojectpodcast.com",
        imageUrl: "",
        language: "en",
        copyright: ""
      },
      episodes: []
    };
    return _cache;
  }
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    cdataPropName: "__cdata",
    parseAttributeValue: false,
    parseTagValue: false,
    trimValues: true,
    allowBooleanAttributes: true
  });
  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel;
  if (!channel) {
    console.error("[episodes] Could not find channel in RSS feed");
    _cache = { show: { title: "", description: "", link: "", imageUrl: "", language: "", copyright: "" }, episodes: [] };
    return _cache;
  }
  const showImage = channel?.image?.url || channel?.["itunes:image"]?.["@_href"] || "";
  const show = {
    title: channel.title || "The Healthy Project Podcast",
    description: stripHtml(channel.description || ""),
    link: channel.link || "",
    imageUrl: showImage,
    language: channel.language || "en",
    copyright: channel.copyright || ""
  };
  const rawItems = channel.item;
  const itemsArr = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];
  const episodes = itemsArr.map((item) => {
    const title = (item.title?.__cdata || item.title || "").toString().replace(/&amp;/g, "&").trim();
    const number = item["itunes:episode"] ? parseInt(String(item["itunes:episode"]), 10) : void 0;
    const descRaw = item["content:encoded"]?.__cdata || item["content:encoded"] || item.description?.__cdata || item.description || "";
    const contentHtml = typeof descRaw === "string" ? descRaw : String(descRaw);
    const pubDate = item.pubDate ? new Date(item.pubDate) : /* @__PURE__ */ new Date();
    const enclosure = item.enclosure || {};
    const audioUrl = enclosure["@_url"] || "";
    const durationSeconds = parseDurationToSeconds(item["itunes:duration"]);
    const imageUrl = pickImage(item, show.imageUrl);
    const shareUrl = item.link || "";
    const keywordsRaw = item["itunes:keywords"]?.__cdata || item["itunes:keywords"] || "";
    const tags = String(keywordsRaw || "").split(",").map((t) => t.trim()).filter(Boolean);
    const categories = inferCategories(tags, title, contentHtml);
    const slug = slugify(title) || (number ? `episode-${number}` : "episode");
    return {
      slug,
      number: Number.isFinite(number) ? number : void 0,
      title,
      excerpt: firstParagraph(contentHtml),
      contentHtml,
      pubDate,
      pubDateDisplay: formatDate(pubDate),
      audioUrl,
      durationSeconds,
      durationDisplay: formatDuration(durationSeconds),
      imageUrl,
      shareUrl,
      guest: parseGuestFromTitle(title),
      tags,
      categories,
      url: `/episodes/${slug}/`
    };
  });
  episodes.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  _cache = { show, episodes };
  return _cache;
}
async function getAllEpisodes() {
  const data = await loadFeed();
  return data.episodes;
}

export { $$EpisodeCard as $, ALL_TOPICS as A, getAllEpisodes as g };
