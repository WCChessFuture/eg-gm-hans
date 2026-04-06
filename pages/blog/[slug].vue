<template>
  <article class="py-24 md:py-32">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm mb-8">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
        Back to Blog
      </NuxtLink>

      <template v-if="page">
        <header class="mb-14 pb-8 border-b border-white/10">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {{ page.title }}
          </h1>
          <p v-if="page.description" class="text-lg text-text-secondary leading-relaxed mb-6">
            {{ page.description }}
          </p>
          <div class="flex items-center gap-4 text-sm text-text-secondary">
            <span v-if="page.date">{{ formatDate(page.date) }}</span>
            <span class="text-white/20">&bull;</span>
            <a href="https://endgame.ai" target="_blank" rel="noopener" class="text-primary hover:underline">Endgame.ai</a>
          </div>
        </header>

        <div class="prose-dark">
          <ContentRenderer :value="page" />
        </div>

        <div class="my-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-surface to-accent-pink/10 border border-white/10 text-center">
          <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-block mb-4 hover:opacity-80 transition-opacity">
            <img src="/img/endgame-logo.svg" alt="Endgame.ai" class="h-8 mx-auto" />
          </a>
          <p class="text-text-secondary text-sm mb-5 max-w-md mx-auto">
            Play chess, analyze games with AI, solve puzzles, and compete for $30K+ monthly prizes. Free to play.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all">
              Play Now
            </a>
            <a href="https://endgame.ai/analysis" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
              Try AI Analysis
            </a>
            <a href="https://endgame.ai/puzzles" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all">
              Daily Puzzles
            </a>
          </div>
        </div>

        <footer class="pt-8 border-t border-white/10">
          <div class="card p-8 md:p-10">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                <img src="/img/hans-profile.png" alt="Hans Niemann" class="w-full h-full object-cover" />
              </div>
              <div class="text-center md:text-left flex-1">
                <h3 class="text-lg font-semibold text-white mb-1">Built by GM Hans Niemann</h3>
                <p class="text-text-secondary text-sm">
                  Endgame.ai is the chess platform Hans built after the Sinquefield Cup. Free to play, AI-powered, with $30K+ monthly prizes.
                </p>
              </div>
              <a href="https://endgame.ai" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all flex-shrink-0">
                Play on Endgame.ai
              </a>
            </div>
          </div>
        </footer>
      </template>

      <template v-else>
        <div class="text-center py-20">
          <h1 class="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p class="text-text-secondary mb-8">The article you're looking for doesn't exist.</p>
          <NuxtLink to="/blog" class="btn-primary">Back to Blog</NuxtLink>
        </div>
      </template>
    </div>
  </article>
</template>

<script setup>
const route = useRoute()
const slug = String(route.params.slug)

const { data: page } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

if (page.value) {
  const p = page.value
  useHead({
    title: `${p.title} — Hans Niemann & Endgame.ai`,
    meta: [
      { name: 'description', content: p.description || '' },
      { property: 'og:title', content: p.title },
      { property: 'og:description', content: p.description || '' },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:title', content: p.title },
      { name: 'twitter:description', content: p.description || '' },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: p.title,
          description: p.description || '',
          datePublished: p.date || '',
          dateModified: p.date || '',
          author: {
            '@type': 'Organization',
            name: 'Endgame',
            url: 'https://endgame.ai',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Endgame',
            url: 'https://endgame.ai',
          },
        }),
      },
    ],
  })
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
