import { z, defineCollection } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const feedCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    pubDate: z.date(),
    type: z.enum(['text', 'image', 'video', 'audio', 'link']),
    media: z.string().optional(),
    link: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const musingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    category: z.enum(['writing', 'music', 'observation', 'story']).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'research': researchCollection,
  'feed': feedCollection,
  'musings': musingsCollection,
};
