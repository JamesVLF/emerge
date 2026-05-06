import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const research = await getCollection('research', ({ data }) => !data.draft);
  const musings = await getCollection('musings', ({ data }) => !data.draft);
  const protocols = await getCollection('protocols', ({ data }) => !data.draft);

  const items = [
    ...research.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/research/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
    ...musings.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description ?? '',
      link: `/musings/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
    ...protocols.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description ?? '',
      link: `/protocols/${post.slug}/`,
      categories: post.data.tags ?? [],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'James LaFemina',
    description: 'Research notes, musings, and writing from James LaFemina.',
    site: context.site,
    items,
  });
}
