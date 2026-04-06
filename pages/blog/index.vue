<template>
  <div class="py-24 md:py-32">
    <div class="max-w-content mx-auto px-4 sm:px-6">
      <div class="mb-16">
        <p class="section-subheading mb-4">Endgame Blog</p>
        <h1 class="section-heading mb-6">Articles &amp; Insights</h1>
        <p class="text-text-secondary text-lg max-w-2xl">
          Chess strategy, platform updates, AI analysis guides, and the story behind Endgame.ai.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <h2 class="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
              {{ post.title }}
            </h2>
            <p class="text-sm text-text-secondary flex-1 leading-relaxed">
              {{ post.description }}
            </p>
            <span class="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">
              Read article
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-12 p-8 rounded-2xl bg-surface border border-white/10 flex flex-col md:flex-row items-center gap-6">
        <div class="flex-1 text-center md:text-left">
          <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-block mb-3">
            <img :src="assetUrl('/img/endgame-logo.svg')" alt="Endgame.ai" class="h-6" />
          </a>
          <p class="text-text-secondary text-sm">
            The AI-native chess platform built by GM Hans Niemann. Play, analyze, and compete for $30K+ monthly.
          </p>
        </div>
        <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all flex-shrink-0">
          Play on Endgame.ai
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { assetUrl } = useBaseUrl()

useHead({
  title: 'Blog — Hans Niemann & Endgame.ai',
  meta: [
    { name: 'description', content: 'Articles about chess strategy, AI analysis, platform comparisons, Hans Niemann\'s playing style, and the Netflix Untold: Chess Mates documentary.' },
  ],
})

const posts = [
  {
    slug: 'story-hans-niemann-chess-platform',
    title: "Hans Niemann Built a Chess Platform. Here's Why.",
    description: 'The story of how GM Hans Niemann went from the most controversial figure in modern chess to building Endgame.ai.',
    date: 'March 28, 2026',
    image: assetUrl('/img/hans-niemann-sinquefield.jpg'),
  },
  {
    slug: 'untold-chess-mates-everything-you-need-to-know',
    title: "Netflix's Untold: Chess Mates — Everything You Need to Know",
    description: 'The full story of the Carlsen-Niemann controversy. Premiering April 7, 2026 on Netflix.',
    date: 'March 30, 2026',
    image: assetUrl('/img/netflix-chess.jpg'),
  },
  {
    slug: 'chess-platform-comparison-2026',
    title: 'Best Chess Platforms in 2026: Endgame.ai vs Chess.com vs Lichess',
    description: 'An honest comparison of the three major chess platforms — features, pricing, AI analysis, and more.',
    date: 'March 31, 2026',
    image: assetUrl('/img/chess-platform.jpg'),
  },
  {
    slug: 'play-like-hans-niemann',
    title: 'Play Like Hans Niemann: AI Analysis of His Playing Style',
    description: "A deep dive into Niemann's aggressive chess style, favorite openings, notable games, and practical tips.",
    date: 'April 1, 2026',
    image: assetUrl('/img/chess-style.jpg'),
  },
  {
    slug: 'chess-ai-analysis-guide',
    title: 'How AI Is Changing Chess Analysis (And How to Use It Free)',
    description: 'From Stockfish to neural networks to cloud AI. The complete guide to modern chess analysis tools.',
    date: 'April 1, 2026',
    image: assetUrl('/img/chess-ai-analysis.jpg'),
  },
]
</script>
