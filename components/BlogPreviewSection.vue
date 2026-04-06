<template>
  <section class="py-24 md:py-32 bg-surface">
    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="flex items-end justify-between mb-12">
        <div>
          <p class="section-subheading mb-4">Latest Articles</p>
          <h2 class="section-heading">From the Blog</h2>
        </div>
        <NuxtLink to="/blog" class="hidden sm:inline-flex items-center gap-2 text-primary hover:underline font-medium">
          View all
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="card group flex flex-col"
        >
          <div class="h-48 bg-elevated relative overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <p class="text-xs text-text-secondary mb-2">{{ post.date }}</p>
            <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
              {{ post.title }}
            </h3>
            <p class="text-sm text-text-secondary flex-1 leading-relaxed">{{ post.excerpt }}</p>
            <span class="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
              Read more
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <div class="sm:hidden text-center mt-8">
        <NuxtLink to="/blog" class="btn-outline">View All Articles</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { assetUrl } = useBaseUrl()

const posts = [
  {
    slug: 'untold-chess-mates-everything-you-need-to-know',
    title: "Netflix's Untold: Chess Mates — Everything You Need to Know",
    excerpt: 'The full story of the Carlsen-Niemann controversy. Premiering April 7, 2026 on Netflix.',
    date: 'March 30, 2026',
    image: assetUrl('/img/netflix-chess.jpg'),
  },
  {
    slug: 'play-like-hans-niemann',
    title: 'Play Like Hans Niemann: AI Analysis of His Playing Style',
    excerpt: "A deep dive into Niemann's aggressive chess style, favorite openings, and notable games.",
    date: 'April 1, 2026',
    image: assetUrl('/img/chess-style.jpg'),
  },
  {
    slug: 'chess-ai-analysis-guide',
    title: 'How AI Is Changing Chess Analysis (And How to Use It Free)',
    excerpt: 'From Stockfish to neural networks to cloud-based AI. The complete guide to modern chess analysis tools.',
    date: 'April 1, 2026',
    image: assetUrl('/img/chess-ai-analysis.jpg'),
  },
]
</script>
