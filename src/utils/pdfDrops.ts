// Turns PDFs dropped into a content folder into posts automatically.
// Drop a PDF into src/content/<collection>/ (or public/<collection>/) and it
// gets its own page and list entry. Title and date come from the file name,
// e.g. "Dopamine_ELISA_Methods_3Mar2026.pdf" -> "Dopamine ELISA Methods", Mar 3 2026.
// A PDF already embedded by a .md post is skipped, so .md posts still win.
import fs from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

type Name = 'research' | 'protocols';

export interface PdfPost {
  slug: string;
  pdf: string; // URL of the PDF
  data: { title: string; description?: string; pubDate: Date; tags?: string[] };
}

const contentPdfs = import.meta.glob('/src/content/{research,protocols}/*.pdf', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const SMALL = new Set(['a', 'an', 'and', 'for', 'in', 'of', 'on', 'the', 'to', 'with', 'using', 'by', 'vs']);

function parseName(base: string): { title: string; date?: Date } {
  const m = (s: string) => MONTHS.indexOf(s.slice(0, 3).toLowerCase());
  const patterns: [RegExp, (r: RegExpMatchArray) => Date | undefined][] = [
    [/(\d{1,2})([A-Za-z]{3,9})(\d{4})/, (r) => (m(r[2]) >= 0 ? new Date(+r[3], m(r[2]), +r[1]) : undefined)], // 3Mar2026
    [/([A-Za-z]{3,9})[_-](\d{1,2})[_-](\d{4})/, (r) => (m(r[1]) >= 0 ? new Date(+r[3], m(r[1]), +r[2]) : undefined)], // Oct_17_2025
    [/(\d{1,2})[_-](\d{1,2})[_-](\d{4})/, (r) => new Date(+r[3], +r[1] - 1, +r[2])], // 1_26_2026
    [/(\d{4})[_-](\d{1,2})[_-](\d{1,2})/, (r) => new Date(+r[1], +r[2] - 1, +r[3])], // 2026-01-26
  ];
  let rest = base;
  let date: Date | undefined;
  for (const [re, toDate] of patterns) {
    const r = base.match(re);
    const d = r && toDate(r);
    if (r && d && !isNaN(d.valueOf())) {
      date = d;
      rest = base.replace(r[0], ' ');
      break;
    }
  }
  const words = rest
    .replace(/[_-]+/g, ' ')
    .replace(/\bfinal\b/gi, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const title = words
    .map((w, i) => (i > 0 && SMALL.has(w.toLowerCase()) ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1)))
    .join(' ');
  return { title: title || base, date };
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export async function getPdfPosts(name: Name): Promise<PdfPost[]> {
  const entries = await getCollection(name);
  const embedded = entries.map((e) => e.body).join('\n');
  const taken = new Set<string>(entries.map((e) => e.slug));

  const found: { file: string; url: string; abs: string }[] = [];
  for (const [p, url] of Object.entries(contentPdfs)) {
    if (p.startsWith(`/src/content/${name}/`)) {
      found.push({ file: path.basename(p), url, abs: path.join(process.cwd(), p) });
    }
  }
  const pubDir = path.join(process.cwd(), 'public', name);
  if (fs.existsSync(pubDir)) {
    for (const file of fs.readdirSync(pubDir)) {
      if (file.toLowerCase().endsWith('.pdf')) {
        found.push({ file, url: `/${name}/${file}`, abs: path.join(pubDir, file) });
      }
    }
  }

  const posts: PdfPost[] = [];
  for (const { file, url, abs } of found) {
    if (embedded.includes(file)) continue; // a .md post already shows this PDF
    const { title, date } = parseName(file.replace(/\.pdf$/i, ''));
    let slug = slugify(file.replace(/\.pdf$/i, ''));
    while (taken.has(slug)) slug += '-pdf';
    taken.add(slug);
    posts.push({
      slug,
      pdf: url,
      data: { title, pubDate: date ?? fs.statSync(abs).mtime },
    });
  }
  return posts;
}

export type AnyPost<N extends Name> = CollectionEntry<N> | PdfPost;
export const isPdfPost = (p: { slug: string }): p is PdfPost => 'pdf' in p;
