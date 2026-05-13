/**
 * RSS feed loader for The Healthy Project Podcast.
 * Fetches and parses the Transistor RSS feed at build time.
 */
import { XMLParser } from 'fast-xml-parser';

export const FEED_URL = 'https://feeds.transistor.fm/the-healthy-project-podcast';

export interface Episode {
  /** URL-safe slug derived from the title */
  slug: string;
  /** Numeric episode number (may be undefined for some episodes) */
  number?: number;
  /** Episode title */
  title: string;
  /** Plaintext intro (first paragraph) */
  excerpt: string;
  /** Full HTML show notes */
  contentHtml: string;
  /** Publish date as Date */
  pubDate: Date;
  /** Formatted publish date string */
  pubDateDisplay: string;
  /** URL to audio file (mp3) */
  audioUrl: string;
  /** Duration in seconds */
  durationSeconds: number;
  /** Duration display string e.g. "44 min" */
  durationDisplay: string;
  /** Episode artwork URL (falls back to show artwork) */
  imageUrl: string;
  /** Share link from Transistor */
  shareUrl: string;
  /** Guest name parsed from title (best-effort) */
  guest?: string;
  /** Keywords / tags from iTunes:keywords */
  tags: string[];
  /** Inferred topic categories (mapped from tags) */
  categories: string[];
  /** Episode page URL */
  url: string;
}

export interface ShowMeta {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  language: string;
  copyright: string;
}

export interface FeedData {
  show: ShowMeta;
  episodes: Episode[];
}

// ---------------------------------------------------------------
// Topic taxonomy — maps keyword fragments to canonical site topics.
// Lower-case substrings; order matters (first match wins).
// ---------------------------------------------------------------
const TOPIC_MAP: Array<{ topic: string; matches: string[] }> = [
  {
    topic: 'Health Equity',
    matches: ['health equity', 'equity', 'racism', 'racial', 'structural', 'disparit', 'systemic', 'access']
  },
  {
    topic: 'Community Health',
    matches: ['community', 'neighborhood', 'grassroots', 'local', 'outreach', 'organizing']
  },
  {
    topic: 'Mental Health',
    matches: ['mental health', 'mental', 'therapy', 'counseling', 'trauma', 'anxiety', 'depression', 'wellbeing']
  },
  {
    topic: 'Chronic Disease',
    matches: ['chronic', 'diabetes', 'hypertension', 'heart disease', 'cancer', 'obesity']
  },
  {
    topic: 'Public Health Leadership',
    matches: ['public health', 'leadership', 'executive', 'director', 'commissioner']
  },
  {
    topic: 'Prevention',
    matches: ['prevention', 'preventive', 'screening', 'vaccin', 'wellness']
  },
  {
    topic: 'Culture',
    matches: ['culture', 'storytelling', 'narrative', 'media', 'art', 'creative', 'identity']
  },
  {
    topic: 'Policy',
    matches: ['policy', 'legislation', 'government', 'medicaid', 'medicare', 'aca']
  },
  {
    topic: 'Social Determinants of Health',
    matches: ['social determin', 'food', 'housing', 'transportation', 'education', 'income', 'employment', 'poverty', 'sdoh']
  }
];

export const ALL_TOPICS = TOPIC_MAP.map((t) => t.topic);

