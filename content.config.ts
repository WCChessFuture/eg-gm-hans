import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        keywords: z.array(z.string()).optional(),
      }),
    }),
  },
})