// ---------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[‘’“”]/g, '')
    .replace(/&amp;/g, 'and')
    .replace(/&[a-z]+;/gi, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '';
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const mins = Math.round((total % 3600) / 60);
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins} min`;
}

function parseDurationToSeconds(raw: unknown): number {
  if (raw == null) return 0;
  const s = String(raw).trim();
  if (!s) return 0;
  // Numeric seconds
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  // hh:mm:ss or mm:ss
  const parts = s.split(':').map((p) => parseInt(p, 10));
  if (parts.some((n) => isNaN(n))) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return parts[0];
  return 0;
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function firstParagraph(html: string): string {
  const match = html.match(/<p>([\s\S]*?)<\/p>/i);
  const text = match ? stripHtml(match[1]) : stripHtml(html);
  return text.length > 280 ? text.substring(0, 277).trim() + '…' : text;
}

function parseGuestFromTitle(title: string): string | undefined {
  // Patterns like "... with Jane Doe", "... featuring Jane Doe", "Jane Doe on ..."
  let m = title.match(/\b(?:with|featuring|feat\.|ft\.)\s+([A-Z][A-Za-z.\-' ]+?)(?:\s+from\s+|\s+\||\s+-\s+|\s+–\s+|\s*\(|$)/);
  if (m) return m[1].trim();
  return undefined;
}

function inferCategories(tags: string[], title: string, contentHtml: string): string[] {
  const haystack = (tags.join(' ') + ' ' + title + ' ' + stripHtml(contentHtml)).toLowerCase();
  const found = new Set<string>();
  for (const { topic, matches } of TOPIC_MAP) {
    if (matches.some((m) => haystack.includes(m))) {
      found.add(topic);
    }
  }
  return [...found];
}

function pickImage(item: any, fallback: string): string {
  const iTunesImage = item?.['itunes:image']?.['@_href'] || item?.['itunes:image']?.href;
  if (typeof iTunesImage === 'string' && iTunesImage) return iTunesImage;
  return fallback;
}

// ---------------------------------------------------------------
// Public API
// ---------------------------------------------------------------
let _cache: FeedData | null = null;

export async function loadFeed(): Promise<FeedData> {
  if (_cache) return _cache;

  let xml: string;
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'HealthyProjectPodcastSite/1.0' }
    });
    if (!res.ok) throw new Error(`Feed returned ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.error('[episodes] Failed to fetch RSS feed:', err);
    // Return empty data so the build can still complete in offline dev
    _cache = {
      show: {
        title: 'The Healthy Project Podcast',
        description: 'A documentary-style audio archive of how communities confront structural health inequities.',
        link: 'https://thehealthyprojectpodcast.com',
        imageUrl: '',
        language: 'en',
        copyright: ''
      },
      episodes: []
    };
    return _cache;
  }

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    cdataPropName: '__cdata',
    parseAttributeValue: false,
    parseTagValue: false,
    trimValues: true,
    allowBooleanAttributes: true
  });

  const parsed = parser.parse(xml);
  const channel = parsed?.rss?.channel;
  if (!channel) {
    console.error('[episodes] Could not find channel in RSS feed');
    _cache = { show: { title: '', description: '', link: '', imageUrl: '', language: '', copyright: '' }, episodes: [] };
    return _cache;
  }

  const showImage =
    channel?.image?.url || channel?.['itunes:image']?.['@_href'] || '';

  const show: ShowMeta = {
    title: channel.title || 'The Healthy Project Podcast',
    description: stripHtml(channel.description || ''),
    link: channel.link || '',
    imageUrl: showImage,
    language: channel.language || 'en',
    copyright: channel.copyright || ''
  };

  const rawItems = channel.item;
  const itemsArr: any[] = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

  const episodes: Episode[] = itemsArr.map((item) => {
    const title = (item.title?.__cdata || item.title || '').toString().replace(/&amp;/g, '&').trim();
    const number = item['itunes:episode'] ? parseInt(String(item['itunes:episode']), 10) : undefined;

    // Description / content
    const descRaw =
      item['content:encoded']?.__cdata ||
      item['content:encoded'] ||
      item.description?.__cdata ||
      item.description ||
      '';
    const contentHtml = typeof descRaw === 'string' ? descRaw : String(descRaw);

    // Date
    const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();

    // Audio
    const enclosure = item.enclosure || {};
    const audioUrl = enclosure['@_url'] || '';

    // Duration
    const durationSeconds = parseDurationToSeconds(item['itunes:duration']);

    // Image
    const imageUrl = pickImage(item, show.imageUrl);

    // Share URL
    const shareUrl = item.link || '';

    // Keywords
    const keywordsRaw =
      item['itunes:keywords']?.__cdata || item['itunes:keywords'] || '';
    const tags = String(keywordsRaw || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const categories = inferCategories(tags, title, contentHtml);

    const slug = slugify(title) || (number ? `episode-${number}` : 'episode');

    return {
      slug,
      number: Number.isFinite(number as number) ? (number as number) : undefined,
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

  // Sort newest first
  episodes.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  _cache = { show, episodes };
  return _cache;
}

export async function getLatestEpisode(): Promise<Episode | null> {
  const data = await loadFeed();
  return data.episodes[0] || null;
}

export async function getAllEpisodes(): Promise<Episode[]> {
  const data = await loadFeed();
  return data.episodes;
}
